// Module ID: 17709
// Function ID: 17710
// Name: triggerIOSHaptic
// Dependencies: [11971, 5057, 2]
// Exports: default

// Module 17709 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5057 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11971 */;
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
