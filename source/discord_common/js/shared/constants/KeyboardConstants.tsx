// Module ID: 6731
// Function ID: 52447
// Name: items
// Dependencies: []

// Module 6731 (items)
const items = [require(dependencyMap[0]).Key.F6, "f6"];
const items1 = [items, , , , , , , ];
const items2 = [require(dependencyMap[0]).Key.Tab, "tab"];
items1[1] = items2;
const items3 = [require(dependencyMap[0]).Key.ArrowDown, "down"];
items1[2] = items3;
const items4 = [require(dependencyMap[0]).Key.ArrowUp, "up"];
items1[3] = items4;
const items5 = [require(dependencyMap[0]).Key.ArrowLeft, "left"];
items1[4] = items5;
const items6 = [require(dependencyMap[0]).Key.ArrowRight, "right"];
items1[5] = items6;
const items7 = [require(dependencyMap[0]).Key.Home, "home"];
items1[6] = items7;
const items8 = [require(dependencyMap[0]).Key.End, "end"];
items1[7] = items8;
const map = new Map(items1);
const frozen = Object.freeze({});
const frozen1 = Object.freeze({});
const merged = Object.assign(Object.freeze({}));
const frozen2 = Object.freeze({});
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/shared/constants/KeyboardConstants.tsx");

export const KeyboardEventKey = require(dependencyMap[0]).Key;
export const FOCUS_SECTION_JUMP_KEY = require(dependencyMap[0]).Key.F6;
export const NavigationKeyShortcutMap = map;
export const NavigationShortcuts = new Set([]);
export const KeyboardDeviceTypes = { KEYBOARD_KEY: 0, [0]: "KEYBOARD_KEY", MOUSE_BUTTON: 1, [1]: "MOUSE_BUTTON", KEYBOARD_MODIFIER_KEY: 2, [2]: "KEYBOARD_MODIFIER_KEY", GAMEPAD_BUTTON: 3, [3]: "GAMEPAD_BUTTON" };
export const LinuxKeyToCode = frozen;
export const MacosKeyToCode = frozen1;
export const WindowsKeyToCode = frozen2;
export const KeyboardEnvs = { WINDOWS: 1, [1]: "WINDOWS", MACOS: 2, [2]: "MACOS", LINUX: 3, [3]: "LINUX", BROWSER: 4, [4]: "BROWSER" };
export const KeyboardKeysUpdated = { ENTER: "Enter", TAB: "Tab", SPACE: " ", ESCAPE: "Escape", SHIFT: "Shift", ARROW_UP: "ArrowUp", ARROW_DOWN: "ArrowDown", ARROW_LEFT: "ArrowLeft", ARROW_RIGHT: "ArrowRight", HOME: "Home", END: "End", BACKSPACE: "Backspace", DELETE: "Delete", COMMA: "," };
export const MouseKeyCodes = { Left: 0, [0]: "Left", Right: 1, [1]: "Right", Center: 2, [2]: "Center", Back: 3, [3]: "Back", Forward: 4, [4]: "Forward" };
