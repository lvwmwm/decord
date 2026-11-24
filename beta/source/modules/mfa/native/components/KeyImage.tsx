// Module ID: 16085
// Function ID: 16086
// Name: KeyImage
// Dependencies: [17, 21, 4913, 575, 16086, 2]
// Exports: KeyImage

// Module 16085 (KeyImage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import SecurityKeySpotIllustration from "SecurityKeySpotIllustration" /* 16086 */;
import createStyles from "createStyles" /* 4913 */;
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
