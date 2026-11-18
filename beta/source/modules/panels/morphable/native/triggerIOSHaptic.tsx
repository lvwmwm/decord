// Module ID: 19934
// Function ID: 19935
// Name: triggerIOSHaptic
// Dependencies: [11986, 5544, 2]
// Exports: default

// Module 19934 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 5544 */;
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
