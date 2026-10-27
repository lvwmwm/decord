// Module ID: 14110
// Function ID: 14111
// Name: UserProfileContent
// Dependencies: [32, 19, 17, 8590, 9272, 2090, 4855, 1392, 8558, 7586, 8581, 7181, 1087, 7119, 2065, 21, 8641, 504, 5155, 10854, 2002, 10844, 10838, 558, 576, 8588, 7130, 7293, 5057, 14111, 1128, 7840, 13307, 14112, 5133, 8642, 14114, 2052, 7376, 14117, 5509, 7162, 4903, 10858, 14118, 10967, 11043, 10023, 587, 5479, 14042, 14139, 14140, 14143, 14164, 8630, 8643, 1633, 14113, 14170, 14171, 7287, 10855, 8567, 10898, 8595, 14172, 8627, 8638, 9271, 14173, 14162, 14141, 14174, 14175, 14176, 14177, 14178, 13314, 14179, 14044, 14181, 10939, 7158, 14098, 14182, 14101, 14187, 14191, 8805, 14197, 14198, 14203, 14204, 8655, 4945, 14208, 8644, 14015, 7124, 11678, 10927, 14209, 2]

// Module 14110 (UserProfileContent)
import react2 from "react" /* 576 */;
import Constants2 from "Constants" /* 1087 */;
import intl5 from "intl" /* 1128 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2065 */;
import ToastUtils from "ToastUtils" /* 4903 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import ActionSheetConstants from "ActionSheetConstants" /* 7119 */;
import ClipboardUtils from "ClipboardUtils" /* 7162 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7293 */;
import Constants3 from "Constants" /* 8581 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8595 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8641 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 10939 */;
import closeVoicePanelsDefault from "closeVoicePanels" /* 11043 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 13307 */;
import ProvisionalAccountExplainer from "ProvisionalAccountExplainer" /* 13314 */;
import UserProfileActivityDefault from "UserProfileActivity" /* 14044 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 14143 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 14172 */;
import WishlistUtils from "WishlistUtils" /* 14173 */;
import UserProfilePrivateInfoBannerDefault from "UserProfilePrivateInfoBanner" /* 14178 */;
import UserProfileDismissibleUpsellsDefault from "UserProfileDismissibleUpsells" /* 14179 */;
import UserProfileConnections from "UserProfileConnections" /* 14182 */;
import UserProfileWishlistGrid from "UserProfileWishlistGrid" /* 14187 */;
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid" /* 14191 */;
import UserProfileMutualsDefault from "UserProfileMutuals" /* 14197 */;
import UserProfileIncomingFriendRequestDefault from "UserProfileIncomingFriendRequest" /* 14198 */;
import UserProfileRemediatedNoticeDefault from "UserProfileRemediatedNotice" /* 14203 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8590 */;
import WishlistStore from "WishlistStore" /* 9272 */;
import GuildStore from "GuildStore" /* 2090 */;
import RelationshipStore from "RelationshipStore" /* 4855 */;
import UserStore from "UserStore" /* 1392 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8558 */;
import UserProfileStore from "UserProfileStore" /* 7586 */;
import Constants from "Constants" /* 7181 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
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
let tmp3;
const UserProfileActivityTabDefault = tmp3(14164);
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
    obj.openLazy(asyncRequire(10854, dependencyMap.paths), "UserProfileCustomStatusActionSheet", obj2, "stack");
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
function RemoveGameFriendIconButton(user) {
  let intl;
  user = user.user;
  const guildId = user.guildId;
  const channelId = user.channelId;
  const items = [channelId, guildId, user];
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { user, guildId, channelId };
    obj.openLazy(asyncRequire(14112, dependencyMap.paths), "UserProfileGameFriendActionSheet", obj2, "stack");
  }, items);
  let obj = { size: "sm", variant: "secondary-overlay", icon: closure_20(user(channelId[34]).UserPlatformIcon, { size: "sm", color: "white" }), accessibilityLabel: intl.string(user(channelId[30]).t.cvSt1J), onPress: callback };
  const IconButton = user(channelId[31]).IconButton;
  intl = user(channelId[30]).intl;
  return closure_20(IconButton, obj);
}
let react = react_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
const UserProfileSections = Constants3.UserProfileSections;
({ PROFILE_CONTENT_BOTTOM_PADDING: closure_15, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_16 } = Constants);
let RelationshipTypes = Constants2.RelationshipTypes;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: closure_20, Fragment: closure_21, jsxs: closure_22 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function RemoveFriendIconButton(user) {
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
        const tmp11 = closure_20(user(newestAnalyticsLocation[29]).UserCheckIcon, { size: "sm", color: "white" });
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
      const tmp15 = closure_20(user(newestAnalyticsLocation[31]).IconButton, obj3);
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
    icon: closure_20(user(newestAnalyticsLocation[29]).UserCheckIcon, { size: "sm", color: "white" }),
    accessibilityLabel: intl.string(user(newestAnalyticsLocation[30]).t.cvSt1J),
    onPress() {
      const obj = UserProfileAlertUtils;
      const obj2 = { userDisplayName, onConfirm: handleConfirm };
      obj.confirmRemoveFriend(obj2);
    }
  };
  const IconButton = user(newestAnalyticsLocation[31]).IconButton;
  intl = user(newestAnalyticsLocation[30]).intl;
  return closure_20(IconButton, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function PrimaryInfo(channelId) {
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
  let obj2 = trackUserProfileAction(5057);
  userTag = obj2.useUserTag(user);
  const tmp7 = trackUserProfileAction(8642)(displayProfile);
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
    const tmpResult = userTag(14114);
    const variantProps = tmpResult.useBadgeDirectoryNuxCoachmarkVariant(tmp9).variantProps;
    if (cResult[3] !== variantProps) {
      let items1;
      if (null != variantProps) {
        const items = [tmp(2052).DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER];
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
    const tmpResult4 = userTag(7376);
    [tmp14, tmp15] = tmpResult4.useSelectedDismissibleContent(tmp10);
    _slicedToArray(tmpResult4.useSelectedDismissibleContent(tmp10), 2);
    const tmp16 = tmp14 === userTag(2052).DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER;
    const tmpResult5 = userTag(14117);
    const badgeDirectoryNuxEntryPoint = tmpResult5.useBadgeDirectoryNuxEntryPoint(tmp16, tmp15);
    ({ entryPointRef, onOpenBadgeDirectory } = badgeDirectoryNuxEntryPoint);
    const tmp5Result = trackUserProfileAction(5509);
    const name = tmp5Result.useName(guildId, channelId, user);
    if (cResult[5] === name) {
      let tmp19;
      if (cResult[6] === displayNameOverride) {
        tmp19 = cResult[7];
      }
      const tmpResult6 = userTag(8588);
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
          class G {
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
        class G {
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
          class G {
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
                                          class G {
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
                                          const tmp43 = closure_22(closure_21, obj3);
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
                                    class G {
                                      constructor() {
                                        trackUserProfileAction({ action: "COPY_USERNAME" });
                                        const obj = ClipboardUtils;
                                        obj.copy(userTag);
                                        const obj2 = ToastUtils;
                                        const result = obj2.presentUsernameCopied();
                                      }
                                    }
                                    tmp37 = closure_20(tmp5(14118), obj4);
                                  }
                                  class G {
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
        const tmp35 = closure_20(trackUserProfileAction(10858), obj5);
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
      class G {
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
      cResult[10] = G;
      tmp22 = G;
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
  let obj = trackUserProfileAction(5057);
  const userTag = obj.useUserTag(user);
  let obj2 = { userId: user.id, enabled: showBadgeDirectoryNuxCoachmark, fetchCatalog: false, location: "UserProfileContent" };
  const tmp4 = trackUserProfileAction(8642)(displayProfile);
  const useBadgeDirectoryNuxCoachmarkVariant = userTag(14114).useBadgeDirectoryNuxCoachmarkVariant;
  userTag(14114);
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
  const useSelectedDismissibleContent = userTag(7376).useSelectedDismissibleContent;
  userTag(7376);
  if (null != variantProps) {
    const items = [userTag(2052).DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER];
    items1 = items;
  } else {
    items1 = [];
  }
  [tmp10, tmp11] = useSelectedDismissibleContent(items1);
  _slicedToArray(useSelectedDismissibleContent(items1), 2);
  const tmp12 = tmp10 === userTag(2052).DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER;
  const tmp5Result3 = userTag(14117);
  const badgeDirectoryNuxEntryPoint = tmp5Result3.useBadgeDirectoryNuxEntryPoint(tmp12, tmp11);
  ({ entryPointRef, onOpenBadgeDirectory } = badgeDirectoryNuxEntryPoint);
  const tmpResult = trackUserProfileAction(5509);
  const name = tmpResult.useName(guildId, channelId, user);
  let tmp15 = name;
  if (null != displayNameOverride) {
    tmp15 = name;
    if (displayNameOverride.trim().length > 0) {
      tmp15 = displayNameOverride;
    }
  }
  const tmp5Result4 = userTag(8588);
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
  const tmp17 = closure_22;
  const tmp18 = closure_21;
  const tmpResult2 = trackUserProfileAction(10858);
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
  const children = [closure_20(tmpResult2, obj3), ];
  let tmp19Result = null != variantProps;
  if (tmp19Result) {
    const obj4 = { targetRef: entryPointRef, userId: user.id, variantProps, visible: tmp12, markAsDismissed: tmp11 };
    tmp19Result = tmp19(tmp(14118), obj4);
  }
  children[1] = tmp19Result;
  return tmp17(tmp18, { children });
});
let closure_26 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditSection(guildId) {
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
  const tmp5 = trackUserProfileAction(8641)();
  const obj2 = guildId(8588);
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
  const tmp10 = trackUserProfileAction(10967)();
  dependencyMap = tmp10;
  if (cResult[3] !== stateFromStores) {
    const obj3 = { guild: stateFromStores };
    cResult[3] = stateFromStores;
    cResult[4] = obj3;
    tmp11 = obj3;
  } else {
    tmp11 = cResult[4];
  }
  const tmp12 = trackUserProfileAction(10967)(tmp11);
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
        const PencilIcon = tmp(10023).PencilIcon;
        const tmp17 = closure_20(PencilIcon, obj4);
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
          const tmp31 = closure_20(trackUserProfileAction(14042), obj5);
          cResult[20] = tmp5.primaryButtons;
          cResult[21] = tmp21;
          cResult[22] = tmp24;
          cResult[23] = tmp31;
          tmp28 = tmp31;
        }
        let tmp26;
        if (null != stateFromStores) {
          const obj6 = { variant: "primary", icon: closure_20(PencilIcon2, obj7), text: intl3.string(guildId(1128).t["PKQB/H"]), onPress: tmp14, grow: true };
          const Button = tmp(5479).Button;
          obj7 = { size: "sm", color: trackUserProfileAction(587).colors.WHITE };
          PencilIcon2 = tmp(10023).PencilIcon;
          intl3 = tmp(1128).intl;
          tmp26 = closure_20(Button, obj6);
        }
        cResult[17] = stateFromStores;
        cResult[18] = tmp14;
        cResult[19] = tmp26;
        tmp24 = tmp26;
      }
      const obj8 = { variant: "primary", icon: tmp15, text: tmp18, onPress: tmp13, grow: true };
      const tmp23 = closure_20(guildId(5479).Button, obj8);
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
  const tmp3 = trackUserProfileAction(8641)();
  let obj = guildId(8588);
  const tmp = trackUserProfileAction;
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const items = [GuildStore];
  const obj2 = guildId(504);
  const stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  dependencyMap = trackUserProfileAction(10967)();
  let closure_3 = trackUserProfileAction(10967)({ guild: stateFromStores });
  const obj3 = { style: tmp3.primaryButtons, maxWidth: ACTION_SHEET_MAX_WIDTH, primaryButton: closure_20(Button, obj4), secondaryButton: tmp6Result };
  obj4 = {
    variant: "primary",
    icon: closure_20(PencilIcon, obj5),
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
  const tmp7 = trackUserProfileAction(14042);
  Button = guildId(5479).Button;
  obj5 = { size: "sm", color: trackUserProfileAction(587).colors.WHITE };
  PencilIcon = guildId(10023).PencilIcon;
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
      icon: closure_20(PencilIcon2, obj7),
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
    const Button2 = tmp4(5479).Button;
    obj7 = { size: "sm", color: tmp(587).colors.WHITE };
    PencilIcon2 = tmp4(10023).PencilIcon;
    intl3 = tmp4(1128).intl;
    tmp6Result = tmp6(Button2, obj6);
  }
  return closure_20(tmp7, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileWidgetsBoardContainer(arg0) {
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
      const tmp8 = isCurrentUser && closure_20(tmp3(14139), {});
      cResult[5] = isCurrentUser;
      cResult[6] = tmp8;
      tmp7 = tmp8;
    } else {
      tmp7 = cResult[6];
    }
    if (cResult[7] !== isCurrentUser) {
      const tmp11 = isCurrentUser && closure_20(tmp3(14140), {});
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
        const tmp19 = authStore6(metroRequire, obj3);
        cResult[13] = tmp4.profileContent;
        cResult[14] = tmp7;
        cResult[15] = tmp10;
        cResult[16] = tmp13;
        cResult[17] = tmp19;
        tmp16 = tmp19;
      }
    }
    const obj4 = { userId, isVisible, cardStyle: tmp6 };
    const tmp15 = closure_20(UserProfileWidgetsBoardDefault, obj4);
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
  const tmp4 = authStore6;
  const tmp5 = metroRequire;
  if (isCurrentUser) {
    tmp6 = closure_20(tmp(14139), {});
  }
  items1 = [tmp6, , ];
  if (isCurrentUser) {
    isCurrentUser = closure_20(tmp(14140), {});
  }
  items1[1] = isCurrentUser;
  items1[2] = closure_20(UserProfileWidgetsBoardDefault, { userId, isVisible, cardStyle: items });
  return tmp4(tmp5, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileActivityTabContainer(arg0) {
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
              const tmp14 = closure_20(metroRequire, obj3);
              cResult[14] = tmp7;
              cResult[15] = tmp8;
              cResult[16] = tmp14;
              tmp11 = tmp14;
            }
          }
        }
      }
      const obj4 = { user, currentUser, guildId, channelId, cardStyle: tmp6 };
      const tmp10 = closure_20(UserProfileActivityTabDefault, obj4);
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
  const obj = { style: items1, children: closure_20(UserProfileActivityTabDefault, { user, currentUser, guildId, channelId, cardStyle: items }) };
  items1 = [, ];
  ({ cards: arr2[0], profileContent: arr2[1] } = tmp);
  return closure_20(metroRequire, obj);
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
  let isGameFriends;
  let isPreviewingChanges;
  let isVisible;
  let obj5;
  let pendingAccentColor;
  let pendingAvatar;
  let pendingBadgeDisplayOrder;
  let pendingBadgeHiddenBadges;
  let pendingDisplayNameStyles;
  let pendingGlobalName;
  let pendingThemeColors;
  let scrollPosition;
  let showBlur;
  let style;
  let tmp38;
  let tmp47;
  let tmp48;
  let wishlistId;
  let tmp = user;
  let tmp2 = guildId;
  let obj = user(guildId[24]);
  const cResult = obj.c(288);
  user = user.user;
  const channel = user.channel;
  guildId = user.guildId;
  const displayProfile = user.displayProfile;
  react = user.showUserProfileActionSheet;
  const disableCalls = user.disableCalls;
  const disableMessage = user.disableMessage;
  ({ disableStatus, isPreviewingChanges } = user);
  ({ avatarDecorationOverride, location: _location } = user);
  const navigateToPremium = user.navigateToPremium;
  const navigateToShop = user.navigateToShop;
  ({ initialSection, scrollPosition } = user);
  let tmp4 = channel;
  let tmp5 = channel(guildId[16])();
  const currentUser = tmp5;
  const tmp6 = channel(guildId[55])(isGameFriends);
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
      let items = [currentUser];
      const fn = function q() {
        return currentUser.getCurrentUser();
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
      let tmp17 = navigateToShop;
      let items1 = [navigateToShop];
      cResult[5] = items1;
      tmp16 = items1;
    } else {
      tmp16 = cResult[5];
    }
    if (cResult[6] !== user.id) {
      function le() {
        const obj = { relationshipType: RelationshipStore.getRelationshipType(user.id), originApplicationId: RelationshipStore.getOriginApplicationId(user.id) };
        return obj;
      }
      cResult[6] = user.id;
      cResult[7] = le;
      tmp18 = le;
    } else {
      tmp18 = cResult[7];
    }
    const tmpResult13 = tmp(tmp2[17]);
    const stateFromStoresObject = tmpResult13.useStateFromStoresObject(tmp16, tmp18);
    const relationshipType = stateFromStoresObject.relationshipType;
    const originApplicationId = stateFromStoresObject.originApplicationId;
    const tmpResult14 = tmp(tmp2[58]);
    const incomingGameRelationshipsForUser = tmpResult14.useIncomingGameRelationshipsForUser(user.id);
    const tmpResult15 = tmp(tmp2[59]);
    isGameFriends = tmpResult15.useIsGameFriends(user.id);
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
        let items2 = [trackUserProfileAction];
        class Pe {
          constructor() {
            return trackUserProfileAction.getPendingChanges();
          }
        }
        cResult[13] = items2;
        cResult[14] = Pe;
        tmp31 = Pe;
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
        class Pe {
          constructor() {
            return trackUserProfileAction.getPendingChanges();
          }
        }
        if (tmp38 === Symbol.for("react.memo_cache_sentinel")) {
          const tmp40 = isPreviewingChanges;
          const items3 = [isPreviewingChanges];
          class Pe {
            constructor() {
              return trackUserProfileAction.getPendingChanges();
            }
          }
          cResult[18] = items3;
          tmp39 = items3;
        } else {
          tmp39 = cResult[18];
        }
        if (cResult[19] !== user.id) {
          class Le {
            constructor() {
              return BadgeDirectoryStore.getBadges(user.id);
            }
          }
          const items4 = [user.id];
          class Pe {
            constructor() {
              return trackUserProfileAction.getPendingChanges();
            }
          }
          cResult[19] = user.id;
          cResult[20] = Le;
          cResult[21] = items4;
          tmp42 = items4;
          tmp41 = Le;
        } else {
          class Le {
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
          class Le {
            constructor() {
              return BadgeDirectoryStore.getBadges(user.id);
            }
          }
          cResult[22] = tmp45;
          class Pe {
            constructor() {
              return trackUserProfileAction.getPendingChanges();
            }
          }
        } else {
          class Le {
            constructor() {
              return BadgeDirectoryStore.getBadges(user.id);
            }
          }
        }
        const tmpResult20 = tmp(tmp2[64]);
        const isBadgeManagementEnabled = tmpResult20.useIsBadgeManagementEnabled(tmp44);
        if (cResult[23] === isBadgeManagementEnabled) {
          class Le {
            constructor() {
              return BadgeDirectoryStore.getBadges(user.id);
            }
          }
          const effect = react.useEffect(tmp47, tmp48);
          class Pe {
            constructor() {
              return trackUserProfileAction.getPendingChanges();
            }
          }
          let obj3 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
          const tmpResult21 = tmp(tmp2[66]);
          const pendingProfileBadges = tmpResult21.getPendingProfileBadges(tmp37, stateFromStoresArray, obj3);
          cResult[27] = tmp37;
          cResult[28] = stateFromStoresArray;
          cResult[29] = pendingBadgeDisplayOrder;
          cResult[30] = pendingBadgeHiddenBadges;
          cResult[31] = pendingProfileBadges;
        }
        function je() {
          const tmp = isBadgeManagementEnabled;
          if (tmp) {
            const tmp3 = BadgeDirectoryStore.hasCatalogFor(user.id) && !BadgeDirectoryStore.isCatalogStaleFor(user.id);
            if (!tmp3) {
              const obj2 = BadgeDirectoryActionCreators;
              const badgeDirectory = obj2.fetchBadgeDirectory(tmp2.id);
            }
          }
        }
        const items5 = [user.id, isBadgeManagementEnabled];
        cResult[23] = isBadgeManagementEnabled;
        cResult[24] = user.id;
        cResult[25] = je;
        cResult[26] = items5;
        tmp47 = je;
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
      class Le {
        constructor() {
          return BadgeDirectoryStore.getBadges(user.id);
        }
      }
      cResult[10] = guildId;
      class Pe {
        constructor() {
          return trackUserProfileAction.getPendingChanges();
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
  let items20;
  let items23;
  let items27;
  let items28;
  let items30;
  let items31;
  let measureFill;
  let navigateToPremium;
  let obj11;
  let obj19;
  let obj35;
  let obj38;
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
  let tmp42;
  let tmp67;
  let tmp68;
  let tmp69;
  let tmp70;
  let tmp78;
  let tmp79;
  let tmp87;
  let tmp88;
  let tmp89;
  let tmp90;
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
  closure_24 = undefined;
  let closure_25;
  closure_26 = undefined;
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
  const tmp4 = channel(guildId[55])(stateFromStoresArray);
  let tmp5 = channel(guildId[56])({ scrollPosition, bannerHeight: tmp4 });
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = tmp5);
  const bottom = channel(guildId[57])().bottom;
  let obj = user(guildId[25]);
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
  const tmp6Result23 = user(tmp2[58]);
  const incomingGameRelationshipsForUser = tmp6Result23.useIncomingGameRelationshipsForUser(user.id);
  const tmp6Result24 = user(tmp2[59]);
  const isGameFriends = tmp6Result24.useIsGameFriends(user.id);
  let obj3 = { userId: user.id };
  const tmp6Result25 = user(tmp2[60]);
  userProfileGameFriendApplicationIds = tmp6Result25.useUserProfileGameFriendApplicationIds(obj3);
  let id1;
  const useName = tmp(tmp2[40]).useName;
  tmp(tmp2[40]);
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
  const tmp6Result26 = user(tmp2[61]);
  const subscribeGuildMembers = tmp6Result26.useSubscribeGuildMembers(memo, "UserProfileContent");
  const tmp18 = tmp(tmp2[62])(user.id);
  const items3 = [userProfileGameFriendApplicationIds];
  const tmp6Result27 = user(tmp2[17]);
  const stateFromStoresObject1 = tmp6Result27.useStateFromStoresObject(items3, () => userProfileGameFriendApplicationIds.getPendingChanges());
  pendingBio = stateFromStoresObject1.pendingBio;
  ({ pendingAccentColor, pendingThemeColors, pendingBadgeDisplayOrder } = stateFromStoresObject1);
  pendingBadgeHiddenBadges = stateFromStoresObject1.pendingBadgeHiddenBadges;
  ({ pendingBanner, pendingAvatar, pendingAvatarDecoration, pendingGlobalName, pendingPronouns, pendingLegacyUsernameDisabled, pendingDisplayNameStyles } = stateFromStoresObject1);
  let obj4 = { userId: user.id, image: pendingAvatar };
  const tmp6Result28 = user(tmp2[63]);
  const pendingAvatarSrc = tmp6Result28.getPendingAvatarSrc(obj4);
  const tmp21 = tmp(tmp2[35])(displayProfile, pendingLegacyUsernameDisabled);
  RelationshipTypes = tmp21;
  const items4 = [navigateToShop];
  const items5 = [user.id];
  const tmp6Result29 = user(tmp2[17]);
  stateFromStoresArray = tmp6Result29.useStateFromStoresArray(items4, () => BadgeDirectoryStore.getBadges(user.id), items5);
  const tmp6Result30 = user(tmp2[64]);
  isBadgeManagementEnabled = tmp6Result30.useIsBadgeManagementEnabled({ location: "UserProfileContent" });
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
  const tmpResult5 = tmp(tmp2[67]);
  if (isPreviewingChanges) {
    tmp27 = pendingThemeColors;
  }
  const tmpResult1Result = tmpResult5(obj5);
  const primaryColor = tmpResult1Result.primaryColor;
  hasCustomProfileTheme = tmp29;
  ({ theme, secondaryColor } = tmpResult1Result);
  const tmp6Result31 = user(tmp2[68]);
  const userProfileColors = tmp6Result31.useUserProfileColors({ theme, primaryColor, secondaryColor });
  containerBackground = userProfileColors.containerBackground;
  ({ avatarBackground, statusBackground } = userProfileColors);
  const ref = obj8.useRef(null);
  const ref1 = obj8.useRef(null);
  const items8 = [name];
  const tmp6Result32 = user(tmp2[17]);
  stateFromStores1 = tmp6Result32.useStateFromStores(items8, () => UserProfileStore.getFirstWishlistId(user.id));
  let obj6 = { wishlistId: stateFromStores1, userId: user.id };
  const tmp6Result33 = user(tmp2[69]);
  const fetchWishlist = tmp6Result33.useFetchWishlist(obj6);
  const items9 = [closure_8];
  const items10 = [stateFromStores1];
  const tmp6Result34 = user(tmp2[17]);
  stateFromStores2 = tmp6Result34.useStateFromStores(items9, () => {
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
  const tmp6Result35 = user(tmp2[71]);
  const displayableBoardWidgets = tmp6Result35.useDisplayableBoardWidgets(user.id);
  const tmp6Result36 = user(tmp2[72]);
  let tmp38 = displayableBoardWidgets.length > 0 || tmp6Result36.useCanConjureCustomWidget("UserProfileContent", tmp9);
  closure_25 = tmp38;
  const tmp6Result37 = user(tmp2[73]);
  let tmp39 = tmp6Result37.useIsRecentActivityMobileEnabled("UserProfileContent") && null != stateFromStores;
  closure_26 = tmp39;
  const tmp6Result38 = user(tmp2[74]);
  const profileTabIndices = tmp6Result38.useProfileTabIndices(tmp38, tmp39, tmp36);
  boardTabIndex = profileTabIndices.boardTabIndex;
  activityTabIndex = profileTabIndices.activityTabIndex;
  wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  [tmp42, c30] = displayProfile(obj8.useState(0), 2);
  displayProfile(obj8.useState(0), 2);
  const callback = obj8.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp6Result39 = user(tmp2[75]);
  const pageHeights1 = tmp6Result39.usePageHeights();
  handlePageContentSize = pageHeights1.handlePageContentSize;
  const pageHeights = pageHeights1.pageHeights;
  const tmp6Result40 = user(tmp2[76]);
  const wishlistViewerCoachmark = tmp6Result40.useWishlistViewerCoachmark({ isCurrentUser: tmp9, shouldShowWishlistTab: tmp36 });
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
  const tmp6Result41 = user(tmp2[74]);
  const profileSectionTabs = tmp6Result41.useProfileSectionTabs({ initialUserProfileSection: initialSection, wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange: callback1 });
  ({ activeProfileTabSection, setActiveProfileTabSection } = profileSectionTabs);
  restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  isVisible = tmp48;
  isVisible2 = tmp49;
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
        const tmp38 = authStore6;
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
          tmp18Result = tmp18(tmp19(14181), obj7);
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
          tmp18Result4 = tmp18(tmp19(7158), obj10);
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
          tmp18Result5 = tmp18(tmp19(14098), obj11);
        }
        items2[7] = tmp18Result5;
        const obj12 = { userId: user.id };
        items2[8] = hasCustomProfileTheme(UserProfileConnections.UserProfileAccountConnectionsCard, obj12);
        const obj13 = { userId: user.id };
        items2[9] = hasCustomProfileTheme(UserProfileConnections.UserProfileApplicationRoleConnectionsCard, obj13);
        let tmp18Result6 = !tmp25;
        if (tmp18Result6) {
          const obj25 = { userId: user.id, onBack: showUserProfileActionSheet };
          tmp18Result6 = tmp18(tmp19(14101), obj25);
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
    const tmp = authStore6;
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
  const items17 = [handlePageContentSize, callback4, callback5, tmp38, tmp39, tmp36, boardTabIndex, activityTabIndex, wishlistTabIndex, user, stateFromStores, guildId, , , , ];
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
      intl2 = tmp(1128).intl;
      obj4 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(boardTabIndex, arg0, arg1);
          },
        children: hasCustomProfileTheme(closure_28, obj5)
      };
      obj5 = { userId: user.id, isVisible: isVisible2, isCurrentUser, containerBackground };
      push(obj3);
    }
    const tmp13 = closure_26 && null != stateFromStores;
    if (tmp13) {
      const push2 = items.push;
      const obj6 = { id: "activity", label: intl3.string(intl5.t.chq59f), page: hasCustomProfileTheme(hasOwnProperty, obj7, activityTabIndex) };
      intl3 = tmp(1128).intl;
      obj7 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(activityTabIndex, arg0, arg1);
          },
        children: hasCustomProfileTheme(tmp16, obj8)
      };
      obj8 = { user, currentUser: stateFromStores, guildId, channelId: id, containerBackground };
      id = undefined;
      tmp16 = closure_29;
      if (channel != null) {
        id = channel.id;
      }
      push2(obj6);
    }
    const tmp25 = closure_24;
    if (tmp25) {
      const push3 = items.push;
      obj9 = { id: "wishlist", label: intl4.string(intl5.t["7lZ31J"]), page: hasCustomProfileTheme(hasOwnProperty, obj10, wishlistTabIndex) };
      intl4 = tmp(1128).intl;
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
  const tmp6Result42 = user(tmp2[89]);
  let obj7 = { pageWidth: tmp42, defaultIndex: activeProfileTabSectionIndex, itemSpacing: tmp(tmp2[48]).space.PX_24, items: memo2, onPageChange: handleTabChange };
  segmentedControlState = tmp6Result42.useSegmentedControlState(obj7);
  const tmp6Result43 = user(tmp2[75]);
  const pagerFillHeight = tmp6Result43.usePagerFillHeight(scrollPosition);
  const items18 = [segmentedControlState, restoreActiveIndex];
  ({ pagerRef, fillHeight, measureFill } = pagerFillHeight);
  const layoutEffect = obj8.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items18);
  const items19 = [segmentedControlState, wishlistTabIndex, markAsDismissed, setActiveProfileTabSection];
  const tmp6Result44 = user(tmp2[75]);
  const pagesHeightStyle = tmp6Result44.usePagesHeightStyle(segmentedControlState, pageHeights, fillHeight);
  if (null != user) {
    if (null != stateFromStores) {
      let OpenableUserProfileAvatar;
      let num2;
      obj9 = { backgroundColor: containerBackground };
      if (isPreviewingChanges) {
        OpenableUserProfileAvatar = tmp(tmp102);
      } else {
        OpenableUserProfileAvatar = tmp6(tmp102).OpenableUserProfileAvatar;
      }
      let _private;
      const tmp61 = containerBackground;
      if (displayProfile != null) {
        _private = displayProfile.private;
      }
      let tmp63 = true === _private;
      if (tmp63) {
        let obj10 = { style: items20, children: hasCustomProfileTheme(tmp(tmp2[96]), obj11) };
        items20 = [tmp3.privateBanner, bannerAnimatedStyle];
        const View = tmp(tmp2[95]).View;
        obj11 = { primaryColor };
        tmp63 = hasCustomProfileTheme(View, obj10);
      }
      const items21 = [tmp63, , , ];
      let obj12 = { user, displayProfile, bannerHeight: tmp4, pendingBanner: tmp67, pendingAvatarSrc: tmp68, pendingAccentColor: tmp69, pendingThemeColors: tmp70, disableInteraction: isPreviewingChanges, bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur };
      tmp67 = undefined;
      const tmpResult6 = tmp(tmp2[97]);
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
      items21[1] = hasCustomProfileTheme(tmpResult6, obj12);
      let tmp60Result = !isPreviewingChanges;
      if (tmp60Result) {
        const items22 = [tmp3.bannerButtons, , ];
        let _private1;
        const View2 = tmp(tmp2[95]).View;
        if (displayProfile != null) {
          _private1 = displayProfile.private;
        }
        if (_private1) {
          _private1 = tmp3.bannerButtonsWithPrivateBanner;
        }
        let obj13 = { style: items22, children: items23 };
        items22[1] = _private1;
        items22[2] = bannerAnimatedStyle;
        let tmp73 = null;
        if (null != stateFromStores) {
          tmp73 = null;
          if (user.id !== stateFromStores.id) {
            tmp73 = null;
            if (!user.bot) {
              let tmp65Result;
              if (relationshipType === RelationshipTypes.FRIEND) {
                const obj14 = { user };
                tmp65Result = tmp65(closure_24, obj14);
              } else {
                tmp65Result = null;
                if (isGameFriends) {
                  const obj15 = { user };
                  tmp65Result = tmp65(closure_25, obj15);
                }
              }
              tmp73 = tmp65Result;
            }
          }
        }
        items23 = [tmp73, ];
        const obj16 = { user, currentUser: stateFromStores, displayProfile, channel };
        items23[1] = hasCustomProfileTheme(tmp(tmp2[98]), obj16);
        tmp60Result = tmp60(View2, obj13);
      }
      items21[2] = tmp60Result;
      const obj17 = { style: contentAnimatedStyle, children: null };
      const obj18 = { user, guildId, disableStatus, pendingAvatarSrc: tmp78, pendingAvatarDecoration: tmp79, backgroundColor: avatarBackground, statusStyle: obj19 };
      tmp78 = undefined;
      const View3 = tmp(tmp2[95]).View;
      if (isPreviewingChanges) {
        tmp78 = pendingAvatarSrc;
      }
      tmp79 = undefined;
      if (isPreviewingChanges) {
        if (avatarDecorationOverride == null) {
          avatarDecorationOverride = pendingAvatarDecoration;
        }
        tmp79 = avatarDecorationOverride;
      }
      obj19 = { backgroundColor: statusBackground };
      const items24 = [hasCustomProfileTheme(OpenableUserProfileAvatar, obj18), ];
      const items25 = [tmp3.profileContentWrapper, ];
      if (!tmp9) {
        num2 = 0;
        if (null == tmp18) {
          num2 = pendingBadgeHiddenBadges;
        }
      } else {
        num2 = 0;
      }
      const obj20 = { style: items25, children: null };
      const obj21 = { paddingTop: num2, paddingBottom: bottom + pendingBadgeDisplayOrder };
      items25[1] = obj21;
      const obj22 = { customStatusActivity: tmp18, user, guildId, channelId: id3, hasCustomProfileTheme: null != primaryColor, showUserProfileActionSheet, isPreviewingChanges, bubbleRef: ref };
      id3 = undefined;
      const tmp82 = stateFromStores2;
      if (channel != null) {
        id3 = channel.id;
      }
      const items26 = [hasCustomProfileTheme(tmp82, obj22), ];
      let tmp60Result2 = null;
      const LayerScope = tmp6(tmp2[99]).LayerScope;
      if (null != stateFromStores) {
        const obj23 = { style: items27, children: items28 };
        items27 = [, ];
        ({ primaryInfo: arr32[0], profileContent: arr32[1] } = tmp3);
        const obj24 = { user, channelId: id4, guildId, displayProfile, displayNameOverride: tmp87, pronounsOverride: tmp88, badgesOverride: tmp89, pendingDisplayNameStyles: tmp90, badgeContainerBackground: containerBackground, isPreviewingChanges, showBadgeDirectoryNuxCoachmark: tmp9 };
        id4 = undefined;
        const tmp85 = closure_26;
        if (channel != null) {
          id4 = channel.id;
        }
        tmp87 = undefined;
        if (isPreviewingChanges) {
          tmp87 = pendingGlobalName;
        }
        tmp88 = undefined;
        if (isPreviewingChanges) {
          tmp88 = pendingPronouns;
        }
        tmp89 = undefined;
        if (isPreviewingChanges) {
          tmp89 = memo1;
        }
        tmp90 = undefined;
        if (isPreviewingChanges) {
          tmp90 = pendingDisplayNameStyles;
        }
        if (tmp9) {
          tmp9 = !isPreviewingChanges;
        }
        items28 = [hasCustomProfileTheme(tmp85, obj24), , , , , , ];
        let tmp65Result5 = user.id !== stateFromStores.id;
        if (tmp65Result5) {
          let obj25 = { user, guildId };
          tmp65Result5 = tmp65(tmp(tmp2[90]), obj25);
        }
        items28[1] = tmp65Result5;
        let tmp65Result6 = relationshipType === RelationshipTypes.PENDING_INCOMING;
        const tmp92 = RelationshipTypes;
        if (tmp65Result6) {
          const obj26 = { user, channelId: id5, guildId, applicationId: originApplicationId, style: obj9, showUserProfile: showUserProfileActionSheet };
          id5 = undefined;
          const tmpResult7 = tmp(tmp2[91]);
          if (channel != null) {
            id5 = channel.id;
          }
          tmp65Result6 = tmp65(tmpResult7, obj26);
        }
        items28[2] = tmp65Result6;
        items28[3] = incomingGameRelationshipsForUser.map((applicationId) => {
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
        const obj27 = { user, style: obj9 };
        items28[4] = hasCustomProfileTheme(tmp(tmp2[92]), obj27);
        let tmp65Result7 = user.id === stateFromStores.id && !isPreviewingChanges;
        if (tmp65Result7) {
          const obj28 = { guildId };
          tmp65Result7 = tmp65(boardTabIndex, obj28);
        }
        items28[5] = tmp65Result7;
        let tmp65Result8 = user.id !== stateFromStores.id;
        if (tmp65Result8) {
          const obj29 = { user, disableCalls, disableMessage, location: _location, hasCustomProfileTheme: null != primaryColor, style: tmp3.primaryButtons };
          const tmpResult8 = tmp(tmp2[93]);
          if (!disableCalls) {
            disableCalls = relationshipType === tmp92.BLOCKED;
          }
          if (!disableCalls) {
            disableCalls = user.isProvisional;
          }
          tmp65Result8 = tmp65(tmpResult8, obj29);
        }
        items28[6] = tmp65Result8;
        tmp60Result2 = tmp60(tmp80, obj23);
      }
      const items29 = [tmp60Result2, ];
      if (!tmp36) {
        if (!tmp38) {
          let callback4Result;
          if (!tmp39) {
            callback4Result = callback4();
          }
          const obj30 = { children: items21 };
          const obj31 = { children: items29 };
          items29[1] = callback4Result;
          items26[1] = stateFromStores1(LayerScope, obj31);
          obj20.children = items26;
          items24[1] = stateFromStores1(navigateToPremium, obj20);
          obj17.children = items24;
          items21[3] = stateFromStores1(View3, obj17);
          return stateFromStores1(tmp61, obj30);
        }
      }
      const obj32 = { onLayout: callback, children: stateFromStores1(LayerScope2, obj35) };
      const obj33 = { style: tmp3.profileTablist, children: items30 };
      LayerScope2 = tmp6(tmp2[99]).LayerScope;
      const obj34 = { state: segmentedControlState, variant: str };
      str = undefined;
      const Tabs = tmp6(tmp2[100]).Tabs;
      if (null != primaryColor) {
        str = "overlay";
      }
      obj35 = { children: items31 };
      items30 = [hasCustomProfileTheme(Tabs, obj34), ];
      const obj36 = { ref: ref1, style: rect, collapsable: false, pointerEvents: "box-none" };
      rect = { position: "absolute", left: `${Math.max(wishlistTabIndex, 0) / arr22.length * 100}%`, top: 0, right: 0, bottom: 0 };
      const _Math = Math;
      items30[1] = hasCustomProfileTheme(navigateToPremium, obj36);
      items31 = [stateFromStores1(navigateToPremium, obj33), , ];
      const obj37 = { ref: pagerRef, onLayout: measureFill, style: pagesHeightStyle, children: hasCustomProfileTheme(user(tmp2[101]).SegmentedControlPages, obj38) };
      const View4 = tmp(tmp2[95]).View;
      obj38 = { state: segmentedControlState };
      items31[1] = hasCustomProfileTheme(View4, obj37);
      const obj39 = { anchorRef: ref1, isVisible, markAsDismissed, onViewWishlist: tmp59 };
      items31[2] = hasCustomProfileTheme(tmp(tmp2[102]), obj39);
      callback4Result = tmp65(tmp80, obj32);
    }
  }
  return null;
}));
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileContent.tsx");

export default memoResult;
export const PrimaryInfo = tmp5;
