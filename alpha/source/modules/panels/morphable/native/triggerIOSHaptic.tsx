// Module ID: 19295
// Function ID: 19296
// Name: triggerIOSHaptic
// Dependencies: [11361, 5383, 2]
// Exports: default

// Module 19295 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5383 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11361 */;
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
