// Module ID: 17235
// Function ID: 17236
// Name: CategoryChannel
// Dependencies: [2, 17236, 17243, 17261]

// Module 17235 (CategoryChannel)
import RedesignCategory from "RedesignCategory" /* 17236 */;
import ThreadChannelDefault from "ThreadChannel" /* 17243 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 17261 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = RedesignCategory.CategoryChannel;
export const SuggestedCategory = RedesignCategory.SuggestedCategory;
export const RecentlyActiveCategory = RedesignCategory.RecentlyActiveCategory;
export const renderCategoryItem = RedesignCategory.renderCategoryItem;
export const useCategoryStyles = RedesignCategory.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;
