// Module ID: 14794
// Function ID: 14795
// Name: useUsernameStatus
// Dependencies: [32, 19, 14795, 2]
// Exports: useUsernameStatus

// Module 14794 (useUsernameStatus)
import useUsernameLiveCheck from "useUsernameLiveCheck" /* 14795 */;
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
