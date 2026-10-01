// Module ID: 15719
// Function ID: 15720
// Name: HappeningNowCardVoice
// Dependencies: [19, 17, 7072, 1372, 4855, 14841, 1074, 21, 4836, 1241, 12443, 1981, 15702, 14842, 5415, 12613, 15712, 7516, 504, 12, 1370, 4988, 1115, 2]
// Exports: useVoiceChannelUsers

// Module 15719 (HappeningNowCardVoice)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4988 */;
import HappeningNowConstants from "HappeningNowConstants" /* 14841 */;
import react from "react" /* 19 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7072 */;
import UserStore from "UserStore" /* 1372 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, userAffinity, voiceStatesForChannel;

let c10;
let unpackModuleId;
function formatVoiceActivityTitle(stateFromStoresArray, guildId) {
  let obj2;
  let obj3;
  let obj6;
  let obj7;
  if (0 === stateFromStoresArray.length) {
    return "";
  } else if (1 === stateFromStoresArray.length) {
    const obj4 = NicknameUtilsDefault;
    return obj4.getName(guildId, null, stateFromStoresArray[0]);
  } else if (2 === stateFromStoresArray.length) {
    const intl = intl3.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { user1: obj2.getName(guildId, null, stateFromStoresArray[0]), user2: obj3.getName(guildId, null, stateFromStoresArray[1]) };
    const prop = intl3.t["4SM/RX"];
    obj2 = NicknameUtilsDefault;
    obj3 = NicknameUtilsDefault;
    return formatToPlainString(prop, obj);
  } else {
    const intl2 = intl3.intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const obj5 = { user1: obj6.getName(guildId, null, stateFromStoresArray[0]), user2: obj7.getName(guildId, null, stateFromStoresArray[1]), extras: stateFromStoresArray.length - 2 };
    const pjxkCI = intl3.t.pjxkCI;
    obj6 = NicknameUtilsDefault;
    obj7 = NicknameUtilsDefault;
    return formatToPlainString2(pjxkCI, obj5);
  }
}
const View = react_native.View;
let closure_8 = HappeningNowConstants.HappeningNowCardTrackingType;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles({ content: { flexShrink: 1 }, avatars: { marginRight: 12 } });
const memoResult = react.memo((guildId) => {
  let items3;
  let items4;
  let obj6;
  let str;
  let tmp11Result;
  guildId = guildId.guildId;
  const index = guildId.index;
  const voiceState = guildId.voiceState;
  let flag = guildId.panelVariant;
  const fullwidth = guildId.fullwidth;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_12();
  let obj = guildId(voiceState[17]);
  const voiceUserAffinitySortType = obj.useVoiceUserAffinitySortType("useVoiceChannelUsers");
  let obj2 = guildId(voiceState[18]);
  let items = [VoiceStateStore, UserStore, UserAffinitiesV2Store];
  const items1 = [voiceUserAffinitySortType, voiceState.channelId];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items, () => {
    let user;
    voiceStatesForChannel = voiceStatesForChannel.getVoiceStatesForChannel(voiceState.channelId);
    const arr = index(voiceState[19])(voiceStatesForChannel);
    const mapped = arr.map((userId) => user.getUser(userId.userId));
    const found = mapped.filter(guildId(voiceState[20]).isNotNullish);
    const items = [
      (id) => {
        let num;
        userAffinity = userAffinity.getUserAffinity(id.id);
        if ("vc_probability" === voiceUserAffinitySortType) {
          let num2;
          if (userAffinity != null) {
            num2 = userAffinity.vcProbability;
          }
          if (num2 == null) {
            num2 = 0;
          }
          num = num2;
        } else {
          num = undefined;
          if (userAffinity != null) {
            num = userAffinity.communicationProbability;
          }
          if (num == null) {
            num = 0;
          }
        }
        return num;
      }
    ];
    const iter = found.orderBy(items, ["desc"]);
    return iter.value();
  }, items1);
  const items2 = [index, guildId, voiceState.channelId, stateFromStoresArray];
  const tmp5 = formatVoiceActivityTitle(stateFromStoresArray, guildId);
  if (0 === stateFromStoresArray.length) {
    const obj3 = { panelVariant: flag };
    tmp11Result = closure_10(tmp2(tmp3[12]).HappeningNowCardPlaceholder, obj3);
  } else {
    const obj4 = { onPress: tmp6, width: str, IconComponent: guildId(voiceState[14]).VoiceNormalIcon, panelVariant: flag, children: items3 };
    str = "large";
    const tmp12 = index;
    const tmp13 = index(voiceState[13]);
    if (fullwidth) {
      str = "full";
    }
    const obj5 = { style: tmp.avatars, children: closure_10(tmp12(voiceState[15]), obj6) };
    obj6 = { guildId, users: stateFromStoresArray };
    items3 = [closure_10(View, obj5), ];
    const obj7 = { style: tmp.content, children: items4 };
    const obj8 = { lineClamp: 2, children: tmp5 };
    items4 = [closure_10(tmp2(tmp3[13]).HappeningNowCardHeader, obj8), ];
    const obj9 = { voiceState };
    items4[1] = closure_10(guildId(voiceState[16]).HappeningNowVoiceCardSubtitle, obj9);
    items3[1] = closure_11(View, obj7);
    tmp11Result = tmp11(tmp13, obj4);
  }
  return tmp11Result;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardVoice.tsx");

export default memoResult;
export const useVoiceChannelUsers = function useVoiceChannelUsers(channelId) {
  _require = channelId;
  const obj = require("VoiceUserAffinityExperiment");
  const voiceUserAffinitySortType = obj.useVoiceUserAffinitySortType("useVoiceChannelUsers");
  const items = [VoiceStateStore, UserStore, UserAffinitiesV2Store];
  const items1 = [voiceUserAffinitySortType, channelId.channelId];
  const obj2 = require("get initialized");
  return obj2.useStateFromStoresArray(items, () => {
    let user;
    voiceStatesForChannel = voiceStatesForChannel.getVoiceStatesForChannel(voiceState.channelId);
    const arr = index(voiceState[19])(voiceStatesForChannel);
    const mapped = arr.map((userId) => user.getUser(userId.userId));
    const found = mapped.filter(guildId(voiceState[20]).isNotNullish);
    const items = [
      (id) => {
        let num;
        userAffinity = userAffinity.getUserAffinity(id.id);
        if ("vc_probability" === voiceUserAffinitySortType) {
          let num2;
          if (userAffinity != null) {
            num2 = userAffinity.vcProbability;
          }
          if (num2 == null) {
            num2 = 0;
          }
          num = num2;
        } else {
          num = undefined;
          if (userAffinity != null) {
            num = userAffinity.communicationProbability;
          }
          if (num == null) {
            num = 0;
          }
        }
        return num;
      }
    ];
    const iter = found.orderBy(items, ["desc"]);
    return iter.value();
  }, items1);
};
export { formatVoiceActivityTitle };
