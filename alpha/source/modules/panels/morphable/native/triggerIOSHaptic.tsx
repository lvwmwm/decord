// Module ID: 19405
// Function ID: 19406
// Name: triggerIOSHaptic
// Dependencies: [11783, 5259, 2]
// Exports: default

// Module 19405 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5259 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11783 */;
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
