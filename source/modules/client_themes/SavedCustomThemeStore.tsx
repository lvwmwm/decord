// Module ID: 4064
// Function ID: 33850
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1281, 1184, 566, 686, 2]

// Module 4064 (_isNativeReflectConstruct)
import isNonEmptyString from "isNonEmptyString";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import SystemThemeState from "SystemThemeState";

let PROTO_THEME_MAP_WEB_REFRESH;
let closure_7;
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
({ PROTO_THEME_MAP_WEB_REFRESH, PROTO_THEME_MAP_MOBILE: closure_7 } = SystemThemeState);
let obj = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", IS_FETCHING: 1, [1]: "IS_FETCHING", HAS_FETCHED: 2, [2]: "HAS_FETCHED", ERROR: 3, [3]: "ERROR" };
let closure_9 = [];
const NOT_FETCHED = obj.NOT_FETCHED;
let tmp3 = ((PersistedStore) => {
  class SavedCustomThemeStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, SavedCustomThemeStore);
      obj = outer1_5(SavedCustomThemeStore);
      tmp2 = outer1_4;
      if (outer1_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(SavedCustomThemeStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(savedCustomThemes) {
      if (null != savedCustomThemes) {
        const outer1_9 = savedCustomThemes.savedCustomThemes;
      }
      const outer1_10 = outer1_8.NOT_FETCHED;
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "getState",
    value() {
      return { savedCustomThemes: null != outer1_9 ? outer1_9 : [] };
    }
  };
  items[1] = obj;
  obj = {
    key: "getSavedCustomTheme",
    value() {
      let length;
      if (null != outer1_9) {
        length = outer1_9.length;
      }
      let first = null;
      if (length > 0) {
        first = null;
        if (outer1_9[0].colors.length > 0) {
          first = outer1_9[0];
        }
      }
      return first;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getFetchState",
    value() {
      return outer1_10;
    }
  };
  items[4] = {
    key: "hasSavedCustomThemes",
    value() {
      let length;
      if (null != outer1_9) {
        length = outer1_9.length;
      }
      return length > 0;
    }
  };
  items[5] = {
    key: "isFetching",
    value() {
      return outer1_10 === outer1_8.IS_FETCHING;
    }
  };
  items[6] = {
    key: "hasFetched",
    value() {
      return outer1_10 === outer1_8.HAS_FETCHED;
    }
  };
  items[7] = {
    key: "hasError",
    value() {
      return outer1_10 === outer1_8.ERROR;
    }
  };
  return callback(SavedCustomThemeStore, items);
})(require("initialize").PersistedStore);
tmp3.displayName = "SavedCustomThemeStore";
tmp3.persistKey = "SavedCustomThemeStore";
obj = {
  SAVED_CUSTOM_THEMES_FETCH_START: function handleCustomThemesFetchStart() {
    const IS_FETCHING = obj.IS_FETCHING;
  },
  SAVED_CUSTOM_THEMES_FETCH_SUCCESS: function handleCustomThemesFetchSuccess(themes) {
    themes = themes.themes;
    const HAS_FETCHED = obj.HAS_FETCHED;
    const found = themes.filter(validateSavedTheme);
    let closure_9 = found.map((colors) => ({ colors: colors.colors, gradient_angle: colors.gradient_angle, base_mix: colors.base_mix, base_theme: outer1_7[colors.base_theme] }));
  },
  SAVED_CUSTOM_THEMES_FETCH_FAILURE: function handleCustomThemesFetchFailure(error) {
    const ERROR = obj.ERROR;
    obj = importDefault(1184);
    obj.captureException(error.error, { tags: { app_context: "SavedCustomThemeStore" } });
  }
};
tmp3 = new tmp3(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/client_themes/SavedCustomThemeStore.tsx");

export default tmp3;
export const FetchState = obj;
