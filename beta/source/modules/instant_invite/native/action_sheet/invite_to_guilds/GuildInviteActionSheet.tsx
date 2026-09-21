// Module ID: 13426
// Function ID: 13427
// Name: GuildInviteActionSheet
// Dependencies: [32, 19, 17, 21, 4758, 580, 558, 568, 1119, 1181, 13427, 13428, 13424, 13429, 4754, 7224, 11405, 7396, 7297, 10057, 7397, 2]

// Module 13426 (GuildInviteActionSheet)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import native from "native" /* 1181 */;
import Text_Text from "Text/Text" /* 4754 */;
import SearchField from "SearchField" /* 7297 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7396 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7397 */;
import InstantInviteUtilsDefault from "InstantInviteUtils" /* 10057 */;
import _modDef13427 from "module_13427" /* 13427 */;
import _modDef13428 from "module_13428" /* 13428 */;
import GuildInviteRowDefault from "GuildInviteRow" /* 13429 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { content: { paddingHorizontal: nativeDefault.space.PX_16 }, searchbarWrapper: null, sectionTitle: null, emptyStateContainer: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.searchbarWrapper = { rowGap: 8, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj4 = { rowGap: 8, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.sectionTitle = { paddingBottom: 6, paddingTop: 24, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.emptyStateContainer = { margin: 24 };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
const ListEmptyComponent = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t["2bfiLk"]);
    const intl2 = tmp(1119).intl;
    const stringResult1 = intl2.string(tmp(1119).t.V6nAfF);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp5 = stringResult;
    tmp6 = stringResult1;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] !== tmp4.emptyStateContainer) {
    const obj2 = { containerStyle: tmp4.emptyStateContainer, title: tmp5, body: tmp6, darkSource: _modDef13427, lightSource: _modDef13428 };
    const tmp12 = timestampProducer(tmp(1181).ThemedEmptyState, obj2);
    cResult[2] = tmp4.emptyStateContainer;
    cResult[3] = tmp12;
    let tmp9 = tmp12;
  } else {
    tmp9 = cResult[3];
  }
  return tmp9;
}) : (() => {
  const obj = { containerStyle: closure_8().emptyStateContainer, title: null, body: null, darkSource: null, lightSource: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["2bfiLk"]);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t.V6nAfF);
  obj.darkSource = _modDef13427;
  obj.lightSource = _modDef13428;
  return timestampProducer(native.ThemedEmptyState, obj);
});
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((recipientId) => {
  const cResult = recipientId(568).c(21);
  recipientId = recipientId.recipientId;
  const source = recipientId.source;
  const tmp4 = closure_8();
  dependencyMap = tmp4;
  let obj = recipientId(568);
  let num = 2;
  const obj2 = recipientId(13424);
  [arr, arr2] = recipientId(13424).useServerInviteRows(recipientId, recipientId.query);
  if (cResult[0] === (0 === arr.length && 0 === arr2.length)) {
    if (cResult[1] === arr) {
      if (cResult[2] === arr2) {
        if (cResult[4] === recipientId) {
          if (cResult[5] === source) {
            let tmp10 = cResult[6];
          }
          if (cResult[7] !== tmp4) {
            class E {
              constructor(arg0) {
                tmp = null;
                if (recipientId.data.length > 0) {
                  tmp2 = jsx;
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  obj = { style: null, variant: "text-sm/semibold", color: "text-default", children: null };
                  tmp5 = closure_2;
                  obj.style = closure_2.sectionTitle;
                  obj.children = recipientId.title;
                  tmp = jsx(closure_0(closure_2[14]).Text, obj);
                }
                return tmp;
              }
            }
            class T {
              constructor(arg0) {
                ({ item, start, end } = recipientId);
                obj = { row: item, recipientId, source, start, end };
                return jsx(closure_1(closure_2[13]), obj);
              }
            }
            cResult[8] = E;
            const tmp11 = E;
          } else {
            class E {
              constructor(arg0) {
                tmp = null;
                if (recipientId.data.length > 0) {
                  tmp2 = jsx;
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  obj = { style: null, variant: "text-sm/semibold", color: "text-default", children: null };
                  tmp5 = closure_2;
                  obj.style = closure_2.sectionTitle;
                  obj.children = recipientId.title;
                  tmp = jsx(closure_0(closure_2[14]).Text, obj);
                }
                return tmp;
              }
            }
          }
          class T {
            constructor(arg0) {
              ({ item, start, end } = recipientId);
              obj = { row: item, recipientId, source, start, end };
              return jsx(closure_1(closure_2[13]), obj);
            }
          }
          if (0 !== arr.length) {
            class E {
              constructor(arg0) {
                tmp = null;
                if (recipientId.data.length > 0) {
                  tmp2 = jsx;
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  obj = { style: null, variant: "text-sm/semibold", color: "text-default", children: null };
                  tmp5 = closure_2;
                  obj.style = closure_2.sectionTitle;
                  obj.children = recipientId.title;
                  tmp = jsx(closure_0(closure_2[14]).Text, obj);
                }
                return tmp;
              }
            }
          }
          closure_4 = tmp13;
          if (0 === arr.length) {
            class E {
              constructor(arg0) {
                tmp = null;
                if (recipientId.data.length > 0) {
                  tmp2 = jsx;
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  obj = { style: null, variant: "text-sm/semibold", color: "text-default", children: null };
                  tmp5 = closure_2;
                  obj.style = closure_2.sectionTitle;
                  obj.children = recipientId.title;
                  tmp = jsx(closure_0(closure_2[14]).Text, obj);
                }
                return tmp;
              }
            }
          }
          const sum = source(7224)().insets.bottom + source(580).space.PX_16;
          if (cResult[9] === 0) {
            class E {
              constructor(arg0) {
                tmp = null;
                if (recipientId.data.length > 0) {
                  tmp2 = jsx;
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  obj = { style: null, variant: "text-sm/semibold", color: "text-default", children: null };
                  tmp5 = closure_2;
                  obj.style = closure_2.sectionTitle;
                  obj.children = recipientId.title;
                  tmp = jsx(closure_0(closure_2[14]).Text, obj);
                }
                return tmp;
              }
            }
            if (cResult[12] === tmp13) {
              class E {
                constructor(arg0) {
                  tmp = null;
                  if (recipientId.data.length > 0) {
                    tmp2 = jsx;
                    tmp3 = closure_0;
                    tmp4 = closure_2;
                    obj = { style: null, variant: "text-sm/semibold", color: "text-default", children: null };
                    tmp5 = closure_2;
                    obj.style = closure_2.sectionTitle;
                    obj.children = recipientId.title;
                    tmp = jsx(closure_0(closure_2[14]).Text, obj);
                  }
                  return tmp;
                }
              }
              class T {
                constructor(arg0) {
                  ({ item, start, end } = recipientId);
                  obj = { row: item, recipientId, source, start, end };
                  return jsx(closure_1(closure_2[13]), obj);
                }
              }
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                class A {
                  constructor(arg0) {
                    return recipientId.guild.id;
                  }
                }
                class T {
                  constructor(arg0) {
                    ({ item, start, end } = recipientId);
                    obj = { row: item, recipientId, source, start, end };
                    return jsx(closure_1(closure_2[13]), obj);
                  }
                }
                const tmp19 = A;
              } else {
                class A {
                  constructor(arg0) {
                    return recipientId.guild.id;
                  }
                }
              }
              if (cResult[16] === tmp10) {
                class A {
                  constructor(arg0) {
                    return recipientId.guild.id;
                  }
                }
              }
              const obj3 = { renderItem: tmp10, contentContainerStyle: tmp15, sections: tmp7, renderSectionHeader: tmp16, stickySectionHeadersEnabled: true, keyExtractor: tmp19, ListEmptyComponent };
              const tmp23 = closure_6(tmp(11405).UserProfileStackedActionSheetSectionList, obj3);
              cResult[16] = tmp10;
              cResult[17] = tmp7;
              cResult[18] = tmp15;
              cResult[19] = tmp16;
              cResult[20] = tmp23;
            }
            class T {
              constructor(arg0) {
                ({ item, start, end } = recipientId);
                obj = { row: item, recipientId, source, start, end };
                return jsx(closure_1(closure_2[13]), obj);
              }
            }
            cResult[12] = tmp13;
            cResult[13] = tmp11;
            cResult[14] = tmp17;
          }
          const obj4 = { paddingTop: 0, paddingBottom: sum };
          cResult[9] = 0;
          cResult[10] = sum;
          cResult[11] = obj4;
        }
        class T {
          constructor(arg0) {
            ({ item, start, end } = recipientId);
            obj = { row: item, recipientId, source, start, end };
            return jsx(closure_1(closure_2[13]), obj);
          }
        }
        cResult[4] = recipientId;
        cResult[5] = source;
        cResult[6] = T;
        tmp10 = T;
      }
    }
  }
  if (0 === arr.length && 0 === arr2.length) {
    class A {
      constructor(arg0) {
        return recipientId.guild.id;
      }
    }
  } else {
    class A {
      constructor(arg0) {
        return recipientId.guild.id;
      }
    }
    class T {
      constructor(arg0) {
        ({ item, start, end } = recipientId);
        obj = { row: item, recipientId, source, start, end };
        return jsx(closure_1(closure_2[13]), obj);
      }
    }
    tmp8[0] = tmp9(tmp(1119).t["u+Ithu"]);
    tmp8[1] = arr;
    const items = [tmp8, ];
    const obj5 = { title: null, data: null };
    const intl = tmp(1119).intl;
    obj5.title = intl.string(tmp(1119).t["c5T+X/"]);
    obj5.data = arr2;
    items[1] = obj5;
  }
  cResult[0] = 0 === arr.length && 0 === arr2.length;
  cResult[1] = arr;
  cResult[num] = arr2;
  num = 3;
  cResult[3] = items;
}) : ((recipientId) => {
  recipientId = recipientId.recipientId;
  const source = recipientId.source;
  _slicedToArray = undefined;
  dependencyMap = closure_8();
  let obj = recipientId(13424);
  [arr, arr2] = recipientId(13424).useServerInviteRows(recipientId, recipientId.query);
  if (0 === arr.length) {
    if (0 === arr2.length) {
      let items = [];
    }
    let tmp5 = 0 === arr.length;
    if (!tmp5) {
      tmp5 = 0 === arr2.length;
    }
    _slicedToArray = tmp5;
    const obj2 = {
      renderItem(arg0) {
          ({ item, start, end } = arg0);
          return timestampProducer(GuildInviteRowDefault, { row: item, recipientId, source, start, end });
        },
      contentContainerStyle: null,
      sections: null,
      renderSectionHeader: null,
      stickySectionHeadersEnabled: true,
      keyExtractor: null,
      ListEmptyComponent: null
    };
    let num = 0;
    if (tmp5) {
      num = 24;
    }
    const obj3 = { paddingTop: num, paddingBottom: source(7224)().insets.bottom + source(580).space.PX_16 };
    obj2.contentContainerStyle = obj3;
    obj2.sections = items;
    obj2.renderSectionHeader = function renderSectionHeader(section) {
      section = section.section;
      let tmp = null;
      if (!closure_3) {
        let tmp2 = null;
        if (section.data.length > 0) {
          const obj = { style: sectionTitle.sectionTitle, variant: "text-sm/semibold", color: "text-default", children: section.title };
          tmp2 = timestampProducer(Text_Text.Text, obj);
        }
        tmp = tmp2;
      }
      return tmp;
    };
    obj2.keyExtractor = function keyExtractor(guild) {
      return guild.guild.id;
    };
    obj2.ListEmptyComponent = ListEmptyComponent;
    return closure_6(tmp(11405).UserProfileStackedActionSheetSectionList, obj2);
  }
  const obj4 = { title: null, data: null };
  const intl = tmp(1119).intl;
  obj4.title = intl.string(recipientId(1119).t["u+Ithu"]);
  obj4.data = arr;
  items = [obj4, ];
  const obj5 = { title: null, data: null };
  const intl2 = tmp(1119).intl;
  obj5.title = intl2.string(recipientId(1119).t["c5T+X/"]);
  obj5.data = arr2;
  items[1] = obj5;
});
ReactCompilerGating = fn(558);
let obj5 = { paddingBottom: 6, paddingTop: 24, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(14);
  ({ recipientId, source } = arg0);
  const tmp4 = closure_8();
  [tmp6, require] = noop.useState("");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function h(arg0) {
      _require(arg0);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: null };
    const intl = tmp(1119).intl;
    obj2.title = intl.string(tmp(1119).t.HvoZQD);
    const tmp10 = timestampProducer(tmp(7396).BottomSheetTitleHeader, obj2);
    cResult[1] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { onChange: first, placeholder: null };
    const intl2 = tmp(1119).intl;
    obj3.placeholder = intl2.string(tmp(1119).t.uohsSv);
    const tmp13 = timestampProducer(tmp(7297).SearchField, obj3);
    cResult[2] = tmp13;
    let tmp11 = tmp13;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { variant: "text-xs/medium", color: "text-subtle", children: null };
    const intl3 = tmp(1119).intl;
    const obj5 = { xDays: InstantInviteUtilsDefault.INVITE_OPTIONS_7_DAYS.label };
    obj4.children = intl3.format(tmp(1119).t["4UyUHh"], obj5);
    const tmp17 = timestampProducer(tmp(4754).Text, obj4);
    cResult[3] = tmp17;
    let tmp14 = tmp17;
  } else {
    tmp14 = cResult[3];
  }
  if (cResult[4] !== tmp4.searchbarWrapper) {
    const obj6 = { style: tmp4.searchbarWrapper, children: null };
    const items = [tmp11, tmp14];
    obj6.children = items;
    const tmp21 = React5(View, obj6);
    cResult[4] = tmp4.searchbarWrapper;
    cResult[5] = tmp21;
    let tmp18 = tmp21;
  } else {
    tmp18 = cResult[5];
  }
  if (cResult[6] === tmp6) {
    if (cResult[7] === recipientId) {
      if (cResult[8] === source) {
        let tmp22 = cResult[9];
      }
      if (cResult[10] === tmp4.content) {
        if (cResult[11] === tmp18) {
          if (cResult[12] === tmp22) {
            let tmp24 = cResult[13];
          }
          return tmp24;
        }
      }
      const obj7 = { scrollable: true, startExpanded: true, header: tmp8, contentStyles: tmp4.content, children: null };
      const items1 = [tmp18, tmp22];
      obj7.children = items1;
      const tmp26 = React5(tmp(7397).BottomSheet, obj7);
      cResult[10] = tmp4.content;
      cResult[11] = tmp18;
      cResult[12] = tmp22;
      cResult[13] = tmp26;
      tmp24 = tmp26;
    }
  }
  const tmp23 = timestampProducer(closure_10, { query: tmp6, recipientId, source });
  cResult[6] = tmp6;
  cResult[7] = recipientId;
  cResult[8] = source;
  cResult[9] = tmp23;
  tmp22 = tmp23;
}) : ((arg0) => {
  ({ recipientId, source } = arg0);
  const tmp = closure_8();
  const tmp2 = _slicedToArray(noop.useState(""), 2);
  closure_0 = tmp2[1];
  const obj = { title: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.HvoZQD);
  const obj2 = { scrollable: true, startExpanded: true, header: timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, obj), contentStyles: tmp.content, children: null };
  const obj3 = { style: tmp.searchbarWrapper, children: null };
  const obj4 = {
    onChange(arg0) {
      closure_0(arg0);
    },
    placeholder: null
  };
  const intl2 = util.intl;
  obj4.placeholder = intl2.string(util.t.uohsSv);
  const items = [timestampProducer(SearchField.SearchField, obj4), ];
  const obj5 = { variant: "text-xs/medium", color: "text-subtle", children: null };
  const intl3 = util.intl;
  const tmp3 = timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, obj);
  obj5.children = intl3.format(util.t["4UyUHh"], { xDays: InstantInviteUtilsDefault.INVITE_OPTIONS_7_DAYS.label });
  items[1] = timestampProducer(Text_Text.Text, obj5);
  obj3.children = items;
  const items1 = [React5(View, obj3), timestampProducer(closure_10, { query: tmp2[0], recipientId, source })];
  obj2.children = items1;
  return React5(Sheet_BottomSheet.BottomSheet, obj2);
});
