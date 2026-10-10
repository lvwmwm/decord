// Module ID: 15976
// Function ID: 15977
// Name: CheckpointModal
// Dependencies: [5, 32, 19, 17, 15977, 5437, 1096, 21, 5092, 587, 1631, 15972, 15978, 15979, 504, 11082, 8228, 15982, 15983, 15984, 15986, 15989, 5934, 4808, 1126, 4827, 15990, 15991, 15993, 16000, 16013, 16014, 6207, 16015, 16019, 16025, 558, 576, 16027, 2]

// Module 15976 (CheckpointModal)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import CheckpointStore2 from "CheckpointStore" /* 15977 */;
import CheckpointFlows from "CheckpointFlows" /* 15978 */;
import useCheckpointPreloaderDefault from "useCheckpointPreloader" /* 16027 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 5437 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c4, closure_2, dependencyMap;

let CHECKPOINT_CONTROL_SIZE;
let CHECKPOINT_LOGO_SIZE;
let CHECKPOINT_NAV_HEIGHT;
let closure_14;
let closure_15;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let rect;
let rect1;
let sum;
let unpackModuleId;
function CheckpointModal(didPlayerShareDataWithDiscord) {
  let VoiceNormalIcon;
  let activeRoute;
  let blockedTraits;
  let c6;
  let c7;
  let characterStage;
  let closure_0;
  let closure_4;
  let closure_5;
  let first;
  let first1;
  let intl2;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj10;
  let obj15;
  let obj17;
  let obj5;
  let selectedCharacterTraits;
  let statsScreen;
  let str2;
  let str3;
  let str4;
  let string;
  let sum;
  let t;
  let tmp18;
  let tmp19;
  let tmp25;
  let flag = didPlayerShareDataWithDiscord.didPlayerShareDataWithDiscord;
  if (flag === undefined) {
    flag = true;
  }
  _require = undefined;
  activeRoute = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  react = undefined;
  c6 = undefined;
  c7 = undefined;
  function transition(arg0) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    const timestamp = Date.now();
    if (flag) {
      obj = CheckpointFlows;
      const adjacentCheckpointRoute = obj.getAdjacentCheckpointRoute(closure_0, first, 1);
      if (null != adjacentCheckpointRoute) {
        ref.current = timestamp;
        closure_5();
        closure_2(adjacentCheckpointRoute);
      } else {
        {
          const arr = ModalActionCreatorsDefault;
          arr.pop();
        }
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
          return { value: "IconComponent", done: "+51" };
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
            } else if (first === tmp(closure_2[13]).CheckpointRoute.HOME) {
              if (transition.fetchState !== constants.SUCCESS) {
                if (transition.fetchState === tmp35.FETCHING) {
                  c4 = 3;
                  return { value: "IconComponent", done: "+51" };
                } else {
                  c1 = 1;
                  c4 = 1;
                  const obj5 = { value: obj6.fetchCheckpointData(), done: false };
                  obj6 = tmp(closure_2[11]);
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
                const presentError2 = tmp(closure_2[23]).presentError;
                const tmp29 = tmp(closure_2[23]);
                const intl2 = tmp(closure_2[24]).intl;
                presentError2(intl2.string(tmp(closure_2[24]).t.fEptJP));
                c4 = 3;
                const obj8 = { value: undefined, done: true };
                return obj8;
              }
            } else if (2 === c1) {
              c3 = 0;
              closure_128_7(false);
              throw closure_2;
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_128_7(false);
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              if (value) {
                closure_128_8(1, true);
              } else {
                const presentError = tmp(closure_2[23]).presentError;
                const tmp7 = tmp(closure_2[23]);
                const intl = tmp(closure_2[24]).intl;
                presentError(intl.string(tmp(closure_2[24]).t.fEptJP));
              }
              c3 = 0;
              closure_128_7(false);
            }
            c4 = 3;
            return { value: "IconComponent", done: "+51" };
          }
          const tmp37 = closure_128_4;
          if (tmp37) {
            closure_128_7(true);
            c3 = 1;
            c1 = 3;
            c4 = 1;
            const obj9 = { value: obj4.completeCheckpoint(closure_128_6), done: false };
            obj4 = tmp(closure_2[11]);
            return obj9;
          } else {
            closure_128_8(1);
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
  const tmp = closure_16();
  const tmp2 = activeRoute;
  const tmp3 = dependencyMap;
  const rect = activeRoute(1631)();
  obj = react;
  const effect = react.useEffect(() => {
    obj = closure_0(closure_2[11]);
    obj.resetEditedCharacter();
  }, []);
  let obj2 = require("CheckpointFlows");
  _require = obj2.getCheckpointFlow(flag);
  [activeRoute, dependencyMap] = react.useState(require("CheckpointNavigation").CheckpointRoute.HOME);
  const ref = react.useRef(0);
  let obj3 = require("CheckpointNavigation");
  const checkpointRoutePresentation = obj3.getCheckpointRoutePresentation(activeRoute);
  ({ characterStage, statsScreen } = checkpointRoutePresentation);
  let tmp31Result = activeRoute === require("CheckpointNavigation").CheckpointRoute.HOME;
  if (!tmp31Result) {
    tmp31Result = null != statsScreen;
  }
  const tmp5Result = require("CheckpointNavigation");
  let result = tmp5Result.isCheckpointCustomizationRoute(activeRoute);
  const tmp13 = activeRoute === require("CheckpointNavigation").CheckpointRoute.FINALIZE_CHARACTER;
  _slicedToArray = tmp13;
  const items = [transition];
  const tmp5Result3 = require("get initialized");
  const stateFromStores = tmp5Result3.useStateFromStores(items, () => transition.isMuted);
  if (stateFromStores) {
    VoiceNormalIcon = tmp5(11082).VoiceXIcon;
  } else {
    VoiceNormalIcon = tmp5(8228).VoiceNormalIcon;
  }
  const tmp2Result = tmp2(15982);
  react = tmp2Result(tmp2(15983));
  tmp2(15984)();
  [tmp18, tmp19] = _slicedToArray(obj.useState(require("CheckpointCustomizationUtils").CheckpointCustomizationOption.BASE), 2);
  _slicedToArray(obj.useState(require("CheckpointCustomizationUtils").CheckpointCustomizationOption.BASE), 2);
  if (!tmp13) {
    const tmp5Result4 = require("CheckpointCustomizationUtils");
    let BASE = tmp5Result4.getCustomizationOptionForCharacterStage(characterStage);
    if (BASE == null) {
      BASE = tmp5(15986).CheckpointCustomizationOption.BASE;
    }
  }
  const tmp21 = require("CheckpointCustomizationUtils").CUSTOMIZATION_OPTION_TRAITS[tmp18];
  ({ blockedTraits, character: c6, selectedCharacterTraits } = tmp2(15989)());
  const tmp22 = tmp2(15989)();
  const hasItem = blockedTraits.includes(tmp21);
  [tmp25, c7] = _slicedToArray(obj.useState(false), 2);
  _slicedToArray(obj.useState(false), 2);
  if (tmp13) {
    first1 = blockedTraits[0];
  } else if (hasItem) {
    first1 = tmp21;
  }
  let tmp27 = result;
  if (tmp27) {
    let tmp29 = null != first1 || null == selectedCharacterTraits[tmp21];
    tmp27 = tmp29;
  }
  let obj4 = { theme: ThemeTypes.DARK, children: tmp31(tmp32, obj5) };
  obj5 = { style: tmp.container, children: items2 };
  const items1 = [tmp.layer, , ];
  let obj6 = { paddingTop: sum + tmp2(587).space.PX_16 };
  const ThemeContextProvider = tmp5(4827).ThemeContextProvider;
  sum = rect.top + CHECKPOINT_NAV_HEIGHT;
  items1[1] = obj6;
  let obj7 = { style: items1, pointerEvents: str2, accessibilityElementsHidden: tmp31Result, importantForAccessibility: str3, children: tmp30(tmp2(15990), { stage: characterStage, activeCustomizationOption: tmp18 }) };
  const tmp34 = tmp31Result && tmp.coveredCharacterLayer;
  items1[2] = tmp34;
  let str = "auto";
  str2 = "auto";
  if (tmp31Result) {
    str2 = "none";
  }
  str3 = str;
  if (tmp31Result) {
    str3 = "no-hide-descendants";
  }
  items2 = [tmp30(tmp32, obj7), , , , ];
  if (tmp31Result) {
    const tmp35 = closure_14;
    let obj8 = { children: items3 };
    items3 = [tmp30(tmp2(15991), {}), ];
    let obj9 = { style: tmp.layer, children: tmp30(tmp2(15993), obj10) };
    obj10 = { route: activeRoute };
    items3[1] = closure_13(c7, obj9);
    tmp31Result = tmp31(closure_14, obj8);
  }
  items2[1] = tmp31Result;
  const obj11 = { style: items4, children: items5 };
  items4 = [tmp.nav, { marginTop: rect.top, marginLeft: rect.left, marginRight: rect.right }];
  const obj12 = { uri: tmp2(16013), style: tmp.logo };
  const tmp2Result5 = tmp2(16000);
  items5 = [tmp30(tmp2Result5, obj12), ];
  const obj13 = { style: tmp.headerActions, children: items6 };
  const obj14 = { onPress: require("CheckpointActionCreators").toggleMute, accessibilityLabel: string(stateFromStores ? t.YqAjXy : t.w4m945), children: closure_13(VoiceNormalIcon, obj15) };
  const tmp2Result6 = tmp2(16014);
  let intl = tmp5(1126).intl;
  string = intl.string;
  t = tmp5(1126).t;
  obj15 = { color, size: "xs" };
  items6 = [tmp30(tmp2Result6, obj14), ];
  const obj16 = { onPress: tmp2(5934).pop, accessibilityLabel: intl2.string(require("intl").t.cpT0Cq), children: closure_13(require("XSmallIcon").XSmallIcon, obj17) };
  const tmp2Result7 = tmp2(16014);
  intl2 = tmp5(1126).intl;
  obj17 = { color, size: "xs" };
  items6[1] = closure_13(tmp2Result7, obj16);
  items5[1] = closure_15(c7, obj13);
  items2[2] = closure_15(c7, obj11);
  if (result) {
    const obj18 = { style: items7, pointerEvents: str4, accessibilityElementsHidden: tmp25, importantForAccessibility: str, children: items8 };
    items7 = [tmp.customizationSection, ];
    const obj19 = { marginLeft: null, marginRight: null, marginBottom: null };
    ({ left: obj22.marginLeft, right: obj22.marginRight, bottom: obj22.marginBottom } = rect);
    items7[1] = obj19;
    str4 = str;
    if (tmp25) {
      str4 = "none";
    }
    if (tmp25) {
      str = "no-hide-descendants";
    }
    let tmp30Result = tmp13;
    if (tmp30Result) {
      const obj20 = { activeCustomizationOption: tmp18, onSelectOption: tmp19, disableSwitching: hasItem, disabled: tmp25 };
      tmp30Result = tmp30(tmp5(16015).FinalizeTraitTabs, obj20);
    }
    items8 = [tmp30Result, ];
    const obj21 = { activeCustomizationOption: tmp18, disabled: tmp25, showEarnedCount: !tmp13, onSelectOption: require("CheckpointActionCreators").selectCharacterTrait };
    const tmp2Result8 = tmp2(16019);
    items8[1] = closure_13(tmp2Result8, obj21);
    result = tmp31(tmp32, obj18);
  }
  items2[3] = result;
  const obj23 = {
    activeRoute,
    onBack: function handleBack() {
      const timestamp = Date.now();
      if (ref.current + 500 <= timestamp) {
        obj = CheckpointFlows;
        const adjacentCheckpointRoute = obj.getAdjacentCheckpointRoute(closure_0, first, -1);
        if (null != adjacentCheckpointRoute) {
          tmp2.current = timestamp;
          closure_5();
          closure_2(adjacentCheckpointRoute);
        }
      }
    },
    onNext: function handleNext() {
      return obj(...arguments);
    },
    backDisabled: tmp25,
    nextDisabled: tmp27,
    nextLoading: tmp25,
    nextBlockedTrait: first1
  };
  items2[4] = closure_13(tmp2(16025), obj23);
  return closure_13(ThemeContextProvider, obj4);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ActivityIndicator: metroRequire, View: metroImportDefault } = react_native);
const CheckpointFetchStates = CheckpointStore2.CheckpointFetchStates;
({ CHECKPOINT_LOGO_SIZE, CHECKPOINT_NAV_HEIGHT } = CheckpointConstants);
({ CHECKPOINT_PRIMARY: unpackModuleId, CHECKPOINT_CONTROL_SIZE } = CheckpointConstants);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { loader: obj2, container: { height: "100%" }, layer: { position: "absolute", width: "100%", height: "100%" }, coveredCharacterLayer: { opacity: 0 }, nav: rect, logo: { width: CHECKPOINT_LOGO_SIZE, height: CHECKPOINT_LOGO_SIZE }, headerActions: obj3, customizationSection: rect1 };
obj2 = { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BLACK };
createStyles = createStyles.createStyles;
rect = { position: "absolute", top: 0, left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, height: CHECKPOINT_NAV_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
rect1 = { position: "absolute", left: 0, right: 0, bottom: sum + nativeDefault.space.PX_24, gap: nativeDefault.space.PX_12 };
sum = CHECKPOINT_CONTROL_SIZE + nativeDefault.space.PX_16;
let closure_16 = createStyles(obj);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointLoaderWrapper(arg0) {
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
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointModal.tsx");

export default tmp7;
