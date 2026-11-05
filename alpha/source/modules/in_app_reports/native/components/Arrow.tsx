// Module ID: 8508
// Function ID: 8509
// Name: Arrow
// Dependencies: [19, 21, 5143, 575, 1187, 8509, 2]
// Exports: default

// Module 8508 (Arrow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import AssetRegistryDefault from "AssetRegistry" /* 8509 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const obj = { tintColor: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT } };
({ tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT });
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/Arrow.tsx");

export default function Arrow() {
  const tmp = closure_4();
  const Icon = native.Icon;
  return <Icon source={AssetRegistryDefault} size={native.Icon.Sizes.MEDIUM} style={tmp.tintColor} />;
};
