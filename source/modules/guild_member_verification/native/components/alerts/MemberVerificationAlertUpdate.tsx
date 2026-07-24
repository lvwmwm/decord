// Module ID: 9200
// Function ID: 72052
// Name: MemberVerificationAlertUpdate
// Dependencies: [31, 27, 653, 33, 4130, 4561, 1212, 3827, 9201, 4126, 2]
// Exports: default

// Module 9200 (MemberVerificationAlertUpdate)
import "result";
import { Image } from "get ActivityIndicator";
import { DownloadLinks } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ headerImage: { marginLeft: "auto", marginRight: "auto", marginTop: 8 }, header: { marginTop: 24, textAlign: "center" }, text: { marginVertical: 8, lineHeight: 18, textAlign: "center" } });
const result = require("ME").fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertUpdate.tsx");

export default function MemberVerificationAlertUpdate(onClose) {
  const tmp = callback3();
  let obj = {};
  const merged = Object.assign(onClose);
  const intl = require(1212) /* getSystemLocale */.intl;
  obj["confirmText"] = intl.string(require(1212) /* getSystemLocale */.t.b8siyY);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj["cancelText"] = intl2.string(require(1212) /* getSystemLocale */.t["ETE/oC"]);
  obj["onConfirm"] = function onConfirm() {
    return outer1_1(outer1_2[7]).openURL(outer1_4.IOS);
  };
  obj["onCancel"] = onClose.onClose;
  obj = { source: importDefault(9201), style: tmp.headerImage };
  const items = [callback(Image, obj), , ];
  obj = { style: tmp.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.children = intl3.string(require(1212) /* getSystemLocale */.t.kkjNHU);
  items[1] = callback(require(4126) /* Text */.Text, obj);
  const obj1 = { style: tmp.text, variant: "text-sm/medium", color: "text-default" };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl4.string(require(1212) /* getSystemLocale */.t.gnkqzQ);
  items[2] = callback(require(4126) /* Text */.Text, obj1);
  obj["children"] = items;
  return callback2(importDefault(4561), obj);
};
