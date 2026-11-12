// Module ID: 15101
// Function ID: 15102
// Name: UserProfileMutualGuilds
// Dependencies: [19, 17, 8858, 21, 5170, 8865, 14452, 15102, 5406, 14451, 2118, 7627, 7076, 14466, 7053, 5783, 14453, 2]
// Exports: default

// Module 15101 (UserProfileMutualGuilds)
import react_native from "react-native" /* 17 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import Constants from "Constants" /* 8858 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
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
  let obj = user(8865);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const mutualGuilds = trackUserProfileAction(14452)(user).mutualGuilds;
  const tmp4 = trackUserProfileAction;
  if (trackUserProfileAction(15102)(user)) {
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
                  obj2.openLazy(asyncRequire(14451, dependencyMap.paths), "UserProfileMutualGuildsActionSheet", obj3, "stack");
                },
          children: items
        };
        PressableOpacity = tmp2(7076).PressableOpacity;
        const obj4 = {
          size: user(7053).GuildIconSizes.XXSMALL,
          totalCount: mapped.length,
          names: mapped.map((name) => name.name),
          children: mapped.map((guild) => {
                  const obj = { guild, size: user(dependencyMap[14]).GuildIconSizes.XXSMALL };
                  const tmp = trackUserProfileAction(dependencyMap[14]);
                  return closure_1_5(tmp, obj, guild.id);
                })
        };
        const GuildIconPile = tmp2(14466).GuildIconPile;
        items = [closure_5(GuildIconPile, obj4), ];
        const obj5 = { variant: "body-sm/medium", color: "text-default", children: tmp4(14453)(mutualGuilds.length) };
        const Text = tmp2(5783).Text;
        items[1] = closure_5(Text, obj5);
        return closure_5(View, obj2);
      }
    }
  }
  return null;
};
