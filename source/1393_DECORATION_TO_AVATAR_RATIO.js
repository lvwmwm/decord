// Module ID: 1393
// Function ID: 16633
// Name: DECORATION_TO_AVATAR_RATIO
// Dependencies: []

// Module 1393 (DECORATION_TO_AVATAR_RATIO)
const AvatarSizes = require(dependencyMap[0]).AvatarSizes;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/collectibles/avatar_decorations/AvatarDecorationConstants.tsx");

export const DECORATION_TO_AVATAR_RATIO = 1.2;
export const AvatarDecorationBorderSizes = { [AvatarSizes.SIZE_56]: 4, [AvatarSizes.SIZE_80]: 6, [AvatarSizes.SIZE_120]: 8 };
export const AVATAR_DECORATION_SIZE = 70;
