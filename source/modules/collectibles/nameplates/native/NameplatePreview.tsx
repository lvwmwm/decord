// Module ID: 9798
// Function ID: 76093
// Name: NameplatePreview
// Dependencies: []
// Exports: NameplatePreview

// Module 9798 (NameplatePreview)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
let closure_9 = arg1(dependencyMap[5]).createStyles((arg0) => {
  let obj = {};
  obj = { <string:2599080275>: false, <string:3505642171>: null, <string:3757145625>: "\u{1F43F}\uFE0F", <string:1221882832>: 7, <string:1319336657>: 370 };
  let num = 0;
  if (arg0) {
    num = importDefault(dependencyMap[6]).radii.sm;
  }
  obj.borderRadius = num;
  obj.padding = importDefault(dependencyMap[6]).space.PX_8;
  obj.backgroundColor = importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOWEST;
  obj.container = obj;
  obj = {};
  let num3 = 0;
  if (arg0) {
    num3 = importDefault(dependencyMap[6]).radii.sm;
  }
  obj.borderRadius = num3;
  obj.nameplate = obj;
  obj.avatar = { borderRadius: importDefault(dependencyMap[6]).radii.round, marginRight: importDefault(dependencyMap[6]).space.PX_8 };
  const obj1 = { borderRadius: importDefault(dependencyMap[6]).radii.round, marginRight: importDefault(dependencyMap[6]).space.PX_8 };
  obj.content = { flex: 1, paddingRight: importDefault(dependencyMap[6]).space.PX_40 };
  return obj;
});
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/collectibles/nameplates/native/NameplatePreview.tsx");

export const NameplatePreview = function NameplatePreview(aria-hidden) {
  let nameplate;
  let nameplateData;
  let pendingDisplayNameStyles;
  let pendingGlobalName;
  let user;
  ({ nameplate, nameplateData, user } = aria_hidden);
  const arg1 = user;
  let flag = aria_hidden.hasRoundedCorners;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = aria_hidden.animate;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const guildId = aria_hidden.guildId;
  const importDefault = guildId;
  ({ pendingDisplayNameStyles, pendingGlobalName } = aria_hidden);
  let dependencyMap;
  let React;
  let View;
  const tmp = callback2(flag);
  dependencyMap = tmp;
  if (null != nameplate) {
    let obj = arg1(dependencyMap[7]);
    nameplateData = obj.getNameplateData(nameplate);
  }
  let obj1 = arg1(dependencyMap[8]);
  const avatarDecoration = obj1.useAvatarDecoration(user, guildId);
  const pendingAvatarDecoration = importDefault(dependencyMap[9])({ guildId }).pendingAvatarDecoration;
  let obj2 = arg1(dependencyMap[10]);
  const items = [closure_5];
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  React = stateFromStores;
  let obj3 = arg1(dependencyMap[10]);
  const items1 = [closure_6];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = null;
      if (null != user) {
        member = member.getMember(guildId, user.id);
      }
    }
    return member;
  });
  let obj4 = importDefault(dependencyMap[11]);
  const name = obj4.useName(user);
  if (null == pendingGlobalName) {
    let tmp8 = name;
    if (null != guildId) {
      let nick;
      if (null != stateFromStores1) {
        nick = stateFromStores1.nick;
      }
      tmp8 = name;
      if (null != nick) {
        let nick1;
        if (null != stateFromStores1) {
          nick1 = stateFromStores1.nick;
        }
        tmp8 = nick1;
      }
    }
    pendingGlobalName = tmp8;
  }
  let tmp11 = avatarDecoration;
  if (undefined !== pendingAvatarDecoration) {
    tmp11 = pendingAvatarDecoration;
  }
  View = tmp11;
  obj = { userId: user.id, guildId, pendingDisplayNameStyles };
  const tmp12 = importDefault(dependencyMap[12])(obj);
  const items2 = [tmp.avatar, user, guildId, tmp11, stateFromStores];
  obj = { style: tmp.container, aria-hidden: aria_hidden.aria-hidden };
  const memo = React.useMemo(() => {
    const obj = { style: tmp.avatar, user, guildId, size: user(tmp[13]).AvatarSizes.NORMAL, avatarDecoration: tmp11, animate: !stateFromStores, autoStatusCutout: true, aria-hidden: true };
    return callback(user(tmp[13]).Avatar, obj);
  }, items2);
  obj1 = { nameplate: nameplateData, style: tmp.nameplate, fullOpacity: true, animate: flag2 };
  const items3 = [callback(importDefault(dependencyMap[14]), obj1), , ];
  obj2 = { style: tmp.avatar, children: memo };
  items3[1] = callback(View, obj2);
  obj3 = { style: tmp.content };
  let tmp16 = null != tmp12;
  if (tmp16) {
    obj4 = { userId: user.id, guildId, userName: pendingGlobalName, variant: "text-md/semibold", effectDisplayType: arg1(dependencyMap[16]).EffectDisplayType.STATIC, lineClamp: 1, pendingDisplayNameStyles };
    tmp16 = callback(importDefault(dependencyMap[15]), obj4);
    const tmp20 = importDefault(dependencyMap[15]);
  }
  const items4 = [tmp16, ];
  let tmp22 = null == tmp12;
  if (tmp22) {
    const obj5 = { children: pendingGlobalName };
    tmp22 = callback(arg1(dependencyMap[17]).Text, obj5);
  }
  items4[1] = tmp22;
  obj3.children = items4;
  items3[2] = closure_8(View, obj3);
  obj.children = items3;
  return closure_8(View, obj);
};
