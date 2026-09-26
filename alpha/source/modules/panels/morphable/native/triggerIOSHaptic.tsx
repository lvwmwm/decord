// Module ID: 16842
// Function ID: 16843
// Name: triggerIOSHaptic
// Dependencies: [11756, 4801, 2]
// Exports: default

// Module 16842 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4801 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11756 */;
import size from "module_2" /* 2 */;

const IS_IOS = MorphablePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
