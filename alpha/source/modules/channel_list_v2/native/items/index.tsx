// Module ID: 18150
// Function ID: 18151
// Name: CategoryChannel
// Dependencies: [2, 18151, 18158, 18176]

// Module 18150 (CategoryChannel)
import RedesignCategory from "RedesignCategory" /* 18151 */;
import ThreadChannelDefault from "ThreadChannel" /* 18158 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 18176 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = RedesignCategory.CategoryChannel;
export const SuggestedCategory = RedesignCategory.SuggestedCategory;
export const RecentlyActiveCategory = RedesignCategory.RecentlyActiveCategory;
export const renderCategoryItem = RedesignCategory.renderCategoryItem;
export const useCategoryStyles = RedesignCategory.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;
