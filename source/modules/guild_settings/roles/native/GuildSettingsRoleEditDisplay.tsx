// Module ID: 16367
// Function ID: 127688
// Name: GuildSettingsRoleEditDisplay
// Dependencies: [31, 27, 1911, 16352, 16351, 653, 16354, 33, 4130, 689, 4571, 566, 5487, 5486, 1273, 16368, 4098, 14867, 1934, 16366, 16369, 16370, 7574, 1212, 16373, 5501, 5165, 4554, 1327, 665, 13620, 4086, 4126, 2230, 5502, 2]
// Exports: default

// Module 16367 (GuildSettingsRoleEditDisplay)
import CircleInformationIcon from "CircleInformationIcon";
import { View } from "LinearGradient";
import { isEveryoneRole } from "GuildRoleRecordTypeTag";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { RoleColorsStyle } from "_isNativeReflectConstruct";
import { STYLE_CONFIGS } from "title";
import ME from "ME";
import { DEFAULT_GRADIENT_ROLE_COLORS as closure_11 } from "HOLOGRAPHIC_ROLE_COLORS";
import jsxProd from "messagesProxy";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_12;
let closure_13;
let closure_14;
let closure_9;
const require = arg1;
({ DEFAULT_ROLE_COLOR: closure_9, MAX_ROLE_LENGTH: closure_10 } = ME);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = jsxProd);
_createForOfIteratorHelperLoose = { roleIcon: { paddingTop: 2, opacity: 0.5 }, trailingColorContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, colorBlock: { marginHorizontal: 0, marginVertical: 0, marginRight: 8, minWidth: 24, height: 24, borderRadius: 3 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_INFO, padding: require("_createForOfIteratorHelperLoose").space.PX_8, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12, marginTop: -1 * require("_createForOfIteratorHelperLoose").space.PX_12, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_12, display: "flex", flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_8, justifyContent: "center", alignItems: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_INFO };
_createForOfIteratorHelperLoose.holographicInfo = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("GuildRoleRecordTypeTag").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEditDisplay.tsx");

export default function GuildSettingsRoleEditDisplay(guild) {
  let autoFocusInput;
  let formErrors;
  let hoist;
  let locked;
  let mentionable;
  let name;
  let onHoistChanged;
  let onMentionableChanged;
  let onNameChanged;
  guild = guild.guild;
  const role = guild.role;
  let id;
  let SOLID;
  let primary_color;
  let isEveryoneRole;
  ({ name, formErrors, mentionable, hoist, onNameChanged, onMentionableChanged, onHoistChanged, locked, autoFocusInput } = guild);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = isEveryoneRole(role);
  let tmp3 = tmp2;
  if (!tmp2) {
    tmp3 = locked;
  }
  id = role.id;
  let obj = guild(id[10]);
  const hasEnhancedRoleColorsForRole = obj.useHasEnhancedRoleColorsForRole(guild.id, role);
  let obj1 = guild(id[11]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_6.getRoleStyleData(role.id));
  if (null != stateFromStores) {
    if (hasEnhancedRoleColorsForRole) {
      SOLID = stateFromStores.currentStyle;
    }
    const found = STYLE_CONFIGS.find((id) => id.id === SOLID);
    let tmp8;
    if (null != stateFromStores) {
      const styleColors = stateFromStores.styleColors;
      if (null != styleColors) {
        tmp8 = styleColors[SOLID];
      }
    }
    primary_color = undefined;
    if (null != tmp8) {
      primary_color = tmp8.primary_color;
    }
    if (null == primary_color) {
      primary_color = closure_9;
    }
    if (null == tmp8) {
      tmp8 = closure_11;
    } else {
      let secondary_color;
      if (null != tmp8) {
        secondary_color = tmp8.secondary_color;
      }
    }
    isEveryoneRole = tmp8;
    let obj2 = guild(id[12]);
    let obj3 = guild(id[13]);
    obj = { guildId: guild.id, roleId: role.id, size: 26 };
    let roleIcon = obj3.useRoleIcon(obj);
    if (null == roleIcon) {
      obj = { source: role(id[15]), size: guild(id[14]).IconSizes.MEDIUM };
      roleIcon = callback(guild(id[14]).Icon, obj);
    }
    const items1 = [id, tmp8, primary_color, SOLID];
    const items2 = [guild.id, role, id, SOLID];
    callback = SOLID.useCallback(() => {
      if (SOLID === outer1_7.SOLID) {
        let obj = role(id[16]);
        obj = {
          color: primary_color,
          onSelect(color) {
              guild(id[19]).updateRoleColor(outer1_2, color);
            }
        };
        obj.openLazy(guild(id[18])(id[17], id.paths), "RoleColorPicker", obj);
      } else if (SOLID === outer1_7.GRADIENT) {
        obj = {
          colors: c5,
          onSelect(colors) {
              guild(id[19]).updateRoleColors(outer1_2, colors, outer2_7.GRADIENT);
            }
        };
        role(id[16]).openLazy(guild(id[18])(id[20], id.paths), "RoleColorPicker", obj);
        const obj3 = role(id[16]);
      }
    }, items1);
    obj1 = {};
    const callback1 = SOLID.useCallback(() => {
      let obj = role(id[16]);
      obj = {
        guildId: guild.id,
        role,
        roleStyle: SOLID,
        onStyleChanged(currentStyle) {
          guild(id[19]).updateRoleStyles(outer1_2, currentStyle);
        }
      };
      obj.openLazy(guild(id[18])(id[21], id.paths), "EnhancedRoleColorsSelectStyleModal", obj);
    }, items2);
    obj2 = {};
    const intl = guild(id[23]).intl;
    obj2.label = intl.string(guild(id[23]).t.dLbkBk);
    obj2.value = name;
    obj2.isDisabled = tmp3;
    obj2.onChange = onNameChanged;
    obj2.maxLength = closure_10;
    obj2.autoFocus = autoFocusInput;
    const name2 = formErrors.name;
    let first;
    if (null != name2) {
      first = name2[0];
    }
    obj2.errorMessage = first;
    const items3 = [callback(guild(id[22]).TextInput, obj2), , , , , ];
    obj3 = { role };
    items3[1] = callback(role(id[24]), obj3);
    const obj4 = { hasIcons: false };
    const obj5 = {};
    const intl2 = guild(id[23]).intl;
    obj5.label = intl2.string(guild(id[23]).t["9wVJRB"]);
    obj5.onPress = callback1;
    obj5.arrow = true;
    let labelString;
    if (null != found) {
      labelString = found.labelString;
    }
    let str = "";
    if (null != labelString) {
      const intl3 = guild(id[23]).intl;
      str = intl3.string(found.labelString);
    }
    obj5.subLabel = str;
    obj5.disabled = tmp3;
    const items4 = [callback(guild(id[26]).TableRow, obj5), ];
    if (SOLID === RoleColorsStyle.HOLOGRAPHIC) {
      items4[1] = tmp38;
      obj4.children = items4;
      items3[2] = tmp32(guild(id[25]).TableRowGroup, obj4);
      let tmp72 = SOLID === RoleColorsStyle.HOLOGRAPHIC;
      if (tmp72) {
        const obj6 = { style: tmp.holographicInfo };
        const obj7 = { size: "sm", color: role(id[9]).colors.ICON_FEEDBACK_INFO };
        const items5 = [callback(guild(id[31]).CircleInformationIcon, obj7), ];
        const obj8 = { variant: "text-sm/normal" };
        const intl5 = guild(id[23]).intl;
        obj8.children = intl5.string(role(id[33]).tBhCyr);
        items5[1] = callback(guild(id[32]).Text, obj8);
        obj6.children = items5;
        tmp72 = callback2(primary_color, obj6);
      }
      items3[3] = tmp72;
      let tmp79 = null;
      if (canGuildUseRoleIconsResult) {
        const obj9 = { hasIcons: false };
        const obj10 = { disabled: tmp3 };
        const intl6 = guild(id[23]).intl;
        obj10.label = intl6.string(guild(id[23]).t.B9grJw);
        const obj11 = { style: tmp.roleIcon, children: roleIcon };
        obj10.trailing = callback(primary_color, obj11);
        const intl7 = guild(id[23]).intl;
        obj10.subLabel = intl7.string(guild(id[23]).t.ZTpgyG);
        obj9.children = callback(guild(id[26]).TableRow, obj10);
        tmp79 = callback(guild(id[25]).TableRowGroup, obj9);
      }
      items3[4] = tmp79;
      const obj12 = { hasIcons: false };
      const obj13 = {};
      let tmp88 = tmp3;
      if (!tmp3) {
        tmp88 = tmp2;
      }
      obj13.disabled = tmp88;
      const intl8 = guild(id[23]).intl;
      obj13.label = intl8.string(guild(id[23]).t.iVW5w4);
      obj13.value = hoist;
      obj13.onValueChange = onHoistChanged;
      const intl9 = guild(id[23]).intl;
      obj13.subLabel = intl9.string(guild(id[23]).t.vceJPk);
      const items6 = [callback(guild(id[34]).TableSwitchRow, obj13), ];
      const obj14 = {};
      if (!tmp3) {
        tmp3 = tmp2;
      }
      obj14.disabled = tmp3;
      const intl10 = guild(id[23]).intl;
      obj14.label = intl10.format(guild(id[23]).t.DTXoJQ, {});
      obj14.value = mentionable;
      obj14.onValueChange = onMentionableChanged;
      items6[1] = callback(guild(id[34]).TableSwitchRow, obj14);
      obj12.children = items6;
      items3[5] = callback2(guild(id[25]).TableRowGroup, obj12);
      obj1.children = items3;
      return tmp22(tmp23, obj1);
    } else {
      let obj15 = {};
      const intl4 = guild(id[23]).intl;
      obj15.label = intl4.string(guild(id[23]).t["5NC5YW"]);
      obj15.onPress = callback;
      obj15.arrow = true;
      let obj16 = { style: tmp.trailingColorContainer };
      if (SOLID === RoleColorsStyle.GRADIENT) {
        let obj17 = {};
        let primary_color1;
        if (null != tmp8) {
          primary_color1 = tmp8.primary_color;
        }
        const items7 = [primary_color1, , ];
        let secondary_color1;
        if (null != tmp8) {
          secondary_color1 = tmp8.secondary_color;
        }
        items7[1] = secondary_color1;
        let tertiary_color;
        if (null != tmp8) {
          tertiary_color = tmp8.tertiary_color;
        }
        items7[2] = tertiary_color;
        const found1 = items7.filter(guild(id[28]).isNotNullish);
        obj17.colors = found1.map((color) => guild(id[29]).int2hex(color));
        obj17.start = { x: 0, y: 0 };
        obj17.end = { x: 1, y: 0 };
        obj17.style = tmp.colorBlock;
        let tmp48Result = callback(role(id[27]), obj17);
        const tmp48 = callback;
        const tmp51 = role(id[27]);
      } else {
        const obj18 = { color: primary_color, style: tmp.colorBlock };
        tmp48Result = callback(role(id[30]), obj18);
      }
      obj16.children = tmp48Result;
      obj15.trailing = callback(primary_color, obj16);
      if (SOLID === RoleColorsStyle.GRADIENT) {
        obj16 = guild(id[29]);
        let primary_color2;
        if (null != tmp8) {
          primary_color2 = tmp8.primary_color;
        }
        let num17 = 0;
        if (null != primary_color2) {
          num17 = primary_color2;
        }
        const int2hexResult = obj16.int2hex(num17);
        obj17 = guild(id[29]);
        let secondary_color2;
        if (null != tmp8) {
          secondary_color2 = tmp8.secondary_color;
        }
        tmp8 = null != secondary_color2;
        let num18 = 0;
        if (tmp8) {
          num18 = secondary_color2;
        }
        const _HermesInternal = HermesInternal;
        let combined = "[" + int2hexResult + ", " + obj17.int2hex(num18) + "]";
      } else {
        obj15 = guild(id[29]);
        combined = obj15.int2hex(primary_color);
      }
      obj15.subLabel = combined;
      obj15.disabled = tmp3;
      callback(guild(id[26]).TableRow, obj15);
      const tmp42 = primary_color;
    }
    canGuildUseRoleIconsResult = obj2.canGuildUseRoleIcons(guild, role);
    tmp22 = callback2;
    tmp23 = closure_14;
    const tmp24 = callback;
    const tmp29 = callback;
    tmp32 = callback2;
  }
  SOLID = RoleColorsStyle.SOLID;
};
