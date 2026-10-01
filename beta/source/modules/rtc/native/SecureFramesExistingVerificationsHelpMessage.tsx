// Module ID: 9176
// Function ID: 9177
// Name: SecureFramesExistingVerificationsHelpMessage
// Dependencies: [17, 21, 4836, 9177, 1177, 1115, 2]
// Exports: default

// Module 9176 (SecureFramesExistingVerificationsHelpMessage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import useSecureFramesUserVerifiedKeysCount from "useSecureFramesUserVerifiedKeysCount" /* 9177 */;
import createStyles from "createStyles" /* 4836 */;
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
    ({ messageType: native.HelpMessageTypes.INFO, children: intl.format(intl2.t.uZDkz0, obj4) });
    const HelpMessage = tmp2(1177).HelpMessage;
    intl = tmp2(1115).intl;
    tmp5 = <View style={items}>{null}</View>;
    obj4 = { count: secureFramesUserVerifiedKeysCount };
  }
  return tmp5;
};
