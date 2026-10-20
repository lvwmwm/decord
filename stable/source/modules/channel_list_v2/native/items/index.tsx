// Module ID: 16547
// Function ID: 16548
// Name: CategoryChannel
// Dependencies: [2, 16548, 16555, 16573]

// Module 16547 (CategoryChannel)
import RedesignCategory from "RedesignCategory" /* 16548 */;
import ThreadChannelDefault from "ThreadChannel" /* 16555 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 16573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = RedesignCategory.CategoryChannel;
export const SuggestedCategory = RedesignCategory.SuggestedCategory;
export const RecentlyActiveCategory = RedesignCategory.RecentlyActiveCategory;
export const renderCategoryItem = RedesignCategory.renderCategoryItem;
export const useCategoryStyles = RedesignCategory.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;
