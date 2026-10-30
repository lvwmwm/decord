// Module ID: 14091
// Function ID: 14092
// Name: useGuildPowerupOnShowMore
// Dependencies: [19, 14041, 2]
// Exports: default

// Module 14091 (useGuildPowerupOnShowMore)
import openGuildPowerupsBottomSheetDefault from "openGuildPowerupsBottomSheet" /* 14041 */;
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
