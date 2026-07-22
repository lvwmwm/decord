// Module ID: 12177
// Function ID: 93634
// Name: useEmbeddedActivityParticipantAvatarUris
// Dependencies: []
// Exports: default, getEmbeddedActivityParticipantAvatarUris

// Module 12177 (useEmbeddedActivityParticipantAvatarUris)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/useEmbeddedActivityParticipantAvatarUris.tsx");

export default function useEmbeddedActivityParticipantAvatarUris(activity) {
  activity = activity.activity;
  const arg1 = activity;
  const guildId = activity.guildId;
  const dependencyMap = guildId;
  const items = [activity];
  const memo = React.useMemo(() => {
    let userIds;
    if (null != activity) {
      userIds = activity.userIds;
    }
    if (null == userIds) {
      userIds = [];
    }
    return Array.from(userIds);
  }, items);
  const React = memo;
  const items1 = [closure_4];
  const items2 = [memo];
  const stateFromStoresArray = arg1(dependencyMap[4]).useStateFromStoresArray(items1, () => memo.map((arg0) => user.getUser(arg0)), items2);
  let closure_3 = stateFromStoresArray;
  const items3 = [guildId, stateFromStoresArray];
  return React.useMemo(() => {
    const found = stateFromStoresArray.filter(activity(guildId[3]).isNotNullish);
    return found.map((getAvatarURL) => "" + getAvatarURL.getAvatarURL(closure_1, 64));
  }, items3);
};
export const getEmbeddedActivityParticipantAvatarUris = function getEmbeddedActivityParticipantAvatarUris(arg0) {
  let activity;
  ({ guildId: closure_0, applicationId: closure_1, activity } = arg0);
  if (null == activity) {
    const embeddedActivitiesForChannel = embeddedActivitiesForChannel.getEmbeddedActivitiesForChannel(tmp);
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
    const user = user.getUser(arg0);
    let avatarURL;
    if (null != user) {
      avatarURL = user.getAvatarURL(closure_0, 64);
    }
    return "" + avatarURL;
  });
  return mapped.filter(arg1(dependencyMap[3]).isNotNullish);
};
