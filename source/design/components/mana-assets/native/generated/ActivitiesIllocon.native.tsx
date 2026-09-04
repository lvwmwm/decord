// Module ID: 5690
// Function ID: 5691
// Name: ActivitiesIllocon
// Dependencies: [21, 5542, 5691, 2]
// Exports: ActivitiesIllocon

// Module 5690 (ActivitiesIllocon)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import preloadDefault from "preload" /* 5542 */;
import metadataDefault from "metadata" /* 5691 */;

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("design/components/mana-assets/native/generated/ActivitiesIllocon.native.tsx");

export const ActivitiesIllocon = function ActivitiesIllocon(size) {
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
