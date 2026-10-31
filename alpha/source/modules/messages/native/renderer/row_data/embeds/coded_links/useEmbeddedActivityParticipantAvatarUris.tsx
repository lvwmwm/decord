// Module ID: 15117
// Function ID: 15118
// Name: useEmbeddedActivityParticipantAvatarUris
// Dependencies: [19, 4862, 1383, 1379, 563, 2]
// Exports: default, getEmbeddedActivityParticipantAvatarUris

// Module 15117 (useEmbeddedActivityParticipantAvatarUris)
import GlobalUtils from "GlobalUtils" /* 1379 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4862 */;
import UserStore from "UserStore" /* 1383 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/useEmbeddedActivityParticipantAvatarUris.tsx");

export default function useEmbeddedActivityParticipantAvatarUris(activity) {
  activity = activity.activity;
  const guildId = activity.guildId;
  let memo;
  const items = [activity];
  memo = memo.useMemo(() => {
    let userIds;
    const _Array = Array;
    if (activity != null) {
      userIds = activity.userIds;
    }
    if (userIds == null) {
      userIds = [];
    }
    return from(userIds);
  }, items);
  const items1 = [UserStore];
  const items2 = [memo];
  const obj = activity(guildId[4]);
  const stateFromStoresArray = obj.useStateFromStoresArray(items1, () => {
    let user;
    return memo.map((item) => user.getUser(item));
  }, items2);
  const items3 = [guildId, stateFromStoresArray];
  return memo.useMemo(() => {
    const found = stateFromStoresArray.filter(GlobalUtils.isNotNullish);
    return found.map((getAvatarURL) => "" + getAvatarURL.getAvatarURL(guildId, 64));
  }, items3);
};
export function getEmbeddedActivityParticipantAvatarUris(arg0) {
  let activity;
  ({ guildId: require, applicationId: dependencyMap, activity } = arg0);
  if (null == activity) {
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(tmp);
    activity = embeddedActivitiesForChannel.find((applicationId) => applicationId.applicationId === dependencyMap);
  }
  let userIds;
  const _Array = Array;
  if (activity != null) {
    userIds = activity.userIds;
  }
  if (userIds == null) {
    userIds = [];
  }
  const fromResult = from(userIds);
  const mapped = fromResult.map((item) => {
    const user = UserStore.getUser(item);
    let avatarURL;
    if (user != null) {
      avatarURL = user.getAvatarURL(require, 64);
    }
    return "" + avatarURL;
  });
  return mapped.filter(GlobalUtils.isNotNullish);
}
