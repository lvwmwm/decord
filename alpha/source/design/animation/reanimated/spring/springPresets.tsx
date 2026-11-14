// Module ID: 5940
// Function ID: 5941
// Name: springPresets
// Dependencies: [2, 5941, 1655]

// Module 5940 (springPresets)
import _mod1655 from "module_1655" /* 1655 */;
import SUBTLE_SPRING from "SUBTLE_SPRING" /* 5941 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/animation/reanimated/spring/springPresets.tsx");
const SUBTLE_SPRING_export = SUBTLE_SPRING.SUBTLE_SPRING;

export { SUBTLE_SPRING_export as SUBTLE_SPRING };
export const Reanimated3DefaultSpringConfig = _mod1655.Reanimated3DefaultSpringConfig;
export const Reanimated3DefaultSpringConfigWithDuration = _mod1655.Reanimated3DefaultSpringConfigWithDuration;
export const ON_PRESS_SPRING = { mass: 1, overshootClamping: true, damping: 27, stiffness: 300 };
export const springSlow = { mass: 1, damping: 30, stiffness: 380 };
export const springUnclamped = { mass: 0.35, damping: 13, stiffness: 250 };
export const springUnclampedBounce = { mass: 0.3, damping: 13, stiffness: 250 };
export const springStandard = { mass: 0.35, damping: 13, stiffness: 250, overshootClamping: true };
