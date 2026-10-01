// Module ID: 12031
// Function ID: 12032
// Name: useGuildPowerupOnActivate
// Dependencies: [19, 2067, 4729, 4724, 12032, 504, 12033, 6583, 12034, 4728, 4800, 12013, 5746, 6823, 5039, 6832, 2]
// Exports: default

// Module 12031 (useGuildPowerupOnActivate)
import GuildBoostingUtils from "GuildBoostingUtils" /* 4728 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 4729 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4724 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_4, importDefault;

let metroImportDefault;
let metroRequire;
let tmp;
const actions_BoostingActionCreators = tmp(5746);
({ BoostPurchaseIntent: metroRequire, GuildPowerupType: metroImportDefault } = GuildPowerupsConstants);
let result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnActivate.tsx");

export default function useGuildPowerupOnActivate(arg0, arg1) {
  let closure_0;
  let closure_1;
  let error;
  let isLoading;
  let items1;
  let onToggle;
  _require = arg0;
  importDefault = arg1;
  let tmp = require("useGuildPowerupOnToggle")(arg0, arg1);
  onToggle = tmp.onToggle;
  ({ isLoading, error } = tmp);
  let obj = require("get initialized");
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  const tmp3 = require("useAvailableBoostCountForPowerup")(arg0, arg1);
  closure_4 = tmp3;
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  const tmp4 = require("useGuildBoostPurchaseHandler")("guild_powerup_activation");
  const shouldUseMobileWebRedirectCheckout = tmp4.shouldUseMobileWebRedirectCheckout;
  const handleMobileWebRedirectCheckout = tmp4.handleMobileWebRedirectCheckout;
  let obj2 = {
    onActivate: stateFromStores.useCallback(() => {
      let PERK;
      let tmp = stateFromStores;
      if (null != stateFromStores) {
        if (null != PERK) {
          if (closure_4 >= PERK.cost) {
            onToggle(true);
          } else {
            const diff = tmp15.cost - tmp16;
            const obj5 = diff(onToggle[9]);
            let availableGuildBoostSlots = obj5.getAvailableGuildBoostSlots(analyticsLocations.boostSlots);
            if (PERK.type === handleMobileWebRedirectCheckout.LEVEL) {
              PERK = shouldUseMobileWebRedirectCheckout.LEVEL;
            } else {
              PERK = shouldUseMobileWebRedirectCheckout.PERK;
            }
            let obj = PERK(tmp19[10]);
            obj.hideActionSheet(diff(onToggle[11]).GUILD_POWERUPS_BOTTOM_SHEET_KEY);
            if (availableGuildBoostSlots.length > 0) {
              let obj2 = {
                guildBoostSlots: availableGuildBoostSlots.slice(0, diff),
                guildId: tmp.id,
                intent: PERK,
                onResult(arg0) {
                          const tmp = arg0;
                          if (tmp) {
                            onToggle(true);
                          }
                        }
              };
              let openTransferModal = diff(onToggle[12]).openTransferModal;
              diff(onToggle[12]);
              openTransferModal(obj2);
            } else {
              const tmp22 = shouldUseMobileWebRedirectCheckout;
              if (tmp22) {
                handleMobileWebRedirectCheckout(analyticsLocations, tmp.id);
              } else {
                const obj3 = {
                  source: { page: "Guild Powerups", section: "Powerup Activation" },
                  analyticsLocations,
                  guildId: tmp.id,
                  onBack() {
                              const obj = PERK(onToggle[14]);
                              return obj.popWithKey(diff(onToggle[15]).PREMIUM_KEY);
                            },
                  onPaymentSuccess() {
                              let tmp = require;
                              const obj = GuildBoostingUtils;
                              const availableGuildBoostSlots = obj.getAvailableGuildBoostSlots(GuildBoostSlotStore.boostSlots);
                              if (availableGuildBoostSlots.length >= closure_0) {
                                const obj2 = {
                                  guildBoostSlots: availableGuildBoostSlots.slice(0, PERK.cost),
                                  guildId: stateFromStores.id,
                                  intent: PERK,
                                  onResult(arg0) {
                                      const tmp = arg0;
                                      if (tmp) {
                                        closure_1_2(true);
                                      }
                                    }
                                };
                                const openTransferModal = actions_BoostingActionCreators.openTransferModal;
                                actions_BoostingActionCreators;
                                openTransferModal(obj2);
                              }
                            },
                  onPaymentDismiss() {
                              const obj = PERK(onToggle[14]);
                              return obj.popWithKey(diff(onToggle[15]).PREMIUM_KEY);
                            }
                };
                const tmp18Result2 = diff(onToggle[13]);
                const result = tmp18Result2.launchGuildBoostFlowOrAlert(obj3);
              }
            }
          }
        }
      }
    }, items1),
    isLoading,
    error
  };
  items1 = [onToggle, arg1, tmp3, stateFromStores, analyticsLocations, shouldUseMobileWebRedirectCheckout, handleMobileWebRedirectCheckout];
  return obj2;
};
