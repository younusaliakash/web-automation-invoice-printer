import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export default async function generateHtmlInvoice() {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    const htmlInvoice = await fs.readFile(__dirname + '/invoice.html', 'utf8');
    return htmlInvoice
}
