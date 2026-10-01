// Module ID: 14199
// Function ID: 14200
// Name: UserPrimaryGuildListBottomSheet
// Dependencies: [19, 17, 7386, 21, 4836, 1364, 576, 7610, 4548, 5917, 4800, 1115, 5896, 9205, 6001, 12, 6571, 4832, 8179, 8053, 2]
// Exports: default

// Module 14199 (UserPrimaryGuildListBottomSheet)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import GuildIconDefault from "GuildIcon" /* 5896 */;
import GuildTagConstants from "GuildTagConstants" /* 7386 */;
import Form from "Form" /* 8053 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let metroImportDefault;
let metroRequire;
let num;
let obj2;
let react = react_mod;
const View = react_native.View;
const GuildTagBadgeSize = GuildTagConstants.GuildTagBadgeSize;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { titleContainer: { paddingHorizontal: 16, flexDirection: "row", alignItems: "center", justifyContent: "center" }, guildIcon: { marginLeft: 4 }, tag: { padding: 2 }, tagStyles: { lineHeight: num }, divider: obj2, itemTrailingStyle: { flexDirection: "row", alignItems: "center", gap: 8, height: 20 } };
createStyles = createStyles.createStyles;
num = 18;
if (PlatformUtils.isAndroid()) {
  num = 16;
}
obj2 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_8 = createStyles(obj);
let closure_9 = react.memo((item) => {
  let accessibilityRole;
  let accessibilityState;
  let end;
  let items;
  let name;
  let obj4;
  let profile;
  let selected;
  let start;
  let tag;
  let tmp11Result;
  let tmp15;
  let tmp16;
  item = item.item;
  ({ selected, onSelectGuild: importDefault } = item);
  ({ start, end } = item);
  let tmp = closure_8();
  if (item != null) {
    profile = item.profile;
  }
  let guildTagBadgeUrl = null != item;
  if (guildTagBadgeUrl) {
    let badge;
    const getGuildTagBadgeUrl = item(7610).getGuildTagBadgeUrl;
    let id = item.id;
    item(7610);
    if (profile != null) {
      badge = profile.badge;
    }
    guildTagBadgeUrl = getGuildTagBadgeUrl(id, badge, GuildTagBadgeSize.SIZE_24);
  }
  let obj = item(4548);
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj2 = {
    start,
    end,
    onPress() {
      let id;
      const tmp = importDefault;
      if (item != null) {
        id = item.id;
      }
      if (id == null) {
        id = null;
      }
      tmp(id);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    },
    label: name,
    icon: tmp11Result,
    accessibilityRole,
    accessibilityState,
    trailing: tmp15(tmp16, obj4)
  };
  const TableRow = item(5917).TableRow;
  if (null != item) {
    name = item.name;
  } else {
    const intl = tmp8(1115).intl;
    name = intl.string(tmp8(1115).t.PoWNfe);
  }
  tmp11Result = null;
  if (null != item) {
    const obj3 = { style: tmp.guildIcon, guild: item, size: item(5896).GuildIconSizes.SMALL_32 };
    const tmp14 = GuildIconDefault;
    tmp11Result = tmp11(tmp14, obj3);
  }
  let tmp11Result2 = null != item;
  obj4 = { style: tmp.itemTrailingStyle, children: items };
  tmp15 = closure_7;
  tmp16 = View;
  if (tmp11Result2) {
    tmp11Result2 = null != profile;
  }
  if (tmp11Result2) {
    const obj9 = { containerStyles: null, textStyle: null, guildTag: tag, guildBadge: guildTagBadgeUrl, badgeSize: GuildTagBadgeSize.SIZE_16, textVariant: "heading-md/semibold", textColor: "text-strong" };
    ({ tag: obj5.containerStyles, tagStyles: obj5.textStyle } = tmp);
    tag = profile.tag;
    const BaseGuildTagChiplet = tmp8(9205).BaseGuildTagChiplet;
    tmp11Result2 = tmp11(BaseGuildTagChiplet, obj9);
  }
  items = [tmp11Result2, closure_6(item(6001).FormRadio, { selected })];
  return closure_6(TableRow, obj2);
});
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/UserPrimaryGuildListBottomSheet.tsx");

export default function UserPrimaryGuildListBottomSheet(availableGuilds) {
  let Text;
  let divider;
  let intl;
  let obj2;
  let obj3;
  let obj4;
  let onSelectGuild;
  availableGuilds = availableGuilds.availableGuilds;
  ({ selectedGuildId: importDefault, onSelectGuild: dependencyMap } = availableGuilds);
  let tmp = closure_8();
  react = tmp;
  let items = [availableGuilds];
  const memo = react.useMemo(() => {
    const items = [
      null,
      ..._modDef12.sortBy(availableGuilds, (name) => {
        const str = name.name;
        return str.toLowerCase();
      })
    ];
    _modDef12;
    return items;
  }, items);
  let obj = { scrollable: true, startExpanded: true, header: closure_6(memo, obj2), children: closure_6(availableGuilds(8179).BottomSheetFlashList, obj4) };
  obj2 = { style: tmp.titleContainer, children: closure_6(Text, obj3) };
  BottomSheet = availableGuilds(6571).BottomSheet;
  obj3 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: intl.string(availableGuilds(1115).t.Fo0g9x) };
  Text = availableGuilds(4832).Text;
  intl = availableGuilds(1115).intl;
  obj4 = {
    ItemSeparatorComponent() {
      const obj = { iconPush: true, style: divider.divider };
      return metroRequire(Form.FormDivider, obj);
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
      let id;
      let index;
      let item;
      let tmp3;
      ({ item, index } = arg0);
      const obj = { start: 0 === index, end: index === memo.length - 1, item, selected: tmp3 === id, onSelectGuild: dependencyMap };
      tmp3 = importDefault;
      const tmp = metroRequire;
      const tmp2 = closure_9;
      if (importDefault == null) {
        tmp3 = null;
      }
      id = undefined;
      if (item != null) {
        id = item.id;
      }
      if (id == null) {
        id = null;
      }
      return tmp(tmp2, obj);
    }
  };
  return closure_6(BottomSheet, obj);
};
