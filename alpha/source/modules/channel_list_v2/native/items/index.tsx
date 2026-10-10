// Module ID: 16519
// Function ID: 16520
// Name: CategoryChannel
// Dependencies: [2, 16520, 16527, 16545]

// Module 16519 (CategoryChannel)
import RedesignCategory from "RedesignCategory" /* 16520 */;
import ThreadChannelDefault from "ThreadChannel" /* 16527 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 16545 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = RedesignCategory.CategoryChannel;
export const SuggestedCategory = RedesignCategory.SuggestedCategory;
export const RecentlyActiveCategory = RedesignCategory.RecentlyActiveCategory;
export const renderCategoryItem = RedesignCategory.renderCategoryItem;
export const useCategoryStyles = RedesignCategory.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;
