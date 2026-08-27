// Module ID: 15606
// Function ID: 15607
// Name: CategoryChannel
// Dependencies: [2, 15607, 15614, 15632]

// Module 15606 (CategoryChannel)
import set from "set" /* 2 */;
import renderCategoryItem from "renderCategoryItem" /* 15607 */;
import ThreadChannelDefault from "ThreadChannel" /* 15614 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 15632 */;

const result = set.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = renderCategoryItem.CategoryChannel;
export const SuggestedCategory = renderCategoryItem.SuggestedCategory;
export const RecentlyActiveCategory = renderCategoryItem.RecentlyActiveCategory;
export const renderCategoryItem = renderCategoryItem.renderCategoryItem;
export const useCategoryStyles = renderCategoryItem.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;
