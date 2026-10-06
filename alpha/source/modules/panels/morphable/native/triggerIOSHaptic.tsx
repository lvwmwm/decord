// Module ID: 17204
// Function ID: 17205
// Name: triggerIOSHaptic
// Dependencies: [11917, 4861, 2]
// Exports: default

// Module 17204 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4861 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11917 */;
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
