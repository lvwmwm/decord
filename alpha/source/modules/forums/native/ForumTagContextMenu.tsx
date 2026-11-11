// Module ID: 11567
// Function ID: 11568
// Name: ForumTagContextMenu
// Dependencies: [21, 5068, 1113, 11568, 7877, 5951, 9082, 2]
// Exports: default

// Module 11567 (ForumTagContextMenu)
import Fragment from "Fragment" /* 21 */;
import ToastUtils from "ToastUtils" /* 5951 */;
import ClipboardUtils from "ClipboardUtils" /* 7877 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default function ForumTagContextMenu(tagId) {
  let intl;
  tagId = tagId.tagId;
  const children = tagId.children;
  const DeveloperMode = tagId(5068).DeveloperMode;
  let obj = {
    label: intl.string(tagId(1113).t["8VG6IY"]),
    IconComponent: tagId(11568).IdIcon,
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
  return jsx(tagId(9082).ContextMenu, { triggerOnLongPress: true, items, enabled, children });
};
