// Module ID: 8338
// Function ID: 8339
// Name: ProfileFrameConstants
// Dependencies: [8324, 2]

// Module 8338 (ProfileFrameConstants)
import ProfileFrameLayerOrder from "ProfileFrameLayerOrder" /* 8324 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/ProfileFrameConstants.tsx");

export const PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO = 0.625;
export const PROFILE_FRAME_ASPECT_RATIO = 0.66;
export const PROFILE_FRAME_Z_INDEX = { [ProfileFrameLayerOrder.ProfileFrameLayerOrder.FRONT]: 3, [ProfileFrameLayerOrder.ProfileFrameLayerOrder.BACK]: 2 };
