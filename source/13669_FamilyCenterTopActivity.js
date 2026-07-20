// Module ID: 13669
// Function ID: 103507
// Name: FamilyCenterTopActivity
// Dependencies: []
// Exports: default

// Module 13669 (FamilyCenterTopActivity)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017301927510316394, "Bool(false)": 0.0005189595509662581, "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017301927510316394, gap: importDefault(dependencyMap[6]).space.PX_8 };
obj.container = obj;
obj.section = { flex: 1 };
const obj1 = { "Bool(true)": "flex-end", "Bool(true)": "100%", "Bool(true)": "flex", "Bool(true)": "row", gap: importDefault(dependencyMap[6]).space.PX_4, paddingTop: importDefault(dependencyMap[6]).space.PX_12, paddingBottom: importDefault(dependencyMap[6]).space.PX_12 };
obj.avatarList = obj1;
obj.touchableHitBox = {};
const tmp2 = arg1(dependencyMap[4]);
obj.guildAvatar = { borderRadius: importDefault(dependencyMap[6]).radii.md, borderColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGHEST };
obj.guildAvatarText = { fontSize: 12 };
let closure_9 = obj.createStyles(obj);
const obj2 = { borderRadius: importDefault(dependencyMap[6]).radii.md, borderColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGHEST };
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopActivity.tsx");

export default function FamilyCenterTopActivity() {
  const tmp = callback3();
  const arg1 = tmp;
  let obj = arg1(dependencyMap[7]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => authStore.getTopUserActivities());
  const importDefault = stateFromStores;
  let obj1 = arg1(dependencyMap[7]);
  const items1 = [closure_6];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => authStore.getTopGuildActivities());
  const dependencyMap = stateFromStores1;
  const items2 = [stateFromStores];
  [][0] = stateFromStores1;
  const callback = React.useCallback(() => {
    let obj = stateFromStores(stateFromStores1[8]);
    obj = { topUserActivities: stateFromStores };
    obj.openLazy(tmp(stateFromStores1[10])(stateFromStores1[9], stateFromStores1.paths), "FamilyCenterTopUsers", obj);
  }, items2);
  if (0 !== stateFromStores.length) {
    obj = { style: tmp.container };
    let tmp7 = stateFromStores.length > 0;
    if (tmp7) {
      obj = { style: tmp.section };
      obj1 = { style: tmp.touchableHitBox, onPress: callback, accessibilityRole: "button" };
      const intl = arg1(dependencyMap[13]).intl;
      obj1.accessibilityLabel = intl.string(importDefault(dependencyMap[14]).BxbvS7);
      const obj2 = { variant: "text-sm/semibold" };
      const intl2 = arg1(dependencyMap[13]).intl;
      obj2.children = intl2.string(importDefault(dependencyMap[14]).BxbvS7);
      const items3 = [callback(arg1(dependencyMap[15]).Text, obj2), ];
      const obj3 = {
        style: tmp.avatarList,
        children: stateFromStores.map((user_id) => {
              const user = user.getUser(user_id.user_id);
              let tmp2 = null;
              if (null != user) {
                const obj = { user, size: tmp(stateFromStores1[16]).AvatarSizes.SMALL, guildId: undefined };
                tmp2 = callback(tmp(stateFromStores1[16]).Avatar, obj, user.id);
              }
              return tmp2;
            })
      };
      items3[1] = callback(View, obj3);
      obj1.children = items3;
      obj.children = callback2(importDefault(dependencyMap[12]), obj1);
      tmp7 = callback(View, obj);
      const tmp13 = importDefault(dependencyMap[12]);
    }
    const items4 = [tmp7, ];
    let tmp15 = stateFromStores1.length > 0;
    if (tmp15) {
      const obj4 = { style: tmp.section };
      const obj5 = { style: tmp.touchableHitBox, onPress: tmp3, accessibilityRole: "button" };
      const intl3 = arg1(dependencyMap[13]).intl;
      obj5.accessibilityLabel = intl3.string(importDefault(dependencyMap[14]).Lq9Set);
      const obj6 = { variant: "text-sm/semibold" };
      const intl4 = arg1(dependencyMap[13]).intl;
      obj6.children = intl4.string(importDefault(dependencyMap[14]).Lq9Set);
      const items5 = [callback(arg1(dependencyMap[15]).Text, obj6), ];
      const obj7 = {
        style: tmp.avatarList,
        children: stateFromStores1.map((guild_id) => {
              const guild = authStore.getGuild(guild_id.guild_id);
              let tmp2 = null;
              if (null != guild) {
                const obj = {};
                ({ guildAvatar: obj.style, guildAvatarText: obj.textStyle } = tmp);
                obj.guild = guild;
                obj.size = tmp(stateFromStores1[17]).GuildIconSizes.SMALL;
                tmp2 = callback(stateFromStores(stateFromStores1[17]), obj, guild.id);
                const tmp6 = stateFromStores(stateFromStores1[17]);
              }
              return tmp2;
            })
      };
      items5[1] = callback(View, obj7);
      obj5.children = items5;
      obj4.children = callback2(importDefault(dependencyMap[12]), obj5);
      tmp15 = callback(View, obj4);
      const tmp21 = importDefault(dependencyMap[12]);
    }
    items4[1] = tmp15;
    obj.children = items4;
    let tmp5Result = callback2(View, obj);
    const tmp5 = callback2;
    const tmp6 = View;
  } else {
    tmp5Result = null;
  }
  return tmp5Result;
};
