"use strict"

const R = require("ramda")
const aws = require('aws-sdk')

module.exports = () =>
{
    const S3_BUCKET = process.env.S3_BUCKET

    function list (next)
    {
        return (data) =>
        {
        }
    }

    function get (next)
    {
        return (data) =>
        {
        }
    }

    function upload (next)
    {
        return (data) =>
        {
        }
    }

    function erase (next)
    {
        return (data) =>
        {
        }
    }

    return {
        list: list,
        get: get,
        upload: upload,
        erase: erase
    }
}
