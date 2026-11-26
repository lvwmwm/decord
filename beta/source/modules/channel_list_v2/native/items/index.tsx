// Module ID: 17639
// Function ID: 17640
// Name: CategoryChannel
// Dependencies: [2, 17640, 17647, 17663]

// Module 17639 (CategoryChannel)
import RedesignCategory from "RedesignCategory" /* 17640 */;
import ThreadChannelDefault from "ThreadChannel" /* 17647 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 17663 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = RedesignCategory.CategoryChannel;
export const SuggestedCategory = RedesignCategory.SuggestedCategory;
export const RecentlyActiveCategory = RedesignCategory.RecentlyActiveCategory;
export const renderCategoryItem = RedesignCategory.renderCategoryItem;
export const useCategoryStyles = RedesignCategory.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;
