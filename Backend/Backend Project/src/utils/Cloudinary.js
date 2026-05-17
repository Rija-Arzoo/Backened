import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

/*cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});*/

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            //return "Could not find the path of file.";
            return null;
        }
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        });

        console.log("Checking API Key at upload time:", process.env.CLOUDINARY_API_KEY ? "EXISTS" : "MISSING");
        //upload on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
            //overwrite: true,
            //notification_url: "https://mysite.example.com/notify_endpoint"
        })
        //file has uploaded sucessfully
        console.log("file has uploaded sucessfully", response.url);
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }
        return response;

    } catch (error) {
        console.error("!!! CLOUDINARY UPLOAD ERROR DETAILS !!!\n", error);
        //remove locally saved temporary file as the upload operation got failed.
        if (localFilePath && fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }
        return null;
    }
}

export { uploadOnCloudinary };