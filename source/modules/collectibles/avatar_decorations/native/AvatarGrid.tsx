// Module ID: 7888
// Function ID: 62818
// Name: GridAvatar
// Dependencies: []
// Exports: default

// Module 7888 (GridAvatar)
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
  const items1 = [closure_3];
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
  obj.statusStyle = callback3().avatarStatusStyle;
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
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_3 = importDefault(dependencyMap[2]);
let closure_4 = importDefault(dependencyMap[3]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { avatarRow: { 9223372036854775807: "<string:2940442816>", 9223372036854775807: "<string:1577058573>", 0: "<string:1577059357>" } };
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH };
obj.avatarStatusStyle = obj;
obj.gridContainer = { REMEDIATION_ELEMENT_TYPES: "FrameEffect_01-2_Out", "Null": 0, "Null": 149.75, "Null": 3 };
let closure_7 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/collectibles/avatar_decorations/native/AvatarGrid.tsx");

export default function AvatarGrid(arg0) {
  const tmp = callback3();
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
