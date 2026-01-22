const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const data = JSON.parse(event.body);

    await dynamo.put({
        TableName: "FeedbackTable",
        Item: {
            email: data.email,
            name: data.name,
            message: data.message
        }
    }).promise();

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Stored successfully" }),
    };
};
