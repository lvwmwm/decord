// Module ID: 15682
// Function ID: 120919
// Name: requestFreezeLock
// Dependencies: [57, 31, 8293, 33, 15683, 10233, 15685, 2]
// Exports: default

// Module 15682 (requestFreezeLock)
import _slicedToArray from "_slicedToArray";
import result from "result";
import module_8293 from "module_8293";
import { jsx } from "jsxProd";

function requestFreezeLock(lockEnabled) {
  state = state.getState();
  const freezeLock = state.requestFreezeLock({ lockEnabled, key: "external-pip" });
}
function FreezeAfterLayoutPipView() {
  const importDefault = React.useRef(false);
  const onLayout = React.useCallback(() => {
    if (!ref.current) {
      ref.current = true;
      outer1_6(true);
    }
  }, []);
  const effect = React.useEffect(() => () => {
    if (outer1_0.current) {
      outer2_6(false);
    }
  }, []);
  return jsx(importDefault(15685), { onLayout });
}
const result = require("module_8293").fileFinishedImporting("modules/external_pip/ExternalPipView.android.tsx");

export default function ExternalPipView() {
  const obj = {};
  const tmp = externalPipEnabled(setExternalPipActive[4]);
  obj.disabled = !externalPipEnabled(setExternalPipActive[5]).isSupported();
  externalPipEnabled = tmp(obj).externalPipEnabled;
  const tmp2 = (function useExternalPipActive() {
    const externalPipActive = outer1_2(outer1_3.useState(false), 2);
    let closure_0 = externalPipActive[1];
    const setExternalPipActive = outer1_3.useCallback((arg0) => {
      callback(arg0);
      if (!arg0) {
        outer2_6(false);
      }
    }, []);
    const effect = outer1_3.useEffect(() => () => {
      outer3_6(false);
    }, []);
    return { externalPipActive: externalPipActive[0], setExternalPipActive };
  })();
  setExternalPipActive = tmp2.setExternalPipActive;
  const items = [externalPipEnabled];
  let effect = React.useEffect(() => {
    externalPipEnabled(setExternalPipActive[5]).setEnabled(externalPipEnabled);
  }, items);
  const items1 = [setExternalPipActive];
  const effect1 = React.useEffect(() => {
    let closure_0 = externalPipEnabled(setExternalPipActive[5]).addOnPipModeChangedListener((arg0) => {
      outer1_1(arg0);
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
    let closure_0 = externalPipEnabled(setExternalPipActive[5]).addOnPipModeWillChangeListener(() => {
      outer1_1(true);
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
