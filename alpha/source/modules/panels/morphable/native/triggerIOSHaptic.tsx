// Module ID: 19231
// Function ID: 19232
// Name: triggerIOSHaptic
// Dependencies: [11636, 5133, 2]
// Exports: default

// Module 19231 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5133 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11636 */;
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
