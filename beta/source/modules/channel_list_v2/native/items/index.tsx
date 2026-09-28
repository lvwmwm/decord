// Module ID: 15737
// Function ID: 15738
// Name: CategoryChannel
// Dependencies: [2, 15738, 15745, 15763]

// Module 15737 (CategoryChannel)
import RedesignCategory from "RedesignCategory" /* 15738 */;
import ThreadChannelDefault from "ThreadChannel" /* 15745 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 15763 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = RedesignCategory.CategoryChannel;
export const SuggestedCategory = RedesignCategory.SuggestedCategory;
export const RecentlyActiveCategory = RedesignCategory.RecentlyActiveCategory;
export const renderCategoryItem = RedesignCategory.renderCategoryItem;
export const useCategoryStyles = RedesignCategory.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;
