// Module ID: 18152
// Function ID: 18153
// Name: triggerIOSHaptic
// Dependencies: [12915, 5156, 2]
// Exports: default

// Module 18152 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5156 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 12915 */;
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
