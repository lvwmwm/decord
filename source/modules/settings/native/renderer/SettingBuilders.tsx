// Module ID: 10086
// Function ID: 78131
// Name: createToggle
// Dependencies: [270401536, 45154304]
// Exports: createGuildSelector, createList, createPressable, createRadio, createRoute, createSegmentedControl, createSlider, createStatic, createToggle, createVolumeSlider

// Module 10086 (createToggle)
const NodeType = require(dependencyMap[0]).NodeType;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/settings/native/renderer/SettingBuilders.tsx");

export const createToggle = function createToggle(result) {
  const merged = Object.assign(result);
  return { type: NodeType.TOGGLE };
};
export const createStatic = function createStatic(arg0) {
  const merged = Object.assign(arg0);
  return { type: NodeType.STATIC };
};
export const createRoute = function createRoute(result) {
  const merged = Object.assign(result);
  return { type: NodeType.ROUTE };
};
export const createPressable = function createPressable(result) {
  const merged = Object.assign(result);
  return { type: NodeType.PRESSABLE };
};
export const createVolumeSlider = function createVolumeSlider(getSystemLocale) {
  const merged = Object.assign(getSystemLocale);
  return { type: NodeType.VOLUME_SLIDER };
};
export const createSlider = function createSlider(arg0) {
  const merged = Object.assign(arg0);
  return { type: NodeType.SLIDER };
};
export const createGuildSelector = function createGuildSelector(arg0) {
  const merged = Object.assign(arg0);
  return { type: NodeType.GUILD_SELECTOR };
};
export const createRadio = function createRadio(result) {
  const merged = Object.assign(result);
  return { type: NodeType.RADIO };
};
export const createList = function createList(arg0) {
  const merged = Object.assign(arg0);
  return { type: NodeType.LIST };
};
export const createSegmentedControl = function createSegmentedControl(arg0) {
  const merged = Object.assign(arg0);
  return { type: NodeType.SEGMENTED_CONTROL };
};
