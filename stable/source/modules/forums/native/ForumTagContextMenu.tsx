// Module ID: 10674
// Function ID: 10675
// Name: ForumTagContextMenu
// Dependencies: [21, 4995, 1113, 10675, 7451, 5868, 10029, 2]
// Exports: default

// Module 10674 (ForumTagContextMenu)
import Fragment from "Fragment" /* 21 */;
import ToastUtils from "ToastUtils" /* 5868 */;
import ClipboardUtils from "ClipboardUtils" /* 7451 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default function ForumTagContextMenu(tagId) {
  let intl;
  tagId = tagId.tagId;
  const children = tagId.children;
  const DeveloperMode = tagId(4995).DeveloperMode;
  let obj = {
    label: intl.string(tagId(1113).t["8VG6IY"]),
    IconComponent: tagId(10675).IdIcon,
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
  return jsx(tagId(10029).ContextMenu, { triggerOnLongPress: true, items, enabled, children });
};
