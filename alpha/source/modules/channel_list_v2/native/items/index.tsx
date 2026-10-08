// Module ID: 16330
// Function ID: 16331
// Name: CategoryChannel
// Dependencies: [2, 16331, 16338, 16356]

// Module 16330 (CategoryChannel)
import RedesignCategory from "RedesignCategory" /* 16331 */;
import ThreadChannelDefault from "ThreadChannel" /* 16338 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 16356 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = RedesignCategory.CategoryChannel;
export const SuggestedCategory = RedesignCategory.SuggestedCategory;
export const RecentlyActiveCategory = RedesignCategory.RecentlyActiveCategory;
export const renderCategoryItem = RedesignCategory.renderCategoryItem;
export const useCategoryStyles = RedesignCategory.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;
