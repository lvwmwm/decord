// Module ID: 16857
// Function ID: 16858
// Name: QuestActivityUnenrolledModal
// Dependencies: [5, 32, 19, 17, 7116, 16856, 5756, 21, 4836, 576, 1365, 4767, 4538, 504, 6589, 7137, 10681, 10750, 5759, 1397, 10683, 7141, 5039, 4548, 10749, 14649, 5279, 5899, 10745, 4832, 1115, 5281, 5929, 6795, 6413, 10753, 10769, 2]
// Exports: default

// Module 16857 (QuestActivityUnenrolledModal)
import nativeDefault from "native" /* 576 */;
import intl7 from "intl" /* 1115 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import QuestTypes from "QuestTypes" /* 5759 */;
import AssetRegistryDefault from "AssetRegistry" /* 6413 */;
import HeaderActionButton2 from "HeaderActionButton" /* 6795 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7141 */;
import QuestActionCreators from "QuestActionCreators" /* 10683 */;
import QuestContentImpressionTracker from "QuestContentImpressionTracker" /* 10753 */;
import openQuestAccessSuspendedBottomSheetDefault from "openQuestAccessSuspendedBottomSheet" /* 14649 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import QuestStore from "QuestStore" /* 7116 */;
import UnenrolledActivityQuestStore from "UnenrolledActivityQuestStore" /* 16856 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c2, dependencyMap;

let closure_12;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function QuestActivityUnenrolledModalInner(quest) {
  let accessibilityRole;
  let accessibilityState;
  let closure_2;
  let intl;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items10;
  let items11;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj14;
  let obj16;
  let obj17;
  let state;
  let tmp22;
  quest = quest.quest;
  dependencyMap = undefined;
  let trackQuestContentClickedWithImpression;
  let tmp = quest;
  const tmp2 = dependencyMap;
  let obj = quest(4767);
  const theme = obj.useTheme();
  let obj2 = quest(4538);
  const tmp4 = closure_14(obj2.isThemeDark(theme));
  let obj3 = quest(504);
  const items = [UnenrolledActivityQuestStore];
  const tmp5 = trackQuestContentClickedWithImpression(react.useState(obj3.useStateFromStores(items, () => state.getState().autoEnroll)), 2);
  let checked = tmp5[0];
  dependencyMap = tmp5[1];
  const useGetOrFetchApplication = quest(6589).useGetOrFetchApplication;
  quest(6589);
  let obj4 = quest(7137);
  const getOrFetchApplication = useGetOrFetchApplication(obj4.getActivityApplicationId(quest));
  let obj5 = quest(10681);
  const questTaskDetails = obj5.useQuestTaskDetails(quest);
  const items1 = [getOrFetchApplication];
  const obj6 = quest(10750);
  const obj7 = { quest, taskDetails: questTaskDetails, location: QuestsExperimentLocations.QUEST_ACTIVITY_UNENROLLED_MODAL, sourceQuestContent: quest(5759).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL };
  const questsInstructionsToWinReward = obj6.useQuestsInstructionsToWinReward(obj7);
  const memo = react.useMemo(() => {
    let applicationIconURL = null;
    const tmp = getOrFetchApplication;
    if (null != getOrFetchApplication) {
      const obj3 = { id: null, icon: null, size: 87 };
      ({ id: obj2.id, icon: obj2.icon } = tmp);
      const obj = AvatarUtilsDefault;
      applicationIconURL = obj.getApplicationIconURL(obj3);
    }
    return applicationIconURL;
  }, items1);
  const items2 = [quest.id];
  const callback = react.useCallback(getOrFetchApplication(function*(arg0, value) {
    let closure_0;
    let v1;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === checked) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const obj4 = { questContent: tmp3(c2[18]).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL, questContentCTA: tmp3(c2[21]).QuestContentCTA.START_QUEST, sourceQuestContent: tmp3(c2[18]).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL };
            const enrollInQuest = tmp3(c2[20]).enrollInQuest;
            const id = quest.id;
            const tmp14 = tmp3(c2[20]);
            checked = 1;
            c2 = 1;
            const obj5 = { value: enrollInQuest(id, obj4), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          const arr = checked(c2[22]);
          arr.pop();
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp8) {
        c2 = 3;
        throw tmp8;
      }
    }
  }), items2);
  const obj8 = quest(4548);
  const checkboxA11yNative = obj8.useCheckboxA11yNative({ checked });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const obj9 = quest(10681);
  const isQuestAccessSuspended = obj9.useIsQuestAccessSuspended();
  const obj10 = quest(10749);
  trackQuestContentClickedWithImpression = obj10.useTrackQuestContentClickedWithImpression();
  const items3 = [quest.id, trackQuestContentClickedWithImpression];
  const callback1 = react.useCallback(() => {
    const obj = { questId: quest.id, questContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL, questContentCTA: AnalyticsTypes.QuestContentCTA.QUEST_ACCESS_SUSPENDED, sourceQuestContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL };
    trackQuestContentClickedWithImpression(obj);
    openQuestAccessSuspendedBottomSheetDefault();
  }, items3);
  const obj11 = { direction: "vertical", align: "center", justify: "center", style: tmp4.container, children: items8 };
  const obj12 = { style: tmp4.content, children: items5 };
  const obj13 = { style: tmp4.baseShadow, children: closure_12(closure_7, obj14) };
  let tmp19Result = null != memo;
  obj14 = { style: tmp4.imagesContainer, children: items4 };
  const Stack = quest(5279).Stack;
  if (tmp19Result) {
    const obj15 = { style: tmp4.appIconContainer, children: closure_11(checked(5899), obj16) };
    obj16 = { source: obj17, style: tmp4.appIcon };
    obj17 = { uri: memo };
    tmp19Result = tmp19(tmp18, obj15);
  }
  items4 = [tmp19Result, ];
  const obj18 = { style: tmp4.rewardTileContainer, children: closure_11(checked(10745), size) };
  size = { quest, height: 87, width: 87, style: tmp4.questRewardTile };
  items4[1] = closure_11(closure_7, obj18);
  items5 = [closure_11(tmp18, obj13), ];
  const obj19 = { style: tmp4.textContainer, children: items6 };
  const obj20 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: { textAlign: "center" }, children: intl.string(tmp(1115).t.IrNgN4) };
  const Text = tmp(4832).Text;
  intl = tmp(1115).intl;
  items6 = [closure_11(Text, obj20), ];
  const obj21 = { variant: "text-sm/normal", color: "text-subtle", style: { textAlign: "center" }, children: items7 };
  const Text2 = tmp(4832).Text;
  const intl2 = tmp(1115).intl;
  items7 = [, , ];
  const obj22 = { questName: quest.config.messages.questName };
  items7[0] = intl2.format(tmp(1115).t.V3NSJx, obj22);
  items7[1] = "\u00A0";
  items7[2] = questsInstructionsToWinReward;
  items6[1] = closure_12(Text2, obj21);
  items5[1] = closure_12(closure_7, obj19);
  items8 = [tmp17(tmp18, obj12), ];
  const obj23 = { style: tmp4.footer, children: items10 };
  const obj24 = { style: tmp4.buttonsContainer, children: items9 };
  const obj25 = { size: "lg", text: intl3.string(tmp(1115).t.l7E81v), onPress: callback, disabled: isQuestAccessSuspended, onPressDisabled: tmp22 };
  const Button = tmp(5281).Button;
  intl3 = tmp(1115).intl;
  tmp22 = undefined;
  if (isQuestAccessSuspended) {
    tmp22 = callback1;
  }
  items9 = [closure_11(Button, obj25), ];
  const obj26 = {
    size: "lg",
    text: intl4.string(tmp(1115).t.fyT2ol),
    onPress() {
      const obj = QuestActionCreators;
      const result = obj.dismissQuestActivityModal(quest.id);
      const arr = ModalActionCreatorsDefault;
      arr.pop();
    },
    variant: "secondary"
  };
  const Button2 = tmp(5281).Button;
  intl4 = tmp(1115).intl;
  items9[1] = closure_11(Button2, obj26);
  items10 = [tmp17(tmp18, obj24), ];
  const obj27 = {
    accessibilityRole,
    accessibilityLabel: intl5.string(tmp(1115).t["931n1T"]),
    accessibilityState,
    onPress() {
      closure_2(!first);
      const obj = QuestActionCreators;
      obj.setAutoEnroll(!first);
    },
    style: { alignSelf: "center", flexDirection: "row", alignItems: "center", gap: 8 },
    children: items11
  };
  intl5 = tmp(1115).intl;
  items11 = [closure_11(tmp(5929).FormCheckbox, { checked }), ];
  const obj28 = { variant: "text-sm/normal", color: "text-subtle", children: intl6.string(tmp(1115).t["931n1T"]) };
  const Text3 = tmp(4832).Text;
  intl6 = tmp(1115).intl;
  items11[1] = closure_11(Text3, obj28);
  items10[1] = closure_12(closure_6, obj27);
  items8[1] = closure_12(closure_7, obj23);
  return closure_12(Stack, obj11);
}
function CloseButton() {
  let intl;
  const obj = {
    source: AssetRegistryDefault,
    onPress() {
      const arr = ModalActionCreatorsDefault;
      return arr.pop();
    },
    accessibilityLabel: intl.string(intl7.t.cpT0Cq)
  };
  const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
  intl = intl7.intl;
  return unpackModuleId(HeaderActionButton, obj);
}
({ Pressable: metroRequire, View: metroImportDefault } = react_native);
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
const constants = { MAIN: "main" };
let closure_14 = createStyles.createStyles((arg0) => {
  let items2;
  let items3;
  let obj13;
  let obj14;
  let obj3;
  let obj9;
  let tmp5;
  const obj = { container: { flex: 1, paddingHorizontal: nativeDefault.space.PX_24, paddingVertical: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_48 }, content: { marginTop: "auto" }, imagesContainer: obj3, baseShadow: tmp5, appIconContainer: obj13, appIcon: size, rewardTileContainer: obj14, questRewardTile: { borderRadius: nativeDefault.radii.xl - 2.18 }, textContainer: { alignItems: "center", gap: nativeDefault.space.PX_8 }, buttonsContainer: { flexDirection: "column", gap: nativeDefault.space.PX_8, marginBottom: 20 }, footer: { flexDirection: "column", width: "100%", marginTop: "auto" } };
  ({ flex: 1, paddingHorizontal: nativeDefault.space.PX_24, paddingVertical: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_48 });
  obj3 = { flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: nativeDefault.space.PX_32 };
  const obj4 = utils_PlatformUtils;
  if (obj4.isIOS()) {
    let obj6;
    if (arg0) {
      obj6 = { shadowColor: "rgb(144, 144, 251)", shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.6, shadowRadius: 85 };
      const obj5 = { shadowColor: "rgb(144, 144, 251)", shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.6, shadowRadius: 85 };
    } else {
      obj6 = {};
    }
    obj9 = obj6;
  } else {
    let items1;
    if (arg0) {
      const items = [{ dropShadow: { standardDeviation: "85px", color: "rgba(144, 144, 251, 0.65)", offsetX: 0, offsetY: 0 } }, ];
      const obj7 = { dropShadow: { standardDeviation: "85px", color: "rgba(144, 144, 251, 0.65)", offsetX: 0, offsetY: 0 } };
      const obj8 = { dropShadow: { standardDeviation: "85px", color: "rgba(144, 144, 250, 0.41)", offsetX: 0, offsetY: 0 } };
      items[1] = obj8;
      items1 = items;
    } else {
      items1 = [];
    }
    obj9 = { filter: items1 };
  }
  const merged = Object.assign(obj9);
  const obj10 = {};
  const tmp3Result = utils_PlatformUtils;
  if (tmp3Result.isIOS()) {
    let obj12;
    if (arg0) {
      obj12 = { shadowColor: "rgb(144, 144, 250)", shadowOffset: { width: 0, height: 16 }, shadowOpacity: 0.4, shadowRadius: 85 };
      const obj11 = { shadowColor: "rgb(144, 144, 250)", shadowOffset: { width: 0, height: 16 }, shadowOpacity: 0.4, shadowRadius: 85 };
    } else {
      obj12 = {};
    }
    const merged1 = Object.assign(obj12);
    tmp5 = obj10;
  } else {
    tmp5 = obj10;
  }
  obj13 = { borderRadius: nativeDefault.radii.xl, borderWidth: 2.18, borderColor: "rgba(151, 151, 159, 0.24)", borderStyle: "solid", transform: items2, overflow: "hidden" };
  items2 = [{ rotate: "-12.41deg" }];
  size = { width: 87, height: 87, borderRadius: tmp(576).radii.xl - 2.18 };
  obj14 = { borderWidth: 2.18, borderColor: "rgba(151, 151, 159, 0.24)", borderRadius: nativeDefault.radii.xl, borderStyle: "solid", transform: items3, overflow: "hidden" };
  items3 = [{ translateX: -10 }, { rotate: "7.81deg" }];
  ({ borderRadius: nativeDefault.radii.xl - 2.18 });
  ({ alignItems: "center", gap: nativeDefault.space.PX_8 });
  ({ flexDirection: "column", gap: nativeDefault.space.PX_8, marginBottom: 20 });
  return obj;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestActivityUnenrolledModal.tsx");

export default function QuestActivityUnenrolledModal(questId) {
  questId = questId.questId;
  let obj = questId(504);
  const items = [QuestStore];
  const stateFromStores = obj.useStateFromStores(items, () => QuestStore.getQuest(questId));
  const tmp = questId;
  if (null == stateFromStores) {
    return null;
  } else {
    const obj2 = {};
    const obj3 = {
      headerLeft: CloseButton,
      headerRight() {
          return null;
        },
      headerTitle() {
          let intl;
          const obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: intl.string(questId(dependencyMap[30]).t.l7E81v) };
          const Text = questId(dependencyMap[29]).Text;
          intl = questId(dependencyMap[30]).intl;
          return closure_1_11(Text, obj);
        },
      render() {
          let quest;
          let obj = {
            questOrQuests: stateFromStores,
            questContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL,
            sourceQuestContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL,
            children() {
              const obj = { quest };
              return closure_2_11(QuestActivityUnenrolledModalInner, obj);
            }
          };
          const QuestContentImpressionTrackerNative = QuestContentImpressionTracker.QuestContentImpressionTrackerNative;
          return unpackModuleId(QuestContentImpressionTrackerNative, obj);
        }
    };
    obj2[constants.MAIN] = obj3;
    const obj4 = { screens: obj2, initialRouteName: constants.MAIN };
    return closure_11(tmp(10769).Modal, obj4);
  }
};
