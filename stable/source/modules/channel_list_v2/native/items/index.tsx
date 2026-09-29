// Module ID: 16447
// Function ID: 16448
// Name: CategoryChannel
// Dependencies: [2, 16448, 16455, 16473]

// Module 16447 (CategoryChannel)
import RedesignCategory from "RedesignCategory" /* 16448 */;
import ThreadChannelDefault from "ThreadChannel" /* 16455 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 16473 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = RedesignCategory.CategoryChannel;
export const SuggestedCategory = RedesignCategory.SuggestedCategory;
export const RecentlyActiveCategory = RedesignCategory.RecentlyActiveCategory;
export const renderCategoryItem = RedesignCategory.renderCategoryItem;
export const useCategoryStyles = RedesignCategory.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;
