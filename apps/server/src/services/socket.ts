import { Server } from "socket.io";

class SocketService {
    

    constructor(){
        console.log("Init Socket Service...");
        this._io = new Server(

        )

        get io() {
            return this._io;
        }
    }
}

export default SocketService;