// Module ID: 8331
// Function ID: 8332
// Name: ProfileFrameConstants
// Dependencies: [8317, 2]

// Module 8331 (ProfileFrameConstants)
import ProfileFrameLayerOrder from "ProfileFrameLayerOrder" /* 8317 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/ProfileFrameConstants.tsx");

export const PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO = 0.625;
export const PROFILE_FRAME_ASPECT_RATIO = 0.66;
export const PROFILE_FRAME_Z_INDEX = { [ProfileFrameLayerOrder.ProfileFrameLayerOrder.FRONT]: 3, [ProfileFrameLayerOrder.ProfileFrameLayerOrder.BACK]: 2 };
