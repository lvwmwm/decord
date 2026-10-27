// Module ID: 18506
// Function ID: 18507
// Name: triggerIOSHaptic
// Dependencies: [10905, 5213, 2]
// Exports: default

// Module 18506 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5213 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 10905 */;
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
