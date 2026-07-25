// Module ID: 8274
// Function ID: 66443
// Name: useStartEvent
// Dependencies: [5, 57, 31, 8275, 8276, 4030, 2]
// Exports: default

// Module 8274 (useStartEvent)
import V6OrEarlierAPIError from "V6OrEarlierAPIError";
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
let closure_6 = {
  onSuccess() {

  },
  permissionOverwrites: []
};
const result = require("result").fileFinishedImporting("modules/guild_scheduled_events/useStartEvent.tsx");

export default function useStartEvent() {
  function _startEvent() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = outer1_3(tmp);
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
