// Module ID: 12711
// Function ID: 12712
// Name: CommandDetailsOverflowMenu
// Dependencies: [19, 21, 4968, 1113, 7496, 5848, 10708, 10061, 8173, 9359, 2]
// Exports: default

// Module 12711 (CommandDetailsOverflowMenu)
import Fragment from "Fragment" /* 21 */;
import ToastUtils from "ToastUtils" /* 5848 */;
import ClipboardUtils from "ClipboardUtils" /* 7496 */;
import AssetRegistryDefault from "AssetRegistry" /* 9359 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/command_view/CommandDetailsOverflowMenu.tsx");

export default function CommandDetailsOverflowMenu(commandId) {
  let intl;
  commandId = commandId.commandId;
  const DeveloperMode = commandId(4968).DeveloperMode;
  if (null != commandId) {
    if (DeveloperMode.useSetting()) {
      let obj = {
        label: intl.string(commandId(1113).t.oJ1Muw),
        action() {
              const obj = ClipboardUtils;
              obj.copy(commandId);
              const obj2 = ToastUtils;
              obj2.presentIdCopied();
            },
        IconComponent: commandId(10708).IdIcon
      };
      intl = tmp(1113).intl;
      const items = [obj];
      return jsx(commandId(10061).ContextMenu, {
        items,
        children(ref) {
              ref = ref.ref;
              const merged = Object.assign(ref, Object.assign({ ref: 0 }));
              const IconButton = commandId(dependencyMap[8]).IconButton;
              const merged1 = Object.assign(merged);
              const intl = commandId(dependencyMap[3]).intl;
              return <IconButton ref={ref} size="sm" variant="secondary-overlay" icon={AssetRegistryDefault} accessibilityLabel={intl.string(commandId(dependencyMap[3]).t.PdRCRg)} maxFontSizeMultiplier={1.5} />;
            }
      });
    }
  }
  return null;
};
