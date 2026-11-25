// Module ID: 17976
// Function ID: 17977
// Name: YouBarUser
// Dependencies: [19, 17, 1386, 16486, 21, 4913, 575, 504, 1653, 5514, 4969, 17977, 17978, 17979, 2]

// Module 17976 (YouBarUser)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import spring_spring from "spring/spring" /* 5514 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1386 */;
import YouBarConstants from "YouBarConstants" /* 16486 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
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
let closure_12 = { code: "(function YouBarUserTsx1(){let[nameMargin]=this.__closure;return{marginLeft:nameMargin.get()};})" };
const memoResult = react.memo(function YouBarUser(isCondensed) {
  let avatarCoachmarkAnchorRef;
  let closure_0;
  let currentUser;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj10;
  let obj7;
  let onAvatarPress;
  let tmp8;
  let tmp9;
  isCondensed = isCondensed.isCondensed;
  _require = undefined;
  ({ onAvatarPress, avatarCoachmarkAnchorRef } = isCondensed);
  const tmp = closure_11();
  let obj = require("get initialized");
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp2 = _require;
  _require = tmp5;
  const obj2 = require("module_1653");
  const sharedValue = obj2.useSharedValue(isCondensed ? closure_8 : closure_7);
  const items1 = [!isCondensed, sharedValue];
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    const obj = spring_spring;
    const result = set(obj.withSpring(closure_0 ? metroImportDefault : metroImportAll, metroRequire));
  }, items1);
  const items2 = [closure_12, sharedValue];
  let c0;
  [tmp8, tmp9] = items2;
  const tmp2Result = tmp2(1653);
  class YouBarUserTsx1 {
    constructor() {
      const obj = { marginLeft: _undefined.get() };
      return obj;
    }
  }
  const items3 = [tmp9];
  YouBarUserTsx1.__closure = items3;
  YouBarUserTsx1.__workletHash = 12382860773339;
  YouBarUserTsx1.__initData = tmp8;
  const animatedStyle = tmp2Result.useAnimatedStyle(YouBarUserTsx1);
  const obj4 = sharedValue(4969);
  const name = obj4.useName(stateFromStores);
  if (null != stateFromStores) {
    let obj3;
    if (null != name) {
      obj3 = { style: tmp.youButton, children: items4 };
      const obj5 = { isLargeAvatar: !isCondensed, onPress: onAvatarPress, coachmarkAnchorRef: avatarCoachmarkAnchorRef };
      items4 = [closure_9(sharedValue(17978), obj5), ];
      const obj6 = { style: items5, children: closure_9(sharedValue(17979), obj7) };
      items5 = [tmp.userText, animatedStyle, { flexShrink: 1 }];
      const View2 = tmp11(1653).View;
      obj7 = { userId: stateFromStores.id, username: name };
      items4[1] = closure_9(View2, obj6);
    }
    return tmp13(View, obj3);
  }
  const obj8 = { style: tmp.youButton, children: items6 };
  items6 = [closure_9(sharedValue(17977), { isLarge: !isCondensed }), ];
  const obj9 = { style: items7, children: closure_9(View, obj10) };
  items7 = [tmp.userText, animatedStyle, { flexShrink: 1 }];
  obj10 = { style: tmp.placeholder };
  View = tmp11(1653).View;
  items6[1] = closure_9(View, obj9);
  obj3 = obj8;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarUser.tsx");

export default memoResult;
