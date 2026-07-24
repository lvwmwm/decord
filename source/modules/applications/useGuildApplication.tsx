// Module ID: 16421
// Function ID: 128086
// Name: useGuildApplication
// Dependencies: [5, 57, 31, 4167, 566, 5463, 4029, 2]
// Exports: default

// Module 16421 (useGuildApplication)
import fetchApplication from "fetchApplication";
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("result").fileFinishedImporting("modules/applications/useGuildApplication.tsx");

export default function useGuildApplication(arg0, arg1) {
  let fetchApplication;
  let tmp4;
  const _require = arg0;
  let closure_1 = arg1;
  const items = [_isNativeReflectConstruct];
  application = _require(application[4]).useStateFromStores(items, () => guildApplication.getGuildApplication(closure_0, closure_1));
  const obj = _require(application[4]);
  [tmp4, fetchApplication] = callback2(first.useState(null == application), 2);
  const error = callback2(first.useState(), 2);
  callback2 = error[1];
  const tmp6 = callback2(first.useState(false), 2);
  first = tmp6[0];
  _isNativeReflectConstruct = tmp6[1];
  // CreateGeneratorClosureLongIndex (0x67)
  const items1 = [application, arg1, arg0];
  callback = first.useCallback(callback(tmp), items1);
  const items2 = [first, callback];
  const effect = first.useEffect(() => {
    if (!first) {
      callback();
    }
  }, items2);
  return { application, error: error[0], loading };
};
