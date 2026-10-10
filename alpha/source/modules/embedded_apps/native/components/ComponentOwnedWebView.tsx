// Module ID: 17686
// Function ID: 17687
// Name: ComponentOwnedWebView
// Dependencies: [109, 19, 21, 558, 576, 10930, 10952, 2]

// Module 17686 (ComponentOwnedWebView)
import Fragment from "Fragment" /* 21 */;
import _objectWithoutProperties_mod from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let closure_3 = ["iframeId", "onDisallowedNavigation", "contextSource", "activityUrl", "applicationId"];
let _objectWithoutProperties = _objectWithoutProperties_mod;
let react = react_mod;
let jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ComponentOwnedWebView(iframeId) {
  let activityUrl;
  let applicationId;
  let closure_5;
  let closure_6;
  let current;
  let current2;
  let origin;
  let ref;
  let tmp4;
  let tmp5;
  let tmp9;
  let obj = require("react");
  const cResult = obj.c(21);
  const tmp = _require;
  if (cResult[0] !== iframeId) {
    iframeId = iframeId.iframeId;
    let closure_1 = iframeId;
    const onDisallowedNavigation = iframeId.onDisallowedNavigation;
    dependencyMap = onDisallowedNavigation;
    const contextSource = iframeId.contextSource;
    _require = contextSource;
    ({ activityUrl, applicationId } = iframeId);
    const tmp12 = _objectWithoutProperties(iframeId, origin);
    cResult[0] = iframeId;
    cResult[1] = activityUrl;
    cResult[2] = applicationId;
    cResult[3] = contextSource;
    cResult[4] = iframeId;
    cResult[5] = onDisallowedNavigation;
    cResult[6] = tmp12;
    tmp9 = tmp12;
    tmp5 = applicationId;
    tmp4 = activityUrl;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    _require = cResult[3];
    closure_1 = cResult[4];
    dependencyMap = cResult[5];
    tmp9 = cResult[6];
  }
  try {
    let tmp13;
    if (cResult[7] !== tmp4) {
      const _URL = URL;
      const self = this;
      const self2 = this;
      const uRL = new URL(tmp4);
      tmp13 = uRL;
      cResult[7] = tmp4;
      cResult[8] = uRL;
    } else {
      tmp13 = cResult[8];
    }
    origin = tmp13.origin;
  } catch (err) {
    origin = tmp4;
  }
  _objectWithoutProperties = react.useRef(tmp6);
  react = react.useRef(origin);
  jsx = react.useRef(tmp8);
  if (cResult[9] === tmp6) {
    if (cResult[10] === origin) {
      let tmp18;
      let tmp21;
      let tmp20;
      if (cResult[11] === tmp8) {
        tmp18 = cResult[12];
      }
      const effect = obj2.useEffect(tmp18);
      if (cResult[13] !== tmp7) {
        const fn2 = function x() {
          let ref2;
          const obj = {
            contextSource: ref.current,
            getOrigin() {
              return ref.current;
            },
            onDisallowedNavigation() {
              return ref2.current();
            }
          };
          let closure_0 = closure_1(current2[5])(closure_1, obj);
          return () => closure_0.release();
        };
        const items = [tmp7];
        cResult[13] = tmp7;
        cResult[14] = fn2;
        cResult[15] = items;
        tmp21 = items;
        tmp20 = fn2;
      } else {
        tmp20 = cResult[14];
        tmp21 = cResult[15];
      }
      const effect1 = obj2.useEffect(tmp20, tmp21);
      if (cResult[16] === tmp4) {
        if (cResult[17] === tmp5) {
          if (cResult[18] === tmp7) {
            let tmp23;
            if (cResult[19] === tmp9) {
              tmp23 = cResult[20];
            }
            return tmp23;
          }
        }
      }
      const BaseEmbeddedAppWebView = tmp(10952).BaseEmbeddedAppWebView;
      const merged = Object.assign(tmp9);
      const tmp28 = <BaseEmbeddedAppWebView iframeId={tmp7} activityUrl={tmp4} applicationId={tmp5} />;
      cResult[16] = tmp4;
      cResult[17] = tmp5;
      cResult[18] = tmp7;
      cResult[19] = tmp9;
      cResult[20] = tmp28;
      tmp23 = tmp28;
    }
  }
  const fn = function y() {
    ref.current = current;
    closure_5.current = origin;
    closure_6.current = current2;
  };
  cResult[9] = tmp6;
  cResult[10] = origin;
  cResult[11] = tmp8;
  cResult[12] = fn;
  tmp18 = fn;
}) : (function ComponentOwnedWebView(iframeId) {
  let closure_6;
  let ref;
  iframeId = iframeId.iframeId;
  const onDisallowedNavigation = iframeId.onDisallowedNavigation;
  const contextSource = iframeId.contextSource;
  const activityUrl = iframeId.activityUrl;
  const applicationId = iframeId.applicationId;
  const merged = Object.assign(iframeId, Object.assign({ iframeId: 0, onDisallowedNavigation: 0, contextSource: 0, activityUrl: 0, applicationId: 0 }));
  react = undefined;
  const items = [activityUrl];
  const memo = react.useMemo(function() {
    try {
      const _URL = URL;
      const self = this;
      const self2 = this;
      const uRL = new URL(activityUrl);
      return uRL.origin;
    } catch (err) {
      return activityUrl;
    }
  }, items);
  react = react.useRef(contextSource);
  jsx = react.useRef(memo);
  let closure_7 = react.useRef(onDisallowedNavigation);
  const effect = react.useEffect(() => {
    ref.current = contextSource;
    closure_6.current = memo;
    closure_7.current = onDisallowedNavigation;
  });
  const items1 = [iframeId];
  const effect1 = react.useEffect(() => {
    let ref2;
    const obj = {
      contextSource: ref.current,
      getOrigin() {
        return ref.current;
      },
      onDisallowedNavigation() {
        return ref2.current();
      }
    };
    closure_0 = onDisallowedNavigation(contextSource[5])(closure_0, obj);
    return () => closure_0.release();
  }, items1);
  const BaseEmbeddedAppWebView = iframeId(contextSource[6]).BaseEmbeddedAppWebView;
  const merged1 = Object.assign(merged);
  return <BaseEmbeddedAppWebView iframeId={iframeId} activityUrl={activityUrl} applicationId={applicationId} />;
});
const result = size.fileFinishedImporting("modules/embedded_apps/native/components/ComponentOwnedWebView.tsx");

export default tmp2;
