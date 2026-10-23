// Module ID: 18426
// Function ID: 18427
// Name: triggerIOSHaptic
// Dependencies: [10897, 5210, 2]
// Exports: default

// Module 18426 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5210 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 10897 */;
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
