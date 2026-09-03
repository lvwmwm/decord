// Module ID: 8566
// Function ID: 8567
// Name: PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO
// Dependencies: [8556, 2]

// Module 8566 (PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO)
import set from "set" /* 2 */;
import ProfileFrameLayerOrder from "ProfileFrameLayerOrder" /* 8556 */;

const result = set.fileFinishedImporting("modules/collectibles/profile_frames/native/ProfileFrameConstants.tsx");

export const PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO = 0.625;
export const PROFILE_FRAME_ASPECT_RATIO = 0.66;
export const PROFILE_FRAME_Z_INDEX = { [ProfileFrameLayerOrder.ProfileFrameLayerOrder.FRONT]: 3, [ProfileFrameLayerOrder.ProfileFrameLayerOrder.BACK]: 2 };
