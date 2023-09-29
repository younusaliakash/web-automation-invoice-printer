import express from 'express';
import generatePdfInvoice from './invoice-printer/generate-invoice-pdf.mjs';
import path from 'path'
const app = express();
const PORT = 3000

app.get('/', async (req, res) => {
    await generatePdfInvoice();
    res.attachment('invoice.pdf')
    res.sendFile(path.resolve('./data/invoice.pdf'))
})

app.listen(PORT,() => {
    console.log(`Generating invoice from port ${PORT}`)
})

