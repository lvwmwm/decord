// Module ID: 4545
// Function ID: 39821
// Name: useShineEffectStyles
// Dependencies: []
// Exports: ButtonShine

// Module 4545 (useShineEffectStyles)
function useShineEffectStyles(width, variant) {
  variant = width;
  let obj = variant(dependencyMap[3]);
  const buttonTextColorStyles = obj.useButtonTextColorStyles(variant);
  let obj1 = importDefault(dependencyMap[4])(buttonTextColorStyles.color);
  const hexResult = obj1.alpha(0.1).hex();
  const enabled = React.useContext(variant(dependencyMap[5]).AccessibilityPreferencesContext).reducedMotion.enabled;
  const importDefault = enabled;
  const alphaResult = obj1.alpha(0.1);
  const fn = function o() {
    if (null == arg0) {
      let obj = {};
      obj = { translateX: -120 };
      const items = [obj];
      obj.transform = items;
      let tmp5 = obj;
    } else {
      let obj1 = {};
      let obj2 = {};
      if (enabled) {
        obj2.translateX = (arg0 - 56) / 2;
        const items1 = [obj2];
        obj1.transform = items1;
        tmp5 = obj1;
      } else {
        obj = arg0(closure_2[6]);
        obj1 = arg0(closure_2[6]);
        obj2 = arg0(closure_2[7]);
        const obj3 = { duration: 0 };
        let obj4 = arg0(closure_2[6]);
        const withTimingResult = obj2.withTiming(-120, obj3, "animate-always");
        obj4 = { duration: 2000 };
        obj2.translateX = obj.withRepeat(obj1.withSequence(withTimingResult, obj4.withDelay(750, arg0(closure_2[7]).withTiming(arg0 + 120, obj4, "animate-always"))), -1);
        const items2 = [obj2];
        obj1.transform = items2;
        tmp5 = obj1;
        const obj6 = arg0(closure_2[7]);
      }
    }
    return tmp5;
  };
  obj = { width, SHINE_OFFSCREEN_OFFSET: 120, useReducedMotion: enabled, SHINE_WIDTH: 56, withRepeat: variant(dependencyMap[6]).withRepeat, withSequence: variant(dependencyMap[6]).withSequence, withTiming: variant(dependencyMap[7]).withTiming, withDelay: variant(dependencyMap[6]).withDelay, SHINE_INITIAL_ANIMATION_DELAY: 750, SHINE_ANIMATION_DURATION: 2000 };
  fn.__closure = obj;
  fn.__workletHash = 15814138938406;
  fn.__initData = closure_6;
  obj = {};
  const animatedStyle = variant(dependencyMap[6]).useAnimatedStyle(fn);
  const obj4 = variant(dependencyMap[6]);
  obj1 = { DEVELOPER_PORTAL: null, DEVELOPER_PORTAL_GUILD_ANALYTICS: "\u{1F9D4}\u200D\u2640\uFE0F", DEVELOPER_PORTAL_TEAMS: true, DEVELOPER_PORTAL_EDIT_PAYOUTS: 13.1, DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY: 69, flex: null };
  const items = [{ rotate: "30deg" }];
  obj1.transform = items;
  obj1.backgroundColor = hexResult;
  const obj2 = { aze: false, azj: false, backgroundColor: hexResult };
  obj.shineStyles = variant(dependencyMap[8]).createStyles({ shineContainer: { previous: "ag", search: "createdBy", send: "proto", meet: "MUR" }, shine: obj1, shineInner: obj2 })();
  obj.shineAnimatedStyle = animatedStyle;
  return obj;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let closure_6 = { code: "function ButtonShineNativeTsx1(){const{width,SHINE_OFFSCREEN_OFFSET,useReducedMotion,SHINE_WIDTH,withRepeat,withSequence,withTiming,withDelay,SHINE_INITIAL_ANIMATION_DELAY,SHINE_ANIMATION_DURATION}=this.__closure;if(width==null){return{transform:[{translateX:-SHINE_OFFSCREEN_OFFSET}]};}if(useReducedMotion){const centerOffset=(width-SHINE_WIDTH)/2;return{transform:[{translateX:centerOffset}]};}return{transform:[{translateX:withRepeat(withSequence(withTiming(-SHINE_OFFSCREEN_OFFSET,{duration:0},'animate-always'),withDelay(SHINE_INITIAL_ANIMATION_DELAY,withTiming(width+SHINE_OFFSCREEN_OFFSET,{duration:SHINE_ANIMATION_DURATION},'animate-always'))),-1)}]};}" };
const result = arg1(dependencyMap[9]).fileFinishedImporting("design/components/Button/native/ButtonShine.native.tsx");

export { useShineEffectStyles };
export const ButtonShine = function ButtonShine(variant) {
  const tmp = callback(React.useState(null), 2);
  let closure_0 = tmp[1];
  const tmp2 = useShineEffectStyles(tmp[0], variant.variant);
  const shineStyles = tmp2.shineStyles;
  let obj = {
    onLayout(nativeEvent) {
      return callback(nativeEvent.nativeEvent.layout.width);
    },
    style: items
  };
  const items = [shineStyles.shineContainer, tmp2.shineAnimatedStyle];
  obj = { style: shineStyles.shine };
  obj = { style: shineStyles.shineInner };
  obj.children = jsx(importDefault(dependencyMap[6]).View, obj);
  obj.children = jsx(importDefault(dependencyMap[6]).View, obj);
  return jsx(importDefault(dependencyMap[6]).View, obj);
};
