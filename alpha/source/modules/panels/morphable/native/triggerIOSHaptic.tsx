// Module ID: 19060
// Function ID: 19061
// Name: triggerIOSHaptic
// Dependencies: [11631, 5010, 2]
// Exports: default

// Module 19060 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5010 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11631 */;
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
