// Module ID: 3976
// Function ID: 32984
// Name: createPresetAppearance
// Dependencies: []
// Exports: getDefaultGuildThemePresetSettings, getGuildThemePreset, getHueAdjustedColor, getLinearGradientForGuildThemePreset, getRandomSingleColorGuildTheme, getSingleColorGuildThemeGradientColors

// Module 3976 (createPresetAppearance)
function createPresetAppearance(color, hex, baseMix) {
  let obj = { color, angle: 0, baseMix, colors: items };
  obj = { hex: color, stop: 0 };
  const items = [obj, ];
  obj = { hex, stop: 100 };
  items[1] = obj;
  return obj;
}
function getGuildThemePresetAppearance(preset, stateFromStores) {
  return stateFromStores === ThemeTypes.LIGHT ? preset.lightAppearance : preset.darkAppearance;
}
function getRandomInteger(arg0, arg1) {
  return Math.floor(Math.random() * (arg1 - arg0 + 1)) + arg0;
}
function getSaturationPinnedColor(toneAdjustedColor) {
  const result = importDefault(dependencyMap[1])(toneAdjustedColor).set("hsl.s", 0.4);
  return result.hex();
}
function getToneAdjustedColor(arg0, arg1) {
  const result = importDefault(dependencyMap[1])(arg0).set("hsl.l", Math.max(0.15, Math.min(0.75, arg1 / 100)));
  return result.hex();
}
function getGuildThemeToneRange(theme) {
  return theme === ThemeTypes.LIGHT ? { sk: true, Text: true } : { sk: false, Text: false };
}
function getThemeAdjustedToneColor(first, theme) {
  const tmp = getGuildThemeToneRange(theme);
  const minTone = tmp.minTone;
  const obj = importDefault(dependencyMap[1])(first);
  const result = obj.set("hsl.l", (minTone + (Math.max(15, Math.min(75, 100 * obj.get("hsl.l"))) - 15) / 60 * (tmp.maxTone - minTone)) / 100);
  return result.hex();
}
const ThemeTypes = require(dependencyMap[0]).ThemeTypes;
let obj = {};
const items = [, , , , , , , , , ];
({ TWILIGHT: arr[0], DENIM: arr[1], OCEAN: arr[2], BLURPLE: arr[3], OBSIDIAN: arr[4], PLUM: arr[5], FIRE: arr[6], GOLD_DUST: arr[7], MOSS: arr[8], JADE: arr[9] } = obj);
obj = {};
obj = { id: obj.TWILIGHT, darkAppearance: createPresetAppearance("#69426A", "#111731", 100), lightAppearance: createPresetAppearance("#FA9EFF", "#5A7EFE", 100) };
obj[obj.TWILIGHT] = obj;
obj[obj.DENIM] = { id: obj.DENIM, darkAppearance: createPresetAppearance("#5359AD", "#121238", 100), lightAppearance: createPresetAppearance("#DBDBFF", "#6060FF", 100) };
const obj1 = { id: obj.DENIM, darkAppearance: createPresetAppearance("#5359AD", "#121238", 100), lightAppearance: createPresetAppearance("#DBDBFF", "#6060FF", 100) };
obj[obj.OCEAN] = { id: obj.OCEAN, darkAppearance: createPresetAppearance("#245B92", "#141D40", 100), lightAppearance: createPresetAppearance("#9ADBF7", "#2D3CCA", 100) };
const obj2 = { id: obj.OCEAN, darkAppearance: createPresetAppearance("#245B92", "#141D40", 100), lightAppearance: createPresetAppearance("#9ADBF7", "#2D3CCA", 100) };
obj[obj.BLURPLE] = { id: obj.BLURPLE, darkAppearance: createPresetAppearance("#533D9E", "#1A1035", 100), lightAppearance: createPresetAppearance("#C3BFFF", "#816BDC", 100) };
const obj3 = { id: obj.BLURPLE, darkAppearance: createPresetAppearance("#533D9E", "#1A1035", 100), lightAppearance: createPresetAppearance("#C3BFFF", "#816BDC", 100) };
obj[obj.OBSIDIAN] = { id: obj.OBSIDIAN, darkAppearance: createPresetAppearance("#5E4C85", "#1E1740", 100), lightAppearance: createPresetAppearance("#B59DF2", "#8F89D2", 100) };
const obj4 = { id: obj.OBSIDIAN, darkAppearance: createPresetAppearance("#5E4C85", "#1E1740", 100), lightAppearance: createPresetAppearance("#B59DF2", "#8F89D2", 100) };
obj[obj.PLUM] = { id: obj.PLUM, darkAppearance: createPresetAppearance("#8A3F7F", "#2C0D25", 100), lightAppearance: createPresetAppearance("#E893FF", "#FFADDC", 100) };
const obj5 = { id: obj.PLUM, darkAppearance: createPresetAppearance("#8A3F7F", "#2C0D25", 100), lightAppearance: createPresetAppearance("#E893FF", "#FFADDC", 100) };
obj[obj.FIRE] = { id: obj.FIRE, darkAppearance: createPresetAppearance("#9B2C2C", "#2A0C0C", 50), lightAppearance: createPresetAppearance("#FFEBCA", "#FF8989", 50) };
const obj6 = { id: obj.FIRE, darkAppearance: createPresetAppearance("#9B2C2C", "#2A0C0C", 50), lightAppearance: createPresetAppearance("#FFEBCA", "#FF8989", 50) };
obj[obj.GOLD_DUST] = { id: obj.GOLD_DUST, darkAppearance: createPresetAppearance("#6C523D", "#241912", 50), lightAppearance: createPresetAppearance("#FFE7DA", "#FFD89B", 50) };
const obj7 = { id: obj.GOLD_DUST, darkAppearance: createPresetAppearance("#6C523D", "#241912", 50), lightAppearance: createPresetAppearance("#FFE7DA", "#FFD89B", 50) };
obj[obj.MOSS] = { id: obj.MOSS, darkAppearance: createPresetAppearance("#58694E", "#222A1C", 50), lightAppearance: createPresetAppearance("#B7D19F", "#B1DCA4", 50) };
const obj8 = { id: obj.MOSS, darkAppearance: createPresetAppearance("#58694E", "#222A1C", 50), lightAppearance: createPresetAppearance("#B7D19F", "#B1DCA4", 50) };
obj[obj.JADE] = { id: obj.JADE, darkAppearance: createPresetAppearance("#297071", "#18203F", 50), lightAppearance: createPresetAppearance("#C5F0D2", "#60ADB2", 50) };
const set = new Set(Object.values(obj));
const mapped = items.map((arg0) => obj[arg0]);
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/guild_themes/GuildThemePresets.tsx");

