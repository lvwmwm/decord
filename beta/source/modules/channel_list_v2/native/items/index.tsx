// Module ID: 17635
// Function ID: 17636
// Name: CategoryChannel
// Dependencies: [2, 17636, 17643, 17659]

// Module 17635 (CategoryChannel)
import RedesignCategory from "RedesignCategory" /* 17636 */;
import ThreadChannelDefault from "ThreadChannel" /* 17643 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 17659 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = RedesignCategory.CategoryChannel;
export const SuggestedCategory = RedesignCategory.SuggestedCategory;
export const RecentlyActiveCategory = RedesignCategory.RecentlyActiveCategory;
export const renderCategoryItem = RedesignCategory.renderCategoryItem;
export const useCategoryStyles = RedesignCategory.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;
