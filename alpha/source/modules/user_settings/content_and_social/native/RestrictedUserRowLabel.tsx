// Module ID: 16653
// Function ID: 16654
// Name: RestrictedUserRowLabel
// Dependencies: [19, 17, 21, 5591, 575, 1114, 5619, 2]
// Exports: RestrictedUserRowLabel

// Module 16653 (RestrictedUserRowLabel)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import useToken from "useToken" /* 5591 */;
import Text_Text from "Text/Text" /* 5619 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/RestrictedUserRowLabel.tsx");

export function RestrictedUserRowLabel(userRecord) {
  let accessibilityActions;
  let intl;
  let items;
  let onAccessibilityAction;
  let username;
  userRecord = userRecord.userRecord;
  ({ accessibilityActions, onAccessibilityAction } = userRecord);
  const obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  let tmp8Result = null != userRecord.globalName;
  const obj3 = { accessible: true, accessibilityRole: "button", accessibilityHint: intl.string(intl2.t.cSgdvE), accessibilityActions, onAccessibilityAction, children: items };
  const obj2 = useToken;
  const token1 = obj2.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_COLOR);
  intl = intl2.intl;
  const obj4 = { variant: token, color: token1, lineClamp: 1, includeFontPadding: true, children: username };
  username = userRecord.globalName;
  const Text = Text_Text.Text;
  const tmp6 = hasOwnProperty;
  const tmp7 = View;
  if (username == null) {
    username = userRecord.username;
  }
  items = [React3(Text, obj4), ];
  if (tmp8Result) {
    const obj5 = { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, includeFontPadding: true, children: userRecord.username };
    tmp8Result = tmp8(Text_Text.Text, obj5);
  }
  items[1] = tmp8Result;
  return tmp6(tmp7, obj3);
}
