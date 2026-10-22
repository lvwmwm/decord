// Module ID: 14279
// Function ID: 14280
// Name: UserProfileContent
// Dependencies: [32, 19, 17, 8654, 9339, 4843, 4911, 1392, 8622, 7687, 8645, 7288, 1087, 5252, 4818, 21, 8705, 504, 5196, 11038, 2002, 11028, 11022, 558, 576, 8652, 7237, 7398, 5018, 14280, 1128, 7943, 13466, 14281, 5660, 8706, 14283, 4805, 7480, 14286, 5976, 7269, 5648, 11042, 14287, 11151, 10737, 10090, 587, 5230, 14211, 14308, 14309, 14312, 14333, 8694, 8707, 1633, 14282, 14339, 14340, 7392, 11039, 8631, 11082, 8659, 14341, 8691, 8702, 9338, 14342, 14331, 14310, 14343, 14344, 14345, 14346, 13473, 14347, 14213, 14349, 11123, 7265, 14267, 14350, 14270, 14355, 14359, 14365, 8869, 14366, 14367, 14372, 14373, 8719, 5038, 14377, 8708, 14184, 5583, 11792, 14378, 2]

// Module 14279 (UserProfileContent)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import Constants2 from "Constants" /* 1087 */;
import intl5 from "intl" /* 1128 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4818 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5252 */;
import ToastUtils from "ToastUtils" /* 5648 */;
import ClipboardUtils from "ClipboardUtils" /* 7269 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7398 */;
import Constants3 from "Constants" /* 8645 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8659 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8705 */;
import closeVoicePanelsDefault from "closeVoicePanels" /* 10737 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 11123 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 13466 */;
import ProvisionalAccountExplainer from "ProvisionalAccountExplainer" /* 13473 */;
import UserProfileActivityDefault from "UserProfileActivity" /* 14213 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 14312 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 14341 */;
import WishlistUtils from "WishlistUtils" /* 14342 */;
import UserProfilePrivateInfoBannerDefault from "UserProfilePrivateInfoBanner" /* 14346 */;
import UserProfileDismissibleUpsellsDefault from "UserProfileDismissibleUpsells" /* 14347 */;
import UserProfileConnections from "UserProfileConnections" /* 14350 */;
import UserProfileWishlistGrid from "UserProfileWishlistGrid" /* 14355 */;
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid" /* 14359 */;
import UserProfileMutualsDefault from "UserProfileMutuals" /* 14366 */;
import UserProfileIncomingFriendRequestDefault from "UserProfileIncomingFriendRequest" /* 14367 */;
import UserProfileRemediatedNoticeDefault from "UserProfileRemediatedNotice" /* 14372 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8654 */;
import WishlistStore from "WishlistStore" /* 9339 */;
import GuildStore from "GuildStore" /* 4843 */;
import RelationshipStore from "RelationshipStore" /* 4911 */;
import UserStore from "UserStore" /* 1392 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8622 */;
import UserProfileStore from "UserProfileStore" /* 7687 */;
import Constants from "Constants" /* 7288 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const UserProfileWishlistGridDefault = UserProfileWishlistGrid;
let dependencyMap;

let closure_14;
let closure_15;
let closure_19;
let closure_20;
let closure_21;
let tmp3;
const UserProfileActivityTabDefault = tmp3(14333);
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
    obj.openLazy(asyncRequire(11038, dependencyMap.paths), "UserProfileCustomStatusActionSheet", obj2, "stack");
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
  const tmp10 = closure_19;
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
function RemoveGameFriendIconButton(user) {
  let intl;
  user = user.user;
  const guildId = user.guildId;
  const channelId = user.channelId;
  const items = [channelId, guildId, user];
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { user, guildId, channelId };
    obj.openLazy(asyncRequire(14281, dependencyMap.paths), "UserProfileGameFriendActionSheet", obj2, "stack");
  }, items);
  let obj = { size: "sm", variant: "secondary-overlay", icon: closure_19(user(channelId[34]).UserPlatformIcon, { size: "sm", color: "white" }), accessibilityLabel: intl.string(user(channelId[30]).t.cvSt1J), onPress: callback };
  const IconButton = user(channelId[31]).IconButton;
  intl = user(channelId[30]).intl;
  return closure_19(IconButton, obj);
}
let react = react_mod;
let View = react_native.View;
const UserProfileSections = Constants3.UserProfileSections;
({ PROFILE_CONTENT_BOTTOM_PADDING: closure_14, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_15 } = Constants);
const RelationshipTypes = Constants2.RelationshipTypes;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: closure_19, Fragment: closure_20, jsxs: closure_21 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function RemoveFriendIconButton(user) {
  let newestAnalyticsLocation;
  let obj = user(newestAnalyticsLocation[24]);
  const cResult = obj.c(9);
  user = user.user;
  let obj2 = user(newestAnalyticsLocation[25]);
  const trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
  newestAnalyticsLocation = trackUserProfileAction(newestAnalyticsLocation[26])().newestAnalyticsLocation;
  const tmp4 = trackUserProfileAction;
  if (cResult[0] === newestAnalyticsLocation) {
    if (cResult[1] === trackUserProfileAction) {
      let tmp5;
      let tmp9;
      let tmp8;
      if (cResult[2] === user) {
        tmp5 = cResult[3];
      }
      const onConfirm = tmp5;
      const tmp4Result = tmp4(newestAnalyticsLocation[28]);
      const name = tmp4Result.useName(user);
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp11 = closure_19(user(newestAnalyticsLocation[29]).UserCheckIcon, { size: "sm", color: "white" });
        const intl = tmp(tmp2[30]).intl;
        const stringResult = intl.string(user(newestAnalyticsLocation[30]).t.cvSt1J);
        cResult[4] = tmp11;
        cResult[5] = stringResult;
        tmp9 = stringResult;
        tmp8 = tmp11;
      } else {
        tmp8 = cResult[4];
        tmp9 = cResult[5];
      }
      if (cResult[6] === tmp5) {
        let tmp13;
        if (cResult[7] === name) {
          tmp13 = cResult[8];
        }
        return tmp13;
      }
      const obj3 = {
        size: "sm",
        variant: "secondary-overlay",
        icon: tmp8,
        accessibilityLabel: tmp9,
        onPress() {
              const obj = UserProfileAlertUtils;
              const obj2 = { userDisplayName: name, onConfirm };
              obj.confirmRemoveFriend(obj2);
            }
      };
      const tmp15 = closure_19(user(newestAnalyticsLocation[31]).IconButton, obj3);
      cResult[6] = tmp5;
      cResult[7] = name;
      cResult[8] = tmp15;
      tmp13 = tmp15;
    }
  }
  function handleConfirm() {
    trackUserProfileAction({ action: "REMOVE_FRIEND" });
    const obj = RelationshipActionCreatorsDefault;
    const obj2 = { location: newestAnalyticsLocation };
    obj.removeFriend(user.id, obj2);
  }
  cResult[0] = newestAnalyticsLocation;
  cResult[1] = trackUserProfileAction;
  cResult[2] = user;
  cResult[3] = handleConfirm;
  tmp5 = handleConfirm;
}) : (function RemoveFriendIconButton(user) {
  let intl;
  user = user.user;
  let newestAnalyticsLocation;
  function handleConfirm() {
    trackUserProfileAction({ action: "REMOVE_FRIEND" });
    const obj = RelationshipActionCreatorsDefault;
    const obj2 = { location: newestAnalyticsLocation };
    obj.removeFriend(user.id, obj2);
  }
  let obj = user(newestAnalyticsLocation[25]);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  newestAnalyticsLocation = trackUserProfileAction(newestAnalyticsLocation[26])().newestAnalyticsLocation;
  let obj2 = trackUserProfileAction(newestAnalyticsLocation[28]);
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
  const IconButton = user(newestAnalyticsLocation[31]).IconButton;
  intl = user(newestAnalyticsLocation[30]).intl;
  return closure_19(IconButton, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function PrimaryInfo(channelId) {
  let badgeContainerBackground;
  let badgesOverride;
  let displayNameOverride;
  let displayProfile;
  let entryPointRef;
  let guildId;
  let isPreviewingChanges;
  let onOpenBadgeDirectory;
  let pendingDisplayNameStyles;
  let pronounsOverride;
  let showBadgeDirectoryNuxCoachmark;
  let style;
  let tmp14;
  let tmp15;
  let trackUserProfileAction;
  let user;
  let userTag;
  let obj = userTag(576);
  const cResult = obj.c(38);
  ({ user, guildId, displayProfile, displayNameOverride, pronounsOverride, badgesOverride, pendingDisplayNameStyles, style, badgeContainerBackground, isPreviewingChanges, showBadgeDirectoryNuxCoachmark } = channelId);
  let tmp4 = undefined !== showBadgeDirectoryNuxCoachmark;
  channelId = channelId.channelId;
  if (tmp4) {
    tmp4 = showBadgeDirectoryNuxCoachmark;
  }
  let obj2 = trackUserProfileAction(5018);
  userTag = obj2.useUserTag(user);
  const tmp7 = trackUserProfileAction(8706)(displayProfile);
  if (tmp4) {
    let flag;
    if (displayProfile != null) {
      flag = displayProfile.isLoaded;
    }
    if (flag == null) {
      flag = false;
    }
    tmp4 = flag;
  }
  if (cResult[0] === tmp4) {
    let tmp9;
    let tmp10;
    if (cResult[1] === user.id) {
      tmp9 = cResult[2];
    }
    const tmpResult = userTag(14283);
    const variantProps = tmpResult.useBadgeDirectoryNuxCoachmarkVariant(tmp9).variantProps;
    if (cResult[3] !== variantProps) {
      let items1;
      if (null != variantProps) {
        const items = [tmp(4805).DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER];
        items1 = items;
      } else {
        items1 = [];
      }
      cResult[3] = variantProps;
      cResult[4] = items1;
      tmp10 = items1;
    } else {
      tmp10 = cResult[4];
    }
    const tmpResult4 = userTag(7480);
    [tmp14, tmp15] = tmpResult4.useSelectedDismissibleContent(tmp10);
    _slicedToArray(tmpResult4.useSelectedDismissibleContent(tmp10), 2);
    const tmp16 = tmp14 === userTag(4805).DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER;
    const tmpResult5 = userTag(14286);
    const badgeDirectoryNuxEntryPoint = tmpResult5.useBadgeDirectoryNuxEntryPoint(tmp16, tmp15);
    ({ entryPointRef, onOpenBadgeDirectory } = badgeDirectoryNuxEntryPoint);
    const tmp5Result = trackUserProfileAction(5976);
    const name = tmp5Result.useName(guildId, channelId, user);
    if (cResult[5] === name) {
      let tmp19;
      if (cResult[6] === displayNameOverride) {
        tmp19 = cResult[7];
      }
      const tmpResult6 = userTag(8652);
      trackUserProfileAction = tmpResult6.useUserProfileAnalyticsContext().trackUserProfileAction;
      if (cResult[8] === trackUserProfileAction) {
        let tmp22;
        let tmp23;
        let tmp28;
        if (cResult[9] === userTag) {
          tmp22 = cResult[10];
        }
        if (cResult[11] !== trackUserProfileAction) {
          function handlePressPronouns() {
            trackUserProfileAction({ action: "PRESS_PRONOUNS" });
            const obj = ToastUtils;
            obj.presentUserPronouns();
          }
          cResult[11] = trackUserProfileAction;
          cResult[12] = handlePressPronouns;
          class H {
            constructor() {
              trackUserProfileAction({ action: "COPY_USERNAME" });
              const obj = ClipboardUtils;
              obj.copy(userTag);
              const obj2 = ToastUtils;
              const result = obj2.presentUsernameCopied();
            }
          }
        } else {
          tmp23 = cResult[12];
        }
        if (pronounsOverride == null) {
          let pronouns;
          if (displayProfile != null) {
            pronouns = displayProfile.pronouns;
          }
          pronounsOverride = pronouns;
        }
        if (badgesOverride == null) {
          badgesOverride = tmp7;
        }
        class H {
          constructor() {
            trackUserProfileAction({ action: "COPY_USERNAME" });
            const obj = ClipboardUtils;
            obj.copy(userTag);
            const obj2 = ToastUtils;
            const result = obj2.presentUsernameCopied();
          }
        }
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1128).intl;
          cResult[13] = intl.string(userTag(1128).t.y5MwJy);
          intl.string(userTag(1128).t.y5MwJy);
          class H {
            constructor() {
              trackUserProfileAction({ action: "COPY_USERNAME" });
              const obj = ClipboardUtils;
              obj.copy(userTag);
              const obj2 = ToastUtils;
              const result = obj2.presentUsernameCopied();
            }
          }
        } else {
          tmp28 = cResult[13];
        }
        let tmp30;
        if (!isPreviewingChanges) {
          tmp30 = tmp22;
        }
        let tmp31;
        if (!isPreviewingChanges) {
          tmp31 = tmp23;
        }
        if (cResult[14] === badgeContainerBackground) {
          if (cResult[15] === entryPointRef) {
            if (cResult[16] === guildId) {
              if (cResult[17] === tmp19) {
                if (cResult[18] === onOpenBadgeDirectory) {
                  if (cResult[19] === pendingDisplayNameStyles) {
                    if (cResult[20] === style) {
                      if (cResult[21] === tmp26) {
                        if (cResult[22] === tmp30) {
                          if (cResult[23] === tmp31) {
                            if (cResult[24] === !isPreviewingChanges) {
                              if (cResult[25] === pronounsOverride) {
                                if (cResult[26] === badgesOverride) {
                                  let tmp33;
                                  if (cResult[27] === user) {
                                    tmp33 = cResult[28];
                                  }
                                  if (cResult[29] === entryPointRef) {
                                    if (cResult[30] === variantProps) {
                                      if (cResult[31] === tmp16) {
                                        if (cResult[32] === tmp15) {
                                          let tmp36;
                                          if (cResult[33] === user.id) {
                                            tmp36 = cResult[34];
                                          }
                                          if (cResult[35] === tmp33) {
                                            let tmp39;
                                            if (cResult[36] === tmp36) {
                                              tmp39 = cResult[37];
                                            }
                                            return tmp39;
                                          }
                                          const obj3 = { children: tmp42 };
                                          class H {
                                            constructor() {
                                              trackUserProfileAction({ action: "COPY_USERNAME" });
                                              const obj = ClipboardUtils;
                                              obj.copy(userTag);
                                              const obj2 = ToastUtils;
                                              const result = obj2.presentUsernameCopied();
                                            }
                                          }
                                          tmp42[0] = tmp33;
                                          tmp42[1] = tmp36;
                                          const tmp43 = closure_21(closure_20, obj3);
                                          cResult[35] = tmp33;
                                          cResult[36] = tmp36;
                                          cResult[37] = tmp43;
                                          tmp39 = tmp43;
                                        }
                                      }
                                    }
                                  }
                                  let tmp37 = null != variantProps;
                                  if (tmp37) {
                                    const obj4 = { targetRef: entryPointRef, userId: user.id, variantProps, visible: null, markAsDismissed: tmp15 };
                                    class H {
                                      constructor() {
                                        trackUserProfileAction({ action: "COPY_USERNAME" });
                                        const obj = ClipboardUtils;
                                        obj.copy(userTag);
                                        const obj2 = ToastUtils;
                                        const result = obj2.presentUsernameCopied();
                                      }
                                    }
                                    tmp37 = closure_19(tmp5(14287), obj4);
                                  }
                                  class H {
                                    constructor() {
                                      trackUserProfileAction({ action: "COPY_USERNAME" });
                                      const obj = ClipboardUtils;
                                      obj.copy(userTag);
                                      const obj2 = ToastUtils;
                                      const result = obj2.presentUsernameCopied();
                                    }
                                  }
                                  cResult[30] = variantProps;
                                  cResult[31] = tmp16;
                                  cResult[32] = tmp15;
                                  cResult[33] = user.id;
                                  cResult[34] = tmp37;
                                  tmp36 = tmp37;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const obj5 = { user, guildId, displayName: tmp19, pronouns: pronounsOverride, badges: badgesOverride, style, badgeContainerBackground, onPressDisplayName: tmp26, displayNameAccessibilityHint: tmp28, onPressUserTag: tmp30, onPressPronouns: tmp31, showBadgeToastOnPress: !isPreviewingChanges, canOpenBadgeDirectory: true, badgeDirectoryEntryPointRef: entryPointRef, onOpenBadgeDirectory, pendingDisplayNameStyles };
        const tmp35 = closure_19(trackUserProfileAction(11042), obj5);
        cResult[14] = badgeContainerBackground;
        cResult[15] = entryPointRef;
        cResult[16] = guildId;
        cResult[17] = tmp19;
        cResult[18] = onOpenBadgeDirectory;
        cResult[19] = pendingDisplayNameStyles;
        cResult[20] = style;
        cResult[21] = tmp26;
        cResult[22] = tmp30;
        cResult[23] = tmp31;
        cResult[24] = !isPreviewingChanges;
        cResult[25] = pronounsOverride;
        cResult[26] = badgesOverride;
        cResult[27] = user;
        cResult[28] = tmp35;
        tmp33 = tmp35;
      }
      class H {
        constructor() {
          trackUserProfileAction({ action: "COPY_USERNAME" });
          const obj = ClipboardUtils;
          obj.copy(userTag);
          const obj2 = ToastUtils;
          const result = obj2.presentUsernameCopied();
        }
      }
      cResult[8] = trackUserProfileAction;
      cResult[9] = userTag;
      cResult[10] = H;
      tmp22 = H;
    }
    let tmp21 = name;
    if (null != displayNameOverride) {
      tmp21 = name;
      if (displayNameOverride.trim().length > 0) {
        tmp21 = displayNameOverride;
      }
    }
    cResult[5] = name;
    cResult[6] = displayNameOverride;
    cResult[7] = tmp21;
    tmp19 = tmp21;
  }
  const obj6 = { userId: user.id, enabled: tmp4, fetchCatalog: false, location: "UserProfileContent" };
  cResult[0] = tmp4;
  cResult[1] = user.id;
  cResult[2] = obj6;
  tmp9 = obj6;
}) : (function PrimaryInfo(arg0) {
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
  let obj = trackUserProfileAction(5018);
  const userTag = obj.useUserTag(user);
  let obj2 = { userId: user.id, enabled: showBadgeDirectoryNuxCoachmark, fetchCatalog: false, location: "UserProfileContent" };
  const tmp4 = trackUserProfileAction(8706)(displayProfile);
  const useBadgeDirectoryNuxCoachmarkVariant = userTag(14283).useBadgeDirectoryNuxCoachmarkVariant;
  userTag(14283);
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
  const useSelectedDismissibleContent = userTag(7480).useSelectedDismissibleContent;
  userTag(7480);
  if (null != variantProps) {
    const items = [userTag(4805).DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER];
    items1 = items;
  } else {
    items1 = [];
  }
  [tmp10, tmp11] = useSelectedDismissibleContent(items1);
  _slicedToArray(useSelectedDismissibleContent(items1), 2);
  const tmp12 = tmp10 === userTag(4805).DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER;
  const tmp5Result3 = userTag(14286);
  const badgeDirectoryNuxEntryPoint = tmp5Result3.useBadgeDirectoryNuxEntryPoint(tmp12, tmp11);
  ({ entryPointRef, onOpenBadgeDirectory } = badgeDirectoryNuxEntryPoint);
  const tmpResult = trackUserProfileAction(5976);
  const name = tmpResult.useName(guildId, channelId, user);
  let tmp15 = name;
  if (null != displayNameOverride) {
    tmp15 = name;
    if (displayNameOverride.trim().length > 0) {
      tmp15 = displayNameOverride;
    }
  }
  const tmp5Result4 = userTag(8652);
  trackUserProfileAction = tmp5Result4.useUserProfileAnalyticsContext().trackUserProfileAction;
  const items2 = [trackUserProfileAction, userTag];
  const callback = react.useCallback(() => {
    trackUserProfileAction({ action: "COPY_USERNAME" });
    const obj = ClipboardUtils;
    obj.copy(userTag);
    const obj2 = ToastUtils;
    const result = obj2.presentUsernameCopied();
  }, items2);
  const obj3 = { user, guildId, displayName: tmp15, pronouns: pronounsOverride, badges: badgesOverride, style, badgeContainerBackground, onPressDisplayName: tmp22, displayNameAccessibilityHint: intl.string(userTag(1128).t.y5MwJy), onPressUserTag: tmp23, onPressPronouns: handlePressPronouns, showBadgeToastOnPress: !isPreviewingChanges, canOpenBadgeDirectory: true, badgeDirectoryEntryPointRef: entryPointRef, onOpenBadgeDirectory, pendingDisplayNameStyles };
  const tmp17 = closure_21;
  const tmp18 = closure_20;
  const tmpResult2 = trackUserProfileAction(11042);
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
  intl = tmp5(1128).intl;
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
    tmp19Result = tmp19(tmp(14287), obj4);
  }
  children[1] = tmp19Result;
  return tmp17(tmp18, { children });
});
let closure_25 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditSection(guildId) {
  let PencilIcon2;
  let closure_2;
  let first;
  let intl3;
  let obj7;
  let tmp11;
  let tmp8;
  let trackUserProfileAction;
  let obj = guildId(576);
  const cResult = obj.c(24);
  guildId = guildId.guildId;
  const tmp5 = trackUserProfileAction(8705)();
  const obj2 = guildId(8652);
  trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function o() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = guildId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  const tmp10 = trackUserProfileAction(11151)();
  dependencyMap = tmp10;
  if (cResult[3] !== stateFromStores) {
    const obj3 = { guild: stateFromStores };
    cResult[3] = stateFromStores;
    cResult[4] = obj3;
    tmp11 = obj3;
  } else {
    tmp11 = cResult[4];
  }
  const tmp12 = trackUserProfileAction(11151)(tmp11);
  let closure_3 = tmp12;
  if (cResult[5] === tmp10) {
    let tmp13;
    if (cResult[6] === trackUserProfileAction) {
      tmp13 = cResult[7];
    }
    if (cResult[8] === tmp12) {
      let tmp14;
      let tmp15;
      let tmp18;
      if (cResult[9] === trackUserProfileAction) {
        tmp14 = cResult[10];
      }
      const _Symbol = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { size: "sm", color: trackUserProfileAction(587).colors.WHITE };
        const PencilIcon = tmp(10090).PencilIcon;
        const tmp17 = closure_19(PencilIcon, obj4);
        cResult[11] = tmp17;
        tmp15 = tmp17;
      } else {
        tmp15 = cResult[11];
      }
      if (cResult[12] !== stateFromStores) {
        let stringResult;
        if (null != stateFromStores) {
          const intl2 = tmp(1128).intl;
          stringResult = intl2.string(tmp(1128).t.HmFaFB);
        } else {
          const intl = tmp(1128).intl;
          stringResult = intl.string(tmp(1128).t.s5vZlQ);
        }
        cResult[12] = stateFromStores;
        cResult[13] = stringResult;
        tmp18 = stringResult;
      } else {
        tmp18 = cResult[13];
      }
      if (cResult[14] === tmp13) {
        let tmp21;
        if (cResult[15] === tmp18) {
          tmp21 = cResult[16];
        }
        if (cResult[17] === stateFromStores) {
          let tmp24;
          if (cResult[18] === tmp14) {
            tmp24 = cResult[19];
          }
          if (cResult[20] === tmp5.primaryButtons) {
            if (cResult[21] === tmp21) {
              let tmp28;
              if (cResult[22] === tmp24) {
                tmp28 = cResult[23];
              }
              return tmp28;
            }
          }
          const obj5 = { style: tmp5.primaryButtons, maxWidth: ACTION_SHEET_MAX_WIDTH, primaryButton: tmp21, secondaryButton: tmp24 };
          const tmp31 = closure_19(trackUserProfileAction(14211), obj5);
          cResult[20] = tmp5.primaryButtons;
          cResult[21] = tmp21;
          cResult[22] = tmp24;
          cResult[23] = tmp31;
          tmp28 = tmp31;
        }
        let tmp26;
        if (null != stateFromStores) {
          const obj6 = { variant: "primary", icon: closure_19(PencilIcon2, obj7), text: intl3.string(guildId(1128).t["PKQB/H"]), onPress: tmp14, grow: true };
          const Button = tmp(5230).Button;
          obj7 = { size: "sm", color: trackUserProfileAction(587).colors.WHITE };
          PencilIcon2 = tmp(10090).PencilIcon;
          intl3 = tmp(1128).intl;
          tmp26 = closure_19(Button, obj6);
        }
        cResult[17] = stateFromStores;
        cResult[18] = tmp14;
        cResult[19] = tmp26;
        tmp24 = tmp26;
      }
      const obj8 = { variant: "primary", icon: tmp15, text: tmp18, onPress: tmp13, grow: true };
      const tmp23 = closure_19(guildId(5230).Button, obj8);
      cResult[14] = tmp13;
      cResult[15] = tmp18;
      cResult[16] = tmp23;
      tmp21 = tmp23;
    }
    function handleEditGuildProfile() {
      trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideAllActionSheets();
      closeVoicePanelsDefault();
      closure_3();
    }
    cResult[8] = tmp12;
    cResult[9] = trackUserProfileAction;
    cResult[10] = handleEditGuildProfile;
    tmp14 = handleEditGuildProfile;
  }
  function handleEditProfile() {
    trackUserProfileAction({ action: "EDIT_PROFILE" });
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    closeVoicePanelsDefault();
    closure_2();
  }
  cResult[5] = tmp10;
  cResult[6] = trackUserProfileAction;
  cResult[7] = handleEditProfile;
  tmp13 = handleEditProfile;
}) : (function EditSection(guildId) {
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
  const tmp3 = trackUserProfileAction(8705)();
  let obj = guildId(8652);
  const tmp = trackUserProfileAction;
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const items = [GuildStore];
  const obj2 = guildId(504);
  const stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  dependencyMap = trackUserProfileAction(11151)();
  let closure_3 = trackUserProfileAction(11151)({ guild: stateFromStores });
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
  const tmp7 = trackUserProfileAction(14211);
  Button = guildId(5230).Button;
  obj5 = { size: "sm", color: trackUserProfileAction(587).colors.WHITE };
  PencilIcon = guildId(10090).PencilIcon;
  if (null != stateFromStores) {
    const intl2 = tmp4(1128).intl;
    stringResult = intl2.string(tmp4(1128).t.HmFaFB);
  } else {
    const intl = tmp4(1128).intl;
    stringResult = intl.string(tmp4(1128).t.s5vZlQ);
  }
  tmp6Result = undefined;
  if (null != stateFromStores) {
    const obj6 = {
      variant: "primary",
      icon: closure_19(PencilIcon2, obj7),
      text: intl3.string(guildId(1128).t["PKQB/H"]),
      onPress: function handleEditGuildProfile() {
          trackUserProfileAction({ action: "EDIT_GUILD_PROFILE" });
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideAllActionSheets();
          closeVoicePanelsDefault();
          closure_3();
        },
      grow: true
    };
    const Button2 = tmp4(5230).Button;
    obj7 = { size: "sm", color: tmp(587).colors.WHITE };
    PencilIcon2 = tmp4(10090).PencilIcon;
    intl3 = tmp4(1128).intl;
    tmp6Result = tmp6(Button2, obj6);
  }
  return closure_19(tmp7, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileWidgetsBoardContainer(arg0) {
  let containerBackground;
  let isCurrentUser;
  let isVisible;
  let items;
  let tmp5;
  let userId;
  const obj = react2;
  const cResult = obj.c(18);
  ({ userId, isVisible, isCurrentUser, containerBackground } = arg0);
  const tmp4 = UserProfileSharedStylesDefault();
  if (cResult[0] !== containerBackground) {
    const obj2 = { backgroundColor: containerBackground };
    cResult[0] = containerBackground;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.card) {
    let tmp6;
    let tmp7;
    let tmp10;
    if (cResult[3] === tmp5) {
      tmp6 = cResult[4];
    }
    if (cResult[5] !== isCurrentUser) {
      const tmp8 = isCurrentUser && closure_19(tmp3(14308), {});
      cResult[5] = isCurrentUser;
      cResult[6] = tmp8;
      tmp7 = tmp8;
    } else {
      tmp7 = cResult[6];
    }
    if (cResult[7] !== isCurrentUser) {
      const tmp11 = isCurrentUser && closure_19(tmp3(14309), {});
      cResult[7] = isCurrentUser;
      cResult[8] = tmp11;
      tmp10 = tmp11;
    } else {
      tmp10 = cResult[8];
    }
    if (cResult[9] === tmp6) {
      if (cResult[10] === isVisible) {
        let tmp13;
        if (cResult[11] === userId) {
          tmp13 = cResult[12];
        }
        if (cResult[13] === tmp4.profileContent) {
          if (cResult[14] === tmp7) {
            if (cResult[15] === tmp10) {
              let tmp16;
              if (cResult[16] === tmp13) {
                tmp16 = cResult[17];
              }
              return tmp16;
            }
          }
        }
        const obj3 = { style: tmp4.profileContent, children: items };
        items = [tmp7, tmp10, tmp13];
        const tmp19 = closure_21(View, obj3);
        cResult[13] = tmp4.profileContent;
        cResult[14] = tmp7;
        cResult[15] = tmp10;
        cResult[16] = tmp13;
        cResult[17] = tmp19;
        tmp16 = tmp19;
      }
    }
    const obj4 = { userId, isVisible, cardStyle: tmp6 };
    const tmp15 = closure_19(UserProfileWidgetsBoardDefault, obj4);
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
}) : (function UserProfileWidgetsBoardContainer(isCurrentUser) {
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
    tmp6 = closure_19(tmp(14308), {});
  }
  items1 = [tmp6, , ];
  if (isCurrentUser) {
    isCurrentUser = closure_19(tmp(14309), {});
  }
  items1[1] = isCurrentUser;
  items1[2] = closure_19(UserProfileWidgetsBoardDefault, { userId, isVisible, cardStyle: items });
  return tmp4(tmp5, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileActivityTabContainer(arg0) {
  let channelId;
  let containerBackground;
  let currentUser;
  let guildId;
  let tmp5;
  let user;
  const obj = react2;
  const cResult = obj.c(17);
  ({ user, currentUser, guildId, channelId, containerBackground } = arg0);
  const tmp4 = UserProfileSharedStylesDefault();
  if (cResult[0] !== containerBackground) {
    const obj2 = { backgroundColor: containerBackground };
    cResult[0] = containerBackground;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.card) {
    let tmp6;
    if (cResult[3] === tmp5) {
      tmp6 = cResult[4];
    }
    if (cResult[5] === tmp4.cards) {
      let tmp7;
      if (cResult[6] === tmp4.profileContent) {
        tmp7 = cResult[7];
      }
      if (cResult[8] === tmp6) {
        if (cResult[9] === channelId) {
          if (cResult[10] === currentUser) {
            if (cResult[11] === guildId) {
              let tmp8;
              if (cResult[12] === user) {
                tmp8 = cResult[13];
              }
              if (cResult[14] === tmp7) {
                let tmp11;
                if (cResult[15] === tmp8) {
                  tmp11 = cResult[16];
                }
                return tmp11;
              }
              const obj3 = { style: tmp7, children: tmp8 };
              const tmp14 = closure_19(View, obj3);
              cResult[14] = tmp7;
              cResult[15] = tmp8;
              cResult[16] = tmp14;
              tmp11 = tmp14;
            }
          }
        }
      }
      const obj4 = { user, currentUser, guildId, channelId, cardStyle: tmp6 };
      const tmp10 = closure_19(UserProfileActivityTabDefault, obj4);
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
}) : (function UserProfileActivityTabContainer(arg0) {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileContent(user) {
  let _location;
  let activeIndex;
  let avatarDecorationOverride;
  let bannerAnimatedStyle;
  let bannerImageAnimatedStyle;
  let blurAnimatedProps;
  let closure_4;
  let contentAnimatedStyle;
  let disableStatus;
  let guildId;
  let hasCustomProfileTheme;
  let initialSection;
  let isPreviewingChanges;
  let isVisible;
  let obj5;
  let originApplicationId;
  let pendingAccentColor;
  let pendingAvatar;
  let pendingBadgeDisplayOrder;
  let pendingBadgeHiddenBadges;
  let pendingDisplayNameStyles;
  let pendingGlobalName;
  let pendingThemeColors;
  let scrollPosition;
  let scrollViewRef;
  let showBlur;
  let style;
  let tmp38;
  let tmp47;
  let tmp48;
  let wishlistId;
  let tmp = user;
  let tmp2 = guildId;
  let obj = user(guildId[24]);
  const cResult = obj.c(261);
  user = user.user;
  const channel = user.channel;
  guildId = user.guildId;
  const displayProfile = user.displayProfile;
  react = user.showUserProfileActionSheet;
  const disableCalls = user.disableCalls;
  const disableMessage = user.disableMessage;
  const navigationReplace = user.navigationReplace;
  ({ disableStatus, isPreviewingChanges } = user);
  ({ avatarDecorationOverride, location: _location } = user);
  const navigateToPremium = user.navigateToPremium;
  const navigateToShop = user.navigateToShop;
  ({ initialSection, scrollPosition, scrollViewRef } = user);
  let tmp4 = channel;
  let tmp5 = channel(guildId[16])();
  let closure_12 = tmp5;
  const tmp6 = channel(guildId[55])(originApplicationId);
  if (cResult[0] === tmp6) {
    let tmp7;
    let tmp11;
    let tmp10;
    let tmp16;
    let tmp18;
    let tmp22;
    let tmp27;
    if (cResult[1] === scrollPosition) {
      tmp7 = cResult[2];
    }
    const tmp8 = tmp4(tmp2[56])(tmp7);
    ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = tmp8);
    const bottom = tmp4(tmp2[57])().bottom;
    const tmpResult = tmp(tmp2[25]);
    const trackUserProfileAction = tmpResult.useUserProfileAnalyticsContext().trackUserProfileAction;
    let tmp9 = globalThis;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      let items = [navigateToPremium];
      const fn = function $() {
        return navigateToPremium.getCurrentUser();
      };
      cResult[3] = items;
      cResult[4] = fn;
      tmp11 = fn;
      tmp10 = items;
    } else {
      tmp10 = cResult[3];
      tmp11 = cResult[4];
    }
    const tmpResult12 = tmp(tmp2[17]);
    const stateFromStores = tmpResult12.useStateFromStores(tmp10, tmp11);
    let tmp14 = null;
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    const isWishlistOwner = id === user.id;
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      let tmp17 = _location;
      let items1 = [_location];
      cResult[5] = items1;
      tmp16 = items1;
    } else {
      tmp16 = cResult[5];
    }
    if (cResult[6] !== user.id) {
      function de() {
        const obj = { relationshipType: RelationshipStore.getRelationshipType(user.id), originApplicationId: RelationshipStore.getOriginApplicationId(user.id) };
        return obj;
      }
      cResult[6] = user.id;
      cResult[7] = de;
      tmp18 = de;
    } else {
      tmp18 = cResult[7];
    }
    const tmpResult13 = tmp(tmp2[17]);
    const stateFromStoresObject = tmpResult13.useStateFromStoresObject(tmp16, tmp18);
    const relationshipType = stateFromStoresObject.relationshipType;
    originApplicationId = stateFromStoresObject.originApplicationId;
    const tmpResult14 = tmp(tmp2[58]);
    const incomingGameRelationshipsForUser = tmpResult14.useIncomingGameRelationshipsForUser(user.id);
    const tmpResult15 = tmp(tmp2[59]);
    const isGameFriends = tmpResult15.useIsGameFriends(user.id);
    if (cResult[8] !== user.id) {
      let obj2 = { userId: user.id };
      cResult[8] = user.id;
      cResult[9] = obj2;
      tmp22 = obj2;
    } else {
      tmp22 = cResult[9];
    }
    const tmpResult16 = tmp(tmp2[60]);
    const userProfileGameFriendApplicationIds = tmpResult16.useUserProfileGameFriendApplicationIds(tmp22);
    let id1;
    const useName = tmp4(tmp2[40]).useName;
    tmp4(tmp2[40]);
    if (channel != null) {
      id1 = channel.id;
    }
    const name = useName(guildId, id1, user);
    if (cResult[10] === guildId) {
      let tmp31;
      let tmp30;
      if (cResult[11] === user) {
        tmp27 = cResult[12];
      }
      const tmpResult17 = tmp(tmp2[61]);
      const subscribeGuildMembers = tmpResult17.useSubscribeGuildMembers(tmp27, "UserProfileContent");
      tmp4(tmp2[62])(user.id);
      const _Symbol3 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        let items2 = [navigateToShop];
        class Se {
          constructor() {
            return navigateToShop.getPendingChanges();
          }
        }
        cResult[13] = items2;
        cResult[14] = Se;
        tmp31 = Se;
        tmp30 = items2;
      } else {
        tmp30 = cResult[13];
        tmp31 = cResult[14];
      }
      const tmpResult18 = tmp(tmp2[17]);
      const stateFromStoresObject1 = tmpResult18.useStateFromStoresObject(tmp30, tmp31);
      ({ pendingAvatar, pendingGlobalName } = stateFromStoresObject1);
      const pendingPronouns = stateFromStoresObject1.pendingPronouns;
      const pendingBio = stateFromStoresObject1.pendingBio;
      ({ pendingAccentColor, pendingThemeColors, pendingDisplayNameStyles } = stateFromStoresObject1);
      ({ pendingBadgeDisplayOrder, pendingBadgeHiddenBadges } = stateFromStoresObject1);
      if (cResult[15] === pendingAvatar) {
        let tmp39;
        let tmp42;
        let tmp41;
        if (cResult[16] === user.id) {
          let tmp35 = cResult[17];
        }
        let tmp37 = tmp4(tmp2[35])(displayProfile, tmp34);
        const _Symbol4 = Symbol;
        class Se {
          constructor() {
            return navigateToShop.getPendingChanges();
          }
        }
        if (tmp38 === Symbol.for("react.memo_cache_sentinel")) {
          const tmp40 = disableMessage;
          const items3 = [disableMessage];
          class Se {
            constructor() {
              return navigateToShop.getPendingChanges();
            }
          }
          cResult[18] = items3;
          tmp39 = items3;
        } else {
          tmp39 = cResult[18];
        }
        if (cResult[19] !== user.id) {
          class Ve {
            constructor() {
              return BadgeDirectoryStore.getBadges(user.id);
            }
          }
          const items4 = [user.id];
          class Se {
            constructor() {
              return navigateToShop.getPendingChanges();
            }
          }
          cResult[19] = user.id;
          cResult[20] = Ve;
          cResult[21] = items4;
          tmp42 = items4;
          tmp41 = Ve;
        } else {
          class Ve {
            constructor() {
              return BadgeDirectoryStore.getBadges(user.id);
            }
          }
          tmp42 = cResult[21];
        }
        const tmpResult19 = tmp(tmp2[17]);
        const stateFromStoresArray = tmpResult19.useStateFromStoresArray(tmp39, tmp41, tmp42);
        const _Symbol5 = Symbol;
        if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
          class Ve {
            constructor() {
              return BadgeDirectoryStore.getBadges(user.id);
            }
          }
          cResult[22] = tmp45;
          class Se {
            constructor() {
              return navigateToShop.getPendingChanges();
            }
          }
        } else {
          class Ve {
            constructor() {
              return BadgeDirectoryStore.getBadges(user.id);
            }
          }
        }
        const tmpResult20 = tmp(tmp2[64]);
        const isBadgeManagementEnabled = tmpResult20.useIsBadgeManagementEnabled(tmp44);
        if (cResult[23] === isBadgeManagementEnabled) {
          class Ve {
            constructor() {
              return BadgeDirectoryStore.getBadges(user.id);
            }
          }
          const effect = react.useEffect(tmp47, tmp48);
          class Se {
            constructor() {
              return navigateToShop.getPendingChanges();
            }
          }
          let obj3 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
          const tmpResult21 = tmp(tmp2[66]);
          const pendingProfileBadges = tmpResult21.getPendingProfileBadges(tmp37, stateFromStoresArray, obj3);
          cResult[27] = tmp37;
          cResult[28] = stateFromStoresArray;
          cResult[29] = pendingBadgeDisplayOrder;
          class Xe {
            constructor() {
              const tmp = isBadgeManagementEnabled;
              if (tmp) {
                const tmp3 = BadgeDirectoryStore.hasCatalogFor(user.id) && !BadgeDirectoryStore.isCatalogStaleFor(user.id);
                if (!tmp3) {
                  const obj2 = BadgeDirectoryActionCreators;
                  const badgeDirectory = obj2.fetchBadgeDirectory(tmp2.id);
                }
              }
            }
          }
          cResult[30] = pendingBadgeHiddenBadges;
          cResult[31] = pendingProfileBadges;
        }
        class Xe {
          constructor() {
            const tmp = isBadgeManagementEnabled;
            if (tmp) {
              const tmp3 = BadgeDirectoryStore.hasCatalogFor(user.id) && !BadgeDirectoryStore.isCatalogStaleFor(user.id);
              if (!tmp3) {
                const obj2 = BadgeDirectoryActionCreators;
                const badgeDirectory = obj2.fetchBadgeDirectory(tmp2.id);
              }
            }
          }
        }
        const items5 = [user.id, isBadgeManagementEnabled];
        cResult[23] = isBadgeManagementEnabled;
        cResult[24] = user.id;
        cResult[25] = Xe;
        cResult[26] = items5;
        tmp47 = Xe;
        tmp48 = items5;
      }
      let obj4 = { userId: user.id, image: pendingAvatar };
      const tmpResult22 = tmp(tmp2[63]);
      const pendingAvatarSrc = tmpResult22.getPendingAvatarSrc(obj4);
      cResult[15] = pendingAvatar;
      cResult[16] = user.id;
      cResult[17] = pendingAvatarSrc;
      tmp35 = pendingAvatarSrc;
    }
    if (null != guildId) {
      class Ve {
        constructor() {
          return BadgeDirectoryStore.getBadges(user.id);
        }
      }
      cResult[10] = guildId;
      class Se {
        constructor() {
          return navigateToShop.getPendingChanges();
        }
      }
      cResult[11] = user;
      cResult[12] = obj5;
      tmp27 = obj5;
    }
    obj5 = {};
  }
  let obj6 = { scrollPosition, bannerHeight: tmp6 };
  cResult[0] = tmp6;
  cResult[1] = scrollPosition;
  cResult[2] = obj6;
  tmp7 = obj6;
}) : (function UserProfileContent(user) {
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
  let obj11;
  let obj19;
  let obj35;
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
  closure_25 = undefined;
  closure_26 = undefined;
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
  let obj9;
  let tmp = channel;
  let tmp2 = guildId;
  ({ disableMessage, navigationReplace, disableStatus, location: _location, initialSection, scrollViewRef } = user);
  let tmp3 = channel(guildId[16])();
  let closure_8 = tmp3;
  const tmp4 = channel(guildId[55])(closure_17);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = channel(guildId[56])({ scrollPosition, bannerHeight: tmp4 }));
  const tmp5 = channel(guildId[56])({ scrollPosition, bannerHeight: tmp4 });
  const bottom = channel(guildId[57])().bottom;
  let obj = user(guildId[25]);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj2 = user(guildId[17]);
  let items1 = [stateFromStores];
  stateFromStores = obj2.useStateFromStores(items1, () => stateFromStores.getCurrentUser());
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tmp9 = id === user.id;
  isCurrentUser = tmp9;
  let items2 = [trackUserProfileAction];
  const tmp6Result = user(tmp2[17]);
  const stateFromStoresObject = tmp6Result.useStateFromStoresObject(items2, () => {
    const obj = { relationshipType: RelationshipStore.getRelationshipType(user.id), originApplicationId: RelationshipStore.getOriginApplicationId(user.id) };
    return obj;
  });
  ({ relationshipType, originApplicationId } = stateFromStoresObject);
  const tmp6Result21 = user(tmp2[58]);
  const incomingGameRelationshipsForUser = tmp6Result21.useIncomingGameRelationshipsForUser(user.id);
  const tmp6Result22 = user(tmp2[59]);
  const isGameFriends = tmp6Result22.useIsGameFriends(user.id);
  let obj3 = { userId: user.id };
  const tmp6Result23 = user(tmp2[60]);
  userProfileGameFriendApplicationIds = tmp6Result23.useUserProfileGameFriendApplicationIds(obj3);
  let id1;
  const useName = tmp(tmp2[40]).useName;
  tmp(tmp2[40]);
  if (channel != null) {
    id1 = channel.id;
  }
  name = useName(guildId, id1, user);
  const obj8 = showUserProfileActionSheet;
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
  const tmp6Result25 = user(tmp2[17]);
  const stateFromStoresObject1 = tmp6Result25.useStateFromStoresObject(items4, () => isCurrentUser.getPendingChanges());
  pendingBio = stateFromStoresObject1.pendingBio;
  ({ pendingAccentColor, pendingThemeColors, pendingBadgeDisplayOrder } = stateFromStoresObject1);
  pendingBadgeHiddenBadges = stateFromStoresObject1.pendingBadgeHiddenBadges;
  ({ pendingBanner, pendingAvatar, pendingAvatarDecoration, pendingGlobalName, pendingPronouns, pendingLegacyUsernameDisabled, pendingDisplayNameStyles } = stateFromStoresObject1);
  let obj4 = { userId: user.id, image: pendingAvatar };
  const tmp6Result26 = user(tmp2[63]);
  const pendingAvatarSrc = tmp6Result26.getPendingAvatarSrc(obj4);
  const tmp21 = tmp(tmp2[35])(displayProfile, pendingLegacyUsernameDisabled);
  closure_17 = tmp21;
  const items5 = [navigateToPremium];
  const items6 = [user.id];
  const tmp6Result27 = user(tmp2[17]);
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
  let obj5 = { user, displayProfile, pendingThemeColors: tmp27 };
  tmp27 = undefined;
  const tmpResult5 = tmp(tmp2[67]);
  if (isPreviewingChanges) {
    tmp27 = pendingThemeColors;
  }
  const tmpResult1Result = tmpResult5(obj5);
  const primaryColor = tmpResult1Result.primaryColor;
  hasCustomProfileTheme = tmp29;
  ({ theme, secondaryColor } = tmpResult1Result);
  const tmp6Result29 = user(tmp2[68]);
  const userProfileColors = tmp6Result29.useUserProfileColors({ theme, primaryColor, secondaryColor });
  containerBackground = userProfileColors.containerBackground;
  ({ avatarBackground, statusBackground } = userProfileColors);
  const ref = obj8.useRef(null);
  const ref1 = obj8.useRef(null);
  const items9 = [userProfileGameFriendApplicationIds];
  const tmp6Result30 = user(tmp2[17]);
  stateFromStores1 = tmp6Result30.useStateFromStores(items9, () => UserProfileStore.getFirstWishlistId(user.id));
  let obj6 = { wishlistId: stateFromStores1, userId: user.id };
  const tmp6Result31 = user(tmp2[69]);
  const fetchWishlist = tmp6Result31.useFetchWishlist(obj6);
  const items10 = [navigateToShop];
  const items11 = [stateFromStores1];
  const tmp6Result32 = user(tmp2[17]);
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
  const tmp6Result33 = user(tmp2[71]);
  const displayableBoardWidgets = tmp6Result33.useDisplayableBoardWidgets(user.id);
  const tmp6Result34 = user(tmp2[72]);
  let tmp38 = displayableBoardWidgets.length > 0 || tmp6Result34.useCanConjureCustomWidget("UserProfileContent", tmp9);
  closure_25 = tmp38;
  const tmp6Result35 = user(tmp2[73]);
  let tmp39 = tmp6Result35.useIsRecentActivityMobileEnabled("UserProfileContent") && null != stateFromStores;
  closure_26 = tmp39;
  const tmp6Result36 = user(tmp2[74]);
  const profileTabIndices = tmp6Result36.useProfileTabIndices(tmp38, tmp39, tmp36);
  wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  ({ boardTabIndex, activityTabIndex } = profileTabIndices);
  [tmp42, c28] = displayProfile(obj8.useState(0), 2);
  displayProfile(obj8.useState(0), 2);
  const callback = obj8.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp6Result37 = user(tmp2[75]);
  const wishlistViewerCoachmark = tmp6Result37.useWishlistViewerCoachmark({ isCurrentUser: tmp9, shouldShowWishlistTab: tmp36 });
  isVisible = wishlistViewerCoachmark.isVisible;
  markAsDismissed = wishlistViewerCoachmark.markAsDismissed;
  const items13 = [trackUserProfileAction, isVisible, markAsDismissed];
  const callback1 = obj8.useCallback((section) => {
    const obj = { action: "PRESS_SECTION", section };
    trackUserProfileAction(obj);
    const tmp2 = section === UserProfileSections.WISHLIST && isVisible;
    if (tmp2) {
      markAsDismissed(ContentDismissActionType.INDIRECT_ACTION);
    }
  }, items13);
  const tmp6Result38 = user(tmp2[74]);
  const profileSectionTabs = tmp6Result38.useProfileSectionTabs({ initialUserProfileSection: initialSection, wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange: callback1 });
  ({ activeProfileTabSection, setActiveProfileTabSection } = profileSectionTabs);
  restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  isVisible = tmp47;
  isVisible2 = tmp48;
  const items14 = [navigateToPremium];
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  callback2 = obj8.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    if (navigateToPremium != null) {
      navigateToPremium();
    }
  }, items14);
  const items15 = [navigateToShop];
  callback3 = obj8.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    if (navigateToShop != null) {
      navigateToShop();
    }
  }, items15);
  const items16 = [user, stateFromStores, containerBackground, tmp3, isPreviewingChanges, callback2, callback3, null != primaryColor, guildId, userProfileGameFriendApplicationIds, displayProfile, name, pendingBio, channel, showUserProfileActionSheet];
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
          tmp18Result = tmp18(tmp19(14349), obj7);
        }
        items2[4] = tmp18Result;
        obj9 = { userId: user.id, displayProfile, pendingBio: tmp26 };
        tmp26 = undefined;
        const tmp19Result = UserProfileAboutMeCardDefault;
        if (isPreviewingChanges) {
          tmp26 = pendingBio;
        }
        items2[5] = isBadgeManagementEnabled(tmp19Result, obj9);
        let tmp18Result4 = null != tmp21;
        if (tmp18Result4) {
          const obj10 = { userId: user.id, guildId };
          tmp18Result4 = tmp18(tmp19(7265), obj10);
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
          tmp18Result5 = tmp18(tmp19(14267), obj11);
        }
        items2[7] = tmp18Result5;
        const obj12 = { userId: user.id };
        items2[8] = isBadgeManagementEnabled(UserProfileConnections.UserProfileAccountConnectionsCard, obj12);
        const obj13 = { userId: user.id };
        items2[9] = isBadgeManagementEnabled(UserProfileConnections.UserProfileApplicationRoleConnectionsCard, obj13);
        let tmp18Result6 = !tmp25;
        if (tmp18Result6) {
          const obj25 = { userId: user.id, onBack: showUserProfileActionSheet };
          tmp18Result6 = tmp18(tmp19(14270), obj25);
        }
        items2[10] = tmp18Result6;
        return tmp38(tmp39, obj3);
      }
    }
    return null;
  }, items16);
  const items17 = [tmp3.profileContent, stateFromStores1, activeProfileTabSection === name.WISHLIST, user.id, tmp9];
  callback5 = obj8.useCallback(() => {
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
  const useMemo = obj8.useMemo;
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
      const obj2 = { id: "board", label: intl2.string(intl5.t.laViwx), page: isBadgeManagementEnabled(closure_27, obj3) };
      intl2 = tmp(1128).intl;
      obj3 = { userId: user.id, isVisible: isVisible2, isCurrentUser, containerBackground };
      push(obj2);
    }
    const tmp11 = closure_26 && null != stateFromStores;
    if (tmp11) {
      const push2 = items.push;
      const obj4 = { id: "activity", label: intl3.string(intl5.t.chq59f), page: tmp14(tmp15, obj5) };
      intl3 = tmp(1128).intl;
      obj5 = { user, currentUser: stateFromStores, guildId, channelId: id, containerBackground };
      id = undefined;
      tmp14 = isBadgeManagementEnabled;
      tmp15 = closure_28;
      if (channel != null) {
        id = channel.id;
      }
      push2(obj4);
    }
    const tmp23 = closure_24;
    if (tmp23) {
      const push3 = items.push;
      const obj6 = { id: "wishlist", label: intl4.string(intl5.t["7lZ31J"]), page: callback5() };
      intl4 = tmp(1128).intl;
      push3(obj6);
    }
    return items;
  }, items18);
  const tmp6Result39 = user(tmp2[88]);
  const measuredTabItems = tmp6Result39.useMeasuredTabItems(memo2);
  ({ items, pageHeights } = measuredTabItems);
  const tmp6Result40 = user(tmp2[89]);
  let obj7 = { pageWidth: tmp42, defaultIndex: activeProfileTabSectionIndex, itemSpacing: tmp(tmp2[48]).space.PX_24, items, onPageChange: handleTabChange };
  segmentedControlState = tmp6Result40.useSegmentedControlState(obj7);
  const items19 = [segmentedControlState, restoreActiveIndex];
  const layoutEffect = obj8.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items19);
  const items20 = [segmentedControlState, wishlistTabIndex, markAsDismissed, setActiveProfileTabSection];
  if (null != user) {
    if (null != stateFromStores) {
      let OpenableUserProfileAvatar;
      let num2;
      obj9 = { backgroundColor: containerBackground };
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
        let obj10 = { style: items21, children: isBadgeManagementEnabled(tmp(tmp2[96]), obj11) };
        items21 = [tmp3.privateBanner, bannerAnimatedStyle];
        View = tmp(tmp2[95]).View;
        obj11 = { primaryColor };
        tmp61 = isBadgeManagementEnabled(View, obj10);
      }
      const items22 = [tmp61, , , ];
      let obj12 = { user, displayProfile, bannerHeight: tmp4, pendingBanner: tmp65, pendingAvatarSrc: tmp66, pendingAccentColor: tmp67, pendingThemeColors: tmp68, disableInteraction: isPreviewingChanges, bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur };
      tmp65 = undefined;
      const tmpResult6 = tmp(tmp2[97]);
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
      items22[1] = isBadgeManagementEnabled(tmpResult6, obj12);
      let tmp58Result = !isPreviewingChanges;
      if (tmp58Result) {
        const items23 = [tmp3.bannerButtons, , ];
        let _private1;
        const View2 = tmp(tmp2[95]).View;
        if (displayProfile != null) {
          _private1 = displayProfile.private;
        }
        if (_private1) {
          _private1 = tmp3.bannerButtonsWithPrivateBanner;
        }
        let obj13 = { style: items23, children: items24 };
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
                const obj14 = { user };
                tmp63Result = tmp63(stateFromStores2, obj14);
              } else {
                tmp63Result = null;
                if (isGameFriends) {
                  const obj15 = { user };
                  tmp63Result = tmp63(closure_24, obj15);
                }
              }
              tmp71 = tmp63Result;
            }
          }
        }
        items24 = [tmp71, ];
        const obj16 = { user, currentUser: stateFromStores, displayProfile, channel };
        items24[1] = isBadgeManagementEnabled(tmp(tmp2[98]), obj16);
        tmp58Result = tmp58(View2, obj13);
      }
      items22[2] = tmp58Result;
      const obj17 = { style: contentAnimatedStyle, children: null };
      const obj18 = { user, guildId, disableStatus, pendingAvatarSrc: tmp76, pendingAvatarDecoration: tmp77, backgroundColor: avatarBackground, statusStyle: obj19 };
      tmp76 = undefined;
      const View3 = tmp(tmp2[95]).View;
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
      obj19 = { backgroundColor: statusBackground };
      const items25 = [isBadgeManagementEnabled(OpenableUserProfileAvatar, obj18), ];
      const items26 = [tmp3.profileContentWrapper, ];
      if (!tmp9) {
        num2 = 0;
        if (null == tmp18) {
          num2 = pendingBadgeDisplayOrder;
        }
      } else {
        num2 = 0;
      }
      const obj20 = { style: items26, children: null };
      const obj21 = { paddingTop: num2, paddingBottom: bottom + pendingBio };
      items26[1] = obj21;
      const obj22 = { customStatusActivity: tmp18, user, guildId, channelId: id3, hasCustomProfileTheme: null != primaryColor, showUserProfileActionSheet, isPreviewingChanges, bubbleRef: ref };
      id3 = undefined;
      const tmp80 = stateFromStores1;
      if (channel != null) {
        id3 = channel.id;
      }
      const items27 = [isBadgeManagementEnabled(tmp80, obj22), ];
      let tmp58Result2 = null;
      const LayerScope = tmp6(tmp2[99]).LayerScope;
      if (null != stateFromStores) {
        const obj23 = { style: items28, children: items29 };
        items28 = [, ];
        ({ primaryInfo: arr32[0], profileContent: arr32[1] } = tmp3);
        const obj24 = { user, channelId: id4, guildId, displayProfile, displayNameOverride: tmp85, pronounsOverride: tmp86, badgesOverride: tmp87, pendingDisplayNameStyles: tmp88, badgeContainerBackground: containerBackground, isPreviewingChanges, showBadgeDirectoryNuxCoachmark: tmp9 };
        id4 = undefined;
        const tmp83 = closure_25;
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
        items29 = [isBadgeManagementEnabled(tmp83, obj24), , , , , , ];
        let tmp63Result5 = user.id !== stateFromStores.id;
        if (tmp63Result5) {
          let obj25 = { user, guildId };
          tmp63Result5 = tmp63(tmp(tmp2[90]), obj25);
        }
        items29[1] = tmp63Result5;
        let tmp63Result6 = relationshipType === pendingBadgeHiddenBadges.PENDING_INCOMING;
        const tmp90 = pendingBadgeHiddenBadges;
        if (tmp63Result6) {
          const obj26 = { user, channelId: id5, guildId, applicationId: originApplicationId, style: obj9, showUserProfile: showUserProfileActionSheet };
          id5 = undefined;
          const tmpResult7 = tmp(tmp2[91]);
          if (channel != null) {
            id5 = channel.id;
          }
          tmp63Result6 = tmp63(tmpResult7, obj26);
        }
        items29[2] = tmp63Result6;
        items29[3] = incomingGameRelationshipsForUser.map((applicationId) => {
          let id;
          const obj = { user, isGameRelationship: true, applicationId: applicationId.applicationId, channelId: id, guildId, style: obj9, showUserProfile: showUserProfileActionSheet };
          id = undefined;
          const tmp = closure_19;
          const tmp2 = UserProfileIncomingFriendRequestDefault;
          if (channel != null) {
            id = channel.id;
          }
          return tmp(tmp2, obj, applicationId.applicationId);
        });
        const obj27 = { user, style: obj9 };
        items29[4] = isBadgeManagementEnabled(tmp(tmp2[92]), obj27);
        let tmp63Result7 = user.id === stateFromStores.id && !isPreviewingChanges;
        if (tmp63Result7) {
          const obj28 = { guildId };
          tmp63Result7 = tmp63(closure_26, obj28);
        }
        items29[5] = tmp63Result7;
        let tmp63Result8 = user.id !== stateFromStores.id;
        if (tmp63Result8) {
          const obj29 = { user, disableCalls, disableMessage, navigationReplace, location: _location, hasCustomProfileTheme: null != primaryColor, style: tmp3.primaryButtons };
          const tmpResult8 = tmp(tmp2[93]);
          if (!disableCalls) {
            disableCalls = relationshipType === tmp90.BLOCKED;
          }
          if (!disableCalls) {
            disableCalls = user.isProvisional;
          }
          tmp63Result8 = tmp63(tmpResult8, obj29);
        }
        items29[6] = tmp63Result8;
        tmp58Result2 = tmp58(tmp78, obj23);
      }
      const items30 = [tmp58Result2, ];
      if (!tmp36) {
        if (!tmp38) {
          let callback4Result;
          if (!tmp39) {
            callback4Result = callback4();
          }
          const obj30 = { children: items22 };
          const obj31 = { children: items30 };
          items30[1] = callback4Result;
          items27[1] = containerBackground(LayerScope, obj31);
          obj20.children = items27;
          items25[1] = containerBackground(isPreviewingChanges, obj20);
          obj17.children = items25;
          items22[3] = containerBackground(View3, obj17);
          return containerBackground(tmp59, obj30);
        }
      }
      const obj32 = { onLayout: callback, children: containerBackground(LayerScope2, obj35) };
      const obj33 = { style: tmp3.profileTablist, children: items31 };
      LayerScope2 = tmp6(tmp2[99]).LayerScope;
      const obj34 = { state: segmentedControlState, variant: str };
      str = undefined;
      const Tabs = tmp6(tmp2[100]).Tabs;
      if (null != primaryColor) {
        str = "overlay";
      }
      obj35 = { children: items32 };
      items31 = [isBadgeManagementEnabled(Tabs, obj34), ];
      const obj36 = { ref: ref1, style: rect, collapsable: false, pointerEvents: "box-none" };
      rect = { position: "absolute", left: `${Math.max(wishlistTabIndex, 0) / arr22.length * 100}%`, top: 0, right: 0, bottom: 0 };
      const _Math = Math;
      items31[1] = isBadgeManagementEnabled(isPreviewingChanges, obj36);
      items32 = [containerBackground(isPreviewingChanges, obj33), , ];
      const obj37 = { state: segmentedControlState, pageHeights, scrollPosition, scrollViewRef };
      items32[1] = isBadgeManagementEnabled(tmp(tmp2[88]), obj37);
      const obj38 = { anchorRef: ref1, isVisible, markAsDismissed, onViewWishlist: tmp57 };
      items32[2] = isBadgeManagementEnabled(tmp(tmp2[101]), obj38);
      callback4Result = tmp63(tmp78, obj32);
    }
  }
  return null;
}));
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileContent.tsx");

export default memoResult;
export const PrimaryInfo = tmp4;
