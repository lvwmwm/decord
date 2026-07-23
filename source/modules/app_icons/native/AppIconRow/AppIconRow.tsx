// Module ID: 14361
// Function ID: 109815
// Name: items
// Dependencies: [57, 31, 33, 1212, 4130, 689, 7962, 22, 3848, 5165, 14358, 7520, 2]
// Exports: default

// Module 14361 (items)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
const items = [
  () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["EgWTY+"]);
  },
  () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.umBn5f);
  },
  () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.dG1wD1);
  },
  () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.SesI4S);
  },
  () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.RnMLvl);
  }
];
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
_createForOfIteratorHelperLoose.icon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/app_icons/native/AppIconRow/AppIconRow.tsx");

export default function AppIconRow(arg0) {
  let accessibilityRole;
  let accessibilityState;
  let currentAppIcon;
  let hasNitro;
  let icon;
  let importDefault;
  let require;
  let showEasterEgg;
  ({ icon, onSelect: require, onLongPress: importDefault } = arg0);
  ({ hasNitro, currentAppIcon, showEasterEgg } = arg0);
  const id = icon.id;
  if (id === require(id[6]).PremiumAppIconIds.PIRATE) {
    let obj = importDefault(id[7]);
    let name = items[obj.random(obj, 0, items.length - 1)]();
  } else {
    name = icon.name;
  }
  let obj1 = require(id[8]);
  const radioA11yNative = obj1.useRadioA11yNative({ selected: tmp6 });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (id === require(id[6]).PremiumAppIconIds.BRAND_INVERTED) {
    if (!showEasterEgg) {
      let tmp9Result = null;
    }
    return tmp9Result;
  }
  tmp9Result = null;
  if (!icon.isHidden) {
    obj = {};
    obj = { id, style: tmp.icon };
    obj.icon = jsx(importDefault(id[10]), { id, style: tmp.icon });
    obj.label = callback(React.useState(name), 1)[0];
    obj.onLongPress = function onLongPress() {
      return callback2(id);
    };
    obj.onPress = function onPress() {
      return callback(id);
    };
    obj.accessibilityRole = accessibilityRole;
    obj.accessibilityState = accessibilityState;
    if (!tmp6) {
      if (icon.isPremium) {
        let tmp13 = null;
      }
      obj.trailing = tmp13;
      tmp9Result = tmp9(require(id[9]).TableRow, obj, id);
    }
    obj1 = { selected: tmp6 };
    tmp13 = jsx(require(id[11]).FormRadio, { selected: tmp6 });
    tmp9 = jsx;
  }
};
