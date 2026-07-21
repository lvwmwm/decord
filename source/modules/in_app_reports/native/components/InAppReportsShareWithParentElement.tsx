// Module ID: 12217
// Function ID: 93777
// Name: parents
// Dependencies: []
// Exports: default

// Module 12217 (parents)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsShareWithParentElement.tsx");

export default function _default(parents) {
  parents = parents.parents;
  const arg1 = parents;
  const tmp = callback(React.useState(false), 2);
  const importDefault = tmp[1];
  [][0] = parents;
  if (0 === parents.length) {
    return null;
  } else {
    const intl3 = arg1(dependencyMap[5]).intl;
    let obj = { count: parents.length, parent1: parents[0].username };
    let username;
    if (null != parents[1]) {
      username = tmp22.username;
    }
    obj.parent2 = username;
    let username1;
    if (null != parents[2]) {
      username1 = tmp4.username;
    }
    obj.parent3 = username1;
    obj = {};
    obj.title = intl3.formatToPlainString(arg1(dependencyMap[5]).t.HqyWeO, obj);
    const formatToPlainStringResult = intl3.formatToPlainString(arg1(dependencyMap[5]).t.HqyWeO, obj);
    const tmp7 = jsx;
    const intl = arg1(dependencyMap[5]).intl;
    obj = { count: parents.length, parent1: parents[0].username };
    let username2;
    if (null != parents[1]) {
      username2 = tmp12.username;
    }
    obj.parent2 = username2;
    let username3;
    if (null != parents[2]) {
      username3 = tmp14.username;
    }
    obj.parent3 = username3;
    obj.disabledTitle = intl.formatToPlainString(arg1(dependencyMap[5]).t.BlAMme, obj);
    obj.icon = jsx(arg1(dependencyMap[8]).ShareIcon, {});
    const intl2 = arg1(dependencyMap[5]).intl;
    obj.description = intl2.string(arg1(dependencyMap[5]).t.5l/hlt);
    obj.disabled = tmp[0];
    obj.onPress = tmp2;
    return tmp7(importDefault(dependencyMap[7]), obj);
  }
};
