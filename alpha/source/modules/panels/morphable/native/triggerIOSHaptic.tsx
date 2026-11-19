// Module ID: 19241
// Function ID: 19242
// Name: triggerIOSHaptic
// Dependencies: [11689, 5008, 2]
// Exports: default

// Module 19241 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5008 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11689 */;
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
