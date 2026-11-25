// Module ID: 13460
// Function ID: 13461
// Name: useGuildPowerupOnShowMore
// Dependencies: [19, 13409, 2]
// Exports: default

// Module 13460 (useGuildPowerupOnShowMore)
import openGuildPowerupsBottomSheetDefault from "openGuildPowerupsBottomSheet" /* 13409 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnShowMore.tsx");

export default function useGuildPowerupOnShowMore(guildId, arg1) {
  let closure_1 = arg1;
  const items = [guildId, arg1];
  return react.useCallback(() => {
    if (null != closure_1) {
      const obj = { guildId, powerup: tmp };
      openGuildPowerupsBottomSheetDefault(obj);
    }
  }, items);
};
