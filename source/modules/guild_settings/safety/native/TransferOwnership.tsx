// Module ID: 11019
// Function ID: 85740
// Name: TransferOwnership
// Dependencies: [5, 57, 31, 27, 1849, 11018, 653, 33, 4130, 689, 3834, 1456, 566, 44, 8482, 11016, 3830, 4319, 5513, 4126, 11020, 1273, 1212, 3969, 5501, 9132, 4543, 2]
// Exports: default

// Module 11019 (TransferOwnership)
import closure_3 from "TransferOwnershipModalScenes";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import TransferOwnershipModalScenes from "TransferOwnershipModalScenes";
import { NOOP } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_13;
let closure_14;
let closure_15;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ View: closure_6, Image: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
({ TransferOwnershipModalScenes: closure_10, TransferOwnershipVerificationTypes: closure_11 } = TransferOwnershipModalScenes);
({ jsx: closure_13, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.background = _createForOfIteratorHelperLoose;
let obj1 = { alignItems: "center", paddingVertical: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.header = obj1;
_createForOfIteratorHelperLoose.arrow = { width: 78, height: 15, paddingVertical: 1, marginBottom: 2 };
_createForOfIteratorHelperLoose.avatarsWrapper = { flexDirection: "row", justifyContent: "flex-start", width: 160, height: 80, marginBottom: 30 };
let obj2 = { position: "absolute", left: 71, top: -2, borderRadius: 44, width: 88, height: 88, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.avatarFauxBorder = obj2;
_createForOfIteratorHelperLoose.otherUserAvatar = { top: 4, left: 4 };
_createForOfIteratorHelperLoose.aka = { flex: 1 };
_createForOfIteratorHelperLoose.miniAvatar = { marginRight: 4, justifyContent: "center", alignContent: "center" };
_createForOfIteratorHelperLoose.miniGuildIcon = { paddingRight: 4, paddingLeft: 2, justifyContent: "center", alignContent: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("result").fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnership.tsx");

export default function TransferOwnership(guild) {
  guild = guild.guild;
  const toUser = guild.toUser;
  let dependencyMap;
  let stateFromStores;
  function _handleTransfer() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = stateFromStores(tmp);
    return obj(...arguments);
  }
  class GuildWithSmallIcon {
    constructor() {
      obj = {};
      tmp4 = null;
      tmp2 = outer1_15;
      tmp3 = outer1_14;
      if (null != guild.icon) {
        tmp5 = outer1_13;
        tmp6 = outer1_6;
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
        obj.children = outer1_13(tmp9, obj1);
        tmp4 = outer1_13(outer1_6, obj);
      }
      items = [, ];
      items[0] = tmp4;
      obj2 = { variant: "text-md/bold", children: guild.name };
      items[1] = outer1_13(guild(useNavigation[19]).Text, obj2);
      obj.children = items;
      return tmp2(tmp3, obj);
    }
  }
  let obj = guild(3834);
  const token = obj.useToken(toUser(689).modules.mobile.TABLE_ROW_PADDING);
  const tmp2 = _createForOfIteratorHelperLoose();
  let obj1 = guild(1456);
  dependencyMap = obj1.useNavigation();
  let obj2 = guild(566);
  let items = [_isNativeReflectConstruct];
  stateFromStores = obj2.useStateFromStores(items, () => {
    const currentUser = outer1_9.getCurrentUser();
    toUser(44)(null != currentUser, "TransferOwnership: currentUser cannot be undefined");
    return currentUser;
  });
  let tmp4 = callback(nickname.useState(false), 2);
  const first = tmp4[0];
  callback = tmp4[1];
  let obj3 = toUser(4319);
  nickname = obj3.getNickname(guild.id, undefined, toUser);
  const hasAvatarForGuildResult = toUser.hasAvatarForGuild(guild.id);
  obj = { style: tmp2.background, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false };
  obj = {};
  obj1 = { paddingTop: toUser(689).space.PX_16, paddingHorizontal: token };
  obj.style = obj1;
  obj2 = { style: tmp2.header };
  obj3 = { source: toUser(11020), style: tmp2.arrow };
  const items1 = [callback2(_handleTransfer, obj3), , , ];
  const obj4 = { style: tmp2.avatarsWrapper };
  const obj5 = { user: stateFromStores, guildId: guild.id, size: guild(1273).AvatarSizes.XXLARGE };
  const items2 = [callback2(guild(1273).Avatar, obj5), ];
  const obj6 = { style: tmp2.avatarFauxBorder };
  const obj7 = { user: toUser, guildId: undefined, size: guild(1273).AvatarSizes.XXLARGE, style: tmp2.otherUserAvatar };
  obj6.children = callback2(guild(1273).Avatar, obj7);
  items2[1] = callback2(hasAvatarForGuildResult, obj6);
  obj4.children = items2;
  items1[1] = callback3(hasAvatarForGuildResult, obj4);
  const obj8 = { variant: "text-xs/medium", color: "text-default", children: guild.name };
  items1[2] = callback2(guild(4126).Text, obj8);
  const obj9 = { variant: "text-md/medium", color: "text-default" };
  if (null == nickname) {
    if (!hasAvatarForGuildResult) {
      const intl = guild(1212).intl;
      const obj10 = { GuildHook: GuildWithSmallIcon };
      class GuildWithSmallIcon {
        constructor() {
          obj = {};
          tmp4 = null;
          tmp2 = outer1_15;
          tmp3 = outer1_14;
          if (null != guild.icon) {
            tmp5 = outer1_13;
            tmp6 = outer1_6;
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
            obj.children = outer1_13(tmp9, obj1);
            tmp4 = outer1_13(outer1_6, obj);
          }
          items = [, ];
          items[0] = tmp4;
          obj2 = { variant: "text-md/bold", children: guild.name };
          items[1] = outer1_13(guild(useNavigation[19]).Text, obj2);
          obj.children = items;
          return tmp2(tmp3, obj);
        }
      }
      obj10.user = toUser(3969).getUserTag(toUser);
      let formatResult = intl.format(tmp15, obj10);
      const obj17 = toUser(3969);
    }
    obj9.children = formatResult;
    items1[3] = tmp8(tmp12, obj9, "transfer-ownership-details");
    obj2.children = items1;
    const items3 = [tmp10(tmp11, obj2), , ];
    class GuildWithSmallIcon {
      constructor() {
        obj = {};
        tmp4 = null;
        tmp2 = outer1_15;
        tmp3 = outer1_14;
        if (null != guild.icon) {
          tmp5 = outer1_13;
          tmp6 = outer1_6;
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
          obj.children = outer1_13(tmp9, obj1);
          tmp4 = outer1_13(outer1_6, obj);
        }
        items = [, ];
        items[0] = tmp4;
        obj2 = { variant: "text-md/bold", children: guild.name };
        items[1] = outer1_13(guild(useNavigation[19]).Text, obj2);
        obj.children = items;
        return tmp2(tmp3, obj);
      }
    }
    const obj11 = {};
    const intl3 = guild(1212).intl;
    obj11.title = intl3.string(guild(1212).t.Z5s7PM);
    obj11.hasIcons = false;
    const obj12 = { checked: first };
    const intl4 = guild(1212).intl;
    const obj13 = { username: toUser(3969).getUserTag(toUser) };
    obj12.label = intl4.format(guild(1212).t.xm6ACJ, obj13);
    obj12.onPress = function handleConfirmToggle(arg0) {
      callback(arg0);
    };
    obj11.children = callback2(guild(9132).TableCheckboxRow, obj12);
    items3[1] = callback2(guild(5501).TableRowGroup, obj11);
    const obj14 = {
      onPress: function handleTransfer() {
          return _handleTransfer(...arguments);
        }
    };
    const intl5 = guild(1212).intl;
    obj14.text = intl5.string(guild(1212).t.jqqLb6);
    obj14.disabled = !first;
    items3[2] = callback2(guild(4543).Button, obj14);
    obj.children = items3;
    obj.children = tmp10(tmp11, obj);
    return tmp8(closure_8, obj);
  }
  const intl2 = guild(1212).intl;
  const obj15 = {
    GuildHook: GuildWithSmallIcon,
    user: toUser(3969).getUserTag(toUser),
    AKAHook: function NicknameAKA() {
      const tmp = outer1_16();
      let obj = {};
      obj = { style: tmp.aka, variant: "text-sm/bold", color: "text-default", children: ["AKA", " "] };
      const items = [outer1_15(guild(4126).Text, obj), , ];
      let tmp4 = null;
      if (closure_6) {
        obj = { style: tmp.miniAvatar, user: toUser, guildId: guild.id, size: guild(1273).AvatarSizes.XXSMALL };
        tmp4 = outer1_13(guild(1273).Avatar, obj);
      }
      items[1] = tmp4;
      const obj1 = { variant: "text-md/medium" };
      if (null != nickname) {
        let str = nickname;
      } else {
        str = toUser.toString();
      }
      obj1.children = str;
      items[2] = outer1_13(guild(4126).Text, obj1);
      obj.children = items;
      return outer1_15(outer1_14, obj);
    }
  };
  formatResult = intl2.format(guild(1212).t.E90vgp, obj15);
};
