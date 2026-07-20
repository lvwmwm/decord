// Module ID: 10976
// Function ID: 85456
// Name: TransferOwnership
// Dependencies: []
// Exports: default

// Module 10976 (TransferOwnership)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ View: closure_6, Image: closure_7, ScrollView: closure_8 } = arg1(dependencyMap[3]));
let closure_9 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[3]);
({ TransferOwnershipModalScenes: closure_10, TransferOwnershipVerificationTypes: closure_11 } = arg1(dependencyMap[5]));
const NOOP = arg1(dependencyMap[6]).NOOP;
const tmp3 = arg1(dependencyMap[5]);
({ jsx: closure_13, Fragment: closure_14, jsxs: closure_15 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
obj.background = obj;
const obj1 = { <string:1687568131>: 52881784.83212474, <string:2700805186>: 0.0000000000000000000000000000000000000000000000000000000000000000000000011319598867188059, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
obj.header = obj1;
obj.arrow = {};
obj.avatarsWrapper = {};
const obj2 = { icon: "png", construct: "text-xs/semibold", body: "text-brand", color: "flex", accessibilityRole: "center", includes: "center", backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
obj.avatarFauxBorder = obj2;
obj.otherUserAvatar = {};
obj.aka = { flex: 1 };
obj.miniAvatar = { to: "<string:1124139010>", code: "f14c54685496e4b330372e883666fa1c", marginBottom: "ko.messages.f14c54685496e4b330372e883666fa1c.compiled.messages" };
obj.miniGuildIcon = { "Bool(false)": "isArray", "Bool(false)": "current", "Bool(false)": "textAlign", "Bool(false)": "r" };
let closure_16 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnership.tsx");

export default function TransferOwnership(guild) {
  guild = guild.guild;
  const arg1 = guild;
  const toUser = guild.toUser;
  const importDefault = toUser;
  let closure_2;
  let closure_3;
  function _handleTransfer() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = stateFromStores(tmp);
    const _handleTransfer = obj;
    return obj(...arguments);
  }
  class GuildWithSmallIcon {
    constructor() {
      obj = {};
      tmp4 = null;
      tmp2 = closure_15;
      tmp3 = closure_14;
      if (null != guild.icon) {
        tmp5 = closure_13;
        tmp6 = closure_6;
        obj = {};
        obj.style = tmp.miniGuildIcon;
        tmp7 = toUser;
        tmp8 = useNavigation;
        num = 18;
        obj1 = {};
        tmp10 = guild;
        obj1.guild = guild;
        tmp11 = guild;
        tmp9 = toUser(useNavigation[18]);
        obj1.size = guild(useNavigation[18]).GuildIconSizes.XXSMALL;
        obj.children = closure_13(tmp9, obj1);
        tmp4 = closure_13(closure_6, obj);
      }
      items = [, ];
      items[0] = tmp4;
      obj2 = { variant: "text-md/bold", children: guild.name };
      items[1] = closure_13(guild(useNavigation[19]).Text, obj2);
      obj.children = items;
      return tmp2(tmp3, obj);
    }
  }
  let obj = arg1(closure_2[10]);
  const token = obj.useToken(importDefault(closure_2[9]).modules.mobile.TABLE_ROW_PADDING);
  const tmp2 = callback4();
  let obj1 = arg1(closure_2[11]);
  closure_2 = obj1.useNavigation();
  let obj2 = arg1(closure_2[12]);
  const items = [closure_9];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    toUser(closure_2[13])(null != currentUser, "TransferOwnership: currentUser cannot be undefined");
    return currentUser;
  });
  closure_3 = stateFromStores;
  const tmp4 = callback(React.useState(false), 2);
  const first = tmp4[0];
  const callback = tmp4[1];
  let obj3 = importDefault(closure_2[17]);
  const nickname = obj3.getNickname(guild.id, undefined, toUser);
  const React = nickname;
  const hasAvatarForGuildResult = toUser.hasAvatarForGuild(guild.id);
  obj = { style: tmp2.background };
  obj = {};
  obj1 = { paddingTop: importDefault(closure_2[9]).space.PX_16, paddingHorizontal: token };
  obj.style = obj1;
  obj2 = { style: tmp2.header };
  obj3 = { source: importDefault(closure_2[20]), style: tmp2.arrow };
  const items1 = [callback2(_handleTransfer, obj3), , , ];
  const obj4 = { style: tmp2.avatarsWrapper };
  const obj5 = { user: stateFromStores, guildId: guild.id, size: arg1(closure_2[21]).AvatarSizes.XXLARGE };
  const items2 = [callback2(arg1(closure_2[21]).Avatar, obj5), ];
  const obj6 = { style: tmp2.avatarFauxBorder };
  const obj7 = { user: toUser, guildId: undefined, size: arg1(closure_2[21]).AvatarSizes.XXLARGE, style: tmp2.otherUserAvatar };
  obj6.children = callback2(arg1(closure_2[21]).Avatar, obj7);
  items2[1] = callback2(hasAvatarForGuildResult, obj6);
  obj4.children = items2;
  items1[1] = callback3(hasAvatarForGuildResult, obj4);
  items1[2] = callback2(arg1(closure_2[19]).Text, { children: guild.name });
  const obj9 = {};
  if (null == nickname) {
    if (!hasAvatarForGuildResult) {
      const intl = arg1(closure_2[22]).intl;
      const obj10 = { GuildHook: GuildWithSmallIcon };
      class GuildWithSmallIcon {
        constructor() {
          obj = {};
          tmp4 = null;
          tmp2 = closure_15;
          tmp3 = closure_14;
          if (null != guild.icon) {
            tmp5 = closure_13;
            tmp6 = closure_6;
            obj = {};
            obj.style = tmp.miniGuildIcon;
            tmp7 = toUser;
            tmp8 = useNavigation;
            num = 18;
            obj1 = {};
            tmp10 = guild;
            obj1.guild = guild;
            tmp11 = guild;
            tmp9 = toUser(useNavigation[18]);
            obj1.size = guild(useNavigation[18]).GuildIconSizes.XXSMALL;
            obj.children = closure_13(tmp9, obj1);
            tmp4 = closure_13(closure_6, obj);
          }
          items = [, ];
          items[0] = tmp4;
          obj2 = { variant: "text-md/bold", children: guild.name };
          items[1] = closure_13(guild(useNavigation[19]).Text, obj2);
          obj.children = items;
          return tmp2(tmp3, obj);
        }
      }
      obj10.user = importDefault(closure_2[23]).getUserTag(toUser);
      let formatResult = intl.format(tmp15, obj10);
      const obj17 = importDefault(closure_2[23]);
    }
    obj9.children = formatResult;
    items1[3] = tmp8(tmp12, obj9, "transfer-ownership-details");
    obj2.children = items1;
    const items3 = [tmp10(tmp11, obj2), , ];
    class GuildWithSmallIcon {
      constructor() {
        obj = {};
        tmp4 = null;
        tmp2 = closure_15;
        tmp3 = closure_14;
        if (null != guild.icon) {
          tmp5 = closure_13;
          tmp6 = closure_6;
          obj = {};
          obj.style = tmp.miniGuildIcon;
          tmp7 = toUser;
          tmp8 = useNavigation;
          num = 18;
          obj1 = {};
          tmp10 = guild;
          obj1.guild = guild;
          tmp11 = guild;
          tmp9 = toUser(useNavigation[18]);
          obj1.size = guild(useNavigation[18]).GuildIconSizes.XXSMALL;
          obj.children = closure_13(tmp9, obj1);
          tmp4 = closure_13(closure_6, obj);
        }
        items = [, ];
        items[0] = tmp4;
        obj2 = { variant: "text-md/bold", children: guild.name };
        items[1] = closure_13(guild(useNavigation[19]).Text, obj2);
        obj.children = items;
        return tmp2(tmp3, obj);
      }
    }
    const obj11 = {};
    const intl3 = arg1(closure_2[22]).intl;
    obj11.title = intl3.string(arg1(closure_2[22]).t.Z5s7PM);
    obj11.hasIcons = false;
    const obj12 = { checked: first };
    const intl4 = arg1(closure_2[22]).intl;
    const obj13 = { username: importDefault(closure_2[23]).getUserTag(toUser) };
    obj12.label = intl4.format(arg1(closure_2[22]).t.xm6ACJ, obj13);
    obj12.onPress = function handleConfirmToggle(arg0) {
      callback(arg0);
    };
    obj11.children = callback2(arg1(closure_2[25]).TableCheckboxRow, obj12);
    items3[1] = callback2(arg1(closure_2[24]).TableRowGroup, obj11);
    const obj14 = {
      onPress: function handleTransfer() {
          return _handleTransfer(...arguments);
        }
    };
    const intl5 = arg1(closure_2[22]).intl;
    obj14.text = intl5.string(arg1(closure_2[22]).t.jqqLb6);
    obj14.disabled = !first;
    items3[2] = callback2(arg1(closure_2[26]).Button, obj14);
    obj.children = items3;
    obj.children = tmp10(tmp11, obj);
    return tmp8(closure_8, obj);
  }
  const intl2 = arg1(closure_2[22]).intl;
  const obj15 = {
    GuildHook: GuildWithSmallIcon,
    user: importDefault(closure_2[23]).getUserTag(toUser),
    AKAHook: function NicknameAKA() {
      const tmp = callback4();
      let obj = {};
      obj = { style: tmp.aka, children: ["gridSectionIndex", "recipientUser"] };
      const items = [callback3(guild(closure_2[19]).Text, obj), , ];
      let tmp4 = null;
      if (hasAvatarForGuildResult) {
        obj = { style: tmp.miniAvatar, user: toUser, guildId: guild.id, size: guild(closure_2[21]).AvatarSizes.XXSMALL };
        tmp4 = callback2(guild(closure_2[21]).Avatar, obj);
      }
      items[1] = tmp4;
      const obj1 = { variant: "text-md/medium" };
      if (null != nickname) {
        let str = nickname;
      } else {
        str = toUser.toString();
      }
      obj1.children = str;
      items[2] = callback2(guild(closure_2[19]).Text, obj1);
      obj.children = items;
      return callback3(closure_14, obj);
    }
  };
  formatResult = intl2.format(arg1(closure_2[22]).t.E90vgp, obj15);
};
