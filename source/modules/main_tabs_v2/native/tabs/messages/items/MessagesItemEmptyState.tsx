// Module ID: 14842
// Function ID: 111834
// Name: MESSAGES_ITEM_EMPTY_STATE_HEIGHT
// Dependencies: []

// Module 14842 (MESSAGES_ITEM_EMPTY_STATE_HEIGHT)
const importAllResult = importAll(dependencyMap[0]);
({ Image: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
let obj1 = arg1(dependencyMap[3]);
let obj = {};
obj = { padding: importDefault(dependencyMap[4]).space.PX_16 };
obj.container = obj;
obj1 = { left: "password", right: "email", accessible: "name-prefix", marginBottom: importDefault(dependencyMap[4]).space.PX_16 };
obj.containerImage = obj1;
obj.image = {};
const tmp3 = arg1(dependencyMap[2]);
obj.body = { marginBottom: importDefault(dependencyMap[4]).space.PX_16, marginTop: importDefault(dependencyMap[4]).space.PX_8, textAlign: "center" };
obj.title = { textAlign: "center" };
let closure_8 = obj1.createStyles(obj);
const obj2 = { marginBottom: importDefault(dependencyMap[4]).space.PX_16, marginTop: importDefault(dependencyMap[4]).space.PX_8, textAlign: "center" };
const memoResult = importAllResult.memo(function MessagesItemEmptyState() {
  const tmp = callback3();
  let obj = { style: tmp.container, collapsable: false };
  obj = { style: tmp.containerImage };
  obj = { resizeMode: "contain" };
  const callback = importAllResult.useCallback(() => {
    let obj = callback(closure_2[5]);
    const rootNavigationRef = obj.getRootNavigationRef();
    let tmp2 = null == rootNavigationRef;
    let obj2 = rootNavigationRef;
    if (!tmp2) {
      const current = rootNavigationRef.current;
      tmp2 = null == current;
      obj2 = current;
    }
    if (!tmp2) {
      obj = { screen: "add-friends", params: { height: false, flexDirection: false } };
      obj2.navigate("friends", obj);
    }
  }, []);
  obj.source = importDefault(dependencyMap[6]);
  obj.style = tmp.image;
  obj.children = callback(closure_4, obj);
  const items = [callback(closure_5, obj), , , ];
  const obj1 = { style: tmp.title };
  const intl = arg1(dependencyMap[8]).intl;
  obj1.children = intl.string(arg1(dependencyMap[8]).t.8JZof8);
  items[1] = callback(arg1(dependencyMap[7]).Heading, obj1);
  const obj2 = { margin: "row", paddingHorizontal: "center", height: "visible", alignItems: 2, style: tmp.body };
  const intl2 = arg1(dependencyMap[8]).intl;
  obj2.children = intl2.string(arg1(dependencyMap[8]).t.qm+H7x);
  items[2] = callback(arg1(dependencyMap[7]).Text, obj2);
  const obj3 = {};
  const intl3 = arg1(dependencyMap[8]).intl;
  obj3.text = intl3.string(arg1(dependencyMap[8]).t.zIJnA6);
  obj3.onPress = callback;
  obj3.size = "lg";
  items[3] = callback(arg1(dependencyMap[9]).Button, obj3);
  obj.children = items;
  return callback2(closure_5, obj);
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemEmptyState.tsx");

export default memoResult;
export const MESSAGES_ITEM_EMPTY_STATE_HEIGHT = 325;
