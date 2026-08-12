// Module ID: 15304
// Function ID: 15305
// Name: CategoryChannel
// Dependencies: [2, 15305, 15311, 15329]

// Module 15304 (CategoryChannel)
const result = require("ThreadChannel").fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = require("renderCategoryItem").CategoryChannel;
export const SuggestedCategory = require("renderCategoryItem").SuggestedCategory;
export const RecentlyActiveCategory = require("renderCategoryItem").RecentlyActiveCategory;
export const renderCategoryItem = require("renderCategoryItem").renderCategoryItem;
export const useCategoryStyles = require("renderCategoryItem").useCategoryStyles;
export const ThreadChannel = require("ThreadChannel");
export const RedesignVoiceUserSummary = require("RedesignVoiceUserSummary");
