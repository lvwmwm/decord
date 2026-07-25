// Module ID: 8313
// Function ID: 66776
// Dependencies: [31, 27, 5510, 5188, 33, 8017, 8045, 4320, 3970, 8033, 8305, 8314, 1557, 8015, 8019, 5490, 3831, 8315, 3992, 8042, 8317, 1212, 11890, 2]

// Module 8313
import { View } from "get ActivityIndicator";
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET";
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";
import jsxProd from "jsxProd";
import importAllResult from "result";

let closure_4;
let closure_5;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ PROFILE_CONTENT_BOTTOM_PADDING: closure_4, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_5 } = ARBITRARY_LARGE_OFFSET);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const memoResult = require("result").memo(function NonUserBotProfileContent(scrollPosition) {
  let bannerAnimatedStyle;
  let bannerImageAnimatedStyle;
  let blurAnimatedProps;
  let channel;
  let contentAnimatedStyle;
  let displayProfile;
  let primaryColor;
  let secondaryColor;
  let showBlur;
  let theme;
  let user;
  ({ user, channel, displayProfile } = scrollPosition);
  let trackUserProfileAction;
  let importDefault;
  function handleCopyUsername() {
    trackUserProfileAction({ action: "COPY_USERNAME" });
    trackUserProfileAction(outer1_2[15]).copy(closure_1);
    const obj = trackUserProfileAction(outer1_2[15]);
    const result = trackUserProfileAction(outer1_2[16]).presentUsernameCopied();
  }
  const tmp = importDefault(8017)();
  let obj = trackUserProfileAction(8045);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj1 = importDefault(4320);
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  let id;
  if (null != channel) {
    id = channel.id;
  }
  const name = obj1.useName(guild_id, id, user);
  let obj2 = importDefault(3970);
  importDefault = obj2.useUserTag(user);
  const tmp6 = importDefault(8305)(ACTION_SHEET_MAX_WIDTH);
  const tmp5 = importDefault(8033)(displayProfile);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = importDefault(8314)({ scrollPosition: scrollPosition.scrollPosition, bannerHeight: tmp6 }));
  const tmp7 = importDefault(8314)({ scrollPosition: scrollPosition.scrollPosition, bannerHeight: tmp6 });
  ({ theme, primaryColor, secondaryColor } = importDefault(8015)({ user, displayProfile }));
  let obj3 = trackUserProfileAction(8019);
  const userProfileColors = obj3.useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  if (null == user) {
    return null;
  } else {
    obj = {};
    obj = { user, displayProfile, bannerHeight: tmp6, bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur };
    const items = [callback(importDefault(8315), obj), ];
    obj1 = { style: contentAnimatedStyle };
    obj2 = { user };
    let guildId;
    if (null != displayProfile) {
      guildId = displayProfile.guildId;
    }
    let tmp12;
    if (null != guildId) {
      tmp12 = guildId;
    }
    obj2.guildId = tmp12;
    obj2.backgroundColor = tmp10;
    obj2.disableStatus = true;
    const items1 = [callback(trackUserProfileAction(8042).OpenableUserProfileAvatar, obj2), ];
    obj3 = {};
    const items2 = [, , ];
    ({ profileContentWrapper: arr2[0], profileContent: arr2[1] } = tmp);
    const obj4 = { paddingTop: closure_5, paddingBottom: importDefault(1557)().bottom + closure_4 };
    items2[2] = obj4;
    obj3.style = items2;
    const obj5 = { style: tmp.primaryInfo };
    const obj6 = { user };
    let guild_id1;
    if (null != channel) {
      guild_id1 = channel.guild_id;
    }
    obj6.guildId = guild_id1;
    obj6.displayName = name;
    let pronouns;
    if (null != displayProfile) {
      pronouns = displayProfile.pronouns;
    }
    obj6.pronouns = pronouns;
    obj6.badges = tmp5;
    obj6.badgeContainerBackground = containerBackground;
    const intl = trackUserProfileAction(1212).intl;
    obj6.displayNameAccessibilityHint = intl.string(trackUserProfileAction(1212).t.y5MwJy);
    obj6.onPressDisplayName = handleCopyUsername;
    obj6.onPressUserTag = handleCopyUsername;
    obj6.onPressPronouns = function onPressPronouns() {
      trackUserProfileAction({ action: "PRESS_PRONOUNS" });
      trackUserProfileAction(outer1_2[16]).presentUserPronouns();
    };
    obj6.showBadgeToastOnPress = true;
    obj5.children = callback(importDefault(8317), obj6);
    const items3 = [callback(View, obj5), ];
    const obj7 = { style: tmp.cards };
    const obj8 = { userId: user.id, displayProfile, channel };
    const items4 = [tmp.card, ];
    const obj9 = { backgroundColor: containerBackground };
    items4[1] = obj9;
    obj8.style = items4;
    obj7.children = callback(importDefault(11890), obj8);
    items3[1] = callback(View, obj7);
    obj3.children = items3;
    items1[1] = closure_8(View, obj3);
    obj1.children = items1;
    items[1] = closure_8(importDefault(3992).View, obj1);
    obj.children = items;
    return closure_8(closure_9, obj);
  }
  const tmp8 = importDefault(8015)({ user, displayProfile });
});
let result = require("ARBITRARY_LARGE_OFFSET").fileFinishedImporting("modules/user_profile/native/NonUserBotProfileContent.tsx");

export default memoResult;
