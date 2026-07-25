// Module ID: 11594
// Function ID: 90130
// Name: useGuildPowerupOnShowMore
// Dependencies: [31, 11545, 2]
// Exports: default

// Module 11594 (useGuildPowerupOnShowMore)
import result from "result";

const result = require("set").fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnShowMore.tsx");

export default function useGuildPowerupOnShowMore(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  return React.useCallback(() => {
    if (null != table) {
      const obj = { guildId: callback, powerup: table };
      callback(table[1])(obj);
    }
  }, items);
};
