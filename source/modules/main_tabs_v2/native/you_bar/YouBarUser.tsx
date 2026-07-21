// Module ID: 14989
// Function ID: 112890
// Dependencies: []

// Module 14989
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ YOU_BAR_SPRING_CONFIG: closure_6, YOU_BAR_LARGE_AVATAR_NAME_MARGIN: closure_7, YOU_BAR_SMALL_AVATAR_NAME_MARGIN: closure_8 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
let obj1 = arg1(dependencyMap[5]);
let obj = {};
obj = { "Null": 7, "Null": 370, borderRadius: importDefault(dependencyMap[6]).modules.mobile.YOU_BAR_BORDER_RADIUS };
obj.youButton = obj;
obj.userText = {};
obj1 = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_MUTED, borderRadius: importDefault(dependencyMap[6]).radii.round, height: 16, width: 80 };
obj.placeholder = obj1;
let closure_11 = obj1.createStyles(obj);
let closure_12 = { code: "function YouBarUserTsx1(){const{nameMargin}=this.__closure;return{marginLeft:nameMargin.get()};}" };
const tmp3 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function YouBarUser(arg0) {
  let isQuestRendered;
  let onAvatarPress;
  let importDefault;
  ({ isQuestRendered, onAvatarPress } = arg0);
  const tmp = callback2();
  let obj = arg1(dependencyMap[7]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const arg1 = tmp3;
  let obj1 = arg1(dependencyMap[8]);
  const sharedValue = obj1.useSharedValue(tmp3 ? closure_7 : closure_8);
  importDefault = sharedValue;
  const items1 = [!isQuestRendered, sharedValue];
  const effect = importAllResult.useEffect(() => {
    const result = sharedValue.set(tmp3(closure_2[9]).withSpring(tmp3 ? closure_7 : closure_8, closure_6));
  }, items1);
  let obj2 = arg1(dependencyMap[8]);
  class S {
    constructor() {
      obj = { marginLeft: closure_1.get() };
      return obj;
    }
  }
  S.__closure = { nameMargin: sharedValue };
  S.__workletHash = 12063452832866;
  S.__initData = closure_12;
  const animatedStyle = obj2.useAnimatedStyle(S);
  let obj3 = importDefault(dependencyMap[10]);
  const name = obj3.useName(stateFromStores);
  if (null != stateFromStores) {
    if (null != name) {
      obj = { style: tmp.youButton };
      obj = { isLargeAvatar: tmp3, onPress: onAvatarPress };
      const items2 = [callback(importDefault(dependencyMap[12]), obj), ];
      obj1 = {};
      const items3 = [tmp.userText, animatedStyle, ];
      obj2 = { flexShrink: 1 };
      items3[2] = obj2;
      obj1.style = items3;
      obj3 = { userId: stateFromStores.id, username: name };
      obj1.children = callback(importDefault(dependencyMap[13]), obj3);
      items2[1] = callback(importDefault(dependencyMap[8]).View, obj1);
      obj.children = items2;
    }
    return tmp8(tmp9, obj);
  }
  const obj4 = { style: items4 };
  const items4 = [tmp.youButton];
  const items5 = [callback(importDefault(dependencyMap[11]), { isLarge: !isQuestRendered }), ];
  const obj5 = { style: items6 };
  const items6 = [tmp.userText, animatedStyle, { flexShrink: 1 }];
  obj5.children = callback(View, { style: tmp.placeholder });
  items5[1] = callback(importDefault(dependencyMap[8]).View, obj5);
  obj4.children = items5;
  obj = obj4;
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarUser.tsx");

export default memoResult;
