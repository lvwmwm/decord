// Module ID: 17569
// Function ID: 17570
// Name: CategoryChannel
// Dependencies: [2, 17570, 17577, 17595]

// Module 17569 (CategoryChannel)
import RedesignCategory from "RedesignCategory" /* 17570 */;
import ThreadChannelDefault from "ThreadChannel" /* 17577 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 17595 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = RedesignCategory.CategoryChannel;
export const SuggestedCategory = RedesignCategory.SuggestedCategory;
export const RecentlyActiveCategory = RedesignCategory.RecentlyActiveCategory;
export const renderCategoryItem = RedesignCategory.renderCategoryItem;
export const useCategoryStyles = RedesignCategory.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;
