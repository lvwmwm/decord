// Module ID: 19844
// Function ID: 19845
// Name: SoundboardRecordingWaveform
// Dependencies: [19, 17, 12743, 21, 4917, 575, 1653, 5518, 5519, 2]

// Module 19844 (SoundboardRecordingWaveform)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import spring_spring from "spring/spring" /* 5518 */;
import springPresets from "springPresets" /* 5519 */;
import VoiceMessageConstants from "VoiceMessageConstants" /* 12743 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4917 */;
import size from "module_2" /* 2 */;

let set;

let obj2;
const View = react_native.View;
const WAVEFORM_WAVE_MAX_VALUE = VoiceMessageConstants.WAVEFORM_WAVE_MAX_VALUE;
const jsx = Fragment.jsx;
let obj = { container: { flexDirection: "row", alignItems: "center" }, slot: { flex: 1, marginHorizontal: 1, alignItems: "center", justifyContent: "center" }, bar: obj2 };
obj2 = { alignSelf: "stretch", borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.MOBILE_VOICE_MESSAGE_RECORDING_WAVEFORM_BAR_BACKGROUND };
let closure_7 = createStyles.createStyles(obj);
let closure_8 = { code: "(function SoundboardRecordingWaveformTsx1(){let[height]=this.__closure;return{height:height.get()};})" };
let closure_9 = react.memo(function WaveformBar(level) {
  let tmp4;
  let tmp5;
  level = level.level;
  const maxHeight = level.maxHeight;
  let sharedValue;
  const tmp = closure_7();
  let obj = level(sharedValue[6]);
  const tmp2 = sharedValue;
  sharedValue = obj.useSharedValue(0);
  const items = [closure_8, sharedValue];
  let c0;
  [tmp4, tmp5] = items;
  const obj2 = level(sharedValue[6]);
  class SoundboardRecordingWaveformTsx1 {
    constructor() {
      const obj = { height: _undefined.get() };
      return obj;
    }
  }
  const items1 = [tmp5];
  SoundboardRecordingWaveformTsx1.__closure = items1;
  SoundboardRecordingWaveformTsx1.__workletHash = 14110970372869;
  SoundboardRecordingWaveformTsx1.__initData = tmp4;
  const items2 = [sharedValue, level, maxHeight];
  const animatedStyle = obj2.useAnimatedStyle(SoundboardRecordingWaveformTsx1);
  const effect = react.useEffect(() => {
    const bound = Math.max(2, level / WAVEFORM_WAVE_MAX_VALUE * maxHeight);
    set = sharedValue.set;
    const obj = spring_spring;
    const result = set(obj.withSpring(bound, springPresets.Reanimated3DefaultSpringConfig));
  }, items2);
  const items3 = [tmp.bar, animatedStyle];
  return jsx(maxHeight(tmp2[6]).View, { style: items3 });
});
const memoResult = react.memo(function SoundboardRecordingWaveform(slotCount) {
  let height;
  let require;
  ({ levels: require, height } = slotCount);
  slotCount = slotCount.slotCount;
  const tmp = closure_7();
  const slot = tmp;
  const items = [tmp.container, { height }];
  return <View style={items}>{Array.from({ length: slotCount }, (arg0, arg1) => {
    let tmp2Result = null;
    if (null != _require[arg1]) {
      const obj2 = { level: _require[arg1], maxHeight: height };
      tmp2Result = tmp2(closure_9, obj2);
    }
    return <tmp3 key={arg1} style={slot.slot}>{tmp2Result}</tmp3>;
  })}</View>;
});
let result = size.fileFinishedImporting("modules/soundboard/native/creation/SoundboardRecordingWaveform.tsx");

export default memoResult;
