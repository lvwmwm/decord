// Module ID: 8752
// Function ID: 8753
// Name: ProfileFrameConstants
// Dependencies: [8738, 2]

// Module 8752 (ProfileFrameConstants)
import ProfileFrameLayerOrder from "ProfileFrameLayerOrder" /* 8738 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/ProfileFrameConstants.tsx");

export const PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO = 0.625;
export const PROFILE_FRAME_ASPECT_RATIO = 0.66;
export const PROFILE_FRAME_Z_INDEX = { [ProfileFrameLayerOrder.ProfileFrameLayerOrder.FRONT]: 3, [ProfileFrameLayerOrder.ProfileFrameLayerOrder.BACK]: 2 };
