// Module ID: 16465
// Function ID: 128293
// Name: FormPriceTier
// Dependencies: [31, 16424, 653, 33, 1212, 12903, 5618, 44, 4098, 8382, 1934, 2]
// Exports: default

// Module 16465 (FormPriceTier)
import "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { CurrencyCodes } from "ME";
import { jsx } from "jsxProd";

let closure_3;
let closure_4;
const require = arg1;
({ LoadingState: closure_3, usePriceTiersAvailableInGuild: closure_4 } = _createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormPriceTier.tsx");

export default function FormPriceTier(guildId) {
  let closure_4;
  let state;
  guildId = guildId.guildId;
  const price = guildId.price;
  const onChange = guildId.onChange;
  const tmp = callback(guildId);
  const tiers = tmp.tiers;
  ({ state, onRefresh: closure_4 } = tmp);
  USD = USD.USD;
  if (null == tiers) {
    if (state === tiers.LOADING) {
      const intl3 = guildId(onChange[4]).intl;
      let stringResult = intl3.string(guildId(onChange[4]).t.ZTNur7);
    } else {
      const intl2 = guildId(onChange[4]).intl;
      stringResult = intl2.string(guildId(onChange[4]).t.R0RpRX);
    }
    let obj = {
      disabled: state === tiers.LOADING,
      placeholder: stringResult,
      onPress() {
          return callback(guildId);
        }
    };
    return jsx(price(onChange[5]), {
      disabled: state === tiers.LOADING,
      placeholder: stringResult,
      onPress() {
          return callback(guildId);
        }
    });
  } else {
    obj = {};
    let formatPriceResult;
    if (null != price) {
      obj = guildId(onChange[6]);
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
        const obj = { label: guildId(onChange[6]).formatPrice(value, outer1_5), value };
        return obj;
      });
      obj.onItemSelect = function onItemSelect(arg0) {
        if (null != outer1_2) {
          outer1_2(arg0);
        }
        price(onChange[8]).hideActionSheet();
      };
      let tmp3;
      if (null != price) {
        tmp3 = price;
      }
      obj.selectedItem = tmp3;
      obj.hasIcons = false;
      obj.openLazy(guildId(onChange[10])(onChange[9], onChange.paths), "GuildRoleSubscriptionPriceTierSelect", obj);
    };
    let intl = guildId(onChange[4]).intl;
    obj.placeholder = intl.string(guildId(onChange[4]).t.nCOuYJ);
    return jsx(price(onChange[5]), {});
  }
};
