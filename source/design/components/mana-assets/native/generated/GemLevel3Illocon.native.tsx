// Module ID: 6669
// Function ID: 6670
// Name: GemLevel3Illocon
// Dependencies: [21, 5493, 6670, 2]
// Exports: GemLevel3Illocon

// Module 6669 (GemLevel3Illocon)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import preloadDefault from "preload" /* 5493 */;
import metadataDefault from "metadata" /* 6670 */;

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("design/components/mana-assets/native/generated/GemLevel3Illocon.native.tsx");

export const GemLevel3Illocon = function GemLevel3Illocon(size) {
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  let obj = { fadeDuration: 0, source: null, style: null, accessible: null, accessibilityLabel: null, resizeMode: null };
  obj = { uri: metadataDefault };
  obj[1] = obj;
  const items = [{ width: num, height: num }];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(preloadDefault, { uri: metadataDefault });
};
