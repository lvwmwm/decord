// Module ID: 17627
// Function ID: 17628
// Name: CategoryChannel
// Dependencies: [2, 17628, 17635, 17651]

// Module 17627 (CategoryChannel)
import RedesignCategory from "RedesignCategory" /* 17628 */;
import ThreadChannelDefault from "ThreadChannel" /* 17635 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 17651 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = RedesignCategory.CategoryChannel;
export const SuggestedCategory = RedesignCategory.SuggestedCategory;
export const RecentlyActiveCategory = RedesignCategory.RecentlyActiveCategory;
export const renderCategoryItem = RedesignCategory.renderCategoryItem;
export const useCategoryStyles = RedesignCategory.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;
