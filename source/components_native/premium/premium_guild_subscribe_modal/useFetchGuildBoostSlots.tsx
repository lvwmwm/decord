// Module ID: 12393
// Function ID: 94724
// Name: useFetchGuildBoostSlots
// Dependencies: [31, 4015, 4016, 4019, 566, 11599, 2, 57, 4017, 4019]
// Exports: default

// Module 12393 (useFetchGuildBoostSlots)
import module_31 from "module_31";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import BoostedGuildTiers from "BoostedGuildTiers";
import closure_6 from "VANITY_URL_POWERUP_SKU_ID";
import initialize from "initialize";
import VANITY_URL_POWERUP_SKU_ID from "VANITY_URL_POWERUP_SKU_ID";

const result = VANITY_URL_POWERUP_SKU_ID.fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/useFetchGuildBoostSlots.tsx");

export default function useFetchGuildBoostSlots() {
  const tmp = callback(React.useState(true), 2);
  const first = tmp[0];
  const arg1 = first;
  let closure_1 = tmp[1];
  const items = [closure_6];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => hasFetched.hasFetched);
  const dependencyMap = stateFromStores;
  const obj = arg1(dependencyMap[5]);
  const items1 = [initialize];
  const stateFromStores1 = arg1(dependencyMap[5]).useStateFromStores(items1, () => state.getState());
  let module_31 = stateFromStores1;
  const callback = React.useRef(stateFromStores1);
  const items2 = [stateFromStores1, stateFromStores, first];
  const effect = React.useEffect(() => {
    function _fetch(arg0) {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      const _fetch = obj;
      return obj(...arguments);
    }
    if (_fetch) {
      ref.current = stateFromStores1;
      function fetch() {
        return _fetch(...arguments);
      }();
    }
  }, items2);
  return first;
};
