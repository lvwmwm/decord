// Module ID: 17175
// Function ID: 17176
// Name: triggerIOSHaptic
// Dependencies: [11903, 4855, 2]
// Exports: default

// Module 17175 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4855 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11903 */;
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
