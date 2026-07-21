// Module ID: 13485
// Function ID: 102340
// Name: UserPrimaryGuildListBottomSheet
// Dependencies: []
// Exports: default

// Module 13485 (UserPrimaryGuildListBottomSheet)
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const GuildTagBadgeSize = arg1(dependencyMap[2]).GuildTagBadgeSize;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj1 = arg1(dependencyMap[4]);
let obj = { titleContainer: {}, guildIcon: { marginLeft: 4 }, tag: { padding: 2 } };
obj = {};
const tmp2 = arg1(dependencyMap[3]);
let num = 18;
if (obj5.isAndroid()) {
  num = 16;
}
obj.lineHeight = num;
obj.tagStyles = obj;
obj1 = { backgroundColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE };
obj.divider = obj1;
obj.itemTrailingStyle = { -1594137417: "0.18", 1365423714: "#FF78B7", 1851894937: "0.97", 358113363: "#F25AA8" };
let closure_8 = obj1.createStyles(obj);
let closure_9 = importAllResult.memo((item) => {
  let end;
  let start;
  item = item.item;
  const arg1 = item;
  const selected = item.selected;
  const importDefault = selected;
  const dependencyMap = item.onSelectGuild;
  ({ start, end } = item);
  const tmp = callback2();
  if (null != item) {
    const profile = item.profile;
  }
  let guildTagBadgeUrl = null != item;
  if (guildTagBadgeUrl) {
    let obj = arg1(dependencyMap[7]);
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
    const intl = arg1(dependencyMap[10]).intl;
    name = intl.string(arg1(dependencyMap[10]).t.PoWNfe);
  }
  obj.label = name;
  let tmp11 = null;
  if (null != item) {
    obj = { style: tmp.guildIcon, guild: item, size: arg1(dependencyMap[11]).GuildIconSizes.SMALL_32 };
    tmp11 = callback(importDefault(dependencyMap[11]), obj);
    const tmp15 = importDefault(dependencyMap[11]);
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
    tmp20Result = callback(arg1(dependencyMap[12]).BaseGuildTagChiplet, obj2);
    const tmp20 = callback;
  }
  const items = [tmp20Result, callback(arg1(dependencyMap[13]).FormRadio, { selected })];
  obj1.children = items;
  obj.trailing = closure_7(View, obj1);
  return callback(arg1(dependencyMap[8]).TableRow, obj);
});
const obj5 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/user_settings/profiles/native/UserPrimaryGuildListBottomSheet.tsx");

export default function UserPrimaryGuildListBottomSheet(availableGuilds) {
  availableGuilds = availableGuilds.availableGuilds;
  const arg1 = availableGuilds;
  ({ userPrimaryGuild: closure_1, onSelectGuild: closure_2 } = availableGuilds);
  const tmp = callback2();
  const items = [availableGuilds];
  const memo = tmp.useMemo(() => {
    const items = [true];
    HermesBuiltin.arraySpread(lib(closure_2[14]).sortBy(availableGuilds, (name) => name.name.toLowerCase()), 1);
    return items;
  }, items);
  const View = memo;
  let obj = { 1891290120: null, -475247768: null };
  obj = { style: tmp.titleContainer };
  obj = {};
  const intl = arg1(dependencyMap[10]).intl;
  obj.children = intl.string(arg1(dependencyMap[10]).t.Fo0g9x);
  obj.children = callback(arg1(dependencyMap[16]).Text, obj);
  obj.header = callback(View, obj);
  obj.children = callback(arg1(dependencyMap[17]).BottomSheetFlashList, {
    ItemSeparatorComponent() {
      return callback(availableGuilds(closure_2[18]).FormDivider, { iconPush: true, style: tmp.divider });
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
      if (null != lib) {
        id = lib.id;
      }
      let id1;
      if (null != item) {
        id1 = item.id;
      }
      obj.selected = id === id1;
      obj.onSelectGuild = closure_2;
      return closure_6(closure_9, obj);
    }
  });
  return callback(arg1(dependencyMap[15]).BottomSheet, obj);
};
