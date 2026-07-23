// Module ID: 13792
// Function ID: 105693
// Name: FamilyCenterActivityCardPrefaceText
// Dependencies: [31, 27, 6770, 653, 33, 4130, 689, 7124, 7123, 6828, 11064, 1212, 2198, 1273, 13793, 4126, 8474, 4337, 13794, 1934, 7415, 13795, 13796, 11061, 4098, 3830, 3969, 8382, 675, 10681, 13797, 13798, 13799, 13802, 13809, 2]
// Exports: default

// Module 13792 (FamilyCenterActivityCardPrefaceText)
import importAllResult from "FamilyCenterActivityTotal";
import { View } from "ItemSelectorActionSheet";
import items from "items";
import { AnalyticEvents } from "ME";
import jsxProd from "FamilyCenterActivitySectionHeader";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_8;
let closure_9;
let require = arg1;
function FamilyCenterActivityCardPrefaceText() {
  const tmp = callback3();
  const tmp2 = importDefault(7124)();
  let obj = require(7123) /* useUserIdsForLinkStatus */;
  const activeLinkUserIds = obj.useActiveLinkUserIds();
  let obj1 = require(6828) /* getActivityTypeTextConfigs */;
  const activityWindowTimestampFormatter = obj1.getActivityWindowTimestampFormatter(tmp2);
  let obj2 = require(7123) /* useUserIdsForLinkStatus */;
  const activityWindowTimeStamp = obj2.useActivityWindowTimeStamp(activityWindowTimestampFormatter);
  let obj3 = require(11064) /* useAgeSpecificText */;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { activeLinks: activeLinkUserIds.length };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  const ageSpecificText = obj3.useAgeSpecificText(intl.formatToPlainString(importDefault(2198).tazvHQ, obj), intl2.string(importDefault(2198).KrLnkE));
  obj = { style: tmp.container };
  let tmp9 = null;
  if (!tmp2) {
    obj1 = { color: tmp.icon.color, source: importDefault(13793), style: tmp.icon };
    tmp9 = callback(require(1273) /* Button */.Icon, obj1);
  }
  const items = [tmp9, , ];
  obj2 = { style: tmp.text, variant: "text-xs/semibold", color: "text-subtle" };
  let tmp15 = ageSpecificText;
  if (activeLinkUserIds.length > 1) {
    tmp15 = ageSpecificText;
    if (tmp2) {
      tmp15 = activityWindowTimeStamp;
    }
  }
  obj2.children = tmp15;
  items[1] = callback(require(4126) /* Text */.Text, obj2);
  obj3 = {
    onPress() {
      outer1_1(outer1_2[17]).pushLazy(outer1_0(outer1_2[19])(outer1_2[18], outer1_2.paths));
    }
  };
  const formatToPlainStringResult = intl.formatToPlainString(importDefault(2198).tazvHQ, obj);
  const tmp14 = callback;
  const tmp7 = closure_9;
  const tmp8 = View;
  const obj4 = { color: tmp.icon.color, source: importDefault(7415), size: require(1273) /* Button */.Icon.Sizes.EXTRA_SMALL, style: tmp.icon };
  obj3.children = callback(require(1273) /* Button */.Icon, obj4);
  items[2] = callback(importDefault(8474), obj3);
  obj.children = items;
  return tmp7(tmp8, obj);
}
function FamilyCenterHeaderSubText() {
  const tmp = importDefault(7124)();
  let obj = require(7123) /* useUserIdsForLinkStatus */;
  const activeLinkUserIds = obj.useActiveLinkUserIds();
  const activityWindowTimestampFormatter = require(6828) /* getActivityTypeTextConfigs */.getActivityWindowTimestampFormatter(tmp);
  require(7123) /* useUserIdsForLinkStatus */;
  if (!tmp) {
    obj = { variant: "text-sm/medium", color: "text-muted", children: tmp4 };
    let tmp5 = callback(require(4126) /* Text */.Text, obj);
  } else {
    tmp5 = null;
  }
  return tmp5;
}
class FamilyCenterActivityCardHeader {
  constructor() {
    obj = require("useUserIdsForLinkStatus");
    activeLinkUserIds = obj.useActiveLinkUserIds();
    tmp = require("useIsInAdultAgeGroup")();
    obj2 = require("useSelectedTeenUser");
    selectedTeenUser = obj2.useSelectedTeenUser();
    if (undefined === selectedTeenUser) {
      return null;
    } else {
      if (!tmp) {
        tmp3 = jsx;
        tmp4 = View;
        obj = {};
        tmp5 = f105706;
        obj1 = {};
        obj1.user = selectedTeenUser;
        obj.children = jsx(f105706, obj1);
        tmp6 = jsx(View, obj);
        tmp9 = tmp6;
      } else {
        num = 1;
      }
      tmp7 = jsx;
      tmp8 = FamilyCenterActivityCardAccountSelect;
      tmp6 = jsx(FamilyCenterActivityCardAccountSelect, {});
    }
    return;
  }
}
class FamilyCenterActivityCardAccountSelect {
  constructor() {
    tmp = FamilyCenterActivityCardAccount();
    obj = require("useUserIdsForLinkStatus");
    activeLinkUsers = obj.useActiveLinkUsers();
    useActiveLinkUsers = activeLinkUsers;
    obj2 = require("useSelectedTeenUser");
    selectedTeenUser = obj2.useSelectedTeenUser();
    closure_1 = selectedTeenUser;
    obj3 = require("useFamilyCenterActions");
    obj = {
      onSuccess() {
            return selectedTeenUser(selectTeenUser[24]).hideActionSheet(outer1_10);
          },
      onError() {
            const intl = activeLinkUsers(selectTeenUser[11]).intl;
            return activeLinkUsers(selectTeenUser[25]).presentFailedToast(intl.string(selectedTeenUser(selectTeenUser[12]).Wu8BK2));
          }
    };
    selectTeenUser = obj3.useFamilyCenterActions(obj).selectTeenUser;
    items = [];
    items[0] = activeLinkUsers;
    f105701 = f105701.useMemo(() => activeLinkUsers.map((id) => {
      const obj = {};
      const name = selectedTeenUser(selectTeenUser[26]).getName(id);
      const obj2 = selectedTeenUser(selectTeenUser[26]);
      obj.label = "" + name + " (" + selectedTeenUser(selectTeenUser[26]).getUserTag(id) + ")";
      obj.value = id.id;
      return obj;
    }), items);
    tmp4 = null;
    if (undefined !== selectedTeenUser) {
      tmp5 = jsx;
      tmp6 = View;
      obj1 = {};
      tmp7 = jsxs;
      tmp8 = closure_1;
      tmp9 = selectTeenUser;
      num = 16;
      obj2 = {};
      obj2.style = tmp.touch;
      str = "spinbutton";
      obj2.accessibilityRole = "spinbutton";
      obj2.onPress = function onPress() {
        if (undefined !== selectedTeenUser) {
          let obj = selectedTeenUser(selectTeenUser[24]);
          obj = {};
          const intl = activeLinkUsers(selectTeenUser[11]).intl;
          obj.title = intl.string(selectedTeenUser(selectTeenUser[12]).vORl9Q);
          obj.items = closure_3;
          obj.onItemSelect = function onItemSelect(arg0) {
            let tmp = null != arg0;
            if (tmp) {
              tmp = arg0 !== outer1_1.id;
            }
            if (tmp) {
              outer1_2(arg0);
              let obj = selectedTeenUser(selectTeenUser[28]);
              obj = { action: outer2_5.SelectTeen };
              obj.track(outer2_7.FAMILY_CENTER_ACTION, obj);
            }
            setImmediate(() => {
              selectedTeenUser(selectTeenUser[24]).hideActionSheet(outer3_10);
            });
          };
          obj.selectedItem = selectedTeenUser.id;
          obj.hasIcons = false;
          obj.openLazy(activeLinkUsers(selectTeenUser[19])(selectTeenUser[27], selectTeenUser.paths), outer1_10, obj);
          const tmp4 = activeLinkUsers(selectTeenUser[19])(selectTeenUser[27], selectTeenUser.paths);
        }
      };
      tmp11 = jsx;
      tmp12 = f105706;
      obj3 = {};
      obj3.user = selectedTeenUser;
      flag = true;
      obj3.inSelector = true;
      tmp10 = require("_isNativeReflectConstruct");
      items1 = [, ];
      items1[0] = jsx(f105706, obj3);
      tmp13 = jsx;
      tmp14 = useActiveLinkUsers;
      num2 = 13;
      obj4 = {};
      obj4.style = tmp.icon;
      obj4.size = require("Button").Icon.Sizes.MEDIUM;
      num3 = 29;
      obj4.source = require("registerAsset");
      items1[1] = jsx(require("Button").Icon, obj4);
      obj2.children = items1;
      obj1.children = jsxs(tmp10, obj2);
      tmp4 = jsx(View, obj1);
    }
    return tmp4;
  }
}
({ FamilyCenterAction: closure_5, TeenActionDisplayType: closure_6 } = items);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const FamilyCenterTeenAccountSelect = "FamilyCenterTeenAccountSelect";
let obj = { container: { display: "flex", flexDirection: "row", alignItems: "center" } };
obj = { color: require("_createForOfIteratorHelperLoose").colors.ICON_SUBTLE, width: require("_createForOfIteratorHelperLoose").space.PX_16, height: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.icon = obj;
_createForOfIteratorHelperLoose = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.text = _createForOfIteratorHelperLoose;
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj2 = {};
let obj3 = { display: "flex", flexDirection: "row", alignItems: "center", padding: require("_createForOfIteratorHelperLoose").space.PX_12, flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGHEST, borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.md, borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.md };
obj2.header = obj3;
let obj4 = { borderRadius: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.NORMAL] / 2, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
obj2.avatar = obj4;
_createForOfIteratorHelperLoose = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_12, alignItems: "flex-start" };
obj2.avatarContainer = _createForOfIteratorHelperLoose;
const obj6 = { display: "flex", flexDirection: "column", width: "100%", paddingRight: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj2.userHeader = obj6;
obj2.nonSelectorHeader = { flex: 1, paddingRight: require("_createForOfIteratorHelperLoose").space.PX_16 };
let closure_12 = _createForOfIteratorHelperLoose.createStyles(obj2);
const memoResult = importAllResult.memo((arg0) => {
  let inSelector;
  let user;
  ({ user, inSelector } = arg0);
  const tmp = callback4();
  const AvatarSizes = require(1273) /* Button */.AvatarSizes;
  let obj = { style: tmp.header };
  obj = { style: tmp.avatarContainer, children: callback(require(1273) /* Button */.Avatar, obj) };
  obj = { avatarStyle: tmp.avatar, user, guildId: undefined, disablePlaceholder: true, avatarDecoration: user.avatarDecoration, size: inSelector ? AvatarSizes.SMALL : AvatarSizes.NORMAL };
  const items = [callback(View, obj), ];
  const obj1 = {};
  const items1 = [tmp.userHeader, ];
  let nonSelectorHeader;
  if (!inSelector) {
    nonSelectorHeader = tmp.nonSelectorHeader;
  }
  items1[1] = nonSelectorHeader;
  obj1.style = items1;
  const items2 = [callback(importDefault(13795), { user }), callback(FamilyCenterHeaderSubText, {})];
  obj1.children = items2;
  items[1] = closure_9(View, obj1);
  obj.children = items;
  return closure_9(View, obj);
});
memoResult.displayName = "FamilyCenterActivityCardAccount";
const obj8 = {};
const obj9 = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGHEST };
const merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_LOW);
obj8.touch = obj9;
const obj7 = { flex: 1, paddingRight: require("_createForOfIteratorHelperLoose").space.PX_16 };
items = [{ rotate: "90deg" }];
obj8.icon = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT, width: require("_createForOfIteratorHelperLoose").space.PX_24, height: require("_createForOfIteratorHelperLoose").space.PX_24, transform: items, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
let closure_14 = _createForOfIteratorHelperLoose.createStyles(obj8);
const obj11 = {};
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj11.card = _createForOfIteratorHelperLoose;
const obj10 = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT, width: require("_createForOfIteratorHelperLoose").space.PX_24, height: require("_createForOfIteratorHelperLoose").space.PX_24, transform: items, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj11.preface = { display: "flex", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_12 };
const obj13 = { display: "flex", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj11.container = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
const obj15 = { padding: require("_createForOfIteratorHelperLoose").space.PX_16, display: "flex", flexDirection: "column", gap: require("_createForOfIteratorHelperLoose").space.PX_32 };
obj11.content = obj15;
_createForOfIteratorHelperLoose = { display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj11.totals = _createForOfIteratorHelperLoose;
obj11.first = { width: "100%" };
obj11.other = { width: "48.5%" };
const obj17 = { display: "flex", flexDirection: "column", gap: require("_createForOfIteratorHelperLoose").space.PX_32 };
obj11.activities = obj17;
const obj14 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
obj11.settingsControls = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
let closure_15 = _createForOfIteratorHelperLoose.createStyles(obj11);
const obj18 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
const result = require("items").fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityCard.tsx");

export default function FamilyCenterActivityCard() {
  const tmp = callback6();
  const require = tmp;
  let obj = require(13796) /* useSelectedTeenUser */;
  const selectedTeenUser = obj.useSelectedTeenUser();
  require(13797) /* useActionTotalsForDisplayType */;
  if (undefined === selectedTeenUser) {
    return null;
  } else {
    let obj3 = require(6828) /* getActivityTypeTextConfigs */;
    const sortedActivityTypeConfigs = obj3.getSortedActivityTypeConfigs();
    obj = { style: tmp.card };
    obj = { style: tmp.preface, children: callback(FamilyCenterActivityCardPrefaceText, {}) };
    const items = [callback(View, obj), , ];
    const obj1 = { style: tmp.container };
    const items1 = [callback(FamilyCenterActivityCardHeader, {}), ];
    const obj2 = { style: tmp.content };
    obj3 = { style: tmp.totals };
    const found = sortedActivityTypeConfigs.filter((arg0) => {
      let tmp;
      [tmp] = arg0;
      return tmp !== outer1_6.GIFTS;
    });
    obj3.children = found.map((arg0, arg1) => {
      let tmp;
      [tmp, ] = arg0;
      const obj = {};
      if (0 === arg1) {
        let other = tmp.first;
      } else {
        other = tmp.other;
      }
      obj.style = other;
      obj.children = outer1_8(outer1_1(outer1_2[31]), { displayType: tmp });
      return outer1_8(outer1_4, obj, "total-" + tmp);
    });
    const items2 = [callback(View, obj3), callback(importDefault(13799), {}), ];
    let tmp7 = null;
    if (tmp4) {
      const obj4 = {
        style: tmp.activities,
        children: sortedActivityTypeConfigs.map((arg0) => {
              let tmp;
              [tmp, ] = arg0;
              return outer1_8(outer1_1(outer1_2[33]), { displayType }, "section-" + displayType);
            })
      };
      tmp7 = callback(View, obj4);
    }
    items2[2] = tmp7;
    obj2.children = items2;
    items1[1] = closure_9(View, obj2);
    obj1.children = items1;
    items[1] = closure_9(View, obj1);
    const obj5 = { style: tmp.settingsControls, children: callback(importDefault(13809), {}) };
    items[2] = callback(View, obj5);
    obj.children = items;
    return closure_9(View, obj);
  }
};
export const FamilyCenterActivityCardAccount = memoResult;
export { FamilyCenterActivityCardHeader };
export { FamilyCenterActivityCardAccountSelect };
