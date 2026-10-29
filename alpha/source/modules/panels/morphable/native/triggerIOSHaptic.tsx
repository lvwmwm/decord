// Module ID: 18987
// Function ID: 18988
// Name: triggerIOSHaptic
// Dependencies: [10975, 5249, 2]
// Exports: default

// Module 18987 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5249 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 10975 */;
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
