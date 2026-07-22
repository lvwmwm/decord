// Module ID: 13883
// Function ID: 105025
// Name: CONNECTION_BANNER_HEIGHT
// Dependencies: []

// Module 13883 (CONNECTION_BANNER_HEIGHT)
const PixelRatio = require(dependencyMap[0]).PixelRatio;
const PX_12 = importDefault(dependencyMap[1]).space.PX_12;
const result = 2 * PX_12;
const obj = { top: importDefault(dependencyMap[1]).space.PX_16, bottom: importDefault(dependencyMap[1]).space.PX_16, left: importDefault(dependencyMap[1]).space.PX_16, right: importDefault(dependencyMap[1]).space.PX_16 };
const REFRESH_MEDIUM_32 = require(dependencyMap[2]).AvatarSizes.REFRESH_MEDIUM_32;
const NORMAL = require(dependencyMap[2]).AvatarSizes.NORMAL;
const YOUBAR_60 = require(dependencyMap[2]).AvatarSizes.YOUBAR_60;
const sum = require(dependencyMap[2]).AVATAR_SIZE_MAP[YOUBAR_60] + 12;
const diff = sum - (require(dependencyMap[2]).AVATAR_SIZE_MAP[REFRESH_MEDIUM_32] + PX_12);
const sum1 = require(dependencyMap[2]).AVATAR_SIZE_MAP[NORMAL] + 8;
const diff1 = sum1 + 8 - (require(dependencyMap[2]).AVATAR_SIZE_MAP[REFRESH_MEDIUM_32] + PX_12);
const _module = require(dependencyMap[3]);
const result1 = _module.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarConstants.tsx");

export const CONNECTION_BANNER_HEIGHT = 48;
export const YOU_BAR_SPRING_CONFIG = {};
export const YOU_BAR_PADDING = PX_12;
export const YOU_BAR_HEIGHT = 32 + result;
export const YOU_BAR_MARGIN = importDefault(dependencyMap[1]).space.PX_16;
export const YOU_BAR_MARGIN_IOS = importDefault(dependencyMap[1]).space.PX_24;
export const YOU_BAR_LEFT_INSET = importDefault(dependencyMap[1]).space.PX_16;
export const YOU_BAR_FLOATING_OFFSET_MINIMUM = importDefault(dependencyMap[1]).space.PX_16;
export const YOU_BAR_GRADIENT_EXTRA_HEIGHT = importDefault(dependencyMap[1]).space.PX_16;
export const YOU_BAR_BUTTON_HIT_SLOP = obj;
export const YOU_BAR_STATUS_INSET = -3;
export const YOU_BAR_LARGE_STATUS_SIZE = require("module_14");
export const YOU_BAR_STATUS_OFFSET = -2;
export const YOU_BAR_AVATAR_PLACEHOLDER_SIZE = REFRESH_MEDIUM_32;
export const YOU_BAR_AVATAR_SIZE = NORMAL;
export const YOU_BAR_AVATAR_LARGE_SIZE = YOUBAR_60;
export const YOU_BAR_AVATAR_LARGE_PX = require(dependencyMap[2]).AVATAR_SIZE_MAP[YOUBAR_60];
export const YOU_BAR_LARGE_AVATAR_NAME_MARGIN = diff;
export const YOU_BAR_SMALL_AVATAR_NAME_MARGIN = diff1;
export const YOU_BAR_BUTTON_ICON_SIZE = 18;
