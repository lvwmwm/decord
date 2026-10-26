// Module ID: 18463
// Function ID: 18464
// Name: triggerIOSHaptic
// Dependencies: [10901, 5212, 2]
// Exports: default

// Module 18463 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5212 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 10901 */;
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
