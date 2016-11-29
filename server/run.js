const express = require('express')
const aws = require('aws-sdk')
const bodyParser = require('body-parser')

const app = express()

const project_route = (route) => 
    __dirname + '/..' + route

const send_html = (name) => 
    (req, res) => {
        res.sendFile(name + '.html', {
            root: project_route('/static/html')
        })
    }

app.use(express.static(project_route('/static')))
app.use(bodyParser.urlencoded({ extended: false }))
app.listen(process.env.PORT, () => console.log("Server up"))

const S3_BUCKET = process.env.S3_BUCKET

app.get('/', send_html('files-upload'))

/*
 * Upon request, return JSON containing the temporarily-signed S3 request and
 * the anticipated URL of the image.
 */
app.get('/sign-s3', (req, res) => {
    const s3 = new aws.S3()
    const fileName = req.query['file-name']
    const fileType = req.query['file-type']
    const s3Params = {
        Bucket: S3_BUCKET,
        Key: fileName,
        Expires: 60,
        ContentType: fileType,
        ACL: 'public-read'
    }

    s3.getSignedUrl('putObject', s3Params, (err, data) => {
        if (err) {
            console.log(err)
            return res.end()
        }
        const returnData = {
            signedRequest: data,
            url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
        }
        res.write(JSON.stringify(returnData))
        res.end()
    })
})

/*
 * Respond to POST requests to /submit_form.
 * This function needs to be completed to handle the information in
 * a way that suits your application.
 */
app.post('/save-details', (req, res) => {
    console.log("/save-details recived", req.body)
})
