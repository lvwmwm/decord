// Module ID: 19508
// Function ID: 19509
// Name: triggerIOSHaptic
// Dependencies: [11364, 5376, 2]
// Exports: default

// Module 19508 (triggerIOSHaptic)
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
