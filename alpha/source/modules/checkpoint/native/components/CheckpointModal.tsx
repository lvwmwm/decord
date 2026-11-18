// Module ID: 12439
// Function ID: 12440
// Name: CheckpointModal
// Dependencies: [5, 32, 19, 17, 4766, 12417, 5877, 12440, 1083, 21, 575, 5037, 12441, 2121, 4823, 12438, 1630, 1496, 504, 12419, 12453, 12454, 12428, 6246, 5901, 12455, 12426, 6244, 12463, 7508, 5039, 6337, 12456, 2119, 5884, 5898, 9954, 12424, 12415, 5504, 1113, 12464, 12465, 12466, 4884, 12467, 12646, 12468, 12431, 12652, 12436, 5906, 5907, 12708, 12709, 12655, 12430, 12726, 12728, 12429, 2]
// Exports: default

// Module 12439 (CheckpointModal)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import Server from "Server" /* 2119 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import HapticUtils from "HapticUtils" /* 5039 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 5884 */;
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 5898 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6337 */;
import ForwardModalUtils from "ForwardModalUtils" /* 9954 */;
import CheckpointFlows from "CheckpointFlows" /* 12419 */;
import useCheckpointStepAnalytics from "useCheckpointStepAnalytics" /* 12428 */;
import useCheckpointForegroundTrackingDefault from "useCheckpointForegroundTracking" /* 12429 */;
import CheckpointHeaderButton from "CheckpointHeaderButton" /* 12438 */;
import CheckpointSounds from "CheckpointSounds" /* 12456 */;
import useCheckpointPreloaderDefault from "useCheckpointPreloader" /* 12726 */;
import useCheckpointCompletionSurveyDefault from "useCheckpointCompletionSurvey" /* 12728 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import MessageRecord from "MessageRecord" /* 4766 */;
import CheckpointStore from "CheckpointStore" /* 12417 */;
import CheckpointConstants from "CheckpointConstants" /* 5877 */;
import CheckpointTransitionConstants from "CheckpointTransitionConstants" /* 12440 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4823 */;
import size from "module_2" /* 2 */;

let c3, closure_2, closure_4, closure_5;

