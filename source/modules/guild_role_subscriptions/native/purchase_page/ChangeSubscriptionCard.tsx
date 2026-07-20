// Module ID: 15142
// Function ID: 114256
// Name: emphasisHook
// Dependencies: []
// Exports: default

// Module 15142 (emphasisHook)
function emphasisHook(children) {
  return callback2(arg1(dependencyMap[7]).Text, { children });
}
let closure_4 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const SubscriptionStatusTypes = arg1(dependencyMap[3]).SubscriptionStatusTypes;
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
let closure_10 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/ChangeSubscriptionCard.tsx");

export default function ChangeSubscriptionCard(activeSubscription) {
  let activeListingId;
  let changeToListingId;
  activeSubscription = activeSubscription.activeSubscription;
  const arg1 = activeSubscription;
  ({ activeListingId, changeToListingId } = activeSubscription);
  let obj = importAll(dependencyMap[9]);
  const first = callback(obj.useName(activeListingId), 1)[0];
  let obj1 = importAll(dependencyMap[9]);
  let obj2 = importDefault(dependencyMap[10])(activeSubscription.currentPeriodEnd);
  const tmp = callback4();
  obj = { startExpanded: true };
  obj = { style: items };
  const items = [tmp.container, ];
  obj1 = { paddingBottom: 16 + importDefault(dependencyMap[8])().bottom };
  items[1] = obj1;
  obj2 = {};
  const intl = arg1(dependencyMap[12]).intl;
  obj2.children = intl.format(arg1(dependencyMap[12]).t.l3uCCX, { activeListingName: first });
  const items1 = [callback2(arg1(dependencyMap[7]).Text, obj2), callback2(arg1(dependencyMap[13]).Spacer, { size: 16 }), , ];
  const obj3 = { INTEGRATION_CREATE: "AutomodMentionRaidLimit", ConstraintReasonCode: "%URIError%" };
  const intl2 = arg1(dependencyMap[12]).intl;
  const formatResult = obj2.format("MMMM Do");
  const tmp4 = callback2;
  const tmp5 = callback3;
  const tmp6 = View;
  const items2 = [intl2.format(arg1(dependencyMap[12]).t.Zmtrs2, { activeListingName: first, changeToListingName: callback(obj1.useName(changeToListingId), 1)[0], billingEndDate: obj2.format("MMMM Do"), emphasisHook }), "\n\n", ];
  const intl3 = arg1(dependencyMap[12]).intl;
  items2[2] = intl3.format(arg1(dependencyMap[12]).t.KIiWca, { emphasisHook });
  obj3.children = items2;
  items1[2] = callback3(arg1(dependencyMap[7]).Text, obj3);
  let tmp7 = null;
  if (activeSubscription.status !== SubscriptionStatusTypes.CANCELED) {
    const obj6 = {};
    const obj7 = { size: 16 };
    const items3 = [callback2(arg1(dependencyMap[13]).Spacer, obj7), ];
    const obj8 = {};
    const intl4 = arg1(dependencyMap[12]).intl;
    obj8.text = intl4.string(arg1(dependencyMap[12]).t.UwHVxr);
    obj8.onPress = function onPress() {
      let obj = callback(paths[15]);
      obj = { subscriptionId: activeSubscription.id };
      obj.pushLazy(activeSubscription(paths[17])(paths[16], paths.paths), obj);
      callback(paths[18]).hideActionSheet();
    };
    items3[1] = callback2(arg1(dependencyMap[14]).ArrowButton, obj8);
    obj6.children = items3;
    tmp7 = callback3(closure_9, obj6);
  }
  items1[3] = tmp7;
  obj.children = items1;
  obj.children = tmp5(tmp6, obj);
  return tmp4(arg1(dependencyMap[11]).BottomSheet, obj);
};
