// Module ID: 8343
// Function ID: 8344
// Name: ProfileFrameConstants
// Dependencies: [8329, 2]

// Module 8343 (ProfileFrameConstants)
import ProfileFrameLayerOrder from "ProfileFrameLayerOrder" /* 8329 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/ProfileFrameConstants.tsx");

export const PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO = 0.625;
export const PROFILE_FRAME_ASPECT_RATIO = 0.66;
export const PROFILE_FRAME_Z_INDEX = { [ProfileFrameLayerOrder.ProfileFrameLayerOrder.FRONT]: 3, [ProfileFrameLayerOrder.ProfileFrameLayerOrder.BACK]: 2 };
