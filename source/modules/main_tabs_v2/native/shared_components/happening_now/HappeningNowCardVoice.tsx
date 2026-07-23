// Module ID: 14949
// Function ID: 113950
// Name: useVoiceChannelUsers
// Dependencies: [31, 27, 6902, 1849, 4146, 14183, 653, 33, 4130, 675, 10815, 1934, 14932, 14184, 4658, 11962, 14942, 7749, 566, 22, 1327, 4319, 1212, 2]

// Module 14949 (useVoiceChannelUsers)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { HappeningNowCardTrackingType as closure_8 } from "HAPPENING_NOW_PANELS_CONTAINER_PADDING";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
const require = arg1;
function useVoiceChannelUsers(voiceState) {
  const _require = voiceState;
  const voiceUserAffinitySortType = _require(7749).useVoiceUserAffinitySortType("useVoiceChannelUsers");
  const obj = _require(7749);
  let items = [closure_7, closure_6, _isNativeReflectConstruct];
  const items1 = [voiceUserAffinitySortType, voiceState.channelId];
  return _require(566).useStateFromStoresArray(items, () => {
    const voiceStatesForChannel = outer1_7.getVoiceStatesForChannel(voiceState.channelId);
    const mapped = voiceUserAffinitySortType(outer1_2[19])(voiceStatesForChannel).map((userId) => outer2_6.getUser(userId.userId));
    const found = mapped.filter(voiceState(outer1_2[20]).isNotNullish);
    const items = [
      (id) => {
        const userAffinity = outer2_5.getUserAffinity(id.id);
        if ("vc_probability" === outer1_1) {
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
    const arr = voiceUserAffinitySortType(outer1_2[19])(voiceStatesForChannel);
    return found.orderBy(items, ["desc"]).value();
  }, items1);
}
function formatVoiceActivityTitle(arr, guildId) {
  if (0 === arr.length) {
    return "";
  } else if (1 === length) {
    return importDefault(4319).getName(guildId, null, arr[0]);
  } else if (2 === length) {
    const intl = require(1212) /* getSystemLocale */.intl;
    let obj = { user1: importDefault(4319).getName(guildId, null, arr[0]) };
    const obj2 = importDefault(4319);
    obj.user2 = importDefault(4319).getName(guildId, null, arr[1]);
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t["4SM/RX"], obj);
  } else {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { user1: importDefault(4319).getName(guildId, null, arr[0]) };
    const obj6 = importDefault(4319);
    obj.user2 = importDefault(4319).getName(guildId, null, arr[1]);
    obj.extras = arr.length - 2;
    return intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.pjxkCI, obj);
  }
}
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let closure_12 = _createForOfIteratorHelperLoose.createStyles({ content: { flexShrink: 1 }, avatars: { marginRight: 12 } });
const memoResult = importAllResult.memo((guildId) => {
  guildId = guildId.guildId;
  const index = guildId.index;
  const voiceState = guildId.voiceState;
  let flag = guildId.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  let arr;
  const tmp = callback3();
  arr = useVoiceChannelUsers(voiceState);
  const items = [index, guildId, voiceState.channelId, arr];
  if (0 === arr.length) {
    let obj = { panelVariant: flag };
    let tmp14Result = callback(guildId(voiceState[12]).HappeningNowCardPlaceholder, obj);
  } else {
    obj = { onPress: tmp3 };
    let str = "large";
    if (guildId.fullwidth) {
      str = "full";
    }
    obj.width = str;
    obj.IconComponent = guildId(voiceState[14]).VoiceNormalIcon;
    obj.panelVariant = flag;
    obj = { style: tmp.avatars };
    const obj1 = { guildId, users: arr };
    obj.children = callback(index(voiceState[15]), obj1);
    const items1 = [callback(View, obj), ];
    const obj2 = { style: tmp.content };
    const obj3 = { lineClamp: 2, children: tmp2 };
    const items2 = [callback(guildId(voiceState[13]).HappeningNowCardHeader, obj3), ];
    const obj4 = { voiceState };
    items2[1] = callback(guildId(voiceState[16]).HappeningNowVoiceCardSubtitle, obj4);
    obj2.children = items2;
    items1[1] = callback2(View, obj2);
    obj.children = items1;
    tmp14Result = callback2(index(voiceState[13]), obj);
    const tmp14 = callback2;
    const tmp17 = index(voiceState[13]);
  }
  return tmp14Result;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardVoice.tsx");

export default memoResult;
export { useVoiceChannelUsers };
export { formatVoiceActivityTitle };
