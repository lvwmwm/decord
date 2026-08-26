// Module ID: 14267
// Function ID: 14268
// Name: KeyImage
// Dependencies: [17, 21, 4444, 14268, 2]
// Exports: KeyImage

// Module 14267 (KeyImage)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import registerAssetDefault from "registerAsset" /* 14268 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const Image = get_ActivityIndicator.Image;
const jsx = jsxProd.jsx;
let closure_4 = createCacheKey.createStyles({ icon: { width: 128, height: 128, marginBottom: 8 } });
const result = set.fileFinishedImporting("modules/mfa/native/components/KeyImage.tsx");

export const KeyImage = function KeyImage() {
  const obj = { source: registerAssetDefault, style: callback().icon };
  return <Image source={registerAssetDefault} style={callback().icon} />;
};
