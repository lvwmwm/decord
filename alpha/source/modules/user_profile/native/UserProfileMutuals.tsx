// Module ID: 13247
// Function ID: 13248
// Name: UserProfileMutuals
// Dependencies: [19, 17, 8283, 6891, 21, 5090, 8290, 12383, 12979, 5054, 12388, 1999, 8279, 7043, 6189, 13018, 1200, 5086, 12393, 12397, 6161, 12394, 2]
// Exports: default

// Module 13247 (UserProfileMutuals)
import react_native from "react-native" /* 17 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import Constants from "Constants" /* 6891 */;
import Constants2 from "Constants" /* 8283 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let metroImportDefault;
let metroRequire;
const View = react_native.View;
const UserProfileSections = Constants2.UserProfileSections;
const DIVIDER_DOT = Constants.DIVIDER_DOT;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let c8 = "text-sm/medium";
let c9 = "text-default";
let closure_10 = createStyles.createStyles({ container: { flexDirection: "row", columnGap: 4, flexWrap: "wrap" }, section: { flexDirection: "row", alignItems: "center", columnGap: 6 } });
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileMutuals.tsx");

export default function UserProfileMutuals(user) {
  let _undefined;
  let _undefined2;
  let c2;
  let c3;
  let items;
  let items1;
  let items2;
  let mutualFriends;
  let mutualGuilds;
  function onPressMutualFriend(userId) {
    _undefined2({ action: "PRESS_MUTUAL_FRIEND" });
    const obj = { userId };
    const tmp2 = guildId(c2[12]);
    const merged = Object.assign(_undefined);
    tmp2(obj);
  }
  function onPressMutualGuild(arg0) {
    _undefined2({ action: "PRESS_MUTUAL_GUILD" });
    const obj = user(c2[13]);
    obj.transitionToGuild(arg0);
    const obj2 = guildId(c2[9]);
    obj2.hideAllActionSheets();
  }
  user = user.user;
  const guildId = user.guildId;
  dependencyMap = undefined;
  c3 = undefined;
  let tmp = closure_10();
  let tmp2 = user;
  let obj = user(8290);
  const userProfileAnalyticsContext = obj.useUserProfileAnalyticsContext();
  ({ context: c2, trackUserProfileAction: c3 } = userProfileAnalyticsContext);
  ({ mutualFriends, mutualGuilds } = guildId(12383)(user));
  guildId(12383)(user);
  if (guildId(12979)(user)) {
    if (!(null != mutualFriends && mutualFriends.length > 0)) {
      if (!(null != mutualGuilds && mutualGuilds.length > 0)) {
        return null;
      }
    }
    let obj2 = { style: tmp.container, children: items1 };
    let tmp9Result = null;
    const tmp10 = c3;
    if (null != mutualFriends && mutualFriends.length > 0) {
      const substr = mutualFriends.slice(0, 3);
      const mapped = substr.map((user) => user.user);
      const obj3 = {
        style: tmp.section,
        accessibilityRole: "button",
        onPress() {
              const MUTUAL_FRIENDS = UserProfileSections.MUTUAL_FRIENDS;
              _undefined2({ action: "PRESS_SECTION", section: MUTUAL_FRIENDS });
              const obj = ActionSheetActionCreatorsDefault;
              const obj2 = { user, section: MUTUAL_FRIENDS, guildId, onPressMutualFriend, onPressMutualGuild };
              obj.openLazy(asyncRequire(12388, dependencyMap.paths), "UserProfileMutualsActionSheet", obj2, "stack");
            },
        children: items
      };
      const PressableOpacity = tmp2(6189).PressableOpacity;
      const obj4 = {
        size: tmp2(1200).AvatarSizes.SIZE_16,
        totalCount: mapped.length,
        names: mapped.map((username) => username.username),
        children: mapped.map((user) => {
              const obj = { user, size: user(c2[16]).AvatarSizes.SIZE_16, guildId: "r" };
              const Avatar = user(c2[16]).Avatar;
              return closure_1_6(Avatar, obj, user.id);
            })
      };
      const AvatarPile = tmp2(13018).AvatarPile;
      items = [closure_6(AvatarPile, obj4), ];
      const obj5 = { variant, color, children: guildId(12393)(mutualFriends.length) };
      const Text = tmp2(5086).Text;
      items[1] = closure_6(Text, obj5);
      tmp9Result = tmp9(PressableOpacity, obj3);
    }
    items1 = [tmp9Result, , ];
    let tmp15 = tmp7 && tmp8;
    if (tmp15) {
      const obj6 = { variant, color, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: DIVIDER_DOT };
      tmp15 = closure_6(tmp2(5086).Text, obj6);
    }
    items1[1] = tmp15;
    let tmp9Result2 = null;
    if (null != mutualGuilds && mutualGuilds.length > 0) {
      const substr1 = mutualGuilds.slice(0, 3);
      const mapped1 = substr1.map((guild) => guild.guild);
      let tmp21 = !tmp7;
      const obj7 = {
        style: tmp.section,
        accessibilityRole: "button",
        onPress() {
              const MUTUAL_GUILDS = UserProfileSections.MUTUAL_GUILDS;
              _undefined2({ action: "PRESS_SECTION", section: MUTUAL_GUILDS });
              let obj = ActionSheetActionCreatorsDefault;
              let obj2 = { user, section: MUTUAL_GUILDS, guildId, onPressMutualFriend, onPressMutualGuild };
              obj.openLazy(asyncRequire(12388, dependencyMap.paths), "UserProfileMutualsActionSheet", obj2, "stack");
            },
        children: items2
      };
      const PressableOpacity2 = tmp2(6189).PressableOpacity;
      if (!(null != mutualFriends && mutualFriends.length > 0)) {
        const obj8 = {
          size: tmp2(6161).GuildIconSizes.XXSMALL,
          totalCount: mapped1.length,
          names: mapped1.map((name) => name.name),
          children: mapped1.map((guild) => {
                  const obj = { guild, size: user(c2[20]).GuildIconSizes.XXSMALL };
                  const tmp = guildId(c2[20]);
                  return closure_1_6(tmp, obj, guild.id);
                })
        };
        const GuildIconPile = tmp2(12397).GuildIconPile;
        tmp21 = closure_6(GuildIconPile, obj8);
      }
      items2 = [tmp21, ];
      const obj9 = { variant, color, children: guildId(12394)(mutualGuilds.length) };
      const Text2 = tmp2(5086).Text;
      items2[1] = closure_6(Text2, obj9);
      tmp9Result2 = tmp9(PressableOpacity2, obj7);
    }
    items1[2] = tmp9Result2;
    return closure_7(tmp10, obj2);
  } else {
    return null;
  }
};
