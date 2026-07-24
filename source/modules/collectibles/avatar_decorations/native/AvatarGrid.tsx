// Module ID: 7981
// Function ID: 63166
// Name: GridAvatar
// Dependencies: [31, 27, 4122, 4217, 33, 4130, 689, 566, 1273, 7970, 2]
// Exports: default

// Module 7981 (GridAvatar)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
function GridAvatar(user) {
  let guildId;
  let pendingAvatarDecoration;
  let pendingAvatarSrc;
  let showStatus;
  let size;
  user = user.user;
  ({ guildId, pendingAvatarSrc, pendingAvatarDecoration } = user);
  ({ size, showStatus } = user);
  let obj = user(566);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getStatus(user.id));
  let obj1 = user(566);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_3.useReducedMotion);
  obj = {};
  if (undefined === pendingAvatarDecoration) {
    pendingAvatarDecoration = user.avatarDecoration;
  }
  obj.avatarDecoration = pendingAvatarDecoration;
  let tmp4;
  if (showStatus) {
    tmp4 = stateFromStores;
  }
  obj.status = tmp4;
  obj.statusStyle = _createForOfIteratorHelperLoose().avatarStatusStyle;
  obj.size = size;
  if (undefined !== pendingAvatarSrc) {
    obj = {};
    const obj6 = user(7970);
    obj.source = obj6.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores1);
    const merged = Object.assign(obj);
    obj1 = obj;
  } else {
    obj1 = { user, guildId };
    const merged1 = Object.assign(obj);
  }
  return closure_5(user(1273).Avatar, obj1);
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { avatarRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-around" } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.avatarStatusStyle = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.gridContainer = { width: 108, height: 108, justifyContent: "space-around", marginLeft: 28 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/avatar_decorations/native/AvatarGrid.tsx");

export default function AvatarGrid(arg0) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.gridContainer };
  obj = { style: tmp.avatarRow };
  obj = { size: require(1273) /* Button */.AvatarSizes.NORMAL };
  const merged = Object.assign(arg0);
  const items = [callback(GridAvatar, obj), ];
  const merged1 = Object.assign(arg0);
  items[1] = callback(GridAvatar, { size: require(1273) /* Button */.AvatarSizes.NORMAL, showStatus: true });
  obj.children = items;
  const items1 = [callback2(View, obj), ];
  const obj2 = { style: tmp.avatarRow };
  const obj1 = { size: require(1273) /* Button */.AvatarSizes.NORMAL, showStatus: true };
  const merged2 = Object.assign(arg0);
  const items2 = [callback(GridAvatar, { size: require(1273) /* Button */.AvatarSizes.REFRESH_MEDIUM_32 }), ];
  const obj3 = { size: require(1273) /* Button */.AvatarSizes.REFRESH_MEDIUM_32 };
  const merged3 = Object.assign(arg0);
  items2[1] = callback(GridAvatar, { size: require(1273) /* Button */.AvatarSizes.REFRESH_MEDIUM_32, showStatus: true });
  obj2.children = items2;
  items1[1] = callback2(View, obj2);
  obj.children = items1;
  return callback2(View, obj);
};
