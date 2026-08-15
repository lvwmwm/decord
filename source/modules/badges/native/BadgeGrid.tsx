// Module ID: 14043
// Function ID: 14044
// Name: PX_16
// Dependencies: [6951, 712, 2]
// Exports: getBadgeTileSize

// Module 14043 (PX_16)
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";

const PX_16 = require("Themes").space.PX_16;
const result = require("set").fileFinishedImporting("modules/badges/native/BadgeGrid.tsx");

export const BADGE_GRID_COLUMNS = 3;
export const BADGE_GRID_GAP = PX_16;
export const BADGE_TILE_ICON_SIZE = 60;
export const getBadgeTileSize = function getBadgeTileSize(width) {
  const bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  return (bound - 2 * importDefault(712).space.PX_16 - 2 * PX_16) / 3;
};
