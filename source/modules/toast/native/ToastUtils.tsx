// Module ID: 3830
// Function ID: 31940
// Name: presentAddedFriendToast
// Dependencies: [653, 3831, 1212, 3832, 4068, 4070, 4072, 4074, 4076, 4078, 4080, 4082, 1392, 4084, 4086, 4089, 491, 4091, 4094, 2]
// Exports: communityAdminOnly, communityRequirementSatisfied, memberOrRoleAddedToast, memberOrRoleRemovedToast, presentAddedFriendToast, presentCommandCopied, presentCopiedToClipboard, presentEmoji, presentError, presentFailedToast, presentFeedbackSent, presentFriendRequestAcceptedToast, presentFriendRequestIgnoredToast, presentGameFriendRequestAcceptedToast, presentGameFriendRequestIgnoredToast, presentGifSaved, presentGuildMemberBio, presentGuildMemberPronouns, presentGuildRoleSubscriptionTrialTierMonthCost, presentIdCopied, presentImageSaved, presentInviteSent, presentLinkCopied, presentMessageCopied, presentMessageIdCopied, presentNoiseCancellation, presentNoiseCancellationError, presentPostIdCopied, presentTimestamp, presentUserPronouns, presentUsernameCopied, presentVideoSaved, presentVoiceActivityDetectionError, roleCreateFailedToast, roleCreatedToast, roleIdCopied, roleTemplateAppliedToast, showMaxGroupMembers, showSafetySuccess, showTransferOwnershipSuccess, showVerificationSent, showVoiceRecordingFailed, transferOwnershipProtected, unverifiedVoiceGate

// Module 3830 (presentAddedFriendToast)
import { VerificationCriteria } from "ME";

const result = require("getSystemLocale").fileFinishedImporting("modules/toast/native/ToastUtils.tsx");

