// Module ID: 14791
// Function ID: 14792
// Name: UserProfileContent
// Dependencies: [32, 19, 17, 6257, 10971, 4788, 4859, 1386, 6250, 6037, 6011, 7431, 1071, 5146, 4763, 21, 14792, 9346, 504, 5131, 9663, 2119, 9391, 9386, 6255, 6253, 7717, 4973, 7811, 14793, 1112, 13443, 14794, 5609, 9362, 14796, 9420, 4750, 14799, 6681, 7412, 5598, 9666, 14800, 9295, 14713, 5515, 9483, 575, 9856, 14816, 14849, 14675, 14681, 1628, 14855, 14795, 14859, 14860, 12286, 9664, 9361, 9721, 6262, 14861, 9344, 9348, 10970, 14500, 14841, 14817, 14862, 8345, 14863, 14864, 13451, 14865, 14715, 14867, 13691, 7409, 14781, 14868, 14873, 14784, 14879, 14888, 14894, 8475, 9379, 1653, 14895, 14682, 14685, 5495, 14896, 14897, 14902, 14903, 14856, 13437, 14907, 2]

// Module 14791 (UserProfileContent)
import react_native from "react-native" /* 17 */;
import Constants2 from "Constants" /* 1071 */;
import intl6 from "intl" /* 1112 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4763 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5146 */;
import ToastUtils from "ToastUtils" /* 5598 */;
import Constants3 from "Constants" /* 6011 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 6262 */;
import ClipboardUtils from "ClipboardUtils" /* 7412 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7717 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 9346 */;
import closeVoicePanelsDefault from "closeVoicePanels" /* 9856 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 13443 */;
import ProvisionalAccountExplainer from "ProvisionalAccountExplainer" /* 13451 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 13691 */;
import UserProfileActivityDefault from "UserProfileActivity" /* 14715 */;
import WishlistUtils from "WishlistUtils" /* 14792 */;
import UserProfileWidgetsBoardTabDefault from "UserProfileWidgetsBoardTab" /* 14816 */;
import UserProfileActivityTabDefault from "UserProfileActivityTab" /* 14849 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 14861 */;
import UserProfilePrivateInfoBannerDefault from "UserProfilePrivateInfoBanner" /* 14864 */;
import UserProfileDismissibleUpsellsDefault from "UserProfileDismissibleUpsells" /* 14865 */;
import UserProfileConnections from "UserProfileConnections" /* 14868 */;
import CheckpointProfileEntrypointDefault from "CheckpointProfileEntrypoint" /* 14873 */;
import UserProfileWishlistGrid from "UserProfileWishlistGrid" /* 14879 */;
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid" /* 14888 */;
import UserProfileIncomingFriendRequestDefault from "UserProfileIncomingFriendRequest" /* 14897 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 6257 */;
import WishlistStore from "WishlistStore" /* 10971 */;
import GuildStore from "GuildStore" /* 4788 */;
import RelationshipStore from "RelationshipStore" /* 4859 */;
import UserStore from "UserStore" /* 1386 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 6250 */;
import UserProfileStore from "UserProfileStore" /* 6037 */;
import Constants from "Constants" /* 7431 */;
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
    obj.openLazy(asyncRequire(9663, dependencyMap.paths), "UserProfileCustomStatusActionSheet", obj2, "stack");
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
    obj.openLazy(asyncRequire(14794, dependencyMap.paths), "UserProfileGameFriendActionSheet", obj2, "stack");
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
    let obj = trackUserProfileAction(4973);
    const userTag = obj.useUserTag(user);
    let obj2 = { userId: user.id, enabled: showBadgeDirectoryNuxCoachmark, fetchCatalog: false, location: "UserProfileContent" };
    const tmp4 = trackUserProfileAction(9362)(displayProfile);
    const useBadgeDirectoryNuxCoachmarkVariant = userTag(14796).useBadgeDirectoryNuxCoachmarkVariant;
    userTag(14796);
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
    const useSelectedDismissibleContent = userTag(9420).useSelectedDismissibleContent;
    userTag(9420);
    if (null != variantProps) {
      const items = [userTag(4750).DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER];
      items1 = items;
    } else {
      items1 = [];
    }
    [tmp10, tmp11] = useSelectedDismissibleContent(items1);
    _slicedToArray(useSelectedDismissibleContent(items1), 2);
    const tmp12 = tmp10 === userTag(4750).DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER;
    const tmp5Result3 = userTag(14799);
    const badgeDirectoryNuxEntryPoint = tmp5Result3.useBadgeDirectoryNuxEntryPoint(tmp12, tmp11);
    ({ entryPointRef, onOpenBadgeDirectory } = badgeDirectoryNuxEntryPoint);
    const tmpResult = trackUserProfileAction(6681);
    const name = tmpResult.useName(guildId, channelId, user);
    let tmp15 = name;
    if (null != displayNameOverride) {
      tmp15 = name;
      if (displayNameOverride.trim().length > 0) {
        tmp15 = displayNameOverride;
      }
    }
    const tmp5Result4 = userTag(6255);
    trackUserProfileAction = tmp5Result4.useUserProfileAnalyticsContext().trackUserProfileAction;
    const items2 = [trackUserProfileAction, userTag];
    const callback = react.useCallback(() => {
      trackUserProfileAction({ action: "COPY_USERNAME" });
      const obj = ClipboardUtils;
      obj.copy(userTag);
      const obj2 = ToastUtils;
      const result = obj2.presentUsernameCopied();
    }, items2);
    const obj3 = { user, guildId, displayName: tmp15, pronouns: pronounsOverride, badges: badgesOverride, style, badgeContainerBackground, onPressDisplayName: tmp22, displayNameAccessibilityHint: intl.string(userTag(1112).t.y5MwJy), onPressUserTag: tmp23, onPressPronouns: handlePressPronouns, showBadgeToastOnPress: !isPreviewingChanges, canOpenBadgeDirectory: true, badgeDirectoryEntryPointRef: entryPointRef, onOpenBadgeDirectory, pendingDisplayNameStyles };
    const tmp17 = closure_21;
    const tmp18 = closure_20;
    const tmpResult2 = trackUserProfileAction(9666);
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
    intl = tmp5(1112).intl;
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
      tmp19Result = tmp19(tmp(14800), obj4);
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
  const initialEditingTab = guildId.initialEditingTab;
  const tmp3 = trackUserProfileAction(9346)();
  let obj = guildId(6255);
  const tmp = trackUserProfileAction;
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const items = [GuildStore];
  const obj2 = guildId(504);
  const stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  dependencyMap = trackUserProfileAction(9295)({ initialTab: initialEditingTab });
  let closure_3 = trackUserProfileAction(9295)({ guild: stateFromStores });
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
  const tmp7 = trackUserProfileAction(14713);
  Button = guildId(5515).Button;
  obj5 = { size: "sm", color: trackUserProfileAction(575).colors.WHITE };
  PencilIcon = guildId(9483).PencilIcon;
  if (null != stateFromStores) {
    const intl2 = tmp4(1112).intl;
    stringResult = intl2.string(tmp4(1112).t.HmFaFB);
  } else {
    const intl = tmp4(1112).intl;
    stringResult = intl.string(tmp4(1112).t.s5vZlQ);
  }
  tmp6Result = undefined;
  if (null != stateFromStores) {
    const obj6 = {
      variant: "primary",
      icon: closure_19(PencilIcon2, obj7),
      text: intl3.string(guildId(1112).t["PKQB/H"]),
      onPress: function handleEditGuildProfile() {
          trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideAllActionSheets();
          closeVoicePanelsDefault();
          closure_3();
        },
      grow: true
    };
    const Button2 = tmp4(5515).Button;
    obj7 = { size: "sm", color: tmp(575).colors.WHITE };
    PencilIcon2 = tmp4(9483).PencilIcon;
    intl3 = tmp4(1112).intl;
    tmp6Result = tmp6(Button2, obj6);
  }
  return closure_19(tmp7, obj3);
}
function UserProfileWidgetsBoardContainer(arg0) {
  let containerBackground;
  let isCurrentUser;
  let isVisible;
  let userId;
  ({ userId, isVisible, isCurrentUser, containerBackground } = arg0);
  const cardStyle = [UserProfileSharedStylesDefault().card, { backgroundColor: containerBackground }];
  return closure_19(UserProfileWidgetsBoardTabDefault, { userId, isVisible, cardStyle, isCurrentUser });
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
  let activeProfileTabSection;
  let activeProfileTabSectionIndex;
  let activityTabIndex;
  let avatarBackground;
  let avatarDecorationOverride;
  let bannerAnimatedStyle;
  let bannerImageAnimatedStyle;
  let blurAnimatedProps;
  let boardTabIndex;
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
  let onLayout;
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
  let ref;
  let relationshipType;
  let scrollViewRef;
  let secondaryColor;
  let setActiveProfileTabSection;
  let shouldLogExposure;
  let showBlur;
  let statusBackground;
  let str2;
  let theme;
  let tmp28;
  let tmp69;
  let tmp70;
  let tmp71;
  let tmp72;
  let tmp80;
  let tmp81;
  let tmp89;
  let tmp90;
  let tmp91;
  let tmp92;
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
  ref = undefined;
  let wishlistTabIndex;
  let markAsDismissed;
  setActiveProfileTabSection = undefined;
  let restoreActiveIndex;
  let isVisible;
  let isVisible2;
  let callback1;
  let callback2;
  let callback3;
  let callback4;
  let segmentedControlState;
  let obj10;
  let tmp = channel;
  let tmp2 = guildId;
  ({ disableMessage, navigationReplace, disableStatus, location: _location, initialSection, scrollViewRef } = user);
  let tmp3 = channel(guildId[17])();
  let closure_8 = tmp3;
  const tmp4 = channel(guildId[52])(closure_17);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = channel(guildId[53])({ scrollPosition, bannerHeight: tmp4 }));
  const tmp5 = channel(guildId[53])({ scrollPosition, bannerHeight: tmp4 });
  const bottom = channel(guildId[54])().bottom;
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
  let tmp10 = tmp(tmp2[55])(user, obj3);
  ({ shouldLogExposure, hasNewWishlistItems } = tmp10);
  let items2 = [trackUserProfileAction];
  const tmp6Result = user(tmp2[18]);
  const stateFromStoresObject = tmp6Result.useStateFromStoresObject(items2, () => {
    const obj = { relationshipType: RelationshipStore.getRelationshipType(user.id), originApplicationId: RelationshipStore.getOriginApplicationId(user.id) };
    return obj;
  });
  ({ relationshipType, originApplicationId } = stateFromStoresObject);
  const tmp6Result21 = user(tmp2[56]);
  const incomingGameRelationshipsForUser = tmp6Result21.useIncomingGameRelationshipsForUser(user.id);
  const tmp6Result22 = user(tmp2[57]);
  const isGameFriends = tmp6Result22.useIsGameFriends(user.id);
  let obj4 = { userId: user.id };
  const tmp6Result23 = user(tmp2[58]);
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
  const tmp6Result24 = user(tmp2[59]);
  const subscribeGuildMembers = tmp6Result24.useSubscribeGuildMembers(memo, "UserProfileContent");
  const tmp19 = tmp(tmp2[60])(user.id);
  const items4 = [isCurrentUser];
  const tmp6Result25 = user(tmp2[18]);
  const stateFromStoresObject1 = tmp6Result25.useStateFromStoresObject(items4, () => isCurrentUser.getPendingChanges());
  pendingBio = stateFromStoresObject1.pendingBio;
  ({ pendingAccentColor, pendingThemeColors, pendingBadgeDisplayOrder } = stateFromStoresObject1);
  pendingBadgeHiddenBadges = stateFromStoresObject1.pendingBadgeHiddenBadges;
  ({ pendingBanner, pendingAvatar, pendingAvatarDecoration, pendingGlobalName, pendingPronouns, pendingLegacyUsernameDisabled, pendingDisplayNameStyles } = stateFromStoresObject1);
  let obj5 = { userId: user.id, image: pendingAvatar };
  const tmp6Result26 = user(tmp2[61]);
  const pendingAvatarSrc = tmp6Result26.getPendingAvatarSrc(obj5);
  const tmp22 = tmp(tmp2[34])(displayProfile, pendingLegacyUsernameDisabled);
  closure_17 = tmp22;
  const items5 = [navigateToPremium];
  const items6 = [user.id];
  const tmp6Result27 = user(tmp2[18]);
  stateFromStoresArray = tmp6Result27.useStateFromStoresArray(items5, () => BadgeDirectoryStore.getBadges(user.id), items6);
  const tmp6Result28 = user(tmp2[62]);
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
  const tmpResult5 = tmp(tmp2[65]);
  if (isPreviewingChanges) {
    tmp28 = pendingThemeColors;
  }
  const tmpResult1Result = tmpResult5(obj6);
  const primaryColor = tmpResult1Result.primaryColor;
  hasCustomProfileTheme = tmp30;
  ({ theme, secondaryColor } = tmpResult1Result);
  const tmp6Result29 = user(tmp2[66]);
  const userProfileColors = tmp6Result29.useUserProfileColors({ theme, primaryColor, secondaryColor });
  containerBackground = userProfileColors.containerBackground;
  ({ avatarBackground, statusBackground } = userProfileColors);
  const ref1 = obj9.useRef(null);
  const ref2 = obj9.useRef(null);
  const items9 = [userProfileGameFriendApplicationIds];
  const tmp6Result30 = user(tmp2[18]);
  stateFromStores1 = tmp6Result30.useStateFromStores(items9, () => UserProfileStore.getFirstWishlistId(user.id));
  let obj7 = { wishlistId: stateFromStores1, userId: user.id };
  const tmp6Result31 = user(tmp2[67]);
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
  const tmp6Result33 = user(tmp2[68]);
  let tmp39 = tmp6Result33.useDisplayableBoardWidgets(user.id).length > 0;
  const tmp6Result34 = user(tmp2[69]);
  const canConjureCustomWidget = tmp6Result34.useCanConjureCustomWidget("UserProfileContent", tmp9);
  const tmp6Result35 = user(tmp2[70]);
  const isMobileWidgetEditingEnabled = tmp6Result35.useIsMobileWidgetEditingEnabled("UserProfileContent");
  if (!tmp39) {
    tmp39 = canConjureCustomWidget;
  }
  if (!tmp39) {
    tmp39 = tmp9 && isMobileWidgetEditingEnabled;
  }
  closure_25 = tmp39;
  closure_26 = tmp43;
  closure_27 = tmp44;
  ref = obj9.useRef(false);
  const items13 = [tmp37 && hasNewWishlistItems, trackUserProfileAction];
  const effect1 = obj9.useEffect(() => {
    const tmp = closure_27 && !ref.current;
    if (tmp) {
      ref.current = true;
      trackUserProfileAction({ action: "VIEW_NEW_CONTENT_TAB_BADGE" });
    }
  }, items13);
  const tmp6Result36 = user(tmp2[71]);
  const profileTabIndices = tmp6Result36.useProfileTabIndices(tmp39, tmp43, tmp37);
  wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  ({ boardTabIndex, activityTabIndex } = profileTabIndices);
  const tmp47 = tmp(tmp2[72])();
  const width = tmp47.width;
  let num2 = 0;
  ({ ref, onLayout } = tmp47);
  if (undefined !== width) {
    num2 = width;
  }
  const tmp6Result37 = user(tmp2[73]);
  const wishlistViewerCoachmark = tmp6Result37.useWishlistViewerCoachmark({ isCurrentUser: tmp9, shouldShowWishlistTab: tmp37 });
  isVisible = wishlistViewerCoachmark.isVisible;
  markAsDismissed = wishlistViewerCoachmark.markAsDismissed;
  const items14 = [trackUserProfileAction, isVisible, markAsDismissed];
  const callback = obj9.useCallback((section) => {
    const obj = { action: "PRESS_SECTION", section };
    trackUserProfileAction(obj);
    const tmp2 = section === UserProfileSections.WISHLIST && isVisible;
    if (tmp2) {
      markAsDismissed(ContentDismissActionType.INDIRECT_ACTION);
    }
  }, items14);
  const tmp6Result38 = user(tmp2[71]);
  const profileSectionTabs = tmp6Result38.useProfileSectionTabs({ initialUserProfileSection: initialSection, wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange: callback });
  ({ activeProfileTabSection, setActiveProfileTabSection } = profileSectionTabs);
  restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  isVisible = tmp51;
  isVisible2 = tmp52;
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  const items15 = [navigateToPremium];
  callback1 = obj9.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    if (navigateToPremium != null) {
      navigateToPremium();
    }
  }, items15);
  const items16 = [navigateToShop];
  callback2 = obj9.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    if (navigateToShop != null) {
      navigateToShop();
    }
  }, items16);
  const items17 = [user, stateFromStores, tmp9, containerBackground, tmp3, isPreviewingChanges, callback1, callback2, null != primaryColor, guildId, userProfileGameFriendApplicationIds, displayProfile, name, pendingBio, channel, showUserProfileActionSheet];
  callback3 = obj9.useCallback(() => {
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
        const tmp38 = containerBackground;
        const tmp39 = closure_21;
        const tmp40 = View;
        if (displayProfile != null) {
          _private = tmp41.private;
        }
        if (_private) {
          const obj = { username: name, containerBackground: tmp38 };
          _private = isBadgeManagementEnabled(UserProfilePrivateInfoBannerDefault, obj);
        }
        items2 = [_private, , , , , , , , , , , ];
        let isProvisional = tmp.isProvisional;
        if (isProvisional) {
          const obj4 = { style: items, userId: user.id, iconSize: 16 };
          isProvisional = isBadgeManagementEnabled(ProvisionalAccountExplainer.UserProfileProvisionalAccountExplainerCard, obj4);
        }
        items2[1] = isProvisional;
        let tmp10 = tmp.id === tmp36.id && !isPreviewingChanges;
        if (tmp10) {
          const obj5 = { navigateToPremium: callback1, navigateToShop: callback2, hasCustomProfileTheme };
          tmp10 = isBadgeManagementEnabled(UserProfileDismissibleUpsellsDefault, obj5);
        }
        items2[2] = tmp10;
        const obj6 = { user, currentUser: stateFromStores, guildId, style: items };
        items2[3] = isBadgeManagementEnabled(UserProfileActivityDefault, obj6);
        let tmp18Result = userProfileGameFriendApplicationIds.length > 0;
        if (tmp18Result) {
          const obj7 = { userId: user.id, applicationIds: tmp22 };
          tmp18Result = tmp18(tmp19(14867), obj7);
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
          tmp18Result4 = tmp18(tmp19(7409), obj10);
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
          tmp18Result5 = tmp18(tmp19(14781), obj11);
        }
        items2[7] = tmp18Result5;
        const obj12 = { userId: user.id };
        items2[8] = isBadgeManagementEnabled(UserProfileConnections.UserProfileAccountConnectionsCard, obj12);
        const obj13 = { userId: user.id };
        items2[9] = isBadgeManagementEnabled(UserProfileConnections.UserProfileApplicationRoleConnectionsCard, obj13);
        items2[10] = isCurrentUser && !isPreviewingChanges && isBadgeManagementEnabled(CheckpointProfileEntrypointDefault, { source: "user_profile_action_sheet" });
        let tmp18Result6 = !tmp25;
        isCurrentUser && !isPreviewingChanges && isBadgeManagementEnabled(CheckpointProfileEntrypointDefault, { source: "user_profile_action_sheet" });
        if (tmp18Result6) {
          const obj25 = { userId: user.id, onBack: showUserProfileActionSheet };
          tmp18Result6 = tmp18(tmp19(14784), obj25);
        }
        items2[11] = tmp18Result6;
        return tmp39(tmp40, obj3);
      }
    }
    return null;
  }, items17);
  const items18 = [tmp3.profileContent, stateFromStores1, activeProfileTabSection === name.WISHLIST, user.id, tmp9];
  callback4 = obj9.useCallback(() => {
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
  const items19 = [callback3, callback4, tmp37 && hasNewWishlistItems, tmp39, null != stateFromStores, tmp37, user, stateFromStores, guildId, , , , ];
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
    let tmp12;
    let tmp13;
    let tmp24;
    const obj = { id: "main", label: intl.string(intl6.t.LXw470), page: callback3() };
    intl = intl6.intl;
    const items = [obj];
    const tmp3 = closure_25;
    if (tmp3) {
      const push = items.push;
      const obj2 = { id: "board", label: intl2.string(intl6.t.laViwx), page: isBadgeManagementEnabled(UserProfileWidgetsBoardContainer, obj3) };
      intl2 = tmp(1112).intl;
      obj3 = { userId: user.id, isVisible: isVisible2, isCurrentUser, containerBackground };
      push(obj2);
    }
    const tmp11 = closure_26;
    if (tmp11) {
      const push2 = items.push;
      const obj4 = { id: "activity", label: intl3.string(intl6.t.chq59f), page: tmp12(tmp13, obj5) };
      intl3 = tmp(1112).intl;
      obj5 = { user, currentUser: stateFromStores, guildId, channelId: id, containerBackground };
      id = undefined;
      tmp12 = isBadgeManagementEnabled;
      tmp13 = UserProfileActivityTabContainer;
      if (channel != null) {
        id = channel.id;
      }
      push2(obj4);
    }
    const tmp21 = closure_24;
    if (tmp21) {
      const push3 = items.push;
      const obj6 = { id: "wishlist", label: intl4.string(intl6.t["7lZ31J"]), page: callback4(), indicatorDot: tmp24 };
      intl4 = tmp(1112).intl;
      tmp24 = undefined;
      if (closure_27) {
        const obj7 = { accessibilityLabel: intl5.string(intl6.t.ceMCll) };
        intl5 = tmp(1112).intl;
        tmp24 = obj7;
      }
      push3(obj6);
    }
    return items;
  }, items19);
  const tmp6Result39 = user(tmp2[87]);
  const measuredTabItems = tmp6Result39.useMeasuredTabItems(memo2);
  ({ items, pageHeights } = measuredTabItems);
  const tmp6Result40 = user(tmp2[88]);
  const obj8 = { pageWidth: num2, defaultIndex: activeProfileTabSectionIndex, itemSpacing: tmp(tmp2[48]).space.PX_24, items, onPageChange: handleTabChange };
  segmentedControlState = tmp6Result40.useSegmentedControlState(obj8);
  const items20 = [segmentedControlState, restoreActiveIndex];
  const layoutEffect = obj9.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items20);
  const items21 = [segmentedControlState, wishlistTabIndex, markAsDismissed, setActiveProfileTabSection];
  if (null != user) {
    if (null != stateFromStores) {
      let OpenableUserProfileAvatar;
      let num3;
      obj10 = { backgroundColor: containerBackground };
      if (isPreviewingChanges) {
        OpenableUserProfileAvatar = tmp(tmp104);
      } else {
        OpenableUserProfileAvatar = tmp6(tmp104).OpenableUserProfileAvatar;
      }
      let _private;
      const tmp63 = hasCustomProfileTheme;
      if (displayProfile != null) {
        _private = displayProfile.private;
      }
      let tmp65 = true === _private;
      if (tmp65) {
        let obj11 = { style: items22, children: isBadgeManagementEnabled(tmp(tmp2[91]), obj12) };
        items22 = [tmp3.privateBanner, bannerAnimatedStyle];
        View = tmp(tmp2[90]).View;
        obj12 = { primaryColor };
        tmp65 = isBadgeManagementEnabled(View, obj11);
      }
      const items23 = [tmp65, , , ];
      let obj13 = { user, displayProfile, bannerHeight: tmp4, pendingBanner: tmp69, pendingAvatarSrc: tmp70, pendingAccentColor: tmp71, pendingThemeColors: tmp72, disableInteraction: isPreviewingChanges, bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur };
      tmp69 = undefined;
      const tmpResult6 = tmp(tmp2[92]);
      if (isPreviewingChanges) {
        tmp69 = pendingBanner;
      }
      tmp70 = undefined;
      if (isPreviewingChanges) {
        tmp70 = pendingAvatarSrc;
      }
      tmp71 = undefined;
      if (isPreviewingChanges) {
        if (null != pendingAccentColor) {
          tmp71 = pendingAccentColor;
        }
      }
      tmp72 = undefined;
      if (isPreviewingChanges) {
        if (null != pendingThemeColors) {
          tmp72 = pendingThemeColors;
        }
      }
      items23[1] = isBadgeManagementEnabled(tmpResult6, obj13);
      let tmp62Result = !isPreviewingChanges;
      if (tmp62Result) {
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
        let tmp75 = null;
        if (null != stateFromStores) {
          tmp75 = null;
          if (user.id !== stateFromStores.id) {
            tmp75 = null;
            if (!user.bot) {
              let tmp67Result;
              if (relationshipType === pendingBadgeHiddenBadges.FRIEND) {
                const obj15 = { user };
                tmp67Result = tmp67(closure_24, obj15);
              } else {
                tmp67Result = null;
                if (isGameFriends) {
                  const obj16 = { user };
                  tmp67Result = tmp67(closure_25, obj16);
                }
              }
              tmp75 = tmp67Result;
            }
          }
        }
        items25 = [tmp75, ];
        const obj17 = { user, currentUser: stateFromStores, displayProfile, channel };
        items25[1] = isBadgeManagementEnabled(tmp(tmp2[93]), obj17);
        tmp62Result = tmp62(View2, obj14);
      }
      items23[2] = tmp62Result;
      const obj18 = { style: contentAnimatedStyle, children: null };
      const obj19 = { user, guildId, disableStatus, pendingAvatarSrc: tmp80, pendingAvatarDecoration: tmp81, backgroundColor: avatarBackground, statusStyle: obj20 };
      tmp80 = undefined;
      const View3 = tmp(tmp2[90]).View;
      if (isPreviewingChanges) {
        tmp80 = pendingAvatarSrc;
      }
      tmp81 = undefined;
      if (isPreviewingChanges) {
        if (avatarDecorationOverride == null) {
          avatarDecorationOverride = pendingAvatarDecoration;
        }
        tmp81 = avatarDecorationOverride;
      }
      obj20 = { backgroundColor: statusBackground };
      const items26 = [isBadgeManagementEnabled(OpenableUserProfileAvatar, obj19), ];
      const items27 = [tmp3.profileContentWrapper, ];
      if (!tmp9) {
        num3 = 0;
        if (null == tmp19) {
          num3 = pendingBadgeDisplayOrder;
        }
      } else {
        num3 = 0;
      }
      const obj21 = { style: items27, children: null };
      const obj22 = { paddingTop: num3, paddingBottom: bottom + pendingBio };
      items27[1] = obj22;
      const obj23 = { customStatusActivity: tmp19, user, guildId, channelId: id3, hasCustomProfileTheme: null != primaryColor, showUserProfileActionSheet, isPreviewingChanges, bubbleRef: ref1 };
      id3 = undefined;
      const tmp84 = stateFromStores2;
      if (channel != null) {
        id3 = channel.id;
      }
      const items28 = [isBadgeManagementEnabled(tmp84, obj23), ];
      let tmp62Result2 = null;
      const LayerScope = tmp6(tmp2[94]).LayerScope;
      if (null != stateFromStores) {
        const obj24 = { style: items29, children: items30 };
        items29 = [, ];
        ({ primaryInfo: arr32[0], profileContent: arr32[1] } = tmp3);
        let obj25 = { user, channelId: id4, guildId, displayProfile, displayNameOverride: tmp89, pronounsOverride: tmp90, badgesOverride: tmp91, pendingDisplayNameStyles: tmp92, badgeContainerBackground: containerBackground, isPreviewingChanges, showBadgeDirectoryNuxCoachmark: tmp9 };
        id4 = undefined;
        const tmp87 = closure_26;
        if (channel != null) {
          id4 = channel.id;
        }
        tmp89 = undefined;
        if (isPreviewingChanges) {
          tmp89 = pendingGlobalName;
        }
        tmp90 = undefined;
        if (isPreviewingChanges) {
          tmp90 = pendingPronouns;
        }
        tmp91 = undefined;
        if (isPreviewingChanges) {
          tmp91 = memo1;
        }
        tmp92 = undefined;
        if (isPreviewingChanges) {
          tmp92 = pendingDisplayNameStyles;
        }
        if (tmp9) {
          tmp9 = !isPreviewingChanges;
        }
        items30 = [isBadgeManagementEnabled(tmp87, obj25), , , , , , ];
        let tmp67Result5 = user.id !== stateFromStores.id;
        if (tmp67Result5) {
          const obj26 = { user, guildId };
          tmp67Result5 = tmp67(tmp(tmp2[95]), obj26);
        }
        items30[1] = tmp67Result5;
        let tmp67Result6 = relationshipType === pendingBadgeHiddenBadges.PENDING_INCOMING;
        const tmp94 = pendingBadgeHiddenBadges;
        if (tmp67Result6) {
          const obj27 = { user, channelId: id5, guildId, applicationId: originApplicationId, style: obj10, showUserProfile: showUserProfileActionSheet };
          id5 = undefined;
          const tmpResult7 = tmp(tmp2[96]);
          if (channel != null) {
            id5 = channel.id;
          }
          tmp67Result6 = tmp67(tmpResult7, obj27);
        }
        items30[2] = tmp67Result6;
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
        let tmp67Result7 = user.id === stateFromStores.id && !isPreviewingChanges;
        if (tmp67Result7) {
          const obj29 = { guildId, initialEditingTab: str };
          tmp67Result7 = tmp67(closure_27, obj29);
        }
        items30[5] = tmp67Result7;
        let tmp67Result8 = user.id !== stateFromStores.id;
        if (tmp67Result8) {
          const obj30 = { user, disableCalls, disableMessage, navigationReplace, location: _location, hasCustomProfileTheme: null != primaryColor, style: tmp3.primaryButtons };
          const tmpResult8 = tmp(tmp2[98]);
          if (!disableCalls) {
            disableCalls = relationshipType === tmp94.BLOCKED;
          }
          if (!disableCalls) {
            disableCalls = user.isProvisional;
          }
          tmp67Result8 = tmp67(tmpResult8, obj30);
        }
        items30[6] = tmp67Result8;
        tmp62Result2 = tmp62(tmp82, obj24);
      }
      const items31 = [tmp62Result2, ];
      if (!tmp37) {
        if (!tmp39) {
          let callback3Result;
          if (null == stateFromStores) {
            callback3Result = callback3();
          }
          const obj31 = { children: items23 };
          const obj32 = { children: items31 };
          items31[1] = callback3Result;
          items28[1] = containerBackground(LayerScope, obj32);
          obj21.children = items28;
          items26[1] = containerBackground(isPreviewingChanges, obj21);
          obj18.children = items26;
          items23[3] = containerBackground(View3, obj18);
          return containerBackground(tmp63, obj31);
        }
      }
      const obj33 = { ref, onLayout, children: containerBackground(LayerScope2, obj36) };
      const obj34 = { style: tmp3.profileTablist, children: items32 };
      LayerScope2 = tmp6(tmp2[94]).LayerScope;
      if (shouldLogExposure) {
        shouldLogExposure = tmp67(tmp6(tmp2[99]).ProfileReadStateExposure, { location: "UserProfileContent" });
      }
      items32 = [shouldLogExposure, , ];
      const obj35 = { state: segmentedControlState, variant: str2 };
      str2 = undefined;
      const Tabs = tmp6(tmp2[100]).Tabs;
      if (null != primaryColor) {
        str2 = "overlay";
      }
      obj36 = { children: items33 };
      items32[1] = isBadgeManagementEnabled(Tabs, obj35);
      const obj37 = { ref: ref2, style: rect, collapsable: false, pointerEvents: "box-none" };
      rect = { position: "absolute", left: `${Math.max(wishlistTabIndex, 0) / arr22.length * 100}%`, top: 0, right: 0, bottom: 0 };
      const _Math = Math;
      items32[2] = isBadgeManagementEnabled(isPreviewingChanges, obj37);
      items33 = [containerBackground(isPreviewingChanges, obj34), , ];
      const obj38 = { state: segmentedControlState, pageHeights, scrollPosition, scrollViewRef };
      items33[1] = isBadgeManagementEnabled(tmp(tmp2[87]), obj38);
      const obj39 = { anchorRef: ref2, isVisible, markAsDismissed, onViewWishlist: tmp61 };
      items33[2] = isBadgeManagementEnabled(tmp(tmp2[101]), obj39);
      callback3Result = tmp67(tmp82, obj33);
    }
  }
  return null;
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileContent.tsx");

export default memoResult;
export { PrimaryInfo };
