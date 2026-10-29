// Module ID: 14713
// Function ID: 14714
// Name: MediaModalWebEmbed
// Dependencies: [109, 32, 19, 21, 14714, 14717, 558, 576, 8828, 1383, 2]

// Module 14713 (MediaModalWebEmbed)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import URLUtilsDefault from "URLUtils" /* 1383 */;
import MediaModalWebViewBase from "MediaModalWebViewBase" /* 8828 */;
import escapeDefault from "escape" /* 14714 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const MediaModalWebViewBaseDefault = MediaModalWebViewBase;
let importDefault;

let tmp;
const EmbedIFrameConfig = tmp(14717);
let closure_3 = ["visible", "source", "provider"];
const jsx = Fragment.jsx;
let closure_8 = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function WebEmbed(arg0) {
  let onError;
  let onLoad;
  let onLoadStart;
  let onToggleOverlay;
  let src;
  let style;
  let tmp5;
  let tmp6;
  const obj = onLoad(576);
  const cResult = obj.c(15);
  const tmp = onLoad;
  ({ src, style, onError, onLoad } = arg0);
  ({ onLoadStart, onToggleOverlay } = arg0);
  [tmp5, importDefault] = react.useState(onLoad(8828).PlayerState.UNREADY);
  _slicedToArray(react.useState(onLoad(8828).PlayerState.UNREADY), 2);
  if (cResult[0] !== onLoad) {
    const fn = function t() {
      importDefault(MediaModalWebViewBase.PlayerState.PLAYING);
      if (onLoad != null) {
        onLoad();
      }
    };
    cResult[0] = onLoad;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {

      }
    }
    cResult[2] = M;
  } else {
    class M {
      constructor() {

      }
    }
  }
  if (cResult[3] !== src) {
    class M {
      constructor() {

      }
    }
    const _HermesInternal = HermesInternal;
    const tmp9 = escapeDefault(src);
    const combined = "\n<html>\n  <head>\n    <meta name=\"viewport\" content=\"initial-scale=1\">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        background-color: #000;\n      }\n      iframe {\n        width: 100%;\n        height: 100%;\n        border: 0;\n      }\n    </style>\n  </head>\n  <body>\n    <iframe src=\"" + tmp9 + "\" allow=\"autoplay\" sandbox=\"" + tmp(14717).EMBED_IFRAME_SANDBOX + "\" scrolling=\"no\"></iframe>\n  </body>\n</html>\n";
    cResult[3] = src;
    cResult[4] = combined;
  } else {
    class M {
      constructor() {

      }
    }
  }
  if (cResult[5] !== tmp8) {
    class M {
      constructor() {

      }
    }
    tmp13[0] = tmp8;
    tmp13[1] = baseURL;
    cResult[5] = tmp8;
    cResult[6] = tmp13;
  } else {
    class M {
      constructor() {

      }
    }
  }
  if (cResult[7] === tmp6) {
    class M {
      constructor() {

      }
    }
  }
  cResult[7] = tmp6;
  cResult[8] = onError;
  cResult[9] = onLoadStart;
  cResult[10] = onToggleOverlay;
  cResult[11] = tmp5;
  cResult[12] = style;
  cResult[13] = tmp12;
  cResult[14] = jsx(MediaModalWebViewBaseDefault, { style, source: tmp12, baseURL, playerState: tmp5, onDataReceived: tmp7, onToggleOverlay, onError, onLoad: tmp6, onLoadStart });
  jsx(MediaModalWebViewBaseDefault, { style, source: tmp12, baseURL, playerState: tmp5, onDataReceived: tmp7, onToggleOverlay, onError, onLoad: tmp6, onLoadStart });
}) : (function WebEmbed(onLoad) {
  let closure_1;
  let first;
  let onError;
  let onLoadStart;
  let onToggleOverlay;
  let src;
  let style;
  let tmp6;
  onLoad = onLoad.onLoad;
  importDefault = undefined;
  ({ src, style, onError, onLoadStart, onToggleOverlay } = onLoad);
  [first, importDefault] = react.useState(onLoad(8828).PlayerState.UNREADY);
  const items = [onLoad];
  const callback = react.useCallback(() => {
    closure_1(MediaModalWebViewBase.PlayerState.PLAYING);
    if (onLoad != null) {
      onLoad();
    }
  }, items);
  const callback1 = react.useCallback(() => {

  }, []);
  const obj2 = { html: "\n<html>\n  <head>\n    <meta name=\"viewport\" content=\"initial-scale=1\">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        background-color: #000;\n      }\n      iframe {\n        width: 100%;\n        height: 100%;\n        border: 0;\n      }\n    </style>\n  </head>\n  <body>\n    <iframe src=\"" + tmp6 + "\" allow=\"autoplay\" sandbox=\"" + onLoad(14717).EMBED_IFRAME_SANDBOX + "\" scrolling=\"no\"></iframe>\n  </body>\n</html>\n", baseUrl: baseURL };
  MediaModalWebViewBaseDefault;
  tmp6 = escapeDefault(src);
  return <tmp5 style={style} source={obj2} baseURL={baseURL} playerState={first} onDataReceived={callback1} onToggleOverlay={onToggleOverlay} onError={onError} onLoad={callback} onLoadStart={onLoadStart} />;
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MediaModalWebEmbed(arg0) {
  let provider;
  let source;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let visible;
  const obj = react2;
  const cResult = obj.c(15);
  if (cResult[0] !== arg0) {
    ({ visible, source, provider } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = tmp10;
    cResult[2] = provider;
    cResult[3] = source;
    cResult[4] = visible;
    tmp7 = visible;
    tmp6 = source;
    tmp5 = provider;
    tmp4 = tmp10;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
  }
  if (cResult[5] === tmp5) {
    if (cResult[6] === tmp6.uri) {
      let tmp11;
      let tmp12;
      let tmp13;
      if (cResult[7] === tmp7) {
        tmp11 = cResult[8];
        tmp12 = cResult[9];
        tmp13 = cResult[10];
      }
      const _Symbol = Symbol;
      if (tmp13 === Symbol.for("react.early_return_sentinel")) {
        if (cResult[11] === tmp11) {
          if (cResult[12] === tmp4) {
            let tmp20;
            if (cResult[13] === tmp12) {
              tmp20 = cResult[14];
            }
            tmp13 = tmp20;
          }
        }
        const merged = Object.assign(tmp4);
        const tmp25 = <tmp11 src={tmp12} />;
        cResult[11] = tmp11;
        cResult[12] = tmp4;
        cResult[13] = tmp12;
        cResult[14] = tmp25;
        tmp20 = tmp25;
      }
      return tmp13;
    }
  }
  const forResult = Symbol.for("react.early_return_sentinel");
  const toURLSafe = URLUtilsDefault.toURLSafe;
  URLUtilsDefault;
  const tmpResult = EmbedIFrameConfig;
  const str = toURLSafe(tmpResult.formatProviderSrc(tmp6.uri, tmp5, { autoMute: false }));
  let tmp16 = null;
  let str1;
  let tmp18;
  if (null != str) {
    tmp16 = null;
    if ("https:" === str.protocol) {
      tmp16 = null;
      if (tmp7) {
        tmp18 = closure_9;
        str1 = str.toString();
        tmp16 = forResult;
      }
    }
  }
  cResult[5] = tmp5;
  cResult[6] = tmp6.uri;
  cResult[7] = tmp7;
  cResult[8] = tmp18;
  cResult[9] = str1;
  cResult[10] = tmp16;
  tmp13 = tmp16;
  tmp12 = str1;
  tmp11 = tmp18;
}) : (function MediaModalWebEmbed(arg0) {
  let provider;
  let source;
  let visible;
  ({ visible, source, provider } = arg0);
  const merged = Object.assign(arg0, Object.assign({ visible: 0, source: 0, provider: 0 }));
  const toURLSafe = URLUtilsDefault.toURLSafe;
  URLUtilsDefault;
  const obj = EmbedIFrameConfig;
  const str = toURLSafe(obj.formatProviderSrc(source.uri, provider, { autoMute: false }));
  let tmp3 = null;
  if (null != str) {
    tmp3 = null;
    if ("https:" === str.protocol) {
      let tmp4 = null;
      if (visible) {
        const merged1 = Object.assign(merged);
        tmp4 = <closure_9 src={str.toString()} />;
      }
      tmp3 = tmp4;
    }
  }
  return tmp3;
}));
const result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalWebEmbed.tsx");

export default memoResult;
