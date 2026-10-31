// Module ID: 14869
// Function ID: 14870
// Name: useRequestToStreamData
// Dependencies: [19, 6714, 502, 1072, 11680, 504, 14870, 6881, 14871, 11543, 14872, 2]
// Exports: useRequestToStreamData

// Module 14869 (useRequestToStreamData)
import Constants from "Constants" /* 1072 */;
import ActivitiesActionCreatorsDefault from "ActivitiesActionCreators" /* 11543 */;
import RequestToStreamActionCreators from "RequestToStreamActionCreators" /* 14872 */;
import react from "react" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6714 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const ActivityActionTypes = Constants.ActivityActionTypes;
let result = size.fileFinishedImporting("modules/request_to_stream/useRequestToStreamData.tsx");

export function useRequestToStreamData(id, requestToStreamChannel) {
  let activity;
  let handleRequestToStream;
  let targetUserId;
  _require = id;
  importDefault = requestToStreamChannel;
  let tmp = importDefault;
  let tmp2 = activity;
  let str;
  const useConfig = require("RequestToStreamNonGamesExperiment").useConfig;
  const tmp3 = require("RequestToStreamNonGamesExperiment");
  if (requestToStreamChannel != null) {
    str = requestToStreamChannel.guild_id;
  }
  if (str == null) {
    str = "";
  }
  const enabled = useConfig({ guildId: str, location: "useRequestToStreamData" }).enabled;
  let obj = require("get initialized");
  const items = [id];
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  let guild_id;
  const tmpResult = tmp(tmp2[6]);
  if (requestToStreamChannel != null) {
    guild_id = requestToStreamChannel.guild_id;
  }
  activity = tmpResult(id, guild_id)[0];
  const items1 = [handleRequestToStream];
  const tmp4Result = require("get initialized");
  const stateFromStores1 = tmp4Result.useStateFromStores(items1, () => {
    let guildId;
    const getStreamForUser = ApplicationStreamingStore.getStreamForUser;
    const obj = requestToStreamChannel;
    const tmp2 = targetUserId;
    if (requestToStreamChannel != null) {
      guildId = obj.getGuildId();
    }
    return null != getStreamForUser(tmp2, guildId);
  });
  let application_id;
  const useApplication = tmp4(tmp2[7]).useApplication;
  require("ApplicationActionCreators");
  if (activity != null) {
    application_id = activity.application_id;
  }
  const data = useApplication(application_id).data;
  id = undefined;
  const tmpResult2 = tmp(tmp2[8]);
  if (requestToStreamChannel != null) {
    id = requestToStreamChannel.id;
  }
  const items2 = [requestToStreamChannel, activity, id];
  const tmpResult1Result = tmpResult2(id, id);
  handleRequestToStream = data.useCallback((arg0) => {
    if (null != requestToStreamChannel) {
      const _HermesInternal = HermesInternal;
      const obj = { type: ActivityActionTypes.STREAM_REQUEST, channelId: tmp2.id, activity, content: "<@" + targetUserId + ">", location: tmp, targetUserId };
      const sendActivityInvite = ActivitiesActionCreatorsDefault.sendActivityInvite;
      ActivitiesActionCreatorsDefault;
      sendActivityInvite(obj);
      const obj2 = RequestToStreamActionCreators;
      const result = obj2.startStreamRequestCooldown(targetUserId);
    }
  }, items2);
  let tmp16 = stateFromStores !== id;
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
}
