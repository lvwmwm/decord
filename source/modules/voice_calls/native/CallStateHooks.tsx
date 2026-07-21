// Module ID: 12603
// Function ID: 96866
// Name: id
// Dependencies: []
// Exports: default

// Module 12603 (id)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ EMPTY_STRING_SNOWFLAKE_ID: closure_7, RTCConnectionStates: closure_8 } = arg1(dependencyMap[4]));
const ParticipantTypes = arg1(dependencyMap[5]).ParticipantTypes;
let obj = {};
obj = { initialized: false, callId: undefined };
const merged = Object.assign(obj);
obj = { DISCONNECTED: "disconneted", DISCONNECTING: "disconnecting", CONNECTING: "connecting", RINGING: "ringing", CONNECTED: "connected" };
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/voice_calls/native/CallStateHooks.tsx");

export default function _default() {
  let tmp = arg0;
  let flag = arg1;
  let flag2 = arg2;
  if (arg0 === undefined) {
    tmp = closure_7;
  }
  const arg1 = tmp;
  if (flag === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  let importDefault;
  let dependencyMap;
  let participants;
  const id = id.getId();
  importDefault = id;
  let obj = arg1(dependencyMap[6]);
  const items = [closure_5];
  const items1 = [tmp, id];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const call = call.getCall(tmp);
    if (null != call) {
      const ringing = call.ringing;
      let found = ringing.filter((arg0) => arg0 !== closure_1);
    } else {
      found = [];
    }
    let initialized = closure_10.initialized;
    if (!initialized) {
      initialized = found.length > 0;
    }
    closure_10.initialized = initialized;
    return found;
  }, items1);
  participants = participants.getParticipants(tmp);
  const found = participants.filter((type) => {
    let tmp = type.type !== constants2.ACTIVITY;
    if (tmp) {
      tmp = type.user.id !== id;
    }
    return tmp;
  });
  const tmp3 = importDefault(dependencyMap[7])();
  dependencyMap = tmp3;
  const items2 = [getRTCConnectionId];
  const stateFromStores = arg1(dependencyMap[6]).useStateFromStores(items2, getRTCConnectionId.getRTCConnectionId, []);
  participants = stateFromStores;
  const obj2 = arg1(dependencyMap[6]);
  const items3 = [getRTCConnectionId];
  const items4 = [stateFromStores, tmp3, tmp];
  const stateFromStores1 = arg1(dependencyMap[6]).useStateFromStores(items3, () => {
    let channelId;
    if (null != tmp3) {
      channelId = tmp3.channelId;
    }
    if (channelId === tmp) {
      closure_10.initialized = true;
      return constants.RTC_CONNECTED;
    } else {
      let tmp4 = null != stateFromStores;
      if (tmp4) {
        tmp4 = tmp16 === stateFromStores;
      }
      if (!tmp4) {
        closure_10.initialized = false;
      }
      closure_10.callId = stateFromStores;
      const state = state.getState();
      let initialized = closure_10.initialized;
      if (!initialized) {
        let tmp11 = state !== constants.DISCONNECTED;
        if (tmp11) {
          tmp11 = state !== constants.RTC_DISCONNECTED;
        }
        initialized = tmp11;
      }
      closure_10.initialized = initialized;
      return state;
    }
  }, items4);
  let initialized = obj.initialized;
  if (!initialized) {
    initialized = flag2;
  }
  obj.initialized = initialized;
  let CONNECTED = obj.CONNECTING;
  const initialized2 = obj.initialized;
  if (flag) {
    CONNECTED = obj.DISCONNECTING;
  } else {
    if (initialized2) {
      if (stateFromStores1 === constants.DISCONNECTED) {
        CONNECTED = obj.DISCONNECTED;
      }
    }
    if (stateFromStoresArray.length > 0) {
      if (found.length === stateFromStoresArray.length) {
        CONNECTED = obj.RINGING;
      }
    }
    if (stateFromStores1 === constants.RTC_CONNECTED) {
      CONNECTED = obj.CONNECTED;
    }
  }
  obj = { state: CONNECTED, initialized: initialized2 };
  return obj;
};
export const CallStates = obj;
