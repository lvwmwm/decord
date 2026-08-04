// Module ID: 15133
// Function ID: 15134
// Name: CategoryChannel
// Dependencies: [2, 15134, 15135, 15150]

// Module 15133 (CategoryChannel)
const result = require("ThreadChannel").fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = require("renderCategoryItem").CategoryChannel;
export const SuggestedCategory = require("renderCategoryItem").SuggestedCategory;
export const RecentlyActiveCategory = require("renderCategoryItem").RecentlyActiveCategory;
export const renderCategoryItem = require("renderCategoryItem").renderCategoryItem;
export const useCategoryStyles = require("renderCategoryItem").useCategoryStyles;
export const ThreadChannel = require("ThreadChannel");
export const RedesignVoiceUserSummary = require("RedesignVoiceUserSummary");
