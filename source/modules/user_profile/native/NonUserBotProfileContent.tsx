// Module ID: 8501
// Function ID: 67843
// Dependencies: []

// Module 8501
const View = arg1(dependencyMap[1]).View;
const importAllResult = importAll(dependencyMap[0]);
({ PROFILE_CONTENT_BOTTOM_PADDING: closure_4, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_5 } = arg1(dependencyMap[2]));
const ACTION_SHEET_MAX_WIDTH = arg1(dependencyMap[3]).ACTION_SHEET_MAX_WIDTH;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function NonUserBotProfileContent(scrollPosition) {
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
  let arg1;
  let importDefault;
  function handleCopyUsername() {
    trackUserProfileAction({ action: "COPY_USERNAME" });
    trackUserProfileAction(closure_2[15]).copy(closure_1);
    const obj = trackUserProfileAction(closure_2[15]);
    const result = trackUserProfileAction(closure_2[16]).presentUsernameCopied();
  }
  const tmp = importDefault(dependencyMap[5])();
  let obj = arg1(dependencyMap[6]);
  arg1 = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj1 = importDefault(dependencyMap[7]);
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  let id;
  if (null != channel) {
    id = channel.id;
  }
  const name = obj1.useName(guild_id, id, user);
  let obj2 = importDefault(dependencyMap[8]);
  importDefault = obj2.useUserTag(user);
  const tmp6 = importDefault(dependencyMap[10])(ACTION_SHEET_MAX_WIDTH);
  const tmp5 = importDefault(dependencyMap[9])(displayProfile);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = importDefault(dependencyMap[11])({ scrollPosition: scrollPosition.scrollPosition, bannerHeight: tmp6 }));
  const tmp7 = importDefault(dependencyMap[11])({ scrollPosition: scrollPosition.scrollPosition, bannerHeight: tmp6 });
  ({ theme, primaryColor, secondaryColor } = importDefault(dependencyMap[13])({ user, displayProfile }));
  let obj3 = arg1(dependencyMap[14]);
  const userProfileColors = obj3.useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  if (null == user) {
    return null;
  } else {
    obj = {};
    obj = { user, displayProfile, bannerHeight: tmp6, bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur };
    const items = [callback(importDefault(dependencyMap[17]), obj), ];
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
    const items1 = [callback(arg1(dependencyMap[19]).OpenableUserProfileAvatar, obj2), ];
    obj3 = {};
    const items2 = [, , ];
    ({ profileContentWrapper: arr2[0], profileContent: arr2[1] } = tmp);
    const obj4 = { paddingTop: closure_5, paddingBottom: importDefault(dependencyMap[12])().bottom + closure_4 };
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
    const intl = arg1(dependencyMap[21]).intl;
    obj6.displayNameAccessibilityHint = intl.string(arg1(dependencyMap[21]).t.y5MwJy);
    obj6.onPressDisplayName = handleCopyUsername;
    obj6.onPressUserTag = handleCopyUsername;
    obj6.onPressPronouns = function onPressPronouns() {
      trackUserProfileAction({ action: "PRESS_PRONOUNS" });
      trackUserProfileAction(closure_2[16]).presentUserPronouns();
    };
    obj6.showBadgeToastOnPress = true;
    obj5.children = callback(importDefault(dependencyMap[20]), obj6);
    const items3 = [callback(View, obj5), ];
    const obj7 = { style: tmp.cards };
    const obj8 = { userId: user.id, displayProfile, channel };
    const items4 = [tmp.card, ];
    const obj9 = { backgroundColor: containerBackground };
    items4[1] = obj9;
    obj8.style = items4;
    obj7.children = callback(importDefault(dependencyMap[22]), obj8);
    items3[1] = callback(View, obj7);
    obj3.children = items3;
    items1[1] = closure_8(View, obj3);
    obj1.children = items1;
    items[1] = closure_8(importDefault(dependencyMap[18]).View, obj1);
    obj.children = items;
    return closure_8(closure_9, obj);
  }
  const tmp8 = importDefault(dependencyMap[13])({ user, displayProfile });
});
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/user_profile/native/NonUserBotProfileContent.tsx");

export default memoResult;
