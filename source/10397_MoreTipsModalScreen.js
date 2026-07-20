// Module ID: 10397
// Function ID: 80111
// Name: MoreTipsModalScreen
// Dependencies: []
// Exports: default

// Module 10397 (MoreTipsModalScreen)
function MoreTipsModalScreen(learnMore) {
  let actionItems;
  let channelId;
  let description;
  let safetyTips;
  let senderId;
  let warningId;
  learnMore = learnMore.learnMore;
  ({ channelId, warningId, senderId, description, safetyTips, actionItems } = learnMore);
  const tmp = callback3();
  let obj = { keyboardShouldPersistTaps: "handled", style: tmp.scroll };
  obj = { style: tmp.contentContainer };
  obj = { style: tmp.tipsContainer };
  const items = [callback(importDefault(dependencyMap[7]), { description, safetyTips, showHeader: true }), ];
  let tmp8 = null;
  if (null != learnMore) {
    const obj1 = { style: tmp.learnMore, children: learnMore };
    tmp8 = callback(closure_4, obj1);
  }
  items[1] = tmp8;
  obj.children = items;
  const items1 = [callback2(closure_4, obj), , ];
  const obj2 = {};
  const obj3 = { INTEGRATION_CREATE: "/assets/images/native/premium/illustrations", ConstraintReasonCode: 51, style: tmp.header };
  const intl = arg1(dependencyMap[9]).intl;
  obj3.children = intl.string(arg1(dependencyMap[9]).t.K5FKtc);
  const items2 = [callback(arg1(dependencyMap[8]).Text, obj3), actionItems];
  obj2.children = items2;
  items1[1] = callback2(closure_4, obj2);
  items1[2] = callback(importDefault(dependencyMap[10]), { channelId, warningId, senderId });
  obj.children = items1;
  obj.children = callback2(closure_4, obj);
  return callback(closure_5, obj);
}
function getScreens(headerStyle) {
  ({ modalKey: closure_0, channelId: closure_1, warningId: closure_2, senderId: closure_3, description: closure_4, safetyTips: closure_5, actionItems: closure_6, learnMore: closure_7 } = headerStyle);
  const MORE_TIPS = {
    headerRight() {
      const obj = {
        onPress() {
          return callback(closure_2[12]).popWithKey(closure_0);
        },
        source: callback2(closure_2[13]),
        iconSize: callback(closure_2[14]).IconSizes.MEDIUM
      };
      const intl = callback(closure_2[9]).intl;
      obj.accessibilityLabel = intl.string(callback(closure_2[9]).t.cpT0Cq);
      return callback3(callback(closure_2[11]).HeaderActionButton, obj);
    },
    headerTitle() {
      return null;
    },
    headerLeft() {
      return null;
    },
    headerStyle: headerStyle.headerStyle,
    render() {
      return callback3(closure_11, { channelId: closure_1, warningId: closure_2, senderId: closure_3, description: closure_4, safetyTips: closure_5, actionItems: closure_6, learnMore: closure_7 });
    }
  };
  return { MORE_TIPS };
}
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, ScrollView: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOWER };
obj.scroll = obj;
const tmp3 = arg1(dependencyMap[4]);
obj.contentContainer = { marginHorizontal: importDefault(dependencyMap[6]).space.PX_16, marginBottom: importDefault(dependencyMap[6]).space.PX_16, gap: importDefault(dependencyMap[6]).space.PX_16 };
const obj1 = { marginHorizontal: importDefault(dependencyMap[6]).space.PX_16, marginBottom: importDefault(dependencyMap[6]).space.PX_16, gap: importDefault(dependencyMap[6]).space.PX_16 };
obj.tipsContainer = { gap: importDefault(dependencyMap[6]).space.PX_8 };
obj.learnMore = { alignItems: "center" };
const obj2 = { gap: importDefault(dependencyMap[6]).space.PX_8 };
obj.header = { marginTop: importDefault(dependencyMap[6]).space.PX_16, marginBottom: importDefault(dependencyMap[6]).space.PX_4 };
let closure_10 = obj.createStyles(obj);
const obj3 = { marginTop: importDefault(dependencyMap[6]).space.PX_16, marginBottom: importDefault(dependencyMap[6]).space.PX_4 };
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreTipsModal.tsx");

export default function MoreTipsModal(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const warningId = channelId.warningId;
  const importDefault = warningId;
  const senderId = channelId.senderId;
  const dependencyMap = senderId;
  let obj = arg1(dependencyMap[16]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => channelSafetyWarning.getChannelSafetyWarning(channelId, warningId));
  const React = stateFromStores;
  const items1 = [channelId, warningId, senderId, stateFromStores];
  const effect = React.useEffect(() => {
    let obj = channelId(senderId[17]);
    obj = { channelId, warningId, senderId };
    let type;
    if (null != stateFromStores) {
      type = stateFromStores.type;
    }
    obj.warningType = type;
    obj.trackViewedEvent(constants.SAFETY_WARNING_MODAL_VIEWED, obj);
    obj = { name: channelId(senderId[19]).MetricEvents.SAFETY_WARNING_MODAL_VIEW };
    warningId(senderId[18]).increment(obj);
  }, items1);
  obj = { screens: getScreens(channelId), initialRouteName: "MORE_TIPS", headerStatusBarHeight: importDefault(dependencyMap[15])().top };
  return callback(arg1(dependencyMap[20]).Navigator, obj);
};
