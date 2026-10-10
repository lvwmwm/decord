// Module ID: 4808
// Function ID: 4809
// Name: ToastUtils
// Dependencies: [1085, 4809, 1126, 4815, 5032, 5034, 5036, 5038, 5040, 5042, 5044, 1415, 5046, 5049, 1279, 5051, 2]
// Exports: communityAdminOnly, communityRequirementSatisfied, memberOrRoleAddedToast, memberOrRoleRemovedToast, presentAddedFriendToast, presentCommandCopied, presentCopiedToClipboard, presentEmoji, presentError, presentFailedToast, presentFeedbackSent, presentFriendRequestAcceptedToast, presentFriendRequestIgnoredToast, presentGameFriendRequestAcceptedToast, presentGameFriendRequestIgnoredToast, presentGifSaved, presentGuildRoleSubscriptionTrialTierMonthCost, presentIdCopied, presentImageSaved, presentInviteSent, presentLinkCopied, presentMessageCopied, presentMessageIdCopied, presentNoiseCancellation, presentNoiseCancellationError, presentPostIdCopied, presentTimestamp, presentUserPronouns, presentUsernameCopied, presentVideoSaved, presentVoiceActivityDetectionError, roleCreateFailedToast, roleCreatedToast, roleIdCopied, roleTemplateAppliedToast, showMaxGroupMembers, showSafetySuccess, showTransferOwnershipSuccess, showVerificationSent, showVoiceRecordingFailed, transferOwnershipProtected, unverifiedVoiceGate

// Module 4808 (ToastUtils)
import Constants from "Constants" /* 1085 */;
import intl7 from "intl" /* 1126 */;
import v1 from "v1" /* 1279 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import FriendsIcon from "FriendsIcon" /* 4815 */;
import UserPlatformIcon from "UserPlatformIcon" /* 5034 */;
import UserMinusIcon from "UserMinusIcon" /* 5036 */;
import LinkIcon from "LinkIcon" /* 5038 */;
import SendMessageIcon from "SendMessageIcon" /* 5040 */;
import CopyIcon from "CopyIcon" /* 5042 */;
import DownloadIcon from "DownloadIcon" /* 5044 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5046 */;
import TrashIcon from "TrashIcon" /* 5049 */;
import ClockIcon from "ClockIcon" /* 5051 */;
import size from "module_2" /* 2 */;

const VerificationCriteria = Constants.VerificationCriteria;
const result = size.fileFinishedImporting("modules/toast/native/ToastUtils.tsx");

