exports.handler = async (event, context) => {
    // Check if this is a scheduled event
    if (event.source === 'aws.events') {
        console.log('Running scheduled task...');
        const response = await fetch("https://metaverse-backend-zw8g.onrender.com/api/ping")
        const data = await response.json()
        if (data) {
            console.log(response)
        } else {
            console.log("nothing")
        }
    }
    return { statusCode: 200, body: 'Scheduled task completed' };
};