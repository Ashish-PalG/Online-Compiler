const express = require('express');
const cors = require("cors");
const Axios = require("axios");
const { response } = require('express');
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.post('/compile', (req, res) => {
    let code = req.body.code;
    let language = req.body.language;
    let input = req.body.input;
    let version = req.body.version;
    if (language === 'python') {
        language = 'py'
    }

    let data = ({
        "versionIndex":version,
        "script": code,
        "language": language,
        "stdin": input,
        "clientId":"8f20ec74e7190b5284bf08dfe3779f71",
        "clientSecret":"f3dfcd19f5332d48018be7e4964f3d97981f182a39590e710a92b3ada7cbed06"
    });
    let config = {
        method: 'post',
        url: 'https://api.jdoodle.com/v1/execute',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    Axios(config).then((response) => {
        res.send(response.data)
        console.log(reponse.data)
    }).catch((error) => {
        console.log(error);
    });
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});