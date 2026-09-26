// Module ID: 15010
// Function ID: 15011
// Name: useUsernameStatus
// Dependencies: [32, 19, 15011, 2]
// Exports: useUsernameStatus

// Module 15010 (useUsernameStatus)
import useUsernameLiveCheck from "useUsernameLiveCheck" /* 15011 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/unique_usernames/useUsernameStatus.tsx");

export const useUsernameStatus = (arg0, flag, flag2) => {
  closure_0 = arg0;
  if (flag === undefined) {
    flag = true;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  closure_1 = tmp;
  const usernameLiveCheck = useUsernameLiveCheck.useUsernameLiveCheck(arg0, flag, flag2);
  const tmp3 = _slicedToArray(noop.useState(undefined), 2);
  closure_3 = tmp3[1];
  const items = [usernameLiveCheck, arg0, arg3];
  const effect = noop.useEffect(() => {
    if ("" !== closure_0) {
      if (tmp !== closure_1) {
        if (null != usernameLiveCheck) {
          closure_3(tmp3);
        }
      }
    }
    closure_3(undefined);
  }, items);
  return tmp3[0];
};
