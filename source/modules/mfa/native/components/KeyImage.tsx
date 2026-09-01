// Module ID: 14330
// Function ID: 14331
// Name: KeyImage
// Dependencies: [17, 21, 4478, 14331, 2]
// Exports: KeyImage

// Module 14330 (KeyImage)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import registerAssetDefault from "registerAsset" /* 14331 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const Image = get_ActivityIndicator.Image;
const jsx = jsxProd.jsx;
let closure_4 = createCacheKey.createStyles({ icon: { width: 128, height: 128, marginBottom: 8 } });
const result = set.fileFinishedImporting("modules/mfa/native/components/KeyImage.tsx");

export const KeyImage = function KeyImage() {
  const obj = { source: registerAssetDefault, style: callback().icon };
  return <Image source={registerAssetDefault} style={callback().icon} />;
};
