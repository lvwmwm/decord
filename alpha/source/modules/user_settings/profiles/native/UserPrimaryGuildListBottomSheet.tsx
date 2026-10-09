// Module ID: 14823
// Function ID: 14824
// Name: UserPrimaryGuildListBottomSheet
// Dependencies: [19, 17, 7869, 21, 5091, 1382, 587, 558, 576, 8273, 4793, 5055, 1126, 6165, 8839, 6270, 6186, 12, 5087, 8563, 8608, 6836, 2]

// Module 14823 (UserPrimaryGuildListBottomSheet)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import GuildIconDefault from "GuildIcon" /* 6165 */;
import GuildTagConstants from "GuildTagConstants" /* 7869 */;
import Form from "Form" /* 8563 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, dependencyMap, hideActionSheetResult;

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
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function Item(arg0) {
  let accessibilityRole;
  let accessibilityState;
  let end;
  let item;
  let items;
  let onSelectGuild;
  let selected;
  let start;
  let tag;
  let tmp = item;
  let obj = item(576);
  const cResult = obj.c(34);
  ({ start, end, item } = arg0);
  ({ selected, onSelectGuild } = arg0);
  const tmp4 = closure_8();
  let profile;
  if (item != null) {
    profile = item.profile;
  }
  let badge;
  const first = cResult[0];
  if (profile != null) {
    badge = profile.badge;
  }
  if (first === badge) {
    let tmp8;
    let tmp14;
    if (cResult[1] === item) {
      tmp8 = cResult[2];
    }
    if (cResult[3] !== selected) {
      const obj2 = { selected };
      cResult[3] = selected;
      cResult[4] = obj2;
      tmp14 = obj2;
    } else {
      tmp14 = cResult[4];
    }
    const tmpResult = tmp(4793);
    const radioA11yNative = tmpResult.useRadioA11yNative(tmp14);
    ({ accessibilityRole, accessibilityState } = radioA11yNative);
    let id1;
    const tmp16 = cResult[5];
    if (item != null) {
      id1 = item.id;
    }
    if (tmp16 === id1) {
      let tmp18;
      let tmp20;
      if (cResult[6] === onSelectGuild) {
        tmp18 = cResult[7];
      }
      if (cResult[8] !== item) {
        let name;
        if (null != item) {
          name = item.name;
        } else {
          const intl = tmp(1126).intl;
          name = intl.string(tmp(1126).t.PoWNfe);
        }
        cResult[8] = item;
        cResult[9] = name;
        tmp20 = name;
      } else {
        tmp20 = cResult[9];
      }
      if (cResult[10] === item) {
        let tmp21;
        if (cResult[11] === tmp4.guildIcon) {
          tmp21 = cResult[12];
        }
        if (cResult[13] === tmp8) {
          if (cResult[14] === profile) {
            if (cResult[15] === item) {
              if (cResult[16] === tmp4.tag) {
                let tmp26;
                let tmp30;
                if (cResult[17] === tmp4.tagStyles) {
                  tmp26 = cResult[18];
                }
                if (cResult[19] !== selected) {
                  const obj3 = { selected };
                  const tmp32 = closure_6(tmp(6270).FormRadio, obj3);
                  cResult[19] = selected;
                  cResult[20] = tmp32;
                  tmp30 = tmp32;
                } else {
                  tmp30 = cResult[20];
                }
                if (cResult[21] === tmp4.itemTrailingStyle) {
                  if (cResult[22] === tmp26) {
                    let tmp33;
                    if (cResult[23] === tmp30) {
                      tmp33 = cResult[24];
                    }
                    if (cResult[25] === accessibilityRole) {
                      if (cResult[26] === accessibilityState) {
                        if (cResult[27] === end) {
                          if (cResult[28] === start) {
                            if (cResult[29] === tmp18) {
                              if (cResult[30] === tmp20) {
                                if (cResult[31] === tmp21) {
                                  let tmp37;
                                  if (cResult[32] === tmp33) {
                                    tmp37 = cResult[33];
                                  }
                                  return tmp37;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    class C {
                      constructor() {
                        id = undefined;
                        tmp = onSelectGuild;
                        if (item != null) {
                          id = item.id;
                        }
                        if (id == null) {
                          id = null;
                        }
                        tmpResult = tmp(id);
                        obj = closure_1(closure_2[11]);
                        hideActionSheetResult = obj.hideActionSheet();
                        return;
                      }
                    }
                    cResult[25] = accessibilityRole;
                    cResult[26] = accessibilityState;
                    cResult[27] = end;
                    cResult[28] = start;
                    cResult[29] = tmp18;
                    cResult[30] = tmp20;
                    cResult[31] = tmp21;
                    cResult[32] = tmp33;
                    cResult[33] = tmp39;
                    tmp37 = tmp39;
                  }
                }
                const obj6 = { style: tmp4.itemTrailingStyle, children: items };
                items = [tmp26, tmp30];
                const tmp36 = closure_7(View, obj6);
                class C {
                  constructor() {
                    id = undefined;
                    tmp = onSelectGuild;
                    if (item != null) {
                      id = item.id;
                    }
                    if (id == null) {
                      id = null;
                    }
                    tmpResult = tmp(id);
                    obj = closure_1(closure_2[11]);
                    hideActionSheetResult = obj.hideActionSheet();
                    return;
                  }
                }
                cResult[21] = tmp4.itemTrailingStyle;
                cResult[22] = tmp26;
                cResult[23] = tmp30;
                cResult[24] = tmp36;
                tmp33 = tmp36;
              }
            }
          }
        }
        let tmp28Result = null != item && null != profile;
        if (tmp28Result) {
          const obj7 = { containerStyles: null, textStyle: null, guildTag: tag, guildBadge: tmp8, badgeSize: GuildTagBadgeSize.SIZE_16, textVariant: "heading-md/semibold", textColor: "text-strong" };
          ({ tag: obj5.containerStyles, tagStyles: obj5.textStyle } = tmp4);
          tag = profile.tag;
          const BaseGuildTagChiplet = tmp(8839).BaseGuildTagChiplet;
          tmp28Result = closure_6(BaseGuildTagChiplet, obj7);
        }
        cResult[13] = tmp8;
        cResult[14] = profile;
        cResult[15] = item;
        cResult[16] = tmp4.tag;
        class C {
          constructor() {
            id = undefined;
            tmp = onSelectGuild;
            if (item != null) {
              id = item.id;
            }
            if (id == null) {
              id = null;
            }
            tmpResult = tmp(id);
            obj = closure_1(closure_2[11]);
            hideActionSheetResult = obj.hideActionSheet();
            return;
          }
        }
        cResult[17] = tmp4.tagStyles;
        cResult[18] = tmp28Result;
        tmp26 = tmp28Result;
      }
      let tmp22 = null;
      if (null != item) {
        const obj8 = { style: tmp4.guildIcon, guild: item, size: tmp(6165).GuildIconSizes.SMALL_32 };
        const tmp25 = onSelectGuild(6165);
        tmp22 = closure_6(tmp25, obj8);
      }
      cResult[10] = item;
      cResult[11] = tmp4.guildIcon;
      cResult[12] = tmp22;
      tmp21 = tmp22;
    }
    let id2;
    if (item != null) {
      id2 = item.id;
    }
    class C {
      constructor() {
        id = undefined;
        tmp = onSelectGuild;
        if (item != null) {
          id = item.id;
        }
        if (id == null) {
          id = null;
        }
        tmpResult = tmp(id);
        obj = closure_1(closure_2[11]);
        hideActionSheetResult = obj.hideActionSheet();
        return;
      }
    }
    cResult[5] = id2;
    cResult[6] = onSelectGuild;
    cResult[7] = C;
    tmp18 = C;
  }
  let guildTagBadgeUrl = null != item;
  if (guildTagBadgeUrl) {
    let badge1;
    const getGuildTagBadgeUrl = tmp(8273).getGuildTagBadgeUrl;
    let id = item.id;
    tmp(8273);
    if (profile != null) {
      badge1 = profile.badge;
    }
    guildTagBadgeUrl = getGuildTagBadgeUrl(id, badge1, GuildTagBadgeSize.SIZE_24);
  }
  let badge2;
  if (profile != null) {
    badge2 = profile.badge;
  }
  cResult[0] = badge2;
  cResult[1] = item;
  cResult[2] = guildTagBadgeUrl;
  tmp8 = guildTagBadgeUrl;
}) : (function Item(item) {
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
    const getGuildTagBadgeUrl = item(8273).getGuildTagBadgeUrl;
    let id = item.id;
    item(8273);
    if (profile != null) {
      badge = profile.badge;
    }
    guildTagBadgeUrl = getGuildTagBadgeUrl(id, badge, GuildTagBadgeSize.SIZE_24);
  }
  let obj = item(4793);
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
  const TableRow = item(6186).TableRow;
  if (null != item) {
    name = item.name;
  } else {
    const intl = tmp8(1126).intl;
    name = intl.string(tmp8(1126).t.PoWNfe);
  }
  tmp11Result = null;
  if (null != item) {
    const obj3 = { style: tmp.guildIcon, guild: item, size: item(6165).GuildIconSizes.SMALL_32 };
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
    const BaseGuildTagChiplet = tmp8(8839).BaseGuildTagChiplet;
    tmp11Result2 = tmp11(BaseGuildTagChiplet, obj9);
  }
  items = [tmp11Result2, closure_6(item(6270).FormRadio, { selected })];
  return closure_6(TableRow, obj2);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserPrimaryGuildListBottomSheet(onSelectGuild) {
  let arr;
  let availableGuilds;
  let divider;
  let intl;
  let selectedGuildId;
  let tmp11;
  let tmp2 = selectedGuildId;
  let tmp3 = dependencyMap;
  let obj = selectedGuildId(576);
  const cResult = obj.c(21);
  ({ availableGuilds, selectedGuildId } = onSelectGuild);
  onSelectGuild = onSelectGuild.onSelectGuild;
  const tmp5 = closure_8();
  dependencyMap = tmp5;
  if (cResult[0] !== availableGuilds) {
    let tmp7;
    const _Symbol = Symbol;
    let str = "react.memo_cache_sentinel";
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function o(name) {
        const str = name.name;
        return str.toLowerCase();
      };
      cResult[2] = fn;
      tmp7 = fn;
    } else {
      tmp7 = cResult[2];
    }
    const items = [null];
    const obj2 = onSelectGuild(12);
    HermesBuiltin.arraySpread(items, obj2.sortBy(availableGuilds, tmp7), 1);
    cResult[0] = availableGuilds;
    cResult[1] = items;
    arr = items;
  } else {
    arr = cResult[1];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: intl.string(tmp2(1126).t.Fo0g9x) };
    const Text = tmp2(5087).Text;
    intl = tmp2(1126).intl;
    const tmp13 = closure_6(Text, obj3);
    cResult[3] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] !== tmp5.titleContainer) {
    const obj4 = { style: tmp5.titleContainer, children: tmp11 };
    cResult[4] = tmp5.titleContainer;
    cResult[5] = closure_6(View, obj4);
    const tmp17 = closure_6(View, obj4);
  }
  if (cResult[6] !== tmp5.divider) {
    class I {
      constructor() {
        const obj = { iconPush: true, style: divider.divider };
        return metroRequire(Form.FormDivider, obj);
      }
    }
    cResult[6] = tmp5.divider;
    cResult[7] = I;
  } else {
    class I {
      constructor() {
        const obj = { iconPush: true, style: divider.divider };
        return metroRequire(Form.FormDivider, obj);
      }
    }
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        const obj = { iconPush: true, style: divider.divider };
        return metroRequire(Form.FormDivider, obj);
      }
    }
    class G {
      constructor(id) {
        let str = "none-guild-type";
        if (null != id) {
          str = id.id;
        }
        return str;
      }
    }
    cResult[8] = tmp21;
    cResult[9] = G;
  } else {
    class I {
      constructor() {
        const obj = { iconPush: true, style: divider.divider };
        return metroRequire(Form.FormDivider, obj);
      }
    }
    class G {
      constructor(id) {
        let str = "none-guild-type";
        if (null != id) {
          str = id.id;
        }
        return str;
      }
    }
  }
  if (cResult[10] === arr.length) {
    class I {
      constructor() {
        const obj = { iconPush: true, style: divider.divider };
        return metroRequire(Form.FormDivider, obj);
      }
    }
  }
  class C {
    constructor(arg0) {
      let id;
      let index;
      let item;
      let tmp3;
      ({ item, index } = arg0);
      const obj = { start: 0 === index, end: index === arr.length - 1, item, selected: tmp3 === id, onSelectGuild };
      tmp3 = selectedGuildId;
      const tmp = metroRequire;
      const tmp2 = closure_9;
      if (selectedGuildId == null) {
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
  }
  cResult[10] = arr.length;
  cResult[11] = onSelectGuild;
  cResult[12] = selectedGuildId;
  cResult[13] = C;
}) : (function UserPrimaryGuildListBottomSheet(availableGuilds) {
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
  let obj = { scrollable: true, startExpanded: true, header: closure_6(memo, obj2), children: closure_6(availableGuilds(8608).BottomSheetFlashList, obj4) };
  obj2 = { style: tmp.titleContainer, children: closure_6(Text, obj3) };
  BottomSheet = availableGuilds(6836).BottomSheet;
  obj3 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: intl.string(availableGuilds(1126).t.Fo0g9x) };
  Text = availableGuilds(5087).Text;
  intl = availableGuilds(1126).intl;
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
});
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/UserPrimaryGuildListBottomSheet.tsx");

export default tmp5;
