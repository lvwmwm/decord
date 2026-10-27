// Module ID: 14339
// Function ID: 14340
// Name: useRequestToStreamData
// Dependencies: [19, 6643, 502, 1084, 558, 576, 11352, 504, 14340, 6811, 14341, 11216, 14342, 2]

// Module 14339 (useRequestToStreamData)
import Constants from "Constants" /* 1084 */;
import ActivitiesActionCreatorsDefault from "ActivitiesActionCreators" /* 11216 */;
import RequestToStreamActionCreators from "RequestToStreamActionCreators" /* 14342 */;
import react from "react" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6643 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const ActivityActionTypes = Constants.ActivityActionTypes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useRequestToStreamData(targetUserId, guild_id) {
  let activity;
  let tmp13;
  let tmp4;
  let tmp6;
  let tmp7;
  _require = targetUserId;
  importDefault = guild_id;
  const tmp = _require;
  let tmp2 = activity;
  let obj = require("react");
  const cResult = obj.c(16);
  let str;
  if (guild_id != null) {
    str = guild_id.guild_id;
  }
  if (str == null) {
    str = "";
  }
  if (cResult[0] !== str) {
    let obj2 = { guildId: str, location: "useRequestToStreamData" };
    cResult[0] = str;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmp5 = importDefault;
  const obj3 = require("RequestToStreamNonGamesExperiment");
  const enabled = obj3.useConfig(tmp4).enabled;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    const fn = function _() {
      return id.getId();
    };
    cResult[2] = items;
    cResult[3] = fn;
    tmp7 = fn;
    tmp6 = items;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(tmp2[7]);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  guild_id = undefined;
  const tmp5Result = tmp5(tmp2[8]);
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  activity = tmp5Result(targetUserId, guild_id)[0];
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ApplicationStreamingStore];
    cResult[4] = items1;
    tmp13 = items1;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] === guild_id) {
    let tmp15;
    if (cResult[6] === targetUserId) {
      tmp15 = cResult[7];
    }
    const tmpResult3 = tmp(tmp2[7]);
    const stateFromStores1 = tmpResult3.useStateFromStores(tmp13, tmp15);
    let application_id;
    const useApplication = tmp(tmp2[9]).useApplication;
    tmp(tmp2[9]);
    if (activity != null) {
      application_id = activity.application_id;
    }
    const data = useApplication(application_id).data;
    tmp5(tmp2[10]);
    if (guild_id != null) {
      const id = guild_id.id;
    }
    if (cResult[8] === guild_id) {
      if (cResult[9] === activity) {
        let tmp21;
        if (cResult[10] === targetUserId) {
          tmp21 = cResult[11];
        }
        let tmp22 = stateFromStores !== targetUserId;
        if (tmp22) {
          tmp22 = null != activity || enabled;
        }
        if (tmp22) {
          tmp22 = null != data || enabled;
        }
        if (tmp22) {
          tmp22 = tmp20;
        }
        if (tmp22) {
          tmp22 = !stateFromStores1;
        }
        if (cResult[12] === tmp22) {
          if (cResult[13] === tmp21) {
            let tmp25;
            if (cResult[14] === data) {
              tmp25 = cResult[15];
            }
            return tmp25;
          }
        }
        let tmp26 = null;
        if (tmp22) {
          tmp26 = { playingApplication: data, handleRequestToStream: tmp21 };
          const obj4 = { playingApplication: data, handleRequestToStream: tmp21 };
        }
        cResult[12] = tmp22;
        cResult[13] = tmp21;
        cResult[14] = data;
        cResult[15] = tmp26;
        tmp25 = tmp26;
      }
    }
    const fn2 = function q(arg0) {
      if (null != guild_id) {
        const _HermesInternal = HermesInternal;
        const obj = { type: ActivityActionTypes.STREAM_REQUEST, channelId: tmp2.id, activity, content: "<@" + targetUserId + ">", location: tmp, targetUserId };
        const sendActivityInvite = ActivitiesActionCreatorsDefault.sendActivityInvite;
        ActivitiesActionCreatorsDefault;
        sendActivityInvite(obj);
        const obj2 = RequestToStreamActionCreators;
        const result = obj2.startStreamRequestCooldown(targetUserId);
      }
    };
    cResult[8] = guild_id;
    cResult[9] = activity;
    cResult[10] = targetUserId;
    cResult[11] = fn2;
    tmp21 = fn2;
  }
  class R {
    constructor() {
      let guildId;
      const getStreamForUser = ApplicationStreamingStore.getStreamForUser;
      const obj = guild_id;
      const tmp2 = targetUserId;
      if (guild_id != null) {
        guildId = obj.getGuildId();
      }
      return null != getStreamForUser(tmp2, guildId);
    }
  }
  cResult[5] = guild_id;
  cResult[6] = targetUserId;
  cResult[7] = R;
  tmp15 = R;
}) : (function useRequestToStreamData(targetUserId, guild_id) {
  let activity;
  let handleRequestToStream;
  let id;
  _require = targetUserId;
  importDefault = guild_id;
  let tmp = importDefault;
  let tmp2 = activity;
  let str;
  const useConfig = require("RequestToStreamNonGamesExperiment").useConfig;
  const tmp3 = require("RequestToStreamNonGamesExperiment");
  if (guild_id != null) {
    str = guild_id.guild_id;
  }
  if (str == null) {
    str = "";
  }
  const enabled = useConfig({ guildId: str, location: "useRequestToStreamData" }).enabled;
  let obj = require("get initialized");
  const items = [id];
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  guild_id = undefined;
  const tmpResult = tmp(tmp2[8]);
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  activity = tmpResult(targetUserId, guild_id)[0];
  const items1 = [handleRequestToStream];
  const tmp4Result = require("get initialized");
  const stateFromStores1 = tmp4Result.useStateFromStores(items1, () => {
    let guildId;
    const getStreamForUser = ApplicationStreamingStore.getStreamForUser;
    const obj = guild_id;
    const tmp2 = targetUserId;
    if (guild_id != null) {
      guildId = obj.getGuildId();
    }
    return null != getStreamForUser(tmp2, guildId);
  });
  let application_id;
  const useApplication = tmp4(tmp2[9]).useApplication;
  require("ApplicationActionCreators");
  if (activity != null) {
    application_id = activity.application_id;
  }
  const data = useApplication(application_id).data;
  id = undefined;
  const tmpResult2 = tmp(tmp2[10]);
  if (guild_id != null) {
    id = guild_id.id;
  }
  const items2 = [guild_id, activity, targetUserId];
  const tmpResult1Result = tmpResult2(targetUserId, id);
  handleRequestToStream = data.useCallback((arg0) => {
    if (null != guild_id) {
      const _HermesInternal = HermesInternal;
      const obj = { type: ActivityActionTypes.STREAM_REQUEST, channelId: tmp2.id, activity, content: "<@" + targetUserId + ">", location: tmp, targetUserId };
      const sendActivityInvite = ActivitiesActionCreatorsDefault.sendActivityInvite;
      ActivitiesActionCreatorsDefault;
      sendActivityInvite(obj);
      const obj2 = RequestToStreamActionCreators;
      const result = obj2.startStreamRequestCooldown(targetUserId);
    }
  }, items2);
  let tmp16 = stateFromStores !== targetUserId;
  const obj3 = data;
  if (tmp16) {
    tmp16 = null != activity || enabled;
  }
  if (tmp16) {
    tmp16 = null != data || enabled;
  }
  if (tmp16) {
    tmp16 = tmpResult1Result;
  }
  if (tmp16) {
    tmp16 = !stateFromStores1;
  }
  id = tmp16;
  const items3 = [tmp16, data, handleRequestToStream];
  return obj3.useMemo(() => {
    let tmp = null;
    if (id) {
      tmp = { playingApplication: data, handleRequestToStream };
      const obj = { playingApplication: data, handleRequestToStream };
    }
    return tmp;
  }, items3);
});
let result = size.fileFinishedImporting("modules/request_to_stream/useRequestToStreamData.tsx");

export const useRequestToStreamData = tmp2;
