// Module ID: 16364
// Function ID: 127599
// Dependencies: [5, 31, 27, 653, 33, 4130, 689, 4126, 4571, 5486, 4471, 1212, 10031, 5048, 4561, 7533, 4089, 5506, 4554, 1327, 665, 8466, 5165, 4646, 1273, 9392, 4652, 2]

// Module 16364
import closure_3 from "_createForOfIteratorHelperLoose";
import importAllResult from "result";
import get_ActivityIndicator from "set";
import { DEFAULT_ROLE_COLOR_HEX } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
let View = get_ActivityIndicator.View;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = { row: { flexDirection: "row", gap: 4, alignItems: "center" } };
obj = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderRadius: 20, padding: 8 };
let num = 20;
obj.everyone = obj;
_createForOfIteratorHelperLoose = {};
text_md_semibold = require("Text").TextStyleSheet["text-md/semibold"];
let lineHeight;
if (null != text_md_semibold) {
  lineHeight = text_md_semibold.lineHeight;
}
if (null != lineHeight) {
  num = lineHeight;
}
_createForOfIteratorHelperLoose.lineHeight = num + 1;
obj.label = _createForOfIteratorHelperLoose;
obj.sparkleIcon = { tintColor: require("_createForOfIteratorHelperLoose").colors.ICON_MUTED };
let obj3 = { width: 32, height: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" };
obj.container = obj3;
let merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj.gradient = {};
obj.image = { tintColor: "white" };
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj2 = { tintColor: require("_createForOfIteratorHelperLoose").colors.ICON_MUTED };
let obj4 = {};
const memoResult = importAllResult.memo(function GuildSettingsRoleItem(guildId) {
  let importDefault;
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
  ({ sorting, locked, onPress: importDefault, onMoveUp } = guildId);
  const onMoveDown = guildId.onMoveDown;
  ({ sortHandlers, isEveryoneRole, guildId } = guildId);
  ({ onLongPress, numMembers, isLastRole, isFirstRole } = guildId);
  let obj = role(onMoveUp[9]);
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
    let intl = role(onMoveUp[11]).intl;
    obj.label = intl.string(role(onMoveUp[11]).t.Yl8E4h);
    items.push(obj);
  }
  if (null != onMoveDown) {
    const obj1 = { name: "movedown" };
    let intl2 = role(onMoveUp[11]).intl;
    obj1.label = intl2.string(role(onMoveUp[11]).t["5PbXSy"]);
    items.push(obj1);
  }
  const items1 = [onMoveUp, onMoveDown];
  if (sorting) {
    if (!locked) {
      const obj2 = { accessibilityRole: "button" };
      let intl3 = role(onMoveUp[11]).intl;
      obj2.accessibilityLabel = intl3.string(role(onMoveUp[11]).t["0dOFq+"]);
      let intl4 = role(onMoveUp[11]).intl;
      obj2.accessibilityHint = intl4.string(role(onMoveUp[11]).t.BGMUFB);
      obj2.accessibilityActions = items;
      obj2.onAccessibilityAction = tmp12;
      obj2.delayLongPress = 100;
      obj2.activeOpacity = 0.8;
      obj2.hitSlop = importDefault(onMoveUp[6]).space.PX_4;
      const merged = Object.assign(sortHandlers);
      let tmp21 = obj2;
      let flag = true;
      let flag2 = false;
      if (!tmp19) {
        const obj3 = {};
        const obj4 = { size: "xs", color: importDefault(onMoveUp[6]).colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT };
        obj3.icon = callback(role(onMoveUp[16]).TrashIcon, obj4);
        const intl5 = role(onMoveUp[11]).intl;
        const obj5 = { name: role.name };
        obj3.accessibilityLabel = intl5.formatToPlainString(role(onMoveUp[11]).t.FiMFTZ, obj5);
        obj3.size = "sm";
        obj3.variant = "destructive";
        obj3.onPress = function handleDeleteRow() {
          let obj = outer1_1(onMoveUp[10]);
          obj = {};
          const intl = role(onMoveUp[11]).intl;
          obj = { name: name.name };
          obj.title = intl.formatToPlainString(role(onMoveUp[11]).t.FiMFTZ, obj);
          const intl2 = role(onMoveUp[11]).intl;
          obj.body = intl2.string(role(onMoveUp[11]).t.qALKny);
          const intl3 = role(onMoveUp[11]).intl;
          obj.cancelText = intl3.string(role(onMoveUp[11]).t.gm1Vej);
          const intl4 = role(onMoveUp[11]).intl;
          obj.confirmText = intl4.string(role(onMoveUp[11]).t.p89ACt);
          // CreateGeneratorClosureLongIndex (0x67)
          name = onMoveDown(tmp);
          obj.onConfirm = function() {
            return callback(...arguments);
          };
          obj.confirmColor = outer1_1(onMoveUp[14]).Colors.RED;
          obj.show(obj);
        };
        tmp21 = obj2;
        flag = true;
        flag2 = false;
        const tmp20 = callback(role(onMoveUp[15]).IconButton, obj3);
      }
      tmp19 = role.managed && !tmp5;
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
        const obj7 = { style: tmp2.everyone, children: callback(role(onMoveUp[23]).GroupIcon, {}) };
        let obj8 = obj7;
      } else {
        obj8 = { children: roleIcon };
      }
      obj6.icon = callback(View, obj8);
      const obj9 = { style: tmp2.row };
      const obj10 = { lineClamp: 1, style: tmp2.label, variant: "text-md/semibold", color: "interactive-text-active", children: role.name };
      const items2 = [callback(role(onMoveUp[7]).Text, obj10), , ];
      const tags2 = role.tags;
      let prop;
      if (null != tags2) {
        prop = tags2.subscription_listing_id;
      }
      let tmp59 = null;
      if (null != prop) {
        const obj11 = { size: role(onMoveUp[24]).Icon.Sizes.REFRESH_SMALL_16, source: importDefault(onMoveUp[25]) };
        const intl6 = role(onMoveUp[11]).intl;
        obj11["aria-label"] = intl6.string(role(onMoveUp[11]).t.a2Ak8b);
        obj11.style = tmp2.sparkleIcon;
        tmp59 = callback(role(onMoveUp[24]).Icon, obj11);
      }
      items2[1] = tmp59;
      let tmp64 = null;
      if (locked) {
        tmp64 = callback(role(onMoveUp[26]).LockIcon, { size: "xxs", color: "icon-subtle" });
      }
      items2[2] = tmp64;
      obj9.children = items2;
      obj6.label = callback2(View, obj9);
      const intl7 = role(onMoveUp[11]).intl;
      if (isEveryoneRole) {
        let stringResult = intl7.string(tmp68(tmp69[11]).t["72gF3G"]);
      } else {
        const obj12 = {};
        const _HermesInternal = HermesInternal;
        obj12.count = "" + numMembers;
        stringResult = intl7.formatToPlainString(tmp68(tmp69[11]).t.AWmdd9, obj12);
      }
      obj6.subLabel = stringResult;
      obj6.start = isFirstRole;
      obj6.end = isLastRole;
      return callback(role(onMoveUp[22]).TableRow, obj6);
    } else {
      const tags3 = role.tags;
      let guild_connections1;
      if (null != tags3) {
        guild_connections1 = tags3.guild_connections;
      }
      if (null === guild_connections1) {
        const obj13 = { size: 32, guildId, role };
        let tmp28Result = callback(importDefault(onMoveUp[17]), obj13);
      } else {
        if (tmp) {
          if (null != role.colors) {
            if (null != role.colors.secondary_color) {
              const obj14 = { style: tmp2.container };
              const obj15 = {};
              const items3 = [role.colors.primary_color, role.colors.secondary_color, role.colors.tertiary_color];
              const found = items3.filter(role(onMoveUp[19]).isNotNullish);
              obj15.colors = found.map((color) => role(onMoveUp[20]).int2hex(color));
              obj15.start = { x: 0, y: 0 };
              obj15.end = { x: 1, y: 0 };
              obj15.style = tmp2.gradient;
              const items4 = [callback(importDefault(onMoveUp[18]), obj15), ];
              const obj16 = { size: "md", style: tmp2.image };
              items4[1] = callback(role(onMoveUp[21]).ShieldUserIcon, obj16);
              obj14.children = items4;
              tmp28Result = callback2(View, obj14);
              const tmp39 = importDefault(onMoveUp[18]);
            }
          }
        }
        const obj17 = {};
        const items5 = [tmp2.container, ];
        const obj18 = { backgroundColor: null != role.colorString ? role.colorString : DEFAULT_ROLE_COLOR_HEX };
        items5[1] = obj18;
        obj17.style = items5;
        const obj19 = { size: "md", style: tmp2.image };
        obj17.children = callback(role(onMoveUp[21]).ShieldUserIcon, obj19);
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
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleItem.tsx");

export default memoResult;
