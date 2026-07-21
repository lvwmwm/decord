// Module ID: 3828
// Function ID: 31932
// Name: presentAddedFriendToast
// Dependencies: []
// Exports: communityAdminOnly, communityRequirementSatisfied, memberOrRoleAddedToast, memberOrRoleRemovedToast, presentAddedFriendToast, presentCommandCopied, presentCopiedToClipboard, presentEmoji, presentError, presentFailedToast, presentFeedbackSent, presentFriendRequestAcceptedToast, presentFriendRequestIgnoredToast, presentGameFriendRequestAcceptedToast, presentGameFriendRequestIgnoredToast, presentGifSaved, presentGuildMemberBio, presentGuildMemberPronouns, presentGuildRoleSubscriptionTrialTierMonthCost, presentIdCopied, presentImageSaved, presentInviteSent, presentLinkCopied, presentMessageCopied, presentMessageIdCopied, presentNoiseCancellation, presentNoiseCancellationError, presentPostIdCopied, presentTimestamp, presentUserPronouns, presentUsernameCopied, presentVideoSaved, presentVoiceActivityDetectionError, roleCreateFailedToast, roleCreatedToast, roleIdCopied, roleTemplateAppliedToast, showMaxGroupMembers, showSafetySuccess, showTransferOwnershipSuccess, showVerificationSent, showVoiceRecordingFailed, transferOwnershipProtected, unverifiedVoiceGate

// Module 3828 (presentAddedFriendToast)
const VerificationCriteria = require(dependencyMap[0]).VerificationCriteria;
const _module = require(dependencyMap[19]);
const result = _module.fileFinishedImporting("modules/toast/native/ToastUtils.tsx");

