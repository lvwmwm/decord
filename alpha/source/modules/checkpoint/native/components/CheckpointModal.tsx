// Module ID: 12630
// Function ID: 12631
// Name: CheckpointModal
// Dependencies: [5, 32, 19, 17, 4986, 12620, 6396, 12631, 1082, 21, 575, 5257, 12632, 2120, 5043, 12646, 12647, 12648, 12649, 12650, 12651, 1629, 1495, 504, 12622, 12652, 12653, 6767, 6422, 12654, 12662, 6765, 12664, 8486, 5259, 6130, 12655, 2118, 6405, 6419, 8939, 12628, 12618, 5724, 1112, 12665, 12666, 12667, 5104, 12668, 12848, 12669, 12857, 12858, 12914, 6427, 6428, 12915, 12916, 12861, 12670, 12621, 12931, 12933, 2]
// Exports: default

// Module 12630 (CheckpointModal)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1082 */;
import Server from "Server" /* 2118 */;
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import HapticUtils from "HapticUtils" /* 5259 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 6405 */;
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 6419 */;
import ForwardModalUtils from "ForwardModalUtils" /* 8939 */;
import CheckpointStore2 from "CheckpointStore" /* 12620 */;
import CheckpointAvailability from "CheckpointAvailability" /* 12621 */;
import CheckpointFlows from "CheckpointFlows" /* 12622 */;
import CheckpointHeaderButton from "CheckpointHeaderButton" /* 12646 */;
import CheckpointSounds from "CheckpointSounds" /* 12655 */;
import CheckpointErrorModalDefault from "CheckpointErrorModal" /* 12931 */;
import CheckpointUnavailableModalDefault from "CheckpointUnavailableModal" /* 12933 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import MessageRecord from "MessageRecord" /* 4986 */;
import CheckpointConstants from "CheckpointConstants" /* 6396 */;
import CheckpointTransitionConstants from "CheckpointTransitionConstants" /* 12631 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

const CheckpointStore = CheckpointStore2;
let c3, closure_2, closure_4, closure_5, dependencyMap;

let CHECKPOINT_CONTROL_SIZE;
let CHECKPOINT_LOGO_SIZE;
let CHECKPOINT_NAV_HEIGHT;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_20;
let closure_21;
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
function CheckpointAvailableModal(source) {
  let STATS;
  let _undefined;
  let c9;
  let characterStage;
  let clydeLogoStaticImage;
  let first;
  let height;
  let isCharacterExiting;
  let items4;
  let items5;
  let items6;
  let obj11;
  let obj15;
  let obj19;
  let obj23;
  let obj24;
  let obj7;
  let onLayout;
  let ref;
  let route;
  let statsScreen;
  let str2;
  let str3;
  let sum;
  let tmp35;
  let tmp36;
  let tmp61;
  let tmp64;
  let tmpResult13;
  let tmpResult18;
  let width;
  let stateFromStores;
  route = undefined;
  dependencyMap = undefined;
  let stateFromStores2;
  _slicedToArray = undefined;
  react = undefined;
  let obj3;
  c9 = undefined;
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
      const merged = Object.assign(obj3);
      const adjacentCheckpointRoute = getAdjacentCheckpointRoute(obj2);
      const tmp12 = currentRoute;
      if (null != adjacentCheckpointRoute) {
        ref.current = timestamp;
        if (null != IMPACT_LIGHT) {
          obj3 = HapticUtils;
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
    obj3 = { type: Server.ComponentType.CHECKPOINT_CARD, id: obj4.asComponentId(0), checkpointData: obj5.toCheckpointMessageComponentData(STATS_ONLY, stateFromStores2, stateFromStores) };
    obj4 = InteractionComponentTypes;
    obj5 = checkpoint_CheckpointMessageComponentUtils;
    items = [obj3];
    const tmp2 = new MessageRecord(obj2);
    const tmp3 = ForwardModalUtils;
    let obj6 = {
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
            return { value: "HermesInternal", done: "+95" };
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
                const sendCheckpointCard = closure_0(closure_2[41]).sendCheckpointCard;
                closure_0(closure_2[41]);
                const tmp34 = closure_0;
                if (withMessage == null) {
                  c3 = "";
                }
                c7 = 3;
                c8 = 1;
                const obj6 = { value: sendCheckpointCard(tmp34, c3, closure_133_0), done: false };
                return obj6;
              }
            } else if (2 === c7) {
              c6 = 0;
              closure_2(false);
              const presentError = closure_0(closure_2[43]).presentError;
              closure_0(closure_2[43]);
              const intl = closure_0(closure_2[44]).intl;
              presentError(intl.string(closure_0(closure_2[44]).t.fEptJP));
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
              const obj = closure_0(closure_2[42]);
              const result = obj.trackCheckpoint2026CardShared(closure_133_0);
              c6 = 0;
              const obj2 = closure_0(closure_2[40]);
              obj2.closeForwardModal();
              c8 = 3;
              return { value: "HermesInternal", done: "+95" };
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
  const tmp = route;
  let tmp2 = dependencyMap;
  let tmp3 = route(12647)(source.source);
  let obj = stateFromStores(12648);
  const fetchCheckpointGames = obj.useFetchCheckpointGames();
  let obj2 = stateFromStores(12649);
  const checkpointCloseAnalytics = obj2.useCheckpointCloseAnalytics();
  route(12650)();
  const tmp8 = route(12651)();
  const tmp9 = closure_23();
  const rect = route(1629)();
  ({ width, height } = route(1495)());
  let str = "MobilePortrait";
  const tmp10 = route(1495)();
  if (width > height) {
    str = "MobileLandscape";
  }
  let items = [c9];
  const tmp4Result = stateFromStores(504);
  stateFromStores = tmp4Result.useStateFromStores(items, () => _undefined.stats);
  const tmp4Result12 = stateFromStores(12622);
  const checkpointFlow = tmp4Result12.getCheckpointFlow(stateFromStores);
  const items1 = [c9];
  const tmp4Result13 = stateFromStores(504);
  let stateFromStores1 = tmp4Result13.useStateFromStores(items1, () => _undefined.isCharacterCreatorEnabled);
  [route, dependencyMap] = tmp(12652)(checkpointFlow);
  const tmp18 = tmp(12653)(route);
  const tmp4Result14 = stateFromStores(12649);
  const checkpointStepAnalytics = tmp4Result14.useCheckpointStepAnalytics(route);
  const tmp4Result15 = stateFromStores(6767);
  const checkpointRoutePresentation = tmp4Result15.getCheckpointRoutePresentation(route);
  ({ characterStage, statsScreen } = checkpointRoutePresentation);
  let tmp21 = route === tmp4(6767).CheckpointRoute.HOME;
  if (!tmp21) {
    tmp21 = null != statsScreen;
  }
  if (tmp21) {
    STATS = constants.STATS;
  } else {
    STATS = null;
    if (tmp18) {
      STATS = constants.CUSTOMIZATION_ROUTE_CHANGE;
    }
  }
  const INTRODUCTION = tmp4(6767).CheckpointRoute.INTRODUCTION;
  const tmp4Result16 = stateFromStores(6767);
  let result = tmp4Result16.isCheckpointCustomizationRoute(route);
  const FINALIZE_CHARACTER = tmp4(6767).CheckpointRoute.FINALIZE_CHARACTER;
  const tmp27 = route === stateFromStores(6767).CheckpointRoute.SUMMARY;
  const items2 = [tmp11];
  const tmp4Result17 = stateFromStores(504);
  stateFromStores2 = tmp4Result17.useStateFromStores(items2, () => _undefined.character);
  const tmp4Result18 = stateFromStores(6422);
  const characterCardColorPalette = tmp4Result18.getCharacterCardColorPalette(stateFromStores2);
  const tmp4Result19 = stateFromStores(6422);
  const cardColors = tmp4Result19.getCardColors(characterCardColorPalette);
  const tmp31 = tmp27 ? cardColors.primaryBackgroundColor : closure_11;
  _slicedToArray = tmp(12654)();
  const tmp33 = tmp(12662)();
  [tmp35, tmp36] = _slicedToArray(react.useState(stateFromStores(6765).CheckpointCustomizationOption.BASE), 2);
  _slicedToArray(react.useState(stateFromStores(6765).CheckpointCustomizationOption.BASE), 2);
  if (route !== FINALIZE_CHARACTER) {
    const tmp4Result20 = stateFromStores(6765);
    let BASE = tmp4Result20.getCustomizationOptionForCharacterStage(characterStage);
    if (BASE == null) {
      BASE = tmp4(6765).CheckpointCustomizationOption.BASE;
    }
  }
  const tmp39 = stateFromStores(6765).CUSTOMIZATION_OPTION_TO_TRAIT[tmp35];
  const obj14 = tmp(12664)();
  const hasItem = obj14.includes(tmp39);
  let tmp42 = result;
  const tmpResult = tmp(8486);
  if (result) {
    tmp42 = !tmp38;
  }
  let tmp59Result = route === INTRODUCTION;
  const tmpResultResult = tmpResult({ isMounted: tmp42 });
  const height2 = tmpResultResult.height;
  ({ ref, onLayout } = tmpResultResult);
  const first1 = tmp15(react.useState(null), 2)[0];
  _slicedToArray(react.useState(null), 2);
  if (result) {
    let clydeLogoImage;
    if (null != height2) {
      sum = rect.bottom + sum1 + height2;
    }
    const items3 = [tmp11];
    const tmp4Result21 = stateFromStores(504);
    const stateFromStores3 = tmp4Result21.useStateFromStores(items3, () => _undefined.isSaving);
    react = obj12.useRef(0);
    obj3 = { flow: checkpointFlow, stats: stateFromStores, character: stateFromStores2, isCharacterCreatorEnabled: stateFromStores1 };
    let obj4 = { currentRoute: route, direction: 1 };
    let getAdjacentCheckpointRoute = tmp4(12622).getAdjacentCheckpointRoute;
    stateFromStores(12622);
    let merged = Object.assign(obj3);
    const tmp55 = null == getAdjacentCheckpointRoute(obj4);
    const tmpResult10 = tmp(12665);
    let obj5 = {
      onExitPlaying: tmpResult10(tmp(12666)),
      onExitFinished() {
          transition(1, { skipThrottle: true, hapticType: null });
        }
    };
    tmpResult10(tmp(12666));
    const tmp58 = tmp(12667)(obj5);
    ({ isCharacterExiting, startExit: c9 } = tmp58);
    const handleExitPlaying = tmp58.handleExitPlaying;
    let obj6 = { theme: ThemeTypes.DARK, children: tmp61(transition, obj7) };
    obj7 = { style: tmp9.container, children: items4 };
    const ThemeContextProvider = tmp4(5104).ThemeContextProvider;
    tmp61 = closure_21;
    if (stateFromStores1) {
      let EXIT = characterStage;
      const tmpResult11 = tmp(12668);
      if (isCharacterExiting) {
        EXIT = tmp4(6767).CheckpointCharacterStage.EXIT;
      }
      const obj8 = { stage: EXIT, layout: str, characterBottomInset: sum, hiddenBy: STATS, isActive: !tmp64, onExitPlaying: handleExitPlaying, style: tmp9.layer, children: tmp59Result };
      tmp64 = tmp21 || tmp59Result;
      if (tmp59Result) {
        const obj9 = { layout: str, onCharacterBottomInsetChange: tmp47 };
        tmp59Result = tmp59(tmp(12848), obj9);
      }
      stateFromStores1 = tmp59(tmpResult11, obj8);
    }
    items4 = [stateFromStores1, , , , , , ];
    let prop;
    const obj10 = { visible: tmp21, enter: exit, exit, hiddenScale, style: tmp9.layer, children: closure_20(tmpResult13, obj11) };
    const tmpResult12 = tmp(12669);
    const tmp67 = hiddenScale;
    tmpResult13 = tmp(12857);
    if (tmp27) {
      prop = cardColors.backgroundGradientStartColor;
    }
    obj11 = { gradientStartColor: prop };
    items4[1] = closure_20(tmpResult12, obj10);
    const obj13 = { visible: tmp21, enter: enter2, exit: exit2, hiddenScale: tmp67, mountAfterDelay: true, style: tmp9.layer, children: closure_20(tmp(12858), obj15) };
    obj15 = {
      route,
      onNextStep: function handleNextStep() {
          transition(1, { skipThrottle: true, hapticType: null });
        },
      onPreviousStep: function handlePreviousStep() {
          transition(-1, { skipThrottle: true, hapticType: null });
        }
    };
    const tmpResult14 = tmp(12669);
    items4[2] = closure_20(tmpResult14, obj13);
    const tmpResult15 = tmp(12914);
    if (tmp27) {
      clydeLogoImage = cardColors.clydeLogoImage;
    } else {
      clydeLogoImage = tmp(6427);
    }
    const obj16 = { logoAnimatedUri: clydeLogoImage, logoStaticUri: clydeLogoStaticImage, color: tmp31 };
    if (tmp27) {
      clydeLogoStaticImage = cardColors.clydeLogoStaticImage;
    } else {
      clydeLogoStaticImage = tmp(6428);
    }
    items4[3] = closure_20(tmpResult15, obj16);
    let tmp59Result3 = tmp38;
    if (tmp59Result3) {
      tmp59Result3 = width / height >= 1.3333333333333333;
    }
    if (tmp59Result3) {
      let tmp76 = result;
      const tmpResult16 = tmp(12669);
      if (result) {
        tmp76 = !tmp32;
      }
      if (tmp76) {
        tmp76 = !tmp18;
      }
      const obj17 = { visible: tmp76, enter, exit, style: items5, children: closure_20(tmp(12915), obj19) };
      items5 = [tmp9.landscapeStat, ];
      const obj18 = { marginTop: null, marginLeft: null };
      ({ top: obj29.marginTop, left: obj29.marginLeft } = rect);
      items5[1] = obj18;
      obj19 = { customizationOption: tmp35 };
      tmp59Result3 = tmp59(tmpResult16, obj17);
    }
    items4[4] = tmp59Result3;
    const tmpResult17 = tmp(12669);
    if (result) {
      result = !tmp18;
    }
    if (result) {
      result = !isCharacterExiting;
    }
    const obj20 = { visible: result, enter, exit, style: items6, children: closure_20(transition, obj23) };
    items6 = [tmp9.customizationSection, , ];
    const obj21 = { marginLeft: null, marginRight: null, marginBottom: null };
    ({ left: obj32.marginLeft, right: obj32.marginRight, bottom: obj32.marginBottom } = rect);
    items6[1] = obj21;
    let tmp82 = tmp38;
    if (tmp82) {
      const items7 = [tmp9.landscapeCustomizationSection, ];
      const obj22 = { marginTop: rect.top };
      items7[1] = obj22;
      tmp82 = items7;
    }
    items6[2] = tmp82;
    const items8 = [tmp9.customizationContent, ];
    const tmp83 = "MobileLandscape" === str && tmp9.landscapeCustomizationContent;
    items8[1] = tmp83;
    obj23 = { style: items8, ref, onLayout, pointerEvents: str3, accessibilityElementsHidden: stateFromStores3, importantForAccessibility: str2, children: closure_20(tmpResult18, obj24) };
    str2 = "auto";
    str3 = "auto";
    if (stateFromStores3) {
      str3 = "none";
    }
    if (stateFromStores3) {
      str2 = "no-hide-descendants";
    }
    obj24 = { activeCustomizationOption: tmp35, isFinalizeRoute: route === FINALIZE_CHARACTER, isCurrentTraitBlocked: hasItem, isSaving: stateFromStores3, isLandscape: "MobileLandscape" === str, onSelectFinalizeOption: tmp36, onSelectTraitOption: stateFromStores(12628).selectCharacterTrait };
    tmpResult18 = tmp(12916);
    items4[5] = closure_20(tmpResult17, obj20);
    const obj25 = {
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
          _undefined();
        },
      onReplay: function handleReplay() {
          const obj = HapticUtils;
          const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
          const obj2 = CheckpointFlows;
          const checkpointReplayRoute = obj2.getCheckpointReplayRoute(obj3);
          obj3 = CheckpointSounds;
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
          obj2.openLazy(asyncRequire(12632, dependencyMap.paths), "CheckpointShare", obj);
        },
      isLastRoute: tmp55
    };
    items4[6] = closure_20(tmp(12861), obj25);
    const obj26 = { route, children: closure_20(ThemeContextProvider, obj6) };
    closure_20(ThemeContextProvider, obj6);
    return closure_20(stateFromStores(12670).CheckpointStepFocusProvider, obj26);
  }
  sum = null;
  if (tmp59Result) {
    sum = first1;
  }
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ActivityIndicator: metroRequire, View: metroImportDefault } = react_native);
const CheckpointFetchStates = CheckpointStore2.CheckpointFetchStates;
({ CHECKPOINT_CONTROL_SIZE, CHECKPOINT_NAV_HEIGHT, CHECKPOINT_PRIMARY: unpackModuleId, CHECKPOINT_LOGO_SIZE } = CheckpointConstants);
({ CHECKPOINT_BACKGROUND_FADE: closure_12, CHECKPOINT_CHARACTER_PAGE_FADE_IN: map1, CHECKPOINT_CHARACTER_PAGE_FADE_OUT: closure_14, CHECKPOINT_STATS_FADE_IN: closure_15, CHECKPOINT_STATS_FADE_OUT: closure_16, CHECKPOINT_STATS_HIDDEN_SCALE: closure_17, CheckpointCharacterStageHiddenBy: closure_18 } = CheckpointTransitionConstants);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: closure_20, jsxs: closure_21 } = Fragment);
let sum = CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16;
const sum1 = sum + nativeDefault.space.PX_24;
let createStyles = createStyles_mod;
let obj = { container: obj2, loader: obj3, layer: { position: "absolute", width: "100%", height: "100%" }, customizationSection: { position: "absolute", left: 0, right: 0, bottom: sum1 }, landscapeCustomizationSection: rect, landscapeStat: rect1, customizationContent: obj4, landscapeCustomizationContent: { flex: 1 } };
obj2 = { height: "100%", backgroundColor: nativeDefault.colors.BLACK };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BLACK };
rect = { top: (CHECKPOINT_NAV_HEIGHT + CheckpointHeaderButton.CHECKPOINT_HEADER_BUTTON_SIZE) / 2, bottom: CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16, left: "59%", marginLeft: 0 };
rect1 = { position: "absolute", top: result + nativeDefault.space.PX_32, left: nativeDefault.space.PX_16 };
result = (CHECKPOINT_NAV_HEIGHT + CHECKPOINT_LOGO_SIZE) / 2;
obj4 = { gap: nativeDefault.space.PX_12 };
let closure_23 = createStyles(obj);
const result1 = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointModal.tsx");

export default function CheckpointModal(source) {
  let tmp6Result;
  source = source.source;
  const items = [CheckpointStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => CheckpointStore.fetchState);
  const items1 = [CheckpointStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => CheckpointStore.availability === CheckpointAvailability.CheckpointAvailability.UNAVAILABLE);
  if (stateFromStores === CheckpointFetchStates.ERROR) {
    tmp6Result = closure_20(CheckpointErrorModalDefault, {});
  } else if (stateFromStores !== tmp5.SUCCESS) {
    const obj3 = { style: tmp4.loader, children: closure_20(metroRequire, {}) };
    tmp6Result = closure_20(metroImportDefault, obj3);
  } else {
    let tmp7;
    const tmp6 = closure_20;
    if (stateFromStores1) {
      tmp7 = CheckpointUnavailableModalDefault;
    } else {
      tmp7 = CheckpointAvailableModal;
    }
    const obj4 = { source };
    tmp6Result = tmp6(tmp7, obj4);
  }
  return tmp6Result;
};
