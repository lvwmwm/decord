// Module ID: 12308
// Function ID: 12309
// Name: CommandDetailsOverflowMenu
// Dependencies: [19, 21, 4834, 1114, 7352, 5706, 10504, 9853, 8020, 9188, 2]
// Exports: default

// Module 12308 (CommandDetailsOverflowMenu)
import Fragment from "Fragment" /* 21 */;
import ToastUtils from "ToastUtils" /* 5706 */;
import ClipboardUtils from "ClipboardUtils" /* 7352 */;
import AssetRegistryDefault from "AssetRegistry" /* 9188 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/command_view/CommandDetailsOverflowMenu.tsx");

export default function CommandDetailsOverflowMenu(commandId) {
  let intl;
  commandId = commandId.commandId;
  const DeveloperMode = commandId(4834).DeveloperMode;
  if (null != commandId) {
    if (DeveloperMode.useSetting()) {
      let obj = {
        label: intl.string(commandId(1114).t.oJ1Muw),
        action() {
              const obj = ClipboardUtils;
              obj.copy(commandId);
              const obj2 = ToastUtils;
              obj2.presentIdCopied();
            },
        IconComponent: commandId(10504).IdIcon
      };
      intl = tmp(1114).intl;
      const items = [obj];
      return jsx(commandId(9853).ContextMenu, {
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
