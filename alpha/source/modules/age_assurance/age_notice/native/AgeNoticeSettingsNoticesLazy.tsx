// Module ID: 17381
// Function ID: 17382
// Name: AgeNoticeSettingsNoticesLazy
// Dependencies: [2, 17382]

// Module 17381 (AgeNoticeSettingsNoticesLazy)
import AgeNoticeSettingsNotices from "AgeNoticeSettingsNotices" /* 17382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeSettingsNoticesLazy.tsx");

export const ContentFiltersTeenNotice = AgeNoticeSettingsNotices.ContentFiltersTeenNotice;
export const ContentFiltersUnconfirmedNotice = AgeNoticeSettingsNotices.ContentFiltersUnconfirmedNotice;
export const MessageRequestsNotice = AgeNoticeSettingsNotices.MessageRequestsNotice;
export const shouldShowAgeNoticeTeenNotice = AgeNoticeSettingsNotices.shouldShowTeenNotice;
export const shouldShowAgeNoticeUnconfirmedNotice = AgeNoticeSettingsNotices.shouldShowUnconfirmedNotice;
export const useIsAgeNoticeSettingsNoticeEnabled = AgeNoticeSettingsNotices.useIsEnabled;
export const useAgeNoticeMessageRequestsNoticeVariant = AgeNoticeSettingsNotices.useMessageRequestsNoticeVariant;
