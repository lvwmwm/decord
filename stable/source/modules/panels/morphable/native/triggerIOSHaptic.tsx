// Module ID: 16815
// Function ID: 16816
// Name: triggerIOSHaptic
// Dependencies: [11649, 4802, 2]
// Exports: default

// Module 16815 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4802 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11649 */;
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
