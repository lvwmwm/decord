// Module ID: 11901
// Function ID: 92125
// Name: UserProfileMutualGuilds
// Dependencies: []
// Exports: default

// Module 11901 (UserProfileMutualGuilds)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const UserProfileSections = arg1(dependencyMap[2]).UserProfileSections;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[4]).createStyles({ container: {}, section: {} });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/user_profile/native/UserProfileMutualGuilds.tsx");

export default function UserProfileMutualGuilds(user) {
  user = user.user;
  const arg1 = user;
  const tmp = callback3();
  let obj = arg1(dependencyMap[5]);
  const importDefault = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const mutualGuilds = importDefault(dependencyMap[6])(user).mutualGuilds;
  if (importDefault(dependencyMap[7])(user)) {
    if (null != mutualGuilds) {
      if (0 !== mutualGuilds.length) {
        const substr = mutualGuilds.slice(0, 3);
        const mapped = substr.map((guild) => guild.guild);
        obj = { style: tmp.container };
        obj = {
          style: tmp.section,
          accessibilityRole: "button",
          onPress() {
                  function handlePress(MUTUAL_GUILDS) {
                    let obj = { action: "PRESS_SECTION", section: MUTUAL_GUILDS };
                    callback2(obj);
                    obj = {
                      user: callback,
                      onPressMutualGuild(arg0) {
                        callback2({ action: "PRESS_MUTUAL_GUILD" });
                        callback(closure_2[11]).transitionToGuild(arg0);
                        const obj = callback(closure_2[11]);
                        callback2(closure_2[8]).hideActionSheet();
                        const obj2 = callback2(closure_2[8]);
                        callback2(closure_2[8]).hideActionSheet();
                      }
                    };
                    callback2(paths[8]).openLazy(callback(paths[10])(paths[9], paths.paths), "UserProfileMutualGuildsActionSheet", obj, "stack");
                  }(constants.MUTUAL_GUILDS);
                }
        };
        const obj1 = {
          size: arg1(dependencyMap[14]).GuildIconSizes.XXSMALL,
          totalCount: mapped.length,
          names: mapped.map((name) => name.name),
          children: mapped.map((guild) => {
                  const obj = { guild, size: user(closure_2[14]).GuildIconSizes.XXSMALL };
                  return callback(trackUserProfileAction(closure_2[14]), obj, guild.id);
                })
        };
        const items = [callback(arg1(dependencyMap[13]).GuildIconPile, obj1), ];
        const obj2 = { children: importDefault(dependencyMap[16])(mutualGuilds.length) };
        items[1] = callback(arg1(dependencyMap[15]).Text, obj2);
        obj.children = items;
        obj.children = callback2(arg1(dependencyMap[12]).PressableOpacity, obj);
        return callback(View, obj);
      }
    }
  }
  return null;
};
