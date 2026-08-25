// Module ID: 8965
// Function ID: 8966
// Name: PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO
// Dependencies: [8950, 2]

// Module 8965 (PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO)
import set from "set" /* 2 */;
import ProfileFrameLayerOrder from "ProfileFrameLayerOrder" /* 8950 */;

const result = set.fileFinishedImporting("modules/collectibles/profile_frames/native/ProfileFrameConstants.tsx");

export const PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO = 0.625;
export const PROFILE_FRAME_ASPECT_RATIO = 0.66;
export const PROFILE_FRAME_Z_INDEX = { [ProfileFrameLayerOrder.ProfileFrameLayerOrder.FRONT]: 3, [ProfileFrameLayerOrder.ProfileFrameLayerOrder.BACK]: 2 };
