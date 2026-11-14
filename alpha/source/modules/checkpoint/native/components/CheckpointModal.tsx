// Module ID: 14275
// Function ID: 14276
// Name: CheckpointModal
// Dependencies: [5, 32, 19, 17, 5249, 14253, 6377, 14276, 1083, 21, 575, 5552, 14277, 2121, 5306, 14274, 1630, 1496, 14255, 504, 14290, 14264, 6745, 6401, 14291, 14262, 6744, 14298, 7994, 5554, 6848, 14292, 2119, 6384, 6398, 10239, 14260, 14251, 6014, 1113, 5377, 14299, 14477, 14300, 14267, 14483, 14272, 6406, 6407, 14533, 14534, 14486, 14266, 14547, 14265, 2]
// Exports: default

// Module 14275 (CheckpointModal)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import Server from "Server" /* 2119 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import HapticUtils from "HapticUtils" /* 5554 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 6384 */;
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 6398 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6848 */;
import ForwardModalUtils from "ForwardModalUtils" /* 10239 */;
import CheckpointFlows from "CheckpointFlows" /* 14255 */;
import useCheckpointStepAnalytics from "useCheckpointStepAnalytics" /* 14264 */;
import useCheckpointForegroundTrackingDefault from "useCheckpointForegroundTracking" /* 14265 */;
import CheckpointHeaderButton from "CheckpointHeaderButton" /* 14274 */;
import CheckpointSounds from "CheckpointSounds" /* 14292 */;
import useCheckpointPreloaderDefault from "useCheckpointPreloader" /* 14547 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import MessageRecord from "MessageRecord" /* 5249 */;
import CheckpointStore from "CheckpointStore" /* 14253 */;
import CheckpointConstants from "CheckpointConstants" /* 6377 */;
import CheckpointTransitionConstants from "CheckpointTransitionConstants" /* 14276 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let c3, closure_2, closure_4, closure_5, dependencyMap;

let CHECKPOINT_CONTROL_SIZE;
let CHECKPOINT_LOGO_SIZE;
let CHECKPOINT_NAV_HEIGHT;
let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_18;
let closure_19;
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
function CheckpointModal(didPlayerShareDataWithDiscord) {
  let characterStage;
  let clydeLogoStaticImage;
  let first;
  let height;
  let items4;
  let items5;
  let items6;
  let obj15;
  let obj17;
  let obj21;
  let obj25;
  let obj27;
  let obj9;
  let onLayout;
  let ref;
  let route;
  let statsScreen;
  let str2;
  let str3;
  let sum;
  let tmp26;
  let tmp27;
  let tmp2Result10;
  let tmp2Result14;
  let tmp49;
  let tmp53;
  let width;
  let flag = didPlayerShareDataWithDiscord.didPlayerShareDataWithDiscord;
  if (flag === undefined) {
    flag = true;
  }
  let stateFromStores;
  route = undefined;
  dependencyMap = undefined;
  let stateFromStores2;
  _slicedToArray = undefined;
  react = undefined;
  let obj6;
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
                const sendCheckpointCard = closure_0(closure_2[36]).sendCheckpointCard;
                closure_0(closure_2[36]);
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
              const presentError = closure_0(closure_2[38]).presentError;
              closure_0(closure_2[38]);
              const intl = closure_0(closure_2[39]).intl;
              presentError(intl.string(closure_0(closure_2[39]).t.fEptJP));
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
              const obj = closure_0(closure_2[37]);
              const result = obj.trackCheckpoint2026CardShared(closure_133_0);
              c6 = 0;
              const obj2 = closure_0(closure_2[35]);
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
  const tmp = closure_21();
  let tmp2 = route;
  let tmp3 = dependencyMap;
  const rect = route(1630)();
  ({ width, height } = route(1496)());
  let str = "MobilePortrait";
  const tmp4 = route(1496)();
  if (width > height) {
    str = "MobileLandscape";
  }
  let obj = stateFromStores(14255);
  const checkpointFlow = obj.getCheckpointFlow(flag);
  let obj2 = stateFromStores(504);
  let items = [CheckpointStore];
  stateFromStores = obj2.useStateFromStores(items, () => CheckpointStore.stats);
  let obj3 = stateFromStores(504);
  const items1 = [CheckpointStore];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => CheckpointStore.isCharacterCreatorEnabled);
  [route, dependencyMap] = tmp2(14290)(checkpointFlow);
  let obj4 = stateFromStores(14264);
  const checkpointStepAnalytics = obj4.useCheckpointStepAnalytics(route);
  let obj5 = stateFromStores(6745);
  const checkpointRoutePresentation = obj5.getCheckpointRoutePresentation(route);
  ({ characterStage, statsScreen } = checkpointRoutePresentation);
  let tmp15 = route === stateFromStores(6745).CheckpointRoute.HOME;
  if (!tmp15) {
    tmp15 = null != statsScreen;
  }
  const INTRODUCTION = tmp5(6745).CheckpointRoute.INTRODUCTION;
  const tmp5Result = stateFromStores(6745);
  let result = tmp5Result.isCheckpointCustomizationRoute(route);
  const FINALIZE_CHARACTER = tmp5(6745).CheckpointRoute.FINALIZE_CHARACTER;
  const tmp18 = route === stateFromStores(6745).CheckpointRoute.SUMMARY;
  const items2 = [tmp7];
  const tmp5Result7 = stateFromStores(504);
  stateFromStores2 = tmp5Result7.useStateFromStores(items2, () => CheckpointStore.character);
  const tmp5Result8 = stateFromStores(6401);
  const characterCardColorPalette = tmp5Result8.getCharacterCardColorPalette(stateFromStores2);
  const tmp5Result9 = stateFromStores(6401);
  const cardColors = tmp5Result9.getCardColors(characterCardColorPalette);
  const tmp22 = tmp18 ? cardColors.primaryBackgroundColor : closure_10;
  _slicedToArray = tmp2(14291)();
  tmp2(14262)();
  [tmp26, tmp27] = _slicedToArray(react.useState(stateFromStores(6744).CheckpointCustomizationOption.BASE), 2);
  _slicedToArray(react.useState(stateFromStores(6744).CheckpointCustomizationOption.BASE), 2);
  if (route !== FINALIZE_CHARACTER) {
    const tmp5Result10 = stateFromStores(6744);
    let BASE = tmp5Result10.getCustomizationOptionForCharacterStage(characterStage);
    if (BASE == null) {
      BASE = tmp5(6744).CheckpointCustomizationOption.BASE;
    }
  }
  const tmp30 = stateFromStores(6744).CUSTOMIZATION_OPTION_TO_TRAIT[tmp26];
  const obj12 = tmp2(14298)();
  const hasItem = obj12.includes(tmp30);
  let tmp33 = result;
  const tmp2Result = tmp2(7994);
  if (result) {
    tmp33 = !tmp29;
  }
  let tmp47Result = route === INTRODUCTION;
  const tmp2ResultResult = tmp2Result({ isMounted: tmp33 });
  const height2 = tmp2ResultResult.height;
  ({ ref, onLayout } = tmp2ResultResult);
  const first1 = tmp10(react.useState(null), 2)[0];
  _slicedToArray(react.useState(null), 2);
  if (result) {
    let clydeLogoImage;
    if (null != height2) {
      sum = rect.bottom + sum1 + height2;
    }
    const items3 = [tmp7];
    const tmp5Result11 = stateFromStores(504);
    const stateFromStores3 = tmp5Result11.useStateFromStores(items3, () => CheckpointStore.isSaving);
    react = obj10.useRef(0);
    obj6 = { flow: checkpointFlow, stats: stateFromStores, character: stateFromStores2, isCharacterCreatorEnabled: stateFromStores1 };
    const obj7 = { currentRoute: route, direction: 1 };
    let tmp43 = obj7;
    let getAdjacentCheckpointRoute = tmp5(14255).getAdjacentCheckpointRoute;
    stateFromStores(14255);
    let merged = Object.assign(obj6);
    const tmp46 = null == getAdjacentCheckpointRoute(obj7);
    const obj8 = { theme: ThemeTypes.DARK, children: tmp49(transition, obj9) };
    let tmp47Result4 = stateFromStores1;
    obj9 = { style: tmp.container, children: items4 };
    const ThemeContextProvider = tmp5(5377).ThemeContextProvider;
    tmp49 = closure_19;
    if (stateFromStores1) {
      const obj11 = { stage: characterStage, layout: str, characterBottomInset: sum, isCovered: tmp15, isActive: !tmp53, style: tmp.layer, children: tmp47Result };
      tmp53 = tmp15;
      const tmp2Result8 = tmp2(14299);
      if (!tmp15) {
        tmp53 = tmp47Result;
      }
      if (tmp47Result) {
        const obj13 = { layout: str, onCharacterBottomInsetChange: tmp38 };
        tmp47Result = tmp47(tmp2(14477), obj13);
      }
      tmp47Result4 = tmp47(tmp2Result8, obj11);
    }
    items4 = [tmp47Result4, , , , , , ];
    let prop;
    const obj14 = { visible: tmp15, enter: exit, exit, hiddenScale, style: tmp.layer, children: closure_18(tmp2Result10, obj15) };
    const tmp2Result9 = tmp2(14300);
    tmp2Result10 = tmp2(14267);
    const tmp56 = hiddenScale;
    if (tmp18) {
      prop = cardColors.backgroundGradientStartColor;
    }
    obj15 = { gradientStartColor: prop };
    items4[1] = closure_18(tmp2Result9, obj14);
    const obj16 = { visible: tmp15, enter: enter2, exit: exit2, hiddenScale: tmp56, mountAfterDelay: true, style: tmp.layer, children: closure_18(tmp2(14483), obj17) };
    obj17 = {
      route,
      onNextStep: function handleNextStep() {
          transition(1, { skipThrottle: true, hapticType: null });
        },
      onPreviousStep: function handlePreviousStep() {
          transition(-1, { skipThrottle: true, hapticType: null });
        }
    };
    const tmp2Result11 = tmp2(14300);
    items4[2] = closure_18(tmp2Result11, obj16);
    const tmp2Result12 = tmp2(14272);
    if (tmp18) {
      clydeLogoImage = cardColors.clydeLogoImage;
    } else {
      clydeLogoImage = tmp2(6406);
    }
    const obj18 = { logoAnimatedUri: clydeLogoImage, logoStaticUri: clydeLogoStaticImage, color: tmp22 };
    if (tmp18) {
      clydeLogoStaticImage = cardColors.clydeLogoStaticImage;
    } else {
      clydeLogoStaticImage = tmp2(6407);
    }
    items4[3] = closure_18(tmp2Result12, obj18);
    let tmp47Result5 = result && tmp29 && !tmp23;
    if (tmp47Result5) {
      tmp47Result5 = width / height >= 1.3333333333333333;
    }
    if (tmp47Result5) {
      const obj19 = { style: items5, children: closure_18(tmp2(14533), obj21) };
      items5 = [tmp.landscapeStat, ];
      const obj20 = { marginTop: null, marginLeft: null };
      ({ top: obj26.marginTop, left: obj26.marginLeft } = rect);
      items5[1] = obj20;
      obj21 = { customizationOption: tmp26 };
      tmp47Result5 = tmp47(tmp50, obj19);
    }
    items4[4] = tmp47Result5;
    const obj22 = { visible: result, enter, exit, style: items6, children: closure_18(transition, obj25) };
    items6 = [tmp.customizationSection, , ];
    const obj23 = { marginLeft: null, marginRight: null, marginBottom: null };
    ({ left: obj29.marginLeft, right: obj29.marginRight, bottom: obj29.marginBottom } = rect);
    items6[1] = obj23;
    let tmp67 = tmp29;
    const tmp2Result13 = tmp2(14300);
    if ("MobileLandscape" === str) {
      const items7 = [tmp.landscapeCustomizationSection, ];
      const obj24 = { marginTop: rect.top };
      items7[1] = obj24;
      tmp67 = items7;
    }
    items6[2] = tmp67;
    const items8 = [tmp.customizationContent, ];
    const tmp68 = "MobileLandscape" === str && tmp.landscapeCustomizationContent;
    items8[1] = tmp68;
    obj25 = { style: items8, ref, onLayout, pointerEvents: str3, accessibilityElementsHidden: stateFromStores3, importantForAccessibility: str2, children: closure_18(tmp2Result14, obj27) };
    str2 = "auto";
    str3 = "auto";
    if (stateFromStores3) {
      str3 = "none";
    }
    if (stateFromStores3) {
      str2 = "no-hide-descendants";
    }
    obj27 = { activeCustomizationOption: tmp26, isFinalizeRoute: route === FINALIZE_CHARACTER, isCurrentTraitBlocked: hasItem, isSaving: stateFromStores3, isLandscape: "MobileLandscape" === str, onSelectFinalizeOption: tmp27, onSelectTraitOption: stateFromStores(14260).selectCharacterTrait };
    tmp2Result14 = tmp2(14534);
    items4[5] = closure_18(tmp2Result13, obj22);
    const obj28 = {
      activeRoute: route,
      onBack: function handleBack() {
          transition(-1);
        },
      onNext: function handleNext() {
          transition(1);
        },
      onSave: function handleSaved() {
          const obj = { skipThrottle: true, hapticType: HapticUtils.HapticFeedbackTypes.NOTIFICATION_SUCCESS };
          transition(1, obj);
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
          obj2.openLazy(asyncRequire(14277, dependencyMap.paths), "CheckpointShare", obj);
        },
      isLastRoute: tmp46
    };
    items4[6] = closure_18(tmp2(14486), obj28);
    const obj30 = { route, children: closure_18(ThemeContextProvider, obj8) };
    closure_18(ThemeContextProvider, obj8);
    return closure_18(stateFromStores(14266).CheckpointStepFocusProvider, obj30);
  }
  sum = null;
  if (tmp47Result) {
    sum = first1;
  }
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ActivityIndicator: metroRequire, View: metroImportDefault } = react_native);
({ CHECKPOINT_CONTROL_SIZE, CHECKPOINT_NAV_HEIGHT, CHECKPOINT_PRIMARY: c10, CHECKPOINT_LOGO_SIZE } = CheckpointConstants);
({ CHECKPOINT_BACKGROUND_FADE: unpackModuleId, CHECKPOINT_CHARACTER_PAGE_FADE_IN: closure_12, CHECKPOINT_CHARACTER_PAGE_FADE_OUT: map1, CHECKPOINT_STATS_FADE_IN: closure_14, CHECKPOINT_STATS_FADE_OUT: closure_15, CHECKPOINT_STATS_HIDDEN_SCALE: closure_16 } = CheckpointTransitionConstants);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: closure_18, jsxs: closure_19 } = Fragment);
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
let closure_21 = createStyles(obj);
const result1 = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointModal.tsx");

export default function CheckpointLoaderWrapper(arg0) {
  let tmp5Result;
  const tmp = useCheckpointPreloaderDefault();
  const obj = useCheckpointStepAnalytics;
  const checkpointCloseAnalytics = obj.useCheckpointCloseAnalytics();
  useCheckpointForegroundTrackingDefault();
  if (tmp) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    tmp5Result = tmp5(CheckpointModal, obj2);
  } else {
    const obj3 = { style: tmp4.loader, children: authStore4(metroRequire, {}) };
    tmp5Result = tmp5(metroImportDefault, obj3);
  }
  return tmp5Result;
};
