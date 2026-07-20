// Module ID: 9555
// Function ID: 74460
// Name: PADDING_HORIZONTAL
// Dependencies: []

// Module 9555 (PADDING_HORIZONTAL)
let MIN_MARGIN;
let PADDING_HORIZONTAL;
const _module = require(dependencyMap[0]);
const PADDING_VERTICAL = _module.PADDING_VERTICAL;
({ PADDING_HORIZONTAL, MIN_MARGIN } = _module);
const result = 2 * PADDING_VERTICAL;
const items = [require(dependencyMap[1]).StickerFormat.GIF, require(dependencyMap[1]).StickerFormat.PNG, require(dependencyMap[1]).StickerFormat.APNG];
const _module1 = require(dependencyMap[2]);
const result1 = _module1.fileFinishedImporting("modules/stickers/native/StickerPickerConstants.tsx");

export { PADDING_HORIZONTAL };
export { PADDING_VERTICAL };
export { MIN_MARGIN };
export const STICKER_SIZE = 64;
export const LABEL_HEIGHT = 16;
export const BUTTON_HEIGHT = 32;
export const ROW_HEIGHT = 64 + result;
export const STICKER_NUDGE_RESULTS_CAP = 4;
export const STICKER_PICKER_PADDING = 100;
export const STICKER_SCROLL_LOAD_DELAY_MS = 250;
export const STICKER_SCROLL_LOAD_DELAY_AFTER_HEIGHT_CHANGE_MS = 750;
export const STICKER_FORMATS = items;
