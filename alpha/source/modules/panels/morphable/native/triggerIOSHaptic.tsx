// Module ID: 19931
// Function ID: 19932
// Name: triggerIOSHaptic
// Dependencies: [11986, 5554, 2]
// Exports: default

// Module 19931 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5554 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11986 */;
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
