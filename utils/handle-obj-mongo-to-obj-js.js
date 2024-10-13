
const handleObjMongoToObjJs = (elemento) => {
    const objJS = JSON.parse(JSON.stringify(elemento)) // Transformo un obj de mongoose a un obj de js
    return objJS
}

export default handleObjMongoToObjJs