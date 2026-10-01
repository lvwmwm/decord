// Module ID: 16735
// Function ID: 16736
// Name: BurstReactionAnimationContainer
// Dependencies: [32, 19, 17, 2042, 21, 4836, 576, 7203, 4801, 4802, 573, 4566, 4837, 10088, 2029, 1177, 7245, 4832, 1115, 4540, 2]
// Exports: default

// Module 16735 (BurstReactionAnimationContainer)
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import native from "native" /* 4540 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import burst_reactions_BurstReactionEffectUtils from "burst_reactions/BurstReactionEffectUtils" /* 7203 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let StyleSheet;
let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let size;
function BurstReactionAnimationContainerInner() {
  let closure_0;
  let closure_2;
  let closure_4;
  let first1;
  let items;
  function handleComponentFinish() {
    if (false === ref.current) {
      closure_2(null);
    }
  }
  _require = closure_11();
  let tmp = first1(react.useState(null), 2);
  const animationData = tmp[0];
  dependencyMap = tmp[1];
  const tmp3 = first1(react.useState(false), 2);
  first1 = tmp3[0];
  react = tmp3[1];
  const ref = react.useRef(false);
  const effect = react.useEffect(() => {
    function handleEffectReceived(channelId) {
      const obj = { channelId: channelId.channelId, emoji: channelId.emoji, messageId: channelId.messageId };
      closure_1_2(obj);
      closure_1_4(true);
      ref.current = true;
      const obj2 = handleEffectReceived(closure_2[8]);
      const result = obj2.triggerHapticFeedback(first(closure_2[9]).IMPACT_HEAVY);
    }
    let obj = first(closure_2[10]);
    const subscription = obj.subscribe("BURST_REACTION_EFFECT_SEND", handleEffectReceived);
    return () => {
      const obj = DispatcherDefault;
      obj.unsubscribe("BURST_REACTION_EFFECT_SEND", handleEffectReceived);
    };
  }, []);
  let tmp7 = dependencyMap;
  const tmp6 = _require;
  let obj = require("ReanimatedRexport");
  let fn = function y() {
    let obj2;
    if (null == first) {
      obj2 = { opacity: 0 };
    } else {
      const obj3 = { opacity: null };
      const tmp11 = timing;
      const withTiming = tmp11.withTiming;
      const obj4 = { duration: 300 };
      if (first1) {
        obj3.opacity = withTiming(1, obj4);
        obj2 = obj3;
      } else {
        const fn = function n(arg0) {
          const tmp = arg0;
          if (tmp) {
            const obj = closure_0(closure_2[11]);
            obj.runOnJS(handleComponentFinish)();
          }
        };
        let obj = { runOnJS: ReanimatedRexport.runOnJS, handleComponentFinish };
        let tmp = require;
        fn.__closure = obj;
        fn.__workletHash = 9326347209552;
        fn.__initData = __initData;
        obj3.opacity = withTiming(0, obj4, "respect-motion-settings", fn);
        obj2 = obj3;
      }
    }
    return obj2;
  };
  let obj2 = { animationData, showAnimation: first1, withTiming: require("timing").withTiming, runOnJS: require("ReanimatedRexport").runOnJS, handleComponentFinish };
  fn.__closure = obj2;
  fn.__workletHash = 12044515783370;
  fn.__initData = __initData;
  let closure_7 = obj.useAnimatedStyle(fn);
  let tmp8 = null;
  if (null != animationData) {
    let obj3 = {
      contentTypes: items,
      children(markAsDismissed) {
          let View;
          let intl;
          let items;
          let items1;
          let items2;
          let obj2;
          let obj3;
          let tmp7;
          let tmpResult;
          markAsDismissed = markAsDismissed.markAsDismissed;
          let tmp = closure_1_8;
          const visibleContent = markAsDismissed.visibleContent;
          const obj = { style: markAsDismissed.fill, children: tmp(View, obj2) };
          const OverlayView = closure_0(closure_2[15]).OverlayView;
          obj2 = { style: items, children: closure_1_10(tmp7, obj3) };
          items = [markAsDismissed.fill, closure_7];
          obj3 = {
            activeOpacity: closure_0(closure_2[7]).BACKDROP_OPACITY,
            onPress() {
              closure_4(false);
              ref.current = false;
              markAsDismissed(ContentDismissActionType.UNKNOWN);
            },
            style: markAsDismissed.fill,
            children: items1
          };
          View = first(closure_2[11]).View;
          items1 = [, , ];
          const obj4 = { style: markAsDismissed.background };
          items1[0] = closure_1_8(handleComponentFinish, obj4);
          const obj5 = { style: markAsDismissed.fill, children: tmpResult };
          tmpResult = null;
          const tmp5 = first;
          tmp7 = ref;
          if (first1) {
            const obj7 = {
              isFullscreen: true,
              channelId: null,
              messageId: null,
              emoji: null,
              loop: false,
              withFadeOut: false,
              onComplete(arg0) {
                  const tmp = arg0;
                  if (!tmp) {
                    closure_1_4(false);
                    ref.current = false;
                  }
                }
            };
            ({ channelId: obj6.channelId, messageId: obj6.messageId, emoji: obj6.emoji } = first);
            tmpResult = tmp(tmp5(tmp3[16]), obj7);
          }
          items1[1] = tmp(handleComponentFinish, obj5);
          let tmp6Result = visibleContent === tmp2(tmp3[14]).DismissibleContent.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS;
          if (tmp6Result) {
            const obj8 = { children: items2 };
            const obj9 = { style: markAsDismissed.dismissTextContainer, variant: "text-sm/medium", children: intl.string(closure_0(closure_2[18]).t.QpPMih) };
            const Text = tmp2(tmp3[17]).Text;
            intl = tmp2(tmp3[18]).intl;
            items2 = [tmp(Text, obj9), ];
            const obj17 = { style: markAsDismissed.dismissTextBackground };
            items2[1] = tmp(handleComponentFinish, obj17);
            tmp6Result = tmp6(closure_1_9, obj8);
          }
          items1[2] = tmp6Result;
          return tmp(OverlayView, obj);
        }
    };
    let tmp11 = animationData(10088);
    items = [tmp6(2029).DismissibleContent.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS];
    tmp8 = closure_8(tmp11, obj3);
  }
  return tmp8;
}
let react = react_mod;
({ TouchableOpacity: hasOwnProperty, View: metroRequire, StyleSheet } = react_native);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { background: obj2, fill: obj3, dismissTextContainer: { position: "absolute", bottom: 48, zIndex: 1 }, dismissTextBackground: size };
obj2 = { backgroundColor: nativeDefault.colors.BLACK, opacity: burst_reactions_BurstReactionEffectUtils.BACKDROP_OPACITY };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { flex: 1, alignItems: "center", justifyContent: "center" };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderRadius: nativeDefault.radii.round, position: "absolute", bottom: -600, height: 700, width: 700 };
let closure_11 = createStyles(obj);
const __initData = { code: "function BurstReactionAnimationContainerTsx1(){const{animationData,showAnimation,withTiming,runOnJS,handleComponentFinish}=this.__closure;if(animationData==null){return{opacity:0};}if(!showAnimation){return{opacity:withTiming(0,{duration:300},'respect-motion-settings',function(finished){if(finished)runOnJS(handleComponentFinish)();})};}return{opacity:withTiming(1,{duration:300})};}" };
let closure_13 = { code: "function BurstReactionAnimationContainerTsx2(finished){const{runOnJS,handleComponentFinish}=this.__closure;if(finished)runOnJS(handleComponentFinish)();}" };
size = size_mod;
let result = size.fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimationContainer.tsx");

export default function BurstReactionAnimationContainer() {
  const obj = { theme: nativeDefault.themes.DARK, children: metroImportAll(BurstReactionAnimationContainerInner, {}) };
  const ThemeContextProvider = native.ThemeContextProvider;
  return metroImportAll(ThemeContextProvider, obj);
};
