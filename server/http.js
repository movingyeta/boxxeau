"use strict"

const express = require('express')
const bodyParser = require('body-parser')
const R = require("ramda")

module.exports = () =>
{
    const PROJECT_ROOT = __dirname + '/..'
    let app = express()
    app.use(express.static(`${PROJECT_ROOT}/static`))
    app.use(bodyParser.urlencoded({ extended: false }))
    app.listen(process.env.PORT, () => 
            console.log(`Server up in port ${process.env.PORT}`))

    function get (uri, next)
    {
        console.log("http.get", uri)
        app.get(uri, (req, res) => next({ 
            express: {
                req, res 
            }
        }))
    }

    function post (uri, next)
    {
        console.log("http.post", uri)
        app.post(uri, (req, res) => next({ 
            express: {
                req, res 
            }
        }))
    }

    function _delete (uri, next)
    {
        console.log("http.delete", uri)
        app.delete(uri, (req, res) => next({
            express: {
                req, res
            }
        }))
    }

    function render (uri, name)
    {
        get(uri, (data) =>
        {
            data.express.res.sendFile(`${name}.html`, {
                root: `${PROJECT_ROOT}/static/html`
            })
        })
    }

    function result ()
    {
        return (data) =>
        {
            console.log("http.result", data.result)
            data.express.res.send(JSON.stringify(data.result))
        }
    }

    return {
        get: get,
        post: post,
        delete: _delete,
        render: render,
        result: result
    }
}
