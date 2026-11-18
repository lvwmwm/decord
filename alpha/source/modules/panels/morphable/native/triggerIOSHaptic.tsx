// Module ID: 19249
// Function ID: 19250
// Name: triggerIOSHaptic
// Dependencies: [11711, 5039, 2]
// Exports: default

// Module 19249 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5039 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11711 */;
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
