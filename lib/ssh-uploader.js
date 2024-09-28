const axios = require('axios')
const FormData = require('form-data')
const { fromBuffer } = require('file-type')

async function uploaderSSA(buffer) {
  try {
  const { ext } = await fromBuffer(buffer);
  let form = new FormData();
  form.append("file", buffer, "tmp." + ext);
    const { data } = await axios.post("https://upload.ssateam.my.id/upload", form, {
        headers: {
          accept: "application/json",
          ...form.getHeaders(), 
          "Content-Type": "multipart/form-data",
        },
      },
    );
    return data;
  } catch (e) {
    console.log(e);
  }
}

module.exports = { uploaderSSA }