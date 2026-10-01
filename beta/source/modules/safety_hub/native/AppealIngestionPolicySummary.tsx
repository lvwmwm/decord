// Module ID: 11378
// Function ID: 11379
// Name: AppealIngestionPolicySummary
// Dependencies: [19, 17, 21, 4836, 576, 7867, 4683, 4832, 1115, 2]
// Exports: default

// Module 11378 (AppealIngestionPolicySummary)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import ColorUtils from "ColorUtils" /* 4683 */;
import Text_Text from "Text/Text" /* 4832 */;
import SafetyHubUtils from "SafetyHubUtils" /* 7867 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { sectionTitle: { marginBottom: 8 }, policy: { marginBottom: 16 }, borderColor: obj2, userContainer: obj3 };
obj2 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles = createStyles.createStyles;
obj3 = { marginTop: 8, justifyContent: "flex-start", minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 18 };
let closure_5 = createStyles(obj);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionPolicySummary.tsx");

export default function AppealIngestionPolicySummary(classification) {
  let intl;
  let items;
  let items1;
  classification = classification.classification;
  const tmp = closure_5();
  let description;
  const capitalizeText = SafetyHubUtils.capitalizeText;
  SafetyHubUtils;
  if (classification != null) {
    description = classification.description;
  }
  const capitalizeTextResult = capitalizeText(description);
  const obj = { style: tmp.policy, children: items };
  const tmp2Result = ColorUtils;
  const obj2 = { style: tmp.sectionTitle, variant: "text-sm/bold", children: intl.string(intl2.t.xsdcxh) };
  const hexWithOpacityResult = tmp2Result.hexWithOpacity(tmp.borderColor.color, 0.08);
  const Text = tmp2(4832).Text;
  intl = tmp2(1115).intl;
  items = [_false(Text, obj2), ];
  const obj3 = { style: items1, children: _false(Text_Text.Text, { variant: "text-md/semibold", children: capitalizeTextResult }) };
  items1 = [tmp.userContainer, { borderColor: hexWithOpacityResult }];
  items[1] = _false(View, obj3);
  return React3(View, obj);
};
