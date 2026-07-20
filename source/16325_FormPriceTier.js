// Module ID: 16325
// Function ID: 125985
// Name: FormPriceTier
// Dependencies: []
// Exports: default

// Module 16325 (FormPriceTier)
importAll(dependencyMap[0]);
({ LoadingState: closure_3, usePriceTiersAvailableInGuild: closure_4 } = arg1(dependencyMap[1]));
const CurrencyCodes = arg1(dependencyMap[2]).CurrencyCodes;
const jsx = arg1(dependencyMap[3]).jsx;
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormPriceTier.tsx");

export default function FormPriceTier(guildId) {
  let state;
  guildId = guildId.guildId;
  const arg1 = guildId;
  const price = guildId.price;
  const importDefault = price;
  const dependencyMap = guildId.onChange;
  const tmp = callback(guildId);
  const tiers = tmp.tiers;
  ({ state, onRefresh: closure_4 } = tmp);
  const USD = CurrencyCodes.USD;
  const CurrencyCodes = USD;
  if (null == tiers) {
    if (state === tiers.LOADING) {
      const intl3 = arg1(dependencyMap[4]).intl;
      let stringResult = intl3.string(arg1(dependencyMap[4]).t.ZTNur7);
    } else {
      const intl2 = arg1(dependencyMap[4]).intl;
      stringResult = intl2.string(arg1(dependencyMap[4]).t.R0RpRX);
    }
    let obj = {
      disabled: state === tiers.LOADING,
      placeholder: stringResult,
      onPress() {
          return callback(guildId);
        }
    };
    return jsx(importDefault(dependencyMap[5]), obj);
  } else {
    obj = {};
    let formatPriceResult;
    if (null != price) {
      obj = arg1(dependencyMap[6]);
      formatPriceResult = obj.formatPrice(price, USD);
    }
    obj.label = formatPriceResult;
    obj.disabled = guildId.disabled;
    obj.onPress = function onPress() {
      price(onChange[7])(null != tiers, "handleSelectPrice must only be called if tiers != null");
      let obj = price(onChange[8]);
      obj = {};
      const intl = guildId(onChange[4]).intl;
      obj.title = intl.string(guildId(onChange[4]).t.nCOuYJ);
      obj.items = tiers.map((value) => {
        const obj = { label: callback(closure_2[6]).formatPrice(value, closure_5), value };
        return obj;
      });
      obj.onItemSelect = function onItemSelect(arg0) {
        if (null != callback3) {
          callback3(arg0);
        }
        callback2(callback3[8]).hideActionSheet();
      };
      let tmp3;
      if (null != price) {
        tmp3 = price;
      }
      obj.selectedItem = tmp3;
      obj.hasIcons = false;
      obj.openLazy(guildId(onChange[10])(onChange[9], onChange.paths), "GuildRoleSubscriptionPriceTierSelect", obj);
    };
    const intl = arg1(dependencyMap[4]).intl;
    obj.placeholder = intl.string(arg1(dependencyMap[4]).t.nCOuYJ);
    return jsx(importDefault(dependencyMap[5]), obj);
  }
};
