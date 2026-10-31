// Module ID: 14083
// Function ID: 14084
// Name: GuildPowerupsCardFooter
// Dependencies: [17, 21, 5014, 7340, 575, 5624, 7086, 1113, 2570, 14084, 14059, 7149, 9920, 2]
// Exports: GuildPowerupsCardFooter

// Module 14083 (GuildPowerupsCardFooter)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import _modDef2570 from "module_2570" /* 2570 */;
import Text_Text from "Text/Text" /* 5624 */;
import CircleErrorIcon2 from "CircleErrorIcon" /* 7086 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 7149 */;
import CircleCheckIcon2 from "CircleCheckIcon" /* 7340 */;
import getGuildPowerupFormattedDateStringDefault from "getGuildPowerupFormattedDateString" /* 14059 */;
import entitlementExpirationDateToStringDefault from "entitlementExpirationDateToString" /* 14084 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
class GuildPowerupCardFooterActive {
  constructor(text) {
    let items;
    text = text.text;
    const obj = { style: closure_6().inline, children: items };
    const obj2 = { size: "xs", color: nativeDefault.colors.STATUS_POSITIVE };
    const CircleCheckIcon = CircleCheckIcon2.CircleCheckIcon;
    items = [React3(CircleCheckIcon, obj2), React3(Text_Text.Text, { color: "status-positive", variant: "text-sm/bold", children: text })];
    return hasOwnProperty(View, obj);
  }
}
class GuildPowerupCardFooterExpiring {
  constructor(dateString) {
    let formatToMarkdownString;
    let items;
    let obj4;
    let prop;
    dateString = dateString.dateString;
    const obj = { style: closure_6().inline, children: items };
    const obj2 = { size: "xs", color: nativeDefault.colors.STATUS_WARNING };
    const CircleErrorIcon = CircleErrorIcon2.CircleErrorIcon;
    items = [React3(CircleErrorIcon, obj2), ];
    const obj3 = { color: "text-feedback-warning", variant: "text-sm/bold", children: formatToMarkdownString(prop, obj4) };
    const Text = Text_Text.Text;
    const intl = intl2.intl;
    formatToMarkdownString = intl.formatToMarkdownString;
    obj4 = { dateString: entitlementExpirationDateToStringDefault(dateString) };
    prop = _modDef2570["ol/ao/"];
    items[1] = React3(Text, obj3);
    return hasOwnProperty(View, obj);
  }
}
class GuildPowerupCardFooterRemoving {
  constructor(removingAt) {
    let formatToPlainString;
    let items;
    let obj4;
    let v6e2ry1;
    removingAt = removingAt.removingAt;
    const obj = { style: closure_6().inline, children: items };
    const obj2 = { size: "xs", color: nativeDefault.colors.STATUS_WARNING };
    const CircleErrorIcon = CircleErrorIcon2.CircleErrorIcon;
    items = [React3(CircleErrorIcon, obj2), ];
    const obj3 = { color: "text-feedback-warning", variant: "text-sm/bold", children: formatToPlainString(v6e2ry1, obj4) };
    const Text = Text_Text.Text;
    const intl = intl2.intl;
    formatToPlainString = intl.formatToPlainString;
    obj4 = { dateString: getGuildPowerupFormattedDateStringDefault(removingAt) };
    v6e2ry1 = _modDef2570["6e2ry1"];
    items[1] = React3(Text, obj3);
    return hasOwnProperty(View, obj);
  }
}
class GuildPowerupCardFooterStatus {
  constructor(status) {
    status = status.status;
    if (null == status) {
      return null;
    } else {
      const type = status.type;
      if ("expiring" === type) {
        const obj2 = { dateString: status.expiringAt };
        return React3(GuildPowerupCardFooterExpiring, obj2);
      } else if ("removing" === type) {
        const obj3 = { removingAt: status.removingAt };
        return React3(GuildPowerupCardFooterRemoving, obj3);
      } else if ("active" === type) {
        const obj = { text: status.statusText };
        return React3(GuildPowerupCardFooterActive, obj);
      }
    }
  }
}
class GuildPowerupCardFooterCost {
  constructor(arg0) {
    let cost;
    let costDecorator;
    let formatToPlainString;
    let items;
    let obj4;
    let t2Wbo1;
    ({ cost, costDecorator } = arg0);
    const tmp = closure_6();
    ManaTypeConsolidationExperiment;
    let tmp7Result = null;
    if (null != cost) {
      const obj = { style: tmp.inline, children: items };
      const obj2 = { size: "sm", color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
      const BoostGemIcon = tmp2(9920).BoostGemIcon;
      items = [React3(BoostGemIcon, obj2), ];
      let str = "heading-sm/semibold";
      const Text = tmp2(5624).Text;
      const tmp7 = hasOwnProperty;
      const tmp8 = View;
      const tmp9 = React3;
      if (tmp5) {
        str = "experimental/body-sm/semibold";
      }
      const obj3 = { variant: str, color: "text-subtle", children: formatToPlainString(t2Wbo1, obj4) };
      const intl = tmp2(1113).intl;
      formatToPlainString = intl.formatToPlainString;
      obj4 = { required: cost, decorator: costDecorator };
      t2Wbo1 = tmp2(1113).t.t2Wbo1;
      if (costDecorator == null) {
        costDecorator = "";
      }
      items[1] = tmp9(Text, obj3);
      tmp7Result = tmp7(tmp8, obj);
    }
    return tmp7Result;
  }
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const metroRequire = createStyles.createStyles({ container: { justifyContent: "space-between" }, inline: { flexDirection: "row", alignItems: "center", gap: 2 } });
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsCardFooter.tsx");

export { GuildPowerupCardFooterActive };
export { GuildPowerupCardFooterExpiring };
export { GuildPowerupCardFooterRemoving };
export { GuildPowerupCardFooterStatus };
export { GuildPowerupCardFooterCost };
export function GuildPowerupsCardFooter(cost) {
  let items;
  let items1;
  const obj = { style: items, children: items1 };
  items = [, , ];
  ({ inline: arr[0], container: arr[1] } = closure_6());
  items[2] = cost.style;
  const status = cost.status;
  items1 = [, ];
  const obj2 = { cost: cost.cost, costDecorator: cost.costDecorator };
  closure_6();
  items1[0] = React3(GuildPowerupCardFooterCost, obj2);
  items1[1] = React3(GuildPowerupCardFooterStatus, { status });
  return hasOwnProperty(View, obj);
}
