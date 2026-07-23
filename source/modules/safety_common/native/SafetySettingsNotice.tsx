// Module ID: 13650
// Function ID: 104842
// Name: SafetySettingsNotice
// Dependencies: [31, 27, 7483, 33, 4130, 689, 13651, 4086, 4126, 1212, 2]
// Exports: default

// Module 13650 (SafetySettingsNotice)
import result from "result";
import { View } from "get ActivityIndicator";
import { SafetySettingsNoticeAction as closure_4 } from "SafetyToastType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8, padding: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, borderColor: require("_createForOfIteratorHelperLoose").colors.TEXT_LINK, borderWidth: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_INFO };
_createForOfIteratorHelperLoose.blockedIgnoredRedirect = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("SafetyToastType").fileFinishedImporting("modules/safety_common/native/SafetySettingsNotice.tsx");

export default function SafetySettingsNotice(noticeType) {
  let label;
  let labelHook;
  ({ label, labelHook } = noticeType);
  noticeType = noticeType.noticeType;
  const count = noticeType.count;
  const items = [noticeType];
  const effect = React.useEffect(() => {
    const result = labelHook(noticeType[6]).trackSafetySettingsNoticeAnalytics(noticeType, outer1_4.VIEWED);
  }, items);
  const items1 = [noticeType, labelHook];
  React = React.useCallback(() => {
    labelHook();
    const result = labelHook(noticeType[6]).trackSafetySettingsNoticeAnalytics(noticeType, outer1_4.LEARN_MORE);
  }, items1);
  let obj = { style: _createForOfIteratorHelperLoose().blockedIgnoredRedirect };
  const items2 = [callback(labelHook(noticeType[7]).CircleInformationIcon, { color: "text-link" }), ];
  obj = { style: { flexShrink: 1 }, variant: "heading-sm/medium" };
  if (null != count) {
    const intl2 = labelHook(noticeType[9]).intl;
    obj = {
      hook(children) {
          const obj = { role: "link", variant: "heading-sm/medium", color: "text-link", onPress: result, children };
          return outer1_5(labelHook(noticeType[8]).Text, obj);
        },
      count
    };
    let formatResult = intl2.format(label, obj);
  } else {
    const intl = labelHook(noticeType[9]).intl;
    const obj1 = {
      hook(children) {
          const obj = { role: "link", variant: "heading-sm/medium", color: "text-link", onPress: result, children };
          return outer1_5(labelHook(noticeType[8]).Text, obj);
        }
    };
    formatResult = intl.format(label, obj1);
  }
  obj.children = formatResult;
  items2[1] = callback(labelHook(noticeType[8]).Text, obj);
  obj.children = items2;
  return closure_6(View, obj);
};
