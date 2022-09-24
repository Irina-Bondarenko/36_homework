"use strict";

function model () {

    return {
        dbName: null,
        setDBName(key) {
            if(!key.trim()) throw new Error("Incorrect key");

            this.dbName = key;

        },

        setData(data) {

            let response = null;

            try {
                localStorage.setItem(this.dbName, JSON.stringify(data));
                return response = {
                    success: true,
                    savedData: data,
                };

            } catch (error) {
                response = {
                    success: false,
                    errors: error,
                }
            }
            return response;

        },

        init(dbKey) {
            this.setDBName(dbKey);

        },


    }

}