export const GUILD_THEME_PRESET_IDS = obj;
export const GUILD_THEME_DEFAULT_BASE_MIX = 74;
export const GUILD_THEME_DEFAULT_COLOR = "#5865F2";
export const GUILD_THEME_MIN_TONE = 15;
export const GUILD_THEME_MAX_TONE = 75;
export const GUILD_THEME_CUSTOM_SATURATION = 0.4;
export const GUILD_THEME_TONE_TRIM = 40;
export const GUILD_THEME_PRESETS = mapped;
export const getGuildThemePreset = function getGuildThemePreset(presetId) {
  let tmp = null;
  if (null != presetId) {
    tmp = null;
    if (set.has(presetId)) {
      tmp = obj[presetId];
    }
  }
  return tmp;
};
export const getDefaultGuildThemePresetSettings = function getDefaultGuildThemePresetSettings() {
  return { presetId: mapped[0].id, customUserThemeSettings: undefined };
};
export { getGuildThemePresetAppearance };
export const getLinearGradientForGuildThemePreset = function getLinearGradientForGuildThemePreset(preset, stateFromStores) {
  const tmp = getGuildThemePresetAppearance(preset, stateFromStores);
  const colors = tmp.colors;
  const mapped = colors.map((hex) => "" + hex.hex + " " + hex.stop + "%");
  return "linear-gradient(" + tmp.angle + "deg, " + mapped.join(", ") + ")";
};
export const getSingleColorGuildThemeGradientColors = function getSingleColorGuildThemeGradientColors(first, theme) {
  const tmp = getThemeAdjustedToneColor(first, theme);
  const obj = importDefault(dependencyMap[1])(tmp);
  let num = -0.2;
  if (theme === ThemeTypes.LIGHT) {
    num = 0.2;
  }
  const items = [tmp, ];
  const result = obj.set("hsl.l", Math.max(0, Math.min(1, obj.get("hsl.l") + num)));
  items[1] = result.hex();
  return items;
};
export const getRandomSingleColorGuildTheme = function getRandomSingleColorGuildTheme() {
  const tmp = require(dependencyMap[2]).COLOR_PALETTE[closure_8(undefined, 0, closure_0(undefined, closure_2[2]).COLOR_PALETTE.length - 1)];
  const obj = { color: getSaturationPinnedColor(getToneAdjustedColor(tmp, Math.min(45, Math.round(100 * importDefault(dependencyMap[1])(tmp).get("hsl.l"))))), baseMix: getRandomInteger(70, 80) };
  return obj;
};
export { getSaturationPinnedColor };
export { getToneAdjustedColor };
export { getGuildThemeToneRange };
export { getThemeAdjustedToneColor };
export const getHueAdjustedColor = function getHueAdjustedColor(arg0, arg1) {
  const result = importDefault(dependencyMap[1])(arg0).set("hsl.h", arg1);
  return result.hex();
};
