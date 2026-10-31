// Module ID: 19565
// Function ID: 19566
// Name: InterestGamePickerConstants
// Dependencies: [575, 2]

// Module 19565 (InterestGamePickerConstants)
import nativeDefault from "native" /* 575 */;
import size from "module_2" /* 2 */;

const PX_12 = nativeDefault.space.PX_12;
const PX_16 = nativeDefault.space.PX_16;
const PX_4 = nativeDefault.space.PX_4;
const rect = { top: nativeDefault.space.PX_8, bottom: nativeDefault.space.PX_8, left: PX_4 / 2, right: PX_4 / 2 };
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGamePickerConstants.tsx");

export const GRID_COLUMNS = 4;
export const GRID_GAP = PX_12;
export const SCREEN_HORIZONTAL_PADDING = PX_16;
export const TILE_ASPECT_RATIO = 0.75;
export const THUMBNAIL_WIDTH = 37;
export const THUMBNAIL_ASPECT_RATIO = 0.7708333333333334;
export const FOOTER_THUMBNAIL_GAP = PX_4;
export const THUMBNAIL_HIT_SLOP = rect;
export const FOOTER_BOTTOM_PADDING = 28;
export const FOOTER_BORDER_WIDTH = 1;
export const SELECTED_BORDER_WIDTH = 2;
export const MAX_SELECTIONS = 5;
export const MIN_SELECTIONS = 1;
