// Module ID: 14818
// Function ID: 113062
// Name: DEFAULT_FOLDER_COLOR
// Dependencies: [665, 688, 2]

// Module 14818 (DEFAULT_FOLDER_COLOR)
import pad2 from "pad2";
import unsafe_getRawColor from "unsafe_getRawColor";

const hex2intResult = pad2.hex2int(unsafe_getRawColor.unsafe_getResolvedRawColor("BRAND_500", { saturation: 1 }));
const result = require("set").fileFinishedImporting("modules/guilds_bar/GuildsBarConstants.tsx");

export const DEFAULT_FOLDER_COLOR = hex2intResult;
export const GuildPeekCardTypes = { WHO: 0, [0]: "WHO", WHAT: 1, [1]: "WHAT" };
export const CardCategory = { HANGOUT: "hangout", EMBEDDED_ACTIVITY: "embedded-activity", EVENT: "event", GAMING: "gaming" };
