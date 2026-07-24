// Module ID: 10314
// Function ID: 79637
// Name: MutedUntilText
// Dependencies: [31, 33, 4130, 1212, 4126, 2]
// Exports: default

// Module 10314 (MutedUntilText)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let obj = { SERVER: 0, [0]: "SERVER", CHANNEL: 1, [1]: "CHANNEL", DM: 2, [2]: "DM", CATEGORY: 3, [3]: "CATEGORY" };
let closure_4 = _createForOfIteratorHelperLoose.createStyles({ formHintText: { lineHeight: 18, marginBottom: 8, marginTop: 8, paddingHorizontal: 16 } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MutedUntilText.tsx");

export default function MutedUntilText(arg0) {
  let muteConfig;
  let type;
  ({ muteConfig, type } = arg0);
  const tmp = callback();
  if (null != muteConfig) {
    if (null != muteConfig.end_time) {
      if (obj.SERVER === type) {
        let N2NXMd = require(1212) /* getSystemLocale */.t.MQfdK9;
      } else if (obj.CHANNEL === type) {
        N2NXMd = require(1212) /* getSystemLocale */.t["N/kd49"];
      } else if (obj.DM === type) {
        N2NXMd = require(1212) /* getSystemLocale */.t.c4aY0P;
      } else if (obj.CATEGORY === type) {
        N2NXMd = require(1212) /* getSystemLocale */.t.N2NXMd;
      } else {
        return null;
      }
      obj = { style: tmp.formHintText, variant: "text-sm/medium", color: "text-muted" };
      const intl5 = require(1212) /* getSystemLocale */.intl;
      obj = {};
      const _Date = Date;
      const date = new Date(muteConfig.end_time);
      obj.endTime = date.toLocaleString(require(1212) /* getSystemLocale */.intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
      obj.endTimeHook = function endTimeHook(children) {
        const obj = { variant: "text-sm/medium", color: "control-brand-foreground", children };
        return outer1_2(outer1_0(outer1_1[4]).Text, obj, "muted");
      };
      obj.children = intl5.format(N2NXMd, obj);
      return jsx(require(4126) /* Text */.Text, {});
    }
  }
  if (obj.SERVER === type) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl4.string(require(1212) /* getSystemLocale */.t["/b/DU7"]);
  } else if (obj.CHANNEL === type) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    stringResult = intl3.string(require(1212) /* getSystemLocale */.t.utURT8);
  } else if (obj.DM === type) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    stringResult = intl2.string(require(1212) /* getSystemLocale */.t.jxF9er);
  } else if (obj.CATEGORY === type) {
    const intl = require(1212) /* getSystemLocale */.intl;
    stringResult = intl.string(require(1212) /* getSystemLocale */.t["6+wqqt"]);
  } else {
    return null;
  }
  obj = { style: tmp.formHintText, variant: "text-sm/medium", color: "text-muted", children: stringResult };
  return jsx(require(4126) /* Text */.Text, { style: tmp.formHintText, variant: "text-sm/medium", color: "text-muted", children: stringResult });
};
export const MuteSettingType = obj;
