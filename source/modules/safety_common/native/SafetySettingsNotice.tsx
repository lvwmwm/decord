// Module ID: 13520
// Function ID: 102608
// Name: SafetySettingsNotice
// Dependencies: []
// Exports: default

// Module 13520 (SafetySettingsNotice)
let closure_2 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = arg1(dependencyMap[2]).SafetySettingsNoticeAction;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { "Bool(true)": 8, "Bool(true)": null, "Bool(true)": "\u270A\u{1F3FF}", gap: importDefault(dependencyMap[5]).space.PX_8, padding: importDefault(dependencyMap[5]).space.PX_8, borderRadius: importDefault(dependencyMap[5]).radii.xs, borderColor: importDefault(dependencyMap[5]).colors.TEXT_LINK, borderWidth: 1, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_FEEDBACK_INFO };
obj.blockedIgnoredRedirect = obj;
let closure_7 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/safety_common/native/SafetySettingsNotice.tsx");

export default function SafetySettingsNotice(noticeType) {
  let label;
  let labelHook;
  ({ label, labelHook } = noticeType);
  const arg1 = labelHook;
  noticeType = noticeType.noticeType;
  const dependencyMap = noticeType;
  const count = noticeType.count;
  const items = [noticeType];
  const effect = React.useEffect(() => {
    const result = labelHook(noticeType[6]).trackSafetySettingsNoticeAnalytics(noticeType, constants.VIEWED);
  }, items);
  const items1 = [noticeType, labelHook];
  const React = React.useCallback(() => {
    labelHook();
    const result = labelHook(noticeType[6]).trackSafetySettingsNoticeAnalytics(noticeType, constants.LEARN_MORE);
  }, items1);
  let obj = { style: callback2().blockedIgnoredRedirect };
  const items2 = [callback(arg1(dependencyMap[7]).CircleInformationIcon, { color: "text-link" }), ];
  obj = { style: { flexShrink: 1 }, variant: "heading-sm/medium" };
  if (null != count) {
    const intl2 = arg1(dependencyMap[9]).intl;
    obj = {
      hook(children) {
          const obj = { 9223372036854775807: null, 9223372036854775807: null, 0: null, onPress: closure_2, children };
          return callback(labelHook(noticeType[8]).Text, obj);
        },
      count
    };
    let formatResult = intl2.format(label, obj);
  } else {
    const intl = arg1(dependencyMap[9]).intl;
    const obj1 = {
      hook(children) {
          const obj = { 9223372036854775807: null, 9223372036854775807: null, 0: null, onPress: closure_2, children };
          return callback(labelHook(noticeType[8]).Text, obj);
        }
    };
    formatResult = intl.format(label, obj1);
  }
  obj.children = formatResult;
  items2[1] = callback(arg1(dependencyMap[8]).Text, obj);
  obj.children = items2;
  return closure_6(View, obj);
};
