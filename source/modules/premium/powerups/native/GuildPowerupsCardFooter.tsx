// Module ID: 11546
// Function ID: 89881
// Name: GuildPowerupCardFooterActive
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: GuildPowerupsCardFooter

// Module 11546 (GuildPowerupCardFooterActive)
import { View } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

class GuildPowerupCardFooterActive {
  constructor(arg0) {
    obj = { style: closure_6().inline };
    obj = { size: "xs" };
    obj.color = require("__exportStarResult1").colors.STATUS_POSITIVE;
    items = [, ];
    items[0] = jsx(require("__exportStarResult1").CircleCheckIcon, obj);
    items[1] = jsx(require("__exportStarResult1").Text, { children: global.text });
    obj.children = items;
    return jsxs(View, obj);
  }
}
class GuildPowerupCardFooterExpiring {
  constructor(arg0) {
    obj = { style: closure_6().inline };
    obj = { size: "xs" };
    obj.color = require("__exportStarResult1").colors.STATUS_WARNING;
    items = [, ];
    items[0] = jsx(require("__exportStarResult1").CircleErrorIcon, obj);
    obj1 = {};
    intl = require("__exportStarResult1").intl;
    obj2 = {};
    obj2.dateString = require("__exportStarResult1")(global.dateString);
    obj1.children = intl.formatToMarkdownString(require("__exportStarResult1").ol/ao/, obj2);
    items[1] = jsx(require("__exportStarResult1").Text, obj1);
    obj.children = items;
    return jsxs(View, obj);
  }
}
class GuildPowerupCardFooterRemoving {
  constructor(arg0) {
    obj = { style: closure_6().inline };
    obj = { size: "xs" };
    obj.color = require("__exportStarResult1").colors.STATUS_WARNING;
    items = [, ];
    items[0] = jsx(require("__exportStarResult1").CircleErrorIcon, obj);
    obj1 = {};
    intl = require("__exportStarResult1").intl;
    obj2 = {};
    obj2.dateString = require("__exportStarResult1")(global.removingAt);
    obj1.children = intl.formatToPlainString(require("__exportStarResult1").6e2ry1, obj2);
    items[1] = jsx(require("__exportStarResult1").Text, obj1);
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
      tmp6 = require;
      tmp7 = dependencyMap;
      num = 11;
      tmp3 = jsxs;
      tmp4 = View;
      obj = {};
      str = "sm";
      obj.size = "sm";
      tmp8 = importDefault;
      num2 = 4;
      obj.color = require("__exportStarResult1").unsafe_rawColors.GUILD_BOOSTING_PINK;
      items = [, ];
      items[0] = jsx(require("__exportStarResult1").BoostGemIcon, obj);
      num3 = 5;
      tmp9 = jsx;
      obj1 = {};
      num4 = 7;
      intl = require("__exportStarResult1").intl;
      obj2 = {};
      obj2.required = cost;
      str2 = "";
      if (null != costDecorator) {
        str2 = costDecorator;
      }
      obj2.decorator = str2;
      obj1.children = intl.formatToPlainString(require("__exportStarResult1").t.t2Wbo1, obj2);
      items[1] = tmp9(require("__exportStarResult1").Text, obj1);
      obj.children = items;
      tmp3Result = tmp3(tmp4, obj);
    }
    return tmp3Result;
  }
}
({ jsx: closure_4, jsxs: closure_5 } = __exportStarResult1);
let closure_6 = __exportStarResult1.createStyles({ container: { justifyContent: "space-between" }, inline: { <string:3461472865>: false, <string:1447977218>: false, <string:1640807382>: false } });
const result = __exportStarResult1.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsCardFooter.tsx");

export { GuildPowerupCardFooterActive };
export { GuildPowerupCardFooterExpiring };
export { GuildPowerupCardFooterRemoving };
export { GuildPowerupCardFooterStatus };
export { GuildPowerupCardFooterCost };
export const GuildPowerupsCardFooter = function GuildPowerupsCardFooter(status) {
  let obj = { style: items };
  const items = [, , ];
  ({ inline: arr[0], container: arr[1] } = callback3());
  items[2] = status.style;
  obj = { cost: status.cost, costDecorator: status.costDecorator };
  const items1 = [callback(GuildPowerupCardFooterCost, obj), callback(GuildPowerupCardFooterStatus, { status: status.status })];
  obj.children = items1;
  return callback2(View, obj);
};
