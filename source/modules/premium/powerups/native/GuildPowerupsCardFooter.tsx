// Module ID: 11557
// Function ID: 89955
// Name: GuildPowerupCardFooterActive
// Dependencies: [27, 33, 4130, 4091, 689, 4126, 7507, 1212, 2230, 11558, 11532, 8013, 2]
// Exports: GuildPowerupsCardFooter

// Module 11557 (GuildPowerupCardFooterActive)
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
class GuildPowerupCardFooterActive {
  constructor(arg0) {
    obj = { style: c6().inline };
    obj = { size: "xs" };
    obj.color = require("_createForOfIteratorHelperLoose").colors.STATUS_POSITIVE;
    items = [, ];
    items[0] = jsx(require("CircleCheckIcon").CircleCheckIcon, obj);
    obj1 = { color: "status-positive", variant: "text-sm/bold" };
    obj1.children = global.text;
    items[1] = jsx(require("Text").Text, obj1);
    obj.children = items;
    return jsxs(View, obj);
  }
}
class GuildPowerupCardFooterExpiring {
  constructor(arg0) {
    obj = { style: c6().inline };
    obj = { size: "xs" };
    obj.color = require("_createForOfIteratorHelperLoose").colors.STATUS_WARNING;
    items = [, ];
    items[0] = jsx(require("CircleErrorIcon").CircleErrorIcon, obj);
    obj1 = { color: "text-feedback-warning", variant: "text-sm/bold" };
    intl = require("getSystemLocale").intl;
    obj2 = {};
    obj2.dateString = require("entitlementExpirationDateToString")(global.dateString);
    obj1.children = intl.formatToMarkdownString(require("messagesProxy")["ol/ao/"], obj2);
    items[1] = jsx(require("Text").Text, obj1);
    obj.children = items;
    return jsxs(View, obj);
  }
}
class GuildPowerupCardFooterRemoving {
  constructor(arg0) {
    obj = { style: c6().inline };
    obj = { size: "xs" };
    obj.color = require("_createForOfIteratorHelperLoose").colors.STATUS_WARNING;
    items = [, ];
    items[0] = jsx(require("CircleErrorIcon").CircleErrorIcon, obj);
    obj1 = { color: "text-feedback-warning", variant: "text-sm/bold" };
    intl = require("getSystemLocale").intl;
    obj2 = {};
    obj2.dateString = require("getGuildPowerupFormattedDateString")(global.removingAt);
    obj1.children = intl.formatToPlainString(require("messagesProxy")["6e2ry1"], obj2);
    items[1] = jsx(require("Text").Text, obj1);
    obj.children = items;
    return jsxs(View, obj);
  }
}
class GuildPowerupCardFooterStatus {
  constructor(arg0) {
    status = global.status;
    if (null == status) {
      return null;
    } else {
      type = status.type;
      str3 = "expiring";
      if ("expiring" === type) {
        tmp5 = jsx;
        tmp6 = GuildPowerupCardFooterExpiring;
        obj = {};
        obj.dateString = status.expiringAt;
        return jsx(GuildPowerupCardFooterExpiring, obj);
      } else {
        str = "removing";
        if ("removing" === type) {
          tmp3 = jsx;
          tmp4 = GuildPowerupCardFooterRemoving;
          obj1 = {};
          obj1.removingAt = status.removingAt;
          return jsx(GuildPowerupCardFooterRemoving, obj1);
        } else {
          str2 = "active";
          if ("active" === type) {
            tmp = jsx;
            tmp2 = GuildPowerupCardFooterActive;
            obj = {};
            obj.text = status.statusText;
            return jsx(GuildPowerupCardFooterActive, obj);
          } else {
            return;
          }
        }
      }
    }
  }
}
class GuildPowerupCardFooterCost {
  constructor(arg0) {
    ({ cost, costDecorator } = global);
    tmp3Result = null;
    if (null != cost) {
      obj = {};
      obj.style = tmp.inline;
      tmp5 = jsx;
      tmp6 = closure_0;
      tmp7 = closure_2;
      num = 11;
      tmp3 = jsxs;
      tmp4 = View;
      obj = {};
      str = "sm";
      obj.size = "sm";
      tmp8 = closure_1;
      num2 = 4;
      obj.color = require("_createForOfIteratorHelperLoose").unsafe_rawColors.GUILD_BOOSTING_PINK;
      items = [, ];
      items[0] = jsx(require("BoostGemIcon").BoostGemIcon, obj);
      num3 = 5;
      tmp9 = jsx;
      obj1 = { variant: "heading-sm/semibold", color: "text-subtle" };
      num4 = 7;
      intl = require("getSystemLocale").intl;
      obj2 = {};
      obj2.required = cost;
      str2 = "";
      if (null != costDecorator) {
        str2 = costDecorator;
      }
      obj2.decorator = str2;
      obj1.children = intl.formatToPlainString(require("getSystemLocale").t.t2Wbo1, obj2);
      items[1] = tmp9(require("Text").Text, obj1);
      obj.children = items;
      tmp3Result = tmp3(tmp4, obj);
    }
    return tmp3Result;
  }
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ container: { justifyContent: "space-between" }, inline: { flexDirection: "row", alignItems: "center", gap: 2 } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsCardFooter.tsx");

export { GuildPowerupCardFooterActive };
export { GuildPowerupCardFooterExpiring };
export { GuildPowerupCardFooterRemoving };
export { GuildPowerupCardFooterStatus };
export { GuildPowerupCardFooterCost };
export const GuildPowerupsCardFooter = function GuildPowerupsCardFooter(status) {
  let obj = { style: items };
  items = [, , ];
  ({ inline: arr[0], container: arr[1] } = callback3());
  items[2] = status.style;
  obj = { cost: status.cost, costDecorator: status.costDecorator };
  const items1 = [callback(GuildPowerupCardFooterCost, obj), callback(GuildPowerupCardFooterStatus, { status: status.status })];
  obj.children = items1;
  return callback2(View, obj);
};
