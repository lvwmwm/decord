// Module ID: 17766
// Function ID: 17767
// Name: triggerIOSHaptic
// Dependencies: [11973, 5057, 2]
// Exports: default

// Module 17766 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5057 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11973 */;
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
