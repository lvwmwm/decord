// Module ID: 9053
// Function ID: 71096
// Name: XboxInstallAlert
// Dependencies: [31, 8950, 33, 4130, 689, 4561, 1212, 1273, 9036, 477, 3827, 2]
// Exports: default

// Module 9053 (XboxInstallAlert)
import "result";
import XBOX_URL_BASE from "XBOX_URL_BASE";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ XBOX_ANDROID_APP_LINK: closure_3, XBOX_IOS_APP_LINK: closure_4 } = XBOX_URL_BASE);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { tintColor: require("_createForOfIteratorHelperLoose").colors.WHITE, width: 20, height: 20, marginLeft: 8 };
_createForOfIteratorHelperLoose.externalLinkIcon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/game_console/native/XboxInstallAlert.tsx");

export default function XboxInstallAlert(arg0) {
  const _require = _createForOfIteratorHelperLoose();
  let obj = {};
  const merged = Object.assign(arg0);
  const intl = _require(1212).intl;
  obj["title"] = intl.string(_require(1212).t["12Kx2v"]);
  const intl2 = _require(1212).intl;
  obj["body"] = intl2.string(_require(1212).t.msZW3j);
  const intl3 = _require(1212).intl;
  obj["confirmText"] = intl3.string(_require(1212).t["n+VrqG"]);
  const intl4 = _require(1212).intl;
  obj["cancelText"] = intl4.string(_require(1212).t.kYaBOg);
  obj["fillCancelText"] = true;
  obj["renderConfirmRightIcon"] = function renderConfirmRightIcon() {
    const obj = { source: outer1_1(outer1_2[8]), style: lib.externalLinkIcon };
    return outer1_5(lib(outer1_2[7]).Icon, obj);
  };
  obj["onConfirm"] = function onConfirm() {
    const obj = lib(outer1_2[9]);
    const isAndroidResult = lib(outer1_2[9]).isAndroid();
    const openURL = outer1_1(outer1_2[10]).openURL;
    if (isAndroidResult) {
      openURL(outer1_3);
    } else {
      openURL(outer1_4);
    }
  };
  return jsx(importDefault(4561), {});
};
