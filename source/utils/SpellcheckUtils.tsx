// Module ID: 5137
// Function ID: 44523
// Name: isElectronBuiltInSpellcheckerSupported
// Dependencies: [5, 3741, 477, 5138, 2]
// Exports: addResultListener, getCachedMisspelling, getCorrections, isMisspelled, isSupported, replaceWithCorrection, setAppLocale, setEnabled, setLearnedWords

// Module 5137 (isElectronBuiltInSpellcheckerSupported)
import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
function isElectronBuiltInSpellcheckerSupported() {
  let spellCheck;
  if (null != importDefault(3741)) {
    spellCheck = importDefault(3741).spellCheck;
  }
  return null != spellCheck;
}
function isSupported() {
  let isDesktopResult = require(477) /* set */.isDesktop();
  if (isDesktopResult) {
    isDesktopResult = isElectronBuiltInSpellcheckerSupported();
  }
  return isDesktopResult;
}
async function _setEnabled(arg0, arg1) {
  const tmp = yield outer2_4;
  if (null != tmp) {
    tmp.enabled = arg0;
  }
}
async function _setLearnedWords(arg0, arg1) {
  const obj = yield outer2_4;
  if (null != obj) {
    obj.setLearnedWords(arg0);
  }
}
async function _isMisspelled(arg0, arg1) {
  let iter = (function*(arg0, flag) {
    if (flag === undefined) {
      flag = false;
    }
    yield undefined;
    const obj = yield outer2_4;
    let isMisspelledResult = null != obj;
    if (isMisspelledResult) {
      isMisspelledResult = obj.isMisspelled(arg0, flag);
    }
    return isMisspelledResult;
  })();
  iter.next();
  return iter;
}
async function _getCorrections(arg0, arg1) {
  let iter = (function*(arg0) {
    let flag = arg1;
    let num = arg2;
    if (flag === undefined) {
      flag = false;
    }
    if (num === undefined) {
      num = 5;
    }
    yield undefined;
    const obj = yield outer2_4;
    if (null == obj) {
      let items = [];
    } else {
      const correctionsForMisspelling = obj.getCorrectionsForMisspelling(arg0, flag);
      items = correctionsForMisspelling.slice(0, num);
    }
    return items;
  })();
  iter.next();
  return iter;
}
async function _getCachedMisspelling() {
  let iter = (function*() {
    let corrections;
    let num = arg0;
    if (num === undefined) {
      num = 5;
    }
    yield undefined;
    let obj = yield outer2_4;
    if (null == obj) {
      obj = { misspelledWord: "", corrections: [] };
      return obj;
    } else {
      const cachedMisspelling = obj.getCachedMisspelling();
      obj = {};
      ({ misspelledWord: obj2.misspelledWord, corrections } = cachedMisspelling);
      obj.corrections = corrections.slice(0, num);
      return obj;
    }
  })();
  iter.next();
  return iter;
}
async function _replaceWithCorrection(arg0, arg1) {
  const obj = yield outer2_4;
  if (null != obj) {
    obj.replaceMisspelling(arg0);
  }
}
async function _setAppLocale(arg0, arg1) {
  const obj = yield outer2_4;
  if (null != obj) {
    obj.setAppLocale(arg0);
  }
}
let installResult = null;
if (isSupported()) {
  installResult = require("normalizeLocale").install();
  let obj = require("normalizeLocale");
}
const result = require("set").fileFinishedImporting("utils/SpellcheckUtils.tsx");

export { isSupported };
export const setEnabled = function setEnabled() {
  return _setEnabled(...arguments);
};
export const setLearnedWords = function setLearnedWords(arg0) {
  return _setLearnedWords(...arguments);
};
export const isMisspelled = function isMisspelled(arg0, flag) {
  return _isMisspelled(...arguments);
};
export const getCorrections = function getCorrections() {
  return _getCorrections(...arguments);
};
export const getCachedMisspelling = function getCachedMisspelling() {
  return _getCachedMisspelling(...arguments);
};
export const replaceWithCorrection = function replaceWithCorrection() {
  return _replaceWithCorrection(...arguments);
};
export const setAppLocale = function setAppLocale() {
  return _setAppLocale(...arguments);
};
export const addResultListener = function addResultListener(arg0) {
  if (isElectronBuiltInSpellcheckerSupported()) {
    const spellCheck = importDefault(3741).spellCheck;
    let fn = spellCheck.on("spellcheck-result", arg0);
    if (null == fn) {
      fn = () => {

      };
    }
    return fn;
  } else {
    return () => {

    };
  }
};
