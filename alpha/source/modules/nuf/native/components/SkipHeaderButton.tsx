// Module ID: 14253
// Function ID: 14254
// Name: SkipHeaderButton
// Dependencies: [19, 21, 5014, 575, 1113, 9812, 2]
// Exports: default

// Module 14253 (SkipHeaderButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import HeaderShared from "HeaderShared" /* 9812 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { button: { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT }, insideNavigatorButton: { paddingRight: 16 } };
({ color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT });
let closure_3 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/nuf/native/components/SkipHeaderButton.tsx");

export default function SkipHeaderButton(label) {
  let items;
  const tmp = closure_3();
  label = label.label;
  if (label == null) {
    const intl = intl2.intl;
    label = intl.string(intl2.t["5Wxrcd"]);
  }
  const obj = { labelStyle: items, label, accessibilityLabel: label };
  const HeaderTextButton = HeaderShared.HeaderTextButton;
  const merged = Object.assign(label);
  items = [tmp.button, ];
  let prop;
  const tmp4 = jsx;
  if (label.insideNavigator) {
    prop = tmp.insideNavigatorButton;
  }
  items[1] = prop;
  return tmp4(HeaderTextButton, obj);
};
