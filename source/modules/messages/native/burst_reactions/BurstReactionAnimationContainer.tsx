// Module ID: 15468
// Function ID: 117977
// Name: BurstReactionAnimationContainerInner
// Dependencies: []
// Exports: default

// Module 15468 (BurstReactionAnimationContainerInner)
let StyleSheet;
function BurstReactionAnimationContainerInner() {
  function handleComponentFinish() {
    if (false === ref.current) {
      callback(null);
    }
  }
  const ContentDismissActionType = handleComponentFinish;
  function handleAnimationFinish(arg0, arg1) {
    callback2(false);
    closure_5.current = false;
    if (null != arg0) {
      arg0();
    }
  }
  const callback = callback4();
  let tmp = null;
  const tmp2 = callback2(React.useState(null), 2);
  const first = tmp2[0];
  const importDefault = first;
  let closure_2 = tmp2[1];
  const tmp4 = callback2(React.useState(false), 2);
  const first1 = tmp4[0];
  const callback2 = first1;
  const React = tmp4[1];
  let closure_5 = React.useRef(false);
  const effect = React.useEffect(() => {
    function handleEffectReceived(channelId) {
      callback2({ channelId: channelId.channelId, emoji: channelId.emoji, messageId: channelId.messageId });
      callback3(true);
      closure_5.current = true;
      const result = handleEffectReceived(callback2[8]).triggerHapticFeedback(callback(callback2[9]).IMPACT_HEAVY);
    }
    let closure_0 = handleEffectReceived;
    const subscription = first(closure_2[10]).subscribe("BURST_REACTION_EFFECT_SEND", handleEffectReceived);
    return () => {
      callback(closure_2[10]).unsubscribe("BURST_REACTION_EFFECT_SEND", handleEffectReceived);
    };
  }, []);
  let obj = callback(closure_2[11]);
  const fn = function y() {
    if (null == first) {
      let obj = { opacity: 0 };
      let tmp6 = obj;
    } else {
      obj = {};
      const tmp10 = lib(closure_2[12]);
      const withTiming = tmp10.withTiming;
      const obj1 = { duration: 300 };
      if (first1) {
        obj.opacity = withTiming(1, obj1);
        tmp6 = obj;
      } else {
        const fn = function n(arg0) {
          if (arg0) {
            callback(closure_2[11]).runOnJS(closure_7)();
            const obj = callback(closure_2[11]);
          }
        };
        obj = { runOnJS: tmp8(tmp9[11]).runOnJS, handleComponentFinish };
        fn.__closure = obj;
        fn.__workletHash = 9326347209552;
        fn.__initData = closure_13;
        obj.opacity = withTiming(0, obj1, "respect-motion-settings", fn);
        tmp6 = obj;
      }
      const tmp8 = lib;
      const tmp9 = closure_2;
    }
    return tmp6;
  };
  obj = { animationData: first, showAnimation: first1, withTiming: callback(closure_2[12]).withTiming, runOnJS: callback(closure_2[11]).runOnJS, handleComponentFinish };
  fn.__closure = obj;
  fn.__workletHash = 12044515783370;
  fn.__initData = closure_12;
  let closure_6 = obj.useAnimatedStyle(fn);
  if (null != first) {
    obj = {};
    const items = [callback(closure_2[14]).DismissibleContent.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS];
    obj.contentTypes = items;
    obj.children = function children(markAsDismissed) {
      const lib = markAsDismissed.markAsDismissed;
      let obj = { style: lib.fill };
      obj = { style: items };
      const items = [lib.fill, closure_6];
      obj = {
        activeOpacity: lib(closure_2[7]).BACKDROP_OPACITY,
        onPress() {
          callback(() => callback(constants.UNKNOWN));
        },
        style: lib.fill
      };
      const items1 = [handleAnimationFinish(closure_6, { style: lib.background }), , ];
      const obj2 = { style: lib.fill };
      let tmp7 = null;
      if (first1) {
        const obj3 = {};
        ({ channelId: obj6.channelId, messageId: obj6.messageId, emoji: obj6.emoji } = first);
        obj3.onComplete = function onComplete() {
          callback();
        };
        tmp7 = handleAnimationFinish(first(closure_2[16]), obj3);
      }
      obj2.children = tmp7;
      items1[1] = handleAnimationFinish(closure_6, obj2);
      let tmp12 = markAsDismissed.visibleContent === lib(closure_2[14]).DismissibleContent.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS;
      if (tmp12) {
        const obj4 = {};
        const obj5 = { style: lib.dismissTextContainer, variant: "text-sm/medium" };
        const intl = lib(closure_2[18]).intl;
        obj5.children = intl.string(lib(closure_2[18]).t.QpPMih);
        const items2 = [handleAnimationFinish(lib(closure_2[17]).Text, obj5), ];
        const obj6 = { style: lib.dismissTextBackground };
        items2[1] = handleAnimationFinish(closure_6, obj6);
        obj4.children = items2;
        tmp12 = callback3(closure_9, obj4);
      }
      items1[2] = tmp12;
      obj.children = items1;
      obj.children = callback3(closure_5, obj);
      obj.children = handleAnimationFinish(first(closure_2[11]).View, obj);
      return handleAnimationFinish(lib(closure_2[15]).OverlayView, obj);
    };
    tmp = handleAnimationFinish(importDefault(closure_2[13]), obj);
    const tmp10 = importDefault(closure_2[13]);
  }
  return tmp;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ TouchableOpacity: closure_5, View: closure_6, StyleSheet } = arg1(dependencyMap[2]));
const ContentDismissActionType = arg1(dependencyMap[3]).ContentDismissActionType;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["backgroundColor"] = importDefault(dependencyMap[6]).colors.BLACK;
obj["opacity"] = arg1(dependencyMap[7]).BACKDROP_OPACITY;
obj.background = obj;
const obj1 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj1["flex"] = 1;
obj1["alignItems"] = "center";
obj1["justifyContent"] = "center";
obj.fill = obj1;
obj.dismissTextContainer = {};
const obj2 = { "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGHEST, borderRadius: importDefault(dependencyMap[6]).radii.round };
obj.dismissTextBackground = obj2;
let closure_11 = obj.createStyles(obj);
let closure_12 = { code: "function BurstReactionAnimationContainerTsx1(){const{animationData,showAnimation,withTiming,runOnJS,handleComponentFinish}=this.__closure;if(animationData==null){return{opacity:0};}if(!showAnimation){return{opacity:withTiming(0,{duration:300},'respect-motion-settings',function(finished){if(finished)runOnJS(handleComponentFinish)();})};}return{opacity:withTiming(1,{duration:300})};}" };
let closure_13 = { code: "function BurstReactionAnimationContainerTsx2(finished){const{runOnJS,handleComponentFinish}=this.__closure;if(finished)runOnJS(handleComponentFinish)();}" };
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimationContainer.tsx");

export default function BurstReactionAnimationContainer() {
  const obj = { theme: importDefault(dependencyMap[6]).themes.DARKER, children: callback3(BurstReactionAnimationContainerInner, {}) };
  return callback3(arg1(dependencyMap[19]).ThemeContextProvider, obj);
};
