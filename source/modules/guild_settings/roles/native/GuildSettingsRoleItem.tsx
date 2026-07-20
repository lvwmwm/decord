// Module ID: 16177
// Function ID: 124968
// Dependencies: []

// Module 16177
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
const View = tmp2.View;
const DEFAULT_ROLE_COLOR_HEX = arg1(dependencyMap[3]).DEFAULT_ROLE_COLOR_HEX;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj1 = arg1(dependencyMap[5]);
let obj = { row: {} };
obj = { tintColor: importDefault(dependencyMap[6]).colors.INTERACTIVE_TEXT_DEFAULT, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOWEST, borderRadius: 20, padding: 8 };
let num = 20;
obj.everyone = obj;
obj1 = {};
text-md/semibold = arg1(dependencyMap[7]).TextStyleSheet.text-md/semibold;
let lineHeight;
if (null != text_md_semibold) {
  lineHeight = text_md_semibold.lineHeight;
}
if (null != lineHeight) {
  num = lineHeight;
}
obj1.lineHeight = num + 1;
obj.label = obj1;
const tmp3 = arg1(dependencyMap[4]);
obj.sparkleIcon = { tintColor: importDefault(dependencyMap[6]).colors.ICON_MUTED };
const obj2 = { tintColor: importDefault(dependencyMap[6]).colors.ICON_MUTED };
obj.container = { borderRadius: importDefault(dependencyMap[6]).radii.round };
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj.gradient = {};
obj.image = { tintColor: "white" };
let closure_9 = obj1.createStyles(obj);
const obj3 = { borderRadius: importDefault(dependencyMap[6]).radii.round };
const obj4 = {};
const memoResult = importAllResult.memo(function GuildSettingsRoleItem(guildId) {
  let isEveryoneRole;
  let isFirstRole;
  let isLastRole;
  let locked;
  let numMembers;
  let onLongPress;
  let onMoveUp;
  let sortHandlers;
  let sorting;
  const tmp2 = callback3();
  const role = guildId.role;
  const arg1 = role;
  ({ sorting, locked, onPress: closure_1, onMoveUp } = guildId);
  const dependencyMap = onMoveUp;
  const onMoveDown = guildId.onMoveDown;
  let closure_3 = onMoveDown;
  ({ sortHandlers, isEveryoneRole, guildId } = guildId);
  ({ onLongPress, numMembers, isLastRole, isFirstRole } = guildId);
  let obj = arg1(dependencyMap[9]);
  obj = { guildId, roleId: role.id, size: 32 };
  const roleIcon = obj.useRoleIcon(obj);
  const tags = role.tags;
  let guild_connections;
  if (null != tags) {
    guild_connections = tags.guild_connections;
  }
  const View = tmp5;
  const items = [];
  if (null != onMoveUp) {
    obj = { name: "moveup" };
    const intl = arg1(dependencyMap[11]).intl;
    obj.label = intl.string(arg1(dependencyMap[11]).t.Yl8E4h);
    items.push(obj);
  }
  if (null != onMoveDown) {
    const obj1 = { name: "movedown" };
    const intl2 = arg1(dependencyMap[11]).intl;
    obj1.label = intl2.string(arg1(dependencyMap[11]).t.5PbXSy);
    items.push(obj1);
  }
  const items1 = [onMoveUp, onMoveDown];
  if (sorting) {
    if (!locked) {
      const obj2 = { accessibilityRole: "button" };
      const intl3 = arg1(dependencyMap[11]).intl;
      obj2.accessibilityLabel = intl3.string(arg1(dependencyMap[11]).t.0dOFq+);
      const intl4 = arg1(dependencyMap[11]).intl;
      obj2.accessibilityHint = intl4.string(arg1(dependencyMap[11]).t.BGMUFB);
      obj2.accessibilityActions = items;
      obj2.onAccessibilityAction = tmp12;
      obj2.delayLongPress = 100;
      obj2.activeOpacity = 0.8;
      obj2.hitSlop = importDefault(dependencyMap[6]).space.PX_4;
      const merged = Object.assign(sortHandlers);
      let tmp21 = obj2;
      let flag = true;
      let flag2 = false;
      if (!tmp19) {
        const obj3 = {};
        const obj4 = { size: "xs", color: importDefault(dependencyMap[6]).colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT };
        obj3.icon = callback(arg1(dependencyMap[16]).TrashIcon, obj4);
        const intl5 = arg1(dependencyMap[11]).intl;
        const obj5 = { name: role.name };
        obj3.accessibilityLabel = intl5.formatToPlainString(arg1(dependencyMap[11]).t.FiMFTZ, obj5);
        obj3.size = "sm";
        obj3.variant = "destructive";
        obj3.onPress = function handleDeleteRow() {
          let obj = callback(onMoveUp[10]);
          obj = {};
          const intl = lib(onMoveUp[11]).intl;
          obj = { name: lib.name };
          obj.title = intl.formatToPlainString(lib(onMoveUp[11]).t.FiMFTZ, obj);
          const intl2 = lib(onMoveUp[11]).intl;
          obj.body = intl2.string(lib(onMoveUp[11]).t.qALKny);
          const intl3 = lib(onMoveUp[11]).intl;
          obj.cancelText = intl3.string(lib(onMoveUp[11]).t.gm1Vej);
          const intl4 = lib(onMoveUp[11]).intl;
          obj.confirmText = intl4.string(lib(onMoveUp[11]).t.p89ACt);
          // CreateGeneratorClosureLongIndex (0x67)
          const lib = onMoveDown(tmp);
          obj.onConfirm = function() {
            return callback(...arguments);
          };
          obj.confirmColor = callback(onMoveUp[14]).Colors.RED;
          obj.show(obj);
        };
        tmp21 = obj2;
        flag = true;
        flag2 = false;
        const tmp20 = callback(arg1(dependencyMap[15]).IconButton, obj3);
      }
      const tmp19 = role.managed && !tmp5;
    }
    if (null != roleIcon) {
      const obj6 = { onLongPress };
      let fn;
      if (!sorting) {
        fn = () => {
          if (null != callback) {
            callback(role);
          }
        };
      }
      obj6.onPress = fn;
      if (sorting) {
        sorting = !flag;
      }
      obj6.disabled = sorting;
      obj6.draggable = flag;
      obj6.dragHandlePressableProps = tmp21;
      obj6.trailing = tmp20;
      obj6.arrow = flag2;
      if (isEveryoneRole) {
        const obj7 = { style: tmp2.everyone, children: callback(arg1(dependencyMap[23]).GroupIcon, {}) };
        let obj8 = obj7;
      } else {
        obj8 = { children: roleIcon };
      }
      obj6.icon = callback(View, obj8);
      const obj9 = { style: tmp2.row };
      const obj10 = { borderRadius: "<string:962072674>", flex: "<string:996425668>", Promise: "<string:2542620639>", marginTop: "<string:3040952294>", style: tmp2.label, children: role.name };
      const items2 = [callback(arg1(dependencyMap[7]).Text, obj10), , ];
      const tags2 = role.tags;
      let prop;
      if (null != tags2) {
        prop = tags2.subscription_listing_id;
      }
      let tmp59 = null;
      if (null != prop) {
        const obj11 = { size: arg1(dependencyMap[24]).Icon.Sizes.REFRESH_SMALL_16, source: importDefault(dependencyMap[25]) };
        const intl6 = arg1(dependencyMap[11]).intl;
        obj11.aria-label = intl6.string(arg1(dependencyMap[11]).t.a2Ak8b);
        obj11.style = tmp2.sparkleIcon;
        tmp59 = callback(arg1(dependencyMap[24]).Icon, obj11);
      }
      items2[1] = tmp59;
      let tmp64 = null;
      if (locked) {
        tmp64 = callback(arg1(dependencyMap[26]).LockIcon, { flexDirection: "png", alignItems: true });
      }
      items2[2] = tmp64;
      obj9.children = items2;
      obj6.label = callback2(View, obj9);
      const intl7 = arg1(dependencyMap[11]).intl;
      if (isEveryoneRole) {
        let stringResult = intl7.string(tmp68(tmp69[11]).t.72gF3G);
      } else {
        const obj12 = {};
        const _HermesInternal = HermesInternal;
        obj12.count = "" + numMembers;
        stringResult = intl7.formatToPlainString(tmp68(tmp69[11]).t.AWmdd9, obj12);
      }
      obj6.subLabel = stringResult;
      obj6.start = isFirstRole;
      obj6.end = isLastRole;
      return callback(arg1(dependencyMap[22]).TableRow, obj6);
    } else {
      const tags3 = role.tags;
      let guild_connections1;
      if (null != tags3) {
        guild_connections1 = tags3.guild_connections;
      }
      if (null === guild_connections1) {
        const obj13 = { size: 32, guildId, role };
        let tmp28Result = callback(importDefault(dependencyMap[17]), obj13);
      } else {
        if (tmp) {
          if (null != role.colors) {
            if (null != role.colors.secondary_color) {
              const obj14 = { style: tmp2.container };
              const obj15 = {};
              const items3 = [role.colors.primary_color, role.colors.secondary_color, role.colors.tertiary_color];
              const found = items3.filter(arg1(dependencyMap[19]).isNotNullish);
              obj15.colors = found.map((color) => role(onMoveUp[20]).int2hex(color));
              obj15.start = { "Null": false, "Null": true };
              obj15.end = { "Null": null, "Null": null };
              obj15.style = tmp2.gradient;
              const items4 = [callback(importDefault(dependencyMap[18]), obj15), ];
              const obj16 = { size: "md", style: tmp2.image };
              items4[1] = callback(arg1(dependencyMap[21]).ShieldUserIcon, obj16);
              obj14.children = items4;
              tmp28Result = callback2(View, obj14);
              const tmp39 = importDefault(dependencyMap[18]);
            }
          }
        }
        const obj17 = {};
        const items5 = [tmp2.container, ];
        const obj18 = { backgroundColor: null != role.colorString ? role.colorString : DEFAULT_ROLE_COLOR_HEX };
        items5[1] = obj18;
        obj17.style = items5;
        const obj19 = { size: "md", style: tmp2.image };
        obj17.children = callback(arg1(dependencyMap[21]).ShieldUserIcon, obj19);
        tmp28Result = callback(View, obj17);
        const tmp28 = callback;
        const tmp29 = View;
      }
    }
  }
  flag = false;
  flag2 = false;
  if (!sorting) {
    flag2 = true;
    flag = false;
  }
});
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleItem.tsx");

export default memoResult;
