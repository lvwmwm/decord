// Module ID: 17036
// Function ID: 17037
// Name: AgeNoticeSettingsNoticesLazy
// Dependencies: [2, 17037]

// Module 17036 (AgeNoticeSettingsNoticesLazy)
import AgeNoticeSettingsNotices from "AgeNoticeSettingsNotices" /* 17037 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeSettingsNoticesLazy.tsx");

export const ContentFiltersTeenNotice = AgeNoticeSettingsNotices.ContentFiltersTeenNotice;
export const ContentFiltersUnconfirmedNotice = AgeNoticeSettingsNotices.ContentFiltersUnconfirmedNotice;
export const MessageRequestsNotice = AgeNoticeSettingsNotices.MessageRequestsNotice;
export const shouldShowAgeNoticeTeenNotice = AgeNoticeSettingsNotices.shouldShowTeenNotice;
export const shouldShowAgeNoticeUnconfirmedNotice = AgeNoticeSettingsNotices.shouldShowUnconfirmedNotice;
export const useIsAgeNoticeSettingsNoticeEnabled = AgeNoticeSettingsNotices.useIsEnabled;
export const useAgeNoticeMessageRequestsNoticeVariant = AgeNoticeSettingsNotices.useMessageRequestsNoticeVariant;
