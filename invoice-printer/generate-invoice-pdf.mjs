import puppeteer from "puppeteer";
import generateHtmlInvoice from "./invoice-generator.mjs";

export default async function generatePdfInvoice() {
    const browser = await puppeteer.launch({ headless: 'new'})
    const page = await browser.newPage();
    const htmlInvoice = await generateHtmlInvoice();
    await page.setContent(htmlInvoice);
    await page.evaluateHandle('document.fonts.ready');
    await page.pdf({ path: 'data/invoice.pdf', printBackground: true, format: 'A4' });
    await page.close();
}