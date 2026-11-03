// Module ID: 13574
// Function ID: 13575
// Name: CheckpointModal
// Dependencies: [5, 32, 19, 17, 5084, 13571, 6186, 1083, 21, 575, 5381, 13575, 2123, 5141, 13588, 1627, 1493, 13589, 504, 13592, 6555, 6211, 12087, 8797, 13593, 13594, 13595, 6554, 13597, 13598, 5383, 6864, 2121, 6193, 6207, 13515, 13572, 5831, 1113, 6231, 5207, 13599, 13773, 13775, 13784, 6216, 6217, 7180, 13818, 13819, 13832, 13600, 13834, 2]
// Exports: default

// Module 13574 (CheckpointModal)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import HapticUtils from "HapticUtils" /* 5383 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6555 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6864 */;
import CheckpointHeaderButton from "CheckpointHeaderButton" /* 13588 */;
import CheckpointFlows from "CheckpointFlows" /* 13589 */;
import useCheckpointPreloaderDefault from "useCheckpointPreloader" /* 13834 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import MessageRecord from "MessageRecord" /* 5084 */;
import CheckpointStore from "CheckpointStore" /* 13571 */;
import CheckpointConstants from "CheckpointConstants" /* 6186 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
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
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj11;
  let obj19;
  let obj23;
  let obj6;
  let obj8;
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
  let tmp26;
  let tmp27;
  let tmp2Result13;
  let tmp39;
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
  let selectedCharacterTraits;
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
    obj = checkpointFlow(route[30]);
    const result = obj.triggerHapticFeedback(checkpointFlow(route[30]).HapticFeedbackTypes.IMPACT_LIGHT);
    const obj2 = { content: "", components: items };
    const obj3 = { type: checkpointFlow(route[32]).ComponentType.CHECKPOINT_CARD, id: obj4.asComponentId("0"), checkpointData: obj5.toCheckpointMessageComponentData(STATS_ONLY, stateFromStores, closure_1) };
    obj4 = checkpointFlow(route[33]);
    obj5 = checkpointFlow(route[34]);
    items = [obj3];
    const tmp2 = new selectedCharacterTraits(obj2);
    const tmp3 = checkpointFlow(route[35]);
    const obj6 = {
      message: tmp2,
      source: "checkpoint",
      customSendHandler(arg0, arg1, arg2) {
        return closure_1(...arguments);
      }
    };
    const openForwardModal = tmp3.openForwardModal;
    closure_1 = closure_3((arg0, arg1, arg2) => {
      let closure_0 = arg0;
      let withMessage = arg1;
      let closure_2 = arg2;
      let c7 = 0;
      let c8 = 0;
      let c6 = 0;
      const iter = (function*(arg0, value, arg2) {
        let tmp40;
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
                closure_4 = tmp40;
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
                const sendCheckpointCard = closure_0(route[36]).sendCheckpointCard;
                closure_0(route[36]);
                const tmp31 = closure_0;
                if (withMessage == null) {
                  c3 = "";
                }
                c7 = 3;
                c8 = 1;
                const obj5 = { value: sendCheckpointCard(tmp31, c3, closure_133_0), done: false };
                return obj5;
              }
            } else if (2 === c7) {
              c6 = 0;
              closure_2(false);
              const presentError = closure_0(route[37]).presentError;
              closure_0(route[37]);
              const intl = closure_0(route[38]).intl;
              presentError(intl.string(closure_0(route[38]).t.fEptJP));
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
              c6 = 0;
              obj = closure_0(route[35]);
              obj.closeForwardModal();
              closure_1_10(1, { skipThrottle: true, hapticType: null });
              c8 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp39) {
            tmp40 = c6;
            if (0 === c6) {
              c8 = 3;
              throw tmp39;
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
              const tmp45 = closure_2_5;
              if (tmp45) {
                _undefined(true);
                c3 = 1;
                const obj3 = tmp(closure_2[39]);
                const characterFromTraits = obj3.getCharacterFromTraits(selectedCharacterTraits);
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
              obj = { skipThrottle: true, hapticType: tmp(closure_2[30]).HapticFeedbackTypes.NOTIFICATION_SUCCESS };
              closure_128_10(1, obj);
            } else {
              const presentError = tmp(closure_2[37]).presentError;
              const tmp7 = tmp(closure_2[37]);
              const intl = tmp(closure_2[38]).intl;
              presentError(intl.string(tmp(closure_2[38]).t.fEptJP));
            }
            c3 = 0;
            closure_128_9(false);
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
  let obj3 = react;
  _slicedToArray = react.useRef(0);
  let obj4 = checkpointFlow(tmp3[20]);
  const checkpointRoutePresentation = obj4.getCheckpointRoutePresentation(route);
  ({ characterStage, statsScreen } = checkpointRoutePresentation);
  let tmp43Result = route === checkpointFlow(tmp3[20]).CheckpointRoute.HOME;
  if (!tmp43Result) {
    tmp43Result = null != statsScreen;
  }
  let tmp43Result4 = tmp43Result || route === tmp5(tmp3[20]).CheckpointRoute.INTRODUCTION;
  const tmp5Result = checkpointFlow(tmp3[20]);
  let result = tmp5Result.isCheckpointCustomizationRoute(route);
  const tmp16 = route === checkpointFlow(tmp3[20]).CheckpointRoute.FINALIZE_CHARACTER;
  react = tmp16;
  const tmp17 = route === tmp5(tmp3[20]).CheckpointRoute.SUMMARY;
  const items1 = [tmp7];
  const tmp5Result6 = checkpointFlow(tmp3[18]);
  stateFromStores = tmp5Result6.useStateFromStores(items1, () => _undefined.character);
  const tmp5Result7 = checkpointFlow(tmp3[21]);
  const characterCardColorPalette = tmp5Result7.getCharacterCardColorPalette(stateFromStores);
  const tmp5Result8 = checkpointFlow(tmp3[21]);
  const cardColors = tmp5Result8.getCardColors(characterCardColorPalette);
  const tmp21 = tmp17 ? cardColors.primaryBackgroundColor : transition;
  const items2 = [tmp7];
  const tmp5Result9 = checkpointFlow(tmp3[18]);
  const stateFromStores1 = tmp5Result9.useStateFromStores(items2, () => _undefined.isMuted);
  if (stateFromStores1) {
    VoiceNormalIcon = tmp5(tmp3[22]).VoiceXIcon;
  } else {
    VoiceNormalIcon = tmp5(tmp3[23]).VoiceNormalIcon;
  }
  const tmp2Result = tmp2(tmp3[24]);
  closure_7 = tmp2Result(tmp2(tmp3[25]));
  tmp2(tmp3[26])();
  [tmp26, tmp27] = _slicedToArray(obj3.useState(checkpointFlow(tmp3[27]).CheckpointCustomizationOption.BASE), 2);
  _slicedToArray(obj3.useState(checkpointFlow(tmp3[27]).CheckpointCustomizationOption.BASE), 2);
  if (!tmp16) {
    const tmp5Result10 = checkpointFlow(tmp3[27]);
    let BASE = tmp5Result10.getCustomizationOptionForCharacterStage(characterStage);
    if (BASE == null) {
      BASE = tmp5(tmp3[27]).CheckpointCustomizationOption.BASE;
    }
  }
  const tmp30 = tmp5(tmp3[27]).CUSTOMIZATION_OPTION_TO_TRAIT[tmp26];
  let tmp31 = tmp2(tmp3[28])();
  selectedCharacterTraits = tmp31.selectedCharacterTraits;
  const blockedTraits = tmp31.blockedTraits;
  const hasItem = blockedTraits.includes(tmp30);
  let tmp34 = result;
  const tmp2Result8 = tmp2(tmp3[29]);
  if (result) {
    tmp34 = !tmp29;
  }
  const tmp2Result1Result = tmp2Result8({ isMounted: tmp34 });
  const height2 = tmp2Result1Result.height;
  let sum = null;
  ({ ref, onLayout } = tmp2Result1Result);
  if (result) {
    sum = null;
    if (null != height2) {
      sum = rect.bottom + sum1 + height2;
    }
  }
  [tmp39, c9] = _slicedToArray(obj3.useState(false), 2);
  _slicedToArray(obj3.useState(false), 2);
  if (tmp16) {
    first1 = blockedTraits[0];
  } else if (hasItem) {
    first1 = tmp30;
  }
  let tmp41 = result;
  if (tmp41) {
    tmp41 = null != first1 || null == selectedCharacterTraits[tmp30];
    const tmp42 = null != first1 || null == selectedCharacterTraits[tmp30];
  }
  let obj5 = { theme: handleForward.DARK, children: tmp44(tmp45, obj6) };
  tmp45 = closure_7;
  obj6 = { style: tmp.container, children: items4 };
  const items3 = [tmp.layer, ];
  let coveredCharacterLayer = tmp43Result;
  const ThemeContextProvider = tmp5(tmp3[40]).ThemeContextProvider;
  if (tmp43Result) {
    coveredCharacterLayer = tmp.coveredCharacterLayer;
  }
  let obj7 = { collapsable: false, style: items3, pointerEvents: str3, accessibilityElementsHidden: tmp43Result4, importantForAccessibility: str4, children: tmp43(tmp2(tmp3[41]), obj8) };
  items3[1] = coveredCharacterLayer;
  let str2 = "auto";
  str3 = "auto";
  if (tmp43Result4) {
    str3 = "none";
  }
  str4 = str2;
  if (tmp43Result4) {
    str4 = "no-hide-descendants";
  }
  obj8 = { stage: characterStage, layout: str, isActive: !tmp43Result4, characterBottomInset: sum };
  items4 = [tmp43(tmp45, obj7), , , , , , ];
  if (tmp43Result) {
    let prop;
    const tmp2Result9 = tmp2(tmp3[42]);
    if (tmp17) {
      prop = cardColors.backgroundGradientStartColor;
    }
    const obj9 = { gradientStartColor: prop };
    tmp43Result = tmp43(tmp2Result9, obj9);
  }
  items4[1] = tmp43Result;
  if (tmp43Result4) {
    const obj10 = { style: tmp.layer, children: obj(tmp2(tmp3[43]), obj11) };
    obj11 = {
      route,
      onNextStep: function handleNextStep() {
          transition(1, { skipThrottle: true, hapticType: null });
        },
      onPreviousStep: function handlePreviousStep() {
          transition(-1, { skipThrottle: true, hapticType: null });
        }
    };
    tmp43Result4 = tmp43(tmp45, obj10);
  }
  items4[2] = tmp43Result4;
  const obj12 = { style: items5, children: items6 };
  items5 = [tmp.nav, { marginTop: rect.top, marginLeft: rect.left, marginRight: rect.right }];
  const tmp2Result10 = tmp2(tmp3[44]);
  if (tmp17) {
    clydeLogoImage = cardColors.clydeLogoImage;
  } else {
    clydeLogoImage = tmp2(tmp3[45]);
  }
  const obj13 = { animatedUri: clydeLogoImage, staticUri: clydeLogoStaticImage, style: tmp.logo };
  if (tmp17) {
    clydeLogoStaticImage = cardColors.clydeLogoStaticImage;
  } else {
    clydeLogoStaticImage = tmp2(tmp3[46]);
  }
  items6 = [tmp43(tmp2Result10, obj13), ];
  const obj14 = { style: tmp.headerActions, children: items7 };
  const obj15 = { onPress: checkpointFlow(tmp3[36]).toggleMute, accessibilityLabel: string(stateFromStores1 ? t.YqAjXy : t.w4m945), color: tmp21, children: obj(VoiceNormalIcon, { color: tmp21, size: "xs" }) };
  const tmp2Result11 = tmp2(tmp3[14]);
  let intl = tmp5(tmp3[38]).intl;
  string = intl.string;
  t = tmp5(tmp3[38]).t;
  items7 = [tmp43(tmp2Result11, obj15), ];
  const obj16 = {
    onPress: function handleClose() {
      obj = checkpointFlow(route[30]);
      const result = obj.triggerHapticFeedback(checkpointFlow(route[30]).HapticFeedbackTypes.IMPACT_LIGHT);
      const arr = stats(route[31]);
      arr.pop();
    },
    accessibilityLabel: intl2.string(checkpointFlow(tmp3[38]).t.cpT0Cq),
    color: tmp21,
    children: obj(checkpointFlow(tmp3[47]).XSmallIcon, { color: tmp21, size: "xs" })
  };
  const tmp2Result12 = tmp2(tmp3[14]);
  intl2 = tmp5(tmp3[38]).intl;
  items7[1] = obj(tmp2Result12, obj16);
  items6[1] = closure_13(tmp45, obj14);
  items4[3] = closure_13(tmp45, obj12);
  let tmp43Result5 = result && tmp29 && !tmp16;
  if (tmp43Result5) {
    tmp43Result5 = width / height >= 1.3333333333333333;
  }
  if (tmp43Result5) {
    const obj17 = { style: items8, children: obj(tmp2(tmp3[48]), obj19) };
    items8 = [tmp.landscapeStat, ];
    const obj18 = { marginTop: null, marginLeft: null };
    ({ top: obj24.marginTop, left: obj24.marginLeft } = rect);
    items8[1] = obj18;
    obj19 = { customizationOption: tmp26 };
    tmp43Result5 = tmp43(tmp45, obj17);
  }
  items4[4] = tmp43Result5;
  if (result) {
    const items9 = [tmp.customizationSection, , ];
    const obj20 = { marginLeft: null, marginRight: null, marginBottom: null };
    ({ left: obj26.marginLeft, right: obj26.marginRight, bottom: obj26.marginBottom } = rect);
    items9[1] = obj20;
    let tmp52 = tmp29;
    if (tmp52) {
      const items10 = [tmp.landscapeCustomizationSection, ];
      const obj21 = { marginTop: rect.top };
      items10[1] = obj21;
      tmp52 = items10;
    }
    items9[2] = tmp52;
    const obj22 = { style: items9, ref, onLayout, pointerEvents: str5, accessibilityElementsHidden: tmp39, importantForAccessibility: str2, children: obj(tmp2Result13, obj23) };
    str5 = str2;
    if (tmp39) {
      str5 = "none";
    }
    if (tmp39) {
      str2 = "no-hide-descendants";
    }
    obj23 = { activeCustomizationOption: tmp26, isFinalizeRoute: tmp16, isCurrentTraitBlocked: hasItem, isSaving: tmp39, isLandscape: "MobileLandscape" === str, onSelectFinalizeOption: tmp27, onSelectTraitOption: checkpointFlow(tmp3[36]).selectCharacterTrait };
    tmp2Result13 = tmp2(tmp3[49]);
    result = tmp43(tmp45, obj22);
  }
  items4[5] = result;
  const obj25 = {
    activeRoute: route,
    onBack: function handleBack() {
      transition(-1);
    },
    onNext: function handleNext() {
      return obj(...arguments);
    },
    onShare: function handleShare() {
      obj = { character: stateFromStores, stats, onForward: handleForward };
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.openLazy(asyncRequire(13575, dependencyMap.paths), "CheckpointShare", obj);
    },
    color: tmp21,
    shadowColor,
    backDisabled: tmp39,
    nextDisabled: tmp41,
    nextLoading: tmp39,
    nextBlockedTrait: first1
  };
  shadowColor = undefined;
  const tmp2Result14 = tmp2(tmp3[50]);
  if (tmp17) {
    shadowColor = cardColors.shadowColor;
  }
  items4[6] = obj(tmp2Result14, obj25);
  const tmp43Result6 = obj(ThemeContextProvider, obj5);
  return obj(checkpointFlow(tmp3[51]).CheckpointStepFocusProvider, { route, children: tmp43Result6 });
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
  let tmp3Result;
  const tmp = useCheckpointPreloaderDefault();
  if (tmp) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    tmp3Result = tmp3(CheckpointModal, obj2);
  } else {
    const obj = { style: tmp2.loader, children: authStore2(metroRequire, {}) };
    tmp3Result = tmp3(metroImportDefault, obj);
  }
  return tmp3Result;
};
