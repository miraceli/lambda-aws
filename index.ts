import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult, Context} from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {

    const body = { message: '' };

    const res: APIGatewayProxyResult = {
        statusCode: 200,
        body: '',
    };
    
    try {
        body.message = `http method: ${event.httpMethod}, path: ${event.path}`;
        res.body = JSON.stringify(body);
    } catch(err){
        console.log();
        res.statusCode = 500;
    }


    return res;
};