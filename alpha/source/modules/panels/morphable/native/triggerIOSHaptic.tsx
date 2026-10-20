// Module ID: 18187
// Function ID: 18188
// Name: triggerIOSHaptic
// Dependencies: [10694, 5173, 2]
// Exports: default

// Module 18187 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5173 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 10694 */;
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
