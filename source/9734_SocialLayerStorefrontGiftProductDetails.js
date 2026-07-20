// Module ID: 9734
// Function ID: 75724
// Name: SocialLayerStorefrontGiftProductDetails
// Dependencies: []
// Exports: default

// Module 9734 (SocialLayerStorefrontGiftProductDetails)
let closure_3 = importAll(dependencyMap[0]);
({ Image: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = arg1(dependencyMap[2]).PriceSetAssignmentPurchaseTypes;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { -9223372036854775808: true, filter: true, gap: importDefault(dependencyMap[5]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16, paddingVertical: importDefault(dependencyMap[5]).space.PX_16, borderWidth: 2, borderColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND, borderRadius: importDefault(dependencyMap[5]).radii.lg, marginHorizontal: importDefault(dependencyMap[5]).space.PX_16 };
obj.container = obj;
const tmp3 = arg1(dependencyMap[3]);
obj.text = { flex: 1, gap: importDefault(dependencyMap[5]).space.PX_4 };
const obj2 = { -9223372036854775808: true, filter: true, gap: importDefault(dependencyMap[5]).space.PX_4 };
obj.appInfo = obj2;
const obj3 = { aze: false, azj: false, borderRadius: importDefault(dependencyMap[5]).radii.xs };
obj.appIcon = obj3;
let closure_9 = obj.createStyles(obj);
const obj1 = { flex: 1, gap: importDefault(dependencyMap[5]).space.PX_4 };
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontGiftProductDetails.tsx");

export default function SocialLayerStorefrontGiftProductDetails(sku) {
  sku = sku.sku;
  const tmp = callback2();
  let obj = arg1(dependencyMap[6]);
  const getOrFetchApplication = obj.useGetOrFetchApplication(sku.applicationId);
  const arg1 = getOrFetchApplication;
  let obj1 = arg1(dependencyMap[7]);
  obj = { sku, priceSetAssignmentPurchaseType: constants.GIFT };
  const userPrice = obj1.useFormattedSKUPrice(obj).userPrice;
  const items = [getOrFetchApplication];
  const memo = React.useMemo(() => {
    let applicationIconURL = null;
    if (null != getOrFetchApplication) {
      let obj = callback(closure_2[8]);
      obj = {};
      ({ id: obj2.id, icon: obj2.icon } = getOrFetchApplication);
      obj.size = 20;
      applicationIconURL = obj.getApplicationIconURL(obj);
    }
    return applicationIconURL;
  }, items);
  obj = { style: tmp.container };
  const items1 = [callback(importDefault(dependencyMap[9]), { sku, size: 55 }), , ];
  obj1 = { style: tmp.text };
  let tmp7Result = null != getOrFetchApplication;
  if (tmp7Result) {
    const obj2 = { style: tmp.appInfo };
    let tmp9 = null != memo;
    if (tmp9) {
      const obj3 = {};
      const obj4 = { uri: memo };
      obj3.source = obj4;
      obj3.style = tmp.appIcon;
      tmp9 = callback(closure_4, obj3);
    }
    const items2 = [tmp9, ];
    const obj5 = { INTEGRATION_CREATE: "<string:3305963521>", ConstraintReasonCode: "<string:671547393>", children: getOrFetchApplication.name };
    items2[1] = callback(arg1(dependencyMap[10]).Text, obj5);
    obj2.children = items2;
    tmp7Result = closure_8(closure_5, obj2);
    const tmp7 = closure_8;
    const tmp8 = closure_5;
  }
  const items3 = [tmp7Result, callback(arg1(dependencyMap[10]).Text, { variant: "text-md/semibold", children: sku.name })];
  obj1.children = items3;
  items1[1] = closure_8(closure_5, obj1);
  let tmp15 = null != userPrice;
  if (tmp15) {
    const obj7 = { variant: "text-md/semibold", children: userPrice };
    tmp15 = callback(arg1(dependencyMap[10]).Text, obj7);
  }
  items1[2] = tmp15;
  obj.children = items1;
  return closure_8(closure_5, obj);
};
