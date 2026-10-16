// Module ID: 18081
// Function ID: 18082
// Name: triggerIOSHaptic
// Dependencies: [12844, 5119, 2]
// Exports: default

// Module 18081 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5119 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 12844 */;
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
