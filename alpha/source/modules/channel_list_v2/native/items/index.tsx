// Module ID: 16507
// Function ID: 16508
// Name: CategoryChannel
// Dependencies: [2, 16508, 16515, 16533]

// Module 16507 (CategoryChannel)
import RedesignCategory from "RedesignCategory" /* 16508 */;
import ThreadChannelDefault from "ThreadChannel" /* 16515 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 16533 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = RedesignCategory.CategoryChannel;
export const SuggestedCategory = RedesignCategory.SuggestedCategory;
export const RecentlyActiveCategory = RedesignCategory.RecentlyActiveCategory;
export const renderCategoryItem = RedesignCategory.renderCategoryItem;
export const useCategoryStyles = RedesignCategory.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;
