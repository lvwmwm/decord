// Module ID: 10706
// Function ID: 83371
// Name: VolumeSlider
// Dependencies: []
// Exports: default

// Module 10706 (VolumeSlider)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = arg1(dependencyMap[2]).MAX_EMBEDDED_VOLUME_PERCEPTUAL;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
let num = 16;
if (obj.isAndroid()) {
  num = 0;
}
const tmp3 = arg1(dependencyMap[3]);
obj = { marginRight: num };
obj = { marginLeft: num };
let closure_7 = arg1(dependencyMap[5]).createStyles({ volumerSlider: { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F" }, leftIcon: obj, rightIcon: obj, volumerSliderNative: {} });
const obj2 = arg1(dependencyMap[5]);
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
  let obj = { 0: "Text", 0: "resizeMode", 9223372036854775807: "from", 0: "Array", 0: "isArray", 0: "braintreemasterpasslanding" };
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
