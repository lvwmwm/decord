// Module ID: 10155
// Function ID: 78541
// Name: useShowUnlinkChannelAlert
// Dependencies: []
// Exports: default

// Module 10155 (useShowUnlinkChannelAlert)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/integration_settings/native/useShowUnlinkChannelAlert.tsx");

export default function useShowUnlinkChannelAlert(arg0, arg1, arg2) {
  arg1 = arg0;
  const importDefault = arg1;
  const dependencyMap = arg2;
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [arg0, arg2];
  const callback = React.useCallback(callback(tmp), items);
  const items1 = [arg1, callback];
  return React.useCallback(() => {
    let obj = arg1(arg2[3]);
    obj = {};
    const intl = arg0(arg2[4]).intl;
    obj.title = intl.string(arg0(arg2[4]).t.JmUENg);
    const intl2 = arg0(arg2[4]).intl;
    obj = { applicationName: arg1 };
    obj.body = intl2.format(arg0(arg2[4]).t.6l2osp, obj);
    const intl3 = arg0(arg2[4]).intl;
    obj.cancelText = intl3.string(arg0(arg2[4]).t.ETE/oC);
    const intl4 = arg0(arg2[4]).intl;
    obj.confirmText = intl4.string(arg0(arg2[4]).t.cY+Oob);
    obj.onConfirm = callback;
    obj.confirmColor = arg1(arg2[5]).Colors.RED;
    obj.show(obj);
  }, items1);
};
