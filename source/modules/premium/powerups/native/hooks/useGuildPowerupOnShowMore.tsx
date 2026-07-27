// Module ID: 11595
// Function ID: 90135
// Name: useGuildPowerupOnShowMore
// Dependencies: [31, 11546, 2]
// Exports: default

// Module 11595 (useGuildPowerupOnShowMore)
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
