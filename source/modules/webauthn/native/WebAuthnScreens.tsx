// Module ID: 13848
// Function ID: 13849
// Name: getScreens
// Dependencies: [13845, 21, 13849, 1236, 13856, 5223, 13851, 13861, 13862, 13865, 13866, 2]
// Exports: getScreens

// Module 13848 (getScreens)
import { WebAuthnScreens } from "WebAuthnScreens";
import { jsx } from "jsxProd";

const result = require("PasskeyUpsellView").fileFinishedImporting("modules/webauthn/native/WebAuthnScreens.tsx");

export const getScreens = function getScreens(isModal) {
  isModal = isModal.isModal;
  obj = { [closure_3.MODAL_UPSELL]: obj };
  obj = {
    title: "",
    render() {
      return callback2(callback(13849), {});
    }
  };
  obj = { title: null, render: null, headerLeft: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t["0N1s81"]);
  obj[1] = function render() {
    return callback2(callback(13856), {});
  };
  let headerCloseButton;
  if (isModal) {
    let tmp2Result = tmp2(5223);
    headerCloseButton = tmp2Result.getHeaderCloseButton(importDefault(13851).closePasskeyUpsellModal);
  }
  obj[2] = headerCloseButton;
  obj[WebAuthnScreens.INIT] = obj;
  const obj1 = {
    render(arg0) {
      const merged = Object.assign(arg0);
      return callback2(callback(13861), {});
    },
    title: null
  };
  const intl2 = tmp2(1236).intl;
  obj1[1] = intl2.string(require(1236) /* getSystemLocale */.t.UBBwwF);
  obj[WebAuthnScreens.EDIT] = obj1;
  const obj2 = {
    render() {
      return callback2(callback(13862), {});
    },
    title: null
  };
  const intl3 = tmp2(1236).intl;
  obj2[1] = intl3.string(require(1236) /* getSystemLocale */.t.vrOCCk);
  obj[WebAuthnScreens.REGISTER] = obj2;
  const obj3 = {
    render(arg0) {
      const merged = Object.assign(arg0);
      return callback2(callback(13865), {});
    },
    title: null,
    headerLeft: null
  };
  const intl4 = tmp2(1236).intl;
  obj3[1] = intl4.string(require(1236) /* getSystemLocale */.t["cY/IOu"]);
  let headerCloseButton1;
  if (isModal) {
    tmp2Result = tmp2(5223);
    headerCloseButton1 = tmp2Result.getHeaderCloseButton(importDefault(13851).closePasskeyUpsellModal);
  }
  obj3[2] = headerCloseButton1;
  obj[WebAuthnScreens.NAME] = obj3;
  const obj4 = {
    render() {
      return callback2(callback(13866), {});
    },
    title: null
  };
  const intl5 = tmp2(1236).intl;
  obj4[1] = intl5.string(require(1236) /* getSystemLocale */.t["7wPZln"]);
  obj[WebAuthnScreens.SUCCESS] = obj4;
  return obj;
};
