// Module ID: 12149
// Function ID: 95170
// Name: UserProfileMutuals
// Dependencies: [31, 27, 8043, 5510, 33, 4131, 8045, 11633, 11918, 4099, 11640, 1935, 8297, 6633, 4661, 11953, 1273, 4127, 11641, 11648, 5513, 11635, 2]
// Exports: default

// Module 12149 (UserProfileMutuals)
import "result";
import { View } from "get ActivityIndicator";
import { UserProfileSections } from "USER_PROFILE_TOOLTIP_DELAY";
import { DIVIDER_DOT } from "ARBITRARY_LARGE_OFFSET";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ container: { flexDirection: "row", columnGap: 4, flexWrap: "wrap" }, section: { flexDirection: "row", alignItems: "center", columnGap: 6 } });
const result = require("USER_PROFILE_TOOLTIP_DELAY").fileFinishedImporting("modules/user_profile/native/UserProfileMutuals.tsx");

export default function UserProfileMutuals(user) {
  let c3;
  let c4;
  user = user.user;
  const guildId = user.guildId;
  c3 = undefined;
  c4 = undefined;
  let c7;
  let callback;
  function handlePress(section) {
    let obj = { action: "PRESS_SECTION", section };
    const tmp = _undefined(obj);
    obj = {
      user,
      section,
      guildId,
      onPressMutualFriend(arg0) {
        outer1_4({ action: "PRESS_MUTUAL_FRIEND" });
        const obj = {};
        const merged = Object.assign(outer1_3);
        obj["userId"] = arg0;
        guildId(8297)(obj);
      },
      onPressMutualGuild(arg0) {
        outer1_4({ action: "PRESS_MUTUAL_GUILD" });
        user(6633).transitionToGuild(arg0);
        const obj = user(6633);
        guildId(4099).hideActionSheet();
        const obj2 = guildId(4099);
        guildId(4099).hideActionSheet();
      }
    };
    guildId(tmp[9]).openLazy(user(tmp[11])(tmp[10], tmp.paths), "UserProfileMutualsActionSheet", obj, "stack");
  }
  let tmp = callback();
  const dependencyMap = tmp;
  let obj = user(8045);
  const userProfileAnalyticsContext = obj.useUserProfileAnalyticsContext();
  ({ context: c3, trackUserProfileAction: c4 } = userProfileAnalyticsContext);
  const tmp3 = guildId(11633)(user);
  const mutualFriends = tmp3.mutualFriends;
  const mutualGuilds = tmp3.mutualGuilds;
  if (guildId(11918)(user)) {
    let tmp4 = null != mutualFriends;
    if (tmp4) {
      tmp4 = mutualFriends.length > 0;
    }
    c7 = tmp4;
    let tmp5 = null != mutualGuilds;
    if (tmp5) {
      tmp5 = mutualGuilds.length > 0;
    }
    callback = tmp5;
    if (!tmp4) {
      if (!tmp5) {
        return null;
      }
    }
    obj = { style: tmp.container };
    let items = [
      (() => {
          if (_undefined2) {
            const substr = mutualFriends.slice(0, 3);
            const mapped = substr.map((user) => user.user);
            let obj = {
              style: tmp.section,
              accessibilityRole: "button",
              onPress() {
                  outer1_9(constants.MUTUAL_FRIENDS);
                }
            };
            obj = {
              size: user(tmp[16]).AvatarSizes.SIZE_16,
              totalCount: mapped.length,
              names: mapped.map((username) => username.username),
              children: mapped.map((id) => {
                  const obj = { user: id, size: user(1273).AvatarSizes.SIZE_16, guildId: undefined };
                  return mutualGuilds(user(1273).Avatar, obj, id.id);
                })
            };
            const items = [mutualGuilds(user(tmp[15]).AvatarPile, obj), ];
            obj = { variant: "text-sm/medium", color: "text-default", children: guildId(tmp[18])(mutualFriends.length) };
            items[1] = mutualGuilds(user(tmp[17]).Text, obj);
            obj.children = items;
            return _undefined2(user(tmp[14]).PressableOpacity, obj);
          } else {
            return null;
          }
        })(),
  ,

    ];
    if (tmp4) {
      tmp4 = tmp5;
    }
    if (tmp4) {
      obj = { variant: "text-sm/medium", color: "text-default", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: mutualFriends };
      tmp4 = mutualGuilds(user(4127).Text, obj);
    }
    items[1] = tmp4;
    items[2] = (() => {
      if (c8) {
        const substr = mutualGuilds.slice(0, 3);
        const mapped = substr.map((guild) => guild.guild);
        let obj = {
          style: tmp.section,
          accessibilityRole: "button",
          onPress() {
              outer1_9(constants.MUTUAL_GUILDS);
            }
        };
        let tmp8 = !c7;
        if (!c7) {
          obj = {
            size: user(tmp[20]).GuildIconSizes.XXSMALL,
            totalCount: mapped.length,
            names: mapped.map((name) => name.name),
            children: mapped.map((guild) => {
                  const obj = { guild, size: user(5513).GuildIconSizes.XXSMALL };
                  return mutualGuilds(guildId(5513), obj, guild.id);
                })
          };
          tmp8 = mutualGuilds(user(tmp[19]).GuildIconPile, obj);
        }
        const items = [tmp8, ];
        obj = { variant: "text-sm/medium", color: "text-default", children: guildId(tmp[21])(mutualGuilds.length) };
        items[1] = mutualGuilds(user(tmp[17]).Text, obj);
        obj.children = items;
        return c7(user(tmp[14]).PressableOpacity, obj);
      } else {
        return null;
      }
    })();
    obj.children = items;
    return c7(c3, obj);
  } else {
    return null;
  }
};
