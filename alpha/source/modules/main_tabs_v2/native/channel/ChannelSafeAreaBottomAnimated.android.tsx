// Module ID: 14431
// Function ID: 14432
// Name: ChannelSafeAreaBottomAnimated
// Dependencies: [19, 17, 21, 11425, 11437, 1652, 14432, 11435, 2]

// Module 14431 (ChannelSafeAreaBottomAnimated)
import Fragment from "Fragment" /* 21 */;
import _mod1652 from "module_1652" /* 1652 */;
import useChannelSafeAreaHeightSharedValue from "useChannelSafeAreaHeightSharedValue" /* 11425 */;
import useIsChannelFullyOpenDefault from "useIsChannelFullyOpen" /* 11435 */;
import useChannelSafeAreaBottomStylesDefault from "useChannelSafeAreaBottomStyles" /* 11437 */;
import MobileRTCV2Experiment from "MobileRTCV2Experiment" /* 14432 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

const useChannelSafeAreaHeightSharedValueDefault = useChannelSafeAreaHeightSharedValue;

let c3;
let closure_4;
({ StyleSheet: c3, View: closure_4 } = react_native);
const jsx = Fragment.jsx;
let closure_6 = { code: "(function ChannelSafeAreaBottomAnimatedAndroidTsx1(){let[heightSharedValue]=this.__closure;return{height:heightSharedValue.get()};})" };
const memoResult = react.memo(function ChannelSafeAreaBottom(channelId) {
  let tmp6;
  let tmp7;
  channelId = channelId.channelId;
  const tmp3 = useChannelSafeAreaHeightSharedValueDefault();
  const tmp4 = useChannelSafeAreaBottomStylesDefault(channelId);
  let obj = _mod1652;
  const items = [closure_6, tmp3];
  let c0;
  [tmp6, tmp7] = items;
  class ChannelSafeAreaBottomAnimatedAndroidTsx1 {
    constructor() {
      obj = { height: closure_0.get() };
      return obj;
    }
  }
  const items1 = [tmp7];
  ChannelSafeAreaBottomAnimatedAndroidTsx1.__closure = items1;
  ChannelSafeAreaBottomAnimatedAndroidTsx1.__workletHash = 14690382113580;
  ChannelSafeAreaBottomAnimatedAndroidTsx1.__initData = tmp6;
  const animatedStyle = obj.useAnimatedStyle(ChannelSafeAreaBottomAnimatedAndroidTsx1);
  const tmp5Result = MobileRTCV2Experiment;
  const isMobileRTCV2Enabled = tmp5Result.useIsMobileRTCV2Enabled("ChannelSafeAreaBottom");
  const tmp10 = useIsChannelFullyOpenDefault();
  useChannelSafeAreaHeightSharedValue;
  if (isMobileRTCV2Enabled) {
    let tmp16;
    if (!tmp10) {
      const items2 = [_false.absoluteFill, tmp4];
      tmp16 = <React3 style={{ height: tmp12 }}>{null}</React3>;
      const obj3 = { height: tmp12 };
    }
    return tmp16;
  }
  const items3 = [_false.absoluteFill, tmp4];
  const View = tmp(1652).View;
  tmp16 = <View style={animatedStyle}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottomAnimated.android.tsx");

export default memoResult;
