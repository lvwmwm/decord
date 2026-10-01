// Module ID: 10091
// Function ID: 10092
// Name: ForumTagContextMenu
// Dependencies: [21, 2021, 1115, 10092, 6610, 4527, 7358, 2]
// Exports: default

// Module 10091 (ForumTagContextMenu)
import Fragment from "Fragment" /* 21 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default function ForumTagContextMenu(tagId) {
  let intl;
  tagId = tagId.tagId;
  const children = tagId.children;
  const DeveloperMode = tagId(2021).DeveloperMode;
  let obj = {
    label: intl.string(tagId(1115).t["8VG6IY"]),
    IconComponent: tagId(10092).IdIcon,
    action() {
      const obj = ClipboardUtils;
      obj.copy(tagId);
      const obj2 = ToastUtils;
      obj2.presentIdCopied();
    }
  };
  const enabled = DeveloperMode.useSetting();
  intl = tagId(1115).intl;
  const items = [obj];
  return jsx(tagId(7358).ContextMenu, { triggerOnLongPress: true, items, enabled, children });
};
