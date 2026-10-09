// Module ID: 17637
// Function ID: 17638
// Name: triggerIOSHaptic
// Dependencies: [11927, 5056, 2]
// Exports: default

// Module 17637 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5056 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11927 */;
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
