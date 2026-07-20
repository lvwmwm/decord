// Module ID: 10699
// Function ID: 83324
// Name: VolumeSlider
// Dependencies: [3539992610, 905969705, 33554434, 1946157056, 4169, 10708, 566, 2, 122227, 2741504, 512, 77886464, 93585408, 37093376]
// Exports: default

// Module 10699 (VolumeSlider)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "set";

importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = arg1(dependencyMap[2]).MAX_EMBEDDED_VOLUME_PERCEPTUAL;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let num = 16;
if (_isNativeReflectConstruct.isAndroid()) {
  num = 0;
}
const tmp3 = arg1(dependencyMap[3]);
_isNativeReflectConstruct = { marginRight: num };
_isNativeReflectConstruct = { marginLeft: num };
let closure_7 = require("set").createStyles({ volumerSlider: { -9223372036854775808: true, filter: true }, leftIcon: _isNativeReflectConstruct, rightIcon: _isNativeReflectConstruct, volumerSliderNative: {} });
const result = arg1(dependencyMap[13]).fileFinishedImporting("components_native/common/VolumeSlider.tsx");

export default function VolumeSlider(maxTrackTintColor) {
  let maxVolume;
  let onResponderGrant;
  let value;
  let PRIMARY_400 = maxTrackTintColor.maxTrackTintColor;
  if (PRIMARY_400 === undefined) {
    PRIMARY_400 = importDefault(dependencyMap[6]).unsafe_rawColors.PRIMARY_400;
  }
  ({ maxVolume, value } = maxTrackTintColor);
  if (maxVolume === undefined) {
    maxVolume = closure_4;
  }
  ({ onValueChange: closure_0, onResponderGrant } = maxTrackTintColor);
  let obj = { "Bool(false)": null, "Bool(false)": "LOCAL_PAYMENT_START_PAYMENT_MISSING_REQUIRED_OPTION", "Bool(false)": "Missing required option for startPayment.", "Bool(false)": null, "Bool(false)": "LOCAL_PAYMENT_START_PAYMENT_DEFERRED_PAYMENT_FAILED", "Bool(false)": "LocalPayment startPayment deferred payment failed." };
  Object.setPrototypeOf(null);
  const merged = Object.assign(maxTrackTintColor, obj);
  const tmp5 = callback2();
  let obj1 = arg1(dependencyMap[7]);
  let token = obj1.useToken(importDefault(dependencyMap[6]).colors.BACKGROUND_BRAND);
  const minTrackColor = merged.minTrackColor;
  if (null != minTrackColor) {
    token = minTrackColor;
  }
  obj = { style: items };
  const items = [tmp5.volumerSlider, maxTrackTintColor.style];
  obj = { style: tmp5.leftIcon };
  const items1 = [callback(arg1(dependencyMap[8]).VoiceXIcon, obj), , ];
  obj1 = { style: tmp5.volumerSliderNative };
  const tmp10 = importDefault(dependencyMap[9]);
  const tmp7 = closure_6;
  const tmp8 = View;
  const tmp9 = callback;
  obj1.value = arg1(dependencyMap[10]).amplitudeToPerceptual(value);
  obj1.minimumValue = 0;
  obj1.maximumValue = maxVolume;
  obj1.minimumTrackTintColor = token;
  obj1.maximumTrackTintColor = PRIMARY_400;
  const intl = arg1(dependencyMap[11]).intl;
  obj1.accessibilityLabel = intl.string(arg1(dependencyMap[11]).t.xPHVBs);
  obj1.onValueChange = function onValueChange(arg0) {
    return callback(callback(closure_2[10]).perceptualToAmplitude(arg0));
  };
  if (null == onResponderGrant) {
    let fn;
    if (obj7.isAndroid()) {
      fn = () => true;
    }
    onResponderGrant = fn;
    const obj7 = arg1(dependencyMap[4]);
  }
  obj1.onResponderGrant = onResponderGrant;
  items1[1] = tmp9(tmp10, obj1);
  items1[2] = callback(arg1(dependencyMap[12]).VoiceNormalIcon, { style: tmp5.rightIcon });
  obj.children = items1;
  return tmp7(tmp8, obj);
};
