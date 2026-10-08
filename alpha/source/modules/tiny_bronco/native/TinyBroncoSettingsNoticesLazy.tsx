// Module ID: 14900
// Function ID: 14901
// Name: TinyBroncoSettingsNoticesLazy
// Dependencies: [2, 14901]

// Module 14900 (TinyBroncoSettingsNoticesLazy)
import TinyBroncoSettingsNotices from "TinyBroncoSettingsNotices" /* 14901 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsNoticesLazy.tsx");

export const ContentFiltersTeenNotice = TinyBroncoSettingsNotices.ContentFiltersTeenNotice;
export const ContentFiltersUnconfirmedNotice = TinyBroncoSettingsNotices.ContentFiltersUnconfirmedNotice;
export const MessageRequestsNotice = TinyBroncoSettingsNotices.MessageRequestsNotice;
export const shouldShowTinyBroncoTeenNotice = TinyBroncoSettingsNotices.shouldShowTeenNotice;
export const shouldShowTinyBroncoUnconfirmedNotice = TinyBroncoSettingsNotices.shouldShowUnconfirmedNotice;
export const useIsTinyBroncoSettingsNoticeEnabled = TinyBroncoSettingsNotices.useIsEnabled;
export const useTinyBroncoMessageRequestsNoticeVariant = TinyBroncoSettingsNotices.useMessageRequestsNoticeVariant;
