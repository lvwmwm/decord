// Module ID: 8410
// Function ID: 66939
// Name: useCreateChannelSubmit
// Dependencies: [5, 57, 31, 653, 1881, 483, 8411, 3976, 1212, 2]
// Exports: default

// Module 8410 (useCreateChannelSubmit)
import fromHexReverseArray from "fromHexReverseArray";
import _slicedToArray from "_slicedToArray";
import result from "result";
import ME from "ME";

let closure_7;
let closure_8;
const require = arg1;
({ ChannelTypes: closure_7, Permissions: closure_8 } = ME);
const obj = { PREMIUM_CHANNEL: 0, [0]: "PREMIUM_CHANNEL" };
const result = require("result").fileFinishedImporting("modules/channel/useCreateChannelSubmit.tsx");

export default function useCreateChannelSubmit(arg0) {
  let importAll;
  let importDefault;
  let tmp2;
  let tmp4;
  let closure_0 = arg0;
  [tmp2, importDefault] = callback(React.useState(false), 2);
  const tmp = callback(React.useState(false), 2);
  [tmp4, importAll] = callback(React.useState({}), 2);
  const items = [arg0];
  const items1 = [
    tmp2,
    tmp4,
    React.useCallback((() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = outer1_4(tmp);
      return function() {
        return callback(...arguments);
      };
    })(), items)
  ];
  return items1;
};
export const CreateChannelMode = obj;
