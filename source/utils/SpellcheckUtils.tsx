// Module ID: 5405
// Function ID: 46076
// Name: isElectronBuiltInSpellcheckerSupported
// Dependencies: []
// Exports: addResultListener, getCachedMisspelling, getCorrections, isMisspelled, isSupported, replaceWithCorrection, setAppLocale, setEnabled, setLearnedWords

// Module 5405 (isElectronBuiltInSpellcheckerSupported)
function isElectronBuiltInSpellcheckerSupported() {
  let spellCheck;
  if (null != importDefault(dependencyMap[1])) {
    spellCheck = importDefault(dependencyMap[1]).spellCheck;
  }
  return null != spellCheck;
}
function isSupported() {
  let isDesktopResult = arg1(dependencyMap[2]).isDesktop();
  if (isDesktopResult) {
    isDesktopResult = isElectronBuiltInSpellcheckerSupported();
  }
  return isDesktopResult;
}
async function _setEnabled(enabled, arg1) {
  const tmp = yield closure_4;
  if (null != tmp) {
    tmp.enabled = enabled;
  }
}
async function _setLearnedWords(arg0, arg1) {
  const obj = yield closure_4;
  if (null != obj) {
    obj.setLearnedWords(arg0);
  }
}
async function _isMisspelled(arg0, arg1) {
  const fn = function*(arg0, flag) {
    if (flag === undefined) {
      flag = false;
    }
    yield undefined;
    const obj = yield closure_4;
    let isMisspelledResult = null != obj;
    if (isMisspelledResult) {
      isMisspelledResult = obj.isMisspelled(arg0, flag);
    }
    return isMisspelledResult;
  };
  fn.next();
  return fn;
}
async function _getCorrections(arg0, arg1) {
  const fn = function*(arg0) {
    let flag = arg1;
    let num = arg2;
    if (flag === undefined) {
      flag = false;
    }
    if (num === undefined) {
      num = 5;
    }
    yield undefined;
    const obj = yield closure_4;
    if (null == obj) {
      let items = [];
    } else {
      const correctionsForMisspelling = obj.getCorrectionsForMisspelling(arg0, flag);
      items = correctionsForMisspelling.slice(0, num);
    }
    return items;
  };
  fn.next();
  return fn;
}
async function _getCachedMisspelling() {
  const fn = function*() {
    let corrections;
    let num = arg0;
    if (num === undefined) {
      num = 5;
    }
    yield undefined;
    let obj = yield closure_4;
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
  };
  fn.next();
  return fn;
}
async function _replaceWithCorrection(arg0, arg1) {
  const obj = yield closure_4;
  if (null != obj) {
    obj.replaceMisspelling(arg0);
  }
}
async function _setAppLocale(arg0, arg1) {
  const obj = yield closure_4;
  if (null != obj) {
    obj.setAppLocale(arg0);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let installResult = null;
if (isSupported()) {
  installResult = arg1(dependencyMap[3]).install();
  const obj = arg1(dependencyMap[3]);
}
const result = arg1(dependencyMap[4]).fileFinishedImporting("utils/SpellcheckUtils.tsx");

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
    const spellCheck = importDefault(dependencyMap[1]).spellCheck;
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
