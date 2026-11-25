// Module ID: 12100
// Function ID: 12101
// Name: InviteButton
// Dependencies: [19, 17, 8438, 21, 4913, 1112, 5511, 2]

// Module 12100 (InviteButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl6 from "intl" /* 1112 */;
import Constants from "Constants" /* 8438 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const InviteSendStates = Constants.InviteSendStates;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ buttonWrapper: { minWidth: 66, flexDirection: "row" } });
const memoResult = react.memo(function InviteButton(onPressSend) {
  let disabled;
  let flag;
  let sendState;
  ({ sendState, disabled } = onPressSend);
  if (disabled === undefined) {
    disabled = false;
  }
  onPressSend = onPressSend.onPressSend;
  const tmp = closure_5();
  const intl = intl6.intl;
  intl.string(intl6.t.jYnGPG);
  if (InviteSendStates.SENDING === sendState) {
    const intl5 = tmp2(1112).intl;
    let stringResult1 = intl5.string(tmp2(1112).t.jYnGPG);
    disabled = false;
    flag = true;
  } else if (InviteSendStates.SENT === sendState) {
    const intl4 = tmp2(1112).intl;
    stringResult1 = intl4.string(tmp2(1112).t.dVT149);
    disabled = true;
    flag = false;
  } else if (InviteSendStates.ERROR === sendState) {
    const intl3 = tmp2(1112).intl;
    stringResult1 = intl3.string(tmp2(1112).t.wNcfpX);
    disabled = false;
    flag = false;
  } else {
    const intl2 = tmp2(1112).intl;
    stringResult1 = intl2.string(tmp2(1112).t.jYnGPG);
    flag = false;
  }
  const Button = tmp2(5511).Button;
  if (!disabled) {
    disabled = flag;
  }
  return <tmp8 style={tmp.buttonWrapper}>{null}</tmp8>;
});
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InviteButton.tsx");

export default memoResult;
