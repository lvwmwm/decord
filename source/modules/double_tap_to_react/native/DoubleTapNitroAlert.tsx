// Module ID: 7661
// Function ID: 61267
// Name: DoubleTapNitroAlert
// Dependencies: [31, 27, 7657, 653, 7662, 33, 4130, 5796, 4472, 4475, 7507, 1212, 2]
// Exports: default

// Module 7661 (DoubleTapNitroAlert)
import result from "result";
import { View } from "get ActivityIndicator";
import { NITRO_UPSELL_ALERT_KEY } from "NITRO_UPSELL_ALERT_KEY";
import { UserSettingsSections } from "ME";
import { MobileSetting } from "MobileSetting";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ icon: { alignItems: "center", justifyContent: "center" } });
const result = require("NITRO_UPSELL_ALERT_KEY").fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapNitroAlert.tsx");

export default function DoubleTapNitroAlert(emojiName) {
  const callback = React.useCallback(() => {
    let obj = outer1_0(outer1_1[7]);
    obj = { screen: outer1_5.TEXT, params: obj };
    obj = { initialSetting: outer1_6.DOUBLE_TAP_EMOJI };
    obj.openUserSettings(obj);
  }, []);
  const callback1 = React.useCallback(() => {
    let obj = outer1_0(outer1_1[7]);
    obj = { screen: outer1_5.PREMIUM };
    obj.openUserSettings(obj, () => {
      outer2_0(outer2_1[8]).dismissAlert(outer2_4);
    });
  }, []);
  let obj = {};
  obj = { style: callback3().icon, children: callback(require(7507) /* CircleErrorIcon */.CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }) };
  obj.header = callback(View, obj);
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.HRAWfC);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.content = intl2.format(require(1212) /* getSystemLocale */.t["3u/Je4"], { emojiName: emojiName.emojiName, onRenewNitro: callback1 });
  obj = {};
  const obj1 = { onPress: callback };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj1.text = intl3.string(require(1212) /* getSystemLocale */.t.LIIHRy);
  const items = [callback(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj1, "confirm"), ];
  const obj2 = { variant: "secondary" };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj2.text = intl4.string(require(1212) /* getSystemLocale */.t["Nr6v2+"]);
  items[1] = callback(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj2, "cancel");
  obj.children = items;
  obj.actions = callback2(closure_8, obj);
  return callback(require(4475) /* getAlertModalItemKey */.AlertModal, obj);
};
