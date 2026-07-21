// Module ID: 10054
// Function ID: 77639
// Name: CreateGuildContainer
// Dependencies: []
// Exports: default

// Module 10054 (CreateGuildContainer)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const UPLOAD_MEDIUM_SIZE = arg1(dependencyMap[5]).UPLOAD_MEDIUM_SIZE;
const jsx = arg1(dependencyMap[6]).jsx;
let obj = arg1(dependencyMap[7]);
obj = { flex: { flex: 1 } };
obj = { marginTop: arg1(dependencyMap[8]).NAV_BAR_HEIGHT };
obj.contentContainer = obj;
let closure_10 = obj.createStyles(obj);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/create_guild/native/components/CreateGuildContainer.tsx");

export default function CreateGuildContainer(onCreate) {
  let tmp10;
  let tmp12;
  onCreate = onCreate.onCreate;
  const arg1 = onCreate;
  const guildTemplate = onCreate.guildTemplate;
  const importDefault = guildTemplate;
  let flag = onCreate.autoFocus;
  if (flag === undefined) {
    flag = true;
  }
  const onHubGuildInfoSet = onCreate.onHubGuildInfoSet;
  const dependencyMap = onHubGuildInfoSet;
  const isCommunityIntent = onCreate.isCommunityIntent;
  let callback = isCommunityIntent;
  let obj = {};
  Object.setPrototypeOf(null);
  const merged = Object.assign(onCreate, obj);
  let callback2;
  let React;
  let closure_6;
  let closure_7;
  let closure_8;
  let jsx;
  const tmp4 = callback3();
  const tmp5 = callback2(React.useState(importDefault(dependencyMap[9]).getGuildNameSuggestion({ truncateUsername: true })), 2);
  const first = tmp5[0];
  callback2 = first;
  const tmp7 = callback2(React.useState(null), 2);
  const first1 = tmp7[0];
  React = first1;
  closure_6 = tmp7[1];
  const obj2 = importDefault(dependencyMap[9]);
  [tmp10, closure_7] = callback2(React.useState(false), 2);
  const tmp9 = callback2(React.useState(false), 2);
  [tmp12, closure_8] = callback2(React.useState(null), 2);
  const tmp13 = callback2(React.useState(() => {
    const currentUser = currentUser.getCurrentUser();
    let isStaffResult;
    if (null != currentUser) {
      isStaffResult = currentUser.isStaff();
    }
    return null != isStaffResult && isStaffResult;
  }), 2);
  const first2 = tmp13[0];
  jsx = first2;
  // CreateGeneratorClosureLongIndex (0x67)
  // CreateGeneratorClosureLongIndex (0x67)
  callback = React.useCallback(callback(1), []);
  const items = [guildTemplate, first1, first, onCreate, onHubGuildInfoSet, first2, isCommunityIntent];
  const callback1 = React.useCallback(callback(tmp), items);
  obj = { top: true, style: items1 };
  const items1 = [, ];
  ({ flex: arr2[0], contentContainer: arr2[1] } = tmp4);
  obj = {};
  const tmp11 = callback2(React.useState(null), 2);
  const merged1 = Object.assign(merged);
  obj["guild"] = { name: first, icon: first1, staffOnly: first2 };
  obj["error"] = tmp12;
  obj["submitting"] = tmp10;
  obj["onIconPress"] = callback;
  obj["onNameChange"] = tmp5[1];
  obj["onStaffOnlyChange"] = tmp13[1];
  obj["onCreate"] = callback1;
  obj["autoFocus"] = flag;
  obj.children = jsx(importDefault(dependencyMap[16]), obj);
  return jsx(arg1(dependencyMap[15]).SafeAreaPaddingView, obj);
};
