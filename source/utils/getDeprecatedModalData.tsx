// Module ID: 4339
// Function ID: 38305
// Name: getDeprecatedModalData
// Dependencies: [4122, 653, 2]
// Exports: default

// Module 4339 (getDeprecatedModalData)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ModalAnimation } from "ME";

const result = require("set").fileFinishedImporting("utils/getDeprecatedModalData.tsx");

export default function getDeprecatedModalData(modal, key, props) {
  let tmp = arg3;
  if (arg3 === undefined) {
    tmp = null;
  }
  const obj = {};
  if (null != key.key) {
    tmp = key;
  }
  let str = "modal";
  if (null != tmp) {
    str = tmp;
  }
  obj.key = str;
  obj.modal = modal;
  const animation = key.animation;
  if (null != animation) {
    obj.animation = animation;
    const shouldPersistUnderModals = key.shouldPersistUnderModals;
    obj.shouldPersistUnderModals = null != shouldPersistUnderModals && shouldPersistUnderModals;
    obj.props = props;
    const backdropStyle = key.backdropStyle;
    let tmp6 = null;
    if (null != backdropStyle) {
      tmp6 = backdropStyle;
    }
    obj.backdropStyle = tmp6;
    const backdropInstant = key.backdropInstant;
    obj.backdropInstant = null != backdropInstant && backdropInstant;
    const disableAnimation = key.disableAnimation;
    obj.disableAnimation = null != disableAnimation && disableAnimation;
    obj.closable = "boolean" !== typeof key.closable || key.closable;
    const label = key.label;
    let str3 = "";
    if (null != label) {
      str3 = label;
    }
    obj.label = str3;
    obj.callbacks = {};
    return obj;
  }
};
