// Module ID: 15565
// Function ID: 118746
// Name: requestFreezeLock
// Dependencies: []
// Exports: default

// Module 15565 (requestFreezeLock)
function requestFreezeLock(lockEnabled) {
  const state = state.getState();
  const freezeLock = state.requestFreezeLock({ lockEnabled, key: "external-pip" });
}
function FreezeAfterLayoutPipView() {
  const importDefault = React.useRef(false);
  const onLayout = React.useCallback(() => {
    if (!ref.current) {
      ref.current = true;
      callback(true);
    }
  }, []);
  const effect = React.useEffect(() => () => {
    if (ref.current) {
      callback(false);
    }
  }, []);
  return jsx(importDefault(dependencyMap[6]), { onLayout });
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/external_pip/ExternalPipView.android.tsx");

export default function ExternalPipView() {
  const obj = {};
  const tmp = importDefault(dependencyMap[4]);
  obj.disabled = !importDefault(dependencyMap[5]).isSupported();
  const externalPipEnabled = tmp(obj).externalPipEnabled;
  const importDefault = externalPipEnabled;
  const tmp2 = function useExternalPipActive() {
    const externalPipActive = callback(React.useState(false), 2);
    let closure_0 = externalPipActive[1];
    const setExternalPipActive = React.useCallback((arg0) => {
      callback(arg0);
      if (!arg0) {
        callback2(false);
      }
    }, []);
    const effect = React.useEffect(() => () => {
      callback(false);
    }, []);
    return { externalPipActive: externalPipActive[0], setExternalPipActive };
  }();
  const setExternalPipActive = tmp2.setExternalPipActive;
  const dependencyMap = setExternalPipActive;
  const items = [externalPipEnabled];
  const effect = React.useEffect(() => {
    externalPipEnabled(setExternalPipActive[5]).setEnabled(externalPipEnabled);
  }, items);
  const items1 = [setExternalPipActive];
  const effect1 = React.useEffect(() => {
    const externalPipEnabled = externalPipEnabled(setExternalPipActive[5]).addOnPipModeChangedListener((arg0) => {
      callback(arg0);
    });
    return () => {
      let removeResult;
      if (null != closure_0) {
        removeResult = closure_0.remove();
      }
      return removeResult;
    };
  }, items1);
  const items2 = [setExternalPipActive];
  const effect2 = React.useEffect(() => {
    const externalPipEnabled = externalPipEnabled(setExternalPipActive[5]).addOnPipModeWillChangeListener(() => {
      callback(true);
    });
    return () => {
      let removeResult;
      if (null != closure_0) {
        removeResult = closure_0.remove();
      }
      return removeResult;
    };
  }, items2);
  let tmp6 = null;
  if (tmp2.externalPipActive) {
    tmp6 = <FreezeAfterLayoutPipView />;
  }
  return tmp6;
};
