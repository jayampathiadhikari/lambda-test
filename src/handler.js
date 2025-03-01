exports.handler = async (event) => {
    console.log("EVENT TEST FROM CODE", event)
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello from Lambda Code test!" }),
    };
};