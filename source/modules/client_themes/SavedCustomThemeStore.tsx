// Module ID: 4062
// Function ID: 33833
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4062 (_isNativeReflectConstruct)
let PROTO_THEME_MAP_WEB_REFRESH;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function validateSavedTheme(colors) {
  let tmp3 = tmp2;
  if (colors.colors.length > 0) {
    tmp3 = "number" === typeof colors.gradient_angle;
  }
  let tmp5 = tmp3;
  if (tmp3) {
    tmp5 = "number" === typeof colors.base_mix;
  }
  let tmp6 = tmp5;
  if (tmp5) {
    tmp6 = null != tmp;
  }
  return tmp6;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
({ PROTO_THEME_MAP_WEB_REFRESH, PROTO_THEME_MAP_MOBILE: closure_7 } = arg1(dependencyMap[5]));
let obj = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", IS_FETCHING: 1, [1]: "IS_FETCHING", HAS_FETCHED: 2, [2]: "HAS_FETCHED", ERROR: 3, [3]: "ERROR" };
let closure_9 = [];
const NOT_FETCHED = obj.NOT_FETCHED;
let tmp3 = (PersistedStore) => {
  class SavedCustomThemeStore {
    constructor() {
      self = this;
      tmp = closure_2(this, SavedCustomThemeStore);
      obj = closure_5(SavedCustomThemeStore);
      tmp2 = closure_4;
      if (closure_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = SavedCustomThemeStore;
  callback2(SavedCustomThemeStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(savedCustomThemes) {
      if (null != savedCustomThemes) {
        savedCustomThemes = savedCustomThemes.savedCustomThemes;
      }
      const NOT_FETCHED = constants.NOT_FETCHED;
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "getState",
    value() {
      return { savedCustomThemes: null != closure_9 ? closure_9 : [] };
    }
  };
  items[1] = obj;
  obj = {
    key: "getSavedCustomTheme",
    value() {
      let length;
      if (null != closure_9) {
        length = closure_9.length;
      }
      let first = null;
      if (length > 0) {
        first = null;
        if (closure_9[0].colors.length > 0) {
          first = closure_9[0];
        }
      }
      return first;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getFetchState",
    value() {
      return closure_10;
    }
  };
  items[4] = {
    key: "hasSavedCustomThemes",
    value() {
      let length;
      if (null != closure_9) {
        length = closure_9.length;
      }
      return length > 0;
    }
  };
  items[5] = {
    key: "isFetching",
    value() {
      return closure_10 === constants.IS_FETCHING;
    }
  };
  items[6] = {
    key: "hasFetched",
    value() {
      return closure_10 === constants.HAS_FETCHED;
    }
  };
  items[7] = {
    key: "hasError",
    value() {
      return closure_10 === constants.ERROR;
    }
  };
  return callback(SavedCustomThemeStore, items);
}(importDefault(dependencyMap[7]).PersistedStore);
tmp3.displayName = "SavedCustomThemeStore";
tmp3.persistKey = "SavedCustomThemeStore";
obj = {
  SAVED_CUSTOM_THEMES_FETCH_START: function handleCustomThemesFetchStart() {
    const NOT_FETCHED = obj.IS_FETCHING;
  },
  SAVED_CUSTOM_THEMES_FETCH_SUCCESS: function handleCustomThemesFetchSuccess(themes) {
    themes = themes.themes;
    const NOT_FETCHED = obj.HAS_FETCHED;
    const found = themes.filter(validateSavedTheme);
    let closure_9 = found.map((colors) => ({ colors: colors.colors, gradient_angle: colors.gradient_angle, base_mix: colors.base_mix, base_theme: closure_7[colors.base_theme] }));
  },
  SAVED_CUSTOM_THEMES_FETCH_FAILURE: function handleCustomThemesFetchFailure(error) {
    const NOT_FETCHED = obj.ERROR;
    const obj = importDefault(dependencyMap[6]);
    obj.captureException(error.error, { tags: { app_context: "SavedCustomThemeStore" } });
  }
};
tmp3 = new tmp3(importDefault(dependencyMap[8]), obj);
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/client_themes/SavedCustomThemeStore.tsx");

export default tmp3;
export const FetchState = obj;
