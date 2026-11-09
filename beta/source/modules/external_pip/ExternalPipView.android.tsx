// Module ID: 19477
// Function ID: 19478
// Name: ExternalPipView
// Dependencies: [32, 19, 8938, 21, 19478, 6003, 19480, 19481, 2]
// Exports: default

// Module 19477 (ExternalPipView)
import Fragment from "Fragment" /* 21 */;
import ExternalPipDefault from "ExternalPip" /* 6003 */;
import ExternalPipAutoEnterExperiment from "ExternalPipAutoEnterExperiment" /* 19480 */;
import ExternalPipViewVideoDefault from "ExternalPipViewVideo" /* 19481 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AppFreezeStore from "AppFreezeStore" /* 8938 */;
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
  const tmp = callback(19478);
  obj2 = callback(6003);
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
