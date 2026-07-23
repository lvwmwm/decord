// Module ID: 1922
// Function ID: 21750
// Name: _setAppLocale
// Dependencies: [5, 677, 1923, 1212, 1933, 1250, 3204, 3679, 3710, 3712, 1184, 2]
// Exports: setAppLocale, subscribeToIntlLoadingSuccess, useLocaleData

// Module 1922 (_setAppLocale)
import module_1250 from "module_1250";
import useStoreWithEqualityFn from "useStoreWithEqualityFn";

const require = arg1;
async function _setAppLocale(arg0, arg1) {
  let closure_0 = arg0;
  let state;
  state = outer2_4.getState();
  state.setLoadingStarted(arg0);
  const items = [];
  const intl = outer2_0(outer2_2[3]).intl;
  intl.setLocale(arg0);
  items.push();
  items.push(outer2_3(async () => {
    yield outer4_0(outer4_2[4]).preloadAllIntlMessageFiles();
    const obj = outer4_0(outer4_2[4]);
    yield outer4_0(outer4_2[5]).loadAllMessagesInLocale(outer1_0);
  })());
  items.push((function loadDateFnsLocale(locale) {
    return outer3_6(...arguments);
  })(arg0));
  items.push((function loadFormatJsLocale(locale) {
    return outer3_7(...arguments);
  })(arg0));
  items.push((function setMomentLocale(locale) {
    return outer3_8(...arguments);
  })(arg0));
  outer2_0(outer2_2[10]).default.setTags({ locale: arg0 });
  items.push(Promise.resolve());
  yield Promise.all(items).catch((error) => state.setLoadingFailed(error, closure_0));
  state.setLoadingSucceeded(arg0);
}
async function _loadDateFnsLocale(arg0, arg1) {
  const state = outer2_4.getState();
  const tmp = outer2_0(outer2_2[6]).dateFnsLocales[arg0];
  if (null != tmp) {
    state.setLocaleData(yield tmp());
  } else {
    state.setLocaleData(outer2_1(outer2_2[2]));
  }
}
async function _loadFormatJsLocale(arg0, arg1) {
  const tmp = outer2_0(outer2_2[7]).formatjsLocales[arg0];
  if (null != tmp) {
    yield tmp();
  }
}
async function _setMomentLocale(arg0, arg1) {
  let length;
  const tmp = outer2_0(outer2_2[8]).momentLocales[arg0];
  if (null != tmp) {
    yield tmp();
  }
  const items = [];
  let str = "nb";
  if ("no" !== arg0) {
    str = arg0;
  }
  const parts = str.split("-");
  if (parts.length > 0) {
    do {
      let arr = items.push(parts.join("-"));
      arr = parts.pop();
      length = parts.length;
    } while (length > 0);
  }
  items.push("en-US");
  outer2_0(outer2_2[9]).locale(items);
}
const withEqualityFn = useStoreWithEqualityFn.createWithEqualityFn((arg0, arg1) => {
  let closure_0 = arg0;
  const importDefault = arg1;
  return {
    isLoading: false,
    inProgressLocale: undefined,
    error: undefined,
    localeData: importDefault(1923),
    setLoadingStarted(inProgressLocale) {
      return callback({ isLoading: true, inProgressLocale });
    },
    setLoadingSucceeded(locale) {
      if (callback2().inProgressLocale === locale) {
        const obj = { isLoading: false, inProgressLocale: undefined, error: undefined };
        callback(obj);
      }
    },
    setLoadingFailed(error, closure_0) {
      if (callback2().inProgressLocale === closure_0) {
        const obj = { isLoading: false, inProgressLocale: undefined, error };
        callback(obj);
      }
    },
    setLocaleData(localeData) {
      callback({ localeData });
    }
  };
});
const result = require("module_1923").fileFinishedImporting("intl/IntlLoaderStore.tsx");

export const useIntlLoaderStore = withEqualityFn;
export const subscribeToIntlLoadingSuccess = function subscribeToIntlLoadingSuccess(arg0) {
  let closure_0 = arg0;
  return withEqualityFn.subscribe((inProgressLocale, inProgressLocale2) => {
    if (tmp) {
      callback(inProgressLocale2.inProgressLocale);
    }
  });
};
export const setAppLocale = function setAppLocale() {
  return _setAppLocale(...arguments);
};
export const useLocaleData = function useLocaleData() {
  let tmp = withEqualityFn((localeData) => localeData.localeData);
  if (null == tmp) {
    tmp = importDefault(1923);
  }
  return tmp;
};
