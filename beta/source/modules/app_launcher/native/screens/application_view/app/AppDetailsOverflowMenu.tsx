// Module ID: 11615
// Function ID: 11616
// Name: AppDetailsOverflowMenu
// Dependencies: [19, 21, 8590, 8721, 1115, 10774, 2021, 6610, 4527, 10092, 7358, 7363, 7366, 2]
// Exports: default

// Module 11615 (AppDetailsOverflowMenu)
import Fragment from "Fragment" /* 21 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/AppDetailsOverflowMenu.tsx");

export default function AppDetailsOverflowMenu(application) {
  let intl;
  let intl2;
  application = application.application;
  const onAddAppMenuClick = application.onAddAppMenuClick;
  let installAppProps;
  let obj = application(installAppProps[2]);
  installAppProps = obj.getInstallAppProps(application);
  let obj2 = application(installAppProps[3]);
  const result = obj2.canInstallApplication(installAppProps) && null != onAddAppMenuClick;
  const items = [];
  if (result) {
    const push = items.push;
    const obj3 = {
      label: intl.string(application(installAppProps[4]).t.NgXl3C),
      action() {
          const obj = { installAppProps };
          return onAddAppMenuClick(obj);
        },
      IconComponent: application(installAppProps[5]).CirclePlusIcon
    };
    intl = tmp(tmp2[4]).intl;
    push(obj3);
  }
  const DeveloperMode = tmp(tmp2[6]).DeveloperMode;
  if (DeveloperMode.getSetting()) {
    const push2 = items.push;
    const obj4 = {
      label: intl2.string(application(installAppProps[4]).t["+NP/b2"]),
      action() {
          const obj = ClipboardUtils;
          obj.copy(application.id);
          const obj2 = ToastUtils;
          obj2.presentIdCopied();
        },
      IconComponent: application(installAppProps[9]).IdIcon
    };
    intl2 = tmp(tmp2[4]).intl;
    push2(obj4);
  }
  let tmp8 = null;
  if (0 !== items.length) {
    tmp8 = jsx(tmp(tmp2[10]).ContextMenu, {
      items,
      children(ref) {
          ref = ref.ref;
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const IconButton = application(installAppProps[11]).IconButton;
          const merged1 = Object.assign(merged);
          const intl = application(installAppProps[4]).intl;
          return <IconButton ref={ref} size="sm" variant="secondary-overlay" icon={onAddAppMenuClick(installAppProps[12])} accessibilityLabel={intl.string(application(installAppProps[4]).t.PdRCRg)} maxFontSizeMultiplier={1.5} />;
        }
    });
  }
  return tmp8;
};
