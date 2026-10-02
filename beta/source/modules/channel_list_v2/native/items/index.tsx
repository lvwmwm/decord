// Module ID: 15736
// Function ID: 15737
// Name: CategoryChannel
// Dependencies: [2, 15737, 15744, 15762]

// Module 15736 (CategoryChannel)
import RedesignCategory from "RedesignCategory" /* 15737 */;
import ThreadChannelDefault from "ThreadChannel" /* 15744 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 15762 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = RedesignCategory.CategoryChannel;
export const SuggestedCategory = RedesignCategory.SuggestedCategory;
export const RecentlyActiveCategory = RedesignCategory.RecentlyActiveCategory;
export const renderCategoryItem = RedesignCategory.renderCategoryItem;
export const useCategoryStyles = RedesignCategory.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;
