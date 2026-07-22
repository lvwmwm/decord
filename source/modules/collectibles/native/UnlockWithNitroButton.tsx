// Module ID: 11833
// Function ID: 91732
// Name: UnlockWithNitroButton
// Dependencies: []
// Exports: UnlockWithNitroButton

// Module 11833 (UnlockWithNitroButton)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const ShopCtaEnum = arg1(dependencyMap[3]).ShopCtaEnum;
const jsx = arg1(dependencyMap[4]).jsx;
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/collectibles/native/UnlockWithNitroButton.tsx");

export const UnlockWithNitroButton = function UnlockWithNitroButton(shouldShrink) {
  let text;
  let flag = shouldShrink.shouldShrink;
  if (flag === undefined) {
    flag = false;
  }
  ({ onTrackPress: closure_0, text } = shouldShrink);
  let importDefault;
  let obj = arg1(dependencyMap[5]);
  const items = [closure_4, closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let isPurchasingProductResult = null != isClaiming.isClaiming;
    if (!isPurchasingProductResult) {
      isPurchasingProductResult = purchasingProduct.isPurchasingProduct(callback(closure_2[6]).ProductIds.GENERIC_CONSUMABLE);
    }
    return isPurchasingProductResult;
  });
  importDefault = importDefault(dependencyMap[7])();
  if (null == text) {
    const intl = arg1(dependencyMap[8]).intl;
    text = intl.string(arg1(dependencyMap[8]).t.sEAnVH);
  }
  obj = {};
  let tmp5;
  if (flag) {
    obj = { children: text };
    tmp5 = jsx(arg1(dependencyMap[10]).Text, obj);
  }
  obj.textElement = tmp5;
  let tmp9;
  if (!flag) {
    tmp9 = text;
  }
  obj.text = tmp9;
  obj.accessibilityLabel = text;
  obj.variant = "primary";
  let str = "md";
  if (flag) {
    str = "sm";
  }
  obj.size = str;
  obj.grow = true;
  obj.icon = jsx(arg1(dependencyMap[11]).NitroWheelIcon, { "Bool(false)": true, "Bool(false)": "/assets/images/native" });
  obj.onPress = function onPress() {
    if (null != callback) {
      callback(constants.UNLOCK_WITH_NITRO);
    }
    callback2();
  };
  obj.disabled = stateFromStores;
  return jsx(arg1(dependencyMap[9]).BaseTextButton, obj);
};
