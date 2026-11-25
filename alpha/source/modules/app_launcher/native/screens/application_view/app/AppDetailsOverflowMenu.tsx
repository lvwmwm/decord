// Module ID: 13041
// Function ID: 13042
// Name: AppDetailsOverflowMenu
// Dependencies: [19, 21, 10045, 13042, 1112, 13043, 4837, 7507, 5693, 11035, 9025, 7910, 7712, 2]
// Exports: default

// Module 13041 (AppDetailsOverflowMenu)
import Fragment from "Fragment" /* 21 */;
import ToastUtils from "ToastUtils" /* 5693 */;
import ClipboardUtils from "ClipboardUtils" /* 7507 */;
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
  let obj = application(10045);
  dependencyMap = obj.getInstallAppProps(application);
  const tmp3 = onAddAppMenuClick(13042);
  let obj2 = application(10045);
  const items = [];
  const tmp3Result = tmp3(obj2.getInstallableApplication(application)) && null != onAddAppMenuClick;
  if (tmp3Result) {
    const push = items.push;
    const obj3 = {
      label: intl.string(application(1112).t.NgXl3C),
      action() {
          const obj = { installAppProps };
          return onAddAppMenuClick(obj);
        },
      IconComponent: application(13043).CirclePlusIcon
    };
    intl = tmp(1112).intl;
    push(obj3);
  }
  const DeveloperMode = tmp(4837).DeveloperMode;
  if (DeveloperMode.getSetting()) {
    const push2 = items.push;
    const obj4 = {
      label: intl2.string(application(1112).t["+NP/b2"]),
      action() {
          const obj = ClipboardUtils;
          obj.copy(application.id);
          const obj2 = ToastUtils;
          obj2.presentIdCopied();
        },
      IconComponent: application(11035).IdIcon
    };
    intl2 = tmp(1112).intl;
    push2(obj4);
  }
  let tmp8 = null;
  if (0 !== items.length) {
    tmp8 = jsx(tmp(9025).ContextMenu, {
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
