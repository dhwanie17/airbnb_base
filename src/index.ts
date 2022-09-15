import express, { Express, Request, Response } from "express";
import i18next from "i18next";
import middleware from "i18next-http-middleware";
import Backend from "i18next-fs-backend";

i18next
    .use(Backend)
    .use(middleware.LanguageDetector)
    .init({
        fallbackLng: "en",
        backend: {
            loadPath: "./localization/{{lng}}/en.json",
        },
    });

const app: Express = express();
app.use(middleware.handle(i18next));
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
    res.send(req.t("serverConnect"));
});

app.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`);
});
