// Module ID: 14815
// Function ID: 111681
// Name: useVoiceChannelUsers
// Dependencies: []

// Module 14815 (useVoiceChannelUsers)
function useVoiceChannelUsers(voiceState) {
  const arg1 = voiceState;
  const voiceUserAffinitySortType = arg1(dependencyMap[17]).useVoiceUserAffinitySortType("useVoiceChannelUsers");
  const importDefault = voiceUserAffinitySortType;
  const obj = arg1(dependencyMap[17]);
  const items = [closure_7, closure_6, closure_5];
  const items1 = [voiceUserAffinitySortType, voiceState.channelId];
  return arg1(dependencyMap[18]).useStateFromStoresArray(items, () => {
    const voiceStatesForChannel = voiceStatesForChannel.getVoiceStatesForChannel(arg0.channelId);
    const mapped = voiceUserAffinitySortType(closure_2[19])(voiceStatesForChannel).map((userId) => user.getUser(userId.userId));
    const found = mapped.filter(arg0(closure_2[20]).isNotNullish);
    const items = [
      (id) => {
        const userAffinity = userAffinity.getUserAffinity(id.id);
        if ("vc_probability" === closure_1) {
          let vcProbability;
          if (null != userAffinity) {
            vcProbability = userAffinity.vcProbability;
          }
          let num2 = 0;
          if (null != vcProbability) {
            num2 = vcProbability;
          }
          let num = num2;
        } else {
          let prop;
          if (null != userAffinity) {
            prop = userAffinity.communicationProbability;
          }
          num = 0;
          if (null != prop) {
            num = prop;
          }
        }
        return num;
      }
    ];
    const arr = voiceUserAffinitySortType(closure_2[19])(voiceStatesForChannel);
    return found.orderBy(items, []).value();
  }, items1);
}
function formatVoiceActivityTitle(arr, guildId) {
  if (0 === arr.length) {
    return "";
  } else if (1 === length) {
    return importDefault(dependencyMap[21]).getName(guildId, null, arr[0]);
  } else if (2 === length) {
    const intl = guildId(dependencyMap[22]).intl;
    let obj = { user1: importDefault(dependencyMap[21]).getName(guildId, null, arr[0]) };
    const obj2 = importDefault(dependencyMap[21]);
    obj.user2 = importDefault(dependencyMap[21]).getName(guildId, null, arr[1]);
    return intl.formatToPlainString(guildId(dependencyMap[22]).t.4SM/RX, obj);
  } else {
    const intl2 = guildId(dependencyMap[22]).intl;
    obj = { user1: importDefault(dependencyMap[21]).getName(guildId, null, arr[0]) };
    const obj6 = importDefault(dependencyMap[21]);
    obj.user2 = importDefault(dependencyMap[21]).getName(guildId, null, arr[1]);
    obj.extras = arr.length - 2;
    return intl2.formatToPlainString(guildId(dependencyMap[22]).t.pjxkCI, obj);
  }
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = arg1(dependencyMap[5]).HappeningNowCardTrackingType;
const AnalyticEvents = arg1(dependencyMap[6]).AnalyticEvents;
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[7]));
const tmp2 = arg1(dependencyMap[7]);
let closure_12 = arg1(dependencyMap[8]).createStyles({ content: { flexShrink: 1 }, avatars: { marginRight: 12 } });
const obj2 = arg1(dependencyMap[8]);
const memoResult = importAllResult.memo((guildId) => {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const index = guildId.index;
  const importDefault = index;
  const voiceState = guildId.voiceState;
  const dependencyMap = voiceState;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback3();
  const arr = useVoiceChannelUsers(voiceState);
  const items = [index, guildId, voiceState.channelId, arr];
  if (0 === arr.length) {
    let obj = { panelVariant: flag };
    let tmp14Result = callback(arg1(dependencyMap[12]).HappeningNowCardPlaceholder, obj);
  } else {
    obj = { onPress: tmp3 };
    let str = "large";
    if (guildId.fullwidth) {
      str = "full";
    }
    obj.width = str;
    obj.IconComponent = arg1(dependencyMap[14]).VoiceNormalIcon;
    obj.panelVariant = flag;
    obj = { style: tmp.avatars };
    const obj1 = { guildId, users: arr };
    obj.children = callback(importDefault(dependencyMap[15]), obj1);
    const items1 = [callback(View, obj), ];
    const obj2 = { style: tmp.content };
    const obj3 = { lineClamp: 2, children: tmp2 };
    const items2 = [callback(arg1(dependencyMap[13]).HappeningNowCardHeader, obj3), ];
    const obj4 = { voiceState };
    items2[1] = callback(arg1(dependencyMap[16]).HappeningNowVoiceCardSubtitle, obj4);
    obj2.children = items2;
    items1[1] = callback2(View, obj2);
    obj.children = items1;
    tmp14Result = callback2(importDefault(dependencyMap[13]), obj);
    const tmp14 = callback2;
    const tmp17 = importDefault(dependencyMap[13]);
  }
  return tmp14Result;
});
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardVoice.tsx");

export default memoResult;
export { useVoiceChannelUsers };
export { formatVoiceActivityTitle };
