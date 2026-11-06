// Module ID: 19436
// Function ID: 19437
// Name: triggerIOSHaptic
// Dependencies: [11382, 5406, 2]
// Exports: default

// Module 19436 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5406 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11382 */;
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
