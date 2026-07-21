// Module ID: 9985
// Function ID: 77217
// Name: UserSummaryItem
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 9985 (UserSummaryItem)
import "result";
import { View } from "result";
import closure_4 from "result";
import { jsx } from "result";
import result from "result";
import result from "result";

result = { container: { flexDirection: "row" }, names: {} };
result = { color: require("result").colors.TEXT_SUBTLE };
result.namesLegacy = result;
const obj1 = { -1396905285: "<string:1895826088>", "Null": "Boolean", "Null": null, backgroundColor: require("result").colors.BACKGROUND_BASE_LOWEST };
result.plusCountContainer = obj1;
result.cutout = { marginRight: -4 };
result = result.createStyles(result);
const obj2 = { direction: require("result").CutoutDirection.RIGHT };
result = result.fileFinishedImporting("components_native/common/UserSummaryItem.tsx");

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
  const arg1 = users;
  let renderedUsers = users.renderedUsers;
  if (renderedUsers === undefined) {
    renderedUsers = [];
  }
  const importDefault = renderedUsers;
  ({ withNames, guildId } = users);
  const dependencyMap = guildId;
  ({ avatarSize, channelId } = users);
  if (avatarSize === undefined) {
    avatarSize = arg1(dependencyMap[6]).AvatarSizes.XXSMALL;
  }
  const View = avatarSize;
  ({ cutout, withPlusCount } = users);
  if (cutout === undefined) {
    cutout = obj2;
  }
  let closure_4 = cutout;
  const jsx = users.cutoutStyle;
  let result;
  let obj2;
  let closure_8;
  let items1;
  let closure_10;
  const tmp3 = result();
  result = tmp3;
  const tmp4 = renderedUsers.length > 0 ? renderedUsers.length : users.length;
  const bound = Math.min(tmp4, max);
  obj2 = bound;
  closure_8 = {};
  let obj = arg1(dependencyMap[7]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => users.forEach((id) => {
    if (tmp) {
      closure_8[id.id] = member.getMember(closure_2, id.id);
    }
  }));
  if (0 === bound) {
    return null;
  } else {
    items1 = [];
    closure_10 = 0;
    let num2 = 0;
    if (0 < bound) {
      do {
        let tmp7 = function _loop() {
          if (0 === lib.length) {
            const users = tmp8;
            let id;
            if (null != users[closure_10]) {
              id = tmp8.id;
            }
            if (null == id) {
              const _HermesInternal = HermesInternal;
              id = "@" + closure_10;
            }
            let obj = lib(guildId[8]);
            let fn = obj.makeSource(null);
            if (null != users[closure_10]) {
              const lib = closure_8[tmp8.id];
              fn = function o(animate) {
                let flag = animate;
                if (animate === undefined) {
                  flag = false;
                }
                let avatarURL = tmp8.getAvatarURL(closure_2, tmp8(closure_2[6]).AVATAR_SIZE_MAP[closure_3], flag);
                let avatar;
                if (null != lib) {
                  avatar = lib.avatar;
                }
                let tmp4 = avatarURL;
                if (null != avatar) {
                  const guildMemberAvatarURL = lib(closure_2[8]).getGuildMemberAvatarURL(lib, flag);
                  if (null != guildMemberAvatarURL) {
                    avatarURL = guildMemberAvatarURL;
                  }
                  tmp4 = avatarURL;
                  const obj = lib(closure_2[8]);
                }
                return lib(closure_2[8]).makeSource(tmp4);
              };
            }
            const push = items1.push;
            const CutoutableAvatarImage = users(guildId[6]).CutoutableAvatarImage;
            if (tmp) {
              obj = { size: avatarSize, source: fn };
              const items = [tmp3.cutout, cutoutStyle];
              obj.style = items;
              obj.cutout = cutout;
              push(tmp17(CutoutableAvatarImage, obj, id));
            } else {
              obj = { size: avatarSize, source: fn };
              push(tmp17(CutoutableAvatarImage, obj, id));
            }
          } else {
            items1.push(lib[closure_10]);
          }
        }();
        num2 = num2 + 1;
        closure_10 = num2;
      } while (num2 < bound);
    }
    let obj1 = importDefault(dependencyMap[9]);
    const name = obj1.getName(guildId, channelId, users[0]);
    let tmp11 = withNames;
    if (withNames) {
      tmp11 = users.length > 1;
    }
    let formatToPlainStringResult = name;
    if (tmp11) {
      const intl = arg1(dependencyMap[10]).intl;
      obj = { name, count: users.length - 1 };
      formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[10]).t.GhkJ21, obj);
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
          items1.push(jsx(arg1(dependencyMap[11]).Text, obj, combined));
        } else {
          obj1 = {};
          const items3 = [tmp3.namesLegacy, namesStyle];
          obj1.style = items3;
          obj1.numberOfLines = 1;
          obj1.children = formatToPlainStringResult;
          items1.push(jsx(arg1(dependencyMap[6]).LegacyText, obj1, combined));
        }
      }
    }
    if (tmp4 > max) {
      if (withPlusCount) {
        items1.pop();
        const text = `+${tmp4 + 1 - max}`;
        const tmp28 = arg1(dependencyMap[6]).AVATAR_SIZE_MAP[avatarSize];
        obj2 = {};
        const items4 = [tmp3.plusCountContainer, ];
        const obj3 = { borderRadius: tmp28, width: tmp28, height: tmp28, padding: tmp28 / 8 };
        items4[1] = obj3;
        obj2.style = items4;
        const obj4 = { hasMaxConnections: null, isBoostOnlySubscription: "0fef0a9d83d27dc691bf77b0bdae0680", children: text };
        obj2.children = jsx(arg1(dependencyMap[11]).Text, obj4);
        const _HermesInternal = HermesInternal;
        items1.push(<View key={"plus-" + `+${tmp4 + 1 - max}`} {...obj2} />);
      }
    }
    const obj5 = {};
    const items5 = [users.style, tmp3.container];
    obj5.style = items5;
    obj5.children = items1;
    return <View {...obj5} />;
  }
};
