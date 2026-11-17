// Module ID: 19978
// Function ID: 19979
// Name: triggerIOSHaptic
// Dependencies: [12429, 5548, 2]
// Exports: default

// Module 19978 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5548 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 12429 */;
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
