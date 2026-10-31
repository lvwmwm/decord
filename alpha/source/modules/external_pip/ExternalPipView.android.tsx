// Module ID: 19099
// Function ID: 19100
// Name: ExternalPipView
// Dependencies: [32, 19, 8864, 21, 19100, 5874, 19102, 19103, 2]
// Exports: default

// Module 19099 (ExternalPipView)
import Fragment from "Fragment" /* 21 */;
import ExternalPipDefault from "ExternalPip" /* 5874 */;
import ExternalPipAutoEnterExperiment from "ExternalPipAutoEnterExperiment" /* 19102 */;
import ExternalPipViewVideoDefault from "ExternalPipViewVideo" /* 19103 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AppFreezeStore from "AppFreezeStore" /* 8864 */;
import size from "module_2" /* 2 */;

let state;

function FreezeAfterLayoutPipView() {
  const ref = react.useRef(false);
  const onLayout = react.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      state = AppFreezeStore.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: true, key: "external-pip" });
    }
  }, []);
  const effect = react.useEffect(() => () => {
    if (ref.current) {
      state = state.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
    }
  }, []);
  return jsx(ExternalPipViewVideoDefault, { onLayout });
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/external_pip/ExternalPipView.android.tsx");

export default function ExternalPipView() {
  let c0;
  let callback;
  let obj2;
  let tmp3;
  let obj = { disabled: !obj2.isSupported() };
  const tmp = callback(19100);
  obj2 = callback(5874);
  const externalPipEnabled = tmp(obj).externalPipEnabled;
  c0 = undefined;
  [tmp3, c0] = _slicedToArray(react.useState(false), 2);
  const tmp2 = _slicedToArray(react.useState(false), 2);
  callback = react.useCallback((arg0) => {
    _undefined(arg0);
    if (!arg0) {
      state = state.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
    }
  }, []);
  const effect = react.useEffect(() => () => {
    state = state.getState();
    const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
  }, []);
  const items = [externalPipEnabled];
  const effect1 = react.useEffect(() => {
    if (externalPipEnabled) {
      const setAutoEnterEnabled = ExternalPipDefault.setAutoEnterEnabled;
      ExternalPipDefault;
      const obj = ExternalPipAutoEnterExperiment;
      setAutoEnterEnabled(obj.isExternalPipAutoEnterEnabled());
    }
    const obj2 = ExternalPipDefault;
    obj2.setEnabled(externalPipEnabled);
  }, items);
  const items1 = [callback];
  const effect2 = react.useEffect(() => {
    let obj = callback(dependencyMap[5]);
    let closure_0 = obj.addOnPipModeChangedListener((arg0) => {
      callback(arg0);
    });
    return () => {
      let removeResult;
      const obj = closure_0;
      if (closure_0 != null) {
        removeResult = obj.remove();
      }
      return removeResult;
    };
  }, items1);
  const items2 = [callback];
  const effect3 = react.useEffect(() => {
    let obj = callback(dependencyMap[5]);
    let closure_0 = obj.addOnPipModeWillChangeListener(() => {
      callback(true);
    });
    return () => {
      let removeResult;
      const obj = closure_0;
      if (closure_0 != null) {
        removeResult = obj.remove();
      }
      return removeResult;
    };
  }, items2);
  let tmp9 = null;
  if (tmp3) {
    tmp9 = <FreezeAfterLayoutPipView />;
  }
  return tmp9;
};
