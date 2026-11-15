// Module ID: 18536
// Function ID: 18537
// Name: CategoryChannel
// Dependencies: [2, 18537, 18544, 18560]

// Module 18536 (CategoryChannel)
import RedesignCategory from "RedesignCategory" /* 18537 */;
import ThreadChannelDefault from "ThreadChannel" /* 18544 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 18560 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = RedesignCategory.CategoryChannel;
export const SuggestedCategory = RedesignCategory.SuggestedCategory;
export const RecentlyActiveCategory = RedesignCategory.RecentlyActiveCategory;
export const renderCategoryItem = RedesignCategory.renderCategoryItem;
export const useCategoryStyles = RedesignCategory.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;