let CHECKPOINT_CONTROL_SIZE;
let CHECKPOINT_LOGO_SIZE;
let CHECKPOINT_NAV_HEIGHT;
let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_19;
let closure_20;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let rect;
let rect1;
let result;
let unpackModuleId;
function CheckpointModal() {
  let STATS;
  let characterStage;
  let clydeLogoStaticImage;
  let first;
  let height;
  let isCharacterExiting;
  let items4;
  let items5;
  let items6;
  let obj11;
  let obj16;
  let obj18;
  let obj22;
  let obj26;
  let obj28;
  let onLayout;
  let ref;
  let route;
  let stateFromStores;
  let statsScreen;
  let str2;
  let str3;
  let sum;
  let tmp2Result13;
  let tmp2Result18;
  let tmp30;
  let tmp31;
  let tmp56;
  let tmp59;
  let width;
  function transition(direction, arg1) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    let flag = obj.skipThrottle;
    if (flag === undefined) {
      flag = false;
    }
    let IMPACT_LIGHT = obj.hapticType;
    if (IMPACT_LIGHT === undefined) {
      IMPACT_LIGHT = HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT;
    }
    const timestamp = Date.now();
    if (flag) {
      const obj2 = { currentRoute, direction };
      const getAdjacentCheckpointRoute = CheckpointFlows.getAdjacentCheckpointRoute;
      CheckpointFlows;
      const merged = Object.assign(obj6);
      const adjacentCheckpointRoute = getAdjacentCheckpointRoute(obj2);
      const tmp12 = currentRoute;
      if (null != adjacentCheckpointRoute) {
        ref.current = timestamp;
        if (null != IMPACT_LIGHT) {
          const obj3 = HapticUtils;
          const result = obj3.triggerHapticFeedback(IMPACT_LIGHT);
        }
        const obj5 = { previousRoute: tmp12, route: adjacentCheckpointRoute };
        const obj4 = CheckpointSounds;
        const checkpointRouteSounds = obj4.getCheckpointRouteSounds(obj5);
        if (null != checkpointRouteSounds) {
          closure_4(checkpointRouteSounds);
        }
        closure_2(adjacentCheckpointRoute);
      } else if (1 === direction) {
        const arr = ModalActionCreatorsDefault;
        arr.pop();
      }
    }
  }
  function handleForward(STATS_ONLY) {
    let items;
    let obj4;
    let obj5;
    let closure_0 = STATS_ONLY;
    let obj = HapticUtils;
    let result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
    let obj2 = { content: "", components: items };
    const obj3 = { type: Server.ComponentType.CHECKPOINT_CARD, id: obj4.asComponentId("0"), checkpointData: obj5.toCheckpointMessageComponentData(STATS_ONLY, stateFromStores2, stateFromStores) };
    obj4 = InteractionComponentTypes;
    obj5 = checkpoint_CheckpointMessageComponentUtils;
    items = [obj3];
    const tmp2 = new MessageRecord(obj2);
    const tmp3 = ForwardModalUtils;
    obj6 = {
      message: tmp2,
      source: "checkpoint",
      customSendHandler() {
        return closure_1(...arguments);
      }
    };
    const openForwardModal = tmp3.openForwardModal;
    let closure_1 = _asyncToGenerator(async (arg0, arg1, arg2) => {
      closure_0 = arg0;
      let withMessage = arg1;
      closure_2 = arg2;
      let c7 = 0;
      let c8 = 0;
      let c6 = 0;
      const iter = (async (arg0, value, arg2) => {
        let tmp43;
        if (c8 === 2) {
          c8 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c8 = 2;
            if (0 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                return { value, done: true };
              } else {
                closure_5 = tmp;
                closure_4 = tmp43;
                withMessage = undefined;
                closure_2 = undefined;
                withMessage = withMessage.withMessage;
                c7 = 1;
                c8 = 1;
                return { value: "Path", done: true };
              }
            } else if (1 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                return { value, done: true };
              } else {
                closure_2(true);
                c6 = 1;
                c3 = withMessage;
                const sendCheckpointCard = closure_0(closure_2[37]).sendCheckpointCard;
                closure_0(closure_2[37]);
                const tmp34 = closure_0;
                if (withMessage == null) {
                  c3 = "";
                }
                c7 = 3;
                c8 = 1;
                obj6 = { value: sendCheckpointCard(tmp34, c3, closure_133_0), done: false };
                return obj6;
              }
            } else if (2 === c7) {
              c6 = 0;
              closure_2(false);
              const presentError = closure_0(closure_2[39]).presentError;
              closure_0(closure_2[39]);
              const intl = closure_0(closure_2[40]).intl;
              presentError(intl.string(closure_0(closure_2[40]).t.fEptJP));
              c8 = 3;
              return { value: undefined, done: true };
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              return { value, done: true };
            } else {
              const obj = closure_0(closure_2[38]);
              const result = obj.trackCheckpoint2026CardShared(closure_133_0);
              c6 = 0;
              const obj2 = closure_0(closure_2[36]);
              obj2.closeForwardModal();
              c8 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp42) {
            tmp43 = c6;
            if (0 === c6) {
              c8 = 3;
              throw tmp42;
            } else {
              c7 = 2;
            }
          }
        }
      })();
      iter.next();
      return iter;
    });
    openForwardModal(obj6);
  }
  const tmp = closure_22();
  let tmp2 = route;
  let tmp3 = dependencyMap;
  const rect = route(1630)();
  ({ width, height } = route(1496)());
  let str = "MobilePortrait";
  const tmp4 = route(1496)();
  if (width > height) {
    str = "MobileLandscape";
  }
  let obj = stateFromStores(504);
  let items = [CheckpointStore];
  stateFromStores = obj.useStateFromStores(items, () => CheckpointStore.stats);
  let obj2 = stateFromStores(12419);
  const checkpointFlow = obj2.getCheckpointFlow(stateFromStores);
  let obj3 = stateFromStores(504);
  const items1 = [CheckpointStore];
  let stateFromStores1 = obj3.useStateFromStores(items1, () => CheckpointStore.isCharacterCreatorEnabled);
  [route, dependencyMap] = tmp2(12453)(checkpointFlow);
  const tmp13 = tmp2(12454)(route);
  let obj4 = stateFromStores(12428);
  const checkpointStepAnalytics = obj4.useCheckpointStepAnalytics(route);
  let obj5 = stateFromStores(6246);
  const checkpointRoutePresentation = obj5.getCheckpointRoutePresentation(route);
  ({ characterStage, statsScreen } = checkpointRoutePresentation);
  let tmp16 = route === stateFromStores(6246).CheckpointRoute.HOME;
  if (!tmp16) {
    tmp16 = null != statsScreen;
  }
  if (tmp16) {
    STATS = constants.STATS;
  } else {
    STATS = null;
    if (tmp13) {
      STATS = constants.CUSTOMIZATION_ROUTE_CHANGE;
    }
  }
  const INTRODUCTION = tmp5(6246).CheckpointRoute.INTRODUCTION;
  const tmp5Result = stateFromStores(6246);
  let result = tmp5Result.isCheckpointCustomizationRoute(route);
  const FINALIZE_CHARACTER = tmp5(6246).CheckpointRoute.FINALIZE_CHARACTER;
  const tmp22 = route === stateFromStores(6246).CheckpointRoute.SUMMARY;
  const items2 = [tmp6];
  const tmp5Result7 = stateFromStores(504);
  const stateFromStores2 = tmp5Result7.useStateFromStores(items2, () => CheckpointStore.character);
  const tmp5Result8 = stateFromStores(5901);
  const characterCardColorPalette = tmp5Result8.getCharacterCardColorPalette(stateFromStores2);
  const tmp5Result9 = stateFromStores(5901);
  const cardColors = tmp5Result9.getCardColors(characterCardColorPalette);
  const tmp26 = tmp22 ? cardColors.primaryBackgroundColor : closure_10;
  _slicedToArray = tmp2(12455)();
  tmp2(12426)();
  [tmp30, tmp31] = _slicedToArray(react.useState(stateFromStores(6244).CheckpointCustomizationOption.BASE), 2);
  _slicedToArray(react.useState(stateFromStores(6244).CheckpointCustomizationOption.BASE), 2);
  if (route !== FINALIZE_CHARACTER) {
    const tmp5Result10 = stateFromStores(6244);
    let BASE = tmp5Result10.getCustomizationOptionForCharacterStage(characterStage);
    if (BASE == null) {
      BASE = tmp5(6244).CheckpointCustomizationOption.BASE;
    }
  }
  const tmp33 = "MobileLandscape" === str;
  let tmp34 = tmp5(6244).CUSTOMIZATION_OPTION_TO_TRAIT[tmp30];
  const obj12 = tmp2(12463)();
  const hasItem = obj12.includes(tmp34);
  let tmp37 = result;
  const tmp2Result = tmp2(7508);
  if (result) {
    tmp37 = !tmp33;
  }
  let tmp54Result = route === INTRODUCTION;
  const tmp2ResultResult = tmp2Result({ isMounted: tmp37 });
  const height2 = tmp2ResultResult.height;
  ({ ref, onLayout } = tmp2ResultResult);
  const first1 = tmp10(react.useState(null), 2)[0];
  _slicedToArray(react.useState(null), 2);
  if (result) {
    let clydeLogoImage;
    if (null != height2) {
      sum = rect.bottom + sum1 + height2;
    }
    const items3 = [tmp6];
    const tmp5Result11 = stateFromStores(504);
    const stateFromStores3 = tmp5Result11.useStateFromStores(items3, () => CheckpointStore.isSaving);
    react = obj10.useRef(0);
    let obj6 = { flow: checkpointFlow, stats: stateFromStores, character: stateFromStores2, isCharacterCreatorEnabled: stateFromStores1 };
    const obj7 = { currentRoute: route, direction: 1 };
    let getAdjacentCheckpointRoute = tmp5(12419).getAdjacentCheckpointRoute;
    stateFromStores(12419);
    let merged = Object.assign(obj6);
    const tmp50 = null == getAdjacentCheckpointRoute(obj7);
    const tmp2Result10 = tmp2(12464);
    const obj8 = {
      onExitPlaying: tmp2Result10(tmp2(12465)),
      onExitFinished() {
          transition(1, { skipThrottle: true, hapticType: null });
        }
    };
    tmp2Result10(tmp2(12465));
    const tmp53 = tmp2(12466)(obj8);
    ({ isCharacterExiting, startExit: CheckpointStore } = tmp53);
    const handleExitPlaying = tmp53.handleExitPlaying;
    const obj9 = { theme: ThemeTypes.DARK, children: tmp56(transition, obj11) };
    obj11 = { style: tmp.container, children: items4 };
    const ThemeContextProvider = tmp5(4884).ThemeContextProvider;
    tmp56 = closure_20;
    if (stateFromStores1) {
      let EXIT = characterStage;
      const tmp2Result11 = tmp2(12467);
      if (isCharacterExiting) {
        EXIT = tmp5(6246).CheckpointCharacterStage.EXIT;
      }
      const obj13 = { stage: EXIT, layout: str, characterBottomInset: sum, hiddenBy: STATS, isActive: !tmp59, onExitPlaying: handleExitPlaying, style: tmp.layer, children: tmp54Result };
      tmp59 = tmp16 || tmp54Result;
      if (tmp54Result) {
        const obj14 = { layout: str, onCharacterBottomInsetChange: tmp42 };
        tmp54Result = tmp54(tmp2(12646), obj14);
      }
      stateFromStores1 = tmp54(tmp2Result11, obj13);
    }
    items4 = [stateFromStores1, , , , , , ];
    let prop;
    const obj15 = { visible: tmp16, enter: exit, exit, hiddenScale, style: tmp.layer, children: closure_19(tmp2Result13, obj16) };
    const tmp2Result12 = tmp2(12468);
    tmp2Result13 = tmp2(12431);
    const tmp62 = hiddenScale;
    if (tmp22) {
      prop = cardColors.backgroundGradientStartColor;
    }
    obj16 = { gradientStartColor: prop };
    items4[1] = closure_19(tmp2Result12, obj15);
    const obj17 = { visible: tmp16, enter: enter2, exit: exit2, hiddenScale: tmp62, mountAfterDelay: true, style: tmp.layer, children: closure_19(tmp2(12652), obj18) };
    obj18 = {
      route,
      onNextStep: function handleNextStep() {
          transition(1, { skipThrottle: true, hapticType: null });
        },
      onPreviousStep: function handlePreviousStep() {
          transition(-1, { skipThrottle: true, hapticType: null });
        }
    };
    const tmp2Result14 = tmp2(12468);
    items4[2] = closure_19(tmp2Result14, obj17);
    const tmp2Result15 = tmp2(12436);
    if (tmp22) {
      clydeLogoImage = cardColors.clydeLogoImage;
    } else {
      clydeLogoImage = tmp2(5906);
    }
    const obj19 = { logoAnimatedUri: clydeLogoImage, logoStaticUri: clydeLogoStaticImage, color: tmp26 };
    if (tmp22) {
      clydeLogoStaticImage = cardColors.clydeLogoStaticImage;
    } else {
      clydeLogoStaticImage = tmp2(5907);
    }
    items4[3] = closure_19(tmp2Result15, obj19);
    let tmp54Result3 = tmp33;
    if (tmp54Result3) {
      tmp54Result3 = width / height >= 1.3333333333333333;
    }
    if (tmp54Result3) {
      let tmp71 = result;
      const tmp2Result16 = tmp2(12468);
      if (result) {
        tmp71 = !tmp27;
      }
      if (tmp71) {
        tmp71 = !tmp13;
      }
      const obj20 = { visible: tmp71, enter, exit, style: items5, children: closure_19(tmp2(12708), obj22) };
      items5 = [tmp.landscapeStat, ];
      const obj21 = { marginTop: null, marginLeft: null };
      ({ top: obj27.marginTop, left: obj27.marginLeft } = rect);
      items5[1] = obj21;
      obj22 = { customizationOption: tmp30 };
      tmp54Result3 = tmp54(tmp2Result16, obj20);
    }
    items4[4] = tmp54Result3;
    const tmp2Result17 = tmp2(12468);
    if (result) {
      result = !tmp13;
    }
    if (result) {
      result = !isCharacterExiting;
    }
    const obj23 = { visible: result, enter, exit, style: items6, children: closure_19(transition, obj26) };
    items6 = [tmp.customizationSection, , ];
    const obj24 = { marginLeft: null, marginRight: null, marginBottom: null };
    ({ left: obj30.marginLeft, right: obj30.marginRight, bottom: obj30.marginBottom } = rect);
    items6[1] = obj24;
    let tmp77 = tmp33;
    if (tmp77) {
      const items7 = [tmp.landscapeCustomizationSection, ];
      const obj25 = { marginTop: rect.top };
      items7[1] = obj25;
      tmp77 = items7;
    }
    items6[2] = tmp77;
    const items8 = [tmp.customizationContent, ];
    const tmp78 = tmp33 && tmp.landscapeCustomizationContent;
    items8[1] = tmp78;
    obj26 = { style: items8, ref, onLayout, pointerEvents: str3, accessibilityElementsHidden: stateFromStores3, importantForAccessibility: str2, children: closure_19(tmp2Result18, obj28) };
    str2 = "auto";
    str3 = "auto";
    if (stateFromStores3) {
      str3 = "none";
    }
    if (stateFromStores3) {
      str2 = "no-hide-descendants";
    }
    obj28 = { activeCustomizationOption: tmp30, isFinalizeRoute: route === FINALIZE_CHARACTER, isCurrentTraitBlocked: hasItem, isSaving: stateFromStores3, isLandscape: tmp33, onSelectFinalizeOption: tmp31, onSelectTraitOption: stateFromStores(12424).selectCharacterTrait };
    tmp2Result18 = tmp2(12709);
    items4[5] = closure_19(tmp2Result17, obj23);
    const obj29 = {
      activeRoute: route,
      isCharacterExiting,
      onBack: function handleBack() {
          transition(-1);
        },
      onNext: function handleNext() {
          transition(1);
        },
      onSave: function handleSaved() {
          const obj = HapticUtils;
          const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.NOTIFICATION_SUCCESS);
          CheckpointStore();
        },
      onReplay: function handleReplay() {
          const obj = HapticUtils;
          const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
          const obj2 = CheckpointFlows;
          const checkpointReplayRoute = obj2.getCheckpointReplayRoute(obj6);
          const obj3 = CheckpointSounds;
          const obj4 = { previousRoute, route: checkpointReplayRoute };
          const checkpointRouteSounds = obj3.getCheckpointRouteSounds(obj4);
          if (null != checkpointRouteSounds) {
            closure_4(checkpointRouteSounds);
          }
          closure_2(checkpointReplayRoute);
        },
      onShare: function handleShare() {
          const obj = { character: stateFromStores2, stats: stateFromStores, onForward: handleForward };
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.openLazy(asyncRequire(12441, dependencyMap.paths), "CheckpointShare", obj);
        },
      isLastRoute: tmp50
    };
    items4[6] = closure_19(tmp2(12655), obj29);
    const obj31 = { route, children: closure_19(ThemeContextProvider, obj9) };
    closure_19(ThemeContextProvider, obj9);
    return closure_19(stateFromStores(12430).CheckpointStepFocusProvider, obj31);
  }
  sum = null;
  if (tmp54Result) {
    sum = first1;
  }
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ActivityIndicator: metroRequire, View: metroImportDefault } = react_native);
({ CHECKPOINT_CONTROL_SIZE, CHECKPOINT_NAV_HEIGHT, CHECKPOINT_PRIMARY: c10, CHECKPOINT_LOGO_SIZE } = CheckpointConstants);
({ CHECKPOINT_BACKGROUND_FADE: unpackModuleId, CHECKPOINT_CHARACTER_PAGE_FADE_IN: closure_12, CHECKPOINT_CHARACTER_PAGE_FADE_OUT: map1, CHECKPOINT_STATS_FADE_IN: closure_14, CHECKPOINT_STATS_FADE_OUT: closure_15, CHECKPOINT_STATS_HIDDEN_SCALE: closure_16, CheckpointCharacterStageHiddenBy: closure_17 } = CheckpointTransitionConstants);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: closure_19, jsxs: closure_20 } = Fragment);
let sum = CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16;
const sum1 = sum + nativeDefault.space.PX_24;
let createStyles = createStyles_mod;
let obj = { loader: obj2, container: obj3, layer: { position: "absolute", width: "100%", height: "100%" }, customizationSection: { position: "absolute", left: 0, right: 0, bottom: sum1 }, landscapeCustomizationSection: rect, landscapeStat: rect1, customizationContent: obj4, landscapeCustomizationContent: { flex: 1 } };
obj2 = { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BLACK };
createStyles = createStyles.createStyles;
obj3 = { height: "100%", backgroundColor: nativeDefault.colors.BLACK };
rect = { top: (CHECKPOINT_NAV_HEIGHT + CheckpointHeaderButton.CHECKPOINT_HEADER_BUTTON_SIZE) / 2, bottom: CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16, left: "59%", marginLeft: 0 };
rect1 = { position: "absolute", top: result + nativeDefault.space.PX_32, left: nativeDefault.space.PX_16 };
result = (CHECKPOINT_NAV_HEIGHT + CHECKPOINT_LOGO_SIZE) / 2;
obj4 = { gap: nativeDefault.space.PX_12 };
let closure_22 = createStyles(obj);
const result1 = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointModal.tsx");

export default function CheckpointLoaderWrapper() {
  let tmp6Result;
  const tmp = useCheckpointPreloaderDefault();
  const obj = useCheckpointStepAnalytics;
  const checkpointCloseAnalytics = obj.useCheckpointCloseAnalytics();
  useCheckpointCompletionSurveyDefault();
  useCheckpointForegroundTrackingDefault();
  if (tmp) {
    tmp6Result = tmp6(CheckpointModal, {});
  } else {
    const obj2 = { style: tmp5.loader, children: closure_19(metroRequire, {}) };
    tmp6Result = tmp6(metroImportDefault, obj2);
  }
  return tmp6Result;
};
