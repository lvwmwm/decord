// Module ID: 17067
// Function ID: 17068
// Name: DisguiseSpotIllustration
// Dependencies: [21, 5899, 17068, 2]
// Exports: DisguiseSpotIllustration

// Module 17067 (DisguiseSpotIllustration)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5899 */;
import _modDef17068 from "module_17068" /* 17068 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let size = size_mod;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/DisguiseSpotIllustration.native.tsx");

export const DisguiseSpotIllustration = function DisguiseSpotIllustration(width) {
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
  const obj2 = { uri: _modDef17068 };
  FastImageDefault;
  size = { width: num * num3, height: num2 * num3 };
  const items = [size];
  return <tmp fadeDuration={0} source={obj2} style={items} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
};
