// Module ID: 15624
// Function ID: 15625
// Name: CategoryChannel
// Dependencies: [2, 15625, 15632, 15650]

// Module 15624 (CategoryChannel)
import set from "set" /* 2 */;
import renderCategoryItem from "renderCategoryItem" /* 15625 */;
import ThreadChannelDefault from "ThreadChannel" /* 15632 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 15650 */;

const result = set.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = renderCategoryItem.CategoryChannel;
export const SuggestedCategory = renderCategoryItem.SuggestedCategory;
export const RecentlyActiveCategory = renderCategoryItem.RecentlyActiveCategory;
export const renderCategoryItem = renderCategoryItem.renderCategoryItem;
export const useCategoryStyles = renderCategoryItem.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;
