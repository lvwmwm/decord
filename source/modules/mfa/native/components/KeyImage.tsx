// Module ID: 14601
// Function ID: 14602
// Name: KeyImage
// Dependencies: [17, 21, 4481, 709, 5647, 2]
// Exports: KeyImage

// Module 14601 (KeyImage)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import ThemesDefault from "Themes" /* 709 */;
import AccountAgeTier10LargeBadge from "AccountAgeTier10LargeBadge" /* 5647 */;
import createCacheKey from "createCacheKey" /* 4481 */;

const View = get_ActivityIndicator.View;
const jsx = jsxProd.jsx;
let obj = { container: null };
obj = { marginBottom: ThemesDefault.space.PX_8 };
obj[0] = obj;
let closure_4 = createCacheKey.createStyles(obj);
const result = set.fileFinishedImporting("modules/mfa/native/components/KeyImage.tsx");

export const KeyImage = function KeyImage() {
  return <View style={callback().container}>{jsx(AccountAgeTier10LargeBadge.SecurityKeySpotIllustration, { scale: 0.6 })}</View>;
};
