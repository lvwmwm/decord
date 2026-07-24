// Module ID: 7589
// Function ID: 60502
// Name: SafetyHubLinks
// Dependencies: [7, 6, 653, 480, 2]

// Module 7589 (SafetyHubLinks)
import importDefaultResult from "_defineProperties";
import _classCallCheck from "_classCallCheck";
import { AnalyticsSections } from "ME";

let obj = { SETTINGS: "SETTINGS", ACCOUNT_STANDING: "ACCOUNT_STANDING", GUILD_SETTINGS: "GUILD_SETTINGS", ENCRYPTION: "ENCRYPTION", CONTENT_AND_SOCIAL: "CONTENT_AND_SOCIAL", DATA_PRIVACY: "DATA_PRIVACY" };
const items = [, , ];
({ SETTINGS: arr[0], ACCOUNT_STANDING: arr[1], ENCRYPTION: arr[2] } = obj);
class SafetyHubLinks {
  constructor() {
    tmp = _classCallCheck(this, SafetyHubLinks);
    return;
  }
}
const importDefaultResultResult = importDefaultResult(SafetyHubLinks);
importDefaultResultResult.TOS_LINK = "https://discord.com/terms";
importDefaultResultResult.COMMUNITY_GUIDELINES = "https://discord.com/guidelines";
importDefaultResultResult.APPEALS_LINK = "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731";
importDefaultResultResult.WARNING_SYSTEM_HELPCENTER_LINK = "https://support.discord.com/hc/articles/18210965981847";
importDefaultResultResult.AGE_VERIFICATION_LINK = "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731";
importDefaultResultResult.SPAM_LINK = "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731&tf_360055270593=__dc.ticket_form-tnsv1_appeals_other_questions__";
importDefaultResultResult.LEARN_MORE_UU_APPEAL_LINK = "https://support.discord.com/hc/articles/360041820932";
class SafetyHubPolicyNoticeKeys {
  constructor() {
    tmp = _classCallCheck(this, SafetyHubPolicyNoticeKeys);
    return;
  }
}
const importDefaultResultResult1 = importDefaultResult(SafetyHubPolicyNoticeKeys);
importDefaultResultResult1.CLASSIFICATION_ID = "classification_id";
importDefaultResultResult1.INCIDENT_TIMESTAMP = "incident_time";
class SafetySystemNotificationEmbedKeys {
  constructor() {
    tmp = _classCallCheck(this, SafetySystemNotificationEmbedKeys);
    return;
  }
}
const importDefaultResultResult2 = importDefaultResult(SafetySystemNotificationEmbedKeys);
importDefaultResultResult2.ICON_TYPE = "icon_type";
importDefaultResultResult2.HEADER = "header";
importDefaultResultResult2.BODY = "body";
importDefaultResultResult2.CTAS = "ctas";
importDefaultResultResult2.TIMESTAMP = "timestamp";
importDefaultResultResult2.THEME = "theme";
importDefaultResultResult2.CLIENT_VERSION_MESSAGE = "client_version_message";
importDefaultResultResult2.LEARN_MORE_LINK = "learn_more_link";
importDefaultResultResult2.CLASSIFICATION_ID = "classification_id";
obj = { SPEED_BUMP: AnalyticsSections.APPEAL_INGESTION_SPEED_BUMP, COLLECT_SIGNAL: AnalyticsSections.APPEAL_INGESTION_COLLECT_SIGNAL, CONFIRM_SUBMISSION: AnalyticsSections.APPEAL_INGESTION_CONFIRM_SUBMISSION, REQUEST_SENT: AnalyticsSections.APPEAL_INGESTION_REQUEST_SENT, THANKS: AnalyticsSections.APPEAL_INGESTION_THANKS, SPAM: AnalyticsSections.APPEAL_INGESTION_SPAM };
obj = { DIDNT_VIOLATE_POLICY: 0, [0]: "DIDNT_VIOLATE_POLICY", TOO_STRICT_UNFAIR: 1, [1]: "TOO_STRICT_UNFAIR", DONT_AGREE_PENALTY: 2, [2]: "DONT_AGREE_PENALTY", SOMETHING_ELSE: 3, [3]: "SOMETHING_ELSE" };
const items1 = [, , , ];
({ DIDNT_VIOLATE_POLICY: arr2[0], TOO_STRICT_UNFAIR: arr2[1], DONT_AGREE_PENALTY: arr2[2], SOMETHING_ELSE: arr2[3] } = obj);
const obj1 = {};
const frozen = Object.freeze(obj);
obj1.impression_group = require("isThrottled").ImpressionGroups.APPEAL_INGESTION;
const obj2 = { SPEED_BUMP: "speed-bump", COLLECT_SIGNAL: "collect-signal", CONFIRM_SUBMISSION: "confirm-submission", REQUEST_SENT: "request-sent", THANKS: "thanks" };
const result = require("ME").fileFinishedImporting("modules/safety_hub/SafetyHubConstants.tsx");

