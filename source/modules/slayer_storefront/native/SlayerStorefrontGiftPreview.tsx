// Module ID: 8205
// Function ID: 64883
// Name: WarningBox
// Dependencies: []
// Exports: default

// Module 8205 (WarningBox)
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
    obj.look = arg1(dependencyMap[7]).InfoBoxLooks.WARNING;
    obj.style = tmp.warningBox;
    const intl = arg1(dependencyMap[6]).intl;
    if (mobileAccountLinkingDisabled) {
      obj = {};
      tmp8 = name == application;
      name = undefined;
      if (!tmp8) {
        name = application.name;
      }
      obj.applicationName = name;
      obj.children = intl.formatToPlainString(importDefault(tmp8[8]).BMMo2K, obj);
      let tmp9 = obj;
    } else if (canStartAuthorization) {
      obj = { skuName: sku.name };
      let name1;
      if (name != application) {
        name1 = application.name;
      }
      obj.applicationName = name1;
      obj.children = intl.formatToPlainString(tmp7(tmp8[6]).t.EgCl+Q, obj);
      tmp9 = obj;
    } else {
      obj.children = intl.format(tmp7(tmp8[6]).t.3T0cpx, {});
      tmp9 = obj;
    }
    closure_4(importDefault(dependencyMap[7]), tmp9);
    const tmp3 = closure_4;
    const tmp6 = importDefault(dependencyMap[7]);
  }
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).createStyles({ container: {}, text: { "Bool(true)": null, "Bool(true)": null }, warningBox: { marginHorizontal: 16 } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/slayer_storefront/native/SlayerStorefrontGiftPreview.tsx");

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
    const items = [callback(importDefault(dependencyMap[4]), obj), , ];
    obj = { style: tmp.text };
    const intl = arg1(dependencyMap[6]).intl;
    const obj1 = { sender, skuName: sku.name };
    let name;
    if (null != application) {
      name = application.name;
    }
    obj1.applicationName = name;
    obj.children = intl.formatToPlainString(arg1(dependencyMap[6]).t.2tBYtA, obj1);
    items[1] = callback(arg1(dependencyMap[5]).Text, obj);
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
