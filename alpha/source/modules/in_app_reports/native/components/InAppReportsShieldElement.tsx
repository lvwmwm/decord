// Module ID: 8304
// Function ID: 8305
// Name: InAppReportsShieldElement
// Dependencies: [19, 17, 21, 4866, 8067, 2]
// Exports: default

// Module 8304 (InAppReportsShieldElement)
import ShieldSpotIllustration from "ShieldSpotIllustration" /* 8067 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4866);
let closure_4 = createStyles.createStyles({ container: { flex: 0, alignSelf: "center", marginBottom: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsShieldElement.tsx");

export default function ShieldElement(element) {
  element = element.element;
  let tmp2 = null;
  if (null != element) {
    tmp2 = null;
    if ("success" === element.type) {
      const obj = { style: tmp.container, children: jsx(ShieldSpotIllustration.ShieldSpotIllustration, { width: 100, height: 100 }) };
      tmp2 = <View style={tmp.container}>{jsx(ShieldSpotIllustration.ShieldSpotIllustration, { width: 100, height: 100 })}</View>;
    }
  }
  return tmp2;
};
