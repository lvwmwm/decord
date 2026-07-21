// Module ID: 14535
// Function ID: 109509
// Dependencies: []

// Module 14535
const View = arg1(dependencyMap[1]).View;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let obj = {};
obj = { right: "5b00e6abae27bddaf8498fd271ace686", height: "PhoneIcon", width: "png", borderColor: true, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW, borderWidth: 24, borderRadius: 24, justifyContent: null, alignItems: "a568e12daf3f479ad26c9db6582fe1a2" };
obj.contentContainer = obj;
obj.buttonContainer = { FAILED: true, width: true, backgroundColor: true };
obj.title = { borderRadius: null, borderColor: null };
obj.heroIllustrationContainer = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true };
let closure_6 = arg1(dependencyMap[3]).createStyles(obj);
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(function PremiumTrialOfferActionSheetContent(onConfirm) {
  let intervalDuration;
  let trialOffer;
  ({ trialOffer, intervalDuration } = onConfirm);
  const tmp = callback2();
  let subscription_trial;
  if (null != trialOffer) {
    subscription_trial = trialOffer.subscription_trial;
  }
  let obj = { IconComponent: arg1(dependencyMap[5]).UserIcon };
  const intl = arg1(dependencyMap[6]).intl;
  obj.label = intl.string(arg1(dependencyMap[6]).t.kpMomJ);
  const intl2 = arg1(dependencyMap[6]).intl;
  obj.description = intl2.string(arg1(dependencyMap[6]).t.uVUtPw);
  const items = [obj, , ];
  obj = { IconComponent: arg1(dependencyMap[7]).ChatSmileIcon };
  const intl3 = arg1(dependencyMap[6]).intl;
  obj.label = intl3.string(arg1(dependencyMap[6]).t.R2IV/Q);
  const intl4 = arg1(dependencyMap[6]).intl;
  obj.description = intl4.string(arg1(dependencyMap[6]).t.3SUJLd);
  items[1] = obj;
  obj = { IconComponent: arg1(dependencyMap[8]).FolderIcon };
  const intl5 = arg1(dependencyMap[6]).intl;
  obj.label = intl5.string(arg1(dependencyMap[6]).t.u/NJKc);
  const intl6 = arg1(dependencyMap[6]).intl;
  obj.description = intl6.string(arg1(dependencyMap[6]).t.i1UuMk);
  items[2] = obj;
  const obj1 = { style: tmp.contentContainer };
  const items1 = [callback(View, { style: tmp.heroIllustrationContainer, children: callback(arg1(dependencyMap[9]).NitroWumpusFlightRight3dIllustration, { bhk: "heading-md/extrabold", bic: "text-overlay-light" }) }), , , ];
  const obj3 = { style: tmp.title };
  const intl7 = arg1(dependencyMap[6]).intl;
  const obj4 = {};
  let sku_id;
  if (null != subscription_trial) {
    sku_id = subscription_trial.sku_id;
  }
  let displayNameFromSku = null;
  if (null != sku_id) {
    let obj7 = arg1(dependencyMap[11]);
    let sku_id1;
    if (null != subscription_trial) {
      sku_id1 = subscription_trial.sku_id;
    }
    displayNameFromSku = obj7.getDisplayNameFromSku(sku_id1);
  }
  obj4.displayName = displayNameFromSku;
  obj4.duration = intervalDuration;
  obj3.children = intl7.formatToPlainString(arg1(dependencyMap[6]).t.q8eMc0, obj4);
  items1[1] = callback(arg1(dependencyMap[10]).Text, obj3);
  items1[2] = callback(importDefault(dependencyMap[12]), { perks: items });
  const obj5 = { style: tmp.buttonContainer };
  const obj6 = { size: "lg" };
  const intl8 = arg1(dependencyMap[6]).intl;
  obj6.text = intl8.formatToPlainString(arg1(dependencyMap[6]).t.xASjq5, { duration: intervalDuration });
  obj6.onPress = onConfirm.onConfirm;
  obj6.grow = true;
  obj7 = { size: "md", color: importDefault(dependencyMap[4]).unsafe_rawColors.WHITE };
  obj6.icon = callback(arg1(dependencyMap[14]).NitroWheelIcon, obj7);
  obj5.children = callback(arg1(dependencyMap[13]).Button, obj6);
  items1[3] = callback(View, obj5);
  obj1.children = items1;
  return closure_5(View, obj1);
});
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/premium/native/trials/PremiumTrialOfferActionSheetContent.tsx");

export default memoResult;
