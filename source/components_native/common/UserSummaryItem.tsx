// Module ID: 10026
// Function ID: 77464
// Name: UserSummaryItem
// Dependencies: [31, 27, 1917, 33, 4130, 689, 1273, 566, 1392, 4319, 1212, 4126, 2]
// Exports: default

// Module 10026 (UserSummaryItem)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = { container: { flexDirection: "row" }, names: { marginStart: 4, paddingRight: 1 } };
_createForOfIteratorHelperLoose = { marginStart: 4, paddingRight: 1, color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
_createForOfIteratorHelperLoose.namesLegacy = _createForOfIteratorHelperLoose;
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, marginStart: 2, alignItems: "center" };
_createForOfIteratorHelperLoose.plusCountContainer = obj1;
_createForOfIteratorHelperLoose.cutout = { marginRight: -4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { direction: require("Button").CutoutDirection.RIGHT };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("components_native/common/UserSummaryItem.tsx");

export default function UserSummaryItem(users) {
  let avatarSize;
  let channelId;
  let cutout;
  let guildId;
  let max;
  let namesStyle;
  let namesVariant;
  let withNames;
  let withPlusCount;
  ({ namesStyle, namesVariant, max } = users);
  if (max === undefined) {
    max = 3;
  }
  users = users.users;
  let renderedUsers = users.renderedUsers;
  if (renderedUsers === undefined) {
    renderedUsers = [];
  }
  ({ withNames, guildId } = users);
  ({ avatarSize, channelId } = users);
  if (avatarSize === undefined) {
    avatarSize = users(guildId[6]).AvatarSizes.XXSMALL;
  }
  ({ cutout, withPlusCount } = users);
  if (cutout === undefined) {
    cutout = bound;
  }
  const cutoutStyle = users.cutoutStyle;
  let _createForOfIteratorHelperLoose;
  bound = undefined;
  let closure_8;
  let items1;
  let c10;
  const tmp3 = _createForOfIteratorHelperLoose();
  _createForOfIteratorHelperLoose = tmp3;
  let tmp4 = renderedUsers.length > 0 ? renderedUsers.length : users.length;
  bound = Math.min(tmp4, max);
  closure_8 = {};
  let obj = users(guildId[7]);
  let items = [cutout];
  const stateFromStores = obj.useStateFromStores(items, () => users.forEach((id) => {
    if (tmp) {
      outer1_8[id.id] = cutout.getMember(outer1_2, id.id);
    }
  }));
  if (0 === bound) {
    return null;
  } else {
    items1 = [];
    c10 = 0;
    let num2 = 0;
    if (0 < bound) {
      do {
        let tmp7 = (function _loop() {
          if (0 === length.length) {
            const users = tmp8;
            let id;
            if (null != users[c10]) {
              id = tmp8.id;
            }
            if (null == id) {
              const _HermesInternal = HermesInternal;
              id = "@" + c10;
            }
            let obj = renderedUsers(guildId[8]);
            let fn = obj.makeSource(null);
            if (null != users[c10]) {
              fn = function o(animate) {
                let flag = animate;
                if (animate === undefined) {
                  flag = false;
                }
                let avatarURL = tmp8.getAvatarURL(outer1_2, users(guildId[6]).AVATAR_SIZE_MAP[outer1_3], flag);
                let avatar;
                if (null != user) {
                  avatar = user.avatar;
                }
                let tmp4 = avatarURL;
                if (null != avatar) {
                  const guildMemberAvatarURL = renderedUsers(guildId[8]).getGuildMemberAvatarURL(user, flag);
                  if (null != guildMemberAvatarURL) {
                    avatarURL = guildMemberAvatarURL;
                  }
                  tmp4 = avatarURL;
                  const obj = renderedUsers(guildId[8]);
                }
                return renderedUsers(guildId[8]).makeSource(tmp4);
              };
            }
            const push = items1.push;
            const CutoutableAvatarImage = users(guildId[6]).CutoutableAvatarImage;
            if (tmp) {
              obj = { size: avatarSize, source: fn };
              const items = [_undefined.cutout, cutoutStyle];
              obj.style = items;
              obj.cutout = cutout;
              push(tmp17(CutoutableAvatarImage, obj, id));
            } else {
              obj = { size: avatarSize, source: fn };
              push(tmp17(CutoutableAvatarImage, obj, id));
            }
          } else {
            items1.push(length[c10]);
          }
        })();
        num2 = num2 + 1;
        c10 = num2;
      } while (num2 < bound);
    }
    let obj1 = renderedUsers(guildId[9]);
    const name = obj1.getName(guildId, channelId, users[0]);
    let tmp11 = withNames;
    if (withNames) {
      tmp11 = users.length > 1;
    }
    let formatToPlainStringResult = name;
    if (tmp11) {
      const intl = users(guildId[10]).intl;
      obj = { name, count: users.length - 1 };
      formatToPlainStringResult = intl.formatToPlainString(users(guildId[10]).t.GhkJ21, obj);
    }
    if (withNames) {
      if (null != users[0]) {
        const _HermesInternal2 = HermesInternal;
        const combined = "username-" + formatToPlainStringResult;
        if (null != namesVariant) {
          obj = { variant: namesVariant, color: "redesign-channel-name-muted-text" };
          const items2 = [tmp3.names, namesStyle];
          obj.style = items2;
          obj.lineClamp = 1;
          obj.children = formatToPlainStringResult;
          items1.push(cutoutStyle(users(guildId[11]).Text, obj, combined));
        } else {
          obj1 = {};
          const items3 = [tmp3.namesLegacy, namesStyle];
          obj1.style = items3;
          obj1.numberOfLines = 1;
          obj1.children = formatToPlainStringResult;
          items1.push(cutoutStyle(users(guildId[6]).LegacyText, obj1, combined));
        }
      }
    }
    if (tmp4 > max) {
      if (withPlusCount) {
        items1.pop();
        const text = `+${tmp4 + 1 - max}`;
        const tmp28 = users(guildId[6]).AVATAR_SIZE_MAP[avatarSize];
        const obj2 = {};
        const items4 = [tmp3.plusCountContainer, ];
        const obj3 = { borderRadius: tmp28, width: tmp28, height: tmp28, padding: tmp28 / 8 };
        items4[1] = obj3;
        obj2.style = items4;
        const obj4 = { variant: "text-xs/normal", color: "mobile-text-heading-primary", children: text };
        obj2.children = cutoutStyle(users(guildId[11]).Text, obj4);
        let _HermesInternal = HermesInternal;
        items1.push(cutoutStyle(avatarSize, obj2, "plus-" + `+${tmp4 + 1 - max}`));
      }
    }
    const obj5 = {};
    const items5 = [users.style, tmp3.container];
    obj5.style = items5;
    obj5.children = items1;
    return cutoutStyle(avatarSize, obj5);
  }
};
