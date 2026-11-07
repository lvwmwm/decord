// Module ID: 13671
// Function ID: 13672
// Name: CheckpointModal
// Dependencies: [5, 32, 19, 17, 5083, 13667, 6199, 1083, 21, 575, 5374, 13672, 2118, 5140, 13685, 1627, 1493, 13686, 504, 13689, 13690, 6567, 6223, 12116, 8744, 13691, 13692, 13693, 6566, 13695, 9069, 5376, 6799, 2116, 6206, 6220, 13610, 13669, 13665, 5836, 1113, 6243, 5199, 13696, 13871, 13873, 13882, 6228, 6229, 7120, 13917, 13918, 13932, 13697, 13934, 2]
// Exports: default

// Module 13671 (CheckpointModal)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import Server from "Server" /* 2116 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import HapticUtils from "HapticUtils" /* 5376 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 6206 */;
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 6220 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6567 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import ForwardModalUtils from "ForwardModalUtils" /* 13610 */;
import CheckpointHeaderButton from "CheckpointHeaderButton" /* 13685 */;
import CheckpointFlows from "CheckpointFlows" /* 13686 */;
import useCheckpointStepAnalytics from "useCheckpointStepAnalytics" /* 13690 */;
import useCheckpointPreloaderDefault from "useCheckpointPreloader" /* 13934 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import MessageRecord from "MessageRecord" /* 5083 */;
import CheckpointStore from "CheckpointStore" /* 13667 */;
import CheckpointConstants from "CheckpointConstants" /* 6199 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let c1, c4, closure_1, closure_4, closure_5, importDefault;

let CHECKPOINT_CONTROL_SIZE;
let CHECKPOINT_LOGO_SIZE;
let CHECKPOINT_NAV_HEIGHT;
let c10;
let closure_12;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let rect;
let rect1;
let rect2;
let result;
let size;
function CheckpointModal(didPlayerShareDataWithDiscord) {
  let VoiceNormalIcon;
  let _undefined;
  let c9;
  let characterStage;
  let closure_3;
  let clydeLogoImage;
  let clydeLogoStaticImage;
  let first1;
  let height;
  let intl2;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj12;
  let obj21;
  let obj25;
  let obj7;
  let obj9;
  let onLayout;
  let ref;
  let route;
  let shadowColor;
  let stats;
  let statsScreen;
  let str3;
  let str4;
  let str5;
  let string;
  let t;
  let tmp27;
  let tmp28;
  let tmp2Result13;
  let tmp40;
  let tmp45;
  let width;
  let flag = didPlayerShareDataWithDiscord.didPlayerShareDataWithDiscord;
  if (flag === undefined) {
    flag = true;
  }
  let checkpointFlow;
  importDefault = undefined;
  route = undefined;
  closure_3 = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let stateFromStores;
  let closure_7;
  let stateFromStores2;
  c9 = undefined;
  function transition(direction, arg1) {
    obj = arg1;
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
      const obj3 = { flow: checkpointFlow, stats, currentRoute: route, direction };
      const obj2 = CheckpointFlows;
      const adjacentCheckpointRoute = obj2.getAdjacentCheckpointRoute(obj3);
      const tmp10 = route;
      if (null != adjacentCheckpointRoute) {
        ref.current = timestamp;
        if (null != IMPACT_LIGHT) {
          const obj4 = HapticUtils;
          const result = obj4.triggerHapticFeedback(IMPACT_LIGHT);
        }
        const SILENT_CHECKPOINT_ROUTES = CheckpointNavigation.SILENT_CHECKPOINT_ROUTES;
        if (!SILENT_CHECKPOINT_ROUTES.has(tmp10)) {
          closure_7();
        }
        closure_3(adjacentCheckpointRoute);
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
    obj = HapticUtils;
    let result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
    let obj2 = { content: "", components: items };
    const obj3 = { type: Server.ComponentType.CHECKPOINT_CARD, id: obj4.asComponentId("0"), checkpointData: obj5.toCheckpointMessageComponentData(STATS_ONLY, stateFromStores, closure_1) };
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
                const sendCheckpointCard = closure_0(closure_2[37]).sendCheckpointCard;
                closure_0(closure_2[37]);
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
              obj = closure_0(closure_2[38]);
              const result = obj.trackCheckpoint2026CardShared(closure_133_0);
              c6 = 0;
              const obj2 = closure_0(closure_2[36]);
              obj2.closeForwardModal();
              c8 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
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
  let obj = function _handleNext() {
    obj = _asyncToGenerator(async (arg0, value) => {
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              const tmp45 = closure_2_5;
              if (tmp45) {
                _undefined(true);
                c3 = 1;
                const obj3 = tmp(closure_2[41]);
                const characterFromTraits = obj3.getCharacterFromTraits(stateFromStores2);
                c1 = 2;
                c4 = 1;
                const obj6 = { value: obj4.completeCheckpoint(characterFromTraits), done: false };
                obj4 = tmp(closure_2[37]);
                return obj6;
              } else {
                transition(1);
              }
            }
          } else if (1 === tmp4) {
            c3 = 0;
            closure_128_9(false);
            throw closure_2;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_9(false);
            c4 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            if (value) {
              obj = { skipThrottle: true, hapticType: tmp(closure_2[31]).HapticFeedbackTypes.NOTIFICATION_SUCCESS };
              closure_128_10(1, obj);
            } else {
              const presentError = tmp(closure_2[39]).presentError;
              const tmp7 = tmp(closure_2[39]);
              const intl = tmp(closure_2[40]).intl;
              presentError(intl.string(tmp(closure_2[40]).t.fEptJP));
            }
            c3 = 0;
            closure_128_9(false);
          }
          c4 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
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
  const tmp = closure_15();
  let tmp2 = importDefault;
  let tmp3 = route;
  const rect = require("useSafeAreaInsets")();
  const tmp4 = require("useWindowDimensions")();
  ({ width, height } = tmp4);
  let str = "MobilePortrait";
  if (width > height) {
    str = "MobileLandscape";
  }
  obj = checkpointFlow(tmp3[17]);
  checkpointFlow = obj.getCheckpointFlow(flag);
  let obj2 = checkpointFlow(tmp3[18]);
  let tmp7 = c9;
  let items = [c9];
  importDefault = obj2.useStateFromStores(items, () => _undefined.stats);
  [route, closure_3] = tmp2(tmp3[19])(checkpointFlow);
  let obj3 = checkpointFlow(tmp3[20]);
  const checkpointStepAnalytics = obj3.useCheckpointStepAnalytics(route);
  let obj4 = react;
  _slicedToArray = react.useRef(0);
  let obj5 = checkpointFlow(tmp3[21]);
  const checkpointRoutePresentation = obj5.getCheckpointRoutePresentation(route);
  ({ characterStage, statsScreen } = checkpointRoutePresentation);
  let tmp44Result = route === checkpointFlow(tmp3[21]).CheckpointRoute.HOME;
  if (!tmp44Result) {
    tmp44Result = null != statsScreen;
  }
  let tmp44Result4 = tmp44Result || route === tmp5(tmp3[21]).CheckpointRoute.INTRODUCTION;
  const tmp5Result = checkpointFlow(tmp3[21]);
  let result = tmp5Result.isCheckpointCustomizationRoute(route);
  const tmp17 = route === checkpointFlow(tmp3[21]).CheckpointRoute.FINALIZE_CHARACTER;
  react = tmp17;
  const tmp18 = route === checkpointFlow(tmp3[21]).CheckpointRoute.SUMMARY;
  const items1 = [tmp7];
  const tmp5Result7 = checkpointFlow(tmp3[18]);
  stateFromStores = tmp5Result7.useStateFromStores(items1, () => _undefined.character);
  const tmp5Result8 = checkpointFlow(tmp3[22]);
  const characterCardColorPalette = tmp5Result8.getCharacterCardColorPalette(stateFromStores);
  const tmp5Result9 = checkpointFlow(tmp3[22]);
  const cardColors = tmp5Result9.getCardColors(characterCardColorPalette);
  const tmp22 = tmp18 ? cardColors.primaryBackgroundColor : transition;
  const items2 = [tmp7];
  const tmp5Result10 = checkpointFlow(tmp3[18]);
  const stateFromStores1 = tmp5Result10.useStateFromStores(items2, () => _undefined.isMuted);
  if (stateFromStores1) {
    VoiceNormalIcon = tmp5(tmp3[23]).VoiceXIcon;
  } else {
    VoiceNormalIcon = tmp5(tmp3[24]).VoiceNormalIcon;
  }
  const tmp2Result = tmp2(tmp3[25]);
  closure_7 = tmp2Result(tmp2(tmp3[26]));
  tmp2(tmp3[27])();
  [tmp27, tmp28] = _slicedToArray(obj4.useState(checkpointFlow(tmp3[28]).CheckpointCustomizationOption.BASE), 2);
  _slicedToArray(obj4.useState(checkpointFlow(tmp3[28]).CheckpointCustomizationOption.BASE), 2);
  if (!tmp17) {
    const tmp5Result11 = checkpointFlow(tmp3[28]);
    let BASE = tmp5Result11.getCustomizationOptionForCharacterStage(characterStage);
    if (BASE == null) {
      BASE = tmp5(tmp3[28]).CheckpointCustomizationOption.BASE;
    }
  }
  const tmp31 = checkpointFlow(tmp3[28]).CUSTOMIZATION_OPTION_TO_TRAIT[tmp27];
  const items3 = [tmp7];
  const tmp5Result12 = checkpointFlow(tmp3[18]);
  stateFromStores2 = tmp5Result12.useStateFromStores(items3, () => _undefined.selectedCharacterTraits);
  const obj13 = tmp2(tmp3[29])();
  const hasItem = obj13.includes(tmp31);
  let tmp35 = result;
  const tmp2Result8 = tmp2(tmp3[30]);
  if (result) {
    tmp35 = !tmp30;
  }
  const tmp2Result1Result = tmp2Result8({ isMounted: tmp35 });
  const height2 = tmp2Result1Result.height;
  let sum = null;
  ({ ref, onLayout } = tmp2Result1Result);
  if (result) {
    sum = null;
    if (null != height2) {
      const tmp38 = sum1;
      sum = rect.bottom + sum1 + height2;
    }
  }
  [tmp40, c9] = _slicedToArray(obj4.useState(false), 2);
  _slicedToArray(obj4.useState(false), 2);
  if (tmp17) {
    first1 = obj13[0];
  } else if (hasItem) {
    first1 = tmp31;
  }
  let tmp42 = result;
  if (tmp42) {
    let tmp43 = null != first1 || null == stateFromStores2[tmp31];
    tmp42 = tmp43;
  }
  let obj6 = { theme: handleForward.DARK, children: tmp45(tmp46, obj7) };
  tmp45 = closure_13;
  obj7 = { style: tmp.container, children: items5 };
  const items4 = [tmp.layer, ];
  let coveredCharacterLayer = tmp44Result;
  const ThemeContextProvider = tmp5(tmp3[42]).ThemeContextProvider;
  if (tmp44Result) {
    coveredCharacterLayer = tmp.coveredCharacterLayer;
  }
  const obj8 = { collapsable: false, style: items4, pointerEvents: str3, accessibilityElementsHidden: tmp44Result4, importantForAccessibility: str4, children: tmp44(tmp2(tmp3[43]), obj9) };
  items4[1] = coveredCharacterLayer;
  let str2 = "auto";
  str3 = "auto";
  if (tmp44Result4) {
    str3 = "none";
  }
  str4 = str2;
  if (tmp44Result4) {
    str4 = "no-hide-descendants";
  }
  obj9 = { stage: characterStage, layout: str, isActive: !tmp44Result4, isHidden: tmp44Result, characterBottomInset: sum };
  items5 = [tmp44(tmp46, obj8), , , , , , ];
  if (tmp44Result) {
    let prop;
    const tmp2Result9 = tmp2(tmp3[44]);
    if (tmp18) {
      prop = cardColors.backgroundGradientStartColor;
    }
    const obj10 = { gradientStartColor: prop };
    tmp44Result = tmp44(tmp2Result9, obj10);
  }
  items5[1] = tmp44Result;
  if (tmp44Result4) {
    const obj11 = { style: tmp.layer, children: obj(tmp2(tmp3[45]), obj12) };
    obj12 = {
      route,
      onNextStep: function handleNextStep() {
          transition(1, { skipThrottle: true, hapticType: null });
        },
      onPreviousStep: function handlePreviousStep() {
          transition(-1, { skipThrottle: true, hapticType: null });
        }
    };
    tmp44Result4 = tmp44(tmp46, obj11);
  }
  items5[2] = tmp44Result4;
  const obj14 = { style: items6, children: items7 };
  items6 = [tmp.nav, { marginTop: rect.top, marginLeft: rect.left, marginRight: rect.right }];
  const tmp2Result10 = tmp2(tmp3[46]);
  if (tmp18) {
    clydeLogoImage = cardColors.clydeLogoImage;
  } else {
    clydeLogoImage = tmp2(tmp3[47]);
  }
  const obj15 = { animatedUri: clydeLogoImage, staticUri: clydeLogoStaticImage, style: tmp.logo };
  if (tmp18) {
    clydeLogoStaticImage = cardColors.clydeLogoStaticImage;
  } else {
    clydeLogoStaticImage = tmp2(tmp3[48]);
  }
  items7 = [tmp44(tmp2Result10, obj15), ];
  const obj16 = { style: tmp.headerActions, children: items8 };
  const obj17 = { onPress: checkpointFlow(tmp3[37]).toggleMute, accessibilityLabel: string(stateFromStores1 ? t.YqAjXy : t.w4m945), color: tmp22, children: obj(VoiceNormalIcon, { color: tmp22, size: "xs" }) };
  const tmp2Result11 = tmp2(tmp3[14]);
  let intl = tmp5(tmp3[40]).intl;
  string = intl.string;
  t = tmp5(tmp3[40]).t;
  items8 = [tmp44(tmp2Result11, obj17), ];
  const obj18 = {
    onPress: function handleClose() {
      obj = checkpointFlow(route[31]);
      const result = obj.triggerHapticFeedback(checkpointFlow(route[31]).HapticFeedbackTypes.IMPACT_LIGHT);
      const arr = stats(route[32]);
      arr.pop();
    },
    accessibilityLabel: intl2.string(checkpointFlow(tmp3[40]).t.cpT0Cq),
    color: tmp22,
    children: obj(checkpointFlow(tmp3[49]).XSmallIcon, { color: tmp22, size: "xs" })
  };
  const tmp2Result12 = tmp2(tmp3[14]);
  intl2 = tmp5(tmp3[40]).intl;
  items8[1] = obj(tmp2Result12, obj18);
  items7[1] = tmp45(closure_7, obj16);
  items5[3] = tmp45(closure_7, obj14);
  let tmp44Result5 = result && tmp30 && !tmp17;
  if (tmp44Result5) {
    tmp44Result5 = width / height >= 1.3333333333333333;
  }
  if (tmp44Result5) {
    const obj19 = { style: items9, children: obj(tmp2(tmp3[50]), obj21) };
    items9 = [tmp.landscapeStat, ];
    const obj20 = { marginTop: null, marginLeft: null };
    ({ top: obj27.marginTop, left: obj27.marginLeft } = rect);
    items9[1] = obj20;
    obj21 = { customizationOption: tmp27 };
    tmp44Result5 = tmp44(tmp46, obj19);
  }
  items5[4] = tmp44Result5;
  if (result) {
    const items10 = [tmp.customizationSection, , ];
    const obj22 = { marginLeft: null, marginRight: null, marginBottom: null };
    ({ left: obj29.marginLeft, right: obj29.marginRight, bottom: obj29.marginBottom } = rect);
    items10[1] = obj22;
    let tmp53 = tmp30;
    if (tmp53) {
      const items11 = [tmp.landscapeCustomizationSection, ];
      const obj23 = { marginTop: rect.top };
      items11[1] = obj23;
      tmp53 = items11;
    }
    items10[2] = tmp53;
    const obj24 = { style: items10, ref, onLayout, pointerEvents: str5, accessibilityElementsHidden: tmp40, importantForAccessibility: str2, children: obj(tmp2Result13, obj25) };
    str5 = str2;
    if (tmp40) {
      str5 = "none";
    }
    if (tmp40) {
      str2 = "no-hide-descendants";
    }
    obj25 = { activeCustomizationOption: tmp27, isFinalizeRoute: tmp17, isCurrentTraitBlocked: hasItem, isSaving: tmp40, isLandscape: "MobileLandscape" === str, onSelectFinalizeOption: tmp28, onSelectTraitOption: checkpointFlow(tmp3[37]).selectCharacterTrait };
    tmp2Result13 = tmp2(tmp3[51]);
    result = tmp44(tmp46, obj24);
  }
  items5[5] = result;
  const obj26 = {
    activeRoute: route,
    onBack: function handleBack() {
      transition(-1);
    },
    onNext: function handleNext() {
      return obj(...arguments);
    },
    onReplay: function handleReplay() {
      obj = HapticUtils;
      const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
      closure_7();
      const obj2 = CheckpointFlows;
      const obj3 = { flow: checkpointFlow, stats };
      closure_3(obj2.getCheckpointReplayRoute(obj3));
    },
    onShare: function handleShare() {
      obj = { character: stateFromStores, stats, onForward: handleForward };
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.openLazy(asyncRequire(13672, dependencyMap.paths), "CheckpointShare", obj);
    },
    color: tmp22,
    shadowColor,
    backDisabled: tmp40,
    nextDisabled: tmp42,
    nextLoading: tmp40,
    nextBlockedTrait: first1
  };
  shadowColor = undefined;
  const tmp2Result14 = tmp2(tmp3[52]);
  if (tmp18) {
    shadowColor = cardColors.shadowColor;
  }
  items5[6] = obj(tmp2Result14, obj26);
  const tmp44Result6 = obj(ThemeContextProvider, obj6);
  return obj(checkpointFlow(tmp3[53]).CheckpointStepFocusProvider, { route, children: tmp44Result6 });
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ActivityIndicator: metroRequire, View: metroImportDefault } = react_native);
({ CHECKPOINT_CONTROL_SIZE, CHECKPOINT_LOGO_SIZE, CHECKPOINT_NAV_HEIGHT, CHECKPOINT_PRIMARY: c10 } = CheckpointConstants);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let sum = CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16;
const sum1 = sum + nativeDefault.space.PX_24;
let createStyles = createStyles_mod;
let obj = { loader: obj2, container: obj3, layer: { position: "absolute", width: "100%", height: "100%" }, coveredCharacterLayer: { opacity: 0 }, nav: rect, logo: size, headerActions: obj4, customizationSection: { position: "absolute", left: 0, right: 0, bottom: sum1 }, landscapeCustomizationSection: rect1, landscapeStat: rect2 };
obj2 = { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BLACK };
createStyles = createStyles.createStyles;
obj3 = { height: "100%", backgroundColor: nativeDefault.colors.BLACK };
rect = { position: "absolute", top: 0, left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, height: CHECKPOINT_NAV_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
size = { width: CHECKPOINT_LOGO_SIZE + 6, height: CHECKPOINT_LOGO_SIZE + 6, margin: -3 };
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
rect1 = { top: (CHECKPOINT_NAV_HEIGHT + CheckpointHeaderButton.CHECKPOINT_HEADER_BUTTON_SIZE) / 2, bottom: CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16, left: "59%", marginLeft: 0 };
rect2 = { position: "absolute", top: result + nativeDefault.space.PX_32, left: nativeDefault.space.PX_16 };
result = (CHECKPOINT_NAV_HEIGHT + CHECKPOINT_LOGO_SIZE) / 2;
let closure_15 = createStyles(obj);
size = size_mod;
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
    const obj3 = { style: tmp3.loader, children: authStore2(metroRequire, {}) };
    tmp4Result = tmp4(metroImportDefault, obj3);
  }
  return tmp4Result;
};
