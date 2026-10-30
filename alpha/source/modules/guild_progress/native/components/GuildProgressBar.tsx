// Module ID: 15763
// Function ID: 15764
// Name: GuildProgressBar
// Dependencies: [19, 17, 21, 5009, 13997, 575, 5090, 5249, 5252, 2]
// Exports: default

// Module 15763 (GuildProgressBar)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import timing from "timing" /* 5249 */;
import timingPresets from "timingPresets" /* 5252 */;
import GuildProgressUtils from "GuildProgressUtils" /* 13997 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let set;

let obj2;
let obj3;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, progress: obj3 };
obj2 = { position: "relative", backgroundColor: GuildProgressUtils.PROGRESS_BACKGROUND_COLOR, borderRadius: nativeDefault.radii.xs, height: 8 };
createStyles = createStyles.createStyles;
obj3 = { position: "absolute", height: 8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.xs };
let closure_6 = createStyles(obj);
const __initData = { code: "function GuildProgressBarTsx1(){const{percentWidth}=this.__closure;return{width:percentWidth.get()+\"%\"};}" };
let result = size.fileFinishedImporting("modules/guild_progress/native/components/GuildProgressBar.tsx");

export default function GuildProgressBar(percent) {
  percent = percent.percent;
  const style = percent.style;
  const tmp = closure_6();
  let obj = percent(5090);
  const sharedValue = obj.useSharedValue(0);
  const items = [percent, sharedValue];
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    const obj = timing;
    const result = set(obj.withTiming(percent, timingPresets.timingSlow));
  }, items);
  const fn = function h() {
    const obj = { width: "" + sharedValue.get() + "%" };
    return obj;
  };
  fn.__closure = { percentWidth: sharedValue };
  fn.__workletHash = 14122394499539;
  fn.__initData = __initData;
  const items1 = [tmp.wrapper, style];
  const obj2 = percent(5090);
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const items2 = [tmp.progress, animatedStyle];
  return <View style={items1}>{null}</View>;
};
