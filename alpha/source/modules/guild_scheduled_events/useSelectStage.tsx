// Module ID: 9876
// Function ID: 9877
// Name: useSelectStage
// Dependencies: [5, 32, 19, 2041, 2095, 504, 8664, 2]
// Exports: default

// Module 9876 (useSelectStage)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2095 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useSelectStage.tsx");

export default function useSelectStage() {
  const items = [SelectedChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => voiceChannelId.getVoiceChannelId(), []);
  [first, asyncGeneratorStep] = noop.useState(stateFromStores);
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
    const timeout = setTimeout(() => {
      closure_1_2(closure_0);
    }, 500);
    return () => {
      clearTimeout(closure_0);
    };
  }, items1);
  _require = asyncGeneratorStep(async (arg0, arg1) => {
    if (closure_1 === closure_1) {
      channel = channel.getChannel(tmp30);
      if (null != channel) {
        closure_0(first[6]).navigateToStage(channel);
        c5 = 0;
        c6 = 3;
        return { value: undefined, done: true };
      }
    }
    tmp3(closure_1);
    await closure_0(first[6]).connectOrLurkStage(closure_0, closure_1);
    if (1 === tmp7) {
      c5 = 0;
      tmp3(null);
      c6 = 3;
    } else if (arg0 === 1) {
      c6 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      c5 = 0;
    }
    return arg1;
  });
  const items2 = [first];
  const items3 = [
    first,
    noop.useCallback(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items2)
  ];
  return items3;
};
