// Module ID: 9581
// Function ID: 74650
// Name: getSearchPlaceholder
// Dependencies: []
// Exports: getSearchPlaceholder

// Module 9581 (getSearchPlaceholder)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/gif_picker/GifPickerUtils.tsx");

export const getSearchPlaceholder = function getSearchPlaceholder(arg0) {
  if ("giphy" === arg0) {
    const intl3 = require(dependencyMap[0]).intl;
    return intl3.string(require(dependencyMap[0]).t.DFoK1a);
  } else if ("klipy" === arg0) {
    const intl2 = require(dependencyMap[0]).intl;
    return intl2.string(require(dependencyMap[0]).t.T1Frnm);
  } else {
    const intl = require(dependencyMap[0]).intl;
    return intl.string(require(dependencyMap[0]).t.TnYqke);
  }
};
