// Module ID: 19093
// Function ID: 19094
// Name: QuestProgressBottomSheet
// Dependencies: [5, 19, 17, 6840, 7839, 6775, 5652, 21, 5009, 575, 504, 14647, 6778, 8020, 9188, 1114, 8765, 7324, 7861, 11803, 9661, 14644, 17030, 10903, 5253, 9658, 8922, 9685, 5267, 5712, 5582, 1093, 14640, 9145, 17058, 6022, 5619, 5629, 17025, 2]
// Exports: default

// Module 19093 (QuestProgressBottomSheet)
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1114 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5652 */;
import QuestConstants from "QuestConstants" /* 6775 */;
import QuestTypes from "QuestTypes" /* 6778 */;
import IconButton2 from "IconButton" /* 8020 */;
import showShareActionSheet2 from "showShareActionSheet" /* 8922 */;
import AssetRegistryDefault from "AssetRegistry" /* 9188 */;
import QuestUtils from "QuestUtils" /* 9658 */;
import QuestCopyUtils from "QuestCopyUtils" /* 9685 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import FramesStore from "FramesStore" /* 6840 */;
import QuestStore from "QuestStore" /* 7839 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, c2, c3;

let closure_12;
let hasOwnProperty;
let metroRequire;
let tmp;
let unpackModuleId;
const FramesActionCreatorsDefault = tmp(10903);
function contextMenuButton(arg0) {
  let intl;
  const obj = { icon: AssetRegistryDefault, variant: "secondary-overlay", accessibilityLabel: intl.string(intl5.t["UKOtz+"]), size: "sm" };
  const IconButton = IconButton2.IconButton;
  const merged = Object.assign(arg0);
  intl = intl5.intl;
  return unpackModuleId(IconButton, obj);
}
function QuestProgressBottomSheet(quest) {
  let claim;
  let intl2;
  let intl4;
  let isClaiming;
  let items3;
  let items4;
  let items5;
  let items7;
  let items8;
  let items9;
  let num;
  let num2;
  let obj8;
  let str2;
  let tmp7Result4;
  let tmp7Result6;
  quest = quest.quest;
  claim = undefined;
  let tmp = quest;
  let obj = quest(8765);
  const isScreenLandscape = obj.useIsScreenLandscape();
  const tmp4 = closure_13(isScreenLandscape);
  const gradientEnd = closure_14().gradientEnd;
  const useGetOrFetchApplication = quest(7324).useGetOrFetchApplication;
  const tmp5 = quest(7324);
  let obj2 = quest(7861);
  const getOrFetchApplication = useGetOrFetchApplication(obj2.getActivityApplicationId(quest));
  let id;
  const tmp8 = claim(11803);
  if (getOrFetchApplication != null) {
    id = getOrFetchApplication.id;
  }
  const url = tmp8({ applicationId: id, size: 600, names: ["embedded_cover"] }).url;
  let tmpResult = tmp(9661);
  const questTaskDetails = tmpResult.useQuestTaskDetails(quest);
  const intl = tmp(1114).intl;
  let obj3 = { questName: quest.config.messages.questName };
  const formatToPlainStringResult = intl.formatToPlainString(tmp(1114).t.EAYZAr, obj3);
  const tmpResult4 = tmp(14644);
  let obj4 = { quest, taskDetails: questTaskDetails, location: QuestsExperimentLocations.QUEST_ACTIVITY_BOTTOM_SHEET, sourceQuestContent: tmp(6778).QuestContent.RUNNING_ACTIVITY };
  const userStatus = quest.userStatus;
  let completedAt;
  const questsInstructionsToWinReward = tmpResult4.useQuestsInstructionsToWinReward(obj4);
  const tmp12 = QuestsExperimentLocations;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  let tmp15 = null != completedAt;
  if (tmp15) {
    const userStatus2 = quest.userStatus;
    let claimedAt;
    if (userStatus2 != null) {
      claimedAt = userStatus2.claimedAt;
    }
    tmp15 = null == claimedAt;
  }
  const tmpResult5 = tmp(9661);
  const isQuestAccessSuspended = tmpResult5.useIsQuestAccessSuspended();
  const tmpResult6 = tmp(17030);
  let obj5 = { quest, questContent: tmp(6778).QuestContent.RUNNING_ACTIVITY, sourceQuestContent: tmp(6778).QuestContent.RUNNING_ACTIVITY };
  const questRewardClaimHandler = tmpResult6.useQuestRewardClaimHandler(obj5);
  ({ isClaiming, claim } = questRewardClaimHandler);
  const isLoading = questRewardClaimHandler.isLoading;
  const items = [claim];
  const items1 = [quest.id];
  const callback = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_1;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let id;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            id = undefined;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: claim(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          if (value) {
            id = mainFrame.getMainFrame();
            if (null != id) {
              const obj = tmp4(c2[23]);
              obj.updateFramePanelMode(id.id, constants.PIP);
            }
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp18) {
        c3 = 3;
        throw tmp18;
      }
    }
  }), items);
  let callback1 = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const mainFrame = FramesStore.getMainFrame();
    if (null != mainFrame) {
      const tmpResult = FramesActionCreatorsDefault;
      tmpResult.updateFramePanelMode(mainFrame.id, ActivityPanelModes.PIP);
    }
    const obj3 = QuestUtils;
    const obj2 = { scrollToQuestId: quest.id, fromContent: QuestTypes.QuestContent.QUEST_BOTTOM_SHEET };
    obj3.openQuestHome(obj2);
  }, items1);
  const items2 = [quest.id];
  const callback2 = react.useCallback(() => {
    let obj3;
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = { message: obj3.getQuestUrl(quest.id) };
    const showShareActionSheet = showShareActionSheet2.showShareActionSheet;
    showShareActionSheet2;
    obj3 = QuestCopyUtils;
    showShareActionSheet(obj2);
  }, items2);
  const callback3 = react.useCallback(() => {
    const obj = claim(dependencyMap[24]);
    obj.hideActionSheet();
  }, []);
  let tmp25 = null != url;
  const obj6 = { style: tmp4.heroContainer, children: items3 };
  BottomSheet = tmp(5267).BottomSheet;
  if (tmp25) {
    const obj7 = { source: obj8, style: tmp4.heroImg };
    obj8 = { uri: url };
    tmp25 = closure_11(tmp7(5712), obj7);
  }
  items3 = [tmp25, , , ];
  const obj9 = { style: tmp4.heroGradient, start: tmp(1093).VerticalGradient.START, end: tmp(1093).VerticalGradient.END, colors: items4 };
  items4 = ["rgba(0, 0, 0, 0)", gradientEnd];
  const tmp7Result = claim(5582);
  items3[1] = closure_11(tmp7Result, obj9);
  const obj10 = { style: tmp4.gameTileContainer, children: closure_11(tmp7Result4, size) };
  size = { quest, height: num2, width: num };
  num = 80;
  num2 = 80;
  tmp7Result4 = claim(14640);
  if (isScreenLandscape) {
    num2 = 56;
  }
  if (isScreenLandscape) {
    num = 56;
  }
  items3[2] = closure_11(closure_5, obj10);
  const obj11 = { style: tmp4.contextMenuContainer, children: items5 };
  const obj12 = { icon: claim(9145), onPress: callback2, variant: "secondary-overlay", size: "sm", accessibilityLabel: intl2.string(tmp(1114).t.RDE0Sc) };
  const IconButton = tmp(8020).IconButton;
  intl2 = tmp(1114).intl;
  items5 = [closure_11(IconButton, obj12), ];
  const obj13 = { quest, showShareLink: true, location: tmp12.QUEST_ACTIVITY_BOTTOM_SHEET, sourceQuestContent: tmp(6778).QuestContent.RUNNING_ACTIVITY, children: contextMenuButton };
  const tmp7Result5 = claim(17058);
  items5[1] = closure_11(tmp7Result5, obj13);
  items3[3] = closure_12(closure_5, obj11);
  const items6 = [closure_12(closure_5, obj6), ];
  const obj14 = { style: tmp4.contentContainer, children: items8 };
  const obj15 = { direction: "vertical", spacing: claim(575).space.PX_8, style: tmp4.textContainer, children: items7 };
  const Stack = tmp(6022).Stack;
  let str = "heading-lg/bold";
  const Text = tmp(5619).Text;
  if (isScreenLandscape) {
    str = "heading-md/bold";
  }
  items7 = [closure_11(Text, { variant: str, color: "mobile-text-heading-primary", children: formatToPlainStringResult }), ];
  const obj16 = { style: tmp4.questDescription, variant: str2, color: "text-muted", children: questsInstructionsToWinReward };
  str2 = "text-md/normal";
  const Text2 = tmp(5619).Text;
  if (isScreenLandscape) {
    str2 = "text-sm/normal";
  }
  items7[1] = closure_11(Text2, obj16);
  items8 = [closure_12(Stack, obj15), ];
  const obj17 = { direction: "vertical", spacing: claim(575).space.PX_12, style: tmp4.buttonsContainer, children: items9 };
  const Stack2 = tmp(6022).Stack;
  const Button = tmp(5629).Button;
  const intl3 = tmp(1114).intl;
  const string = intl3.string;
  const t = tmp(1114).t;
  const obj18 = { size: "lg", text: string(tmp15 ? t.cfY4PE : t.LLLLPD), onPress: callback1, loading: isClaiming, grow: true, disabled: isQuestAccessSuspended && tmp15, onPressDisabled: tmp7Result6 };
  if (tmp15) {
    callback1 = callback;
  }
  if (!isClaiming) {
    isClaiming = isLoading;
  }
  tmp7Result6 = undefined;
  if (isQuestAccessSuspended) {
    if (tmp15) {
      tmp7Result6 = tmp7(17025);
    }
  }
  const obj19 = { handleDisabled: true, startExpanded: true, children: items6 };
  items9 = [closure_11(Button, obj18), ];
  const obj20 = { size: "lg", text: intl4.string(tmp(1114).t.cpT0Cq), onPress: callback3, variant: "secondary", grow: true };
  const Button2 = tmp(5629).Button;
  intl4 = tmp(1114).intl;
  items9[1] = closure_11(Button2, obj20);
  items8[1] = closure_12(Stack2, obj17);
  items6[1] = closure_12(closure_5, obj14);
  return closure_12(BottomSheet, obj19);
}
({ View: hasOwnProperty, StyleSheet: metroRequire } = react_native);
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let closure_13 = createStyles.createStyles((arg0) => {
  let PX_16;
  let PX_161;
  let num2;
  let num4;
  let obj3;
  let obj4;
  let obj5;
  let rect;
  let num = 140;
  const obj = { contentContainer: { display: "flex", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 }, heroContainer: obj3, heroImg: obj4, heroGradient: obj5, gameTileContainer: { position: "absolute", bottom: num4, left: 0, right: 0, alignItems: "center" }, contextMenuContainer: rect, textContainer: { alignItems: "center", paddingTop: PX_16, gap: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_16, textAlign: "center" }, questDescription: { textAlign: "center" }, buttonsContainer: { paddingTop: PX_161 } };
  ({ display: "flex", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 });
  if (arg0) {
    num = 125;
  }
  obj3 = { height: num, position: "relative", marginBottom: num2 };
  num2 = 0;
  if (!arg0) {
    num2 = 52 + tmp(575).space.PX_8;
  }
  obj4 = { resizeMode: "cover", borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg };
  const merged = Object.assign(metroRequire.absoluteFillObject);
  obj5 = { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg };
  const merged1 = Object.assign(metroRequire.absoluteFillObject);
  num4 = -52;
  if (arg0) {
    num4 = tmp(575).space.PX_12;
  }
  rect = { position: "absolute", top: tmp(575).space.PX_16, right: tmp(575).space.PX_16, display: "flex", flexDirection: "row", gap: tmp(575).space.PX_16, alignItems: "center" };
  PX_16 = undefined;
  if (!arg0) {
    PX_16 = tmp(575).space.PX_16;
  }
  PX_161 = undefined;
  ({ alignItems: "center", paddingTop: PX_16, gap: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_16, textAlign: "center" });
  if (!arg0) {
    PX_161 = tmp(575).space.PX_16;
  }
  return obj;
});
createStyles = createStyles_mod;
let closure_14 = createStyles.createStyleProperties(() => {
  const obj = { gradientEnd: nativeDefault.colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT };
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestProgressBottomSheet.tsx");

export default function QuestProgressBottomSheetConnected(questId) {
  questId = questId.questId;
  let obj = questId(504);
  const items = [QuestStore];
  const stateFromStores = obj.useStateFromStores(items, () => QuestStore.getQuest(questId));
  let tmp4 = null;
  if (null != stateFromStores) {
    const obj2 = {
      overrideVisibility: true,
      questOrQuests: stateFromStores,
      questContent: questId(6778).QuestContent.RUNNING_ACTIVITY,
      sourceQuestContent: questId(6778).QuestContent.RUNNING_ACTIVITY,
      children() {
          const obj = { quest: stateFromStores };
          return unpackModuleId(QuestProgressBottomSheet, obj);
        }
    };
    const QuestContentImpressionTrackerNative = tmp(14647).QuestContentImpressionTrackerNative;
    tmp4 = closure_11(QuestContentImpressionTrackerNative, obj2);
  }
  return tmp4;
};
