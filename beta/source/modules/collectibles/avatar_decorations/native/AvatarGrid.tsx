// Module ID: 12749
// Function ID: 12750
// Name: AvatarGrid
// Dependencies: [19, 17, 4825, 4876, 21, 4836, 576, 504, 1177, 7693, 2]
// Exports: default

// Module 12749 (AvatarGrid)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import PresenceStore from "PresenceStore" /* 4876 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
function GridAvatar(user) {
  let guildId;
  let obj5;
  let pendingAvatarDecoration;
  let pendingAvatarSrc;
  let showStatus;
  let tmp2Result;
  let tmp6;
  let useReducedMotion;
  user = user.user;
  ({ guildId, pendingAvatarSrc, pendingAvatarDecoration } = user);
  ({ size, showStatus } = user);
  const items = [PresenceStore];
  const tmp = closure_7();
  const obj = user(504);
  const stateFromStores = obj.useStateFromStores(items, () => PresenceStore.getStatus(user.id));
  const items1 = [AccessibilityStore];
  const obj2 = user(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  if (undefined === pendingAvatarDecoration) {
    pendingAvatarDecoration = user.avatarDecoration;
  }
  const obj3 = { avatarDecoration: pendingAvatarDecoration, status: tmp6, statusStyle: tmp.avatarStatusStyle, size };
  tmp6 = undefined;
  if (showStatus) {
    tmp6 = stateFromStores;
  }
  const Avatar = tmp2(1177).Avatar;
  const tmp7 = closure_5;
  if (undefined !== pendingAvatarSrc) {
    const obj4 = { source: tmp2Result.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores1) };
    tmp2Result = user(7693);
    const merged = Object.assign(obj3);
    obj5 = obj4;
  } else {
    obj5 = { user, guildId };
    const merged1 = Object.assign(obj3);
  }
  return tmp7(Avatar, obj5);
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { avatarRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-around" }, avatarStatusStyle: obj2, gridContainer: { width: 108, height: 108, justifyContent: "space-around", marginLeft: 28 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/collectibles/avatar_decorations/native/AvatarGrid.tsx");

export default function AvatarGrid(arg0) {
  let items;
  let items1;
  let items2;
  const tmp = closure_7();
  const obj = { style: tmp.gridContainer, children: items1 };
  const obj2 = { style: tmp.avatarRow, children: items };
  const obj3 = { size: native.AvatarSizes.NORMAL };
  const merged = Object.assign(arg0);
  items = [hasOwnProperty(GridAvatar, obj3), ];
  const obj4 = { size: native.AvatarSizes.NORMAL, showStatus: true };
  const merged1 = Object.assign(arg0);
  items[1] = hasOwnProperty(GridAvatar, obj4);
  items1 = [metroRequire(View, obj2), ];
  const obj5 = { style: tmp.avatarRow, children: items2 };
  const obj6 = { size: native.AvatarSizes.REFRESH_MEDIUM_32 };
  const merged2 = Object.assign(arg0);
  items2 = [hasOwnProperty(GridAvatar, obj6), ];
  const obj7 = { size: native.AvatarSizes.REFRESH_MEDIUM_32, showStatus: true };
  const merged3 = Object.assign(arg0);
  items2[1] = hasOwnProperty(GridAvatar, obj7);
  items1[1] = metroRequire(View, obj5);
  return metroRequire(View, obj);
};
