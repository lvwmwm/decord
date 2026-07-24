// Module ID: 12775
// Function ID: 99393
// Name: id
// Dependencies: [4143, 1194, 4809, 4202, 653, 4148, 566, 8973, 2]
// Exports: default

// Module 12775 (id)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import ME from "ME";
import { ParticipantTypes } from "ParticipantTypes";

let closure_7;
let closure_8;
let require = arg1;
({ EMPTY_STRING_SNOWFLAKE_ID: closure_7, RTCConnectionStates: closure_8 } = ME);
let obj = {};
obj = { initialized: false, callId: undefined };
const merged = Object.assign(obj);
obj = { DISCONNECTED: "disconneted", DISCONNECTING: "disconnecting", CONNECTING: "connecting", RINGING: "ringing", CONNECTED: "connected" };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_calls/native/CallStateHooks.tsx");

export default function _default() {
  let tmp = arg0;
  let flag = arg1;
  let flag2 = arg2;
  if (arg0 === undefined) {
    tmp = closure_7;
  }
  const require = tmp;
  if (flag === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  let id;
  let dependencyMap;
  let stateFromStores;
  id = id.getId();
  let obj = require(566) /* initialize */;
  const items = [closure_5];
  const items1 = [tmp, id];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const call = outer1_5.getCall(closure_0);
    if (null != call) {
      const ringing = call.ringing;
      let found = ringing.filter((arg0) => arg0 !== outer1_1);
    } else {
      found = [];
    }
    let initialized = outer1_10.initialized;
    if (!initialized) {
      initialized = found.length > 0;
    }
    outer1_10.initialized = initialized;
    return found;
  }, items1);
  const participants = stateFromStores.getParticipants(tmp);
  let found = participants.filter((type) => {
    let tmp = type.type !== outer1_9.ACTIVITY;
    if (tmp) {
      tmp = type.user.id !== id;
    }
    return tmp;
  });
  const tmp3 = id(8973)();
  dependencyMap = tmp3;
  const items2 = [getRTCConnectionId];
  stateFromStores = require(566) /* initialize */.useStateFromStores(items2, getRTCConnectionId.getRTCConnectionId, []);
  const obj2 = require(566) /* initialize */;
  const items3 = [getRTCConnectionId];
  const items4 = [stateFromStores, tmp3, tmp];
  const stateFromStores1 = require(566) /* initialize */.useStateFromStores(items3, () => {
    let channelId;
    if (null != _undefined) {
      channelId = _undefined.channelId;
    }
    if (channelId === closure_0) {
      outer1_10.initialized = true;
      return outer1_8.RTC_CONNECTED;
    } else {
      let tmp4 = null != stateFromStores;
      if (tmp4) {
        tmp4 = tmp16 === stateFromStores;
      }
      if (!tmp4) {
        outer1_10.initialized = false;
      }
      outer1_10.callId = stateFromStores;
      const state = outer1_6.getState();
      let initialized = outer1_10.initialized;
      if (!initialized) {
        let tmp11 = state !== outer1_8.DISCONNECTED;
        if (tmp11) {
          tmp11 = state !== outer1_8.RTC_DISCONNECTED;
        }
        initialized = tmp11;
      }
      outer1_10.initialized = initialized;
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
