// Module ID: 16346
// Function ID: 126130
// Name: ActionableNotice
// Dependencies: []
// Exports: default

// Module 16346 (ActionableNotice)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_5 = arg1(dependencyMap[3]).createStyles({ container: { "Null": true, "Null": true, "Null": true }, message: { "Bool(false)": "Activities and Clear", "Bool(false)": "email_verification" }, actionButton: {} });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/ActionableNotice.tsx");

export default function ActionableNotice(arg0) {
  let ctaMessage;
  let disabled;
  let message;
  let onClick;
  let style;
  let submitting;
  ({ submitting, disabled } = arg0);
  ({ style, message, ctaMessage, onClick } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = callback2();
  let obj = { style: items };
  const items = [style, tmp.container];
  obj = { style: tmp.message, children: message };
  const items1 = [callback(arg1(dependencyMap[4]).Text, obj), ];
  obj = { style: tmp.actionButton };
  const obj1 = { size: "sm", onPress: onClick };
  if (!submitting) {
    submitting = disabled;
  }
  obj1.disabled = submitting;
  obj1.text = ctaMessage;
  obj.children = callback(arg1(dependencyMap[5]).Button, obj1);
  items1[1] = callback(View, obj);
  obj.children = items1;
  return closure_4(View, obj);
};
