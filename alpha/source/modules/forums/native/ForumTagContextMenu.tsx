// Module ID: 10707
// Function ID: 10708
// Name: ForumTagContextMenu
// Dependencies: [21, 4968, 1113, 10708, 7496, 5848, 10061, 2]
// Exports: default

// Module 10707 (ForumTagContextMenu)
import Fragment from "Fragment" /* 21 */;
import ToastUtils from "ToastUtils" /* 5848 */;
import ClipboardUtils from "ClipboardUtils" /* 7496 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default function ForumTagContextMenu(tagId) {
  let intl;
  tagId = tagId.tagId;
  const children = tagId.children;
  const DeveloperMode = tagId(4968).DeveloperMode;
  let obj = {
    label: intl.string(tagId(1113).t["8VG6IY"]),
    IconComponent: tagId(10708).IdIcon,
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
  return jsx(tagId(10061).ContextMenu, { triggerOnLongPress: true, items, enabled, children });
};
