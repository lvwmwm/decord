// Module ID: 14236
// Function ID: 107587
// Name: items
// Dependencies: []
// Exports: default

// Module 14236 (items)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const items = [
  () => {
    const intl = arg1(dependencyMap[3]).intl;
    return intl.string(arg1(dependencyMap[3]).t.EgWTY+);
  },
  () => {
    const intl = arg1(dependencyMap[3]).intl;
    return intl.string(arg1(dependencyMap[3]).t.umBn5f);
  },
  () => {
    const intl = arg1(dependencyMap[3]).intl;
    return intl.string(arg1(dependencyMap[3]).t.dG1wD1);
  },
  () => {
    const intl = arg1(dependencyMap[3]).intl;
    return intl.string(arg1(dependencyMap[3]).t.SesI4S);
  },
  () => {
    const intl = arg1(dependencyMap[3]).intl;
    return intl.string(arg1(dependencyMap[3]).t.RnMLvl);
  }
];
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[5]).radii.md };
obj.icon = obj;
let closure_7 = obj.createStyles(obj);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/app_icons/native/AppIconRow/AppIconRow.tsx");

export default function AppIconRow(arg0) {
  let accessibilityRole;
  let accessibilityState;
  let currentAppIcon;
  let hasNitro;
  let icon;
  let showEasterEgg;
  ({ icon, onSelect: closure_0, onLongPress: closure_1 } = arg0);
  ({ hasNitro, currentAppIcon, showEasterEgg } = arg0);
  const id = icon.id;
  const dependencyMap = id;
  if (id === arg1(dependencyMap[6]).PremiumAppIconIds.PIRATE) {
    let obj = importDefault(dependencyMap[7]);
    let name = items[obj.random(obj, 0, closure_6.length - 1)]();
  } else {
    name = icon.name;
  }
  let obj1 = arg1(dependencyMap[8]);
  const radioA11yNative = obj1.useRadioA11yNative({ selected: tmp6 });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (id === arg1(dependencyMap[6]).PremiumAppIconIds.BRAND_INVERTED) {
    if (!showEasterEgg) {
      let tmp9Result = null;
    }
    return tmp9Result;
  }
  tmp9Result = null;
  if (!icon.isHidden) {
    obj = {};
    obj = { id, style: tmp.icon };
    obj.icon = jsx(importDefault(dependencyMap[10]), obj);
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
      tmp9Result = tmp9(arg1(dependencyMap[9]).TableRow, obj, id);
    }
    obj1 = { selected: tmp6 };
    tmp13 = jsx(arg1(dependencyMap[11]).FormRadio, obj1);
    const tmp9 = jsx;
  }
};
