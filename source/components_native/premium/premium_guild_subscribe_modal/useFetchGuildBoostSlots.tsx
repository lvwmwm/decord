// Module ID: 12386
// Function ID: 94674
// Name: useFetchGuildBoostSlots
// Dependencies: []
// Exports: default

// Module 12386 (useFetchGuildBoostSlots)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/useFetchGuildBoostSlots.tsx");

export default function useFetchGuildBoostSlots() {
  const tmp = callback(React.useState(true), 2);
  const first = tmp[0];
  const arg1 = first;
  let closure_1 = tmp[1];
  const items = [closure_6];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => hasFetched.hasFetched);
  const dependencyMap = stateFromStores;
  const obj = arg1(dependencyMap[5]);
  const items1 = [closure_7];
  const stateFromStores1 = arg1(dependencyMap[5]).useStateFromStores(items1, () => state.getState());
  let closure_3 = stateFromStores1;
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
