// Module ID: 8108
// Function ID: 8109
// Name: InAppReportsShieldElement
// Dependencies: [19, 17, 21, 4836, 7872, 2]
// Exports: default

// Module 8108 (InAppReportsShieldElement)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ShieldSpotIllustration from "ShieldSpotIllustration" /* 7872 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ container: { flex: 0, alignSelf: "center", marginBottom: 16 } });
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsShieldElement.tsx");

export default function ShieldElement(element) {
  element = element.element;
  let tmp2 = null;
  if (null != element) {
    tmp2 = null;
    if ("success" === element.type) {
      tmp2 = <View style={tmp.container}>{jsx(ShieldSpotIllustration.ShieldSpotIllustration, { width: 100, height: 100 })}</View>;
    }
  }
  return tmp2;
};
