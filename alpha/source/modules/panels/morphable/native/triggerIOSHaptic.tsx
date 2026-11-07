// Module ID: 19495
// Function ID: 19496
// Name: triggerIOSHaptic
// Dependencies: [11364, 5376, 2]
// Exports: default

// Module 19495 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5376 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11364 */;
import size from "module_2" /* 2 */;

const IS_IOS = MorphablePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  const tmp = IS_IOS;
  if (tmp) {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
