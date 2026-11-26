// Module ID: 19202
// Function ID: 19203
// Name: triggerIOSHaptic
// Dependencies: [11756, 5129, 2]
// Exports: default

// Module 19202 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5129 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11756 */;
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
