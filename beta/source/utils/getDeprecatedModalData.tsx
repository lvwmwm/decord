// Module ID: 5041
// Function ID: 5042
// Name: getDeprecatedModalData
// Dependencies: [4825, 1074, 2]
// Exports: default

// Module 5041 (getDeprecatedModalData)
import Constants from "Constants" /* 1074 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import size from "module_2" /* 2 */;

const ModalAnimation = Constants.ModalAnimation;
const result = size.fileFinishedImporting("utils/getDeprecatedModalData.tsx");

export default function getDeprecatedModalData(modal, key, props) {
  let animation;
  let backdropStyle;
  let flag;
  let flag2;
  let flag3;
  let str2;
  let tmp = arg3;
  if (arg3 === undefined) {
    tmp = null;
  }
  let str = key.key;
  if (str == null) {
    str = tmp;
  }
  if (str == null) {
    str = "modal";
  }
  const obj = { key: str, modal, animation, shouldPersistUnderModals: flag, props, backdropStyle, backdropInstant: flag2, disableAnimation: flag3, closable: typeof key.closable !== "boolean" || key.closable, label: str2, callbacks: {} };
  animation = key.animation;
  if (animation == null) {
    animation = AccessibilityStore.useReducedMotion ? tmp3.FADE : tmp3.SLIDE_UP;
  }
  flag = key.shouldPersistUnderModals;
  if (flag == null) {
    flag = false;
  }
  backdropStyle = key.backdropStyle;
  if (backdropStyle == null) {
    backdropStyle = null;
  }
  flag2 = key.backdropInstant;
  if (flag2 == null) {
    flag2 = false;
  }
  flag3 = key.disableAnimation;
  if (flag3 == null) {
    flag3 = false;
  }
  str2 = key.label;
  if (str2 == null) {
    str2 = "";
  }
  return obj;
};
