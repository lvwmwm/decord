// Module ID: 11640
// Function ID: 90337
// Name: UserProfileAlertUserReported
// Dependencies: []
// Exports: default

// Module 11640 (UserProfileAlertUserReported)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/user_profile/native/UserProfileAlertUserReported.tsx");

export default function UserProfileAlertUserReported() {
  let obj = {};
  const intl = arg1(dependencyMap[3]).intl;
  obj.title = intl.string(arg1(dependencyMap[3]).t.IwHU3R);
  const intl2 = arg1(dependencyMap[3]).intl;
  obj.content = intl2.string(arg1(dependencyMap[3]).t.qxyRaq);
  obj = {};
  obj = {};
  const intl3 = arg1(dependencyMap[3]).intl;
  obj.text = intl3.string(arg1(dependencyMap[3]).t.BddRzS);
  obj.children = jsx(arg1(dependencyMap[2]).AlertActionButton, obj, "okay");
  obj.actions = jsx(arg1(dependencyMap[4]).AlertActions, obj);
  return jsx(arg1(dependencyMap[2]).AlertModal, obj);
};
