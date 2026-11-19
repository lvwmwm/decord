// Module ID: 11553
// Function ID: 11554
// Name: ForumTagContextMenu
// Dependencies: [21, 4617, 1113, 10316, 7426, 5473, 8539, 2]
// Exports: default

// Module 11553 (ForumTagContextMenu)
import Fragment from "Fragment" /* 21 */;
import ToastUtils from "ToastUtils" /* 5473 */;
import ClipboardUtils from "ClipboardUtils" /* 7426 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default function ForumTagContextMenu(tagId) {
  let intl;
  tagId = tagId.tagId;
  const children = tagId.children;
  const DeveloperMode = tagId(4617).DeveloperMode;
  let obj = {
    label: intl.string(tagId(1113).t["8VG6IY"]),
    IconComponent: tagId(10316).IdIcon,
    action() {
      const obj = ClipboardUtils;
      obj.copy(tagId);
      const obj2 = ToastUtils;
      obj2.presentIdCopied();
    }
  };
  const enabled = DeveloperMode.useSetting();
  intl = tagId(1113).intl;
  const items = [obj];
  return jsx(tagId(8539).ContextMenu, { triggerOnLongPress: true, items, enabled, children });
};
