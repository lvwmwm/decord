// Module ID: 12560
// Function ID: 97204
// Name: useFetchGuildBoostSlots
// Dependencies: [5, 57, 31, 4023, 6651, 566, 668, 6658, 4026, 2]
// Exports: default

// Module 12560 (useFetchGuildBoostSlots)
import initialize from "initialize";
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("result").fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/useFetchGuildBoostSlots.tsx");

export default function useFetchGuildBoostSlots() {
  const tmp = callback(React.useState(true), 2);
  const first = tmp[0];
  let closure_1 = tmp[1];
  const items = [_isNativeReflectConstruct];
  stateFromStores = first(stateFromStores[5]).useStateFromStores(items, () => outer1_6.hasFetched);
  let obj = first(stateFromStores[5]);
  const items1 = [closure_7];
  const stateFromStores1 = first(stateFromStores[5]).useStateFromStores(items1, () => outer1_7.getState());
  callback = React.useRef(stateFromStores1);
  const items2 = [stateFromStores1, stateFromStores, first];
  const effect = React.useEffect(() => {
    function _fetch() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = stateFromStores1(tmp);
      return obj(...arguments);
    }
    if (_fetch) {
      ref.current = stateFromStores1;
      (function fetch() {
        return _fetch(...arguments);
      })();
    }
  }, items2);
  return first;
};
