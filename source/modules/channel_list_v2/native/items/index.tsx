// Module ID: 15462
// Function ID: 15463
// Name: CategoryChannel
// Dependencies: [2, 15463, 15470, 15488]

// Module 15462 (CategoryChannel)
import set from "set" /* 2 */;
import renderCategoryItem from "renderCategoryItem" /* 15463 */;
import ThreadChannelDefault from "ThreadChannel" /* 15470 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 15488 */;

const result = set.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = renderCategoryItem.CategoryChannel;
export const SuggestedCategory = renderCategoryItem.SuggestedCategory;
export const RecentlyActiveCategory = renderCategoryItem.RecentlyActiveCategory;
export const renderCategoryItem = renderCategoryItem.renderCategoryItem;
export const useCategoryStyles = renderCategoryItem.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;
