// Module ID: 8902
// Function ID: 70275
// Name: SecureFramesExistingVerificationsHelpMessage
// Dependencies: []
// Exports: default

// Module 8902 (SecureFramesExistingVerificationsHelpMessage)
const View = require(dependencyMap[0]).View;
const jsx = require(dependencyMap[1]).jsx;
const _module = require(dependencyMap[2]);
let closure_4 = _module.createStyles({ container: { width: "100%" } });
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/rtc/native/SecureFramesExistingVerificationsHelpMessage.tsx");

export default function SecureFramesExistingVerificationsHelpMessage(arg0) {
  let style;
  let userId;
  let userKey;
  ({ style, userId, userKey } = arg0);
  let obj = require(dependencyMap[3]);
  const secureFramesUserVerifiedKeysCount = obj.useSecureFramesUserVerifiedKeysCount({ userId, keyToOmit: userKey });
  let tmp3 = null;
  if (0 !== secureFramesUserVerifiedKeysCount) {
    obj = {};
    const items = [tmp.container, style];
    obj.style = items;
    obj = { messageType: require(dependencyMap[4]).HelpMessageTypes.INFO };
    const intl = require(dependencyMap[5]).intl;
    const obj1 = { count: secureFramesUserVerifiedKeysCount };
    obj.children = intl.format(require(dependencyMap[5]).t.uZDkz0, obj1);
    obj.children = jsx(require(dependencyMap[4]).HelpMessage, obj);
    tmp3 = <View {...obj} />;
  }
  return tmp3;
};
