// Module ID: 12318
// Function ID: 96025
// Name: useEmbeddedActivityParticipantAvatarUris
// Dependencies: [31, 1347, 1849, 1327, 624, 2]
// Exports: default, getEmbeddedActivityParticipantAvatarUris

// Module 12318 (useEmbeddedActivityParticipantAvatarUris)
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/useEmbeddedActivityParticipantAvatarUris.tsx");

export default function useEmbeddedActivityParticipantAvatarUris(activity) {
  activity = activity.activity;
  const guildId = activity.guildId;
  const items = [activity];
  memo = memo.useMemo(() => {
    let userIds;
    if (null != activity) {
      userIds = activity.userIds;
    }
    if (null == userIds) {
      userIds = [];
    }
    return Array.from(userIds);
  }, items);
  const items1 = [_isNativeReflectConstruct];
  const items2 = [memo];
  const stateFromStoresArray = activity(guildId[4]).useStateFromStoresArray(items1, () => memo.map((arg0) => outer2_4.getUser(arg0)), items2);
  const items3 = [guildId, stateFromStoresArray];
  return memo.useMemo(() => {
    const found = stateFromStoresArray.filter(activity(guildId[3]).isNotNullish);
    return found.map((getAvatarURL) => "" + getAvatarURL.getAvatarURL(outer1_1, 64));
  }, items3);
};
export const getEmbeddedActivityParticipantAvatarUris = function getEmbeddedActivityParticipantAvatarUris(arg0) {
  let activity;
  let dependencyMap;
  let require;
  ({ guildId: require, applicationId: dependencyMap, activity } = arg0);
  if (null == activity) {
    embeddedActivitiesForChannel = embeddedActivitiesForChannel.getEmbeddedActivitiesForChannel(tmp);
    activity = embeddedActivitiesForChannel.find((applicationId) => applicationId.applicationId === closure_1);
  }
  let userIds;
  if (null != activity) {
    userIds = activity.userIds;
  }
  if (null == userIds) {
    userIds = [];
  }
  const mapped = Array.from(userIds).map((arg0) => {
    const user = outer1_4.getUser(arg0);
    let avatarURL;
    if (null != user) {
      avatarURL = user.getAvatarURL(closure_0, 64);
    }
    return "" + avatarURL;
  });
  return mapped.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish);
};
