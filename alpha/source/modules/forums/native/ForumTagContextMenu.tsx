// Module ID: 11034
// Function ID: 11035
// Name: ForumTagContextMenu
// Dependencies: [21, 4837, 1112, 11035, 7507, 5693, 9025, 2]
// Exports: default

// Module 11034 (ForumTagContextMenu)
import Fragment from "Fragment" /* 21 */;
import ToastUtils from "ToastUtils" /* 5693 */;
import ClipboardUtils from "ClipboardUtils" /* 7507 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default function ForumTagContextMenu(tagId) {
  let intl;
  tagId = tagId.tagId;
  const children = tagId.children;
  const DeveloperMode = tagId(4837).DeveloperMode;
  let obj = {
    label: intl.string(tagId(1112).t["8VG6IY"]),
    IconComponent: tagId(11035).IdIcon,
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
  return jsx(tagId(9025).ContextMenu, { triggerOnLongPress: true, items, enabled, children });
};
