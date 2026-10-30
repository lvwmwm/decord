// Module ID: 16552
// Function ID: 16553
// Name: useUsernameStatus
// Dependencies: [32, 19, 16553, 2]
// Exports: useUsernameStatus

// Module 16552 (useUsernameStatus)
import useUsernameLiveCheck from "useUsernameLiveCheck" /* 16553 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/unique_usernames/useUsernameStatus.tsx");

export const useUsernameStatus = (arg0, flag, flag2) => {
  let closure_3;
  let first;
  let closure_0 = arg0;
  if (flag === undefined) {
    flag = true;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = arg3;
  let closure_1 = tmp;
  closure_3 = undefined;
  const obj = useUsernameLiveCheck;
  const usernameLiveCheck = obj.useUsernameLiveCheck(arg0, flag, flag2);
  [first, closure_3] = react.useState(undefined);
  const items = [usernameLiveCheck, arg0, tmp];
  const effect = react.useEffect(() => {
    if ("" !== closure_0) {
      if (tmp !== closure_1) {
        if (null != usernameLiveCheck) {
          closure_3(tmp3);
        }
      }
    }
    closure_3(undefined);
  }, items);
  return first;
};
