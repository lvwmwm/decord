// Module ID: 19721
// Function ID: 19722
// Name: triggerIOSHaptic
// Dependencies: [11920, 5491, 2]
// Exports: default

// Module 19721 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5491 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11920 */;
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
