// Module ID: 13497
// Function ID: 103783
// Dependencies: [5, 653, 13467, 13455, 10558, 5664, 10553, 13459, 5668, 2]

// Module 13497
import getApplicationFlags from "getApplicationFlags";
import ME from "ME";
import createRPCCommand from "createRPCCommand";
import createRPCCommand from "createRPCCommand";

let RPCCommands;
let closure_4;
let closure_5;
const require = arg1;
({ RPCCommands, RPCErrors: closure_4, ApplicationFlags: closure_5 } = ME);
let obj = {};
obj = {
  scope: require("activityInstanceConnectedParticipants").activityInstanceConnectedParticipantsScope,
  handler(socket) {
    const result = require(10558) /* recurseReplaceContentTree */.validatePostMessageTransport(socket.socket.transport);
    const obj = require(10558) /* recurseReplaceContentTree */;
    return require(13455) /* activityInstanceConnectedParticipants */.activityInstanceConnectedParticipants();
  }
};
obj[RPCCommands.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS] = createRPCCommand.createRPCCommand(RPCCommands.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS, obj);
obj = {
  scope: require("activityInstanceConnectedParticipants").activityInstanceConnectedParticipantsScope,
  handler(socket) {
    socket = socket.socket;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  }
};
obj[RPCCommands.REQUEST_PROXY_TICKET_REFRESH] = createRPCCommand.createRPCCommand(RPCCommands.REQUEST_PROXY_TICKET_REFRESH, obj);
let result = require("createRPCCommand").fileFinishedImporting("modules/rpc/server/commands/activities.tsx");

export default obj;
