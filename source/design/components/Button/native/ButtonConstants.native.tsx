// Module ID: 4543
// Function ID: 39832
// Name: getButtonPadding
// Dependencies: []
// Exports: getButtonDefaultTextVariant, getButtonPadding

// Module 4543 (getButtonPadding)
import buttonPadding from "module_32";
import buttonPadding1 from "module_40";
import buttonPadding2 from "module_48";

function getButtonPadding(FAB_BUTTON_SIZE, FAB_BUTTON_ICON_SIZE) {
  return (FAB_BUTTON_SIZE - require(dependencyMap[0]).getIconSize(FAB_BUTTON_ICON_SIZE) - 2) / 2;
}
const SMALL = require(dependencyMap[0]).IconSizes.SMALL;
const SMALL_20 = require(dependencyMap[0]).IconSizes.SMALL_20;
const MEDIUM = require(dependencyMap[0]).IconSizes.MEDIUM;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("design/components/Button/native/ButtonConstants.native.tsx");

export const MINIMUM_HIT_AREA = 44;
export const SMALL_BUTTON_HEIGHT = 32;
export const MEDIUM_BUTTON_HEIGHT = 40;
export const LARGE_BUTTON_HEIGHT = 48;
export const FAB_BUTTON_SIZE = 56;
export const BUTTON_BORDER_WIDTH = 1;
export const DEFAULT_BUTTON_SIZE = "md";
export const SMALL_BUTTON_ICON_SIZE = SMALL;
export const MEDIUM_BUTTON_ICON_SIZE = SMALL_20;
export const LARGE_BUTTON_ICON_SIZE = MEDIUM;
export const FAB_BUTTON_ICON_SIZE = require(dependencyMap[0]).IconSizes.MEDIUM;
export const SMALL_BUTTON_HORIZONTAL_PADDING = 12;
export const MEDIUM_BUTTON_HORIZONTAL_PADDING = 20;
export const LARGE_BUTTON_HORIZONTAL_PADDING = 24;
export const SMALL_BUTTON_PADDING = buttonPadding;
export const MEDIUM_BUTTON_PADDING = buttonPadding1;
export const LARGE_BUTTON_PADDING = buttonPadding2;
export const BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER = 3;
export function getButtonDefaultTextVariant(size) {
  let str = "text-sm/semibold";
  if ("lg" === size) {
    str = "text-md/semibold";
  }
  return str;
}
export { getButtonPadding };
