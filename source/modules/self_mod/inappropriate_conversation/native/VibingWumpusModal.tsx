// Module ID: 10138
// Function ID: 78462
// Name: VibingWumpusScreen
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 10138 (VibingWumpusScreen)
import closure_3 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import closure_7 from "__exportStarResult1";
import { VIBING_WUMPUS_MODAL_KEY } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import { AnalyticEvents } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

class VibingWumpusScreen {
  constructor() {
    tmp = closure_15();
    tmp2 = closure_3(importAll.useState(false), 2);
    first = tmp2[0];
    arg1 = first;
    closure_1 = tmp2[1];
    ref = importAll.useRef(null);
    dependencyMap = ref;
    obj = require("__exportStarResult1");
    items = [];
    items[0] = closure_7;
    stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
    closure_3 = stateFromStores;
    effect = importAll.useEffect(() => {
      const first = new Date();
      let obj = first(ref[11]);
      const result = obj.playVibingWumpusMusic();
      const date = new Date();
      obj = { source: constants2.INAPPROPRIATE_CONVERSATION };
      callback(ref[12]).track(constants3.VIBING_WUMPUS_VIEWED, obj);
      return () => {
        let obj = callback(closure_2[12]);
        obj = {};
        const date = new Date();
        const time = date.getTime();
        obj.duration_open_ms = time - date.getTime();
        obj.source = constants.INAPPROPRIATE_CONVERSATION;
        obj.track(constants2.VIBING_WUMPUS_CLOSED, obj);
        const result = date(closure_2[11]).stopVibingWumpusMusic();
      };
    }, []);
    obj = {};
    obj1 = { source: require("__exportStarResult1"), style: tmp.rings };
    tmp7 = jsxs;
    tmp8 = Fragment;
    items1 = [, ];
    items1[0] = jsx(Image, obj1);
    obj2 = { style: tmp.container };
    tmp9 = jsxs;
    tmp10 = View;
    tmp11 = jsx;
    obj3 = {};
    tmp12 = require("__exportStarResult1");
    obj3.source = require("__exportStarResult1");
    obj3.ref = ref;
    obj3.autoPlay = !stateFromStores;
    obj3.loop = true;
    obj3.style = tmp.wumpus;
    num = undefined;
    if (stateFromStores) {
      num = 0.8;
    }
    obj3.progress = num;
    items2 = [, , ];
    items2[0] = tmp11(tmp12, obj3);
    obj4 = { style: tmp.warningText };
    obj5 = { style: tmp.takeoverHeader };
    intl = require("__exportStarResult1").intl;
    obj5.children = intl.string(require("__exportStarResult1").t.L4ifkZ);
    items3 = [, ];
    items3[0] = jsx(require("__exportStarResult1").Text, obj5);
    obj6 = { variant: "text-md/medium", style: tmp.takeoverDescription };
    intl2 = require("__exportStarResult1").intl;
    obj6.children = intl2.string(require("__exportStarResult1").t.R8LCMZ);
    items3[1] = jsx(require("__exportStarResult1").Text, obj6);
    obj4.children = items3;
    items2[1] = jsxs(View, obj4);
    obj7 = { style: tmp.ctaContainer };
    tmp13 = jsxs;
    tmp14 = View;
    obj8 = { left: false, startAndEndHeight: false, transform: false, topOffset: false };
    intl3 = require("__exportStarResult1").intl;
    obj8.text = intl3.string(require("__exportStarResult1").t.8eKkaf);
    obj8.onPress = function onPress() {
      let obj = callback(ref[12]);
      obj = { action: constants.BACK_TO_CONVERSATION };
      obj.track(constants3.VIBING_WUMPUS_ACTION, obj);
      callback(ref[19]).popWithKey(closure_8);
    };
    items4 = [, ];
    items4[0] = jsx(require("__exportStarResult1").Button, obj8);
    tmp15 = jsx;
    obj9 = { left: "SpoilerIcon", startAndEndHeight: "png", transform: true, topOffset: "/assets/design/components/Icon/native/redesign/generated/images" };
    intl4 = require("__exportStarResult1").intl;
    string = intl4.string;
    t = require("__exportStarResult1").t;
    if (first) {
      stringResult = string(t.RscU7I);
    } else {
      stringResult = string(t.ZcgDJX);
    }
    obj9.text = stringResult;
    obj9.onPress = function onPress() {
      let obj = first(ref[11]);
      if (first) {
        const result = obj.playVibingWumpusMusic();
        obj = { action: constants.PLAY };
        callback(tmp[12]).track(constants3.VIBING_WUMPUS_ACTION, obj);
        const obj4 = callback(tmp[12]);
      } else {
        const result1 = obj.pauseVibingWumpusMusic();
        obj = { action: constants.PAUSE };
        callback(tmp[12]).track(constants3.VIBING_WUMPUS_ACTION, obj);
        const obj2 = callback(tmp[12]);
      }
      if (!stateFromStores) {
        if (first) {
          const current = ref.current;
          if (null != current) {
            current.resume();
          }
        }
        callback(!first);
      }
      if (!stateFromStores) {
        if (!first) {
          const current2 = ref.current;
          if (null != current2) {
            current2.pause();
          }
        }
      }
    };
    tmp18 = arg1;
    tmp19 = dependencyMap;
    tmp17 = jsx;
    if (first) {
      num3 = 20;
      PauseIcon = require("__exportStarResult1").PlayIcon;
    } else {
      num2 = 21;
      PauseIcon = require("__exportStarResult1").PauseIcon;
    }
    obj10 = { size: "md", color: require("__exportStarResult1").colors.REDESIGN_BUTTON_TERTIARY_TEXT };
    obj9.icon = tmp17(PauseIcon, obj10);
    items4[1] = tmp15(require("__exportStarResult1").Button, obj9);
    obj7.children = items4;
    items2[2] = tmp13(tmp14, obj7);
    obj2.children = items2;
    items1[1] = tmp9(tmp10, obj2);
    obj.children = items1;
    return tmp7(tmp8, obj);
  }
}
({ Image: closure_5, View: closure_6 } = __exportStarResult1);
({ VibingWumpusAction: closure_9, VibingWumpusSource: closure_10 } = __exportStarResult1);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = __exportStarResult1);
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { padding: require("__exportStarResult1").space.PX_32, gap: require("__exportStarResult1").space.PX_16 };
obj.container = obj;
obj.warningText = { marginBottom: require("__exportStarResult1").space.PX_16, gap: require("__exportStarResult1").space.PX_4 };
const obj1 = { marginBottom: require("__exportStarResult1").space.PX_16, gap: require("__exportStarResult1").space.PX_4 };
obj.ctaContainer = { gap: require("__exportStarResult1").space.PX_16 };
obj.takeoverHeader = { textAlign: "center" };
obj.takeoverDescription = { textAlign: "center" };
obj.wumpus = { height: 187 };
obj.rings = { "Bool(false)": 0, "Bool(false)": 4, "Bool(false)": 4, "Bool(false)": "eye L" };
let closure_15 = obj.createStyles(obj);
const result = __exportStarResult1.fileFinishedImporting("modules/self_mod/inappropriate_conversation/native/VibingWumpusModal.tsx");

export default function VibingWumpusModal() {
  const VIBING_WUMPUS = {
    <string:1366689890>: "r",
    <string:89313878>: "snapToOffsets",
    <string:1104131009>: "soundsByRow",
    render() {
      return callback(closure_16, {});
    }
  };
  return callback2(arg1(dependencyMap[22]).Navigator, { screens: { VIBING_WUMPUS }, initialRouteName: "VIBING_WUMPUS" });
};
export { VibingWumpusScreen };
