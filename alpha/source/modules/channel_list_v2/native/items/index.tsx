// Module ID: 18440
// Function ID: 18441
// Name: CategoryChannel
// Dependencies: [2, 18441, 18448, 18464]

// Module 18440 (CategoryChannel)
import RedesignCategory from "RedesignCategory" /* 18441 */;
import ThreadChannelDefault from "ThreadChannel" /* 18448 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 18464 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = RedesignCategory.CategoryChannel;
export const SuggestedCategory = RedesignCategory.SuggestedCategory;
export const RecentlyActiveCategory = RedesignCategory.RecentlyActiveCategory;
export const renderCategoryItem = RedesignCategory.renderCategoryItem;
export const useCategoryStyles = RedesignCategory.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;
