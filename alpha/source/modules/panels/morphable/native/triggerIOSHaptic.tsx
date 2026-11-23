// Module ID: 19189
// Function ID: 19190
// Name: triggerIOSHaptic
// Dependencies: [11751, 5129, 2]
// Exports: default

// Module 19189 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5129 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11751 */;
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
