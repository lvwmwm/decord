// Module ID: 13663
// Function ID: 104925
// Name: useUsernameStatus
// Dependencies: [57, 31, 13664, 2]
// Exports: useUsernameStatus

// Module 13663 (useUsernameStatus)
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
const result = require("useUsernameLiveCheck").fileFinishedImporting("modules/unique_usernames/useUsernameStatus.tsx");

export const useUsernameStatus = (arg0, flag, flag2) => {
  const _require = arg0;
  if (flag === undefined) {
    flag = true;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  const dependencyMap = tmp;
  let usernameLiveCheck;
  let React;
  usernameLiveCheck = _require(13664).useUsernameLiveCheck(arg0, flag, flag2);
  const tmp3 = usernameLiveCheck(React.useState(undefined), 2);
  React = tmp3[1];
  const items = [usernameLiveCheck, arg0, arg3];
  const effect = React.useEffect(() => {
    if ("" !== closure_0) {
      if (closure_0 !== closure_1) {
        if (null != usernameLiveCheck) {
          callback(usernameLiveCheck);
        }
      }
    }
    callback(undefined);
  }, items);
  return tmp3[0];
};
