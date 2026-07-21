// Module ID: 13371
// Function ID: 101641
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13371 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function MaybeClearBuildOverride() {
  function _clearOverride() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    const _clearOverride = obj;
    return obj(...arguments);
  }
  const tmp = callback4(importAllResult.useState(false), 2);
  const callback = tmp[1];
  let obj = callback(dependencyMap[12]);
  const items = [closure_13];
  if (null == obj.useStateFromStores(items, () => {
    const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
    let id;
    if (null != overrides) {
      if (null != overrides[closure_0(undefined, closure_2[13]).DEVICE_FIELD]) {
        id = tmp4.id;
      }
    }
    return id;
  })) {
    return null;
  } else {
    obj = { variant: "secondary", loading: tmp[0] };
    const intl = callback(dependencyMap[15]).intl;
    obj.text = intl.string(callback(dependencyMap[15]).t./Nz9rY);
    obj.onPress = function clearOverride() {
      return _clearOverride(...arguments);
    };
    return callback5(callback(dependencyMap[14]).Button, obj);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const importAllResult = importAll(dependencyMap[7]);
({ NativeModules: closure_11, View: closure_12 } = arg1(dependencyMap[8]));
let closure_13 = importDefault(dependencyMap[9]);
const tmp3 = arg1(dependencyMap[8]);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[10]));
const tmp4 = arg1(dependencyMap[10]);
let closure_16 = arg1(dependencyMap[11]).createLegacyClassComponentStyles({ buttons: {}, debugLogsContainer: { sl: false, so: false, sq: false, screenShareQualityResolution: false, getFrequentlyUsedReactionEmojisWithoutFetchingLatest: false, GUILD_TOP_READ_CHANNELS: false, FILE_UPLOAD_POWERUP_ROLLBACK_MODAL: false }, error: { "Null": null, "Null": "absolute" }, text: { textAlign: "center" } });
const tmp5 = (PureComponent) => {
  class ErrorBoundary {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, ErrorBoundary);
      items1 = [...items];
      obj = closure_6(ErrorBoundary);
      tmp2 = closure_5;
      if (closure_17()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.state = { message: "o", test: "o" };
      tmp2Result.discordErrorsSet = false;
      return tmp2Result;
    }
  }
  const arg1 = ErrorBoundary;
  callback3(ErrorBoundary, PureComponent);
  let obj = {
    key: "componentDidCatch",
    value: function componentDidCatch(error, extra) {
      this.triggerSoftCrash(error, extra);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "triggerSoftCrash",
    value: function triggerSoftCrash(error, extra) {
      let obj = { error, info: extra };
      this.setState(obj);
      obj = { extra };
      callback(closure_2[16]).captureCrash(error, obj);
      const obj2 = callback(closure_2[16]);
      callback(closure_2[17]).dispatch({ 0: "TreehouseIcon", 9223372036854775807: "png" });
    }
  };
  items[1] = obj;
  obj = {
    key: "handleReload",
    value: function handleReload() {
      const BundleUpdaterManager = BundleUpdaterManager.BundleUpdaterManager;
      BundleUpdaterManager.reload();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const ErrorBoundary = this;
      if (null == window.DiscordErrors) {
        const _window = window;
        const obj = {
          softCrash(error) {
              self.triggerSoftCrash(error);
            }
        };
        window.DiscordErrors = obj;
        tmp.discordErrorsSet = true;
      }
    }
  };
  items[4] = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.discordErrorsSet) {
        const _window = window;
        window.DiscordErrors = null;
        tmp.discordErrorsSet = false;
      }
    }
  };
  items[5] = {
    key: "render",
    value: function render() {
      const self = this;
      const tmp = callback6(this.context);
      const error = this.state.error;
      if (null !== error) {
        let obj = { Illustration: ErrorBoundary(closure_2[19]).AppCrash };
        const intl = ErrorBoundary(closure_2[15]).intl;
        obj.title = intl.string(ErrorBoundary(closure_2[15]).t.tx8CkI);
        const intl2 = ErrorBoundary(closure_2[15]).intl;
        obj.body = intl2.string(ErrorBoundary(closure_2[15]).t.CvQlAH);
        ({ text: obj.titleStyle, text: obj.bodyStyle } = tmp);
        obj = { "Null": "<string:1178599425>", "Null": "<string:3295084545>", "Null": "<string:1689649153>", style: tmp.error };
        let message;
        if (null != error) {
          message = error.message;
        }
        if (null == message) {
          let name;
          if (null != error) {
            name = error.name;
          }
          message = name;
        }
        let str = "Unknown Error";
        if (null != message) {
          str = message;
        }
        obj.children = str;
        const items = [callback4(ErrorBoundary(closure_2[20]).Text, obj), , ];
        obj = { style: tmp.buttons };
        const items1 = [callback4(closure_18, {}), ];
        const obj1 = {};
        const intl3 = ErrorBoundary(closure_2[15]).intl;
        obj1.text = intl3.string(ErrorBoundary(closure_2[15]).t.4n8OJn);
        obj1.onPress = self.handleReload;
        items1[1] = callback4(ErrorBoundary(closure_2[14]).Button, obj1);
        obj.children = items1;
        items[1] = callback5(closure_12, obj);
        items[2] = null;
        obj.children = items;
        let children = callback5(ErrorBoundary(closure_2[18]).EmptyState, obj);
        const tmp2 = callback5;
        const tmp5 = callback4;
      } else {
        children = self.props.children;
      }
      return children;
    }
  };
  return callback2(ErrorBoundary, items);
}(importAllResult.PureComponent);
tmp5.contextType = arg1(dependencyMap[21]).ThemeContext;
const obj = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("components_native/ErrorBoundary.tsx");

export default tmp5;
