import { Context, Handler } from 'aws-lambda';

interface ReqEvent {
    key1: string;
    key2: string;
    key3: string;
};

interface Res {
    message: string;
}

export const handler: Handler<ReqEvent, Res> = async (event: ReqEvent, context: Context): Promise<Res> => {
    let res: Res = { message: '' };

    try {
        throw Error('Isto é um erro carai');
        //res = { message: event.key3 };
    } catch(err){
        console.log(err);
        return err;
    }


    return res;
}