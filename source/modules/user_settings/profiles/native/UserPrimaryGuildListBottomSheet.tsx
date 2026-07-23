// Module ID: 13608
// Function ID: 104551
// Name: UserPrimaryGuildListBottomSheet
// Dependencies: [31, 27, 7632, 33, 4130, 477, 689, 7845, 5165, 4098, 1212, 5515, 8577, 7520, 22, 5187, 4126, 7879, 7495, 2]
// Exports: default

// Module 13608 (UserPrimaryGuildListBottomSheet)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { GuildTagBadgeSize } from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "items";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let obj = { titleContainer: { paddingHorizontal: 16, flexDirection: "row", alignItems: "center", justifyContent: "center" }, guildIcon: { marginLeft: 4 }, tag: { padding: 2 } };
obj = {};
let num = 18;
if (set.isAndroid()) {
  num = 16;
}
obj.lineHeight = num;
obj.tagStyles = obj;
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
obj.divider = _createForOfIteratorHelperLoose;
obj.itemTrailingStyle = { flexDirection: "row", alignItems: "center", gap: 8, height: 20 };
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_9 = importAllResult.memo((item) => {
  let end;
  let start;
  item = item.item;
  const selected = item.selected;
  const onSelectGuild = item.onSelectGuild;
  ({ start, end } = item);
  const tmp = callback2();
  if (null != item) {
    const profile = item.profile;
  }
  let guildTagBadgeUrl = null != item;
  if (guildTagBadgeUrl) {
    let obj = item(onSelectGuild[7]);
    let badge;
    if (null != profile) {
      badge = profile.badge;
    }
    let tmp6;
    if (null != badge) {
      tmp6 = badge;
    }
    guildTagBadgeUrl = obj.getGuildTagBadgeUrl(item.id, tmp6, GuildTagBadgeSize.SIZE_24);
  }
  obj = {
    start,
    end,
    onPress() {
      let tmp2 = null;
      if (!selected) {
        let id;
        if (null != item) {
          id = item.id;
        }
        let tmp6 = null;
        if (null != id) {
          tmp6 = id;
        }
        tmp2 = tmp6;
      }
      onSelectGuild(tmp2);
      selected(onSelectGuild[9]).hideActionSheet();
    }
  };
  if (null != item) {
    let name = item.name;
  } else {
    const intl = item(onSelectGuild[10]).intl;
    name = intl.string(item(onSelectGuild[10]).t.PoWNfe);
  }
  obj.label = name;
  let tmp11 = null;
  if (null != item) {
    obj = { style: tmp.guildIcon, guild: item, size: item(onSelectGuild[11]).GuildIconSizes.SMALL_32 };
    tmp11 = callback(selected(onSelectGuild[11]), obj);
    const tmp15 = selected(onSelectGuild[11]);
  }
  obj.icon = tmp11;
  const obj1 = { style: tmp.itemTrailingStyle };
  let tmp20Result = null != item;
  if (tmp20Result) {
    tmp20Result = null != profile;
  }
  if (tmp20Result) {
    const obj2 = {};
    ({ tag: obj5.containerStyles, tagStyles: obj5.textStyle } = tmp);
    const tag = profile.tag;
    let tmp23;
    if (null != tag) {
      tmp23 = tag;
    }
    obj2.guildTag = tmp23;
    obj2.guildBadge = guildTagBadgeUrl;
    obj2.badgeSize = GuildTagBadgeSize.SIZE_16;
    obj2.textVariant = "heading-md/semibold";
    obj2.textColor = "text-strong";
    tmp20Result = callback(item(onSelectGuild[12]).BaseGuildTagChiplet, obj2);
    const tmp20 = callback;
  }
  const items = [tmp20Result, callback(item(onSelectGuild[13]).FormRadio, { selected })];
  obj1.children = items;
  obj.trailing = closure_7(View, obj1);
  return callback(item(onSelectGuild[8]).TableRow, obj);
});
const result = set.fileFinishedImporting("modules/user_settings/profiles/native/UserPrimaryGuildListBottomSheet.tsx");

export default function UserPrimaryGuildListBottomSheet(availableGuilds) {
  let dependencyMap;
  let importDefault;
  availableGuilds = availableGuilds.availableGuilds;
  ({ userPrimaryGuild: importDefault, onSelectGuild: dependencyMap } = availableGuilds);
  const tmp = callback2();
  let items = [availableGuilds];
  const memo = tmp.useMemo(() => {
    const items = [null];
    HermesBuiltin.arraySpread(outer1_1(outer1_2[14]).sortBy(availableGuilds, (name) => name.name.toLowerCase()), 1);
    return items;
  }, items);
  let obj = { scrollable: true, startExpanded: true };
  obj = { style: tmp.titleContainer };
  obj = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", accessibilityRole: "header" };
  const intl = availableGuilds(1212).intl;
  obj.children = intl.string(availableGuilds(1212).t.Fo0g9x);
  obj.children = callback(availableGuilds(4126).Text, obj);
  obj.header = callback(memo, obj);
  obj.children = callback(availableGuilds(7879).BottomSheetFlashList, {
    ItemSeparatorComponent() {
      return outer1_6(availableGuilds(outer1_2[18]).FormDivider, { iconPush: true, style: tmp.divider });
    },
    data: memo,
    contentContainerStyle: { padding: 16 },
    keyExtractor(id) {
      let str = "none-guild-type";
      if (null != id) {
        str = id.id;
      }
      return str;
    },
    renderItem(arg0) {
      let index;
      let item;
      ({ item, index } = arg0);
      const obj = { start: 0 === index, end: index === memo.length - 1, item };
      let id;
      if (null != id) {
        id = id.id;
      }
      let id1;
      if (null != item) {
        id1 = item.id;
      }
      obj.selected = id === id1;
      obj.onSelectGuild = closure_2;
      return outer1_6(outer1_9, obj);
    }
  });
  return callback(availableGuilds(5187).BottomSheet, obj);
};
