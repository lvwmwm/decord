// Module ID: 17067
// Function ID: 17068
// Name: AgeNoticeSettingsNoticesLazy
// Dependencies: [2, 17068]

// Module 17067 (AgeNoticeSettingsNoticesLazy)
import AgeNoticeSettingsNotices from "AgeNoticeSettingsNotices" /* 17068 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeSettingsNoticesLazy.tsx");

export const ContentFiltersTeenNotice = AgeNoticeSettingsNotices.ContentFiltersTeenNotice;
export const ContentFiltersUnconfirmedNotice = AgeNoticeSettingsNotices.ContentFiltersUnconfirmedNotice;
export const MessageRequestsNotice = AgeNoticeSettingsNotices.MessageRequestsNotice;
export const shouldShowAgeNoticeTeenNotice = AgeNoticeSettingsNotices.shouldShowTeenNotice;
export const shouldShowAgeNoticeUnconfirmedNotice = AgeNoticeSettingsNotices.shouldShowUnconfirmedNotice;
export const useIsAgeNoticeSettingsNoticeEnabled = AgeNoticeSettingsNotices.useIsEnabled;
export const useAgeNoticeMessageRequestsNoticeVariant = AgeNoticeSettingsNotices.useMessageRequestsNoticeVariant;
