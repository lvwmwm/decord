// Module ID: 15596
// Function ID: 120233
// Name: BurstReactionAnimationContainerInner
// Dependencies: [57, 31, 27, 1345, 33, 4130, 689, 7026, 4099, 4100, 686, 3991, 4131, 9642, 1334, 1273, 7068, 4126, 1212, 3842, 2]
// Exports: default

// Module 15596 (BurstReactionAnimationContainerInner)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let StyleSheet;
let closure_10;
let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
function BurstReactionAnimationContainerInner() {
  function handleComponentFinish() {
    if (false === ref.current) {
      dependencyMap(null);
    }
  }
  function handleAnimationFinish(arg0, arg1) {
    callback2(false);
    closure_5.current = false;
    if (null != arg0) {
      arg0();
    }
  }
  const _require = _createForOfIteratorHelperLoose();
  let tmp = null;
  const tmp2 = first1(React.useState(null), 2);
  const first = tmp2[0];
  const dependencyMap = tmp2[1];
  const tmp4 = first1(React.useState(false), 2);
  first1 = tmp4[0];
  React = tmp4[1];
  let closure_5 = React.useRef(false);
  const effect = React.useEffect(() => {
    function handleEffectReceived(channelId) {
      outer1_2({ channelId: channelId.channelId, emoji: channelId.emoji, messageId: channelId.messageId });
      outer1_4(true);
      outer1_5.current = true;
      const result = handleEffectReceived(4099).triggerHapticFeedback(first(4100).IMPACT_HEAVY);
    }
    const subscription = first(686).subscribe("BURST_REACTION_EFFECT_SEND", handleEffectReceived);
    return () => {
      first(686).unsubscribe("BURST_REACTION_EFFECT_SEND", handleEffectReceived);
    };
  }, []);
  let obj = _require(3991);
  let fn = function y() {
    if (null == first) {
      let obj = { opacity: 0 };
      let tmp6 = obj;
    } else {
      obj = {};
      const tmp10 = callback(4131);
      const withTiming = tmp10.withTiming;
      const obj1 = { duration: 300 };
      if (first1) {
        obj.opacity = withTiming(1, obj1);
        tmp6 = obj;
      } else {
        const fn = function n(arg0) {
          if (arg0) {
            callback(table[11]).runOnJS(outer1_7)();
            const obj = callback(table[11]);
          }
        };
        obj = { runOnJS: tmp8(3991).runOnJS, handleComponentFinish };
        fn.__closure = obj;
        fn.__workletHash = 9326347209552;
        fn.__initData = outer1_13;
        obj.opacity = withTiming(0, obj1, "respect-motion-settings", fn);
        tmp6 = obj;
      }
      tmp8 = callback;
    }
    return tmp6;
  };
  obj = { animationData: first, showAnimation: first1, withTiming: _require(4131).withTiming, runOnJS: _require(3991).runOnJS, handleComponentFinish };
  fn.__closure = obj;
  fn.__workletHash = 12044515783370;
  fn.__initData = closure_12;
  let closure_6 = obj.useAnimatedStyle(fn);
  if (null != first) {
    obj = {};
    let items = [_require(1334).DismissibleContent.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS];
    obj.contentTypes = items;
    obj.children = function children(markAsDismissed) {
      markAsDismissed = markAsDismissed.markAsDismissed;
      let obj = { style: markAsDismissed.fill };
      obj = { style: items };
      items = [markAsDismissed.fill, closure_6];
      obj = {
        activeOpacity: callback(7026).BACKDROP_OPACITY,
        onPress() {
          outer1_8(() => outer1_0(handleComponentFinish.UNKNOWN));
        },
        style: markAsDismissed.fill
      };
      const items1 = [handleAnimationFinish(closure_6, { style: markAsDismissed.background }), , ];
      const obj2 = { style: markAsDismissed.fill };
      let tmp7 = null;
      if (first1) {
        const obj3 = { isFullscreen: true, channelId: null, messageId: null, emoji: null, loop: false, withFadeOut: false };
        ({ channelId: obj6.channelId, messageId: obj6.messageId, emoji: obj6.emoji } = first);
        obj3.onComplete = function onComplete() {
          outer1_8();
        };
        tmp7 = handleAnimationFinish(first(7068), obj3);
      }
      obj2.children = tmp7;
      items1[1] = handleAnimationFinish(closure_6, obj2);
      let tmp12 = markAsDismissed.visibleContent === callback(1334).DismissibleContent.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS;
      if (tmp12) {
        const obj4 = {};
        const obj5 = { style: markAsDismissed.dismissTextContainer, variant: "text-sm/medium" };
        const intl = callback(1212).intl;
        obj5.children = intl.string(callback(1212).t.QpPMih);
        const items2 = [handleAnimationFinish(callback(4126).Text, obj5), ];
        const obj6 = { style: markAsDismissed.dismissTextBackground };
        items2[1] = handleAnimationFinish(closure_6, obj6);
        obj4.children = items2;
        tmp12 = outer1_10(outer1_9, obj4);
      }
      items1[2] = tmp12;
      obj.children = items1;
      obj.children = outer1_10(closure_5, obj);
      obj.children = handleAnimationFinish(first(3991).View, obj);
      return handleAnimationFinish(callback(1273).OverlayView, obj);
    };
    tmp = handleAnimationFinish(first(9642), obj);
    let tmp10 = first(9642);
  }
  return tmp;
}
({ TouchableOpacity: closure_5, View: closure_6, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["backgroundColor"] = require("_createForOfIteratorHelperLoose").colors.BLACK;
_createForOfIteratorHelperLoose["opacity"] = require("_generateAnimationSource").BACKDROP_OPACITY;
_createForOfIteratorHelperLoose.background = _createForOfIteratorHelperLoose;
let obj1 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj1["flex"] = 1;
obj1["alignItems"] = "center";
obj1["justifyContent"] = "center";
_createForOfIteratorHelperLoose.fill = obj1;
_createForOfIteratorHelperLoose.dismissTextContainer = { position: "absolute", bottom: 48, zIndex: 1 };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGHEST, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, position: "absolute", bottom: -600, height: 700, width: 700 };
_createForOfIteratorHelperLoose.dismissTextBackground = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_12 = { code: "function BurstReactionAnimationContainerTsx1(){const{animationData,showAnimation,withTiming,runOnJS,handleComponentFinish}=this.__closure;if(animationData==null){return{opacity:0};}if(!showAnimation){return{opacity:withTiming(0,{duration:300},'respect-motion-settings',function(finished){if(finished)runOnJS(handleComponentFinish)();})};}return{opacity:withTiming(1,{duration:300})};}" };
let closure_13 = { code: "function BurstReactionAnimationContainerTsx2(finished){const{runOnJS,handleComponentFinish}=this.__closure;if(finished)runOnJS(handleComponentFinish)();}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimationContainer.tsx");

export default function BurstReactionAnimationContainer() {
  const obj = { theme: importDefault(689).themes.DARKER, children: callback(BurstReactionAnimationContainerInner, {}) };
  return callback(require(3842) /* ManaContext */.ThemeContextProvider, obj);
};
