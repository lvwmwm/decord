// Module ID: 12978
// Function ID: 12979
// Name: UserProfileMutualGuilds
// Dependencies: [19, 17, 8283, 21, 5090, 8290, 12383, 12979, 5054, 12382, 1999, 7043, 6189, 12397, 6161, 5086, 12394, 2]
// Exports: default

// Module 12978 (UserProfileMutualGuilds)
import react_native from "react-native" /* 17 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import Constants from "Constants" /* 8283 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
const UserProfileSections = Constants.UserProfileSections;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row", columnGap: 4, flexWrap: "wrap" }, section: { flexDirection: "row", alignItems: "center", columnGap: 6 } });
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileMutualGuilds.tsx");

export default function UserProfileMutualGuilds(user) {
  let PressableOpacity;
  let items;
  let obj3;
  user = user.user;
  let tmp = closure_7();
  let obj = user(8290);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const mutualGuilds = trackUserProfileAction(12383)(user).mutualGuilds;
  const tmp4 = trackUserProfileAction;
  if (trackUserProfileAction(12979)(user)) {
    if (null != mutualGuilds) {
      if (0 !== mutualGuilds.length) {
        const substr = mutualGuilds.slice(0, 3);
        const mapped = substr.map((guild) => guild.guild);
        let obj2 = { style: tmp.container, children: closure_6(PressableOpacity, obj3) };
        obj3 = {
          style: tmp.section,
          accessibilityRole: "button",
          onPress() {
                  let obj = { action: "PRESS_SECTION", section: UserProfileSections.MUTUAL_GUILDS };
                  trackUserProfileAction(obj);
                  let obj2 = ActionSheetActionCreatorsDefault;
                  const obj3 = {
                    user,
                    onPressMutualGuild(arg0) {
                      closure_1_1({ action: "PRESS_MUTUAL_GUILD" });
                      const obj = user(dependencyMap[11]);
                      obj.transitionToGuild(arg0);
                      const obj2 = trackUserProfileAction(dependencyMap[8]);
                      obj2.hideAllActionSheets();
                    }
                  };
                  obj2.openLazy(asyncRequire(12382, dependencyMap.paths), "UserProfileMutualGuildsActionSheet", obj3, "stack");
                },
          children: items
        };
        PressableOpacity = tmp2(6189).PressableOpacity;
        const obj4 = {
          size: user(6161).GuildIconSizes.XXSMALL,
          totalCount: mapped.length,
          names: mapped.map((name) => name.name),
          children: mapped.map((guild) => {
                  const obj = { guild, size: user(dependencyMap[14]).GuildIconSizes.XXSMALL };
                  const tmp = trackUserProfileAction(dependencyMap[14]);
                  return closure_1_5(tmp, obj, guild.id);
                })
        };
        const GuildIconPile = tmp2(12397).GuildIconPile;
        items = [closure_5(GuildIconPile, obj4), ];
        const obj5 = { variant: "text-sm/medium", color: "text-default", children: tmp4(12394)(mutualGuilds.length) };
        const Text = tmp2(5086).Text;
        items[1] = closure_5(Text, obj5);
        return closure_5(View, obj2);
      }
    }
  }
  return null;
};
