// Module ID: 16253
// Function ID: 125571
// Name: WarningNotice
// Dependencies: []
// Exports: default

// Module 16253 (WarningNotice)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { paddingHorizontal: null, paddingBottom: null, paddingTop: null, borderRadius: importDefault(dependencyMap[4]).radii.xs };
obj.container = obj;
obj.horizontalContainer = { "Null": 7, "Null": 370 };
obj.message = { 9223372036854775807: null, 9223372036854775807: null, 0: null };
obj.actionButtonWrapper = {};
const tmp3 = arg1(dependencyMap[2]);
obj.containerYellow = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_FEEDBACK_WARNING, borderColor: importDefault(dependencyMap[4]).colors.STATUS_WARNING };
const obj1 = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_FEEDBACK_WARNING, borderColor: importDefault(dependencyMap[4]).colors.STATUS_WARNING };
obj.textYellow = { color: importDefault(dependencyMap[4]).colors.TEXT_FEEDBACK_WARNING };
obj.alertIcon = {};
let closure_6 = obj.createStyles(obj);
const obj2 = { color: importDefault(dependencyMap[4]).colors.TEXT_FEEDBACK_WARNING };
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/WarningNotice.tsx");

export default function WarningNotice(arg0) {
  let ctaLabel;
  let disabled;
  let notice;
  let onClick;
  let style;
  let submitting;
  ({ ctaLabel, onClick } = arg0);
  ({ style, notice, submitting, disabled } = arg0);
  const tmp = callback3();
  let obj = { style: items };
  const items = [style, , ];
  ({ container: arr[1], containerYellow: arr[2] } = tmp);
  obj = { style: tmp.horizontalContainer };
  obj = { style: tmp.alertIcon, source: importDefault(dependencyMap[6]) };
  const items1 = [callback(importDefault(dependencyMap[5]), obj), ];
  const items2 = [, ];
  ({ message: arr3[0], textYellow: arr3[1] } = tmp);
  items1[1] = callback(arg1(dependencyMap[7]).Text, { style: items2, children: notice });
  obj.children = items1;
  const items3 = [callback2(View, obj), ];
  let tmp5 = null != onClick && null != ctaLabel;
  if (tmp5) {
    const obj1 = { style: tmp.actionButtonWrapper };
    const obj2 = { onPress: onClick, disabled, loading: submitting, text: ctaLabel, grow: true };
    obj1.children = callback(arg1(dependencyMap[8]).Button, obj2);
    tmp5 = callback(View, obj1);
  }
  items3[1] = tmp5;
  obj.children = items3;
  return callback2(View, obj);
};
