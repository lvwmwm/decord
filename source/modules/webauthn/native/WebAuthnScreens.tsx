// Module ID: 13513
// Function ID: 102526
// Name: getScreens
// Dependencies: []
// Exports: getScreens

// Module 13513 (getScreens)
const WebAuthnScreens = require(dependencyMap[0]).WebAuthnScreens;
const jsx = require(dependencyMap[1]).jsx;
const _module = require(dependencyMap[11]);
const result = _module.fileFinishedImporting("modules/webauthn/native/WebAuthnScreens.tsx");

export const getScreens = function getScreens(isModal) {
  isModal = isModal.isModal;
  let obj = { [closure_3.MODAL_UPSELL]: obj };
  obj = {
    title: "",
    render() {
      return callback2(callback(closure_2[2]), {});
    }
  };
  obj = {};
  const intl = require(dependencyMap[3]).intl;
  obj.title = intl.string(require(dependencyMap[3]).t.0N1s81);
  obj.render = function render() {
    return callback2(callback(closure_2[4]), {});
  };
  let headerCloseButton;
  if (isModal) {
    let obj3 = require(dependencyMap[5]);
    headerCloseButton = obj3.getHeaderCloseButton(importDefault(dependencyMap[6]).closePasskeyUpsellModal);
  }
  obj.headerLeft = headerCloseButton;
  obj[WebAuthnScreens.INIT] = obj;
  const obj1 = {
    render(arg0) {
      const merged = Object.assign(arg0);
      return callback2(callback(closure_2[7]), {});
    }
  };
  const intl2 = require(dependencyMap[3]).intl;
  obj1.title = intl2.string(require(dependencyMap[3]).t.UBBwwF);
  obj[WebAuthnScreens.EDIT] = obj1;
  const obj2 = {
    render() {
      return callback2(callback(closure_2[8]), {});
    }
  };
  const intl3 = require(dependencyMap[3]).intl;
  obj2.title = intl3.string(require(dependencyMap[3]).t.vrOCCk);
  obj[WebAuthnScreens.REGISTER] = obj2;
  obj3 = {
    render(arg0) {
      const merged = Object.assign(arg0);
      return callback2(callback(closure_2[9]), {});
    }
  };
  const intl4 = require(dependencyMap[3]).intl;
  obj3.title = intl4.string(require(dependencyMap[3]).t.cY/IOu);
  let headerCloseButton1;
  if (isModal) {
    headerCloseButton1 = require(dependencyMap[5]).getHeaderCloseButton(importDefault(dependencyMap[6]).closePasskeyUpsellModal);
    const obj8 = require(dependencyMap[5]);
  }
  obj3.headerLeft = headerCloseButton1;
  obj[WebAuthnScreens.NAME] = obj3;
  const obj4 = {
    render() {
      return callback2(callback(closure_2[10]), {});
    }
  };
  const intl5 = require(dependencyMap[3]).intl;
  obj4.title = intl5.string(require(dependencyMap[3]).t.7wPZln);
  obj[WebAuthnScreens.SUCCESS] = obj4;
  return obj;
};
