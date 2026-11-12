// Module ID: 18535
// Function ID: 18536
// Name: CategoryChannel
// Dependencies: [2, 18536, 18543, 18559]

// Module 18535 (CategoryChannel)
import RedesignCategory from "RedesignCategory" /* 18536 */;
import ThreadChannelDefault from "ThreadChannel" /* 18543 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 18559 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = RedesignCategory.CategoryChannel;
export const SuggestedCategory = RedesignCategory.SuggestedCategory;
export const RecentlyActiveCategory = RedesignCategory.RecentlyActiveCategory;
export const renderCategoryItem = RedesignCategory.renderCategoryItem;
export const useCategoryStyles = RedesignCategory.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;
