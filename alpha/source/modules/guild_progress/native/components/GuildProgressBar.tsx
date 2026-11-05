// Module ID: 16066
// Function ID: 16067
// Name: GuildProgressBar
// Dependencies: [19, 17, 21, 5143, 14278, 575, 1652, 5380, 5383, 2]
// Exports: default

// Module 16066 (GuildProgressBar)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import timing_timing from "timing/timing" /* 5380 */;
import timingPresets from "timingPresets" /* 5383 */;
import GuildProgressUtils from "GuildProgressUtils" /* 14278 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5143 */;
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
let closure_7 = { code: "(function GuildProgressBarTsx1(){let[percentWidth]=this.__closure;return{width:percentWidth.get()+\"%\"};})" };
let result = size.fileFinishedImporting("modules/guild_progress/native/components/GuildProgressBar.tsx");

export default function GuildProgressBar(percent) {
  let tmp5;
  let tmp6;
  percent = percent.percent;
  const style = percent.style;
  const tmp = closure_6();
  let obj = percent(1652);
  const sharedValue = obj.useSharedValue(0);
  const items = [percent, sharedValue];
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    const obj = timing_timing;
    const result = set(obj.withTiming(percent, timingPresets.timingSlow));
  }, items);
  const items1 = [closure_7, sharedValue];
  let c0;
  [tmp5, tmp6] = items1;
  const obj2 = percent(1652);
  class GuildProgressBarTsx1 {
    constructor() {
      const obj = { width: "" + _undefined.get() + "%" };
      return obj;
    }
  }
  const items2 = [tmp6];
  GuildProgressBarTsx1.__closure = items2;
  GuildProgressBarTsx1.__workletHash = 11414818338858;
  GuildProgressBarTsx1.__initData = tmp5;
  const items3 = [tmp.wrapper, style];
  const animatedStyle = obj2.useAnimatedStyle(GuildProgressBarTsx1);
  const items4 = [tmp.progress, animatedStyle];
  return <View style={items3}>{null}</View>;
};
