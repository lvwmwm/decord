// Module ID: 5274
// Function ID: 5275
// Name: QuarantineModeInfoAlert
// Dependencies: [19, 676, 21, 4344, 5275, 712, 4772, 1297, 1236, 4340, 2]
// Exports: default

// Module 5274 (QuarantineModeInfoAlert)
import "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { header: null, text: null };
createCacheKey = {};
const merged = Object.assign(require("createTextStyle")(require("ME").Fonts.PRIMARY_BOLD, require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
createCacheKey.textAlign = "center";
createCacheKey.marginVertical = 12;
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center", marginVertical: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/quarantine/native/QuarantineModeInfoAlert.tsx");

export default function QuarantineModeInfoAlert(onClose) {
  const tmp = createCacheKey();
  let obj = { onClose: onClose.onClose, children: null };
  obj = { style: tmp.header, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t.EouHwv);
  const items = [callback(require(1297) /* Button */.LegacyText, obj), ];
  obj = { style: tmp.text, variant: "text-md/medium", children: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl2.string(require(1236) /* getSystemLocale */.t.zNPBMA);
  items[1] = callback(require(4340) /* Text */.Text, obj);
  obj[1] = items;
  return callback2(importDefault(4772), obj);
};
