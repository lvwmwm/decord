// Module ID: 14703
// Function ID: 110898
// Name: DEFAULT_FOLDER_COLOR
// Dependencies: []

// Module 14703 (DEFAULT_FOLDER_COLOR)
const _module = require(dependencyMap[0]);
const _module1 = require(dependencyMap[1]);
const _module2 = require(dependencyMap[2]);
const result = _module2.fileFinishedImporting("modules/guilds_bar/GuildsBarConstants.tsx");

export const DEFAULT_FOLDER_COLOR = _module.hex2int(_module1.unsafe_getResolvedRawColor("BRAND_500", { saturation: 1 }));
export const GuildPeekCardTypes = { WHO: 0, [0]: "WHO", WHAT: 1, [1]: "WHAT" };
export const CardCategory = { HANGOUT: "hangout", EMBEDDED_ACTIVITY: "embedded-activity", EVENT: "event", GAMING: "gaming" };
