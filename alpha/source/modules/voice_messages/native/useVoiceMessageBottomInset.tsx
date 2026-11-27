// Module ID: 13223
// Function ID: 13224
// Name: useVoiceMessageBottomInset
// Dependencies: [19, 5618, 7049, 11812, 1654, 5644, 11820, 2]
// Exports: default

// Module 13223 (useVoiceMessageBottomInset)
import spring_spring from "spring/spring" /* 5644 */;
import VoicePanelSheetMorph from "VoicePanelSheetMorph" /* 11820 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set;

let closure_4 = { code: "(function useVoiceMessageBottomInsetTsx1(){let[animatedInsetsBottom,animatedDockHeight]=this.__closure;return Math.max(animatedInsetsBottom.get(),animatedDockHeight.get());})" };
let result = size.fileFinishedImporting("modules/voice_messages/native/useVoiceMessageBottomInset.tsx");

export default function useVoiceMessageBottomInset() {
  let channelDockHeight;
  let sharedValue;
  let tmp5;
  let tmp6;
  let tmp7;
  const insets = sharedValue(5618)({ includeCustomKeyboardHeight: true, includeKeyboardHeight: true }).insets;
  const tmp = sharedValue(7049)(insets.bottom);
  let obj = channelDockHeight(11812);
  channelDockHeight = obj.useChannelDockHeight();
  const obj2 = channelDockHeight(1654);
  sharedValue = obj2.useSharedValue(channelDockHeight);
  const items = [sharedValue, channelDockHeight];
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    const obj = spring_spring;
    const result = set(obj.withSpring(channelDockHeight, VoicePanelSheetMorph.DOCK_SPACE_SPRING_CONFIG));
  }, items);
  const items1 = [closure_4, tmp, sharedValue];
  let c0;
  let c1;
  [tmp5, tmp6, tmp7] = items1;
  function useVoiceMessageBottomInsetTsx1() {
    const value = _undefined.get();
    return max(value, _undefined2.get());
  }
  const items2 = [tmp6, tmp7];
  useVoiceMessageBottomInsetTsx1.__closure = items2;
  useVoiceMessageBottomInsetTsx1.__workletHash = 9835465598919;
  useVoiceMessageBottomInsetTsx1.__initData = tmp5;
  const obj3 = channelDockHeight(1654);
  const obj4 = { bottomInset: obj3.useDerivedValue(useVoiceMessageBottomInsetTsx1), targetBottomInset: Math.max(insets.bottom, channelDockHeight) };
  return obj4;
};
