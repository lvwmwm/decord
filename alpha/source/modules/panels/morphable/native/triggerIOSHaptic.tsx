// Module ID: 18046
// Function ID: 18047
// Name: triggerIOSHaptic
// Dependencies: [12818, 5116, 2]
// Exports: default

// Module 18046 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5116 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 12818 */;
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
