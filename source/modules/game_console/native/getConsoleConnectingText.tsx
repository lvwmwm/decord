// Module ID: 15853
// Function ID: 122535
// Name: getConsoleConnectingText
// Dependencies: [653, 1212, 2]
// Exports: getConsoleConnectingText

// Module 15853 (getConsoleConnectingText)
import { PlatformTypes } from "ME";

const result = require("set").fileFinishedImporting("modules/game_console/native/getConsoleConnectingText.tsx");

export const getConsoleConnectingText = function getConsoleConnectingText(stateFromStores1, stateFromStores, arg2) {
  let type;
  if (null != stateFromStores) {
    type = stateFromStores.type;
  }
  if (null == type) {
    let os;
    if (null != stateFromStores1) {
      os = stateFromStores1.clientInfo.os;
    }
    type = os;
  }
  if (type === PlatformTypes.XBOX) {
    if (arg2) {
      const intl4 = require(1212) /* getSystemLocale */.intl;
      let str2 = intl4.format(require(1212) /* getSystemLocale */.t["ynEs/Y"], {});
    } else {
      str2 = "Xbox";
      if (tmp3) {
        const intl3 = require(1212) /* getSystemLocale */.intl;
        str2 = intl3.string(require(1212) /* getSystemLocale */.t.UjA4HX);
      }
    }
  } else if (arg2) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let str = intl2.format(require(1212) /* getSystemLocale */.t.TZ17Bg, {});
  } else {
    str = "PS5";
    if (tmp3) {
      const intl = require(1212) /* getSystemLocale */.intl;
      str = intl.string(require(1212) /* getSystemLocale */.t.QCw1oW);
    }
  }
};
