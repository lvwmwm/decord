// Module ID: 11910
// Function ID: 11911
// Name: VolumeSlider
// Dependencies: [19, 17, 5763, 21, 1376, 5009, 575, 5591, 11911, 8843, 5904, 1114, 8665, 2]
// Exports: default

// Module 11910 (VolumeSlider)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import useToken2 from "useToken" /* 5591 */;
import Constants from "Constants" /* 5763 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 5904 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 8665 */;
import VoiceXIcon from "VoiceXIcon" /* 11911 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let hasOwnProperty;
let metroRequire;
let tmp8;
const _modDef8843 = tmp8(8843);
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
  const tmp8Result = _modDef8843;
  const tmp10 = View;
  tmp5Result = PerceptualVolumeUtils;
  const tmp9 = closure_6;
  if (accessibilityLabel == null) {
    const intl = tmp5(1114).intl;
    accessibilityLabel = intl.string(tmp5(1114).t.xPHVBs);
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
