// Module ID: 10445
// Function ID: 10446
// Name: ForumTagContextMenu
// Dependencies: [21, 558, 576, 4832, 1125, 10446, 7321, 5698, 9795, 2]

// Module 10445 (ForumTagContextMenu)
import Fragment from "Fragment" /* 21 */;
import ToastUtils from "ToastUtils" /* 5698 */;
import ClipboardUtils from "ClipboardUtils" /* 7321 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ForumTagContextMenu(tagId) {
  let first;
  let tmp7;
  let obj = tagId(576);
  const cResult = obj.c(7);
  tagId = tagId.tagId;
  const children = tagId.children;
  const DeveloperMode = tagId(4832).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(tagId(1125).t["8VG6IY"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tagId) {
    let obj2 = {
      label: first,
      IconComponent: tagId(10446).IdIcon,
      action() {
          const obj = ClipboardUtils;
          obj.copy(tagId);
          const obj2 = ToastUtils;
          obj2.presentIdCopied();
        }
    };
    const items = [obj2];
    cResult[1] = tagId;
    cResult[2] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === children) {
    if (cResult[4] === tmp7) {
      let tmp8;
      if (cResult[5] === setting) {
        tmp8 = cResult[6];
      }
      return tmp8;
    }
  }
  const tmp9 = jsx(tagId(9795).ContextMenu, { triggerOnLongPress: true, items: tmp7, enabled: setting, children });
  cResult[3] = children;
  cResult[4] = tmp7;
  cResult[5] = setting;
  cResult[6] = tmp9;
  tmp8 = tmp9;
}) : (function ForumTagContextMenu(tagId) {
  let intl;
  tagId = tagId.tagId;
  const children = tagId.children;
  const DeveloperMode = tagId(4832).DeveloperMode;
  let obj = {
    label: intl.string(tagId(1125).t["8VG6IY"]),
    IconComponent: tagId(10446).IdIcon,
    action() {
      const obj = ClipboardUtils;
      obj.copy(tagId);
      const obj2 = ToastUtils;
      obj2.presentIdCopied();
    }
  };
  const enabled = DeveloperMode.useSetting();
  intl = tagId(1125).intl;
  const items = [obj];
  return jsx(tagId(9795).ContextMenu, { triggerOnLongPress: true, items, enabled, children });
});
const result = size.fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default tmp2;
