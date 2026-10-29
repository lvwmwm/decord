// Module ID: 13235
// Function ID: 13236
// Name: CheckpointModal
// Dependencies: [5, 32, 19, 17, 4948, 13236, 6054, 1095, 21, 587, 5247, 13237, 2000, 5005, 1631, 13247, 13250, 504, 6423, 6079, 11718, 8631, 13253, 13254, 13255, 6422, 13257, 6731, 1998, 6061, 6075, 13179, 5700, 1125, 6099, 5071, 13258, 13431, 13433, 13442, 6084, 6085, 13488, 6991, 13489, 13492, 13501, 13259, 558, 576, 13503, 2]

// Module 13235 (CheckpointModal)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1095 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import CheckpointStore2 from "CheckpointStore" /* 13236 */;
import CheckpointFlows from "CheckpointFlows" /* 13250 */;
import useCheckpointPreloaderDefault from "useCheckpointPreloader" /* 13503 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import MessageRecord from "MessageRecord" /* 4948 */;
import CheckpointConstants from "CheckpointConstants" /* 6054 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, c5, flow, importDefault;

let CHECKPOINT_CONTROL_SIZE;
let CHECKPOINT_LOGO_SIZE;
let CHECKPOINT_NAV_HEIGHT;
let closure_14;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let rect;
let rect1;
let size;
let unpackModuleId;
function CheckpointModal(didPlayerShareDataWithDiscord) {
  let VoiceNormalIcon;
  let _undefined;
  let c10;
  let c9;
  let characterStage;
  let closure_3;
  let closure_5;
  let clydeLogoImage;
  let clydeLogoStaticImage;
  let first1;
  let intl2;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj11;
  let obj6;
  let obj8;
  let ref;
  let route;
  let shadowColor;
  let stats;
  let statsScreen;
  let str2;
  let str3;
  let str4;
  let string;
  let t;
  let tmp25;
  let tmp26;
  let tmp32;
  let tmp36;
  let flag = didPlayerShareDataWithDiscord.didPlayerShareDataWithDiscord;
  if (flag === undefined) {
    flag = true;
  }
  _require = undefined;
  importDefault = undefined;
  route = undefined;
  closure_3 = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let stateFromStores;
  let closure_7;
  let selectedCharacterTraits;
  c9 = undefined;
  c10 = undefined;
  function transition(direction) {
    obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    let flag = obj.skipThrottle;
    if (flag === undefined) {
      flag = false;
    }
    const timestamp = Date.now();
    if (flag) {
      const obj3 = { flow, stats, currentRoute: route, direction };
      const obj2 = CheckpointFlows;
      const adjacentCheckpointRoute = obj2.getAdjacentCheckpointRoute(obj3);
      const tmp4 = require;
      const tmp8 = route;
      if (null != adjacentCheckpointRoute) {
        ref.current = timestamp;
        const SILENT_CHECKPOINT_ROUTES = tmp4(6423).SILENT_CHECKPOINT_ROUTES;
        if (!SILENT_CHECKPOINT_ROUTES.has(tmp8)) {
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
    let obj3;
    let obj4;
    flow = STATS_ONLY;
    obj = { content: "", components: items };
    const obj2 = { type: flow(route[28]).ComponentType.CHECKPOINT_CARD, id: obj3.asComponentId("0"), checkpointData: obj4.toCheckpointMessageComponentData(STATS_ONLY, stateFromStores, closure_1) };
    obj3 = flow(route[29]);
    obj4 = flow(route[30]);
    items = [obj2];
    const tmp = new selectedCharacterTraits(obj);
    const obj5 = {
      message: tmp,
      source: "checkpoint",
      customSendHandler(arg0, arg1, arg2) {
        return closure_1(...arguments);
      }
    };
    const openForwardModal = flow(route[31]).openForwardModal;
    const tmp2 = flow(route[31]);
    closure_1 = closure_3((arg0, arg1, arg2) => {
      let closure_4;
      let closure_0 = arg0;
      let withMessage = arg1;
      let closure_2 = arg2;
      let c7 = 0;
      let c8 = 0;
      let c6 = 0;
      const iter = (function*(arg0, value, arg2) {
        withMessage = withMessage.withMessage;
        yield "Reflect";
        closure_2(true);
        c3 = withMessage;
        const sendCheckpointCard = closure_0(route[15]).sendCheckpointCard;
        closure_0(route[15]);
        const tmp31 = closure_0;
        if (withMessage == null) {
          c3 = "";
        }
        yield sendCheckpointCard(tmp31, c3, closure_133_0);
        obj = closure_0(route[31]);
        obj.closeForwardModal();
        closure_1_11(1, { skipThrottle: true });
        yield "IconComponent";
        closure_2(false);
        const presentError = closure_0(route[32]).presentError;
        closure_0(route[32]);
        const intl = closure_0(route[33]).intl;
        presentError(intl.string(closure_0(route[33]).t.fEptJP));
      })();
      iter.next();
      return iter;
    });
    openForwardModal(obj5);
  }
  let obj = function _handleNext() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let obj5;
      let obj7;
      if (c5 === 2) {
        c5 = 3;
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
        let c3;
        try {
          let characterFromTraits;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_1 = tmp;
              characterFromTraits = undefined;
              if (route === characterFromTraits(closure_2[18]).CheckpointRoute.HOME) {
                if (_undefined.fetchState !== constants.SUCCESS) {
                  if (_undefined.fetchState === tmp35.FETCHING) {
                    c5 = 3;
                    return { value: "IconComponent", done: "IconComponent" };
                  } else {
                    c4 = 1;
                    c5 = 1;
                    const obj6 = { value: obj7.fetchCheckpointData(), done: false };
                    obj7 = characterFromTraits(closure_2[15]);
                    return obj6;
                  }
                }
              }
            }
          } else {
            if (1 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj8 = { value, done: true };
                return obj8;
              } else if (!value) {
                const presentError2 = characterFromTraits(closure_2[32]).presentError;
                const tmp29 = characterFromTraits(closure_2[32]);
                const intl2 = characterFromTraits(closure_2[33]).intl;
                presentError2(intl2.string(characterFromTraits(closure_2[33]).t.fEptJP));
                c5 = 3;
                const obj9 = { value: undefined, done: true };
                return obj9;
              }
            } else if (2 === c4) {
              c3 = 0;
              closure_129_10(false);
              throw closure_2;
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_10(false);
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              if (value) {
                closure_129_11(1, { skipThrottle: true });
              } else {
                const presentError = characterFromTraits(closure_2[32]).presentError;
                const tmp7 = characterFromTraits(closure_2[32]);
                const intl = characterFromTraits(closure_2[33]).intl;
                presentError(intl.string(characterFromTraits(closure_2[33]).t.fEptJP));
              }
              c3 = 0;
              closure_129_10(false);
            }
            c5 = 3;
            return { value: "IconComponent", done: "IconComponent" };
          }
          const tmp37 = closure_129_5;
          if (tmp37) {
            closure_129_10(true);
            c3 = 1;
            const obj4 = characterFromTraits(closure_2[34]);
            characterFromTraits = obj4.getCharacterFromTraits(closure_129_8);
            c4 = 3;
            c5 = 1;
            const obj10 = { value: obj5.completeCheckpoint(characterFromTraits), done: false };
            obj5 = characterFromTraits(closure_2[15]);
            return obj10;
          } else {
            closure_129_11(1);
          }
        } catch (tmp52) {
          closure_2 = tmp52;
          if (0 === c3) {
            c5 = 3;
            throw tmp52;
          } else {
            c4 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = closure_16();
  let tmp2 = importDefault;
  const tmp3 = route;
  const rect = require("useSafeAreaInsets")();
  obj = react;
  const effect = react.useEffect(() => {
    obj = flow(route[15]);
    obj.resetEditedCharacter();
  }, []);
  let obj2 = require("CheckpointFlows");
  _require = obj2.getCheckpointFlow(flag);
  let obj3 = require("get initialized");
  let items = [c9];
  importDefault = obj3.useStateFromStores(items, () => _undefined.stats);
  let tmp7 = _slicedToArray;
  [route, closure_3] = react.useState(require("CheckpointNavigation").CheckpointRoute.HOME);
  _slicedToArray = react.useRef(0);
  let obj4 = require("CheckpointNavigation");
  const checkpointRoutePresentation = obj4.getCheckpointRoutePresentation(route);
  ({ characterStage, statsScreen } = checkpointRoutePresentation);
  let tmp40Result = route === require("CheckpointNavigation").CheckpointRoute.HOME;
  if (!tmp40Result) {
    tmp40Result = null != statsScreen;
  }
  let tmp40Result4 = tmp40Result || route === tmp5(tmp3[18]).CheckpointRoute.INTRODUCTION;
  const tmp5Result = require("CheckpointNavigation");
  let result = tmp5Result.isCheckpointCustomizationRoute(route);
  const tmp15 = route === require("CheckpointNavigation").CheckpointRoute.FINALIZE_CHARACTER;
  react = tmp15;
  const tmp16 = route === require("CheckpointNavigation").CheckpointRoute.SUMMARY;
  const items1 = [tmp6];
  const tmp5Result6 = require("get initialized");
  stateFromStores = tmp5Result6.useStateFromStores(items1, () => _undefined.character);
  const tmp5Result7 = require("CheckpointCardColors");
  const characterCardColorPalette = tmp5Result7.getCharacterCardColorPalette(stateFromStores);
  const tmp5Result8 = require("CheckpointCardColors");
  const cardColors = tmp5Result8.getCardColors(characterCardColorPalette);
  const tmp20 = tmp16 ? cardColors.primaryBackgroundColor : transition;
  const items2 = [tmp6];
  const tmp5Result9 = require("get initialized");
  const stateFromStores1 = tmp5Result9.useStateFromStores(items2, () => _undefined.isMuted);
  if (stateFromStores1) {
    VoiceNormalIcon = tmp5(tmp3[20]).VoiceXIcon;
  } else {
    VoiceNormalIcon = tmp5(tmp3[21]).VoiceNormalIcon;
  }
  const tmp2Result = tmp2(tmp3[22]);
  closure_7 = tmp2Result(tmp2(tmp3[23]));
  tmp2(tmp3[24])();
  [tmp25, tmp26] = tmp7(obj.useState(require("CheckpointCustomizationUtils").CheckpointCustomizationOption.BASE), 2);
  tmp7(obj.useState(require("CheckpointCustomizationUtils").CheckpointCustomizationOption.BASE), 2);
  if (!tmp15) {
    const tmp5Result10 = require("CheckpointCustomizationUtils");
    let BASE = tmp5Result10.getCustomizationOptionForCharacterStage(characterStage);
    if (BASE == null) {
      BASE = tmp5(tmp3[25]).CheckpointCustomizationOption.BASE;
    }
  }
  const tmp28 = require("CheckpointCustomizationUtils").CUSTOMIZATION_OPTION_TO_TRAIT[tmp25];
  let tmp29 = tmp2(tmp3[26])();
  selectedCharacterTraits = tmp29.selectedCharacterTraits;
  const blockedTraits = tmp29.blockedTraits;
  const hasItem = blockedTraits.includes(tmp28);
  [tmp32, c9] = tmp7(obj.useState(null), 2);
  let sum = null;
  tmp7(obj.useState(null), 2);
  if (result) {
    sum = null;
    if (null != tmp32) {
      sum = rect.bottom + sum1 + tmp32;
    }
  }
  [tmp36, c10] = tmp7(obj.useState(false), 2);
  tmp7(obj.useState(false), 2);
  if (tmp15) {
    first1 = blockedTraits[0];
  } else if (hasItem) {
    first1 = tmp28;
  }
  let tmp38 = result;
  if (tmp38) {
    const tmp39 = null != first1 || null == selectedCharacterTraits[tmp28];
    tmp38 = tmp39;
  }
  const tmp40 = obj;
  let obj5 = { theme: handleForward.DARK, children: tmp41(tmp42, obj6) };
  obj6 = { style: tmp.container, children: items4 };
  const items3 = [tmp.layer, ];
  let coveredCharacterLayer = tmp40Result;
  const ThemeContextProvider = tmp5(tmp3[35]).ThemeContextProvider;
  if (tmp40Result) {
    coveredCharacterLayer = tmp.coveredCharacterLayer;
  }
  let obj7 = { collapsable: false, style: items3, pointerEvents: str2, accessibilityElementsHidden: tmp40Result4, importantForAccessibility: str3, children: tmp40(tmp2(tmp3[36]), obj8) };
  items3[1] = coveredCharacterLayer;
  let str = "auto";
  str2 = "auto";
  if (tmp40Result4) {
    str2 = "none";
  }
  str3 = str;
  if (tmp40Result4) {
    str3 = "no-hide-descendants";
  }
  obj8 = { stage: characterStage, isActive: !tmp40Result4, characterBottomInset: sum };
  items4 = [tmp40(tmp42, obj7), , , , , ];
  if (tmp40Result) {
    let prop;
    const tmp2Result7 = tmp2(tmp3[37]);
    if (tmp16) {
      prop = cardColors.backgroundGradientStartColor;
    }
    let obj9 = { gradientStartColor: prop };
    tmp40Result = tmp40(tmp2Result7, obj9);
  }
  items4[1] = tmp40Result;
  if (tmp40Result4) {
    let obj10 = { style: tmp.layer, children: tmp40(tmp2(tmp3[38]), obj11) };
    obj11 = {
      route,
      onNextStep: function handleNextStep() {
          transition(1, { skipThrottle: true });
        },
      onPreviousStep: function handlePreviousStep() {
          transition(-1, { skipThrottle: true });
        }
    };
    tmp40Result4 = tmp40(tmp42, obj10);
  }
  items4[2] = tmp40Result4;
  const obj12 = { style: items5, children: items6 };
  items5 = [tmp.nav, { marginTop: rect.top, marginLeft: rect.left, marginRight: rect.right }];
  const tmp2Result8 = tmp2(tmp3[39]);
  if (tmp16) {
    clydeLogoImage = cardColors.clydeLogoImage;
  } else {
    clydeLogoImage = tmp2(tmp3[40]);
  }
  const obj13 = { animatedUri: clydeLogoImage, staticUri: clydeLogoStaticImage, style: tmp.logo };
  if (tmp16) {
    clydeLogoStaticImage = cardColors.clydeLogoStaticImage;
  } else {
    clydeLogoStaticImage = tmp2(tmp3[41]);
  }
  items6 = [tmp40(tmp2Result8, obj13), ];
  const obj14 = { style: tmp.headerActions, children: items7 };
  const obj15 = { onPress: require("CheckpointActionCreators").toggleMute, accessibilityLabel: string(stateFromStores1 ? t.YqAjXy : t.w4m945), color: tmp20, children: tmp40(VoiceNormalIcon, { color: tmp20, size: "xs" }) };
  const tmp2Result9 = tmp2(tmp3[42]);
  let intl = tmp5(tmp3[33]).intl;
  string = intl.string;
  t = tmp5(tmp3[33]).t;
  items7 = [tmp40(tmp2Result9, obj15), ];
  const obj16 = { onPress: tmp2(tmp3[27]).pop, accessibilityLabel: intl2.string(require("intl").t.cpT0Cq), color: tmp20, children: tmp40(require("XSmallIcon").XSmallIcon, { color: tmp20, size: "xs" }) };
  const tmp2Result10 = tmp2(tmp3[42]);
  intl2 = tmp5(tmp3[33]).intl;
  items7[1] = tmp40(tmp2Result10, obj16);
  items6[1] = closure_14(closure_7, obj14);
  items4[3] = closure_14(closure_7, obj12);
  if (result) {
    const obj17 = {
      style: items8,
      onLayout: function handleCustomizationSectionLayout(nativeEvent) {
          _undefined(nativeEvent.nativeEvent.layout.height);
        },
      pointerEvents: str4,
      accessibilityElementsHidden: tmp36,
      importantForAccessibility: str,
      children: items9
    };
    items8 = [tmp.customizationSection, ];
    const obj18 = { marginLeft: null, marginRight: null, marginBottom: null };
    ({ left: obj24.marginLeft, right: obj24.marginRight, bottom: obj24.marginBottom } = rect);
    items8[1] = obj18;
    str4 = str;
    if (tmp36) {
      str4 = "none";
    }
    if (tmp36) {
      str = "no-hide-descendants";
    }
    let tmp40Result5 = tmp15;
    if (tmp40Result5) {
      const obj19 = { activeCustomizationOption: tmp25, onSelectOption: tmp26, disableSwitching: hasItem, disabled: tmp36 };
      tmp40Result5 = tmp40(tmp5(tmp3[44]).FinalizeTraitTabs, obj19);
    }
    items9 = [tmp40Result5, ];
    const obj20 = { activeCustomizationOption: tmp25, disabled: tmp36, showEarnedCount: !tmp15, onSelectOption: require("CheckpointActionCreators").selectCharacterTrait };
    const tmp2Result11 = tmp2(tmp3[45]);
    items9[1] = tmp40(tmp2Result11, obj20);
    result = tmp41(tmp42, obj17);
  }
  items4[4] = result;
  const obj21 = {
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
      obj2.openLazy(asyncRequire(13237, dependencyMap.paths), "CheckpointShare", obj);
    },
    color: tmp20,
    shadowColor,
    backDisabled: tmp36,
    nextDisabled: tmp38,
    nextLoading: tmp36,
    nextBlockedTrait: first1
  };
  shadowColor = undefined;
  const tmp2Result12 = tmp2(tmp3[46]);
  if (tmp16) {
    shadowColor = cardColors.shadowColor;
  }
  items4[5] = tmp40(tmp2Result12, obj21);
  const tmp40Result6 = tmp40(ThemeContextProvider, obj5);
  return tmp40(require("CheckpointStepHeaderRefContext").CheckpointStepFocusProvider, { route, children: tmp40Result6 });
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ActivityIndicator: metroRequire, View: metroImportDefault } = react_native);
const CheckpointFetchStates = CheckpointStore2.CheckpointFetchStates;
({ CHECKPOINT_LOGO_SIZE, CHECKPOINT_PRIMARY: unpackModuleId, CHECKPOINT_CONTROL_SIZE, CHECKPOINT_NAV_HEIGHT } = CheckpointConstants);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let sum = CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16;
const sum1 = sum + nativeDefault.space.PX_24;
let createStyles = createStyles_mod;
let obj = { loader: obj2, container: obj3, layer: { position: "absolute", width: "100%", height: "100%" }, coveredCharacterLayer: { opacity: 0 }, nav: rect, logo: size, headerActions: obj4, customizationSection: rect1 };
obj2 = { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BLACK };
createStyles = createStyles.createStyles;
obj3 = { height: "100%", backgroundColor: nativeDefault.colors.BLACK };
rect = { position: "absolute", top: 0, left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, height: CHECKPOINT_NAV_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
size = { width: CHECKPOINT_LOGO_SIZE + 6, height: CHECKPOINT_LOGO_SIZE + 6, margin: -3 };
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
rect1 = { position: "absolute", left: 0, right: 0, bottom: sum1, gap: nativeDefault.space.PX_12 };
let closure_16 = createStyles(obj);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointLoaderWrapper(arg0) {
  let tmp9;
  const obj = react2;
  const cResult = obj.c(5);
  const tmp2 = useCheckpointPreloaderDefault();
  const tmp3 = closure_16();
  if (tmp2) {
    let tmp14;
    if (cResult[3] !== arg0) {
      const obj2 = {};
      const merged = Object.assign(arg0);
      const tmp20 = map1(CheckpointModal, obj2);
      cResult[3] = arg0;
      cResult[4] = tmp20;
      tmp14 = tmp20;
    } else {
      tmp14 = cResult[4];
    }
    tmp9 = tmp14;
  } else {
    let first;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp8 = map1(metroRequire, {});
      cResult[0] = tmp8;
      first = tmp8;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== tmp3.loader) {
      const obj3 = { style: tmp3.loader, children: first };
      const tmp12 = map1(metroImportDefault, obj3);
      cResult[1] = tmp3.loader;
      cResult[2] = tmp12;
      tmp9 = tmp12;
    } else {
      tmp9 = cResult[2];
    }
  }
  return tmp9;
}) : (function CheckpointLoaderWrapper(arg0) {
  let tmp3Result;
  const tmp = useCheckpointPreloaderDefault();
  if (tmp) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    tmp3Result = tmp3(CheckpointModal, obj2);
  } else {
    const obj = { style: tmp2.loader, children: map1(metroRequire, {}) };
    tmp3Result = tmp3(metroImportDefault, obj);
  }
  return tmp3Result;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointModal.tsx");

export default tmp8;
