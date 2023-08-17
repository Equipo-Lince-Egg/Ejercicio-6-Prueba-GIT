export const API_RM = {

    URL: "https://rickandmortyapi.com/api/character",

    CHARACTER_BY_ID : function (id) {
        return `${this.URL}/${id}`
    },

    CHARACTER_ALL : function(){
        return this.URL
    }

}