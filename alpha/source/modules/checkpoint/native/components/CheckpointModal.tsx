// Module ID: 14165
// Function ID: 14166
// Name: CheckpointModal
// Dependencies: [5, 32, 19, 17, 5186, 14146, 6314, 14166, 1083, 21, 575, 5489, 14167, 2118, 5243, 14164, 1627, 1493, 14180, 504, 14183, 14155, 6682, 6338, 14184, 14153, 6681, 14191, 7929, 5491, 6785, 14185, 2116, 6321, 6335, 10170, 14150, 14144, 5951, 1113, 5314, 14192, 14368, 14193, 14157, 14162, 6343, 6344, 14412, 14413, 14427, 14156, 14435, 2]
// Exports: default

// Module 14165 (CheckpointModal)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import Server from "Server" /* 2116 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import HapticUtils from "HapticUtils" /* 5491 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 6321 */;
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 6335 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import ForwardModalUtils from "ForwardModalUtils" /* 10170 */;
import useCheckpointStepAnalytics from "useCheckpointStepAnalytics" /* 14155 */;
import CheckpointHeaderButton from "CheckpointHeaderButton" /* 14164 */;
import CheckpointFlows from "CheckpointFlows" /* 14180 */;
import CheckpointSounds from "CheckpointSounds" /* 14185 */;
import useCheckpointPreloaderDefault from "useCheckpointPreloader" /* 14435 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import MessageRecord from "MessageRecord" /* 5186 */;
import CheckpointStore from "CheckpointStore" /* 14146 */;
import CheckpointConstants from "CheckpointConstants" /* 6314 */;
import CheckpointTransitionConstants from "CheckpointTransitionConstants" /* 14166 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c3, closure_1, closure_4, closure_5, importDefault;

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
  let clydeLogoImage;
  let clydeLogoStaticImage;
  let height;
  let items4;
  let items5;
  let items6;
  let obj17;
  let obj20;
  let obj21;
  let obj7;
  let onLayout;
  let prop;
  let ref;
  let route;
  let stats;
  let statsScreen;
  let str2;
  let str3;
  let tmp25;
  let tmp26;
  let tmp2Result12;
  let tmp2Result16;
  let tmp38;
  let tmp42;
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
  let stateFromStores1;
  let closure_6;
  ref = undefined;
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
          closure_6(checkpointRouteSounds);
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
      customSendHandler() {
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
  const tmp = closure_21();
  let tmp2 = importDefault;
  let tmp3 = stateFromStores;
  const rect = require("useSafeAreaInsets")();
  ({ width, height } = require("useWindowDimensions")());
  let str = "MobilePortrait";
  const tmp4 = require("useWindowDimensions")();
  if (width > height) {
    str = "MobileLandscape";
  }
  let obj = checkpointFlow(tmp3[18]);
  checkpointFlow = obj.getCheckpointFlow(flag);
  let obj2 = checkpointFlow(tmp3[19]);
  let items = [handleForward];
  importDefault = obj2.useStateFromStores(items, () => handleForward.stats);
  let obj3 = checkpointFlow(tmp3[19]);
  const items1 = [handleForward];
  stateFromStores = obj3.useStateFromStores(items1, () => handleForward.isCharacterCreatorEnabled);
  [route, _slicedToArray] = tmp2(tmp3[20])(checkpointFlow);
  let obj4 = checkpointFlow(tmp3[21]);
  const checkpointStepAnalytics = obj4.useCheckpointStepAnalytics(route);
  let obj5 = checkpointFlow(tmp3[22]);
  const checkpointRoutePresentation = obj5.getCheckpointRoutePresentation(route);
  ({ characterStage, statsScreen } = checkpointRoutePresentation);
  let tmp14 = route === checkpointFlow(tmp3[22]).CheckpointRoute.HOME;
  if (!tmp14) {
    tmp14 = null != statsScreen;
  }
  const INTRODUCTION = tmp5(tmp3[22]).CheckpointRoute.INTRODUCTION;
  const tmp5Result = checkpointFlow(tmp3[22]);
  let result = tmp5Result.isCheckpointCustomizationRoute(route);
  const FINALIZE_CHARACTER = tmp5(tmp3[22]).CheckpointRoute.FINALIZE_CHARACTER;
  const tmp17 = route === checkpointFlow(tmp3[22]).CheckpointRoute.SUMMARY;
  const items2 = [tmp7];
  const tmp5Result6 = checkpointFlow(tmp3[19]);
  stateFromStores1 = tmp5Result6.useStateFromStores(items2, () => handleForward.character);
  const tmp5Result7 = checkpointFlow(tmp3[23]);
  const characterCardColorPalette = tmp5Result7.getCharacterCardColorPalette(stateFromStores1);
  const tmp5Result8 = checkpointFlow(tmp3[23]);
  const cardColors = tmp5Result8.getCardColors(characterCardColorPalette);
  const tmp21 = tmp17 ? cardColors.primaryBackgroundColor : closure_10;
  closure_6 = tmp2(tmp3[24])();
  tmp2(tmp3[25])();
  [tmp25, tmp26] = _slicedToArray(stateFromStores1.useState(checkpointFlow(tmp3[26]).CheckpointCustomizationOption.BASE), 2);
  _slicedToArray(stateFromStores1.useState(checkpointFlow(tmp3[26]).CheckpointCustomizationOption.BASE), 2);
  const obj10 = stateFromStores1;
  if (route !== FINALIZE_CHARACTER) {
    const tmp5Result9 = checkpointFlow(tmp3[26]);
    let BASE = tmp5Result9.getCustomizationOptionForCharacterStage(characterStage);
    if (BASE == null) {
      BASE = tmp5(tmp3[26]).CheckpointCustomizationOption.BASE;
    }
  }
  const tmp29 = checkpointFlow(tmp3[26]).CUSTOMIZATION_OPTION_TO_TRAIT[tmp25];
  const obj12 = tmp2(tmp3[27])();
  const hasItem = obj12.includes(tmp29);
  let tmp32 = result;
  const tmp2Result = tmp2(tmp3[28]);
  if (result) {
    tmp32 = !tmp28;
  }
  const tmp2ResultResult = tmp2Result({ isMounted: tmp32 });
  const height2 = tmp2ResultResult.height;
  let sum = null;
  ({ ref, onLayout } = tmp2ResultResult);
  if (result) {
    sum = null;
    if (null != height2) {
      sum = rect.bottom + sum1 + height2;
    }
  }
  function handleNextStep() {
    transition(1, { skipThrottle: true, hapticType: null });
  }
  function handlePreviousStep() {
    transition(-1, { skipThrottle: true, hapticType: null });
  }
  const items3 = [tmp7];
  const tmp5Result10 = checkpointFlow(tmp3[19]);
  const stateFromStores2 = tmp5Result10.useStateFromStores(items3, () => handleForward.isSaving);
  ref = obj10.useRef(0);
  let obj6 = { theme: ThemeTypes.DARK, children: tmp38(tmp39, obj7) };
  obj7 = { style: tmp.container, children: items4 };
  const ThemeContextProvider = tmp5(tmp3[40]).ThemeContextProvider;
  tmp38 = closure_19;
  if (stateFromStores) {
    let tmp37Result = route === INTRODUCTION;
    const obj8 = { stage: characterStage, layout: str, characterBottomInset: sum, isCovered: tmp14, isActive: !tmp42, style: tmp.layer, children: tmp37Result };
    tmp42 = tmp14;
    const tmp2Result9 = tmp2(tmp3[41]);
    if (!tmp14) {
      tmp42 = tmp37Result;
    }
    if (tmp37Result) {
      const obj9 = { route: checkpointFlow(tmp3[22]).CheckpointRoute.INTRODUCTION, onNextStep: handleNextStep, onPreviousStep: handlePreviousStep };
      const tmp2Result10 = tmp2(tmp3[42]);
      tmp37Result = tmp37(tmp2Result10, obj9);
    }
    stateFromStores = tmp37(tmp2Result9, obj8);
  }
  items4 = [stateFromStores, , , , , , ];
  const obj11 = { visible: tmp14, enter: exit, exit, hiddenScale, style: tmp.layer, children: closure_18(tmp2Result12, { gradientStartColor: prop }) };
  prop = undefined;
  const tmp2Result11 = tmp2(tmp3[43]);
  tmp2Result12 = tmp2(tmp3[44]);
  const tmp45 = hiddenScale;
  if (tmp17) {
    prop = cardColors.backgroundGradientStartColor;
  }
  items4[1] = closure_18(tmp2Result11, obj11);
  const obj13 = { visible: tmp14, enter: enter2, exit: exit2, hiddenScale: tmp45, mountAfterDelay: true, style: tmp.layer, children: closure_18(tmp2(tmp3[42]), { route, onNextStep: handleNextStep, onPreviousStep: handlePreviousStep }) };
  const tmp2Result13 = tmp2(tmp3[43]);
  items4[2] = closure_18(tmp2Result13, obj13);
  const tmp2Result14 = tmp2(tmp3[45]);
  if (tmp17) {
    clydeLogoImage = cardColors.clydeLogoImage;
  } else {
    clydeLogoImage = tmp2(tmp3[46]);
  }
  const obj14 = { logoAnimatedUri: clydeLogoImage, logoStaticUri: clydeLogoStaticImage, color: tmp21 };
  if (tmp17) {
    clydeLogoStaticImage = cardColors.clydeLogoStaticImage;
  } else {
    clydeLogoStaticImage = tmp2(tmp3[47]);
  }
  items4[3] = closure_18(tmp2Result14, obj14);
  let tmp37Result3 = result && tmp28 && !tmp22;
  if (tmp37Result3) {
    tmp37Result3 = width / height >= 1.3333333333333333;
  }
  if (tmp37Result3) {
    const obj15 = { style: items5, children: closure_18(tmp2(tmp3[48]), obj17) };
    items5 = [tmp.landscapeStat, ];
    const obj16 = { marginTop: null, marginLeft: null };
    ({ top: obj22.marginTop, left: obj22.marginLeft } = rect);
    items5[1] = obj16;
    obj17 = { customizationOption: tmp25 };
    tmp37Result3 = tmp37(tmp39, obj15);
  }
  items4[4] = tmp37Result3;
  const obj18 = { visible: result, enter, exit, style: items6, children: closure_18(ref, obj20) };
  items6 = [tmp.customizationSection, { marginLeft: rect.left, marginRight: rect.right, marginBottom: rect.bottom }, ];
  let tmp52 = tmp28;
  const tmp2Result15 = tmp2(tmp3[43]);
  if ("MobileLandscape" === str) {
    const items7 = [tmp.landscapeCustomizationSection, ];
    const obj19 = { marginTop: rect.top };
    items7[1] = obj19;
    tmp52 = items7;
  }
  items6[2] = tmp52;
  obj20 = { style: tmp.customizationContent, ref, onLayout, pointerEvents: str3, accessibilityElementsHidden: stateFromStores2, importantForAccessibility: str2, children: closure_18(tmp2Result16, obj21) };
  str2 = "auto";
  str3 = "auto";
  if (stateFromStores2) {
    str3 = "none";
  }
  if (stateFromStores2) {
    str2 = "no-hide-descendants";
  }
  obj21 = { activeCustomizationOption: tmp25, isFinalizeRoute: route === FINALIZE_CHARACTER, isCurrentTraitBlocked: hasItem, isSaving: stateFromStores2, isLandscape: "MobileLandscape" === str, onSelectFinalizeOption: tmp26, onSelectTraitOption: checkpointFlow(tmp3[36]).selectCharacterTrait };
  tmp2Result16 = tmp2(tmp3[49]);
  items4[5] = closure_18(tmp2Result15, obj18);
  const obj23 = {
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
      const obj3 = { flow: checkpointFlow, stats };
      const checkpointReplayRoute = obj2.getCheckpointReplayRoute(obj3);
      const obj4 = CheckpointSounds;
      const obj5 = { previousRoute: route, route: checkpointReplayRoute };
      const checkpointRouteSounds = obj4.getCheckpointRouteSounds(obj5);
      if (null != checkpointRouteSounds) {
        closure_6(checkpointRouteSounds);
      }
      closure_4(checkpointReplayRoute);
    },
    onShare: function handleShare() {
      const obj = { character: stateFromStores1, stats, onForward: handleForward };
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.openLazy(asyncRequire(14167, dependencyMap.paths), "CheckpointShare", obj);
    }
  };
  items4[6] = closure_18(tmp2(tmp3[50]), obj23);
  const tmp37Result4 = closure_18(ThemeContextProvider, obj6);
  return closure_18(checkpointFlow(tmp3[51]).CheckpointStepFocusProvider, { route, children: tmp37Result4 });
}
let _slicedToArray = _slicedToArray_mod;
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
