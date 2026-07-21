// Module ID: 13671
// Function ID: 103504
// Name: FamilyCenterActivityCardPrefaceText
// Dependencies: []
// Exports: default

// Module 13671 (FamilyCenterActivityCardPrefaceText)
function FamilyCenterActivityCardPrefaceText() {
  const tmp = callback3();
  const tmp2 = importDefault(dependencyMap[7])();
  let obj = arg1(dependencyMap[8]);
  const activeLinkUserIds = obj.useActiveLinkUserIds();
  let obj1 = arg1(dependencyMap[9]);
  const activityWindowTimestampFormatter = obj1.getActivityWindowTimestampFormatter(tmp2);
  let obj2 = arg1(dependencyMap[8]);
  const activityWindowTimeStamp = obj2.useActivityWindowTimeStamp(activityWindowTimestampFormatter);
  let obj3 = arg1(dependencyMap[10]);
  const intl = arg1(dependencyMap[11]).intl;
  obj = { activeLinks: activeLinkUserIds.length };
  const intl2 = arg1(dependencyMap[11]).intl;
  const ageSpecificText = obj3.useAgeSpecificText(intl.formatToPlainString(importDefault(dependencyMap[12]).tazvHQ, obj), intl2.string(importDefault(dependencyMap[12]).KrLnkE));
  obj = { style: tmp.container };
  let tmp9 = null;
  if (!tmp2) {
    obj1 = { color: tmp.icon.color, source: importDefault(dependencyMap[14]), style: tmp.icon };
    tmp9 = callback(arg1(dependencyMap[13]).Icon, obj1);
  }
  const items = [tmp9, , ];
  obj2 = { delete: "<string:1864193>", dispatch: "<string:2621440>", raw: "<string:1359020032>", style: tmp.text };
  let tmp15 = ageSpecificText;
  if (activeLinkUserIds.length > 1) {
    tmp15 = ageSpecificText;
    if (tmp2) {
      tmp15 = activityWindowTimeStamp;
    }
  }
  obj2.children = tmp15;
  items[1] = callback(arg1(dependencyMap[15]).Text, obj2);
  obj3 = {
    onPress() {
      callback2(paths[17]).pushLazy(callback(paths[19])(paths[18], paths.paths));
    }
  };
  const formatToPlainStringResult = intl.formatToPlainString(importDefault(dependencyMap[12]).tazvHQ, obj);
  const tmp14 = callback;
  const tmp7 = closure_9;
  const tmp8 = View;
  const obj4 = { color: tmp.icon.color, source: importDefault(dependencyMap[20]), size: arg1(dependencyMap[13]).Icon.Sizes.EXTRA_SMALL, style: tmp.icon };
  obj3.children = callback(arg1(dependencyMap[13]).Icon, obj4);
  items[2] = callback(importDefault(dependencyMap[16]), obj3);
  obj.children = items;
  return tmp7(tmp8, obj);
}
function FamilyCenterHeaderSubText() {
  const tmp = importDefault(dependencyMap[7])();
  let obj = arg1(dependencyMap[8]);
  const activeLinkUserIds = obj.useActiveLinkUserIds();
  const activityWindowTimestampFormatter = arg1(dependencyMap[9]).getActivityWindowTimestampFormatter(tmp);
  arg1(dependencyMap[8]);
  if (!tmp) {
    obj = { hasMaxConnections: "<string:3086024708>", isBoostOnlySubscription: "<string:625475588>", children: tmp4 };
    let tmp5 = callback(arg1(dependencyMap[15]).Text, obj);
  } else {
    tmp5 = null;
  }
  return tmp5;
}
class FamilyCenterActivityCardHeader {
  constructor() {
    obj = arg1(dependencyMap[8]);
    activeLinkUserIds = obj.useActiveLinkUserIds();
    tmp = importDefault(dependencyMap[7])();
    obj2 = arg1(dependencyMap[22]);
    selectedTeenUser = obj2.useSelectedTeenUser();
    if (undefined === selectedTeenUser) {
      return null;
    } else {
      if (!tmp) {
        tmp3 = jsx;
        tmp4 = View;
        obj = {};
        tmp5 = f103517;
        obj1 = {};
        obj1.user = selectedTeenUser;
        obj.children = jsx(f103517, obj1);
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
    tmp = closure_14();
    obj = arg1(dependencyMap[8]);
    activeLinkUsers = obj.useActiveLinkUsers();
    arg1 = activeLinkUsers;
    obj2 = arg1(dependencyMap[22]);
    selectedTeenUser = obj2.useSelectedTeenUser();
    importDefault = selectedTeenUser;
    obj3 = arg1(dependencyMap[23]);
    obj = {
      onSuccess() {
            return selectedTeenUser(selectTeenUser[24]).hideActionSheet(closure_10);
          },
      onError() {
            const intl = activeLinkUsers(selectTeenUser[11]).intl;
            return activeLinkUsers(selectTeenUser[25]).presentFailedToast(intl.string(selectedTeenUser(selectTeenUser[12]).Wu8BK2));
          }
    };
    dependencyMap = obj3.useFamilyCenterActions(obj).selectTeenUser;
    items = [];
    items[0] = activeLinkUsers;
    f103512 = f103512.useMemo(() => activeLinkUsers.map((id) => {
      const obj = {};
      const name = callback(closure_2[26]).getName(id);
      const obj2 = callback(closure_2[26]);
      obj.label = "" + name + " (" + callback(closure_2[26]).getUserTag(id) + ")";
      obj.value = id.id;
      return obj;
    }), items);
    tmp4 = null;
    if (undefined !== selectedTeenUser) {
      tmp5 = jsx;
      tmp6 = View;
      obj1 = {};
      tmp7 = jsxs;
      tmp8 = importDefault;
      tmp9 = dependencyMap;
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
              tmp = arg0 !== lib.id;
            }
            if (tmp) {
              callback(arg0);
              let obj = lib(callback[28]);
              obj = { action: SelectTeen.SelectTeen };
              obj.track(constants.FAMILY_CENTER_ACTION, obj);
            }
            setImmediate(() => {
              callback(closure_2[24]).hideActionSheet(closure_10);
            });
          };
          obj.selectedItem = selectedTeenUser.id;
          obj.hasIcons = false;
          obj.openLazy(activeLinkUsers(selectTeenUser[19])(selectTeenUser[27], selectTeenUser.paths), closure_10, obj);
          const tmp4 = activeLinkUsers(selectTeenUser[19])(selectTeenUser[27], selectTeenUser.paths);
        }
      };
      tmp11 = jsx;
      tmp12 = f103517;
      obj3 = {};
      obj3.user = selectedTeenUser;
      flag = true;
      obj3.inSelector = true;
      tmp10 = importDefault(dependencyMap[16]);
      items1 = [, ];
      items1[0] = jsx(f103517, obj3);
      tmp13 = jsx;
      tmp14 = arg1;
      num2 = 13;
      obj4 = {};
      obj4.style = tmp.icon;
      obj4.size = arg1(dependencyMap[13]).Icon.Sizes.MEDIUM;
      num3 = 29;
      obj4.source = importDefault(dependencyMap[29]);
      items1[1] = jsx(arg1(dependencyMap[13]).Icon, obj4);
      obj2.children = items1;
      obj1.children = jsxs(tmp10, obj2);
      tmp4 = jsx(View, obj1);
    }
    return tmp4;
  }
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ FamilyCenterAction: closure_5, TeenActionDisplayType: closure_6 } = arg1(dependencyMap[2]));
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
let closure_10 = "FamilyCenterTeenAccountSelect";
let obj1 = arg1(dependencyMap[5]);
let obj = { container: { ty: 8, c: null, o: "\u270A\u{1F3FF}" } };
obj = { color: importDefault(dependencyMap[6]).colors.ICON_SUBTLE, width: importDefault(dependencyMap[6]).space.PX_16, height: importDefault(dependencyMap[6]).space.PX_16 };
obj.icon = obj;
obj1 = { marginHorizontal: importDefault(dependencyMap[6]).space.PX_4 };
obj.text = obj1;
let closure_11 = obj1.createStyles(obj);
let obj5 = arg1(dependencyMap[5]);
const obj2 = {};
const obj3 = { GameIconImageSize: "M", stageInfo: "hasConfetti", alignSelf: "Float64Array", useIOSCompletionStates: "ME", BADGE_TEXT_DEFAULT: "getApplicationState", padding: importDefault(dependencyMap[6]).space.PX_12, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGHEST, borderTopLeftRadius: importDefault(dependencyMap[6]).radii.md, borderTopRightRadius: importDefault(dependencyMap[6]).radii.md };
obj2.header = obj3;
const obj4 = { borderRadius: arg1(dependencyMap[13]).AVATAR_SIZE_MAP[arg1(undefined, dependencyMap[13]).AvatarSizes.NORMAL] / 2, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH };
obj2.avatar = obj4;
obj5 = { marginRight: importDefault(dependencyMap[6]).space.PX_12, alignItems: "flex-start" };
obj2.avatarContainer = obj5;
const tmp3 = arg1(dependencyMap[4]);
obj2.userHeader = { paddingRight: importDefault(dependencyMap[6]).space.PX_16 };
const obj6 = { paddingRight: importDefault(dependencyMap[6]).space.PX_16 };
obj2.nonSelectorHeader = { flex: 1, paddingRight: importDefault(dependencyMap[6]).space.PX_16 };
let closure_12 = obj5.createStyles(obj2);
const memoResult = importAllResult.memo((arg0) => {
  let inSelector;
  let user;
  ({ user, inSelector } = arg0);
  const tmp = callback4();
  const AvatarSizes = arg1(dependencyMap[13]).AvatarSizes;
  let obj = { style: tmp.header };
  obj = { style: tmp.avatarContainer, children: callback(arg1(dependencyMap[13]).Avatar, obj) };
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
  const items2 = [callback(importDefault(dependencyMap[21]), { user }), callback(FamilyCenterHeaderSubText, {})];
  obj1.children = items2;
  items[1] = closure_9(View, obj1);
  obj.children = items;
  return closure_9(View, obj);
});
memoResult.displayName = "FamilyCenterActivityCardAccount";
let obj12 = arg1(dependencyMap[5]);
const obj8 = {};
const obj9 = { d: "toString", useMemo: "isArray", keys: "toString", hasDiversityParent: "isArray", backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGHEST };
const merged = Object.assign(importDefault(dependencyMap[6]).shadows.SHADOW_LOW);
obj8.touch = obj9;
const obj7 = { flex: 1, paddingRight: importDefault(dependencyMap[6]).space.PX_16 };
const items = [{ rotate: "90deg" }];
obj8.icon = { color: importDefault(dependencyMap[6]).colors.INTERACTIVE_TEXT_DEFAULT, width: importDefault(dependencyMap[6]).space.PX_24, height: importDefault(dependencyMap[6]).space.PX_24, transform: items, marginHorizontal: importDefault(dependencyMap[6]).space.PX_8 };
let closure_14 = obj12.createStyles(obj8);
let obj16 = arg1(dependencyMap[5]);
const obj11 = {};
obj12 = { marginTop: importDefault(dependencyMap[6]).space.PX_16 };
obj11.card = obj12;
const obj10 = { color: importDefault(dependencyMap[6]).colors.INTERACTIVE_TEXT_DEFAULT, width: importDefault(dependencyMap[6]).space.PX_24, height: importDefault(dependencyMap[6]).space.PX_24, transform: items, marginHorizontal: importDefault(dependencyMap[6]).space.PX_8 };
obj11.preface = { display: "flex", marginBottom: importDefault(dependencyMap[6]).space.PX_12 };
const obj13 = { display: "flex", marginBottom: importDefault(dependencyMap[6]).space.PX_12 };
obj11.container = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[6]).radii.md };
const obj15 = { <string:2337341444>: "<string:3157541376>", <string:2971099654>: "<string:2774663169>", <string:1097896017>: "<string:1749155842>", padding: importDefault(dependencyMap[6]).space.PX_16, gap: importDefault(dependencyMap[6]).space.PX_32 };
obj11.content = obj15;
obj16 = { 1549967418: "isArray", 1380856145: "construct", 496989610: "Map", 75490881: "isArray", gap: importDefault(dependencyMap[6]).space.PX_8 };
obj11.totals = obj16;
obj11.first = { width: "100%" };
obj11.other = { width: "48.5%" };
const obj17 = { 979464370: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001863282064227495, 1637975633: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007062002001945, gap: importDefault(dependencyMap[6]).space.PX_32 };
obj11.activities = obj17;
const obj14 = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[6]).radii.md };
obj11.settingsControls = { marginTop: importDefault(dependencyMap[6]).space.PX_24 };
let closure_15 = obj16.createStyles(obj11);
const obj18 = { marginTop: importDefault(dependencyMap[6]).space.PX_24 };
const result = arg1(dependencyMap[35]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityCard.tsx");

export default function FamilyCenterActivityCard() {
  const tmp = callback6();
  const arg1 = tmp;
  let obj = arg1(dependencyMap[22]);
  const selectedTeenUser = obj.useSelectedTeenUser();
  arg1(dependencyMap[30]);
  if (undefined === selectedTeenUser) {
    return null;
  } else {
    let obj3 = arg1(dependencyMap[9]);
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
      return tmp !== constants.GIFTS;
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
      obj.children = callback2(callback(closure_2[31]), { displayType: tmp });
      return callback2(closure_4, obj, "total-" + tmp);
    });
    const items2 = [callback(View, obj3), callback(importDefault(dependencyMap[32]), {}), ];
    let tmp7 = null;
    if (tmp4) {
      const obj4 = {
        style: tmp.activities,
        children: sortedActivityTypeConfigs.map((arg0) => {
              let tmp;
              [tmp, ] = arg0;
              return callback2(callback(closure_2[33]), { displayType }, "section-" + displayType);
            })
      };
      tmp7 = callback(View, obj4);
    }
    items2[2] = tmp7;
    obj2.children = items2;
    items1[1] = closure_9(View, obj2);
    obj1.children = items1;
    items[1] = closure_9(View, obj1);
    const obj5 = { style: tmp.settingsControls, children: callback(importDefault(dependencyMap[34]), {}) };
    items[2] = callback(View, obj5);
    obj.children = items;
    return closure_9(View, obj);
  }
};
export const FamilyCenterActivityCardAccount = memoResult;
export { FamilyCenterActivityCardHeader };
export { FamilyCenterActivityCardAccountSelect };