export const presentAddedFriendToast = function presentAddedFriendToast() {
  let obj = importDefault(3831);
  obj = { key: "TOAST_ADD_FRIEND", content: null, iconColor: "status-positive" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.Fn5bwO);
  obj.IconComponent = require(3832) /* FriendsIcon */.FriendsIcon;
  obj.open(obj);
};
export const presentFriendRequestAcceptedToast = function presentFriendRequestAcceptedToast(username) {
  let obj = importDefault(3831);
  obj = { key: "TOAST_FRIEND_REQUEST_ACCEPTED" };
  if (null == username) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl2.string(require(1212) /* getSystemLocale */.t.UhJna5);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { username: username.username };
    stringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.b3eoD4, obj);
  }
  obj.content = stringResult;
  obj.IconComponent = require(4068) /* UserPlusIcon */.UserPlusIcon;
  obj.iconColor = "status-positive";
  obj.open(obj);
};
export const presentGameFriendRequestAcceptedToast = function presentGameFriendRequestAcceptedToast() {
  let obj = importDefault(3831);
  obj = { key: "TOAST_GAME_FRIEND_REQUEST_ACCEPTED" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.xjNLeZ);
  obj.IconComponent = require(4070) /* UserPlatformIcon */.UserPlatformIcon;
  obj.iconColor = "status-positive";
  obj.open(obj);
};
export const presentFriendRequestIgnoredToast = function presentFriendRequestIgnoredToast() {
  let obj = importDefault(3831);
  obj = { key: "TOAST_FRIEND_REQUEST_IGNORED" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.YlavlY);
  obj.IconComponent = require(4072) /* UserMinusIcon */.UserMinusIcon;
  obj.iconColor = "icon-feedback-critical";
  obj.open(obj);
};
export const presentGameFriendRequestIgnoredToast = function presentGameFriendRequestIgnoredToast() {
  let obj = importDefault(3831);
  obj = { key: "TOAST_GAME_FRIEND_REQUEST_IGNORED" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.P6BzJP);
  obj.IconComponent = require(4072) /* UserMinusIcon */.UserMinusIcon;
  obj.iconColor = "icon-feedback-critical";
  obj.open(obj);
};
export const presentLinkCopied = function presentLinkCopied() {
  let obj = importDefault(3831);
  obj = { key: "LINK_COPIED" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t["+5kSoW"]);
  obj.IconComponent = require(4074) /* LinkIcon */.LinkIcon;
  obj.open(obj);
};
export const presentInviteSent = function presentInviteSent() {
  let obj = importDefault(3831);
  obj = { key: "INVITE_SENT" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.sVwWdV);
  obj.IconComponent = require(4076) /* SendMessageIcon */.SendMessageIcon;
  obj.open(obj);
};
export const presentIdCopied = function presentIdCopied() {
  let obj = importDefault(3831);
  obj = { key: "TOAST_ID_COPIED" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.eNjAah);
  obj.IconComponent = require(4078) /* CopyIcon */.CopyIcon;
  obj.open(obj);
};
export const presentImageSaved = function presentImageSaved() {
  let obj = importDefault(3831);
  obj = { key: "TOAST_IMAGE_SAVED" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.cqpdJW);
  obj.IconComponent = require(4080) /* DownloadIcon */.DownloadIcon;
  obj.open(obj);
};
export const presentVideoSaved = function presentVideoSaved() {
  let obj = importDefault(3831);
  obj = { key: "TOAST_VIDEO_SAVED" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t["cEK+1g"]);
  obj.IconComponent = require(4080) /* DownloadIcon */.DownloadIcon;
  obj.open(obj);
};
export const presentGifSaved = function presentGifSaved() {
  let obj = importDefault(3831);
  obj = { key: "TOAST_GIF_SAVED" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.LktEtN);
  obj.IconComponent = require(4080) /* DownloadIcon */.DownloadIcon;
  obj.open(obj);
};
export const presentMessageCopied = function presentMessageCopied() {
  let obj = importDefault(3831);
  obj = { key: "TOAST_MESSAGE_COPIED" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.R3o53R);
  obj.IconComponent = require(4078) /* CopyIcon */.CopyIcon;
  obj.open(obj);
};
export const presentMessageIdCopied = function presentMessageIdCopied() {
  let obj = importDefault(3831);
  obj = { key: "TOAST_MESSAGE_ID_COPIED" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.svRBmK);
  obj.IconComponent = require(4078) /* CopyIcon */.CopyIcon;
  obj.open(obj);
};
export const presentPostIdCopied = function presentPostIdCopied() {
  let obj = importDefault(3831);
  obj = { key: "TOAST_FORUM_POST_ID_COPIED" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.aBQ2RP);
  obj.IconComponent = require(4078) /* CopyIcon */.CopyIcon;
  obj.open(obj);
};
export const presentUsernameCopied = function presentUsernameCopied() {
  let obj = importDefault(3831);
  obj = { key: "TOAST_USERNAME_SAVED" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t["FHVR/+"]);
  obj.IconComponent = require(4078) /* CopyIcon */.CopyIcon;
  obj.open(obj);
};
export const presentFeedbackSent = function presentFeedbackSent() {
  let obj = importDefault(3831);
  obj = { key: "TOAST_FEEDBACK_SENT" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.xpiDtu);
  obj.IconComponent = require(4082) /* CheckmarkLargeIcon */.CheckmarkLargeIcon;
  obj.iconColor = "status-positive";
  obj.open(obj);
};
export const presentEmoji = function presentEmoji(closure_0) {
  let obj = importDefault(1392);
  obj = { id: closure_0.id, animated: closure_0.animated, size: 48 };
  const emojiURL = obj.getEmojiURL(obj);
  obj = { key: "PRESENT_EMOJI-" + closure_0.id, content: ":" + closure_0.name + ":", icon: { uri: emojiURL } };
  importDefault(3831).open(obj);
};
export const presentNoiseCancellation = function presentNoiseCancellation(arg0) {
  let obj = importDefault(3831);
  obj = { key: "NOISE_CANCELLATION_TOGGLE" };
  const intl = require(1212) /* getSystemLocale */.intl;
  const string = intl.string;
  const t = require(1212) /* getSystemLocale */.t;
  if (arg0) {
    let stringResult = string(t["Q+fhfv"]);
  } else {
    stringResult = string(t.hEMHnF);
  }
  obj.content = stringResult;
  if (arg0) {
    let XLargeIcon = tmp2(4082).CheckmarkLargeIcon;
  } else {
    XLargeIcon = tmp2(4084).XLargeIcon;
  }
  obj.IconComponent = XLargeIcon;
  let str = "icon-feedback-critical";
  if (arg0) {
    str = "status-positive";
  }
  obj.iconColor = str;
  obj.open(obj);
};
export const presentNoiseCancellationError = function presentNoiseCancellationError() {
  let obj = importDefault(3831);
  obj = { key: "MOBILE_NOISE_CANCELLATION_CPU_OVERUSE" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.DnmX2G);
  obj.IconComponent = require(4084) /* XLargeIcon */.XLargeIcon;
  obj.iconColor = "icon-feedback-critical";
  obj.open(obj);
};
export const presentError = function presentError(anyErrorMessage) {
  let obj = importDefault(3831);
  obj = { key: "ERROR", content: anyErrorMessage, IconComponent: require(4084) /* XLargeIcon */.XLargeIcon, iconColor: "icon-feedback-critical" };
  obj.open(obj);
};
export const presentVoiceActivityDetectionError = function presentVoiceActivityDetectionError() {
  let obj = importDefault(3831);
  obj = { key: "MOBILE_ADVANCED_VOICE_ACTIVITY_CPU_OVERUSE" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.zz1Tft);
  obj.IconComponent = require(4084) /* XLargeIcon */.XLargeIcon;
  obj.iconColor = "icon-feedback-critical";
  obj.open(obj);
};
export const roleIdCopied = function roleIdCopied(combined) {
  let obj = importDefault(3831);
  obj = { key: "ROLE_ID_COPIED-" + combined };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { role: combined };
  obj.content = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.iOWpeB, obj);
  obj.IconComponent = require(4078) /* CopyIcon */.CopyIcon;
  obj.open(obj);
};
export const communityRequirementSatisfied = function communityRequirementSatisfied() {
  let obj = importDefault(3831);
  obj = { key: "ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.PHjrpp);
  obj.IconComponent = require(4082) /* CheckmarkLargeIcon */.CheckmarkLargeIcon;
  obj.iconColor = "status-positive";
  obj.open(obj);
};
export const communityAdminOnly = function communityAdminOnly() {
  let obj = importDefault(3831);
  obj = { key: "GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t["pjG+T3"]);
  obj.IconComponent = require(4086) /* CircleInformationIcon */.CircleInformationIcon;
  obj.open(obj);
};
export const unverifiedVoiceGate = function unverifiedVoiceGate(check) {
  let missingVerificationRole;
  let verificationRole;
  ({ missingVerificationRole, verificationRole } = check);
  if (check.notClaimed) {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl6.string(require(1212) /* getSystemLocale */.t.IRxUlG);
  } else if (tmp2) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    stringResult = intl5.string(require(1212) /* getSystemLocale */.t.vW8iUF);
  } else if (tmp) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    stringResult = intl4.string(require(1212) /* getSystemLocale */.t.vdSOpz);
  } else if (tmp4) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    let obj = { min: VerificationCriteria.MEMBER_AGE };
    stringResult = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.v1ktYb, obj);
  } else if (tmp3) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { min: VerificationCriteria.ACCOUNT_AGE };
    stringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.sncw41, obj);
  } else {
    if (missingVerificationRole) {
      missingVerificationRole = null != verificationRole;
    }
    stringResult = null;
    if (missingVerificationRole) {
      const intl = require(1212) /* getSystemLocale */.intl;
      obj = {};
      const _HermesInternal = HermesInternal;
      obj.roleName = "@" + verificationRole.name;
      stringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.MZbCuG, obj);
    }
  }
  if (null != stringResult) {
    const obj1 = { key: "UNVERIFIED_VOICE_GATE", content: stringResult, IconComponent: require(4086) /* CircleInformationIcon */.CircleInformationIcon };
    importDefault(3831).open(obj1);
    const obj4 = importDefault(3831);
  }
};
export const transferOwnershipProtected = function transferOwnershipProtected() {
  let obj = importDefault(3831);
  obj = { key: "TRANSFER_OWNERSHIP_PROTECTED_GUILD" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.wDkfrN);
  obj.IconComponent = require(4086) /* CircleInformationIcon */.CircleInformationIcon;
  obj.open(obj);
};
export const memberOrRoleRemovedToast = function memberOrRoleRemovedToast(name) {
  let obj = importDefault(3831);
  obj = { key: "PRIVATE_CHANNEL_MEMBERS_REMOVED" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { name };
  obj.content = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.vJGtXc, obj);
  obj.IconComponent = require(4089) /* TrashIcon */.TrashIcon;
  obj.open(obj);
};
export const memberOrRoleAddedToast = function memberOrRoleAddedToast(c1, c0) {
  if (c1 > 0) {
    if (c0 > 0) {
      const intl3 = require(1212) /* getSystemLocale */.intl;
      let stringResult = intl3.string(require(1212) /* getSystemLocale */.t.fRD8wW);
    }
    if (null != stringResult) {
      let obj = { key: "MEMBER_OR_ROLE_ADDED", content: stringResult, IconComponent: require(4082) /* CheckmarkLargeIcon */.CheckmarkLargeIcon, iconColor: "status-positive" };
      importDefault(3831).open(obj);
      const obj3 = importDefault(3831);
    }
  }
  if (c1 > 0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = { count: c1 };
    stringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t["yM/8JE"], obj);
  } else if (c0 > 0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { count: c0 };
    stringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.yvV5Ye, obj);
  }
};
export const roleTemplateAppliedToast = function roleTemplateAppliedToast() {
  let obj = importDefault(3831);
  obj = { key: "ROLE_PERMISSION_TEMPLATE_SELECT_CONFIRMATION_TOAST" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.e6xHUV);
  obj.IconComponent = require(4082) /* CheckmarkLargeIcon */.CheckmarkLargeIcon;
  obj.iconColor = "status-positive";
  obj.open(obj);
};
export const roleCreatedToast = function roleCreatedToast() {
  let obj = importDefault(3831);
  obj = { key: "ROLE_CREATED_TOAST" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.kubT4R);
  obj.IconComponent = require(4082) /* CheckmarkLargeIcon */.CheckmarkLargeIcon;
  obj.iconColor = "status-positive";
  obj.open(obj);
};
export const roleCreateFailedToast = function roleCreateFailedToast() {
  let obj = importDefault(3831);
  obj = { key: "ROLE_CREATION_FAILED" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.hbr6Uj);
  obj.IconComponent = require(4084) /* XLargeIcon */.XLargeIcon;
  obj.iconColor = "icon-feedback-critical";
  obj.open(obj);
};
export const presentFailedToast = function presentFailedToast(intl) {
  let obj = importDefault(3831);
  obj = { key: "FAILED", content: intl, IconComponent: require(4084) /* XLargeIcon */.XLargeIcon, iconColor: "icon-feedback-critical" };
  obj.open(obj);
};
export const presentCommandCopied = function presentCommandCopied() {
  let obj = importDefault(3831);
  obj = { key: "TOAST_COMMAND_COPIED" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.U989ct);
  obj.IconComponent = require(4074) /* LinkIcon */.LinkIcon;
  obj.open(obj);
};
export const presentGuildMemberBio = function presentGuildMemberBio(guildName) {
  const _require = arg1;
  let obj = importDefault(3831);
  obj = { key: "GUILD_IDENTITY_BIO_TOAST" };
  const intl = _require(1212).intl;
  obj = { guildName };
  obj.content = intl.formatToPlainString(_require(1212).t.pOy2tm, obj);
  obj.icon = function icon() {
    return closure_0;
  };
  obj.open(obj);
};
export const presentGuildMemberPronouns = function presentGuildMemberPronouns(guildName) {
  const _require = arg1;
  let obj = importDefault(3831);
  obj = { key: "GUILD_IDENTITY_PRONOUNS_TOAST" };
  const intl = _require(1212).intl;
  obj = { guildName };
  obj.content = intl.formatToPlainString(_require(1212).t.gPVLS0, obj);
  obj.icon = function icon() {
    return closure_0;
  };
  obj.open(obj);
};
export const presentUserPronouns = function presentUserPronouns() {
  let obj = importDefault(3831);
  obj = { key: "USER_POPOUT_PRONOUNS" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t["1w6drw"]);
  obj.open(obj);
};
export const presentCopiedToClipboard = function presentCopiedToClipboard() {
  let obj = importDefault(3831);
  obj = { key: "COPIED_TEXT_" + require(491) /* v1 */.v4() };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.mGZ66D);
  obj.IconComponent = require(4078) /* CopyIcon */.CopyIcon;
  obj.open(obj);
};
export const presentGuildRoleSubscriptionTrialTierMonthCost = function presentGuildRoleSubscriptionTrialTierMonthCost() {
  let obj = importDefault(3831);
  obj = { key: "GUILD_ROLE_SUBSCRIPTION_MANAGE_SUBSCRIPTION_PAGE_TRIAL_PRICE_INFO" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t["/q6fpa"]);
  obj.IconComponent = require(4086) /* CircleInformationIcon */.CircleInformationIcon;
  obj.open(obj);
};
export const showVoiceRecordingFailed = function showVoiceRecordingFailed() {
  let obj = importDefault(3831);
  obj = { key: "VOICE_MESSAGES_RECORDING_FAILED" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.H03AqF);
  obj.IconComponent = require(4084) /* XLargeIcon */.XLargeIcon;
  obj.iconColor = "icon-feedback-critical";
  obj.open(obj);
};
export const showMaxGroupMembers = function showMaxGroupMembers() {
  let obj = importDefault(3831);
  obj = { key: "GROUP_DM_INVITE_FULL_MAIN" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.OtTQDz);
  obj.IconComponent = require(4084) /* XLargeIcon */.XLargeIcon;
  obj.iconColor = "icon-feedback-critical";
  obj.open(obj);
};
export const showTransferOwnershipSuccess = function showTransferOwnershipSuccess() {
  let obj = importDefault(3831);
  obj = { key: "TRANSFER_OWNERSHIP_SUCCESS" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t["2Eyydu"]);
  obj.IconComponent = require(4082) /* CheckmarkLargeIcon */.CheckmarkLargeIcon;
  obj.iconColor = "status-positive";
  obj.open(obj);
};
export const showSafetySuccess = function showSafetySuccess(BLOCK_SUCCESS, safetyToastTypeContent) {
  let obj = importDefault(3831);
  obj = { key: BLOCK_SUCCESS, content: safetyToastTypeContent, IconComponent: require(4091) /* CircleCheckIcon */.CircleCheckIcon, iconColor: "status-positive" };
  obj.open(obj);
};
export const showVerificationSent = function showVerificationSent() {
  let obj = importDefault(3831);
  obj = { key: "VERIFICATION_RESENT" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.gI8IST);
  obj.IconComponent = require(4082) /* CheckmarkLargeIcon */.CheckmarkLargeIcon;
  obj.iconColor = "status-positive";
  obj.open(obj);
};
export const presentTimestamp = function presentTimestamp(full) {
  let obj = importDefault(3831);
  obj = { key: "MESSAGE_TIMESTAMP", content: full, IconComponent: require(4094) /* ClockIcon */.ClockIcon };
  obj.open(obj);
};
