// Module ID: 10282
// Function ID: 10283
// Name: VolumeSlider
// Dependencies: [19, 17, 4813, 21, 1364, 4788, 576, 4489, 10283, 8581, 5259, 1115, 5351, 2]
// Exports: default

// Module 10282 (VolumeSlider)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4489 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 5259 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5351 */;
import _modDef8581 from "module_8581" /* 8581 */;
import VoiceXIcon from "VoiceXIcon" /* 10283 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let closure_4 = fn(4813).MAX_EMBEDDED_VOLUME_PERCEPTUAL;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const PlatformUtils = fn(1364);
let num = 16;
if (PlatformUtils.isAndroid()) {
  num = 0;
}
const createStyles = fn(4788);
let closure_7 = createStyles.createStyles({ volumerSlider: { flexDirection: "row", alignItems: "center" }, leftIcon: { marginRight: num }, rightIcon: { marginLeft: num }, volumerSliderNative: { flex: 1, marginVertical: -10, backgroundColor: "transparent" } });
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/VolumeSlider.tsx");

export default function VolumeSlider(maxTrackTintColor) {
  let PRIMARY_400 = maxTrackTintColor.maxTrackTintColor;
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
  let minTrackColor = merged.minTrackColor;
  if (minTrackColor == null) {
    minTrackColor = obj.useToken(nativeDefault.colors.BACKGROUND_BRAND);
  }
  const obj2 = { style: null, children: null };
  const items = [tmp4.volumerSlider, maxTrackTintColor.style];
  obj2.style = items;
  const items1 = [closure_5(VoiceXIcon.VoiceXIcon, { style: tmp4.leftIcon }), , ];
  const obj4 = { style: tmp4.volumerSliderNative, value: null, minimumValue: 0, maximumValue: null, minimumTrackTintColor: null, maximumTrackTintColor: null, accessibilityLabel: null, onValueChange: null, onResponderGrant: null };
  obj = useToken;
  const obj3 = { style: tmp4.leftIcon };
  const tmp8 = closure_6;
  const tmp9 = View;
  const tmp7Result = _modDef8581;
  obj4.value = PerceptualVolumeUtils.amplitudeToPerceptual(value);
  obj4.maximumValue = maxVolume;
  obj4.minimumTrackTintColor = minTrackColor;
  obj4.maximumTrackTintColor = PRIMARY_400;
  if (accessibilityLabel == null) {
    const intl = tmp5(1115).intl;
    accessibilityLabel = intl.string(tmp5(1115).t.xPHVBs);
  }
  obj4.accessibilityLabel = accessibilityLabel;
  obj4.onValueChange = function onValueChange(arg0) {
    return closure_1_0(PerceptualVolumeUtils.perceptualToAmplitude(arg0));
  };
  if (onResponderGrant == null) {
    let fn;
    if (tmp5Result2.isAndroid()) {
      fn = () => true;
    }
    onResponderGrant = fn;
    tmp5Result2 = tmp5(1364);
  }
  obj4.onResponderGrant = onResponderGrant;
  items1[1] = closure_5(tmp7Result, obj4);
  items1[2] = closure_5(VoiceNormalIcon.VoiceNormalIcon, { style: tmp4.rightIcon });
  obj2.children = items1;
  return tmp8(tmp9, obj2);
};
