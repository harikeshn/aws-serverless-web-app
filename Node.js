exports.handler = async (event) => {
    const data = JSON.parse(event.body);

    // store data in DynamoDB
    // (we’ll add this later)

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Stored successfully" }),
    };
};
