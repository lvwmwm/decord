// Module ID: 11557
// Function ID: 89925
// Name: useGuildPowerupOnActivate
// Dependencies: [31, 4049, 1910, 1838, 566, 5415, 4019, 1212, 2230, 2, 31, 653, 4096, 11539, 4019, 8431, 8434]
// Exports: default

// Module 11557 (useGuildPowerupOnActivate)
import module_31 from "module_31";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import canUseMobileServerTagSettings from "canUseMobileServerTagSettings";

({ BoostPurchaseIntent: closure_6, GuildPowerupType: closure_7 } = _createForOfIteratorHelperLoose);
const result = canUseMobileServerTagSettings.fileFinishedImporting("modules/premium/powerups/native/hooks/useGuildPowerupOnActivate.tsx");

export default function useGuildPowerupOnActivate(arg0, arg1) {
  let error;
  let isLoading;
  arg1 = arg0;
  const importDefault = arg1;
  const tmp = importDefault(dependencyMap[4])(arg0, arg1);
  const onToggle = tmp.onToggle;
  const dependencyMap = onToggle;
  ({ isLoading, error } = tmp);
  let obj = arg1(dependencyMap[5]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => tmp3.getGuild(arg0));
  const React = stateFromStores;
  const tmp3 = importDefault(dependencyMap[6])(arg0, arg1);
  _isNativeReflectConstruct = tmp3;
  const analyticsLocations = importDefault(dependencyMap[7])().analyticsLocations;
  let closure_5 = analyticsLocations;
  const tmp4 = importDefault(dependencyMap[8])("guild_powerup_activation");
  const shouldUseMobileWebRedirectCheckout = tmp4.shouldUseMobileWebRedirectCheckout;
  const handleMobileWebRedirectCheckout = tmp4.handleMobileWebRedirectCheckout;
  obj = {
    onActivate: React.useCallback((arg0, self) => {
      function activatePowerup(arg0) {
        activatePowerup(true);
      }
      const onToggle = activatePowerup;
      if (null != stateFromStores) {
        if (null != self) {
          if (tmp3 >= self.cost) {
            activatePowerup();
          } else {
            const diff = self.cost - tmp3;
            arg0 = diff;
            const availableGuildBoostSlots = arg0(onToggle[9]).getAvailableGuildBoostSlots(analyticsLocations.boostSlots);
            if (self.type === handleMobileWebRedirectCheckout.LEVEL) {
              let PERK = shouldUseMobileWebRedirectCheckout.LEVEL;
            } else {
              PERK = shouldUseMobileWebRedirectCheckout.PERK;
            }
            self = PERK;
            let obj = self(onToggle[10]);
            obj.hideActionSheet(arg0(onToggle[11]).GUILD_POWERUPS_BOTTOM_SHEET_KEY);
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
              arg0(onToggle[12]).openTransferModal(obj);
              const obj4 = arg0(onToggle[12]);
            } else if (shouldUseMobileWebRedirectCheckout) {
              handleMobileWebRedirectCheckout(analyticsLocations, stateFromStores.id);
            } else {
              obj = {
                source: { 0: "png", 0: true },
                analyticsLocations,
                guildId: stateFromStores.id,
                onBack() {
                          return PERK(activatePowerup[14]).popWithKey(diff(activatePowerup[15]).PREMIUM_KEY);
                        },
                onPaymentSuccess() {
                          let obj = diff(activatePowerup[9]);
                          const availableGuildBoostSlots = obj.getAvailableGuildBoostSlots(boostSlots.boostSlots);
                          if (availableGuildBoostSlots.length >= diff) {
                            obj = {
                              guildBoostSlots: availableGuildBoostSlots.slice(0, PERK.cost),
                              guildId: id.id,
                              intent: PERK,
                              onResult(arg0) {
                                  if (arg0) {
                                    callback();
                                  }
                                }
                            };
                            diff(activatePowerup[12]).openTransferModal(obj);
                            const obj2 = diff(activatePowerup[12]);
                          }
                        },
                onPaymentDismiss() {
                          return PERK(activatePowerup[14]).popWithKey(diff(activatePowerup[15]).PREMIUM_KEY);
                        }
              };
              const result = arg0(onToggle[13]).launchGuildBoostFlowOrAlert(obj);
              const obj2 = arg0(onToggle[13]);
            }
            const obj6 = arg0(onToggle[9]);
          }
        }
      }
    }, items1),
    isLoading,
    error
  };
  const items1 = [onToggle, arg1, tmp3, stateFromStores, analyticsLocations, shouldUseMobileWebRedirectCheckout, handleMobileWebRedirectCheckout];
  return obj;
};
