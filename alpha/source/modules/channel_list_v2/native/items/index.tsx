// Module ID: 15739
// Function ID: 15740
// Name: CategoryChannel
// Dependencies: [2, 15740, 15747, 15765]

// Module 15739 (CategoryChannel)
import RedesignCategory from "RedesignCategory" /* 15740 */;
import ThreadChannelDefault from "ThreadChannel" /* 15747 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 15765 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = RedesignCategory.CategoryChannel;
export const SuggestedCategory = RedesignCategory.SuggestedCategory;
export const RecentlyActiveCategory = RedesignCategory.RecentlyActiveCategory;
export const renderCategoryItem = RedesignCategory.renderCategoryItem;
export const useCategoryStyles = RedesignCategory.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;
