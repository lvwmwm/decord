// Module ID: 10434
// Function ID: 80541
// Name: LAUNCH_PAD_SPRING_CONFIG
// Dependencies: []

// Module 10434 (LAUNCH_PAD_SPRING_CONFIG)
const Dimensions = require(dependencyMap[0]).Dimensions;
const size = Dimensions.get("screen");
const _module = require(dependencyMap[1]);
let num = 24;
if (!_module.isAndroid()) {
  const _module1 = require(dependencyMap[2]);
  let num3 = 13;
  if (!_module1.isIpadOS()) {
    const _Math = Math;
    num3 = 0.09 * Math.min(size.width, size.height);
  }
  num = num3;
}
const _module2 = require(dependencyMap[3]);
const result = _module2.fileFinishedImporting("modules/launchpad/native/LaunchPadConstants.tsx");

export const LAUNCH_PAD_SPRING_CONFIG = {};
export const LAUNCH_PAD_PULL_TAB_HEIGHT = 96;
export const LAUNCH_PAD_PULL_TAB_WIDTH = 26;
export const LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET = 18;
export const LAUNCH_PAD_PULL_TAB_BORDER_RADIUS = 13;
export const LAUNCH_PAD_PULL_TAB_SCALE_FACTOR = 1.1;
export const LAUNCH_PAD_PULL_TAB_SCALE_OFFSET = 4.800000000000004;
export const LAUNCH_PAD_PULL_TAB_POSITION_MARGIN = 32;
export const LAUNCH_PAD_PULL_TAB_MAX_POSITION = 300.8;
export const LAUNCH_PAD_PULL_TAB_INITIAL_POSITION = 150.4;
export const LAUNCH_PAD_MARGIN = 16;
export const LAUNCH_PAD_PULL_TAB_HIT_SLOP = 16;
export const LAUNCH_PAD_END_TRANSLATION_THRESHOLD = 14;
export const LAUNCH_PAD_END_VELOCITY_THRESHOLD = 100;
export const LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE = num;
export const LaunchPadTypes = { GESTURE_FULL: "gesture-full", GESTURE_EDGE: "gesture-edge", PULL_TAB: "pull-tab", DISABLED: "disabled" };
