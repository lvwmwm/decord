// Module ID: 12869
// Function ID: 98340
// Name: GuildProgressBar
// Dependencies: []
// Exports: default

// Module 12869 (GuildProgressBar)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { position: "relative", backgroundColor: arg1(dependencyMap[4]).PROGRESS_BACKGROUND_COLOR, borderRadius: importDefault(dependencyMap[5]).radii.xs, height: 8 };
obj.wrapper = obj;
const obj1 = { flex: false, justifyContent: false, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND, borderRadius: importDefault(dependencyMap[5]).radii.xs };
obj.progress = obj1;
let closure_6 = obj.createStyles(obj);
let closure_7 = { code: "function GuildProgressBarTsx1(){const{percentWidth}=this.__closure;return{width:percentWidth.get()+\"%\"};}" };
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/guild_progress/native/components/GuildProgressBar.tsx");

export default function GuildProgressBar(percent) {
  percent = percent.percent;
  const arg1 = percent;
  const tmp = callback();
  let obj = arg1(dependencyMap[6]);
  const sharedValue = obj.useSharedValue(0);
  const importDefault = sharedValue;
  const items = [percent, sharedValue];
  const effect = React.useEffect(() => {
    const result = sharedValue.set(percent(closure_2[7]).withTiming(percent, percent(closure_2[8]).timingSlow));
  }, items);
  const fn = function h() {
    return { width: "" + sharedValue.get() + "%" };
  };
  fn.__closure = { percentWidth: sharedValue };
  fn.__workletHash = 14122394499539;
  fn.__initData = closure_7;
  obj = { style: items1 };
  const items1 = [tmp.wrapper, percent.style];
  const animatedStyle = arg1(dependencyMap[6]).useAnimatedStyle(fn);
  const items2 = [tmp.progress, animatedStyle];
  obj.children = jsx(importDefault(dependencyMap[6]).View, { style: items2 });
  return <View {...obj} />;
};
