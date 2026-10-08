// Module ID: 14596
// Function ID: 14597
// Name: activities
// Dependencies: [5, 1085, 14560, 14548, 11142, 2028, 11134, 14547, 10616, 10615, 10635, 11148, 2]

// Module 14596 (activities)
import RPCHelpers from "RPCHelpers" /* 11142 */;
import activityInstanceConnectedParticipants from "activityInstanceConnectedParticipants" /* 14548 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Constants from "Constants" /* 1085 */;
import CONTEXT_MENU_ICON_NAMES_mod from "CONTEXT_MENU_ICON_NAMES" /* 14560 */;
import size from "module_2" /* 2 */;

let c5, closure_2, constants;

let RPCCommands;
let closure_4;
({ RPCCommands, RPCErrors: closure_4 } = Constants);
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
      let tmp38Result;
      let tmp38Result2;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          c5 = 2;
          if (0 === constants) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const obj12 = value(closure_2[4]);
              const result = obj12.validatePostMessageTransport(socket.transport);
              const obj13 = value(closure_2[4]);
              const validateApplicationResult = obj13.validateApplication(socket.application);
              const obj14 = value(closure_2[5]);
              if (obj14.isEmbeddedApplication(socket.application)) {
                let context;
                if (tmp(closure_2[7])(socket)) {
                  context = tmp40.context;
                }
                let surface;
                const tmp22 = tmp(closure_2[8]);
                if (context != null) {
                  surface = context.surface;
                }
                const tmp22Result = tmp22(surface);
                c3 = 1;
                value = {};
                let type;
                if (context != null) {
                  type = context.source.type;
                }
                if (type === value(closure_2[9]).EmbeddedContextSourceType.FRAME) {
                  constants = 3;
                  c5 = 1;
                  const obj4 = { value: tmp38Result.createProxyTicket(validateApplicationResult, tmp22Result, tmp(closure_2[11])(context.surface)), done: false };
                  tmp38Result = value(closure_2[10]);
                  return obj4;
                } else {
                  constants = 2;
                  c5 = 1;
                  const obj5 = { value: tmp38Result2.createProxyTicket(validateApplicationResult, tmp22Result), done: false };
                  tmp38Result2 = value(closure_2[10]);
                  return obj5;
                }
              } else {
                const obj6 = { errorCode: constants.UNAUTHORIZED_FOR_APPLICATION };
                const self3 = this;
                const self4 = this;
                const tmp17 = new tmp(closure_2[6])(obj6, "This application cannot access this API");
                throw tmp17;
              }
            }
          } else if (1 === constants) {
            c3 = 0;
            const obj7 = { errorCode: constants.UNKNOWN_ERROR };
            const self = this;
            const self2 = this;
            const tmp13 = new tmp(closure_2[6])(obj7, "Failed to create proxy ticket");
            throw tmp13;
          } else {
            if (2 === constants) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj8 = { value, done: true };
                return obj8;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            }
            value.ticket = value;
            c3 = 0;
            c5 = 3;
            const obj9 = { value, done: true };
            return obj9;
          }
        } catch (tmp31) {
          closure_2 = tmp31;
          if (0 === c3) {
            c5 = 3;
            throw tmp31;
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
