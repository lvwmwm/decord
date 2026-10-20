// Module ID: 11860
// Function ID: 11861
// Name: applicationWidgetRefreshOutcome
// Dependencies: [1128, 3208, 2]
// Exports: default

// Module 11860 (applicationWidgetRefreshOutcome)
import intl7 from "intl" /* 1128 */;
import _modDef3208 from "module_3208" /* 3208 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/application_widget/applicationWidgetRefreshOutcome.tsx");

export default function applicationWidgetRefreshOutcome(arg0) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  if ("dispatched" === arg0) {
    const obj2 = { text: intl6.string(_modDef3208["um/5Kc"]), ok: true };
    intl6 = intl7.intl;
    return obj2;
  } else if ("rate_limited" === arg0) {
    const obj3 = { text: intl5.string(_modDef3208.T1n7hc), ok: false };
    intl5 = intl7.intl;
    return obj3;
  } else if ("unauthorized" === arg0) {
    const obj4 = { text: intl4.string(_modDef3208["30UxZU"]), ok: false };
    intl4 = intl7.intl;
    return obj4;
  } else if ("no_widget_config" === arg0) {
    const obj5 = { text: intl3.string(_modDef3208["1UFWet"]), ok: false };
    intl3 = intl7.intl;
    return obj5;
  } else if ("undeliverable" === arg0) {
    const obj6 = { text: intl2.string(_modDef3208.ypKX9A), ok: false };
    intl2 = intl7.intl;
    return obj6;
  } else {
    const obj = { text: intl.string(_modDef3208.BLKD4B), ok: false };
    intl = intl7.intl;
    return obj;
  }
};
