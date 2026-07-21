// Module ID: 1922
// Function ID: 21749
// Name: _setAppLocale
// Dependencies: []
// Exports: setAppLocale, subscribeToIntlLoadingSuccess, useLocaleData

// Module 1922 (_setAppLocale)
async function _setAppLocale(locale, arg1) {
  let state;
  state = state.getState();
  state.setLoadingStarted(locale);
  const items = [];
  const intl = locale(closure_2[3]).intl;
  intl.setLocale(locale);
  items.push();
  items.push(callback(async () => {
    yield callback(closure_2[4]).preloadAllIntlMessageFiles();
    const obj = callback(closure_2[4]);
    yield callback(closure_2[5]).loadAllMessagesInLocale(closure_0);
  })());
  items.push(function loadDateFnsLocale(locale) {
    return callback(...arguments);
  }(locale));
  items.push(function loadFormatJsLocale(locale) {
    return callback2(...arguments);
  }(locale));
  items.push(function setMomentLocale(locale) {
    return callback3(...arguments);
  }(locale));
  locale(closure_2[10]).default.setTags({ locale });
  items.push(Promise.resolve());
  yield Promise.all(items).catch((error) => state.setLoadingFailed(error, error));
  state.setLoadingSucceeded(locale);
}
async function _loadDateFnsLocale(arg0, arg1) {
  const state = state.getState();
  const tmp = callback(closure_2[6]).dateFnsLocales[arg0];
  if (null != tmp) {
    state.setLocaleData(yield tmp());
  } else {
    state.setLocaleData(callback2(closure_2[2]));
  }
}
async function _loadFormatJsLocale(arg0, arg1) {
  const tmp = callback(closure_2[7]).formatjsLocales[arg0];
  if (null != tmp) {
    yield tmp();
  }
}
async function _setMomentLocale(arg0, arg1) {
  let length;
  const tmp = callback(closure_2[8]).momentLocales[arg0];
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
  callback(closure_2[9]).locale(items);
}
let closure_3 = importDefault(dependencyMap[0]);
const withEqualityFn = arg1(dependencyMap[1]).createWithEqualityFn((arg0, arg1) => {
  arg1 = arg0;
  const importDefault = arg1;
  return {
    isLoading: false,
    inProgressLocale: undefined,
    error: undefined,
    localeData: importDefault(dependencyMap[2]),
    setLoadingStarted(inProgressLocale) {
      return inProgressLocale({ isLoading: true, inProgressLocale });
    },
    setLoadingSucceeded(locale) {
      if (arg1().inProgressLocale === locale) {
        const obj = { isLoading: false, inProgressLocale: undefined, error: undefined };
        locale(obj);
      }
    },
    setLoadingFailed(error, arg1) {
      if (arg1().inProgressLocale === arg1) {
        const obj = { isLoading: false, inProgressLocale: undefined, error };
        error(obj);
      }
    },
    setLocaleData(localeData) {
      localeData({ localeData });
    }
  };
});
const obj = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("intl/IntlLoaderStore.tsx");

export const useIntlLoaderStore = withEqualityFn;
export const subscribeToIntlLoadingSuccess = function subscribeToIntlLoadingSuccess(arg0) {
  const arg1 = arg0;
  return withEqualityFn.subscribe((inProgressLocale, inProgressLocale2) => {
    if (tmp) {
      inProgressLocale(inProgressLocale2.inProgressLocale);
    }
  });
};
export const setAppLocale = function setAppLocale() {
  return _setAppLocale(...arguments);
};
export const useLocaleData = function useLocaleData() {
  let tmp = withEqualityFn((localeData) => localeData.localeData);
  if (null == tmp) {
    tmp = importDefault(dependencyMap[2]);
  }
  return tmp;
};
