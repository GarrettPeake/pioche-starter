import { BaseMap, GetMap, DurableObjectController, OutboundResponse, Session } from "pioche";

@BaseMap("")
export class HelloWorldController extends DurableObjectController {

    @GetMap("")
    async helloWorld(session: Session, res: OutboundResponse){
        res.body = "Hello, World!";
    }
}