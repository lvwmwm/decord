// Module ID: 14992
// Function ID: 112928
// Name: Username
// Dependencies: []

// Module 14992 (Username)
function Username(arg0) {
  let userId;
  let username;
  ({ userId, username } = arg0);
  let obj = {};
  const items = [callback3().usernameRow];
  obj.style = items;
  obj = { flexDirection: null, alignItems: "", justifyContent: "", marginBottom: "0", channelId: "none", isPreload: "24", limit: "24", userId, userName: username };
  const items1 = [{ flexShrink: 1 }];
  obj.style = items1;
  const items2 = [callback(importDefault(dependencyMap[6]), obj), callback(arg1(dependencyMap[7]).ChevronSmallDownIcon, {})];
  obj.children = items2;
  return callback2(View, obj);
}
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
let obj = { userText: {} };
obj = { flexDirection: "row", gap: importDefault(dependencyMap[5]).space.PX_4 };
obj.statusRow = obj;
obj.statusEmoji = {};
obj.usernameRow = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null };
obj.statusText = { flexShrink: 1 };
let closure_7 = arg1(dependencyMap[4]).createStyles(obj);
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function YouName(arg0) {
  let userId;
  let username;
  ({ userId, username } = arg0);
  const tmp = callback3();
  let obj = arg1(dependencyMap[8]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => status.getStatus());
  let obj1 = arg1(dependencyMap[9]);
  const customStatusActivity = obj1.useCustomStatusActivity();
  let obj2 = arg1(dependencyMap[10]);
  let state;
  if (null != customStatusActivity) {
    state = customStatusActivity.state;
  }
  let gameMentionsAsPlainText = obj2.useGameMentionsAsPlainText(state);
  obj = { style: tmp.userText };
  const items1 = [callback(Username, { username, userId }), ];
  obj = { style: tmp.statusRow };
  let emoji;
  if (null != customStatusActivity) {
    emoji = customStatusActivity.emoji;
  }
  let tmp11 = null;
  if (null != emoji) {
    obj1 = { size: 16, style: tmp.statusEmoji, emoji: customStatusActivity.emoji };
    tmp11 = callback(importDefault(dependencyMap[11]), obj1);
  }
  const items2 = [tmp11, ];
  obj2 = { index: "<string:2682257408>", source: null, color: null, style: tmp.statusText, size: null };
  if (null == gameMentionsAsPlainText) {
    gameMentionsAsPlainText = arg1(dependencyMap[13]).humanizeStatus(stateFromStores);
    const obj8 = arg1(dependencyMap[13]);
  }
  obj2.children = gameMentionsAsPlainText;
  items2[1] = callback(arg1(dependencyMap[12]).Text, obj2);
  obj.children = items2;
  items1[1] = closure_6(View, obj);
  obj.children = items1;
  return closure_6(View, obj);
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarName.tsx");

export default memoResult;
