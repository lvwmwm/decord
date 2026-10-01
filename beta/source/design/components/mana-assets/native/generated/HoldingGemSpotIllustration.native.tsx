// Module ID: 13168
// Function ID: 13169
// Name: HoldingGemSpotIllustration
// Dependencies: [21, 5899, 13169, 2]
// Exports: HoldingGemSpotIllustration

// Module 13168 (HoldingGemSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5899 */;
import _modDef13169 from "module_13169" /* 13169 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/HoldingGemSpotIllustration.native.tsx");

export const HoldingGemSpotIllustration = function HoldingGemSpotIllustration(width) {
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
    num2 = 192;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  const obj2 = { uri: _modDef13169 };
  FastImageDefault;
  size = { width: num * num3, height: num2 * num3 };
  const items = [size];
  return <tmp fadeDuration={0} source={obj2} style={items} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
};
