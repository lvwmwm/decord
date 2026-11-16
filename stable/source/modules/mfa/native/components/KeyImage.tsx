// Module ID: 17038
// Function ID: 17039
// Name: KeyImage
// Dependencies: [17, 21, 5170, 575, 17039, 2]
// Exports: KeyImage

// Module 17038 (KeyImage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import SecurityKeySpotIllustration from "SecurityKeySpotIllustration" /* 17039 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const obj = { container: { marginBottom: nativeDefault.space.PX_8 } };
({ marginBottom: nativeDefault.space.PX_8 });
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/mfa/native/components/KeyImage.tsx");

export function KeyImage() {
  return <View style={closure_4().container}>{jsx(SecurityKeySpotIllustration.SecurityKeySpotIllustration, { scale: 0.6 })}</View>;
}
