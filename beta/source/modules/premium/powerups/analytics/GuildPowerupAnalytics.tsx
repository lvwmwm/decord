// Module ID: 12039
// Function ID: 12040
// Name: GuildPowerupAnalytics
// Dependencies: [19, 1074, 1241, 2]
// Exports: useLogPowerupModalOpened

// Module 12039 (GuildPowerupAnalytics)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let react = react_mod;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/premium/powerups/analytics/GuildPowerupAnalytics.tsx");

export const ModalType = { DETAIL: "Boost Perk Shop Details", DEACTIVATE: "Boost Perk Shop Disable" };
export const useLogPowerupModalOpened = function useLogPowerupModalOpened(guildId, powerup, DEACTIVATE) {
  let type;
  const guild_id = guildId;
  react = DEACTIVATE;
  const items = [DEACTIVATE, guildId, powerup.skuId];
  const effect = react.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type, sku_id: powerup.skuId, guild_id };
    obj.track(AnalyticEvents.OPEN_MODAL, obj2);
  }, items);
};
