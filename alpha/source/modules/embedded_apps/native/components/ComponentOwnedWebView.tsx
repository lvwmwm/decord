// Module ID: 18437
// Function ID: 18438
// Name: ComponentOwnedWebView
// Dependencies: [19, 21, 11485, 11463, 11486, 2]
// Exports: default

// Module 18437 (ComponentOwnedWebView)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_0;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/embedded_apps/native/components/ComponentOwnedWebView.tsx");

export default function ComponentOwnedWebView(iframeId) {
  iframeId = iframeId.iframeId;
  const onDisallowedNavigation = iframeId.onDisallowedNavigation;
  const contextSource = iframeId.contextSource;
  const activityUrl = iframeId.activityUrl;
  const applicationId = iframeId.applicationId;
  const merged = Object.assign(iframeId, Object.assign({ iframeId: 0, onDisallowedNavigation: 0, contextSource: 0, activityUrl: 0, applicationId: 0 }));
  const items = [activityUrl];
  const memo = activityUrl.useMemo(function() {
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
  const ref = activityUrl.useRef(contextSource);
  let closure_6 = activityUrl.useRef(memo);
  let closure_7 = activityUrl.useRef(onDisallowedNavigation);
  const effect = activityUrl.useEffect(() => {
    ref.current = contextSource;
    closure_6.current = memo;
    closure_7.current = onDisallowedNavigation;
  });
  const items1 = [iframeId];
  const memo1 = activityUrl.useMemo(() => onDisallowedNavigation(contextSource[2])(), items1);
  const items2 = [iframeId, memo1];
  const effect1 = activityUrl.useEffect(() => {
    let ref2;
    const obj = {
      contextSource: ref.current,
      getOrigin() {
        return ref.current;
      },
      onDisallowedNavigation() {
        return ref2.current();
      },
      shellBridgeSecret: memo1
    };
    closure_0 = onDisallowedNavigation(contextSource[3])(closure_0, obj);
    return () => closure_0.release();
  }, items2);
  let obj = { iframeId, shellBridgeSecret: memo1, activityUrl, applicationId };
  const BaseEmbeddedAppWebView = iframeId(contextSource[4]).BaseEmbeddedAppWebView;
  const merged1 = Object.assign(merged);
  return memo(BaseEmbeddedAppWebView, obj);
};
