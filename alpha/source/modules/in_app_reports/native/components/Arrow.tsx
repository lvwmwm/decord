// Module ID: 8202
// Function ID: 8203
// Name: Arrow
// Dependencies: [19, 21, 5043, 575, 1186, 8203, 2]
// Exports: default

// Module 8202 (Arrow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1186 */;
import AssetRegistryDefault from "AssetRegistry" /* 8203 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5043 */;
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
