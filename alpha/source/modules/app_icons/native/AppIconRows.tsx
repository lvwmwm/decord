// Module ID: 18043
// Function ID: 18044
// Name: AppIconRows
// Dependencies: [32, 19, 17, 1385, 21, 5243, 5269, 7680, 1113, 18044, 15203, 504, 2107, 5271, 18045, 2]
// Exports: default

// Module 18043 (AppIconRows)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 19 */;
import get_initialized from "get initialized" /* 504 */;
import intl4 from "intl" /* 1113 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 2107 */;
import AppIconTypes from "AppIconTypes" /* 5269 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 5271 */;
import AppIconUtils from "AppIconUtils" /* 15203 */;
import AppIconRowDefault from "AppIconRow" /* 18044 */;
import HexagonCampaignAppIconSectionDefault from "HexagonCampaignAppIconSection" /* 18045 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import UserStore from "UserStore" /* 1385 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
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
      accessibilityLabel: intl.string(merged(1113).t.N4YDao),
      hasIcons: true,
      children: icons.map((id) => {
          AppIconRowDefault;
          merged = Object.assign(merged);
          return <tmp key={arg0.id} icon={arg0} showEasterEgg={c1} onLongPress={onLongPress} />;
        })
    };
    onLongPress(react.useState(false), 2);
    TableRowGroup = merged(7680).TableRowGroup;
    intl = merged(1113).intl;
    return closure_8(View, obj);
  }
}
const View = react_native.View;
const createElement = react2.createElement;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ container: { padding: 16 }, bottomUpsellPadding: { paddingBottom: 56 } });
let result = size.fileFinishedImporting("modules/app_icons/native/AppIconRows.tsx");

export default function AppIconRows(onSelect) {
  let currentAppIcon;
  let currentUser;
  let intl3;
  let limitedTimeAppIcons;
  let officialAppIcons;
  let stringResult;
  onSelect = onSelect.onSelect;
  const pendingAppIconId = onSelect.pendingAppIconId;
  const tmp = closure_11();
  let obj = AppIconUtils;
  const appIcons = obj.useAppIcons();
  ({ limitedTimeAppIcons, currentAppIcon, officialAppIcons } = appIcons);
  const items = [UserStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj3 = PremiumTypeUtils;
  const isPremiumResult = obj3.isPremium(stateFromStores);
  const someResult = limitedTimeAppIcons.some((id) => {
    const obj = HexagonCampaignUtils;
    return obj.isHexagonCampaignAppIcon(id.id);
  });
  const found = limitedTimeAppIcons.filter((id) => {
    const obj = HexagonCampaignUtils;
    const result = obj.isHexagonCampaignAppIcon(id.id);
    return !result && !id.isHidden;
  });
  if (someResult) {
    const intl2 = tmp2(1113).intl;
    stringResult = intl2.string(tmp2(1113).t.w9v0yp);
  } else if (found.length > 0) {
    const intl = tmp2(1113).intl;
    stringResult = intl.string(tmp2(1113).t.Ipxkog);
  }
  let tmp12 = null;
  const tmp10 = authStore;
  const tmp11 = React4;
  if (someResult) {
    const obj4 = { currentAppIcon, isPending: pendingAppIconId === AppIconTypes.LimitedTimeAppIconIds.HEXAGON, onSelect };
    const tmp15 = HexagonCampaignAppIconSectionDefault;
    tmp12 = metroImportAll(tmp15, obj4);
  }
  const items1 = [tmp12, , ];
  let tmp16 = null;
  if (found.length > 0) {
    const obj5 = { hasNitro: isPremiumResult, icons: found, currentAppIcon, title: intl3.string(intl4.t.anqaFd), onSelect };
    intl3 = tmp2(1113).intl;
    tmp16 = metroImportAll(BackwardsCompatibleAppIconRows, obj5);
  }
  items1[1] = tmp16;
  let bottomUpsellPadding = !isPremiumResult;
  const tmp20 = View;
  if (!isPremiumResult) {
    bottomUpsellPadding = tmp.bottomUpsellPadding;
  }
  const obj6 = { children: items1 };
  const obj7 = { style: bottomUpsellPadding, children: metroImportAll(BackwardsCompatibleAppIconRows, { hasNitro: isPremiumResult, icons: officialAppIcons, currentAppIcon, title: stringResult, onSelect }) };
  items1[2] = metroImportAll(tmp20, obj7);
  return tmp10(tmp11, obj6);
};
