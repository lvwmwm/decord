// Module ID: 12258
// Function ID: 12259
// Name: GuildPowerupsCardFooter
// Dependencies: [17, 21, 5092, 558, 576, 6867, 587, 5088, 6289, 1126, 2600, 12259, 12234, 6663, 9409, 2]

// Module 12258 (GuildPowerupsCardFooter)
import react_native from "react-native" /* 17 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import _modDef2600 from "module_2600" /* 2600 */;
import Text_Text from "Text/Text" /* 5088 */;
import CircleErrorIcon2 from "CircleErrorIcon" /* 6289 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6663 */;
import CircleCheckIcon2 from "CircleCheckIcon" /* 6867 */;
import getGuildPowerupFormattedDateStringDefault from "getGuildPowerupFormattedDateString" /* 12234 */;
import entitlementExpirationDateToStringDefault from "entitlementExpirationDateToString" /* 12259 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ container: { justifyContent: "space-between" }, inline: { flexDirection: "row", alignItems: "center", gap: 2 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildPowerupCardFooterActive(text) {
  let first;
  let items;
  let tmp9;
  const obj = react;
  const cResult = obj.c(6);
  text = text.text;
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "xs", color: nativeDefault.colors.STATUS_POSITIVE };
    const CircleCheckIcon = tmp(6867).CircleCheckIcon;
    const tmp8 = React3(CircleCheckIcon, obj2);
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== text) {
    const obj3 = { color: "status-positive", variant: "text-sm/bold", children: text };
    const tmp11 = React3(Text_Text.Text, obj3);
    cResult[1] = text;
    cResult[2] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === tmp4.inline) {
    let tmp12;
    if (cResult[4] === tmp9) {
      tmp12 = cResult[5];
    }
    return tmp12;
  }
  const obj4 = { style: tmp4.inline, children: items };
  items = [first, tmp9];
  const tmp13 = hasOwnProperty(View, obj4);
  cResult[3] = tmp4.inline;
  cResult[4] = tmp9;
  cResult[5] = tmp13;
  tmp12 = tmp13;
}) : (function GuildPowerupCardFooterActive(text) {
  let items;
  text = text.text;
  const obj = { style: closure_6().inline, children: items };
  const obj2 = { size: "xs", color: nativeDefault.colors.STATUS_POSITIVE };
  const CircleCheckIcon = CircleCheckIcon2.CircleCheckIcon;
  items = [React3(CircleCheckIcon, obj2), React3(Text_Text.Text, { color: "status-positive", variant: "text-sm/bold", children: text })];
  return hasOwnProperty(View, obj);
});
let closure_7 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildPowerupCardFooterExpiring(dateString) {
  let first;
  let items;
  let tmp13;
  let tmp9;
  const obj = react;
  const cResult = obj.c(8);
  dateString = dateString.dateString;
  const tmp4 = closure_6();
  const inline = tmp4.inline;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "xs", color: nativeDefault.colors.STATUS_WARNING };
    const CircleErrorIcon = tmp(6289).CircleErrorIcon;
    const tmp8 = React3(CircleErrorIcon, obj2);
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== dateString) {
    const intl = tmp(1126).intl;
    const formatToMarkdownString = intl.formatToMarkdownString;
    const obj3 = { dateString: entitlementExpirationDateToStringDefault(dateString) };
    const prop = _modDef2600["ol/ao/"];
    const result = formatToMarkdownString(prop, obj3);
    cResult[1] = dateString;
    cResult[2] = result;
    tmp9 = result;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== tmp9) {
    const obj4 = { color: "text-feedback-warning", variant: "text-sm/bold", children: tmp9 };
    const tmp15 = React3(Text_Text.Text, obj4);
    cResult[3] = tmp9;
    cResult[4] = tmp15;
    tmp13 = tmp15;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] === tmp4.inline) {
    let tmp16;
    if (cResult[6] === tmp13) {
      tmp16 = cResult[7];
    }
    return tmp16;
  }
  const obj5 = { style: inline, children: items };
  items = [first, tmp13];
  const tmp17 = hasOwnProperty(View, obj5);
  cResult[5] = tmp4.inline;
  cResult[6] = tmp13;
  cResult[7] = tmp17;
  tmp16 = tmp17;
}) : (function GuildPowerupCardFooterExpiring(dateString) {
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
  prop = _modDef2600["ol/ao/"];
  items[1] = React3(Text, obj3);
  return hasOwnProperty(View, obj);
});
let closure_8 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildPowerupCardFooterRemoving(removingAt) {
  let first;
  let items;
  let tmp13;
  let tmp9;
  const obj = react;
  const cResult = obj.c(8);
  removingAt = removingAt.removingAt;
  const tmp4 = closure_6();
  const inline = tmp4.inline;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "xs", color: nativeDefault.colors.STATUS_WARNING };
    const CircleErrorIcon = tmp(6289).CircleErrorIcon;
    const tmp8 = React3(CircleErrorIcon, obj2);
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== removingAt) {
    const intl = tmp(1126).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj3 = { dateString: getGuildPowerupFormattedDateStringDefault(removingAt) };
    const v6e2ry1 = _modDef2600["6e2ry1"];
    const formatToPlainStringResult = formatToPlainString(v6e2ry1, obj3);
    cResult[1] = removingAt;
    cResult[2] = formatToPlainStringResult;
    tmp9 = formatToPlainStringResult;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== tmp9) {
    const obj4 = { color: "text-feedback-warning", variant: "text-sm/bold", children: tmp9 };
    const tmp15 = React3(Text_Text.Text, obj4);
    cResult[3] = tmp9;
    cResult[4] = tmp15;
    tmp13 = tmp15;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] === tmp4.inline) {
    let tmp16;
    if (cResult[6] === tmp13) {
      tmp16 = cResult[7];
    }
    return tmp16;
  }
  const obj5 = { style: inline, children: items };
  items = [first, tmp13];
  const tmp17 = hasOwnProperty(View, obj5);
  cResult[5] = tmp4.inline;
  cResult[6] = tmp13;
  cResult[7] = tmp17;
  tmp16 = tmp17;
}) : (function GuildPowerupCardFooterRemoving(removingAt) {
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
  v6e2ry1 = _modDef2600["6e2ry1"];
  items[1] = React3(Text, obj3);
  return hasOwnProperty(View, obj);
});
let closure_9 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildPowerupCardFooterStatus(status) {
  const obj = react;
  const cResult = obj.c(6);
  status = status.status;
  if (null == status) {
    return null;
  } else {
    const type = status.type;
    if ("expiring" === type) {
      let tmp10;
      if (cResult[0] !== status.expiringAt) {
        const obj2 = { dateString: status.expiringAt };
        const tmp13 = React3(closure_8, obj2);
        cResult[0] = status.expiringAt;
        cResult[1] = tmp13;
        tmp10 = tmp13;
      } else {
        tmp10 = cResult[1];
      }
      return tmp10;
    } else if ("removing" === type) {
      let tmp6;
      if (cResult[2] !== status.removingAt) {
        const obj3 = { removingAt: status.removingAt };
        const tmp9 = React3(closure_9, obj3);
        cResult[2] = status.removingAt;
        cResult[3] = tmp9;
        tmp6 = tmp9;
      } else {
        tmp6 = cResult[3];
      }
      return tmp6;
    } else if ("active" === type) {
      let tmp2;
      if (cResult[4] !== status.statusText) {
        const obj4 = { text: status.statusText };
        const tmp5 = React3(closure_7, obj4);
        cResult[4] = status.statusText;
        cResult[5] = tmp5;
        tmp2 = tmp5;
      } else {
        tmp2 = cResult[5];
      }
      return tmp2;
    }
  }
}) : (function GuildPowerupCardFooterStatus(status) {
  status = status.status;
  if (null == status) {
    return null;
  } else {
    const type = status.type;
    if ("expiring" === type) {
      const obj2 = { dateString: status.expiringAt };
      return React3(closure_8, obj2);
    } else if ("removing" === type) {
      const obj3 = { removingAt: status.removingAt };
      return React3(closure_9, obj3);
    } else if ("active" === type) {
      const obj = { text: status.statusText };
      return React3(closure_7, obj);
    }
  }
});
let closure_10 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildPowerupCardFooterCost(arg0) {
  let cost;
  let costDecorator;
  let items;
  let str2;
  const obj = react;
  const cResult = obj.c(10);
  ({ cost, costDecorator } = arg0);
  const tmp4 = closure_6();
  ManaTypeConsolidationExperiment;
  if (null == cost) {
    return null;
  } else {
    let first;
    const _Symbol = Symbol;
    const inline = tmp4.inline;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { size: "sm", color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
      const BoostGemIcon = tmp(9409).BoostGemIcon;
      const tmp10 = React3(BoostGemIcon, obj2);
      cResult[0] = tmp10;
      first = tmp10;
    } else {
      first = cResult[0];
    }
    let str = "heading-sm/semibold";
    if (tmp6) {
      str = "experimental/body-sm/semibold";
    }
    if (cResult[1] === cost) {
      let tmp11;
      if (cResult[2] === costDecorator) {
        tmp11 = cResult[3];
      }
      if (cResult[4] === str) {
        let tmp13;
        if (cResult[5] === tmp11) {
          tmp13 = cResult[6];
        }
        if (cResult[7] === tmp4.inline) {
          let tmp16;
          if (cResult[8] === tmp13) {
            tmp16 = cResult[9];
          }
          return tmp16;
        }
        const obj3 = { style: inline, children: items };
        items = [first, tmp13];
        const tmp19 = hasOwnProperty(View, obj3);
        cResult[7] = tmp4.inline;
        cResult[8] = tmp13;
        cResult[9] = tmp19;
        tmp16 = tmp19;
      }
      const obj4 = { variant: str, color: "text-subtle", children: tmp11 };
      const tmp15 = React3(Text_Text.Text, obj4);
      cResult[4] = str;
      cResult[5] = tmp11;
      cResult[6] = tmp15;
      tmp13 = tmp15;
    }
    const intl = tmp(1126).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj5 = { required: cost, decorator: str2 };
    str2 = costDecorator;
    const t2Wbo1 = tmp(1126).t.t2Wbo1;
    if (costDecorator == null) {
      str2 = "";
    }
    const formatToPlainStringResult = formatToPlainString(t2Wbo1, obj5);
    cResult[1] = cost;
    cResult[2] = costDecorator;
    cResult[3] = formatToPlainStringResult;
    tmp11 = formatToPlainStringResult;
  }
}) : (function GuildPowerupCardFooterCost(arg0) {
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
    const BoostGemIcon = tmp2(9409).BoostGemIcon;
    items = [React3(BoostGemIcon, obj2), ];
    let str = "heading-sm/semibold";
    const Text = tmp2(5088).Text;
    const tmp7 = hasOwnProperty;
    const tmp8 = View;
    const tmp9 = React3;
    if (tmp5) {
      str = "experimental/body-sm/semibold";
    }
    const obj3 = { variant: str, color: "text-subtle", children: formatToPlainString(t2Wbo1, obj4) };
    const intl = tmp2(1126).intl;
    formatToPlainString = intl.formatToPlainString;
    obj4 = { required: cost, decorator: costDecorator };
    t2Wbo1 = tmp2(1126).t.t2Wbo1;
    if (costDecorator == null) {
      costDecorator = "";
    }
    items[1] = tmp9(Text, obj3);
    tmp7Result = tmp7(tmp8, obj);
  }
  return tmp7Result;
});
let closure_11 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildPowerupsCardFooter(arg0) {
  let cost;
  let costDecorator;
  let items;
  let status;
  let style;
  const obj = react;
  const cResult = obj.c(13);
  const tmp2 = closure_6();
  ({ cost, costDecorator, status, style } = arg0);
  if (cResult[0] === style) {
    if (cResult[1] === tmp2.container) {
      let tmp3;
      if (cResult[2] === tmp2.inline) {
        tmp3 = cResult[3];
      }
      if (cResult[4] === cost) {
        let tmp4;
        let tmp8;
        if (cResult[5] === costDecorator) {
          tmp4 = cResult[6];
        }
        if (cResult[7] !== status) {
          const obj2 = { status };
          const tmp11 = React3(closure_10, obj2);
          cResult[7] = status;
          cResult[8] = tmp11;
          tmp8 = tmp11;
        } else {
          tmp8 = cResult[8];
        }
        if (cResult[9] === tmp3) {
          if (cResult[10] === tmp4) {
            let tmp12;
            if (cResult[11] === tmp8) {
              tmp12 = cResult[12];
            }
            return tmp12;
          }
        }
        const obj3 = { style: tmp3, children: items };
        items = [tmp4, tmp8];
        const tmp15 = hasOwnProperty(View, obj3);
        cResult[9] = tmp3;
        cResult[10] = tmp4;
        cResult[11] = tmp8;
        cResult[12] = tmp15;
        tmp12 = tmp15;
      }
      const obj4 = { cost, costDecorator };
      const tmp7 = React3(closure_11, obj4);
      cResult[4] = cost;
      cResult[5] = costDecorator;
      cResult[6] = tmp7;
      tmp4 = tmp7;
    }
  }
  const items1 = [, , ];
  ({ inline: arr[0], container: arr[1] } = tmp2);
  items1[2] = style;
  cResult[0] = style;
  cResult[1] = tmp2.container;
  cResult[2] = tmp2.inline;
  cResult[3] = items1;
  tmp3 = items1;
}) : (function GuildPowerupsCardFooter(cost) {
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
  items1[0] = React3(closure_11, obj2);
  items1[1] = React3(closure_10, { status });
  return hasOwnProperty(View, obj);
});
let result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsCardFooter.tsx");

export const GuildPowerupCardFooterActive = tmp3;
export const GuildPowerupCardFooterExpiring = tmp4;
export const GuildPowerupCardFooterRemoving = tmp5;
export const GuildPowerupCardFooterStatus = tmp6;
export const GuildPowerupCardFooterCost = tmp7;
export const GuildPowerupsCardFooter = tmp8;
