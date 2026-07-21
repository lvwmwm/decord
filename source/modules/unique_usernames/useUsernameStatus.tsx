// Module ID: 13540
// Function ID: 102714
// Name: useUsernameStatus
// Dependencies: []
// Exports: useUsernameStatus

// Module 13540 (useUsernameStatus)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/unique_usernames/useUsernameStatus.tsx");

export const useUsernameStatus = (arg0, flag, flag2) => {
  flag = arg0;
  if (flag === undefined) {
    flag = true;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  const dependencyMap = tmp;
  let callback;
  let React;
  const usernameLiveCheck = flag(dependencyMap[2]).useUsernameLiveCheck(arg0, flag, flag2);
  callback = usernameLiveCheck;
  const tmp3 = callback(React.useState(undefined), 2);
  React = tmp3[1];
  const items = [usernameLiveCheck, arg0, arg3];
  const effect = React.useEffect(() => {
    if ("" !== arg0) {
      if (arg0 !== arg0) {
        if (null != usernameLiveCheck) {
          callback(usernameLiveCheck);
        }
      }
    }
    callback(undefined);
  }, items);
  return tmp3[0];
};
