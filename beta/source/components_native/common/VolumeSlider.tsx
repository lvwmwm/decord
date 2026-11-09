// Module ID: 12115
// Function ID: 12116
// Name: VolumeSlider
// Dependencies: [19, 17, 5897, 21, 1377, 5140, 575, 5724, 12116, 8926, 6055, 1113, 8744, 2]
// Exports: default

// Module 12115 (VolumeSlider)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import useToken2 from "useToken" /* 5724 */;
import Constants from "Constants" /* 5897 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 6055 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 8744 */;
import VoiceXIcon from "VoiceXIcon" /* 12116 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let hasOwnProperty;
let metroRequire;
let tmp8;
const _modDef8926 = tmp8(8926);
const View = react_native.View;
let closure_4 = Constants.MAX_EMBEDDED_VOLUME_PERCEPTUAL;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let num = 16;
if (PlatformUtils.isAndroid()) {
  num = 0;
}
let obj = { volumerSlider: { flexDirection: "row", alignItems: "center" }, leftIcon: { marginRight: num }, rightIcon: { marginLeft: num }, volumerSliderNative: { flex: 1, marginVertical: -10, backgroundColor: "transparent" } };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("components_native/common/VolumeSlider.tsx");

export default function VolumeSlider(maxTrackTintColor) {
  let accessibilityLabel;
  let items;
  let items1;
  let maxVolume;
  let onResponderGrant;
  let tmp5Result;
  let value;
  let PRIMARY_400 = maxTrackTintColor.maxTrackTintColor;
  const style = maxTrackTintColor.style;
  if (PRIMARY_400 === undefined) {
    PRIMARY_400 = nativeDefault.unsafe_rawColors.PRIMARY_400;
  }
  ({ maxVolume, value } = maxTrackTintColor);
  if (maxVolume === undefined) {
    maxVolume = closure_4;
  }
  ({ onValueChange: require, onResponderGrant, accessibilityLabel } = maxTrackTintColor);
  const merged = Object.assign(maxTrackTintColor, Object.assign({ style: 0, maxTrackTintColor: 0, value: 0, maxVolume: 0, onValueChange: 0, onResponderGrant: 0, accessibilityLabel: 0 }));
  const tmp4 = closure_7();
  const useToken = useToken2.useToken;
  let minTrackColor = merged.minTrackColor;
  useToken2;
  if (minTrackColor == null) {
    minTrackColor = useToken(nativeDefault.colors.BACKGROUND_BRAND);
  }
  let obj = { style: items, children: items1 };
  items = [tmp4.volumerSlider, style];
  items1 = [, , ];
  const obj2 = { style: tmp4.leftIcon };
  items1[0] = closure_5(VoiceXIcon.VoiceXIcon, obj2);
  const obj3 = {
    style: tmp4.volumerSliderNative,
    value: tmp5Result.amplitudeToPerceptual(value),
    minimumValue: 0,
    maximumValue: maxVolume,
    minimumTrackTintColor: minTrackColor,
    maximumTrackTintColor: PRIMARY_400,
    accessibilityLabel,
    onValueChange(arg0) {
      const obj = PerceptualVolumeUtils;
      return require(obj.perceptualToAmplitude(arg0));
    },
    onResponderGrant
  };
  const tmp8Result = _modDef8926;
  const tmp10 = View;
  tmp5Result = PerceptualVolumeUtils;
  const tmp9 = closure_6;
  if (accessibilityLabel == null) {
    const intl = tmp5(1113).intl;
    accessibilityLabel = intl.string(tmp5(1113).t.xPHVBs);
  }
  if (onResponderGrant == null) {
    let fn;
    const tmp5Result2 = PlatformUtils;
    if (tmp5Result2.isAndroid()) {
      fn = () => true;
    }
    onResponderGrant = fn;
  }
  items1[1] = closure_5(tmp8Result, obj3);
  const obj4 = { style: tmp4.rightIcon };
  items1[2] = closure_5(VoiceNormalIcon.VoiceNormalIcon, obj4);
  return tmp9(tmp10, obj);
};
