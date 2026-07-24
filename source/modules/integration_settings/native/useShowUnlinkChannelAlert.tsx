// Module ID: 10200
// Function ID: 78814
// Name: useShowUnlinkChannelAlert
// Dependencies: [5, 31, 7685, 4471, 1212, 4561, 2]
// Exports: default

// Module 10200 (useShowUnlinkChannelAlert)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import result from "result";

const require = arg1;
const result = require("init").fileFinishedImporting("modules/integration_settings/native/useShowUnlinkChannelAlert.tsx");

export default function useShowUnlinkChannelAlert(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [arg0, arg2];
  callback = React.useCallback(callback(tmp), items);
  const items1 = [arg1, callback];
  return React.useCallback(() => {
    let obj = callback2(4471);
    obj = {};
    const intl = callback(1212).intl;
    obj.title = intl.string(callback(1212).t.JmUENg);
    const intl2 = callback(1212).intl;
    obj = { applicationName: callback2 };
    obj.body = intl2.format(callback(1212).t["6l2osp"], obj);
    const intl3 = callback(1212).intl;
    obj.cancelText = intl3.string(callback(1212).t["ETE/oC"]);
    const intl4 = callback(1212).intl;
    obj.confirmText = intl4.string(callback(1212).t["cY+Oob"]);
    obj.onConfirm = callback;
    obj.confirmColor = callback2(4561).Colors.RED;
    obj.show(obj);
  }, items1);
};
