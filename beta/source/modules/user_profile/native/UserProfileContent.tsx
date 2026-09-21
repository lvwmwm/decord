// Module ID: 13356
// Function ID: 13357
// Name: UserProfileContent
// Dependencies: [32, 19, 17, 8466, 9055, 2067, 4409, 1376, 8434, 7862, 8457, 7455, 1078, 7398, 2042, 21, 8515, 504, 4725, 11403, 1984, 11395, 11391, 558, 568, 8464, 7409, 10009, 4603, 13357, 1119, 8178, 12784, 13358, 4696, 8516, 4910, 7436, 4457, 11407, 10001, 9568, 10626, 580, 5188, 13292, 13360, 13361, 8943, 13372, 8504, 8517, 1616, 13359, 13378, 13379, 7555, 11404, 8443, 13380, 8501, 8512, 9054, 13381, 13194, 13195, 13362, 13382, 13383, 13384, 13385, 13386, 12791, 13387, 13294, 13392, 11461, 7432, 13344, 13393, 13347, 13398, 13404, 9868, 13410, 13411, 13416, 13417, 8530, 13422, 8518, 4497, 13423, 7403, 12778, 12780, 13439, 2]

// Module 13356 (UserProfileContent)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ToastUtils from "ToastUtils" /* 4457 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import ClipboardUtils from "ClipboardUtils" /* 7436 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8515 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 8943 */;
import closeVoicePanelsDefault from "closeVoicePanels" /* 9568 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 10009 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 11461 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 12784 */;
import ProvisionalAccountExplainer from "ProvisionalAccountExplainer" /* 12791 */;
import UserProfileActivityDefault from "UserProfileActivity" /* 13294 */;
import UserProfileActivityTabDefault from "UserProfileActivityTab" /* 13372 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 13380 */;
import WishlistUtils from "WishlistUtils" /* 13381 */;
import UserProfilePrivateInfoBannerDefault from "UserProfilePrivateInfoBanner" /* 13386 */;
import UserProfileDismissibleUpsellsDefault from "UserProfileDismissibleUpsells" /* 13387 */;
import UserProfileConnections from "UserProfileConnections" /* 13393 */;
import UserProfileWishlistGrid from "UserProfileWishlistGrid" /* 13398 */;
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid" /* 13404 */;
import UserProfileMutualsDefault from "UserProfileMutuals" /* 13410 */;
import UserProfileIncomingFriendRequestDefault from "UserProfileIncomingFriendRequest" /* 13411 */;
import UserProfileRemediatedNoticeDefault from "UserProfileRemediatedNotice" /* 13416 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8466 */;
import WishlistStore from "WishlistStore" /* 9055 */;
import GuildStore from "GuildStore" /* 2067 */;
import RelationshipStore from "RelationshipStore" /* 4409 */;
import UserStore from "UserStore" /* 1376 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8434 */;
import UserProfileStore from "UserProfileStore" /* 7862 */;

const UserProfileWishlistGridDefault = UserProfileWishlistGrid;

