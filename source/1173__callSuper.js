// Module ID: 1173
// Function ID: 13341
// Name: _callSuper
// Dependencies: []
// Exports: hideFeedbackButton, hideScreenshotButton, resetFeedbackButtonManager, resetFeedbackWidgetManager, resetScreenshotButtonManager, showFeedbackButton, showFeedbackWidget, showScreenshotButton

// Module 1173 (_callSuper)
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return closure_2(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
function NOOP_SET_VISIBILITY() {

}
const tmp2 = () => {
  class FeedbackManager {
    constructor() {
      tmp = closure_5(this, FeedbackManager);
      return;
    }
  }
  const arg1 = FeedbackManager;
  let obj = {
    key: "_feedbackComponentName",
    get() {
      const error = new Error("Subclasses must override feedbackComponentName");
      throw error;
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "initialize",
    value: function initialize(_setVisibility) {
      this._setVisibility = _setVisibility;
    }
  };
  items[1] = obj;
  obj = {
    key: "reset",
    value: function reset() {
      this._isVisible = false;
      this._setVisibility = closure_7;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "show",
    value: function show() {
      const self = this;
      if (this._setVisibility !== closure_7) {
        self._isVisible = true;
        self._setVisibility(true);
      } else {
        const _console = console;
        const _HermesInternal = HermesInternal;
        console.warn("[Sentry] " + self._feedbackComponentName + " requires 'Sentry.wrap(RootComponent)' to be called before 'show" + self._feedbackComponentName + "()'.");
      }
    }
  };
  items[4] = {
    key: "hide",
    value: function hide() {
      const self = this;
      if (this._setVisibility !== closure_7) {
        self._isVisible = false;
        self._setVisibility(false);
      } else {
        const _console = console;
        const _HermesInternal = HermesInternal;
        console.warn("[Sentry] " + self._feedbackComponentName + " requires 'Sentry.wrap(RootComponent)' before interacting with the widget.");
      }
    }
  };
  items[5] = {
    key: "isFormVisible",
    value: function isFormVisible() {
      return this._isVisible;
    }
  };
  return callback3(FeedbackManager, null, items);
}();
tmp2._isVisible = false;
const tmp3 = (arg0) => {
  class FeedbackWidgetManager {
    constructor() {
      tmp = closure_5(this, FeedbackWidgetManager);
      return closure_11(this, FeedbackWidgetManager, arguments);
    }
  }
  const arg1 = FeedbackWidgetManager;
  callback2(FeedbackWidgetManager, arg0);
  const items = [
    {
      key: "_feedbackComponentName",
      get() {
        return "FeedbackWidget";
      }
    }
  ];
  return callback3(FeedbackWidgetManager, null, items);
}(tmp2);
const tmp4 = (arg0) => {
  class FeedbackButtonManager {
    constructor() {
      tmp = closure_5(this, FeedbackButtonManager);
      return closure_11(this, FeedbackButtonManager, arguments);
    }
  }
  const arg1 = FeedbackButtonManager;
  callback2(FeedbackButtonManager, arg0);
  const items = [
    {
      key: "_feedbackComponentName",
      get() {
        return "FeedbackButton";
      }
    }
  ];
  return callback3(FeedbackButtonManager, null, items);
}(tmp2);
const tmp5 = (arg0) => {
  class ScreenshotButtonManager {
    constructor() {
      tmp = closure_5(this, ScreenshotButtonManager);
      return closure_11(this, ScreenshotButtonManager, arguments);
    }
  }
  const arg1 = ScreenshotButtonManager;
  callback2(ScreenshotButtonManager, arg0);
  const items = [
    {
      key: "_feedbackComponentName",
      get() {
        return "ScreenshotButton";
      }
    }
  ];
  return callback3(ScreenshotButtonManager, null, items);
}(tmp2);

export const PULL_DOWN_CLOSE_THRESHOLD = 200;
export const SLIDE_ANIMATION_DURATION = 200;
export const BACKGROUND_ANIMATION_DURATION = 200;
export const FeedbackWidgetManager = tmp3;
export const FeedbackButtonManager = tmp4;
export const ScreenshotButtonManager = tmp5;
export const showFeedbackButton = function showFeedbackButton() {
  const result = arg1(dependencyMap[5]).lazyLoadAutoInjectFeedbackButtonIntegration();
  tmp4.show();
};
export const hideFeedbackButton = function hideFeedbackButton() {
  tmp4.hide();
};
export const showFeedbackWidget = function showFeedbackWidget() {
  const result = arg1(dependencyMap[5]).lazyLoadAutoInjectFeedbackIntegration();
  tmp3.show();
};
export const showScreenshotButton = function showScreenshotButton() {
  if (obj.isWeb()) {
    const debug = tmp(tmp2[7]).debug;
    debug.warn("ScreenshotButton is not supported on Web.");
  } else {
    const result = tmp(tmp2[5]).lazyLoadAutoInjectScreenshotButtonIntegration();
    tmp5.show();
    const tmpResult = tmp(tmp2[5]);
  }
};
export const hideScreenshotButton = function hideScreenshotButton() {
  tmp5.hide();
};
export const resetFeedbackButtonManager = function resetFeedbackButtonManager() {
  tmp4.reset();
};
export const resetFeedbackWidgetManager = function resetFeedbackWidgetManager() {
  tmp3.reset();
};
export const resetScreenshotButtonManager = function resetScreenshotButtonManager() {
  tmp5.reset();
};
