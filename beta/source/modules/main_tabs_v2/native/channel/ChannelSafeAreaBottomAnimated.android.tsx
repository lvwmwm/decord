// Module ID: 12141
// Function ID: 12142
// Name: ChannelSafeAreaBottomAnimated
// Dependencies: [19, 17, 21, 10894, 10899, 4566, 2]

// Module 12141 (ChannelSafeAreaBottomAnimated)
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import useChannelSafeAreaHeightSharedValueDefault from "useChannelSafeAreaHeightSharedValue" /* 10894 */;
import useChannelSafeAreaBottomStylesDefault from "useChannelSafeAreaBottomStyles" /* 10899 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;

let c3;
let closure_4;
({ StyleSheet: c3, View: closure_4 } = react_native);
const jsx = Fragment.jsx;
const __initData = { code: "function ChannelSafeAreaBottomAnimatedAndroidTsx1(){const{heightSharedValue}=this.__closure;return{height:heightSharedValue.get()};}" };
const memoResult = react.memo(function ChannelSafeAreaBottom(channelId) {
  channelId = channelId.channelId;
  const tmp = useChannelSafeAreaHeightSharedValueDefault();
  let closure_0 = tmp;
  const tmp2 = useChannelSafeAreaBottomStylesDefault(channelId);
  let obj = ReanimatedRexport;
  const fn = function n() {
    const obj = { height: closure_0.get() };
    return obj;
  };
  fn.__closure = { heightSharedValue: tmp };
  fn.__workletHash = 6491350126069;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const items = [absoluteFill.absoluteFill, tmp2];
  const View = ReanimatedRexportDefault.View;
  return <View style={animatedStyle}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottomAnimated.android.tsx");

export default memoResult;
