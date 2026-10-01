// Module ID: 6004
// Function ID: 6005
// Name: TrafficConeSpotIllustration
// Dependencies: [21, 5899, 6005, 2]
// Exports: TrafficConeSpotIllustration

// Module 6004 (TrafficConeSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5899 */;
import _modDef6005 from "module_6005" /* 6005 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/TrafficConeSpotIllustration.native.tsx");

export const TrafficConeSpotIllustration = function TrafficConeSpotIllustration(width) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 288;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 162;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  const obj2 = { uri: _modDef6005 };
  FastImageDefault;
  size = { width: num * num3, height: num2 * num3 };
  const items = [size];
  return <tmp fadeDuration={0} source={obj2} style={items} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
};
