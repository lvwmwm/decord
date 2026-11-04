// Module ID: 10701
// Function ID: 10702
// Name: ForumTagContextMenu
// Dependencies: [21, 4966, 1113, 10702, 7494, 5845, 10053, 2]
// Exports: default

// Module 10701 (ForumTagContextMenu)
import Fragment from "Fragment" /* 21 */;
import ToastUtils from "ToastUtils" /* 5845 */;
import ClipboardUtils from "ClipboardUtils" /* 7494 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default function ForumTagContextMenu(tagId) {
  let intl;
  tagId = tagId.tagId;
  const children = tagId.children;
  const DeveloperMode = tagId(4966).DeveloperMode;
  let obj = {
    label: intl.string(tagId(1113).t["8VG6IY"]),
    IconComponent: tagId(10702).IdIcon,
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
  return jsx(tagId(10053).ContextMenu, { triggerOnLongPress: true, items, enabled, children });
};
