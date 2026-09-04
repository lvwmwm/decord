// Module ID: 16027
// Function ID: 16028
// Name: CategoryChannel
// Dependencies: [2, 16028, 16035, 16053]

// Module 16027 (CategoryChannel)
import set from "set" /* 2 */;
import renderCategoryItem from "renderCategoryItem" /* 16028 */;
import ThreadChannelDefault from "ThreadChannel" /* 16035 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 16053 */;

const result = set.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = renderCategoryItem.CategoryChannel;
export const SuggestedCategory = renderCategoryItem.SuggestedCategory;
export const RecentlyActiveCategory = renderCategoryItem.RecentlyActiveCategory;
export const renderCategoryItem = renderCategoryItem.renderCategoryItem;
export const useCategoryStyles = renderCategoryItem.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;
