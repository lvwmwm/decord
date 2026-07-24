// Module ID: 10849
// Function ID: 84218
// Name: confirmActivityChangeModal
// Dependencies: [3767, 1849, 4320, 4470, 1212, 1832, 2]
// Exports: default

// Module 10849 (confirmActivityChangeModal)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("computeDefaultGroupDmNameFromUserIds").fileFinishedImporting("modules/activities/confirmActivityChangeAlert.tsx");

export default function confirmActivityChangeModal(name, channel, onConfirm, onCancel) {
  let str = "";
  if (null != channel) {
    let obj = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
    str = obj.computeChannelName(channel, closure_4, _isNativeReflectConstruct);
  }
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.XkIWkk);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.cancelText = intl2.string(require(1212) /* getSystemLocale */.t["ETE/oC"]);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.confirmText = intl3.string(require(1212) /* getSystemLocale */.t["cY+Oob"]);
  obj.onConfirm = onConfirm;
  obj.onCancel = onCancel;
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj = {};
  name = undefined;
  if (null != name) {
    name = name.name;
  }
  if (null == name) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    name = intl5.string(require(1212) /* getSystemLocale */.t.G99XFs);
  }
  obj.currentApplicationName = name;
  const obj2 = importDefault(4470);
  if (obj5.isNullOrEmpty(str)) {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    str = intl6.string(require(1212) /* getSystemLocale */.t.OGUjmt);
  }
  obj.currentApplicationChannelName = str;
  obj.body = intl4.format(require(1212) /* getSystemLocale */.t["5/Xort"], obj);
  obj2.show(obj);
};
