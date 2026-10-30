// Module ID: 11281
// Function ID: 11282
// Name: VibingWumpusModal
// Dependencies: [32, 19, 17, 5010, 11230, 11282, 1072, 21, 5009, 575, 563, 10963, 1253, 5712, 11283, 5613, 11284, 5619, 1114, 5629, 6738, 8839, 8841, 7163, 2]
// Exports: default

// Module 11281 (VibingWumpusModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import Navigator from "Navigator" /* 7163 */;
import InappropriateConversationsActionCreators from "InappropriateConversationsActionCreators" /* 10963 */;
import Constants2 from "Constants" /* 11230 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import InappropriateConversationsConstants from "InappropriateConversationsConstants" /* 11282 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let c9;
let closure_12;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
class VibingWumpusScreen {
  constructor() {
    let PauseIcon;
    let closure_1;
    let constants2;
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
    let obj = first(ref[10]);
    const items = [AccessibilityStore];
    stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
    const effect = react.useEffect(() => {
      let date = new Date();
      let obj = date(ref[11]);
      let result = obj.playVibingWumpusMusic();
      let obj3 = { source: constants2.INAPPROPRIATE_CONVERSATION };
      const obj2 = closure_1(ref[12]);
      obj2.track(constants3.VIBING_WUMPUS_VIEWED, obj3);
      return () => {
        let time;
        const obj = { duration_open_ms: time - date.getTime(), source: constants2.INAPPROPRIATE_CONVERSATION };
        const track = closure_1(ref[12]).track;
        const VIBING_WUMPUS_CLOSED = constants3.VIBING_WUMPUS_CLOSED;
        closure_1(ref[12]);
        date = new Date();
        time = date.getTime();
        track(VIBING_WUMPUS_CLOSED, obj);
        const obj3 = first(ref[11]);
        const result = obj3.stopVibingWumpusMusic();
      };
    }, []);
    let obj2 = { source: require("AssetRegistry"), style: tmp.rings };
    const tmp13 = require("FastImage");
    const items1 = [closure_11(tmp13, obj2), ];
    let tmp14 = View;
    let obj3 = { style: tmp.container, children: items2 };
    let obj4 = { source: first(ref[16]), ref, autoPlay: !stateFromStores, loop: true, style: tmp.wumpus, progress: num };
    num = undefined;
    const tmp10 = closure_13;
    const tmp12 = importDefault;
    const tmp15 = require("LottieAnimationView");
    if (stateFromStores) {
      num = 0.8;
    }
    items2 = [tmp11(tmp15, obj4), , ];
    let obj5 = { style: tmp.warningText, children: items3 };
    const obj6 = { variant: "heading-xl/semibold", style: tmp.takeoverHeader, accessibilityRole: "header", children: intl.string(first(ref[18]).t.L4ifkZ) };
    const Text = tmp5(tmp6[17]).Text;
    intl = tmp5(tmp6[18]).intl;
    items3 = [tmp11(Text, obj6), ];
    const obj7 = { variant: "text-md/medium", style: tmp.takeoverDescription, children: intl2.string(first(ref[18]).t.R8LCMZ) };
    const Text2 = tmp5(tmp6[17]).Text;
    intl2 = tmp5(tmp6[18]).intl;
    items3[1] = closure_11(Text2, obj7);
    items2[1] = closure_12(tmp14, obj5);
    const obj8 = { style: tmp.ctaContainer, children: items4 };
    const obj9 = {
      variant: "primary",
      size: "lg",
      text: intl3.string(first(ref[18]).t["8eKkaf"]),
      grow: true,
      onPress: function handleBackToConversation() {
        const obj = closure_1(ref[12]);
        const obj2 = { action: constants.BACK_TO_CONVERSATION };
        obj.track(constants3.VIBING_WUMPUS_ACTION, obj2);
        const obj3 = closure_1(ref[20]);
        obj3.popWithKey(VIBING_WUMPUS_MODAL_KEY);
      }
    };
    const Button = tmp5(tmp6[19]).Button;
    intl3 = tmp5(tmp6[18]).intl;
    items4 = [tmp11(Button, obj9), ];
    const Button2 = tmp5(tmp6[19]).Button;
    const intl4 = tmp5(tmp6[18]).intl;
    const string = intl4.string;
    const t = tmp5(tmp6[18]).t;
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
      PauseIcon = tmp5(tmp6[21]).PlayIcon;
    } else {
      PauseIcon = tmp5(tmp6[22]).PauseIcon;
    }
    const obj11 = { children: items1 };
    obj12 = { size: "md", color: tmp12(ref[9]).colors.REDESIGN_BUTTON_TERTIARY_TEXT };
    items4[1] = closure_11(Button2, obj10);
    items2[2] = closure_12(tmp14, obj8);
    items1[1] = closure_12(tmp14, obj3);
    return closure_12(tmp10, obj11);
  }
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
const authStore3 = createStyles(obj);
let result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/VibingWumpusModal.tsx");

export default function VibingWumpusModal() {
  let obj2;
  const obj = { screens: obj2, initialRouteName: "VIBING_WUMPUS" };
  obj2 = {
    VIBING_WUMPUS: {
      title: "",
      fullscreen: true,
      headerShown: false,
      render() {
        return closure_1_11(VibingWumpusScreen, {});
      }
    }
  };
  return unpackModuleId(Navigator.Navigator, obj);
};
export { VibingWumpusScreen };
