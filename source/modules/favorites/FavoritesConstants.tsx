// Module ID: 1386
// Function ID: 16544
// Name: date
// Dependencies: [1387, 2]

// Module 1386 (date)
import fromGuildPropertiesWithAdditionalFields from "fromGuildPropertiesWithAdditionalFields";

const obj = { id: "373", name: "Favorites", description: "The place for all your favorite channels!", joinedAt: new Date(), maxMembers: 500000 };
const result = fromGuildPropertiesWithAdditionalFields.constructFromPartialGuildRecord(obj);
const date = new Date();
const result1 = require("set").fileFinishedImporting("modules/favorites/FavoritesConstants.tsx");

export const FAVORITES_RAW_GUILD_ID = "373";
export const FAVORITES_GUILD_RECORD = result;
export const FAVORITES_UNCATEGORIZED_PARENT_ID = "0";
export const MAX_FAVORITE_CHANNELS = 200;
