// Module ID: 10398
// Function ID: 10399
// Name: VolumeSlider
// Dependencies: [19, 17, 5855, 21, 10399, 6004, 10402, 7167, 1112, 2]
// Exports: default

// Module 10398 (VolumeSlider)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 5855 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 6004 */;
import Slider2 from "Slider" /* 10399 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function formatVolume(arg0) {
  return "" + Math.round(arg0) + "%";
}
const View = react_native.View;
let closure_3 = Constants.MAX_EMBEDDED_VOLUME_PERCEPTUAL;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("components_native/common/VolumeSlider.tsx");

export default function VolumeSlider(maxVolume) {
  let accessibilityLabel;
  let obj3;
  let style;
  let value;
  maxVolume = maxVolume.maxVolume;
  ({ style, value } = maxVolume);
  if (maxVolume === undefined) {
    maxVolume = closure_3;
  }
  ({ onValueChange: require, accessibilityLabel } = maxVolume);
  ({
    value: obj3.amplitudeToPerceptual(value),
    maxValue: maxVolume,
    onChange(arg0) {
      const obj = PerceptualVolumeUtils;
      return require(obj.perceptualToAmplitude(arg0));
    },
    formatValue: formatVolume,
    startIcon: null,
    endIcon: null,
    accessibilityLabel
  });
  const Slider = Slider2.Slider;
  obj3 = PerceptualVolumeUtils;
  if (accessibilityLabel == null) {
    const intl = tmp3(1112).intl;
    accessibilityLabel = intl.string(tmp3(1112).t.xPHVBs);
  }
  return <tmp2 style={style}>{null}</tmp2>;
};
