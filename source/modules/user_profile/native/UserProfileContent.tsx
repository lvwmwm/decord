// Module ID: 11971
// Function ID: 92521
// Name: CustomStatusBubble
// Dependencies: []

// Module 11971 (CustomStatusBubble)
function CustomStatusBubble(guildId) {
  let bubbleRef;
  let customStatusActivity;
  let hasCustomProfileTheme;
  let user;
  ({ customStatusActivity, user } = guildId);
  const arg1 = user;
  guildId = guildId.guildId;
  const importDefault = guildId;
  const channelId = guildId.channelId;
  const dependencyMap = channelId;
  const isPreviewingChanges = guildId.isPreviewingChanges;
  ({ hasCustomProfileTheme, bubbleRef } = guildId);
  const tmp = importDefault(dependencyMap[15])();
  let obj = arg1(dependencyMap[16]);
  const items = [closure_10];
  const items1 = [user];
  let stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    return id === user.id;
  }, items1);
  const items2 = [channelId, guildId, user];
  let tmp5 = null;
  const callback = importAllResult.useCallback(() => {
    let obj = guildId(channelId[17]);
    obj = { user, guildId, channelId };
    obj.openLazy(user(channelId[19])(channelId[18], channelId.paths), "UserProfileCustomStatusActionSheet", obj, "stack");
  }, items2);
  if (null == customStatusActivity) {
    tmp5 = null;
    if (stateFromStores) {
      tmp5 = null;
      if (!isPreviewingChanges) {
        tmp5 = importDefault(dependencyMap[20])();
      }
    }
  }
  const ref = importAllResult.useRef(tmp5);
  let labelResult;
  if (null != ref.current) {
    const current = ref.current;
    labelResult = current.label();
  }
  obj = { ref: bubbleRef, customStatusActivity, hasCustomProfileTheme };
  if (stateFromStores) {
    stateFromStores = !isPreviewingChanges;
  }
  obj.editEnabled = stateFromStores;
  let tmp12;
  if (!isPreviewingChanges) {
    tmp12 = callback;
  }
  obj.onPressTruncatedStatus = tmp12;
  const items3 = [, ];
  ({ customStatusBubble: arr4[0], customStatusBubbleInset: arr4[1] } = tmp);
  obj.style = items3;
  obj.emojiOnlyStyle = tmp.emojiOnlyCustomStatusBubble;
  obj.placeholderText = labelResult;
  obj.prompt = ref.current;
  return closure_19(importDefault(dependencyMap[21]), obj);
}
function RemoveFriendIconButton(user) {
  user = user.user;
  const arg1 = user;
  let importDefault;
  let dependencyMap;
  function handleConfirm() {
    trackUserProfileAction({ action: "REMOVE_FRIEND" });
    let obj = trackUserProfileAction(newestAnalyticsLocation[24]);
    obj = { location: newestAnalyticsLocation };
    obj.removeFriend(user.id, obj);
  }
  let obj = arg1(dependencyMap[22]);
  importDefault = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  dependencyMap = importDefault(dependencyMap[23])().newestAnalyticsLocation;
  let closure_3 = importDefault(dependencyMap[25]).useName(user);
  obj = { icon: callback2(arg1(dependencyMap[27]).UserCheckIcon, { "Bool(false)": true, "Bool(false)": "/assets/images/native" }) };
  const intl = arg1(dependencyMap[28]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[28]).t.cvSt1J);
  obj.onPress = function onPress() {
    let obj = user(newestAnalyticsLocation[29]);
    obj = { userDisplayName: closure_3, onConfirm: handleConfirm };
    obj.confirmRemoveFriend(obj);
  };
  return callback2(arg1(dependencyMap[26]).IconButton, obj);
}
function RemoveGameFriendIconButton(user) {
  user = user.user;
  const arg1 = user;
  const guildId = user.guildId;
  const importDefault = guildId;
  const channelId = user.channelId;
  const dependencyMap = channelId;
  const items = [channelId, guildId, user];
  const callback = importAllResult.useCallback(() => {
    let obj = guildId(channelId[17]);
    obj = { user, guildId, channelId };
    obj.openLazy(user(channelId[19])(channelId[30], channelId.paths), "UserProfileGameFriendActionSheet", obj, "stack");
  }, items);
  const obj = { icon: callback2(arg1(dependencyMap[31]).UserPlatformIcon, { "Bool(false)": true, "Bool(false)": "/assets/images/native" }) };
  const intl = arg1(dependencyMap[28]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[28]).t.cvSt1J);
  obj.onPress = callback;
  return callback2(arg1(dependencyMap[26]).IconButton, obj);
}
class PrimaryInfo {
  constructor(arg0) {
    ({ user, displayProfile, displayNameOverride, pronounsOverride, badgesOverride, isPreviewingChanges } = global);
    importDefault = undefined;
    ({ channelId, pendingDisplayNameStyles, style, badgeContainerBackground } = global);
    obj = importDefault(dependencyMap[25]);
    userTag = obj.useUserTag(user);
    arg1 = userTag;
    tmp2 = importDefault(dependencyMap[32])(displayProfile);
    obj2 = importDefault(dependencyMap[33]);
    guildId = undefined;
    if (null != displayProfile) {
      guildId = displayProfile.guildId;
    }
    name = obj2.useName(guildId, channelId, user);
    tmp5 = name;
    if (null != displayNameOverride) {
      num = 0;
      tmp5 = name;
      if (displayNameOverride.trim().length > 0) {
        tmp5 = displayNameOverride;
      }
    }
    obj3 = arg1(dependencyMap[22]);
    trackUserProfileAction = obj3.useUserProfileAnalyticsContext().trackUserProfileAction;
    importDefault = trackUserProfileAction;
    items = [, ];
    items[0] = trackUserProfileAction;
    items[1] = userTag;
    callback = defineProperty.useCallback(() => {
      trackUserProfileAction({ action: "COPY_USERNAME" });
      userTag(closure_2[34]).copy(userTag);
      const obj = userTag(closure_2[34]);
      const result = userTag(closure_2[35]).presentUsernameCopied();
    }, items);
    tmp7 = jsx;
    obj = { user };
    guildId1 = undefined;
    tmp8 = importDefault(dependencyMap[36]);
    if (null != displayProfile) {
      guildId1 = displayProfile.guildId;
    }
    obj.guildId = guildId1;
    obj.displayName = tmp5;
    if (null == pronounsOverride) {
      pronouns = undefined;
      if (null != displayProfile) {
        pronouns = displayProfile.pronouns;
      }
      pronounsOverride = pronouns;
    }
    obj.pronouns = pronounsOverride;
    if (null != badgesOverride) {
      tmp2 = badgesOverride;
    }
    obj.badges = tmp2;
    obj.style = style;
    obj.badgeContainerBackground = badgeContainerBackground;
    tmp11 = undefined;
    if (!isPreviewingChanges) {
      tmp11 = callback;
    }
    obj.onPressDisplayName = tmp11;
    intl = arg1(dependencyMap[28]).intl;
    obj.displayNameAccessibilityHint = intl.string(arg1(dependencyMap[28]).t.y5MwJy);
    tmp12 = undefined;
    if (!isPreviewingChanges) {
      tmp12 = callback;
    }
    obj.onPressUserTag = tmp12;
    fn = undefined;
    if (!isPreviewingChanges) {
      fn = () => {
        trackUserProfileAction({ action: "PRESS_PRONOUNS" });
        userTag(closure_2[35]).presentUserPronouns();
      };
    }
    obj.onPressPronouns = fn;
    obj.showBadgeToastOnPress = !isPreviewingChanges;
    obj.pendingDisplayNameStyles = pendingDisplayNameStyles;
    return tmp7(tmp8, obj);
  }
}
function EditSection(guildId) {
  const arg1 = guildId.guildId;
  let obj = arg1(closure_2[22]);
  const importDefault = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj1 = arg1(closure_2[16]);
  const items = [closure_8];
  const stateFromStores = obj1.useStateFromStores(items, () => guild.getGuild(guildId));
  closure_2 = importDefault(closure_2[37])();
  let closure_3 = importDefault(closure_2[37])({ guild: stateFromStores });
  obj = { style: importDefault(closure_2[15])().primaryButtons, maxWidth: ACTION_SHEET_MAX_WIDTH };
  const tmp = importDefault(closure_2[15])();
  const tmp3 = callback2;
  obj = { variant: "primary" };
  obj1 = { size: "sm", color: importDefault(closure_2[41]).colors.WHITE };
  obj.icon = callback2(arg1(closure_2[40]).PencilIcon, obj1);
  if (null != stateFromStores) {
    const intl2 = arg1(closure_2[28]).intl;
    let stringResult = intl2.string(arg1(closure_2[28]).t.HmFaFB);
  } else {
    const intl = arg1(closure_2[28]).intl;
    stringResult = intl.string(arg1(closure_2[28]).t.s5vZlQ);
  }
  obj.text = stringResult;
  obj.onPress = function onPress() {
    trackUserProfileAction({ action: "EDIT_PROFILE" });
    trackUserProfileAction(callback[17]).hideActionSheet();
    trackUserProfileAction(callback[42])();
    callback();
  };
  obj.grow = true;
  obj.primaryButton = callback2(arg1(closure_2[39]).Button, obj);
  let tmp11;
  if (null != stateFromStores) {
    const obj2 = { variant: "primary" };
    const obj3 = { size: "sm", color: importDefault(closure_2[41]).colors.WHITE };
    obj2.icon = callback2(arg1(closure_2[40]).PencilIcon, obj3);
    const intl3 = arg1(closure_2[28]).intl;
    obj2.text = intl3.string(arg1(closure_2[28]).t.PKQB/H);
    obj2.onPress = function onPress() {
      trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
      trackUserProfileAction(closure_2[17]).hideActionSheet();
      trackUserProfileAction(closure_2[42])();
      callback2();
    };
    obj2.grow = true;
    tmp11 = callback2(arg1(closure_2[39]).Button, obj2);
  }
  obj.secondaryButton = tmp11;
  return tmp3(importDefault(closure_2[38]), obj);
}
function UserProfileWidgetsBoardContainer(arg0) {
  let containerBackground;
  let gameWidgets;
  let isVisible;
  let userId;
  ({ userId, gameWidgets, isVisible, containerBackground } = arg0);
  const tmp = importDefault(dependencyMap[15])();
  const items = [tmp.card, { backgroundColor: containerBackground }];
  return callback2(closure_6, { style: tmp.profileContent, children: callback2(importDefault(dependencyMap[43]), { userId, gameWidgets, isVisible, cardStyle: items }) });
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ ScrollView: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
const UserProfileSections = arg1(dependencyMap[9]).UserProfileSections;
const tmp2 = arg1(dependencyMap[2]);
({ PROFILE_CONTENT_BOTTOM_PADDING: closure_14, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_15 } = arg1(dependencyMap[10]));
const RelationshipTypes = arg1(dependencyMap[11]).RelationshipTypes;
const ACTION_SHEET_MAX_WIDTH = arg1(dependencyMap[12]).ACTION_SHEET_MAX_WIDTH;
const ContentDismissActionType = arg1(dependencyMap[13]).ContentDismissActionType;
const tmp3 = arg1(dependencyMap[10]);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = arg1(dependencyMap[14]));
const tmp4 = arg1(dependencyMap[14]);
const memoResult = importAllResult.memo(function UserProfileContent(user) {
  let _location;
  let activeProfileTabSection;
  let activeProfileTabSectionIndex;
  let avatarBackground;
  let bannerImageAnimatedStyle;
  let blurAnimatedProps;
  let contentAnimatedStyle;
  let disableCalls;
  let disableMessage;
  let disableStatus;
  let fillHeight;
  let handleTabChange;
  let initialSection;
  let isPreviewingChanges;
  let measureFill;
  let pagerRef;
  let pendingAccentColor;
  let pendingAvatar;
  let pendingAvatarDecoration;
  let pendingBanner;
  let pendingDisplayNameStyles;
  let pendingGlobalName;
  let pendingLegacyUsernameDisabled;
  let pendingPronouns;
  let pendingThemeColors;
  let scrollPosition;
  let secondaryColor;
  let setActiveProfileTabSection;
  let showBlur;
  let statusBackground;
  let theme;
  user = user.user;
  const arg1 = user;
  const channel = user.channel;
  const importDefault = channel;
  const displayProfile = user.displayProfile;
  const dependencyMap = displayProfile;
  const showUserProfileActionSheet = user.showUserProfileActionSheet;
  let callback = showUserProfileActionSheet;
  ({ disableCalls, isPreviewingChanges } = user);
  const navigateToPremium = user.navigateToPremium;
  const navigateToShop = user.navigateToShop;
  let closure_10;
  let closure_11;
  let closure_12;
  let UserProfileSections;
  let pendingBio;
  let tmp22;
  let RelationshipTypes;
  let ACTION_SHEET_MAX_WIDTH;
  let ContentDismissActionType;
  let stateFromStores2;
  let isEligibleForSocialLayerStorefrontMobilePurchasing;
  let tmp31;
  let CustomStatusBubble;
  let RemoveFriendIconButton;
  let RemoveGameFriendIconButton;
  let PrimaryInfo;
  let closure_26;
  let UserProfileWidgetsBoardContainer;
  let isVisible;
  let markAsDismissed;
  setActiveProfileTabSection = undefined;
  let restoreActiveIndex;
  let tmp41;
  let tmp42;
  let callback2;
  let callback3;
  let callback4;
  let callback5;
  let segmentedControlState;
  let obj5;
  ({ disableMessage, disableStatus, location: _location, initialSection, scrollPosition } = user);
  let id3 = importDefault(dependencyMap[15])();
  let closure_7 = id3;
  const tmp2 = importDefault(dependencyMap[44])(ACTION_SHEET_MAX_WIDTH);
  const tmp3 = importDefault(dependencyMap[45])({ scrollPosition, bannerHeight: tmp2 });
  const bannerAnimatedStyle = tmp3.bannerAnimatedStyle;
  ({ bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = tmp3);
  let obj = arg1(dependencyMap[22]);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let closure_8 = trackUserProfileAction;
  let obj1 = arg1(dependencyMap[16]);
  const items = [closure_10];
  const stateFromStores = obj1.useStateFromStores(items, () => tmp6.getCurrentUser());
  let closure_9 = stateFromStores;
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  closure_10 = tmp6;
  let obj2 = arg1(dependencyMap[16]);
  const items1 = [closure_9];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => ({ relationshipType: stateFromStores.getRelationshipType(user.id), originApplicationId: stateFromStores.getOriginApplicationId(user.id) }));
  const relationshipType = stateFromStoresObject.relationshipType;
  let obj3 = arg1(dependencyMap[47]);
  const incomingGameRelationshipsForUser = obj3.useIncomingGameRelationshipsForUser(user.id);
  let obj4 = arg1(dependencyMap[48]);
  const isGameFriends = obj4.useIsGameFriends(user.id);
  obj5 = arg1(dependencyMap[49]);
  obj = { userId: user.id };
  const userProfileGameFriendApplicationIds = obj5.useUserProfileGameFriendApplicationIds(obj);
  closure_11 = userProfileGameFriendApplicationIds;
  if (null != displayProfile) {
    const guildId = displayProfile.guildId;
    let tmp10;
    if (null != guildId) {
      tmp10 = guildId;
    }
    let guild_id = tmp10;
  } else if (null != channel) {
    guild_id = channel.guild_id;
  }
  closure_12 = guild_id;
  let obj7 = importDefault(dependencyMap[33]);
  let id1;
  if (null != channel) {
    id1 = channel.id;
  }
  const name = obj7.useName(guild_id, id1, user);
  UserProfileSections = name;
  const items2 = [guild_id, user];
  const memo = importAllResult.useMemo(() => {
    if (null != guild_id) {
      if (null != user) {
        const obj = {};
        const items = [user.id];
        obj[guild_id] = items;
      }
      return {};
    }
  }, items2);
  let obj8 = arg1(dependencyMap[50]);
  const subscribeGuildMembers = obj8.useSubscribeGuildMembers(memo, "UserProfileContent");
  const tmp15 = importDefault(dependencyMap[51])(user.id);
  let obj9 = arg1(dependencyMap[16]);
  const items3 = [closure_11];
  const stateFromStoresObject1 = obj9.useStateFromStoresObject(items3, () => userProfileGameFriendApplicationIds.getPendingChanges());
  pendingBio = stateFromStoresObject1.pendingBio;
  ({ pendingAccentColor, pendingThemeColors } = stateFromStoresObject1);
  ({ pendingBanner, pendingAvatar, pendingAvatarDecoration, pendingGlobalName, pendingPronouns, pendingLegacyUsernameDisabled, pendingDisplayNameStyles } = stateFromStoresObject1);
  let obj10 = arg1(dependencyMap[52]);
  obj = { userId: user.id, image: pendingAvatar };
  const pendingAvatarSrc = obj10.getPendingAvatarSrc(obj);
  obj1 = { user, displayProfile };
  let tmp20;
  const tmp18 = importDefault(dependencyMap[32])(displayProfile, pendingLegacyUsernameDisabled);
  if (isPreviewingChanges) {
    tmp20 = pendingThemeColors;
  }
  obj1.pendingThemeColors = tmp20;
  const tmp19Result = importDefault(dependencyMap[53])(obj1);
  const primaryColor = tmp19Result.primaryColor;
  tmp22 = null != primaryColor;
  ({ theme, secondaryColor } = tmp19Result);
  let obj13 = arg1(dependencyMap[54]);
  const userProfileColors = obj13.useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  RelationshipTypes = containerBackground;
  ({ avatarBackground, statusBackground } = userProfileColors);
  const tmp24 = importDefault(dependencyMap[55])("UserProfileContent");
  ACTION_SHEET_MAX_WIDTH = tmp24;
  const tmp19 = importDefault(dependencyMap[53]);
  const ref1 = isPreviewingChanges.useRef(null);
  let obj14 = arg1(dependencyMap[16]);
  const items4 = [closure_12];
  const stateFromStores1 = obj14.useStateFromStores(items4, () => guild_id.getFirstWishlistId(user.id));
  ContentDismissActionType = stateFromStores1;
  let obj15 = arg1(dependencyMap[56]);
  obj2 = { wishlistId: stateFromStores1, userId: user.id };
  const fetchWishlist = obj15.useFetchWishlist(obj2);
  let obj17 = arg1(dependencyMap[16]);
  const items5 = [closure_7];
  const items6 = [stateFromStores1];
  stateFromStores2 = obj17.useStateFromStores(items5, () => {
    let wishlist = null;
    if (null != stateFromStores1) {
      wishlist = id3.getWishlist(stateFromStores1);
    }
    return wishlist;
  }, items6);
  let obj18 = arg1(dependencyMap[57]);
  isEligibleForSocialLayerStorefrontMobilePurchasing = obj18.useIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "user_profile_content" });
  const items7 = [stateFromStores2, id === user.id, isEligibleForSocialLayerStorefrontMobilePurchasing];
  tmp31 = tmp6;
  if (id !== user.id) {
    let tmp32 = null != stateFromStores2;
    if (tmp32) {
      tmp32 = arr10.length > 0;
    }
    tmp31 = tmp32;
  }
  let obj19 = arg1(dependencyMap[59]);
  const gameWidgets = obj19.useGameWidgets(user.id);
  CustomStatusBubble = gameWidgets;
  RemoveFriendIconButton = tmp33;
  let obj20 = arg1(dependencyMap[60]);
  const profileTabIndices = obj20.useProfileTabIndices(tmp33, tmp31);
  const boardTabIndex = profileTabIndices.boardTabIndex;
  RemoveGameFriendIconButton = boardTabIndex;
  const wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  PrimaryInfo = wishlistTabIndex;
  const tmp35 = callback(isPreviewingChanges.useState(0), 2);
  closure_26 = tmp35[1];
  callback = importAllResult.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj21 = arg1(dependencyMap[61]);
  const pageHeights = obj21.usePageHeights();
  const handlePageContentSize = pageHeights.handlePageContentSize;
  UserProfileWidgetsBoardContainer = handlePageContentSize;
  let obj22 = arg1(dependencyMap[62]);
  obj3 = { isCurrentUser: tmp6, shouldShowWishlistTab: tmp31 };
  const wishlistViewerCoachmark = obj22.useWishlistViewerCoachmark(obj3);
  isVisible = wishlistViewerCoachmark.isVisible;
  markAsDismissed = wishlistViewerCoachmark.markAsDismissed;
  const items8 = [trackUserProfileAction, isVisible, markAsDismissed];
  const callback1 = importAllResult.useCallback((section) => {
    trackUserProfileAction({ action: "PRESS_SECTION", section });
    if (tmp2) {
      markAsDismissed(stateFromStores1.INDIRECT_ACTION);
    }
  }, items8);
  let obj24 = arg1(dependencyMap[60]);
  const profileSectionTabs = obj24.useProfileSectionTabs({ initialUserProfileSection: initialSection, wishlistTabIndex, boardTabIndex, onTabChange: callback1 });
  ({ activeProfileTabSection, setActiveProfileTabSection } = profileSectionTabs);
  restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  tmp41 = activeProfileTabSection === UserProfileSections.WISHLIST;
  tmp42 = activeProfileTabSection === UserProfileSections.WIDGETS;
  const items9 = [navigateToPremium];
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  callback2 = importAllResult.useCallback(() => {
    channel(displayProfile[17]).hideActionSheet();
    if (null != navigateToPremium) {
      navigateToPremium();
    }
  }, items9);
  const items10 = [navigateToShop];
  callback3 = importAllResult.useCallback(() => {
    channel(displayProfile[17]).hideActionSheet();
    if (null != navigateToShop) {
      navigateToShop();
    }
  }, items10);
  const items11 = [user, stateFromStores, containerBackground, id3, isPreviewingChanges, tmp24, callback2, callback3, tmp22, guild_id, userProfileGameFriendApplicationIds, displayProfile, name, pendingBio, channel, showUserProfileActionSheet];
  callback4 = importAllResult.useCallback(() => {
    if (null != user) {
      if (null != stateFromStores) {
        const items = [id3.card, ];
        let obj = { backgroundColor: containerBackground };
        items[1] = obj;
        obj = {};
        const items1 = [, ];
        ({ cards: arr3[0], profileContent: arr3[1] } = id3);
        obj.style = items1;
        let _private;
        if (null != displayProfile) {
          _private = displayProfile.private;
        }
        if (_private) {
          obj = { username: name, containerBackground };
          _private = stateFromStores2(channel(displayProfile[63]), obj);
        }
        const items2 = [_private, , , , , , , , , , ];
        let isProvisional = user.isProvisional;
        if (isProvisional) {
          const obj1 = { style: items, userId: user.id, iconSize: 16 };
          isProvisional = stateFromStores2(user(displayProfile[64]).UserProfileProvisionalAccountExplainerCard, obj1);
        }
        items2[1] = isProvisional;
        let tmp15 = user.id === stateFromStores.id;
        if (tmp15) {
          tmp15 = !isPreviewingChanges;
        }
        if (tmp15) {
          const obj2 = { navigateToPremium: callback2, navigateToShop: callback3, hasCustomProfileTheme: tmp22 };
          tmp15 = stateFromStores2(channel(displayProfile[65]), obj2);
        }
        items2[2] = tmp15;
        const obj3 = { user, currentUser: stateFromStores, guildId: guild_id, style: items };
        items2[3] = stateFromStores2(channel(displayProfile[66]), obj3);
        let tmp31Result = userProfileGameFriendApplicationIds.length > 0;
        if (tmp31Result) {
          const obj4 = { userId: user.id, applicationIds: userProfileGameFriendApplicationIds };
          let tmp38;
          if (!tmp24) {
            tmp38 = items;
          }
          obj4.style = tmp38;
          tmp31Result = stateFromStores2(channel(displayProfile[67]), obj4);
          const tmp31 = stateFromStores2;
          const tmp34 = channel(displayProfile[67]);
        }
        items2[4] = tmp31Result;
        const obj5 = { userId: user.id, displayProfile };
        let tmp46;
        if (isPreviewingChanges) {
          tmp46 = pendingBio;
        }
        obj5.pendingBio = tmp46;
        let tmp48;
        if (!channel) {
          tmp48 = items;
        }
        obj5.style = tmp48;
        items2[5] = stateFromStores2(channel(displayProfile[68]), obj5);
        let tmp51Result = null != guild_id;
        if (tmp51Result) {
          const obj6 = { userId: user.id, guildId: guild_id };
          let tmp58;
          if (!tmp24) {
            tmp58 = items;
          }
          obj6.style = tmp58;
          tmp51Result = stateFromStores2(channel(displayProfile[69]), obj6);
          const tmp51 = stateFromStores2;
          const tmp54 = channel(displayProfile[69]);
        }
        items2[6] = tmp51Result;
        let guild_id;
        if (null != channel) {
          guild_id = channel.guild_id;
        }
        let tmp63Result = null != guild_id;
        if (tmp63Result) {
          const obj7 = { user, currentUser: stateFromStores };
          ({ guild_id: obj8.guildId, id: obj8.channelId } = channel);
          obj7.showUserProfile = showUserProfileActionSheet;
          let tmp72;
          if (!tmp24) {
            tmp72 = items;
          }
          obj7.style = tmp72;
          tmp63Result = stateFromStores2(channel(displayProfile[70]), obj7);
          const tmp63 = stateFromStores2;
          const tmp66 = channel(displayProfile[70]);
        }
        items2[7] = tmp63Result;
        const obj8 = { userId: user.id };
        let tmp78;
        if (!channel) {
          tmp78 = items;
        }
        obj8.style = tmp78;
        items2[8] = stateFromStores2(user(displayProfile[71]).UserProfileAccountConnectionsCard, obj8);
        const obj9 = { userId: user.id };
        let tmp84;
        if (!channel) {
          tmp84 = items;
        }
        obj9.style = tmp84;
        items2[9] = stateFromStores2(user(displayProfile[71]).UserProfileApplicationRoleConnectionsCard, obj9);
        let tmp87Result = !isPreviewingChanges;
        if (tmp87Result) {
          const obj10 = { userId: user.id };
          let tmp93;
          if (!tmp24) {
            tmp93 = items;
          }
          obj10.style = tmp93;
          obj10.onBack = showUserProfileActionSheet;
          tmp87Result = stateFromStores2(channel(displayProfile[72]), obj10);
          const tmp87 = stateFromStores2;
          const tmp90 = channel(displayProfile[72]);
        }
        items2[10] = tmp87Result;
        obj.children = items2;
        return isEligibleForSocialLayerStorefrontMobilePurchasing(navigateToShop, obj);
      }
    }
    return null;
  }, items11);
  const items12 = [id3.profileContent, stateFromStores1, tmp41, user.id, id === user.id];
  callback5 = importAllResult.useCallback(() => {
    let obj = { style: id3.profileContent };
    if (null == stateFromStores1) {
      let tmp9 = stateFromStores2(user(displayProfile[73]).WishlistEmptyState, {});
    } else {
      obj = { wishlistId: stateFromStores1, maxWidth: tmp24, isVisible: tmp41 };
      tmp9 = stateFromStores2(channel(displayProfile[73]), obj);
    }
    const items = [tmp9, ];
    let tmp13 = tmp6;
    if (tmp6) {
      obj = { userId: user.id, wishlistId: stateFromStores1, maxWidth: tmp24 };
      tmp13 = stateFromStores2(channel(displayProfile[74]), obj);
    }
    items[1] = tmp13;
    obj.children = items;
    return isEligibleForSocialLayerStorefrontMobilePurchasing(navigateToShop, obj);
  }, items12);
  const items13 = [handlePageContentSize, callback4, callback5, gameWidgets.length > 0, tmp31, boardTabIndex, wishlistTabIndex, user.id, gameWidgets, tmp42, containerBackground];
  const memo1 = importAllResult.useMemo(() => {
    let obj = { id: "main" };
    const intl = user(displayProfile[28]).intl;
    obj.label = intl.string(user(displayProfile[28]).t.LXw470);
    obj = {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return callback(0, arg0, arg1);
      },
      children: callback4()
    };
    obj.page = stateFromStores2(navigateToPremium, obj);
    const items = [obj];
    if (tmp33) {
      obj = { id: "board" };
      const intl2 = user(displayProfile[28]).intl;
      obj.label = intl2.string(user(displayProfile[28]).t.laViwx);
      const obj1 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return callback(closure_24, arg0, arg1);
          }
      };
      const obj2 = { userId: user.id, gameWidgets, isVisible: tmp42, containerBackground };
      obj1.children = stateFromStores2(handlePageContentSize, obj2);
      obj.page = stateFromStores2(navigateToPremium, obj1, boardTabIndex);
      items.push(obj);
    }
    if (tmp31) {
      const obj3 = { id: "wishlist" };
      const intl3 = user(displayProfile[28]).intl;
      obj3.label = intl3.string(user(displayProfile[28]).t.7lZ31J);
      const obj4 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return callback(closure_25, arg0, arg1);
          },
        children: callback5()
      };
      obj3.page = stateFromStores2(navigateToPremium, obj4, wishlistTabIndex);
      items.push(obj3);
    }
    return items;
  }, items13);
  let obj25 = arg1(dependencyMap[75]);
  obj4 = { pageWidth: tmp35[0], defaultIndex: activeProfileTabSectionIndex, itemSpacing: importDefault(dependencyMap[41]).space.PX_24, items: memo1, onPageChange: handleTabChange };
  segmentedControlState = obj25.useSegmentedControlState(obj4);
  let obj27 = arg1(dependencyMap[61]);
  const pagerFillHeight = obj27.usePagerFillHeight();
  const items14 = [segmentedControlState, restoreActiveIndex];
  ({ pagerRef, fillHeight, measureFill } = pagerFillHeight);
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items14);
  let obj28 = arg1(dependencyMap[61]);
  const items15 = [segmentedControlState, wishlistTabIndex, markAsDismissed, setActiveProfileTabSection];
  const pagesHeightStyle = obj28.usePagesHeightStyle(segmentedControlState, pageHeights.pageHeights, fillHeight);
  if (null != user) {
    if (null != stateFromStores) {
      obj5 = { backgroundColor: containerBackground };
      if (isPreviewingChanges) {
        let OpenableUserProfileAvatar = importDefault(dependencyMap[76]);
      } else {
        OpenableUserProfileAvatar = arg1(dependencyMap[76]).OpenableUserProfileAvatar;
      }
      const obj6 = {};
      obj7 = { user, displayProfile, bannerHeight: tmp2 };
      let tmp62;
      if (isPreviewingChanges) {
        tmp62 = pendingBanner;
      }
      obj7.pendingBanner = tmp62;
      let tmp63;
      if (isPreviewingChanges) {
        tmp63 = pendingAvatarSrc;
      }
      obj7.pendingAvatarSrc = tmp63;
      let tmp64;
      if (isPreviewingChanges) {
        if (null != pendingAccentColor) {
          tmp64 = pendingAccentColor;
        }
      }
      obj7.pendingAccentColor = tmp64;
      let tmp65;
      if (isPreviewingChanges) {
        if (null != pendingThemeColors) {
          tmp65 = pendingThemeColors;
        }
      }
      obj7.pendingThemeColors = tmp65;
      obj7.disableInteraction = isPreviewingChanges;
      obj7.bannerAnimatedStyle = bannerAnimatedStyle;
      obj7.bannerImageAnimatedStyle = bannerImageAnimatedStyle;
      obj7.blurAnimatedProps = blurAnimatedProps;
      obj7.showBlur = showBlur;
      let _private;
      if (null != displayProfile) {
        _private = displayProfile.private;
      }
      let tmp67;
      if (true === _private) {
        obj8 = { primaryColor };
        tmp67 = stateFromStores2(importDefault(dependencyMap[78]), obj8);
      }
      obj7.privateBanner = tmp67;
      const items16 = [stateFromStores2(importDefault(dependencyMap[77]), obj7), , ];
      let tmp72Result = !isPreviewingChanges;
      if (tmp72Result) {
        obj9 = {};
        const items17 = [id3.bannerButtons, , ];
        let _private1;
        if (null != displayProfile) {
          _private1 = displayProfile.private;
        }
        if (_private1) {
          _private1 = id3.bannerButtonsWithPrivateBanner;
        }
        items17[1] = _private1;
        items17[2] = bannerAnimatedStyle;
        obj9.style = items17;
        let tmp76 = null;
        if (null != stateFromStores) {
          tmp76 = null;
          if (user.id !== stateFromStores.id) {
            tmp76 = null;
            if (!user.bot) {
              if (relationshipType === RelationshipTypes.FRIEND) {
                obj10 = { user };
                let tmp78 = stateFromStores2(RemoveFriendIconButton, obj10);
              } else {
                tmp78 = null;
                if (isGameFriends) {
                  const obj11 = { user };
                  tmp78 = stateFromStores2(RemoveGameFriendIconButton, obj11);
                }
              }
            }
          }
        }
        const items18 = [tmp76, ];
        const obj12 = { user, currentUser: stateFromStores, displayProfile, channel };
        items18[1] = stateFromStores2(importDefault(dependencyMap[80]), obj12);
        obj9.children = items18;
        tmp72Result = isEligibleForSocialLayerStorefrontMobilePurchasing(importDefault(dependencyMap[79]).View, obj9);
        const tmp72 = isEligibleForSocialLayerStorefrontMobilePurchasing;
      }
      items16[1] = tmp72Result;
      obj13 = { style: contentAnimatedStyle };
      obj14 = { user, guildId: guild_id, disableStatus };
      let tmp91;
      if (isPreviewingChanges) {
        tmp91 = pendingAvatarSrc;
      }
      obj14.pendingAvatarSrc = tmp91;
      let tmp92;
      if (isPreviewingChanges) {
        tmp92 = pendingAvatarDecoration;
      }
      obj14.pendingAvatarDecoration = tmp92;
      obj14.backgroundColor = avatarBackground;
      obj15 = { backgroundColor: statusBackground };
      obj14.statusStyle = obj15;
      const items19 = [stateFromStores2(OpenableUserProfileAvatar, obj14), ];
      const obj16 = {};
      const items20 = [id3.profileContentWrapper, ];
      obj17 = {};
      if (!tmp6) {
        let num9 = 0;
        if (null == tmp15) {
          num9 = tmp22;
        }
      } else {
        num9 = 0;
      }
      obj17.paddingTop = num9;
      obj17.paddingBottom = importDefault(dependencyMap[46])().bottom + pendingBio;
      items20[1] = obj17;
      obj16.style = items20;
      obj18 = { customStatusActivity: tmp15, user, guildId: guild_id };
      let id2;
      if (null != channel) {
        id2 = channel.id;
      }
      obj18.channelId = id2;
      obj18.hasCustomProfileTheme = tmp22;
      obj18.showUserProfileActionSheet = showUserProfileActionSheet;
      obj18.isPreviewingChanges = isPreviewingChanges;
      obj18.bubbleRef = ref;
      const items21 = [stateFromStores2(CustomStatusBubble, obj18), , ];
      let id3Result = null;
      if (null != stateFromStores) {
        obj19 = {};
        const items22 = [, ];
        ({ primaryInfo: arr27[0], profileContent: arr27[1] } = id3);
        obj19.style = items22;
        obj20 = { user };
        id3 = undefined;
        id3 = isEligibleForSocialLayerStorefrontMobilePurchasing;
        id3 = navigateToShop;
        id3 = stateFromStores2;
        id3 = PrimaryInfo;
        if (null != channel) {
          id3 = channel.id;
        }
        obj20.channelId = id3;
        obj20.displayProfile = displayProfile;
        id3 = undefined;
        if (isPreviewingChanges) {
          id3 = pendingGlobalName;
        }
        obj20.displayNameOverride = id3;
        id3 = undefined;
        if (isPreviewingChanges) {
          id3 = pendingPronouns;
        }
        obj20.pronounsOverride = id3;
        id3 = undefined;
        if (isPreviewingChanges) {
          id3 = tmp18;
        }
        obj20.badgesOverride = id3;
        id3 = undefined;
        if (isPreviewingChanges) {
          id3 = pendingDisplayNameStyles;
        }
        obj20.pendingDisplayNameStyles = id3;
        obj20.badgeContainerBackground = containerBackground;
        obj20.isPreviewingChanges = isPreviewingChanges;
        const items23 = [id3(id3, obj20), , , , , , ];
        id3 = user.id !== stateFromStores.id;
        if (id3) {
          id3 = stateFromStores2;
          id3 = importDefault;
          id3 = dependencyMap;
          obj21 = { user, guildId: guild_id };
          id3 = stateFromStores2(importDefault(dependencyMap[81]), obj21);
        }
        items23[1] = id3;
        id3 = RelationshipTypes;
        id3 = relationshipType === RelationshipTypes.PENDING_INCOMING;
        if (id3) {
          id3 = importDefault;
          id3 = dependencyMap;
          id3 = stateFromStores2;
          obj22 = { user };
          id3 = undefined;
          id3 = importDefault(dependencyMap[82]);
          if (null != channel) {
            id3 = channel.id;
          }
          obj22.channelId = id3;
          obj22.guildId = guild_id;
          obj22.applicationId = stateFromStoresObject.originApplicationId;
          obj22.style = obj5;
          obj22.showUserProfile = showUserProfileActionSheet;
          id3 = id3(id3, obj22);
        }
        items23[2] = id3;
        items23[3] = incomingGameRelationshipsForUser.map((applicationId) => {
          const obj = { user, isGameRelationship: true, applicationId: applicationId.applicationId };
          let id;
          if (null != channel) {
            id = channel.id;
          }
          obj.channelId = id;
          obj.guildId = guild_id;
          obj.style = obj5;
          obj.showUserProfile = showUserProfileActionSheet;
          return stateFromStores2(channel(displayProfile[82]), obj, applicationId.applicationId);
        });
        id3 = stateFromStores2;
        id3 = importDefault;
        id3 = dependencyMap;
        const obj23 = { user, style: obj5 };
        items23[4] = stateFromStores2(importDefault(dependencyMap[83]), obj23);
        id3 = user.id === stateFromStores.id && !isPreviewingChanges;
        if (id3) {
          id3 = stateFromStores2;
          id3 = closure_26;
          obj24 = { guildId: guild_id };
          id3 = stateFromStores2(closure_26, obj24);
        }
        items23[5] = id3;
        id3 = user.id !== stateFromStores.id;
        if (id3) {
          id3 = importDefault;
          id3 = dependencyMap;
          id3 = stateFromStores2;
          obj25 = { user };
          id3 = importDefault(dependencyMap[84]);
          if (!disableCalls) {
            id3 = RelationshipTypes;
            disableCalls = relationshipType === RelationshipTypes.BLOCKED;
          }
          if (!disableCalls) {
            disableCalls = user.isProvisional;
          }
          obj25.disableCalls = disableCalls;
          obj25.disableMessage = disableMessage;
          obj25.location = _location;
          obj25.hasCustomProfileTheme = tmp22;
          obj25.style = id3.primaryButtons;
          id3 = id3(id3, obj25);
        }
        items23[6] = id3;
        obj19.children = items23;
        id3Result = id3(id3, obj19);
      }
      items21[1] = id3Result;
      if (!tmp31) {
        if (!tmp33) {
          id3 = callback4();
        }
        items21[2] = id3;
        obj16.children = items21;
        items19[1] = tmp93(tmp94, obj16);
        obj13.children = items19;
        items16[2] = tmp87(importDefault(dependencyMap[79]).View, obj13);
        obj6.children = items16;
        return tmp56(tmp57, obj6);
      }
      const obj26 = { onLayout: callback };
      id3 = isEligibleForSocialLayerStorefrontMobilePurchasing;
      id3 = arg1;
      id3 = dependencyMap;
      id3 = stateFromStores2;
      id3 = navigateToShop;
      obj27 = {};
      obj28 = { style: id3.profileTablist };
      id3 = navigateToShop;
      id3 = stateFromStores2;
      const obj29 = { state: segmentedControlState };
      let str;
      if (tmp22) {
        str = "gradient-background";
      }
      obj29.variant = str;
      const items24 = [id3(arg1(dependencyMap[86]).Tabs, obj29), ];
      id3 = stateFromStores2;
      id3 = navigateToShop;
      const obj30 = { ref: ref1 };
      const obj31 = {};
      id3 = globalThis;
      const _Math = Math;
      obj31.left = `${Math.max(wishlistTabIndex, 0) / arr18.length * 100}%`;
      obj30.style = obj31;
      obj30.collapsable = false;
      obj30.pointerEvents = "box-none";
      items24[1] = stateFromStores2(navigateToShop, obj30);
      obj28.children = items24;
      const items25 = [id3(id3, obj28), , ];
      id3 = stateFromStores2;
      id3 = importDefault;
      id3 = dependencyMap;
      const obj32 = { ref: pagerRef, onLayout: measureFill, style: pagesHeightStyle };
      id3 = stateFromStores2;
      id3 = arg1;
      const obj33 = { state: segmentedControlState };
      obj32.children = stateFromStores2(arg1(dependencyMap[87]).SegmentedControlPages, obj33);
      items25[1] = stateFromStores2(importDefault(dependencyMap[79]).View, obj32);
      id3 = stateFromStores2;
      const obj34 = { anchorRef: ref1, isVisible, markAsDismissed, onViewWishlist: tmp51 };
      items25[2] = stateFromStores2(importDefault(dependencyMap[88]), obj34);
      obj27.children = items25;
      obj26.children = id3(arg1(dependencyMap[85]).LayerScope, obj27);
      id3 = id3(id3, obj26);
      const tmp56 = isEligibleForSocialLayerStorefrontMobilePurchasing;
      const tmp57 = tmp31;
      const tmp58 = stateFromStores2;
      const tmp61 = importDefault(dependencyMap[77]);
      const tmp87 = isEligibleForSocialLayerStorefrontMobilePurchasing;
      const tmp90 = stateFromStores2;
      const tmp93 = isEligibleForSocialLayerStorefrontMobilePurchasing;
      const tmp94 = navigateToShop;
      const tmp96 = stateFromStores2;
      const tmp97 = CustomStatusBubble;
    }
  }
  return null;
});
const result = arg1(dependencyMap[89]).fileFinishedImporting("modules/user_profile/native/UserProfileContent.tsx");

export default memoResult;
export { PrimaryInfo };
