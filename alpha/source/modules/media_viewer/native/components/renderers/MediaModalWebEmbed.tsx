// Module ID: 14785
// Function ID: 14786
// Name: MediaModalWebEmbed
// Dependencies: [32, 19, 21, 14786, 14789, 8871, 1377, 2]

// Module 14785 (MediaModalWebEmbed)
import Fragment from "Fragment" /* 21 */;
import URLUtilsDefault from "URLUtils" /* 1377 */;
import MediaModalWebViewBase from "MediaModalWebViewBase" /* 8871 */;
import escapeDefault from "escape" /* 14786 */;
import EmbedIFrameConfig from "EmbedIFrameConfig" /* 14789 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const MediaModalWebViewBaseDefault = MediaModalWebViewBase;
let importDefault;

function WebEmbed(onLoad) {
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
  [first, importDefault] = react.useState(onLoad(8871).PlayerState.UNREADY);
  const items = [onLoad];
  const callback = react.useCallback(() => {
    closure_1(MediaModalWebViewBase.PlayerState.PLAYING);
    if (onLoad != null) {
      onLoad();
    }
  }, items);
  const callback1 = react.useCallback(() => {

  }, []);
  const obj2 = { html: "\n<html>\n  <head>\n    <meta name=\"viewport\" content=\"initial-scale=1\">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        background-color: #000;\n      }\n      iframe {\n        width: 100%;\n        height: 100%;\n        border: 0;\n      }\n    </style>\n  </head>\n  <body>\n    <iframe src=\"" + tmp6 + "\" allow=\"autoplay\" sandbox=\"" + onLoad(14789).EMBED_IFRAME_SANDBOX + "\" scrolling=\"no\"></iframe>\n  </body>\n</html>\n", baseUrl: baseURL };
  MediaModalWebViewBaseDefault;
  tmp6 = escapeDefault(src);
  return <tmp5 style={style} source={obj2} baseURL={baseURL} playerState={first} onDataReceived={callback1} onToggleOverlay={onToggleOverlay} onError={onError} onLoad={callback} onLoadStart={onLoadStart} />;
}
const jsx = Fragment.jsx;
let closure_6 = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
const memoResult = react.memo(function MediaModalWebEmbed(arg0) {
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
        tmp4 = <WebEmbed src={str.toString()} />;
      }
      tmp3 = tmp4;
    }
  }
  return tmp3;
});
const result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalWebEmbed.tsx");

export default memoResult;
