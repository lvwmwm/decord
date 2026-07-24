// Module ID: 10443
// Function ID: 80400
// Name: MoreTipsModalScreen
// Dependencies: [31, 27, 9139, 653, 33, 4130, 689, 10186, 4126, 1212, 10444, 5788, 4337, 7696, 1273, 1557, 624, 10163, 6836, 6841, 5517, 2]
// Exports: default

// Module 10443 (MoreTipsModalScreen)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_8;
let closure_9;
const require = arg1;
function MoreTipsModalScreen(learnMore) {
  let actionItems;
  let channelId;
  let description;
  let safetyTips;
  let senderId;
  let warningId;
  learnMore = learnMore.learnMore;
  ({ channelId, warningId, senderId, description, safetyTips, actionItems } = learnMore);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { keyboardShouldPersistTaps: "handled", style: tmp.scroll };
  obj = { style: tmp.contentContainer };
  obj = { style: tmp.tipsContainer };
  const items = [callback(importDefault(10186), { description, safetyTips, showHeader: true }), ];
  let tmp8 = null;
  if (null != learnMore) {
    const obj1 = { style: tmp.learnMore, children: learnMore };
    tmp8 = callback(closure_4, obj1);
  }
  items[1] = tmp8;
  obj.children = items;
  const items1 = [callback2(closure_4, obj), , ];
  const obj2 = {};
  const obj3 = { variant: "eyebrow", color: "text-default", style: tmp.header };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj3.children = intl.string(require(1212) /* getSystemLocale */.t.K5FKtc);
  const items2 = [callback(require(4126) /* Text */.Text, obj3), actionItems];
  obj2.children = items2;
  items1[1] = callback2(closure_4, obj2);
  items1[2] = callback(importDefault(10444), { channelId, warningId, senderId });
  obj.children = items1;
  obj.children = callback2(closure_4, obj);
  return callback(closure_5, obj);
}
function getScreens(headerStyle) {
  let AnalyticEvents;
  let result;
  let closure_4;
  let closure_5;
  let _isNativeReflectConstruct;
  let dependencyMap;
  let importDefault;
  let require;
  ({ modalKey: require, channelId: importDefault, warningId: dependencyMap, senderId: result, description: closure_4, safetyTips: closure_5, actionItems: _isNativeReflectConstruct, learnMore: AnalyticEvents } = headerStyle);
  const MORE_TIPS = {
    headerRight() {
      const obj = {
        onPress() {
          return outer2_1(outer2_2[12]).popWithKey(outer1_0);
        },
        source: outer1_1(outer1_2[13]),
        iconSize: outer1_0(outer1_2[14]).IconSizes.MEDIUM
      };
      const intl = outer1_0(outer1_2[9]).intl;
      obj.accessibilityLabel = intl.string(outer1_0(outer1_2[9]).t.cpT0Cq);
      return outer1_8(outer1_0(outer1_2[11]).HeaderActionButton, obj);
    },
    headerTitle() {
      return null;
    },
    headerLeft() {
      return null;
    },
    headerStyle: headerStyle.headerStyle,
    render() {
      return outer1_8(outer1_11, { channelId: closure_1, warningId: closure_2, senderId: result, description: closure_4, safetyTips: closure_5, actionItems: _isNativeReflectConstruct, learnMore: closure_7 });
    }
  };
  return { MORE_TIPS };
}
({ View: closure_4, ScrollView: closure_5 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.scroll = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.contentContainer = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj1 = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.tipsContainer = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.learnMore = { alignItems: "center" };
let obj2 = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.header = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreTipsModal.tsx");

export default function MoreTipsModal(channelId) {
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  const senderId = channelId.senderId;
  let obj = channelId(senderId[16]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getChannelSafetyWarning(channelId, warningId));
  const items1 = [channelId, warningId, senderId, stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    let obj = channelId(senderId[17]);
    obj = { channelId, warningId, senderId };
    let type;
    if (null != stateFromStores) {
      type = stateFromStores.type;
    }
    obj.warningType = type;
    obj.trackViewedEvent(outer1_7.SAFETY_WARNING_MODAL_VIEWED, obj);
    obj = { name: channelId(senderId[19]).MetricEvents.SAFETY_WARNING_MODAL_VIEW };
    warningId(senderId[18]).increment(obj);
  }, items1);
  obj = { screens: getScreens(channelId), initialRouteName: "MORE_TIPS", headerStatusBarHeight: warningId(senderId[15])().top };
  return callback(channelId(senderId[20]).Navigator, obj);
};
