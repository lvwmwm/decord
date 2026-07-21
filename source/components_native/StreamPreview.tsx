// Module ID: 10775
// Function ID: 83707
// Name: _callSuper
// Dependencies: [0, 0, 0, 0, 0, 4294967295, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 10775 (_callSuper)
import closure_3 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import closure_5 from "__exportStarResult1";
import closure_6 from "__exportStarResult1";
import closure_7 from "__exportStarResult1";
import closure_10 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

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
  return closure_5(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
const importAllResult = importAll(dependencyMap[5]);
const tmp3 = arg1(dependencyMap[6]);
({ Image: closure_8, View: closure_9 } = tmp3);
({ jsx: closure_11, jsxs: closure_12 } = __exportStarResult1);
__exportStarResult1 = {};
__exportStarResult1 = {};
const merged = Object.assign(tmp3.StyleSheet.absoluteFillObject);
__exportStarResult1["alignItems"] = "center";
__exportStarResult1["justifyContent"] = "center";
__exportStarResult1["paddingLeft"] = 20;
__exportStarResult1["paddingRight"] = 20;
__exportStarResult1.wrapper = __exportStarResult1;
__exportStarResult1.text = { color: require("__exportStarResult1").colors.TEXT_MUTED };
__exportStarResult1.fallbackImage = { width: "100%" };
__exportStarResult1 = __exportStarResult1.createLegacyClassComponentStyles(__exportStarResult1);
const tmp6 = (PureComponent) => {
  class DefaultFallback {
    constructor() {
      tmp = closure_3(this, DefaultFallback);
      return closure_17(this, DefaultFallback, arguments);
    }
  }
  const arg1 = DefaultFallback;
  callback3(DefaultFallback, PureComponent);
  const items = [
    {
      key: "render",
      value() {
        const tmp = callback2(this.context);
        let obj = { style: tmp.wrapper };
        obj = { resizeMode: "contain", style: tmp.fallbackImage };
        if (obj3.isThemeDark(this.props.theme)) {
          let tmp5Result = tmp5(tmp6[12]);
        } else {
          tmp5Result = tmp5(tmp6[13]);
        }
        obj.source = tmp5Result;
        obj.children = closure_11(closure_8, obj);
        return closure_11(closure_9, obj);
      }
    }
  ];
  return callback(DefaultFallback, items);
}(importAllResult.PureComponent);
tmp6.contextType = require("__exportStarResult1").ThemeContext;
const obj2 = {};
const obj3 = { 9223372036854775807: "Array", 9223372036854775807: "Layouts", -9223372036854775808: "r", 9223372036854775807: "construct", height: undefined, backgroundColor: require("__exportStarResult1").colors.BACKGROUND_BASE_LOWEST };
obj2.touchable = obj3;
__exportStarResult1 = { flex: 1, backgroundColor: require("__exportStarResult1").unsafe_rawColors.BLACK };
obj2.imageContainer = __exportStarResult1;
obj2.image = { flex: 1 };
let closure_15 = __exportStarResult1.createLegacyClassComponentStyles(obj2);
const tmp7 = (PureComponent) => {
  class StreamPreview {
    constructor(arg0) {
      items = [...arguments];
      tmp = closure_3(this, StreamPreview);
      items1 = [...items];
      tmp2 = closure_17(this, StreamPreview, items1);
      StreamPreview = tmp2;
      tmp2.state = { "Bool(false)": null, "Bool(false)": null };
      tmp2.handleLoadStart = () => {
        tmp2.setState({ "Bool(false)": null, "Bool(false)": null });
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
  const arg1 = StreamPreview;
  callback3(StreamPreview, PureComponent);
  const items = [
    {
      key: "render",
      value() {
        let isFetching;
        let renderFallback;
        let theme;
        let url;
        const tmp = callback4(this.context);
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
              const tmp12 = callback2(closure_8, obj);
            }
            obj = { height: "absolute", right: "100%", category: 0, accessibilityLabel: tmp2 };
            const items = [tmp.touchable, tmp3];
            obj.style = items;
            obj.disabled = tmp6;
            obj.onPress = tmp5;
            const obj1 = { style: tmp.imageContainer };
            const items1 = [tmp8, tmp12];
            obj1.children = items1;
            const items2 = [callback3(closure_9, obj1), tmp4];
            obj.children = items2;
            return callback3(StreamPreview(closure_2[16]).PressableOpacity, obj);
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
}(importAllResult.PureComponent);
tmp7.contextType = require("__exportStarResult1").ThemeContext;
tmp7.defaultProps = {
  renderFallback: function defaultRenderFallback(arg0, theme) {
    const obj = { theme };
    const intl = theme(dependencyMap[15]).intl;
    const string = intl.string;
    const t = theme(dependencyMap[15]).t;
    if (arg0) {
      let stringResult = string(t.NQ7H8V);
    } else {
      stringResult = string(t.uQZTBV);
    }
    obj.caption = stringResult;
    return closure_11(tmp6, obj);
  }
};
const result = __exportStarResult1.fileFinishedImporting("components_native/StreamPreview.tsx");

export default function ConnectedStreamPreview(stream) {
  let channelId;
  let guildId;
  let isLoading;
  let ownerId;
  let previewUrl;
  ({ guildId, channelId, ownerId } = stream.stream);
  ({ previewUrl, isLoading } = importDefault(dependencyMap[17])(guildId, channelId, ownerId));
  let obj = arg1(dependencyMap[18]);
  const items = [closure_10];
  obj = {};
  const stateFromStores = obj.useStateFromStores(items, () => theme.theme);
  const merged = Object.assign(stream);
  obj["url"] = previewUrl;
  obj["isFetching"] = isLoading;
  obj["theme"] = stateFromStores;
  return callback4(tmp7, obj);
};
