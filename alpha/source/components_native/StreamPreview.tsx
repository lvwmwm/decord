// Module ID: 12038
// Function ID: 12039
// Name: StreamPreview
// Dependencies: [19, 17, 1192, 21, 5014, 575, 5080, 5717, 5021, 12039, 12040, 1113, 6980, 12041, 504, 2]
// Exports: default

// Module 12038 (StreamPreview)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import shared from "shared" /* 5021 */;
import native from "native" /* 5080 */;
import FastImageDefault from "FastImage" /* 5717 */;
import Pressables from "Pressables" /* 6980 */;
import useFetchStreamPreviewDefault from "useFetchStreamPreview" /* 12041 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let StyleSheet;
let c3;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let size;
({ View: c3, StyleSheet } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, text: obj3, fallbackImage: { width: "100%" } };
obj2 = { alignItems: "center", justifyContent: "center", paddingLeft: 20, paddingRight: 20 };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { textAlign: "center", fontSize: 14, lineHeight: 18, marginTop: 16, color: nativeDefault.colors.TEXT_MUTED };
const metroImportDefault = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class DefaultFallback extends PureComponent {
  render() {
    let obj2;
    let tmp4Result;
    let tmp6;
    const tmp = closure_7(this.context);
    const theme = this.props.theme;
    const obj = { style: tmp.wrapper, children: hasOwnProperty(tmp6, obj2) };
    obj2 = { resizeMode: "contain", style: tmp.fallbackImage, source: tmp4Result };
    tmp6 = FastImageDefault;
    const obj3 = shared;
    const tmp3 = _false;
    if (obj3.isThemeDark(theme)) {
      tmp4Result = tmp4(12039);
    } else {
      tmp4Result = tmp4(12040);
    }
    return hasOwnProperty(tmp3, obj);
  }
}
const prototype = DefaultFallback.prototype;
DefaultFallback.contextType = native.ThemeContext;
createStyles = createStyles_mod;
let obj4 = { touchable: size, imageContainer: { flex: 1, backgroundColor: nativeDefault.unsafe_rawColors.BLACK }, image: { flex: 1 } };
size = { flex: 1, width: "100%", height: "__closure", aspectRatio: true, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const createLegacyClassComponentStyles2 = createStyles.createLegacyClassComponentStyles;
({ flex: 1, backgroundColor: nativeDefault.unsafe_rawColors.BLACK });
const React4 = createLegacyClassComponentStyles2(obj4);
const PureComponent2 = react.PureComponent;
class StreamPreview extends PureComponent2 {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.state = { isImageLoaded: false, isImageErrored: false };
    applyArgumentsResult.handleLoadStart = function handleLoadStart() {
      applyArgumentsResult.setState({ isImageLoaded: false, isImageErrored: false });
    };
    applyArgumentsResult.handleLoad = function handleLoad() {
      applyArgumentsResult.setState({ isImageLoaded: true });
    };
    applyArgumentsResult.handleError = function handleError() {
      applyArgumentsResult.setState({ isImageErrored: true });
    };
    return applyArgumentsResult;
  }
  render() {
    let isFetching;
    let items;
    let items1;
    let items2;
    let obj2;
    let renderFallback;
    let theme;
    let url;
    const tmp = closure_9(this.context);
    ({ url, isFetching, renderFallback, theme } = this.props);
    const state = this.state;
    if (null != url) {
      if (!isFetching) {
        let tmp8;
        let tmp13;
        if (!state.isImageErrored) {
          if (!tmp7) {
            let renderFallbackResult;
            if (renderFallback != null) {
              renderFallbackResult = renderFallback(true, theme);
            }
            tmp8 = renderFallbackResult;
          }
          const obj = { resizeMode: "contain", style: tmp.image, source: obj2, onLoadStart: null, onLoad: null, onError: null };
          obj2 = { uri: url, cache: "force-cache" };
          ({ handleLoadStart: obj.onLoadStart, handleLoad: obj.onLoad, handleError: obj.onError } = this);
          tmp13 = hasOwnProperty(FastImageDefault, obj);
        }
        const obj3 = { accessibilityRole: "button", accessibilityLabel: tmp2, activeOpacity: 0.6, style: items, disabled: tmp6, onPress: tmp5, children: items2 };
        items = [tmp.touchable, tmp3];
        const obj4 = { style: tmp.imageContainer, children: items1 };
        items1 = [tmp8, tmp13];
        const PressableOpacity = Pressables.PressableOpacity;
        items2 = [metroRequire(_false, obj4), tmp4];
        return metroRequire(PressableOpacity, obj3);
      }
    }
    let renderFallbackResult1;
    if (renderFallback != null) {
      renderFallbackResult1 = renderFallback(isFetching, theme);
    }
    tmp8 = renderFallbackResult1;
  }
}
const prototype2 = StreamPreview.prototype;
StreamPreview.contextType = native.ThemeContext;
StreamPreview.defaultProps = {
  renderFallback: function defaultRenderFallback(arg0, theme) {
    let stringResult;
    const obj = { theme, caption: stringResult };
    const intl = intl2.intl;
    const string = intl.string;
    const t = intl2.t;
    const tmp = hasOwnProperty;
    const tmp2 = DefaultFallback;
    const tmp3 = arg0;
    if (tmp3) {
      stringResult = string(t.NQ7H8V);
    } else {
      stringResult = string(t.uQZTBV);
    }
    return tmp(tmp2, obj);
  }
};
size = size_mod;
const result = size.fileFinishedImporting("components_native/StreamPreview.tsx");

export default function ConnectedStreamPreview(stream) {
  let channelId;
  let guildId;
  let isLoading;
  let ownerId;
  let previewUrl;
  let stateFromStores;
  let theme;
  ({ guildId, channelId, ownerId } = stream.stream);
  ({ previewUrl, isLoading } = useFetchStreamPreviewDefault(guildId, channelId, ownerId));
  useFetchStreamPreviewDefault(guildId, channelId, ownerId);
  const items = [ThemeStore];
  const obj2 = { url: previewUrl, isFetching: isLoading, theme: stateFromStores };
  const obj = get_initialized;
  stateFromStores = obj.useStateFromStores(items, () => theme.theme);
  const merged = Object.assign(stream);
  return hasOwnProperty(StreamPreview, obj2);
};
