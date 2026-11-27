// Module ID: 19421
// Function ID: 19422
// Name: triggerIOSHaptic
// Dependencies: [11791, 5259, 2]
// Exports: default

// Module 19421 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5259 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11791 */;
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
