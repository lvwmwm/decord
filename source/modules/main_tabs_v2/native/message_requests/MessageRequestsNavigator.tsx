// Module ID: 15429
// Function ID: 117735
// Name: MessageRequestsNavigator
// Dependencies: []
// Exports: default

// Module 15429 (MessageRequestsNavigator)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
let closure_7 = obj.createNativeStackNavigator();
let obj1 = arg1(dependencyMap[4]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST };
obj.container = obj;
obj1 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
obj.header = obj1;
let closure_8 = obj1.createStyles(obj);
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/main_tabs_v2/native/message_requests/MessageRequestsNavigator.tsx");

export default function MessageRequestsNavigator() {
  let Navigator;
  let Screen;
  const tmp = callback3();
  const arg1 = tmp;
  let obj = arg1(dependencyMap[6]);
  const importDefault = obj.useAccessibilityNativeStackOptions();
  const layoutEffect = React.useLayoutEffect(() => tmp(closure_2[7]).trackAppUIViewed(), []);
  const rect = importDefault(dependencyMap[8])();
  obj = { style: items };
  const items = [tmp.container, { paddingLeft: rect.left, paddingRight: rect.right }];
  obj = {
    screenOptions(navigation) {
      const obj = {
        headerStyle: tmp.header,
        headerShadowVisible: false,
        headerTitle(children) {
          let obj = Object.create(null);
          obj.children = 0;
          const merged = Object.assign(children, obj);
          obj = { title: children.children };
          const merged1 = Object.assign(merged);
          return callback2(callback(closure_2[9]).GenericHeaderTitle, obj);
        },
        headerTitleAlign: "center",
        headerLeft: tmp(closure_2[9]).getRenderModalCloseImage(navigation.navigation)
      };
      const merged = Object.assign(closure_1);
      return obj;
    }
  };
  const obj1 = { name: "root" };
  const obj2 = {};
  ({ Navigator, Screen } = closure_7);
  const intl = arg1(dependencyMap[10]).intl;
  obj2.title = intl.string(arg1(dependencyMap[10]).t.e7GWjQ);
  const merged = Object.assign(importDefault(dependencyMap[11])());
  obj1.options = obj2;
  obj1.getComponent = function getComponent() {
    return tmp(closure_2[12]).default;
  };
  const items1 = [callback(Screen, obj1), , ];
  const obj3 = { name: "spam" };
  const obj4 = {};
  const intl2 = arg1(dependencyMap[10]).intl;
  obj4.title = intl2.string(arg1(dependencyMap[10]).t.ulKXHp);
  const merged1 = Object.assign(importDefault(dependencyMap[11])());
  obj3.options = obj4;
  obj3.getComponent = function getComponent() {
    return tmp(closure_2[13]).default;
  };
  items1[1] = callback(closure_7.Screen, obj3);
  const obj5 = { name: "preview" };
  const obj6 = {};
  const intl3 = arg1(dependencyMap[10]).intl;
  obj6.title = intl3.string(arg1(dependencyMap[10]).t.iilwGH);
  const merged2 = Object.assign(importDefault(dependencyMap[11])());
  obj5.options = obj6;
  obj5.getComponent = function getComponent() {
    return tmp(closure_2[14]).default;
  };
  items1[2] = callback(closure_7.Screen, obj5);
  obj.children = items1;
  obj.children = callback2(Navigator, obj);
  return callback(View, obj);
};
