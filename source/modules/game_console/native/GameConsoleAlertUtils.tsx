// Module ID: 9044
// Function ID: 71050
// Dependencies: [31, 4177, 8950, 653, 33, 3946, 1334, 1212, 4471, 9045, 8970, 2]

// Module 9044
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { GAME_CONSOLE_ALERT_MODAL_LOCATION as closure_4 } from "XBOX_URL_BASE";
import ME from "ME";
import { jsx } from "jsxProd";

let closure_5;
let closure_6;
let require = arg1;
({ InputModes: closure_5, PlatformTypes: closure_6 } = ME);
let result = require("XBOX_URL_BASE").fileFinishedImporting("modules/game_console/native/GameConsoleAlertUtils.tsx");

export default {
  maybeShowPTTAlert(XBOX) {
    if (mode.getMode() === constants.PUSH_TO_TALK) {
      if (!obj2.UNSAFE_isDismissibleContentDismissed(require(1334) /* DismissibleContent */.DismissibleContent.CONSOLE_PTT_DISABLE_ALERT)) {
        let obj = {};
        let intl = require(1212) /* getSystemLocale */.intl;
        obj[constants2.XBOX] = intl.string(require(1212) /* getSystemLocale */.t.bVZ7vy);
        const intl2 = require(1212) /* getSystemLocale */.intl;
        obj[constants2.PLAYSTATION] = intl2.string(require(1212) /* getSystemLocale */.t["6iqUsf"]);
        const intl3 = require(1212) /* getSystemLocale */.intl;
        obj[constants2.PLAYSTATION_STAGING] = intl3.string(require(1212) /* getSystemLocale */.t["6iqUsf"]);
        require = tmp5;
        if (null == obj[XBOX]) {
          let resolved = Promise.resolve();
        } else {
          resolved = new Promise((arg0) => {
            let obj = outer1_1(outer1_2[8]);
            obj = { title: tmp5 };
            const intl = tmp5(outer1_2[7]).intl;
            obj.body = intl.string(arg0(outer1_2[7]).t.bL21zs);
            obj.onConfirm = function onConfirm() {
              const result = callback(outer2_2[5]).UNSAFE_markDismissibleContentAsDismissed(callback(outer2_2[6]).DismissibleContent.CONSOLE_PTT_DISABLE_ALERT);
              callback();
            };
            obj.show(obj);
          });
        }
        return resolved;
      }
      obj2 = require(3946) /* UNSAFE_isDismissibleContentDismissed */;
    }
    return Promise.resolve();
  },
  showSelfDismissableAlert(reconnectPlatformType) {
    let body;
    let errorCodeMessage;
    let title;
    reconnectPlatformType = reconnectPlatformType.reconnectPlatformType;
    ({ title, body, errorCodeMessage } = reconnectPlatformType);
    let obj = importDefault(4471);
    obj = { title };
    obj = { body, errorCodeMessage, dismissCallback: importDefault(4471).close };
    obj.body = jsx(reconnectPlatformType(9045).SelfDismissibleAlertBody, { body, errorCodeMessage, dismissCallback: importDefault(4471).close });
    obj.onConfirm = function onConfirm() {
      if (null != reconnectPlatformType) {
        const obj = { platformType: reconnectPlatformType, location: outer1_4 };
        outer1_1(outer1_2[10])(obj);
      }
    };
    obj.show(obj);
  }
};
