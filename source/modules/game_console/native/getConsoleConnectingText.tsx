// Module ID: 15719
// Function ID: 120154
// Name: getConsoleConnectingText
// Dependencies: []
// Exports: getConsoleConnectingText

// Module 15719 (getConsoleConnectingText)
const PlatformTypes = require(dependencyMap[0]).PlatformTypes;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/game_console/native/getConsoleConnectingText.tsx");

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
      const intl4 = require(dependencyMap[1]).intl;
      let str2 = intl4.format(require(dependencyMap[1]).t.ynEs/Y, {});
    } else {
      str2 = "Xbox";
      if (tmp3) {
        const intl3 = require(dependencyMap[1]).intl;
        str2 = intl3.string(require(dependencyMap[1]).t.UjA4HX);
      }
    }
  } else if (arg2) {
    const intl2 = require(dependencyMap[1]).intl;
    let str = intl2.format(require(dependencyMap[1]).t.TZ17Bg, {});
  } else {
    str = "PS5";
    if (tmp3) {
      const intl = require(dependencyMap[1]).intl;
      str = intl.string(require(dependencyMap[1]).t.QCw1oW);
    }
  }
};
