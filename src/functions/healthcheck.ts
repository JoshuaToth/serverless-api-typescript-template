
module.exports.healthcheck = async () => {
    return {
        body: 'OK',
        statusCode: 200,
    };
}
