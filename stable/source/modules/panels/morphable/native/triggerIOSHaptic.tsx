// Module ID: 18156
// Function ID: 18157
// Name: triggerIOSHaptic
// Dependencies: [10681, 5156, 2]
// Exports: default

// Module 18156 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5156 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 10681 */;
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
