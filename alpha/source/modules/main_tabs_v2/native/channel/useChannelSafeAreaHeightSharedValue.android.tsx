// Module ID: 12007
// Function ID: 12008
// Name: useChannelSafeAreaHeightSharedValue
// Dependencies: [19, 1630, 5902, 575, 12008, 12012, 12014, 5503, 12015, 1655, 12016, 12011, 5939, 12017, 1628, 2]
// Exports: default, useChannelSafeAreaRestingHeight

// Module 12007 (useChannelSafeAreaHeightSharedValue)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import useToken from "useToken" /* 5902 */;
import spring_spring from "spring/spring" /* 5939 */;
import VoicePanelDockLayout from "VoicePanelDockLayout" /* 12008 */;
import VoicePanelSheetMorph from "VoicePanelSheetMorph" /* 12017 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set;

let closure_4 = { code: "(function useChannelSafeAreaHeightSharedValueAndroidTsx1(){let[dockHeightValue,chatInputSpaceBottom,keyboardOpenOrOpening,keyboardWillOpenSharedValue,keyboardOpenedHeight,insets,keyboardTypeSharedValue,KeyboardTypes,customKeyboardSheetHeightSV]=this.__closure;const dockSpace=dockHeightValue.get();function resolveBottom(bottom){return Math.max(bottom,chatInputSpaceBottom,dockSpace);}if(keyboardOpenOrOpening.get()||keyboardWillOpenSharedValue.get()){const systemKeyboardHeight=keyboardOpenedHeight.get();if(systemKeyboardHeight<=0){return resolveBottom(insets.get().bottom);}return systemKeyboardHeight;}if(keyboardTypeSharedValue.get()===KeyboardTypes.SYSTEM){return resolveBottom(insets.get().bottom);}return customKeyboardSheetHeightSV.get();})" };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/useChannelSafeAreaHeightSharedValue.android.tsx");

export default function useChannelSafeAreaHeightSharedValue() {
  let channelDockHeight;
  let isChannelFullyOpen;
  let keyboardOpenOrOpening;
  let keyboardOpenedHeight;
  let sharedValue1;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  const tmp = sharedValue1(isChannelFullyOpen[5])();
  ({ keyboardOpenOrOpening, keyboardOpenedHeight } = sharedValue1(isChannelFullyOpen[6])());
  const tmp2 = sharedValue1(isChannelFullyOpen[6])();
  let obj = channelDockHeight(isChannelFullyOpen[7]);
  const keyboardTypeSharedValue = obj.useKeyboardTypeSharedValue();
  const obj2 = channelDockHeight(isChannelFullyOpen[7]);
  const keyboardWillOpenSharedValue = obj2.useKeyboardWillOpenSharedValue();
  const minimum = sharedValue1(isChannelFullyOpen[8])().minimum;
  const obj3 = channelDockHeight(isChannelFullyOpen[9]);
  const sharedValue = obj3.useSharedValue(minimum);
  let result = sharedValue.set(minimum);
  const obj5 = channelDockHeight(isChannelFullyOpen[2]);
  const token = obj5.useToken(sharedValue1(isChannelFullyOpen[3]).modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM);
  const obj6 = channelDockHeight(isChannelFullyOpen[4]);
  channelDockHeight = obj6.useChannelDockHeight();
  const obj7 = channelDockHeight(isChannelFullyOpen[9]);
  sharedValue1 = obj7.useSharedValue(channelDockHeight);
  const obj8 = channelDockHeight(isChannelFullyOpen[10]);
  isChannelFullyOpen = obj8.getIsChannelFullyOpen(react.useContext(sharedValue1(isChannelFullyOpen[11])));
  const items = [channelDockHeight, sharedValue1, isChannelFullyOpen];
  const effect = react.useEffect(() => {
    let withSpringResult;
    set = sharedValue1.set;
    if (isChannelFullyOpen) {
      const obj = spring_spring;
      withSpringResult = obj.withSpring(channelDockHeight, VoicePanelSheetMorph.DOCK_SPACE_SPRING_CONFIG);
    } else {
      withSpringResult = channelDockHeight;
    }
    const result = set(withSpringResult);
  }, items);
  const items1 = [closure_4, sharedValue1, token, keyboardOpenOrOpening, keyboardWillOpenSharedValue, keyboardOpenedHeight, tmp, keyboardTypeSharedValue, , ];
  const useDerivedValue = channelDockHeight(isChannelFullyOpen[9]).useDerivedValue;
  const tmp11 = channelDockHeight(isChannelFullyOpen[9]);
  items1[8] = channelDockHeight(isChannelFullyOpen[14]).KeyboardTypes;
  items1[9] = sharedValue;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items1;
  function useChannelSafeAreaHeightSharedValueAndroidTsx1() {
    const value = _undefined.get();
    if (!_undefined2.get()) {
      if (!_undefined3.get()) {
        let bound;
        if (_undefined6.get() === _undefined7.SYSTEM) {
          const _Math = Math;
          bound = Math.max(_undefined5.get().bottom, c1, value);
        } else {
          bound = _undefined8.get();
        }
        return bound;
      }
    }
    let value2 = _undefined4.get();
    if (value2 <= 0) {
      const _Math2 = Math;
      value2 = Math.max(_undefined5.get().bottom, c1, value);
    }
    return value2;
  }
  const items2 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21];
  useChannelSafeAreaHeightSharedValueAndroidTsx1.__closure = items2;
  useChannelSafeAreaHeightSharedValueAndroidTsx1.__workletHash = 15573495853475;
  useChannelSafeAreaHeightSharedValueAndroidTsx1.__initData = tmp12;
  return useDerivedValue(useChannelSafeAreaHeightSharedValueAndroidTsx1);
};
export function useChannelSafeAreaRestingHeight() {
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM);
  const obj2 = VoicePanelDockLayout;
  return Math.max(bottom, token, obj2.useChannelDockHeight());
}
