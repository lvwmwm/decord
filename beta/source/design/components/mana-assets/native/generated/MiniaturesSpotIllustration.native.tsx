// Module ID: 15900
// Function ID: 15901
// Name: MiniaturesSpotIllustration
// Dependencies: [21, 5899, 15901, 2]
// Exports: MiniaturesSpotIllustration

// Module 15900 (MiniaturesSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5899 */;
import _modDef15901 from "module_15901" /* 15901 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/MiniaturesSpotIllustration.native.tsx");

export const MiniaturesSpotIllustration = function MiniaturesSpotIllustration(width) {
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
  const obj2 = { uri: _modDef15901 };
  FastImageDefault;
  size = { width: num * num3, height: num2 * num3 };
  const items = [size];
  return <tmp fadeDuration={0} source={obj2} style={items} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
};
