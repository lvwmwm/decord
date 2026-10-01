// Module ID: 16022
// Function ID: 16023
// Name: YouBarUser
// Dependencies: [19, 17, 1372, 14627, 21, 4836, 576, 504, 4566, 5280, 4678, 16023, 16024, 16025, 2]

// Module 16022 (YouBarUser)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 5280 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import YouBarConstants from "YouBarConstants" /* 14627 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
let View = react_native.View;
({ YOU_BAR_SPRING_CONFIG: metroRequire, YOU_BAR_LARGE_AVATAR_NAME_MARGIN: metroImportDefault, YOU_BAR_SMALL_AVATAR_NAME_MARGIN: metroImportAll } = YouBarConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { youButton: obj2, userText: { flexDirection: "column", justifyContent: "center", height: "100%", gap: 1 }, placeholder: size };
obj2 = { flexDirection: "row", alignItems: "center", borderRadius: nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS };
createStyles = createStyles.createStyles;
size = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.round, height: 16, width: 80 };
let closure_11 = createStyles(obj);
const __initData = { code: "function YouBarUserTsx1(){const{nameMargin}=this.__closure;return{marginLeft:nameMargin.get()};}" };
const memoResult = react.memo(function YouBarUser(isQuestRendered) {
  let closure_0;
  let currentUser;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj10;
  let obj7;
  isQuestRendered = isQuestRendered.isQuestRendered;
  _require = undefined;
  const onAvatarPress = isQuestRendered.onAvatarPress;
  const tmp = closure_11();
  let obj = require("get initialized");
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp2 = _require;
  _require = tmp5;
  const obj2 = require("ReanimatedRexport");
  const sharedValue = obj2.useSharedValue(isQuestRendered ? closure_8 : closure_7);
  const items1 = [!isQuestRendered, sharedValue];
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    const obj = spring;
    const result = set(obj.withSpring(closure_0 ? metroImportDefault : metroImportAll, metroRequire));
  }, items1);
  const tmp2Result = tmp2(4566);
  class S {
    constructor() {
      const obj = { marginLeft: sharedValue.get() };
      return obj;
    }
  }
  S.__closure = { nameMargin: sharedValue };
  S.__workletHash = 12063452832866;
  S.__initData = __initData;
  const animatedStyle = tmp2Result.useAnimatedStyle(S);
  const obj4 = sharedValue(4678);
  const name = obj4.useName(stateFromStores);
  if (null != stateFromStores) {
    let obj3;
    if (null != name) {
      obj3 = { style: tmp.youButton, children: items2 };
      const obj5 = { isLargeAvatar: !isQuestRendered, onPress: onAvatarPress };
      items2 = [closure_9(sharedValue(16024), obj5), ];
      const obj6 = { style: items3, children: closure_9(sharedValue(16025), obj7) };
      items3 = [tmp.userText, animatedStyle, { flexShrink: 1 }];
      const View2 = tmp9(4566).View;
      obj7 = { userId: stateFromStores.id, username: name };
      items2[1] = closure_9(View2, obj6);
    }
    return tmp11(View, obj3);
  }
  const obj8 = { style: items4, children: items5 };
  items4 = [tmp.youButton];
  items5 = [closure_9(sharedValue(16023), { isLarge: !isQuestRendered }), ];
  const obj9 = { style: items6, children: closure_9(View, obj10) };
  items6 = [tmp.userText, animatedStyle, { flexShrink: 1 }];
  obj10 = { style: tmp.placeholder };
  View = tmp9(4566).View;
  items5[1] = closure_9(View, obj9);
  obj3 = obj8;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarUser.tsx");

export default memoResult;
