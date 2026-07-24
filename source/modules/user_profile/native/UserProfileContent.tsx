// Module ID: 12009
// Function ID: 92810
// Name: CustomStatusBubble
// Dependencies: [57, 31, 27, 8718, 1838, 3767, 1849, 7930, 6855, 8308, 5510, 653, 5188, 1345, 33, 8282, 566, 4098, 11935, 1934, 11929, 11925, 8310, 5462, 8962, 3969, 7533, 12010, 1212, 11680, 12011, 4070, 8298, 4319, 5490, 3830, 8557, 9814, 11943, 4543, 9142, 689, 10513, 12013, 12014, 8545, 8554, 1557, 12012, 12130, 12131, 5687, 11920, 7943, 8280, 8284, 1324, 8717, 7882, 12132, 12127, 12133, 12134, 12135, 12136, 11687, 12137, 11945, 12142, 11914, 5485, 11997, 12143, 12000, 12148, 12155, 8404, 8307, 8555, 12162, 3991, 12163, 12172, 12173, 12177, 12178, 5449, 11676, 8797, 12182, 2]

// Module 12009 (CustomStatusBubble)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "UserPlatformIcon";
import get_ActivityIndicator from "UserCheckIcon";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_createForOfIteratorHelperLoose";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import { UserProfileSections } from "USER_PROFILE_TOOLTIP_DELAY";
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET";
import { RelationshipTypes } from "ME";
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "getNickname";

