// Module ID: 18382
// Function ID: 18383
// Name: triggerIOSHaptic
// Dependencies: [10874, 5198, 2]
// Exports: default

// Module 18382 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5198 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 10874 */;
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
