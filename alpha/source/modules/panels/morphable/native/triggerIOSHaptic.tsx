// Module ID: 19130
// Function ID: 19131
// Name: triggerIOSHaptic
// Dependencies: [11224, 5260, 2]
// Exports: default

// Module 19130 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5260 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11224 */;
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
