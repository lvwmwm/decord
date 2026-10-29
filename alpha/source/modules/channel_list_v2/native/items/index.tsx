// Module ID: 18046
// Function ID: 18047
// Name: CategoryChannel
// Dependencies: [2, 18047, 18054, 18072]

// Module 18046 (CategoryChannel)
import RedesignCategory from "RedesignCategory" /* 18047 */;
import ThreadChannelDefault from "ThreadChannel" /* 18054 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 18072 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = RedesignCategory.CategoryChannel;
export const SuggestedCategory = RedesignCategory.SuggestedCategory;
export const RecentlyActiveCategory = RedesignCategory.RecentlyActiveCategory;
export const renderCategoryItem = RedesignCategory.renderCategoryItem;
export const useCategoryStyles = RedesignCategory.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;
