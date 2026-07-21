// Module ID: 13312
// Function ID: 101140
// Dependencies: []

// Module 13312
let RPCCommands;
let closure_3 = importDefault(dependencyMap[0]);
({ RPCCommands, RPCErrors: closure_4, ApplicationFlags: closure_5 } = arg1(dependencyMap[1]));
let obj = {};
const tmp2 = arg1(dependencyMap[1]);
obj = {
  scope: arg1(dependencyMap[3]).activityInstanceConnectedParticipantsScope,
  handler(socket) {
    const result = arg1(dependencyMap[4]).validatePostMessageTransport(socket.socket.transport);
    const obj = arg1(dependencyMap[4]);
    return arg1(dependencyMap[3]).activityInstanceConnectedParticipants();
  }
};
obj[RPCCommands.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS] = arg1(dependencyMap[2]).createRPCCommand(RPCCommands.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS, obj);
const obj2 = arg1(dependencyMap[2]);
obj = {
  scope: arg1(dependencyMap[3]).activityInstanceConnectedParticipantsScope,
  handler(socket) {
    const arg1 = socket.socket;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  }
};
obj[RPCCommands.REQUEST_PROXY_TICKET_REFRESH] = arg1(dependencyMap[2]).createRPCCommand(RPCCommands.REQUEST_PROXY_TICKET_REFRESH, obj);
const obj4 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/rpc/server/commands/activities.tsx");

export default obj;
