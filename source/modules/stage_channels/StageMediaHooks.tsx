// Module ID: 4950
// Function ID: 42437
// Name: useStageHasStream
// Dependencies: [1838, 4146, 4951, 566, 4957, 2]
// Exports: getStageHasMedia, isStageVideoEnabled, useIsStageVideoEnabled, useStageHasMedia

// Module 4950 (useStageHasStream)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
function useStageHasStream(id) {
  const _require = id;
  const items = [closure_4];
  const items1 = [id];
  return _require(566).useStateFromStores(items, () => {
    const mutableParticipants = outer1_4.getMutableParticipants(id, id(outer1_1[4]).StageChannelParticipantNamedIndex.SPEAKER);
    return null != mutableParticipants.find((type) => type.type === callback(outer2_1[4]).StageChannelParticipantTypes.STREAM);
  }, items1);
}
function getStageHasStream(id) {
  mutableParticipants = mutableParticipants.getMutableParticipants(id, require(4957) /* sortKey */.StageChannelParticipantNamedIndex.SPEAKER);
  return null != mutableParticipants.find((type) => type.type === outer1_0(outer1_1[4]).StageChannelParticipantTypes.STREAM);
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stage_channels/StageMediaHooks.tsx");

export const useStageHasMedia = function useStageHasMedia(id) {
  const _require = id;
  const tmp = useStageHasStream(id);
  const items = [_isNativeReflectConstruct];
  const items1 = [id];
  const obj = _require(566);
  return _require(566).useStateFromStores(items, () => outer1_3.hasVideo(closure_0), items1) || tmp;
};
export { useStageHasStream };
export const getStageHasMedia = function getStageHasMedia(id) {
  let hasVideoResult = getStageHasStream(id);
  if (!hasVideoResult) {
    hasVideoResult = _isNativeReflectConstruct.hasVideo(id);
  }
  return hasVideoResult;
};
export { getStageHasStream };
export const useIsStageVideoEnabled = function useIsStageVideoEnabled(arg0) {
  const _require = arg0;
  const items = [_createForOfIteratorHelperLoose];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_2.getGuild(closure_0));
  let tmp2 = null != stateFromStores;
  if (tmp2) {
    let prop;
    if (null != stateFromStores) {
      prop = stateFromStores.maxStageVideoChannelUsers;
    }
    let num2 = 0;
    if (null != prop) {
      num2 = prop;
    }
    tmp2 = num2 > 0;
  }
  return tmp2;
};
export const isStageVideoEnabled = function isStageVideoEnabled(guild_id) {
  guild = guild.getGuild(guild_id);
  let tmp2 = null != guild;
  if (tmp2) {
    let prop;
    if (null != guild) {
      prop = guild.maxStageVideoChannelUsers;
    }
    let num2 = 0;
    if (null != prop) {
      num2 = prop;
    }
    tmp2 = num2 > 0;
  }
  return tmp2;
};
