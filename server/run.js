"use strict"

const http = require('./http')()
const files = require('./files')()


http.render("/", "index")

http.get("/files",
    files.list(
        http.result()))

http.get("/files/:id",
    files.get(
        http.result()))

http.post("/files",
    files.upload(
        http.result()))

http.delete("/files/:id",
    files.erase(
        http.result()))
