// Module ID: 15045
// Function ID: 15046
// Name: UserProfileContent
// Dependencies: [32, 19, 17, 8887, 9599, 5012, 5083, 1385, 8855, 7896, 8878, 7497, 1072, 5396, 4987, 21, 15046, 8938, 504, 5381, 11548, 2123, 11538, 11534, 8885, 7446, 7612, 5195, 8152, 15047, 1113, 14326, 15048, 5843, 8939, 15050, 7693, 4974, 15053, 6161, 7478, 5831, 11551, 15054, 11655, 14971, 5754, 10362, 575, 11066, 15075, 15076, 15079, 15109, 8927, 8940, 1627, 15115, 15049, 15119, 15120, 7606, 11549, 8864, 11590, 8892, 15121, 8924, 8935, 9598, 15108, 15077, 15122, 15123, 15124, 15125, 14333, 15126, 14973, 15128, 11629, 7474, 15035, 15129, 15038, 15134, 15140, 15146, 9108, 8952, 1652, 15147, 8941, 14943, 5734, 15148, 15149, 15154, 15155, 15116, 12306, 15159, 2]

// Module 15045 (UserProfileContent)
import react_native from "react-native" /* 17 */;
import Constants2 from "Constants" /* 1072 */;
import intl6 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 2123 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5396 */;
import ToastUtils from "ToastUtils" /* 5831 */;
import ClipboardUtils from "ClipboardUtils" /* 7478 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7612 */;
import Constants3 from "Constants" /* 8878 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8892 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8938 */;
import closeVoicePanelsDefault from "closeVoicePanels" /* 11066 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 11629 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 14326 */;
import ProvisionalAccountExplainer from "ProvisionalAccountExplainer" /* 14333 */;
import UserProfileActivityDefault from "UserProfileActivity" /* 14973 */;
import WishlistUtils from "WishlistUtils" /* 15046 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 15079 */;
import UserProfileActivityTabDefault from "UserProfileActivityTab" /* 15109 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 15121 */;
import UserProfilePrivateInfoBannerDefault from "UserProfilePrivateInfoBanner" /* 15125 */;
import UserProfileDismissibleUpsellsDefault from "UserProfileDismissibleUpsells" /* 15126 */;
import UserProfileConnections from "UserProfileConnections" /* 15129 */;
import UserProfileWishlistGrid from "UserProfileWishlistGrid" /* 15134 */;
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid" /* 15140 */;
import UserProfileIncomingFriendRequestDefault from "UserProfileIncomingFriendRequest" /* 15149 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8887 */;
import WishlistStore from "WishlistStore" /* 9599 */;
import GuildStore from "GuildStore" /* 5012 */;
import RelationshipStore from "RelationshipStore" /* 5083 */;
import UserStore from "UserStore" /* 1385 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8855 */;
import UserProfileStore from "UserProfileStore" /* 7896 */;
import Constants from "Constants" /* 7497 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const UserProfileWishlistGridDefault = UserProfileWishlistGrid;
let dependencyMap;

let closure_14;
let closure_15;
let closure_19;
let closure_20;
let closure_21;
function isWishlistItemShownToViewer(sku) {
  let result = null != sku.sku;
  if (result) {
    const obj = WishlistUtils;
    result = obj.isEligibleWishlistItemOnMobile(sku, { isWishlistOwner: false });
  }
  return result;
}
function CustomStatusBubble(guildId) {
  let bubbleRef;
  let customStatusActivity;
  let hasCustomProfileTheme;
  let items3;
  let tmp12;
  let user;
  ({ customStatusActivity, user } = guildId);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  const isPreviewingChanges = guildId.isPreviewingChanges;
  ({ hasCustomProfileTheme, bubbleRef } = guildId);
  const tmp3 = guildId(channelId[17])();
  let obj = user(channelId[18]);
  const items = [UserStore];
  const items1 = [user];
  let stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id === user.id;
  }, items1);
  const items2 = [channelId, guildId, user];
  let tmp7 = null;
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { user, guildId, channelId };
    obj.openLazy(asyncRequire(11548, dependencyMap.paths), "UserProfileCustomStatusActionSheet", obj2, "stack");
  }, items2);
  const useRef = react.useRef;
  if (null == customStatusActivity) {
    tmp7 = null;
    if (stateFromStores) {
      tmp7 = null;
      if (!isPreviewingChanges) {
        tmp7 = tmp(tmp2[22])();
      }
    }
  }
  const ref = useRef(tmp7);
  let labelResult;
  if (null != ref.current) {
    const current = ref.current;
    labelResult = current.label();
  }
  let obj2 = { ref: bubbleRef, customStatusActivity, hasCustomProfileTheme, editEnabled: stateFromStores, onPressTruncatedStatus: tmp12, style: items3, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, placeholderText: labelResult, prompt: ref.current };
  const tmp10 = closure_19;
  const tmpResult = guildId(channelId[23]);
  if (stateFromStores) {
    stateFromStores = !isPreviewingChanges;
  }
  tmp12 = undefined;
  if (!isPreviewingChanges) {
    tmp12 = callback;
  }
  items3 = [, ];
  ({ customStatusBubble: arr4[0], customStatusBubbleInset: arr4[1] } = tmp3);
  return tmp10(tmpResult, obj2);
}
function RemoveFriendIconButton(user) {
  let intl;
  user = user.user;
  let newestAnalyticsLocation;
  function handleConfirm() {
    trackUserProfileAction({ action: "REMOVE_FRIEND" });
    const obj = RelationshipActionCreatorsDefault;
    const obj2 = { location: newestAnalyticsLocation };
    obj.removeFriend(user.id, obj2);
  }
  let obj = user(newestAnalyticsLocation[24]);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  newestAnalyticsLocation = trackUserProfileAction(newestAnalyticsLocation[25])().newestAnalyticsLocation;
  let obj2 = trackUserProfileAction(newestAnalyticsLocation[27]);
  const userDisplayName = obj2.useName(user);
  const obj3 = {
    size: "sm",
    variant: "secondary-overlay",
    icon: closure_19(user(newestAnalyticsLocation[29]).UserCheckIcon, { size: "sm", color: "white" }),
    accessibilityLabel: intl.string(user(newestAnalyticsLocation[30]).t.cvSt1J),
    onPress() {
      const obj = UserProfileAlertUtils;
      const obj2 = { userDisplayName, onConfirm: handleConfirm };
      obj.confirmRemoveFriend(obj2);
    }
  };
  const IconButton = user(newestAnalyticsLocation[28]).IconButton;
  intl = user(newestAnalyticsLocation[30]).intl;
  return closure_19(IconButton, obj3);
}
function RemoveGameFriendIconButton(user) {
  let intl;
  user = user.user;
  const guildId = user.guildId;
  const channelId = user.channelId;
  const items = [channelId, guildId, user];
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { user, guildId, channelId };
    obj.openLazy(asyncRequire(15048, dependencyMap.paths), "UserProfileGameFriendActionSheet", obj2, "stack");
  }, items);
  let obj = { size: "sm", variant: "secondary-overlay", icon: closure_19(user(channelId[33]).UserPlatformIcon, { size: "sm", color: "white" }), accessibilityLabel: intl.string(user(channelId[30]).t.cvSt1J), onPress: callback };
  const IconButton = user(channelId[28]).IconButton;
  intl = user(channelId[30]).intl;
  return closure_19(IconButton, obj);
}
class PrimaryInfo {
  constructor(arg0) {
    let badgeContainerBackground;
    let badgesOverride;
    let channelId;
    let displayNameOverride;
    let displayProfile;
    let entryPointRef;
    let guildId;
    let handlePressPronouns;
    let intl;
    let isPreviewingChanges;
    let items1;
    let onOpenBadgeDirectory;
    let pendingDisplayNameStyles;
    let pronounsOverride;
    let showBadgeDirectoryNuxCoachmark;
    let style;
    let tmp10;
    let tmp11;
    let tmp22;
    let tmp23;
    let user;
    ({ user, guildId, displayProfile, displayNameOverride, pronounsOverride, badgesOverride, isPreviewingChanges, showBadgeDirectoryNuxCoachmark } = arg0);
    ({ channelId, pendingDisplayNameStyles, style, badgeContainerBackground } = arg0);
    if (showBadgeDirectoryNuxCoachmark === undefined) {
      showBadgeDirectoryNuxCoachmark = false;
    }
    let trackUserProfileAction;
    let obj = trackUserProfileAction(5195);
    const userTag = obj.useUserTag(user);
    let obj2 = { userId: user.id, enabled: showBadgeDirectoryNuxCoachmark, fetchCatalog: false, location: "UserProfileContent" };
    const tmp4 = trackUserProfileAction(8939)(displayProfile);
    const useBadgeDirectoryNuxCoachmarkVariant = userTag(15050).useBadgeDirectoryNuxCoachmarkVariant;
    userTag(15050);
    if (showBadgeDirectoryNuxCoachmark) {
      let flag;
      if (displayProfile != null) {
        flag = displayProfile.isLoaded;
      }
      if (flag == null) {
        flag = false;
      }
      showBadgeDirectoryNuxCoachmark = flag;
    }
    const variantProps = useBadgeDirectoryNuxCoachmarkVariant(obj2).variantProps;
    const useSelectedDismissibleContent = userTag(7693).useSelectedDismissibleContent;
    userTag(7693);
    if (null != variantProps) {
      const items = [userTag(4974).DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER];
      items1 = items;
    } else {
      items1 = [];
    }
    [tmp10, tmp11] = useSelectedDismissibleContent(items1);
    _slicedToArray(useSelectedDismissibleContent(items1), 2);
    const tmp12 = tmp10 === userTag(4974).DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER;
    const tmp5Result3 = userTag(15053);
    const badgeDirectoryNuxEntryPoint = tmp5Result3.useBadgeDirectoryNuxEntryPoint(tmp12, tmp11);
    ({ entryPointRef, onOpenBadgeDirectory } = badgeDirectoryNuxEntryPoint);
    const tmpResult = trackUserProfileAction(6161);
    const name = tmpResult.useName(guildId, channelId, user);
    let tmp15 = name;
    if (null != displayNameOverride) {
      tmp15 = name;
      if (displayNameOverride.trim().length > 0) {
        tmp15 = displayNameOverride;
      }
    }
    const tmp5Result4 = userTag(8885);
    trackUserProfileAction = tmp5Result4.useUserProfileAnalyticsContext().trackUserProfileAction;
    const items2 = [trackUserProfileAction, userTag];
    const callback = react.useCallback(() => {
      trackUserProfileAction({ action: "COPY_USERNAME" });
      const obj = ClipboardUtils;
      obj.copy(userTag);
      const obj2 = ToastUtils;
      const result = obj2.presentUsernameCopied();
    }, items2);
    const obj3 = { user, guildId, displayName: tmp15, pronouns: pronounsOverride, badges: badgesOverride, style, badgeContainerBackground, onPressDisplayName: tmp22, displayNameAccessibilityHint: intl.string(userTag(1113).t.y5MwJy), onPressUserTag: tmp23, onPressPronouns: handlePressPronouns, showBadgeToastOnPress: !isPreviewingChanges, canOpenBadgeDirectory: true, badgeDirectoryEntryPointRef: entryPointRef, onOpenBadgeDirectory, pendingDisplayNameStyles };
    const tmp17 = closure_21;
    const tmp18 = closure_20;
    const tmpResult2 = trackUserProfileAction(11551);
    if (pronounsOverride == null) {
      let pronouns;
      if (displayProfile != null) {
        pronouns = displayProfile.pronouns;
      }
      pronounsOverride = pronouns;
    }
    if (badgesOverride == null) {
      badgesOverride = tmp4;
    }
    tmp22 = undefined;
    if (!isPreviewingChanges) {
      tmp22 = callback;
    }
    intl = tmp5(1113).intl;
    tmp23 = undefined;
    if (!isPreviewingChanges) {
      tmp23 = callback;
    }
    handlePressPronouns = undefined;
    if (!isPreviewingChanges) {
      handlePressPronouns = function handlePressPronouns() {
        trackUserProfileAction({ action: "PRESS_PRONOUNS" });
        const obj = ToastUtils;
        obj.presentUserPronouns();
      };
    }
    const children = [closure_19(tmpResult2, obj3), ];
    let tmp19Result = null != variantProps;
    if (tmp19Result) {
      const obj4 = { targetRef: entryPointRef, userId: user.id, variantProps, visible: tmp12, markAsDismissed: tmp11 };
      tmp19Result = tmp19(tmp(15054), obj4);
    }
    children[1] = tmp19Result;
    return tmp17(tmp18, { children });
  }
}
function EditSection(guildId) {
  let Button;
  let PencilIcon;
  let PencilIcon2;
  let closure_2;
  let intl3;
  let obj4;
  let obj5;
  let obj7;
  let stringResult;
  let tmp6Result;
  guildId = guildId.guildId;
  let trackUserProfileAction;
  const tmp3 = trackUserProfileAction(8938)();
  let obj = guildId(8885);
  const tmp = trackUserProfileAction;
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const items = [GuildStore];
  const obj2 = guildId(504);
  const stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  dependencyMap = trackUserProfileAction(11655)();
  let closure_3 = trackUserProfileAction(11655)({ guild: stateFromStores });
  const obj3 = { style: tmp3.primaryButtons, maxWidth: ACTION_SHEET_MAX_WIDTH, primaryButton: closure_19(Button, obj4), secondaryButton: tmp6Result };
  obj4 = {
    variant: "primary",
    icon: closure_19(PencilIcon, obj5),
    text: stringResult,
    onPress: function handleEditProfile() {
      trackUserProfileAction({ action: "EDIT_PROFILE" });
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideAllActionSheets();
      closeVoicePanelsDefault();
      closure_2();
    },
    grow: true
  };
  const tmp7 = trackUserProfileAction(14971);
  Button = guildId(5754).Button;
  obj5 = { size: "sm", color: trackUserProfileAction(575).colors.WHITE };
  PencilIcon = guildId(10362).PencilIcon;
  if (null != stateFromStores) {
    const intl2 = tmp4(1113).intl;
    stringResult = intl2.string(tmp4(1113).t.HmFaFB);
  } else {
    const intl = tmp4(1113).intl;
    stringResult = intl.string(tmp4(1113).t.s5vZlQ);
  }
  tmp6Result = undefined;
  if (null != stateFromStores) {
    const obj6 = {
      variant: "primary",
      icon: closure_19(PencilIcon2, obj7),
      text: intl3.string(guildId(1113).t["PKQB/H"]),
      onPress: function handleEditGuildProfile() {
          trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideAllActionSheets();
          closeVoicePanelsDefault();
          closure_3();
        },
      grow: true
    };
    const Button2 = tmp4(5754).Button;
    obj7 = { size: "sm", color: tmp(575).colors.WHITE };
    PencilIcon2 = tmp4(10362).PencilIcon;
    intl3 = tmp4(1113).intl;
    tmp6Result = tmp6(Button2, obj6);
  }
  return closure_19(tmp7, obj3);
}
function UserProfileWidgetsBoardContainer(isCurrentUser) {
  let containerBackground;
  let isVisible;
  let items1;
  let userId;
  isCurrentUser = isCurrentUser.isCurrentUser;
  ({ userId, isVisible, containerBackground } = isCurrentUser);
  const tmp3 = UserProfileSharedStylesDefault();
  const items = [tmp3.card, { backgroundColor: containerBackground }];
  let tmp6 = isCurrentUser;
  const obj = { style: tmp3.profileContent, children: items1 };
  const tmp4 = closure_21;
  const tmp5 = View;
  if (isCurrentUser) {
    tmp6 = closure_19(tmp(15075), {});
  }
  items1 = [tmp6, , ];
  if (isCurrentUser) {
    isCurrentUser = closure_19(tmp(15076), {});
  }
  items1[1] = isCurrentUser;
  items1[2] = closure_19(UserProfileWidgetsBoardDefault, { userId, isVisible, cardStyle: items });
  return tmp4(tmp5, obj);
}
function UserProfileActivityTabContainer(arg0) {
  let channelId;
  let containerBackground;
  let currentUser;
  let guildId;
  let items1;
  let user;
  ({ user, currentUser, guildId, channelId, containerBackground } = arg0);
  const tmp = UserProfileSharedStylesDefault();
  const items = [tmp.card, { backgroundColor: containerBackground }];
  const obj = { style: items1, children: closure_19(UserProfileActivityTabDefault, { user, currentUser, guildId, channelId, cardStyle: items }) };
  items1 = [, ];
  ({ cards: arr2[0], profileContent: arr2[1] } = tmp);
  return closure_19(View, obj);
}
let View = react_native.View;
const UserProfileSections = Constants3.UserProfileSections;
({ PROFILE_CONTENT_BOTTOM_PADDING: closure_14, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_15 } = Constants);
const RelationshipTypes = Constants2.RelationshipTypes;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: closure_19, Fragment: closure_20, jsxs: closure_21 } = Fragment);
const memoResult = react.memo(function UserProfileContent(user) {
  let LayerScope2;
  let _location;
  let _undefined;
  let activeProfileTabSection;
  let activeProfileTabSectionIndex;
  let activityTabIndex;
  let avatarBackground;
  let avatarDecorationOverride;
  let bannerAnimatedStyle;
  let bannerImageAnimatedStyle;
  let blurAnimatedProps;
  let boardTabIndex;
  let c30;
  let contentAnimatedStyle;
  let disableCalls;
  let disableMessage;
  let disableStatus;
  let handleTabChange;
  let hasNewWishlistItems;
  let id3;
  let id4;
  let id5;
  let initialSection;
  let isPreviewingChanges;
  let items;
  let items22;
  let items25;
  let items29;
  let items30;
  let items32;
  let items33;
  let navigateToPremium;
  let navigationReplace;
  let obj12;
  let obj20;
  let obj36;
  let originApplicationId;
  let pageHeights;
  let pendingAccentColor;
  let pendingAvatar;
  let pendingAvatarDecoration;
  let pendingBadgeDisplayOrder;
  let pendingBanner;
  let pendingDisplayNameStyles;
  let pendingGlobalName;
  let pendingLegacyUsernameDisabled;
  let pendingPronouns;
  let pendingThemeColors;
  let rect;
  let relationshipType;
  let scrollViewRef;
  let secondaryColor;
  let setActiveProfileTabSection;
  let shouldLogExposure;
  let showBlur;
  let statusBackground;
  let str;
  let theme;
  let tmp28;
  let tmp45;
  let tmp68;
  let tmp69;
  let tmp70;
  let tmp71;
  let tmp79;
  let tmp80;
  let tmp88;
  let tmp89;
  let tmp90;
  let tmp91;
  user = user.user;
  const channel = user.channel;
  const guildId = user.guildId;
  const displayProfile = user.displayProfile;
  const showUserProfileActionSheet = user.showUserProfileActionSheet;
  ({ disableCalls, isPreviewingChanges } = user);
  ({ avatarDecorationOverride, navigateToPremium } = user);
  const navigateToShop = user.navigateToShop;
  const scrollPosition = user.scrollPosition;
  let stateFromStores;
  let isCurrentUser;
  let userProfileGameFriendApplicationIds;
  let name;
  let pendingBio;
  pendingBadgeDisplayOrder = undefined;
  let pendingBadgeHiddenBadges;
  let closure_17;
  let stateFromStoresArray;
  let isBadgeManagementEnabled;
  let hasCustomProfileTheme;
  let containerBackground;
  let stateFromStores1;
  let stateFromStores2;
  let closure_24;
  let closure_25;
  let closure_26;
  let closure_27;
  let ref;
  let wishlistTabIndex;
  c30 = undefined;
  let markAsDismissed;
  setActiveProfileTabSection = undefined;
  let restoreActiveIndex;
  let isVisible;
  let isVisible2;
  let callback2;
  let callback3;
  let callback4;
  let callback5;
  let segmentedControlState;
  let obj10;
  let tmp = channel;
  let tmp2 = guildId;
  ({ disableMessage, navigationReplace, disableStatus, location: _location, initialSection, scrollViewRef } = user);
  let tmp3 = channel(guildId[17])();
  let closure_8 = tmp3;
  const tmp4 = channel(guildId[54])(closure_17);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = channel(guildId[55])({ scrollPosition, bannerHeight: tmp4 }));
  const tmp5 = channel(guildId[55])({ scrollPosition, bannerHeight: tmp4 });
  const bottom = channel(guildId[56])().bottom;
  let obj = user(guildId[24]);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj2 = user(guildId[18]);
  let items1 = [stateFromStores];
  stateFromStores = obj2.useStateFromStores(items1, () => stateFromStores.getCurrentUser());
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tmp9 = id === user.id;
  isCurrentUser = tmp9;
  let obj3 = { isItemShown: stateFromStores1 };
  let tmp10 = tmp(tmp2[57])(user, obj3);
  ({ shouldLogExposure, hasNewWishlistItems } = tmp10);
  let items2 = [trackUserProfileAction];
  const tmp6Result = user(tmp2[18]);
  const stateFromStoresObject = tmp6Result.useStateFromStoresObject(items2, () => {
    const obj = { relationshipType: RelationshipStore.getRelationshipType(user.id), originApplicationId: RelationshipStore.getOriginApplicationId(user.id) };
    return obj;
  });
  ({ relationshipType, originApplicationId } = stateFromStoresObject);
  const tmp6Result21 = user(tmp2[58]);
  const incomingGameRelationshipsForUser = tmp6Result21.useIncomingGameRelationshipsForUser(user.id);
  const tmp6Result22 = user(tmp2[59]);
  const isGameFriends = tmp6Result22.useIsGameFriends(user.id);
  let obj4 = { userId: user.id };
  const tmp6Result23 = user(tmp2[60]);
  userProfileGameFriendApplicationIds = tmp6Result23.useUserProfileGameFriendApplicationIds(obj4);
  let id1;
  const useName = tmp(tmp2[39]).useName;
  tmp(tmp2[39]);
  if (channel != null) {
    id1 = channel.id;
  }
  name = useName(guildId, id1, user);
  let obj9 = showUserProfileActionSheet;
  const items3 = [guildId, user];
  const memo = showUserProfileActionSheet.useMemo(() => {
    if (null != guildId) {
      if (null != user) {
        const items = [tmp2.id];
        const obj = {};
        obj[tmp] = items;
      }
      return {};
    }
  }, items3);
  const tmp6Result24 = user(tmp2[61]);
  const subscribeGuildMembers = tmp6Result24.useSubscribeGuildMembers(memo, "UserProfileContent");
  const tmp19 = tmp(tmp2[62])(user.id);
  const items4 = [isCurrentUser];
  const tmp6Result25 = user(tmp2[18]);
  const stateFromStoresObject1 = tmp6Result25.useStateFromStoresObject(items4, () => isCurrentUser.getPendingChanges());
  pendingBio = stateFromStoresObject1.pendingBio;
  ({ pendingAccentColor, pendingThemeColors, pendingBadgeDisplayOrder } = stateFromStoresObject1);
  pendingBadgeHiddenBadges = stateFromStoresObject1.pendingBadgeHiddenBadges;
  ({ pendingBanner, pendingAvatar, pendingAvatarDecoration, pendingGlobalName, pendingPronouns, pendingLegacyUsernameDisabled, pendingDisplayNameStyles } = stateFromStoresObject1);
  let obj5 = { userId: user.id, image: pendingAvatar };
  const tmp6Result26 = user(tmp2[63]);
  const pendingAvatarSrc = tmp6Result26.getPendingAvatarSrc(obj5);
  const tmp22 = tmp(tmp2[34])(displayProfile, pendingLegacyUsernameDisabled);
  closure_17 = tmp22;
  const items5 = [navigateToPremium];
  const items6 = [user.id];
  const tmp6Result27 = user(tmp2[18]);
  stateFromStoresArray = tmp6Result27.useStateFromStoresArray(items5, () => BadgeDirectoryStore.getBadges(user.id), items6);
  const tmp6Result28 = user(tmp2[64]);
  isBadgeManagementEnabled = tmp6Result28.useIsBadgeManagementEnabled({ location: "UserProfileContent" });
  const items7 = [user.id, isBadgeManagementEnabled];
  const effect = showUserProfileActionSheet.useEffect(() => {
    const tmp = isBadgeManagementEnabled;
    if (tmp) {
      const tmp3 = BadgeDirectoryStore.hasCatalogFor(user.id) && !BadgeDirectoryStore.isCatalogStaleFor(user.id);
      if (!tmp3) {
        const obj2 = BadgeDirectoryActionCreators;
        const badgeDirectory = obj2.fetchBadgeDirectory(tmp2.id);
      }
    }
  }, items7);
  const items8 = [tmp22, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo1 = showUserProfileActionSheet.useMemo(() => {
    const obj = PendingBadgeSettings;
    const obj2 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
    return obj.getPendingProfileBadges(closure_17, stateFromStoresArray, obj2);
  }, items8);
  let obj6 = { user, displayProfile, pendingThemeColors: tmp28 };
  tmp28 = undefined;
  const tmpResult5 = tmp(tmp2[67]);
  if (isPreviewingChanges) {
    tmp28 = pendingThemeColors;
  }
  const tmpResult1Result = tmpResult5(obj6);
  const primaryColor = tmpResult1Result.primaryColor;
  hasCustomProfileTheme = tmp30;
  ({ theme, secondaryColor } = tmpResult1Result);
  const tmp6Result29 = user(tmp2[68]);
  const userProfileColors = tmp6Result29.useUserProfileColors({ theme, primaryColor, secondaryColor });
  containerBackground = userProfileColors.containerBackground;
  ({ avatarBackground, statusBackground } = userProfileColors);
  ref = obj9.useRef(null);
  const ref1 = obj9.useRef(null);
  const items9 = [userProfileGameFriendApplicationIds];
  const tmp6Result30 = user(tmp2[18]);
  stateFromStores1 = tmp6Result30.useStateFromStores(items9, () => UserProfileStore.getFirstWishlistId(user.id));
  let obj7 = { wishlistId: stateFromStores1, userId: user.id };
  const tmp6Result31 = user(tmp2[69]);
  const fetchWishlist = tmp6Result31.useFetchWishlist(obj7);
  const items10 = [navigateToShop];
  const items11 = [stateFromStores1];
  const tmp6Result32 = user(tmp2[18]);
  stateFromStores2 = tmp6Result32.useStateFromStores(items10, () => {
    let wishlist = null;
    if (null != stateFromStores1) {
      wishlist = WishlistStore.getWishlist(tmp);
    }
    return wishlist;
  }, items11);
  const items12 = [stateFromStores2, tmp9];
  let tmp37 = tmp9;
  if (!tmp37) {
    let tmp38 = null != stateFromStores2;
    if (tmp38) {
      tmp38 = arr14.length > 0;
    }
    tmp37 = tmp38;
  }
  closure_24 = tmp37;
  const tmp6Result33 = user(tmp2[70]);
  const displayableBoardWidgets = tmp6Result33.useDisplayableBoardWidgets(user.id);
  const tmp6Result34 = user(tmp2[71]);
  let tmp39 = displayableBoardWidgets.length > 0 || tmp6Result34.useCanConjureCustomWidget("UserProfileContent", tmp9);
  closure_25 = tmp39;
  const tmp6Result35 = user(tmp2[72]);
  const tmp40 = tmp6Result35.useIsRecentActivityMobileEnabled("UserProfileContent") && null != stateFromStores;
  closure_26 = tmp40;
  closure_27 = tmp41;
  ref = obj9.useRef(false);
  const items13 = [tmp37 && hasNewWishlistItems, trackUserProfileAction];
  const effect1 = obj9.useEffect(() => {
    const tmp = closure_27 && !ref.current;
    if (tmp) {
      ref.current = true;
      trackUserProfileAction({ action: "VIEW_NEW_CONTENT_TAB_BADGE" });
    }
  }, items13);
  const tmp6Result36 = user(tmp2[73]);
  const profileTabIndices = tmp6Result36.useProfileTabIndices(tmp39, tmp40, tmp37);
  wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  ({ boardTabIndex, activityTabIndex } = profileTabIndices);
  [tmp45, c30] = displayProfile(obj9.useState(0), 2);
  displayProfile(obj9.useState(0), 2);
  const callback = obj9.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp6Result37 = user(tmp2[74]);
  const wishlistViewerCoachmark = tmp6Result37.useWishlistViewerCoachmark({ isCurrentUser: tmp9, shouldShowWishlistTab: tmp37 });
  isVisible = wishlistViewerCoachmark.isVisible;
  markAsDismissed = wishlistViewerCoachmark.markAsDismissed;
  const items14 = [trackUserProfileAction, isVisible, markAsDismissed];
  const callback1 = obj9.useCallback((section) => {
    const obj = { action: "PRESS_SECTION", section };
    trackUserProfileAction(obj);
    const tmp2 = section === UserProfileSections.WISHLIST && isVisible;
    if (tmp2) {
      markAsDismissed(ContentDismissActionType.INDIRECT_ACTION);
    }
  }, items14);
  const tmp6Result38 = user(tmp2[73]);
  const profileSectionTabs = tmp6Result38.useProfileSectionTabs({ initialUserProfileSection: initialSection, wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange: callback1 });
  ({ activeProfileTabSection, setActiveProfileTabSection } = profileSectionTabs);
  restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  isVisible = tmp50;
  isVisible2 = tmp51;
  const items15 = [navigateToPremium];
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  callback2 = obj9.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    if (navigateToPremium != null) {
      navigateToPremium();
    }
  }, items15);
  const items16 = [navigateToShop];
  callback3 = obj9.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    if (navigateToShop != null) {
      navigateToShop();
    }
  }, items16);
  const items17 = [user, stateFromStores, containerBackground, tmp3, isPreviewingChanges, callback2, callback3, null != primaryColor, guildId, userProfileGameFriendApplicationIds, displayProfile, name, pendingBio, channel, showUserProfileActionSheet];
  callback4 = obj9.useCallback(() => {
    let items1;
    let items2;
    let tmp26;
    if (null != user) {
      if (null != stateFromStores) {
        const items = [closure_8.card, ];
        const obj2 = { backgroundColor: containerBackground };
        items[1] = obj2;
        const obj3 = { style: items1, children: items2 };
        items1 = [, ];
        ({ cards: arr3[0], profileContent: arr3[1] } = closure_8);
        let _private;
        const tmp37 = containerBackground;
        const tmp38 = closure_21;
        const tmp39 = View;
        if (displayProfile != null) {
          _private = tmp40.private;
        }
        if (_private) {
          const obj = { username: name, containerBackground: tmp37 };
          _private = isBadgeManagementEnabled(UserProfilePrivateInfoBannerDefault, obj);
        }
        items2 = [_private, , , , , , , , , , ];
        let isProvisional = tmp.isProvisional;
        if (isProvisional) {
          const obj4 = { style: items, userId: user.id, iconSize: 16 };
          isProvisional = isBadgeManagementEnabled(ProvisionalAccountExplainer.UserProfileProvisionalAccountExplainerCard, obj4);
        }
        items2[1] = isProvisional;
        let tmp10 = tmp.id === tmp35.id && !isPreviewingChanges;
        if (tmp10) {
          const obj5 = { navigateToPremium: callback2, navigateToShop: callback3, hasCustomProfileTheme };
          tmp10 = isBadgeManagementEnabled(UserProfileDismissibleUpsellsDefault, obj5);
        }
        items2[2] = tmp10;
        const obj6 = { user, currentUser: stateFromStores, guildId, style: items };
        items2[3] = isBadgeManagementEnabled(UserProfileActivityDefault, obj6);
        let tmp18Result = userProfileGameFriendApplicationIds.length > 0;
        if (tmp18Result) {
          const obj7 = { userId: user.id, applicationIds: tmp22 };
          tmp18Result = tmp18(tmp19(15128), obj7);
        }
        items2[4] = tmp18Result;
        const obj9 = { userId: user.id, displayProfile, pendingBio: tmp26 };
        tmp26 = undefined;
        const tmp19Result = UserProfileAboutMeCardDefault;
        if (isPreviewingChanges) {
          tmp26 = pendingBio;
        }
        items2[5] = isBadgeManagementEnabled(tmp19Result, obj9);
        let tmp18Result4 = null != tmp21;
        if (tmp18Result4) {
          obj10 = { userId: user.id, guildId };
          tmp18Result4 = tmp18(tmp19(7474), obj10);
        }
        items2[6] = tmp18Result4;
        let guild_id;
        if (channel != null) {
          guild_id = tmp28.guild_id;
        }
        let tmp18Result5 = null != guild_id;
        if (tmp18Result5) {
          const obj11 = { user, currentUser: stateFromStores, guildId: null, channelId: null, showUserProfile: showUserProfileActionSheet };
          ({ guild_id: obj8.guildId, id: obj8.channelId } = channel);
          tmp18Result5 = tmp18(tmp19(15035), obj11);
        }
        items2[7] = tmp18Result5;
        const obj12 = { userId: user.id };
        items2[8] = isBadgeManagementEnabled(UserProfileConnections.UserProfileAccountConnectionsCard, obj12);
        const obj13 = { userId: user.id };
        items2[9] = isBadgeManagementEnabled(UserProfileConnections.UserProfileApplicationRoleConnectionsCard, obj13);
        let tmp18Result6 = !tmp25;
        if (tmp18Result6) {
          const obj25 = { userId: user.id, onBack: showUserProfileActionSheet };
          tmp18Result6 = tmp18(tmp19(15038), obj25);
        }
        items2[10] = tmp18Result6;
        return tmp38(tmp39, obj3);
      }
    }
    return null;
  }, items17);
  const items18 = [tmp3.profileContent, stateFromStores1, activeProfileTabSection === name.WISHLIST, user.id, tmp9];
  callback5 = obj9.useCallback(() => {
    let items;
    let tmp10;
    let tmp9;
    const obj = { style: closure_8.profileContent, children: items };
    const tmp = closure_21;
    const tmp2 = View;
    if (null == stateFromStores1) {
      tmp10 = isBadgeManagementEnabled(UserProfileWishlistGrid.WishlistEmptyState, {});
      tmp9 = isBadgeManagementEnabled;
    } else {
      tmp9 = isBadgeManagementEnabled;
      const obj2 = { wishlistId: stateFromStores1, maxWidth: ACTION_SHEET_MAX_WIDTH, isVisible };
      tmp10 = isBadgeManagementEnabled(UserProfileWishlistGridDefault, obj2);
    }
    items = [tmp10, ];
    let tmp9Result = isCurrentUser;
    if (tmp9Result) {
      const obj3 = { userId: user.id, wishlistId: stateFromStores1, maxWidth: ACTION_SHEET_MAX_WIDTH };
      tmp9Result = tmp9(UserProfileWishlistSuggestionsGridDefault, obj3);
    }
    items[1] = tmp9Result;
    return tmp(tmp2, obj);
  }, items18);
  const items19 = [callback4, callback5, tmp37 && hasNewWishlistItems, tmp39, tmp40, tmp37, user, stateFromStores, guildId, , , , ];
  let id2;
  const useMemo = obj9.useMemo;
  if (channel != null) {
    id2 = channel.id;
  }
  items19[9] = id2;
  items19[10] = activeProfileTabSection === name.WIDGETS;
  items19[11] = tmp9;
  items19[12] = containerBackground;
  const memo2 = useMemo(() => {
    let id;
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let obj3;
    let obj5;
    let tmp14;
    let tmp15;
    let tmp26;
    const obj = { id: "main", label: intl.string(intl6.t.LXw470), page: callback4() };
    intl = intl6.intl;
    const items = [obj];
    const tmp3 = closure_25;
    if (tmp3) {
      const push = items.push;
      const obj2 = { id: "board", label: intl2.string(intl6.t.laViwx), page: isBadgeManagementEnabled(UserProfileWidgetsBoardContainer, obj3) };
      intl2 = tmp(1113).intl;
      obj3 = { userId: user.id, isVisible: isVisible2, isCurrentUser, containerBackground };
      push(obj2);
    }
    const tmp11 = closure_26 && null != stateFromStores;
    if (tmp11) {
      const push2 = items.push;
      const obj4 = { id: "activity", label: intl3.string(intl6.t.chq59f), page: tmp14(tmp15, obj5) };
      intl3 = tmp(1113).intl;
      obj5 = { user, currentUser: stateFromStores, guildId, channelId: id, containerBackground };
      id = undefined;
      tmp14 = isBadgeManagementEnabled;
      tmp15 = UserProfileActivityTabContainer;
      if (channel != null) {
        id = channel.id;
      }
      push2(obj4);
    }
    const tmp23 = closure_24;
    if (tmp23) {
      const push3 = items.push;
      const obj6 = { id: "wishlist", label: intl4.string(intl6.t["7lZ31J"]), page: callback5(), indicatorDot: tmp26 };
      intl4 = tmp(1113).intl;
      tmp26 = undefined;
      if (closure_27) {
        const obj7 = { accessibilityLabel: intl5.string(intl6.t.ceMCll) };
        intl5 = tmp(1113).intl;
        tmp26 = obj7;
      }
      push3(obj6);
    }
    return items;
  }, items19);
  const tmp6Result39 = user(tmp2[87]);
  const measuredTabItems = tmp6Result39.useMeasuredTabItems(memo2);
  ({ items, pageHeights } = measuredTabItems);
  const tmp6Result40 = user(tmp2[88]);
  const obj8 = { pageWidth: tmp45, defaultIndex: activeProfileTabSectionIndex, itemSpacing: tmp(tmp2[48]).space.PX_24, items, onPageChange: handleTabChange };
  segmentedControlState = tmp6Result40.useSegmentedControlState(obj8);
  const items20 = [segmentedControlState, restoreActiveIndex];
  const layoutEffect = obj9.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items20);
  const items21 = [segmentedControlState, wishlistTabIndex, markAsDismissed, setActiveProfileTabSection];
  if (null != user) {
    if (null != stateFromStores) {
      let OpenableUserProfileAvatar;
      let num2;
      obj10 = { backgroundColor: containerBackground };
      if (isPreviewingChanges) {
        OpenableUserProfileAvatar = tmp(tmp103);
      } else {
        OpenableUserProfileAvatar = tmp6(tmp103).OpenableUserProfileAvatar;
      }
      let _private;
      const tmp62 = hasCustomProfileTheme;
      if (displayProfile != null) {
        _private = displayProfile.private;
      }
      let tmp64 = true === _private;
      if (tmp64) {
        let obj11 = { style: items22, children: isBadgeManagementEnabled(tmp(tmp2[91]), obj12) };
        items22 = [tmp3.privateBanner, bannerAnimatedStyle];
        View = tmp(tmp2[90]).View;
        obj12 = { primaryColor };
        tmp64 = isBadgeManagementEnabled(View, obj11);
      }
      const items23 = [tmp64, , , ];
      let obj13 = { user, displayProfile, bannerHeight: tmp4, pendingBanner: tmp68, pendingAvatarSrc: tmp69, pendingAccentColor: tmp70, pendingThemeColors: tmp71, disableInteraction: isPreviewingChanges, bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur };
      tmp68 = undefined;
      const tmpResult6 = tmp(tmp2[92]);
      if (isPreviewingChanges) {
        tmp68 = pendingBanner;
      }
      tmp69 = undefined;
      if (isPreviewingChanges) {
        tmp69 = pendingAvatarSrc;
      }
      tmp70 = undefined;
      if (isPreviewingChanges) {
        if (null != pendingAccentColor) {
          tmp70 = pendingAccentColor;
        }
      }
      tmp71 = undefined;
      if (isPreviewingChanges) {
        if (null != pendingThemeColors) {
          tmp71 = pendingThemeColors;
        }
      }
      items23[1] = isBadgeManagementEnabled(tmpResult6, obj13);
      let tmp61Result = !isPreviewingChanges;
      if (tmp61Result) {
        const items24 = [tmp3.bannerButtons, , ];
        let _private1;
        const View2 = tmp(tmp2[90]).View;
        if (displayProfile != null) {
          _private1 = displayProfile.private;
        }
        if (_private1) {
          _private1 = tmp3.bannerButtonsWithPrivateBanner;
        }
        const obj14 = { style: items24, children: items25 };
        items24[1] = _private1;
        items24[2] = bannerAnimatedStyle;
        let tmp74 = null;
        if (null != stateFromStores) {
          tmp74 = null;
          if (user.id !== stateFromStores.id) {
            tmp74 = null;
            if (!user.bot) {
              let tmp66Result;
              if (relationshipType === pendingBadgeHiddenBadges.FRIEND) {
                const obj15 = { user };
                tmp66Result = tmp66(closure_24, obj15);
              } else {
                tmp66Result = null;
                if (isGameFriends) {
                  const obj16 = { user };
                  tmp66Result = tmp66(closure_25, obj16);
                }
              }
              tmp74 = tmp66Result;
            }
          }
        }
        items25 = [tmp74, ];
        const obj17 = { user, currentUser: stateFromStores, displayProfile, channel };
        items25[1] = isBadgeManagementEnabled(tmp(tmp2[93]), obj17);
        tmp61Result = tmp61(View2, obj14);
      }
      items23[2] = tmp61Result;
      const obj18 = { style: contentAnimatedStyle, children: null };
      const obj19 = { user, guildId, disableStatus, pendingAvatarSrc: tmp79, pendingAvatarDecoration: tmp80, backgroundColor: avatarBackground, statusStyle: obj20 };
      tmp79 = undefined;
      const View3 = tmp(tmp2[90]).View;
      if (isPreviewingChanges) {
        tmp79 = pendingAvatarSrc;
      }
      tmp80 = undefined;
      if (isPreviewingChanges) {
        if (avatarDecorationOverride == null) {
          avatarDecorationOverride = pendingAvatarDecoration;
        }
        tmp80 = avatarDecorationOverride;
      }
      obj20 = { backgroundColor: statusBackground };
      const items26 = [isBadgeManagementEnabled(OpenableUserProfileAvatar, obj19), ];
      const items27 = [tmp3.profileContentWrapper, ];
      if (!tmp9) {
        num2 = 0;
        if (null == tmp19) {
          num2 = pendingBadgeDisplayOrder;
        }
      } else {
        num2 = 0;
      }
      const obj21 = { style: items27, children: null };
      const obj22 = { paddingTop: num2, paddingBottom: bottom + pendingBio };
      items27[1] = obj22;
      const obj23 = { customStatusActivity: tmp19, user, guildId, channelId: id3, hasCustomProfileTheme: null != primaryColor, showUserProfileActionSheet, isPreviewingChanges, bubbleRef: ref };
      id3 = undefined;
      const tmp83 = stateFromStores2;
      if (channel != null) {
        id3 = channel.id;
      }
      const items28 = [isBadgeManagementEnabled(tmp83, obj23), ];
      let tmp61Result2 = null;
      const LayerScope = tmp6(tmp2[94]).LayerScope;
      if (null != stateFromStores) {
        const obj24 = { style: items29, children: items30 };
        items29 = [, ];
        ({ primaryInfo: arr33[0], profileContent: arr33[1] } = tmp3);
        let obj25 = { user, channelId: id4, guildId, displayProfile, displayNameOverride: tmp88, pronounsOverride: tmp89, badgesOverride: tmp90, pendingDisplayNameStyles: tmp91, badgeContainerBackground: containerBackground, isPreviewingChanges, showBadgeDirectoryNuxCoachmark: tmp9 };
        id4 = undefined;
        const tmp86 = closure_26;
        if (channel != null) {
          id4 = channel.id;
        }
        tmp88 = undefined;
        if (isPreviewingChanges) {
          tmp88 = pendingGlobalName;
        }
        tmp89 = undefined;
        if (isPreviewingChanges) {
          tmp89 = pendingPronouns;
        }
        tmp90 = undefined;
        if (isPreviewingChanges) {
          tmp90 = memo1;
        }
        tmp91 = undefined;
        if (isPreviewingChanges) {
          tmp91 = pendingDisplayNameStyles;
        }
        if (tmp9) {
          tmp9 = !isPreviewingChanges;
        }
        items30 = [isBadgeManagementEnabled(tmp86, obj25), , , , , , ];
        let tmp66Result5 = user.id !== stateFromStores.id;
        if (tmp66Result5) {
          const obj26 = { user, guildId };
          tmp66Result5 = tmp66(tmp(tmp2[95]), obj26);
        }
        items30[1] = tmp66Result5;
        let tmp66Result6 = relationshipType === pendingBadgeHiddenBadges.PENDING_INCOMING;
        const tmp93 = pendingBadgeHiddenBadges;
        if (tmp66Result6) {
          const obj27 = { user, channelId: id5, guildId, applicationId: originApplicationId, style: obj10, showUserProfile: showUserProfileActionSheet };
          id5 = undefined;
          const tmpResult7 = tmp(tmp2[96]);
          if (channel != null) {
            id5 = channel.id;
          }
          tmp66Result6 = tmp66(tmpResult7, obj27);
        }
        items30[2] = tmp66Result6;
        items30[3] = incomingGameRelationshipsForUser.map((applicationId) => {
          let id;
          const obj = { user, isGameRelationship: true, applicationId: applicationId.applicationId, channelId: id, guildId, style: obj10, showUserProfile: showUserProfileActionSheet };
          id = undefined;
          const tmp = closure_19;
          const tmp2 = UserProfileIncomingFriendRequestDefault;
          if (channel != null) {
            id = channel.id;
          }
          return tmp(tmp2, obj, applicationId.applicationId);
        });
        const obj28 = { user, style: obj10 };
        items30[4] = isBadgeManagementEnabled(tmp(tmp2[97]), obj28);
        let tmp66Result7 = user.id === stateFromStores.id && !isPreviewingChanges;
        if (tmp66Result7) {
          const obj29 = { guildId };
          tmp66Result7 = tmp66(closure_27, obj29);
        }
        items30[5] = tmp66Result7;
        let tmp66Result8 = user.id !== stateFromStores.id;
        if (tmp66Result8) {
          const obj30 = { user, disableCalls, disableMessage, navigationReplace, location: _location, hasCustomProfileTheme: null != primaryColor, style: tmp3.primaryButtons };
          const tmpResult8 = tmp(tmp2[98]);
          if (!disableCalls) {
            disableCalls = relationshipType === tmp93.BLOCKED;
          }
          if (!disableCalls) {
            disableCalls = user.isProvisional;
          }
          tmp66Result8 = tmp66(tmpResult8, obj30);
        }
        items30[6] = tmp66Result8;
        tmp61Result2 = tmp61(tmp81, obj24);
      }
      const items31 = [tmp61Result2, ];
      if (!tmp37) {
        if (!tmp39) {
          let callback4Result;
          if (!tmp40) {
            callback4Result = callback4();
          }
          const obj31 = { children: items23 };
          const obj32 = { children: items31 };
          items31[1] = callback4Result;
          items28[1] = containerBackground(LayerScope, obj32);
          obj21.children = items28;
          items26[1] = containerBackground(isPreviewingChanges, obj21);
          obj18.children = items26;
          items23[3] = containerBackground(View3, obj18);
          return containerBackground(tmp62, obj31);
        }
      }
      const obj33 = { onLayout: callback, children: containerBackground(LayerScope2, obj36) };
      const obj34 = { style: tmp3.profileTablist, children: items32 };
      LayerScope2 = tmp6(tmp2[94]).LayerScope;
      if (shouldLogExposure) {
        shouldLogExposure = tmp66(tmp6(tmp2[99]).ProfileReadStateExposure, { location: "UserProfileContent" });
      }
      items32 = [shouldLogExposure, , ];
      const obj35 = { state: segmentedControlState, variant: str };
      str = undefined;
      const Tabs = tmp6(tmp2[100]).Tabs;
      if (null != primaryColor) {
        str = "overlay";
      }
      obj36 = { children: items33 };
      items32[1] = isBadgeManagementEnabled(Tabs, obj35);
      const obj37 = { ref: ref1, style: rect, collapsable: false, pointerEvents: "box-none" };
      rect = { position: "absolute", left: `${Math.max(wishlistTabIndex, 0) / arr23.length * 100}%`, top: 0, right: 0, bottom: 0 };
      const _Math = Math;
      items32[2] = isBadgeManagementEnabled(isPreviewingChanges, obj37);
      items33 = [containerBackground(isPreviewingChanges, obj34), , ];
      const obj38 = { state: segmentedControlState, pageHeights, scrollPosition, scrollViewRef };
      items33[1] = isBadgeManagementEnabled(tmp(tmp2[87]), obj38);
      const obj39 = { anchorRef: ref1, isVisible, markAsDismissed, onViewWishlist: tmp60 };
      items33[2] = isBadgeManagementEnabled(tmp(tmp2[101]), obj39);
      callback4Result = tmp66(tmp81, obj33);
    }
  }
  return null;
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileContent.tsx");

export default memoResult;
export { PrimaryInfo };
