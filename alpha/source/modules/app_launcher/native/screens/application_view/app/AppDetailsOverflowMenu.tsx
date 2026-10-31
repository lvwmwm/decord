// Module ID: 12323
// Function ID: 12324
// Name: AppDetailsOverflowMenu
// Dependencies: [19, 21, 9761, 11737, 1113, 11488, 4839, 7358, 5711, 10524, 9874, 8028, 9207, 2]
// Exports: default

// Module 12323 (AppDetailsOverflowMenu)
import Fragment from "Fragment" /* 21 */;
import ToastUtils from "ToastUtils" /* 5711 */;
import ClipboardUtils from "ClipboardUtils" /* 7358 */;
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
