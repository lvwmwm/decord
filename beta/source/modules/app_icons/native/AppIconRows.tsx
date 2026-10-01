// Module ID: 15078
// Function ID: 15079
// Name: AppIconRows
// Dependencies: [32, 19, 17, 1372, 21, 4836, 8625, 5999, 1115, 15079, 12995, 504, 1970, 2]
// Exports: default

// Module 15078 (AppIconRows)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 19 */;
import get_initialized from "get initialized" /* 504 */;
import intl3 from "intl" /* 1115 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1970 */;
import AppIconTypes from "AppIconTypes" /* 8625 */;
import AppIconUtils from "AppIconUtils" /* 12995 */;
import AppIconRowDefault from "AppIconRow" /* 15079 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const react = react2;
let dependencyMap;

let c10;
let c9;
let metroImportAll;
function BackwardsCompatibleAppIconRows(arg0) {
  let TableRowGroup;
  let _undefined;
  let c1;
  let c2;
  let intl;
  let obj2;
  let showEasterEgg;
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    let tmp = arg0;
    let merged = Object.assign(arg0, undefined);
    c1 = undefined;
    dependencyMap = undefined;
    function onLongPress(react) {
      let tmp = null;
      if (react === AppIconTypes.FreemiumAppIconIds.DEFAULT) {
        tmp = _undefined(true);
      }
      return tmp;
    }
    const tmp4 = closure_11();
    [c1, c2] = onLongPress(react.useState(false), 2);
    const icons = merged.icons;
    const obj = { style: tmp4.container, children: closure_8(TableRowGroup, obj2) };
    obj2 = {
      title: merged.title,
      accessibilityRole: "radiogroup",
      accessibilityLabel: intl.string(merged(1115).t.N4YDao),
      hasIcons: true,
      children: icons.map((id) => {
          AppIconRowDefault;
          merged = Object.assign(merged);
          return <tmp key={arg0.id} icon={arg0} showEasterEgg={c1} onLongPress={onLongPress} />;
        })
    };
    onLongPress(react.useState(false), 2);
    TableRowGroup = merged(5999).TableRowGroup;
    intl = merged(1115).intl;
    return closure_8(View, obj);
  }
}
const View = react_native.View;
const createElement = react2.createElement;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ container: { padding: 16 }, bottomUpsellPadding: { paddingBottom: 56 } });
const result = size.fileFinishedImporting("modules/app_icons/native/AppIconRows.tsx");

export default function AppIconRows(onSelect) {
  let currentAppIcon;
  let currentUser;
  let intl;
  let limitedTimeAppIcons;
  let obj6;
  let officialAppIcons;
  let stringResult;
  let tmp15;
  onSelect = onSelect.onSelect;
  const tmp = closure_11();
  const obj = AppIconUtils;
  const appIcons = obj.useAppIcons();
  ({ limitedTimeAppIcons, currentAppIcon, officialAppIcons } = appIcons);
  const items = [UserStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj3 = PremiumTypeUtils;
  const isPremiumResult = obj3.isPremium(stateFromStores);
  const tmp7 = limitedTimeAppIcons.length > 0 && limitedTimeAppIcons.filter((isHidden) => !isHidden.isHidden).length > 0;
  let tmp10 = null;
  const tmp8 = authStore;
  const tmp9 = React4;
  if (tmp7) {
    const obj4 = { hasNitro: isPremiumResult, icons: limitedTimeAppIcons, currentAppIcon, title: intl.string(intl3.t.anqaFd), onSelect };
    intl = tmp2(1115).intl;
    tmp10 = metroImportAll(BackwardsCompatibleAppIconRows, obj4);
  }
  const items1 = [tmp10, ];
  let bottomUpsellPadding = !isPremiumResult;
  const tmp14 = View;
  if (!isPremiumResult) {
    bottomUpsellPadding = tmp.bottomUpsellPadding;
  }
  const obj5 = { style: bottomUpsellPadding, children: metroImportAll(tmp15, obj6) };
  obj6 = { hasNitro: isPremiumResult, icons: officialAppIcons, currentAppIcon, title: stringResult, onSelect };
  stringResult = undefined;
  tmp15 = BackwardsCompatibleAppIconRows;
  if (tmp7) {
    const intl2 = tmp2(1115).intl;
    stringResult = intl2.string(tmp2(1115).t.Ipxkog);
  }
  const obj7 = { children: items1 };
  items1[1] = metroImportAll(tmp14, obj5);
  return tmp8(tmp9, obj7);
};
