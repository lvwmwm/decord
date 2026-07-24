// Module ID: 11940
// Function ID: 92416
// Name: UserProfileMutualGuilds
// Dependencies: [31, 27, 8308, 33, 4130, 8310, 11663, 11941, 4098, 11662, 1934, 5737, 4660, 11678, 5513, 4126, 11665, 2]
// Exports: default

// Module 11940 (UserProfileMutualGuilds)
import "result";
import { View } from "get ActivityIndicator";
import { UserProfileSections } from "USER_PROFILE_TOOLTIP_DELAY";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ container: { flexDirection: "row", columnGap: 4, flexWrap: "wrap" }, section: { flexDirection: "row", alignItems: "center", columnGap: 6 } });
const result = require("USER_PROFILE_TOOLTIP_DELAY").fileFinishedImporting("modules/user_profile/native/UserProfileMutualGuilds.tsx");

export default function UserProfileMutualGuilds(user) {
  user = user.user;
  const tmp = callback3();
  let obj = user(8310);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const mutualGuilds = trackUserProfileAction(11663)(user).mutualGuilds;
  if (trackUserProfileAction(11941)(user)) {
    if (null != mutualGuilds) {
      if (0 !== mutualGuilds.length) {
        const substr = mutualGuilds.slice(0, 3);
        const mapped = substr.map((guild) => guild.guild);
        obj = { style: tmp.container };
        obj = {
          style: tmp.section,
          accessibilityRole: "button",
          onPress() {
                  (function handlePress(MUTUAL_GUILDS) {
                    let obj = { action: "PRESS_SECTION", section: MUTUAL_GUILDS };
                    outer1_1(obj);
                    obj = {
                      user: outer1_0,
                      onPressMutualGuild(arg0) {
                        outer2_1({ action: "PRESS_MUTUAL_GUILD" });
                        user(outer3_2[11]).transitionToGuild(arg0);
                        const obj = user(outer3_2[11]);
                        trackUserProfileAction(outer3_2[8]).hideActionSheet();
                        const obj2 = trackUserProfileAction(outer3_2[8]);
                        trackUserProfileAction(outer3_2[8]).hideActionSheet();
                      }
                    };
                    trackUserProfileAction(outer2_2[8]).openLazy(user(outer2_2[10])(outer2_2[9], outer2_2.paths), "UserProfileMutualGuildsActionSheet", obj, "stack");
                  })(outer1_4.MUTUAL_GUILDS);
                }
        };
        const obj1 = {
          size: user(5513).GuildIconSizes.XXSMALL,
          totalCount: mapped.length,
          names: mapped.map((name) => name.name),
          children: mapped.map((guild) => {
                  const obj = { guild, size: user(outer1_2[14]).GuildIconSizes.XXSMALL };
                  return outer1_5(trackUserProfileAction(outer1_2[14]), obj, guild.id);
                })
        };
        const items = [callback(user(11678).GuildIconPile, obj1), ];
        let obj2 = { variant: "text-sm/medium", color: "text-default", children: trackUserProfileAction(11665)(mutualGuilds.length) };
        items[1] = callback(user(4126).Text, obj2);
        obj.children = items;
        obj.children = callback2(user(4660).PressableOpacity, obj);
        return callback(View, obj);
      }
    }
  }
  return null;
};
