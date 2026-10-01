// Module ID: 12547
// Function ID: 12548
// Name: GuildInviteActionSheet
// Dependencies: [32, 19, 17, 21, 4836, 576, 1177, 1115, 12548, 12549, 12545, 4832, 6402, 10613, 12550, 6570, 6571, 6471, 9277, 2]
// Exports: default

// Module 12547 (GuildInviteActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import SearchField2 from "SearchField" /* 6471 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6570 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6571 */;
import InstantInviteUtilsDefault from "InstantInviteUtils" /* 9277 */;
import AssetRegistryDefault from "AssetRegistry" /* 12548 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 12549 */;
import GuildInviteRowDefault from "GuildInviteRow" /* 12550 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet, dependencyMap;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
function EmptyGuildList() {
  let intl;
  let intl2;
  const obj = { containerStyle: closure_8().emptyStateContainer, title: intl.string(intl4.t["2bfiLk"]), body: intl2.string(intl4.t.V6nAfF), darkSource: AssetRegistryDefault, lightSource: AssetRegistryDefault2 };
  const ThemedEmptyState = native.ThemedEmptyState;
  intl = intl4.intl;
  intl2 = intl4.intl;
  return metroRequire(ThemedEmptyState, obj);
}
function GuildList(recipientId) {
  let arr;
  let arr2;
  let closure_3;
  let intl;
  let intl2;
  let items;
  let obj3;
  let sectionTitle;
  recipientId = recipientId.recipientId;
  const source = recipientId.source;
  _slicedToArray = undefined;
  const query = recipientId.query;
  dependencyMap = closure_8();
  let tmp = recipientId;
  let tmp2 = dependencyMap;
  let obj = recipientId(12545);
  [arr, arr2] = _slicedToArray(obj.useServerInviteRows(recipientId, query), 2);
  const tmp3 = _slicedToArray(obj.useServerInviteRows(recipientId, query), 2);
  if (0 === arr.length) {
    if (0 === arr2.length) {
      items = [];
    }
    let tmp5 = 0 === arr.length;
    const insets = source(6402)().insets;
    const tmp4 = source;
    if (!tmp5) {
      tmp5 = 0 === arr2.length;
    }
    _slicedToArray = tmp5;
    let num = 0;
    const obj2 = {
      renderItem(arg0) {
          let end;
          let item;
          let start;
          ({ item, start, end } = arg0);
          const obj = { row: item, recipientId, source, start, end };
          return metroRequire(GuildInviteRowDefault, obj);
        },
      contentContainerStyle: obj3,
      sections: items,
      renderSectionHeader(section) {
          section = section.section;
          let tmp = null;
          if (!closure_3) {
            let tmp2 = null;
            if (section.data.length > 0) {
              const obj = { style: sectionTitle.sectionTitle, variant: "text-sm/semibold", color: "text-default", children: section.title };
              tmp2 = metroRequire(Text_Text.Text, obj);
            }
            tmp = tmp2;
          }
          return tmp;
        },
      stickySectionHeadersEnabled: true,
      keyExtractor(guild) {
          return guild.guild.id;
        },
      ListEmptyComponent: EmptyGuildList
    };
    const UserProfileStackedActionSheetSectionList = tmp(10613).UserProfileStackedActionSheetSectionList;
    const tmp6 = closure_6;
    if (tmp5) {
      num = 24;
    }
    obj3 = { paddingTop: num, paddingBottom: insets.bottom + tmp4(576).space.PX_16 };
    return tmp6(UserProfileStackedActionSheetSectionList, obj2);
  }
  const obj4 = { title: intl.string(tmp(1115).t["u+Ithu"]), data: arr };
  intl = tmp(1115).intl;
  items = [obj4, ];
  const obj5 = { title: intl2.string(tmp(1115).t["c5T+X/"]), data: arr2 };
  intl2 = tmp(1115).intl;
  items[1] = obj5;
}
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, searchbarWrapper: obj3, sectionTitle: obj4, emptyStateContainer: { margin: 24 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { rowGap: 8, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj4 = { paddingBottom: 6, paddingTop: 24, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteActionSheet.tsx");

export default function GuildInviteActionSheet(arg0) {
  let closure_0;
  let first;
  let format;
  let intl;
  let intl2;
  let items;
  let items1;
  let obj6;
  let recipientId;
  let source;
  let v4UyUHh;
  closure_0 = undefined;
  ({ recipientId, source } = arg0);
  const tmp = closure_8();
  [first, closure_0] = react.useState("");
  const obj = { title: intl.string(intl4.t.HvoZQD) };
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl4.intl;
  const obj2 = { scrollable: true, startExpanded: true, header: metroRequire(BottomSheetTitleHeader, obj), contentStyles: tmp.content, children: items1 };
  const obj3 = { style: tmp.searchbarWrapper, children: items };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const obj4 = {
    onChange(arg0) {
      closure_0(arg0);
    },
    placeholder: intl2.string(intl4.t.uohsSv)
  };
  const SearchField = SearchField2.SearchField;
  intl2 = intl4.intl;
  items = [metroRequire(SearchField, obj4), ];
  const obj5 = { variant: "text-xs/medium", color: "text-subtle", children: format(v4UyUHh, obj6) };
  const Text = Text_Text.Text;
  const intl3 = intl4.intl;
  format = intl3.format;
  obj6 = { xDays: InstantInviteUtilsDefault.INVITE_OPTIONS_7_DAYS.label };
  v4UyUHh = intl4.t["4UyUHh"];
  items[1] = metroRequire(Text, obj5);
  items1 = [metroImportDefault(View, obj3), metroRequire(GuildList, { query: first, recipientId, source })];
  return metroImportDefault(BottomSheet, obj2);
};
