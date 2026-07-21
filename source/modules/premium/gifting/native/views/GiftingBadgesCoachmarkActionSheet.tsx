// Module ID: 15493
// Function ID: 118214
// Name: HasBadgeCoachmark
// Dependencies: []
// Exports: default

// Module 15493 (HasBadgeCoachmark)
function HasBadgeCoachmark(markAsDismissed) {
  let currentTier;
  let giftCount;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const arg1 = markAsDismissed;
  ({ currentTier, giftCount } = markAsDismissed);
  const tmp = callback3();
  const items = [markAsDismissed];
  const items1 = [markAsDismissed];
  const callback = React.useCallback(() => {
    callback(closure_2[7]).hideActionSheet();
    markAsDismissed(constants.TAKE_ACTION);
    const obj = callback(closure_2[7]);
    const rootNavigationRef = markAsDismissed(closure_2[8]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      rootNavigationRef.navigate("you");
    }
  }, items);
  const callback1 = React.useCallback(() => {
    markAsDismissed(constants.USER_DISMISS);
  }, items1);
  let obj = { startExpanded: true, onDismiss: callback1 };
  obj = { style: tmp.container };
  obj = { style: tmp.graphicContainer };
  let tmp9 = null != currentTier.simple_icon_url;
  if (tmp9) {
    const obj1 = { icon: currentTier.simple_icon_url, size: 120 };
    tmp9 = callback(importDefault(dependencyMap[10]), obj1);
  }
  obj.children = tmp9;
  const items2 = [callback(closure_5, obj), , ];
  const obj2 = { style: tmp.textContainer };
  const obj3 = { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003131513669135372, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000962250703, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001018557979663, style: tmp.text };
  const intl = arg1(dependencyMap[12]).intl;
  const obj4 = {};
  const name = currentTier.name;
  let str = "";
  if (null != name) {
    str = name;
  }
  obj4.tierName = str;
  obj3.children = intl.format(importDefault(dependencyMap[13]).a+jfuy, obj4);
  const items3 = [callback(arg1(dependencyMap[11]).Text, obj3), ];
  const obj5 = { style: tmp.text };
  const intl2 = arg1(dependencyMap[12]).intl;
  const obj6 = {};
  let num3 = 0;
  if (null != giftCount) {
    num3 = giftCount;
  }
  obj6.giftCount = num3;
  obj5.children = intl2.formatToPlainString(importDefault(dependencyMap[13]).QxRA6w, obj6);
  items3[1] = callback(arg1(dependencyMap[11]).Text, obj5);
  obj2.children = items3;
  items2[1] = closure_9(closure_5, obj2);
  const obj7 = { style: tmp.footer };
  const obj8 = { grow: true };
  const intl3 = arg1(dependencyMap[12]).intl;
  obj8.text = intl3.string(arg1(dependencyMap[12]).t.RzWDqY);
  obj8.onPress = callback;
  obj7.children = callback(arg1(dependencyMap[14]).Button, obj8);
  items2[2] = callback(closure_5, obj7);
  obj.children = items2;
  obj.children = closure_9(closure_5, obj);
  return callback(arg1(dependencyMap[9]).BottomSheet, obj);
}
function NewBadgeCoachmark(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const arg1 = markAsDismissed;
  const tmp = callback3();
  const items = [markAsDismissed];
  const items1 = [markAsDismissed];
  const callback = React.useCallback(() => {
    let obj = callback(closure_2[7]);
    obj.hideActionSheet();
    markAsDismissed(constants.TAKE_ACTION);
    obj = {};
    const items = [callback(closure_2[16]).GIFTING_BADGE_COACHMARK];
    obj.analyticsLocations = items;
    markAsDismissed(closure_2[15]).openGiftModal(obj);
  }, items);
  const callback1 = React.useCallback(() => {
    markAsDismissed(constants.USER_DISMISS);
  }, items1);
  let obj = { startExpanded: true, onDismiss: callback1 };
  obj = { style: tmp.container };
  obj = { style: tmp.graphicContainer };
  const obj1 = {};
  const obj2 = { uri: importDefault(dependencyMap[17]) };
  obj1.source = obj2;
  obj1.style = tmp.newBadgeImage;
  obj.children = callback(closure_4, obj1);
  const items2 = [callback(closure_5, obj), , ];
  const obj3 = { style: tmp.textContainer };
  const obj4 = { style: tmp.text };
  const intl = arg1(dependencyMap[12]).intl;
  obj4.children = intl.string(importDefault(dependencyMap[13]).Q2RQka);
  const items3 = [callback(arg1(dependencyMap[11]).Text, obj4), ];
  const obj5 = { "Null": "<string:1178599425>", "Null": "<string:3295084545>", "Null": "<string:1689649153>", style: tmp.text };
  const intl2 = arg1(dependencyMap[12]).intl;
  obj5.children = intl2.string(importDefault(dependencyMap[13]).3EQnkg);
  items3[1] = callback(arg1(dependencyMap[11]).Text, obj5);
  obj3.children = items3;
  items2[1] = callback2(closure_5, obj3);
  const obj6 = { style: tmp.footer };
  const obj7 = { grow: true };
  const intl3 = arg1(dependencyMap[12]).intl;
  obj7.text = intl3.string(importDefault(dependencyMap[13]).DZnomS);
  const obj8 = { size: "sm", color: importDefault(dependencyMap[6]).colors.CONTROL_PRIMARY_TEXT_DEFAULT };
  obj7.icon = callback(arg1(dependencyMap[18]).GiftIcon, obj8);
  obj7.onPress = callback;
  obj6.children = callback(arg1(dependencyMap[14]).Button, obj7);
  items2[2] = callback(closure_5, obj6);
  obj.children = items2;
  obj.children = callback2(closure_5, obj);
  return callback(arg1(dependencyMap[9]).BottomSheet, obj);
}
let closure_3 = importAll(dependencyMap[0]);
({ Image: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
const ContentDismissActionType = arg1(dependencyMap[3]).ContentDismissActionType;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { gap: importDefault(dependencyMap[6]).space.PX_24 };
obj.container = obj;
const obj1 = { alignSelf: true, marginTop: true, opacity: true, style: "absolute", padding: importDefault(dependencyMap[6]).space.PX_16 };
obj.graphicContainer = obj1;
obj.newBadgeImage = { <string:2886096359>: null, <string:493005838>: "c0ad0e7adefed3e2ebad52c7f4beb394", <string:2886572783>: "progress-setup" };
const tmp3 = arg1(dependencyMap[4]);
obj.textContainer = { gap: importDefault(dependencyMap[6]).space.PX_8 };
obj.text = { textAlign: "center" };
obj.footer = { width: "100%" };
let closure_10 = obj.createStyles(obj);
const obj2 = { gap: importDefault(dependencyMap[6]).space.PX_8 };
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgesCoachmarkActionSheet.tsx");

export default function GiftingBadgesCoachmarkActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  let obj = arg1(dependencyMap[19]);
  const items = [closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let getCurrentTier;
    let getSingleRequirementProgress;
    const obj = { currentTier: getCurrentTier(callback(closure_2[20]).BadgeId.GIFTING) };
    let current;
    ({ getCurrentTier, getSingleRequirementProgress } = closure_6);
    const singleRequirementProgress = getSingleRequirementProgress(callback(closure_2[20]).BadgeId.GIFTING);
    if (null != singleRequirementProgress) {
      current = singleRequirementProgress.current;
    }
    obj.giftCount = current;
    return obj;
  });
  const currentTier = stateFromStoresObject.currentTier;
  if (null != currentTier) {
    obj = { markAsDismissed, currentTier, giftCount: tmp2 };
    let tmp5 = callback(HasBadgeCoachmark, obj);
  } else {
    obj = { markAsDismissed };
    tmp5 = callback(NewBadgeCoachmark, obj);
  }
  return tmp5;
};
