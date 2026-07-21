// Module ID: 7407
// Function ID: 59546
// Name: SubscriptionRenewalMutationsNotice
// Dependencies: []
// Exports: default

// Module 7407 (SubscriptionRenewalMutationsNotice)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const isNoneSubscription = arg1(dependencyMap[2]).isNoneSubscription;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { "Null": null, "Null": 14, "Null": 14, "Null": 1, "Null": null, "Null": null, marginTop: "center", borderRadius: importDefault(dependencyMap[5]).radii.xs, backgroundColor: arg1(dependencyMap[6]).DARK_PRIMARY_630_LIGHT_PRIMARY_230 };
obj.container = obj;
const obj1 = { <string:252898708>: null, <string:3355923052>: null, color: arg1(dependencyMap[6]).DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
obj.icon = obj1;
const obj2 = { <string:3769257420>: -33283686791197806000000, <string:995506788>: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010061404906786437, color: arg1(dependencyMap[6]).DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
obj.text = obj2;
let closure_7 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/premium/native/SubscriptionRenewalMutationsNotice.tsx");

export default function SubscriptionRenewalMutationsNotice(arg0) {
  let renewalMutations;
  let subscription;
  ({ subscription, renewalMutations } = arg0);
  const tmp = callback2();
  let obj = { style: tmp.container };
  obj = { style: tmp.icon };
  const items = [callback(arg1(dependencyMap[7]).WarningCircle, obj), ];
  obj = { style: tmp.text };
  const intl = arg1(dependencyMap[8]).intl;
  const obj1 = {};
  if (!subscription.hasExternalPlanChange) {
    if (!isNoneSubscription(renewalMutations.planId)) {
      let displayName = importDefault(dependencyMap[9]).getDisplayName(renewalMutations.planId);
      const obj5 = importDefault(dependencyMap[9]);
    }
    obj1.planName = displayName;
    obj1.date = subscription.currentPeriodEnd;
    obj.children = intl.format(tmp5, obj1);
    items[1] = callback(arg1(dependencyMap[7]).LegacyText, obj);
    obj.children = items;
    return closure_6(View, obj);
  }
  displayName = arg1(dependencyMap[9]).getExternalPlanDisplayName(renewalMutations);
};