export const presentAddedFriendToast = function presentAddedFriendToast() {
  let intl;
  const obj = { text: intl.string(intl7.t.Fn5bwO), icon: FriendsIcon.FriendsIcon, iconColor: "status-positive" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open("TOAST_ADD_FRIEND", obj);
};
export const presentFriendRequestAcceptedToast = function presentFriendRequestAcceptedToast(username) {
  let stringResult;
  let tmp3;
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  if (null == username) {
    const intl2 = intl7.intl;
    stringResult = intl2.string(intl7.t.UhJna5);
    tmp3 = require;
  } else {
    tmp3 = require;
    const intl = intl7.intl;
    const obj = { username: username.username };
    stringResult = intl.formatToPlainString(intl7.t.b3eoD4, obj);
  }
  const obj2 = { text: stringResult, icon: tmp3(5032).UserPlusIcon, iconColor: "status-positive" };
  open("TOAST_FRIEND_REQUEST_ACCEPTED", obj2);
};
export const presentGameFriendRequestAcceptedToast = function presentGameFriendRequestAcceptedToast() {
  let intl;
  const obj = { text: intl.string(intl7.t.xjNLeZ), icon: UserPlatformIcon.UserPlatformIcon, iconColor: "status-positive" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open("TOAST_GAME_FRIEND_REQUEST_ACCEPTED", obj);
};
export const presentFriendRequestIgnoredToast = function presentFriendRequestIgnoredToast() {
  let intl;
  const obj = { text: intl.string(intl7.t.YlavlY), icon: UserMinusIcon.UserMinusIcon, iconColor: "icon-feedback-critical" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open("TOAST_FRIEND_REQUEST_IGNORED", obj);
};
export const presentGameFriendRequestIgnoredToast = function presentGameFriendRequestIgnoredToast() {
  let intl;
  const obj = { text: intl.string(intl7.t.P6BzJP), icon: UserMinusIcon.UserMinusIcon, iconColor: "icon-feedback-critical" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open("TOAST_GAME_FRIEND_REQUEST_IGNORED", obj);
};
export const presentLinkCopied = function presentLinkCopied() {
  let intl;
  const obj = { text: intl.string(intl7.t["+5kSoW"]), icon: LinkIcon.LinkIcon };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open("LINK_COPIED", obj);
};
export const presentInviteSent = function presentInviteSent() {
  let intl;
  const obj = { text: intl.string(intl7.t.sVwWdV), icon: SendMessageIcon.SendMessageIcon };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open("INVITE_SENT", obj);
};
export const presentIdCopied = function presentIdCopied() {
  let intl;
  const obj = { text: intl.string(intl7.t.eNjAah), icon: CopyIcon.CopyIcon };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open("TOAST_ID_COPIED", obj);
};
export const presentImageSaved = function presentImageSaved() {
  let intl;
  const obj = { text: intl.string(intl7.t.cqpdJW), icon: DownloadIcon.DownloadIcon };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open("TOAST_IMAGE_SAVED", obj);
};
export const presentVideoSaved = function presentVideoSaved() {
  let intl;
  const obj = { text: intl.string(intl7.t["cEK+1g"]), icon: DownloadIcon.DownloadIcon };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open("TOAST_VIDEO_SAVED", obj);
};
export const presentGifSaved = function presentGifSaved() {
  let intl;
  const obj = { text: intl.string(intl7.t.LktEtN), icon: DownloadIcon.DownloadIcon };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open("TOAST_GIF_SAVED", obj);
};
export const presentMessageCopied = function presentMessageCopied() {
  let intl;
  const obj = { text: intl.string(intl7.t.R3o53R), icon: CopyIcon.CopyIcon };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open("TOAST_MESSAGE_COPIED", obj);
};
export const presentMessageIdCopied = function presentMessageIdCopied() {
  let intl;
  const obj = { text: intl.string(intl7.t.svRBmK), icon: CopyIcon.CopyIcon };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open("TOAST_MESSAGE_ID_COPIED", obj);
};
export const presentPostIdCopied = function presentPostIdCopied() {
  let intl;
  const obj = { text: intl.string(intl7.t.aBQ2RP), icon: CopyIcon.CopyIcon };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open("TOAST_FORUM_POST_ID_COPIED", obj);
};
export const presentUsernameCopied = function presentUsernameCopied() {
  let intl;
  const obj = { text: intl.string(intl7.t["FHVR/+"]), icon: CopyIcon.CopyIcon };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open("TOAST_USERNAME_SAVED", obj);
};
export const presentFeedbackSent = function presentFeedbackSent() {
  let intl;
  const obj = { text: intl.string(intl7.t.xpiDtu), variant: "success" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open("TOAST_FEEDBACK_SENT", obj);
};
export const presentEmoji = function presentEmoji(id) {
  const obj = AvatarUtilsDefault;
  const obj2 = { id: id.id, animated: id.animated, size: 48 };
  const emojiURL = obj.getEmojiURL(obj2);
  const open = ToastActionCreatorsDefault.open;
  const obj3 = { text: ":" + id.name + ":", icon: { type: "emoji", src: emojiURL, alt: id.name } };
  ToastActionCreatorsDefault;
  const combined = "PRESENT_EMOJI-" + id.id;
  open(combined, obj3);
};
export const presentNoiseCancellation = function presentNoiseCancellation(arg0) {
  let str;
  let stringResult;
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  const intl = intl7.intl;
  const string = intl.string;
  const t = intl7.t;
  if (arg0) {
    stringResult = string(t["Q+fhfv"]);
  } else {
    stringResult = string(t.hEMHnF);
  }
  const obj = { text: stringResult, variant: str };
  str = "critical";
  if (arg0) {
    str = "success";
  }
  open("NOISE_CANCELLATION_TOGGLE", obj);
};
export const presentNoiseCancellationError = function presentNoiseCancellationError() {
  let intl;
  const obj = { text: intl.string(intl7.t.DnmX2G), variant: "critical" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open("MOBILE_NOISE_CANCELLATION_CPU_OVERUSE", obj);
};
export const presentError = function presentError(intl) {
  const obj = ToastActionCreatorsDefault;
  const obj2 = { text: intl, variant: "critical" };
  obj.open("ERROR", obj2);
};
export const presentVoiceActivityDetectionError = function presentVoiceActivityDetectionError() {
  let intl;
  const obj = { text: intl.string(intl7.t.zz1Tft), variant: "critical" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open("MOBILE_ADVANCED_VOICE_ACTIVITY_CPU_OVERUSE", obj);
};
export const roleIdCopied = function roleIdCopied(combined) {
  let intl;
  let obj2;
  const open = ToastActionCreatorsDefault.open;
  const obj = { text: intl.formatToPlainString(intl7.t.iOWpeB, obj2), icon: CopyIcon.CopyIcon };
  ToastActionCreatorsDefault;
  combined = "ROLE_ID_COPIED-" + combined;
  intl = intl7.intl;
  obj2 = { role: combined };
  open(combined, obj);
};
export const communityRequirementSatisfied = function communityRequirementSatisfied() {
  let intl;
  const obj = { text: intl.string(intl7.t.PHjrpp), variant: "success" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open("ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP", obj);
};
export const communityAdminOnly = function communityAdminOnly() {
  let intl;
  const obj = { text: intl.string(intl7.t["pjG+T3"]), icon: CircleInformationIcon.CircleInformationIcon };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open("GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY", obj);
};
export const unverifiedVoiceGate = function unverifiedVoiceGate(check) {
  let missingVerificationRole;
  let stringResult;
  let verificationRole;
  ({ missingVerificationRole, verificationRole } = check);
  if (check.notClaimed) {
    const intl6 = intl7.intl;
    stringResult = intl6.string(intl7.t.IRxUlG);
  } else if (tmp2) {
    const intl5 = intl7.intl;
    stringResult = intl5.string(intl7.t.vW8iUF);
  } else if (tmp) {
    const intl4 = intl7.intl;
    stringResult = intl4.string(intl7.t.vdSOpz);
  } else if (tmp4) {
    const intl3 = intl7.intl;
    const obj2 = { min: VerificationCriteria.MEMBER_AGE };
    stringResult = intl3.formatToPlainString(intl7.t.v1ktYb, obj2);
  } else if (tmp3) {
    const intl2 = intl7.intl;
    const obj3 = { min: VerificationCriteria.ACCOUNT_AGE };
    stringResult = intl2.formatToPlainString(intl7.t.sncw41, obj3);
  } else {
    if (missingVerificationRole) {
      missingVerificationRole = null != verificationRole;
    }
    stringResult = null;
    if (missingVerificationRole) {
      const intl = intl7.intl;
      const formatToPlainString = intl.formatToPlainString;
      const _HermesInternal = HermesInternal;
      const obj = { roleName: "@" + verificationRole.name };
      const MZbCuG = intl7.t.MZbCuG;
      stringResult = formatToPlainString(MZbCuG, obj);
    }
  }
  if (null != stringResult) {
    const obj4 = { text: stringResult, icon: CircleInformationIcon.CircleInformationIcon };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    open("UNVERIFIED_VOICE_GATE", obj4);
  }
};
export const transferOwnershipProtected = function transferOwnershipProtected() {
  let intl;
  const obj = { text: intl.string(intl7.t.wDkfrN), icon: CircleInformationIcon.CircleInformationIcon };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open("TRANSFER_OWNERSHIP_PROTECTED_GUILD", obj);
};
export const memberOrRoleRemovedToast = function memberOrRoleRemovedToast(name) {
  let intl;
  let obj2;
  const obj = { text: intl.formatToPlainString(intl7.t.vJGtXc, obj2), icon: TrashIcon.TrashIcon };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  obj2 = { name };
  open("PRIVATE_CHANNEL_MEMBERS_REMOVED", obj);
};
export const memberOrRoleAddedToast = function memberOrRoleAddedToast(c1, c0) {
  let stringResult;
  if (c1 > 0) {
    if (c0 > 0) {
      const intl3 = intl7.intl;
      stringResult = intl3.string(intl7.t.fRD8wW);
    }
    if (null != stringResult) {
      const obj2 = { text: stringResult, variant: "success" };
      const obj3 = ToastActionCreatorsDefault;
      obj3.open("MEMBER_OR_ROLE_ADDED", obj2);
    }
  }
  if (c1 > 0) {
    const intl2 = intl7.intl;
    const obj4 = { count: c1 };
    stringResult = intl2.formatToPlainString(intl7.t["yM/8JE"], obj4);
  } else if (c0 > 0) {
    const intl = intl7.intl;
    const obj = { count: c0 };
    stringResult = intl.formatToPlainString(intl7.t.yvV5Ye, obj);
  }
};
export const roleTemplateAppliedToast = function roleTemplateAppliedToast() {
  let intl;
  const obj = { text: intl.string(intl7.t.e6xHUV), variant: "success" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open("ROLE_PERMISSION_TEMPLATE_SELECT_CONFIRMATION_TOAST", obj);
};
export const roleCreatedToast = function roleCreatedToast() {
  let intl;
  const obj = { text: intl.string(intl7.t.kubT4R), variant: "success" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open("ROLE_CREATED_TOAST", obj);
};
export const roleCreateFailedToast = function roleCreateFailedToast() {
  let intl;
  const obj = { text: intl.string(intl7.t.hbr6Uj), variant: "critical" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open("ROLE_CREATION_FAILED", obj);
};
export const presentFailedToast = function presentFailedToast(intl) {
  const obj = ToastActionCreatorsDefault;
  const obj2 = { text: intl, variant: "critical" };
  obj.open("FAILED", obj2);
};
export const presentCommandCopied = function presentCommandCopied() {
  let intl;
  const obj = { text: intl.string(intl7.t.U989ct), icon: LinkIcon.LinkIcon };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open("TOAST_COMMAND_COPIED", obj);
};
export const presentUserPronouns = function presentUserPronouns() {
  let intl;
  const obj = { text: intl.string(intl7.t["1w6drw"]) };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open("USER_POPOUT_PRONOUNS", obj);
};
export const presentCopiedToClipboard = function presentCopiedToClipboard() {
  let intl;
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  const obj2 = { text: intl.string(intl7.t.mGZ66D), icon: CopyIcon.CopyIcon };
  const obj = v1;
  const combined = "COPIED_TEXT_" + obj.v4();
  intl = intl7.intl;
  open(combined, obj2);
};
export const presentGuildRoleSubscriptionTrialTierMonthCost = function presentGuildRoleSubscriptionTrialTierMonthCost() {
  let intl;
  const obj = { text: intl.string(intl7.t["/q6fpa"]), icon: CircleInformationIcon.CircleInformationIcon };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open("GUILD_ROLE_SUBSCRIPTION_MANAGE_SUBSCRIPTION_PAGE_TRIAL_PRICE_INFO", obj);
};
export const showVoiceRecordingFailed = function showVoiceRecordingFailed() {
  let intl;
  const obj = { text: intl.string(intl7.t.H03AqF), variant: "critical" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open("VOICE_MESSAGES_RECORDING_FAILED", obj);
};
export const showMaxGroupMembers = function showMaxGroupMembers() {
  let intl;
  const obj = { text: intl.string(intl7.t.OtTQDz), variant: "critical" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open("GROUP_DM_INVITE_FULL_MAIN", obj);
};
export const showTransferOwnershipSuccess = function showTransferOwnershipSuccess() {
  let intl;
  const obj = { text: intl.string(intl7.t["2Eyydu"]), variant: "success" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open("TRANSFER_OWNERSHIP_SUCCESS", obj);
};
export const showSafetySuccess = function showSafetySuccess(IAR_SHARE_WITH_PARENT_SUCCESS, safetyToastTypeContent) {
  const obj = ToastActionCreatorsDefault;
  const obj2 = { text: safetyToastTypeContent, variant: "success" };
  obj.open(IAR_SHARE_WITH_PARENT_SUCCESS, obj2);
};
export const showVerificationSent = function showVerificationSent() {
  let intl;
  const obj = { text: intl.string(intl7.t.gI8IST), variant: "success" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl7.intl;
  open("VERIFICATION_RESENT", obj);
};
export const presentTimestamp = function presentTimestamp(full) {
  const obj = ToastActionCreatorsDefault;
  const obj2 = { text: full, icon: ClockIcon.ClockIcon };
  obj.open("MESSAGE_TIMESTAMP", obj2);
};
