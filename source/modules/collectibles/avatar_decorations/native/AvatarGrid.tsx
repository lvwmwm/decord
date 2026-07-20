// Module ID: 7883
// Function ID: 62783
// Name: GridAvatar
// Dependencies: [22, 7894, 4126, 689, 7624, 5442, 5502, 1395, 2, 4321, 7895]
// Exports: default

// Module 7883 (GridAvatar)
import "apply";
import { View } from "normal";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_4 from "_createForOfIteratorHelperLoose";
import frozen from "frozen";
import module_5442 from "module_5442";
import PollLayoutTypes from "PollLayoutTypes";

function GridAvatar(user) {
  let guildId;
  let pendingAvatarDecoration;
  let pendingAvatarSrc;
  let showStatus;
  let size;
  user = user.user;
  const arg1 = user;
  ({ guildId, pendingAvatarSrc, pendingAvatarDecoration } = user);
  ({ size, showStatus } = user);
  let obj = arg1(dependencyMap[7]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => status.getStatus(user.id));
  let obj1 = arg1(dependencyMap[7]);
  const items1 = [_createForOfIteratorHelperLoose];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
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
  obj.statusStyle = module_5442().avatarStatusStyle;
  obj.size = size;
  if (undefined !== pendingAvatarSrc) {
    obj = {};
    const obj6 = arg1(dependencyMap[9]);
    obj.source = obj6.getAvatarSource(user, guildId, pendingAvatarSrc, stateFromStores1);
    const merged = Object.assign(obj);
    obj1 = obj;
  } else {
    obj1 = { user, guildId };
    const merged1 = Object.assign(obj);
  }
  return closure_5(arg1(dependencyMap[8]).Avatar, obj1);
}
({ jsx: closure_5, jsxs: closure_6 } = frozen);
module_5442 = { avatarRow: { "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000180953751370314, "Bool(true)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005719139397267464, "Bool(true)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000567902115825738 } };
module_5442 = { backgroundColor: require("module_5502").colors.BACKGROUND_SURFACE_HIGH };
module_5442.avatarStatusStyle = module_5442;
module_5442.gridContainer = { "Null": "FrameEffect_01-2_Out", "Null": 0, "Null": 149.75, "Null": 3 };
module_5442 = module_5442.createStyles(module_5442);
const result = PollLayoutTypes.fileFinishedImporting("modules/collectibles/avatar_decorations/native/AvatarGrid.tsx");

export default function AvatarGrid(arg0) {
  const tmp = module_5442();
  let obj = { style: tmp.gridContainer };
  obj = { style: tmp.avatarRow };
  obj = { size: arg1(dependencyMap[8]).AvatarSizes.NORMAL };
  const merged = Object.assign(arg0);
  const items = [callback(GridAvatar, obj), ];
  const merged1 = Object.assign(arg0);
  items[1] = callback(GridAvatar, { size: arg1(dependencyMap[8]).AvatarSizes.NORMAL, showStatus: true });
  obj.children = items;
  const items1 = [callback2(View, obj), ];
  const obj2 = { style: tmp.avatarRow };
  const obj1 = { size: arg1(dependencyMap[8]).AvatarSizes.NORMAL, showStatus: true };
  const merged2 = Object.assign(arg0);
  const items2 = [callback(GridAvatar, { size: arg1(dependencyMap[8]).AvatarSizes.REFRESH_MEDIUM_32 }), ];
  const obj3 = { size: arg1(dependencyMap[8]).AvatarSizes.REFRESH_MEDIUM_32 };
  const merged3 = Object.assign(arg0);
  items2[1] = callback(GridAvatar, { size: arg1(dependencyMap[8]).AvatarSizes.REFRESH_MEDIUM_32, showStatus: true });
  obj2.children = items2;
  items1[1] = callback2(View, obj2);
  obj.children = items1;
  return callback2(View, obj);
};
