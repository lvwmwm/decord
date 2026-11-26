// Module ID: 13463
// Function ID: 13464
// Name: useGuildPowerupOnShowMore
// Dependencies: [19, 13412, 2]
// Exports: default

// Module 13463 (useGuildPowerupOnShowMore)
import openGuildPowerupsBottomSheetDefault from "openGuildPowerupsBottomSheet" /* 13412 */;
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