let closure_14;
let closure_15;
let closure_19;
let closure_20;
let closure_21;
let closure_5;
let closure_6;
const require = arg1;
function CustomStatusBubble(guildId) {
  let bubbleRef;
  let customStatusActivity;
  let hasCustomProfileTheme;
  let user;
  ({ customStatusActivity, user } = guildId);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  const isPreviewingChanges = guildId.isPreviewingChanges;
  ({ hasCustomProfileTheme, bubbleRef } = guildId);
  const tmp = guildId(channelId[15])();
  let obj = user(channelId[16]);
  const items = [closure_10];
  const items1 = [user];
  let stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = outer1_10.getCurrentUser();
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
        tmp5 = guildId(channelId[20])();
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
  return closure_19(guildId(channelId[21]), obj);
}
function RemoveFriendIconButton(user) {
  user = user.user;
  let trackUserProfileAction;
  let newestAnalyticsLocation;
  function handleConfirm() {
    trackUserProfileAction({ action: "REMOVE_FRIEND" });
    let obj = trackUserProfileAction(newestAnalyticsLocation[24]);
    obj = { location: newestAnalyticsLocation };
    obj.removeFriend(user.id, obj);
  }
  let obj = user(newestAnalyticsLocation[22]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  newestAnalyticsLocation = trackUserProfileAction(newestAnalyticsLocation[23])().newestAnalyticsLocation;
  let _createForOfIteratorHelperLoose = trackUserProfileAction(newestAnalyticsLocation[25]).useName(user);
  obj = { size: "sm", variant: "secondary-overlay", icon: callback(user(newestAnalyticsLocation[27]).UserCheckIcon, { size: "sm", color: "white" }) };
  const intl = user(newestAnalyticsLocation[28]).intl;
  obj.accessibilityLabel = intl.string(user(newestAnalyticsLocation[28]).t.cvSt1J);
  obj.onPress = function onPress() {
    let obj = user(newestAnalyticsLocation[29]);
    obj = { userDisplayName: _createForOfIteratorHelperLoose, onConfirm: handleConfirm };
    obj.confirmRemoveFriend(obj);
  };
  return callback(user(newestAnalyticsLocation[26]).IconButton, obj);
}
function RemoveGameFriendIconButton(user) {
  user = user.user;
  const guildId = user.guildId;
  const channelId = user.channelId;
  const items = [channelId, guildId, user];
  const callback = importAllResult.useCallback(() => {
    let obj = guildId(channelId[17]);
    obj = { user, guildId, channelId };
    obj.openLazy(user(channelId[19])(channelId[30], channelId.paths), "UserProfileGameFriendActionSheet", obj, "stack");
  }, items);
  let obj = { size: "sm", variant: "secondary-overlay", icon: callback(user(channelId[31]).UserPlatformIcon, { size: "sm", color: "white" }) };
  const intl = user(channelId[28]).intl;
  obj.accessibilityLabel = intl.string(user(channelId[28]).t.cvSt1J);
  obj.onPress = callback;
  return callback(user(channelId[26]).IconButton, obj);
}
class PrimaryInfo {
  constructor(arg0) {
    ({ user, displayProfile, displayNameOverride, pronounsOverride, badgesOverride, isPreviewingChanges } = global);
    trackUserProfileAction = undefined;
    ({ channelId, pendingDisplayNameStyles, style, badgeContainerBackground } = global);
    obj = require("conceal");
    userTag = obj.useUserTag(user);
    useUserTag = userTag;
    tmp2 = require("useBadges")(displayProfile);
    obj2 = require("getNickname");
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
    obj3 = require("UserProfileAnalyticsProvider");
    trackUserProfileAction = obj3.useUserProfileAnalyticsContext().trackUserProfileAction;
    items = [, ];
    items[0] = trackUserProfileAction;
    items[1] = userTag;
    callback = defineProperty.useCallback(() => {
      trackUserProfileAction({ action: "COPY_USERNAME" });
      userTag(outer1_2[34]).copy(userTag);
      const obj = userTag(outer1_2[34]);
      const result = userTag(outer1_2[35]).presentUsernameCopied();
    }, items);
    tmp7 = jsx;
    obj = { user };
    guildId1 = undefined;
    tmp8 = require("getStyleConfig");
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
    intl = require("getSystemLocale").intl;
    obj.displayNameAccessibilityHint = intl.string(require("getSystemLocale").t.y5MwJy);
    tmp12 = undefined;
    if (!isPreviewingChanges) {
      tmp12 = callback;
    }
    obj.onPressUserTag = tmp12;
    fn = undefined;
    if (!isPreviewingChanges) {
      fn = () => {
        trackUserProfileAction({ action: "PRESS_PRONOUNS" });
        userTag(outer1_2[35]).presentUserPronouns();
      };
    }
    obj.onPressPronouns = fn;
    obj.showBadgeToastOnPress = !isPreviewingChanges;
    obj.pendingDisplayNameStyles = pendingDisplayNameStyles;
    return tmp7(tmp8, obj);
  }
}
function EditSection(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(8310);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj1 = guildId(566);
  const items = [closure_8];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_8.getGuild(guildId));
  const dependencyMap = trackUserProfileAction(9814)();
  let _createForOfIteratorHelperLoose = trackUserProfileAction(9814)({ guild: stateFromStores });
  obj = { style: trackUserProfileAction(8282)().primaryButtons, maxWidth: ACTION_SHEET_MAX_WIDTH };
  const tmp = trackUserProfileAction(8282)();
  const tmp3 = callback;
  obj = { variant: "primary" };
  obj1 = { size: "sm", color: trackUserProfileAction(689).colors.WHITE };
  obj.icon = callback(guildId(9142).PencilIcon, obj1);
  if (null != stateFromStores) {
    const intl2 = guildId(1212).intl;
    let stringResult = intl2.string(guildId(1212).t.HmFaFB);
  } else {
    const intl = guildId(1212).intl;
    stringResult = intl.string(guildId(1212).t.s5vZlQ);
  }
  obj.text = stringResult;
  obj.onPress = function onPress() {
    trackUserProfileAction({ action: "EDIT_PROFILE" });
    trackUserProfileAction(4098).hideActionSheet();
    trackUserProfileAction(10513)();
    dependencyMap();
  };
  obj.grow = true;
  obj.primaryButton = callback(guildId(4543).Button, obj);
  let tmp11;
  if (null != stateFromStores) {
    const obj2 = { variant: "primary" };
    const obj3 = { size: "sm", color: trackUserProfileAction(689).colors.WHITE };
    obj2.icon = callback(guildId(9142).PencilIcon, obj3);
    const intl3 = guildId(1212).intl;
    obj2.text = intl3.string(guildId(1212).t["PKQB/H"]);
    obj2.onPress = function onPress() {
      trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
      trackUserProfileAction(4098).hideActionSheet();
      trackUserProfileAction(10513)();
      callback();
    };
    obj2.grow = true;
    tmp11 = callback(guildId(4543).Button, obj2);
  }
  obj.secondaryButton = tmp11;
  return tmp3(trackUserProfileAction(11943), obj);
}
function UserProfileWidgetsBoardContainer(isCurrentUser) {
  let containerBackground;
  let isVisible;
  let userId;
  isCurrentUser = isCurrentUser.isCurrentUser;
  ({ userId, isVisible, containerBackground } = isCurrentUser);
  const tmp = importDefault(8282)();
  const items = [tmp.card, { backgroundColor: containerBackground }];
  const obj = { style: tmp.profileContent };
  if (isCurrentUser) {
    isCurrentUser = callback(importDefault(12013), {});
  }
  const items1 = [isCurrentUser, callback(importDefault(12014), { userId, isVisible, cardStyle: items })];
  obj.children = items1;
  return closure_20(closure_6, obj);
}
({ ScrollView: closure_5, View: closure_6 } = get_ActivityIndicator);
({ PROFILE_CONTENT_BOTTOM_PADDING: closure_14, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_15 } = ARBITRARY_LARGE_OFFSET);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = jsxProd);
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
  const channel = user.channel;
  const displayProfile = user.displayProfile;
  const showUserProfileActionSheet = user.showUserProfileActionSheet;
  ({ disableCalls, isPreviewingChanges } = user);
  const navigateToPremium = user.navigateToPremium;
  const navigateToShop = user.navigateToShop;
  let c10;
  let userProfileGameFriendApplicationIds;
  let guild_id;
  let name;
  let pendingBio;
  let c15;
  let containerBackground;
  let c17;
  let stateFromStores1;
  let stateFromStores2;
  let isEligibleForSocialLayerStorefrontMobilePurchasing;
  let c21;
  let c22;
  let boardTabIndex;
  let wishlistTabIndex;
  let closure_25;
  let handlePageContentSize;
  let isVisible;
  let markAsDismissed;
  setActiveProfileTabSection = undefined;
  let restoreActiveIndex;
  let c31;
  let c32;
  let callback2;
  let callback3;
  let callback4;
  let callback5;
  let segmentedControlState;
  let obj5;
  ({ disableMessage, disableStatus, location: _location, initialSection, scrollPosition } = user);
  let id3 = channel(displayProfile[15])();
  const tmp2 = channel(displayProfile[45])(c17);
  const tmp3 = channel(displayProfile[46])({ scrollPosition, bannerHeight: tmp2 });
  const bannerAnimatedStyle = tmp3.bannerAnimatedStyle;
  ({ bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = tmp3);
  let obj = user(displayProfile[22]);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj1 = user(displayProfile[16]);
  let items = [c10];
  const stateFromStores = obj1.useStateFromStores(items, () => _undefined.getCurrentUser());
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  c10 = tmp6;
  let obj2 = user(displayProfile[16]);
  let items1 = [stateFromStores];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => ({ relationshipType: stateFromStores.getRelationshipType(user.id), originApplicationId: stateFromStores.getOriginApplicationId(user.id) }));
  const relationshipType = stateFromStoresObject.relationshipType;
  let obj3 = user(displayProfile[48]);
  const incomingGameRelationshipsForUser = obj3.useIncomingGameRelationshipsForUser(user.id);
  let obj4 = user(displayProfile[49]);
  const isGameFriends = obj4.useIsGameFriends(user.id);
  obj5 = user(displayProfile[50]);
  obj = { userId: user.id };
  userProfileGameFriendApplicationIds = obj5.useUserProfileGameFriendApplicationIds(obj);
  if (null != displayProfile) {
    const guildId = displayProfile.guildId;
    let tmp10;
    if (null != guildId) {
      tmp10 = guildId;
    }
    guild_id = tmp10;
  } else if (null != channel) {
    guild_id = channel.guild_id;
  }
  let obj7 = channel(displayProfile[33]);
  let id1;
  if (null != channel) {
    id1 = channel.id;
  }
  name = obj7.useName(guild_id, id1, user);
  let items2 = [guild_id, user];
  const memo = isPreviewingChanges.useMemo(() => {
    if (null != guild_id) {
      if (null != user) {
        const obj = {};
        const items = [user.id];
        obj[guild_id] = items;
      }
      return {};
    }
  }, items2);
  let obj8 = user(displayProfile[51]);
  const subscribeGuildMembers = obj8.useSubscribeGuildMembers(memo, "UserProfileContent");
  let tmp15 = channel(displayProfile[52])(user.id);
  let obj9 = user(displayProfile[16]);
  const items3 = [userProfileGameFriendApplicationIds];
  const stateFromStoresObject1 = obj9.useStateFromStoresObject(items3, () => userProfileGameFriendApplicationIds.getPendingChanges());
  pendingBio = stateFromStoresObject1.pendingBio;
  ({ pendingAccentColor, pendingThemeColors } = stateFromStoresObject1);
  ({ pendingBanner, pendingAvatar, pendingAvatarDecoration, pendingGlobalName, pendingPronouns, pendingLegacyUsernameDisabled, pendingDisplayNameStyles } = stateFromStoresObject1);
  let obj10 = user(displayProfile[53]);
  obj = { userId: user.id, image: pendingAvatar };
  const pendingAvatarSrc = obj10.getPendingAvatarSrc(obj);
  obj1 = { user, displayProfile };
  let tmp20;
  const tmp18 = channel(displayProfile[32])(displayProfile, pendingLegacyUsernameDisabled);
  if (isPreviewingChanges) {
    tmp20 = pendingThemeColors;
  }
  obj1.pendingThemeColors = tmp20;
  const tmp19Result = channel(displayProfile[54])(obj1);
  const primaryColor = tmp19Result.primaryColor;
  c15 = tmp22;
  ({ theme, secondaryColor } = tmp19Result);
  let obj13 = user(displayProfile[55]);
  const userProfileColors = obj13.useUserProfileColors({ theme, primaryColor, secondaryColor });
  containerBackground = userProfileColors.containerBackground;
  ({ avatarBackground, statusBackground } = userProfileColors);
  const tmp24 = channel(displayProfile[56])("UserProfileContent");
  c17 = tmp24;
  const tmp19 = channel(displayProfile[54]);
  const ref1 = isPreviewingChanges.useRef(null);
  let obj14 = user(displayProfile[16]);
  const items4 = [guild_id];
  stateFromStores1 = obj14.useStateFromStores(items4, () => guild_id.getFirstWishlistId(user.id));
  let obj15 = user(displayProfile[57]);
  obj2 = { wishlistId: stateFromStores1, userId: user.id };
  const fetchWishlist = obj15.useFetchWishlist(obj2);
  let obj17 = user(displayProfile[16]);
  const items5 = [id3];
  const items6 = [stateFromStores1];
  stateFromStores2 = obj17.useStateFromStores(items5, () => {
    let wishlist = null;
    if (null != stateFromStores1) {
      wishlist = id3.getWishlist(stateFromStores1);
    }
    return wishlist;
  }, items6);
  let obj18 = user(displayProfile[58]);
  isEligibleForSocialLayerStorefrontMobilePurchasing = obj18.useIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "user_profile_content" });
  const items7 = [stateFromStores2, id === user.id, isEligibleForSocialLayerStorefrontMobilePurchasing];
  let tmp31 = tmp6;
  if (id !== user.id) {
    let tmp32 = null != stateFromStores2;
    if (tmp32) {
      tmp32 = arr10.length > 0;
    }
    tmp31 = tmp32;
  }
  c21 = tmp31;
  let obj19 = user(displayProfile[60]);
  const tmp33 = obj19.useDisplayableBoardWidgets(user.id).length > 0;
  c22 = tmp33;
  let obj20 = user(displayProfile[61]);
  const profileTabIndices = obj20.useProfileTabIndices(tmp33, tmp31);
  boardTabIndex = profileTabIndices.boardTabIndex;
  wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  const tmp35 = showUserProfileActionSheet(isPreviewingChanges.useState(0), 2);
  closure_25 = tmp35[1];
  const callback = isPreviewingChanges.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj21 = user(displayProfile[62]);
  const pageHeights = obj21.usePageHeights();
  handlePageContentSize = pageHeights.handlePageContentSize;
  let obj22 = user(displayProfile[63]);
  obj3 = { isCurrentUser: tmp6, shouldShowWishlistTab: tmp31 };
  const wishlistViewerCoachmark = obj22.useWishlistViewerCoachmark(obj3);
  isVisible = wishlistViewerCoachmark.isVisible;
  markAsDismissed = wishlistViewerCoachmark.markAsDismissed;
  const items8 = [trackUserProfileAction, isVisible, markAsDismissed];
  const callback1 = isPreviewingChanges.useCallback((section) => {
    trackUserProfileAction({ action: "PRESS_SECTION", section });
    if (tmp2) {
      markAsDismissed(stateFromStores1.INDIRECT_ACTION);
    }
  }, items8);
  let obj24 = user(displayProfile[61]);
  const profileSectionTabs = obj24.useProfileSectionTabs({ initialUserProfileSection: initialSection, wishlistTabIndex, boardTabIndex, onTabChange: callback1 });
  ({ activeProfileTabSection, setActiveProfileTabSection } = profileSectionTabs);
  restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  c31 = tmp41;
  c32 = tmp42;
  const items9 = [navigateToPremium];
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  callback2 = isPreviewingChanges.useCallback(() => {
    channel(displayProfile[17]).hideActionSheet();
    if (null != navigateToPremium) {
      navigateToPremium();
    }
  }, items9);
  const items10 = [navigateToShop];
  callback3 = isPreviewingChanges.useCallback(() => {
    channel(displayProfile[17]).hideActionSheet();
    if (null != navigateToShop) {
      navigateToShop();
    }
  }, items10);
  const items11 = [user, stateFromStores, containerBackground, id3, isPreviewingChanges, tmp24, callback2, callback3, null != primaryColor, guild_id, userProfileGameFriendApplicationIds, displayProfile, name, pendingBio, channel, showUserProfileActionSheet];
  callback4 = isPreviewingChanges.useCallback(() => {
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
          _private = stateFromStores2(channel(displayProfile[64]), obj);
        }
        const items2 = [_private, , , , , , , , , , ];
        let isProvisional = user.isProvisional;
        if (isProvisional) {
          const obj1 = { style: items, userId: user.id, iconSize: 16 };
          isProvisional = stateFromStores2(user(displayProfile[65]).UserProfileProvisionalAccountExplainerCard, obj1);
        }
        items2[1] = isProvisional;
        let tmp15 = user.id === stateFromStores.id;
        if (tmp15) {
          tmp15 = !isPreviewingChanges;
        }
        if (tmp15) {
          const obj2 = { navigateToPremium: callback2, navigateToShop: callback3, hasCustomProfileTheme: c15 };
          tmp15 = stateFromStores2(channel(displayProfile[66]), obj2);
        }
        items2[2] = tmp15;
        const obj3 = { user, currentUser: stateFromStores, guildId: guild_id, style: items };
        items2[3] = stateFromStores2(channel(displayProfile[67]), obj3);
        let tmp31Result = userProfileGameFriendApplicationIds.length > 0;
        if (tmp31Result) {
          const obj4 = { userId: user.id, applicationIds: userProfileGameFriendApplicationIds };
          let tmp38;
          if (!c17) {
            tmp38 = items;
          }
          obj4.style = tmp38;
          tmp31Result = stateFromStores2(channel(displayProfile[68]), obj4);
          const tmp31 = stateFromStores2;
          const tmp34 = channel(displayProfile[68]);
        }
        items2[4] = tmp31Result;
        const obj5 = { userId: user.id, displayProfile };
        let tmp46;
        if (isPreviewingChanges) {
          tmp46 = pendingBio;
        }
        obj5.pendingBio = tmp46;
        let tmp48;
        if (!c17) {
          tmp48 = items;
        }
        obj5.style = tmp48;
        items2[5] = stateFromStores2(channel(displayProfile[69]), obj5);
        let tmp51Result = null != guild_id;
        if (tmp51Result) {
          const obj6 = { userId: user.id, guildId: guild_id };
          let tmp58;
          if (!c17) {
            tmp58 = items;
          }
          obj6.style = tmp58;
          tmp51Result = stateFromStores2(channel(displayProfile[70]), obj6);
          const tmp51 = stateFromStores2;
          const tmp54 = channel(displayProfile[70]);
        }
        items2[6] = tmp51Result;
        guild_id = undefined;
        if (null != channel) {
          guild_id = channel.guild_id;
        }
        let tmp63Result = null != guild_id;
        if (tmp63Result) {
          const obj7 = { user, currentUser: stateFromStores };
          ({ guild_id: obj8.guildId, id: obj8.channelId } = channel);
          obj7.showUserProfile = showUserProfileActionSheet;
          let tmp72;
          if (!c17) {
            tmp72 = items;
          }
          obj7.style = tmp72;
          tmp63Result = stateFromStores2(channel(displayProfile[71]), obj7);
          const tmp63 = stateFromStores2;
          const tmp66 = channel(displayProfile[71]);
        }
        items2[7] = tmp63Result;
        const obj8 = { userId: user.id };
        let tmp78;
        if (!c17) {
          tmp78 = items;
        }
        obj8.style = tmp78;
        items2[8] = stateFromStores2(user(displayProfile[72]).UserProfileAccountConnectionsCard, obj8);
        const obj9 = { userId: user.id };
        let tmp84;
        if (!c17) {
          tmp84 = items;
        }
        obj9.style = tmp84;
        items2[9] = stateFromStores2(user(displayProfile[72]).UserProfileApplicationRoleConnectionsCard, obj9);
        let tmp87Result = !isPreviewingChanges;
        if (tmp87Result) {
          const obj10 = { userId: user.id };
          let tmp93;
          if (!c17) {
            tmp93 = items;
          }
          obj10.style = tmp93;
          obj10.onBack = showUserProfileActionSheet;
          tmp87Result = stateFromStores2(channel(displayProfile[73]), obj10);
          const tmp87 = stateFromStores2;
          const tmp90 = channel(displayProfile[73]);
        }
        items2[10] = tmp87Result;
        obj.children = items2;
        return isEligibleForSocialLayerStorefrontMobilePurchasing(navigateToShop, obj);
      }
    }
    return null;
  }, items11);
  const items12 = [id3.profileContent, stateFromStores1, activeProfileTabSection === name.WISHLIST, user.id, id === user.id];
  callback5 = isPreviewingChanges.useCallback(() => {
    let obj = { style: id3.profileContent };
    if (null == stateFromStores1) {
      let tmp9 = stateFromStores2(user(displayProfile[74]).WishlistEmptyState, {});
    } else {
      obj = { wishlistId: stateFromStores1, maxWidth: c17, isVisible: c31 };
      tmp9 = stateFromStores2(channel(displayProfile[74]), obj);
    }
    const items = [tmp9, ];
    let tmp13 = c10;
    if (c10) {
      obj = { userId: user.id, wishlistId: stateFromStores1, maxWidth: c17 };
      tmp13 = stateFromStores2(channel(displayProfile[75]), obj);
    }
    items[1] = tmp13;
    obj.children = items;
    return isEligibleForSocialLayerStorefrontMobilePurchasing(navigateToShop, obj);
  }, items12);
  const items13 = [handlePageContentSize, callback4, callback5, tmp33, tmp31, boardTabIndex, wishlistTabIndex, user.id, activeProfileTabSection === name.WIDGETS, id === user.id, containerBackground];
  const memo1 = isPreviewingChanges.useMemo(() => {
    let obj = { id: "main" };
    const intl = user(displayProfile[28]).intl;
    obj.label = intl.string(user(displayProfile[28]).t.LXw470);
    obj = {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return outer1_26(0, arg0, arg1);
      },
      children: callback4()
    };
    obj.page = stateFromStores2(navigateToPremium, obj);
    const items = [obj];
    if (c22) {
      obj = { id: "board" };
      const intl2 = user(displayProfile[28]).intl;
      obj.label = intl2.string(user(displayProfile[28]).t.laViwx);
      const obj1 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return outer1_26(outer1_23, arg0, arg1);
          }
      };
      const obj2 = { userId: user.id, isVisible: c32, isCurrentUser: c10, containerBackground };
      obj1.children = stateFromStores2(isVisible, obj2);
      obj.page = stateFromStores2(navigateToPremium, obj1, boardTabIndex);
      items.push(obj);
    }
    if (c21) {
      const obj3 = { id: "wishlist" };
      const intl3 = user(displayProfile[28]).intl;
      obj3.label = intl3.string(user(displayProfile[28]).t["7lZ31J"]);
      const obj4 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return outer1_26(outer1_24, arg0, arg1);
          },
        children: callback5()
      };
      obj3.page = stateFromStores2(navigateToPremium, obj4, wishlistTabIndex);
      items.push(obj3);
    }
    return items;
  }, items13);
  let obj25 = user(displayProfile[76]);
  obj4 = { pageWidth: tmp35[0], defaultIndex: activeProfileTabSectionIndex, itemSpacing: channel(displayProfile[41]).space.PX_24, items: memo1, onPageChange: handleTabChange };
  segmentedControlState = obj25.useSegmentedControlState(obj4);
  let obj27 = user(displayProfile[62]);
  const pagerFillHeight = obj27.usePagerFillHeight();
  const items14 = [segmentedControlState, restoreActiveIndex];
  ({ pagerRef, fillHeight, measureFill } = pagerFillHeight);
  const layoutEffect = isPreviewingChanges.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items14);
  let obj28 = user(displayProfile[62]);
  const items15 = [segmentedControlState, wishlistTabIndex, markAsDismissed, setActiveProfileTabSection];
  const pagesHeightStyle = obj28.usePagesHeightStyle(segmentedControlState, pageHeights.pageHeights, fillHeight);
  if (null != user) {
    if (null != stateFromStores) {
      obj5 = { backgroundColor: containerBackground };
      if (isPreviewingChanges) {
        let OpenableUserProfileAvatar = channel(displayProfile[77]);
      } else {
        OpenableUserProfileAvatar = user(displayProfile[77]).OpenableUserProfileAvatar;
      }
      let obj6 = {};
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
        tmp67 = stateFromStores2(channel(displayProfile[79]), obj8);
      }
      obj7.privateBanner = tmp67;
      const items16 = [stateFromStores2(channel(displayProfile[78]), obj7), , ];
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
              if (relationshipType === containerBackground.FRIEND) {
                obj10 = { user };
                let tmp78 = stateFromStores2(boardTabIndex, obj10);
              } else {
                tmp78 = null;
                if (isGameFriends) {
                  const obj11 = { user };
                  tmp78 = stateFromStores2(wishlistTabIndex, obj11);
                }
              }
            }
          }
        }
        const items18 = [tmp76, ];
        const obj12 = { user, currentUser: stateFromStores, displayProfile, channel };
        items18[1] = stateFromStores2(channel(displayProfile[81]), obj12);
        obj9.children = items18;
        tmp72Result = isEligibleForSocialLayerStorefrontMobilePurchasing(channel(displayProfile[80]).View, obj9);
        let tmp72 = isEligibleForSocialLayerStorefrontMobilePurchasing;
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
          num9 = c15;
        }
      } else {
        num9 = 0;
      }
      obj17.paddingTop = num9;
      obj17.paddingBottom = channel(displayProfile[47])().bottom + pendingBio;
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
      const items21 = [stateFromStores2(c22, obj18), , ];
      let id3Result = null;
      if (null != stateFromStores) {
        obj19 = {};
        const items22 = [, ];
        ({ primaryInfo: arr26[0], profileContent: arr26[1] } = id3);
        obj19.style = items22;
        obj20 = { user };
        id3 = undefined;
        id3 = isEligibleForSocialLayerStorefrontMobilePurchasing;
        id3 = navigateToShop;
        id3 = stateFromStores2;
        id3 = closure_25;
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
          id3 = channel;
          id3 = displayProfile;
          obj21 = { user, guildId: guild_id };
          id3 = stateFromStores2(channel(displayProfile[82]), obj21);
        }
        items23[1] = id3;
        id3 = containerBackground;
        id3 = relationshipType === containerBackground.PENDING_INCOMING;
        if (id3) {
          id3 = channel;
          id3 = displayProfile;
          id3 = stateFromStores2;
          obj22 = { user };
          id3 = undefined;
          id3 = channel(displayProfile[83]);
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
          return stateFromStores2(channel(displayProfile[83]), obj, applicationId.applicationId);
        });
        id3 = stateFromStores2;
        id3 = channel;
        id3 = displayProfile;
        const obj23 = { user, style: obj5 };
        items23[4] = stateFromStores2(channel(displayProfile[84]), obj23);
        id3 = user.id === stateFromStores.id && !isPreviewingChanges;
        if (id3) {
          id3 = stateFromStores2;
          id3 = handlePageContentSize;
          obj24 = { guildId: guild_id };
          id3 = stateFromStores2(handlePageContentSize, obj24);
        }
        items23[5] = id3;
        id3 = user.id !== stateFromStores.id;
        if (id3) {
          id3 = channel;
          id3 = displayProfile;
          id3 = stateFromStores2;
          obj25 = { user };
          id3 = channel(displayProfile[85]);
          if (!disableCalls) {
            id3 = containerBackground;
            disableCalls = relationshipType === containerBackground.BLOCKED;
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
        items16[2] = tmp87(channel(displayProfile[80]).View, obj13);
        obj6.children = items16;
        return tmp56(tmp57, obj6);
      }
      const obj26 = { onLayout: callback };
      id3 = user;
      id3 = displayProfile;
      id3 = stateFromStores2;
      id3 = navigateToShop;
      id3 = isEligibleForSocialLayerStorefrontMobilePurchasing;
      obj27 = {};
      obj28 = { style: id3.profileTablist };
      id3 = isEligibleForSocialLayerStorefrontMobilePurchasing;
      id3 = navigateToShop;
      id3 = stateFromStores2;
      const obj29 = { state: segmentedControlState };
      let str;
      if (tmp22) {
        str = "gradient-background";
      }
      obj29.variant = str;
      const items24 = [id3(user(displayProfile[87]).Tabs, obj29), ];
      id3 = stateFromStores2;
      id3 = navigateToShop;
      const obj30 = { ref: ref1 };
      const obj31 = { position: "absolute", left: null, top: 0, right: 0, bottom: 0 };
      id3 = globalThis;
      const _Math = Math;
      obj31.left = `${Math.max(wishlistTabIndex, 0) / arr17.length * 100}%`;
      obj30.style = obj31;
      obj30.collapsable = false;
      obj30.pointerEvents = "box-none";
      items24[1] = stateFromStores2(navigateToShop, obj30);
      obj28.children = items24;
      const items25 = [id3(id3, obj28), , ];
      id3 = stateFromStores2;
      id3 = channel;
      id3 = displayProfile;
      const obj32 = { ref: pagerRef, onLayout: measureFill, style: pagesHeightStyle };
      id3 = stateFromStores2;
      id3 = user;
      const obj33 = { state: segmentedControlState };
      obj32.children = stateFromStores2(user(displayProfile[88]).SegmentedControlPages, obj33);
      items25[1] = stateFromStores2(channel(displayProfile[80]).View, obj32);
      id3 = stateFromStores2;
      const obj34 = { anchorRef: ref1, isVisible, markAsDismissed, onViewWishlist: tmp51 };
      items25[2] = stateFromStores2(channel(displayProfile[89]), obj34);
      obj27.children = items25;
      obj26.children = id3(user(displayProfile[86]).LayerScope, obj27);
      id3 = id3(id3, obj26);
      tmp56 = isEligibleForSocialLayerStorefrontMobilePurchasing;
      tmp57 = c21;
      let tmp58 = stateFromStores2;
      const tmp61 = channel(displayProfile[78]);
      tmp87 = isEligibleForSocialLayerStorefrontMobilePurchasing;
      let tmp90 = stateFromStores2;
      tmp93 = isEligibleForSocialLayerStorefrontMobilePurchasing;
      tmp94 = navigateToShop;
      const tmp96 = stateFromStores2;
      const tmp97 = c22;
    }
  }
  return null;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/UserProfileContent.tsx");

export default memoResult;
export { PrimaryInfo };
