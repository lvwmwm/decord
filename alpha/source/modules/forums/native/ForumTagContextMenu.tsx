// Module ID: 11495
// Function ID: 11496
// Name: ForumTagContextMenu
// Dependencies: [21, 4619, 1112, 10258, 7425, 5475, 8538, 2]
// Exports: default

// Module 11495 (ForumTagContextMenu)
import Fragment from "Fragment" /* 21 */;
import ToastUtils from "ToastUtils" /* 5475 */;
import ClipboardUtils from "ClipboardUtils" /* 7425 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default function ForumTagContextMenu(tagId) {
  let intl;
  tagId = tagId.tagId;
  const children = tagId.children;
  const DeveloperMode = tagId(4619).DeveloperMode;
  let obj = {
    label: intl.string(tagId(1112).t["8VG6IY"]),
    IconComponent: tagId(10258).IdIcon,
    action() {
      const obj = ClipboardUtils;
      obj.copy(tagId);
      const obj2 = ToastUtils;
      obj2.presentIdCopied();
    }
  };
  const enabled = DeveloperMode.useSetting();
  intl = tagId(1112).intl;
  const items = [obj];
  return jsx(tagId(8538).ContextMenu, { triggerOnLongPress: true, items, enabled, children });
};
