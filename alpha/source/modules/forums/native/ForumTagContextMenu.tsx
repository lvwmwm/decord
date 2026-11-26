// Module ID: 11080
// Function ID: 11081
// Name: ForumTagContextMenu
// Dependencies: [21, 4868, 1112, 11081, 7538, 5724, 9067, 2]
// Exports: default

// Module 11080 (ForumTagContextMenu)
import Fragment from "Fragment" /* 21 */;
import ToastUtils from "ToastUtils" /* 5724 */;
import ClipboardUtils from "ClipboardUtils" /* 7538 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default function ForumTagContextMenu(tagId) {
  let intl;
  tagId = tagId.tagId;
  const children = tagId.children;
  const DeveloperMode = tagId(4868).DeveloperMode;
  let obj = {
    label: intl.string(tagId(1112).t["8VG6IY"]),
    IconComponent: tagId(11081).IdIcon,
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
  return jsx(tagId(9067).ContextMenu, { triggerOnLongPress: true, items, enabled, children });
};
