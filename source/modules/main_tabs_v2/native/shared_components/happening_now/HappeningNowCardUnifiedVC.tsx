// Module ID: 14808
// Function ID: 111627
// Name: useCallActivityData
// Dependencies: []
// Exports: default

// Module 14808 (useCallActivityData)
function useCallActivityData(channelId) {
  const arg1 = channelId;
  const items = [closure_3, closure_4, closure_5];
  const items1 = [channelId];
  return arg1(dependencyMap[8]).useStateFromStoresObject(items, () => {
    if (null == arg0) {
      return {};
    } else {
      const allApplicationStreamsForChannel = allApplicationStreamsForChannel.getAllApplicationStreamsForChannel(arg0);
      if (allApplicationStreamsForChannel.length > 0) {
        const found = allApplicationStreamsForChannel.find((ownerId) => friend.isFriend(ownerId.ownerId));
        if (null != found) {
          let obj = { stream: found };
          return obj;
        }
      }
      const embeddedActivitiesForChannel = embeddedActivitiesForChannel.getEmbeddedActivitiesForChannel(arg0);
      const tmp7 = callback(closure_2[9])(embeddedActivitiesForChannel);
      if (null != tmp7) {
        obj = { activity: tmp7 };
      } else if (tmp10) {
        const obj1 = { stream: allApplicationStreamsForChannel[0] };
        obj = obj1;
      } else {
        obj = {};
      }
      return obj;
    }
  }, items1);
}
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const jsx = arg1(dependencyMap[4]).jsx;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardUnifiedVC.tsx");

export default function HappeningNowCardUnifiedVC(arg0) {
  let activity;
  let cardKey;
  let fullwidth;
  let guildId;
  let index;
  let panelVariant;
  let stream;
  let userId;
  let voiceState;
  ({ guildId, index, voiceState, fullwidth, panelVariant } = arg0);
  ({ userId, cardKey } = arg0);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  ({ stream, activity } = useCallActivityData(voiceState.channelId));
  if (null != stream) {
    let obj = { index, userId: stream.ownerId, guildId, stream, fullwidth, panelVariant };
    let tmp5 = jsx(importDefault(dependencyMap[5]), obj);
  } else if (null != activity) {
    obj = { index, voiceState, fullwidth, guildId, activity, userId, cardKey, panelVariant };
    tmp5 = jsx(importDefault(dependencyMap[6]), obj);
  } else {
    obj = { index, voiceState, fullwidth, guildId, panelVariant };
    tmp5 = jsx(importDefault(dependencyMap[7]), obj);
  }
  return tmp5;
};
export { useCallActivityData };
