// Module ID: 16846
// Function ID: 16847
// Name: triggerIOSHaptic
// Dependencies: [11756, 4801, 2]
// Exports: default

// Module 16846 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4801 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11756 */;
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
