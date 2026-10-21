// Module ID: 18292
// Function ID: 18293
// Name: triggerIOSHaptic
// Dependencies: [10849, 5194, 2]
// Exports: default

// Module 18292 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5194 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 10849 */;
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
