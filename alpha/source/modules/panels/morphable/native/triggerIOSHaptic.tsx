// Module ID: 17806
// Function ID: 17807
// Name: triggerIOSHaptic
// Dependencies: [12525, 5061, 2]
// Exports: default

// Module 17806 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5061 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 12525 */;
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
