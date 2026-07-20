// Module ID: 11558
// Function ID: 89940
// Name: ModalType
// Dependencies: [0, 0, 0, 0]
// Exports: useLogPowerupModalOpened

// Module 11558 (ModalType)
import closure_2 from "result";
import { AnalyticEvents } from "result";
import result from "result";

result = result.fileFinishedImporting("modules/premium/powerups/analytics/GuildPowerupAnalytics.tsx");

export const ModalType = { DETAIL: "Boost Perk Shop Details", DEACTIVATE: "Boost Perk Shop Disable" };
export const useLogPowerupModalOpened = function useLogPowerupModalOpened(guildId, powerup, DEACTIVATE) {
  const importDefault = guildId;
  const dependencyMap = powerup;
  const React = DEACTIVATE;
  const items = [DEACTIVATE, guildId, powerup.skuId];
  const effect = React.useEffect(() => {
    let obj = arg0(arg1[2]);
    obj = { type: arg2, sku_id: arg1.skuId, guild_id: arg0 };
    obj.track(constants.OPEN_MODAL, obj);
  }, items);
};
