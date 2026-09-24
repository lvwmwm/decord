// Module ID: 13325
// Function ID: 13326
// Name: UserProfileMutualGuilds
// Dependencies: [19, 17, 8489, 21, 4790, 8496, 12802, 13326, 4757, 12801, 1984, 7618, 5373, 12818, 5831, 4786, 12813, 2]
// Exports: default

// Module 13325 (UserProfileMutualGuilds)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const UserProfileSections = fn(8489).UserProfileSections;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4790);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row", columnGap: 4, flexWrap: "wrap" }, section: { flexDirection: "row", alignItems: "center", columnGap: 6 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileMutualGuilds.tsx");

export default function UserProfileMutualGuilds(user) {
  user = user.user;
  const tmp = closure_7();
  const trackUserProfileAction = user(8496).useUserProfileAnalyticsContext().trackUserProfileAction;
  const mutualGuilds = trackUserProfileAction(12802)(user).mutualGuilds;
  if (trackUserProfileAction(13326)(user)) {
    if (null != mutualGuilds) {
      if (0 !== mutualGuilds.length) {
        const substr = mutualGuilds.slice(0, 3);
        const mapped = substr.map((guild) => guild.guild);
        const obj2 = { style: tmp.container, children: null };
        const obj3 = {
          style: tmp.section,
          accessibilityRole: "button",
          onPress() {
                  trackUserProfileAction({ action: "PRESS_SECTION", section: UserProfileSections.MUTUAL_GUILDS });
                  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12801, dependencyMap.paths), "UserProfileMutualGuildsActionSheet", {
                    user,
                    onPressMutualGuild(arg0) {
                      closure_1_1({ action: "PRESS_MUTUAL_GUILD" });
                      user(7618).transitionToGuild(arg0);
                      const obj = user(7618);
                      trackUserProfileAction(4757).hideAllActionSheets();
                    }
                  }, "stack");
                },
          children: null
        };
        const obj4 = {
          size: tmp2(5831).GuildIconSizes.XXSMALL,
          totalCount: mapped.length,
          names: mapped.map((name) => name.name),
          children: mapped.map((guild) => {
                  const obj = { guild, size: user(5831).GuildIconSizes.XXSMALL };
                  return closure_1_5(trackUserProfileAction(5831), obj, guild.id);
                })
        };
        const items = [closure_5(tmp2(12818).GuildIconPile, obj4), ];
        const obj5 = { variant: "text-sm/medium", color: "text-default", children: trackUserProfileAction(12813)(mutualGuilds.length) };
        items[1] = closure_5(tmp2(4786).Text, obj5);
        obj3.children = items;
        obj2.children = closure_6(tmp2(5373).PressableOpacity, obj3);
        return closure_5(View, obj2);
      }
    }
  }
  return null;
};
