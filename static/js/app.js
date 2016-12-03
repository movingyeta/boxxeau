"use strict"

let app = new Vue({
    el: "#App",
    computed: {
        searchedFiles: function ()
        {
            let has_search_string = new RegExp(`.*${this.search}.*`, "i")
            let x = this.files.filter((file) => has_search_string.test(file.name))
            return x
        }
    },
    data: {
        search: "",
        files: [
            { name: "photo12", created: "01-02-32", type: "photo" },
            { name: "photo14", created: "01-02-32", type: "photo" },
            { name: "photo15", created: "01-02-32", type: "photo" },
            { name: "photo19", created: "01-02-32", type: "photo" },
            { name: "photo22", created: "01-02-32", type: "photo" },
            { name: "photo23", created: "01-02-32", type: "photo" },
            { name: "photo25", created: "01-02-32", type: "photo" },
            { name: "photo29", created: "01-02-32", type: "photo" },
            { name: "photo34", created: "01-02-32", type: "photo" },
            { name: "photo35", created: "01-02-32", type: "photo" },
            { name: "photo39", created: "01-02-32", type: "photo" },
            { name: "photo41", created: "01-02-32", type: "photo" },
            { name: "GDD - firechess", created: "01-02-32", type: "document" },
        ],
        msg: {
            preferences: "Preferences",
            logout: "Logout",
            upload: "Upload",
            images: "Images",
            videos: "Videos",
            documents: "Documents",
            apps: "Apps",
            other: "Other"
        }
    }
})
