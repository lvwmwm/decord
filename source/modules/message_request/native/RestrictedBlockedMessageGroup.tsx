// Module ID: 15460
// Function ID: 117932
// Name: RestrictedBlockedMessageGroup
// Dependencies: []
// Exports: default

// Module 15460 (RestrictedBlockedMessageGroup)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { marginLeft: arg1(dependencyMap[5]).RESTRICTED_CONTENT_INSET, marginVertical: importDefault(dependencyMap[6]).space.PX_8 };
obj.toggle = obj;
let closure_7 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/message_request/native/RestrictedBlockedMessageGroup.tsx");

export default function RestrictedBlockedMessageGroup(arg0) {
  let messages;
  ({ messages, renderMessage: closure_0 } = arg0);
  const tmp2 = callback(React.useState(false), 2);
  let first = tmp2[0];
  let closure_1 = tmp2[1];
  let obj = {};
  const callback = React.useCallback(() => {
    callback2((arg0) => !arg0);
  }, []);
  obj = { style: callback3().toggle, accessibilityRole: "button", accessibilityState: obj, onPress: callback };
  obj = { expanded: first };
  const obj1 = { hasMaxConnections: "<string:3086024708>", isBoostOnlySubscription: "<string:625475588>" };
  const intl = arg1(closure_1[9]).intl;
  obj1.children = intl.format(arg1(closure_1[9]).t.+FcYM/, { count: messages.length });
  obj.children = callback2(arg1(closure_1[8]).Text, obj1);
  const items = [callback2(arg1(closure_1[7]).PressableOpacity, obj), ];
  if (first) {
    first = messages.map((id) => callback3(closure_4, { children: callback(id) }, id.id));
  }
  items[1] = first;
  obj.children = items;
  return closure_6(View, obj);
};
