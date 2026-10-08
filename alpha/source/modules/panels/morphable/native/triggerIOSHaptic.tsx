// Module ID: 17485
// Function ID: 17486
// Name: triggerIOSHaptic
// Dependencies: [11990, 5055, 2]
// Exports: default

// Module 17485 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5055 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11990 */;
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
