// Module ID: 14874
// Function ID: 14875
// Name: UserProfileContent
// Dependencies: [32, 19, 17, 8755, 9449, 4880, 4951, 1384, 8723, 7765, 8746, 7371, 1072, 5268, 4855, 21, 14875, 8806, 504, 5253, 11373, 1995, 11363, 11359, 8753, 7320, 7482, 5063, 8020, 14876, 1114, 14143, 14877, 5718, 8807, 14879, 7563, 4842, 14882, 6036, 7352, 5706, 11376, 14883, 11483, 14798, 5629, 10212, 575, 10904, 14904, 14905, 14908, 14931, 8795, 8808, 1626, 14937, 14878, 14941, 14942, 7476, 11374, 8732, 11416, 8760, 14943, 8792, 8803, 9448, 14929, 14906, 14944, 14945, 14946, 14947, 14150, 14948, 14800, 14950, 11457, 7348, 14862, 14951, 14865, 14956, 14963, 14969, 8971, 8820, 5090, 14970, 8809, 14770, 5606, 14971, 14972, 14977, 14978, 14938, 12476, 14982, 2]

// Module 14874 (UserProfileContent)
import react_native from "react-native" /* 17 */;
import Constants2 from "Constants" /* 1072 */;
import intl5 from "intl" /* 1114 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4855 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5268 */;
import ToastUtils from "ToastUtils" /* 5706 */;
import ClipboardUtils from "ClipboardUtils" /* 7352 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7482 */;
import Constants3 from "Constants" /* 8746 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8760 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8806 */;
import closeVoicePanelsDefault from "closeVoicePanels" /* 10904 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 11457 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 14143 */;
import ProvisionalAccountExplainer from "ProvisionalAccountExplainer" /* 14150 */;
import UserProfileActivityDefault from "UserProfileActivity" /* 14800 */;
import WishlistUtils from "WishlistUtils" /* 14875 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 14908 */;
import UserProfileActivityTabDefault from "UserProfileActivityTab" /* 14931 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 14943 */;
import UserProfilePrivateInfoBannerDefault from "UserProfilePrivateInfoBanner" /* 14947 */;
import UserProfileDismissibleUpsellsDefault from "UserProfileDismissibleUpsells" /* 14948 */;
import UserProfileConnections from "UserProfileConnections" /* 14951 */;
import UserProfileWishlistGrid from "UserProfileWishlistGrid" /* 14956 */;
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid" /* 14963 */;
import UserProfileIncomingFriendRequestDefault from "UserProfileIncomingFriendRequest" /* 14972 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8755 */;
import WishlistStore from "WishlistStore" /* 9449 */;
import GuildStore from "GuildStore" /* 4880 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8723 */;
import UserProfileStore from "UserProfileStore" /* 7765 */;
import Constants from "Constants" /* 7371 */;
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
    obj.openLazy(asyncRequire(11373, dependencyMap.paths), "UserProfileCustomStatusActionSheet", obj2, "stack");
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
    obj.openLazy(asyncRequire(14877, dependencyMap.paths), "UserProfileGameFriendActionSheet", obj2, "stack");
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
    let obj = trackUserProfileAction(5063);
    const userTag = obj.useUserTag(user);
    let obj2 = { userId: user.id, enabled: showBadgeDirectoryNuxCoachmark, fetchCatalog: false, location: "UserProfileContent" };
    const tmp4 = trackUserProfileAction(8807)(displayProfile);
    const useBadgeDirectoryNuxCoachmarkVariant = userTag(14879).useBadgeDirectoryNuxCoachmarkVariant;
    userTag(14879);
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
    const useSelectedDismissibleContent = userTag(7563).useSelectedDismissibleContent;
    userTag(7563);
    if (null != variantProps) {
      const items = [userTag(4842).DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER];
      items1 = items;
    } else {
      items1 = [];
    }
    [tmp10, tmp11] = useSelectedDismissibleContent(items1);
    _slicedToArray(useSelectedDismissibleContent(items1), 2);
    const tmp12 = tmp10 === userTag(4842).DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER;
    const tmp5Result3 = userTag(14882);
    const badgeDirectoryNuxEntryPoint = tmp5Result3.useBadgeDirectoryNuxEntryPoint(tmp12, tmp11);
    ({ entryPointRef, onOpenBadgeDirectory } = badgeDirectoryNuxEntryPoint);
    const tmpResult = trackUserProfileAction(6036);
    const name = tmpResult.useName(guildId, channelId, user);
    let tmp15 = name;
    if (null != displayNameOverride) {
      tmp15 = name;
      if (displayNameOverride.trim().length > 0) {
        tmp15 = displayNameOverride;
      }
    }
    const tmp5Result4 = userTag(8753);
    trackUserProfileAction = tmp5Result4.useUserProfileAnalyticsContext().trackUserProfileAction;
    const items2 = [trackUserProfileAction, userTag];
    const callback = react.useCallback(() => {
      trackUserProfileAction({ action: "COPY_USERNAME" });
      const obj = ClipboardUtils;
      obj.copy(userTag);
      const obj2 = ToastUtils;
      const result = obj2.presentUsernameCopied();
    }, items2);
    const obj3 = { user, guildId, displayName: tmp15, pronouns: pronounsOverride, badges: badgesOverride, style, badgeContainerBackground, onPressDisplayName: tmp22, displayNameAccessibilityHint: intl.string(userTag(1114).t.y5MwJy), onPressUserTag: tmp23, onPressPronouns: handlePressPronouns, showBadgeToastOnPress: !isPreviewingChanges, canOpenBadgeDirectory: true, badgeDirectoryEntryPointRef: entryPointRef, onOpenBadgeDirectory, pendingDisplayNameStyles };
    const tmp17 = closure_21;
    const tmp18 = closure_20;
    const tmpResult2 = trackUserProfileAction(11376);
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
    intl = tmp5(1114).intl;
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
      tmp19Result = tmp19(tmp(14883), obj4);
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
  const tmp3 = trackUserProfileAction(8806)();
  let obj = guildId(8753);
  const tmp = trackUserProfileAction;
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const items = [GuildStore];
  const obj2 = guildId(504);
  const stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  dependencyMap = trackUserProfileAction(11483)();
  let closure_3 = trackUserProfileAction(11483)({ guild: stateFromStores });
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
  const tmp7 = trackUserProfileAction(14798);
  Button = guildId(5629).Button;
  obj5 = { size: "sm", color: trackUserProfileAction(575).colors.WHITE };
  PencilIcon = guildId(10212).PencilIcon;
  if (null != stateFromStores) {
    const intl2 = tmp4(1114).intl;
    stringResult = intl2.string(tmp4(1114).t.HmFaFB);
  } else {
    const intl = tmp4(1114).intl;
    stringResult = intl.string(tmp4(1114).t.s5vZlQ);
  }
  tmp6Result = undefined;
  if (null != stateFromStores) {
    const obj6 = {
      variant: "primary",
      icon: closure_19(PencilIcon2, obj7),
      text: intl3.string(guildId(1114).t["PKQB/H"]),
      onPress: function handleEditGuildProfile() {
          trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideAllActionSheets();
          closeVoicePanelsDefault();
          closure_3();
        },
      grow: true
    };
    const Button2 = tmp4(5629).Button;
    obj7 = { size: "sm", color: tmp(575).colors.WHITE };
    PencilIcon2 = tmp4(10212).PencilIcon;
    intl3 = tmp4(1114).intl;
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
    tmp6 = closure_19(tmp(14904), {});
  }
  items1 = [tmp6, , ];
  if (isCurrentUser) {
    isCurrentUser = closure_19(tmp(14905), {});
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
  let c28;
  let contentAnimatedStyle;
  let disableCalls;
  let disableMessage;
  let disableStatus;
  let handleTabChange;
  let id3;
  let id4;
  let id5;
  let initialSection;
  let isPreviewingChanges;
  let items;
  let items21;
  let items24;
  let items28;
  let items29;
  let items31;
  let items32;
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
  let showBlur;
  let statusBackground;
  let str;
  let theme;
  let tmp27;
  let tmp42;
  let tmp65;
  let tmp66;
  let tmp67;
  let tmp68;
  let tmp76;
  let tmp77;
  let tmp85;
  let tmp86;
  let tmp87;
  let tmp88;
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
  let wishlistTabIndex;
  c28 = undefined;
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
  let shouldLogExposure = tmp(tmp2[57])(user, obj3).shouldLogExposure;
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
  const tmp18 = tmp(tmp2[62])(user.id);
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
  const tmp21 = tmp(tmp2[34])(displayProfile, pendingLegacyUsernameDisabled);
  closure_17 = tmp21;
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
  const items8 = [tmp21, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo1 = showUserProfileActionSheet.useMemo(() => {
    const obj = PendingBadgeSettings;
    const obj2 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
    return obj.getPendingProfileBadges(closure_17, stateFromStoresArray, obj2);
  }, items8);
  let obj6 = { user, displayProfile, pendingThemeColors: tmp27 };
  tmp27 = undefined;
  const tmpResult5 = tmp(tmp2[67]);
  if (isPreviewingChanges) {
    tmp27 = pendingThemeColors;
  }
  const tmpResult1Result = tmpResult5(obj6);
  const primaryColor = tmpResult1Result.primaryColor;
  hasCustomProfileTheme = tmp29;
  ({ theme, secondaryColor } = tmpResult1Result);
  const tmp6Result29 = user(tmp2[68]);
  const userProfileColors = tmp6Result29.useUserProfileColors({ theme, primaryColor, secondaryColor });
  containerBackground = userProfileColors.containerBackground;
  ({ avatarBackground, statusBackground } = userProfileColors);
  const ref = obj9.useRef(null);
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
  let tmp36 = tmp9;
  if (!tmp36) {
    let tmp37 = null != stateFromStores2;
    if (tmp37) {
      tmp37 = arr14.length > 0;
    }
    tmp36 = tmp37;
  }
  closure_24 = tmp36;
  const tmp6Result33 = user(tmp2[70]);
  const displayableBoardWidgets = tmp6Result33.useDisplayableBoardWidgets(user.id);
  const tmp6Result34 = user(tmp2[71]);
  let tmp38 = displayableBoardWidgets.length > 0 || tmp6Result34.useCanConjureCustomWidget("UserProfileContent", tmp9);
  closure_25 = tmp38;
  const tmp6Result35 = user(tmp2[72]);
  let tmp39 = tmp6Result35.useIsRecentActivityMobileEnabled("UserProfileContent") && null != stateFromStores;
  closure_26 = tmp39;
  const tmp6Result36 = user(tmp2[73]);
  const profileTabIndices = tmp6Result36.useProfileTabIndices(tmp38, tmp39, tmp36);
  wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  ({ boardTabIndex, activityTabIndex } = profileTabIndices);
  [tmp42, c28] = displayProfile(obj9.useState(0), 2);
  displayProfile(obj9.useState(0), 2);
  const callback = obj9.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp6Result37 = user(tmp2[74]);
  const wishlistViewerCoachmark = tmp6Result37.useWishlistViewerCoachmark({ isCurrentUser: tmp9, shouldShowWishlistTab: tmp36 });
  isVisible = wishlistViewerCoachmark.isVisible;
  markAsDismissed = wishlistViewerCoachmark.markAsDismissed;
  const items13 = [trackUserProfileAction, isVisible, markAsDismissed];
  const callback1 = obj9.useCallback((section) => {
    const obj = { action: "PRESS_SECTION", section };
    trackUserProfileAction(obj);
    const tmp2 = section === UserProfileSections.WISHLIST && isVisible;
    if (tmp2) {
      markAsDismissed(ContentDismissActionType.INDIRECT_ACTION);
    }
  }, items13);
  const tmp6Result38 = user(tmp2[73]);
  const profileSectionTabs = tmp6Result38.useProfileSectionTabs({ initialUserProfileSection: initialSection, wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange: callback1 });
  ({ activeProfileTabSection, setActiveProfileTabSection } = profileSectionTabs);
  restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  isVisible = tmp47;
  isVisible2 = tmp48;
  const items14 = [navigateToPremium];
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  callback2 = obj9.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    if (navigateToPremium != null) {
      navigateToPremium();
    }
  }, items14);
  const items15 = [navigateToShop];
  callback3 = obj9.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    if (navigateToShop != null) {
      navigateToShop();
    }
  }, items15);
  const items16 = [user, stateFromStores, containerBackground, tmp3, isPreviewingChanges, callback2, callback3, null != primaryColor, guildId, userProfileGameFriendApplicationIds, displayProfile, name, pendingBio, channel, showUserProfileActionSheet];
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
          tmp18Result = tmp18(tmp19(14950), obj7);
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
          tmp18Result4 = tmp18(tmp19(7348), obj10);
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
          tmp18Result5 = tmp18(tmp19(14862), obj11);
        }
        items2[7] = tmp18Result5;
        const obj12 = { userId: user.id };
        items2[8] = isBadgeManagementEnabled(UserProfileConnections.UserProfileAccountConnectionsCard, obj12);
        const obj13 = { userId: user.id };
        items2[9] = isBadgeManagementEnabled(UserProfileConnections.UserProfileApplicationRoleConnectionsCard, obj13);
        let tmp18Result6 = !tmp25;
        if (tmp18Result6) {
          const obj25 = { userId: user.id, onBack: showUserProfileActionSheet };
          tmp18Result6 = tmp18(tmp19(14865), obj25);
        }
        items2[10] = tmp18Result6;
        return tmp38(tmp39, obj3);
      }
    }
    return null;
  }, items16);
  const items17 = [tmp3.profileContent, stateFromStores1, activeProfileTabSection === name.WISHLIST, user.id, tmp9];
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
  }, items17);
  const items18 = [callback4, callback5, tmp38, tmp39, tmp36, user, stateFromStores, guildId, , , , ];
  let id2;
  const useMemo = obj9.useMemo;
  if (channel != null) {
    id2 = channel.id;
  }
  items18[8] = id2;
  items18[9] = activeProfileTabSection === name.WIDGETS;
  items18[10] = tmp9;
  items18[11] = containerBackground;
  const memo2 = useMemo(() => {
    let id;
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let obj3;
    let obj5;
    let tmp14;
    let tmp15;
    const obj = { id: "main", label: intl.string(intl5.t.LXw470), page: callback4() };
    intl = intl5.intl;
    const items = [obj];
    const tmp3 = closure_25;
    if (tmp3) {
      const push = items.push;
      const obj2 = { id: "board", label: intl2.string(intl5.t.laViwx), page: isBadgeManagementEnabled(UserProfileWidgetsBoardContainer, obj3) };
      intl2 = tmp(1114).intl;
      obj3 = { userId: user.id, isVisible: isVisible2, isCurrentUser, containerBackground };
      push(obj2);
    }
    const tmp11 = closure_26 && null != stateFromStores;
    if (tmp11) {
      const push2 = items.push;
      const obj4 = { id: "activity", label: intl3.string(intl5.t.chq59f), page: tmp14(tmp15, obj5) };
      intl3 = tmp(1114).intl;
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
      const obj6 = { id: "wishlist", label: intl4.string(intl5.t["7lZ31J"]), page: callback5() };
      intl4 = tmp(1114).intl;
      push3(obj6);
    }
    return items;
  }, items18);
  const tmp6Result39 = user(tmp2[87]);
  const measuredTabItems = tmp6Result39.useMeasuredTabItems(memo2);
  ({ items, pageHeights } = measuredTabItems);
  const tmp6Result40 = user(tmp2[88]);
  const obj8 = { pageWidth: tmp42, defaultIndex: activeProfileTabSectionIndex, itemSpacing: tmp(tmp2[48]).space.PX_24, items, onPageChange: handleTabChange };
  segmentedControlState = tmp6Result40.useSegmentedControlState(obj8);
  const items19 = [segmentedControlState, restoreActiveIndex];
  const layoutEffect = obj9.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items19);
  const items20 = [segmentedControlState, wishlistTabIndex, markAsDismissed, setActiveProfileTabSection];
  if (null != user) {
    if (null != stateFromStores) {
      let OpenableUserProfileAvatar;
      let num2;
      obj10 = { backgroundColor: containerBackground };
      if (isPreviewingChanges) {
        OpenableUserProfileAvatar = tmp(tmp100);
      } else {
        OpenableUserProfileAvatar = tmp6(tmp100).OpenableUserProfileAvatar;
      }
      let _private;
      const tmp59 = hasCustomProfileTheme;
      if (displayProfile != null) {
        _private = displayProfile.private;
      }
      let tmp61 = true === _private;
      if (tmp61) {
        let obj11 = { style: items21, children: isBadgeManagementEnabled(tmp(tmp2[91]), obj12) };
        items21 = [tmp3.privateBanner, bannerAnimatedStyle];
        View = tmp(tmp2[90]).View;
        obj12 = { primaryColor };
        tmp61 = isBadgeManagementEnabled(View, obj11);
      }
      const items22 = [tmp61, , , ];
      let obj13 = { user, displayProfile, bannerHeight: tmp4, pendingBanner: tmp65, pendingAvatarSrc: tmp66, pendingAccentColor: tmp67, pendingThemeColors: tmp68, disableInteraction: isPreviewingChanges, bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur };
      tmp65 = undefined;
      const tmpResult6 = tmp(tmp2[92]);
      if (isPreviewingChanges) {
        tmp65 = pendingBanner;
      }
      tmp66 = undefined;
      if (isPreviewingChanges) {
        tmp66 = pendingAvatarSrc;
      }
      tmp67 = undefined;
      if (isPreviewingChanges) {
        if (null != pendingAccentColor) {
          tmp67 = pendingAccentColor;
        }
      }
      tmp68 = undefined;
      if (isPreviewingChanges) {
        if (null != pendingThemeColors) {
          tmp68 = pendingThemeColors;
        }
      }
      items22[1] = isBadgeManagementEnabled(tmpResult6, obj13);
      let tmp58Result = !isPreviewingChanges;
      if (tmp58Result) {
        const items23 = [tmp3.bannerButtons, , ];
        let _private1;
        const View2 = tmp(tmp2[90]).View;
        if (displayProfile != null) {
          _private1 = displayProfile.private;
        }
        if (_private1) {
          _private1 = tmp3.bannerButtonsWithPrivateBanner;
        }
        const obj14 = { style: items23, children: items24 };
        items23[1] = _private1;
        items23[2] = bannerAnimatedStyle;
        let tmp71 = null;
        if (null != stateFromStores) {
          tmp71 = null;
          if (user.id !== stateFromStores.id) {
            tmp71 = null;
            if (!user.bot) {
              let tmp63Result;
              if (relationshipType === pendingBadgeHiddenBadges.FRIEND) {
                const obj15 = { user };
                tmp63Result = tmp63(closure_24, obj15);
              } else {
                tmp63Result = null;
                if (isGameFriends) {
                  const obj16 = { user };
                  tmp63Result = tmp63(closure_25, obj16);
                }
              }
              tmp71 = tmp63Result;
            }
          }
        }
        items24 = [tmp71, ];
        const obj17 = { user, currentUser: stateFromStores, displayProfile, channel };
        items24[1] = isBadgeManagementEnabled(tmp(tmp2[93]), obj17);
        tmp58Result = tmp58(View2, obj14);
      }
      items22[2] = tmp58Result;
      const obj18 = { style: contentAnimatedStyle, children: null };
      const obj19 = { user, guildId, disableStatus, pendingAvatarSrc: tmp76, pendingAvatarDecoration: tmp77, backgroundColor: avatarBackground, statusStyle: obj20 };
      tmp76 = undefined;
      const View3 = tmp(tmp2[90]).View;
      if (isPreviewingChanges) {
        tmp76 = pendingAvatarSrc;
      }
      tmp77 = undefined;
      if (isPreviewingChanges) {
        if (avatarDecorationOverride == null) {
          avatarDecorationOverride = pendingAvatarDecoration;
        }
        tmp77 = avatarDecorationOverride;
      }
      obj20 = { backgroundColor: statusBackground };
      const items25 = [isBadgeManagementEnabled(OpenableUserProfileAvatar, obj19), ];
      const items26 = [tmp3.profileContentWrapper, ];
      if (!tmp9) {
        num2 = 0;
        if (null == tmp18) {
          num2 = pendingBadgeDisplayOrder;
        }
      } else {
        num2 = 0;
      }
      const obj21 = { style: items26, children: null };
      const obj22 = { paddingTop: num2, paddingBottom: bottom + pendingBio };
      items26[1] = obj22;
      const obj23 = { customStatusActivity: tmp18, user, guildId, channelId: id3, hasCustomProfileTheme: null != primaryColor, showUserProfileActionSheet, isPreviewingChanges, bubbleRef: ref };
      id3 = undefined;
      const tmp80 = stateFromStores2;
      if (channel != null) {
        id3 = channel.id;
      }
      const items27 = [isBadgeManagementEnabled(tmp80, obj23), ];
      let tmp58Result2 = null;
      const LayerScope = tmp6(tmp2[94]).LayerScope;
      if (null != stateFromStores) {
        const obj24 = { style: items28, children: items29 };
        items28 = [, ];
        ({ primaryInfo: arr32[0], profileContent: arr32[1] } = tmp3);
        let obj25 = { user, channelId: id4, guildId, displayProfile, displayNameOverride: tmp85, pronounsOverride: tmp86, badgesOverride: tmp87, pendingDisplayNameStyles: tmp88, badgeContainerBackground: containerBackground, isPreviewingChanges, showBadgeDirectoryNuxCoachmark: tmp9 };
        id4 = undefined;
        const tmp83 = closure_26;
        if (channel != null) {
          id4 = channel.id;
        }
        tmp85 = undefined;
        if (isPreviewingChanges) {
          tmp85 = pendingGlobalName;
        }
        tmp86 = undefined;
        if (isPreviewingChanges) {
          tmp86 = pendingPronouns;
        }
        tmp87 = undefined;
        if (isPreviewingChanges) {
          tmp87 = memo1;
        }
        tmp88 = undefined;
        if (isPreviewingChanges) {
          tmp88 = pendingDisplayNameStyles;
        }
        if (tmp9) {
          tmp9 = !isPreviewingChanges;
        }
        items29 = [isBadgeManagementEnabled(tmp83, obj25), , , , , , ];
        let tmp63Result5 = user.id !== stateFromStores.id;
        if (tmp63Result5) {
          const obj26 = { user, guildId };
          tmp63Result5 = tmp63(tmp(tmp2[95]), obj26);
        }
        items29[1] = tmp63Result5;
        let tmp63Result6 = relationshipType === pendingBadgeHiddenBadges.PENDING_INCOMING;
        const tmp90 = pendingBadgeHiddenBadges;
        if (tmp63Result6) {
          const obj27 = { user, channelId: id5, guildId, applicationId: originApplicationId, style: obj10, showUserProfile: showUserProfileActionSheet };
          id5 = undefined;
          const tmpResult7 = tmp(tmp2[96]);
          if (channel != null) {
            id5 = channel.id;
          }
          tmp63Result6 = tmp63(tmpResult7, obj27);
        }
        items29[2] = tmp63Result6;
        items29[3] = incomingGameRelationshipsForUser.map((applicationId) => {
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
        items29[4] = isBadgeManagementEnabled(tmp(tmp2[97]), obj28);
        let tmp63Result7 = user.id === stateFromStores.id && !isPreviewingChanges;
        if (tmp63Result7) {
          const obj29 = { guildId };
          tmp63Result7 = tmp63(wishlistTabIndex, obj29);
        }
        items29[5] = tmp63Result7;
        let tmp63Result8 = user.id !== stateFromStores.id;
        if (tmp63Result8) {
          const obj30 = { user, disableCalls, disableMessage, navigationReplace, location: _location, hasCustomProfileTheme: null != primaryColor, style: tmp3.primaryButtons };
          const tmpResult8 = tmp(tmp2[98]);
          if (!disableCalls) {
            disableCalls = relationshipType === tmp90.BLOCKED;
          }
          if (!disableCalls) {
            disableCalls = user.isProvisional;
          }
          tmp63Result8 = tmp63(tmpResult8, obj30);
        }
        items29[6] = tmp63Result8;
        tmp58Result2 = tmp58(tmp78, obj24);
      }
      const items30 = [tmp58Result2, ];
      if (!tmp36) {
        if (!tmp38) {
          let callback4Result;
          if (!tmp39) {
            callback4Result = callback4();
          }
          const obj31 = { children: items22 };
          const obj32 = { children: items30 };
          items30[1] = callback4Result;
          items27[1] = containerBackground(LayerScope, obj32);
          obj21.children = items27;
          items25[1] = containerBackground(isPreviewingChanges, obj21);
          obj18.children = items25;
          items22[3] = containerBackground(View3, obj18);
          return containerBackground(tmp59, obj31);
        }
      }
      const obj33 = { onLayout: callback, children: containerBackground(LayerScope2, obj36) };
      const obj34 = { style: tmp3.profileTablist, children: items31 };
      LayerScope2 = tmp6(tmp2[94]).LayerScope;
      if (shouldLogExposure) {
        shouldLogExposure = tmp63(tmp6(tmp2[99]).ProfileReadStateExposure, { location: "UserProfileContent" });
      }
      items31 = [shouldLogExposure, , ];
      const obj35 = { state: segmentedControlState, variant: str };
      str = undefined;
      const Tabs = tmp6(tmp2[100]).Tabs;
      if (null != primaryColor) {
        str = "overlay";
      }
      obj36 = { children: items32 };
      items31[1] = isBadgeManagementEnabled(Tabs, obj35);
      const obj37 = { ref: ref1, style: rect, collapsable: false, pointerEvents: "box-none" };
      rect = { position: "absolute", left: `${Math.max(wishlistTabIndex, 0) / arr22.length * 100}%`, top: 0, right: 0, bottom: 0 };
      const _Math = Math;
      items31[2] = isBadgeManagementEnabled(isPreviewingChanges, obj37);
      items32 = [containerBackground(isPreviewingChanges, obj34), , ];
      const obj38 = { state: segmentedControlState, pageHeights, scrollPosition, scrollViewRef };
      items32[1] = isBadgeManagementEnabled(tmp(tmp2[87]), obj38);
      const obj39 = { anchorRef: ref1, isVisible, markAsDismissed, onViewWishlist: tmp57 };
      items32[2] = isBadgeManagementEnabled(tmp(tmp2[101]), obj39);
      callback4Result = tmp63(tmp78, obj33);
    }
  }
  return null;
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileContent.tsx");

export default memoResult;
export { PrimaryInfo };
