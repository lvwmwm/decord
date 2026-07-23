// Module ID: 15715
// Function ID: 121196
// Name: QuestActivityUnenrolledModalInner
// Dependencies: [5, 57, 31, 27, 6942, 15714, 4976, 33, 4130, 689, 478, 4066, 3840, 566, 5470, 6965, 10464, 10926, 4979, 1392, 9444, 6969, 4337, 3848, 4541, 5085, 10922, 4126, 1212, 4543, 7497, 5788, 7607, 10929, 11073, 2]
// Exports: default

// Module 15715 (QuestActivityUnenrolledModalInner)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import HeaderActionButton from "HeaderActionButton";
import get_ActivityIndicator from "Text";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { QuestsExperimentLocations } from "QuestsExperimentLocations";
import jsxProd from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_6;
let closure_7;
const require = arg1;
function QuestActivityUnenrolledModalInner(quest) {
  let accessibilityRole;
  let accessibilityState;
  quest = quest.quest;
  let obj = quest(4066);
  const theme = obj.useTheme();
  let obj1 = quest(3840);
  const tmp2 = callback4(obj1.isThemeDark(theme));
  let obj2 = quest(566);
  const items = [closure_9];
  const tmp3 = callback(React.useState(obj2.useStateFromStores(items, () => outer1_9.getState().autoEnroll)), 2);
  const first = tmp3[0];
  const dependencyMap = tmp3[1];
  let obj3 = quest(5470);
  let obj4 = quest(6965);
  const getOrFetchApplication = obj3.useGetOrFetchApplication(obj4.getActivityApplicationId(quest));
  let obj5 = quest(10464);
  const questTaskDetails = obj5.useQuestTaskDetails(quest);
  let obj6 = quest(10926);
  obj = { quest, taskDetails: questTaskDetails, location: QuestsExperimentLocations.QUEST_ACTIVITY_UNENROLLED_MODAL, sourceQuestContent: quest(4979).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL };
  const items1 = [getOrFetchApplication];
  const fn = () => {
    let applicationIconURL = null;
    if (null != getOrFetchApplication) {
      let obj = first(1392);
      obj = {};
      ({ id: obj2.id, icon: obj2.icon } = getOrFetchApplication);
      obj.size = 87;
      applicationIconURL = obj.getApplicationIconURL(obj);
    }
    return applicationIconURL;
  };
  const questsInstructionsToWinReward = obj6.useQuestsInstructionsToWinReward(obj);
  const memo = React.useMemo(fn, items1);
  // CreateGeneratorClosureLongIndex (0x67)
  const items2 = [quest.id];
  callback = React.useCallback(getOrFetchApplication(fn), items2);
  let obj8 = quest(3848);
  const checkboxA11yNative = obj8.useCheckboxA11yNative({ checked: first });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  obj = { direction: "vertical", align: "center", justify: "center", style: tmp2.container };
  obj1 = { style: tmp2.content };
  obj2 = { style: tmp2.baseShadow };
  obj3 = { style: tmp2.imagesContainer };
  let tmp18 = null != memo;
  if (tmp18) {
    obj4 = { style: tmp2.appIconContainer };
    obj5 = {};
    obj6 = { uri: memo };
    obj5.source = obj6;
    obj5.style = tmp2.appIcon;
    obj4.children = callback2(first(5085), obj5);
    tmp18 = callback2(closure_7, obj4);
  }
  const items3 = [tmp18, ];
  obj8 = { quest, height: 87, width: 87, style: tmp2.questRewardTile };
  items3[1] = callback2(closure_7, { style: tmp2.rewardTileContainer, children: callback2(first(10922), obj8) });
  obj3.children = items3;
  obj2.children = callback3(closure_7, obj3);
  const items4 = [callback2(closure_7, obj2), ];
  const obj9 = { style: tmp2.textContainer };
  const obj10 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: { textAlign: "center" } };
  const intl = quest(1212).intl;
  obj10.children = intl.string(quest(1212).t.IrNgN4);
  const items5 = [callback2(quest(4126).Text, obj10), ];
  const obj11 = { variant: "text-sm/normal", color: "text-subtle", style: { textAlign: "center" } };
  const intl2 = quest(1212).intl;
  const items6 = [intl2.format(quest(1212).t.V3NSJx, { questName: quest.config.messages.questName }), "\u00A0", questsInstructionsToWinReward];
  obj11.children = items6;
  items5[1] = callback3(quest(4126).Text, obj11);
  obj9.children = items5;
  items4[1] = callback3(closure_7, obj9);
  obj1.children = items4;
  const items7 = [callback3(closure_7, obj1), ];
  const obj13 = { style: tmp2.footer };
  const obj14 = { style: tmp2.buttonsContainer };
  const obj15 = { size: "lg" };
  const intl3 = quest(1212).intl;
  obj15.text = intl3.string(quest(1212).t.l7E81v);
  obj15.onPress = callback;
  const items8 = [callback2(quest(4543).Button, obj15), ];
  const obj16 = { size: "lg" };
  const intl4 = quest(1212).intl;
  obj16.text = intl4.string(quest(1212).t.fyT2ol);
  obj16.onPress = function onPress() {
    const result = quest(9444).dismissQuestActivityModal(quest.id);
    let arr = first(4337);
    arr = arr.pop();
  };
  obj16.variant = "secondary";
  items8[1] = callback2(quest(4543).Button, obj16);
  obj14.children = items8;
  const items9 = [callback3(closure_7, obj14), ];
  const obj17 = { accessibilityRole };
  const intl5 = quest(1212).intl;
  obj17.accessibilityLabel = intl5.string(quest(1212).t["931n1T"]);
  obj17.accessibilityState = accessibilityState;
  obj17.onPress = function onPress() {
    dependencyMap(!first);
    quest(9444).setAutoEnroll(!first);
  };
  obj17.style = { alignSelf: "center", flexDirection: "row", alignItems: "center", gap: 8 };
  const items10 = [callback2(quest(7497).FormCheckbox, { checked: first }), ];
  const obj18 = { variant: "text-sm/normal", color: "text-subtle" };
  const intl6 = quest(1212).intl;
  obj18.children = intl6.string(quest(1212).t["931n1T"]);
  items10[1] = callback2(quest(4126).Text, obj18);
  obj17.children = items10;
  items9[1] = callback3(closure_6, obj17);
  obj13.children = items9;
  items7[1] = callback3(closure_7, obj13);
  obj.children = items7;
  return callback3(quest(4541).Stack, obj);
}
function CloseButton() {
  const obj = {
    source: importDefault(7607),
    onPress() {
      return outer1_1(outer1_2[22]).pop();
    }
  };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.cpT0Cq);
  return callback2(require(5788) /* HeaderActionButton */.HeaderActionButton, obj);
}
({ Pressable: closure_6, View: closure_7 } = get_ActivityIndicator);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = { MAIN: "main" };
let closure_14 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { flex: 1, paddingHorizontal: importDefault(689).space.PX_24, paddingVertical: importDefault(689).space.PX_16, paddingBottom: importDefault(689).space.PX_48 };
  obj.container = obj;
  obj.content = { marginTop: "auto" };
  obj = { flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: importDefault(689).space.PX_32 };
  let obj3 = require(478) /* isWindows */;
  if (obj3.isIOS()) {
    if (arg0) {
      const obj1 = { shadowColor: "rgb(144, 144, 251)", shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.6, shadowRadius: 85 };
      let obj2 = obj1;
    } else {
      obj2 = {};
    }
  } else {
    obj3 = {};
    if (arg0) {
      const obj4 = { dropShadow: { standardDeviation: "85px", color: "rgba(144, 144, 251, 0.65)", offsetX: 0, offsetY: 0 } };
      const items = [obj4, ];
      const obj5 = { dropShadow: { standardDeviation: "85px", color: "rgba(144, 144, 250, 0.41)", offsetX: 0, offsetY: 0 } };
      items[1] = obj5;
      let items1 = items;
    } else {
      items1 = [];
    }
    obj3.filter = items1;
    const merged = Object.assign(obj3);
    obj.imagesContainer = obj;
    let obj9 = require(478) /* isWindows */;
    const obj6 = {};
    if (obj9.isIOS()) {
      if (arg0) {
        const obj7 = { shadowColor: "rgb(144, 144, 250)", shadowOffset: { width: 0, height: 16 }, shadowOpacity: 0.4, shadowRadius: 85 };
        let obj8 = obj7;
      } else {
        obj8 = {};
      }
      const merged1 = Object.assign(obj8);
    } else {
      obj.baseShadow = obj6;
      obj9 = { borderRadius: importDefault(689).radii.xl, borderWidth: 2.18, borderColor: "rgba(151, 151, 159, 0.24)", borderStyle: "solid", transform: null, overflow: "hidden" };
      const obj10 = { rotate: "-12.41deg" };
      const items2 = [obj10];
      obj9.transform = items2;
      obj.appIconContainer = obj9;
      const obj11 = { width: 87, height: 87, borderRadius: importDefault(689).radii.xl - 2.18 };
      obj.appIcon = obj11;
      const obj12 = { borderWidth: 2.18, borderColor: "rgba(151, 151, 159, 0.24)", borderRadius: importDefault(689).radii.xl, borderStyle: "solid", transform: null, overflow: "hidden" };
      const obj13 = { translateX: -10 };
      const items3 = [obj13, ];
      const obj14 = { rotate: "7.81deg" };
      items3[1] = obj14;
      obj12.transform = items3;
      obj.rewardTileContainer = obj12;
      const obj15 = { borderRadius: importDefault(689).radii.xl - 2.18 };
      obj.questRewardTile = obj15;
      const obj16 = { alignItems: "center", gap: importDefault(689).space.PX_8 };
      obj.textContainer = obj16;
      const obj17 = { flexDirection: "column", gap: importDefault(689).space.PX_8, marginBottom: 20 };
      obj.buttonsContainer = obj17;
      obj.footer = { flexDirection: "column", width: "100%", marginTop: "auto" };
      return obj;
    }
  }
});
let result = require("result").fileFinishedImporting("modules/quests/native/QuestActivityUnenrolledModal.tsx");

export default function QuestActivityUnenrolledModal(questId) {
  questId = questId.questId;
  let obj = questId(566);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getQuest(questId));
  if (null == stateFromStores) {
    return null;
  } else {
    obj = {};
    obj = {
      headerLeft: CloseButton,
      headerRight() {
          return null;
        },
      headerTitle() {
          const obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary" };
          const intl = questId(outer1_2[28]).intl;
          obj.children = intl.string(questId(outer1_2[28]).t.l7E81v);
          return outer1_11(questId(outer1_2[27]).Text, obj);
        },
      render() {
          const obj = {
            questOrQuests: stateFromStores,
            questContent: questId(outer1_2[18]).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL,
            sourceQuestContent: questId(outer1_2[18]).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL,
            children() {
              return outer2_11(outer2_15, { quest: outer1_1 });
            }
          };
          return outer1_11(questId(outer1_2[33]).QuestContentImpressionTrackerNative, obj);
        }
    };
    obj[constants.MAIN] = obj;
    const obj1 = { screens: obj, initialRouteName: constants.MAIN };
    return callback2(questId(11073).Modal, obj1);
  }
};
