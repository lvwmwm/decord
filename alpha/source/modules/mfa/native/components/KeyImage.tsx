// Module ID: 14211
// Function ID: 14212
// Name: KeyImage
// Dependencies: [17, 21, 4829, 576, 14212, 2]
// Exports: KeyImage

// Module 14211 (KeyImage)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import SecurityKeySpotIllustration from "SecurityKeySpotIllustration" /* 14212 */;
import createStyles from "createStyles" /* 4829 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
const obj = { container: { marginBottom: nativeDefault.space.PX_8 } };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/mfa/native/components/KeyImage.tsx");

export const KeyImage = function KeyImage() {
  return <View style={closure_4().container}>{jsx(SecurityKeySpotIllustration.SecurityKeySpotIllustration, { scale: 0.6 })}</View>;
};
