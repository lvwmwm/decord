// Module ID: 12201
// Function ID: 95376
// Name: useSelectStage
// Dependencies: [5, 57, 31, 1348, 1906, 566, 7477, 2]
// Exports: default

// Module 12201 (useSelectStage)
import initialize from "initialize";
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("result").fileFinishedImporting("modules/guild_scheduled_events/useSelectStage.tsx");

export default function useSelectStage() {
  const items = [closure_6];
  stateFromStores = stateFromStores(first[5]).useStateFromStores(items, () => outer1_6.getVoiceChannelId(), []);
  const tmp2 = callback(React.useState(stateFromStores), 2);
  first = tmp2[0];
  let initialize = tmp2[1];
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    const timeout = setTimeout(() => {
      outer1_2(closure_0);
    }, 500);
    return () => {
      clearTimeout(closure_0);
    };
  }, items1);
  const items2 = [first];
  const items3 = [
    first,
    React.useCallback((() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = callback(tmp);
      return function() {
        return callback(...arguments);
      };
    })(), items2)
  ];
  return items3;
};
