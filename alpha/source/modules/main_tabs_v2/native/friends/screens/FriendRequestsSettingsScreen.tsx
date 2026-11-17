// Module ID: 19662
// Function ID: 19663
// Name: FriendRequestsSettingsScreen
// Dependencies: [19, 17, 21, 5310, 575, 10279, 19663, 2]
// Exports: default

// Module 19662 (FriendRequestsSettingsScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ThemedGradientDefault from "ThemedGradient" /* 10279 */;
import UserSettingsFriendRequestsDefault from "UserSettingsFriendRequests" /* 19663 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5310 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let obj2;
const ScrollView = react_native.ScrollView;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1, paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/FriendRequestsSettingsScreen.tsx");

export default function FriendRequestsSettingsScreen() {
  let items;
  const obj = { children: items };
  items = [, ];
  const tmp = closure_6();
  items[0] = _false(ThemedGradientDefault, { absolute: true });
  const obj2 = { style: tmp.container, children: _false(UserSettingsFriendRequestsDefault, {}) };
  items[1] = _false(ScrollView, obj2);
  return hasOwnProperty(React3, obj);
};
