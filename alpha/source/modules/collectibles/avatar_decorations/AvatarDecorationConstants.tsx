// Module ID: 1414
// Function ID: 1415
// Name: AvatarDecorationConstants
// Dependencies: [1415, 2]

// Module 1414 (AvatarDecorationConstants)
import AvatarConstants from "AvatarConstants" /* 1415 */;
import size from "module_2" /* 2 */;

const AvatarSizes = AvatarConstants.AvatarSizes;
const result = size.fileFinishedImporting("modules/collectibles/avatar_decorations/AvatarDecorationConstants.tsx");

export const DECORATION_TO_AVATAR_RATIO = 1.2;
export const AvatarDecorationBorderSizes = { [AvatarSizes.SIZE_56]: 4, [AvatarSizes.SIZE_80]: 6, [AvatarSizes.SIZE_120]: 8 };
export const AVATAR_DECORATION_SIZE = 70;
