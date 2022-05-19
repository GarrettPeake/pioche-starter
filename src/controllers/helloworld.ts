import { BaseMap, GetMap, WorkerController, OutboundResponse, Session } from "pioche";

@BaseMap("")
export class HelloWorldController extends WorkerController {

    @GetMap("")
    async helloWorld(session: Session, res: OutboundResponse){
        res.body = "Hello, World!";
    }
}