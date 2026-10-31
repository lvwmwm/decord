// Module ID: 14205
// Function ID: 14206
// Name: ChannelSafeAreaBottomAnimated
// Dependencies: [19, 17, 21, 11238, 11250, 5095, 14206, 11248, 2]

// Module 14205 (ChannelSafeAreaBottomAnimated)
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import useChannelSafeAreaHeightSharedValue from "useChannelSafeAreaHeightSharedValue" /* 11238 */;
import useIsChannelFullyOpenDefault from "useIsChannelFullyOpen" /* 11248 */;
import useChannelSafeAreaBottomStylesDefault from "useChannelSafeAreaBottomStyles" /* 11250 */;
import MobileRTCV2Experiment from "MobileRTCV2Experiment" /* 14206 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

const useChannelSafeAreaHeightSharedValueDefault = useChannelSafeAreaHeightSharedValue;

let c3;
let closure_4;
let tmp;
const ReanimatedRexportDefault = tmp(5095);
({ StyleSheet: c3, View: closure_4 } = react_native);
const jsx = Fragment.jsx;
const __initData = { code: "function ChannelSafeAreaBottomAnimatedAndroidTsx1(){const{heightSharedValue}=this.__closure;return{height:heightSharedValue.get()};}" };
const memoResult = react.memo(function ChannelSafeAreaBottom(channelId) {
  channelId = channelId.channelId;
  const tmp3 = useChannelSafeAreaHeightSharedValueDefault();
  let closure_0 = tmp3;
  const tmp4 = useChannelSafeAreaBottomStylesDefault(channelId);
  let obj = ReanimatedRexport;
  const fn = function n() {
    const obj = { height: closure_0.get() };
    return obj;
  };
  fn.__closure = { heightSharedValue: tmp3 };
  fn.__workletHash = 6491350126069;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj2 = MobileRTCV2Experiment;
  const isMobileRTCV2Enabled = obj2.useIsMobileRTCV2Enabled("ChannelSafeAreaBottom");
  const tmp7 = useIsChannelFullyOpenDefault();
  useChannelSafeAreaHeightSharedValue;
  if (isMobileRTCV2Enabled) {
    let tmp13;
    if (!tmp7) {
      const items = [_false.absoluteFill, tmp4];
      tmp13 = <React3 style={{ height: tmp9 }}>{null}</React3>;
      const obj4 = { height: tmp9 };
    }
    return tmp13;
  }
  const items1 = [_false.absoluteFill, tmp4];
  const View = ReanimatedRexportDefault.View;
  tmp13 = <View style={animatedStyle}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottomAnimated.android.tsx");

export default memoResult;
