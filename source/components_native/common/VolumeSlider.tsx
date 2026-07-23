// Module ID: 10716
// Function ID: 83420
// Name: VolumeSlider
// Dependencies: [31, 27, 4191, 33, 477, 4130, 689, 3834, 10717, 7523, 4580, 1212, 4658, 2]
// Exports: default

// Module 10716 (VolumeSlider)
import "result";
import { View } from "get ActivityIndicator";
import { MAX_EMBEDDED_VOLUME_PERCEPTUAL as closure_4 } from "DesktopSources";
import jsxProd from "jsxProd";
import set from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "DesktopSources";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let num = 16;
if (set.isAndroid()) {
  num = 0;
}
set = { marginRight: num };
set = { marginLeft: num };
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ volumerSlider: { flexDirection: "row", alignItems: "center" }, leftIcon: set, rightIcon: set, volumerSliderNative: { flex: 1, marginVertical: -10, backgroundColor: "transparent" } });
const result = set.fileFinishedImporting("components_native/common/VolumeSlider.tsx");

export default function VolumeSlider(maxTrackTintColor) {
  let maxVolume;
  let onResponderGrant;
  let require;
  let value;
  let PRIMARY_400 = maxTrackTintColor.maxTrackTintColor;
  if (PRIMARY_400 === undefined) {
    PRIMARY_400 = importDefault(689).unsafe_rawColors.PRIMARY_400;
  }
  ({ maxVolume, value } = maxTrackTintColor);
  if (maxVolume === undefined) {
    maxVolume = closure_4;
  }
  ({ onValueChange: require, onResponderGrant } = maxTrackTintColor);
  let obj = { style: 0, maxTrackTintColor: 0, value: 0, maxVolume: 0, onValueChange: 0, onResponderGrant: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(maxTrackTintColor, obj);
  const tmp5 = callback2();
  let obj1 = require(3834) /* map */;
  let token = obj1.useToken(importDefault(689).colors.BACKGROUND_BRAND);
  const minTrackColor = merged.minTrackColor;
  if (null != minTrackColor) {
    token = minTrackColor;
  }
  obj = { style: items };
  items = [tmp5.volumerSlider, maxTrackTintColor.style];
  obj = { style: tmp5.leftIcon };
  const items1 = [callback(require(10717) /* VoiceXIcon */.VoiceXIcon, obj), , ];
  obj1 = { style: tmp5.volumerSliderNative };
  const tmp10 = importDefault(7523);
  const tmp7 = closure_6;
  const tmp8 = View;
  const tmp9 = callback;
  obj1.value = require(4580) /* perceptualToAmplitude */.amplitudeToPerceptual(value);
  obj1.minimumValue = 0;
  obj1.maximumValue = maxVolume;
  obj1.minimumTrackTintColor = token;
  obj1.maximumTrackTintColor = PRIMARY_400;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.xPHVBs);
  obj1.onValueChange = function onValueChange(arg0) {
    return callback(outer1_0(outer1_2[10]).perceptualToAmplitude(arg0));
  };
  if (null == onResponderGrant) {
    let fn;
    if (obj7.isAndroid()) {
      fn = () => true;
    }
    onResponderGrant = fn;
    obj7 = require(477) /* set */;
  }
  obj1.onResponderGrant = onResponderGrant;
  items1[1] = tmp9(tmp10, obj1);
  items1[2] = callback(require(4658) /* VoiceNormalIcon */.VoiceNormalIcon, { style: tmp5.rightIcon });
  obj.children = items1;
  return tmp7(tmp8, obj);
};
