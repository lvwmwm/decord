// Module ID: 10199
// Function ID: 78724
// Name: items
// Dependencies: [1334, 2]

// Module 10199 (items)
const items = [require("DismissibleContent").DismissibleContent.FAVORITES_SERVER_ONBOARDING_INTRO, require("DismissibleContent").DismissibleContent.FAVORITES_SERVER_ONBOARDING_MENU_ITEM, require("DismissibleContent").DismissibleContent.FAVORITES_GUILD_NEW_BADGE];
const result = require("set").fileFinishedImporting("modules/favorites/FavoritesDismissibleContent.tsx");

export const FAVORITES_GUILD_DISMISSIBLE_CONTENT = items;
