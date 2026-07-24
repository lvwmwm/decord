// Module ID: 12124
// Function ID: 95007
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 57, 566, 686, 2]

// Module 12124 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _slicedToArray from "_slicedToArray";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
function updateApplicationConfigs(configs) {
  let length;
  if (0 !== Object.keys(configs).length) {
    const _Object3 = Object;
    function _loop() {
      const set = new Set(dispatcher.map((config_id) => config_id.config_id));
      let found;
      if (null != obj[set]) {
        found = arr.filter((config_id) => !set.has(config_id.config_id));
      }
      if (null == found) {
        found = [];
      }
      const items = [...dispatcher];
      obj[set] = items;
    }
    const entries = Object.entries(configs);
    let num = 0;
    if (0 < entries.length) {
      do {
        let tmp = callback3;
        let tmp2 = callback3(entries[num], 2);
        let initialize = tmp2[0];
        let dispatcher = tmp2[1];
        let _loopResult = _loop();
        num = num + 1;
        length = entries.length;
      } while (num < length);
    }
    let obj = {};
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(obj);
    const _Object = Object;
    const _Object2 = Object;
    const keys = Object.keys(configs);
    const merged2 = Object.assign(Object.fromEntries(keys.map((arg0) => {
      const items = [arg0, outer1_6.SUCCESS];
      return items;
    })));
  }
}
function handleLogout() {
  let closure_8 = {};
  let closure_9 = {};
  let NOT_FETCHED = obj.NOT_FETCHED;
  let closure_11 = [];
  NOT_FETCHED = obj.NOT_FETCHED;
  let closure_13 = [];
}
let obj = { NOT_FETCHED: "NOT_FETCHED", FETCHING: "FETCHING", SUCCESS: "SUCCESS", FAILURE: "FAILURE" };
let closure_7 = [];
let closure_8 = {};
let closure_9 = {};
let NOT_FETCHED = obj.NOT_FETCHED;
let closure_11 = [];
NOT_FETCHED = obj.NOT_FETCHED;
let closure_13 = [];
let tmp2 = ((Store) => {
  class ApplicationWidgetConfigStoreClass {
    constructor() {
      self = this;
      tmp = ApplicationWidgetConfigStoreClass(this, ApplicationWidgetConfigStoreClass);
      obj = outer1_3(ApplicationWidgetConfigStoreClass);
      tmp2 = outer1_2;
      if (outer1_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ApplicationWidgetConfigStoreClass, Store);
  let obj = {
    key: "getConfig",
    value: function getConfig(arg0) {
      let first;
      if (null != outer1_8[arg0]) {
        first = tmp[0];
      }
      let tmp3;
      if (null != first) {
        tmp3 = first;
      }
      return tmp3;
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "getConfigs",
    value: function getConfigs(arg0) {
      let tmp = outer1_8[arg0];
      if (null == tmp) {
        tmp = outer1_7;
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "getFetchState",
    value: function getFetchState(arg0) {
      let NOT_FETCHED = outer1_9[arg0];
      if (null == NOT_FETCHED) {
        NOT_FETCHED = outer1_6.NOT_FETCHED;
      }
      return NOT_FETCHED;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getFeaturedFetchState",
    value: function getFeaturedFetchState() {
      return outer1_10;
    }
  };
  items[4] = {
    key: "getDeveloperFetchState",
    value: function getDeveloperFetchState() {
      return outer1_12;
    }
  };
  items[5] = {
    key: "getAllConfigsByApplication",
    value: function getAllConfigsByApplication() {
      return outer1_8;
    }
  };
  items[6] = {
    key: "getFeaturedApplicationIds",
    value: function getFeaturedApplicationIds() {
      return outer1_11;
    }
  };
  items[7] = {
    key: "getDeveloperApplicationIds",
    value: function getDeveloperApplicationIds() {
      return outer1_13;
    }
  };
  return callback(ApplicationWidgetConfigStoreClass, items);
})(require("initialize").Store);
tmp2.displayName = "ApplicationWidgetConfigStore";
obj = {
  LOGOUT: handleLogout,
  APPLICATION_WIDGET_CONFIG_DEBUG_RESET: handleLogout,
  APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START: function handleFeaturedFetchStart(arg0) {
    const FETCHING = obj.FETCHING;
  },
  APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: function handleFeaturedFetchSuccess(configs) {
    const SUCCESS = obj.SUCCESS;
    let closure_11 = Object.keys(configs.configs);
    updateApplicationConfigs(configs.configs);
  },
  APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE: function handleFeaturedFetchFailure() {
    const FAILURE = obj.FAILURE;
  },
  APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START: function handleDeveloperFetchStart() {
    const FETCHING = obj.FETCHING;
  },
  APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: function handleDeveloperFetchSuccess(configs) {
    const SUCCESS = obj.SUCCESS;
    let closure_13 = Object.keys(configs.configs);
    updateApplicationConfigs(configs.configs);
  },
  APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE: function handleDeveloperFetchFailure() {
    const FAILURE = obj.FAILURE;
  },
  APPLICATION_WIDGET_CONFIG_FETCH_START: function handleFetchStart(applicationId) {
    const obj = {};
    const merged = Object.assign(obj);
    obj[applicationId.applicationId] = obj.FETCHING;
  },
  APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: function handleFetchSuccess(configs) {
    updateApplicationConfigs({ [configs.applicationId]: configs.configs });
  },
  APPLICATION_WIDGET_CONFIG_FETCH_FAILURE: function handleFetchFailure(applicationId) {
    const obj = {};
    const merged = Object.assign(obj);
    obj[applicationId.applicationId] = obj.FAILURE;
  }
};
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/application_widget/ApplicationWidgetConfigStore.tsx");

export default tmp2;
export const FetchState = obj;
