import http from "./http-common";

const getAll = () => {
    return http.get("/");
};


const create = data => {
    return http.post("/", data);
};



export default {
    getAll,
    create,
};
