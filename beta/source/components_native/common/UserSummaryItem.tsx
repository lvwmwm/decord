// Module ID: 9514
// Function ID: 9515
// Name: UserSummaryItem
// Dependencies: [19, 17, 2108, 21, 4836, 576, 1177, 504, 1397, 4988, 1115, 4832, 2]
// Exports: default

// Module 9514 (UserSummaryItem)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let avatarURL;

let obj2;
let obj3;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: { flexDirection: "row" }, names: { marginStart: 4, paddingRight: 1 }, namesLegacy: obj2, plusCountContainer: obj3, cutout: { marginRight: -4 } };
obj2 = { marginStart: 4, paddingRight: 1, color: nativeDefault.colors.TEXT_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginStart: 2, alignItems: "center" };
let closure_6 = createStyles(obj);
const obj4 = { direction: native.CutoutDirection.RIGHT };
let size = size_mod;
const result = size.fileFinishedImporting("components_native/common/UserSummaryItem.tsx");

export default function UserSummaryItem(style) {
  let avatarSize;
  let channelId;
  let cutout;
  let guildId;
  let max;
  let member;
  let namesStyle;
  let namesVariant;
  let withNames;
  let withPlusCount;
  ({ namesStyle, namesVariant, max } = style);
  style = style.style;
  if (max === undefined) {
    max = 3;
  }
  const users = style.users;
  let renderedUsers = style.renderedUsers;
  if (renderedUsers === undefined) {
    renderedUsers = [];
  }
  ({ withNames, guildId } = style);
  ({ avatarSize, channelId } = style);
  if (avatarSize === undefined) {
    let tmp = users;
    let tmp2 = avatarSize;
    avatarSize = users(avatarSize[6]).AvatarSizes.XXSMALL;
  }
  ({ cutout, withPlusCount } = style);
  if (cutout === undefined) {
    cutout = obj4;
  }
  const cutoutStyle = style.cutoutStyle;
  const tmp3 = closure_6();
  const tmp4 = renderedUsers.length > 0 ? renderedUsers.length : users.length;
  const bound = Math.min(tmp4, max);
  let obj = {};
  let obj2 = users(avatarSize[7]);
  const items = [GuildMemberStore];
  const stateFromStores = obj2.useStateFromStores(items, () => users.forEach((id) => {
    let tmp2 = null != guildId;
    const tmp = guildId;
    if (tmp2) {
      tmp2 = null != id;
    }
    if (tmp2) {
      obj[id.id] = member.getMember(tmp, id.id);
    }
  }));
  if (0 === bound) {
    return null;
  } else {
    const items1 = [];
    let num = 0;
    let num2 = 0;
    if (0 < bound) {
      do {
        if (0 === renderedUsers.length) {
          let tmp11 = users[num];
          let closure_0 = tmp11;
          let id;
          if (tmp11 != null) {
            id = tmp11.id;
          }
          if (id == null) {
            let _HermesInternal = HermesInternal;
            id = "@" + num;
          }
          let tmp14 = avatarSize;
          let obj3 = guildId(avatarSize[8]);
          let fn = obj3.makeSource(null);
          if (null != tmp11) {
            let closure_1 = obj[tmp11.id];
            fn = function u(flag) {
              if (flag === undefined) {
                flag = false;
              }
              avatarURL = avatarURL.getAvatarURL(guildId, native.AVATAR_SIZE_MAP[avatarSize], flag);
              let avatar;
              if (closure_1 != null) {
                avatar = tmp3.avatar;
              }
              let tmp5 = avatarURL;
              if (null != avatar) {
                obj = AvatarUtilsDefault;
                let guildMemberAvatarURL = obj.getGuildMemberAvatarURL(tmp3, flag);
                if (guildMemberAvatarURL == null) {
                  guildMemberAvatarURL = avatarURL;
                }
                tmp5 = guildMemberAvatarURL;
              }
              const obj2 = AvatarUtilsDefault;
              return obj2.makeSource(tmp5);
            };
          }
          if (num < tmp7) {
            let items2 = [tmp3.cutout, cutoutStyle];
            let arr = items1.push(jsx(users(tmp14[6]).CutoutableAvatarImage, { size: avatarSize, source: fn, style: items2, cutout }, id));
          } else {
            let arr2 = items1.push(jsx(users(tmp14[6]).CutoutableAvatarImage, { size: avatarSize, source: fn }, id));
          }
        } else {
          let arr3 = items1.push(renderedUsers[num]);
        }
        num = num2 + 1;
        num2 = num;
      } while (num < bound);
    }
    const obj6 = guildId(avatarSize[9]);
    const name = obj6.getName(guildId, channelId, users[0]);
    let formatToPlainStringResult = name;
    const tmp24 = withNames && users.length > 1;
    if (tmp24) {
      const intl = users(tmp22[10]).intl;
      const obj7 = { name, count: users.length - 1 };
      formatToPlainStringResult = intl.formatToPlainString(users(tmp22[10]).t.GhkJ21, obj7);
    }
    if (withNames) {
      if (null != users[0]) {
        const _HermesInternal3 = HermesInternal;
        const combined = "username-" + formatToPlainStringResult;
        if (null != namesVariant) {
          const items3 = [tmp3.names, namesStyle];
          items1.push(jsx(users(avatarSize[11]).Text, { variant: namesVariant, color: "redesign-channel-name-muted-text", style: items3, lineClamp: 1, children: formatToPlainStringResult }, combined));
        } else {
          const items4 = [tmp3.namesLegacy, namesStyle];
          items1.push(jsx(users(avatarSize[6]).LegacyText, { style: items4, numberOfLines: 1, children: formatToPlainStringResult }, combined));
        }
      }
    }
    if (tmp4 > max) {
      if (withPlusCount) {
        items1.pop();
        const text = `+${tmp4 + 1 - max}`;
        const tmp36 = users(avatarSize[6]).AVATAR_SIZE_MAP[avatarSize];
        const items5 = [tmp3.plusCountContainer, ];
        size = { borderRadius: tmp36, width: tmp36, height: tmp36, padding: tmp36 / 8 };
        items5[1] = size;
        const push = items1.push;
        const _HermesInternal2 = HermesInternal;
        push(<obj key={"plus-" + `+${tmp4 + 1 - max}`} style={items5}>{null}</obj>);
      }
    }
    const items6 = [style, tmp3.container];
    return <obj style={items6}>{items1}</obj>;
  }
};
