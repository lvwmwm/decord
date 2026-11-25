// Module ID: 11620
// Function ID: 11621
// Name: ForumTagContextMenu
// Dependencies: [21, 4738, 1112, 10383, 7545, 5594, 8658, 2]
// Exports: default

// Module 11620 (ForumTagContextMenu)
import Fragment from "Fragment" /* 21 */;
import ToastUtils from "ToastUtils" /* 5594 */;
import ClipboardUtils from "ClipboardUtils" /* 7545 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default function ForumTagContextMenu(tagId) {
  let intl;
  tagId = tagId.tagId;
  const children = tagId.children;
  const DeveloperMode = tagId(4738).DeveloperMode;
  let obj = {
    label: intl.string(tagId(1112).t["8VG6IY"]),
    IconComponent: tagId(10383).IdIcon,
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
  return jsx(tagId(8658).ContextMenu, { triggerOnLongPress: true, items, enabled, children });
};
