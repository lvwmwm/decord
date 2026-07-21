// Module ID: 8463
// Function ID: 67512
// Name: useStartEvent
// Dependencies: []
// Exports: default

// Module 8463 (useStartEvent)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
let closure_6 = {
  onSuccess() {

  },
  permissionOverwrites: []
};
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_scheduled_events/useStartEvent.tsx");

export default function useStartEvent() {
  function _startEvent() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    const _startEvent = obj;
    return obj(...arguments);
  }
  const tmp = callback(React.useState(false), 2);
  let closure_0 = tmp[1];
  const tmp2 = callback(React.useState(null), 2);
  let closure_1 = tmp2[1];
  const items = [
    function startEvent(arg0, arg1) {
      return _startEvent(...arguments);
    },
    { loading: tmp[0], error: tmp2[0] }
  ];
  return items;
};
