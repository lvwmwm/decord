// Module ID: 9002
// Function ID: 9003
// Name: InAppReportsShieldElement
// Dependencies: [19, 17, 21, 4827, 5995, 2]
// Exports: default

// Module 9002 (InAppReportsShieldElement)
import native from "native" /* 5995 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4827);
let closure_4 = createStyles.createStyles({ container: { flex: 0, alignSelf: "center", marginBottom: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsShieldElement.tsx");

export default function ShieldElement(element) {
  element = element.element;
  let tmp2 = null;
  if (null != element) {
    tmp2 = null;
    if ("success" === element.type) {
      const obj = { style: tmp.container, children: jsx(native.ShieldSpotIllustration, { width: 100, height: 100 }) };
      tmp2 = <View style={tmp.container}>{jsx(native.ShieldSpotIllustration, { width: 100, height: 100 })}</View>;
    }
  }
  return tmp2;
};
