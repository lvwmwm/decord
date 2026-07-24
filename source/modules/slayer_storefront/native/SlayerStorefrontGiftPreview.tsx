// Module ID: 8255
// Function ID: 65148
// Name: WarningBox
// Dependencies: [31, 27, 33, 4130, 8256, 4126, 1212, 8258, 3104, 2]
// Exports: default

// Module 8255 (WarningBox)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
function WarningBox(application) {
  let canStartAuthorization;
  let hasAccountLinked;
  let mobileAccountLinkingDisabled;
  let sku;
  application = application.application;
  ({ canStartAuthorization, hasAccountLinked, mobileAccountLinkingDisabled, sku } = application);
  let name = null;
  if (hasAccountLinked) {
    return null;
  } else {
    let obj = {};
    let tmp8 = dependencyMap;
    obj.look = require(8258) /* InfoBox */.InfoBoxLooks.WARNING;
    obj.style = tmp.warningBox;
    const intl = require(1212) /* getSystemLocale */.intl;
    if (mobileAccountLinkingDisabled) {
      obj = {};
      tmp8 = name == application;
      name = undefined;
      if (!tmp8) {
        name = application.name;
      }
      obj.applicationName = name;
      obj.children = intl.formatToPlainString(importDefault(3104).BMMo2K, obj);
      let tmp9 = obj;
    } else if (canStartAuthorization) {
      obj = { skuName: sku.name };
      let name1;
      if (name != application) {
        name1 = application.name;
      }
      obj.applicationName = name1;
      obj.children = intl.formatToPlainString(tmp7(1212).t["EgCl+Q"], obj);
      tmp9 = obj;
    } else {
      obj.children = intl.format(tmp7(1212).t["3T0cpx"], {});
      tmp9 = obj;
    }
    closure_4(importDefault(8258), tmp9);
    const tmp3 = closure_4;
    const tmp6 = importDefault(8258);
  }
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ container: { alignItems: "center", justifyContent: "center", gap: 16, marginTop: 20 }, text: { textAlign: "center", paddingHorizontal: 32 }, warningBox: { marginHorizontal: 16 } });
const result = require("jsxProd").fileFinishedImporting("modules/slayer_storefront/native/SlayerStorefrontGiftPreview.tsx");

export default function SlayerStorefrontGiftPreview(arg0) {
  let application;
  let canStartAuthorization;
  let hasAccountLinked;
  let mobileAccountLinkingDisabled;
  let sender;
  let sku;
  ({ sku, application, mobileAccountLinkingDisabled } = arg0);
  ({ sender, hasAccountLinked, canStartAuthorization } = arg0);
  if (mobileAccountLinkingDisabled === undefined) {
    mobileAccountLinkingDisabled = false;
  }
  const tmp = callback2();
  let tmp3Result = null;
  if (null != sku) {
    let obj = { style: tmp.container };
    obj = { sku };
    const items = [callback(importDefault(8256), obj), , ];
    obj = { variant: "heading-md/normal", color: "mobile-text-heading-primary", style: tmp.text };
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj1 = { sender, skuName: sku.name };
    let name;
    if (null != application) {
      name = application.name;
    }
    obj1.applicationName = name;
    obj.children = intl.formatToPlainString(require(1212) /* getSystemLocale */.t["2tBYtA"], obj1);
    items[1] = callback(require(4126) /* Text */.Text, obj);
    const obj2 = { canStartAuthorization, hasAccountLinked, mobileAccountLinkingDisabled, sku, application };
    items[2] = callback(WarningBox, obj2);
    obj.children = items;
    tmp3Result = closure_5(View, obj);
    const tmp3 = closure_5;
    const tmp4 = View;
    const tmp8 = callback;
  }
  return tmp3Result;
};
