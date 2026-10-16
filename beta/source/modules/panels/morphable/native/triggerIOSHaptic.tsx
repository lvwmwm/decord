// Module ID: 17770
// Function ID: 17771
// Name: triggerIOSHaptic
// Dependencies: [11975, 5057, 2]
// Exports: default

// Module 17770 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5057 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11975 */;
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
