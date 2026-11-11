// Module ID: 14168
// Function ID: 14169
// Name: CheckpointModal
// Dependencies: [5, 32, 19, 17, 5186, 14150, 6314, 14169, 1083, 21, 575, 5489, 14170, 2118, 5243, 14167, 1627, 1493, 14183, 504, 14186, 14187, 6682, 6338, 14188, 14157, 6681, 14195, 7929, 5491, 6785, 14189, 2116, 6321, 6335, 10172, 14154, 14148, 5951, 1113, 6358, 5314, 14196, 14372, 14197, 14160, 14165, 6343, 6344, 14416, 14417, 14431, 14159, 14439, 2]
// Exports: default

// Module 14168 (CheckpointModal)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import Server from "Server" /* 2116 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import HapticUtils from "HapticUtils" /* 5491 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 6321 */;
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 6335 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import ForwardModalUtils from "ForwardModalUtils" /* 10172 */;
import CheckpointHeaderButton from "CheckpointHeaderButton" /* 14167 */;
import CheckpointFlows from "CheckpointFlows" /* 14183 */;
import useCheckpointStepAnalytics from "useCheckpointStepAnalytics" /* 14187 */;
import CheckpointSounds from "CheckpointSounds" /* 14189 */;
import useCheckpointPreloaderDefault from "useCheckpointPreloader" /* 14439 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import MessageRecord from "MessageRecord" /* 5186 */;
import CheckpointStore from "CheckpointStore" /* 14150 */;
import CheckpointConstants from "CheckpointConstants" /* 6314 */;
import CheckpointTransitionConstants from "CheckpointTransitionConstants" /* 14169 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c1, c4, closure_1, closure_4, closure_5, exit, importDefault;

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
  let _undefined;
  let c10;
  let characterStage;
  let clydeLogoImage;
  let clydeLogoStaticImage;
  let first1;
  let height;
  let items4;
  let items5;
  let items6;
  let obj17;
  let obj20;
  let obj21;
  let obj8;
  let onLayout;
  let prop;
  let ref;
  let route;
  let shadowColor;
  let stats;
  let statsScreen;
  let str2;
  let str3;
  let tmp25;
  let tmp26;
  let tmp2Result13;
  let tmp2Result17;
  let tmp38;
  let tmp43;
  let tmp47;
  let width;
  let flag = didPlayerShareDataWithDiscord.didPlayerShareDataWithDiscord;
  if (flag === undefined) {
    flag = true;
  }
  let checkpointFlow;
  importDefault = undefined;
  let stateFromStores;
  route = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let closure_6;
  let stateFromStores1;
  let closure_8;
  let stateFromStores2;
  c10 = undefined;
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
      const obj3 = { flow: checkpointFlow, stats, isCharacterCreatorEnabled: stateFromStores, currentRoute: route, direction };
      const obj2 = CheckpointFlows;
      const adjacentCheckpointRoute = obj2.getAdjacentCheckpointRoute(obj3);
      const tmp11 = route;
      if (null != adjacentCheckpointRoute) {
        ref.current = timestamp;
        if (null != IMPACT_LIGHT) {
          const obj4 = HapticUtils;
          const result = obj4.triggerHapticFeedback(IMPACT_LIGHT);
        }
        const obj6 = { previousRoute: tmp11, route: adjacentCheckpointRoute };
        const obj5 = CheckpointSounds;
        const checkpointRouteSounds = obj5.getCheckpointRouteSounds(obj6);
        if (null != checkpointRouteSounds) {
          closure_8(checkpointRouteSounds);
        }
        closure_4(adjacentCheckpointRoute);
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
    const obj3 = { type: Server.ComponentType.CHECKPOINT_CARD, id: obj4.asComponentId("0"), checkpointData: obj5.toCheckpointMessageComponentData(STATS_ONLY, stateFromStores1, closure_1) };
    obj4 = InteractionComponentTypes;
    obj5 = checkpoint_CheckpointMessageComponentUtils;
    items = [obj3];
    const tmp2 = new MessageRecord(obj2);
    const tmp3 = ForwardModalUtils;
    let obj6 = {
      message: tmp2,
      source: "checkpoint",
      customSendHandler(arg0, arg1, arg2) {
        return closure_1(...arguments);
      }
    };
    const openForwardModal = tmp3.openForwardModal;
    closure_1 = _asyncToGenerator(async (arg0, arg1, arg2) => {
      closure_0 = arg0;
      let withMessage = arg1;
      let closure_2 = arg2;
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
                return { value: "flexDirection", done: true };
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
                const obj6 = { value: sendCheckpointCard(tmp34, c3, closure_133_0), done: false };
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
  exit = function _handleNext() {
    let obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let obj4;
      if (c4 === 2) {
        c4 = 3;
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
        let c3;
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              const tmp45 = closure_2_6;
              if (tmp45) {
                _undefined(true);
                c3 = 1;
                const obj3 = tmp(closure_2[40]);
                const characterFromTraits = obj3.getCharacterFromTraits(stateFromStores2);
                c1 = 2;
                c4 = 1;
                const obj6 = { value: obj4.completeCheckpoint(characterFromTraits), done: false };
                obj4 = tmp(closure_2[36]);
                return obj6;
              } else {
                transition(1);
              }
            }
          } else if (1 === tmp4) {
            c3 = 0;
            closure_128_10(false);
            throw closure_2;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_10(false);
            c4 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            if (value) {
              const obj = { skipThrottle: true, hapticType: tmp(closure_2[29]).HapticFeedbackTypes.NOTIFICATION_SUCCESS };
              closure_128_11(1, obj);
            } else {
              const presentError = tmp(closure_2[38]).presentError;
              const tmp7 = tmp(closure_2[38]);
              const intl = tmp(closure_2[39]).intl;
              presentError(intl.string(tmp(closure_2[39]).t.fEptJP));
            }
            c3 = 0;
            closure_128_10(false);
          }
          c4 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp38) {
          closure_2 = tmp38;
          if (0 === c3) {
            c4 = 3;
            throw tmp38;
          } else {
            c1 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_21();
  let tmp2 = importDefault;
  let tmp3 = stateFromStores;
  const rect = require("useSafeAreaInsets")();
  const tmp4 = require("useWindowDimensions")();
  ({ width, height } = tmp4);
  let str = "MobilePortrait";
  if (width > height) {
    str = "MobileLandscape";
  }
  exit = checkpointFlow(tmp3[18]);
  checkpointFlow = exit.getCheckpointFlow(flag);
  let obj2 = checkpointFlow(tmp3[19]);
  let tmp7 = stateFromStores2;
  let items = [stateFromStores2];
  importDefault = obj2.useStateFromStores(items, () => stateFromStores2.stats);
  let obj3 = checkpointFlow(tmp3[19]);
  const items1 = [stateFromStores2];
  stateFromStores = obj3.useStateFromStores(items1, () => stateFromStores2.isCharacterCreatorEnabled);
  [route, _slicedToArray] = tmp2(tmp3[20])(checkpointFlow);
  let obj4 = checkpointFlow(tmp3[21]);
  const checkpointStepAnalytics = obj4.useCheckpointStepAnalytics(route);
  let obj5 = react;
  react = react.useRef(0);
  let obj6 = checkpointFlow(tmp3[22]);
  const checkpointRoutePresentation = obj6.getCheckpointRoutePresentation(route);
  ({ characterStage, statsScreen } = checkpointRoutePresentation);
  let tmp14 = route === checkpointFlow(tmp3[22]).CheckpointRoute.HOME;
  if (!tmp14) {
    tmp14 = null != statsScreen;
  }
  const INTRODUCTION = tmp5(tmp3[22]).CheckpointRoute.INTRODUCTION;
  const tmp5Result = checkpointFlow(tmp3[22]);
  let result = tmp5Result.isCheckpointCustomizationRoute(route);
  const tmp17 = route === checkpointFlow(tmp3[22]).CheckpointRoute.FINALIZE_CHARACTER;
  closure_6 = tmp17;
  const tmp18 = route === checkpointFlow(tmp3[22]).CheckpointRoute.SUMMARY;
  const items2 = [tmp7];
  const tmp5Result6 = checkpointFlow(tmp3[19]);
  stateFromStores1 = tmp5Result6.useStateFromStores(items2, () => stateFromStores2.character);
  const tmp5Result7 = checkpointFlow(tmp3[23]);
  const characterCardColorPalette = tmp5Result7.getCharacterCardColorPalette(stateFromStores1);
  const tmp5Result8 = checkpointFlow(tmp3[23]);
  const cardColors = tmp5Result8.getCardColors(characterCardColorPalette);
  const tmp22 = tmp18 ? cardColors.primaryBackgroundColor : c10;
  closure_8 = tmp2(tmp3[24])();
  tmp2(tmp3[25])();
  [tmp25, tmp26] = _slicedToArray(obj5.useState(checkpointFlow(tmp3[26]).CheckpointCustomizationOption.BASE), 2);
  _slicedToArray(obj5.useState(checkpointFlow(tmp3[26]).CheckpointCustomizationOption.BASE), 2);
  if (!tmp17) {
    const tmp5Result9 = checkpointFlow(tmp3[26]);
    let BASE = tmp5Result9.getCustomizationOptionForCharacterStage(characterStage);
    if (BASE == null) {
      BASE = tmp5(tmp3[26]).CheckpointCustomizationOption.BASE;
    }
  }
  const tmp29 = checkpointFlow(tmp3[26]).CUSTOMIZATION_OPTION_TO_TRAIT[tmp25];
  const items3 = [tmp7];
  const tmp5Result10 = checkpointFlow(tmp3[19]);
  stateFromStores2 = tmp5Result10.useStateFromStores(items3, () => stateFromStores2.selectedCharacterTraits);
  const obj13 = tmp2(tmp3[27])();
  const hasItem = obj13.includes(tmp29);
  let tmp33 = result;
  const tmp2Result = tmp2(tmp3[28]);
  if (result) {
    tmp33 = !tmp28;
  }
  const tmp2ResultResult = tmp2Result({ isMounted: tmp33 });
  const height2 = tmp2ResultResult.height;
  let sum = null;
  ({ ref, onLayout } = tmp2ResultResult);
  if (result) {
    sum = null;
    if (null != height2) {
      sum = rect.bottom + sum1 + height2;
    }
  }
  [tmp38, c10] = _slicedToArray(obj5.useState(false), 2);
  _slicedToArray(obj5.useState(false), 2);
  if (tmp17) {
    first1 = obj13[0];
  } else if (hasItem) {
    first1 = tmp29;
  }
  let tmp40 = result;
  if (tmp40) {
    tmp40 = null != first1 || null == stateFromStores2[tmp29];
    const tmp41 = null != first1 || null == stateFromStores2[tmp29];
  }
  function handleNextStep() {
    transition(1, { skipThrottle: true, hapticType: null });
  }
  function handlePreviousStep() {
    transition(-1, { skipThrottle: true, hapticType: null });
  }
  const tmp42 = closure_18;
  let obj7 = { theme: ThemeTypes.DARK, children: tmp43(tmp44, obj8) };
  obj8 = { style: tmp.container, children: items4 };
  const ThemeContextProvider = tmp5(tmp3[41]).ThemeContextProvider;
  tmp43 = closure_19;
  if (stateFromStores) {
    let tmp42Result = route === INTRODUCTION;
    const obj9 = { stage: characterStage, layout: str, characterBottomInset: sum, isCovered: tmp14, isActive: !tmp47, style: tmp.layer, children: tmp42Result };
    tmp47 = tmp14;
    const tmp2Result10 = tmp2(tmp3[42]);
    if (!tmp14) {
      tmp47 = tmp42Result;
    }
    if (tmp42Result) {
      const obj10 = { route: checkpointFlow(tmp3[22]).CheckpointRoute.INTRODUCTION, onNextStep: handleNextStep, onPreviousStep: handlePreviousStep };
      const tmp2Result11 = tmp2(tmp3[43]);
      tmp42Result = tmp42(tmp2Result11, obj10);
    }
    stateFromStores = tmp42(tmp2Result10, obj9);
  }
  items4 = [stateFromStores, , , , , , ];
  const obj11 = { visible: tmp14, enter: transition, exit: transition, hiddenScale, style: tmp.layer, children: tmp42(tmp2Result13, { gradientStartColor: prop }) };
  prop = undefined;
  const tmp2Result12 = tmp2(tmp3[44]);
  tmp2Result13 = tmp2(tmp3[45]);
  const tmp50 = hiddenScale;
  if (tmp18) {
    prop = cardColors.backgroundGradientStartColor;
  }
  items4[1] = tmp42(tmp2Result12, obj11);
  const obj12 = { visible: tmp14, enter, exit, hiddenScale: tmp50, mountAfterDelay: true, style: tmp.layer, children: tmp42(tmp2(tmp3[43]), { route, onNextStep: handleNextStep, onPreviousStep: handlePreviousStep }) };
  const tmp2Result14 = tmp2(tmp3[44]);
  items4[2] = tmp42(tmp2Result14, obj12);
  const tmp2Result15 = tmp2(tmp3[46]);
  if (tmp18) {
    clydeLogoImage = cardColors.clydeLogoImage;
  } else {
    clydeLogoImage = tmp2(tmp3[47]);
  }
  const obj14 = { logoAnimatedUri: clydeLogoImage, logoStaticUri: clydeLogoStaticImage, color: tmp22 };
  if (tmp18) {
    clydeLogoStaticImage = cardColors.clydeLogoStaticImage;
  } else {
    clydeLogoStaticImage = tmp2(tmp3[48]);
  }
  items4[3] = tmp42(tmp2Result15, obj14);
  let tmp42Result3 = result && tmp28 && !tmp17;
  if (tmp42Result3) {
    tmp42Result3 = width / height >= 1.3333333333333333;
  }
  if (tmp42Result3) {
    const obj15 = { style: items5, children: tmp42(tmp2(tmp3[49]), obj17) };
    items5 = [tmp.landscapeStat, ];
    const obj16 = { marginTop: null, marginLeft: null };
    ({ top: obj22.marginTop, left: obj22.marginLeft } = rect);
    items5[1] = obj16;
    obj17 = { customizationOption: tmp25 };
    tmp42Result3 = tmp42(tmp44, obj15);
  }
  items4[4] = tmp42Result3;
  const obj18 = { visible: result, enter: handleForward, exit, style: items6, children: tmp42(stateFromStores1, obj20) };
  items6 = [tmp.customizationSection, { marginLeft: rect.left, marginRight: rect.right, marginBottom: rect.bottom }, ];
  let tmp57 = tmp28;
  const tmp2Result16 = tmp2(tmp3[44]);
  if ("MobileLandscape" === str) {
    const items7 = [tmp.landscapeCustomizationSection, ];
    const obj19 = { marginTop: rect.top };
    items7[1] = obj19;
    tmp57 = items7;
  }
  items6[2] = tmp57;
  obj20 = { style: tmp.customizationContent, ref, onLayout, pointerEvents: str3, accessibilityElementsHidden: tmp38, importantForAccessibility: str2, children: tmp42(tmp2Result17, obj21) };
  str2 = "auto";
  str3 = "auto";
  if (tmp38) {
    str3 = "none";
  }
  if (tmp38) {
    str2 = "no-hide-descendants";
  }
  obj21 = { activeCustomizationOption: tmp25, isFinalizeRoute: tmp17, isCurrentTraitBlocked: hasItem, isSaving: tmp38, isLandscape: "MobileLandscape" === str, onSelectFinalizeOption: tmp26, onSelectTraitOption: checkpointFlow(tmp3[36]).selectCharacterTrait };
  tmp2Result17 = tmp2(tmp3[50]);
  items4[5] = tmp42(tmp2Result16, obj18);
  const obj23 = {
    activeRoute: route,
    onBack: function handleBack() {
      transition(-1);
    },
    onNext: function handleNext() {
      return obj(...arguments);
    },
    onReplay: function handleReplay() {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
      const obj2 = CheckpointFlows;
      const obj3 = { flow: checkpointFlow, stats };
      const checkpointReplayRoute = obj2.getCheckpointReplayRoute(obj3);
      const obj4 = CheckpointSounds;
      const obj5 = { previousRoute: route, route: checkpointReplayRoute };
      const checkpointRouteSounds = obj4.getCheckpointRouteSounds(obj5);
      if (null != checkpointRouteSounds) {
        closure_8(checkpointRouteSounds);
      }
      closure_4(checkpointReplayRoute);
    },
    onShare: function handleShare() {
      const obj = { character: stateFromStores1, stats, onForward: handleForward };
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.openLazy(asyncRequire(14170, dependencyMap.paths), "CheckpointShare", obj);
    },
    color: tmp22,
    shadowColor,
    backDisabled: tmp38,
    nextDisabled: tmp40,
    nextLoading: tmp38,
    nextBlockedTrait: first1
  };
  shadowColor = undefined;
  const tmp2Result18 = tmp2(tmp3[51]);
  if (tmp18) {
    shadowColor = cardColors.shadowColor;
  }
  items4[6] = tmp42(tmp2Result18, obj23);
  const tmp42Result4 = tmp42(ThemeContextProvider, obj7);
  return tmp42(checkpointFlow(tmp3[52]).CheckpointStepFocusProvider, { route, children: tmp42Result4 });
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
let obj = { loader: obj2, container: obj3, layer: { position: "absolute", width: "100%", height: "100%" }, customizationSection: { position: "absolute", left: 0, right: 0, bottom: sum1 }, landscapeCustomizationSection: rect, landscapeStat: rect1, customizationContent: obj4 };
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
  let tmp4Result;
  const tmp = useCheckpointPreloaderDefault();
  const obj = useCheckpointStepAnalytics;
  const checkpointCloseAnalytics = obj.useCheckpointCloseAnalytics();
  if (tmp) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    tmp4Result = tmp4(CheckpointModal, obj2);
  } else {
    const obj3 = { style: tmp3.loader, children: authStore4(metroRequire, {}) };
    tmp4Result = tmp4(metroImportDefault, obj3);
  }
  return tmp4Result;
};
