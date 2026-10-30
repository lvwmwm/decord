// Module ID: 10503
// Function ID: 10504
// Name: ForumTagContextMenu
// Dependencies: [21, 4834, 1114, 10504, 7352, 5706, 9853, 2]
// Exports: default

// Module 10503 (ForumTagContextMenu)
import Fragment from "Fragment" /* 21 */;
import ToastUtils from "ToastUtils" /* 5706 */;
import ClipboardUtils from "ClipboardUtils" /* 7352 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default function ForumTagContextMenu(tagId) {
  let intl;
  tagId = tagId.tagId;
  const children = tagId.children;
  const DeveloperMode = tagId(4834).DeveloperMode;
  let obj = {
    label: intl.string(tagId(1114).t["8VG6IY"]),
    IconComponent: tagId(10504).IdIcon,
    action() {
      const obj = ClipboardUtils;
      obj.copy(tagId);
      const obj2 = ToastUtils;
      obj2.presentIdCopied();
    }
  };
  const enabled = DeveloperMode.useSetting();
  intl = tagId(1114).intl;
  const items = [obj];
  return jsx(tagId(9853).ContextMenu, { triggerOnLongPress: true, items, enabled, children });
};
