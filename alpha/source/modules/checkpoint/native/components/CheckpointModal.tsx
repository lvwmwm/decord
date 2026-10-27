// Module ID: 12955
// Function ID: 12956
// Name: CheckpointModal
// Dependencies: [5, 32, 19, 17, 4914, 12956, 6015, 1098, 21, 4971, 587, 1633, 12957, 12960, 504, 6363, 8624, 11624, 8572, 12963, 12964, 12965, 6362, 12967, 6672, 5662, 1128, 6364, 5037, 12968, 12969, 12971, 12979, 8629, 8630, 13024, 6931, 13025, 13028, 13037, 2000, 6022, 12902, 558, 576, 13039, 2]

// Module 12955 (CheckpointModal)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1098 */;
import Server from "Server" /* 2000 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 6022 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import ForwardModalUtils from "ForwardModalUtils" /* 12902 */;
import CheckpointStore2 from "CheckpointStore" /* 12956 */;
import CheckpointFlows from "CheckpointFlows" /* 12960 */;
import useCheckpointPreloaderDefault from "useCheckpointPreloader" /* 13039 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import MessageRecord from "MessageRecord" /* 4914 */;
import CheckpointConstants from "CheckpointConstants" /* 6015 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, c5, closure_1, closure_2, importDefault;

let CHECKPOINT_CONTROL_SIZE;
let CHECKPOINT_LOGO_SIZE;
let CHECKPOINT_NAV_HEIGHT;
let closure_12;
let closure_15;
let closure_16;
let closure_17;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let rect;
let rect1;
let size;
let sum;
function CheckpointModal(didPlayerShareDataWithDiscord) {
  let VoiceNormalIcon;
  let _undefined;
  let activeRoute;
  let c9;
  let characterStage;
  let closure_0;
  let closure_3;
  let closure_5;
  let first;
  let first1;
  let intl2;
  let items10;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj12;
  let obj6;
  let ref;
  let shadowColor;
  let statsScreen;
  let str2;
  let str3;
  let str4;
  let string;
  let sum;
  let t;
  let tmp23;
  let tmp24;
  let tmp30;
  let tmp37;
  let flag = didPlayerShareDataWithDiscord.didPlayerShareDataWithDiscord;
  if (flag === undefined) {
    flag = true;
  }
  _require = undefined;
  importDefault = undefined;
  activeRoute = undefined;
  closure_3 = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let closure_7;
  let selectedCharacterTraits;
  c9 = undefined;
  function transition(arg0) {
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
      const obj2 = CheckpointFlows;
      const adjacentCheckpointRoute = obj2.getAdjacentCheckpointRoute(closure_0, first, arg0, closure_1);
      const tmp4 = require;
      const tmp7 = first;
      if (null != adjacentCheckpointRoute) {
        ref.current = timestamp;
        const SILENT_CHECKPOINT_ROUTES = tmp4(6363).SILENT_CHECKPOINT_ROUTES;
        if (!SILENT_CHECKPOINT_ROUTES.has(tmp7)) {
          closure_7();
        }
        closure_3(adjacentCheckpointRoute);
      } else if (1 === arg0) {
        const arr = ModalActionCreatorsDefault;
        arr.pop();
      }
    }
  }
  let obj = function _handleNext() {
    obj = _asyncToGenerator(async (arg0, value) => {
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
          return { value: "IconComponent", done: null };
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
              closure_1 = tmp;
              characterFromTraits = undefined;
              if (first === characterFromTraits(closure_2[15]).CheckpointRoute.HOME) {
                if (_undefined.fetchState !== constants.SUCCESS) {
                  if (_undefined.fetchState === tmp35.FETCHING) {
                    c5 = 3;
                    return { value: "IconComponent", done: null };
                  } else {
                    c4 = 1;
                    c5 = 1;
                    const obj6 = { value: obj7.fetchCheckpointData(), done: false };
                    obj7 = characterFromTraits(closure_2[12]);
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
                const presentError2 = characterFromTraits(closure_2[25]).presentError;
                const tmp29 = characterFromTraits(closure_2[25]);
                const intl2 = characterFromTraits(closure_2[26]).intl;
                presentError2(intl2.string(characterFromTraits(closure_2[26]).t.fEptJP));
                c5 = 3;
                const obj9 = { value: undefined, done: true };
                return obj9;
              }
            } else if (2 === c4) {
              c3 = 0;
              closure_129_9(false);
              throw closure_2;
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_9(false);
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              if (value) {
                closure_129_10(1, { skipThrottle: true });
              } else {
                const presentError = characterFromTraits(closure_2[25]).presentError;
                const tmp7 = characterFromTraits(closure_2[25]);
                const intl = characterFromTraits(closure_2[26]).intl;
                presentError(intl.string(characterFromTraits(closure_2[26]).t.fEptJP));
              }
              c3 = 0;
              closure_129_9(false);
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
          const tmp37 = closure_129_5;
          if (tmp37) {
            closure_129_9(true);
            c3 = 1;
            const obj4 = characterFromTraits(closure_2[27]);
            characterFromTraits = obj4.getCharacterFromTraits(closure_129_8);
            c4 = 3;
            c5 = 1;
            const obj10 = { value: obj5.completeCheckpoint(characterFromTraits), done: false };
            obj5 = characterFromTraits(closure_2[12]);
            return obj10;
          } else {
            closure_129_10(1);
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
  const tmp = closure_18();
  const tmp2 = importDefault;
  const tmp3 = activeRoute;
  const rect = require("useSafeAreaInsets")();
  obj = react;
  const effect = react.useEffect(() => {
    obj = closure_0(first[12]);
    obj.resetEditedCharacter();
  }, []);
  const tmp5 = _require;
  let obj2 = require("CheckpointFlows");
  _require = obj2.getCheckpointFlow(flag);
  let obj3 = require("get initialized");
  let items = [c9];
  importDefault = obj3.useStateFromStores(items, () => _undefined.stats);
  let tmp7 = _slicedToArray;
  [activeRoute, closure_3] = react.useState(require("CheckpointNavigation").CheckpointRoute.HOME);
  _slicedToArray = react.useRef(0);
  let obj4 = require("CheckpointNavigation");
  const checkpointRoutePresentation = obj4.getCheckpointRoutePresentation(activeRoute);
  ({ characterStage, statsScreen } = checkpointRoutePresentation);
  let tmp36Result = activeRoute === require("CheckpointNavigation").CheckpointRoute.HOME || null != statsScreen;
  const tmp5Result = tmp5(tmp3[15]);
  let result = tmp5Result.isCheckpointCustomizationRoute(activeRoute);
  const tmp14 = activeRoute === tmp5(tmp3[15]).CheckpointRoute.FINALIZE_CHARACTER;
  react = tmp14;
  const tmp15 = activeRoute === tmp5(tmp3[15]).CheckpointRoute.SUMMARY;
  const items1 = [tmp6];
  const tmp5Result5 = tmp5(tmp3[14]);
  const stateFromStores = tmp5Result5.useStateFromStores(items1, () => _undefined.character);
  const tmp5Result6 = tmp5(tmp3[16]);
  const cardColors = tmp5Result6.getCardColors(stateFromStores);
  const tmp18 = tmp15 ? cardColors.primaryBackgroundColor : closure_12;
  const items2 = [tmp6];
  const tmp5Result7 = tmp5(tmp3[14]);
  const stateFromStores1 = tmp5Result7.useStateFromStores(items2, () => _undefined.isMuted);
  if (stateFromStores1) {
    VoiceNormalIcon = tmp5(tmp3[17]).VoiceXIcon;
  } else {
    VoiceNormalIcon = tmp5(tmp3[18]).VoiceNormalIcon;
  }
  let tmp2Result = tmp2(tmp3[19]);
  closure_7 = tmp2Result(tmp2(tmp3[20]));
  tmp2(tmp3[21])();
  [tmp23, tmp24] = tmp7(obj.useState(tmp5(tmp3[22]).CheckpointCustomizationOption.BASE), 2);
  tmp7(obj.useState(tmp5(tmp3[22]).CheckpointCustomizationOption.BASE), 2);
  if (!tmp14) {
    const tmp5Result8 = tmp5(tmp3[22]);
    let BASE = tmp5Result8.getCustomizationOptionForCharacterStage(characterStage);
    if (BASE == null) {
      BASE = tmp5(tmp3[22]).CheckpointCustomizationOption.BASE;
    }
  }
  const tmp26 = tmp5(tmp3[22]).CUSTOMIZATION_OPTION_TRAITS[tmp23];
  const tmp27 = tmp2(tmp3[23])();
  selectedCharacterTraits = tmp27.selectedCharacterTraits;
  const blockedTraits = tmp27.blockedTraits;
  const hasItem = blockedTraits.includes(tmp26);
  [tmp30, c9] = tmp7(obj.useState(false), 2);
  tmp7(obj.useState(false), 2);
  if (tmp14) {
    first1 = blockedTraits[0];
  } else if (hasItem) {
    first1 = tmp26;
  }
  let tmp32 = result;
  if (tmp32) {
    tmp32 = null != first1 || null == selectedCharacterTraits[tmp26];
  }
  const tmp35 = closure_15;
  let obj5 = { theme: ThemeTypes.DARK, children: tmp36(tmp37, obj6) };
  tmp37 = closure_7;
  obj6 = { style: tmp.container, children: items4 };
  const items3 = [tmp.layer, , ];
  let obj7 = { paddingTop: sum + tmp2(tmp3[10]).space.PX_16 };
  const ThemeContextProvider = tmp5(tmp3[28]).ThemeContextProvider;
  sum = rect.top + obj;
  items3[1] = obj7;
  const tmp39 = tmp36Result && tmp.coveredCharacterLayer;
  let obj8 = { style: items3, pointerEvents: str2, accessibilityElementsHidden: tmp36Result, importantForAccessibility: str3, children: tmp35(tmp2(tmp3[29]), { stage: characterStage, activeCustomizationOption: tmp23 }) };
  items3[2] = tmp39;
  let str = "auto";
  str2 = "auto";
  if (tmp36Result) {
    str2 = "none";
  }
  str3 = str;
  if (tmp36Result) {
    str3 = "no-hide-descendants";
  }
  items4 = [tmp35(tmp37, obj8), , , , ];
  if (tmp36Result) {
    let prop;
    const tmp2Result7 = tmp2(tmp3[30]);
    const tmp40 = closure_16;
    if (tmp15) {
      prop = cardColors.backgroundGradientStartColor;
    }
    let obj9 = { children: items5 };
    let obj10 = { gradientStartColor: prop };
    items5 = [tmp35(tmp2Result7, obj10), ];
    const obj11 = { style: tmp.layer, children: tmp35(tmp2(tmp3[31]), obj12) };
    obj12 = {
      route: activeRoute,
      onNextStep: function handleNextStep() {
          transition(1, { skipThrottle: true });
        },
      onPreviousStep: function handlePreviousStep() {
          transition(-1, { skipThrottle: true });
        }
    };
    items5[1] = tmp35(tmp37, obj11);
    tmp36Result = tmp36(tmp40, obj9);
  }
  items4[1] = tmp36Result;
  const obj13 = { style: items6, children: items7 };
  items6 = [tmp.nav, { marginTop: rect.top, marginLeft: rect.left, marginRight: rect.right }];
  const obj14 = { animatedUri: tmp2(tmp3[33]), staticUri: tmp2(tmp3[34]), style: tmp.logo };
  const tmp2Result8 = tmp2(tmp3[32]);
  items7 = [tmp35(tmp2Result8, obj14), ];
  const obj15 = { style: tmp.headerActions, children: items8 };
  const obj16 = { onPress: tmp5(tmp3[12]).toggleMute, accessibilityLabel: string(stateFromStores1 ? t.YqAjXy : t.w4m945), color: tmp18, children: tmp35(VoiceNormalIcon, { color: tmp18, size: "xs" }) };
  const tmp2Result9 = tmp2(tmp3[35]);
  let intl = tmp5(tmp3[26]).intl;
  string = intl.string;
  t = tmp5(tmp3[26]).t;
  items8 = [tmp35(tmp2Result9, obj16), ];
  const obj17 = { onPress: tmp2(tmp3[24]).pop, accessibilityLabel: intl2.string(tmp5(tmp3[26]).t.cpT0Cq), color: tmp18, children: tmp35(tmp5(tmp3[36]).XSmallIcon, { color: tmp18, size: "xs" }) };
  const tmp2Result10 = tmp2(tmp3[35]);
  intl2 = tmp5(tmp3[26]).intl;
  items8[1] = tmp35(tmp2Result10, obj17);
  items7[1] = closure_17(tmp37, obj15);
  items4[2] = closure_17(tmp37, obj13);
  if (result) {
    const obj18 = { style: items9, pointerEvents: str4, accessibilityElementsHidden: tmp30, importantForAccessibility: str, children: items10 };
    items9 = [tmp.customizationSection, ];
    const obj19 = { marginLeft: null, marginRight: null, marginBottom: null };
    ({ left: obj24.marginLeft, right: obj24.marginRight, bottom: obj24.marginBottom } = rect);
    items9[1] = obj19;
    str4 = str;
    if (tmp30) {
      str4 = "none";
    }
    if (tmp30) {
      str = "no-hide-descendants";
    }
    let tmp35Result = tmp14;
    if (tmp35Result) {
      const obj20 = { activeCustomizationOption: tmp23, onSelectOption: tmp24, disableSwitching: hasItem, disabled: tmp30 };
      tmp35Result = tmp35(tmp5(tmp3[37]).FinalizeTraitTabs, obj20);
    }
    items10 = [tmp35Result, ];
    const obj21 = { activeCustomizationOption: tmp23, disabled: tmp30, showEarnedCount: !tmp14, onSelectOption: tmp5(tmp3[12]).selectCharacterTrait };
    const tmp2Result11 = tmp2(tmp3[38]);
    items10[1] = tmp35(tmp2Result11, obj21);
    result = tmp36(tmp37, obj18);
  }
  items4[3] = result;
  const obj22 = {
    activeRoute,
    onBack: function handleBack() {
      transition(-1);
    },
    onNext: function handleNext() {
      return obj(...arguments);
    },
    onShare: function handleShare() {
      let items;
      let obj2;
      let obj3;
      let tmp4;
      obj = { type: Server.ComponentType.CHECKPOINT_CARD, id: obj2.asComponentId("0"), checkpointData: obj3 };
      obj3 = { version: map1.V2026, character: tmp4 };
      const obj4 = { content: "", components: items };
      items = [obj];
      obj2 = InteractionComponentTypes;
      const obj5 = {
        message: new MessageRecord(obj4),
        source: "checkpoint",
        customSendHandler() {
          obj = closure_0(first[42]);
          obj.closeForwardModal();
          transition(1, { skipThrottle: true });
          return Promise.resolve();
        }
      };
      const tmp2Result = ForwardModalUtils;
      tmp2Result.openForwardModal(obj5);
      tmp4 = stateFromStores;
    },
    color: tmp18,
    shadowColor,
    backDisabled: tmp30,
    nextDisabled: tmp32,
    nextLoading: tmp30,
    nextBlockedTrait: first1
  };
  shadowColor = undefined;
  const tmp2Result12 = tmp2(tmp3[39]);
  if (tmp15) {
    shadowColor = cardColors.shadowColor;
  }
  items4[4] = tmp35(tmp2Result12, obj22);
  return tmp35(ThemeContextProvider, obj5);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ActivityIndicator: metroRequire, View: metroImportDefault } = react_native);
const CheckpointFetchStates = CheckpointStore2.CheckpointFetchStates;
({ CHECKPOINT_LOGO_SIZE, CHECKPOINT_NAV_HEIGHT } = CheckpointConstants);
({ CHECKPOINT_PRIMARY: closure_12, CheckpointVersions: map1, CHECKPOINT_CONTROL_SIZE } = CheckpointConstants);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = Fragment);
let createStyles = createStyles_mod;
let obj = { loader: obj2, container: { height: "100%" }, layer: { position: "absolute", width: "100%", height: "100%" }, coveredCharacterLayer: { opacity: 0 }, nav: rect, logo: size, headerActions: obj3, customizationSection: rect1 };
obj2 = { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BLACK };
createStyles = createStyles.createStyles;
rect = { position: "absolute", top: 0, left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, height: CHECKPOINT_NAV_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
size = { width: CHECKPOINT_LOGO_SIZE + 6, height: CHECKPOINT_LOGO_SIZE + 6, margin: -3 };
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
rect1 = { position: "absolute", left: 0, right: 0, bottom: sum + nativeDefault.space.PX_24, gap: nativeDefault.space.PX_12 };
sum = CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16;
let closure_18 = createStyles(obj);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointLoaderWrapper(arg0) {
  let tmp9;
  const obj = react2;
  const cResult = obj.c(5);
  const tmp2 = useCheckpointPreloaderDefault();
  const tmp3 = closure_18();
  if (tmp2) {
    let tmp14;
    if (cResult[3] !== arg0) {
      const obj2 = {};
      const merged = Object.assign(arg0);
      const tmp20 = closure_15(CheckpointModal, obj2);
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
      const tmp8 = closure_15(metroRequire, {});
      cResult[0] = tmp8;
      first = tmp8;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== tmp3.loader) {
      const obj3 = { style: tmp3.loader, children: first };
      const tmp12 = closure_15(metroImportDefault, obj3);
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
    const obj = { style: tmp2.loader, children: closure_15(metroRequire, {}) };
    tmp3Result = tmp3(metroImportDefault, obj);
  }
  return tmp3Result;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointModal.tsx");

export default tmp7;
