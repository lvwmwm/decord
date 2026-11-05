// Module ID: 19444
// Function ID: 19445
// Name: triggerIOSHaptic
// Dependencies: [11420, 5386, 2]
// Exports: default

// Module 19444 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5386 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11420 */;
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
