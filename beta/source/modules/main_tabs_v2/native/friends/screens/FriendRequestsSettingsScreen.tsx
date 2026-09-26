// Module ID: 17246
// Function ID: 17247
// Name: FriendRequestsSettingsScreen
// Dependencies: [19, 17, 21, 4788, 576, 5373, 17247, 2]
// Exports: default

// Module 17246 (FriendRequestsSettingsScreen)
import nativeDefault from "native" /* 576 */;
import ThemedGradientDefault from "ThemedGradient" /* 5373 */;
import UserSettingsFriendRequestsDefault from "UserSettingsFriendRequests" /* 17247 */;
import noop from "module_19" /* 19 */;

const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4788);
const obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1, paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/FriendRequestsSettingsScreen.tsx");

export default function FriendRequestsSettingsScreen() {
  const obj = { children: null };
  const items = [React3(ThemedGradientDefault, { absolute: true }), ];
  const tmp = closure_6();
  items[1] = React3(ScrollView, { style: closure_6().container, children: React3(UserSettingsFriendRequestsDefault, {}) });
  obj.children = items;
  return hasOwnProperty(React4, obj);
};
