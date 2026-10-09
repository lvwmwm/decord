// Module ID: 13038
// Function ID: 13039
// Name: GuildInviteActionSheet
// Dependencies: [32, 19, 17, 21, 5091, 587, 558, 576, 1126, 1200, 13039, 13040, 13036, 13041, 5087, 6663, 10495, 6835, 6737, 8669, 6836, 2]

// Module 13038 (GuildInviteActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5087 */;
import SearchField2 from "SearchField" /* 6737 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6835 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6836 */;
import InstantInviteUtilsDefault from "InstantInviteUtils" /* 8669 */;
import AssetRegistryDefault from "AssetRegistry" /* 13039 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13040 */;
import GuildInviteRowDefault from "GuildInviteRow" /* 13041 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, dependencyMap;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
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
let ReactCompilerGating = ReactCompilerGating_mod;
const ListEmptyComponent = ReactCompilerGating.isReactCompilerEnabled() ? (function EmptyGuildList() {
  let tmp5;
  let tmp6;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(4);
  const tmp4 = closure_8();
  const emptyStateContainer = tmp4.emptyStateContainer;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl4.t["2bfiLk"]);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(intl4.t.V6nAfF);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp5 = stringResult;
    tmp6 = stringResult1;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] !== tmp4.emptyStateContainer) {
    const obj2 = { containerStyle: emptyStateContainer, title: tmp5, body: tmp6, darkSource: AssetRegistryDefault, lightSource: AssetRegistryDefault2 };
    const ThemedEmptyState = tmp(1200).ThemedEmptyState;
    const tmp12 = metroRequire(ThemedEmptyState, obj2);
    cResult[2] = tmp4.emptyStateContainer;
    cResult[3] = tmp12;
    tmp9 = tmp12;
  } else {
    tmp9 = cResult[3];
  }
  return tmp9;
}) : (function EmptyGuildList() {
  let intl;
  let intl2;
  const obj = { containerStyle: closure_8().emptyStateContainer, title: intl.string(intl4.t["2bfiLk"]), body: intl2.string(intl4.t.V6nAfF), darkSource: AssetRegistryDefault, lightSource: AssetRegistryDefault2 };
  const ThemedEmptyState = native.ThemedEmptyState;
  intl = intl4.intl;
  intl2 = intl4.intl;
  return metroRequire(ThemedEmptyState, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildList(recipientId) {
  let arr;
  let arr2;
  let closure_3;
  let intl2;
  let items;
  let sectionTitle;
  let tmp = recipientId;
  let tmp2 = dependencyMap;
  let obj = recipientId(576);
  const cResult = obj.c(21);
  recipientId = recipientId.recipientId;
  const source = recipientId.source;
  const query = recipientId.query;
  const tmp4 = closure_8();
  dependencyMap = tmp4;
  const obj2 = recipientId(13036);
  [arr, arr2] = _slicedToArray(obj2.useServerInviteRows(recipientId, query), 2);
  const tmp5 = _slicedToArray(obj2.useServerInviteRows(recipientId, query), 2);
  if (cResult[0] === (0 === arr.length && 0 === arr2.length)) {
    if (cResult[1] === arr) {
      let tmp7;
      if (cResult[2] === arr2) {
        tmp7 = cResult[3];
      }
      if (cResult[4] === recipientId) {
        let tmp9;
        let tmp11;
        if (cResult[5] === source) {
          tmp9 = cResult[6];
        }
        if (cResult[7] !== tmp4) {
          function renderSectionHeader(data) {
            let tmp = null;
            if (data.data.length > 0) {
              const obj = { style: sectionTitle.sectionTitle, variant: "text-sm/semibold", color: "text-default", children: data.title };
              tmp = metroRequire(Text_Text.Text, obj);
            }
            return tmp;
          }
          cResult[7] = tmp4;
          cResult[8] = renderSectionHeader;
          tmp11 = renderSectionHeader;
        } else {
          tmp11 = cResult[8];
        }
        _slicedToArray = tmp11;
        let tmp13 = 0 === arr.length;
        const insets = source(6663)().insets;
        const tmp12 = source;
        if (!tmp13) {
          tmp13 = 0 === arr2.length;
        }
        let closure_4 = tmp13;
        let num6 = 0;
        if (tmp13) {
          num6 = 24;
        }
        const sum = insets.bottom + tmp12(587).space.PX_16;
        if (cResult[9] === num6) {
          let tmp15;
          if (cResult[10] === sum) {
            tmp15 = cResult[11];
          }
          if (cResult[12] === tmp13) {
            let tmp16;
            let tmp18;
            if (cResult[13] === tmp11) {
              tmp16 = cResult[14];
            }
            class A {
              constructor(arg0) {
                let tmp2 = null;
                if (!closure_4) {
                  tmp2 = closure_3(tmp);
                }
                return tmp2;
              }
            }
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              const fn = function k(guild) {
                return guild.guild.id;
              };
              class A {
                constructor(arg0) {
                  let tmp2 = null;
                  if (!closure_4) {
                    tmp2 = closure_3(tmp);
                  }
                  return tmp2;
                }
              }
              tmp18 = fn;
            } else {
              tmp18 = cResult[15];
            }
            if (cResult[16] === tmp9) {
              if (cResult[17] === tmp7) {
                if (cResult[18] === tmp15) {
                  let tmp19;
                  if (cResult[19] === tmp16) {
                    tmp19 = cResult[20];
                  }
                  return tmp19;
                }
              }
            }
            const obj3 = { renderItem: tmp9, contentContainerStyle: tmp15, sections: tmp7, renderSectionHeader: tmp16, stickySectionHeadersEnabled: true, keyExtractor: tmp18, ListEmptyComponent };
            const tmp22 = closure_6(tmp(10495).UserProfileStackedActionSheetSectionList, obj3);
            cResult[16] = tmp9;
            cResult[17] = tmp7;
            cResult[18] = tmp15;
            cResult[19] = tmp16;
            cResult[20] = tmp22;
            tmp19 = tmp22;
          }
          class A {
            constructor(arg0) {
              let tmp2 = null;
              if (!closure_4) {
                tmp2 = closure_3(tmp);
              }
              return tmp2;
            }
          }
          cResult[12] = tmp13;
          cResult[13] = tmp11;
          cResult[14] = A;
          tmp16 = A;
        }
        const obj4 = { paddingTop: num6, paddingBottom: sum };
        cResult[9] = num6;
        cResult[10] = sum;
        cResult[11] = obj4;
        tmp15 = obj4;
      }
      cResult[4] = recipientId;
      cResult[5] = source;
      cResult[6] = tmp10;
      tmp9 = tmp10;
    }
  }
  if (0 === arr.length && 0 === arr2.length) {
    items = [];
  } else {
    const obj5 = { title: tmp8(tmp(1126).t["u+Ithu"]), data: arr };
    const intl = tmp(1126).intl;
    class A {
      constructor(arg0) {
        let tmp2 = null;
        if (!closure_4) {
          tmp2 = closure_3(tmp);
        }
        return tmp2;
      }
    }
    items = [obj5, ];
    const obj6 = { title: intl2.string(tmp(1126).t["c5T+X/"]), data: arr2 };
    intl2 = tmp(1126).intl;
    items[1] = obj6;
  }
  cResult[0] = 0 === arr.length && 0 === arr2.length;
  cResult[1] = arr;
  cResult[2] = arr2;
  cResult[3] = items;
  tmp7 = items;
}) : (function GuildList(recipientId) {
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
  let obj = recipientId(13036);
  [arr, arr2] = _slicedToArray(obj.useServerInviteRows(recipientId, query), 2);
  const tmp3 = _slicedToArray(obj.useServerInviteRows(recipientId, query), 2);
  if (0 === arr.length) {
    if (0 === arr2.length) {
      items = [];
    }
    let tmp5 = 0 === arr.length;
    const insets = source(6663)().insets;
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
      ListEmptyComponent
    };
    const UserProfileStackedActionSheetSectionList = tmp(10495).UserProfileStackedActionSheetSectionList;
    const tmp6 = closure_6;
    if (tmp5) {
      num = 24;
    }
    obj3 = { paddingTop: num, paddingBottom: insets.bottom + tmp4(587).space.PX_16 };
    return tmp6(UserProfileStackedActionSheetSectionList, obj2);
  }
  const obj4 = { title: intl.string(tmp(1126).t["u+Ithu"]), data: arr };
  intl = tmp(1126).intl;
  items = [obj4, ];
  const obj5 = { title: intl2.string(tmp(1126).t["c5T+X/"]), data: arr2 };
  intl2 = tmp(1126).intl;
  items[1] = obj5;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildInviteActionSheet(arg0) {
  let closure_129_0;
  let first;
  let format;
  let intl;
  let intl2;
  let items;
  let items1;
  let obj5;
  let recipientId;
  let source;
  let tmp11;
  let tmp14;
  let tmp19;
  let tmp6;
  let tmp8;
  let v4UyUHh;
  const obj = react2;
  const cResult = obj.c(14);
  ({ recipientId, source } = arg0);
  const tmp4 = closure_8();
  [tmp6, closure_129_0] = react.useState("");
  _slicedToArray(react.useState(""), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function handleQueryChange(arg0) {
      closure_1_0(arg0);
    }
    cResult[0] = handleQueryChange;
    first = handleQueryChange;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: intl.string(intl4.t.HvoZQD) };
    const BottomSheetTitleHeader = tmp(6835).BottomSheetTitleHeader;
    intl = tmp(1126).intl;
    const tmp10 = metroRequire(BottomSheetTitleHeader, obj2);
    cResult[1] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { onChange: first, placeholder: intl2.string(intl4.t.uohsSv) };
    const SearchField = tmp(6737).SearchField;
    intl2 = tmp(1126).intl;
    const tmp13 = metroRequire(SearchField, obj3);
    cResult[2] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { variant: "text-xs/medium", color: "text-subtle", children: format(v4UyUHh, obj5) };
    const Text = tmp(5087).Text;
    const intl3 = tmp(1126).intl;
    format = intl3.format;
    obj5 = { xDays: InstantInviteUtilsDefault.INVITE_OPTIONS_7_DAYS.label };
    v4UyUHh = tmp(1126).t["4UyUHh"];
    const tmp18 = metroRequire(Text, obj4);
    cResult[3] = tmp18;
    tmp14 = tmp18;
  } else {
    tmp14 = cResult[3];
  }
  if (cResult[4] !== tmp4.searchbarWrapper) {
    const obj6 = { style: tmp4.searchbarWrapper, children: items };
    items = [tmp11, tmp14];
    const tmp22 = metroImportDefault(View, obj6);
    cResult[4] = tmp4.searchbarWrapper;
    cResult[5] = tmp22;
    tmp19 = tmp22;
  } else {
    tmp19 = cResult[5];
  }
  if (cResult[6] === tmp6) {
    if (cResult[7] === recipientId) {
      let tmp23;
      if (cResult[8] === source) {
        tmp23 = cResult[9];
      }
      if (cResult[10] === tmp4.content) {
        if (cResult[11] === tmp19) {
          let tmp25;
          if (cResult[12] === tmp23) {
            tmp25 = cResult[13];
          }
          return tmp25;
        }
      }
      const obj7 = { scrollable: true, startExpanded: true, header: tmp8, contentStyles: tmp4.content, children: items1 };
      items1 = [tmp19, tmp23];
      const tmp27 = metroImportDefault(Sheet_BottomSheet.BottomSheet, obj7);
      cResult[10] = tmp4.content;
      cResult[11] = tmp19;
      cResult[12] = tmp23;
      cResult[13] = tmp27;
      tmp25 = tmp27;
    }
  }
  const tmp24 = metroRequire(closure_10, { query: tmp6, recipientId, source });
  cResult[6] = tmp6;
  cResult[7] = recipientId;
  cResult[8] = source;
  cResult[9] = tmp24;
  tmp23 = tmp24;
}) : (function GuildInviteActionSheet(arg0) {
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
    onChange: function handleQueryChange(arg0) {
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
  items1 = [metroImportDefault(View, obj3), metroRequire(closure_10, { query: first, recipientId, source })];
  return metroImportDefault(BottomSheet, obj2);
});
const result = size.fileFinishedImporting("modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteActionSheet.tsx");

export default tmp4;
