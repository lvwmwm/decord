// Module ID: 11405
// Function ID: 11406
// Name: TransferOwnership
// Dependencies: [5, 32, 19, 17, 1390, 11404, 1085, 21, 5092, 587, 4818, 1503, 504, 38, 8637, 11402, 4808, 5409, 6158, 5088, 6156, 11406, 1200, 1126, 4962, 6264, 6176, 5379, 2]
// Exports: default

// Module 11405 (TransferOwnership)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5088 */;
import GuildIcon from "GuildIcon" /* 6158 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1390 */;
import TransferOwnershipConstants from "TransferOwnershipConstants" /* 11404 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import size_mod from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
let c2, currentUser, dependencyMap, id;

let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
let _slicedToArray = _slicedToArray_mod;
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ TransferOwnershipModalScenes: c9, TransferOwnershipVerificationTypes: c10 } = TransferOwnershipConstants);
const NOOP = Constants.NOOP;
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { background: obj2, header: obj3, arrow: { width: 78, height: 15, paddingVertical: 1, marginBottom: 2 }, avatarsWrapper: { flexDirection: "row", justifyContent: "flex-start", width: 160, height: 80, marginBottom: 30 }, avatarFauxBorder: size, otherUserAvatar: { top: 4, left: 4 }, aka: { flex: 1 }, miniAvatar: { marginRight: 4, justifyContent: "center", alignContent: "center" }, miniGuildIcon: { paddingRight: 4, paddingLeft: 2, justifyContent: "center", alignContent: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
size = { position: "absolute", left: 71, top: -2, borderRadius: 44, width: 88, height: 88, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_15 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_settings/safety/native/TransferOwnership.tsx");

export default function TransferOwnership(guild) {
  let Avatar2;
  let TableCheckboxRow;
  let _undefined;
  let c4;
  let closure_2;
  let format3;
  let intl4;
  let items2;
  let obj13;
  let obj18;
  let obj19;
  let tmp3Result;
  let tmp3Result3;
  let tmp3Result4;
  let tmp8;
  let xm6ACJ;
  guild = guild.guild;
  const toUser = guild.toUser;
  dependencyMap = undefined;
  let stateFromStores;
  _slicedToArray = undefined;
  let nickname;
  let c7;
  let obj = function _handleTransfer() {
    let mfaEnabled;
    let user;
    obj = _asyncToGenerator(async (arg0, value) => {
      let v1;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          c2 = 2;
          if (0 === id) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_0 = tmp;
              if (!mfaEnabled.mfaEnabled) {
                if (null != mfaEnabled.email) {
                  let obj2 = id(c2[14]);
                  id = 1;
                  c2 = 1;
                  const obj5 = { value: obj2.sendTransferOwnershipPincode(user.id), done: false };
                  return obj5;
                }
              }
              let MFA = null;
              const transferOwnership = id(c2[14]).transferOwnership;
              id = user.id;
              const id2 = id.id;
              const tmp15 = id(c2[14]);
              if (mfaEnabled.mfaEnabled) {
                MFA = constants2.MFA;
              }
              const transferOwnershipResult = transferOwnership(id, id2, MFA);
              transferOwnershipResult.then(() => {
                obj = v1(closure_1_2[15]);
                obj.close();
                const obj2 = v1(closure_1_2[14]);
                obj2.close();
                const obj3 = closure_1_0(closure_1_2[16]);
                const result = obj3.showTransferOwnershipSuccess();
              }, closure_1_11);
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_2.push(constants.CONFIRM_EMAIL_CODE);
          }
          c2 = 3;
          return { value: "IconComponent", done: "+51" };
        } catch (tmp22) {
          c2 = 3;
          throw tmp22;
        }
      }
    });
    return obj(...arguments);
  };
  class GuildWithSmallIcon {
    constructor() {
      let items;
      let obj2;
      let tmp10;
      let tmp5 = null;
      const tmp2 = syncedClientThemes;
      const tmp3 = map1;
      if (null != guild.icon) {
        obj = { style: tmp.miniGuildIcon, children: authStore2(tmp10, obj2) };
        obj2 = { guild, size: GuildIcon.GuildIconSizes.XXSMALL };
        tmp10 = GuildIconDefault;
        tmp5 = authStore2(metroRequire, obj);
      }
      const obj3 = { children: items };
      items = [tmp5, ];
      const obj4 = { variant: "text-md/bold", children: guild.name };
      items[1] = authStore2(Text_Text.Text, obj4);
      return tmp2(tmp3, obj3);
    }
  }
  let tmp = guild;
  let tmp2 = dependencyMap;
  obj = guild(4818);
  let tmp3 = toUser;
  const token = obj.useToken(toUser(587).modules.mobile.TABLE_ROW_PADDING);
  let tmp5 = closure_15();
  let obj2 = guild(1503);
  dependencyMap = obj2.useNavigation();
  let obj3 = guild(504);
  let items = [UserStore];
  stateFromStores = obj3.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    toUser(closure_2[13])(null != currentUser, "TransferOwnership: currentUser cannot be undefined");
    return currentUser;
  });
  [tmp8, c4] = _slicedToArray(obj.useState(false), 2);
  const tmp7 = _slicedToArray(obj.useState(false), 2);
  let obj4 = toUser(5409);
  nickname = obj4.getNickname(guild.id, undefined, toUser);
  const hasAvatarForGuildResult = toUser.hasAvatarForGuild(guild.id);
  c7 = hasAvatarForGuildResult;
  let obj5 = { style: tmp5.background, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: null };
  const obj6 = { style: { paddingTop: toUser(587).space.PX_16, paddingHorizontal: token }, children: null };
  const obj8 = { style: tmp5.header, children: null };
  const obj9 = { source: toUser(11406), style: tmp5.arrow };
  ({ paddingTop: toUser(587).space.PX_16, paddingHorizontal: token });
  let tmp15 = toUser(6156);
  const items1 = [closure_12(tmp15, obj9), , , ];
  const obj10 = { style: tmp5.avatarsWrapper, children: items2 };
  const obj11 = { user: stateFromStores, guildId: guild.id, size: guild(1200).AvatarSizes.XXLARGE };
  let Avatar = guild(1200).Avatar;
  items2 = [closure_12(Avatar, obj11), ];
  const obj12 = { style: tmp5.avatarFauxBorder, children: closure_12(Avatar2, obj13) };
  obj13 = { user: toUser, guildId: "r", size: guild(1200).AvatarSizes.XXLARGE, style: tmp5.otherUserAvatar };
  Avatar2 = guild(1200).Avatar;
  items2[1] = closure_12(nickname, obj12);
  items1[1] = closure_14(nickname, obj10);
  const obj14 = { variant: "text-xs/medium", color: "text-default", children: guild.name };
  items1[2] = closure_12(guild(5088).Text, obj14);
  const tmp12 = c7;
  if (null == nickname) {
    let formatResult;
    if (!hasAvatarForGuildResult) {
      const intl = tmp(1126).intl;
      const format = intl.format;
      const obj15 = { GuildHook: GuildWithSmallIcon, user: tmp3Result.getUserTag(toUser) };
      const v2XLnG0 = tmp(1126).t["2XLnG0"];
      tmp3Result = tmp3(4962);
      formatResult = format(v2XLnG0, obj15);
    }
    let str = "transfer-ownership-details";
    const obj16 = { variant: "text-md/medium", color: "text-default", children: formatResult };
    items1[3] = closure_12(tmp16, obj16, "transfer-ownership-details");
    obj8.children = items1;
    const items3 = [tmp13(tmp14, obj8), , ];
    const obj17 = { title: null, hasIcons: false, children: closure_12(TableCheckboxRow, obj18) };
    const TableRowGroup = tmp(6264).TableRowGroup;
    const string = tmp(1126).intl.string;
    class GuildWithSmallIcon {
      constructor() {
        let items;
        let obj2;
        let tmp10;
        let tmp5 = null;
        const tmp2 = syncedClientThemes;
        const tmp3 = map1;
        if (null != guild.icon) {
          obj = { style: tmp.miniGuildIcon, children: authStore2(tmp10, obj2) };
          obj2 = { guild, size: GuildIcon.GuildIconSizes.XXSMALL };
          tmp10 = GuildIconDefault;
          tmp5 = authStore2(metroRequire, obj);
        }
        const obj3 = { children: items };
        items = [tmp5, ];
        const obj4 = { variant: "text-md/bold", children: guild.name };
        items[1] = authStore2(Text_Text.Text, obj4);
        return tmp2(tmp3, obj3);
      }
    }
    obj18 = {
      checked: tmp8,
      label: format3(xm6ACJ, obj19),
      onPress: function handleConfirmToggle(arg0) {
          _undefined(arg0);
        }
    };
    TableCheckboxRow = tmp(6176).TableCheckboxRow;
    const intl3 = tmp(1126).intl;
    format3 = intl3.format;
    obj19 = { username: tmp3Result3.getUserTag(toUser) };
    xm6ACJ = tmp(1126).t.xm6ACJ;
    tmp3Result3 = tmp3(4962);
    items3[1] = closure_12(TableRowGroup, obj17);
    const obj20 = {
      onPress: function handleTransfer() {
          return obj(...arguments);
        },
      text: intl4.string(tmp(1126).t.jqqLb6),
      disabled: !tmp8
    };
    const Button = tmp(5379).Button;
    intl4 = tmp(1126).intl;
    items3[2] = closure_12(Button, obj20);
    obj6.children = items3;
    obj5.children = closure_14(nickname, obj6);
    return closure_12(tmp12, obj5);
  }
  const intl2 = tmp(1126).intl;
  const format2 = intl2.format;
  const obj21 = {
    GuildHook: GuildWithSmallIcon,
    user: tmp3Result4.getUserTag(toUser),
    AKAHook: function NicknameAKA() {
      const tmp = closure_15();
      const items = [, , ];
      obj = { style: tmp.aka, variant: "text-sm/bold", color: "text-default", children: ["AKA", " "] };
      items[0] = syncedClientThemes(Text_Text.Text, obj);
      let tmp6 = null;
      const tmp2 = syncedClientThemes;
      const tmp3 = map1;
      if (c7) {
        const obj2 = { style: tmp.miniAvatar, user: toUser, guildId: guild.id, size: native.AvatarSizes.XXSMALL };
        const Avatar = tmp4(1200).Avatar;
        tmp6 = authStore2(Avatar, obj2);
      }
      items[1] = tmp6;
      let str = nickname;
      const Text = tmp4(5088).Text;
      const tmp10 = authStore2;
      if (nickname == null) {
        str = toUser.toString();
      }
      const obj3 = { children: items };
      items[2] = tmp10(Text, { variant: "text-md/medium", children: str });
      return tmp2(tmp3, obj3);
    }
  };
  const E90vgp = tmp(1126).t.E90vgp;
  tmp3Result4 = tmp3(4962);
  formatResult = format2(E90vgp, obj21);
};
