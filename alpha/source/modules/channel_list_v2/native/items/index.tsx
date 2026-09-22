// Module ID: 16455
// Function ID: 16456
// Name: CategoryChannel
// Dependencies: [2, 16456, 16463, 16481]

// Module 16455 (CategoryChannel)
import RedesignCategory from "RedesignCategory" /* 16456 */;
import ThreadChannelDefault from "ThreadChannel" /* 16463 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 16481 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = RedesignCategory.CategoryChannel;
export const SuggestedCategory = RedesignCategory.SuggestedCategory;
export const RecentlyActiveCategory = RedesignCategory.RecentlyActiveCategory;
export const renderCategoryItem = RedesignCategory.renderCategoryItem;
export const useCategoryStyles = RedesignCategory.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;
