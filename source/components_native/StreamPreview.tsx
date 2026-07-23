// Module ID: 10786
// Function ID: 83780
// Name: _callSuper
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 1278, 33, 4130, 689, 3976, 10787, 10788, 3842, 1212, 4660, 10789, 566, 2]
// Exports: default

// Module 10786 (_callSuper)
import getActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import getSystemLocale from "getSystemLocale";
import useFetchStreamPreview from "useFetchStreamPreview";
import initialize from "initialize";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_10 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_8;
let closure_9;
const require = arg1;
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return getSystemLocale(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ Image: closure_8, View: closure_9 } = get_ActivityIndicator);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = {};
let merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["alignItems"] = "center";
_createForOfIteratorHelperLoose["justifyContent"] = "center";
_createForOfIteratorHelperLoose["paddingLeft"] = 20;
_createForOfIteratorHelperLoose["paddingRight"] = 20;
_createForOfIteratorHelperLoose.wrapper = _createForOfIteratorHelperLoose;
let obj1 = { textAlign: "center", fontSize: 14, lineHeight: 18, marginTop: 16, color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
_createForOfIteratorHelperLoose.text = obj1;
_createForOfIteratorHelperLoose.fallbackImage = { width: "100%" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
const tmp6 = ((PureComponent) => {
  class DefaultFallback {
    constructor() {
      tmp = outer1_3(this, DefaultFallback);
      return outer1_17(this, DefaultFallback, arguments);
    }
  }
  callback3(DefaultFallback, PureComponent);
  const items = [
    {
      key: "render",
      value() {
        const tmp = outer1_13(this.context);
        let obj = { style: tmp.wrapper };
        obj = { resizeMode: "contain", style: tmp.fallbackImage };
        if (obj3.isThemeDark(this.props.theme)) {
          let tmp5Result = tmp5(tmp6[12]);
        } else {
          tmp5Result = tmp5(tmp6[13]);
        }
        obj.source = tmp5Result;
        obj.children = outer1_11(outer1_8, obj);
        return outer1_11(outer1_9, obj);
      }
    }
  ];
  return callback(DefaultFallback, items);
})(importAllResult.PureComponent);
let closure_14 = tmp6;
tmp6.contextType = require("ManaContext").ThemeContext;
const obj2 = {};
const obj3 = { flex: 1, width: "100%", height: undefined, aspectRatio: 1.7777777777777777, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
obj2.touchable = obj3;
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK };
obj2.imageContainer = _createForOfIteratorHelperLoose;
obj2.image = { flex: 1 };
let closure_15 = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(obj2);
const tmp7 = ((PureComponent) => {
  class StreamPreview {
    constructor(arg0) {
      items = [...arguments];
      tmp = outer1_3(this, StreamPreview);
      items1 = [...items];
      tmp2 = outer1_17(this, StreamPreview, items1);
      StreamPreview = tmp2;
      tmp2.state = { isImageLoaded: false, isImageErrored: false };
      tmp2.handleLoadStart = () => {
        tmp2.setState({ isImageLoaded: false, isImageErrored: false });
      };
      tmp2.handleLoad = () => {
        tmp2.setState({ isImageLoaded: true });
      };
      tmp2.handleError = () => {
        tmp2.setState({ isImageErrored: true });
      };
      return tmp2;
    }
  }
  callback3(StreamPreview, PureComponent);
  let items = [
    {
      key: "render",
      value() {
        let isFetching;
        let renderFallback;
        let theme;
        let url;
        const tmp = outer1_15(this.context);
        ({ url, isFetching, renderFallback, theme } = this.props);
        if (null != url) {
          if (!isFetching) {
            if (!this.state.isImageErrored) {
              if (!tmp7) {
                let renderFallbackResult;
                if (null != renderFallback) {
                  renderFallbackResult = renderFallback(true, theme);
                }
                let tmp8 = renderFallbackResult;
              }
              let obj = { resizeMode: "contain", style: tmp.image };
              obj = { uri: url, cache: "force-cache" };
              obj.source = obj;
              ({ handleLoadStart: obj.onLoadStart, handleLoad: obj.onLoad, handleError: obj.onError } = this);
              const tmp12 = outer1_11(outer1_8, obj);
            }
            obj = { accessibilityRole: "button", accessibilityLabel: tmp2, activeOpacity: 0.6 };
            const items = [tmp.touchable, tmp3];
            obj.style = items;
            obj.disabled = tmp6;
            obj.onPress = tmp5;
            const obj1 = { style: tmp.imageContainer };
            const items1 = [tmp8, tmp12];
            obj1.children = items1;
            const items2 = [outer1_12(outer1_9, obj1), tmp4];
            obj.children = items2;
            return outer1_12(StreamPreview(outer1_2[16]).PressableOpacity, obj);
          }
        }
        let renderFallbackResult1;
        if (null != renderFallback) {
          renderFallbackResult1 = renderFallback(isFetching, theme);
        }
        tmp8 = renderFallbackResult1;
      }
    }
  ];
  return callback(StreamPreview, items);
})(importAllResult.PureComponent);
let closure_16 = tmp7;
tmp7.contextType = require("ManaContext").ThemeContext;
tmp7.defaultProps = {
  renderFallback: function defaultRenderFallback(arg0, theme) {
    const obj = { theme };
    const intl = require(1212) /* getSystemLocale */.intl;
    const string = intl.string;
    const t = require(1212) /* getSystemLocale */.t;
    if (arg0) {
      let stringResult = string(t.NQ7H8V);
    } else {
      stringResult = string(t.uQZTBV);
    }
    obj.caption = stringResult;
    return closure_11(closure_14, obj);
  }
};
let result = require("_possibleConstructorReturn").fileFinishedImporting("components_native/StreamPreview.tsx");

export default function ConnectedStreamPreview(stream) {
  let channelId;
  let guildId;
  let isLoading;
  let ownerId;
  let previewUrl;
  ({ guildId, channelId, ownerId } = stream.stream);
  ({ previewUrl, isLoading } = importDefault(10789)(guildId, channelId, ownerId));
  let obj = require(566) /* initialize */;
  const items = [closure_10];
  obj = {};
  const stateFromStores = obj.useStateFromStores(items, () => outer1_10.theme);
  const merged = Object.assign(stream);
  obj["url"] = previewUrl;
  obj["isFetching"] = isLoading;
  obj["theme"] = stateFromStores;
  return callback4(closure_16, obj);
};
