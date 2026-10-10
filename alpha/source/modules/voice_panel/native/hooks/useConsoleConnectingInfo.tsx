// Module ID: 17849
// Function ID: 17850
// Name: useConsoleConnectingInfo
// Dependencies: [5111, 5112, 558, 576, 11025, 573, 17850, 13022, 17851, 17852, 2]

// Module 17849 (useConsoleConnectingInfo)
import useVoiceStateForRemoteSessionDefault from "useVoiceStateForRemoteSession" /* 11025 */;
import getConsoleIconDefault from "getConsoleIcon" /* 13022 */;
import useShouldDisplayCancelConsoleTransferDefault from "useShouldDisplayCancelConsoleTransfer" /* 17850 */;
import getConsoleColorDefault from "getConsoleColor" /* 17852 */;
import GameConsoleStore from "GameConsoleStore" /* 5111 */;
import SessionsStore from "SessionsStore" /* 5112 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConsoleConnectingInfo(arg0) {
  let awaitingRemoteSessionInfo;
  let channelId;
  let tmp11;
  let tmp15;
  let tmp23;
  let tmp7;
  let tmp8;
  const obj = require("react");
  const cResult = obj.c(20);
  const tmp5 = useVoiceStateForRemoteSessionDefault();
  _require = tmp5;
  let channelId1;
  if (tmp5 != null) {
    channelId1 = tmp5.channelId;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameConsoleStore];
    const fn = function c() {
      return awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmpResult = require("useStateFromStores");
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SessionsStore];
    cResult[2] = items1;
    tmp11 = items1;
  } else {
    tmp11 = cResult[2];
  }
  let sessionId;
  const tmp13 = cResult[3];
  if (tmp5 != null) {
    sessionId = tmp5.sessionId;
  }
  if (tmp13 !== sessionId) {
    let sessionId1;
    if (tmp5 != null) {
      sessionId1 = tmp5.sessionId;
    }
    const fn2 = function f() {
      let str;
      const getSessionById = SessionsStore.getSessionById;
      if (sessionId != null) {
        str = sessionId.sessionId;
      }
      if (str == null) {
        str = "";
      }
      return getSessionById(str);
    };
    cResult[3] = sessionId1;
    cResult[4] = fn2;
    tmp15 = fn2;
  } else {
    tmp15 = cResult[4];
  }
  const tmpResult3 = require("useStateFromStores");
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp11, tmp15);
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.type;
  }
  if (str == null) {
    let os;
    if (stateFromStores1 != null) {
      os = stateFromStores1.clientInfo.os;
    }
    str = os;
  }
  if (str == null) {
    str = "";
  }
  const tmp19 = useShouldDisplayCancelConsoleTransferDefault(stateFromStores);
  if (stateFromStores != null) {
    channelId = stateFromStores.channelId;
  }
  let channelId2;
  if (stateFromStores != null) {
    channelId2 = stateFromStores.channelId;
  }
  if (cResult[5] !== str) {
    const tmp24 = getConsoleIconDefault(str);
    cResult[5] = str;
    cResult[6] = tmp24;
    tmp23 = tmp24;
  } else {
    tmp23 = cResult[6];
  }
  if (cResult[7] === stateFromStores) {
    if (cResult[8] === channelId1 === arg0) {
      let tmp25;
      let tmp27;
      if (cResult[9] === stateFromStores1) {
        tmp25 = cResult[10];
      }
      if (cResult[11] !== str) {
        const tmp28 = getConsoleColorDefault(str);
        cResult[11] = str;
        cResult[12] = tmp28;
        tmp27 = tmp28;
      } else {
        tmp27 = cResult[12];
      }
      if (cResult[13] === tmp19) {
        if (cResult[14] === channelId === arg0) {
          if (cResult[15] === (channelId2 === arg0 || channelId1 === arg0)) {
            if (cResult[16] === tmp23) {
              if (cResult[17] === tmp25) {
                let tmp30;
                if (cResult[18] === tmp27) {
                  tmp30 = cResult[19];
                }
                return tmp30;
              }
            }
          }
        }
      }
      const obj2 = { isConnectingToConsole: channelId === arg0, isConnectingOrConnectedToConsole: channelId2 === arg0 || channelId1 === arg0, icon: tmp23, text: tmp25, color: tmp27, displayCancel: tmp19 };
      cResult[13] = tmp19;
      cResult[14] = channelId === arg0;
      cResult[15] = channelId2 === arg0 || channelId1 === arg0;
      cResult[16] = tmp23;
      cResult[17] = tmp25;
      cResult[18] = tmp27;
      cResult[19] = obj2;
      tmp30 = obj2;
    }
  }
  const tmpResult4 = require("getConsoleConnectingText");
  const consoleConnectingText = tmpResult4.getConsoleConnectingText(stateFromStores1, stateFromStores, tmp21);
  cResult[7] = stateFromStores;
  cResult[8] = channelId1 === arg0;
  cResult[9] = stateFromStores1;
  cResult[10] = consoleConnectingText;
  tmp25 = consoleConnectingText;
}) : (function useConsoleConnectingInfo(arg0) {
  let awaitingRemoteSessionInfo;
  let channelId2;
  let sessionId;
  let tmp5Result;
  const tmp3 = useVoiceStateForRemoteSessionDefault();
  _require = tmp3;
  let channelId;
  if (tmp3 != null) {
    channelId = tmp3.channelId;
  }
  const items = [GameConsoleStore];
  const obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, () => awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const items1 = [SessionsStore];
  const obj2 = require("useStateFromStores");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let str;
    const getSessionById = SessionsStore.getSessionById;
    if (sessionId != null) {
      str = sessionId.sessionId;
    }
    if (str == null) {
      str = "";
    }
    return getSessionById(str);
  });
  let str;
  const tmp5 = _require;
  if (stateFromStores != null) {
    str = stateFromStores.type;
  }
  if (str == null) {
    let os;
    if (stateFromStores1 != null) {
      os = stateFromStores1.clientInfo.os;
    }
    str = os;
  }
  if (str == null) {
    str = "";
  }
  let channelId1;
  const tmp9 = useShouldDisplayCancelConsoleTransferDefault(stateFromStores);
  if (stateFromStores != null) {
    channelId1 = stateFromStores.channelId;
  }
  const obj3 = { isConnectingToConsole: channelId1 === arg0, isConnectingOrConnectedToConsole: channelId2 === arg0 || channelId === arg0, icon: getConsoleIconDefault(str), text: tmp5Result.getConsoleConnectingText(stateFromStores1, stateFromStores, channelId === arg0), color: getConsoleColorDefault(str), displayCancel: tmp9 };
  channelId2 = undefined;
  if (stateFromStores != null) {
    channelId2 = stateFromStores.channelId;
  }
  tmp5Result = tmp5(17851);
  return obj3;
});
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useConsoleConnectingInfo.tsx");

export default tmp2;
