// Module ID: 16454
// Function ID: 16455
// Name: CategoryChannel
// Dependencies: [2, 16455, 16462, 16480]

// Module 16454 (CategoryChannel)
import RedesignCategory from "RedesignCategory" /* 16455 */;
import ThreadChannelDefault from "ThreadChannel" /* 16462 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 16480 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = RedesignCategory.CategoryChannel;
export const SuggestedCategory = RedesignCategory.SuggestedCategory;
export const RecentlyActiveCategory = RedesignCategory.RecentlyActiveCategory;
export const renderCategoryItem = RedesignCategory.renderCategoryItem;
export const useCategoryStyles = RedesignCategory.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;
