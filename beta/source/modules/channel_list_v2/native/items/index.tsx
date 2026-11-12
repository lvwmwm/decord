// Module ID: 18538
// Function ID: 18539
// Name: CategoryChannel
// Dependencies: [2, 18539, 18546, 18562]

// Module 18538 (CategoryChannel)
import RedesignCategory from "RedesignCategory" /* 18539 */;
import ThreadChannelDefault from "ThreadChannel" /* 18546 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 18562 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = RedesignCategory.CategoryChannel;
export const SuggestedCategory = RedesignCategory.SuggestedCategory;
export const RecentlyActiveCategory = RedesignCategory.RecentlyActiveCategory;
export const renderCategoryItem = RedesignCategory.renderCategoryItem;
export const useCategoryStyles = RedesignCategory.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;
