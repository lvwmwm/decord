// Module ID: 11984
// Function ID: 92642
// Name: UserProfileWidgetReportButton
// Dependencies: []
// Exports: default

// Module 11984 (UserProfileWidgetReportButton)
importAll(dependencyMap[0]);
const Pressable = arg1(dependencyMap[1]).Pressable;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_5 = {};
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/user_profile/native/UserProfileWidgetReportButton.tsx");

export default function UserProfileWidgetReportButton(arg0) {
  ({ userId: closure_0, widget: closure_1 } = arg0);
  let obj = {};
  const intl = arg1(dependencyMap[3]).intl;
  obj.label = intl.string(arg1(dependencyMap[3]).t.D4GvHE);
  obj.variant = "destructive";
  obj.IconComponent = arg1(dependencyMap[4]).FlagIcon;
  obj.action = function action() {
    return callback(closure_2[5]).showReportModalForWidget(callback, closure_1);
  };
  const items = [obj];
  obj = {
    items,
    children(ref) {
      let obj = Object.create(null);
      obj.ref = 0;
      obj = { ref: ref.ref };
      const merged = Object.assign(Object.assign(ref, obj));
      obj["hitSlop"] = closure_5;
      obj["accessibilityRole"] = "button";
      const intl = callback(closure_2[3]).intl;
      obj["accessibilityLabel"] = intl.string(callback(closure_2[3]).t.xpSHSk);
      obj = { size: "sm", color: callback2(closure_2[8]).colors.TEXT_MUTED };
      obj["children"] = callback3(callback(closure_2[7]).MoreHorizontalIcon, obj);
      return callback3(closure_3, obj);
    }
  };
  return jsx(arg1(dependencyMap[6]).ContextMenu, obj);
};
