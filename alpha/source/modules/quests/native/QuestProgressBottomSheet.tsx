// Module ID: 18999
// Function ID: 19000
// Name: QuestProgressBottomSheet
// Dependencies: [5, 19, 17, 6833, 7834, 6768, 5646, 21, 5005, 587, 558, 576, 504, 14614, 6771, 8014, 9175, 1125, 8731, 7856, 7317, 11602, 9636, 14611, 16976, 10880, 5247, 9633, 8888, 9660, 5707, 5295, 1104, 14607, 9132, 17004, 5271, 6015, 16971, 5281, 5302, 2]

// Module 18999 (QuestProgressBottomSheet)
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1125 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5646 */;
import QuestConstants from "QuestConstants" /* 6768 */;
import QuestTypes from "QuestTypes" /* 6771 */;
import IconButton2 from "IconButton" /* 8014 */;
import showShareActionSheet2 from "showShareActionSheet" /* 8888 */;
import AssetRegistryDefault from "AssetRegistry" /* 9175 */;
import QuestUtils from "QuestUtils" /* 9633 */;
import QuestCopyUtils from "QuestCopyUtils" /* 9660 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import FramesStore from "FramesStore" /* 6833 */;
import QuestStore from "QuestStore" /* 7834 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, _require, c2, c3;

let closure_12;
let hasOwnProperty;
let metroRequire;
let tmp;
let unpackModuleId;
const FramesActionCreatorsDefault = tmp(10880);
function contextMenuButton(arg0) {
  let intl;
  const obj = { icon: AssetRegistryDefault, variant: "secondary-overlay", accessibilityLabel: intl.string(intl5.t["UKOtz+"]), size: "sm" };
  const IconButton = IconButton2.IconButton;
  const merged = Object.assign(arg0);
  intl = intl5.intl;
  return unpackModuleId(IconButton, obj);
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
    num2 = 52 + tmp(587).space.PX_8;
  }
  obj4 = { resizeMode: "cover", borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg };
  const merged = Object.assign(metroRequire.absoluteFillObject);
  obj5 = { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg };
  const merged1 = Object.assign(metroRequire.absoluteFillObject);
  num4 = -52;
  if (arg0) {
    num4 = tmp(587).space.PX_12;
  }
  rect = { position: "absolute", top: tmp(587).space.PX_16, right: tmp(587).space.PX_16, display: "flex", flexDirection: "row", gap: tmp(587).space.PX_16, alignItems: "center" };
  PX_16 = undefined;
  if (!arg0) {
    PX_16 = tmp(587).space.PX_16;
  }
  PX_161 = undefined;
  ({ alignItems: "center", paddingTop: PX_16, gap: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_16, textAlign: "center" });
  if (!arg0) {
    PX_161 = tmp(587).space.PX_16;
  }
  return obj;
});
createStyles = createStyles_mod;
let closure_14 = createStyles.createStyleProperties(() => {
  const obj = { gradientEnd: nativeDefault.colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestProgressBottomSheetConnected(questId) {
  let first;
  let tmp6;
  let obj = questId(576);
  const cResult = obj.c(8);
  questId = questId.questId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== questId) {
    const fn = function s() {
      return QuestStore.getQuest(questId);
    };
    cResult[1] = questId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = questId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  let tmp8 = null;
  if (null != stateFromStores) {
    let tmp9;
    if (cResult[3] !== stateFromStores) {
      const fn2 = function c() {
        const obj = { quest: stateFromStores };
        return unpackModuleId(closure_16, obj);
      };
      cResult[3] = stateFromStores;
      cResult[4] = fn2;
      tmp9 = fn2;
    } else {
      tmp9 = cResult[4];
    }
    if (cResult[5] === stateFromStores) {
      let tmp10;
      if (cResult[6] === tmp9) {
        tmp10 = cResult[7];
      }
      tmp8 = tmp10;
    }
    const obj2 = { overrideVisibility: true, questOrQuests: stateFromStores, questContent: questId(6771).QuestContent.RUNNING_ACTIVITY, sourceQuestContent: questId(6771).QuestContent.RUNNING_ACTIVITY, children: tmp9 };
    const QuestContentImpressionTrackerNative = tmp(14614).QuestContentImpressionTrackerNative;
    const tmp12 = closure_11(QuestContentImpressionTrackerNative, obj2);
    cResult[5] = stateFromStores;
    cResult[6] = tmp9;
    cResult[7] = tmp12;
    tmp10 = tmp12;
  }
  return tmp8;
}) : (function QuestProgressBottomSheetConnected(questId) {
  questId = questId.questId;
  let obj = questId(504);
  const items = [QuestStore];
  const stateFromStores = obj.useStateFromStores(items, () => QuestStore.getQuest(questId));
  let tmp4 = null;
  if (null != stateFromStores) {
    const obj2 = {
      overrideVisibility: true,
      questOrQuests: stateFromStores,
      questContent: questId(6771).QuestContent.RUNNING_ACTIVITY,
      sourceQuestContent: questId(6771).QuestContent.RUNNING_ACTIVITY,
      children() {
          const obj = { quest: stateFromStores };
          return unpackModuleId(closure_16, obj);
        }
    };
    const QuestContentImpressionTrackerNative = tmp(14614).QuestContentImpressionTrackerNative;
    tmp4 = closure_11(QuestContentImpressionTrackerNative, obj2);
  }
  return tmp4;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestProgressBottomSheet(quest) {
  let claim;
  let isClaiming;
  let obj8;
  let tmp10;
  let tmp11;
  let tmp6;
  let tmp = quest;
  let obj = quest(576);
  const cResult = obj.c(79);
  quest = quest.quest;
  let obj2 = quest(8731);
  const isScreenLandscape = obj2.useIsScreenLandscape();
  const tmp5 = closure_13(isScreenLandscape);
  const gradientEnd = closure_14().gradientEnd;
  if (cResult[0] !== quest) {
    let tmpResult = tmp(7856);
    const activityApplicationId = tmpResult.getActivityApplicationId(quest);
    cResult[0] = quest;
    cResult[1] = activityApplicationId;
    tmp6 = activityApplicationId;
  } else {
    tmp6 = cResult[1];
  }
  const tmpResult6 = tmp(7317);
  const getOrFetchApplication = tmpResult6.useGetOrFetchApplication(tmp6);
  let id;
  if (getOrFetchApplication != null) {
    id = getOrFetchApplication.id;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = ["embedded_cover"];
    cResult[2] = items;
    tmp10 = items;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== id) {
    let obj3 = { applicationId: id, size: 600, names: tmp10 };
    cResult[3] = id;
    cResult[4] = obj3;
    tmp11 = obj3;
  } else {
    tmp11 = cResult[4];
  }
  const url = claim(11602)(tmp11).url;
  const tmpResult7 = tmp(9636);
  const questTaskDetails = tmpResult7.useQuestTaskDetails(quest);
  if (cResult[5] !== quest.config.messages.questName) {
    const intl = tmp(1125).intl;
    let obj4 = { questName: quest.config.messages.questName };
    const formatToPlainStringResult = intl.formatToPlainString(tmp(1125).t.EAYZAr, obj4);
    cResult[5] = quest.config.messages.questName;
    cResult[6] = formatToPlainStringResult;
  }
  if (cResult[7] === quest) {
    let tmp16;
    let tmp22;
    if (cResult[8] === questTaskDetails) {
      tmp16 = cResult[9];
    }
    const tmpResult8 = tmp(14611);
    const questsInstructionsToWinReward = tmpResult8.useQuestsInstructionsToWinReward(tmp16);
    const userStatus = quest.userStatus;
    let completedAt;
    if (userStatus != null) {
      completedAt = userStatus.completedAt;
    }
    let tmp19 = null != completedAt;
    if (tmp19) {
      const userStatus2 = quest.userStatus;
      let claimedAt;
      if (userStatus2 != null) {
        claimedAt = userStatus2.claimedAt;
      }
      tmp19 = null == claimedAt;
    }
    const tmpResult9 = tmp(9636);
    const isQuestAccessSuspended = tmpResult9.useIsQuestAccessSuspended();
    if (cResult[10] !== quest) {
      let obj5 = { quest, questContent: tmp(6771).QuestContent.RUNNING_ACTIVITY, sourceQuestContent: tmp(6771).QuestContent.RUNNING_ACTIVITY };
      cResult[10] = quest;
      cResult[11] = obj5;
      tmp22 = obj5;
    } else {
      tmp22 = cResult[11];
    }
    const tmpResult10 = tmp(16976);
    const questRewardClaimHandler = tmpResult10.useQuestRewardClaimHandler(tmp22);
    ({ isClaiming, claim } = questRewardClaimHandler);
    const isLoading = questRewardClaimHandler.isLoading;
    if (cResult[12] !== claim) {
      _require = _asyncToGenerator(async (arg0, value) => {
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
            return { value: "IconComponent", done: "IconComponent" };
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
                const obj4 = { value: tmp4(), done: false };
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
                  const obj = claim(dependencyMap[25]);
                  obj.updateFramePanelMode(id.id, constants.PIP);
                }
              }
              c3 = 3;
              return { value: "IconComponent", done: "IconComponent" };
            }
          } catch (tmp18) {
            c3 = 3;
            throw tmp18;
          }
        }
      });
      function t8() {
        return closure_0(...arguments);
      }
      cResult[12] = claim;
      cResult[13] = t8;
    }
    if (cResult[14] !== quest.id) {
      class Y {
        constructor() {
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
        }
      }
      cResult[14] = quest.id;
      cResult[15] = Y;
    } else {
      class Y {
        constructor() {
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
        }
      }
    }
    if (cResult[16] !== quest.id) {
      class Y {
        constructor() {
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
        }
      }
      cResult[16] = quest.id;
      cResult[17] = tmp28;
    } else {
      class Y {
        constructor() {
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
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
      class X {
        constructor() {
          const obj = claim(dependencyMap[26]);
          obj.hideActionSheet();
        }
      }
      cResult[18] = X;
    } else {
      class X {
        constructor() {
          const obj = claim(dependencyMap[26]);
          obj.hideActionSheet();
        }
      }
    }
    if (cResult[19] === url) {
      class X {
        constructor() {
          const obj = claim(dependencyMap[26]);
          obj.hideActionSheet();
        }
      }
      if (cResult[22] !== gradientEnd) {
        class X {
          constructor() {
            const obj = claim(dependencyMap[26]);
            obj.hideActionSheet();
          }
        }
        tmp33[1] = gradientEnd;
        cResult[22] = gradientEnd;
        cResult[23] = tmp33;
      } else {
        class X {
          constructor() {
            const obj = claim(dependencyMap[26]);
            obj.hideActionSheet();
          }
        }
      }
      if (cResult[24] === tmp5.heroGradient) {
        class X {
          constructor() {
            const obj = claim(dependencyMap[26]);
            obj.hideActionSheet();
          }
        }
        if (isScreenLandscape) {
          class X {
            constructor() {
              const obj = claim(dependencyMap[26]);
              obj.hideActionSheet();
            }
          }
        }
        if (isScreenLandscape) {
          class X {
            constructor() {
              const obj = claim(dependencyMap[26]);
              obj.hideActionSheet();
            }
          }
        }
        if (cResult[27] === quest) {
          class X {
            constructor() {
              const obj = claim(dependencyMap[26]);
              obj.hideActionSheet();
            }
          }
        }
        size = { quest, height: 80, width: 80 };
        cResult[27] = quest;
        cResult[28] = 80;
        cResult[29] = 80;
        cResult[30] = closure_11(claim(14607), size);
        const tmp40 = closure_11(claim(14607), size);
      }
      const obj6 = { style: tmp5.heroGradient, start: tmp(1104).VerticalGradient.START, end: tmp(1104).VerticalGradient.END, colors: tmp32 };
      const tmp12Result = claim(5295);
      cResult[24] = tmp5.heroGradient;
      cResult[25] = tmp32;
      cResult[26] = closure_11(tmp12Result, obj6);
      const tmp37 = closure_11(tmp12Result, obj6);
    }
    let tmp31 = null != url;
    if (tmp31) {
      class X {
        constructor() {
          const obj = claim(dependencyMap[26]);
          obj.hideActionSheet();
        }
      }
      const obj7 = { source: obj8, style: tmp5.heroImg };
      obj8 = { uri: url };
      tmp31 = closure_11(tmp12(5707), obj7);
    }
    cResult[19] = url;
    cResult[20] = tmp5.heroImg;
    cResult[21] = tmp31;
  }
  const obj9 = { quest, taskDetails: questTaskDetails, location: QuestsExperimentLocations.QUEST_ACTIVITY_BOTTOM_SHEET, sourceQuestContent: tmp(6771).QuestContent.RUNNING_ACTIVITY };
  cResult[7] = quest;
  cResult[8] = questTaskDetails;
  cResult[9] = obj9;
  tmp16 = obj9;
}) : (function QuestProgressBottomSheet(quest) {
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
  let obj = quest(8731);
  const isScreenLandscape = obj.useIsScreenLandscape();
  const tmp4 = closure_13(isScreenLandscape);
  const gradientEnd = closure_14().gradientEnd;
  const useGetOrFetchApplication = quest(7317).useGetOrFetchApplication;
  const tmp5 = quest(7317);
  let obj2 = quest(7856);
  const getOrFetchApplication = useGetOrFetchApplication(obj2.getActivityApplicationId(quest));
  let id;
  const tmp8 = claim(11602);
  if (getOrFetchApplication != null) {
    id = getOrFetchApplication.id;
  }
  const url = tmp8({ applicationId: id, size: 600, names: ["embedded_cover"] }).url;
  let tmpResult = tmp(9636);
  const questTaskDetails = tmpResult.useQuestTaskDetails(quest);
  const intl = tmp(1125).intl;
  let obj3 = { questName: quest.config.messages.questName };
  const formatToPlainStringResult = intl.formatToPlainString(tmp(1125).t.EAYZAr, obj3);
  const tmpResult4 = tmp(14611);
  let obj4 = { quest, taskDetails: questTaskDetails, location: QuestsExperimentLocations.QUEST_ACTIVITY_BOTTOM_SHEET, sourceQuestContent: tmp(6771).QuestContent.RUNNING_ACTIVITY };
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
  const tmpResult5 = tmp(9636);
  const isQuestAccessSuspended = tmpResult5.useIsQuestAccessSuspended();
  const tmpResult6 = tmp(16976);
  let obj5 = { quest, questContent: tmp(6771).QuestContent.RUNNING_ACTIVITY, sourceQuestContent: tmp(6771).QuestContent.RUNNING_ACTIVITY };
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
        return { value: "IconComponent", done: "IconComponent" };
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
              const obj = tmp4(c2[25]);
              obj.updateFramePanelMode(id.id, constants.PIP);
            }
          }
          c3 = 3;
          return { value: "IconComponent", done: "IconComponent" };
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
    const obj = claim(dependencyMap[26]);
    obj.hideActionSheet();
  }, []);
  let tmp25 = null != url;
  const obj6 = { style: tmp4.heroContainer, children: items3 };
  BottomSheet = tmp(5302).BottomSheet;
  if (tmp25) {
    const obj7 = { source: obj8, style: tmp4.heroImg };
    obj8 = { uri: url };
    tmp25 = closure_11(tmp7(5707), obj7);
  }
  items3 = [tmp25, , , ];
  const obj9 = { style: tmp4.heroGradient, start: tmp(1104).VerticalGradient.START, end: tmp(1104).VerticalGradient.END, colors: items4 };
  items4 = ["rgba(0, 0, 0, 0)", gradientEnd];
  const tmp7Result = claim(5295);
  items3[1] = closure_11(tmp7Result, obj9);
  const obj10 = { style: tmp4.gameTileContainer, children: closure_11(tmp7Result4, size) };
  size = { quest, height: num2, width: num };
  num = 80;
  num2 = 80;
  tmp7Result4 = claim(14607);
  if (isScreenLandscape) {
    num2 = 56;
  }
  if (isScreenLandscape) {
    num = 56;
  }
  items3[2] = closure_11(closure_5, obj10);
  const obj11 = { style: tmp4.contextMenuContainer, children: items5 };
  const obj12 = { icon: claim(9132), onPress: callback2, variant: "secondary-overlay", size: "sm", accessibilityLabel: intl2.string(tmp(1125).t.RDE0Sc) };
  const IconButton = tmp(8014).IconButton;
  intl2 = tmp(1125).intl;
  items5 = [closure_11(IconButton, obj12), ];
  const obj13 = { quest, showShareLink: true, location: tmp12.QUEST_ACTIVITY_BOTTOM_SHEET, sourceQuestContent: tmp(6771).QuestContent.RUNNING_ACTIVITY, children: contextMenuButton };
  const tmp7Result5 = claim(17004);
  items5[1] = closure_11(tmp7Result5, obj13);
  items3[3] = closure_12(closure_5, obj11);
  const items6 = [closure_12(closure_5, obj6), ];
  const obj14 = { style: tmp4.contentContainer, children: items8 };
  const obj15 = { direction: "vertical", spacing: claim(587).space.PX_8, style: tmp4.textContainer, children: items7 };
  const Stack = tmp(6015).Stack;
  let str = "heading-lg/bold";
  const Text = tmp(5271).Text;
  if (isScreenLandscape) {
    str = "heading-md/bold";
  }
  items7 = [closure_11(Text, { variant: str, color: "mobile-text-heading-primary", children: formatToPlainStringResult }), ];
  const obj16 = { style: tmp4.questDescription, variant: str2, color: "text-muted", children: questsInstructionsToWinReward };
  str2 = "text-md/normal";
  const Text2 = tmp(5271).Text;
  if (isScreenLandscape) {
    str2 = "text-sm/normal";
  }
  items7[1] = closure_11(Text2, obj16);
  items8 = [closure_12(Stack, obj15), ];
  const obj17 = { direction: "vertical", spacing: claim(587).space.PX_12, style: tmp4.buttonsContainer, children: items9 };
  const Stack2 = tmp(6015).Stack;
  const Button = tmp(5281).Button;
  const intl3 = tmp(1125).intl;
  const string = intl3.string;
  const t = tmp(1125).t;
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
      tmp7Result6 = tmp7(16971);
    }
  }
  const obj19 = { handleDisabled: true, startExpanded: true, children: items6 };
  items9 = [closure_11(Button, obj18), ];
  const obj20 = { size: "lg", text: intl4.string(tmp(1125).t.cpT0Cq), onPress: callback3, variant: "secondary", grow: true };
  const Button2 = tmp(5281).Button;
  intl4 = tmp(1125).intl;
  items9[1] = closure_11(Button2, obj20);
  items8[1] = closure_12(Stack2, obj17);
  items6[1] = closure_12(closure_5, obj14);
  return closure_12(BottomSheet, obj19);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestProgressBottomSheet.tsx");

export default tmp4;
