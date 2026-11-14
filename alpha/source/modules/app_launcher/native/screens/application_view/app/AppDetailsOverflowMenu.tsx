// Module ID: 13464
// Function ID: 13465
// Name: AppDetailsOverflowMenu
// Dependencies: [19, 21, 12698, 13465, 1113, 13466, 5131, 7943, 6014, 11629, 9148, 7988, 7421, 2]
// Exports: default

// Module 13464 (AppDetailsOverflowMenu)
import Fragment from "Fragment" /* 21 */;
import ToastUtils from "ToastUtils" /* 6014 */;
import ClipboardUtils from "ClipboardUtils" /* 7943 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/AppDetailsOverflowMenu.tsx");

export default function AppDetailsOverflowMenu(application) {
  let installAppProps;
  let intl;
  let intl2;
  application = application.application;
  const onAddAppMenuClick = application.onAddAppMenuClick;
  let obj = application(12698);
  dependencyMap = obj.getInstallAppProps(application);
  const tmp3 = onAddAppMenuClick(13465);
  let obj2 = application(12698);
  const items = [];
  const tmp3Result = tmp3(obj2.getInstallableApplication(application)) && null != onAddAppMenuClick;
  if (tmp3Result) {
    const push = items.push;
    const obj3 = {
      label: intl.string(application(1113).t.NgXl3C),
      action() {
          const obj = { installAppProps };
          return onAddAppMenuClick(obj);
        },
      IconComponent: application(13466).CirclePlusIcon
    };
    intl = tmp(1113).intl;
    push(obj3);
  }
  const DeveloperMode = tmp(5131).DeveloperMode;
  if (DeveloperMode.getSetting()) {
    const push2 = items.push;
    const obj4 = {
      label: intl2.string(application(1113).t["+NP/b2"]),
      action() {
          const obj = ClipboardUtils;
          obj.copy(application.id);
          const obj2 = ToastUtils;
          obj2.presentIdCopied();
        },
      IconComponent: application(11629).IdIcon
    };
    intl2 = tmp(1113).intl;
    push2(obj4);
  }
  let tmp8 = null;
  if (0 !== items.length) {
    tmp8 = jsx(tmp(9148).ContextMenu, {
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