export const presentAddedFriendToast = function presentAddedFriendToast() {
  let obj = importDefault(dependencyMap[1]);
  obj = {};
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.Fn5bwO);
  obj.IconComponent = require(dependencyMap[3]).FriendsIcon;
  obj.open(obj);
};
export const presentFriendRequestAcceptedToast = function presentFriendRequestAcceptedToast(username) {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "TOAST_FRIEND_REQUEST_ACCEPTED" };
  if (null == username) {
    const intl2 = require(dependencyMap[2]).intl;
    let stringResult = intl2.string(require(dependencyMap[2]).t.UhJna5);
  } else {
    const intl = require(dependencyMap[2]).intl;
    obj = { username: username.username };
    stringResult = intl.formatToPlainString(require(dependencyMap[2]).t.b3eoD4, obj);
  }
  obj.content = stringResult;
  obj.IconComponent = require(dependencyMap[4]).UserPlusIcon;
  obj.iconColor = "status-positive";
  obj.open(obj);
};
export const presentGameFriendRequestAcceptedToast = function presentGameFriendRequestAcceptedToast() {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "TOAST_GAME_FRIEND_REQUEST_ACCEPTED" };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.xjNLeZ);
  obj.IconComponent = require(dependencyMap[5]).UserPlatformIcon;
  obj.iconColor = "status-positive";
  obj.open(obj);
};
export const presentFriendRequestIgnoredToast = function presentFriendRequestIgnoredToast() {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "TOAST_FRIEND_REQUEST_IGNORED" };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.YlavlY);
  obj.IconComponent = require(dependencyMap[6]).UserMinusIcon;
  obj.iconColor = "icon-feedback-critical";
  obj.open(obj);
};
export const presentGameFriendRequestIgnoredToast = function presentGameFriendRequestIgnoredToast() {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "TOAST_GAME_FRIEND_REQUEST_IGNORED" };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.P6BzJP);
  obj.IconComponent = require(dependencyMap[6]).UserMinusIcon;
  obj.iconColor = "icon-feedback-critical";
  obj.open(obj);
};
export const presentLinkCopied = function presentLinkCopied() {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "LINK_COPIED" };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.+5kSoW);
  obj.IconComponent = require(dependencyMap[7]).LinkIcon;
  obj.open(obj);
};
export const presentInviteSent = function presentInviteSent() {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "INVITE_SENT" };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.sVwWdV);
  obj.IconComponent = require(dependencyMap[8]).SendMessageIcon;
  obj.open(obj);
};
export const presentIdCopied = function presentIdCopied() {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "TOAST_ID_COPIED" };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.eNjAah);
  obj.IconComponent = require(dependencyMap[9]).CopyIcon;
  obj.open(obj);
};
export const presentImageSaved = function presentImageSaved() {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "TOAST_IMAGE_SAVED" };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.cqpdJW);
  obj.IconComponent = require(dependencyMap[10]).DownloadIcon;
  obj.open(obj);
};
export const presentVideoSaved = function presentVideoSaved() {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "TOAST_VIDEO_SAVED" };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.cEK+1g);
  obj.IconComponent = require(dependencyMap[10]).DownloadIcon;
  obj.open(obj);
};
export const presentGifSaved = function presentGifSaved() {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "TOAST_GIF_SAVED" };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.LktEtN);
  obj.IconComponent = require(dependencyMap[10]).DownloadIcon;
  obj.open(obj);
};
export const presentMessageCopied = function presentMessageCopied() {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "TOAST_MESSAGE_COPIED" };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.R3o53R);
  obj.IconComponent = require(dependencyMap[9]).CopyIcon;
  obj.open(obj);
};
export const presentMessageIdCopied = function presentMessageIdCopied() {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "TOAST_MESSAGE_ID_COPIED" };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.svRBmK);
  obj.IconComponent = require(dependencyMap[9]).CopyIcon;
  obj.open(obj);
};
export const presentPostIdCopied = function presentPostIdCopied() {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "TOAST_FORUM_POST_ID_COPIED" };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.aBQ2RP);
  obj.IconComponent = require(dependencyMap[9]).CopyIcon;
  obj.open(obj);
};
export const presentUsernameCopied = function presentUsernameCopied() {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "TOAST_USERNAME_SAVED" };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.FHVR/+);
  obj.IconComponent = require(dependencyMap[9]).CopyIcon;
  obj.open(obj);
};
export const presentFeedbackSent = function presentFeedbackSent() {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "TOAST_FEEDBACK_SENT" };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.xpiDtu);
  obj.IconComponent = require(dependencyMap[11]).CheckmarkLargeIcon;
  obj.iconColor = "status-positive";
  obj.open(obj);
};
export const presentEmoji = function presentEmoji(id) {
  let obj = importDefault(dependencyMap[12]);
  obj = { id: id.id, animated: id.animated, size: 48 };
  const emojiURL = obj.getEmojiURL(obj);
  obj = { key: "PRESENT_EMOJI-" + id.id, content: ":" + id.name + ":", icon: { uri: emojiURL } };
  importDefault(dependencyMap[1]).open(obj);
};
export const presentNoiseCancellation = function presentNoiseCancellation(arg0) {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "NOISE_CANCELLATION_TOGGLE" };
  const intl = require(dependencyMap[2]).intl;
  const string = intl.string;
  const t = require(dependencyMap[2]).t;
  if (arg0) {
    let stringResult = string(t.Q+fhfv);
  } else {
    stringResult = string(t.hEMHnF);
  }
  obj.content = stringResult;
  if (arg0) {
    let XLargeIcon = tmp2(tmp3[11]).CheckmarkLargeIcon;
  } else {
    XLargeIcon = tmp2(tmp3[13]).XLargeIcon;
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
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "MOBILE_NOISE_CANCELLATION_CPU_OVERUSE" };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.DnmX2G);
  obj.IconComponent = require(dependencyMap[13]).XLargeIcon;
  obj.iconColor = "icon-feedback-critical";
  obj.open(obj);
};
export const presentError = function presentError(anyErrorMessage) {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "ERROR", content: anyErrorMessage, IconComponent: require(dependencyMap[13]).XLargeIcon, iconColor: "icon-feedback-critical" };
  obj.open(obj);
};
export const presentVoiceActivityDetectionError = function presentVoiceActivityDetectionError() {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "MOBILE_ADVANCED_VOICE_ACTIVITY_CPU_OVERUSE" };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.zz1Tft);
  obj.IconComponent = require(dependencyMap[13]).XLargeIcon;
  obj.iconColor = "icon-feedback-critical";
  obj.open(obj);
};
export const roleIdCopied = function roleIdCopied(closure_2) {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "ROLE_ID_COPIED-" + closure_2 };
  const intl = require(dependencyMap[2]).intl;
  obj = { role: closure_2 };
  obj.content = intl.formatToPlainString(require(dependencyMap[2]).t.iOWpeB, obj);
  obj.IconComponent = require(dependencyMap[9]).CopyIcon;
  obj.open(obj);
};
export const communityRequirementSatisfied = function communityRequirementSatisfied() {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP" };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.PHjrpp);
  obj.IconComponent = require(dependencyMap[11]).CheckmarkLargeIcon;
  obj.iconColor = "status-positive";
  obj.open(obj);
};
export const communityAdminOnly = function communityAdminOnly() {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY" };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.pjG+T3);
  obj.IconComponent = require(dependencyMap[14]).CircleInformationIcon;
  obj.open(obj);
};
export const unverifiedVoiceGate = function unverifiedVoiceGate(check) {
  let missingVerificationRole;
  let verificationRole;
  ({ missingVerificationRole, verificationRole } = check);
  if (check.notClaimed) {
    const intl6 = require(dependencyMap[2]).intl;
    let stringResult = intl6.string(require(dependencyMap[2]).t.IRxUlG);
  } else if (tmp2) {
    const intl5 = require(dependencyMap[2]).intl;
    stringResult = intl5.string(require(dependencyMap[2]).t.vW8iUF);
  } else if (tmp) {
    const intl4 = require(dependencyMap[2]).intl;
    stringResult = intl4.string(require(dependencyMap[2]).t.vdSOpz);
  } else if (tmp4) {
    const intl3 = require(dependencyMap[2]).intl;
    let obj = { min: VerificationCriteria.MEMBER_AGE };
    stringResult = intl3.formatToPlainString(require(dependencyMap[2]).t.v1ktYb, obj);
  } else if (tmp3) {
    const intl2 = require(dependencyMap[2]).intl;
    obj = { min: VerificationCriteria.ACCOUNT_AGE };
    stringResult = intl2.formatToPlainString(require(dependencyMap[2]).t.sncw41, obj);
  } else {
    if (missingVerificationRole) {
      missingVerificationRole = null != verificationRole;
    }
    stringResult = null;
    if (missingVerificationRole) {
      const intl = require(dependencyMap[2]).intl;
      obj = {};
      const _HermesInternal = HermesInternal;
      obj.roleName = "@" + verificationRole.name;
      stringResult = intl.formatToPlainString(require(dependencyMap[2]).t.MZbCuG, obj);
    }
  }
  if (null != stringResult) {
    const obj1 = { key: "UNVERIFIED_VOICE_GATE", content: stringResult, IconComponent: require(dependencyMap[14]).CircleInformationIcon };
    importDefault(dependencyMap[1]).open(obj1);
    const obj4 = importDefault(dependencyMap[1]);
  }
};
export const transferOwnershipProtected = function transferOwnershipProtected() {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "TRANSFER_OWNERSHIP_PROTECTED_GUILD" };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.wDkfrN);
  obj.IconComponent = require(dependencyMap[14]).CircleInformationIcon;
  obj.open(obj);
};
export const memberOrRoleRemovedToast = function memberOrRoleRemovedToast(closure_1) {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "PRIVATE_CHANNEL_MEMBERS_REMOVED" };
  const intl = require(dependencyMap[2]).intl;
  obj = { name: closure_1 };
  obj.content = intl.formatToPlainString(require(dependencyMap[2]).t.vJGtXc, obj);
  obj.IconComponent = require(dependencyMap[15]).TrashIcon;
  obj.open(obj);
};
export const memberOrRoleAddedToast = function memberOrRoleAddedToast(closure_1, closure_0) {
  if (closure_1 > 0) {
    if (closure_0 > 0) {
      const intl3 = require(dependencyMap[2]).intl;
      let stringResult = intl3.string(require(dependencyMap[2]).t.fRD8wW);
    }
    if (null != stringResult) {
      let obj = { key: "MEMBER_OR_ROLE_ADDED", content: stringResult, IconComponent: require(dependencyMap[11]).CheckmarkLargeIcon, iconColor: "status-positive" };
      importDefault(dependencyMap[1]).open(obj);
      const obj3 = importDefault(dependencyMap[1]);
    }
  }
  if (closure_1 > 0) {
    const intl2 = require(dependencyMap[2]).intl;
    obj = { count: closure_1 };
    stringResult = intl2.formatToPlainString(require(dependencyMap[2]).t.yM/8JE, obj);
  } else if (closure_0 > 0) {
    const intl = require(dependencyMap[2]).intl;
    obj = { count: closure_0 };
    stringResult = intl.formatToPlainString(require(dependencyMap[2]).t.yvV5Ye, obj);
  }
};
export const roleTemplateAppliedToast = function roleTemplateAppliedToast() {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "ROLE_PERMISSION_TEMPLATE_SELECT_CONFIRMATION_TOAST" };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.e6xHUV);
  obj.IconComponent = require(dependencyMap[11]).CheckmarkLargeIcon;
  obj.iconColor = "status-positive";
  obj.open(obj);
};
export const roleCreatedToast = function roleCreatedToast() {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "ROLE_CREATED_TOAST" };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.kubT4R);
  obj.IconComponent = require(dependencyMap[11]).CheckmarkLargeIcon;
  obj.iconColor = "status-positive";
  obj.open(obj);
};
export const roleCreateFailedToast = function roleCreateFailedToast() {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "ROLE_CREATION_FAILED" };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.hbr6Uj);
  obj.IconComponent = require(dependencyMap[13]).XLargeIcon;
  obj.iconColor = "icon-feedback-critical";
  obj.open(obj);
};
export const presentFailedToast = function presentFailedToast(intl) {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "FAILED", content: intl, IconComponent: require(dependencyMap[13]).XLargeIcon, iconColor: "icon-feedback-critical" };
  obj.open(obj);
};
export const presentCommandCopied = function presentCommandCopied() {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "TOAST_COMMAND_COPIED" };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.U989ct);
  obj.IconComponent = require(dependencyMap[7]).LinkIcon;
  obj.open(obj);
};
export const presentGuildMemberBio = function presentGuildMemberBio(guildName) {
  const require = arg1;
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "GUILD_IDENTITY_BIO_TOAST" };
  const intl = require(dependencyMap[2]).intl;
  obj = { guildName };
  obj.content = intl.formatToPlainString(require(dependencyMap[2]).t.pOy2tm, obj);
  obj.icon = function icon() {
    return arg1;
  };
  obj.open(obj);
};
export const presentGuildMemberPronouns = function presentGuildMemberPronouns(guildName) {
  const require = arg1;
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "GUILD_IDENTITY_PRONOUNS_TOAST" };
  const intl = require(dependencyMap[2]).intl;
  obj = { guildName };
  obj.content = intl.formatToPlainString(require(dependencyMap[2]).t.gPVLS0, obj);
  obj.icon = function icon() {
    return arg1;
  };
  obj.open(obj);
};
export const presentUserPronouns = function presentUserPronouns() {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "USER_POPOUT_PRONOUNS" };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.1w6drw);
  obj.open(obj);
};
export const presentCopiedToClipboard = function presentCopiedToClipboard() {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "COPIED_TEXT_" + require(dependencyMap[16]).v4() };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.mGZ66D);
  obj.IconComponent = require(dependencyMap[9]).CopyIcon;
  obj.open(obj);
};
export const presentGuildRoleSubscriptionTrialTierMonthCost = function presentGuildRoleSubscriptionTrialTierMonthCost() {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "GUILD_ROLE_SUBSCRIPTION_MANAGE_SUBSCRIPTION_PAGE_TRIAL_PRICE_INFO" };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t./q6fpa);
  obj.IconComponent = require(dependencyMap[14]).CircleInformationIcon;
  obj.open(obj);
};
export const showVoiceRecordingFailed = function showVoiceRecordingFailed() {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "VOICE_MESSAGES_RECORDING_FAILED" };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.H03AqF);
  obj.IconComponent = require(dependencyMap[13]).XLargeIcon;
  obj.iconColor = "icon-feedback-critical";
  obj.open(obj);
};
export const showMaxGroupMembers = function showMaxGroupMembers() {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "GROUP_DM_INVITE_FULL_MAIN" };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.OtTQDz);
  obj.IconComponent = require(dependencyMap[13]).XLargeIcon;
  obj.iconColor = "icon-feedback-critical";
  obj.open(obj);
};
export const showTransferOwnershipSuccess = function showTransferOwnershipSuccess() {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "TRANSFER_OWNERSHIP_SUCCESS" };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.2Eyydu);
  obj.IconComponent = require(dependencyMap[11]).CheckmarkLargeIcon;
  obj.iconColor = "status-positive";
  obj.open(obj);
};
export const showSafetySuccess = function showSafetySuccess(BLOCK_SUCCESS, safetyToastTypeContent) {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: BLOCK_SUCCESS, content: safetyToastTypeContent, IconComponent: require(dependencyMap[17]).CircleCheckIcon, iconColor: "status-positive" };
  obj.open(obj);
};
export const showVerificationSent = function showVerificationSent() {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "VERIFICATION_RESENT" };
  const intl = require(dependencyMap[2]).intl;
  obj.content = intl.string(require(dependencyMap[2]).t.gI8IST);
  obj.IconComponent = require(dependencyMap[11]).CheckmarkLargeIcon;
  obj.iconColor = "status-positive";
  obj.open(obj);
};
export const presentTimestamp = function presentTimestamp(full) {
  let obj = importDefault(dependencyMap[1]);
  obj = { key: "MESSAGE_TIMESTAMP", content: full, IconComponent: require(dependencyMap[18]).ClockIcon };
  obj.open(obj);
};
