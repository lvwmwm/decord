// Module ID: 14967
// Function ID: 14968
// Name: ChannelSafeAreaBottomAnimated
// Dependencies: [19, 17, 21, 12007, 1655, 12018, 12016, 14573, 2]

// Module 14967 (ChannelSafeAreaBottomAnimated)
import Fragment from "Fragment" /* 21 */;
import _mod1655 from "module_1655" /* 1655 */;
import useChannelSafeAreaHeightSharedValue from "useChannelSafeAreaHeightSharedValue" /* 12007 */;
import useIsChannelFullyOpenDefault from "useIsChannelFullyOpen" /* 12016 */;
import useChannelSafeAreaBottomStylesDefault from "useChannelSafeAreaBottomStyles" /* 12018 */;
import MobileRTCV2Experiment from "MobileRTCV2Experiment" /* 14573 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

const _modDef1655 = _mod1655;
const useChannelSafeAreaHeightSharedValueDefault = useChannelSafeAreaHeightSharedValue;

let c3;
let closure_4;
function useChannelSafeAreaAnimatedStyles() {
  let tmp2;
  let tmp3;
  const tmp = useChannelSafeAreaHeightSharedValueDefault();
  let obj = _mod1655;
  const items = [closure_6, tmp];
  let c0;
  [tmp2, tmp3] = items;
  class ChannelSafeAreaBottomAnimatedAndroidTsx1 {
    constructor() {
      obj = { height: closure_0.get() };
      return obj;
    }
  }
  const items1 = [tmp3];
  ChannelSafeAreaBottomAnimatedAndroidTsx1.__closure = items1;
  ChannelSafeAreaBottomAnimatedAndroidTsx1.__workletHash = 14690382113580;
  ChannelSafeAreaBottomAnimatedAndroidTsx1.__initData = tmp2;
  return obj.useAnimatedStyle(ChannelSafeAreaBottomAnimatedAndroidTsx1);
}
function KeyboardAwareChannelSafeAreaBottom(channelId) {
  const items = [_false.absoluteFill, useChannelSafeAreaBottomStylesDefault(channelId.channelId)];
  const tmp = useChannelSafeAreaBottomStylesDefault(channelId.channelId);
  const View = _modDef1655.View;
  return <View style={useChannelSafeAreaAnimatedStyles()}>{null}</View>;
}
function DockAwareChannelSafeAreaBottom(channelId) {
  let obj5;
  let tmp6Result;
  const tmp3 = useChannelSafeAreaBottomStylesDefault(channelId.channelId);
  const tmp4 = useChannelSafeAreaAnimatedStyles();
  const obj = useChannelSafeAreaHeightSharedValue;
  const channelSafeAreaRestingHeight = obj.useChannelSafeAreaRestingHeight();
  if (useIsChannelFullyOpenDefault()) {
    const items = [_false.absoluteFill, tmp3];
    const obj2 = { style: tmp4, children: null };
    const View = _modDef1655.View;
    tmp6Result = tmp6(View, obj2);
  } else {
    const obj4 = { style: obj5, children: null };
    const items1 = [_false.absoluteFill, tmp3];
    obj5 = { height: channelSafeAreaRestingHeight };
    tmp6Result = tmp6(React3, obj4);
  }
  return tmp6Result;
}
({ StyleSheet: c3, View: closure_4 } = react_native);
const jsx = Fragment.jsx;
let closure_6 = { code: "(function ChannelSafeAreaBottomAnimatedAndroidTsx1(){let[heightSharedValue]=this.__closure;return{height:heightSharedValue.get()};})" };
const memoResult = react.memo(function ChannelSafeAreaBottom(channelId) {
  channelId = channelId.channelId;
  const obj = MobileRTCV2Experiment;
  return jsx(obj.useIsMobileRTCV2Enabled("ChannelSafeAreaBottom") ? DockAwareChannelSafeAreaBottom : KeyboardAwareChannelSafeAreaBottom, { channelId });
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelSafeAreaBottomAnimated.android.tsx");

export default memoResult;
