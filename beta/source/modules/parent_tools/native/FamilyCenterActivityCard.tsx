// Module ID: 14425
// Function ID: 14426
// Name: FamilyCenterActivityCard
// Dependencies: [19, 17, 6958, 1074, 21, 4836, 576, 8106, 8105, 7012, 11398, 1115, 2487, 1177, 14426, 4832, 9203, 5039, 14427, 1981, 12285, 14428, 14429, 11395, 4800, 4527, 4678, 8729, 1241, 9396, 14430, 14431, 14432, 14435, 14442, 2]
// Exports: default

// Module 14425 (FamilyCenterActivityCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import _modDef2487 from "module_2487" /* 2487 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 7012 */;
import useUserLinks from "useUserLinks" /* 8105 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8106 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9203 */;
import useAgeSpecificText2 from "useAgeSpecificText" /* 11398 */;
import AssetRegistryDefault from "AssetRegistry" /* 12285 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14426 */;
import FamilyCenterUsernameHeaderDefault from "FamilyCenterUsernameHeader" /* 14428 */;
import useSelectedTeenUser from "useSelectedTeenUser" /* 14429 */;
import FamilyCenterActivityTotalDefault from "FamilyCenterActivityTotal" /* 14431 */;
import FamilyCenterTopActivityDefault from "FamilyCenterTopActivity" /* 14432 */;
import FamilyCenterActivitySectionDefault from "FamilyCenterActivitySection" /* 14435 */;
import react_mod from "react" /* 19 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 6958 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c9;
let hasOwnProperty;
let items;
let metroImportAll;
let metroRequire;
let obj10;
let obj2;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let size;
let size1;
let tmp3;
const Text_Text = tmp3(4832);
function FamilyCenterActivityCardPrefaceText() {
  let Icon2;
  let items;
  let obj9;
  let paths;
  let tmp16;
  const tmp = closure_11();
  const tmp4 = useIsInAdultAgeGroupDefault();
  let obj = useUserLinks;
  const activeLinkUserIds = obj.useActiveLinkUserIds();
  const obj2 = FamilyCenterUtils;
  const activityWindowTimestampFormatter = obj2.getActivityWindowTimestampFormatter(tmp4);
  const obj3 = useUserLinks;
  const activityWindowTimeStamp = obj3.useActivityWindowTimeStamp(activityWindowTimestampFormatter);
  const useAgeSpecificText = useAgeSpecificText2.useAgeSpecificText;
  useAgeSpecificText2;
  const intl = intl3.intl;
  const obj4 = { activeLinks: activeLinkUserIds.length };
  const formatToPlainStringResult = intl.formatToPlainString(_modDef2487.tazvHQ, obj4);
  const intl2 = intl3.intl;
  const ageSpecificText = useAgeSpecificText(formatToPlainStringResult, intl2.string(_modDef2487.KrLnkE));
  let tmp13 = null;
  const obj5 = { style: tmp.container, children: items };
  const tmp11 = React4;
  const tmp12 = View;
  if (!tmp4) {
    const obj6 = { color: tmp.icon.color, source: AssetRegistryDefault2, style: tmp.icon };
    const Icon = tmp5(1177).Icon;
    tmp13 = metroImportAll(Icon, obj6);
  }
  items = [tmp13, , ];
  const obj7 = { style: tmp.text, variant: "text-xs/semibold", color: "text-subtle", children: tmp16 };
  tmp16 = ageSpecificText;
  const Text = tmp5(4832).Text;
  if (activeLinkUserIds.length > 1) {
    tmp16 = ageSpecificText;
    if (tmp4) {
      tmp16 = activityWindowTimeStamp;
    }
  }
  items[1] = metroImportAll(Text, obj7);
  const obj8 = {
    onPress() {
      const obj = require("ModalActionCreators");
      obj.pushLazy(require("asyncRequire")(paths[18], paths.paths));
    },
    children: metroImportAll(Icon2, obj9)
  };
  obj9 = { color: tmp.icon.color, source: AssetRegistryDefault, size: native.Icon.Sizes.EXTRA_SMALL, style: tmp.icon };
  const tmp2Result = TouchableHitBoxDefault;
  Icon2 = tmp5(1177).Icon;
  items[2] = metroImportAll(tmp2Result, obj8);
  return tmp11(tmp12, obj5);
}
function FamilyCenterHeaderSubText() {
  let tmp7;
  const tmp2 = useIsInAdultAgeGroupDefault();
  const obj = useUserLinks;
  const activeLinkUserIds = obj.useActiveLinkUserIds();
  const obj2 = FamilyCenterUtils;
  const activityWindowTimestampFormatter = obj2.getActivityWindowTimestampFormatter(tmp2);
  useUserLinks;
  if (!tmp2) {
    const obj3 = { variant: "text-sm/medium", color: "text-muted", children: tmp6 };
    tmp7 = metroImportAll(Text_Text.Text, obj3);
  } else {
    tmp7 = null;
  }
  return tmp7;
}
class FamilyCenterActivityCardHeader {
  constructor() {
    let obj4;
    const obj = useUserLinks;
    const activeLinkUserIds = obj.useActiveLinkUserIds();
    const tmp = useIsInAdultAgeGroupDefault();
    const obj2 = useSelectedTeenUser;
    const selectedTeenUser = obj2.useSelectedTeenUser();
    let tmp3 = null;
    if (undefined !== selectedTeenUser) {
      if (tmp) {
        let tmp7;
        if (1 !== activeLinkUserIds.length) {
          tmp7 = metroImportAll(FamilyCenterActivityCardAccountSelect, {});
        }
        tmp3 = tmp7;
      }
      const obj3 = { children: metroImportAll(memoResult, obj4) };
      obj4 = { user: selectedTeenUser };
      tmp7 = metroImportAll(View, obj3);
    }
    return tmp3;
  }
}
class FamilyCenterActivityCardAccountSelect {
  constructor() {
    let SelectTeen;
    let activeLinkUsers;
    let items1;
    let obj6;
    let selectTeenUser;
    let tmp11;
    let tmp = closure_17();
    const tmp2 = activeLinkUsers;
    const tmp3 = selectTeenUser;
    let obj = activeLinkUsers(selectTeenUser[8]);
    activeLinkUsers = obj.useActiveLinkUsers();
    let obj2 = activeLinkUsers(selectTeenUser[22]);
    const selectedTeenUser = obj2.useSelectedTeenUser();
    let obj3 = activeLinkUsers(selectTeenUser[23]);
    const obj4 = {
      onSuccess() {
        const obj = selectedTeenUser(selectTeenUser[24]);
        return obj.hideActionSheet(FamilyCenterTeenAccountSelect);
      },
      onError() {
        const presentFailedToast = activeLinkUsers(selectTeenUser[25]).presentFailedToast;
        activeLinkUsers(selectTeenUser[25]);
        const intl = activeLinkUsers(selectTeenUser[11]).intl;
        return presentFailedToast(intl.string(selectedTeenUser(selectTeenUser[12]).Wu8BK2));
      }
    };
    selectTeenUser = obj3.useFamilyCenterActions(obj4).selectTeenUser;
    const items = [activeLinkUsers];
    react = react.useMemo(() => activeLinkUsers.map((id) => {
      let name;
      let obj3;
      const obj = { label: "" + name + " (" + obj3.getUserTag(id) + ")", value: id.id };
      const obj2 = selectedTeenUser(selectTeenUser[26]);
      name = obj2.getName(id);
      obj3 = selectedTeenUser(selectTeenUser[26]);
      return obj;
    }), items);
    let tmp6 = null;
    if (undefined !== selectedTeenUser) {
      const obj5 = { children: closure_9(tmp11, obj6) };
      obj6 = {
        style: tmp.touch,
        accessibilityRole: "spinbutton",
        onPress() {
            let id;
            let intl;
            let tmp;
            if (undefined !== selectedTeenUser) {
              const openLazy = ActionSheetActionCreatorsDefault.openLazy;
              let obj = {
                title: intl.string(_modDef2487.vORl9Q),
                items,
                onItemSelect(arg0) {
                    const tmp = null != arg0 && arg0 !== id.id;
                    if (tmp) {
                      closure_1_2(arg0);
                      let obj = selectedTeenUser(selectTeenUser[28]);
                      const obj2 = { action: SelectTeen.SelectTeen };
                      obj.track(constants.FAMILY_CENTER_ACTION, obj2);
                    }
                    setImmediate(() => {
                      const obj = id(closure_1_2[24]);
                      obj.hideActionSheet(closure_1_10);
                    });
                  },
                selectedItem: tmp.id,
                hasIcons: false
              };
              const tmp6 = asyncRequire(8729, dependencyMap.paths);
              intl = intl3.intl;
              openLazy(tmp6, FamilyCenterTeenAccountSelect, obj);
            }
          },
        children: items1
      };
      items1 = [, ];
      const obj7 = { user: selectedTeenUser, inSelector: true };
      tmp11 = selectedTeenUser(tmp3[16]);
      items1[0] = closure_8(closure_15, obj7);
      const obj8 = { style: tmp.icon, size: tmp2(tmp3[13]).Icon.Sizes.MEDIUM, source: selectedTeenUser(tmp3[29]) };
      const Icon = tmp2(tmp3[13]).Icon;
      items1[1] = closure_8(Icon, obj8);
      tmp6 = closure_8(View, obj5);
    }
    return tmp6;
  }
}
let react = react_mod;
const View = react_native.View;
({ FamilyCenterAction: hasOwnProperty, TeenActionDisplayType: metroRequire } = FamilyCenterConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const FamilyCenterTeenAccountSelect = "FamilyCenterTeenAccountSelect";
let createStyles = createStyles_mod;
let obj = { container: { display: "flex", flexDirection: "row", alignItems: "center" }, icon: size, text: obj2 };
size = { color: nativeDefault.colors.ICON_SUBTLE, width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj2 = { marginHorizontal: nativeDefault.space.PX_4 };
let closure_11 = createStyles(obj);
createStyles = createStyles_mod;
let obj3 = { header: obj4, avatar: obj5, avatarContainer: obj6, userHeader: obj7, nonSelectorHeader: obj8 };
obj4 = { display: "flex", flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_12, flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderTopLeftRadius: nativeDefault.radii.md, borderTopRightRadius: nativeDefault.radii.md };
const createStyles2 = createStyles.createStyles;
obj5 = { borderRadius: native.AVATAR_SIZE_MAP[native.AvatarSizes.NORMAL] / 2, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj6 = { marginRight: nativeDefault.space.PX_12, alignItems: "flex-start" };
obj7 = { display: "flex", flexDirection: "column", width: "100%", paddingRight: nativeDefault.space.PX_16 };
obj8 = { flex: 1, paddingRight: nativeDefault.space.PX_16 };
let closure_14 = createStyles2(obj3);
const memoResult = react.memo((arg0) => {
  let NORMAL;
  let inSelector;
  let items;
  let items2;
  let obj3;
  let tmp4;
  let user;
  ({ user, inSelector } = arg0);
  const tmp = closure_14();
  const AvatarSizes = native.AvatarSizes;
  if (inSelector) {
    NORMAL = AvatarSizes.SMALL;
    tmp4 = tmp2;
  } else {
    NORMAL = AvatarSizes.NORMAL;
    tmp4 = tmp2;
  }
  const obj = { style: tmp.header, children: items };
  const obj2 = { style: tmp.avatarContainer, children: metroImportAll(tmp4(1177).Avatar, obj3) };
  obj3 = { avatarStyle: tmp.avatar, user, guildId: "HermesInternal", disablePlaceholder: null, avatarDecoration: user.avatarDecoration, size: NORMAL };
  items = [metroImportAll(View, obj2), ];
  const items1 = [tmp.userHeader, ];
  let nonSelectorHeader;
  if (!inSelector) {
    nonSelectorHeader = tmp.nonSelectorHeader;
  }
  const obj4 = { style: items1, children: items2 };
  items1[1] = nonSelectorHeader;
  items2 = [metroImportAll(FamilyCenterUsernameHeaderDefault, { user }), metroImportAll(FamilyCenterHeaderSubText, {})];
  items[1] = React4(View, obj4);
  return React4(View, obj);
});
memoResult.displayName = "FamilyCenterActivityCardAccount";
createStyles = createStyles_mod;
let obj9 = { touch: obj10, icon: size1 };
const createStyles3 = createStyles.createStyles;
obj10 = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
size1 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, width: nativeDefault.space.PX_24, height: nativeDefault.space.PX_24, transform: items, marginHorizontal: nativeDefault.space.PX_8 };
items = [{ rotate: "90deg" }];
let closure_17 = createStyles3(obj9);
createStyles = createStyles_mod;
const createStyles4 = createStyles.createStyles;
const obj11 = { card: { marginTop: nativeDefault.space.PX_16 }, preface: { display: "flex", marginBottom: nativeDefault.space.PX_12 }, container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md }, content: { padding: nativeDefault.space.PX_16, display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_32 }, totals: { display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", gap: nativeDefault.space.PX_8 }, first: { width: "100%" }, other: { width: "48.5%" }, activities: { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_32 }, settingsControls: { marginTop: nativeDefault.space.PX_24 } };
({ marginTop: nativeDefault.space.PX_16 });
({ display: "flex", marginBottom: nativeDefault.space.PX_12 });
({ backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md });
({ padding: nativeDefault.space.PX_16, display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_32 });
({ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", gap: nativeDefault.space.PX_8 });
({ display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_32 });
({ marginTop: nativeDefault.space.PX_24 });
let closure_19 = createStyles4(obj11);
size = size_mod;
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityCard.tsx");

export default function FamilyCenterActivityCard() {
  let closure_0;
  let found;
  let items;
  let items1;
  let items2;
  const tmp = closure_19();
  _require = tmp;
  let tmp3 = dependencyMap;
  let tmp2 = _require;
  let obj = require("useSelectedTeenUser");
  const selectedTeenUser = obj.useSelectedTeenUser();
  require("useFamilyCenterActivities");
  if (undefined === selectedTeenUser) {
    return null;
  } else {
    const tmp2Result = tmp2(7012);
    const sortedActivityTypeConfigs = tmp2Result.getSortedActivityTypeConfigs();
    const obj2 = { style: tmp.card, children: items };
    const obj3 = { style: tmp.preface, children: closure_8(FamilyCenterActivityCardPrefaceText, {}) };
    items = [closure_8(View, obj3), , ];
    const obj4 = { style: tmp.container, children: items1 };
    items1 = [closure_8(FamilyCenterActivityCardHeader, {}), ];
    const obj5 = { style: tmp.content, children: items2 };
    const obj6 = {
      style: tmp.totals,
      children: found.map((item, index) => {
          let other;
          let tmp;
          [tmp, ] = item;
          const tmp3 = View;
          if (0 === index) {
            other = closure_0.first;
          } else {
            other = closure_0.other;
          }
          const obj = { style: other, children: metroImportAll(FamilyCenterActivityTotalDefault, { displayType: tmp }) };
          return metroImportAll(tmp3, obj, "total-" + tmp);
        })
    };
    found = sortedActivityTypeConfigs.filter((item) => {
      let tmp;
      [tmp] = item;
      return tmp !== constants.GIFTS;
    });
    items2 = [closure_8(View, obj6), closure_8(FamilyCenterTopActivityDefault, {}), ];
    let tmp11Result = null;
    const tmp14 = importDefault;
    if (tmp6) {
      const obj7 = {
        style: tmp.activities,
        children: sortedActivityTypeConfigs.map((item) => {
              let tmp;
              [tmp, ] = item;
              const tmp2 = FamilyCenterActivitySectionDefault;
              return closure_1_8(tmp2, { displayType }, "section-" + displayType);
            })
      };
      tmp11Result = tmp11(tmp10, obj7);
    }
    items2[2] = tmp11Result;
    items1[1] = closure_9(View, obj5);
    items[1] = closure_9(View, obj4);
    const obj8 = { style: tmp.settingsControls, children: closure_8(tmp14(14442), {}) };
    items[2] = closure_8(View, obj8);
    return closure_9(View, obj2);
  }
};
export const FamilyCenterActivityCardAccount = memoResult;
export { FamilyCenterActivityCardHeader };
export { FamilyCenterActivityCardAccountSelect };
