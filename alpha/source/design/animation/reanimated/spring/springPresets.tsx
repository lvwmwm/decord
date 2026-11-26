// Module ID: 5645
// Function ID: 5646
// Name: springPresets
// Dependencies: [2, 5646, 1654]

// Module 5645 (springPresets)
import _mod1654 from "module_1654" /* 1654 */;
import SUBTLE_SPRING from "SUBTLE_SPRING" /* 5646 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/animation/reanimated/spring/springPresets.tsx");
const SUBTLE_SPRING_export = SUBTLE_SPRING.SUBTLE_SPRING;

export { SUBTLE_SPRING_export as SUBTLE_SPRING };
export const Reanimated3DefaultSpringConfig = _mod1654.Reanimated3DefaultSpringConfig;
export const Reanimated3DefaultSpringConfigWithDuration = _mod1654.Reanimated3DefaultSpringConfigWithDuration;
export const ON_PRESS_SPRING = { mass: 1, overshootClamping: true, damping: 27, stiffness: 300 };
export const springSlow = { mass: 1, damping: 30, stiffness: 380 };
export const springUnclamped = { mass: 0.35, damping: 13, stiffness: 250 };
export const springUnclampedBounce = { mass: 0.3, damping: 13, stiffness: 250 };
export const springStandard = { mass: 0.35, damping: 13, stiffness: 250, overshootClamping: true };
