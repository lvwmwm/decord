// Module ID: 16180
// Function ID: 125057
// Name: GuildSettingsRoleEditDisplay
// Dependencies: []
// Exports: default

// Module 16180 (GuildSettingsRoleEditDisplay)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const isEveryoneRole = arg1(dependencyMap[2]).isEveryoneRole;
let closure_6 = importDefault(dependencyMap[3]);
const RoleColorsStyle = arg1(dependencyMap[3]).RoleColorsStyle;
const STYLE_CONFIGS = arg1(dependencyMap[4]).STYLE_CONFIGS;
({ DEFAULT_ROLE_COLOR: closure_9, MAX_ROLE_LENGTH: closure_10 } = arg1(dependencyMap[5]));
let closure_11 = arg1(dependencyMap[6]).DEFAULT_GRADIENT_ROLE_COLORS;
const tmp2 = arg1(dependencyMap[5]);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = { roleIcon: {}, trailingColorContainer: { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null }, colorBlock: {} };
obj = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_FEEDBACK_INFO, padding: importDefault(dependencyMap[9]).space.PX_8, marginHorizontal: importDefault(dependencyMap[9]).space.PX_12, marginTop: -1 * importDefault(dependencyMap[9]).space.PX_12, marginBottom: importDefault(dependencyMap[9]).space.PX_12, display: "flex", flexDirection: "row", gap: importDefault(dependencyMap[9]).space.PX_8, justifyContent: "center", alignItems: "center", borderRadius: importDefault(dependencyMap[9]).radii.sm, borderWidth: 1, borderColor: importDefault(dependencyMap[9]).colors.ICON_FEEDBACK_INFO };
obj.holographicInfo = obj;
let closure_15 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[35]).fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEditDisplay.tsx");

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
  const arg1 = guild;
  const role = guild.role;
  const importDefault = role;
  let dependencyMap;
  let React;
  let View;
  let isEveryoneRole;
  ({ name, formErrors, mentionable, hoist, onNameChanged, onMentionableChanged, onHoistChanged, locked, autoFocusInput } = guild);
  const tmp = callback3();
  const tmp2 = isEveryoneRole(role);
  let tmp3 = tmp2;
  if (!tmp2) {
    tmp3 = locked;
  }
  const id = role.id;
  dependencyMap = id;
  let obj = arg1(dependencyMap[10]);
  const hasEnhancedRoleColorsForRole = obj.useHasEnhancedRoleColorsForRole(guild.id, role);
  let obj1 = arg1(dependencyMap[11]);
  const items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => roleStyleData.getRoleStyleData(role.id));
  if (null != stateFromStores) {
    if (hasEnhancedRoleColorsForRole) {
      let SOLID = stateFromStores.currentStyle;
    }
    React = SOLID;
    const found = STYLE_CONFIGS.find((id) => id.id === SOLID);
    let tmp8;
    if (null != stateFromStores) {
      const styleColors = stateFromStores.styleColors;
      if (null != styleColors) {
        tmp8 = styleColors[SOLID];
      }
    }
    let primary_color;
    if (null != tmp8) {
      primary_color = tmp8.primary_color;
    }
    if (null == primary_color) {
      primary_color = closure_9;
    }
    View = primary_color;
    if (null == tmp8) {
      tmp8 = closure_11;
    } else {
      let secondary_color;
      if (null != tmp8) {
        secondary_color = tmp8.secondary_color;
      }
    }
    isEveryoneRole = tmp8;
    let obj2 = arg1(dependencyMap[12]);
    let obj3 = arg1(dependencyMap[13]);
    obj = { guildId: guild.id, roleId: role.id, size: 26 };
    let roleIcon = obj3.useRoleIcon(obj);
    if (null == roleIcon) {
      obj = { source: importDefault(dependencyMap[15]), size: arg1(dependencyMap[14]).IconSizes.MEDIUM };
      roleIcon = callback(arg1(dependencyMap[14]).Icon, obj);
    }
    const items1 = [id, tmp8, primary_color, SOLID];
    const items2 = [guild.id, role, id, SOLID];
    const callback = React.useCallback(() => {
      if (SOLID === constants.SOLID) {
        let obj = role(id[16]);
        obj = {
          color: primary_color,
          onSelect(color) {
              callback(closure_2[19]).updateRoleColor(closure_2, color);
            }
        };
        obj.openLazy(guild(id[18])(id[17], id.paths), "RoleColorPicker", obj);
      } else if (SOLID === constants.GRADIENT) {
        obj = {
          colors: role,
          onSelect(colors) {
              callback(closure_2[19]).updateRoleColors(closure_2, colors, constants.GRADIENT);
            }
        };
        role(id[16]).openLazy(guild(id[18])(id[20], id.paths), "RoleColorPicker", obj);
        const obj3 = role(id[16]);
      }
    }, items1);
    obj1 = {};
    const callback1 = React.useCallback(() => {
      let obj = role(id[16]);
      obj = {
        guildId: guild.id,
        role,
        roleStyle: SOLID,
        onStyleChanged(currentStyle) {
          callback(closure_2[19]).updateRoleStyles(closure_2, currentStyle);
        }
      };
      obj.openLazy(guild(id[18])(id[21], id.paths), "EnhancedRoleColorsSelectStyleModal", obj);
    }, items2);
    obj2 = {};
    const intl = arg1(dependencyMap[23]).intl;
    obj2.label = intl.string(arg1(dependencyMap[23]).t.dLbkBk);
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
    const items3 = [callback(arg1(dependencyMap[22]).TextInput, obj2), , , , , ];
    obj3 = { role };
    items3[1] = callback(importDefault(dependencyMap[24]), obj3);
    const obj4 = { hasIcons: false };
    const obj5 = {};
    const intl2 = arg1(dependencyMap[23]).intl;
    obj5.label = intl2.string(arg1(dependencyMap[23]).t.9wVJRB);
    obj5.onPress = callback1;
    obj5.arrow = true;
    let labelString;
    if (null != found) {
      labelString = found.labelString;
    }
    let str = "";
    if (null != labelString) {
      const intl3 = arg1(dependencyMap[23]).intl;
      str = intl3.string(found.labelString);
    }
    obj5.subLabel = str;
    obj5.disabled = tmp3;
    const items4 = [callback(arg1(dependencyMap[26]).TableRow, obj5), ];
    if (SOLID === RoleColorsStyle.HOLOGRAPHIC) {
      items4[1] = tmp38;
      obj4.children = items4;
      items3[2] = tmp32(arg1(dependencyMap[25]).TableRowGroup, obj4);
      let tmp72 = SOLID === RoleColorsStyle.HOLOGRAPHIC;
      if (tmp72) {
        const obj6 = { style: tmp.holographicInfo };
        const obj7 = { size: "sm", color: importDefault(dependencyMap[9]).colors.ICON_FEEDBACK_INFO };
        const items5 = [callback(arg1(dependencyMap[31]).CircleInformationIcon, obj7), ];
        const obj8 = { variant: "text-sm/normal" };
        const intl5 = arg1(dependencyMap[23]).intl;
        obj8.children = intl5.string(importDefault(dependencyMap[33]).tBhCyr);
        items5[1] = callback(arg1(dependencyMap[32]).Text, obj8);
        obj6.children = items5;
        tmp72 = callback2(View, obj6);
      }
      items3[3] = tmp72;
      let tmp79 = null;
      if (canGuildUseRoleIconsResult) {
        const obj9 = { hasIcons: false };
        const obj10 = { disabled: tmp3 };
        const intl6 = arg1(dependencyMap[23]).intl;
        obj10.label = intl6.string(arg1(dependencyMap[23]).t.B9grJw);
        const obj11 = { style: tmp.roleIcon, children: roleIcon };
        obj10.trailing = callback(View, obj11);
        const intl7 = arg1(dependencyMap[23]).intl;
        obj10.subLabel = intl7.string(arg1(dependencyMap[23]).t.ZTpgyG);
        obj9.children = callback(arg1(dependencyMap[26]).TableRow, obj10);
        tmp79 = callback(arg1(dependencyMap[25]).TableRowGroup, obj9);
      }
      items3[4] = tmp79;
      const obj12 = { hasIcons: false };
      const obj13 = {};
      let tmp88 = tmp3;
      if (!tmp3) {
        tmp88 = tmp2;
      }
      obj13.disabled = tmp88;
      const intl8 = arg1(dependencyMap[23]).intl;
      obj13.label = intl8.string(arg1(dependencyMap[23]).t.iVW5w4);
      obj13.value = hoist;
      obj13.onValueChange = onHoistChanged;
      const intl9 = arg1(dependencyMap[23]).intl;
      obj13.subLabel = intl9.string(arg1(dependencyMap[23]).t.vceJPk);
      const items6 = [callback(arg1(dependencyMap[34]).TableSwitchRow, obj13), ];
      const obj14 = {};
      if (!tmp3) {
        tmp3 = tmp2;
      }
      obj14.disabled = tmp3;
      const intl10 = arg1(dependencyMap[23]).intl;
      obj14.label = intl10.format(arg1(dependencyMap[23]).t.DTXoJQ, {});
      obj14.value = mentionable;
      obj14.onValueChange = onMentionableChanged;
      items6[1] = callback(arg1(dependencyMap[34]).TableSwitchRow, obj14);
      obj12.children = items6;
      items3[5] = callback2(arg1(dependencyMap[25]).TableRowGroup, obj12);
      obj1.children = items3;
      return tmp22(tmp23, obj1);
    } else {
      let obj15 = {};
      const intl4 = arg1(dependencyMap[23]).intl;
      obj15.label = intl4.string(arg1(dependencyMap[23]).t.5NC5YW);
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
        const found1 = items7.filter(arg1(dependencyMap[28]).isNotNullish);
        obj17.colors = found1.map((color) => guild(id[29]).int2hex(color));
        obj17.start = { "Null": false, "Null": true };
        obj17.end = { "Null": null, "Null": null };
        obj17.style = tmp.colorBlock;
        let tmp48Result = callback(importDefault(dependencyMap[27]), obj17);
        const tmp48 = callback;
        const tmp51 = importDefault(dependencyMap[27]);
      } else {
        const obj18 = { color: primary_color, style: tmp.colorBlock };
        tmp48Result = callback(importDefault(dependencyMap[30]), obj18);
      }
      obj16.children = tmp48Result;
      obj15.trailing = callback(View, obj16);
      if (SOLID === RoleColorsStyle.GRADIENT) {
        obj16 = arg1(dependencyMap[29]);
        let primary_color2;
        if (null != tmp8) {
          primary_color2 = tmp8.primary_color;
        }
        let num17 = 0;
        if (null != primary_color2) {
          num17 = primary_color2;
        }
        const int2hexResult = obj16.int2hex(num17);
        obj17 = arg1(dependencyMap[29]);
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
        obj15 = arg1(dependencyMap[29]);
        combined = obj15.int2hex(primary_color);
      }
      obj15.subLabel = combined;
      obj15.disabled = tmp3;
      callback(arg1(dependencyMap[26]).TableRow, obj15);
      const tmp42 = View;
    }
    const canGuildUseRoleIconsResult = obj2.canGuildUseRoleIcons(guild, role);
    const tmp22 = callback2;
    const tmp23 = closure_14;
    const tmp24 = callback;
    const tmp29 = callback;
    const tmp32 = callback2;
  }
  SOLID = RoleColorsStyle.SOLID;
};
