// Module ID: 13324
// Function ID: 101227
// Name: createVoiceSettingsEventHandlers
// Dependencies: []
// Exports: default

// Module 13324 (createVoiceSettingsEventHandlers)
const _module = require(dependencyMap[0]);
({ RPC_SCOPE_CONFIG: closure_3, RPC_LOCAL_SCOPE: closure_4 } = _module);
const RPCEvents = require(dependencyMap[1]).RPCEvents;
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/rpc/server/events/VoiceSettingsEventsFactory.tsx");

export default function createVoiceSettingsEventHandlers(arg0, arg1) {
  const require = arg0;
  const importDefault = arg1;
  let obj = {};
  obj = {};
  obj = {};
  const items = [require(dependencyMap[2]).OAuth2Scopes.RPC, require(dependencyMap[2]).OAuth2Scopes.RPC_VOICE_READ];
  obj[constants.ANY] = items;
  obj.scope = obj;
  obj.handler = function handler() {
    return (arg0) => {
      let dispatch;
      let prevState;
      ({ prevState, dispatch } = arg0);
      const tmp = callback();
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
          const tmp4 = callback(socket.application.id);
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
