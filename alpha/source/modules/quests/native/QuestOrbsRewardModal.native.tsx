// Module ID: 14616
// Function ID: 14617
// Name: QuestOrbsRewardModal
// Dependencies: [32, 5, 19, 17, 5006, 1389, 1999, 6768, 21, 6731, 14616, 2000, 5005, 587, 558, 576, 1497, 1631, 9491, 6991, 1125, 6993, 1899, 5707, 9463, 1382, 14617, 14618, 14619, 504, 9512, 1104, 9655, 14620, 9633, 6771, 14621, 7281, 5271, 5281, 2]
// Exports: openQuestOrbsRewardModal

// Module 14616 (QuestOrbsRewardModal)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1382 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import react_nativeDefault from "react-native" /* 1899 */;
import FastImageDefault from "FastImage" /* 5707 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import XSmallIcon from "XSmallIcon" /* 6991 */;
import APNGPlayer from "APNGPlayer" /* 9463 */;
import _modDef14617 from "module_14617" /* 14617 */;
import _modDef14618 from "module_14618" /* 14618 */;
import _modDef14619 from "module_14619" /* 14619 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5006 */;
import UserStore from "UserStore" /* 1389 */;
import AppStateStore from "AppStateStore" /* 1999 */;
import QuestConstants from "QuestConstants" /* 6768 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, applyOrientationLockResult, dependencyMap;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let items;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj6;
let tmp;
const OrbsIcon2 = tmp(9491);
({ ActivityIndicator: metroRequire, StyleSheet: metroImportDefault, View: metroImportAll } = react_native);
({ DEFAULT_PORTRAIT_ASPECT_RATIO: closure_12, RewardFilterTypes: map1 } = QuestConstants);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = Fragment);
const QuestOrbsRewardModal_str = "QuestOrbsRewardModal";
let createStyles = createStyles_mod;
let obj = { closeButton: obj2, closeButtonWide: obj3, closeButtonIcon: obj4 };
obj2 = { alignSelf: "flex-start", marginHorizontal: nativeDefault.space.PX_16, zIndex: 999 };
createStyles = createStyles.createStyles;
obj3 = { alignSelf: "flex-end", marginTop: nativeDefault.space.PX_16, marginRight: nativeDefault.space.PX_16, zIndex: 999 };
obj4 = { tintColor: nativeDefault.colors.WHITE };
let closure_18 = createStyles(obj);
createStyles = createStyles_mod;
let closure_19 = createStyles.createStyles(() => {
  let obj3;
  const obj = { root: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, background: metroImportDefault.absoluteFillObject, loading: obj3, header: { flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end" }, main: { flex: 2 }, content: { flex: 1, width: "100%", alignSelf: "center" }, mainColumn: { flex: 1 }, centeredLockup: { flex: 1, justifyContent: "center", gap: nativeDefault.space.PX_32 }, animation: { flex: 3 }, animationInLockup: { flexGrow: 0, flexShrink: 1, width: "100%", aspectRatio: 1.3333333333333333 }, body: { flex: 2, flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_16 }, bodyInLockup: { flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_16 }, title: { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 }, buttonsContainer: { padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 } };
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
  obj3 = { justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  const merged = Object.assign(metroImportDefault.absoluteFillObject);
  ({ flex: 1, justifyContent: "center", gap: nativeDefault.space.PX_32 });
  ({ flex: 2, flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_16 });
  ({ flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_16 });
  ({ textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 });
  ({ padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function useContentColumnLayout() {
  let height;
  let tmp5;
  let width;
  const obj = react2;
  const cResult = obj.c(5);
  ({ width, height } = useWindowDimensionsDefault());
  useWindowDimensionsDefault();
  const rect = useSafeAreaInsetsDefault();
  const diff = width - rect.left - rect.right;
  const bound = Math.min(diff, Math.floor(height * authStore2));
  if (cResult[0] !== bound) {
    const obj2 = { maxWidth: bound };
    cResult[0] = bound;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp5) {
    let tmp7;
    if (cResult[3] === bound < diff) {
      tmp7 = cResult[4];
    }
    return tmp7;
  }
  const obj3 = { maxWidthStyle: tmp5, isWidthConstrained: bound < diff };
  cResult[2] = tmp5;
  cResult[3] = bound < diff;
  cResult[4] = obj3;
  tmp7 = obj3;
}) : (function useContentColumnLayout() {
  let closure_2;
  let height;
  size = height(1497)();
  const width = size.width;
  height = size.height;
  const tmp = height(1631)();
  dependencyMap = tmp;
  const items = [width, height, , ];
  ({ left: arr[2], right: arr[3] } = tmp);
  return react.useMemo(() => {
    const diff = width - closure_2.left - closure_2.right;
    const bound = Math.min(diff, Math.floor(height * authStore2));
    return { maxWidthStyle: { maxWidth: bound }, isWidthConstrained: bound < diff };
  }, items);
});
createStyles = createStyles_mod;
let obj5 = { orbsIcon: obj6, spacer: { width: 2 } };
obj6 = { transform: items };
items = [{ translateY: 3 }];
let closure_21 = createStyles.createStyles(obj5);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsBalance(balance) {
  let items;
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(8);
  balance = balance.balance;
  const tmp4 = closure_21();
  if (cResult[0] !== tmp4.orbsIcon) {
    const obj2 = { size: "xs", color: nativeDefault.colors.WHITE, style: tmp4.orbsIcon };
    const OrbsIcon = OrbsIcon2.OrbsIcon;
    const tmp8 = syncedClientThemes(OrbsIcon, obj2);
    cResult[0] = tmp4.orbsIcon;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp4.spacer) {
    const obj3 = { style: tmp4.spacer };
    const tmp12 = syncedClientThemes(metroImportAll, obj3);
    cResult[2] = tmp4.spacer;
    cResult[3] = tmp12;
    tmp9 = tmp12;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === balance) {
    if (cResult[5] === tmp5) {
      let tmp13;
      if (cResult[6] === tmp9) {
        tmp13 = cResult[7];
      }
      return tmp13;
    }
  }
  const obj4 = { children: items };
  items = [tmp5, tmp9, balance];
  const tmp14 = authStore3(closure_15, obj4);
  cResult[4] = balance;
  cResult[5] = tmp5;
  cResult[6] = tmp9;
  cResult[7] = tmp14;
  tmp13 = tmp14;
}) : (function OrbsBalance(balance) {
  let items;
  balance = balance.balance;
  const tmp = closure_21();
  const obj = { children: items };
  const obj2 = { size: "xs", color: nativeDefault.colors.WHITE, style: tmp.orbsIcon };
  const OrbsIcon = OrbsIcon2.OrbsIcon;
  items = [syncedClientThemes(OrbsIcon, obj2), , ];
  const obj3 = { style: tmp.spacer };
  items[1] = syncedClientThemes(metroImportAll, obj3);
  items[2] = balance;
  return authStore3(closure_15, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function CancelButton(alignEnd) {
  let closeButtonIcon;
  let first;
  let tmp7;
  let tmp8;
  let obj = require("react");
  const cResult = obj.c(7);
  alignEnd = alignEnd.alignEnd;
  const tmp4 = undefined !== alignEnd && alignEnd;
  const tmp5 = closure_18();
  _require = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function onClose() {
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(QuestOrbsRewardModal_str);
    }
    cResult[0] = onClose;
    first = onClose;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp5.closeButtonIcon) {
    const fn = function u() {
      const obj = { size: "lg", style: closeButtonIcon.closeButtonIcon };
      return syncedClientThemes(XSmallIcon.XSmallIcon, obj);
    };
    cResult[1] = tmp5.closeButtonIcon;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(require("intl").t.cpT0Cq);
    cResult[3] = stringResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[3];
  }
  const tmp10 = tmp4 ? tmp5.closeButtonWide : tmp5.closeButton;
  if (cResult[4] === tmp7) {
    let tmp11;
    if (cResult[5] === tmp10) {
      tmp11 = cResult[6];
    }
    return tmp11;
  }
  const tmp12 = closure_14(require("module_6993").HeaderBackButton, { onPress: first, backImage: tmp7, accessibilityLabel: tmp8, displayMode: "minimal", style: tmp10 });
  cResult[4] = tmp7;
  cResult[5] = tmp10;
  cResult[6] = tmp12;
  tmp11 = tmp12;
}) : (function CancelButton(alignEnd) {
  let closeButtonIcon;
  let intl;
  let flag = alignEnd.alignEnd;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_18();
  _require = tmp;
  let obj = {
    onPress: function onClose() {
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(QuestOrbsRewardModal_str);
    },
    backImage() {
      const obj = { size: "lg", style: closeButtonIcon.closeButtonIcon };
      return syncedClientThemes(XSmallIcon.XSmallIcon, obj);
    },
    accessibilityLabel: intl.string(require("intl").t.cpT0Cq),
    displayMode: "minimal",
    style: flag ? tmp.closeButtonWide : tmp.closeButton
  };
  const HeaderBackButton = require("module_6993").HeaderBackButton;
  intl = require("intl").intl;
  return closure_14(HeaderBackButton, obj);
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function OrbPlayerIOS(uri) {
  let animate;
  let onLoad;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let obj = uri(576);
  const cResult = obj.c(11);
  uri = uri.uri;
  ({ onLoad, animate } = uri);
  if (cResult[0] !== uri) {
    const fn = function n() {
      const obj = react_nativeDefault;
      const obj2 = { uri };
      obj.preload(obj2);
    };
    const items = [uri];
    cResult[0] = uri;
    cResult[1] = fn;
    cResult[2] = items;
    tmp5 = items;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = react.useEffect(tmp4, tmp5);
  const combined = "orb-animate-" + tmp3;
  if (cResult[3] !== uri) {
    let obj2 = { uri };
    cResult[3] = uri;
    cResult[4] = obj2;
    tmp8 = obj2;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    size = { width: "100%", height: "100%" };
    cResult[5] = size;
    tmp9 = size;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] === (undefined === animate || animate)) {
    if (cResult[7] === onLoad) {
      if (cResult[8] === combined) {
        let tmp10;
        if (cResult[9] === tmp8) {
          tmp10 = cResult[10];
        }
        return tmp10;
      }
    }
  }
  const tmp11 = closure_14(FastImageDefault, { source: tmp8, style: tmp9, resizeMode: "cover", enableAnimation: undefined === animate || animate, onLoad, usesSmallCache: false, fadeDuration: 0 }, combined);
  cResult[6] = undefined === animate || animate;
  cResult[7] = onLoad;
  cResult[8] = combined;
  cResult[9] = tmp8;
  cResult[10] = tmp11;
  tmp10 = tmp11;
}) : (function OrbPlayerIOS(uri) {
  uri = uri.uri;
  let flag = uri.animate;
  const onLoad = uri.onLoad;
  if (flag === undefined) {
    flag = true;
  }
  const items = [uri];
  const effect = react.useEffect(() => {
    const obj = react_nativeDefault;
    const obj2 = { uri };
    obj.preload(obj2);
  }, items);
  let obj = { source: { uri }, style: { width: "100%", height: "100%" }, resizeMode: "cover", enableAnimation: flag, onLoad, usesSmallCache: false, fadeDuration: 0 };
  const tmp2 = FastImageDefault;
  return closure_14(tmp2, obj, "orb-animate-" + flag);
}));
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = memo2(ReactCompilerGating.isReactCompilerEnabled() ? (function OrbPlayerAndroid(arg0) {
  let animate;
  let onLoad;
  let uri;
  const obj = react2;
  const cResult = obj.c(8);
  ({ uri, onLoad, animate } = arg0);
  let closure_0 = tmp4;
  const ref = react.useRef(null);
  const tmpResult = APNGPlayer;
  const aPNGPlayerControls = tmpResult.useAPNGPlayerControls(ref);
  const obj2 = react;
  if (cResult[0] === (undefined === animate || animate)) {
    let tmp7;
    let tmp8;
    let tmp11;
    if (cResult[1] === aPNGPlayerControls) {
      tmp7 = cResult[2];
      tmp8 = cResult[3];
    }
    const effect = obj2.useEffect(tmp7, tmp8);
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      size = { width: "100%", height: "100%" };
      cResult[4] = size;
      tmp11 = size;
    } else {
      tmp11 = cResult[4];
    }
    if (cResult[5] === onLoad) {
      let tmp12;
      if (cResult[6] === uri) {
        tmp12 = cResult[7];
      }
      return tmp12;
    }
    const obj3 = { ref, url: uri, autoplay: false, style: tmp11, onLoad };
    const tmp14 = syncedClientThemes(APNGPlayer.APNGPlayer, obj3);
    cResult[5] = onLoad;
    cResult[6] = uri;
    cResult[7] = tmp14;
    tmp12 = tmp14;
  }
  const fn = function n() {
    if (closure_0) {
      aPNGPlayerControls.play();
    } else {
      aPNGPlayerControls.stop();
    }
  };
  const items = [undefined === animate || animate, aPNGPlayerControls];
  cResult[0] = undefined === animate || animate;
  cResult[1] = aPNGPlayerControls;
  cResult[2] = fn;
  cResult[3] = items;
  tmp8 = items;
  tmp7 = fn;
}) : (function OrbPlayerAndroid(animate) {
  let onLoad;
  let uri;
  let flag = animate.animate;
  ({ uri, onLoad } = animate);
  if (flag === undefined) {
    flag = true;
  }
  const ref = react.useRef(null);
  const obj = APNGPlayer;
  const aPNGPlayerControls = obj.useAPNGPlayerControls(ref);
  const items = [flag, aPNGPlayerControls];
  const effect = react.useEffect(() => {
    if (flag) {
      aPNGPlayerControls.play();
    } else {
      aPNGPlayerControls.stop();
    }
  }, items);
  return syncedClientThemes(APNGPlayer.APNGPlayer, { ref, url, autoplay: false, style: { width: "100%", height: "100%" }, onLoad });
}));
const memo3 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = memo3(ReactCompilerGating.isReactCompilerEnabled() ? (function AnimatedOrb(arg0) {
  let animate;
  let onLoad;
  let style;
  let uri;
  const obj = react2;
  const cResult = obj.c(7);
  ({ uri, style, onLoad, animate } = arg0);
  const tmpResult = utils_PlatformUtils;
  const tmp5 = tmpResult.isAndroid() ? closure_25 : closure_24;
  if (cResult[0] === (undefined === animate || animate)) {
    if (cResult[1] === onLoad) {
      let tmp6;
      if (cResult[2] === uri) {
        tmp6 = cResult[3];
      }
      if (cResult[4] === style) {
        let tmp8;
        if (cResult[5] === tmp6) {
          tmp8 = cResult[6];
        }
        return tmp8;
      }
      const obj2 = { style, renderToHardwareTextureAndroid: true, needsOffscreenAlphaCompositing: true, children: tmp6 };
      const tmp11 = syncedClientThemes(metroImportAll, obj2);
      cResult[4] = style;
      cResult[5] = tmp6;
      cResult[6] = tmp11;
      tmp8 = tmp11;
    }
  }
  const tmp7 = syncedClientThemes(tmp5, { uri, onLoad, animate: undefined === animate || animate });
  cResult[0] = undefined === animate || animate;
  cResult[1] = onLoad;
  cResult[2] = uri;
  cResult[3] = tmp7;
  tmp6 = tmp7;
}) : (function AnimatedOrb(animate) {
  let onLoad;
  let style;
  let uri;
  let flag = animate.animate;
  ({ uri, style, onLoad } = animate);
  if (flag === undefined) {
    flag = true;
  }
  const obj = utils_PlatformUtils;
  const obj2 = { style, renderToHardwareTextureAndroid: true, needsOffscreenAlphaCompositing: true, children: syncedClientThemes(obj.isAndroid() ? closure_25 : closure_24, { uri, onLoad, animate: flag }) };
  return syncedClientThemes(metroImportAll, obj2);
}));
createStyles = createStyles_mod;
let closure_27 = createStyles.createStyles({ animatedOrb: { position: "absolute", height: "130%", width: "130%", left: "-15%", top: "-15%", pointerEvents: "none" } });
ReactCompilerGating = ReactCompilerGating_mod;
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? (function StaticOrb() {
  let first;
  let obj4;
  let tmp5;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(4);
  const tmp3 = closure_27();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    size = { width: "100%", height: "100%" };
    cResult[0] = size;
    first = size;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { uri: _modDef14617 };
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp3.animatedOrb) {
    const obj3 = { style: first, children: syncedClientThemes(FastImageDefault, obj4) };
    obj4 = { source: tmp5, style: tmp3.animatedOrb, fadeDuration: 0 };
    const tmp11 = syncedClientThemes(metroImportAll, obj3);
    cResult[2] = tmp3.animatedOrb;
    cResult[3] = tmp11;
    tmp7 = tmp11;
  } else {
    tmp7 = cResult[3];
  }
  return tmp7;
}) : (function StaticOrb() {
  let obj2;
  let obj3;
  let tmp;
  let tmp2;
  const obj = { style: { width: "100%", height: "100%" }, children: syncedClientThemes(tmp2, obj2) };
  obj2 = { source: obj3, style: tmp.animatedOrb, fadeDuration: 0 };
  obj3 = { uri: _modDef14617 };
  tmp = closure_27();
  tmp2 = FastImageDefault;
  return syncedClientThemes(metroImportAll, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? (function AnimatedOrbContainer(isAppActive) {
  let closure_1;
  let closure_129_4;
  let first;
  let first1;
  let first2;
  let fn2;
  let items1;
  let tmp11;
  let tmp9;
  let tmp = dependencyMap;
  const obj = react2;
  const cResult = obj.c(27);
  isAppActive = isAppActive.isAppActive;
  const tmp3 = closure_27();
  [first, closure_1] = react.useState(false);
  [first1, _slicedToArray] = react.useState(false);
  [tmp9, closure_129_4] = react.useState(true);
  _slicedToArray(react.useState(true), 2);
  const obj2 = react;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      closure_1(true);
    };
    cResult[0] = fn;
    first2 = fn;
  } else {
    first2 = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        closure_3(true);
      }
    }
    cResult[1] = E;
    tmp11 = E;
  } else {
    class E {
      constructor() {
        closure_3(true);
      }
    }
  }
  if (cResult[2] === first) {
    class E {
      constructor() {
        closure_3(true);
      }
    }
    const effect = obj2.useEffect(fn2, items1);
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor() {
          closure_3(true);
        }
      }
      cResult[6] = tmp14;
    } else {
      class E {
        constructor() {
          closure_3(true);
        }
      }
    }
    if (cResult[7] === first) {
      class E {
        constructor() {
          closure_3(true);
        }
      }
      if (cResult[10] === first1) {
        class E {
          constructor() {
            closure_3(true);
          }
        }
        if (cResult[13] === tmp3.animatedOrb) {
          class E {
            constructor() {
              closure_3(true);
            }
          }
          if (cResult[16] === tmp20) {
            class E {
              constructor() {
                closure_3(true);
              }
            }
            if (cResult[19] === isAppActive) {
              class E {
                constructor() {
                  closure_3(true);
                }
              }
            }
            let tmp28 = tmp9;
            if (tmp28) {
              class E {
                constructor() {
                  closure_3(true);
                }
              }
              const obj3 = { uri: _modDef14619, style: tmp3.animatedOrb, onLoad: first2, animate: isAppActive };
              tmp28 = syncedClientThemes(closure_26, obj3);
            }
            cResult[19] = isAppActive;
            cResult[20] = tmp9;
            cResult[21] = tmp3.animatedOrb;
            cResult[22] = tmp28;
          }
          const obj4 = { uri: _modDef14618, style: tmp20, onLoad: tmp11, animate: !tmp9 && isAppActive };
          cResult[16] = tmp20;
          cResult[17] = !tmp9 && isAppActive;
          cResult[18] = syncedClientThemes(closure_26, obj4);
          const tmp26 = syncedClientThemes(closure_26, obj4);
        }
        const items = [tmp3.animatedOrb, tmp18];
        cResult[13] = tmp3.animatedOrb;
        cResult[14] = tmp18;
        cResult[15] = items;
      }
      const tmp19 = (tmp9 || !first1) && { opacity: 0 };
      cResult[10] = first1;
      cResult[11] = tmp9;
      cResult[12] = tmp19;
    }
    let tmp16 = !first && !first1;
    if (tmp16) {
      class E {
        constructor() {
          closure_3(true);
        }
      }
      const obj5 = { style: { height: "100%" } };
      tmp16 = syncedClientThemes(metroImportAll, obj5);
    }
    cResult[7] = first;
    cResult[8] = first1;
    cResult[9] = tmp16;
  }
  fn2 = function w() {
    let closure_0;
    let timeout;
    const tmp = timeout;
    if (tmp) {
      const tmp2 = first1;
      if (tmp2) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          closure_1_4(false);
        }, 1450);
        return () => clearTimeout(closure_0);
      }
    }
  };
  items1 = [first, first1];
  cResult[2] = first;
  cResult[3] = first1;
  cResult[4] = fn2;
  cResult[5] = items1;
}) : (function AnimatedOrbContainer(isAppActive) {
  let c4;
  let closure_1;
  let closure_3;
  let first;
  let first1;
  let items1;
  let items2;
  let tmp15Result;
  let tmp7;
  isAppActive = isAppActive.isAppActive;
  first = undefined;
  closure_1 = undefined;
  first1 = undefined;
  closure_3 = undefined;
  c4 = undefined;
  let tmp = closure_27();
  [first, closure_1] = react.useState(false);
  [first1, closure_3] = react.useState(false);
  [tmp7, c4] = react.useState(true);
  _slicedToArray(react.useState(true), 2);
  const callback = react.useCallback(() => {
    closure_1(true);
  }, []);
  const items = [first, first1];
  const callback1 = react.useCallback(() => {
    closure_3(true);
  }, []);
  const effect = react.useEffect(() => {
    let closure_0;
    let timeout;
    const tmp = timeout;
    if (tmp) {
      const tmp2 = first1;
      if (tmp2) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          closure_1_4(false);
        }, 1450);
        return () => clearTimeout(closure_0);
      }
    }
  }, items);
  let tmp13 = !first;
  const obj = { style: { width: "100%", height: "100%" }, children: items1 };
  const tmp11 = authStore3;
  if (!first) {
    tmp13 = !first1;
  }
  if (tmp13) {
    const obj2 = { style: { height: "100%" } };
    tmp13 = syncedClientThemes(tmp12, obj2);
  }
  items1 = [tmp13, , ];
  const obj3 = { uri: _modDef14618, style: items2, onLoad: callback1, animate: !tmp15Result && isAppActive };
  items2 = [tmp.animatedOrb, (tmp15Result || !first1) && { opacity: 0 }];
  items1[1] = syncedClientThemes(closure_26, obj3);
  if (tmp15Result) {
    const obj4 = { uri: _modDef14619, style: tmp.animatedOrb, onLoad: callback, animate: isAppActive };
    tmp15Result = syncedClientThemes(closure_26, obj4);
  }
  items1[2] = tmp15Result;
  return tmp11(metroImportAll, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestOrbsRewardModal(quest) {
  let Button;
  let FIilK5;
  let balance;
  let currentUser;
  let format;
  let format3Result;
  let intl2;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj13;
  let obj18;
  let obj3;
  let state;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp16;
  let tmp17;
  let tmp21;
  let tmp22;
  let tmp32Result;
  let tmp35Result;
  let tmp6;
  let tmp7;
  let useReducedMotion;
  let obj = balance(576);
  const cResult = obj.c(21);
  quest = quest.quest;
  const tmp4 = closure_19();
  const tmp5 = closure_20();
  const isWidthConstrained = tmp5.isWidthConstrained;
  const maxWidthStyle = tmp5.maxWidthStyle;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function f() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = balance(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  const tmpResult5 = balance(9512);
  balance = tmpResult5.useFetchVirtualCurrencyBalance().balance;
  [tmp11, importDefault] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const obj4 = react;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AppStateStore];
    class T {
      constructor() {
        return state.getState();
      }
    }
    cResult[2] = items1;
    cResult[3] = T;
    tmp13 = T;
    tmp12 = items1;
  } else {
    tmp12 = cResult[2];
    tmp13 = cResult[3];
  }
  const tmpResult6 = balance(504);
  const stateFromStores1 = tmpResult6.useStateFromStores(tmp12, tmp13);
  const ACTIVE = tmp(1104).AppStates.ACTIVE;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [UserStore];
    class U {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[4] = items2;
    cResult[5] = U;
    tmp17 = U;
    tmp16 = items2;
  } else {
    tmp16 = cResult[4];
    tmp17 = cResult[5];
  }
  const userStatus = quest.userStatus;
  let orbQuantityClaimed;
  const tmpResult7 = balance(504);
  const stateFromStores2 = tmpResult7.useStateFromStores(tmp16, tmp17);
  if (userStatus != null) {
    orbQuantityClaimed = userStatus.orbQuantityClaimed;
  }
  if (orbQuantityClaimed == null) {
    const tmpResult8 = balance(9655);
    orbQuantityClaimed = tmpResult8.getQuestOrbRewardQuantityForUser(quest.config, stateFromStores2);
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class K {
      constructor() {
        obj = balance(closure_1_2[33]);
        applyOrientationLockResult = obj.applyOrientationLock("PORTRAIT");
        return () => {
          const obj = balance(closure_1_2[33]);
          const result = obj.restoreDefaultOrientationLock();
        };
      }
    }
    const items3 = [];
    class U {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[7] = items3;
    tmp22 = items3;
    tmp21 = K;
  } else {
    class K {
      constructor() {
        obj = balance(closure_1_2[33]);
        applyOrientationLockResult = obj.applyOrientationLock("PORTRAIT");
        return () => {
          const obj = balance(closure_1_2[33]);
          const result = obj.restoreDefaultOrientationLock();
        };
      }
    }
    tmp22 = cResult[7];
  }
  const effect = obj4.useEffect(tmp21, tmp22);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor() {
        importDefault(true);
      }
    }
    cResult[8] = V;
    class U {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
  } else {
    class V {
      constructor() {
        importDefault(true);
      }
    }
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class Y {
      constructor() {
        const obj = ModalActionCreatorsDefault;
        obj.popWithKey(QuestOrbsRewardModal_str);
        const obj2 = balance(dependencyMap[34]);
        const obj3 = { filter: constants.VIRTUAL_CURRENCY, fromContent: balance(dependencyMap[35]).QuestContent.REWARD_MODAL };
        obj2.openQuestHome(obj3);
      }
    }
    cResult[9] = Y;
    class U {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
  } else {
    class Y {
      constructor() {
        const obj = ModalActionCreatorsDefault;
        obj.popWithKey(QuestOrbsRewardModal_str);
        const obj2 = balance(dependencyMap[34]);
        const obj3 = { filter: constants.VIRTUAL_CURRENCY, fromContent: balance(dependencyMap[35]).QuestContent.REWARD_MODAL };
        obj2.openQuestHome(obj3);
      }
    }
  }
  if (cResult[10] !== tmp4.background) {
    class Y {
      constructor() {
        const obj = ModalActionCreatorsDefault;
        obj.popWithKey(QuestOrbsRewardModal_str);
        const obj2 = balance(dependencyMap[34]);
        const obj3 = { filter: constants.VIRTUAL_CURRENCY, fromContent: balance(dependencyMap[35]).QuestContent.REWARD_MODAL };
        obj2.openQuestHome(obj3);
      }
    }
    let obj2 = { style: null, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_14(tmp(14621).OrbsRewardBackground, obj3) };
    class U {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    obj3 = { style: tmp4.background, onReady: tmp24 };
    cResult[10] = tmp4.background;
    cResult[11] = closure_14(closure_8, obj2);
    const tmp29 = closure_14(closure_8, obj2);
  } else {
    class Y {
      constructor() {
        const obj = ModalActionCreatorsDefault;
        obj.popWithKey(QuestOrbsRewardModal_str);
        const obj2 = balance(dependencyMap[34]);
        const obj3 = { filter: constants.VIRTUAL_CURRENCY, fromContent: balance(dependencyMap[35]).QuestContent.REWARD_MODAL };
        obj2.openQuestHome(obj3);
      }
    }
  }
  if (cResult[12] === tmp32Result) {
    class Y {
      constructor() {
        const obj = ModalActionCreatorsDefault;
        obj.popWithKey(QuestOrbsRewardModal_str);
        const obj2 = balance(dependencyMap[34]);
        const obj3 = { filter: constants.VIRTUAL_CURRENCY, fromContent: balance(dependencyMap[35]).QuestContent.REWARD_MODAL };
        obj2.openQuestHome(obj3);
      }
    }
    if (tmp32Result) {
      let tmp33;
      class Y {
        constructor() {
          const obj = ModalActionCreatorsDefault;
          obj.popWithKey(QuestOrbsRewardModal_str);
          const obj2 = balance(dependencyMap[34]);
          const obj3 = { filter: constants.VIRTUAL_CURRENCY, fromContent: balance(dependencyMap[35]).QuestContent.REWARD_MODAL };
          obj2.openQuestHome(obj3);
        }
      }
      const rect = { style: tmp4.main, top: true, bottom: true, left: true, right: true, children: items4 };
      class U {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      const SafeAreaPaddingView = tmp(7281).SafeAreaPaddingView;
      if (isWidthConstrained) {
        class Y {
          constructor() {
            const obj = ModalActionCreatorsDefault;
            obj.popWithKey(QuestOrbsRewardModal_str);
            const obj2 = balance(dependencyMap[34]);
            const obj3 = { filter: constants.VIRTUAL_CURRENCY, fromContent: balance(dependencyMap[35]).QuestContent.REWARD_MODAL };
            obj2.openQuestHome(obj3);
          }
        }
        const obj5 = { style: tmp4.header, children: closure_14(closure_23, { alignEnd: true }) };
        class U {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
        tmp33 = closure_14(closure_8, obj5);
      }
      items4 = [tmp33, ];
      const obj6 = { style: items5, children: items6 };
      items5 = [tmp4.content, maxWidthStyle];
      let tmp34 = !isWidthConstrained;
      if (tmp34) {
        class Y {
          constructor() {
            const obj = ModalActionCreatorsDefault;
            obj.popWithKey(QuestOrbsRewardModal_str);
            const obj2 = balance(dependencyMap[34]);
            const obj3 = { filter: constants.VIRTUAL_CURRENCY, fromContent: balance(dependencyMap[35]).QuestContent.REWARD_MODAL };
            obj2.openQuestHome(obj3);
          }
        }
        const obj7 = { style: tmp4.header, children: closure_14(closure_23, {}) };
        class U {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
        tmp34 = closure_14(tmp26, obj7);
      }
      items6 = [tmp34, , ];
      const obj8 = { style: isWidthConstrained ? tmp4.centeredLockup : tmp4.mainColumn, children: items7 };
      const obj9 = { style: isWidthConstrained ? tmp4.animationInLockup : tmp4.animation, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp35Result };
      if (stateFromStores) {
        class Y {
          constructor() {
            const obj = ModalActionCreatorsDefault;
            obj.popWithKey(QuestOrbsRewardModal_str);
            const obj2 = balance(dependencyMap[34]);
            const obj3 = { filter: constants.VIRTUAL_CURRENCY, fromContent: balance(dependencyMap[35]).QuestContent.REWARD_MODAL };
            obj2.openQuestHome(obj3);
          }
        }
        tmp35Result = closure_14(closure_28, {});
      } else {
        class Y {
          constructor() {
            const obj = ModalActionCreatorsDefault;
            obj.popWithKey(QuestOrbsRewardModal_str);
            const obj2 = balance(dependencyMap[34]);
            const obj3 = { filter: constants.VIRTUAL_CURRENCY, fromContent: balance(dependencyMap[35]).QuestContent.REWARD_MODAL };
            obj2.openQuestHome(obj3);
          }
        }
        class U {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
      }
      items7 = [closure_14(closure_8, obj9), ];
      const obj11 = { style: isWidthConstrained ? tmp4.bodyInLockup : tmp4.body, children: items8 };
      const obj12 = { variant: "heading-xl/bold", color: "text-overlay-light", style: tmp4.title, children: format(FIilK5, obj13) };
      const Heading = tmp(5271).Heading;
      let intl = tmp(1125).intl;
      format = intl.format;
      FIilK5 = tmp(1125).t.FIilK5;
      if (orbQuantityClaimed == null) {
        class Y {
          constructor() {
            const obj = ModalActionCreatorsDefault;
            obj.popWithKey(QuestOrbsRewardModal_str);
            const obj2 = balance(dependencyMap[34]);
            const obj3 = { filter: constants.VIRTUAL_CURRENCY, fromContent: balance(dependencyMap[35]).QuestContent.REWARD_MODAL };
            obj2.openQuestHome(obj3);
          }
        }
      }
      obj13 = { count: orbQuantityClaimed };
      items8 = [closure_14(Heading, obj12), ];
      const obj14 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp4.title, children: format3Result };
      let Text = tmp(5271).Text;
      if (balance == null) {
        class Y {
          constructor() {
            const obj = ModalActionCreatorsDefault;
            obj.popWithKey(QuestOrbsRewardModal_str);
            const obj2 = balance(dependencyMap[34]);
            const obj3 = { filter: constants.VIRTUAL_CURRENCY, fromContent: balance(dependencyMap[35]).QuestContent.REWARD_MODAL };
            obj2.openQuestHome(obj3);
          }
        }
      }
      if (balance >= 4100) {
        class Y {
          constructor() {
            const obj = ModalActionCreatorsDefault;
            obj.popWithKey(QuestOrbsRewardModal_str);
            const obj2 = balance(dependencyMap[34]);
            const obj3 = { filter: constants.VIRTUAL_CURRENCY, fromContent: balance(dependencyMap[35]).QuestContent.REWARD_MODAL };
            obj2.openQuestHome(obj3);
          }
        }
        const format3 = tmp39.format;
        const obj15 = {
          balanceHook: null,
          profileDecoHook() {
                  let intl;
                  const obj = { variant: "text-md/semibold", color: "text-overlay-light", children: intl.string(balance(dependencyMap[20]).t.pGDUH9) };
                  const Text = balance(dependencyMap[38]).Text;
                  intl = balance(dependencyMap[20]).intl;
                  return closure_1_14(Text, obj, "profileDeco");
                }
        };
        class U {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
        format3Result = format3(tmp(1125).t["2dz2AL"], obj15);
      } else {
        class Y {
          constructor() {
            const obj = ModalActionCreatorsDefault;
            obj.popWithKey(QuestOrbsRewardModal_str);
            const obj2 = balance(dependencyMap[34]);
            const obj3 = { filter: constants.VIRTUAL_CURRENCY, fromContent: balance(dependencyMap[35]).QuestContent.REWARD_MODAL };
            obj2.openQuestHome(obj3);
          }
        }
        const format2 = tmp37.format;
        const obj16 = { balanceHook: null };
        class U {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
        format3Result = format2(tmp(1125).t.rKHvlX, obj16);
      }
      items8[1] = closure_14(Text, obj14);
      items7[1] = tmp32(closure_8, obj11);
      items6[1] = tmp32(closure_8, obj8);
      const obj17 = { style: tmp4.buttonsContainer, children: closure_14(Button, obj18) };
      obj18 = { onPress: tmp25, variant: "primary-overlay", size: "lg", text: intl2.string(balance(1125).t.uJAMFX) };
      Button = tmp(5281).Button;
      intl2 = tmp(1125).intl;
      items6[2] = closure_14(closure_8, obj17);
      items4[1] = tmp32(closure_8, obj6);
      tmp32Result = tmp32(SafeAreaPaddingView, rect);
    }
    if (cResult[15] === closure_8) {
      class Y {
        constructor() {
          const obj = ModalActionCreatorsDefault;
          obj.popWithKey(QuestOrbsRewardModal_str);
          const obj2 = balance(dependencyMap[34]);
          const obj3 = { filter: constants.VIRTUAL_CURRENCY, fromContent: balance(dependencyMap[35]).QuestContent.REWARD_MODAL };
          obj2.openQuestHome(obj3);
        }
      }
    }
    class U {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    const obj19 = { style: tmp4.root, children: items9 };
    items9 = [tmp27, tmp30, tmp32Result];
    cResult[15] = closure_8;
    cResult[16] = tmp4.root;
    cResult[17] = tmp27;
    cResult[18] = tmp30;
    cResult[19] = tmp32Result;
    cResult[20] = closure_16(closure_8, obj19);
    const tmp41 = closure_16(closure_8, obj19);
  }
  let tmp31 = !tmp32Result;
  if (tmp31) {
    class Y {
      constructor() {
        const obj = ModalActionCreatorsDefault;
        obj.popWithKey(QuestOrbsRewardModal_str);
        const obj2 = balance(dependencyMap[34]);
        const obj3 = { filter: constants.VIRTUAL_CURRENCY, fromContent: balance(dependencyMap[35]).QuestContent.REWARD_MODAL };
        obj2.openQuestHome(obj3);
      }
    }
    const obj20 = { style: tmp4.loading, children: closure_14(closure_6, { animating: true }) };
    class U {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    tmp31 = closure_14(tmp26, obj20);
  }
  cResult[12] = tmp32Result;
  cResult[13] = tmp4.loading;
  cResult[14] = tmp31;
}) : (function QuestOrbsRewardModal(quest) {
  let Button;
  let FIilK5;
  let _undefined;
  let c1;
  let currentUser;
  let format;
  let formatResult;
  let intl4;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj18;
  let obj23;
  let obj8;
  let state;
  let tmp13Result;
  let tmp15Result6;
  let tmp7;
  let useReducedMotion;
  quest = quest.quest;
  let num;
  c1 = undefined;
  const tmp = closure_19();
  const tmp2 = closure_20();
  const isWidthConstrained = tmp2.isWidthConstrained;
  const maxWidthStyle = tmp2.maxWidthStyle;
  let obj = num(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj2 = num(9512);
  num = obj2.useFetchVirtualCurrencyBalance().balance;
  let obj3 = react;
  [tmp7, c1] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const items1 = [AppStateStore];
  const obj4 = num(504);
  const stateFromStores1 = obj4.useStateFromStores(items1, () => state.getState());
  const ACTIVE = num(1104).AppStates.ACTIVE;
  const items2 = [UserStore];
  const userStatus = quest.userStatus;
  let num2;
  const obj5 = num(504);
  const stateFromStores2 = obj5.useStateFromStores(items2, () => currentUser.getCurrentUser());
  if (userStatus != null) {
    num2 = userStatus.orbQuantityClaimed;
  }
  if (num2 == null) {
    const tmp3Result = num(9655);
    num2 = tmp3Result.getQuestOrbRewardQuantityForUser(quest.config, stateFromStores2);
  }
  const effect = obj3.useEffect(() => {
    let obj = num(dependencyMap[33]);
    obj.applyOrientationLock("PORTRAIT");
    return () => {
      const obj = num(closure_1_2[33]);
      const result = obj.restoreDefaultOrientationLock();
    };
  }, []);
  const callback = obj3.useCallback(() => {
    _undefined(true);
  }, []);
  const obj6 = { style: tmp.root, children: items3 };
  const obj7 = { style: absoluteFill.absoluteFill, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_14(num(14621).OrbsRewardBackground, obj8) };
  const callback1 = obj3.useCallback(() => {
    const obj = _undefined(dependencyMap[9]);
    obj.popWithKey(QuestOrbsRewardModal_str);
    const obj2 = num(dependencyMap[34]);
    const obj3 = { filter: constants.VIRTUAL_CURRENCY, fromContent: num(dependencyMap[35]).QuestContent.REWARD_MODAL };
    obj2.openQuestHome(obj3);
  }, []);
  obj8 = { style: tmp.background, onReady: callback };
  items3 = [closure_14(closure_8, obj7), , ];
  let tmp15Result = !tmp13Result;
  if (tmp15Result) {
    const obj9 = { style: tmp.loading, children: closure_14(closure_6, { animating: true }) };
    tmp15Result = tmp15(tmp14, obj9);
  }
  items3[1] = tmp15Result;
  if (tmp13Result) {
    const rect = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: items4 };
    let tmp15Result4 = isWidthConstrained;
    const SafeAreaPaddingView = tmp3(7281).SafeAreaPaddingView;
    if (isWidthConstrained) {
      const obj10 = { style: tmp.header, children: closure_14(closure_23, { alignEnd: true }) };
      tmp15Result4 = tmp15(tmp14, obj10);
    }
    items4 = [tmp15Result4, ];
    const obj11 = { style: items5, children: items6 };
    items5 = [tmp.content, maxWidthStyle];
    let tmp15Result5 = !isWidthConstrained;
    if (tmp15Result5) {
      const obj12 = { style: tmp.header, children: closure_14(closure_23, {}) };
      tmp15Result5 = tmp15(tmp14, obj12);
    }
    items6 = [tmp15Result5, , ];
    const obj13 = { style: isWidthConstrained ? tmp.centeredLockup : tmp.mainColumn, children: items7 };
    const obj14 = { style: isWidthConstrained ? tmp.animationInLockup : tmp.animation, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp15Result6 };
    if (stateFromStores) {
      tmp15Result6 = tmp15(closure_28, {});
    } else {
      const obj15 = { isAppActive: stateFromStores1 === ACTIVE };
      tmp15Result6 = tmp15(closure_29, obj15);
    }
    items7 = [closure_14(closure_8, obj14), ];
    const obj16 = { style: isWidthConstrained ? tmp.bodyInLockup : tmp.body, children: items8 };
    const obj17 = { variant: "heading-xl/bold", color: "text-overlay-light", style: tmp.title, children: format(FIilK5, obj18) };
    const Heading = tmp3(5271).Heading;
    let intl = tmp3(1125).intl;
    format = intl.format;
    FIilK5 = tmp3(1125).t.FIilK5;
    if (num2 == null) {
      num2 = 0;
    }
    obj18 = { count: num2 };
    items8 = [closure_14(Heading, obj17), ];
    const obj19 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp.title, children: formatResult };
    let Text = tmp3(5271).Text;
    if (num == null) {
      num = 0;
    }
    if (num >= 4100) {
      const intl3 = tmp3(1125).intl;
      const obj20 = {
        balanceHook() {
              const obj = { balance: num };
              return syncedClientThemes(closure_22, obj, "balance");
            },
        profileDecoHook() {
              let intl;
              const obj = { variant: "text-md/semibold", color: "text-overlay-light", children: intl.string(num(dependencyMap[20]).t.pGDUH9) };
              const Text = num(dependencyMap[38]).Text;
              intl = num(dependencyMap[20]).intl;
              return closure_1_14(Text, obj, "profileDeco");
            }
      };
      formatResult = intl3.format(tmp3(1125).t["2dz2AL"], obj20);
    } else {
      const intl2 = tmp3(1125).intl;
      const obj21 = {
        balanceHook() {
              const obj = { balance: num };
              return syncedClientThemes(closure_22, obj, "balance");
            }
      };
      formatResult = intl2.format(tmp3(1125).t.rKHvlX, obj21);
    }
    items8[1] = closure_14(Text, obj19);
    items7[1] = closure_16(closure_8, obj16);
    items6[1] = closure_16(closure_8, obj13);
    const obj22 = { style: tmp.buttonsContainer, children: closure_14(Button, obj23) };
    obj23 = { onPress: callback1, variant: "primary-overlay", size: "lg", text: intl4.string(num(1125).t.uJAMFX) };
    Button = tmp3(5281).Button;
    intl4 = tmp3(1125).intl;
    items6[2] = closure_14(closure_8, obj22);
    items4[1] = closure_16(closure_8, obj11);
    tmp13Result = closure_16(SafeAreaPaddingView, rect);
  }
  items3[2] = tmp13Result;
  return closure_16(closure_8, obj6);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestOrbsRewardModal.native.tsx");

export default tmp7;
export function openQuestOrbsRewardModal(quest) {
  let paths;
  quest = quest.quest;
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(_asyncToGenerator(async () => {
    let c0;
    let c1;
    await require("asyncRequire")(paths[10], paths.paths);
    return arg1.default;
  }), { quest }, QuestOrbsRewardModal_str);
}
