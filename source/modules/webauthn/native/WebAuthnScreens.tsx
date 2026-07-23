// Module ID: 13627
// Function ID: 104682
// Name: getScreens
// Dependencies: [13624, 33, 13628, 1212, 13635, 5087, 13630, 13640, 13641, 13644, 13645, 2]
// Exports: getScreens

// Module 13627 (getScreens)
import { WebAuthnScreens } from "WebAuthnScreens";
import { jsx } from "jsxProd";

const result = require("PasskeyUpsellView").fileFinishedImporting("modules/webauthn/native/WebAuthnScreens.tsx");

export const getScreens = function getScreens(isModal) {
  isModal = isModal.isModal;
  obj = { [closure_3.MODAL_UPSELL]: obj };
  obj = {
    title: "",
    render() {
      return outer1_4(outer1_1(outer1_2[2]), {});
    }
  };
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["0N1s81"]);
  obj.render = function render() {
    return outer1_4(outer1_1(outer1_2[4]), {});
  };
  let headerCloseButton;
  if (isModal) {
    let obj3 = require(5087) /* HeaderBackImage */;
    headerCloseButton = obj3.getHeaderCloseButton(importDefault(13630).closePasskeyUpsellModal);
  }
  obj.headerLeft = headerCloseButton;
  obj[WebAuthnScreens.INIT] = obj;
  const obj1 = {
    render(arg0) {
      const merged = Object.assign(arg0);
      return outer1_4(outer1_1(outer1_2[7]), {});
    }
  };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.title = intl2.string(require(1212) /* getSystemLocale */.t.UBBwwF);
  obj[WebAuthnScreens.EDIT] = obj1;
  const obj2 = {
    render() {
      return outer1_4(outer1_1(outer1_2[8]), {});
    }
  };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj2.title = intl3.string(require(1212) /* getSystemLocale */.t.vrOCCk);
  obj[WebAuthnScreens.REGISTER] = obj2;
  obj3 = {
    render(arg0) {
      const merged = Object.assign(arg0);
      return outer1_4(outer1_1(outer1_2[9]), {});
    }
  };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj3.title = intl4.string(require(1212) /* getSystemLocale */.t["cY/IOu"]);
  let headerCloseButton1;
  if (isModal) {
    headerCloseButton1 = require(5087) /* HeaderBackImage */.getHeaderCloseButton(importDefault(13630).closePasskeyUpsellModal);
    const obj8 = require(5087) /* HeaderBackImage */;
  }
  obj3.headerLeft = headerCloseButton1;
  obj[WebAuthnScreens.NAME] = obj3;
  const obj4 = {
    render() {
      return outer1_4(outer1_1(outer1_2[10]), {});
    }
  };
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj4.title = intl5.string(require(1212) /* getSystemLocale */.t["7wPZln"]);
  obj[WebAuthnScreens.SUCCESS] = obj4;
  return obj;
};
