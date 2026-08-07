// Module ID: 13899
// Function ID: 13900
// Name: getScreens
// Dependencies: [13896, 21, 13900, 1236, 13907, 5269, 13902, 13912, 13913, 13916, 13917, 2]
// Exports: getScreens

// Module 13899 (getScreens)
import { WebAuthnScreens } from "WebAuthnScreens";
import { jsx } from "jsxProd";

const result = require("PasskeyUpsellView").fileFinishedImporting("modules/webauthn/native/WebAuthnScreens.tsx");

export const getScreens = function getScreens(isModal) {
  isModal = isModal.isModal;
  obj = { [closure_3.MODAL_UPSELL]: obj };
  obj = {
    title: "",
    render() {
      return callback2(callback(13900), {});
    }
  };
  obj = { title: null, render: null, headerLeft: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t["0N1s81"]);
  obj[1] = function render() {
    return callback2(callback(13907), {});
  };
  let headerCloseButton;
  if (isModal) {
    let tmp2Result = tmp2(5269);
    headerCloseButton = tmp2Result.getHeaderCloseButton(importDefault(13902).closePasskeyUpsellModal);
  }
  obj[2] = headerCloseButton;
  obj[WebAuthnScreens.INIT] = obj;
  const obj1 = {
    render(arg0) {
      const merged = Object.assign(arg0);
      return callback2(callback(13912), {});
    },
    title: null
  };
  const intl2 = tmp2(1236).intl;
  obj1[1] = intl2.string(require(1236) /* getSystemLocale */.t.UBBwwF);
  obj[WebAuthnScreens.EDIT] = obj1;
  const obj2 = {
    render() {
      return callback2(callback(13913), {});
    },
    title: null
  };
  const intl3 = tmp2(1236).intl;
  obj2[1] = intl3.string(require(1236) /* getSystemLocale */.t.vrOCCk);
  obj[WebAuthnScreens.REGISTER] = obj2;
  const obj3 = {
    render(arg0) {
      const merged = Object.assign(arg0);
      return callback2(callback(13916), {});
    },
    title: null,
    headerLeft: null
  };
  const intl4 = tmp2(1236).intl;
  obj3[1] = intl4.string(require(1236) /* getSystemLocale */.t["cY/IOu"]);
  let headerCloseButton1;
  if (isModal) {
    tmp2Result = tmp2(5269);
    headerCloseButton1 = tmp2Result.getHeaderCloseButton(importDefault(13902).closePasskeyUpsellModal);
  }
  obj3[2] = headerCloseButton1;
  obj[WebAuthnScreens.NAME] = obj3;
  const obj4 = {
    render() {
      return callback2(callback(13917), {});
    },
    title: null
  };
  const intl5 = tmp2(1236).intl;
  obj4[1] = intl5.string(require(1236) /* getSystemLocale */.t["7wPZln"]);
  obj[WebAuthnScreens.SUCCESS] = obj4;
  return obj;
};
