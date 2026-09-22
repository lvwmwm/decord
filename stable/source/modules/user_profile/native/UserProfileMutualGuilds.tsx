// Module ID: 13127
// Function ID: 13128
// Name: UserProfileMutualGuilds
// Dependencies: [19, 17, 8300, 21, 4636, 8307, 12735, 13128, 4603, 12734, 1896, 7445, 5204, 12751, 5665, 4632, 12736, 2]
// Exports: default

// Module 13127 (UserProfileMutualGuilds)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const UserProfileSections = fn(8300).UserProfileSections;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4636);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row", columnGap: 4, flexWrap: "wrap" }, section: { flexDirection: "row", alignItems: "center", columnGap: 6 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileMutualGuilds.tsx");

export default function UserProfileMutualGuilds(user) {
  user = user.user;
  const tmp = closure_7();
  const trackUserProfileAction = user(8307).useUserProfileAnalyticsContext().trackUserProfileAction;
  const mutualGuilds = trackUserProfileAction(12735)(user).mutualGuilds;
  if (trackUserProfileAction(13128)(user)) {
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
                  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12734, dependencyMap.paths), "UserProfileMutualGuildsActionSheet", {
                    user,
                    onPressMutualGuild(arg0) {
                      closure_1_1({ action: "PRESS_MUTUAL_GUILD" });
                      user(7445).transitionToGuild(arg0);
                      const obj = user(7445);
                      trackUserProfileAction(4603).hideAllActionSheets();
                    }
                  }, "stack");
                },
          children: null
        };
        const obj4 = {
          size: tmp2(5665).GuildIconSizes.XXSMALL,
          totalCount: mapped.length,
          names: mapped.map((name) => name.name),
          children: mapped.map((guild) => {
                  const obj = { guild, size: user(5665).GuildIconSizes.XXSMALL };
                  return closure_1_5(trackUserProfileAction(5665), obj, guild.id);
                })
        };
        const items = [closure_5(tmp2(12751).GuildIconPile, obj4), ];
        const obj5 = { variant: "text-sm/medium", color: "text-default", children: trackUserProfileAction(12736)(mutualGuilds.length) };
        items[1] = closure_5(tmp2(4632).Text, obj5);
        obj3.children = items;
        obj2.children = closure_6(tmp2(5204).PressableOpacity, obj3);
        return closure_5(View, obj2);
      }
    }
  }
  return null;
};
