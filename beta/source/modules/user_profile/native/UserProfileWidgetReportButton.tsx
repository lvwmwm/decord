// Module ID: 8971
// Function ID: 8972
// Name: UserProfileWidgetReportButton
// Dependencies: [109, 19, 17, 21, 558, 568, 1119, 8972, 8974, 8212, 580, 8214, 2]

// Module 8971 (UserProfileWidgetReportButton)
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import MoreHorizontalIcon from "MoreHorizontalIcon" /* 8212 */;
import ContextMenu from "ContextMenu" /* 8214 */;
import FlagIcon from "FlagIcon" /* 8972 */;
import showReportModalForUserWidget from "showReportModalForUserWidget" /* 8974 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["ref"];
const Pressable = fn(17).Pressable;
const jsx = fn(21).jsx;
let closure_7 = { top: 8, bottom: 8, left: 8, right: 8 };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetReportButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  const cResult = userId(568).c(7);
  userId = userId.userId;
  const widget = userId.widget;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t.D4GvHE);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === userId) {
    if (cResult[2] === widget) {
      let tmp6 = cResult[3];
    }
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function h(ref) {
        const obj = { ref: ref.ref };
        const merged = Object.assign(_objectWithoutProperties(ref, closure_1_3));
        obj.hitSlop = hitSlop;
        obj.accessibilityRole = "button";
        const intl = userId(1119).intl;
        obj.accessibilityLabel = intl.string(userId(1119).t.xpSHSk);
        obj.children = jsx(userId(8212).MoreHorizontalIcon, { size: "sm", color: widget(580).colors.TEXT_MUTED });
        return <Pressable ref={arg0.ref} />;
      };
      cResult[4] = fn;
      let tmp7 = fn;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] !== tmp6) {
      const obj2 = { items: tmp6, children: tmp7 };
      const tmp10 = jsx(tmp(8214).ContextMenu, { items: tmp6, children: tmp7 });
      cResult[5] = tmp6;
      cResult[6] = tmp10;
      let tmp8 = tmp10;
    } else {
      tmp8 = cResult[6];
    }
    return tmp8;
  }
  let obj = userId(568);
  const items = [
    {
      label: first,
      variant: "destructive",
      IconComponent: userId(8972).FlagIcon,
      action() {
        return showReportModalForUserWidget.showReportModalForUserWidget(userId, widget);
      }
    }
  ];
  cResult[1] = userId;
  cResult[2] = widget;
  cResult[3] = items;
  tmp6 = items;
}) : ((arg0) => {
  ({ userId: require, widget: importDefault } = arg0);
  let obj = { label: null, variant: "destructive", IconComponent: null, action: null };
  let intl = util.intl;
  obj.label = intl.string(util.t.D4GvHE);
  obj.IconComponent = FlagIcon.FlagIcon;
  obj.action = function action() {
    return showReportModalForUserWidget.showReportModalForUserWidget(closure_1_0, importDefault);
  };
  const items = [obj];
  return jsx(ContextMenu.ContextMenu, {
    items,
    children(ref) {
      const obj = { ref: ref.ref };
      const merged = Object.assign(Object.assign(ref, Object.assign({ ref: 0 })));
      obj.hitSlop = hitSlop;
      obj.accessibilityRole = "button";
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t.xpSHSk);
      obj.children = jsx(MoreHorizontalIcon.MoreHorizontalIcon, { size: "sm", color: nativeDefault.colors.TEXT_MUTED });
      return <Pressable ref={arg0.ref} />;
    }
  });
});
