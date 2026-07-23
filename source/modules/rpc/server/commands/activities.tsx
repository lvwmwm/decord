// Module ID: 13433
// Function ID: 103329
// Dependencies: [5, 653, 13403, 13391, 10501, 7371, 10496, 13395, 10486, 2]

// Module 13433
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
    const result = require(10501) /* recurseReplaceContentTree */.validatePostMessageTransport(socket.socket.transport);
    const obj = require(10501) /* recurseReplaceContentTree */;
    return require(13391) /* activityInstanceConnectedParticipants */.activityInstanceConnectedParticipants();
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
