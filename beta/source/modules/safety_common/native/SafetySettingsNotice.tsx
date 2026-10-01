// Module ID: 14245
// Function ID: 14246
// Name: SafetySettingsNotice
// Dependencies: [19, 17, 7847, 21, 4836, 576, 14246, 4787, 4832, 1115, 2]
// Exports: default

// Module 14245 (SafetySettingsNotice)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import Constants from "Constants" /* 7847 */;
import SafetySettingsUtils from "SafetySettingsUtils" /* 14246 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let react = react_mod;
const View = react_native.View;
let closure_4 = Constants.SafetySettingsNoticeAction;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { blockedIgnoredRedirect: obj2 };
obj2 = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xs, borderColor: nativeDefault.colors.TEXT_LINK, borderWidth: 1, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO };
let closure_7 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/safety_common/native/SafetySettingsNotice.tsx");

export default function SafetySettingsNotice(noticeType) {
  let formatResult;
  let items2;
  let label;
  let labelHook;
  let onPress;
  ({ label, labelHook } = noticeType);
  noticeType = noticeType.noticeType;
  const count = noticeType.count;
  react = undefined;
  const items = [noticeType];
  const tmp = closure_7();
  const effect = react.useEffect(() => {
    const obj = SafetySettingsUtils;
    const result = obj.trackSafetySettingsNoticeAnalytics(noticeType, constants.VIEWED);
  }, items);
  const items1 = [noticeType, labelHook];
  react = react.useCallback(() => {
    labelHook();
    const obj = SafetySettingsUtils;
    const result = obj.trackSafetySettingsNoticeAnalytics(noticeType, constants.LEARN_MORE);
  }, items1);
  let obj = { style: tmp.blockedIgnoredRedirect, children: items2 };
  items2 = [closure_5(labelHook(noticeType[7]).CircleInformationIcon, { color: "text-link" }), ];
  const obj2 = { style: { flexShrink: 1 }, variant: "heading-sm/medium", children: formatResult };
  const Text = labelHook(noticeType[8]).Text;
  const tmp3 = closure_6;
  const tmp4 = View;
  const tmp5 = closure_5;
  if (null != count) {
    const intl2 = tmp6(tmp7[9]).intl;
    const obj3 = {
      hook(children) {
          const obj = { role: "link", variant: "heading-sm/medium", color: "text-link", onPress, children };
          return hasOwnProperty(Text_Text.Text, obj);
        },
      count
    };
    formatResult = intl2.format(label, obj3);
  } else {
    const intl = tmp6(tmp7[9]).intl;
    const obj4 = {
      hook(children) {
          const obj = { role: "link", variant: "heading-sm/medium", color: "text-link", onPress, children };
          return hasOwnProperty(Text_Text.Text, obj);
        }
    };
    formatResult = intl.format(label, obj4);
  }
  items2[1] = tmp5(Text, obj2);
  return tmp3(tmp4, obj);
};
