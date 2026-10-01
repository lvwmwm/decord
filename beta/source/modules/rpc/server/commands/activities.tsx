// Module ID: 14071
// Function ID: 14072
// Name: activities
// Dependencies: [5, 1074, 14038, 14025, 8775, 8321, 8770, 14033, 8782, 2]

// Module 14071 (activities)
import RPCHelpers from "RPCHelpers" /* 8775 */;
import activityInstanceConnectedParticipants from "activityInstanceConnectedParticipants" /* 14025 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Constants from "Constants" /* 1074 */;
import CONTEXT_MENU_ICON_NAMES_mod from "CONTEXT_MENU_ICON_NAMES" /* 14038 */;
import size from "module_2" /* 2 */;

let closure_2, constants, constants2;

let RPCCommands;
let closure_4;
let hasOwnProperty;
({ RPCCommands, RPCErrors: closure_4, ApplicationFlags: hasOwnProperty } = Constants);
let obj = {};
const GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = RPCCommands.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS;
let CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj2 = {
  scope: activityInstanceConnectedParticipants.activityInstanceConnectedParticipantsScope,
  handler(socket) {
    socket = socket.socket;
    const obj = RPCHelpers;
    const result = obj.validatePostMessageTransport(socket.transport);
    const obj2 = activityInstanceConnectedParticipants;
    return obj2.activityInstanceConnectedParticipants();
  }
};
obj[GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS, obj2);
const REQUEST_PROXY_TICKET_REFRESH = RPCCommands.REQUEST_PROXY_TICKET_REFRESH;
CONTEXT_MENU_ICON_NAMES = CONTEXT_MENU_ICON_NAMES_mod;
let obj3 = {
  scope: activityInstanceConnectedParticipants.activityInstanceConnectedParticipantsScope,
  handler(socket) {
    socket = socket.socket;
    return (async function(arg0, value) {
      let closure_1;
      if (constants2 === 2) {
        constants2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c3;
        try {
          constants2 = 2;
          if (0 === constants) {
            if (arg0 === 1) {
              constants2 = 3;
              throw value;
            } else if (arg0 === 2) {
              constants2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const obj8 = value(closure_2[4]);
              const result = obj8.validatePostMessageTransport(socket.transport);
              const obj9 = value(closure_2[4]);
              const validateApplicationResult = obj9.validateApplication(socket.application);
              const obj10 = value(closure_2[5]);
              const tmp30 = value;
              const tmp32 = socket;
              if (obj10.hasApplicationFlag(socket.application, constants2.EMBEDDED)) {
                const tmp19 = tmp(closure_2[7])(tmp32);
                c3 = 1;
                value = {};
                let id;
                const createProxyTicket = tmp30(closure_2[8]).createProxyTicket;
                const tmp30Result = tmp30(closure_2[8]);
                if (tmp19 != null) {
                  id = tmp19.id;
                }
                constants = 2;
                constants2 = 1;
                const obj4 = { value: createProxyTicket(validateApplicationResult, id), done: false };
                return obj4;
              } else {
                const obj5 = { errorCode: constants.UNAUTHORIZED_FOR_APPLICATION };
                const self3 = this;
                const self4 = this;
                const tmp17 = new tmp(closure_2[6])(obj5, "This application cannot access this API");
                throw tmp17;
              }
            }
          } else if (1 === tmp4) {
            c3 = 0;
            const obj6 = { errorCode: constants.UNKNOWN_ERROR };
            const self = this;
            const self2 = this;
            const tmp13 = new tmp(closure_2[6])(obj6, "Failed to create proxy ticket");
            throw tmp13;
          } else if (arg0 === 1) {
            constants2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            constants2 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            value.ticket = value;
            c3 = 0;
            constants2 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp23) {
          closure_2 = tmp23;
          if (0 === c3) {
            constants2 = 3;
            throw tmp23;
          } else {
            constants = 1;
          }
        }
      }
    })();
  }
};
obj[REQUEST_PROXY_TICKET_REFRESH] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.REQUEST_PROXY_TICKET_REFRESH, obj3);
let result = size.fileFinishedImporting("modules/rpc/server/commands/activities.tsx");

export default obj;
