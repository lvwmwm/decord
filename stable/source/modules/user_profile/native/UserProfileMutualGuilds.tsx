// Module ID: 13315
// Function ID: 13316
// Name: UserProfileMutualGuilds
// Dependencies: [19, 17, 8484, 21, 4788, 8491, 12884, 13316, 4755, 12883, 1980, 7616, 5371, 12900, 5833, 4784, 12885, 2]
// Exports: default

// Module 13315 (UserProfileMutualGuilds)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const UserProfileSections = fn(8484).UserProfileSections;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4788);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row", columnGap: 4, flexWrap: "wrap" }, section: { flexDirection: "row", alignItems: "center", columnGap: 6 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileMutualGuilds.tsx");

export default function UserProfileMutualGuilds(user) {
  user = user.user;
  const tmp = closure_7();
  const trackUserProfileAction = user(8491).useUserProfileAnalyticsContext().trackUserProfileAction;
  const mutualGuilds = trackUserProfileAction(12884)(user).mutualGuilds;
  if (trackUserProfileAction(13316)(user)) {
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
                  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12883, dependencyMap.paths), "UserProfileMutualGuildsActionSheet", {
                    user,
                    onPressMutualGuild(arg0) {
                      closure_1_1({ action: "PRESS_MUTUAL_GUILD" });
                      user(7616).transitionToGuild(arg0);
                      const obj = user(7616);
                      trackUserProfileAction(4755).hideAllActionSheets();
                    }
                  }, "stack");
                },
          children: null
        };
        const obj4 = {
          size: tmp2(5833).GuildIconSizes.XXSMALL,
          totalCount: mapped.length,
          names: mapped.map((name) => name.name),
          children: mapped.map((guild) => {
                  const obj = { guild, size: user(5833).GuildIconSizes.XXSMALL };
                  return closure_1_5(trackUserProfileAction(5833), obj, guild.id);
                })
        };
        const items = [closure_5(tmp2(12900).GuildIconPile, obj4), ];
        const obj5 = { variant: "text-sm/medium", color: "text-default", children: trackUserProfileAction(12885)(mutualGuilds.length) };
        items[1] = closure_5(tmp2(4784).Text, obj5);
        obj3.children = items;
        obj2.children = closure_6(tmp2(5371).PressableOpacity, obj3);
        return closure_5(View, obj2);
      }
    }
  }
  return null;
};
