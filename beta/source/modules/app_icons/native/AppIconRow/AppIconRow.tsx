// Module ID: 15079
// Function ID: 15080
// Name: AppIconRow
// Dependencies: [32, 19, 21, 1115, 4836, 576, 8625, 12, 4548, 5917, 15076, 6001, 2]
// Exports: default

// Module 15079 (AppIconRow)
import _modDef12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import react_native from "react-native" /* 4548 */;
import AppIconTypes from "AppIconTypes" /* 8625 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
const jsx = Fragment.jsx;
const items = [
  () => {
    const intl = intl2.intl;
    return intl.string(intl2.t["EgWTY+"]);
  },
  () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.umBn5f);
  },
  () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.dG1wD1);
  },
  () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.SesI4S);
  },
  () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.RnMLvl);
  }
];
let obj = { icon: obj2 };
obj2 = { borderRadius: nativeDefault.radii.md };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/app_icons/native/AppIconRow/AppIconRow.tsx");

export default function AppIconRow(arg0) {
  let accessibilityRole;
  let accessibilityState;
  let closure_129_0;
  let closure_129_1;
  let currentAppIcon;
  let hasNitro;
  let icon;
  let name;
  let showEasterEgg;
  let tmp11Result;
  ({ icon, onSelect: closure_129_0, onLongPress: closure_129_1 } = arg0);
  ({ hasNitro, currentAppIcon, showEasterEgg } = arg0);
  const id = icon.id;
  const isPremium = icon.isPremium;
  const useState = react.useState;
  const tmp = closure_7();
  if (id === AppIconTypes.PremiumAppIconIds.PIRATE) {
    const obj = _modDef12;
    name = items[obj.random(obj, 0, items.length - 1)]();
  } else {
    name = icon.name;
  }
  const first = _slicedToArray(useState(name), 1)[0];
  const tmp3Result = react_native;
  const radioA11yNative = tmp3Result.useRadioA11yNative({ selected: tmp8 });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (id === AppIconTypes.PremiumAppIconIds.BRAND_INVERTED) {
    if (!showEasterEgg) {
      tmp11Result = null;
    }
    return tmp11Result;
  }
  tmp11Result = null;
  if (!icon.isHidden) {
    const obj2 = {
      icon: null,
      label: first,
      onLongPress() {
          return closure_1_1(id);
        },
      onPress() {
          return closure_1_0(id);
        },
      accessibilityRole,
      accessibilityState,
      trailing: null
    };
    const TableRow = tmp3(5917).TableRow;
    if (currentAppIcon !== id) {
      let tmp11Result2;
      if (isPremium) {
        tmp11Result2 = null;
      }
      obj2.trailing = tmp11Result2;
      tmp11Result = tmp11(TableRow, obj2, id);
    }
    const obj4 = { selected: currentAppIcon === id };
    tmp11Result2 = tmp11(tmp3(6001).FormRadio, obj4);
  }
};
