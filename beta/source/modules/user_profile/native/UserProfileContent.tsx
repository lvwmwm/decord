// Module ID: 12634
// Function ID: 12635
// Name: UserProfileContent
// Dependencies: [32, 19, 17, 7637, 8239, 2067, 4479, 1372, 7605, 7035, 7628, 6629, 1074, 6572, 2042, 21, 7687, 504, 4800, 10611, 1981, 10578, 10574, 7635, 6583, 9195, 4678, 7363, 12635, 1115, 12117, 12636, 4771, 7688, 4988, 6610, 4527, 10614, 9226, 12570, 5281, 9713, 576, 8761, 12638, 12639, 8127, 12650, 7676, 7689, 1613, 12637, 12656, 12657, 6729, 10612, 7614, 10653, 7642, 12658, 7673, 7684, 8238, 12659, 12458, 12459, 12640, 12660, 12661, 12662, 12663, 12664, 12124, 12665, 12572, 12670, 10777, 6606, 12622, 12671, 12625, 12676, 12681, 9083, 7702, 7690, 12687, 4566, 12544, 12688, 12689, 12694, 12695, 6577, 12111, 12113, 12700, 2]

// Module 12634 (UserProfileContent)
import Constants2 from "Constants" /* 1074 */;
import intl5 from "intl" /* 1115 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6572 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import Constants3 from "Constants" /* 7628 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 7642 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 7687 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 8127 */;
import closeVoicePanelsDefault from "closeVoicePanels" /* 8761 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9195 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 10777 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 12117 */;
import ProvisionalAccountExplainer from "ProvisionalAccountExplainer" /* 12124 */;
import UserProfileActivityDefault from "UserProfileActivity" /* 12572 */;
import UserProfileActivityTabDefault from "UserProfileActivityTab" /* 12650 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 12658 */;
import UserProfilePrivateInfoBannerDefault from "UserProfilePrivateInfoBanner" /* 12664 */;
import UserProfileDismissibleUpsellsDefault from "UserProfileDismissibleUpsells" /* 12665 */;
import UserProfileConnections from "UserProfileConnections" /* 12671 */;
import UserProfileWishlistGrid from "UserProfileWishlistGrid" /* 12676 */;
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid" /* 12681 */;
import UserProfileIncomingFriendRequestDefault from "UserProfileIncomingFriendRequest" /* 12689 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7637 */;
import WishlistStore from "WishlistStore" /* 8239 */;
import GuildStore from "GuildStore" /* 2067 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 7605 */;
import UserProfileStore from "UserProfileStore" /* 7035 */;
import Constants from "Constants" /* 6629 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const UserProfileWishlistGridDefault = UserProfileWishlistGrid;
let dependencyMap;

let closure_15;
let closure_16;
let closure_20;
let closure_21;
let closure_22;
let hasOwnProperty;
let metroRequire;
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
  const tmp3 = guildId(channelId[16])();
  let obj = user(channelId[17]);
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
    obj.openLazy(asyncRequire(10611, dependencyMap.paths), "UserProfileCustomStatusActionSheet", obj2, "stack");
  }, items2);
  const useRef = react.useRef;
  if (null == customStatusActivity) {
    tmp7 = null;
    if (stateFromStores) {
      tmp7 = null;
      if (!isPreviewingChanges) {
        tmp7 = tmp(tmp2[21])();
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
  const tmp10 = closure_20;
  const tmpResult = guildId(channelId[22]);
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
  let obj = user(newestAnalyticsLocation[23]);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  newestAnalyticsLocation = trackUserProfileAction(newestAnalyticsLocation[24])().newestAnalyticsLocation;
  let obj2 = trackUserProfileAction(newestAnalyticsLocation[26]);
  const userDisplayName = obj2.useName(user);
  const obj3 = {
    size: "sm",
    variant: "secondary-overlay",
    icon: closure_20(user(newestAnalyticsLocation[28]).UserCheckIcon, { size: "sm", color: "white" }),
    accessibilityLabel: intl.string(user(newestAnalyticsLocation[29]).t.cvSt1J),
    onPress() {
      const obj = UserProfileAlertUtils;
      const obj2 = { userDisplayName, onConfirm: handleConfirm };
      obj.confirmRemoveFriend(obj2);
    }
  };
  const IconButton = user(newestAnalyticsLocation[27]).IconButton;
  intl = user(newestAnalyticsLocation[29]).intl;
  return closure_20(IconButton, obj3);
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
    obj.openLazy(asyncRequire(12636, dependencyMap.paths), "UserProfileGameFriendActionSheet", obj2, "stack");
  }, items);
  let obj = { size: "sm", variant: "secondary-overlay", icon: closure_20(user(channelId[32]).UserPlatformIcon, { size: "sm", color: "white" }), accessibilityLabel: intl.string(user(channelId[29]).t.cvSt1J), onPress: callback };
  const IconButton = user(channelId[27]).IconButton;
  intl = user(channelId[29]).intl;
  return closure_20(IconButton, obj);
}
class PrimaryInfo {
  constructor(arg0) {
    let badgeContainerBackground;
    let badgesOverride;
    let channelId;
    let displayNameOverride;
    let displayProfile;
    let fn;
    let guildId;
    let intl;
    let isPreviewingChanges;
    let pendingDisplayNameStyles;
    let pronounsOverride;
    let style;
    let tmp12;
    let tmp13;
    let user;
    ({ user, guildId, displayProfile, displayNameOverride, pronounsOverride, badgesOverride, isPreviewingChanges } = arg0);
    let trackUserProfileAction;
    ({ channelId, pendingDisplayNameStyles, style, badgeContainerBackground } = arg0);
    let obj = trackUserProfileAction(4678);
    const userTag = obj.useUserTag(user);
    const tmp4 = trackUserProfileAction(7688)(displayProfile);
    let obj2 = trackUserProfileAction(4988);
    const name = obj2.useName(guildId, channelId, user);
    let tmp6 = name;
    const tmp = trackUserProfileAction;
    if (null != displayNameOverride) {
      tmp6 = name;
      if (displayNameOverride.trim().length > 0) {
        tmp6 = displayNameOverride;
      }
    }
    const obj3 = userTag(7635);
    trackUserProfileAction = obj3.useUserProfileAnalyticsContext().trackUserProfileAction;
    const items = [trackUserProfileAction, userTag];
    const callback = react.useCallback(() => {
      trackUserProfileAction({ action: "COPY_USERNAME" });
      const obj = ClipboardUtils;
      obj.copy(userTag);
      const obj2 = ToastUtils;
      const result = obj2.presentUsernameCopied();
    }, items);
    const obj4 = { user, guildId, displayName: tmp6, pronouns: pronounsOverride, badges: badgesOverride, style, badgeContainerBackground, onPressDisplayName: tmp12, displayNameAccessibilityHint: intl.string(userTag(1115).t.y5MwJy), onPressUserTag: tmp13, onPressPronouns: fn, showBadgeToastOnPress: !isPreviewingChanges, canOpenBadgeDirectory: true, pendingDisplayNameStyles };
    const tmp9 = closure_20;
    const tmpResult = tmp(10614);
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
    tmp12 = undefined;
    if (!isPreviewingChanges) {
      tmp12 = callback;
    }
    intl = tmp7(1115).intl;
    tmp13 = undefined;
    if (!isPreviewingChanges) {
      tmp13 = callback;
    }
    fn = undefined;
    if (!isPreviewingChanges) {
      fn = () => {
        trackUserProfileAction({ action: "PRESS_PRONOUNS" });
        const obj = ToastUtils;
        obj.presentUserPronouns();
      };
    }
    return tmp9(tmpResult, obj4);
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
  const tmp3 = trackUserProfileAction(7687)();
  let obj = guildId(7635);
  const tmp = trackUserProfileAction;
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const items = [GuildStore];
  const obj2 = guildId(504);
  const stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  dependencyMap = trackUserProfileAction(9226)();
  let closure_3 = trackUserProfileAction(9226)({ guild: stateFromStores });
  const obj3 = { style: tmp3.primaryButtons, maxWidth: ACTION_SHEET_MAX_WIDTH, primaryButton: closure_20(Button, obj4), secondaryButton: tmp6Result };
  obj4 = {
    variant: "primary",
    icon: closure_20(PencilIcon, obj5),
    text: stringResult,
    onPress() {
      trackUserProfileAction({ action: "EDIT_PROFILE" });
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideAllActionSheets();
      closeVoicePanelsDefault();
      closure_2();
    },
    grow: true
  };
  const tmp7 = trackUserProfileAction(12570);
  Button = guildId(5281).Button;
  obj5 = { size: "sm", color: trackUserProfileAction(576).colors.WHITE };
  PencilIcon = guildId(9713).PencilIcon;
  if (null != stateFromStores) {
    const intl2 = tmp4(1115).intl;
    stringResult = intl2.string(tmp4(1115).t.HmFaFB);
  } else {
    const intl = tmp4(1115).intl;
    stringResult = intl.string(tmp4(1115).t.s5vZlQ);
  }
  tmp6Result = undefined;
  if (null != stateFromStores) {
    const obj6 = {
      variant: "primary",
      icon: closure_20(PencilIcon2, obj7),
      text: intl3.string(guildId(1115).t["PKQB/H"]),
      onPress() {
          trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideAllActionSheets();
          closeVoicePanelsDefault();
          closure_3();
        },
      grow: true
    };
    const Button2 = tmp4(5281).Button;
    obj7 = { size: "sm", color: tmp(576).colors.WHITE };
    PencilIcon2 = tmp4(9713).PencilIcon;
    intl3 = tmp4(1115).intl;
    tmp6Result = tmp6(Button2, obj6);
  }
  return closure_20(tmp7, obj3);
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
  const tmp5 = metroRequire;
  if (isCurrentUser) {
    tmp6 = closure_20(tmp(12638), {});
  }
  items1 = [tmp6, , ];
  if (isCurrentUser) {
    isCurrentUser = closure_20(tmp(12639), {});
  }
  items1[1] = isCurrentUser;
  items1[2] = closure_20(UserProfileWidgetsBoardDefault, { userId, isVisible, cardStyle: items });
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
  const obj = { style: items1, children: closure_20(UserProfileActivityTabDefault, { user, currentUser, guildId, channelId, cardStyle: items }) };
  items1 = [, ];
  ({ cards: arr2[0], profileContent: arr2[1] } = tmp);
  return closure_20(metroRequire, obj);
}
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
const UserProfileSections = Constants3.UserProfileSections;
({ PROFILE_CONTENT_BOTTOM_PADDING: closure_15, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_16 } = Constants);
let RelationshipTypes = Constants2.RelationshipTypes;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: closure_20, jsxs: closure_21, Fragment: closure_22 } = Fragment);
const memoResult = react.memo(function UserProfileContent(user) {
  let LayerScope;
  let _location;
  let _undefined;
  let activeProfileTabSection;
  let activeProfileTabSectionIndex;
  let avatarBackground;
  let avatarDecorationOverride;
  let bannerAnimatedStyle;
  let bannerImageAnimatedStyle;
  let blurAnimatedProps;
  let c30;
  let closure_17;
  let contentAnimatedStyle;
  let disableCalls;
  let disableMessage;
  let disableStatus;
  let fillHeight;
  let handleTabChange;
  let id3;
  let id4;
  let id5;
  let initialSection;
  let isPreviewingChanges;
  let items22;
  let items26;
  let items27;
  let items28;
  let items29;
  let measureFill;
  let navigateToPremium;
  let obj18;
  let obj33;
  let obj36;
  let originApplicationId;
  let pagerRef;
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
  let secondaryColor;
  let setActiveProfileTabSection;
  let showBlur;
  let statusBackground;
  let str;
  let theme;
  let tmp27;
  let tmp45;
  let tmp65Result;
  let tmp67;
  let tmp68;
  let tmp69;
  let tmp70;
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
  let isCurrentUser;
  let userProfileGameFriendApplicationIds;
  let name;
  let pendingBio;
  pendingBadgeDisplayOrder = undefined;
  let pendingBadgeHiddenBadges;
  RelationshipTypes = undefined;
  let stateFromStoresArray;
  let isBadgeManagementEnabled;
  let hasCustomProfileTheme;
  let containerBackground;
  let stateFromStores1;
  let stateFromStores2;
  let closure_24;
  let closure_25;
  let closure_26;
  let boardTabIndex;
  let activityTabIndex;
  let wishlistTabIndex;
  c30 = undefined;
  let handlePageContentSize;
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
  let obj9;
  let tmp = channel;
  let tmp2 = guildId;
  ({ disableMessage, disableStatus, location: _location, initialSection } = user);
  let tmp3 = channel(guildId[16])();
  let closure_8 = tmp3;
  const tmp4 = channel(guildId[48])(stateFromStoresArray);
  let tmp5 = channel(guildId[49])({ scrollPosition, bannerHeight: tmp4 });
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = tmp5);
  const bottom = channel(guildId[50])().bottom;
  let obj = user(guildId[23]);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj2 = user(guildId[17]);
  let items = [isCurrentUser];
  const stateFromStores = obj2.useStateFromStores(items, () => isCurrentUser.getCurrentUser());
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tmp9 = id === user.id;
  isCurrentUser = tmp9;
  let items1 = [stateFromStores];
  const tmp6Result = user(tmp2[17]);
  const stateFromStoresObject = tmp6Result.useStateFromStoresObject(items1, () => {
    const obj = { relationshipType: RelationshipStore.getRelationshipType(user.id), originApplicationId: RelationshipStore.getOriginApplicationId(user.id) };
    return obj;
  });
  ({ relationshipType, originApplicationId } = stateFromStoresObject);
  const tmp6Result24 = user(tmp2[51]);
  const incomingGameRelationshipsForUser = tmp6Result24.useIncomingGameRelationshipsForUser(user.id);
  const tmp6Result25 = user(tmp2[52]);
  const isGameFriends = tmp6Result25.useIsGameFriends(user.id);
  let obj3 = { userId: user.id };
  const tmp6Result26 = user(tmp2[53]);
  userProfileGameFriendApplicationIds = tmp6Result26.useUserProfileGameFriendApplicationIds(obj3);
  let id1;
  const useName = tmp(tmp2[34]).useName;
  tmp(tmp2[34]);
  if (channel != null) {
    id1 = channel.id;
  }
  name = useName(guildId, id1, user);
  let obj8 = showUserProfileActionSheet;
  let items2 = [guildId, user];
  const memo = showUserProfileActionSheet.useMemo(() => {
    if (null != guildId) {
      if (null != user) {
        const items = [tmp2.id];
        const obj = {};
        obj[tmp] = items;
      }
      return {};
    }
  }, items2);
  const tmp6Result27 = user(tmp2[54]);
  const subscribeGuildMembers = tmp6Result27.useSubscribeGuildMembers(memo, "UserProfileContent");
  const tmp18 = tmp(tmp2[55])(user.id);
  const items3 = [userProfileGameFriendApplicationIds];
  const tmp6Result28 = user(tmp2[17]);
  const stateFromStoresObject1 = tmp6Result28.useStateFromStoresObject(items3, () => userProfileGameFriendApplicationIds.getPendingChanges());
  pendingBio = stateFromStoresObject1.pendingBio;
  ({ pendingAccentColor, pendingThemeColors, pendingBadgeDisplayOrder } = stateFromStoresObject1);
  pendingBadgeHiddenBadges = stateFromStoresObject1.pendingBadgeHiddenBadges;
  ({ pendingBanner, pendingAvatar, pendingAvatarDecoration, pendingGlobalName, pendingPronouns, pendingLegacyUsernameDisabled, pendingDisplayNameStyles } = stateFromStoresObject1);
  let obj4 = { userId: user.id, image: pendingAvatar };
  const tmp6Result29 = user(tmp2[56]);
  const pendingAvatarSrc = tmp6Result29.getPendingAvatarSrc(obj4);
  const tmp21 = tmp(tmp2[33])(displayProfile, pendingLegacyUsernameDisabled);
  RelationshipTypes = tmp21;
  const items4 = [navigateToShop];
  const items5 = [user.id];
  const tmp6Result30 = user(tmp2[17]);
  stateFromStoresArray = tmp6Result30.useStateFromStoresArray(items4, () => BadgeDirectoryStore.getBadges(user.id), items5);
  const tmp6Result31 = user(tmp2[57]);
  isBadgeManagementEnabled = tmp6Result31.useIsBadgeManagementEnabled({ location: "UserProfileContent" });
  const items6 = [user.id, isBadgeManagementEnabled];
  const effect = showUserProfileActionSheet.useEffect(() => {
    const tmp = isBadgeManagementEnabled;
    if (tmp) {
      const tmp3 = BadgeDirectoryStore.hasCatalogFor(user.id) && !BadgeDirectoryStore.isCatalogStaleFor(user.id);
      if (!tmp3) {
        const obj2 = BadgeDirectoryActionCreators;
        const badgeDirectory = obj2.fetchBadgeDirectory(tmp2.id);
      }
    }
  }, items6);
  const items7 = [tmp21, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo1 = showUserProfileActionSheet.useMemo(() => {
    const obj = PendingBadgeSettings;
    const obj2 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
    return obj.getPendingProfileBadges(closure_17, stateFromStoresArray, obj2);
  }, items7);
  let obj5 = { user, displayProfile, pendingThemeColors: tmp27 };
  tmp27 = undefined;
  const tmpResult5 = tmp(tmp2[60]);
  if (isPreviewingChanges) {
    tmp27 = pendingThemeColors;
  }
  const tmpResult1Result = tmpResult5(obj5);
  const primaryColor = tmpResult1Result.primaryColor;
  hasCustomProfileTheme = tmp29;
  ({ theme, secondaryColor } = tmpResult1Result);
  const tmp6Result32 = user(tmp2[61]);
  const userProfileColors = tmp6Result32.useUserProfileColors({ theme, primaryColor, secondaryColor });
  containerBackground = userProfileColors.containerBackground;
  ({ avatarBackground, statusBackground } = userProfileColors);
  const ref = obj8.useRef(null);
  const ref1 = obj8.useRef(null);
  const items8 = [name];
  const tmp6Result33 = user(tmp2[17]);
  stateFromStores1 = tmp6Result33.useStateFromStores(items8, () => UserProfileStore.getFirstWishlistId(user.id));
  let obj6 = { wishlistId: stateFromStores1, userId: user.id };
  const tmp6Result34 = user(tmp2[62]);
  const fetchWishlist = tmp6Result34.useFetchWishlist(obj6);
  const items9 = [closure_8];
  const items10 = [stateFromStores1];
  const tmp6Result35 = user(tmp2[17]);
  stateFromStores2 = tmp6Result35.useStateFromStores(items9, () => {
    let wishlist = null;
    if (null != stateFromStores1) {
      wishlist = WishlistStore.getWishlist(tmp);
    }
    return wishlist;
  }, items10);
  const items11 = [stateFromStores2, tmp9];
  let tmp36 = tmp9;
  if (!tmp36) {
    let tmp37 = null != stateFromStores2;
    if (tmp37) {
      tmp37 = arr14.length > 0;
    }
    tmp36 = tmp37;
  }
  closure_24 = tmp36;
  const tmp6Result36 = user(tmp2[64]);
  const displayableBoardWidgets = tmp6Result36.useDisplayableBoardWidgets(user.id);
  const tmp6Result37 = user(tmp2[65]);
  const isMobileGameCollectionExperimentEnabled = tmp6Result37.useIsMobileGameCollectionExperimentEnabled("UserProfileContent");
  let tmp40 = tmp9;
  const useCanConjureVibegrationsCustomWidget = tmp6(tmp2[66]).useCanConjureVibegrationsCustomWidget;
  user(tmp2[66]);
  if (tmp9) {
    tmp40 = isMobileGameCollectionExperimentEnabled;
  }
  const tmp41 = displayableBoardWidgets.length > 0 || useCanConjureVibegrationsCustomWidget("UserProfileContent", tmp40);
  closure_25 = tmp41;
  const tmp6Result39 = user(tmp2[67]);
  const tmp42 = tmp6Result39.useIsRecentActivityMobileEnabled("UserProfileContent") && null != stateFromStores;
  closure_26 = tmp42;
  const tmp6Result40 = user(tmp2[68]);
  const profileTabIndices = tmp6Result40.useProfileTabIndices(tmp41, tmp42, tmp36);
  boardTabIndex = profileTabIndices.boardTabIndex;
  activityTabIndex = profileTabIndices.activityTabIndex;
  wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  [tmp45, c30] = displayProfile(obj8.useState(0), 2);
  displayProfile(obj8.useState(0), 2);
  const callback = obj8.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp6Result41 = user(tmp2[69]);
  const pageHeights1 = tmp6Result41.usePageHeights();
  handlePageContentSize = pageHeights1.handlePageContentSize;
  const pageHeights = pageHeights1.pageHeights;
  const tmp6Result42 = user(tmp2[70]);
  const wishlistViewerCoachmark = tmp6Result42.useWishlistViewerCoachmark({ isCurrentUser: tmp9, shouldShowWishlistTab: tmp36 });
  isVisible = wishlistViewerCoachmark.isVisible;
  markAsDismissed = wishlistViewerCoachmark.markAsDismissed;
  const items12 = [trackUserProfileAction, isVisible, markAsDismissed];
  const callback1 = obj8.useCallback((section) => {
    const obj = { action: "PRESS_SECTION", section };
    trackUserProfileAction(obj);
    const tmp2 = section === UserProfileSections.WISHLIST && isVisible;
    if (tmp2) {
      markAsDismissed(ContentDismissActionType.INDIRECT_ACTION);
    }
  }, items12);
  const tmp6Result43 = user(tmp2[68]);
  const profileSectionTabs = tmp6Result43.useProfileSectionTabs({ initialUserProfileSection: initialSection, wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange: callback1 });
  ({ activeProfileTabSection, setActiveProfileTabSection } = profileSectionTabs);
  restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  isVisible = tmp51;
  isVisible2 = tmp52;
  const items13 = [navigateToPremium];
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  callback2 = obj8.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    if (navigateToPremium != null) {
      navigateToPremium();
    }
  }, items13);
  const items14 = [navigateToShop];
  callback3 = obj8.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    if (navigateToShop != null) {
      navigateToShop();
    }
  }, items14);
  const items15 = [user, stateFromStores, containerBackground, tmp3, isPreviewingChanges, callback2, callback3, null != primaryColor, guildId, userProfileGameFriendApplicationIds, displayProfile, name, pendingBio, channel, showUserProfileActionSheet];
  callback4 = obj8.useCallback(() => {
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
        const tmp39 = metroRequire;
        if (displayProfile != null) {
          _private = tmp40.private;
        }
        if (_private) {
          const obj = { username: name, containerBackground: tmp37 };
          _private = hasCustomProfileTheme(UserProfilePrivateInfoBannerDefault, obj);
        }
        items2 = [_private, , , , , , , , , , ];
        let isProvisional = tmp.isProvisional;
        if (isProvisional) {
          const obj4 = { style: items, userId: user.id, iconSize: 16 };
          isProvisional = hasCustomProfileTheme(ProvisionalAccountExplainer.UserProfileProvisionalAccountExplainerCard, obj4);
        }
        items2[1] = isProvisional;
        let tmp10 = tmp.id === tmp35.id && !isPreviewingChanges;
        if (tmp10) {
          const obj5 = { navigateToPremium: callback2, navigateToShop: callback3, hasCustomProfileTheme };
          tmp10 = hasCustomProfileTheme(UserProfileDismissibleUpsellsDefault, obj5);
        }
        items2[2] = tmp10;
        const obj6 = { user, currentUser: stateFromStores, guildId, style: items };
        items2[3] = hasCustomProfileTheme(UserProfileActivityDefault, obj6);
        let tmp18Result = userProfileGameFriendApplicationIds.length > 0;
        if (tmp18Result) {
          const obj7 = { userId: user.id, applicationIds: tmp22 };
          tmp18Result = tmp18(tmp19(12670), obj7);
        }
        items2[4] = tmp18Result;
        obj9 = { userId: user.id, displayProfile, pendingBio: tmp26 };
        tmp26 = undefined;
        const tmp19Result = UserProfileAboutMeCardDefault;
        if (isPreviewingChanges) {
          tmp26 = pendingBio;
        }
        items2[5] = hasCustomProfileTheme(tmp19Result, obj9);
        let tmp18Result4 = null != tmp21;
        if (tmp18Result4) {
          const obj10 = { userId: user.id, guildId };
          tmp18Result4 = tmp18(tmp19(6606), obj10);
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
          tmp18Result5 = tmp18(tmp19(12622), obj11);
        }
        items2[7] = tmp18Result5;
        const obj12 = { userId: user.id };
        items2[8] = hasCustomProfileTheme(UserProfileConnections.UserProfileAccountConnectionsCard, obj12);
        const obj13 = { userId: user.id };
        items2[9] = hasCustomProfileTheme(UserProfileConnections.UserProfileApplicationRoleConnectionsCard, obj13);
        let tmp18Result6 = !tmp25;
        if (tmp18Result6) {
          const obj25 = { userId: user.id, onBack: showUserProfileActionSheet };
          tmp18Result6 = tmp18(tmp19(12625), obj25);
        }
        items2[10] = tmp18Result6;
        return tmp38(tmp39, obj3);
      }
    }
    return null;
  }, items15);
  const items16 = [tmp3.profileContent, stateFromStores1, activeProfileTabSection === pendingBio.WISHLIST, user.id, tmp9];
  callback5 = obj8.useCallback(() => {
    let items;
    let tmp10;
    let tmp9;
    const obj = { style: closure_8.profileContent, children: items };
    const tmp = closure_21;
    const tmp2 = metroRequire;
    if (null == stateFromStores1) {
      tmp10 = hasCustomProfileTheme(UserProfileWishlistGrid.WishlistEmptyState, {});
      tmp9 = hasCustomProfileTheme;
    } else {
      tmp9 = hasCustomProfileTheme;
      const obj2 = { wishlistId: stateFromStores1, maxWidth: ACTION_SHEET_MAX_WIDTH, isVisible };
      tmp10 = hasCustomProfileTheme(UserProfileWishlistGridDefault, obj2);
    }
    items = [tmp10, ];
    let tmp9Result = isCurrentUser;
    if (tmp9Result) {
      const obj3 = { userId: user.id, wishlistId: stateFromStores1, maxWidth: ACTION_SHEET_MAX_WIDTH };
      tmp9Result = tmp9(UserProfileWishlistSuggestionsGridDefault, obj3);
    }
    items[1] = tmp9Result;
    return tmp(tmp2, obj);
  }, items16);
  const items17 = [handlePageContentSize, callback4, callback5, tmp41, tmp42, tmp36, boardTabIndex, activityTabIndex, wishlistTabIndex, user, stateFromStores, guildId, , , , ];
  let id2;
  const useMemo = obj8.useMemo;
  if (channel != null) {
    id2 = channel.id;
  }
  items17[12] = id2;
  items17[13] = activeProfileTabSection === pendingBio.WIDGETS;
  items17[14] = tmp9;
  items17[15] = containerBackground;
  const memo2 = useMemo(() => {
    let id;
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let obj10;
    let obj2;
    let obj4;
    let obj5;
    let obj7;
    let obj8;
    let tmp16;
    const obj = { id: "main", label: intl.string(intl5.t.LXw470), page: hasCustomProfileTheme(hasOwnProperty, obj2) };
    intl = intl5.intl;
    const items = [obj];
    obj2 = {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return handlePageContentSize(0, arg0, arg1);
      },
      children: callback4()
    };
    const tmp5 = closure_25;
    if (tmp5) {
      const push = items.push;
      const obj3 = { id: "board", label: intl2.string(intl5.t.laViwx), page: hasCustomProfileTheme(hasOwnProperty, obj4, boardTabIndex) };
      intl2 = tmp(1115).intl;
      obj4 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(boardTabIndex, arg0, arg1);
          },
        children: hasCustomProfileTheme(UserProfileWidgetsBoardContainer, obj5)
      };
      obj5 = { userId: user.id, isVisible: isVisible2, isCurrentUser, containerBackground };
      push(obj3);
    }
    const tmp13 = closure_26 && null != stateFromStores;
    if (tmp13) {
      const push2 = items.push;
      const obj6 = { id: "activity", label: intl3.string(intl5.t.chq59f), page: hasCustomProfileTheme(hasOwnProperty, obj7, activityTabIndex) };
      intl3 = tmp(1115).intl;
      obj7 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(activityTabIndex, arg0, arg1);
          },
        children: hasCustomProfileTheme(tmp16, obj8)
      };
      obj8 = { user, currentUser: stateFromStores, guildId, channelId: id, containerBackground };
      id = undefined;
      tmp16 = UserProfileActivityTabContainer;
      if (channel != null) {
        id = channel.id;
      }
      push2(obj6);
    }
    const tmp25 = closure_24;
    if (tmp25) {
      const push3 = items.push;
      obj9 = { id: "wishlist", label: intl4.string(intl5.t["7lZ31J"]), page: hasCustomProfileTheme(hasOwnProperty, obj10, wishlistTabIndex) };
      intl4 = tmp(1115).intl;
      obj10 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(wishlistTabIndex, arg0, arg1);
          },
        children: callback5()
      };
      push3(obj9);
    }
    return items;
  }, items17);
  const tmp6Result44 = user(tmp2[83]);
  let obj7 = { pageWidth: tmp45, defaultIndex: activeProfileTabSectionIndex, itemSpacing: tmp(tmp2[42]).space.PX_24, items: memo2, onPageChange: handleTabChange };
  segmentedControlState = tmp6Result44.useSegmentedControlState(obj7);
  const tmp6Result45 = user(tmp2[69]);
  const pagerFillHeight = tmp6Result45.usePagerFillHeight(scrollPosition);
  const items18 = [segmentedControlState, restoreActiveIndex];
  ({ pagerRef, fillHeight, measureFill } = pagerFillHeight);
  const layoutEffect = obj8.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items18);
  const items19 = [segmentedControlState, wishlistTabIndex, markAsDismissed, setActiveProfileTabSection];
  const tmp6Result46 = user(tmp2[69]);
  const pagesHeightStyle = tmp6Result46.usePagesHeightStyle(segmentedControlState, pageHeights, fillHeight);
  if (null != user) {
    if (null != stateFromStores) {
      let OpenableUserProfileAvatar;
      let num2;
      obj9 = { backgroundColor: containerBackground };
      if (isPreviewingChanges) {
        OpenableUserProfileAvatar = tmp(tmp104);
      } else {
        OpenableUserProfileAvatar = tmp6(tmp104).OpenableUserProfileAvatar;
      }
      let obj10 = { user, displayProfile, bannerHeight: tmp4, pendingBanner: tmp67, pendingAvatarSrc: tmp68, pendingAccentColor: tmp69, pendingThemeColors: tmp70, disableInteraction: isPreviewingChanges, bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur, privateBanner: tmp65Result };
      tmp67 = undefined;
      const tmp64 = stateFromStores1;
      const tmpResult6 = tmp(tmp2[85]);
      if (isPreviewingChanges) {
        tmp67 = pendingBanner;
      }
      tmp68 = undefined;
      if (isPreviewingChanges) {
        tmp68 = pendingAvatarSrc;
      }
      tmp69 = undefined;
      if (isPreviewingChanges) {
        if (null != pendingAccentColor) {
          tmp69 = pendingAccentColor;
        }
      }
      tmp70 = undefined;
      if (isPreviewingChanges) {
        if (null != pendingThemeColors) {
          tmp70 = pendingThemeColors;
        }
      }
      let _private;
      if (displayProfile != null) {
        _private = displayProfile.private;
      }
      tmp65Result = undefined;
      if (true === _private) {
        let obj11 = { primaryColor };
        tmp65Result = tmp65(tmp(tmp2[86]), obj11);
      }
      const items20 = [hasCustomProfileTheme(tmpResult6, obj10), , ];
      let tmp63Result = !isPreviewingChanges;
      if (tmp63Result) {
        const items21 = [tmp3.bannerButtons, , ];
        let _private1;
        const View = tmp(tmp2[87]).View;
        if (displayProfile != null) {
          _private1 = displayProfile.private;
        }
        if (_private1) {
          _private1 = tmp3.bannerButtonsWithPrivateBanner;
        }
        let obj12 = { style: items21, children: items22 };
        items21[1] = _private1;
        items21[2] = bannerAnimatedStyle;
        let tmp75 = null;
        if (null != stateFromStores) {
          tmp75 = null;
          if (user.id !== stateFromStores.id) {
            tmp75 = null;
            if (!user.bot) {
              let tmp65Result6;
              if (relationshipType === RelationshipTypes.FRIEND) {
                let obj13 = { user };
                tmp65Result6 = tmp65(closure_24, obj13);
              } else {
                tmp65Result6 = null;
                if (isGameFriends) {
                  const obj14 = { user };
                  tmp65Result6 = tmp65(closure_25, obj14);
                }
              }
              tmp75 = tmp65Result6;
            }
          }
        }
        items22 = [tmp75, ];
        const obj15 = { user, currentUser: stateFromStores, displayProfile, channel };
        items22[1] = hasCustomProfileTheme(tmp(tmp2[88]), obj15);
        tmp63Result = tmp63(View, obj12);
      }
      items20[1] = tmp63Result;
      const obj16 = { style: contentAnimatedStyle, children: null };
      const obj17 = { user, guildId, disableStatus, pendingAvatarSrc: tmp80, pendingAvatarDecoration: tmp81, backgroundColor: avatarBackground, statusStyle: obj18 };
      tmp80 = undefined;
      const View2 = tmp(tmp2[87]).View;
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
      obj18 = { backgroundColor: statusBackground };
      const items23 = [hasCustomProfileTheme(OpenableUserProfileAvatar, obj17), ];
      const items24 = [tmp3.profileContentWrapper, ];
      if (!tmp9) {
        num2 = 0;
        if (null == tmp18) {
          num2 = pendingBadgeHiddenBadges;
        }
      } else {
        num2 = 0;
      }
      const obj19 = { style: items24, children: null };
      const obj20 = { paddingTop: num2, paddingBottom: bottom + pendingBadgeDisplayOrder };
      items24[1] = obj20;
      const obj21 = { customStatusActivity: tmp18, user, guildId, channelId: id3, hasCustomProfileTheme: null != primaryColor, showUserProfileActionSheet, isPreviewingChanges, bubbleRef: ref };
      id3 = undefined;
      const tmp84 = stateFromStores2;
      if (channel != null) {
        id3 = channel.id;
      }
      const items25 = [hasCustomProfileTheme(tmp84, obj21), , ];
      let tmp63Result2 = null;
      if (null != stateFromStores) {
        const obj22 = { style: items26, children: items27 };
        items26 = [, ];
        ({ primaryInfo: arr31[0], profileContent: arr31[1] } = tmp3);
        const obj23 = { user, channelId: id4, guildId, displayProfile, displayNameOverride: tmp89, pronounsOverride: tmp90, badgesOverride: tmp91, pendingDisplayNameStyles: tmp92, badgeContainerBackground: containerBackground, isPreviewingChanges };
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
        items27 = [hasCustomProfileTheme(tmp87, obj23), , , , , , ];
        let tmp65Result7 = user.id !== stateFromStores.id;
        if (tmp65Result7) {
          const obj24 = { user, guildId };
          tmp65Result7 = tmp65(tmp(tmp2[89]), obj24);
        }
        items27[1] = tmp65Result7;
        let tmp65Result8 = relationshipType === RelationshipTypes.PENDING_INCOMING;
        const tmp94 = RelationshipTypes;
        if (tmp65Result8) {
          let obj25 = { user, channelId: id5, guildId, applicationId: originApplicationId, style: obj9, showUserProfile: showUserProfileActionSheet };
          id5 = undefined;
          const tmpResult7 = tmp(tmp2[90]);
          if (channel != null) {
            id5 = channel.id;
          }
          tmp65Result8 = tmp65(tmpResult7, obj25);
        }
        items27[2] = tmp65Result8;
        items27[3] = incomingGameRelationshipsForUser.map((applicationId) => {
          let id;
          const obj = { user, isGameRelationship: true, applicationId: applicationId.applicationId, channelId: id, guildId, style: obj9, showUserProfile: showUserProfileActionSheet };
          id = undefined;
          const tmp = closure_20;
          const tmp2 = UserProfileIncomingFriendRequestDefault;
          if (channel != null) {
            id = channel.id;
          }
          return tmp(tmp2, obj, applicationId.applicationId);
        });
        const obj26 = { user, style: obj9 };
        items27[4] = hasCustomProfileTheme(tmp(tmp2[91]), obj26);
        let tmp65Result9 = user.id === stateFromStores.id && !isPreviewingChanges;
        if (tmp65Result9) {
          const obj27 = { guildId };
          tmp65Result9 = tmp65(boardTabIndex, obj27);
        }
        items27[5] = tmp65Result9;
        let tmp65Result10 = user.id !== stateFromStores.id;
        if (tmp65Result10) {
          const obj28 = { user, disableCalls, disableMessage, location: _location, hasCustomProfileTheme: null != primaryColor, style: tmp3.primaryButtons };
          const tmpResult8 = tmp(tmp2[92]);
          if (!disableCalls) {
            disableCalls = relationshipType === tmp94.BLOCKED;
          }
          if (!disableCalls) {
            disableCalls = user.isProvisional;
          }
          tmp65Result10 = tmp65(tmpResult8, obj28);
        }
        items27[6] = tmp65Result10;
        tmp63Result2 = tmp63(tmp82, obj22);
      }
      items25[1] = tmp63Result2;
      if (!tmp36) {
        if (!tmp41) {
          let callback4Result;
          if (!tmp42) {
            callback4Result = callback4();
          }
          const obj29 = { children: items20 };
          items25[2] = callback4Result;
          obj19.children = items25;
          items23[1] = containerBackground(navigateToPremium, obj19);
          obj16.children = items23;
          items20[2] = containerBackground(View2, obj16);
          return containerBackground(tmp64, obj29);
        }
      }
      const obj30 = { onLayout: callback, children: containerBackground(LayerScope, obj33) };
      const obj31 = { style: tmp3.profileTablist, children: items28 };
      LayerScope = tmp6(tmp2[93]).LayerScope;
      const obj32 = { state: segmentedControlState, variant: str };
      str = undefined;
      const Tabs = tmp6(tmp2[94]).Tabs;
      if (null != primaryColor) {
        str = "overlay";
      }
      obj33 = { children: items29 };
      items28 = [hasCustomProfileTheme(Tabs, obj32), ];
      const obj34 = { ref: ref1, style: rect, collapsable: false, pointerEvents: "box-none" };
      rect = { position: "absolute", left: `${Math.max(wishlistTabIndex, 0) / arr22.length * 100}%`, top: 0, right: 0, bottom: 0 };
      const _Math = Math;
      items28[1] = hasCustomProfileTheme(navigateToPremium, obj34);
      items29 = [containerBackground(navigateToPremium, obj31), , ];
      const obj35 = { ref: pagerRef, onLayout: measureFill, style: pagesHeightStyle, children: hasCustomProfileTheme(user(tmp2[95]).SegmentedControlPages, obj36) };
      const View3 = tmp(tmp2[87]).View;
      obj36 = { state: segmentedControlState };
      items29[1] = hasCustomProfileTheme(View3, obj35);
      const obj37 = { anchorRef: ref1, isVisible, markAsDismissed, onViewWishlist: tmp62 };
      items29[2] = hasCustomProfileTheme(tmp(tmp2[96]), obj37);
      callback4Result = tmp65(tmp82, obj30);
    }
  }
  return null;
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileContent.tsx");

export default memoResult;
export { PrimaryInfo };
