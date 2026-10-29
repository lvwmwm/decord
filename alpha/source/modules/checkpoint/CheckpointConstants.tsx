// Module ID: 6054
// Function ID: 6055
// Name: CheckpointConstants
// Dependencies: [3090, 6055, 2]

// Module 6054 (CheckpointConstants)
import _modDef3090 from "module_3090" /* 3090 */;
import CheckpointTraitRarity from "CheckpointTraitRarity" /* 6055 */;
import size from "module_2" /* 2 */;

const items = [{ list: "gamesByPlayers", label: _modDef3090.b4s18j }, , , , ];
({ list: "gamesByPlayers", label: _modDef3090.b4s18j });
items[1] = { list: "newGamesByPlayers", label: _modDef3090.DcxpNj };
({ list: "newGamesByPlayers", label: _modDef3090.DcxpNj });
items[2] = { list: "indieGamesByPlayers", label: _modDef3090.OAUTki };
({ list: "indieGamesByPlayers", label: _modDef3090.OAUTki });
items[3] = { list: "gamesByCoplayUsers", label: _modDef3090.ioC4Qg };
({ list: "gamesByCoplayUsers", label: _modDef3090.ioC4Qg });
items[4] = { list: "gamesByStreamWatchMinutes", label: _modDef3090.M1L00s };
({ list: "gamesByStreamWatchMinutes", label: _modDef3090.M1L00s });
const obj6 = { [CheckpointTraitRarity.CheckpointTraitRarity.DEFAULT]: "#FFE047", [CheckpointTraitRarity.CheckpointTraitRarity.COMMON]: "#35ED7E", [CheckpointTraitRarity.CheckpointTraitRarity.RARE]: "#EF3054", [CheckpointTraitRarity.CheckpointTraitRarity.EPIC]: "#7D53DE", [CheckpointTraitRarity.CheckpointTraitRarity.ULTRA]: "#FC7A1E" };
obj6[CheckpointTraitRarity.CheckpointTraitRarity.NITRO] = "url(#" + "checkpointRarityBadgeNitroGradient" + ")";
const obj7 = {};
obj7[CheckpointTraitRarity.CheckpointTraitRarity.DEFAULT] = _modDef3090.bP4GV1;
obj7[CheckpointTraitRarity.CheckpointTraitRarity.COMMON] = _modDef3090.QwkKWr;
obj7[CheckpointTraitRarity.CheckpointTraitRarity.RARE] = _modDef3090.KLmNgL;
obj7[CheckpointTraitRarity.CheckpointTraitRarity.EPIC] = _modDef3090.hAmdLZ;
obj7[CheckpointTraitRarity.CheckpointTraitRarity.ULTRA] = _modDef3090.Tv4xyf;
obj7[CheckpointTraitRarity.CheckpointTraitRarity.NITRO] = _modDef3090["0ModIv"];
const items1 = [CheckpointTraitRarity.CheckpointTraitRarity.ULTRA, CheckpointTraitRarity.CheckpointTraitRarity.EPIC, CheckpointTraitRarity.CheckpointTraitRarity.RARE, CheckpointTraitRarity.CheckpointTraitRarity.COMMON, CheckpointTraitRarity.CheckpointTraitRarity.DEFAULT, CheckpointTraitRarity.CheckpointTraitRarity.NITRO];
const items2 = [CheckpointTraitRarity.CheckpointTraitRarity.DEFAULT, CheckpointTraitRarity.CheckpointTraitRarity.COMMON, CheckpointTraitRarity.CheckpointTraitRarity.RARE, CheckpointTraitRarity.CheckpointTraitRarity.EPIC, CheckpointTraitRarity.CheckpointTraitRarity.ULTRA, CheckpointTraitRarity.CheckpointTraitRarity.NITRO];
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointConstants.tsx");

export const CheckpointVersions = { V2025: 0, [0]: "V2025", V2026: 1, [1]: "V2026" };
export const CHECKPOINT_PRIMARY = "#34E2F1";
export const CHECKPOINT_WHITE = "#DFDFDF";
export const CHECKPOINT_YELLOW = "#FFE047";
export const CHECKPOINT_GREEN = "#35ED7E";
export const CHECKPOINT_PINK = "#EF3054";
export const CHECKPOINT_PURPLE = "#7D53DE";
export const CHECKPOINT_ORANGE = "#FC7A1E";
export const CHECKPOINT_DARK_CYAN = "#1482A7";
export const CHECKPOINT_BUTTON_SHADOW = "#3FC7D2";
export const CHECKPOINT_GUILD_CARD_BACKGROUND = "#04363ABF";
export const CHECKPOINT_WEB_BACKGROUND_GRADIENT_START = "#3BD4F2";
export const CHECKPOINT_NITRO_GRADIENT_COLORS = ["#DFDFDF", "#5E5E5E"];
export const CHECKPOINT_NITRO_BADGE_GRADIENT_ID = "checkpointRarityBadgeNitroGradient";
export const CHECKPOINT_BACKGROUND_GRADIENT = ["#12606D", "#0B1624"];
export const CHECKPOINT_GLOBAL_GAME_CATEGORIES = items;
export const CHECKPOINT_NAV_HEIGHT = 64;
export const CHECKPOINT_CONTROL_SIZE = 48;
export const CHECKPOINT_LOGO_SIZE = 40;
export const TRAIT_OPTION_WIDTH = 72;
export const TRAIT_OPTION_HEIGHT = 80;
export const NATIVE_CHARACTER_LAYER_SIZE = 252;
export const CHECKPOINT_2026_POWER_BAR_UNITS = 6;
export const CHECKPOINT_2026_POWER_BAR_MIN_FILLED_UNITS = 1;
export const CHECKPOINT_2026_POWER_BAR_MAX_FILLED_UNITS = 5;
export const CHECKPOINT_RARITY_TO_COLOR = obj6;
export const CHECKPOINT_RARITY_TO_LABEL_MESSAGE = obj7;
export const CHECKPOINT_RARITY_ORDER_MOBILE = items1;
export const CHECKPOINT_RARITY_ORDER_WEB = items2;
