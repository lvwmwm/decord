// Module ID: 8909
// Function ID: 70316
// Name: SecureFramesExistingVerificationsHelpMessage
// Dependencies: [27, 33, 4130, 8910, 1273, 1212, 2]
// Exports: default

// Module 8909 (SecureFramesExistingVerificationsHelpMessage)
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4 = _createForOfIteratorHelperLoose.createStyles({ container: { width: "100%" } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/rtc/native/SecureFramesExistingVerificationsHelpMessage.tsx");

export default function SecureFramesExistingVerificationsHelpMessage(arg0) {
  let style;
  let userId;
  let userKey;
  ({ style, userId, userKey } = arg0);
  let obj = require(8910) /* useSecureFramesUserVerifiedKeysCount */;
  const secureFramesUserVerifiedKeysCount = obj.useSecureFramesUserVerifiedKeysCount({ userId, keyToOmit: userKey });
  let tmp3 = null;
  if (0 !== secureFramesUserVerifiedKeysCount) {
    obj = {};
    const items = [tmp.container, style];
    obj.style = items;
    obj = { messageType: require(1273) /* Button */.HelpMessageTypes.INFO };
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj1 = { count: secureFramesUserVerifiedKeysCount };
    obj.children = intl.format(require(1212) /* getSystemLocale */.t.uZDkz0, obj1);
    obj.children = jsx(require(1273) /* Button */.HelpMessage, { messageType: require(1273) /* Button */.HelpMessageTypes.INFO });
    tmp3 = <View messageType={require(1273) /* Button */.HelpMessageTypes.INFO} />;
  }
  return tmp3;
};
