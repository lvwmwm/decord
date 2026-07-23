// Module ID: 9588
// Function ID: 74691
// Name: getSearchPlaceholder
// Dependencies: [1212, 2]
// Exports: getSearchPlaceholder

// Module 9588 (getSearchPlaceholder)
const result = require("set").fileFinishedImporting("modules/gif_picker/GifPickerUtils.tsx");

export const getSearchPlaceholder = function getSearchPlaceholder(arg0) {
  if ("giphy" === arg0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.DFoK1a);
  } else if ("klipy" === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.T1Frnm);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.TnYqke);
  }
};
