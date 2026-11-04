// Module ID: 18500
// Function ID: 18501
// Name: triggerIOSHaptic
// Dependencies: [10933, 5244, 2]
// Exports: default

// Module 18500 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5244 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 10933 */;
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
