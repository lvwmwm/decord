// Module ID: 19413
// Function ID: 19414
// Name: triggerIOSHaptic
// Dependencies: [11412, 5384, 2]
// Exports: default

// Module 19413 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5384 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11412 */;
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
