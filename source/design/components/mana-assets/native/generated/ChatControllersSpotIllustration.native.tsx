// Module ID: 6358
// Function ID: 6359
// Name: ChatControllersSpotIllustration
// Dependencies: [21, 5458, 6359, 2]
// Exports: ChatControllersSpotIllustration

// Module 6358 (ChatControllersSpotIllustration)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import preloadDefault from "preload" /* 5458 */;
import metadataDefault from "metadata" /* 6359 */;

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("design/components/mana-assets/native/generated/ChatControllersSpotIllustration.native.tsx");

export const ChatControllersSpotIllustration = function ChatControllersSpotIllustration(width) {
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
  let obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj = { uri: metadataDefault };
  obj[1] = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(preloadDefault, { width: num * num3, height: num2 * num3 });
};
