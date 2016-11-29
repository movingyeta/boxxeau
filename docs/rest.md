# Rest objects

GET     /files                      # list all user's file names
GET     /files/:name                # get a file
GET     /files/upload               # get a file uploader dialog/page
POST    /files                      # upload a new file
DELETE  /files/:name                # delete a user's file
GET     /files/:user/:hash          # get a file by a public hash

