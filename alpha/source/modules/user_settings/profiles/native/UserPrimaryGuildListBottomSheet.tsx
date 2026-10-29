// Module ID: 16409
// Function ID: 16410
// Name: UserPrimaryGuildListBottomSheet
// Dependencies: [32, 19, 17, 8328, 21, 5005, 1381, 587, 558, 576, 8694, 5073, 5247, 1125, 6943, 9262, 7048, 6963, 14655, 12, 5014, 14658, 7338, 7308, 5281, 7358, 7205, 5271, 8988, 7280, 5302, 2]

// Module 16409 (UserPrimaryGuildListBottomSheet)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl11 from "intl" /* 1125 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5014 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import GuildIconDefault from "GuildIcon" /* 6943 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7338 */;
import GuildTagConstants from "GuildTagConstants" /* 8328 */;
import Form from "Form" /* 8988 */;
import openGuildTagCreateFlowDefault from "openGuildTagCreateFlow" /* 14658 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, dependencyMap;

let c9;
let metroImportAll;
let metroImportDefault;
let num;
let obj2;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const GuildTagBadgeSize = GuildTagConstants.GuildTagBadgeSize;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { titleContainer: { paddingHorizontal: 16, flexDirection: "row", alignItems: "center", justifyContent: "center" }, guildIcon: { marginLeft: 4 }, tag: { padding: 2 }, tagStyles: { lineHeight: num }, divider: obj2, itemTrailingStyle: { flexDirection: "row", alignItems: "center", gap: 8, height: 20 }, searchContainer: { paddingHorizontal: 16, paddingTop: 16 }, searchRow: { flexDirection: "row", alignItems: "center", gap: 8 }, searchField: { flex: 1 }, emptyState: { alignItems: "center" }, noResults: { padding: 16, textAlign: "center" } };
createStyles = createStyles.createStyles;
num = 18;
if (PlatformUtils.isAndroid()) {
  num = 16;
}
obj2 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_10 = createStyles(obj);
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function Item(arg0) {
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
  const tmp4 = closure_10();
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
    const tmpResult = tmp(5073);
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
          const intl = tmp(1125).intl;
          name = intl.string(tmp(1125).t.PoWNfe);
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
                  const tmp32 = closure_7(tmp(7048).FormRadio, obj3);
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
                    const obj4 = { start, end, onPress: tmp18, label: tmp20, icon: tmp21, accessibilityRole, accessibilityState, trailing: tmp33 };
                    const tmp39 = closure_7(tmp(6963).TableRow, obj4);
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
                const tmp36 = closure_8(View, obj6);
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
          const BaseGuildTagChiplet = tmp(9262).BaseGuildTagChiplet;
          tmp28Result = closure_7(BaseGuildTagChiplet, obj7);
        }
        cResult[13] = tmp8;
        cResult[14] = profile;
        cResult[15] = item;
        cResult[16] = tmp4.tag;
        cResult[17] = tmp4.tagStyles;
        cResult[18] = tmp28Result;
        tmp26 = tmp28Result;
      }
      let tmp22 = null;
      if (null != item) {
        const obj8 = { style: tmp4.guildIcon, guild: item, size: tmp(6943).GuildIconSizes.SMALL_32 };
        const tmp25 = onSelectGuild(6943);
        tmp22 = closure_7(tmp25, obj8);
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
    const fn = function _() {
      let id;
      const tmp = onSelectGuild;
      if (item != null) {
        id = item.id;
      }
      if (id == null) {
        id = null;
      }
      tmp(id);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    };
    cResult[5] = id2;
    cResult[6] = onSelectGuild;
    cResult[7] = fn;
    tmp18 = fn;
  }
  let guildTagBadgeUrl = null != item;
  if (guildTagBadgeUrl) {
    let badge1;
    const getGuildTagBadgeUrl = tmp(8694).getGuildTagBadgeUrl;
    let id = item.id;
    tmp(8694);
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
  let tmp = closure_10();
  if (item != null) {
    profile = item.profile;
  }
  let guildTagBadgeUrl = null != item;
  if (guildTagBadgeUrl) {
    let badge;
    const getGuildTagBadgeUrl = item(8694).getGuildTagBadgeUrl;
    let id = item.id;
    item(8694);
    if (profile != null) {
      badge = profile.badge;
    }
    guildTagBadgeUrl = getGuildTagBadgeUrl(id, badge, GuildTagBadgeSize.SIZE_24);
  }
  let obj = item(5073);
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
  const TableRow = item(6963).TableRow;
  if (null != item) {
    name = item.name;
  } else {
    const intl = tmp8(1125).intl;
    name = intl.string(tmp8(1125).t.PoWNfe);
  }
  tmp11Result = null;
  if (null != item) {
    const obj3 = { style: tmp.guildIcon, guild: item, size: item(6943).GuildIconSizes.SMALL_32 };
    const tmp14 = GuildIconDefault;
    tmp11Result = tmp11(tmp14, obj3);
  }
  let tmp11Result2 = null != item;
  obj4 = { style: tmp.itemTrailingStyle, children: items };
  tmp15 = closure_8;
  tmp16 = View;
  if (tmp11Result2) {
    tmp11Result2 = null != profile;
  }
  if (tmp11Result2) {
    const obj9 = { containerStyles: null, textStyle: null, guildTag: tag, guildBadge: guildTagBadgeUrl, badgeSize: GuildTagBadgeSize.SIZE_16, textVariant: "heading-md/semibold", textColor: "text-strong" };
    ({ tag: obj5.containerStyles, tagStyles: obj5.textStyle } = tmp);
    tag = profile.tag;
    const BaseGuildTagChiplet = tmp8(9262).BaseGuildTagChiplet;
    tmp11Result2 = tmp11(BaseGuildTagChiplet, obj9);
  }
  items = [tmp11Result2, closure_7(item(7048).FormRadio, { selected })];
  return closure_7(TableRow, obj2);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserPrimaryGuildListBottomSheet(onSelectGuild) {
  let availableGuilds;
  let divider;
  let intl;
  let intl2;
  let items;
  let ref;
  let selectedGuildId;
  let str;
  let tmp22;
  let tmp23;
  let tmp9;
  let tmp = selectedGuildId;
  let tmp2 = dependencyMap;
  let obj = selectedGuildId(576);
  const cResult = obj.c(61);
  ({ availableGuilds, selectedGuildId } = onSelectGuild);
  onSelectGuild = onSelectGuild.onSelectGuild;
  const tmp4 = closure_10();
  dependencyMap = tmp4;
  const tmp5 = str(ref.useState(""), 2);
  str = tmp5[0];
  const tmp6 = tmp5[1];
  ref = ref.useRef(null);
  const obj3 = selectedGuildId(14655);
  const guildTagCreationUpsell = obj3.useGuildTagCreationUpsell("UserPrimaryGuildListBottomSheet");
  const creatableGuilds = guildTagCreationUpsell.creatableGuilds;
  const isUpsellVisible = guildTagCreationUpsell.isUpsellVisible;
  if (cResult[0] !== availableGuilds) {
    let tmp11;
    const _Symbol = Symbol;
    const str2 = "react.memo_cache_sentinel";
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function b(name) {
        str = name.name;
        return str.toLowerCase();
      };
      cResult[2] = fn;
      tmp11 = fn;
    } else {
      tmp11 = cResult[2];
    }
    const obj4 = onSelectGuild(12);
    const sortByResult = obj4.sortBy(availableGuilds, tmp11);
    cResult[0] = availableGuilds;
    cResult[1] = sortByResult;
    tmp9 = sortByResult;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[3] === str) {
    let tmp14;
    let tmp18;
    let tmp19;
    if (cResult[4] === tmp9) {
      tmp14 = cResult[5];
    }
    const length = tmp14;
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class U {
        constructor() {
          const current = ref.current;
          if (current != null) {
            current.scrollToOffset({ offset: 0, animated: false });
          }
        }
      }
      cResult[8] = U;
      tmp18 = U;
    } else {
      class U {
        constructor() {
          const current = ref.current;
          if (current != null) {
            current.scrollToOffset({ offset: 0, animated: false });
          }
        }
      }
    }
    if (cResult[9] !== str) {
      class U {
        constructor() {
          const current = ref.current;
          if (current != null) {
            current.scrollToOffset({ offset: 0, animated: false });
          }
        }
      }
      tmp20[0] = str;
      cResult[9] = str;
      cResult[10] = tmp20;
      tmp19 = tmp20;
    } else {
      class U {
        constructor() {
          const current = ref.current;
          if (current != null) {
            current.scrollToOffset({ offset: 0, animated: false });
          }
        }
      }
    }
    const effect = obj2.useEffect(tmp18, tmp19);
    if (cResult[11] === tmp14) {
      class U {
        constructor() {
          const current = ref.current;
          if (current != null) {
            current.scrollToOffset({ offset: 0, animated: false });
          }
        }
      }
      const effect1 = obj2.useEffect(tmp22, tmp23);
      if (cResult[15] !== creatableGuilds) {
        class U {
          constructor() {
            const current = ref.current;
            if (current != null) {
              current.scrollToOffset({ offset: 0, animated: false });
            }
          }
        }
        cResult[15] = creatableGuilds;
        cResult[16] = tmp26;
      } else {
        class U {
          constructor() {
            const current = ref.current;
            if (current != null) {
              current.scrollToOffset({ offset: 0, animated: false });
            }
          }
        }
      }
      if (0 === availableGuilds.length) {
        class U {
          constructor() {
            const current = ref.current;
            if (current != null) {
              current.scrollToOffset({ offset: 0, animated: false });
            }
          }
        }
      }
      const _Symbol3 = Symbol;
      if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            const current = ref.current;
            if (current != null) {
              current.scrollToOffset({ offset: 0, animated: false });
            }
          }
        }
        ({ placeholder: intl.string(tmp(1125).t.uohsSv), accessibilityLabel: intl2.string(tmp(1125).t.uohsSv), onChange: tmp6 });
        const SearchBar = tmp(7205).SearchBar;
        intl = tmp(1125).intl;
        intl2 = tmp(1125).intl;
        class V {
          constructor() {
            if ("" !== str.trim()) {
              const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
              const announce = AccessibilityAnnouncer.announce;
              const intl = intl11.intl;
              const obj = { count: length.length };
              announce(intl.formatToPlainString(intl11.t.ZGVL3g, obj), "polite");
            }
          }
        }
        cResult[24] = tmp28;
      } else {
        class U {
          constructor() {
            const current = ref.current;
            if (current != null) {
              current.scrollToOffset({ offset: 0, animated: false });
            }
          }
        }
      }
      const _Symbol4 = Symbol;
      class V {
        constructor() {
          if ("" !== str.trim()) {
            const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
            const announce = AccessibilityAnnouncer.announce;
            const intl = intl11.intl;
            const obj = { count: length.length };
            announce(intl.formatToPlainString(intl11.t.ZGVL3g, obj), "polite");
          }
        }
      }
      if (cResult[26] !== tmp4.titleContainer) {
        class U {
          constructor() {
            const current = ref.current;
            if (current != null) {
              current.scrollToOffset({ offset: 0, animated: false });
            }
          }
        }
        const obj6 = { style: tmp4.titleContainer, children: tmp30 };
        cResult[26] = tmp4.titleContainer;
        cResult[27] = length(creatableGuilds, obj6);
        length(creatableGuilds, obj6);
        class V {
          constructor() {
            if ("" !== str.trim()) {
              const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
              const announce = AccessibilityAnnouncer.announce;
              const intl = intl11.intl;
              const obj = { count: length.length };
              announce(intl.formatToPlainString(intl11.t.ZGVL3g, obj), "polite");
            }
          }
        }
      } else {
        class U {
          constructor() {
            const current = ref.current;
            if (current != null) {
              current.scrollToOffset({ offset: 0, animated: false });
            }
          }
        }
      }
      if (cResult[28] === tmp25) {
        class U {
          constructor() {
            const current = ref.current;
            if (current != null) {
              current.scrollToOffset({ offset: 0, animated: false });
            }
          }
        }
      }
      let tmp34 = tmp27;
      if (isUpsellVisible) {
        class U {
          constructor() {
            const current = ref.current;
            if (current != null) {
              current.scrollToOffset({ offset: 0, animated: false });
            }
          }
        }
        const obj7 = { style: tmp4.searchRow, children: items };
        const obj8 = { style: tmp4.searchField, children: tmp27 };
        items = [length(creatableGuilds, obj8), ];
        class V {
          constructor() {
            if ("" !== str.trim()) {
              const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
              const announce = AccessibilityAnnouncer.announce;
              const intl = intl11.intl;
              const obj = { count: length.length };
              announce(intl.formatToPlainString(intl11.t.ZGVL3g, obj), "polite");
            }
          }
        }
        const Button = tmp(5281).Button;
        const intl3 = tmp(1125).intl;
        tmp37[0] = intl3.string(tmp(1125).t.CumH4u);
        const intl4 = tmp(1125).intl;
        tmp37[1] = intl4.string(tmp(1125).t.xO5QzM);
        tmp37[4] = tmp25;
        items[1] = length(Button, tmp37);
        tmp34 = closure_8(creatableGuilds, obj7);
      }
      cResult[28] = tmp25;
      cResult[29] = isUpsellVisible;
      cResult[30] = tmp4.searchField;
      cResult[31] = tmp4.searchRow;
      cResult[32] = tmp34;
    }
    class V {
      constructor() {
        if ("" !== str.trim()) {
          const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
          const announce = AccessibilityAnnouncer.announce;
          const intl = intl11.intl;
          const obj = { count: length.length };
          announce(intl.formatToPlainString(intl11.t.ZGVL3g, obj), "polite");
        }
      }
    }
    const items1 = [tmp14, str];
    cResult[11] = tmp14;
    cResult[12] = str;
    cResult[13] = V;
    cResult[14] = items1;
    tmp22 = V;
    tmp23 = items1;
  }
  const str3 = str.trim();
  let formatted = str3.toLowerCase();
  if ("" !== formatted) {
    class U {
      constructor() {
        const current = ref.current;
        if (current != null) {
          current.scrollToOffset({ offset: 0, animated: false });
        }
      }
    }
  } else {
    class U {
      constructor() {
        const current = ref.current;
        if (current != null) {
          current.scrollToOffset({ offset: 0, animated: false });
        }
      }
    }
  }
  cResult[3] = str;
  cResult[4] = tmp9;
  cResult[5] = tmp16;
  tmp14 = tmp16;
}) : (function UserPrimaryGuildListBottomSheet(availableGuilds) {
  let BottomSheetFlashList;
  let Button2;
  let Text;
  let Text2;
  let c6;
  let divider;
  let first;
  let intl;
  let intl10;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let isUpsellVisible;
  let items4;
  let items6;
  let obj14;
  let obj15;
  let obj16;
  let obj5;
  let obj8;
  let tmp15Result;
  let tmp4;
  availableGuilds = availableGuilds.availableGuilds;
  const selectedGuildId = availableGuilds.selectedGuildId;
  const onSelectGuild = availableGuilds.onSelectGuild;
  first = undefined;
  c6 = undefined;
  function handleCreateGuildTag() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const tmp2 = openGuildTagCreateFlowDefault;
    tmp2(c6, AnalyticsLocationDefault.USER_SETTINGS_USER_PROFILE);
  }
  let tmp = closure_10();
  _slicedToArray = tmp;
  [first, tmp4] = first.useState("");
  const ref = first.useRef(null);
  let obj = availableGuilds(onSelectGuild[18]);
  const guildTagCreationUpsell = obj.useGuildTagCreationUpsell("UserPrimaryGuildListBottomSheet");
  ({ creatableGuilds: c6, isUpsellVisible } = guildTagCreationUpsell);
  let items = [availableGuilds];
  const memo = first.useMemo(() => {
    const obj = _modDef12;
    return obj.sortBy(availableGuilds, (name) => {
      const str = name.name;
      return str.toLowerCase();
    });
  }, items);
  const items1 = [memo, first];
  const memo1 = first.useMemo(() => {
    let found;
    let str = first.trim();
    let formatted = str.toLowerCase();
    if ("" === formatted) {
      const items = [null];
      HermesBuiltin.arraySpread(items, memo, 1);
      found = items;
    } else {
      found = memo.filter((name) => {
        const str = name.name;
        formatted = str.toLowerCase();
        let hasItem = formatted.includes(formatted);
        const tmp = formatted;
        if (!hasItem) {
          const profile = name.profile;
          let flag;
          if (profile != null) {
            if (profile.tag != null) {
              const formatted1 = str2.toLowerCase();
              flag = formatted1.includes(tmp);
            }
          }
          if (flag == null) {
            flag = false;
          }
          hasItem = flag;
        }
        return hasItem;
      });
    }
    return found;
  }, items1);
  const items2 = [first];
  const effect = first.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  }, items2);
  const items3 = [memo1, first];
  const effect1 = first.useEffect(() => {
    if ("" !== first.trim()) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl11.intl;
      const obj = { count: memo1.length };
      announce(intl.formatToPlainString(intl11.t.ZGVL3g, obj), "polite");
    }
  }, items3);
  if (0 === availableGuilds.length) {
    if (null == selectedGuildId) {
      if (isUpsellVisible) {
        const obj2 = { children: items4 };
        const ActionSheet = tmp6(tmp7[25]).ActionSheet;
        const obj3 = { title: intl8.string(availableGuilds(onSelectGuild[13]).t.Fo0g9x), subtitle: intl9.string(availableGuilds(onSelectGuild[13]).t["NV+MBV"]) };
        const BottomSheetTitleHeader = tmp6(tmp7[23]).BottomSheetTitleHeader;
        intl8 = tmp6(tmp7[13]).intl;
        intl9 = tmp6(tmp7[13]).intl;
        items4 = [memo(BottomSheetTitleHeader, obj3), ];
        const obj4 = { style: tmp.emptyState, children: memo(Button2, obj5) };
        obj5 = { text: intl10.string(availableGuilds(onSelectGuild[13]).t["65zBhE"]), onPress: handleCreateGuildTag };
        Button2 = tmp6(tmp7[24]).Button;
        intl10 = tmp6(tmp7[13]).intl;
        items4[1] = memo(ref, obj4);
        return memo1(ActionSheet, obj2);
      }
    }
  }
  const obj6 = { placeholder: intl.string(availableGuilds(onSelectGuild[13]).t.uohsSv), accessibilityLabel: intl2.string(availableGuilds(onSelectGuild[13]).t.uohsSv), onChange: tmp4 };
  const SearchBar = tmp6(tmp7[26]).SearchBar;
  intl = tmp6(tmp7[13]).intl;
  intl2 = tmp6(tmp7[13]).intl;
  const tmp14 = memo(SearchBar, obj6);
  const obj7 = { style: tmp.titleContainer, children: memo(Text, obj8) };
  BottomSheet = tmp6(tmp7[30]).BottomSheet;
  obj8 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: intl3.string(availableGuilds(onSelectGuild[13]).t.Fo0g9x) };
  Text = tmp6(tmp7[27]).Text;
  intl3 = tmp6(tmp7[13]).intl;
  const items5 = [memo(ref, obj7), ];
  const obj9 = { style: tmp.searchContainer, children: tmp15Result };
  tmp15Result = tmp14;
  const tmp16 = closure_9;
  if (isUpsellVisible) {
    const obj10 = { style: tmp.searchRow, children: items6 };
    const obj11 = { style: tmp.searchField, children: tmp14 };
    items6 = [memo(ref, obj11), ];
    const obj12 = { text: intl4.string(availableGuilds(onSelectGuild[13]).t.CumH4u), accessibilityLabel: intl5.string(availableGuilds(onSelectGuild[13]).t.xO5QzM), variant: "secondary", size: "lg", onPress: handleCreateGuildTag };
    const Button = tmp6(tmp7[24]).Button;
    intl4 = tmp6(tmp7[13]).intl;
    intl5 = tmp6(tmp7[13]).intl;
    items6[1] = memo(Button, obj12);
    tmp15Result = tmp15(tmp17, obj10);
  }
  const obj13 = { scrollable: true, startExpanded: true, header: memo1(tmp16, obj14), children: memo(BottomSheetFlashList, obj15) };
  obj14 = { children: items5 };
  items5[1] = memo(ref, obj9);
  obj15 = {
    ref,
    maintainVisibleContentPosition: { disabled: true },
    accessibilityRole: "radiogroup",
    accessibilityLabel: intl6.string(availableGuilds(onSelectGuild[13]).t.Fo0g9x),
    keyboardShouldPersistTaps: "handled",
    ListEmptyComponent: memo(Text2, obj16),
    ItemSeparatorComponent() {
      const obj = { iconPush: true, style: divider.divider };
      return metroImportDefault(Form.FormDivider, obj);
    },
    data: memo1,
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
      const obj = { start: 0 === index, end: index === memo1.length - 1, item, selected: tmp3 === id, onSelectGuild };
      tmp3 = selectedGuildId;
      const tmp = metroImportDefault;
      const tmp2 = closure_11;
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
  };
  BottomSheetFlashList = tmp6(tmp7[29]).BottomSheetFlashList;
  intl6 = tmp6(tmp7[13]).intl;
  obj16 = { variant: "text-md/normal", color: "text-muted", style: tmp.noResults, children: intl7.formatToPlainString(availableGuilds(onSelectGuild[13]).t.ZGVL3g, { count: 0 }) };
  Text2 = tmp6(tmp7[27]).Text;
  intl7 = tmp6(tmp7[13]).intl;
  return memo(BottomSheet, obj13);
});
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/UserPrimaryGuildListBottomSheet.tsx");

export default tmp5;
