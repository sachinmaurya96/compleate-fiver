import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "fiver_web");
  data.append("cloud_name","dmyheslzx")

  try {
    const res = await axios.post("https://api.cloudinary.com/v1_1/dmyheslzx/image/upload", data);
    const { url } = res.data;
    console.log("url",url)
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;