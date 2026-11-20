// Module ID: 18829
// Function ID: 18830
// Name: CategoryChannel
// Dependencies: [2, 18830, 18837, 18853]

// Module 18829 (CategoryChannel)
import RedesignCategory from "RedesignCategory" /* 18830 */;
import ThreadChannelDefault from "ThreadChannel" /* 18837 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 18853 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = RedesignCategory.CategoryChannel;
export const SuggestedCategory = RedesignCategory.SuggestedCategory;
export const RecentlyActiveCategory = RedesignCategory.RecentlyActiveCategory;
export const renderCategoryItem = RedesignCategory.renderCategoryItem;
export const useCategoryStyles = RedesignCategory.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;
