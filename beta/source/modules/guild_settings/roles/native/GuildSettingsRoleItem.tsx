// Module ID: 17422
// Function ID: 17423
// Name: GuildSettingsRoleItem
// Dependencies: [5, 19, 17, 1074, 21, 4836, 576, 4832, 5310, 6607, 5204, 1115, 11068, 5832, 5300, 7363, 4790, 6626, 6624, 5293, 1370, 1092, 9033, 5917, 5403, 1177, 9762, 5409, 2]

// Module 17422 (GuildSettingsRoleItem)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import Text_Text from "Text/Text" /* 4832 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let c1, c2;

let StyleSheet;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
({ View: hasOwnProperty, StyleSheet } = react_native);
const DEFAULT_ROLE_COLOR_HEX = Constants.DEFAULT_ROLE_COLOR_HEX;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = "text-md/semibold";
let createStyles = createStyles_mod;
let obj = { row: { flexDirection: "row", gap: 4, alignItems: "center" }, everyone: obj2, label: obj3, sparkleIcon: obj4, dragHandlePressable: { alignSelf: "stretch", justifyContent: "center" }, container: size, gradient: obj5, image: { tintColor: "white" } };
obj2 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 20, padding: 8 };
createStyles = createStyles.createStyles;
let prop = Text_Text.TextStyleSheet["text-md/semibold"];
let num;
if (prop != null) {
  num = prop.lineHeight;
}
if (num == null) {
  num = 20;
}
obj3 = { lineHeight: num + 1 };
obj4 = { tintColor: nativeDefault.colors.ICON_MUTED };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.round, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" };
obj5 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_10 = createStyles(obj);
const memoResult = react.memo(function GuildSettingsRoleItem(guildId) {
  let TrashIcon;
  let flag;
  let flag2;
  let fn;
  let found;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let isEveryoneRole;
  let isFirstRole;
  let isLastRole;
  let items2;
  let items4;
  let items6;
  let locked;
  let numMembers;
  let obj17;
  let obj20;
  let obj21;
  let obj6;
  let obj8;
  let obj9;
  let onLongPress;
  let onMoveUp;
  let sortHandlers;
  let sorting;
  let stringResult;
  let tmp36;
  let tmp = importDefault;
  const tmp3 = require("useHasEnhancedRoleColors")(guildId.guildId, null);
  const tmp4 = closure_10();
  let role = guildId.role;
  ({ sorting, locked, onPress: importDefault, onMoveUp } = guildId);
  const onMoveDown = guildId.onMoveDown;
  ({ sortHandlers, isEveryoneRole, guildId } = guildId);
  ({ onLongPress, numMembers, isLastRole, isFirstRole } = guildId);
  let obj = role(onMoveUp[9]);
  let obj2 = { guildId, roleId: role.id, size: 32 };
  const roleIconProps = obj.useRoleIconProps(obj2);
  const tags = role.tags;
  let guild_connections;
  if (tags != null) {
    guild_connections = tags.guild_connections;
  }
  let closure_5 = tmp8;
  const items = [];
  if (null != onMoveUp) {
    let obj3 = { name: "moveup", label: intl.string(tmp5(tmp2[11]).t.Yl8E4h) };
    const push = items.push;
    intl = tmp5(tmp2[11]).intl;
    push(obj3);
  }
  if (null != onMoveDown) {
    let obj4 = { name: "movedown", label: intl2.string(tmp5(tmp2[11]).t["5PbXSy"]) };
    const push2 = items.push;
    intl2 = tmp5(tmp2[11]).intl;
    push2(obj4);
  }
  const items1 = [onMoveUp, onMoveDown];
  if (sorting) {
    let tmp17;
    let tmp18;
    let tmp21Result;
    let tmp24;
    if (!locked) {
      let obj5 = { accessibilityRole: "button", accessibilityLabel: intl3.formatToPlainString(tmp5(tmp2[11]).t.Zazao2, obj6), accessibilityHint: intl4.string(tmp5(tmp2[11]).t.BGMUFB), accessibilityActions: items, onAccessibilityAction: tmp11, delayLongPress: 100, activeOpacity: 0.8, hitSlop: tmp(tmp2[6]).space.PX_4, style: items2 };
      intl3 = tmp5(tmp2[11]).intl;
      obj6 = { name: role.name };
      intl4 = tmp5(tmp2[11]).intl;
      const merged = Object.assign(sortHandlers);
      items2 = [tmp4.dragHandlePressable, ];
      let style;
      if (sortHandlers != null) {
        style = sortHandlers.style;
      }
      items2[1] = style;
      flag = false;
      flag2 = true;
      tmp17 = obj5;
      const tmp16 = role.managed && null !== guild_connections;
      if (!tmp16) {
        let tmp19 = closure_7;
        const obj7 = {
          icon: closure_7(TrashIcon, obj8),
          accessibilityLabel: intl5.formatToPlainString(role(onMoveUp[11]).t.FiMFTZ, obj9),
          size: "sm",
          variant: "destructive",
          onPress: function handleDeleteRow() {
                  let closure_0;
                  let intl;
                  let intl2;
                  let intl3;
                  let intl4;
                  let obj2;
                  const tmp = require("actions/AlertActionCreators");
                  let obj = {
                    title: intl.formatToPlainString(role(onMoveUp[11]).t.FiMFTZ, obj2),
                    body: intl2.string(role(onMoveUp[11]).t.qALKny),
                    cancelText: intl3.string(role(onMoveUp[11]).t.gm1Vej),
                    confirmText: intl4.string(role(onMoveUp[11]).t.p89ACt),
                    onConfirm: function() {
                      return closure_0(...arguments);
                    },
                    confirmColor: require("Alert").Colors.RED
                  };
                  const show = tmp.show;
                  intl = role(onMoveUp[11]).intl;
                  obj2 = { name: role.name };
                  intl2 = role(onMoveUp[11]).intl;
                  intl3 = role(onMoveUp[11]).intl;
                  intl4 = role(onMoveUp[11]).intl;
                  role = onMoveDown(function*(arg0, value) {
                    let obj3;
                    if (c2 === 2) {
                      c2 = 3;
                      throw new TypeError("Generator functions may not be called on executing generators");
                    } else if (tmp3 === 3) {
                      if (arg0 === 1) {
                        throw value;
                      } else if (arg0 === 2) {
                        const obj4 = { value, done: true };
                        return obj4;
                      } else {
                        return { value: "HermesInternal", done: null };
                      }
                    } else {
                      try {
                        c2 = 2;
                        if (0 === c1) {
                          if (arg0 === 1) {
                            c2 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c2 = 3;
                            const obj5 = { value, done: true };
                            return obj5;
                          } else {
                            const tmp19 = closure_1_5;
                            if (tmp19) {
                              c1 = 1;
                              c2 = 1;
                              const obj6 = { value: obj3.putRoleConnectionsConfigurations(guildId, tmp.id, []), done: false };
                              obj3 = tmp(onMoveUp[12]);
                              return obj6;
                            }
                          }
                        } else if (arg0 === 1) {
                          c2 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c2 = 3;
                          const obj = { value, done: true };
                          return obj;
                        }
                        const obj2 = require("GuildActionCreators");
                        obj2.deleteRole(guildId, tmp.id);
                        c2 = 3;
                        return { value: "HermesInternal", done: null };
                      } catch (tmp15) {
                        c2 = 3;
                        throw tmp15;
                      }
                    }
                  });
                  show(obj);
                }
        };
        const IconButton = tmp5(tmp2[15]).IconButton;
        obj8 = { size: "xs", color: tmp(onMoveUp[6]).colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT };
        TrashIcon = tmp5(tmp2[16]).TrashIcon;
        intl5 = tmp5(tmp2[11]).intl;
        obj9 = { name: role.name };
        flag = false;
        flag2 = true;
        tmp17 = obj5;
        tmp18 = closure_7(IconButton, obj7);
      }
    }
    if (null != roleIconProps) {
      const obj10 = {};
      const tmpResult = tmp(onMoveUp[17]);
      const merged1 = Object.assign(roleIconProps);
      tmp21Result = closure_7(tmpResult, obj10);
      tmp24 = closure_7;
    } else {
      const tags3 = role.tags;
      let guild_connections1;
      if (tags3 != null) {
        guild_connections1 = tags3.guild_connections;
      }
      if (null === guild_connections1) {
        const obj11 = { size: 32, guildId, role };
        tmp21Result = closure_7(tmp(tmp2[18]), obj11);
        tmp24 = closure_7;
      } else {
        if (tmp3) {
          if (null != role.colors) {
            if (null != role.colors.secondary_color) {
              const obj12 = { style: tmp4.container, children: items4 };
              const items3 = [role.colors.primary_color, role.colors.secondary_color, role.colors.tertiary_color];
              const obj13 = {
                colors: found.map((item) => {
                              const obj = role(onMoveUp[21]);
                              return obj.int2hex(item);
                            }),
                start: { x: 0, y: 0 },
                end: { x: 1, y: 0 },
                style: tmp4.gradient
              };
              const tmpResult2 = tmp(onMoveUp[19]);
              found = items3.filter(tmp5(tmp2[20]).isNotNullish);
              items4 = [closure_7(tmpResult2, obj13), ];
              const obj14 = { size: "md", style: tmp4.image };
              items4[1] = closure_7(role(onMoveUp[22]).ShieldUserIcon, obj14);
              tmp21Result = closure_8(closure_5, obj12);
              tmp24 = closure_7;
            }
          }
        }
        const items5 = [tmp4.container, ];
        const obj16 = { backgroundColor: null != role.colorString ? role.colorString : DEFAULT_ROLE_COLOR_HEX };
        items5[1] = obj16;
        const obj15 = { style: items5, children: closure_7(role(onMoveUp[22]).ShieldUserIcon, obj17) };
        obj17 = { size: "md", style: tmp4.image };
        tmp21Result = tmp21(closure_5, obj15);
        tmp24 = tmp21;
      }
    }
    const obj18 = { onLongPress, onPress: fn, disabled: sorting, draggable: flag2, dragHandlePressableProps: tmp17, trailing: tmp18, arrow: flag, icon: tmp24(closure_5, obj20), label: tmp36(closure_5, obj21), subLabel: stringResult, start: isFirstRole, end: isLastRole };
    fn = undefined;
    const TableRow = tmp5(tmp2[23]).TableRow;
    if (!sorting) {
      fn = () => {
        if (importDefault != null) {
          tmp(role);
        }
      };
    }
    if (sorting) {
      sorting = !flag2;
    }
    if (isEveryoneRole) {
      obj20 = { style: tmp4.everyone, children: tmp24(role(onMoveUp[24]).GroupIcon, {}) };
      const obj19 = { style: tmp4.everyone, children: tmp24(role(onMoveUp[24]).GroupIcon, {}) };
    } else {
      obj20 = { children: tmp21Result };
    }
    obj21 = { style: tmp4.row, children: items6 };
    const obj22 = { lineClamp: 1, style: tmp4.label, variant, color: "interactive-text-active", children: role.name };
    items6 = [tmp24(tmp5(tmp2[7]).Text, obj22), , ];
    const tags2 = role.tags;
    let prop;
    tmp36 = closure_8;
    if (tags2 != null) {
      prop = tags2.subscription_listing_id;
    }
    let tmp24Result = null;
    if (null != prop) {
      const obj23 = { size: role(onMoveUp[25]).Icon.Sizes.REFRESH_SMALL_16, source: tmp(onMoveUp[26]), "aria-label": intl6.string(role(onMoveUp[11]).t.a2Ak8b), style: tmp4.sparkleIcon };
      const Icon = tmp5(tmp2[25]).Icon;
      intl6 = tmp5(tmp2[11]).intl;
      tmp24Result = tmp24(Icon, obj23);
    }
    items6[1] = tmp24Result;
    let tmp24Result2 = null;
    if (locked) {
      tmp24Result2 = tmp24(tmp5(tmp2[27]).LockIcon, { size: "xxs", color: "icon-subtle" });
    }
    items6[2] = tmp24Result2;
    const intl7 = tmp5(tmp2[11]).intl;
    if (isEveryoneRole) {
      stringResult = intl7.string(tmp5(tmp2[11]).t["72gF3G"]);
    } else {
      const formatToPlainString = intl7.formatToPlainString;
      const _HermesInternal = HermesInternal;
      const obj24 = { count: "" + numMembers };
      const AWmdd9 = tmp5(tmp2[11]).t.AWmdd9;
      stringResult = formatToPlainString(AWmdd9, obj24);
    }
    return tmp24(TableRow, obj18);
  }
  flag = false;
  flag2 = false;
  if (!sorting) {
    flag = true;
    flag2 = false;
  }
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleItem.tsx");

export default memoResult;
