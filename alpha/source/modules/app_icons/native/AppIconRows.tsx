// Module ID: 17509
// Function ID: 17510
// Name: AppIconRows
// Dependencies: [32, 19, 17, 1383, 9979, 21, 5014, 9980, 7060, 1113, 17510, 15340, 504, 1983, 17511, 2]
// Exports: default

// Module 17509 (AppIconRows)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 19 */;
import get_initialized from "get initialized" /* 504 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1983 */;
import AppIconConstants from "AppIconConstants" /* 9979 */;
import AppIconUtils from "AppIconUtils" /* 15340 */;
import AppIconRowDefault from "AppIconRow" /* 17510 */;
import HexagonCampaignAppIconSectionDefault from "HexagonCampaignAppIconSection" /* 17511 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import UserStore from "UserStore" /* 1383 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const react = react2;
let dependencyMap;

let c10;
let c9;
let tmp2;
let unpackModuleId;
const intl4 = tmp2(1113);
const AppIconTypes = tmp2(9980);
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
    const tmp4 = closure_12();
    [c1, c2] = onLongPress(react.useState(false), 2);
    const icons = merged.icons;
    const obj = { style: tmp4.container, children: closure_9(TableRowGroup, obj2) };
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
    TableRowGroup = merged(7060).TableRowGroup;
    intl = merged(1113).intl;
    return closure_9(View, obj);
  }
}
const View = react_native.View;
const isHexagonCampaignAppIcon = AppIconConstants.isHexagonCampaignAppIcon;
const createElement = react2.createElement;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles({ container: { padding: 16 }, bottomUpsellPadding: { paddingBottom: 56 } });
const result = size.fileFinishedImporting("modules/app_icons/native/AppIconRows.tsx");

export default function AppIconRows(onSelect) {
  let currentAppIcon;
  let currentUser;
  let intl3;
  let limitedTimeAppIcons;
  let officialAppIcons;
  let stringResult;
  onSelect = onSelect.onSelect;
  const pendingAppIconId = onSelect.pendingAppIconId;
  let tmp2 = require;
  const tmp = closure_12();
  const obj = AppIconUtils;
  const appIcons = obj.useAppIcons();
  ({ limitedTimeAppIcons, currentAppIcon, officialAppIcons } = appIcons);
  const items = [UserStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj3 = PremiumTypeUtils;
  const isPremiumResult = obj3.isPremium(stateFromStores);
  const someResult = limitedTimeAppIcons.some((id) => isHexagonCampaignAppIcon(id.id));
  const found = limitedTimeAppIcons.filter((id) => {
    const tmp2 = !isHexagonCampaignAppIcon(id.id) && !id.isHidden;
    return tmp2;
  });
  if (someResult) {
    const intl2 = intl4.intl;
    stringResult = intl2.string(intl4.t.w9v0yp);
  } else if (found.length > 0) {
    const intl = intl4.intl;
    stringResult = intl.string(intl4.t.Ipxkog);
  }
  let tmp12 = null;
  const tmp10 = unpackModuleId;
  const tmp11 = authStore;
  if (someResult) {
    const obj4 = { currentAppIcon, isPending: pendingAppIconId === AppIconTypes.LimitedTimeAppIconIds.HEXAGON, onSelect };
    const tmp15 = HexagonCampaignAppIconSectionDefault;
    tmp12 = React4(tmp15, obj4);
  }
  const items1 = [tmp12, , ];
  let tmp16 = null;
  if (found.length > 0) {
    const obj5 = { hasNitro: isPremiumResult, icons: found, currentAppIcon, title: intl3.string(intl4.t.anqaFd), onSelect };
    intl3 = intl4.intl;
    tmp16 = React4(BackwardsCompatibleAppIconRows, obj5);
  }
  items1[1] = tmp16;
  let bottomUpsellPadding = !isPremiumResult;
  const tmp20 = View;
  if (!isPremiumResult) {
    bottomUpsellPadding = tmp.bottomUpsellPadding;
  }
  const obj6 = { children: items1 };
  const obj7 = { style: bottomUpsellPadding, children: React4(BackwardsCompatibleAppIconRows, { hasNitro: isPremiumResult, icons: officialAppIcons, currentAppIcon, title: stringResult, onSelect }) };
  items1[2] = React4(tmp20, obj7);
  return tmp10(tmp11, obj6);
};
