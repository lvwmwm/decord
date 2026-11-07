// Module ID: 9357
// Function ID: 9358
// Name: SecureFramesExistingVerificationsHelpMessage
// Dependencies: [17, 21, 5140, 9358, 8095, 1113, 2]
// Exports: default

// Module 9357 (SecureFramesExistingVerificationsHelpMessage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import useSecureFramesUserVerifiedKeysCount from "useSecureFramesUserVerifiedKeysCount" /* 9358 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ container: { width: "100%" } });
const result = size.fileFinishedImporting("modules/rtc/native/SecureFramesExistingVerificationsHelpMessage.tsx");

export default function SecureFramesExistingVerificationsHelpMessage(arg0) {
  let intl;
  let obj4;
  let style;
  let userId;
  let userKey;
  ({ style, userId, userKey } = arg0);
  const tmp = closure_4();
  const obj = useSecureFramesUserVerifiedKeysCount;
  const secureFramesUserVerifiedKeysCount = obj.useSecureFramesUserVerifiedKeysCount({ userId, keyToOmit: userKey });
  let tmp5 = null;
  if (0 !== secureFramesUserVerifiedKeysCount) {
    const items = [tmp.container, style];
    ({ type: "info", message: intl.format(intl2.t.uZDkz0, obj4), role: "none" });
    const InlineNotice = tmp2(8095).InlineNotice;
    intl = tmp2(1113).intl;
    tmp5 = <View style={items}>{null}</View>;
    obj4 = { count: secureFramesUserVerifiedKeysCount };
  }
  return tmp5;
};