require = fn;
function CustomStatusBubble(guildId) {
  ({ customStatusActivity, user } = guildId);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  const isPreviewingChanges = guildId.isPreviewingChanges;
  ({ hasCustomProfileTheme, bubbleRef } = guildId);
  const tmp3 = guildId(channelId[16])();
  const items = [UserStore];
  const items1 = [user];
  let stateFromStores = user(channelId[17]).useStateFromStores(items, () => {
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id === user.id;
  }, items1);
  const items2 = [channelId, guildId, user];
  let tmp7 = null;
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11403, dependencyMap.paths), "UserProfileCustomStatusActionSheet", { user, guildId, channelId }, "stack");
  }, items2);
  if (null == customStatusActivity) {
    tmp7 = null;
    if (stateFromStores) {
      tmp7 = null;
      if (!isPreviewingChanges) {
        tmp7 = tmp(tmp2[21])();
      }
    }
  }
  const ref = noop.useRef(tmp7);
  let labelResult;
  if (null != ref.current) {
    const current = ref.current;
    labelResult = current.label();
  }
  const obj2 = { ref: bubbleRef, customStatusActivity, hasCustomProfileTheme, editEnabled: null, onPressTruncatedStatus: null, style: null, emojiOnlyStyle: null, placeholderText: null, prompt: null };
  const obj = user(channelId[17]);
  const tmp10 = closure_20;
  if (stateFromStores) {
    stateFromStores = !isPreviewingChanges;
  }
  obj2.editEnabled = stateFromStores;
  let tmp12;
  if (!isPreviewingChanges) {
    tmp12 = callback;
  }
  obj2.onPressTruncatedStatus = tmp12;
  const items3 = [, ];
  ({ customStatusBubble: arr4[0], customStatusBubbleInset: arr4[1] } = tmp3);
  obj2.style = items3;
  obj2.emojiOnlyStyle = tmp3.emojiOnlyCustomStatusBubble;
  obj2.placeholderText = labelResult;
  obj2.prompt = ref.current;
  return tmp10(guildId(channelId[22]), obj2);
}
function RemoveGameFriendIconButton(user) {
  user = user.user;
  const guildId = user.guildId;
  const channelId = user.channelId;
  const items = [channelId, guildId, user];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13358, dependencyMap.paths), "UserProfileGameFriendActionSheet", { user, guildId, channelId }, "stack");
  }, items);
  const obj = { size: "sm", variant: "secondary-overlay", icon: closure_20(user(channelId[34]).UserPlatformIcon, { size: "sm", color: "white" }), accessibilityLabel: null, onPress: null };
  const intl = user(channelId[30]).intl;
  obj.accessibilityLabel = intl.string(user(channelId[30]).t.cvSt1J);
  obj.onPress = callback;
  return closure_20(user(channelId[31]).IconButton, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const UserProfileSections = fn(8457).UserProfileSections;
const Constants = fn(7455);
({ PROFILE_CONTENT_BOTTOM_PADDING: closure_15, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_16 } = Constants);
let RelationshipTypes = fn(1078).RelationshipTypes;
const ACTION_SHEET_MAX_WIDTH = fn(7398).ACTION_SHEET_MAX_WIDTH;
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_20, jsxs: closure_21, Fragment: closure_22 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  const cResult = user(newestAnalyticsLocation[24]).c(9);
  user = user.user;
  const obj = user(newestAnalyticsLocation[24]);
  const trackUserProfileAction = user(newestAnalyticsLocation[25]).useUserProfileAnalyticsContext().trackUserProfileAction;
  newestAnalyticsLocation = trackUserProfileAction(newestAnalyticsLocation[26])().newestAnalyticsLocation;
  if (cResult[0] === newestAnalyticsLocation) {
    if (cResult[1] === trackUserProfileAction) {
      if (cResult[2] === user) {
        let tmp5 = cResult[3];
      }
      const onConfirm = tmp5;
      const name = trackUserProfileAction(tmp2[28]).useName(user);
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp11 = closure_20(tmp(tmp2[29]).UserCheckIcon, { size: "sm", color: "white" });
        const intl = tmp(tmp2[30]).intl;
        const stringResult = intl.string(tmp(tmp2[30]).t.cvSt1J);
        cResult[4] = tmp11;
        cResult[5] = stringResult;
        let tmp9 = stringResult;
        let tmp8 = tmp11;
      } else {
        tmp8 = cResult[4];
        tmp9 = cResult[5];
      }
      if (cResult[6] === tmp5) {
        if (cResult[7] === name) {
          let tmp13 = cResult[8];
        }
        return tmp13;
      }
      const obj3 = {
        size: "sm",
        variant: "secondary-overlay",
        icon: tmp8,
        accessibilityLabel: tmp9,
        onPress() {
              UserProfileAlertUtils.confirmRemoveFriend({ userDisplayName: name, onConfirm });
            }
      };
      const tmp15 = closure_20(tmp(tmp2[31]).IconButton, obj3);
      cResult[6] = tmp5;
      cResult[7] = name;
      cResult[8] = tmp15;
      tmp13 = tmp15;
      const tmp4Result = trackUserProfileAction(tmp2[28]);
    }
  }
  const fn = function t() {
    trackUserProfileAction({ action: "REMOVE_FRIEND" });
    RelationshipActionCreatorsDefault.removeFriend(user.id, { location: newestAnalyticsLocation });
  };
  cResult[0] = newestAnalyticsLocation;
  cResult[1] = trackUserProfileAction;
  cResult[2] = user;
  cResult[3] = fn;
  tmp5 = fn;
}) : ((user) => {
  user = user.user;
  let newestAnalyticsLocation;
  function handleConfirm() {
    trackUserProfileAction({ action: "REMOVE_FRIEND" });
    RelationshipActionCreatorsDefault.removeFriend(user.id, { location: newestAnalyticsLocation });
  }
  const trackUserProfileAction = user(newestAnalyticsLocation[25]).useUserProfileAnalyticsContext().trackUserProfileAction;
  newestAnalyticsLocation = trackUserProfileAction(newestAnalyticsLocation[26])().newestAnalyticsLocation;
  const obj = user(newestAnalyticsLocation[25]);
  const userDisplayName = trackUserProfileAction(newestAnalyticsLocation[28]).useName(user);
  const obj3 = { size: "sm", variant: "secondary-overlay", icon: closure_20(user(newestAnalyticsLocation[29]).UserCheckIcon, { size: "sm", color: "white" }), accessibilityLabel: null, onPress: null };
  const intl = user(newestAnalyticsLocation[30]).intl;
  obj3.accessibilityLabel = intl.string(user(newestAnalyticsLocation[30]).t.cvSt1J);
  obj3.onPress = function onPress() {
    UserProfileAlertUtils.confirmRemoveFriend({ userDisplayName, onConfirm: handleConfirm });
  };
  return closure_20(user(newestAnalyticsLocation[31]).IconButton, obj3);
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = userTag(568).c(22);
  ({ user, guildId, displayProfile, displayNameOverride, pronounsOverride, badgesOverride, pendingDisplayNameStyles, style, badgeContainerBackground, isPreviewingChanges, channelId } = arg0);
  let obj = userTag(568);
  const tmp4 = trackUserProfileAction;
  userTag = trackUserProfileAction(4603).useUserTag(user);
  trackUserProfileAction(8516)(displayProfile);
  const obj2 = trackUserProfileAction(4603);
  const name = trackUserProfileAction(4910).useName(guildId, channelId, user);
  if (cResult[0] === name) {
    if (cResult[1] === displayNameOverride) {
      let tmp8 = cResult[2];
    }
    trackUserProfileAction = tmp(8464).useUserProfileAnalyticsContext().trackUserProfileAction;
    if (cResult[3] === trackUserProfileAction) {
      if (cResult[6] !== trackUserProfileAction) {
        class E {
          constructor() {
            tmp = trackUserProfileAction({ action: "PRESS_PRONOUNS" });
            obj = closure_0(closure_2[38]);
            presentUserPronounsResult = obj.presentUserPronouns();
            return;
          }
        }
        cResult[6] = trackUserProfileAction;
        cResult[7] = E;
        class A {
          constructor() {
            tmp = trackUserProfileAction({ action: "COPY_USERNAME" });
            obj = closure_0(closure_2[37]);
            copyResult = obj.copy(closure_0);
            obj2 = closure_0(closure_2[38]);
            result = obj2.presentUsernameCopied();
            return;
          }
        }
      } else {
        class E {
          constructor() {
            tmp = trackUserProfileAction({ action: "PRESS_PRONOUNS" });
            obj = closure_0(closure_2[38]);
            presentUserPronounsResult = obj.presentUserPronouns();
            return;
          }
        }
      }
      if (pronounsOverride == null) {
        class E {
          constructor() {
            tmp = trackUserProfileAction({ action: "PRESS_PRONOUNS" });
            obj = closure_0(closure_2[38]);
            presentUserPronounsResult = obj.presentUserPronouns();
            return;
          }
        }
        if (displayProfile != null) {
          class E {
            constructor() {
              tmp = trackUserProfileAction({ action: "PRESS_PRONOUNS" });
              obj = closure_0(closure_2[38]);
              presentUserPronounsResult = obj.presentUserPronouns();
              return;
            }
          }
        }
        pronounsOverride = tmp12;
      }
      if (badgesOverride == null) {
        class E {
          constructor() {
            tmp = trackUserProfileAction({ action: "PRESS_PRONOUNS" });
            obj = closure_0(closure_2[38]);
            presentUserPronounsResult = obj.presentUserPronouns();
            return;
          }
        }
      }
      class A {
        constructor() {
          tmp = trackUserProfileAction({ action: "COPY_USERNAME" });
          obj = closure_0(closure_2[37]);
          copyResult = obj.copy(closure_0);
          obj2 = closure_0(closure_2[38]);
          result = obj2.presentUsernameCopied();
          return;
        }
      }
      if (!isPreviewingChanges) {
        class E {
          constructor() {
            tmp = trackUserProfileAction({ action: "PRESS_PRONOUNS" });
            obj = closure_0(closure_2[38]);
            presentUserPronounsResult = obj.presentUserPronouns();
            return;
          }
        }
      }
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            tmp = trackUserProfileAction({ action: "PRESS_PRONOUNS" });
            obj = closure_0(closure_2[38]);
            presentUserPronounsResult = obj.presentUserPronouns();
            return;
          }
        }
        cResult[8] = obj5.string(tmp(1119).t.y5MwJy);
        class A {
          constructor() {
            tmp = trackUserProfileAction({ action: "COPY_USERNAME" });
            obj = closure_0(closure_2[37]);
            copyResult = obj.copy(closure_0);
            obj2 = closure_0(closure_2[38]);
            result = obj2.presentUsernameCopied();
            return;
          }
        }
        const stringResult = obj5.string(tmp(1119).t.y5MwJy);
      } else {
        class E {
          constructor() {
            tmp = trackUserProfileAction({ action: "PRESS_PRONOUNS" });
            obj = closure_0(closure_2[38]);
            presentUserPronounsResult = obj.presentUserPronouns();
            return;
          }
        }
      }
      if (!isPreviewingChanges) {
        class E {
          constructor() {
            tmp = trackUserProfileAction({ action: "PRESS_PRONOUNS" });
            obj = closure_0(closure_2[38]);
            presentUserPronounsResult = obj.presentUserPronouns();
            return;
          }
        }
      }
      if (!isPreviewingChanges) {
        class E {
          constructor() {
            tmp = trackUserProfileAction({ action: "PRESS_PRONOUNS" });
            obj = closure_0(closure_2[38]);
            presentUserPronounsResult = obj.presentUserPronouns();
            return;
          }
        }
      }
      if (cResult[9] === badgeContainerBackground) {
        class E {
          constructor() {
            tmp = trackUserProfileAction({ action: "PRESS_PRONOUNS" });
            obj = closure_0(closure_2[38]);
            presentUserPronounsResult = obj.presentUserPronouns();
            return;
          }
        }
      }
      const obj4 = { user, guildId, displayName: tmp8, pronouns: pronounsOverride, badges: badgesOverride, style, badgeContainerBackground, onPressDisplayName: tmp13, displayNameAccessibilityHint: tmp15, onPressUserTag: undefined, onPressPronouns: undefined, showBadgeToastOnPress: !isPreviewingChanges, canOpenBadgeDirectory: true, pendingDisplayNameStyles };
      const tmp22 = closure_20(tmp4(11407), obj4);
      cResult[9] = badgeContainerBackground;
      cResult[10] = guildId;
      cResult[11] = tmp8;
      cResult[12] = pendingDisplayNameStyles;
      cResult[13] = style;
      cResult[14] = !isPreviewingChanges;
      cResult[15] = pronounsOverride;
      cResult[16] = badgesOverride;
      cResult[17] = tmp13;
      cResult[18] = undefined;
      cResult[19] = undefined;
      cResult[20] = user;
      cResult[21] = tmp22;
    }
    class A {
      constructor() {
        tmp = trackUserProfileAction({ action: "COPY_USERNAME" });
        obj = closure_0(closure_2[37]);
        copyResult = obj.copy(closure_0);
        obj2 = closure_0(closure_2[38]);
        result = obj2.presentUsernameCopied();
        return;
      }
    }
    cResult[3] = trackUserProfileAction;
    cResult[4] = userTag;
    cResult[5] = A;
    const tmpResult = tmp(8464);
  }
  let tmp9 = name;
  if (null != displayNameOverride) {
    class E {
      constructor() {
        tmp = trackUserProfileAction({ action: "PRESS_PRONOUNS" });
        obj = closure_0(closure_2[38]);
        presentUserPronounsResult = obj.presentUserPronouns();
        return;
      }
    }
    tmp9 = name;
    if (displayNameOverride.trim().length > 0) {
      class E {
        constructor() {
          tmp = trackUserProfileAction({ action: "PRESS_PRONOUNS" });
          obj = closure_0(closure_2[38]);
          presentUserPronounsResult = obj.presentUserPronouns();
          return;
        }
      }
    }
  }
  cResult[0] = name;
  cResult[1] = displayNameOverride;
  cResult[2] = tmp9;
  tmp8 = tmp9;
}) : ((arg0) => {
  ({ user, guildId, displayProfile, displayNameOverride, pronounsOverride, badgesOverride, isPreviewingChanges } = arg0);
  let trackUserProfileAction;
  ({ channelId, pendingDisplayNameStyles, style, badgeContainerBackground } = arg0);
  const userTag = trackUserProfileAction(4603).useUserTag(user);
  let obj = trackUserProfileAction(4603);
  const tmp = trackUserProfileAction;
  const tmp4 = trackUserProfileAction(8516)(displayProfile);
  const name = trackUserProfileAction(4910).useName(guildId, channelId, user);
  let tmp6 = name;
  if (null != displayNameOverride) {
    tmp6 = name;
    if (displayNameOverride.trim().length > 0) {
      tmp6 = displayNameOverride;
    }
  }
  const obj2 = trackUserProfileAction(4910);
  trackUserProfileAction = userTag(8464).useUserProfileAnalyticsContext().trackUserProfileAction;
  const items = [trackUserProfileAction, userTag];
  const callback = noop.useCallback(() => {
    trackUserProfileAction({ action: "COPY_USERNAME" });
    ClipboardUtils.copy(userTag);
    const result = ToastUtils.presentUsernameCopied();
  }, items);
  const obj4 = { user, guildId, displayName: tmp6, pronouns: null, badges: null, style: null, badgeContainerBackground: null, onPressDisplayName: null, displayNameAccessibilityHint: null, onPressUserTag: null, onPressPronouns: null, showBadgeToastOnPress: null, canOpenBadgeDirectory: true, pendingDisplayNameStyles: null };
  const obj3 = userTag(8464);
  const tmp9 = closure_20;
  if (pronounsOverride == null) {
    let pronouns;
    if (displayProfile != null) {
      pronouns = displayProfile.pronouns;
    }
    pronounsOverride = pronouns;
  }
  obj4.pronouns = pronounsOverride;
  if (badgesOverride == null) {
    badgesOverride = tmp4;
  }
  obj4.badges = badgesOverride;
  obj4.style = style;
  obj4.badgeContainerBackground = badgeContainerBackground;
  let tmp12;
  if (!isPreviewingChanges) {
    tmp12 = callback;
  }
  obj4.onPressDisplayName = tmp12;
  const intl = tmp7(1119).intl;
  obj4.displayNameAccessibilityHint = intl.string(userTag(1119).t.y5MwJy);
  let tmp13;
  if (!isPreviewingChanges) {
    tmp13 = callback;
  }
  obj4.onPressUserTag = tmp13;
  let fn;
  if (!isPreviewingChanges) {
    fn = () => {
      trackUserProfileAction({ action: "PRESS_PRONOUNS" });
      ToastUtils.presentUserPronouns();
    };
  }
  obj4.onPressPronouns = fn;
  obj4.showBadgeToastOnPress = !isPreviewingChanges;
  obj4.pendingDisplayNameStyles = pendingDisplayNameStyles;
  return tmp9(tmp(11407), obj4);
});
let closure_26 = tmp5;
ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(568).c(24);
  guildId = guildId.guildId;
  const tmp5 = trackUserProfileAction(8515)();
  const obj = guildId(568);
  trackUserProfileAction = guildId(8464).useUserProfileAnalyticsContext().trackUserProfileAction;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function s() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const obj2 = guildId(8464);
  const stateFromStores = guildId(504).useStateFromStores(first, tmp8);
  const tmp10 = trackUserProfileAction(10001)();
  dependencyMap = tmp10;
  if (cResult[3] !== stateFromStores) {
    const obj3 = { guild: stateFromStores };
    cResult[3] = stateFromStores;
    cResult[4] = obj3;
    let tmp11 = obj3;
  } else {
    tmp11 = cResult[4];
  }
  const tmp12 = trackUserProfileAction(10001)(tmp11);
  closure_3 = tmp12;
  if (cResult[5] === tmp10) {
    if (cResult[6] === trackUserProfileAction) {
      let tmp13 = cResult[7];
    }
    if (cResult[8] === tmp12) {
      if (cResult[9] === trackUserProfileAction) {
        let tmp14 = cResult[10];
      }
      const _Symbol = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { size: "sm", color: tmp4(580).colors.WHITE };
        const tmp17 = closure_20(tmp(10626).PencilIcon, obj4);
        cResult[11] = tmp17;
        let tmp15 = tmp17;
      } else {
        tmp15 = cResult[11];
      }
      if (cResult[12] !== stateFromStores) {
        if (null != stateFromStores) {
          const intl2 = tmp(1119).intl;
          let stringResult = intl2.string(tmp(1119).t.HmFaFB);
        } else {
          const intl = tmp(1119).intl;
          stringResult = intl.string(tmp(1119).t.s5vZlQ);
        }
        cResult[12] = stateFromStores;
        cResult[13] = stringResult;
      } else {
        if (cResult[14] === tmp13) {
          if (cResult[15] === tmp18) {
            let tmp22 = cResult[16];
          }
          if (cResult[17] === stateFromStores) {
            if (cResult[18] === tmp14) {
              let tmp25 = cResult[19];
            }
            if (cResult[20] === tmp5.primaryButtons) {
              if (cResult[21] === tmp22) {
                if (cResult[22] === tmp25) {
                  let tmp29 = cResult[23];
                }
                return tmp29;
              }
            }
            const obj5 = { style: tmp5.primaryButtons, maxWidth: ACTION_SHEET_MAX_WIDTH, primaryButton: tmp22, secondaryButton: tmp25 };
            const tmp32 = closure_20(tmp4(13292), obj5);
            cResult[20] = tmp5.primaryButtons;
            cResult[21] = tmp22;
            cResult[22] = tmp25;
            cResult[23] = tmp32;
            tmp29 = tmp32;
          }
          let tmp27;
          if (null != stateFromStores) {
            const obj6 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
            const obj7 = { size: "sm", color: tmp4(580).colors.WHITE };
            obj6.icon = closure_20(tmp(10626).PencilIcon, obj7);
            const intl3 = tmp(1119).intl;
            obj6.text = intl3.string(tmp(1119).t["PKQB/H"]);
            obj6.onPress = tmp14;
            tmp27 = closure_20(tmp(5188).Button, obj6);
          }
          cResult[17] = stateFromStores;
          cResult[18] = tmp14;
          cResult[19] = tmp27;
          tmp25 = tmp27;
        }
        const obj8 = { variant: "primary", icon: tmp15, text: cResult[13], onPress: tmp13, grow: true };
        const tmp24 = closure_20(tmp(5188).Button, obj8);
        cResult[14] = tmp13;
        cResult[15] = cResult[13];
        cResult[16] = tmp24;
        tmp22 = tmp24;
      }
    }
    const fn2 = function f() {
      trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
      ActionSheetActionCreatorsDefault.hideAllActionSheets();
      closeVoicePanelsDefault();
      closure_3();
    };
    cResult[8] = tmp12;
    cResult[9] = trackUserProfileAction;
    cResult[10] = fn2;
    tmp14 = fn2;
  }
  class I {
    constructor() {
      tmp = trackUserProfileAction({ action: "EDIT_PROFILE" });
      obj = closure_1(closure_2[18]);
      hideAllActionSheetsResult = obj.hideAllActionSheets();
      tmp3 = closure_1(closure_2[41])();
      tmp4 = closure_2();
      return;
    }
  }
  cResult[5] = tmp10;
  cResult[6] = trackUserProfileAction;
  cResult[7] = I;
  tmp13 = I;
}) : ((guildId) => {
  guildId = guildId.guildId;
  let trackUserProfileAction;
  const tmp = trackUserProfileAction;
  const tmp3 = trackUserProfileAction(8515)();
  trackUserProfileAction = guildId(8464).useUserProfileAnalyticsContext().trackUserProfileAction;
  const obj = guildId(8464);
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  dependencyMap = trackUserProfileAction(10001)();
  closure_3 = trackUserProfileAction(10001)({ guild: stateFromStores });
  const obj3 = { style: tmp3.primaryButtons, maxWidth: ACTION_SHEET_MAX_WIDTH, primaryButton: null, secondaryButton: null };
  const obj2 = guildId(504);
  const obj4 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
  const tmp7 = trackUserProfileAction(13292);
  obj4.icon = closure_20(guildId(10626).PencilIcon, { size: "sm", color: trackUserProfileAction(580).colors.WHITE });
  if (null != stateFromStores) {
    const intl2 = tmp4(1119).intl;
    let stringResult = intl2.string(tmp4(1119).t.HmFaFB);
  } else {
    const intl = tmp4(1119).intl;
    stringResult = intl.string(tmp4(1119).t.s5vZlQ);
  }
  obj4.text = stringResult;
  obj4.onPress = function onPress() {
    trackUserProfileAction({ action: "EDIT_PROFILE" });
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    closeVoicePanelsDefault();
    closure_2();
  };
  obj3.primaryButton = closure_20(guildId(5188).Button, obj4);
  let tmp6Result;
  if (null != stateFromStores) {
    const obj6 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
    const obj7 = { size: "sm", color: tmp(580).colors.WHITE };
    obj6.icon = tmp6(tmp4(10626).PencilIcon, obj7);
    const intl3 = tmp4(1119).intl;
    obj6.text = intl3.string(tmp4(1119).t["PKQB/H"]);
    obj6.onPress = function onPress() {
      trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
      ActionSheetActionCreatorsDefault.hideAllActionSheets();
      closeVoicePanelsDefault();
      closure_3();
    };
    tmp6Result = tmp6(tmp4(5188).Button, obj6);
  }
  obj3.secondaryButton = tmp6Result;
  return closure_20(tmp7, obj3);
});
ReactCompilerGating = fn(558);
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(18);
  ({ userId, isVisible, isCurrentUser, containerBackground } = arg0);
  const tmp4 = UserProfileSharedStylesDefault();
  if (cResult[0] !== containerBackground) {
    const obj2 = { backgroundColor: containerBackground };
    cResult[0] = containerBackground;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.card) {
    if (cResult[3] === tmp5) {
      let tmp6 = cResult[4];
    }
    if (cResult[5] !== isCurrentUser) {
      let tmp8 = isCurrentUser;
      if (isCurrentUser) {
        tmp8 = closure_1_20(tmp3(13360), {});
      }
      cResult[5] = isCurrentUser;
      cResult[6] = tmp8;
      let tmp7 = tmp8;
    } else {
      tmp7 = cResult[6];
    }
    if (cResult[7] !== isCurrentUser) {
      let tmp11 = isCurrentUser;
      if (isCurrentUser) {
        tmp11 = closure_1_20(tmp3(13361), {});
      }
      cResult[7] = isCurrentUser;
      cResult[8] = tmp11;
      let tmp10 = tmp11;
    } else {
      tmp10 = cResult[8];
    }
    if (cResult[9] === tmp6) {
      if (cResult[10] === isVisible) {
        if (cResult[11] === userId) {
          let tmp13 = cResult[12];
        }
        if (cResult[13] === tmp4.profileContent) {
          if (cResult[14] === tmp7) {
            if (cResult[15] === tmp10) {
              if (cResult[16] === tmp13) {
                let tmp16 = cResult[17];
              }
              return tmp16;
            }
          }
        }
        const obj3 = { style: tmp4.profileContent, children: null };
        const items = [tmp7, tmp10, tmp13];
        obj3.children = items;
        const tmp19 = guild(timestampProducer, obj3);
        cResult[13] = tmp4.profileContent;
        cResult[14] = tmp7;
        cResult[15] = tmp10;
        cResult[16] = tmp13;
        cResult[17] = tmp19;
        tmp16 = tmp19;
      }
    }
    const obj4 = { userId, isVisible, cardStyle: tmp6 };
    const tmp15 = closure_1_20(tmp3(8943), obj4);
    cResult[9] = tmp6;
    cResult[10] = isVisible;
    cResult[11] = userId;
    cResult[12] = tmp15;
    tmp13 = tmp15;
  }
  const items1 = [tmp4.card, tmp5];
  cResult[2] = tmp4.card;
  cResult[3] = tmp5;
  cResult[4] = items1;
  tmp6 = items1;
}) : ((isCurrentUser) => {
  isCurrentUser = isCurrentUser.isCurrentUser;
  ({ userId, isVisible, containerBackground } = isCurrentUser);
  const tmp3 = UserProfileSharedStylesDefault();
  const items = [tmp3.card, { backgroundColor: containerBackground }];
  const obj = { style: tmp3.profileContent, children: null };
  let tmp6 = isCurrentUser;
  if (isCurrentUser) {
    tmp6 = closure_1_20(tmp(13360), {});
  }
  const items1 = [tmp6, , ];
  if (isCurrentUser) {
    isCurrentUser = closure_1_20(tmp(13361), {});
  }
  items1[1] = isCurrentUser;
  items1[2] = closure_1_20(UserProfileWidgetsBoardDefault, { userId, isVisible, cardStyle: items });
  obj.children = items1;
  return guild(timestampProducer, obj);
});
ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(17);
  ({ user, currentUser, guildId, channelId, containerBackground } = arg0);
  const tmp4 = UserProfileSharedStylesDefault();
  if (cResult[0] !== containerBackground) {
    const obj2 = { backgroundColor: containerBackground };
    cResult[0] = containerBackground;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.card) {
    if (cResult[3] === tmp5) {
      let tmp6 = cResult[4];
    }
    if (cResult[5] === tmp4.cards) {
      if (cResult[6] === tmp4.profileContent) {
        let tmp7 = cResult[7];
      }
      if (cResult[8] === tmp6) {
        if (cResult[9] === channelId) {
          if (cResult[10] === currentUser) {
            if (cResult[11] === guildId) {
              if (cResult[12] === user) {
                let tmp8 = cResult[13];
              }
              if (cResult[14] === tmp7) {
                if (cResult[15] === tmp8) {
                  let tmp11 = cResult[16];
                }
                return tmp11;
              }
              const obj3 = { style: tmp7, children: tmp8 };
              const tmp14 = closure_1_20(timestampProducer, obj3);
              cResult[14] = tmp7;
              cResult[15] = tmp8;
              cResult[16] = tmp14;
              tmp11 = tmp14;
            }
          }
        }
      }
      const obj4 = { user, currentUser, guildId, channelId, cardStyle: tmp6 };
      const tmp10 = closure_1_20(UserProfileActivityTabDefault, obj4);
      cResult[8] = tmp6;
      cResult[9] = channelId;
      cResult[10] = currentUser;
      cResult[11] = guildId;
      cResult[12] = user;
      cResult[13] = tmp10;
      tmp8 = tmp10;
    }
    const items = [, ];
    ({ cards: arr2[0], profileContent: arr2[1] } = tmp4);
    cResult[5] = tmp4.cards;
    cResult[6] = tmp4.profileContent;
    cResult[7] = items;
    tmp7 = items;
  }
  const items1 = [tmp4.card, tmp5];
  cResult[2] = tmp4.card;
  cResult[3] = tmp5;
  cResult[4] = items1;
  tmp6 = items1;
}) : ((arg0) => {
  ({ user, currentUser, guildId, channelId, containerBackground } = arg0);
  const tmp = UserProfileSharedStylesDefault();
  const items = [tmp.card, { backgroundColor: containerBackground }];
  const obj = { style: null, children: closure_1_20(UserProfileActivityTabDefault, { user, currentUser, guildId, channelId, cardStyle: items }) };
  const items1 = [, ];
  ({ cards: arr2[0], profileContent: arr2[1] } = tmp);
  obj.style = items1;
  return closure_1_20(timestampProducer, obj);
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileContent.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  const cResult = user(guildId[24]).c(278);
  user = user.user;
  const channel = user.channel;
  guildId = user.guildId;
  const displayProfile = user.displayProfile;
  closure_4 = user.showUserProfileActionSheet;
  const disableCalls = user.disableCalls;
  const disableMessage = user.disableMessage;
  ({ disableStatus, isPreviewingChanges } = user);
  const location = user.location;
  const navigateToPremium = user.navigateToPremium;
  const navigateToShop = user.navigateToShop;
  ({ initialSection, scrollPosition } = user);
  let obj = user(guildId[24]);
  const currentUser = channel(guildId[16])();
  const tmp6 = channel(guildId[50])(isGameFriends);
  if (cResult[0] === tmp6) {
    if (cResult[1] === scrollPosition) {
      let tmp7 = cResult[2];
    }
    ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = tmp4(tmp2[51])(tmp7));
    const bottom = tmp4(tmp2[52])().bottom;
    const tmp8 = tmp4(tmp2[51])(tmp7);
    const trackUserProfileAction = tmp(tmp2[25]).useUserProfileAnalyticsContext().trackUserProfileAction;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      let items = [currentUser];
      const fn = function q() {
        return currentUser.getCurrentUser();
      };
      cResult[3] = items;
      cResult[4] = fn;
      let tmp11 = fn;
      let tmp10 = items;
    } else {
      tmp10 = cResult[3];
      tmp11 = cResult[4];
    }
    const tmpResult = tmp(tmp2[25]);
    const stateFromStores = tmp(tmp2[17]).useStateFromStores(tmp10, tmp11);
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    const isWishlistOwner = id === user.id;
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      let items1 = [navigateToShop];
      cResult[5] = items1;
      let tmp16 = items1;
    } else {
      tmp16 = cResult[5];
    }
    if (cResult[6] !== user.id) {
      function oe() {
        return { relationshipType: RelationshipStore.getRelationshipType(user.id), originApplicationId: RelationshipStore.getOriginApplicationId(user.id) };
      }
      cResult[6] = user.id;
      cResult[7] = oe;
      let tmp18 = oe;
    } else {
      tmp18 = cResult[7];
    }
    const tmpResult11 = tmp(tmp2[17]);
    const stateFromStoresObject = tmp(tmp2[17]).useStateFromStoresObject(tmp16, tmp18);
    const relationshipType = stateFromStoresObject.relationshipType;
    const originApplicationId = stateFromStoresObject.originApplicationId;
    const tmpResult12 = tmp(tmp2[17]);
    const incomingGameRelationshipsForUser = tmp(tmp2[53]).useIncomingGameRelationshipsForUser(user.id);
    const tmpResult13 = tmp(tmp2[53]);
    isGameFriends = tmp(tmp2[54]).useIsGameFriends(user.id);
    if (cResult[8] !== user.id) {
      let obj2 = { userId: user.id };
      cResult[8] = user.id;
      cResult[9] = obj2;
      let tmp22 = obj2;
    } else {
      tmp22 = cResult[9];
    }
    const tmpResult14 = tmp(tmp2[54]);
    const userProfileGameFriendApplicationIds = tmp(tmp2[55]).useUserProfileGameFriendApplicationIds(tmp22);
    const tmpResult15 = tmp(tmp2[55]);
    let id1;
    if (channel != null) {
      id1 = channel.id;
    }
    const name = tmp4(tmp2[36]).useName(guildId, id1, user);
    if (cResult[10] === guildId) {
      if (cResult[11] === user) {
        const subscribeGuildMembers = tmp(tmp2[56]).useSubscribeGuildMembers(cResult[12], "UserProfileContent");
        tmp4(tmp2[57])(user.id);
        const _Symbol3 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          let items2 = [trackUserProfileAction];
          class Ce {
            constructor() {
              return trackUserProfileAction.getPendingChanges();
            }
          }
          cResult[13] = items2;
          cResult[14] = Ce;
          let tmp31 = Ce;
          let tmp30 = items2;
        } else {
          tmp30 = cResult[13];
          tmp31 = cResult[14];
        }
        const tmpResult16 = tmp(tmp2[56]);
        const stateFromStoresObject1 = tmp(tmp2[17]).useStateFromStoresObject(tmp30, tmp31);
        ({ pendingAvatar, pendingGlobalName } = stateFromStoresObject1);
        const pendingPronouns = stateFromStoresObject1.pendingPronouns;
        const pendingBio = stateFromStoresObject1.pendingBio;
        ({ pendingAccentColor, pendingThemeColors, pendingDisplayNameStyles } = stateFromStoresObject1);
        ({ pendingBadgeDisplayOrder, pendingBadgeHiddenBadges } = stateFromStoresObject1);
        if (cResult[15] === pendingAvatar) {
          const tmp37 = tmp4(tmp2[35])(displayProfile, tmp34);
          const _Symbol4 = Symbol;
          class Ce {
            constructor() {
              return trackUserProfileAction.getPendingChanges();
            }
          }
          if (tmp38 === Symbol.for("react.memo_cache_sentinel")) {
            const items3 = [isPreviewingChanges];
            class Ce {
              constructor() {
                return trackUserProfileAction.getPendingChanges();
              }
            }
            cResult[18] = items3;
            let tmp39 = items3;
          } else {
            tmp39 = cResult[18];
          }
          if (cResult[19] !== user.id) {
            class We {
              constructor() {
                return closure_7.getBadges(user.id);
              }
            }
            const items4 = [user.id];
            class Ce {
              constructor() {
                return trackUserProfileAction.getPendingChanges();
              }
            }
            cResult[19] = user.id;
            cResult[20] = We;
            cResult[21] = items4;
            let tmp42 = items4;
            const tmp41 = We;
          } else {
            class We {
              constructor() {
                return closure_7.getBadges(user.id);
              }
            }
            tmp42 = cResult[21];
          }
          const stateFromStoresArray = tmp(tmp2[17]).useStateFromStoresArray(tmp39, tmp41, tmp42);
          if (cResult[22] === tmp37) {
            class We {
              constructor() {
                return closure_7.getBadges(user.id);
              }
            }
          }
          const tmpResult18 = tmp(tmp2[17]);
          let obj3 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
          const pendingProfileBadges = tmp(tmp2[59]).getPendingProfileBadges(tmp37, stateFromStoresArray, obj3);
          cResult[22] = tmp37;
          cResult[23] = stateFromStoresArray;
          cResult[24] = pendingBadgeDisplayOrder;
          cResult[25] = pendingBadgeHiddenBadges;
          cResult[26] = pendingProfileBadges;
          const tmpResult19 = tmp(tmp2[59]);
        }
        const tmpResult17 = tmp(tmp2[17]);
        let obj4 = { userId: user.id, image: pendingAvatar };
        const pendingAvatarSrc = tmp(tmp2[58]).getPendingAvatarSrc(obj4);
        cResult[15] = pendingAvatar;
        cResult[16] = user.id;
        cResult[17] = pendingAvatarSrc;
        const tmpResult20 = tmp(tmp2[58]);
      }
    }
    if (null == guildId) {
      class We {
        constructor() {
          return closure_7.getBadges(user.id);
        }
      }
      cResult[10] = guildId;
      class Ce {
        constructor() {
          return trackUserProfileAction.getPendingChanges();
        }
      }
      cResult[11] = user;
      cResult[12] = tmp26;
    } else {
      class We {
        constructor() {
          return closure_7.getBadges(user.id);
        }
      }
    }
    let obj5 = {};
    const items5 = [user.id];
    obj5[guildId] = items5;
    const tmp4Result = tmp4(tmp2[36]);
  }
  let obj6 = { scrollPosition, bannerHeight: tmp6 };
  cResult[0] = tmp6;
  cResult[1] = scrollPosition;
  cResult[2] = obj6;
  tmp7 = obj6;
}) : ((user) => {
  user = user.user;
  const channel = user.channel;
  const guildId = user.guildId;
  const displayProfile = user.displayProfile;
  const showUserProfileActionSheet = user.showUserProfileActionSheet;
  ({ disableCalls, isPreviewingChanges } = user);
  const navigateToPremium = user.navigateToPremium;
  const navigateToShop = user.navigateToShop;
  let isCurrentUser;
  let userProfileGameFriendApplicationIds;
  let name;
  let pendingBio;
  pendingBadgeDisplayOrder = undefined;
  let pendingBadgeHiddenBadges;
  RelationshipTypes = undefined;
  let stateFromStoresArray;
  let hasCustomProfileTheme;
  let containerBackground;
  let stateFromStores1;
  let stateFromStores2;
  closure_23 = undefined;
  closure_24 = undefined;
  closure_25 = undefined;
  let boardTabIndex;
  let activityTabIndex;
  let wishlistTabIndex;
  c29 = undefined;
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
  let obj8;
  ({ disableMessage, disableStatus, location: _location, initialSection, scrollPosition } = user);
  const tmp3 = channel(guildId[16])();
  closure_8 = tmp3;
  const tmp4 = channel(guildId[50])(stateFromStoresArray);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = channel(guildId[51])({ scrollPosition, bannerHeight: tmp4 }));
  const tmp5 = channel(guildId[51])({ scrollPosition, bannerHeight: tmp4 });
  const trackUserProfileAction = user(guildId[25]).useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj = user(guildId[25]);
  let items = [isCurrentUser];
  const stateFromStores = user(guildId[17]).useStateFromStores(items, () => isCurrentUser.getCurrentUser());
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  isCurrentUser = tmp9;
  let obj2 = user(guildId[17]);
  let items1 = [stateFromStores];
  const stateFromStoresObject = user(guildId[17]).useStateFromStoresObject(items1, () => ({ relationshipType: RelationshipStore.getRelationshipType(user.id), originApplicationId: RelationshipStore.getOriginApplicationId(user.id) }));
  ({ relationshipType, originApplicationId } = stateFromStoresObject);
  const tmp6Result = user(guildId[17]);
  const incomingGameRelationshipsForUser = user(guildId[53]).useIncomingGameRelationshipsForUser(user.id);
  const tmp6Result23 = user(guildId[53]);
  const isGameFriends = user(guildId[54]).useIsGameFriends(user.id);
  const tmp6Result24 = user(guildId[54]);
  userProfileGameFriendApplicationIds = user(guildId[55]).useUserProfileGameFriendApplicationIds({ userId: user.id });
  let obj3 = { userId: user.id };
  const tmp6Result25 = user(guildId[55]);
  let id1;
  if (channel != null) {
    id1 = channel.id;
  }
  name = channel(guildId[36]).useName(guildId, id1, user);
  let items2 = [guildId, user];
  const memo = showUserProfileActionSheet.useMemo(() => {
    if (null != guildId) {
      if (null != user) {
        const obj = {};
        const items = [tmp2.id];
        obj[tmp] = items;
      }
      return {};
    }
  }, items2);
  const tmpResult = channel(guildId[36]);
  const subscribeGuildMembers = user(guildId[56]).useSubscribeGuildMembers(memo, "UserProfileContent");
  const tmp17 = channel(guildId[57])(user.id);
  const tmp6Result26 = user(guildId[56]);
  const items3 = [userProfileGameFriendApplicationIds];
  const stateFromStoresObject1 = user(guildId[17]).useStateFromStoresObject(items3, () => userProfileGameFriendApplicationIds.getPendingChanges());
  pendingBio = stateFromStoresObject1.pendingBio;
  ({ pendingAccentColor, pendingThemeColors, pendingBadgeDisplayOrder } = stateFromStoresObject1);
  pendingBadgeHiddenBadges = stateFromStoresObject1.pendingBadgeHiddenBadges;
  ({ pendingBanner, pendingAvatar, pendingAvatarDecoration, pendingGlobalName, pendingPronouns, pendingLegacyUsernameDisabled, pendingDisplayNameStyles } = stateFromStoresObject1);
  const tmp6Result27 = user(guildId[17]);
  const pendingAvatarSrc = user(guildId[58]).getPendingAvatarSrc({ userId: user.id, image: pendingAvatar });
  const tmp20 = channel(guildId[35])(displayProfile, pendingLegacyUsernameDisabled);
  RelationshipTypes = tmp20;
  let obj4 = { userId: user.id, image: pendingAvatar };
  const tmp6Result28 = user(guildId[58]);
  const items4 = [navigateToShop];
  const items5 = [user.id];
  stateFromStoresArray = user(guildId[17]).useStateFromStoresArray(items4, () => BadgeDirectoryStore.getBadges(user.id), items5);
  const items6 = [tmp20, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo1 = showUserProfileActionSheet.useMemo(() => PendingBadgeSettings.getPendingProfileBadges(closure_17, stateFromStoresArray, { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges }), items6);
  let obj5 = { user, displayProfile, pendingThemeColors: null };
  let tmp24;
  const tmp6Result29 = user(guildId[17]);
  if (isPreviewingChanges) {
    tmp24 = pendingThemeColors;
  }
  obj5.pendingThemeColors = tmp24;
  const tmpResult1Result = channel(guildId[60])(obj5);
  const primaryColor = tmpResult1Result.primaryColor;
  hasCustomProfileTheme = tmp26;
  ({ theme, secondaryColor } = tmpResult1Result);
  const tmpResult5 = channel(guildId[60]);
  const userProfileColors = user(guildId[61]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  containerBackground = userProfileColors.containerBackground;
  ({ avatarBackground, statusBackground } = userProfileColors);
  const tmp6Result30 = user(guildId[61]);
  const ref1 = showUserProfileActionSheet.useRef(null);
  const ref = showUserProfileActionSheet.useRef(null);
  const items7 = [name];
  stateFromStores1 = user(guildId[17]).useStateFromStores(items7, () => UserProfileStore.getFirstWishlistId(user.id));
  const tmp6Result31 = user(guildId[17]);
  const fetchWishlist = user(guildId[62]).useFetchWishlist({ wishlistId: stateFromStores1, userId: user.id });
  let obj6 = { wishlistId: stateFromStores1, userId: user.id };
  const tmp6Result32 = user(guildId[62]);
  const items8 = [closure_8];
  const items9 = [stateFromStores1];
  stateFromStores2 = user(guildId[17]).useStateFromStores(items8, () => {
    let wishlist = null;
    if (null != stateFromStores1) {
      wishlist = WishlistStore.getWishlist(tmp);
    }
    return wishlist;
  }, items9);
  const items10 = [stateFromStores2, id === user.id];
  let tmp33 = tmp9;
  if (id !== user.id) {
    let tmp34 = null != stateFromStores2;
    if (tmp34) {
      tmp34 = arr13.length > 0;
    }
    tmp33 = tmp34;
  }
  closure_23 = tmp33;
  const tmp6Result33 = user(guildId[17]);
  const displayableBoardWidgets = user(guildId[64]).useDisplayableBoardWidgets(user.id);
  const tmp6Result34 = user(guildId[64]);
  const isMobileGameCollectionExperimentEnabled = user(guildId[65]).useIsMobileGameCollectionExperimentEnabled("UserProfileContent");
  const tmp6Result35 = user(guildId[65]);
  let tmp36 = tmp9;
  if (id === user.id) {
    tmp36 = isMobileGameCollectionExperimentEnabled;
  }
  const tmp37 = displayableBoardWidgets.length > 0 || user(guildId[66]).useCanConjureVibegrationsCustomWidget("UserProfileContent", tmp36);
  closure_24 = tmp37;
  const tmp6Result36 = user(guildId[66]);
  const tmp38 = user(guildId[67]).useIsRecentActivityMobileEnabled("UserProfileContent") && null != stateFromStores;
  closure_25 = tmp38;
  const tmp6Result37 = user(guildId[67]);
  const profileTabIndices = user(guildId[68]).useProfileTabIndices(tmp37, tmp38, tmp33);
  boardTabIndex = profileTabIndices.boardTabIndex;
  activityTabIndex = profileTabIndices.activityTabIndex;
  wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  const tmp6Result38 = user(guildId[68]);
  [tmp41, c29] = displayProfile(showUserProfileActionSheet.useState(0), 2);
  const callback = obj9.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp40 = displayProfile(showUserProfileActionSheet.useState(0), 2);
  const pageHeights = user(guildId[69]).usePageHeights();
  handlePageContentSize = pageHeights.handlePageContentSize;
  const tmp6Result39 = user(guildId[69]);
  const wishlistViewerCoachmark = user(guildId[70]).useWishlistViewerCoachmark({ isCurrentUser: tmp9, shouldShowWishlistTab: tmp33 });
  isVisible = wishlistViewerCoachmark.isVisible;
  markAsDismissed = wishlistViewerCoachmark.markAsDismissed;
  const items11 = [trackUserProfileAction, isVisible, markAsDismissed];
  const callback1 = obj9.useCallback((section) => {
    trackUserProfileAction({ action: "PRESS_SECTION", section });
    if (tmp2) {
      markAsDismissed(ContentDismissActionType.INDIRECT_ACTION);
    }
  }, items11);
  const tmp6Result40 = user(guildId[70]);
  const profileSectionTabs = user(guildId[68]).useProfileSectionTabs({ initialUserProfileSection: initialSection, wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange: callback1 });
  ({ activeProfileTabSection, setActiveProfileTabSection } = profileSectionTabs);
  restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  isVisible = tmp47;
  isVisible2 = tmp48;
  const items12 = [navigateToPremium];
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  callback2 = obj9.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    if (navigateToPremium != null) {
      navigateToPremium();
    }
  }, items12);
  const items13 = [navigateToShop];
  callback3 = obj9.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    if (navigateToShop != null) {
      navigateToShop();
    }
  }, items13);
  const items14 = [user, stateFromStores, containerBackground, tmp3, isPreviewingChanges, callback2, callback3, null != primaryColor, guildId, userProfileGameFriendApplicationIds, displayProfile, name, pendingBio, channel, showUserProfileActionSheet];
  callback4 = obj9.useCallback(() => {
    if (null != user) {
      if (null != stateFromStores) {
        const items = [closure_8.card, ];
        const obj2 = { backgroundColor: containerBackground };
        items[1] = obj2;
        const obj3 = { style: null, children: null };
        const items1 = [, ];
        ({ cards: arr3[0], profileContent: arr3[1] } = closure_8);
        obj3.style = items1;
        let _private;
        if (displayProfile != null) {
          _private = tmp40.private;
        }
        if (_private) {
          const obj = { username: name, containerBackground };
          _private = closure_2_20(UserProfilePrivateInfoBannerDefault, obj);
        }
        const items2 = [_private, , , , , , , , , , ];
        let isProvisional = tmp.isProvisional;
        if (isProvisional) {
          const obj4 = { style: items, userId: tmp.id, iconSize: 16 };
          isProvisional = closure_2_20(ProvisionalAccountExplainer.UserProfileProvisionalAccountExplainerCard, obj4);
        }
        items2[1] = isProvisional;
        let tmp10 = tmp.id === tmp35.id;
        if (tmp10) {
          tmp10 = !isPreviewingChanges;
        }
        if (tmp10) {
          const obj5 = { navigateToPremium: callback2, navigateToShop: callback3, hasCustomProfileTheme };
          tmp10 = closure_2_20(UserProfileDismissibleUpsellsDefault, obj5);
        }
        items2[2] = tmp10;
        const obj6 = { user: tmp, currentUser: tmp35, guildId, style: items };
        items2[3] = closure_2_20(UserProfileActivityDefault, obj6);
        let tmp18Result = userProfileGameFriendApplicationIds.length > 0;
        if (tmp18Result) {
          const obj7 = { userId: tmp.id, applicationIds: tmp22 };
          tmp18Result = tmp18(tmp19(13392), obj7);
        }
        items2[4] = tmp18Result;
        const obj9 = { userId: tmp.id, displayProfile, pendingBio: null };
        let tmp26;
        if (isPreviewingChanges) {
          tmp26 = pendingBio;
        }
        obj9.pendingBio = tmp26;
        items2[5] = closure_2_20(UserProfileAboutMeCardDefault, obj9);
        let tmp18Result4 = null != tmp21;
        if (tmp18Result4) {
          const obj10 = { userId: tmp.id, guildId: tmp21 };
          tmp18Result4 = tmp18(tmp19(7432), obj10);
        }
        items2[6] = tmp18Result4;
        let guild_id;
        if (channel != null) {
          guild_id = tmp28.guild_id;
        }
        let tmp18Result5 = null != guild_id;
        if (tmp18Result5) {
          const obj11 = { user: tmp, currentUser: tmp35, guildId: null, channelId: null, showUserProfile: null };
          ({ guild_id: obj8.guildId, id: obj8.channelId } = tmp28);
          obj11.showUserProfile = showUserProfileActionSheet;
          tmp18Result5 = tmp18(tmp19(13344), obj11);
        }
        items2[7] = tmp18Result5;
        const obj12 = { userId: tmp.id };
        items2[8] = closure_2_20(UserProfileConnections.UserProfileAccountConnectionsCard, obj12);
        const obj13 = { userId: tmp.id };
        items2[9] = closure_2_20(UserProfileConnections.UserProfileApplicationRoleConnectionsCard, obj13);
        let tmp18Result6 = !tmp25;
        if (!isPreviewingChanges) {
          const obj25 = { userId: tmp.id, onBack: showUserProfileActionSheet };
          tmp18Result6 = tmp18(tmp19(13347), obj25);
        }
        items2[10] = tmp18Result6;
        obj3.children = items2;
        return guild(timestampProducer, obj3);
      }
    }
    return null;
  }, items14);
  const items15 = [tmp3.profileContent, stateFromStores1, activeProfileTabSection === pendingBio.WISHLIST, user.id, id === user.id];
  callback5 = obj9.useCallback(() => {
    const obj = { style: closure_8.profileContent, children: null };
    if (null == stateFromStores1) {
      let tmp10 = closure_2_20(UserProfileWishlistGrid.WishlistEmptyState, {});
      let tmp9 = closure_2_20;
    } else {
      const obj2 = { wishlistId: tmp3, maxWidth: ACTION_SHEET_MAX_WIDTH, isVisible };
      tmp9 = closure_2_20;
      tmp10 = closure_2_20(UserProfileWishlistGridDefault, obj2);
    }
    const items = [tmp10, ];
    let tmp9Result = closure_11;
    if (closure_11) {
      const obj3 = { userId: user.id, wishlistId: tmp3, maxWidth: ACTION_SHEET_MAX_WIDTH };
      tmp9Result = tmp9(UserProfileWishlistSuggestionsGridDefault, obj3);
    }
    items[1] = tmp9Result;
    obj.children = items;
    return guild(timestampProducer, obj);
  }, items15);
  const items16 = [handlePageContentSize, callback4, callback5, tmp37, tmp38, tmp33, boardTabIndex, activityTabIndex, wishlistTabIndex, user, stateFromStores, guildId, , , , ];
  let id2;
  if (channel != null) {
    id2 = channel.id;
  }
  items16[12] = id2;
  items16[13] = activeProfileTabSection === pendingBio.WIDGETS;
  items16[14] = id === user.id;
  items16[15] = containerBackground;
  const memo2 = obj9.useMemo(() => {
    const obj = { id: "main", label: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.LXw470);
    obj.page = closure_2_20(hasOwnProperty, {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return handlePageContentSize(0, arg0, arg1);
      },
      children: callback4()
    });
    const items = [obj];
    if (closure_24) {
      const obj3 = { id: "board", label: null, page: null };
      const intl2 = tmp(1119).intl;
      obj3.label = intl2.string(tmp(1119).t.laViwx);
      const obj4 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(boardTabIndex, arg0, arg1);
          },
        children: null
      };
      const obj5 = { userId: user.id, isVisible: isVisible2, isCurrentUser, containerBackground };
      obj4.children = tmp3(closure_28, obj5);
      obj3.page = tmp3(tmp4, obj4, boardTabIndex);
      items.push(obj3);
    }
    let tmp12 = closure_25;
    if (closure_25) {
      tmp12 = null != stateFromStores;
    }
    if (tmp12) {
      const obj6 = { id: "activity", label: null, page: null };
      const intl3 = tmp(1119).intl;
      obj6.label = intl3.string(tmp(1119).t.chq59f);
      const obj7 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(activityTabIndex, arg0, arg1);
          },
        children: null
      };
      obj8 = { user, currentUser: stateFromStores, guildId, channelId: null, containerBackground: null };
      let id;
      if (channel != null) {
        id = channel.id;
      }
      obj8.channelId = id;
      obj8.containerBackground = containerBackground;
      obj7.children = tmp3(closure_29, obj8);
      obj6.page = tmp3(tmp4, obj7, activityTabIndex);
      items.push(obj6);
    }
    if (closure_23) {
      const obj9 = { id: "wishlist", label: null, page: null };
      const intl4 = tmp(1119).intl;
      obj9.label = intl4.string(tmp(1119).t["7lZ31J"]);
      const obj10 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(wishlistTabIndex, arg0, arg1);
          },
        children: callback5()
      };
      obj9.page = tmp3(tmp4, obj10, wishlistTabIndex);
      items.push(obj9);
    }
    return items;
  }, items16);
  const tmp6Result41 = user(guildId[68]);
  const tmp6Result42 = user(guildId[83]);
  segmentedControlState = tmp6Result42.useSegmentedControlState({ pageWidth: tmp41, defaultIndex: activeProfileTabSectionIndex, itemSpacing: channel(guildId[43]).space.PX_24, items: memo2, onPageChange: handleTabChange });
  let obj7 = { pageWidth: tmp41, defaultIndex: activeProfileTabSectionIndex, itemSpacing: channel(guildId[43]).space.PX_24, items: memo2, onPageChange: handleTabChange };
  const pagerFillHeight = user(guildId[69]).usePagerFillHeight();
  const items17 = [segmentedControlState, restoreActiveIndex];
  ({ pagerRef, fillHeight, measureFill } = pagerFillHeight);
  const layoutEffect = obj9.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items17);
  const tmp6Result43 = user(guildId[69]);
  const items18 = [segmentedControlState, wishlistTabIndex, markAsDismissed, setActiveProfileTabSection];
  const pagesHeightStyle = user(guildId[69]).usePagesHeightStyle(segmentedControlState, pageHeights.pageHeights, fillHeight);
  if (null != user) {
    if (null != stateFromStores) {
      obj8 = { backgroundColor: containerBackground };
      if (isPreviewingChanges) {
        let OpenableUserProfileAvatar = tmp(tmp101);
      } else {
        OpenableUserProfileAvatar = tmp6(tmp101).OpenableUserProfileAvatar;
      }
      let obj10 = { user, displayProfile, bannerHeight: tmp4, pendingBanner: null, pendingAvatarSrc: null, pendingAccentColor: null, pendingThemeColors: null, disableInteraction: null, bannerAnimatedStyle: null, bannerImageAnimatedStyle: null, blurAnimatedProps: null, showBlur: null, privateBanner: null };
      let tmp63;
      if (isPreviewingChanges) {
        tmp63 = pendingBanner;
      }
      obj10.pendingBanner = tmp63;
      let tmp64;
      if (isPreviewingChanges) {
        tmp64 = pendingAvatarSrc;
      }
      obj10.pendingAvatarSrc = tmp64;
      let tmp65;
      if (isPreviewingChanges) {
        if (null != pendingAccentColor) {
          tmp65 = pendingAccentColor;
        }
      }
      obj10.pendingAccentColor = tmp65;
      let tmp66;
      if (isPreviewingChanges) {
        if (null != pendingThemeColors) {
          tmp66 = pendingThemeColors;
        }
      }
      obj10.pendingThemeColors = tmp66;
      obj10.disableInteraction = isPreviewingChanges;
      obj10.bannerAnimatedStyle = bannerAnimatedStyle;
      obj10.bannerImageAnimatedStyle = bannerImageAnimatedStyle;
      obj10.blurAnimatedProps = blurAnimatedProps;
      obj10.showBlur = showBlur;
      let _private;
      if (displayProfile != null) {
        _private = displayProfile.private;
      }
      let tmp61Result;
      if (true === _private) {
        let obj11 = { primaryColor };
        tmp61Result = tmp61(tmp(tmp2[89]), obj11);
      }
      obj10.privateBanner = tmp61Result;
      const items19 = [containerBackground(tmp(tmp2[90]), obj10), , ];
      let tmp59Result = !isPreviewingChanges;
      if (!isPreviewingChanges) {
        const items20 = [tmp3.bannerButtons, , ];
        let _private1;
        if (displayProfile != null) {
          _private1 = displayProfile.private;
        }
        if (_private1) {
          _private1 = tmp3.bannerButtonsWithPrivateBanner;
        }
        let obj12 = { style: null, children: null };
        items20[1] = _private1;
        items20[2] = bannerAnimatedStyle;
        obj12.style = items20;
        let tmp71 = null;
        if (null != stateFromStores) {
          tmp71 = null;
          if (user.id !== stateFromStores.id) {
            tmp71 = null;
            if (!user.bot) {
              if (relationshipType === RelationshipTypes.FRIEND) {
                let obj13 = { user };
                let tmp61Result6 = tmp61(closure_24, obj13);
              } else {
                tmp61Result6 = null;
                if (isGameFriends) {
                  const obj14 = { user };
                  tmp61Result6 = tmp61(closure_25, obj14);
                }
              }
            }
          }
        }
        const items21 = [tmp71, ];
        const obj15 = { user, currentUser: stateFromStores, displayProfile, channel };
        items21[1] = tmp61(tmp(tmp2[92]), obj15);
        obj12.children = items21;
        tmp59Result = tmp59(tmp(tmp2[91]).View, obj12);
      }
      items19[1] = tmp59Result;
      const obj16 = { style: contentAnimatedStyle, children: null };
      const obj17 = { user, guildId, disableStatus, pendingAvatarSrc: null, pendingAvatarDecoration: null, backgroundColor: null, statusStyle: null };
      let tmp77;
      if (isPreviewingChanges) {
        tmp77 = pendingAvatarSrc;
      }
      obj17.pendingAvatarSrc = tmp77;
      let tmp78;
      if (isPreviewingChanges) {
        tmp78 = pendingAvatarDecoration;
      }
      obj17.pendingAvatarDecoration = tmp78;
      obj17.backgroundColor = avatarBackground;
      const obj18 = { backgroundColor: statusBackground };
      obj17.statusStyle = obj18;
      const items22 = [containerBackground(OpenableUserProfileAvatar, obj17), ];
      const items23 = [tmp3.profileContentWrapper, ];
      if (!tmp9) {
        let num2 = 0;
        if (null == tmp17) {
          num2 = pendingBadgeHiddenBadges;
        }
      } else {
        num2 = 0;
      }
      const obj19 = { style: null, children: null };
      const obj20 = { paddingTop: num2, paddingBottom: channel(guildId[52])().bottom + pendingBadgeDisplayOrder };
      items23[1] = obj20;
      obj19.style = items23;
      const obj21 = { customStatusActivity: tmp17, user, guildId, channelId: null, hasCustomProfileTheme: null, showUserProfileActionSheet: null, isPreviewingChanges: null, bubbleRef: null };
      let id3;
      if (channel != null) {
        id3 = channel.id;
      }
      obj21.channelId = id3;
      obj21.hasCustomProfileTheme = tmp26;
      obj21.showUserProfileActionSheet = showUserProfileActionSheet;
      obj21.isPreviewingChanges = isPreviewingChanges;
      obj21.bubbleRef = ref;
      const items24 = [containerBackground(closure_23, obj21), , ];
      let tmp59Result2 = null;
      if (null != stateFromStores) {
        const obj22 = { style: null, children: null };
        const items25 = [, ];
        ({ primaryInfo: arr30[0], profileContent: arr30[1] } = tmp3);
        obj22.style = items25;
        const obj23 = { user, channelId: null, guildId: null, displayProfile: null, displayNameOverride: null, pronounsOverride: null, badgesOverride: null, pendingDisplayNameStyles: null, badgeContainerBackground: null, isPreviewingChanges: null };
        let id4;
        if (channel != null) {
          id4 = channel.id;
        }
        obj23.channelId = id4;
        obj23.guildId = guildId;
        obj23.displayProfile = displayProfile;
        let tmp86;
        if (isPreviewingChanges) {
          tmp86 = pendingGlobalName;
        }
        obj23.displayNameOverride = tmp86;
        let tmp87;
        if (isPreviewingChanges) {
          tmp87 = pendingPronouns;
        }
        obj23.pronounsOverride = tmp87;
        let tmp88;
        if (isPreviewingChanges) {
          tmp88 = memo1;
        }
        obj23.badgesOverride = tmp88;
        let tmp89;
        if (isPreviewingChanges) {
          tmp89 = pendingDisplayNameStyles;
        }
        obj23.pendingDisplayNameStyles = tmp89;
        obj23.badgeContainerBackground = containerBackground;
        obj23.isPreviewingChanges = isPreviewingChanges;
        const items26 = [tmp61(boardTabIndex, obj23), , , , , , ];
        let tmp61Result7 = user.id !== stateFromStores.id;
        if (tmp61Result7) {
          const obj24 = { user, guildId };
          tmp61Result7 = tmp61(tmp(tmp2[84]), obj24);
        }
        items26[1] = tmp61Result7;
        let tmp61Result8 = relationshipType === RelationshipTypes.PENDING_INCOMING;
        if (tmp61Result8) {
          let obj25 = { user, channelId: null, guildId: null, applicationId: null, style: null, showUserProfile: null };
          let id5;
          if (channel != null) {
            id5 = channel.id;
          }
          obj25.channelId = id5;
          obj25.guildId = guildId;
          obj25.applicationId = originApplicationId;
          obj25.style = obj8;
          obj25.showUserProfile = showUserProfileActionSheet;
          tmp61Result8 = tmp61(tmp(tmp2[85]), obj25);
          const tmpResult7 = tmp(tmp2[85]);
        }
        items26[2] = tmp61Result8;
        items26[3] = incomingGameRelationshipsForUser.map((applicationId) => {
          const obj = { user, isGameRelationship: true, applicationId: applicationId.applicationId, channelId: null, guildId: null, style: null, showUserProfile: null };
          let id;
          if (channel != null) {
            id = channel.id;
          }
          obj.channelId = id;
          obj.guildId = guildId;
          obj.style = obj8;
          obj.showUserProfile = showUserProfileActionSheet;
          return closure_2_20(UserProfileIncomingFriendRequestDefault, obj, applicationId.applicationId);
        });
        const obj26 = { user, style: obj8 };
        items26[4] = tmp61(tmp(tmp2[86]), obj26);
        let tmp61Result9 = user.id === stateFromStores.id && !isPreviewingChanges;
        if (tmp61Result9) {
          const obj27 = { guildId };
          tmp61Result9 = tmp61(activityTabIndex, obj27);
        }
        items26[5] = tmp61Result9;
        let tmp61Result10 = user.id !== stateFromStores.id;
        if (tmp61Result10) {
          const obj28 = { user, disableCalls: null, disableMessage: null, location: null, hasCustomProfileTheme: null, style: null };
          if (!disableCalls) {
            disableCalls = relationshipType === tmp91.BLOCKED;
          }
          if (!disableCalls) {
            disableCalls = user.isProvisional;
          }
          obj28.disableCalls = disableCalls;
          obj28.disableMessage = disableMessage;
          obj28.location = _location;
          obj28.hasCustomProfileTheme = tmp26;
          obj28.style = tmp3.primaryButtons;
          tmp61Result10 = tmp61(tmp(tmp2[87]), obj28);
          const tmpResult8 = tmp(tmp2[87]);
        }
        items26[6] = tmp61Result10;
        obj22.children = items26;
        tmp59Result2 = tmp59(tmp79, obj22);
        tmp91 = RelationshipTypes;
      }
      items24[1] = tmp59Result2;
      if (!tmp33) {
        if (!tmp37) {
          if (!tmp38) {
            let callback4Result = callback4();
          }
          const obj29 = { children: null };
          items24[2] = callback4Result;
          obj19.children = items24;
          items22[1] = tmp59(tmp79, obj19);
          obj16.children = items22;
          items19[2] = tmp59(tmp(tmp2[91]).View, obj16);
          obj29.children = items19;
          return tmp59(tmp60, obj29);
        }
      }
      const obj30 = { onLayout: callback, children: null };
      const obj31 = { style: tmp3.profileTablist, children: null };
      const obj32 = { state: segmentedControlState, variant: null };
      let str;
      if (tmp26) {
        str = "overlay";
      }
      const obj33 = { children: null };
      obj32.variant = str;
      const items27 = [containerBackground(tmp6(tmp2[94]).Tabs, obj32), ];
      const obj34 = { ref: ref1, style: null, collapsable: false, pointerEvents: "box-none" };
      const rect = { position: "absolute", left: null, top: 0, right: 0, bottom: 0 };
      const _Math = Math;
      rect.left = `${Math.max(wishlistTabIndex, 0) / arr21.length * 100}%`;
      obj34.style = rect;
      items27[1] = containerBackground(navigateToPremium, obj34);
      obj31.children = items27;
      const items28 = [stateFromStores1(navigateToPremium, obj31), , ];
      const obj35 = { ref: pagerRef, onLayout: measureFill, style: pagesHeightStyle, children: null };
      const obj36 = { state: segmentedControlState };
      obj35.children = containerBackground(tmp6(tmp2[95]).SegmentedControlPages, obj36);
      items28[1] = containerBackground(tmp(tmp2[91]).View, obj35);
      const obj37 = { anchorRef: ref1, isVisible, markAsDismissed, onViewWishlist: tmp58 };
      items28[2] = containerBackground(tmp(tmp2[96]), obj37);
      obj33.children = items28;
      obj30.children = stateFromStores1(tmp6(tmp2[93]).LayerScope, obj33);
      callback4Result = tmp61(tmp79, obj30);
      tmp60 = stateFromStores2;
      const tmpResult6 = tmp(tmp2[90]);
    }
  }
  return null;
}));
export const PrimaryInfo = tmp5;
