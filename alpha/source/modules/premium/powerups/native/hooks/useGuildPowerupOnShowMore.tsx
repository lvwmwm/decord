// Module ID: 12825
// Function ID: 12826
// Name: useGuildPowerupOnShowMore
// Dependencies: [19, 12775, 2]
// Exports: default

// Module 12825 (useGuildPowerupOnShowMore)
import openGuildPowerupsBottomSheetDefault from "openGuildPowerupsBottomSheet" /* 12775 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnShowMore.tsx");

export default function useGuildPowerupOnShowMore(guildId, arg1) {
  closure_1 = arg1;
  const items = [guildId, arg1];
  return noop.useCallback(() => {
    if (null != closure_1) {
      const obj = { guildId, powerup: tmp };
      openGuildPowerupsBottomSheetDefault(obj);
    }
  }, items);
};
