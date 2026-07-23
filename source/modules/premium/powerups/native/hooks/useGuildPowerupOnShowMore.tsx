// Module ID: 11600
// Function ID: 90169
// Name: useGuildPowerupOnShowMore
// Dependencies: [31, 11550, 2]
// Exports: default

// Module 11600 (useGuildPowerupOnShowMore)
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
