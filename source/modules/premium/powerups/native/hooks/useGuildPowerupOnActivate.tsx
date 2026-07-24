// Module ID: 11595
// Function ID: 90225
// Name: useGuildPowerupOnActivate
// Dependencies: [31, 1838, 4023, 4018, 11596, 566, 11597, 5462, 11598, 4022, 4098, 11579, 4966, 6641, 4337, 6649, 2]
// Exports: default

// Module 11595 (useGuildPowerupOnActivate)
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import BoostedGuildTiers from "BoostedGuildTiers";

let closure_6;
let closure_7;
const require = arg1;
({ BoostPurchaseIntent: closure_6, GuildPowerupType: closure_7 } = BoostedGuildTiers);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnActivate.tsx");

export default function useGuildPowerupOnActivate(arg0, arg1) {
  let error;
  let isLoading;
  const _require = arg0;
  const importDefault = arg1;
  const tmp = importDefault(onToggle[4])(arg0, arg1);
  onToggle = tmp.onToggle;
  ({ isLoading, error } = tmp);
  let obj = _require(onToggle[5]);
  const items = [_createForOfIteratorHelperLoose];
  const stateFromStores = obj.useStateFromStores(items, () => tmp3.getGuild(closure_0));
  const tmp3 = importDefault(onToggle[6])(arg0, arg1);
  _createForOfIteratorHelperLoose = tmp3;
  const analyticsLocations = importDefault(onToggle[7])().analyticsLocations;
  const tmp4 = importDefault(onToggle[8])("guild_powerup_activation");
  const shouldUseMobileWebRedirectCheckout = tmp4.shouldUseMobileWebRedirectCheckout;
  const handleMobileWebRedirectCheckout = tmp4.handleMobileWebRedirectCheckout;
  obj = {
    onActivate: stateFromStores.useCallback(() => {
      function activatePowerup(arg0) {
        activatePowerup(true);
      }
      if (null != stateFromStores) {
        if (null != PERK) {
          if (_createForOfIteratorHelperLoose >= PERK.cost) {
            activatePowerup();
          } else {
            const diff = PERK.cost - _createForOfIteratorHelperLoose;
            const callback = diff;
            let availableGuildBoostSlots = callback(onToggle[9]).getAvailableGuildBoostSlots(analyticsLocations.boostSlots);
            if (PERK.type === handleMobileWebRedirectCheckout.LEVEL) {
              PERK = shouldUseMobileWebRedirectCheckout.LEVEL;
            } else {
              PERK = shouldUseMobileWebRedirectCheckout.PERK;
            }
            let obj = callback2(onToggle[10]);
            obj.hideActionSheet(callback(onToggle[11]).GUILD_POWERUPS_BOTTOM_SHEET_KEY);
            if (availableGuildBoostSlots.length > 0) {
              obj = {
                guildBoostSlots: availableGuildBoostSlots.slice(0, diff),
                guildId: stateFromStores.id,
                intent: PERK,
                onResult(arg0) {
                          if (arg0) {
                            activatePowerup();
                          }
                        }
              };
              callback(onToggle[12]).openTransferModal(obj);
              const obj4 = callback(onToggle[12]);
            } else if (shouldUseMobileWebRedirectCheckout) {
              handleMobileWebRedirectCheckout(analyticsLocations, stateFromStores.id);
            } else {
              obj = {
                source: { page: "Guild Powerups", section: "Powerup Activation" },
                analyticsLocations,
                guildId: stateFromStores.id,
                onBack() {
                          return PERK(onToggle[14]).popWithKey(diff(onToggle[15]).PREMIUM_KEY);
                        },
                onPaymentSuccess() {
                          let obj = diff(onToggle[9]);
                          const availableGuildBoostSlots = obj.getAvailableGuildBoostSlots(analyticsLocations.boostSlots);
                          if (availableGuildBoostSlots.length >= diff) {
                            obj = {
                              guildBoostSlots: availableGuildBoostSlots.slice(0, PERK.cost),
                              guildId: outer1_3.id,
                              intent: PERK,
                              onResult(arg0) {
                                  if (arg0) {
                                    outer1_2();
                                  }
                                }
                            };
                            diff(onToggle[12]).openTransferModal(obj);
                            const obj2 = diff(onToggle[12]);
                          }
                        },
                onPaymentDismiss() {
                          return PERK(onToggle[14]).popWithKey(diff(onToggle[15]).PREMIUM_KEY);
                        }
              };
              const result = callback(onToggle[13]).launchGuildBoostFlowOrAlert(obj);
              let obj2 = callback(onToggle[13]);
            }
            const obj6 = callback(onToggle[9]);
          }
        }
      }
    }, items1),
    isLoading,
    error
  };
  items1 = [onToggle, arg1, tmp3, stateFromStores, analyticsLocations, shouldUseMobileWebRedirectCheckout, handleMobileWebRedirectCheckout];
  return obj;
};
