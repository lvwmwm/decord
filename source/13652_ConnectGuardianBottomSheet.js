// Module ID: 13652
// Function ID: 103431
// Name: ConnectGuardianBottomSheet
// Dependencies: []
// Exports: default

// Module 13652 (ConnectGuardianBottomSheet)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).CONNECT_GUARDIAN_BOTTOM_SHEET_KEY;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_24, paddingVertical: importDefault(dependencyMap[6]).space.PX_24, gap: importDefault(dependencyMap[6]).space.PX_24 };
obj.container = obj;
const tmp2 = arg1(dependencyMap[4]);
obj.info = { alignItems: "center", gap: importDefault(dependencyMap[6]).space.PX_8 };
obj.centered = { textAlign: "center" };
obj.cardContainer = { alignItems: "center" };
let closure_9 = obj.createStyles(obj);
const obj1 = { alignItems: "center", gap: importDefault(dependencyMap[6]).space.PX_8 };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/parent_tools/native/ConnectGuardianBottomSheet.tsx");

export default function ConnectGuardianBottomSheet(onRefresh) {
  let body;
  let expiresAt;
  let linkCode;
  let title;
  ({ linkCode, expiresAt, title, body } = onRefresh);
  const tmp = callback2();
  let obj = arg1(dependencyMap[7]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => store.getLinkCode());
  let obj1 = arg1(dependencyMap[7]);
  const items1 = [closure_5];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => store.getLinkCodeExpiresAt());
  if (null != stateFromStores) {
    linkCode = stateFromStores;
  }
  if (null != stateFromStores1) {
    expiresAt = stateFromStores1;
  }
  const callback = React.useCallback(() => {
    callback(closure_2[8]).hideActionSheet(closure_6);
  }, []);
  importDefault(dependencyMap[9])(callback);
  obj = { startExpanded: true };
  obj = { style: tmp.container };
  obj1 = { style: tmp.info };
  const obj2 = { 0: "for", 9223372036854775807: "MUR", 0: "kk-KZ", -9223372036854775808: "MEETS_AUTO_ENABLE", style: tmp.centered };
  if (null == title) {
    const intl = arg1(dependencyMap[12]).intl;
    title = intl.string(importDefault(dependencyMap[13]).aCUVfL);
  }
  obj2.children = title;
  const items2 = [callback(arg1(dependencyMap[11]).Text, obj2), ];
  const obj3 = { style: tmp.centered };
  if (null == body) {
    const intl2 = arg1(dependencyMap[12]).intl;
    const obj4 = { link: "https://support.discord.com/hc/articles/14155060633623" };
    body = intl2.format(importDefault(dependencyMap[13]).2O6ltn, obj4);
  }
  obj3.children = body;
  items2[1] = callback(arg1(dependencyMap[14]).TextWithIOSLinkWorkaround, obj3);
  obj1.children = items2;
  const items3 = [closure_8(View, obj1), , ];
  const obj6 = { linkCode, expiresAt, onRefresh: onRefresh.onRefresh };
  items3[1] = callback(View, { style: tmp.cardContainer, children: callback(arg1(dependencyMap[15]).ConnectGuardianCard, obj6) });
  const obj7 = { <string:1522289750>: "r", <string:570601313>: "isArray" };
  const intl3 = arg1(dependencyMap[12]).intl;
  obj7.text = intl3.string(importDefault(dependencyMap[13]).Hsm5IF);
  obj7.onPress = callback;
  items3[2] = callback(arg1(dependencyMap[16]).Button, obj7);
  obj.children = items3;
  obj.children = closure_8(View, obj);
  return callback(arg1(dependencyMap[10]).BottomSheet, obj);
};
