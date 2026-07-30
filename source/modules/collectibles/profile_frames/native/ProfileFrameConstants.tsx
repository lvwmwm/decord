// Module ID: 8095
// Function ID: 8096
// Name: PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO
// Dependencies: [8085, 2]

// Module 8095 (PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO)
const result = require("set").fileFinishedImporting("modules/collectibles/profile_frames/native/ProfileFrameConstants.tsx");

export const PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO = 0.625;
export const PROFILE_FRAME_ASPECT_RATIO = 0.66;
export const PROFILE_FRAME_Z_INDEX = { [require(8085).ProfileFrameLayerOrder.FRONT]: 3, [require(8085).ProfileFrameLayerOrder.BACK]: 2 };
