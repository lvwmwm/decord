// Module ID: 10660
// Function ID: 10661
// Name: GuildPowerupsCardFooter
// Dependencies: [17, 21, 5243, 7864, 575, 5866, 7557, 1113, 2717, 10661, 10631, 9915, 2]
// Exports: GuildPowerupsCardFooter

// Module 10660 (GuildPowerupsCardFooter)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import _modDef2717 from "module_2717" /* 2717 */;
import Text_Text from "Text/Text" /* 5866 */;
import CircleErrorIcon2 from "CircleErrorIcon" /* 7557 */;
import CircleCheckIcon2 from "CircleCheckIcon" /* 7864 */;
import BoostGemIcon2 from "BoostGemIcon" /* 9915 */;
import getGuildPowerupFormattedDateStringDefault from "getGuildPowerupFormattedDateString" /* 10631 */;
import entitlementExpirationDateToStringDefault from "entitlementExpirationDateToString" /* 10661 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
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
    items = [React3(CircleCheckIcon, obj2), React3(Text_Text.Text, { color: "status-positive", variant: "body-sm/semibold", children: text })];
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
    const obj3 = { color: "text-feedback-warning", variant: "body-sm/semibold", children: formatToMarkdownString(prop, obj4) };
    const Text = Text_Text.Text;
    const intl = intl2.intl;
    formatToMarkdownString = intl.formatToMarkdownString;
    obj4 = { dateString: entitlementExpirationDateToStringDefault(dateString) };
    prop = _modDef2717["ol/ao/"];
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
    const obj3 = { color: "text-feedback-warning", variant: "body-sm/semibold", children: formatToPlainString(v6e2ry1, obj4) };
    const Text = Text_Text.Text;
    const intl = intl2.intl;
    formatToPlainString = intl.formatToPlainString;
    obj4 = { dateString: getGuildPowerupFormattedDateStringDefault(removingAt) };
    v6e2ry1 = _modDef2717["6e2ry1"];
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
    let items;
    ({ cost, costDecorator } = arg0);
    let tmp3Result = null;
    if (null != cost) {
      const obj = { style: tmp.inline, children: items };
      const obj2 = { size: "sm", color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
      const BoostGemIcon = BoostGemIcon2.BoostGemIcon;
      items = [React3(BoostGemIcon, obj2), ];
      const Text = Text_Text.Text;
      const intl = intl2.intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj3 = { required: cost, decorator: costDecorator };
      const t2Wbo1 = intl2.t.t2Wbo1;
      const tmp3 = hasOwnProperty;
      const tmp4 = View;
      const tmp5 = React3;
      if (costDecorator == null) {
        costDecorator = "";
      }
      const obj4 = { variant: "body-sm/semibold", color: "text-subtle", children: formatToPlainString(t2Wbo1, obj3) };
      items[1] = tmp5(Text, obj4);
      tmp3Result = tmp3(tmp4, obj);
    }
    return tmp3Result;
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
