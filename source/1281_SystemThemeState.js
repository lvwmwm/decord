// Module ID: 1281
// Function ID: 14489
// Name: SystemThemeState
// Dependencies: []

// Module 1281 (SystemThemeState)
const ThemeTypes = require(dependencyMap[0]).ThemeTypes;
let obj = { DARK: "dark", LIGHT: "light", NO_PREFERENCE: "unknown" };
obj = { [obj.DARK]: ThemeTypes.DARKER, [obj.LIGHT]: ThemeTypes.LIGHT, [obj.NO_PREFERENCE]: ThemeTypes.DARKER };
obj = { [obj.DARK]: ThemeTypes.DARK, [obj.LIGHT]: ThemeTypes.LIGHT, [obj.NO_PREFERENCE]: ThemeTypes.DARK };
const obj1 = { [obj.DARK]: ThemeTypes.DARKER, [obj.LIGHT]: ThemeTypes.LIGHT, [obj.NO_PREFERENCE]: ThemeTypes.DARKER };
const obj2 = { [require(dependencyMap[1]).Theme.UNSET]: ThemeTypes.DARK, [require(dependencyMap[1]).Theme.DARK]: ThemeTypes.DARK, [require(dependencyMap[1]).Theme.DARKER]: ThemeTypes.DARK, [require(dependencyMap[1]).Theme.LIGHT]: ThemeTypes.LIGHT, [require(dependencyMap[1]).Theme.MIDNIGHT]: ThemeTypes.DARK };
const obj3 = { [require(dependencyMap[1]).Theme.UNSET]: ThemeTypes.DARKER, [require(dependencyMap[1]).Theme.DARK]: ThemeTypes.DARK, [require(dependencyMap[1]).Theme.DARKER]: ThemeTypes.DARKER, [require(dependencyMap[1]).Theme.LIGHT]: ThemeTypes.LIGHT, [require(dependencyMap[1]).Theme.MIDNIGHT]: ThemeTypes.MIDNIGHT };
const obj4 = { [require(dependencyMap[1]).Theme.UNSET]: ThemeTypes.DARKER, [require(dependencyMap[1]).Theme.DARK]: ThemeTypes.DARKER, [require(dependencyMap[1]).Theme.DARKER]: ThemeTypes.DARKER, [require(dependencyMap[1]).Theme.LIGHT]: ThemeTypes.LIGHT, [require(dependencyMap[1]).Theme.MIDNIGHT]: ThemeTypes.MIDNIGHT };
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/user_settings/ThemeConstants.tsx");

export const SystemThemeState = { UNSET: 0, [0]: "UNSET", OFF: 1, [1]: "OFF", ON: 2, [2]: "ON" };
export const SystemTheme = obj;
export const ActiveThemeType = { CUSTOM: "custom", CLIENT: "client", SYSTEM: "system", DEFAULT: "default" };
export const THEME_PREFERENCES_MOBILE = obj;
export const THEME_PREFERENCES_WEB = obj;
export const THEME_PREFERENCES_WEB_REFRESH = obj1;
export const PROTO_THEME_MAP_WEB = obj2;
export const PROTO_THEME_MAP_WEB_REFRESH = obj3;
export const PROTO_THEME_MAP_MOBILE = obj4;
export const PROTO_THEME_MAP_MOBILE_REFRESH = { [require(dependencyMap[1]).Theme.UNSET]: ThemeTypes.DARKER, [require(dependencyMap[1]).Theme.DARK]: ThemeTypes.DARK, [require(dependencyMap[1]).Theme.DARKER]: ThemeTypes.DARKER, [require(dependencyMap[1]).Theme.LIGHT]: ThemeTypes.LIGHT, [require(dependencyMap[1]).Theme.MIDNIGHT]: ThemeTypes.MIDNIGHT };
