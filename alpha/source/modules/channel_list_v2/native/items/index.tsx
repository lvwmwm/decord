// Module ID: 17665
// Function ID: 17666
// Name: CategoryChannel
// Dependencies: [2, 17666, 17673, 17689]

// Module 17665 (CategoryChannel)
import RedesignCategory from "RedesignCategory" /* 17666 */;
import ThreadChannelDefault from "ThreadChannel" /* 17673 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 17689 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = RedesignCategory.CategoryChannel;
export const SuggestedCategory = RedesignCategory.SuggestedCategory;
export const RecentlyActiveCategory = RedesignCategory.RecentlyActiveCategory;
export const renderCategoryItem = RedesignCategory.renderCategoryItem;
export const useCategoryStyles = RedesignCategory.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;
