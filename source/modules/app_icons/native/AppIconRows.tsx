// Module ID: 14246
// Function ID: 107655
// Name: BackwardsCompatibleAppIconRows
// Dependencies: []
// Exports: default

// Module 14246 (BackwardsCompatibleAppIconRows)
function BackwardsCompatibleAppIconRows(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
    throw undefined;
  } else {
    const merged = Object.assign(arg0, undefined);
    const arg1 = merged;
    let closure_1;
    let closure_2;
    function onLongPress(closure_4, arg1) {
      let tmp = null;
      if (closure_4 === merged(callback2[6]).FreemiumAppIconIds.DEFAULT) {
        tmp = callback2(true);
      }
      return tmp;
    }
    const tmp9 = onLongPress(React.useState(false), 2);
    closure_1 = tmp9[0];
    closure_2 = tmp9[1];
    const icons = merged.icons;
    let obj = { style: callback2().container };
    obj = { title: merged.title, accessibilityRole: "radiogroup" };
    const intl = arg1(closure_2[8]).intl;
    obj.accessibilityLabel = intl.string(arg1(closure_2[8]).t.N4YDao);
    obj.hasIcons = true;
    obj.children = icons.map((id) => {
      const obj = {};
      const merged = Object.assign(merged);
      obj["key"] = id.id;
      obj["icon"] = id;
      obj["showEasterEgg"] = callback;
      obj["onLongPress"] = onLongPress;
      return callback3(callback(closure_2[9]), obj);
    });
    obj.children = callback(arg1(closure_2[7]).TableRowGroup, obj);
    return callback(View, obj);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
const createElement = arg1(dependencyMap[1]).createElement;
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
let closure_11 = arg1(dependencyMap[5]).createStyles({ container: { padding: 16 }, bottomUpsellPadding: { paddingBottom: 56 } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/app_icons/native/AppIconRows.tsx");

export default function AppIconRows(onSelect) {
  let currentAppIcon;
  let limitedTimeAppIcons;
  onSelect = onSelect.onSelect;
  let obj = arg1(dependencyMap[10]);
  const appIcons = obj.useAppIcons();
  ({ limitedTimeAppIcons, currentAppIcon } = appIcons);
  let obj1 = arg1(dependencyMap[11]);
  const items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = arg1(dependencyMap[12]);
  const isPremiumResult = obj2.isPremium(stateFromStores);
  const tmp5 = limitedTimeAppIcons.length > 0 && limitedTimeAppIcons.filter((isHidden) => !isHidden.isHidden).length > 0;
  obj = {};
  let tmp8 = null;
  if (tmp5) {
    obj = { hasNitro: isPremiumResult, icons: limitedTimeAppIcons, currentAppIcon };
    const intl = arg1(dependencyMap[8]).intl;
    obj.title = intl.string(arg1(dependencyMap[8]).t.anqaFd);
    obj.onSelect = onSelect;
    tmp8 = callback(BackwardsCompatibleAppIconRows, obj);
  }
  const items1 = [tmp8, ];
  obj1 = {};
  let bottomUpsellPadding = !isPremiumResult;
  if (bottomUpsellPadding) {
    bottomUpsellPadding = tmp.bottomUpsellPadding;
  }
  obj1.style = bottomUpsellPadding;
  obj2 = { hasNitro: isPremiumResult, icons: appIcons.officialAppIcons, currentAppIcon };
  let stringResult;
  if (tmp5) {
    const intl2 = arg1(dependencyMap[8]).intl;
    stringResult = intl2.string(arg1(dependencyMap[8]).t.Ipxkog);
  }
  obj2.title = stringResult;
  obj2.onSelect = onSelect;
  obj1.children = callback(BackwardsCompatibleAppIconRows, obj2);
  items1[1] = callback(View, obj1);
  obj.children = items1;
  return closure_10(closure_9, obj);
};
