// Module ID: 11243
// Function ID: 87530
// Name: AppDetailsOverflowMenu
// Dependencies: []
// Exports: default

// Module 11243 (AppDetailsOverflowMenu)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/AppDetailsOverflowMenu.tsx");

export default function AppDetailsOverflowMenu(application) {
  application = application.application;
  const arg1 = application;
  const onAddAppMenuClick = application.onAddAppMenuClick;
  const importDefault = onAddAppMenuClick;
  let obj = arg1(dependencyMap[2]);
  const installAppProps = obj.getInstallAppProps(application);
  const dependencyMap = installAppProps;
  const items = [];
  let obj1 = arg1(dependencyMap[3]);
  let result = obj1.canInstallApplication(installAppProps);
  if (result) {
    result = null != onAddAppMenuClick;
  }
  if (result) {
    obj = {};
    const intl = arg1(dependencyMap[4]).intl;
    obj.label = intl.string(arg1(dependencyMap[4]).t.NgXl3C);
    obj.action = function action() {
      return onAddAppMenuClick({ installAppProps });
    };
    obj.IconComponent = arg1(dependencyMap[5]).CirclePlusIcon;
    items.push(obj);
  }
  const DeveloperMode = arg1(dependencyMap[6]).DeveloperMode;
  if (DeveloperMode.getSetting()) {
    obj = {};
    const intl2 = arg1(dependencyMap[4]).intl;
    obj.label = intl2.string(arg1(dependencyMap[4]).t.+NP/b2);
    obj.action = function action() {
      application(installAppProps[7]).copy(application.id);
      const obj = application(installAppProps[7]);
      application(installAppProps[8]).presentIdCopied();
    };
    obj.IconComponent = arg1(dependencyMap[9]).IdIcon;
    items.push(obj);
  }
  let tmp10 = null;
  if (0 !== items.length) {
    obj1 = {
      items,
      children(ref) {
          let obj = Object.create(null);
          obj.ref = 0;
          const merged = Object.assign(ref, obj);
          obj = { ref: ref.ref, icon: onAddAppMenuClick(installAppProps[12]) };
          const merged1 = Object.assign(merged);
          const intl = application(installAppProps[4]).intl;
          obj["accessibilityLabel"] = intl.string(application(installAppProps[4]).t.PdRCRg);
          obj["maxFontSizeMultiplier"] = 1.5;
          return callback(application(installAppProps[11]).IconButton, obj);
        }
    };
    tmp10 = jsx(arg1(dependencyMap[10]).ContextMenu, obj1);
  }
  return tmp10;
};
