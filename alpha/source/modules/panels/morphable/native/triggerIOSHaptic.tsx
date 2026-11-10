// Module ID: 19537
// Function ID: 19538
// Name: triggerIOSHaptic
// Dependencies: [11373, 5378, 2]
// Exports: default

// Module 19537 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5378 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11373 */;
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
