// Module ID: 10888
// Function ID: 10889
// Name: ForumTagContextMenu
// Dependencies: [21, 2019, 1115, 10889, 7434, 4453, 8174, 2]
// Exports: default

// Module 10888 (ForumTagContextMenu)
import jsxProd from "jsxProd" /* 21 */;
import ToastUtils from "ToastUtils" /* 4453 */;
import ClipboardUtils from "ClipboardUtils" /* 7434 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default function ForumTagContextMenu(children) {
  const tagId = children.tagId;
  const DeveloperMode = tagId(2019).DeveloperMode;
  let obj = { label: null, IconComponent: null, action: null };
  const enabled = DeveloperMode.useSetting();
  const intl = tagId(1115).intl;
  obj.label = intl.string(tagId(1115).t["8VG6IY"]);
  obj.IconComponent = tagId(10889).IdIcon;
  obj.action = function action() {
    ClipboardUtils.copy(tagId);
    ToastUtils.presentIdCopied();
  };
  const items = [obj];
  return jsx(tagId(8174).ContextMenu, { triggerOnLongPress: true, items, enabled, children: children.children });
};
