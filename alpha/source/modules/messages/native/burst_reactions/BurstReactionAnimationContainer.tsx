// Module ID: 19785
// Function ID: 19786
// Name: BurstReactionAnimationContainer
// Dependencies: [32, 19, 17, 5152, 21, 5306, 575, 5264, 5554, 5555, 572, 1655, 5548, 1708, 10568, 5139, 1187, 5921, 5929, 1113, 5377, 2]
// Exports: default

// Module 19785 (BurstReactionAnimationContainer)
import DispatcherDefault from "Dispatcher" /* 572 */;
import nativeDefault from "native" /* 575 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5152 */;
import burst_reactions_BurstReactionEffectUtils from "burst_reactions/BurstReactionEffectUtils" /* 5264 */;
import native from "native" /* 5377 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, tmp2, tmp4;

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
  let items2;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp9;
  _require = closure_11();
  let tmp = first1(react.useState(null), 2);
  const first = tmp[0];
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
  let items = [closure_13, first, first1, , , , ];
  const useAnimatedStyle = require("module_1655").useAnimatedStyle;
  const tmp8 = require("module_1655");
  items[3] = require("timing/timing").withTiming;
  items[4] = closure_12;
  items[5] = require("module_1708").scheduleOnRN;
  items[6] = function handleComponentFinish() {
    if (false === ref.current) {
      closure_2(null);
    }
  };
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items;
  class BurstReactionAnimationContainerTsx2 {
    constructor() {
      let obj;
      let tmp5;
      let tmp6;
      let tmp7;
      if (null == c0) {
        obj = { opacity: 0 };
      } else {
        const obj2 = { opacity: null };
        const obj3 = { duration: 300 };
        if (c1) {
          obj2.opacity = _undefined2(1, obj3);
          obj = obj2;
        } else {
          let tmp = c3;
          const items = [c3, , ];
          items[1] = c4;
          items[2] = c5;
          [tmp5, tmp6, tmp7] = items;
          class BurstReactionAnimationContainerTsx1 {
            constructor(arg0) {
              tmp = arg0;
              if (tmp) {
                tmp2 = closure_0;
                tmp3 = closure_1;
                tmp4 = closure_0(closure_1);
              }
              return;
            }
          }
          const items1 = [tmp6, tmp7];
          BurstReactionAnimationContainerTsx1.__closure = items1;
          BurstReactionAnimationContainerTsx1.__workletHash = 14162489280171;
          BurstReactionAnimationContainerTsx1.__initData = tmp5;
          obj2.opacity = _undefined2(0, obj3, "respect-motion-settings", BurstReactionAnimationContainerTsx1);
          obj = obj2;
        }
      }
      return obj;
    }
  }
  let items1 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15];
  BurstReactionAnimationContainerTsx2.__closure = items1;
  BurstReactionAnimationContainerTsx2.__workletHash = 8115368107310;
  BurstReactionAnimationContainerTsx2.__initData = tmp9;
  let closure_6 = useAnimatedStyle(BurstReactionAnimationContainerTsx2);
  let tmp16 = null;
  if (null != first) {
    let obj = {
      contentTypes: items2,
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
          const OverlayView = closure_0(closure_2[16]).OverlayView;
          obj2 = { style: items, children: closure_1_10(tmp7, obj3) };
          items = [markAsDismissed.fill, closure_6];
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
          items1[0] = closure_1_8(closure_6, obj4);
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
            tmpResult = tmp(tmp5(tmp3[17]), obj7);
          }
          items1[1] = tmp(closure_6, obj5);
          let tmp6Result = visibleContent === tmp2(tmp3[15]).DismissibleContent.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS;
          if (tmp6Result) {
            const obj8 = { children: items2 };
            const obj9 = { style: markAsDismissed.dismissTextContainer, variant: "body-sm/medium", children: intl.string(closure_0(closure_2[19]).t.QpPMih) };
            const Text = tmp2(tmp3[18]).Text;
            intl = tmp2(tmp3[19]).intl;
            items2 = [tmp(Text, obj9), ];
            const obj17 = { style: markAsDismissed.dismissTextBackground };
            items2[1] = tmp(closure_6, obj17);
            tmp6Result = tmp6(closure_1_9, obj8);
          }
          items1[2] = tmp6Result;
          return tmp(OverlayView, obj);
        }
    };
    items2 = [];
    const tmp19 = first(10568);
    items2[0] = tmp6(5139).DismissibleContent.SUPER_REACTIONS_MOBILE_FULLSCREEN_TAP_TO_DISMISS;
    tmp16 = closure_8(tmp19, obj);
  }
  return tmp16;
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
let closure_12 = { code: "(function BurstReactionAnimationContainerTsx1(finished){let[scheduleOnRN,handleComponentFinish]=this.__closure;if(finished)scheduleOnRN(handleComponentFinish);})" };
let closure_13 = { code: "(function BurstReactionAnimationContainerTsx2(){let[animationData,showAnimation,withTiming,_worklet_14162489280171_init_data,scheduleOnRN,handleComponentFinish]=this.__closure;if(animationData==null){return{opacity:0};}if(!showAnimation){return{opacity:withTiming(0,{duration:300},'respect-motion-settings',function BurstReactionAnimationContainerTsx1Factory([_worklet_14162489280171_init_data,scheduleOnRN,handleComponentFinish]){const BurstReactionAnimationContainerTsx1=function(finished){if(finished)scheduleOnRN(handleComponentFinish);};BurstReactionAnimationContainerTsx1.__closure=[scheduleOnRN,handleComponentFinish];BurstReactionAnimationContainerTsx1.__workletHash=14162489280171;BurstReactionAnimationContainerTsx1.__initData=_worklet_14162489280171_init_data;return BurstReactionAnimationContainerTsx1;}([_worklet_14162489280171_init_data,scheduleOnRN,handleComponentFinish]))};}return{opacity:withTiming(1,{duration:300})};})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimationContainer.tsx");

export default function BurstReactionAnimationContainer() {
  const obj = { theme: nativeDefault.themes.DARK, children: metroImportAll(BurstReactionAnimationContainerInner, {}) };
  const ThemeContextProvider = native.ThemeContextProvider;
  return metroImportAll(ThemeContextProvider, obj);
};
