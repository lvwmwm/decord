// Module ID: 15021
// Function ID: 114506
// Name: CategoryChannel
// Dependencies: [2, 15022, 15023, 15038]

// Module 15021 (CategoryChannel)
const result = require("ThreadChannel").fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = require("renderCategoryItem").CategoryChannel;
export const SuggestedCategory = require("renderCategoryItem").SuggestedCategory;
export const RecentlyActiveCategory = require("renderCategoryItem").RecentlyActiveCategory;
export const renderCategoryItem = require("renderCategoryItem").renderCategoryItem;
export const useCategoryStyles = require("renderCategoryItem").useCategoryStyles;
export const ThreadChannel = require("ThreadChannel");
export const RedesignVoiceUserSummary = require("RedesignVoiceUserSummary");
