// Module ID: 11773
// Function ID: 91467
// Dependencies: [31, 27, 6978, 33, 4130, 1212, 4543, 2]

// Module 11773
import { View } from "get ActivityIndicator";
import { InviteSendStates } from "InviteSendStates";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ buttonWrapper: { minWidth: 66, flexDirection: "row" } });
const memoResult = require("result").memo(function InviteButton(onPressSend) {
  let disabled;
  let sendState;
  ({ sendState, disabled } = onPressSend);
  if (disabled === undefined) {
    disabled = false;
  }
  const intl = require(1212) /* getSystemLocale */.intl;
  intl.string(require(1212) /* getSystemLocale */.t.jYnGPG);
  if (InviteSendStates.SENDING === sendState) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    let stringResult1 = intl5.string(require(1212) /* getSystemLocale */.t.jYnGPG);
    let flag = true;
    disabled = false;
  } else if (InviteSendStates.SENT === sendState) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    stringResult1 = intl4.string(require(1212) /* getSystemLocale */.t.dVT149);
    flag = false;
    disabled = true;
  } else if (InviteSendStates.ERROR === sendState) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    stringResult1 = intl3.string(require(1212) /* getSystemLocale */.t.wNcfpX);
    flag = false;
    disabled = false;
  } else {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    stringResult1 = intl2.string(require(1212) /* getSystemLocale */.t.jYnGPG);
    flag = false;
  }
  let obj = { style: callback().buttonWrapper };
  obj = { accessibilityRole: "none", size: "sm", variant: "secondary", text: stringResult1, onPress: onPressSend.onPressSend };
  if (!disabled) {
    disabled = flag;
  }
  obj.disabled = disabled;
  obj.grow = true;
  obj.children = jsx(require(4543) /* Button */.Button, { accessibilityRole: "none", size: "sm", variant: "secondary", text: stringResult1, onPress: onPressSend.onPressSend });
  return <View accessibilityRole="none" size="sm" variant="secondary" text={stringResult1} onPress={arg0.onPressSend} />;
});
const result = require("InviteSendStates").fileFinishedImporting("modules/instant_invite/native/components/InviteButton.tsx");

export default memoResult;
