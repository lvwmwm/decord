// Module ID: 10401
// Function ID: 10402
// Name: VibingWumpusModal
// Dependencies: [32, 19, 17, 5080, 10348, 10402, 1085, 21, 5091, 587, 558, 576, 573, 10302, 1265, 5941, 6163, 10403, 10404, 6112, 1126, 5087, 5376, 8384, 8386, 6686, 2]

// Module 10401 (VibingWumpusModal)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import InappropriateConversationsActionCreators from "InappropriateConversationsActionCreators" /* 10302 */;
import Constants2 from "Constants" /* 10348 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import InappropriateConversationsConstants from "InappropriateConversationsConstants" /* 10402 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_0, importDefault, obj1, trackResult;

let c9;
let closure_12;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let tmp;
let unpackModuleId;
const Navigator = tmp(6686);
function render() {
  return closure_1_11(closure_1_15, {});
}
const View = react_native.View;
const VIBING_WUMPUS_MODAL_KEY = Constants2.VIBING_WUMPUS_MODAL_KEY;
({ VibingWumpusAction: metroImportAll, VibingWumpusSource: c9 } = InappropriateConversationsConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, warningText: obj3, ctaContainer: obj4, takeoverHeader: { textAlign: "center" }, takeoverDescription: { textAlign: "center" }, wumpus: { height: 187 }, rings: { position: "absolute", width: "100%", height: 440, top: 120 } };
obj2 = { display: "flex", alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_16, height: "100%" };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_4 };
obj4 = { display: "flex", alignItems: "center", alignSelf: "stretch", gap: nativeDefault.space.PX_16 };
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function VibingWumpusScreen() {
  let closure_1;
  let constants3;
  let first;
  let ref;
  let stateFromStores;
  let tmp12;
  let tmp13;
  let tmp8;
  let tmp9;
  let useReducedMotion;
  const tmp = first;
  let obj = first(ref[11]);
  const cResult = obj.c(45);
  const tmp4 = closure_14();
  let obj2 = react;
  const tmp5 = stateFromStores(react.useState(false), 2);
  first = tmp5[0];
  importDefault = tmp5[1];
  ref = react.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    class I {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[0] = items;
    cResult[1] = I;
    tmp8 = items;
    tmp9 = I;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const tmpResult = tmp(ref[12]);
  stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class W {
      constructor() {
        date = new Date();
        closure_0 = date;
        obj = closure_0(closure_2[13]);
        result = obj.playVibingWumpusMusic();
        obj2 = closure_1(closure_2[14]);
        obj1 = { source: closure_9.INAPPROPRIATE_CONVERSATION };
        trackResult = obj2.track(closure_10.VIBING_WUMPUS_VIEWED, obj1);
        return () => {
          let time;
          const obj = { duration_open_ms: time - date.getTime(), source: constants2.INAPPROPRIATE_CONVERSATION };
          const track = closure_1(ref[14]).track;
          const VIBING_WUMPUS_CLOSED = constants3.VIBING_WUMPUS_CLOSED;
          closure_1(ref[14]);
          date = new Date();
          time = date.getTime();
          track(VIBING_WUMPUS_CLOSED, obj);
          const obj3 = first(ref[13]);
          const result = obj3.stopVibingWumpusMusic();
        };
      }
    }
    const items1 = [];
    cResult[2] = W;
    class I {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[3] = items1;
    tmp13 = items1;
    tmp12 = W;
  } else {
    class W {
      constructor() {
        date = new Date();
        closure_0 = date;
        obj = closure_0(closure_2[13]);
        result = obj.playVibingWumpusMusic();
        obj2 = closure_1(closure_2[14]);
        obj1 = { source: closure_9.INAPPROPRIATE_CONVERSATION };
        trackResult = obj2.track(closure_10.VIBING_WUMPUS_VIEWED, obj1);
        return () => {
          let time;
          const obj = { duration_open_ms: time - date.getTime(), source: constants2.INAPPROPRIATE_CONVERSATION };
          const track = closure_1(ref[14]).track;
          const VIBING_WUMPUS_CLOSED = constants3.VIBING_WUMPUS_CLOSED;
          closure_1(ref[14]);
          date = new Date();
          time = date.getTime();
          track(VIBING_WUMPUS_CLOSED, obj);
          const obj3 = first(ref[13]);
          const result = obj3.stopVibingWumpusMusic();
        };
      }
    }
    tmp13 = cResult[3];
  }
  const effect = obj2.useEffect(tmp12, tmp13);
  if (cResult[4] === first) {
    class W {
      constructor() {
        date = new Date();
        closure_0 = date;
        obj = closure_0(closure_2[13]);
        result = obj.playVibingWumpusMusic();
        obj2 = closure_1(closure_2[14]);
        obj1 = { source: closure_9.INAPPROPRIATE_CONVERSATION };
        trackResult = obj2.track(closure_10.VIBING_WUMPUS_VIEWED, obj1);
        return () => {
          let time;
          const obj = { duration_open_ms: time - date.getTime(), source: constants2.INAPPROPRIATE_CONVERSATION };
          const track = closure_1(ref[14]).track;
          const VIBING_WUMPUS_CLOSED = constants3.VIBING_WUMPUS_CLOSED;
          closure_1(ref[14]);
          date = new Date();
          time = date.getTime();
          track(VIBING_WUMPUS_CLOSED, obj);
          const obj3 = first(ref[13]);
          const result = obj3.stopVibingWumpusMusic();
        };
      }
    }
    const _Symbol = Symbol;
    class I {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    if (cResult[8] !== tmp4.rings) {
      class W {
        constructor() {
          date = new Date();
          closure_0 = date;
          obj = closure_0(closure_2[13]);
          result = obj.playVibingWumpusMusic();
          obj2 = closure_1(closure_2[14]);
          obj1 = { source: closure_9.INAPPROPRIATE_CONVERSATION };
          trackResult = obj2.track(closure_10.VIBING_WUMPUS_VIEWED, obj1);
          return () => {
            let time;
            const obj = { duration_open_ms: time - date.getTime(), source: constants2.INAPPROPRIATE_CONVERSATION };
            const track = closure_1(ref[14]).track;
            const VIBING_WUMPUS_CLOSED = constants3.VIBING_WUMPUS_CLOSED;
            closure_1(ref[14]);
            date = new Date();
            time = date.getTime();
            track(VIBING_WUMPUS_CLOSED, obj);
            const obj3 = first(ref[13]);
            const result = obj3.stopVibingWumpusMusic();
          };
        }
      }
      let obj3 = { source: require("AssetRegistry"), style: tmp4.rings };
      class I {
        constructor() {
          return useReducedMotion.useReducedMotion;
        }
      }
      const tmp19 = closure_11(tmp18, obj3);
      cResult[8] = tmp4.rings;
      cResult[9] = tmp19;
    } else {
      class W {
        constructor() {
          date = new Date();
          closure_0 = date;
          obj = closure_0(closure_2[13]);
          result = obj.playVibingWumpusMusic();
          obj2 = closure_1(closure_2[14]);
          obj1 = { source: closure_9.INAPPROPRIATE_CONVERSATION };
          trackResult = obj2.track(closure_10.VIBING_WUMPUS_VIEWED, obj1);
          return () => {
            let time;
            const obj = { duration_open_ms: time - date.getTime(), source: constants2.INAPPROPRIATE_CONVERSATION };
            const track = closure_1(ref[14]).track;
            const VIBING_WUMPUS_CLOSED = constants3.VIBING_WUMPUS_CLOSED;
            closure_1(ref[14]);
            date = new Date();
            time = date.getTime();
            track(VIBING_WUMPUS_CLOSED, obj);
            const obj3 = first(ref[13]);
            const result = obj3.stopVibingWumpusMusic();
          };
        }
      }
    }
    const _Symbol2 = Symbol;
    const container = tmp4.container;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class W {
        constructor() {
          date = new Date();
          closure_0 = date;
          obj = closure_0(closure_2[13]);
          result = obj.playVibingWumpusMusic();
          obj2 = closure_1(closure_2[14]);
          obj1 = { source: closure_9.INAPPROPRIATE_CONVERSATION };
          trackResult = obj2.track(closure_10.VIBING_WUMPUS_VIEWED, obj1);
          return () => {
            let time;
            const obj = { duration_open_ms: time - date.getTime(), source: constants2.INAPPROPRIATE_CONVERSATION };
            const track = closure_1(ref[14]).track;
            const VIBING_WUMPUS_CLOSED = constants3.VIBING_WUMPUS_CLOSED;
            closure_1(ref[14]);
            date = new Date();
            time = date.getTime();
            track(VIBING_WUMPUS_CLOSED, obj);
            const obj3 = first(ref[13]);
            const result = obj3.stopVibingWumpusMusic();
          };
        }
      }
      cResult[10] = tmp21;
      class I {
        constructor() {
          return useReducedMotion.useReducedMotion;
        }
      }
    } else {
      class W {
        constructor() {
          date = new Date();
          closure_0 = date;
          obj = closure_0(closure_2[13]);
          result = obj.playVibingWumpusMusic();
          obj2 = closure_1(closure_2[14]);
          obj1 = { source: closure_9.INAPPROPRIATE_CONVERSATION };
          trackResult = obj2.track(closure_10.VIBING_WUMPUS_VIEWED, obj1);
          return () => {
            let time;
            const obj = { duration_open_ms: time - date.getTime(), source: constants2.INAPPROPRIATE_CONVERSATION };
            const track = closure_1(ref[14]).track;
            const VIBING_WUMPUS_CLOSED = constants3.VIBING_WUMPUS_CLOSED;
            closure_1(ref[14]);
            date = new Date();
            time = date.getTime();
            track(VIBING_WUMPUS_CLOSED, obj);
            const obj3 = first(ref[13]);
            const result = obj3.stopVibingWumpusMusic();
          };
        }
      }
    }
    if (stateFromStores) {
      class W {
        constructor() {
          date = new Date();
          closure_0 = date;
          obj = closure_0(closure_2[13]);
          result = obj.playVibingWumpusMusic();
          obj2 = closure_1(closure_2[14]);
          obj1 = { source: closure_9.INAPPROPRIATE_CONVERSATION };
          trackResult = obj2.track(closure_10.VIBING_WUMPUS_VIEWED, obj1);
          return () => {
            let time;
            const obj = { duration_open_ms: time - date.getTime(), source: constants2.INAPPROPRIATE_CONVERSATION };
            const track = closure_1(ref[14]).track;
            const VIBING_WUMPUS_CLOSED = constants3.VIBING_WUMPUS_CLOSED;
            closure_1(ref[14]);
            date = new Date();
            time = date.getTime();
            track(VIBING_WUMPUS_CLOSED, obj);
            const obj3 = first(ref[13]);
            const result = obj3.stopVibingWumpusMusic();
          };
        }
      }
    }
    if (cResult[11] === tmp4.wumpus) {
      class W {
        constructor() {
          date = new Date();
          closure_0 = date;
          obj = closure_0(closure_2[13]);
          result = obj.playVibingWumpusMusic();
          obj2 = closure_1(closure_2[14]);
          obj1 = { source: closure_9.INAPPROPRIATE_CONVERSATION };
          trackResult = obj2.track(closure_10.VIBING_WUMPUS_VIEWED, obj1);
          return () => {
            let time;
            const obj = { duration_open_ms: time - date.getTime(), source: constants2.INAPPROPRIATE_CONVERSATION };
            const track = closure_1(ref[14]).track;
            const VIBING_WUMPUS_CLOSED = constants3.VIBING_WUMPUS_CLOSED;
            closure_1(ref[14]);
            date = new Date();
            time = date.getTime();
            track(VIBING_WUMPUS_CLOSED, obj);
            const obj3 = first(ref[13]);
            const result = obj3.stopVibingWumpusMusic();
          };
        }
      }
    }
    let obj4 = { source: tmp20, ref, autoPlay: tmp22, loop: true, style: tmp4.wumpus, progress: undefined };
    cResult[11] = tmp4.wumpus;
    cResult[12] = undefined;
    cResult[13] = !stateFromStores;
    cResult[14] = closure_11(require("LottieAnimationView"), obj4);
    const tmp27 = closure_11(require("LottieAnimationView"), obj4);
  }
  function handlePauseTogglePress() {
    const obj = InappropriateConversationsActionCreators;
    if (first) {
      const result = obj.playVibingWumpusMusic();
      const obj3 = { action: metroImportAll.PLAY };
      const obj4 = AnalyticsUtilsDefault;
      obj4.track(AnalyticEvents.VIBING_WUMPUS_ACTION, obj3);
    } else {
      const result1 = obj.pauseVibingWumpusMusic();
      const obj5 = { action: metroImportAll.PAUSE };
      const obj2 = AnalyticsUtilsDefault;
      obj2.track(AnalyticEvents.VIBING_WUMPUS_ACTION, obj5);
    }
    let tmp14 = stateFromStores;
    if (!tmp14) {
      if (first) {
        const current = ref.current;
        if (current != null) {
          current.resume();
        }
      }
      closure_1(!first);
    }
    if (!tmp14) {
      tmp14 = tmp;
    }
    if (!tmp14) {
      const current2 = ref.current;
      if (current2 != null) {
        current2.pause();
      }
    }
  }
  cResult[4] = first;
  cResult[5] = stateFromStores;
  cResult[6] = handlePauseTogglePress;
}) : (function VibingWumpusScreen() {
  let PauseIcon;
  let closure_1;
  let constants3;
  let intl;
  let intl2;
  let intl3;
  let items2;
  let items3;
  let items4;
  let num;
  let obj12;
  let stateFromStores;
  let stringResult;
  let useReducedMotion;
  const tmp = closure_14();
  const tmp2 = stateFromStores(react.useState(false), 2);
  const first = tmp2[0];
  importDefault = tmp2[1];
  const ref = react.useRef(null);
  let obj = first(ref[12]);
  const items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const effect = react.useEffect(() => {
    let date = new Date();
    let obj = date(ref[13]);
    let result = obj.playVibingWumpusMusic();
    let obj3 = { source: constants2.INAPPROPRIATE_CONVERSATION };
    const obj2 = closure_1(ref[14]);
    obj2.track(constants3.VIBING_WUMPUS_VIEWED, obj3);
    return () => {
      let time;
      const obj = { duration_open_ms: time - date.getTime(), source: constants2.INAPPROPRIATE_CONVERSATION };
      const track = closure_1(ref[14]).track;
      const VIBING_WUMPUS_CLOSED = constants3.VIBING_WUMPUS_CLOSED;
      closure_1(ref[14]);
      date = new Date();
      time = date.getTime();
      track(VIBING_WUMPUS_CLOSED, obj);
      const obj3 = first(ref[13]);
      const result = obj3.stopVibingWumpusMusic();
    };
  }, []);
  let obj2 = { source: require("AssetRegistry"), style: tmp.rings };
  const tmp13 = require("FastImage");
  const items1 = [closure_11(tmp13, obj2), ];
  let tmp14 = View;
  let obj3 = { style: tmp.container, children: items2 };
  let obj4 = { source: first(ref[18]), ref, autoPlay: !stateFromStores, loop: true, style: tmp.wumpus, progress: num };
  num = undefined;
  const tmp10 = closure_13;
  const tmp12 = importDefault;
  const tmp15 = require("LottieAnimationView");
  if (stateFromStores) {
    num = 0.8;
  }
  items2 = [tmp11(tmp15, obj4), , ];
  let obj5 = { style: tmp.warningText, children: items3 };
  const obj6 = { variant: "heading-xl/semibold", style: tmp.takeoverHeader, accessibilityRole: "header", children: intl.string(first(ref[20]).t.L4ifkZ) };
  const Text = tmp5(tmp6[21]).Text;
  intl = tmp5(tmp6[20]).intl;
  items3 = [tmp11(Text, obj6), ];
  const obj7 = { variant: "text-md/medium", style: tmp.takeoverDescription, children: intl2.string(first(ref[20]).t.R8LCMZ) };
  const Text2 = tmp5(tmp6[21]).Text;
  intl2 = tmp5(tmp6[20]).intl;
  items3[1] = closure_11(Text2, obj7);
  items2[1] = closure_12(tmp14, obj5);
  const obj8 = { style: tmp.ctaContainer, children: items4 };
  const obj9 = {
    variant: "primary",
    size: "lg",
    text: intl3.string(first(ref[20]).t["8eKkaf"]),
    grow: true,
    onPress: function handleBackToConversation() {
      const obj = closure_1(ref[14]);
      const obj2 = { action: constants.BACK_TO_CONVERSATION };
      obj.track(constants3.VIBING_WUMPUS_ACTION, obj2);
      const obj3 = closure_1(ref[15]);
      obj3.popWithKey(VIBING_WUMPUS_MODAL_KEY);
    }
  };
  const Button = tmp5(tmp6[22]).Button;
  intl3 = tmp5(tmp6[20]).intl;
  items4 = [tmp11(Button, obj9), ];
  const Button2 = tmp5(tmp6[22]).Button;
  const intl4 = tmp5(tmp6[20]).intl;
  const string = intl4.string;
  const t = tmp5(tmp6[20]).t;
  if (first) {
    stringResult = string(t.RscU7I);
  } else {
    stringResult = string(t.ZcgDJX);
  }
  const obj10 = {
    variant: "tertiary",
    size: "lg",
    text: stringResult,
    grow: true,
    onPress: function handlePauseTogglePress() {
      const obj = InappropriateConversationsActionCreators;
      if (first) {
        const result = obj.playVibingWumpusMusic();
        const obj3 = { action: metroImportAll.PLAY };
        const obj4 = AnalyticsUtilsDefault;
        obj4.track(AnalyticEvents.VIBING_WUMPUS_ACTION, obj3);
      } else {
        const result1 = obj.pauseVibingWumpusMusic();
        const obj5 = { action: metroImportAll.PAUSE };
        const obj2 = AnalyticsUtilsDefault;
        obj2.track(AnalyticEvents.VIBING_WUMPUS_ACTION, obj5);
      }
      let tmp14 = stateFromStores;
      if (!tmp14) {
        if (first) {
          const current = ref.current;
          if (current != null) {
            current.resume();
          }
        }
        closure_1(!first);
      }
      if (!tmp14) {
        tmp14 = tmp;
      }
      if (!tmp14) {
        const current2 = ref.current;
        if (current2 != null) {
          current2.pause();
        }
      }
    },
    icon: closure_11(PauseIcon, obj12)
  };
  if (first) {
    PauseIcon = tmp5(tmp6[23]).PlayIcon;
  } else {
    PauseIcon = tmp5(tmp6[24]).PauseIcon;
  }
  const obj11 = { children: items1 };
  obj12 = { size: "md", color: tmp12(ref[9]).colors.REDESIGN_BUTTON_TERTIARY_TEXT };
  items4[1] = closure_11(Button2, obj10);
  items2[2] = closure_12(tmp14, obj8);
  items1[1] = closure_12(tmp14, obj3);
  return closure_12(tmp10, obj11);
});
let closure_15 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function VibingWumpusModal() {
  let first;
  let obj3;
  let obj4;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { screens: obj3, initialRouteName: "VIBING_WUMPUS" };
    obj3 = { VIBING_WUMPUS: obj4 };
    obj4 = { title: "", fullscreen: true, headerShown: false, render };
    const tmp6 = unpackModuleId(Navigator.Navigator, obj2);
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function VibingWumpusModal() {
  let obj2;
  const obj = { screens: obj2, initialRouteName: "VIBING_WUMPUS" };
  obj2 = { VIBING_WUMPUS: { title: "", fullscreen: true, headerShown: false, render } };
  return unpackModuleId(Navigator.Navigator, obj);
});
let result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/VibingWumpusModal.tsx");

export default tmp6;
export const VibingWumpusScreen = tmp5;
