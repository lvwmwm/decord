// Module ID: 4947
// Function ID: 42419
// Name: useStageHasStream
// Dependencies: []
// Exports: getStageHasMedia, isStageVideoEnabled, useIsStageVideoEnabled, useStageHasMedia

// Module 4947 (useStageHasStream)
function useStageHasStream(id) {
  const arg1 = id;
  const items = [closure_4];
  const items1 = [id];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => {
    const mutableParticipants = mutableParticipants.getMutableParticipants(arg0, arg0(closure_1[4]).StageChannelParticipantNamedIndex.SPEAKER);
    return null != mutableParticipants.find((type) => type.type === callback(closure_1[4]).StageChannelParticipantTypes.STREAM);
  }, items1);
}
function getStageHasStream(id) {
  const mutableParticipants = mutableParticipants.getMutableParticipants(id, arg1(dependencyMap[4]).StageChannelParticipantNamedIndex.SPEAKER);
  return null != mutableParticipants.find((type) => type.type === callback(closure_1[4]).StageChannelParticipantTypes.STREAM);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/stage_channels/StageMediaHooks.tsx");

export const useStageHasMedia = function useStageHasMedia(id) {
  const arg1 = id;
  const tmp = useStageHasStream(id);
  const items = [closure_3];
  const items1 = [id];
  const obj = arg1(dependencyMap[3]);
  return arg1(dependencyMap[3]).useStateFromStores(items, () => closure_3.hasVideo(arg0), items1) || tmp;
};
export { useStageHasStream };
export const getStageHasMedia = function getStageHasMedia(id) {
  let hasVideoResult = getStageHasStream(id);
  if (!hasVideoResult) {
    hasVideoResult = closure_3.hasVideo(id);
  }
  return hasVideoResult;
};
export { getStageHasStream };
export const useIsStageVideoEnabled = function useIsStageVideoEnabled(arg0) {
  const arg1 = arg0;
  const items = [closure_2];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => guild.getGuild(arg0));
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
  const guild = guild.getGuild(guild_id);
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
