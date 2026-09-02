// Module ID: 15925
// Function ID: 15926
// Name: CategoryChannel
// Dependencies: [2, 15926, 15933, 15951]

// Module 15925 (CategoryChannel)
import set from "set" /* 2 */;
import renderCategoryItem from "renderCategoryItem" /* 15926 */;
import ThreadChannelDefault from "ThreadChannel" /* 15933 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 15951 */;

const result = set.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = renderCategoryItem.CategoryChannel;
export const SuggestedCategory = renderCategoryItem.SuggestedCategory;
export const RecentlyActiveCategory = renderCategoryItem.RecentlyActiveCategory;
export const renderCategoryItem = renderCategoryItem.renderCategoryItem;
export const useCategoryStyles = renderCategoryItem.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;
