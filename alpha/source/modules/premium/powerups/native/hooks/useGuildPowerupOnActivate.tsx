// Module ID: 12227
// Function ID: 12228
// Name: useGuildPowerupOnActivate
// Dependencies: [19, 2086, 7112, 4969, 558, 576, 12228, 504, 12229, 6848, 12230, 8006, 5055, 12207, 5966, 7113, 5941, 7123, 2]

// Module 12227 (useGuildPowerupOnActivate)
import GuildBoostingUtils from "GuildBoostingUtils" /* 8006 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 7112 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4969 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_4, importDefault;

let metroImportDefault;
let metroRequire;
let tmp;
const BoostingActionCreators = tmp(5966);
({ BoostPurchaseIntent: metroRequire, GuildPowerupType: metroImportDefault } = GuildPowerupsConstants);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildPowerupOnActivate(arg0, arg1) {
  let closure_0;
  let closure_1;
  let error;
  let first;
  let isLoading;
  let onToggle;
  let tmp8;
  _require = arg0;
  importDefault = arg1;
  let tmp2 = onToggle;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(15);
  let tmp4 = importDefault;
  const tmp5 = require("useGuildPowerupOnToggle")(arg0, arg1);
  onToggle = tmp5.onToggle;
  ({ isLoading, error } = tmp5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [closure_4];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function p() {
      return GuildStore.getGuild(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = tmp(tmp2[7]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  const tmp10 = tmp4(tmp2[8])(arg0, arg1);
  closure_4 = tmp10;
  const analyticsLocations = tmp4(tmp2[9])().analyticsLocations;
  const tmp11 = tmp4(tmp2[10])("guild_powerup_activation");
  const shouldUseMobileWebRedirectCheckout = tmp11.shouldUseMobileWebRedirectCheckout;
  const handleMobileWebRedirectCheckout = tmp11.handleMobileWebRedirectCheckout;
  if (cResult[3] === analyticsLocations) {
    if (cResult[4] === tmp10) {
      if (cResult[5] === stateFromStores) {
        if (cResult[6] === handleMobileWebRedirectCheckout) {
          if (cResult[7] === onToggle) {
            if (cResult[8] === arg1) {
              let tmp12;
              if (cResult[9] === shouldUseMobileWebRedirectCheckout) {
                tmp12 = cResult[10];
              }
              if (cResult[11] === error) {
                if (cResult[12] === isLoading) {
                  let tmp13;
                  if (cResult[13] === tmp12) {
                    tmp13 = cResult[14];
                  }
                  return tmp13;
                }
              }
              let obj2 = { onActivate: tmp12, isLoading, error };
              cResult[11] = error;
              cResult[12] = isLoading;
              cResult[13] = tmp12;
              cResult[14] = obj2;
              tmp13 = obj2;
            }
          }
        }
      }
    }
  }
  const fn2 = function _(arg0) {
    let PERK;
    let diff;
    let tmp = stateFromStores;
    if (null != stateFromStores) {
      if (null != diff) {
        function activatePowerup() {

        }
        if (closure_4 >= diff.cost) {
          PERK(true);
        } else {
          diff = tmp15.cost - tmp16;
          const obj5 = closure_0(onToggle[11]);
          let availableGuildBoostSlots = obj5.getAvailableGuildBoostSlots(analyticsLocations.boostSlots);
          if (diff.type === handleMobileWebRedirectCheckout.LEVEL) {
            PERK = shouldUseMobileWebRedirectCheckout.LEVEL;
          } else {
            PERK = shouldUseMobileWebRedirectCheckout.PERK;
          }
          let obj = diff(tmp19[12]);
          obj.hideActionSheet(closure_0(onToggle[13]).GUILD_POWERUPS_BOTTOM_SHEET_KEY);
          if (availableGuildBoostSlots.length > 0) {
            let obj2 = {
              guildBoostSlots: availableGuildBoostSlots.slice(0, diff),
              guildId: tmp.id,
              intent: PERK,
              onResult(arg0) {
                        const tmp = arg0;
                        if (tmp) {
                          if (typeof activatePowerup === "function") {
                            onToggle(true);
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        }
                      }
            };
            let openTransferModal = closure_0(onToggle[14]).openTransferModal;
            closure_0(onToggle[14]);
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
                            const obj = diff(PERK[16]);
                            return obj.popWithKey(activatePowerup(PERK[17]).PREMIUM_KEY);
                          },
                onPaymentSuccess() {
                            let tmp = require;
                            const obj = GuildBoostingUtils;
                            const availableGuildBoostSlots = obj.getAvailableGuildBoostSlots(GuildBoostSlotStore.boostSlots);
                            if (availableGuildBoostSlots.length >= diff) {
                              const obj2 = {
                                guildBoostSlots: availableGuildBoostSlots.slice(0, diff.cost),
                                guildId: stateFromStores.id,
                                intent: PERK,
                                onResult(arg0) {
                                    const tmp = arg0;
                                    if (tmp) {
                                      if (typeof activatePowerup === "function") {
                                        PERK(true);
                                      } else {
                                        throw new TypeError("Trying to call a non-function");
                                      }
                                    }
                                  }
                              };
                              const openTransferModal = BoostingActionCreators.openTransferModal;
                              BoostingActionCreators;
                              openTransferModal(obj2);
                            }
                          },
                onPaymentDismiss() {
                            const obj = diff(PERK[16]);
                            return obj.popWithKey(activatePowerup(PERK[17]).PREMIUM_KEY);
                          }
              };
              const tmp18Result2 = closure_0(onToggle[15]);
              const result = tmp18Result2.launchGuildBoostFlowOrAlert(obj3);
            }
          }
        }
      }
    }
  };
  cResult[3] = analyticsLocations;
  cResult[4] = tmp10;
  cResult[5] = stateFromStores;
  cResult[6] = handleMobileWebRedirectCheckout;
  cResult[7] = onToggle;
  cResult[8] = arg1;
  cResult[9] = shouldUseMobileWebRedirectCheckout;
  cResult[10] = fn2;
  tmp12 = fn2;
}) : (function useGuildPowerupOnActivate(arg0, arg1) {
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
            const obj5 = diff(onToggle[11]);
            let availableGuildBoostSlots = obj5.getAvailableGuildBoostSlots(analyticsLocations.boostSlots);
            if (PERK.type === handleMobileWebRedirectCheckout.LEVEL) {
              PERK = shouldUseMobileWebRedirectCheckout.LEVEL;
            } else {
              PERK = shouldUseMobileWebRedirectCheckout.PERK;
            }
            let obj = PERK(tmp19[12]);
            obj.hideActionSheet(diff(onToggle[13]).GUILD_POWERUPS_BOTTOM_SHEET_KEY);
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
              let openTransferModal = diff(onToggle[14]).openTransferModal;
              diff(onToggle[14]);
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
                              const obj = PERK(onToggle[16]);
                              return obj.popWithKey(diff(onToggle[17]).PREMIUM_KEY);
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
                                const openTransferModal = BoostingActionCreators.openTransferModal;
                                BoostingActionCreators;
                                openTransferModal(obj2);
                              }
                            },
                  onPaymentDismiss() {
                              const obj = PERK(onToggle[16]);
                              return obj.popWithKey(diff(onToggle[17]).PREMIUM_KEY);
                            }
                };
                const tmp18Result2 = diff(onToggle[15]);
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
});
let result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnActivate.tsx");

export default tmp3;
