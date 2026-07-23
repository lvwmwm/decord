// Module ID: 13447
// Function ID: 103438
// Name: createVoiceSettingsEventHandlers
// Dependencies: [4033, 653, 8310, 22, 2]
// Exports: default

// Module 13447 (createVoiceSettingsEventHandlers)
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG";
import { RPCEvents } from "ME";

let closure_3;
let closure_4;
({ RPC_SCOPE_CONFIG: closure_3, RPC_LOCAL_SCOPE: closure_4 } = RPC_SCOPE_CONFIG);
const result = require("set").fileFinishedImporting("modules/rpc/server/events/VoiceSettingsEventsFactory.tsx");

export default function createVoiceSettingsEventHandlers(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  let obj = {};
  obj = {};
  obj = {};
  const items = [_require(8310).OAuth2Scopes.RPC, _require(8310).OAuth2Scopes.RPC_VOICE_READ];
  obj[constants.ANY] = items;
  obj.scope = obj;
  obj.handler = function handler() {
    return (arg0) => {
      let dispatch;
      let prevState;
      ({ prevState, dispatch } = arg0);
      const tmp = outer1_0();
      if (!obj.isEqual(tmp, prevState)) {
        dispatch(tmp);
      }
      return tmp;
    };
  };
  obj[RPCEvents.VOICE_SETTINGS_UPDATE] = obj;
  obj[RPCEvents.VOICE_SETTINGS_UPDATE_2] = {
    scope: closure_4,
    handler(socket) {
      socket = socket.socket;
      return (prevState) => {
        prevState = prevState.prevState;
        if (null == socket.application.id) {
          return prevState;
        } else {
          const tmp4 = outer1_1(socket.application.id);
          if (!obj.isEqual(tmp4, prevState)) {
            tmp(tmp4);
          }
          return tmp4;
        }
      };
    }
  };
  return obj;
};
