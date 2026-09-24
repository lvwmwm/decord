// Module ID: 17477
// Function ID: 17478
// Name: QuestActivityUnenrolledModal
// Dependencies: [5, 32, 19, 17, 7976, 17476, 5695, 21, 4790, 580, 1369, 558, 568, 4725, 4501, 504, 7997, 7447, 11643, 5698, 11939, 1401, 10600, 8001, 4993, 4511, 11938, 15384, 5834, 11934, 4786, 1119, 5220, 5852, 5218, 7653, 7270, 11942, 11489, 2]

// Module 17477 (QuestActivityUnenrolledModal)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1401 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import QuestTypes from "QuestTypes" /* 5698 */;
import _modDef7270 from "module_7270" /* 7270 */;
import HeaderActionButton from "HeaderActionButton" /* 7653 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8001 */;
import QuestActionCreators from "QuestActionCreators" /* 10600 */;
import QuestContentImpressionTracker from "QuestContentImpressionTracker" /* 11942 */;
import openQuestAccessSuspendedBottomSheetDefault from "openQuestAccessSuspendedBottomSheet" /* 15384 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import QuestStore from "QuestStore" /* 7976 */;
import UnenrolledActivityQuestStore from "UnenrolledActivityQuestStore" /* 17476 */;

const utils_PlatformUtils = tmp3(1369);
require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: metroRequire, View: closure_7 } = get_ActivityIndicator);
const QuestsExperimentLocations = fn(5695).QuestsExperimentLocations;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const constants = { MAIN: "main" };
let c14 = 87;
const createStyles = fn(4790);
let closure_15 = createStyles.createStyles((arg0) => {
  const obj = { container: { flex: 1, paddingHorizontal: nativeDefault.space.PX_24, paddingVertical: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_48 }, content: { marginTop: "auto" }, imagesContainer: null, baseShadow: null, appIconContainer: null, appIcon: null, rewardTileContainer: null, questRewardTile: null, textContainer: null, buttonsContainer: null, footer: null };
  const obj3 = { flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: nativeDefault.space.PX_32 };
  const obj2 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_24, paddingVertical: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_48 };
  if (obj4.isIOS()) {
    if (arg0) {
      const obj5 = { shadowColor: "rgb(144, 144, 251)", shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.6, shadowRadius: 85 };
    } else {
      const obj6 = {};
    }
  } else {
    if (arg0) {
      const obj7 = { dropShadow: { standardDeviation: "85px", color: "rgba(144, 144, 251, 0.65)", offsetX: 0, offsetY: 0 } };
      const items = [obj7, ];
      const obj8 = { dropShadow: { standardDeviation: "85px", color: "rgba(144, 144, 250, 0.41)", offsetX: 0, offsetY: 0 } };
      items[1] = obj8;
      let items1 = items;
    } else {
      items1 = [];
    }
    const obj9 = { filter: items1 };
    const merged = Object.assign(obj9);
    obj.imagesContainer = obj3;
    const obj10 = {};
    if (tmp3Result.isIOS()) {
      if (arg0) {
        const obj11 = { shadowColor: "rgb(144, 144, 250)", shadowOffset: { width: 0, height: 16 }, shadowOpacity: 0.4, shadowRadius: 85 };
        let obj12 = obj11;
      } else {
        obj12 = {};
      }
      const merged1 = Object.assign(obj12);
    } else {
      obj.baseShadow = obj10;
      const obj13 = { borderRadius: tmp(580).radii.xl, borderWidth: 2.18, borderColor: "rgba(151, 151, 159, 0.24)", borderStyle: "solid", transform: null, overflow: "hidden" };
      const items2 = [{ rotate: "-12.41deg" }];
      obj13.transform = items2;
      obj.appIconContainer = obj13;
      const size = { width: v87, height: v87, borderRadius: tmp(580).radii.xl - 2.18 };
      obj.appIcon = size;
      const obj14 = { borderWidth: 2.18, borderColor: "rgba(151, 151, 159, 0.24)", borderRadius: tmp(580).radii.xl, borderStyle: "solid", transform: null, overflow: "hidden" };
      const items3 = [{ translateX: -10 }, { rotate: "7.81deg" }];
      obj14.transform = items3;
      obj.rewardTileContainer = obj14;
      const obj15 = { borderRadius: tmp(580).radii.xl - 2.18 };
      obj.questRewardTile = obj15;
      const obj16 = { alignItems: "center", gap: tmp(580).space.PX_8 };
      obj.textContainer = obj16;
      const obj17 = { flexDirection: "column", gap: tmp(580).space.PX_8, marginBottom: 20 };
      obj.buttonsContainer = obj17;
      obj.footer = { flexDirection: "column", width: "100%", marginTop: "auto" };
      return obj;
    }
    tmp3Result = utils_PlatformUtils;
  }
});
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((quest) => {
  const cResult = require("c").c(85);
  quest = quest.quest;
  _require = quest;
  let obj = require("c");
  const theme = require("useTheme").useTheme();
  if (cResult[0] !== theme) {
    const isThemeDarkResult = tmp(4501).isThemeDark(theme);
    cResult[0] = theme;
    cResult[1] = isThemeDarkResult;
    let tmp5 = isThemeDarkResult;
    const tmpResult = tmp(4501);
  } else {
    tmp5 = cResult[1];
  }
  const tmp7 = closure_15(tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UnenrolledActivityQuestStore];
    class A {
      constructor() {
        return closure_1_9.getState().autoEnroll;
      }
    }
    cResult[2] = items;
    cResult[3] = A;
    let tmp9 = A;
    let tmp8 = items;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  let obj2 = require("useTheme");
  const tmp11 = trackQuestContentClickedWithImpression(noop.useState(require("initialize").useStateFromStores(tmp8, tmp9)), 2);
  const first = tmp11[0];
  dependencyMap = tmp11[1];
  if (cResult[4] !== quest) {
    const activityApplicationId = tmp(7997).getActivityApplicationId(quest);
    class A {
      constructor() {
        return closure_1_9.getState().autoEnroll;
      }
    }
    cResult[5] = activityApplicationId;
    let tmp13 = activityApplicationId;
    const tmpResult10 = tmp(7997);
  } else {
    tmp13 = cResult[5];
  }
  const tmpResult9 = require("initialize");
  id = require("useGetOrFetchApplications").useGetOrFetchApplication(tmp13);
  const tmpResult11 = require("useGetOrFetchApplications");
  const questTaskDetails = require("hooks/QuestHooks").useQuestTaskDetails(quest);
  if (cResult[6] === quest) {
    if (cResult[7] === questTaskDetails) {
      let tmp16 = cResult[8];
    }
    const questsInstructionsToWinReward = tmp(11939).useQuestsInstructionsToWinReward(tmp16);
    class A {
      constructor() {
        return closure_1_9.getState().autoEnroll;
      }
    }
    if (null == id) {
      if (cResult[12] !== quest.id) {
        _require = asyncGeneratorStep(async (arg0, value) => {
          if (c2 === 2) {
            c2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c2 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  const obj4 = { questContent: tmp4(5698).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL, questContentCTA: tmp4(8001).QuestContentCTA.START_QUEST, sourceQuestContent: tmp4(5698).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL };
                  c1 = 1;
                  c2 = 1;
                  const obj6 = { value: tmp4(10600).enrollInQuest(tmp4.id, obj4), done: false };
                  return obj6;
                }
              } else if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                first(4993).pop();
                c2 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp9) {
              c2 = tmp;
              throw tmp9;
            }
          }
        });
        const fn = function() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
        class A {
          constructor() {
            return closure_1_9.getState().autoEnroll;
          }
        }
        cResult[12] = quest.id;
        cResult[13] = fn;
      }
      if (cResult[14] !== quest.id) {
        class V {
          constructor() {
            obj = closure_0(closure_2[22]);
            result = obj.dismissQuestActivityModal(closure_0.id);
            arr = closure_1(closure_2[24]);
            arr1 = arr.pop();
            return;
          }
        }
        cResult[14] = quest.id;
        class A {
          constructor() {
            return closure_1_9.getState().autoEnroll;
          }
        }
        cResult[15] = V;
      } else {
        class V {
          constructor() {
            obj = closure_0(closure_2[22]);
            result = obj.dismissQuestActivityModal(closure_0.id);
            arr = closure_1(closure_2[24]);
            arr1 = arr.pop();
            return;
          }
        }
      }
      const _Symbol = Symbol;
      class A {
        constructor() {
          return closure_1_9.getState().autoEnroll;
        }
      }
      if (tmp27 === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor(arg0) {
            tmp = closure_2(quest);
            obj = closure_0(closure_2[22]);
            setAutoEnrollResult = obj.setAutoEnroll(quest);
            return;
          }
        }
        cResult[16] = B;
        class A {
          constructor() {
            return closure_1_9.getState().autoEnroll;
          }
        }
      } else {
        class B {
          constructor(arg0) {
            tmp = closure_2(quest);
            obj = closure_0(closure_2[22]);
            setAutoEnrollResult = obj.setAutoEnroll(quest);
            return;
          }
        }
      }
      asyncGeneratorStep = tmp28;
      if (cResult[17] !== first) {
        class B {
          constructor(arg0) {
            tmp = closure_2(quest);
            obj = closure_0(closure_2[22]);
            setAutoEnrollResult = obj.setAutoEnroll(quest);
            return;
          }
        }
        tmp30[0] = first;
        class A {
          constructor() {
            return closure_1_9.getState().autoEnroll;
          }
        }
        cResult[18] = tmp30;
        const tmp29 = tmp30;
      } else {
        class B {
          constructor(arg0) {
            tmp = closure_2(quest);
            obj = closure_0(closure_2[22]);
            setAutoEnrollResult = obj.setAutoEnroll(quest);
            return;
          }
        }
      }
      const checkboxA11yNative = tmp(4511).useCheckboxA11yNative(tmp29);
      ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
      const tmpResult14 = tmp(4511);
      const isQuestAccessSuspended = tmp(11643).useIsQuestAccessSuspended();
      const tmpResult15 = tmp(11643);
      trackQuestContentClickedWithImpression = tmp(11938).useTrackQuestContentClickedWithImpression();
      if (cResult[19] === quest.id) {
        class B {
          constructor(arg0) {
            tmp = closure_2(quest);
            obj = closure_0(closure_2[22]);
            setAutoEnrollResult = obj.setAutoEnroll(quest);
            return;
          }
        }
        if (cResult[22] === null) {
          class B {
            constructor(arg0) {
              tmp = closure_2(quest);
              obj = closure_0(closure_2[22]);
              setAutoEnrollResult = obj.setAutoEnroll(quest);
              return;
            }
          }
        }
        class A {
          constructor() {
            return closure_1_9.getState().autoEnroll;
          }
        }
        cResult[22] = null;
        cResult[23] = tmp7.appIcon;
        cResult[24] = tmp7.appIconContainer;
        cResult[25] = null != null;
      }
      const fn2 = function j() {
        trackQuestContentClickedWithImpression({ questId: user.id, questContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL, questContentCTA: AnalyticsTypes.QuestContentCTA.QUEST_ACCESS_SUSPENDED, sourceQuestContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL });
        openQuestAccessSuspendedBottomSheetDefault();
      };
      cResult[19] = quest.id;
      cResult[20] = trackQuestContentClickedWithImpression;
      cResult[21] = fn2;
      const tmpResult16 = tmp(11938);
    } else {
      class B {
        constructor(arg0) {
          tmp = closure_2(quest);
          obj = closure_0(closure_2[22]);
          setAutoEnrollResult = obj.setAutoEnroll(quest);
          return;
        }
      }
      class A {
        constructor() {
          return closure_1_9.getState().autoEnroll;
        }
      }
      ({ id: tmp21[0], icon: tmp21[1] } = id);
      tmp21[2] = c14;
      const applicationIconURL = first(1401).getApplicationIconURL(tmp21);
      ({ icon: tmp3[9], id } = id);
      cResult[10] = id;
      cResult[11] = applicationIconURL;
      const obj10 = first(1401);
    }
    const tmpResult13 = tmp(11939);
  }
  let obj3 = { quest, taskDetails: questTaskDetails, location: QuestsExperimentLocations.QUEST_ACTIVITY_UNENROLLED_MODAL, sourceQuestContent: require("QuestTypes").QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL };
  cResult[6] = quest;
  cResult[7] = questTaskDetails;
  cResult[8] = obj3;
  tmp16 = obj3;
}) : ((quest) => {
  quest = quest.quest;
  let trackQuestContentClickedWithImpression;
  const theme = quest(4725).useTheme();
  let obj = quest(4725);
  const tmp4 = closure_15(quest(4501).isThemeDark(theme));
  let obj2 = quest(4501);
  const items = [UnenrolledActivityQuestStore];
  const tmp5 = trackQuestContentClickedWithImpression(noop.useState(quest(504).useStateFromStores(items, () => state.getState().autoEnroll)), 2);
  const checked = tmp5[0];
  dependencyMap = tmp5[1];
  let obj3 = quest(504);
  let obj4 = quest(7447);
  const getOrFetchApplication = obj4.useGetOrFetchApplication(quest(7997).getActivityApplicationId(quest));
  const obj5 = quest(7997);
  const questTaskDetails = quest(11643).useQuestTaskDetails(quest);
  let obj6 = quest(11643);
  const obj7 = quest(11939);
  const items1 = [getOrFetchApplication];
  const questsInstructionsToWinReward = obj7.useQuestsInstructionsToWinReward({ quest, taskDetails: questTaskDetails, location: QuestsExperimentLocations.QUEST_ACTIVITY_UNENROLLED_MODAL, sourceQuestContent: quest(5698).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL });
  const memo = noop.useMemo(() => {
    let applicationIconURL = null;
    if (null != getOrFetchApplication) {
      const obj3 = { id: null, icon: null, size: null };
      ({ id: obj2.id, icon: obj2.icon } = getOrFetchApplication);
      obj3.size = size;
      applicationIconURL = AvatarUtilsDefault.getApplicationIconURL(obj3);
    }
    return applicationIconURL;
  }, items1);
  const items2 = [quest.id];
  const callback = noop.useCallback(getOrFetchApplication(function*(arg0, value) {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const obj4 = { questContent: tmp4(5698).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL, questContentCTA: tmp4(8001).QuestContentCTA.START_QUEST, sourceQuestContent: tmp4(5698).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL };
            v1 = 1;
            dependencyMap = 1;
            const obj6 = { value: tmp4(10600).enrollInQuest(quest.id, obj4), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          v1(4993).pop();
          dependencyMap = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp9) {
        dependencyMap = tmp;
        throw tmp9;
      }
    }
  }), items2);
  const obj8 = { quest, taskDetails: questTaskDetails, location: QuestsExperimentLocations.QUEST_ACTIVITY_UNENROLLED_MODAL, sourceQuestContent: quest(5698).QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL };
  const checkboxA11yNative = quest(4511).useCheckboxA11yNative({ checked });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const obj9 = quest(4511);
  const isQuestAccessSuspended = quest(11643).useIsQuestAccessSuspended();
  const obj10 = quest(11643);
  trackQuestContentClickedWithImpression = quest(11938).useTrackQuestContentClickedWithImpression();
  const items3 = [quest.id, trackQuestContentClickedWithImpression];
  const callback1 = noop.useCallback(() => {
    trackQuestContentClickedWithImpression({ questId: quest.id, questContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL, questContentCTA: AnalyticsTypes.QuestContentCTA.QUEST_ACCESS_SUSPENDED, sourceQuestContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL });
    openQuestAccessSuspendedBottomSheetDefault();
  }, items3);
  const obj12 = { direction: "vertical", align: "center", justify: "center", style: tmp4.container, children: null };
  const obj13 = { style: tmp4.content, children: null };
  const obj14 = { style: tmp4.baseShadow, children: null };
  const obj15 = { style: tmp4.imagesContainer, children: null };
  let tmp18Result = null != memo;
  if (tmp18Result) {
    const obj16 = { style: tmp4.appIconContainer, children: null };
    const obj17 = { source: null, style: null };
    const obj18 = { uri: memo };
    obj17.source = obj18;
    obj17.style = tmp4.appIcon;
    obj16.children = tmp18(checked(5834), obj17);
    tmp18Result = tmp18(tmp17, obj16);
  }
  const items4 = [tmp18Result, ];
  const obj19 = { style: tmp4.rewardTileContainer, children: null };
  const size = { quest, height: v87, width: v87, style: tmp4.questRewardTile };
  obj19.children = closure_11(checked(11934), size);
  items4[1] = closure_11(closure_7, obj19);
  obj15.children = items4;
  obj14.children = closure_12(closure_7, obj15);
  const items5 = [closure_11(closure_7, obj14), ];
  const obj20 = { style: tmp4.textContainer, children: null };
  const obj21 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: { textAlign: "center" }, children: null };
  const intl = tmp(1119).intl;
  obj21.children = intl.string(quest(1119).t.IrNgN4);
  const items6 = [closure_11(quest(4786).Text, obj21), ];
  const obj22 = { variant: "text-sm/normal", color: "text-subtle", style: { textAlign: "center" }, children: null };
  const intl2 = tmp(1119).intl;
  const items7 = [intl2.format(quest(1119).t.V3NSJx, { questName: quest.config.messages.questName }), "\u00A0", questsInstructionsToWinReward];
  obj22.children = items7;
  items6[1] = closure_12(quest(4786).Text, obj22);
  obj20.children = items6;
  items5[1] = closure_12(closure_7, obj20);
  obj13.children = items5;
  const items8 = [closure_12(closure_7, obj13), ];
  const obj24 = { style: tmp4.footer, children: null };
  const obj25 = { style: tmp4.buttonsContainer, children: null };
  const obj26 = { size: "lg", text: null, onPress: null, disabled: null, onPressDisabled: null };
  const intl3 = tmp(1119).intl;
  obj26.text = intl3.string(quest(1119).t.l7E81v);
  obj26.onPress = callback;
  obj26.disabled = isQuestAccessSuspended;
  let tmp21;
  if (isQuestAccessSuspended) {
    tmp21 = callback1;
  }
  obj26.onPressDisabled = tmp21;
  const items9 = [closure_11(quest(5220).Button, obj26), ];
  const obj27 = { size: "lg", text: null, onPress: null, variant: "secondary" };
  const intl4 = tmp(1119).intl;
  obj27.text = intl4.string(quest(1119).t.fyT2ol);
  obj27.onPress = function onPress() {
    const result = QuestActionCreators.dismissQuestActivityModal(quest.id);
    ModalActionCreatorsDefault.pop();
  };
  items9[1] = closure_11(quest(5220).Button, obj27);
  obj25.children = items9;
  const items10 = [closure_12(closure_7, obj25), ];
  const obj28 = { accessibilityRole, accessibilityLabel: null, accessibilityState: null, onPress: null, style: null, children: null };
  const intl5 = tmp(1119).intl;
  obj28.accessibilityLabel = intl5.string(quest(1119).t["931n1T"]);
  obj28.accessibilityState = accessibilityState;
  obj28.onPress = function onPress() {
    closure_2(!first);
    QuestActionCreators.setAutoEnroll(!first);
  };
  obj28.style = { alignSelf: "center", flexDirection: "row", alignItems: "center", gap: 8 };
  const items11 = [closure_11(quest(5852).FormCheckbox, { checked }), ];
  const obj29 = { variant: "text-sm/normal", color: "text-subtle", children: null };
  const intl6 = tmp(1119).intl;
  obj29.children = intl6.string(quest(1119).t["931n1T"]);
  items11[1] = closure_11(quest(4786).Text, obj29);
  obj28.children = items11;
  items10[1] = closure_12(closure_6, obj28);
  obj24.children = items10;
  items8[1] = closure_12(closure_7, obj24);
  obj12.children = items8;
  return closure_12(quest(5218).Stack, obj12);
});
ReactCompilerGating = fn(558);
const headerLeft = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      return ModalActionCreatorsDefault.pop();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { source: _modDef7270, onPress: first, accessibilityLabel: null };
    const intl = tmp(1119).intl;
    obj2.accessibilityLabel = intl.string(tmp(1119).t.cpT0Cq);
    const tmp8 = closure_1_11(tmp(7653).HeaderActionButton, obj2);
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  const obj = {
    source: _modDef7270,
    onPress() {
      return ModalActionCreatorsDefault.pop();
    },
    accessibilityLabel: null
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  return closure_1_11(HeaderActionButton.HeaderActionButton, obj);
});
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestActivityUnenrolledModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((questId) => {
  const cResult = questId(568).c(7);
  questId = questId.questId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [QuestStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== questId) {
    const fn = function o() {
      return QuestStore.getQuest(questId);
    };
    cResult[1] = questId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = questId(568);
  const stateFromStores = questId(504).useStateFromStores(first, tmp6);
  if (null == stateFromStores) {
    return null;
  } else {
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function c() {
        return null;
      };
      cResult[3] = fn2;
      let tmp8 = fn2;
    } else {
      tmp8 = cResult[3];
    }
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor() {
          obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: null };
          intl = questId(closure_1_2[31]).intl;
          obj.children = intl.string(questId(closure_1_2[31]).t.l7E81v);
          return closure_1_11(questId(closure_1_2[30]).Text, obj);
        }
      }
      cResult[4] = C;
      const tmp9 = C;
    } else {
      class C {
        constructor() {
          obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: null };
          intl = questId(closure_1_2[31]).intl;
          obj.children = intl.string(questId(closure_1_2[31]).t.l7E81v);
          return closure_1_11(questId(closure_1_2[30]).Text, obj);
        }
      }
    }
    if (cResult[5] !== stateFromStores) {
      class C {
        constructor() {
          obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: null };
          intl = questId(closure_1_2[31]).intl;
          obj.children = intl.string(questId(closure_1_2[31]).t.l7E81v);
          return closure_1_11(questId(closure_1_2[30]).Text, obj);
        }
      }
      const obj2 = {
        headerLeft,
        headerRight: tmp8,
        headerTitle: tmp9,
        render() {
              return closure_2_11(QuestContentImpressionTracker.QuestContentImpressionTrackerNative, {
                questOrQuests: stateFromStores,
                questContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL,
                sourceQuestContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL,
                children() {
                  return closure_2_11(closure_2_16, { quest });
                }
              });
            }
      };
      tmp11[constants.MAIN] = obj2;
      const obj3 = { screens: tmp11, initialRouteName: constants.MAIN };
      const tmp15 = closure_11(tmp(11489).Modal, obj3);
      cResult[5] = stateFromStores;
      cResult[6] = tmp15;
      const tmp10 = tmp15;
    } else {
      class C {
        constructor() {
          obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: null };
          intl = questId(closure_1_2[31]).intl;
          obj.children = intl.string(questId(closure_1_2[31]).t.l7E81v);
          return closure_1_11(questId(closure_1_2[30]).Text, obj);
        }
      }
    }
    return tmp10;
  }
  const tmpResult = questId(504);
}) : ((questId) => {
  questId = questId.questId;
  const items = [QuestStore];
  const stateFromStores = questId(504).useStateFromStores(items, () => QuestStore.getQuest(questId));
  if (null == stateFromStores) {
    return null;
  } else {
    const obj2 = {};
    const obj3 = {
      headerLeft,
      headerRight() {
          return null;
        },
      headerTitle() {
          const obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: null };
          const intl = questId(1119).intl;
          obj.children = intl.string(questId(1119).t.l7E81v);
          return closure_1_11(questId(4786).Text, obj);
        },
      render() {
          return closure_2_11(QuestContentImpressionTracker.QuestContentImpressionTrackerNative, {
            questOrQuests: stateFromStores,
            questContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL,
            sourceQuestContent: QuestTypes.QuestContent.QUEST_ACTIVITY_UNENROLLED_MODAL,
            children() {
              return closure_2_11(closure_2_16, { quest });
            }
          });
        }
    };
    obj2[constants.MAIN] = obj3;
    const obj4 = { screens: obj2, initialRouteName: constants.MAIN };
    return closure_11(tmp(11489).Modal, obj4);
  }
  let obj = questId(504);
  tmp = questId;
});
