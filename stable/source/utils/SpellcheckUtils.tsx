// Module ID: 5947
// Function ID: 5948
// Name: SpellcheckUtils
// Dependencies: [5, 5948, 4490, 1369, 5950, 2]
// Exports: addResultListener, getCachedMisspelling, getCorrections, isMisspelled, isSupported, replaceWithCorrection, setAppLocale, setEnabled, setLearnedWords

// Module 5947 (SpellcheckUtils)
import DiscordNativeDefault from "DiscordNative" /* 4490 */;
import PostConnectionCallbackStore from "PostConnectionCallbackStore" /* 5948 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import PlatformUtils_mod from "PlatformUtils" /* 1369 */;
import size from "module_2" /* 2 */;

let obj = function _setEnabled() {
  let value;
  obj = _asyncToGenerator(async (enabled) => {
    let c2 = 0;
    let c3 = 0;
    return (async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            } else {
              closure_1 = undefined;
              c2 = 1;
              c3 = 1;
              return { value, done: false };
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            return { value, done: true };
          } else {
            closure_1 = value;
            if (null != closure_1) {
              closure_1.enabled = enabled;
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp12) {
          c3 = 3;
          throw tmp12;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _setLearnedWords() {
  let value;
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let learnedWords;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            learnedWords = undefined;
            c2 = 1;
            c3 = 1;
            const obj4 = { value, done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          learnedWords = value;
          if (null != learnedWords) {
            learnedWords.setLearnedWords(closure_0);
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp13) {
        c3 = 3;
        throw tmp13;
      }
    }
  });
  return obj(...arguments);
};
obj = function _isMisspelled() {
  obj = _asyncToGenerator(async (arg0) => {
    let c4;
    let c5;
    let closure_3;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let misspelled = tmp;
    let flag = closure_1;
    if (closure_1 === undefined) {
      flag = false;
    }
    await "Reflect";
    misspelled = await closure_131_5;
    const isMisspelledResult = null != misspelled && misspelled.isMisspelled(closure_0, flag);
    return isMisspelledResult;
  });
  return obj(...arguments);
};
obj = function _getCorrections() {
  obj = _asyncToGenerator(async (arg0) => {
    let c5;
    let c6;
    let closure_4;
    let items;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let correctionsForMisspelling = tmp;
    let flag = closure_1;
    if (closure_1 === undefined) {
      flag = false;
    }
    let num10 = closure_2;
    if (closure_2 === undefined) {
      num10 = 5;
    }
    await "Reflect";
    correctionsForMisspelling = await closure_132_5;
    if (null == correctionsForMisspelling) {
      items = [];
    } else {
      correctionsForMisspelling = correctionsForMisspelling.getCorrectionsForMisspelling(closure_0, flag);
      items = correctionsForMisspelling.slice(0, num10);
    }
    return items;
  });
  return obj(...arguments);
};
obj = function _getCachedMisspelling() {
  obj = _asyncToGenerator(async () => {
    let c3;
    let c4;
    let closure_2;
    let corrections;
    let closure_0 = arg0;
    let cachedMisspelling2 = tmp4;
    let cachedMisspelling = tmp;
    let num11 = closure_0;
    if (closure_0 === undefined) {
      num11 = 5;
    }
    await "Reflect";
    cachedMisspelling = await closure_130_5;
    if (null == cachedMisspelling) {
      const obj7 = { misspelledWord: "", corrections: [] };
      return obj7;
    }
    cachedMisspelling2 = cachedMisspelling.getCachedMisspelling();
    obj = { misspelledWord: cachedMisspelling2.misspelledWord, corrections: corrections.slice(0, num11) };
    corrections = cachedMisspelling2.corrections;
    return obj;
  });
  return obj(...arguments);
};
obj = function _replaceWithCorrection() {
  let value;
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_1;
    let closure_0 = arg0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let tmp;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            tmp = undefined;
            c2 = 1;
            c3 = 1;
            const obj4 = { value, done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          tmp = value;
          if (null != tmp) {
            tmp.replaceMisspelling(closure_0);
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp13) {
        c3 = 3;
        throw tmp13;
      }
    }
  });
  return obj(...arguments);
};
const addPostConnectionCallback = PostConnectionCallbackStore.addPostConnectionCallback;
let PlatformUtils = PlatformUtils_mod;
PlatformUtils = PlatformUtils.isDesktop();
if (PlatformUtils) {
  const importDefaultResult = DiscordNativeDefault;
  let tmp4 = null;
  let spellCheck;
  if (importDefaultResult != null) {
    spellCheck = importDefaultResult.spellCheck;
  }
  PlatformUtils = null != spellCheck;
}
let promise = null;
if (PlatformUtils) {
  const self = this;
  const self2 = this;
  promise = new Promise((arg0) => {
    let closure_0 = arg0;
    const resolved = Promise.resolve();
    resolved.then(() => addPostConnectionCallback(() => {
      obj = closure_0(dependencyMap[4]);
      return closure_1_0(obj.install());
    }));
  });
}
let c6 = null;
if (promise != null) {
  promise.then((result) => {
    let c6 = result;
  });
}
function isSupported() {
  obj = PlatformUtils;
  let isDesktopResult = obj.isDesktop();
  if (isDesktopResult) {
    const tmp4 = DiscordNativeDefault;
    let spellCheck;
    if (tmp4 != null) {
      spellCheck = tmp4.spellCheck;
    }
    isDesktopResult = null != spellCheck;
  }
  return isDesktopResult;
}
const result = size.fileFinishedImporting("utils/SpellcheckUtils.tsx");

export { isSupported };
export const setEnabled = function setEnabled() {
  return obj(...arguments);
};
export const setLearnedWords = function setLearnedWords() {
  return obj(...arguments);
};
export const isMisspelled = function isMisspelled() {
  return obj(...arguments);
};
export const getCorrections = function getCorrections() {
  return obj(...arguments);
};
export const getCachedMisspelling = function getCachedMisspelling() {
  return obj(...arguments);
};
export const replaceWithCorrection = function replaceWithCorrection() {
  return obj(...arguments);
};
export const setAppLocale = function setAppLocale(arg0) {
  if (null != appLocale) {
    appLocale.setAppLocale(arg0);
  }
};
export const addResultListener = function addResultListener(arg0) {
  let fn;
  const tmp3 = DiscordNativeDefault;
  let spellCheck1;
  if (tmp3 != null) {
    spellCheck1 = tmp3.spellCheck;
  }
  if (null != spellCheck1) {
    const spellCheck = DiscordNativeDefault.spellCheck;
    let fn2 = spellCheck.on("spellcheck-result", arg0);
    if (fn2 == null) {
      fn2 = () => {

      };
    }
    fn = fn2;
  } else {
    fn = () => {

    };
  }
  return fn;
};
