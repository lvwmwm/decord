// Module ID: 9227
// Function ID: 9228
// Name: SecureFramesExistingVerificationsHelpMessage
// Dependencies: [17, 21, 4303, 9228, 1297, 1236, 2]
// Exports: default

// Module 9227 (SecureFramesExistingVerificationsHelpMessage)
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_4 = createCacheKey.createStyles({ container: { width: "100%" } });
const result = require("createCacheKey").fileFinishedImporting("modules/rtc/native/SecureFramesExistingVerificationsHelpMessage.tsx");

export default function SecureFramesExistingVerificationsHelpMessage(arg0) {
  let style;
  let userId;
  let userKey;
  ({ style, userId, userKey } = arg0);
  let obj = require(9228) /* useSecureFramesUserVerifiedKeysCount */;
  const secureFramesUserVerifiedKeysCount = obj.useSecureFramesUserVerifiedKeysCount({ userId, keyToOmit: userKey });
  let tmp5 = null;
  if (0 !== secureFramesUserVerifiedKeysCount) {
    obj = { style: null, children: null };
    const items = [tmp.container, style];
    obj[0] = items;
    obj = { messageType: null, children: null };
    obj[0] = tmp2(1297).HelpMessageTypes.INFO;
    const intl = tmp2(1236).intl;
    const obj1 = { count: null };
    obj1[0] = secureFramesUserVerifiedKeysCount;
    obj[1] = intl.format(tmp2(1236).t.uZDkz0, obj1);
    obj[1] = jsx(tmp2(1297).HelpMessage, { messageType: null, children: null });
    tmp5 = <View messageType={null}>{null}</View>;
  }
  return tmp5;
};
