// Module ID: 9340
// Function ID: 9341
// Name: InviteButton
// Dependencies: [19, 17, 7150, 21, 4829, 1115, 5274, 2]

// Module 9340 (InviteButton)
import util from "util" /* 1115 */;
import components_Button_Button from "components/Button/Button" /* 5274 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const InviteSendStates = fn(7150).InviteSendStates;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let closure_5 = createStyles.createStyles({ buttonWrapper: { minWidth: 66, flexDirection: "row" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InviteButton.tsx");

export default noop.memo(function InviteButton(onPress) {
  ({ sendState, disabled } = onPress);
  if (disabled === undefined) {
    disabled = false;
  }
  const intl = util.intl;
  intl.string(util.t.jYnGPG);
  if (InviteSendStates.SENDING === sendState) {
    const intl5 = tmp2(1115).intl;
    let stringResult1 = intl5.string(tmp2(1115).t.jYnGPG);
    disabled = false;
    let flag = true;
  } else if (tmp5.SENT === sendState) {
    const intl4 = tmp2(1115).intl;
    stringResult1 = intl4.string(tmp2(1115).t.dVT149);
    disabled = true;
    flag = false;
  } else if (tmp5.ERROR === sendState) {
    const intl3 = tmp2(1115).intl;
    stringResult1 = intl3.string(tmp2(1115).t.wNcfpX);
    disabled = false;
    flag = false;
  } else {
    const intl2 = tmp2(1115).intl;
    stringResult1 = intl2.string(tmp2(1115).t.jYnGPG);
    flag = false;
  }
  const obj = { style: closure_5().buttonWrapper, children: null };
  const obj2 = { accessibilityRole: "none", size: "sm", variant: "secondary", text: stringResult1, onPress: onPress.onPressSend, disabled: null, grow: true };
  if (!disabled) {
    disabled = flag;
  }
  obj2.disabled = disabled;
  obj.children = jsx(components_Button_Button.Button, { accessibilityRole: "none", size: "sm", variant: "secondary", text: stringResult1, onPress: onPress.onPressSend, disabled: null, grow: true });
  return <View style={closure_5().buttonWrapper}>{null}</View>;
});
