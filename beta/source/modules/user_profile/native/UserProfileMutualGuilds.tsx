// Module ID: 13289
// Function ID: 13290
// Name: UserProfileMutualGuilds
// Dependencies: [19, 17, 8457, 21, 4758, 8464, 12766, 13290, 4725, 12765, 1984, 7586, 5341, 12782, 5799, 4754, 12777, 2]
// Exports: default

// Module 13289 (UserProfileMutualGuilds)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const UserProfileSections = fn(8457).UserProfileSections;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4758);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row", columnGap: 4, flexWrap: "wrap" }, section: { flexDirection: "row", alignItems: "center", columnGap: 6 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileMutualGuilds.tsx");

export default function UserProfileMutualGuilds(user) {
  user = user.user;
  const tmp = closure_7();
  const trackUserProfileAction = user(8464).useUserProfileAnalyticsContext().trackUserProfileAction;
  const mutualGuilds = trackUserProfileAction(12766)(user).mutualGuilds;
  if (trackUserProfileAction(13290)(user)) {
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
                  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12765, dependencyMap.paths), "UserProfileMutualGuildsActionSheet", {
                    user,
                    onPressMutualGuild(arg0) {
                      closure_1_1({ action: "PRESS_MUTUAL_GUILD" });
                      user(7586).transitionToGuild(arg0);
                      const obj = user(7586);
                      trackUserProfileAction(4725).hideAllActionSheets();
                    }
                  }, "stack");
                },
          children: null
        };
        const obj4 = {
          size: tmp2(5799).GuildIconSizes.XXSMALL,
          totalCount: mapped.length,
          names: mapped.map((name) => name.name),
          children: mapped.map((guild) => {
                  const obj = { guild, size: user(5799).GuildIconSizes.XXSMALL };
                  return closure_1_5(trackUserProfileAction(5799), obj, guild.id);
                })
        };
        const items = [closure_5(tmp2(12782).GuildIconPile, obj4), ];
        const obj5 = { variant: "text-sm/medium", color: "text-default", children: trackUserProfileAction(12777)(mutualGuilds.length) };
        items[1] = closure_5(tmp2(4754).Text, obj5);
        obj3.children = items;
        obj2.children = closure_6(tmp2(5341).PressableOpacity, obj3);
        return closure_5(View, obj2);
      }
    }
  }
  return null;
};
