// Module ID: 18158
// Function ID: 18159
// Name: CategoryChannel
// Dependencies: [2, 18159, 18166, 18184]

// Module 18158 (CategoryChannel)
import RedesignCategory from "RedesignCategory" /* 18159 */;
import ThreadChannelDefault from "ThreadChannel" /* 18166 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 18184 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = RedesignCategory.CategoryChannel;
export const SuggestedCategory = RedesignCategory.SuggestedCategory;
export const RecentlyActiveCategory = RedesignCategory.RecentlyActiveCategory;
export const renderCategoryItem = RedesignCategory.renderCategoryItem;
export const useCategoryStyles = RedesignCategory.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;
