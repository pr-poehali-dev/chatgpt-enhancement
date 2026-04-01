import type { RequestHandler } from "@/types";

// Contact form handler - sends messages to Telegram
const handler: RequestHandler = async (req, res) => {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.status(204).end();
    return;
  }

  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { name, email, phone, message } = req.body as {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  };

  if (!name || !message) {
    res.status(400).json({ error: "Поля 'Имя' и 'Сообщение' обязательны" });
    return;
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set");
    res.status(500).json({ error: "Сервер не настроен" });
    return;
  }

  const text = [
    "📩 *Новая заявка с сайта*",
    "",
    `👤 *Имя:* ${name}`,
    email ? `📧 *Email:* ${email}` : null,
    phone ? `📞 *Телефон:* ${phone}` : null,
    `💬 *Сообщение:*\n${message}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "Markdown",
        }),
      }
    );

    const data = await response.json() as { ok: boolean; description?: string };

    if (!data.ok) {
      console.error("Telegram API error:", data.description);
      res.status(500).json({ error: "Ошибка при отправке в Telegram" });
      return;
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: "Сетевая ошибка" });
  }
};

export default handler;