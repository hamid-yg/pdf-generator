const dotenv = require("dotenv")
const cloudinary = require("cloudinary")

dotenv.config()

cloudinary.config({
    cloud_name: 'digitallafrica',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

exports.uploads = (file) => {
    return new Promise(resolve => {
		cloudinary.uploader.upload(file, (result) => {
			resolve({url: result.url, id: result.public_id})
		}, {resource_type: "auto"})
	})
}