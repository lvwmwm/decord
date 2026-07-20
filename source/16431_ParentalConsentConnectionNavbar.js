// Module ID: 16431
// Function ID: 126939
// Name: ParentalConsentConnectionNavbar
// Dependencies: []
// Exports: ParentalConsentConnectionNavbar

// Module 16431 (ParentalConsentConnectionNavbar)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { "Null": 671678465, "Null": 812843010, "Null": 805306368, "Null": 33554432, height: arg1(dependencyMap[5]).NAV_BAR_HEIGHT, paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16 };
obj.row = obj;
const tmp3 = arg1(dependencyMap[3]);
obj.logOut = { position: "absolute", left: importDefault(dependencyMap[6]).space.PX_16 };
let closure_7 = obj.createStyles(obj);
const obj1 = { position: "absolute", left: importDefault(dependencyMap[6]).space.PX_16 };
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/safety_flows/native/tasks/ParentalConsentConnectionHeader.tsx");

export const ParentalConsentConnectionNavbar = function ParentalConsentConnectionNavbar() {
  const tmp = callback2();
  let obj = arg1(dependencyMap[8]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    let username;
    if (null != currentUser) {
      username = currentUser.username;
    }
    return username;
  });
  obj = { style: { paddingTop: importDefault(dependencyMap[7])().top } };
  obj = { style: tmp.row };
  const obj1 = {
    style: tmp.logOut,
    onPress() {
      return callback(closure_2[10]).logout("safety_flows_parental_consent_connection");
    }
  };
  const intl = arg1(dependencyMap[11]).intl;
  obj1.children = intl.string(importDefault(dependencyMap[12]).3HuGuY);
  const items1 = [callback(arg1(dependencyMap[9]).Text, obj1), ];
  let tmp6 = null != stateFromStores;
  if (tmp6) {
    const obj2 = { children: stateFromStores };
    tmp6 = callback(arg1(dependencyMap[9]).Text, obj2);
  }
  items1[1] = tmp6;
  obj.children = items1;
  obj.children = closure_6(View, obj);
  return callback(View, obj);
};
