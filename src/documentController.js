const fs = require('fs');
const path = require('path')
const PDFDocument = require('pdfkit');
const cloudinary = require('./cloudinary')

exports.document = async (req, res) => {
	try {
		const body = req.body
		const pdfPath = path.join('documents', body["filename"] + '.pdf')
		const pdfDoc = new PDFDocument()

		res.setHeader('Content-Disposition', 'attachment; filename="' + body["filename"] + '" ')
		res.setHeader('Access-Control-Allow-Origin', '*')
		res.setHeader('Content-Type', 'application/pdf')
		res.status(201)
		pdfDoc.pipe(fs.createWriteStream(pdfPath));
		await pdfDoc.pipe(res);
		pdfDoc.text(body["content"])

		cloudinary.uploads(pdfPath).then((result) => {
			const pdfFile = {
				pdfName: body["filename"],
				pdfUrl: result.url,
				pdfId: result.id
			}
			console.log('Uploading PDF to cloudinary', pdfFile.pdfUrl)
		})
		pdfDoc.end();
	} catch (err) {
        res.status(400).json({ message: 'An error occured in process' });
    }
}
