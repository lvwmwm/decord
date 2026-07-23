// Module ID: 11253
// Function ID: 87580
// Name: AppDetailsOverflowMenu
// Dependencies: [31, 33, 7919, 8191, 1212, 11254, 3803, 5492, 3830, 9646, 9302, 7771, 8969, 2]
// Exports: default

// Module 11253 (AppDetailsOverflowMenu)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/AppDetailsOverflowMenu.tsx");

export default function AppDetailsOverflowMenu(application) {
  application = application.application;
  const onAddAppMenuClick = application.onAddAppMenuClick;
  let obj = application(installAppProps[2]);
  installAppProps = obj.getInstallAppProps(application);
  const items = [];
  let obj1 = application(installAppProps[3]);
  let result = obj1.canInstallApplication(installAppProps);
  if (result) {
    result = null != onAddAppMenuClick;
  }
  if (result) {
    obj = {};
    let intl = application(installAppProps[4]).intl;
    obj.label = intl.string(application(installAppProps[4]).t.NgXl3C);
    obj.action = function action() {
      return onAddAppMenuClick({ installAppProps });
    };
    obj.IconComponent = application(installAppProps[5]).CirclePlusIcon;
    items.push(obj);
  }
  const DeveloperMode = application(installAppProps[6]).DeveloperMode;
  if (DeveloperMode.getSetting()) {
    obj = {};
    const intl2 = application(installAppProps[4]).intl;
    obj.label = intl2.string(application(installAppProps[4]).t["+NP/b2"]);
    obj.action = function action() {
      application(installAppProps[7]).copy(application.id);
      const obj = application(installAppProps[7]);
      application(installAppProps[8]).presentIdCopied();
    };
    obj.IconComponent = application(installAppProps[9]).IdIcon;
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
          obj = { ref: ref.ref, size: "sm", variant: "secondary-overlay", icon: onAddAppMenuClick(installAppProps[12]) };
          const merged1 = Object.assign(merged);
          const intl = application(installAppProps[4]).intl;
          obj["accessibilityLabel"] = intl.string(application(installAppProps[4]).t.PdRCRg);
          obj["maxFontSizeMultiplier"] = 1.5;
          return outer1_3(application(installAppProps[11]).IconButton, obj);
        }
    };
    tmp10 = jsx(application(installAppProps[10]).ContextMenu, {
      items,
      children(ref) {
          let obj = Object.create(null);
          obj.ref = 0;
          const merged = Object.assign(ref, obj);
          obj = { ref: ref.ref, size: "sm", variant: "secondary-overlay", icon: onAddAppMenuClick(installAppProps[12]) };
          const merged1 = Object.assign(merged);
          const intl = application(installAppProps[4]).intl;
          obj["accessibilityLabel"] = intl.string(application(installAppProps[4]).t.PdRCRg);
          obj["maxFontSizeMultiplier"] = 1.5;
          return outer1_3(application(installAppProps[11]).IconButton, obj);
        }
    });
  }
  return tmp10;
};
