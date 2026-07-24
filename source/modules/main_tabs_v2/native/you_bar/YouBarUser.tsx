// Module ID: 15160
// Function ID: 115422
// Dependencies: [31, 27, 1849, 14047, 33, 4130, 689, 566, 3991, 4542, 3969, 15161, 15162, 15163, 2]

// Module 15160
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import CONNECTION_BANNER_HEIGHT from "CONNECTION_BANNER_HEIGHT";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
let require = arg1;
({ YOU_BAR_SPRING_CONFIG: closure_6, YOU_BAR_LARGE_AVATAR_NAME_MARGIN: closure_7, YOU_BAR_SMALL_AVATAR_NAME_MARGIN: closure_8 } = CONNECTION_BANNER_HEIGHT);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let obj = {};
obj = { flexDirection: "row", alignItems: "center", borderRadius: require("_createForOfIteratorHelperLoose").modules.mobile.YOU_BAR_BORDER_RADIUS };
obj.youButton = obj;
obj.userText = { flexDirection: "column", justifyContent: "center", height: "100%", gap: 1 };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, height: 16, width: 80 };
obj.placeholder = _createForOfIteratorHelperLoose;
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_12 = { code: "function YouBarUserTsx1(){const{nameMargin}=this.__closure;return{marginLeft:nameMargin.get()};}" };
const memoResult = importAllResult.memo(function YouBarUser(arg0) {
  let isQuestRendered;
  let onAvatarPress;
  let sharedValue;
  ({ isQuestRendered, onAvatarPress } = arg0);
  const tmp = callback2();
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getCurrentUser());
  require = tmp3;
  let obj1 = require(3991);
  sharedValue = obj1.useSharedValue(tmp3 ? closure_7 : closure_8);
  const items1 = [!isQuestRendered, sharedValue];
  const effect = importAllResult.useEffect(() => {
    const result = sharedValue.set(tmp3(outer1_2[9]).withSpring(tmp3 ? outer1_7 : outer1_8, outer1_6));
  }, items1);
  let obj2 = require(3991);
  class S {
    constructor() {
      obj = { marginLeft: c1.get() };
      return obj;
    }
  }
  S.__closure = { nameMargin: sharedValue };
  S.__workletHash = 12063452832866;
  S.__initData = closure_12;
  const animatedStyle = obj2.useAnimatedStyle(S);
  let obj3 = sharedValue(3969);
  const name = obj3.useName(stateFromStores);
  if (null != stateFromStores) {
    if (null != name) {
      obj = { style: tmp.youButton };
      obj = { isLargeAvatar: tmp3, onPress: onAvatarPress };
      const items2 = [callback(sharedValue(15162), obj), ];
      obj1 = {};
      const items3 = [tmp.userText, animatedStyle, ];
      obj2 = { flexShrink: 1 };
      items3[2] = obj2;
      obj1.style = items3;
      obj3 = { userId: stateFromStores.id, username: name };
      obj1.children = callback(sharedValue(15163), obj3);
      items2[1] = callback(sharedValue(3991).View, obj1);
      obj.children = items2;
    }
    return tmp8(tmp9, obj);
  }
  const obj4 = { style: items4 };
  items4 = [tmp.youButton];
  const items5 = [callback(sharedValue(15161), { isLarge: !isQuestRendered }), ];
  const obj5 = { style: items6 };
  items6 = [tmp.userText, animatedStyle, { flexShrink: 1 }];
  obj5.children = callback(View, { style: tmp.placeholder });
  items5[1] = callback(sharedValue(3991).View, obj5);
  obj4.children = items5;
  obj = obj4;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarUser.tsx");

export default memoResult;