export const SafetyHubView = obj;
export const SafetyHubViewOrder = items;
export const AGE_APPEAL_ACTION_SHEET_NAME = "AUTOMATED_UNDERAGE_APPEAL";
export const SafetyHubLinks = importDefaultResultResult;
export const SafetyHubPolicyNoticeKeys = importDefaultResultResult1;
export const SafetySystemNotificationCtaType = { POLICY_VIOLATION_DETAIL: "policy_violation_detail", LEARN_MORE_LINK: "learn_more_link" };
export const SafetySystemNotificationEmbedKeys = importDefaultResultResult2;
export const SafetyHubAnalyticsActions = { ViewViolationDetail: 0, [0]: "ViewViolationDetail", ViewViolationsDropdown: 1, [1]: "ViewViolationsDropdown", ClickLetUsKnow: 2, [2]: "ClickLetUsKnow", ClickAgeVerificationLink: 3, [3]: "ClickAgeVerificationLink", ClickSpamWebformLink: 4, [4]: "ClickSpamWebformLink", ClickLearnMoreLink: 5, [5]: "ClickLearnMoreLink", ClickCommunityGuidelinesLink: 6, [6]: "ClickCommunityGuidelinesLink", ClickWarningSystemHelpcenterLink: 7, [7]: "ClickWarningSystemHelpcenterLink" };
export const SafetyHubAnalyticsActionSource = { SystemDM: 0, [0]: "SystemDM", StandingTab: 1, [1]: "StandingTab", AppealIngestion: 2, [2]: "AppealIngestion" };
export const AppealIngestionSections = frozen;
export const AppealIngestionSignal = obj;
export const AppealIngestionSignalOrder = items1;
export const DEFAULT_MEDIA_MAX_WIDTH = 372;
export const DEFAULT_MEDIA_MAX_HEIGHT = 279;
export const VIDEO_PLACEHOLDER_WIDTH = 250;
export const VIDEO_PLACEHOLDER_HEIGHT = 250;
export const VIDEO_PLACEHOLDER_FILENAME = "video.png";
export const APPEAL_INGESTION_IMPRESSION_PROPERTIES = obj1;
export const AppealIngestionSlideTypes = obj2;
export const AppealIngestionSlidesOrder = { [obj2.SPEED_BUMP]: { next: obj2.COLLECT_SIGNAL, prev: null }, [obj2.COLLECT_SIGNAL]: { next: obj2.CONFIRM_SUBMISSION, prev: obj2.SPEED_BUMP }, [obj2.CONFIRM_SUBMISSION]: { next: obj2.REQUEST_SENT, prev: obj2.COLLECT_SIGNAL }, [obj2.REQUEST_SENT]: { next: null, prev: null } };
export const ViolationType = { USER: 1, [1]: "USER", GUILD_OWNER: 2, [2]: "GUILD_OWNER", GUILD_MEMBER: 3, [3]: "GUILD_MEMBER" };
export const AgeCheckStatus = { LOADING: "loading", ERROR: "error", SUCCESS: "success", FAILURE: "failure", NONE: "none" };
export const AGE_CHECK_POLL_DELAY_MS = 2000;
export const AGE_CHECK_POLL_INTERVAL_MS = 15000;
export const AGE_CHECK_MAX_POLL_ATTEMPTS = 5;
