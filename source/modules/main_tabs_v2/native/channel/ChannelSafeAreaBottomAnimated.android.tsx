// Module ID: 11665
// Function ID: 90448
// Dependencies: []

// Module 11665
const importAllResult = importAll(dependencyMap[0]);
({ StyleSheet: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
let closure_6 = { code: "function ChannelSafeAreaBottomAnimatedAndroidTsx1(){const{heightSharedValue}=this.__closure;return{height:heightSharedValue.get()};}" };
const tmp2 = arg1(dependencyMap[1]);
const memoResult = importAllResult.memo(function ChannelSafeAreaBottom(channelId) {
  const tmp = importDefault(dependencyMap[3])();
  const arg1 = tmp;
  let obj = arg1(dependencyMap[5]);
  const fn = function n() {
    return { height: tmp.get() };
  };
  fn.__closure = { heightSharedValue: tmp };
  fn.__workletHash = 6491350126069;
  fn.__initData = closure_6;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: animatedStyle };
  const items = [absoluteFill.absoluteFill, importDefault(dependencyMap[4])(channelId.channelId)];
  obj.children = <closure_4 style={items} />;
  return jsx(importDefault(dependencyMap[5]).View, obj);
});
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottomAnimated.android.tsx");

export default memoResult;
