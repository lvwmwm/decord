// Module ID: 14102
// Function ID: 14103
// Name: GuildPowerupAnalytics
// Dependencies: [19, 1072, 1252, 2]
// Exports: useLogPowerupModalOpened

// Module 14102 (GuildPowerupAnalytics)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let react = react_mod;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/premium/powerups/analytics/GuildPowerupAnalytics.tsx");

export const ModalType = { DETAIL: "Boost Perk Shop Details", DEACTIVATE: "Boost Perk Shop Disable" };
export function useLogPowerupModalOpened(guildId, powerup, DEACTIVATE) {
  let type;
  const guild_id = guildId;
  react = DEACTIVATE;
  const items = [DEACTIVATE, guildId, powerup.skuId];
  const effect = react.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type, sku_id: powerup.skuId, guild_id };
    obj.track(AnalyticEvents.OPEN_MODAL, obj2);
  }, items);
}
