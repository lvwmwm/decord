// Module ID: 11539
// Function ID: 11540
// Name: SettingBuilders
// Dependencies: [11540, 2]
// Exports: createGuildSelector, createList, createPressable, createRadio, createRoute, createSegmentedControl, createSlider, createStatic, createToggle, createVolumeSlider

// Module 11539 (SettingBuilders)
import SettingRendererConstants from "SettingRendererConstants" /* 11540 */;
import size from "module_2" /* 2 */;

const NodeType = SettingRendererConstants.NodeType;
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingBuilders.tsx");

export function createToggle(arg0) {
  const obj = { type: NodeType.TOGGLE };
  const merged = Object.assign(arg0);
  return obj;
}
export function createStatic(arg0) {
  const obj = { type: NodeType.STATIC };
  const merged = Object.assign(arg0);
  return obj;
}
export function createRoute(arg0) {
  const obj = { type: NodeType.ROUTE };
  const merged = Object.assign(arg0);
  return obj;
}
export function createPressable(arg0) {
  const obj = { type: NodeType.PRESSABLE };
  const merged = Object.assign(arg0);
  return obj;
}
export function createVolumeSlider(arg0) {
  const obj = { type: NodeType.VOLUME_SLIDER };
  const merged = Object.assign(arg0);
  return obj;
}
export function createSlider(arg0) {
  const obj = { type: NodeType.SLIDER };
  const merged = Object.assign(arg0);
  return obj;
}
export function createGuildSelector(arg0) {
  const obj = { type: NodeType.GUILD_SELECTOR };
  const merged = Object.assign(arg0);
  return obj;
}
export function createRadio(arg0) {
  const obj = { type: NodeType.RADIO };
  const merged = Object.assign(arg0);
  return obj;
}
export function createList(arg0) {
  const obj = { type: NodeType.LIST };
  const merged = Object.assign(arg0);
  return obj;
}
export function createSegmentedControl(arg0) {
  const obj = { type: NodeType.SEGMENTED_CONTROL };
  const merged = Object.assign(arg0);
  return obj;
}
