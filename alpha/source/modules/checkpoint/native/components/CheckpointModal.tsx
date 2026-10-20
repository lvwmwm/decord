// Module ID: 12778
// Function ID: 12779
// Name: CheckpointModal
// Dependencies: [5, 32, 19, 17, 4891, 12779, 5973, 1098, 21, 4945, 587, 1633, 12780, 12783, 6320, 504, 8573, 11502, 8521, 12786, 12787, 12788, 6319, 12790, 6623, 5624, 1128, 4999, 12791, 12792, 12794, 12801, 12836, 12837, 6882, 12838, 12841, 12847, 2000, 5980, 12725, 558, 576, 12849, 2]

// Module 12778 (CheckpointModal)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1098 */;
import Server from "Server" /* 2000 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 5980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6623 */;
import ForwardModalUtils from "ForwardModalUtils" /* 12725 */;
import CheckpointStore2 from "CheckpointStore" /* 12779 */;
import CheckpointFlows from "CheckpointFlows" /* 12783 */;
import useCheckpointPreloaderDefault from "useCheckpointPreloader" /* 12849 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import MessageRecord from "MessageRecord" /* 4891 */;
import CheckpointConstants from "CheckpointConstants" /* 5973 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4945 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c4, closure_2, dependencyMap;

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
let sum;
function CheckpointModal(didPlayerShareDataWithDiscord) {
  let VoiceNormalIcon;
  let activeRoute;
  let blockedTraits;
  let c7;
  let c8;
  let characterStage;
  let closure_0;
  let closure_4;
  let first;
  let first1;
  let intl2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj11;
  let obj5;
  let selectedCharacterTraits;
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
  activeRoute = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let stateFromStores;
  let closure_6;
  c7 = undefined;
  c8 = undefined;
  function transition(arg0) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    const timestamp = Date.now();
    if (flag) {
      obj = CheckpointFlows;
      const adjacentCheckpointRoute = obj.getAdjacentCheckpointRoute(closure_0, first, arg0);
      const tmp4 = require;
      const tmp7 = first;
      if (null != adjacentCheckpointRoute) {
        ref.current = timestamp;
        const SILENT_CHECKPOINT_ROUTES = tmp4(6320).SILENT_CHECKPOINT_ROUTES;
        if (!SILENT_CHECKPOINT_ROUTES.has(tmp7)) {
          closure_6();
        }
        closure_2(adjacentCheckpointRoute);
      } else if (1 === arg0) {
        const arr = ModalActionCreatorsDefault;
        arr.pop();
      }
    }
  }
  let obj = function _handleNext() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let obj4;
      let obj6;
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
          return { value: "IconComponent", done: null };
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
              const obj3 = { value, done: true };
              return obj3;
            } else if (first === tmp(closure_2[14]).CheckpointRoute.HOME) {
              if (transition.fetchState !== constants.SUCCESS) {
                if (transition.fetchState === tmp35.FETCHING) {
                  c4 = 3;
                  return { value: "IconComponent", done: null };
                } else {
                  c1 = 1;
                  c4 = 1;
                  const obj5 = { value: obj6.fetchCheckpointData(), done: false };
                  obj6 = tmp(closure_2[12]);
                  return obj5;
                }
              }
            }
          } else {
            if (1 === c1) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj7 = { value, done: true };
                return obj7;
              } else if (!value) {
                const presentError2 = tmp(closure_2[25]).presentError;
                const tmp29 = tmp(closure_2[25]);
                const intl2 = tmp(closure_2[26]).intl;
                presentError2(intl2.string(tmp(closure_2[26]).t.fEptJP));
                c4 = 3;
                const obj8 = { value: undefined, done: true };
                return obj8;
              }
            } else if (2 === c1) {
              c3 = 0;
              closure_128_8(false);
              throw closure_2;
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_128_8(false);
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              if (value) {
                closure_128_9(1, true);
              } else {
                const presentError = tmp(closure_2[25]).presentError;
                const tmp7 = tmp(closure_2[25]);
                const intl = tmp(closure_2[26]).intl;
                presentError(intl.string(tmp(closure_2[26]).t.fEptJP));
              }
              c3 = 0;
              closure_128_8(false);
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
          const tmp37 = closure_128_4;
          if (tmp37) {
            closure_128_8(true);
            c3 = 1;
            c1 = 3;
            c4 = 1;
            const obj9 = { value: obj4.completeCheckpoint(closure_128_7), done: false };
            obj4 = tmp(closure_2[12]);
            return obj9;
          } else {
            closure_128_9(1);
          }
        } catch (tmp48) {
          closure_2 = tmp48;
          if (0 === c3) {
            c4 = 3;
            throw tmp48;
          } else {
            c1 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_18();
  const tmp2 = activeRoute;
  const tmp3 = dependencyMap;
  const rect = activeRoute(1633)();
  obj = stateFromStores;
  const effect = stateFromStores.useEffect(() => {
    obj = closure_0(closure_2[12]);
    obj.resetEditedCharacter();
  }, []);
  const tmp5 = _require;
  let obj2 = require("CheckpointFlows");
  _require = obj2.getCheckpointFlow(flag);
  [activeRoute, dependencyMap] = stateFromStores.useState(require("CheckpointNavigation").CheckpointRoute.HOME);
  const ref = stateFromStores.useRef(0);
  let obj3 = require("CheckpointNavigation");
  const checkpointRoutePresentation = obj3.getCheckpointRoutePresentation(activeRoute);
  ({ characterStage, statsScreen } = checkpointRoutePresentation);
  let tmp36Result = activeRoute === require("CheckpointNavigation").CheckpointRoute.HOME;
  if (!tmp36Result) {
    tmp36Result = null != statsScreen;
  }
  const tmp5Result = tmp5(6320);
  let result = tmp5Result.isCheckpointCustomizationRoute(activeRoute);
  const tmp13 = activeRoute === tmp5(6320).CheckpointRoute.FINALIZE_CHARACTER;
  _slicedToArray = tmp13;
  const tmp14 = activeRoute === tmp5(6320).CheckpointRoute.SUMMARY;
  let items = [transition];
  const tmp5Result5 = tmp5(504);
  stateFromStores = tmp5Result5.useStateFromStores(items, () => transition.character);
  const tmp5Result6 = tmp5(8573);
  const cardColors = tmp5Result6.getCardColors(stateFromStores);
  const tmp18 = tmp14 ? cardColors.primaryBackgroundColor : closure_12;
  const items1 = [transition];
  const tmp5Result7 = tmp5(504);
  const stateFromStores1 = tmp5Result7.useStateFromStores(items1, () => transition.isMuted);
  if (stateFromStores1) {
    VoiceNormalIcon = tmp5(11502).VoiceXIcon;
  } else {
    VoiceNormalIcon = tmp5(8521).VoiceNormalIcon;
  }
  let tmp2Result = tmp2(12786);
  closure_6 = tmp2Result(tmp2(12787));
  tmp2(12788)();
  [tmp23, tmp24] = _slicedToArray(obj.useState(tmp5(6319).CheckpointCustomizationOption.BASE), 2);
  _slicedToArray(obj.useState(tmp5(6319).CheckpointCustomizationOption.BASE), 2);
  if (!tmp13) {
    const tmp5Result8 = tmp5(6319);
    let BASE = tmp5Result8.getCustomizationOptionForCharacterStage(characterStage);
    if (BASE == null) {
      BASE = tmp5(6319).CheckpointCustomizationOption.BASE;
    }
  }
  const tmp26 = tmp5(6319).CUSTOMIZATION_OPTION_TRAITS[tmp23];
  ({ blockedTraits, character: c7, selectedCharacterTraits } = tmp2(12790)());
  const tmp27 = tmp2(12790)();
  const hasItem = blockedTraits.includes(tmp26);
  [tmp30, c8] = _slicedToArray(obj.useState(false), 2);
  _slicedToArray(obj.useState(false), 2);
  if (tmp13) {
    first1 = blockedTraits[0];
  } else if (hasItem) {
    first1 = tmp26;
  }
  let tmp32 = result;
  if (tmp32) {
    tmp32 = null != first1 || null == selectedCharacterTraits[tmp26];
  }
  const tmp35 = closure_15;
  let obj4 = { theme: ThemeTypes.DARK, children: tmp36(tmp37, obj5) };
  tmp37 = c7;
  obj5 = { style: tmp.container, children: items3 };
  const items2 = [tmp.layer, , ];
  let obj6 = { paddingTop: sum + tmp2(587).space.PX_16 };
  const ThemeContextProvider = tmp5(4999).ThemeContextProvider;
  sum = rect.top + CHECKPOINT_NAV_HEIGHT;
  items2[1] = obj6;
  const tmp39 = tmp36Result && tmp.coveredCharacterLayer;
  let obj7 = { style: items2, pointerEvents: str2, accessibilityElementsHidden: tmp36Result, importantForAccessibility: str3, children: tmp35(tmp2(12791), { stage: characterStage, activeCustomizationOption: tmp23 }) };
  items2[2] = tmp39;
  let str = "auto";
  str2 = "auto";
  if (tmp36Result) {
    str2 = "none";
  }
  str3 = str;
  if (tmp36Result) {
    str3 = "no-hide-descendants";
  }
  items3 = [tmp35(tmp37, obj7), , , , ];
  if (tmp36Result) {
    let prop;
    const tmp2Result7 = tmp2(12792);
    const tmp40 = closure_16;
    if (tmp14) {
      prop = cardColors.backgroundGradientStartColor;
    }
    let obj8 = { children: items4 };
    let obj9 = { gradientStartColor: prop };
    items4 = [tmp35(tmp2Result7, obj9), ];
    const obj10 = { style: tmp.layer, children: tmp35(tmp2(12794), obj11) };
    obj11 = {
      route: activeRoute,
      onNextStep: function handleNextStep() {
          transition(1, true);
        },
      onPreviousStep: function handlePreviousStep() {
          transition(-1, true);
        }
    };
    items4[1] = tmp35(tmp37, obj10);
    tmp36Result = tmp36(tmp40, obj8);
  }
  items3[1] = tmp36Result;
  const obj12 = { style: items5, children: items6 };
  items5 = [tmp.nav, { marginTop: rect.top, marginLeft: rect.left, marginRight: rect.right }];
  const obj13 = { uri: tmp2(12836), style: tmp.logo };
  const tmp2Result8 = tmp2(12801);
  items6 = [tmp35(tmp2Result8, obj13), ];
  const obj14 = { style: tmp.headerActions, children: items7 };
  const obj15 = { onPress: tmp5(12780).toggleMute, accessibilityLabel: string(stateFromStores1 ? t.YqAjXy : t.w4m945), color: tmp18, children: tmp35(VoiceNormalIcon, { color: tmp18, size: "xs" }) };
  const tmp2Result9 = tmp2(12837);
  let intl = tmp5(1128).intl;
  string = intl.string;
  t = tmp5(1128).t;
  items7 = [tmp35(tmp2Result9, obj15), ];
  const obj16 = { onPress: tmp2(6623).pop, accessibilityLabel: intl2.string(tmp5(1128).t.cpT0Cq), color: tmp18, children: tmp35(tmp5(6882).XSmallIcon, { color: tmp18, size: "xs" }) };
  const tmp2Result10 = tmp2(12837);
  intl2 = tmp5(1128).intl;
  items7[1] = tmp35(tmp2Result10, obj16);
  items6[1] = closure_17(tmp37, obj14);
  items3[2] = closure_17(tmp37, obj12);
  if (result) {
    const obj17 = { style: items8, pointerEvents: str4, accessibilityElementsHidden: tmp30, importantForAccessibility: str, children: items9 };
    items8 = [tmp.customizationSection, ];
    const obj18 = { marginLeft: null, marginRight: null, marginBottom: null };
    ({ left: obj23.marginLeft, right: obj23.marginRight, bottom: obj23.marginBottom } = rect);
    items8[1] = obj18;
    str4 = str;
    if (tmp30) {
      str4 = "none";
    }
    if (tmp30) {
      str = "no-hide-descendants";
    }
    let tmp35Result = tmp13;
    if (tmp35Result) {
      const obj19 = { activeCustomizationOption: tmp23, onSelectOption: tmp24, disableSwitching: hasItem, disabled: tmp30 };
      tmp35Result = tmp35(tmp5(12838).FinalizeTraitTabs, obj19);
    }
    items9 = [tmp35Result, ];
    const obj20 = { activeCustomizationOption: tmp23, disabled: tmp30, showEarnedCount: !tmp13, onSelectOption: tmp5(12780).selectCharacterTrait };
    const tmp2Result11 = tmp2(12841);
    items9[1] = tmp35(tmp2Result11, obj20);
    result = tmp36(tmp37, obj17);
  }
  items3[3] = result;
  const obj21 = {
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
          obj = closure_0(closure_2[40]);
          obj.closeForwardModal();
          transition(1, true);
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
  const tmp2Result12 = tmp2(12847);
  if (tmp14) {
    shadowColor = cardColors.shadowColor;
  }
  items3[4] = tmp35(tmp2Result12, obj21);
  return tmp35(ThemeContextProvider, obj4);
}
let _slicedToArray = _slicedToArray_mod;
({ ActivityIndicator: metroRequire, View: metroImportDefault } = react_native);
const CheckpointFetchStates = CheckpointStore2.CheckpointFetchStates;
({ CHECKPOINT_LOGO_SIZE, CHECKPOINT_NAV_HEIGHT } = CheckpointConstants);
({ CHECKPOINT_PRIMARY: closure_12, CheckpointVersions: map1, CHECKPOINT_CONTROL_SIZE } = CheckpointConstants);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = Fragment);
let createStyles = createStyles_mod;
let obj = { loader: obj2, container: { height: "100%" }, layer: { position: "absolute", width: "100%", height: "100%" }, coveredCharacterLayer: { opacity: 0 }, nav: rect, logo: { width: CHECKPOINT_LOGO_SIZE, height: CHECKPOINT_LOGO_SIZE }, headerActions: obj3, customizationSection: rect1 };
obj2 = { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BLACK };
createStyles = createStyles.createStyles;
rect = { position: "absolute", top: 0, left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, height: CHECKPOINT_NAV_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
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
      const tmp20 = authStore3(CheckpointModal, obj2);
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
      const tmp8 = authStore3(metroRequire, {});
      cResult[0] = tmp8;
      first = tmp8;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== tmp3.loader) {
      const obj3 = { style: tmp3.loader, children: first };
      const tmp12 = authStore3(metroImportDefault, obj3);
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
    const obj = { style: tmp2.loader, children: authStore3(metroRequire, {}) };
    tmp3Result = tmp3(metroImportDefault, obj);
  }
  return tmp3Result;
});
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointModal.tsx");

export default tmp7;
