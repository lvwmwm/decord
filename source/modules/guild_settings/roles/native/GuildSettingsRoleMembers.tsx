// Module ID: 16377
// Function ID: 127750
// Name: onMembersLoadFail
// Dependencies: [57, 31, 27, 5149, 653, 33, 4130, 689, 3831, 9212, 1212, 16356, 5687, 566, 4470, 8482, 1273, 675, 4098, 16357, 1934, 10209, 7533, 5776, 5772, 4086, 4126, 5165, 11283, 2]
// Exports: default

// Module 16377 (onMembersLoadFail)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "TableRowInner";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
function onMembersLoadFail() {
  let obj = importDefault(3831);
  obj = { key: "ERROR_OCCURRED_TRY_AGAIN", icon: importDefault(9212) };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = intl.string(require(1212) /* getSystemLocale */.t.fEptJP);
  obj.open(obj);
}
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12, flex: 1 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.containerSearchBar = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_12 };
let obj1 = { paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.missingMembers = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_INFO, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_INFO, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, padding: require("_createForOfIteratorHelperLoose").space.PX_8, flexDirection: "row", alignItems: "center" };
let obj2 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_INFO, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_INFO, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, padding: require("_createForOfIteratorHelperLoose").space.PX_8, flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.missingMembersText = { marginLeft: require("_createForOfIteratorHelperLoose").space.PX_8, flex: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { marginLeft: require("_createForOfIteratorHelperLoose").space.PX_8, flex: 1 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleMembers.tsx");

export default function GuildSettingsRoleMembers(guild) {
  guild = guild.guild;
  const role = guild.role;
  const locked = guild.locked;
  const tmp = _createForOfIteratorHelperLoose();
  let tmp2 = formatted(found.useState(""), 2);
  formatted = tmp2[0].trim().toLowerCase();
  let obj = guild(locked[11]);
  const queryGuildMembers = obj.useQueryGuildMembers(guild.id, formatted);
  let obj1 = guild(locked[11]);
  const guildRoleMembers = obj1.useGuildRoleMembers(guild.id, role.id, onMembersLoadFail);
  found = guildRoleMembers.filter((name) => {
    const formatted = name.name.toLowerCase();
    return formatted.includes(formatted);
  });
  let obj2 = guild(locked[12]);
  obj = { [guild.id]: guildRoleMembers.map((id) => id.id) };
  const subscribeGuildMembers = obj2.useSubscribeGuildMembers(obj, "GuildSettingsRoleMembers");
  let obj4 = guild(locked[13]);
  let items = [_isNativeReflectConstruct];
  const items1 = [guild.id, role.id];
  const items2 = [guild.id, , ];
  ({ id: arr5[1], name: arr5[2] } = role);
  const str = tmp2[0];
  const str2 = tmp2[0].trim();
  const callback = found.useCallback((name, arr) => {
    let closure_0 = name;
    const found = arr.filter((arg0) => arg0 !== found.id);
    if (found.length !== arr.length) {
      let obj = role(locked[14]);
      obj = {};
      let intl = guild(locked[10]).intl;
      obj.title = intl.string(guild(locked[10]).t["7sFNfW"]);
      const intl2 = guild(locked[10]).intl;
      obj = { username: name.name, roleName: found.name };
      obj.body = intl2.format(guild(locked[10]).t.scORUv, obj);
      const intl3 = guild(locked[10]).intl;
      obj.cancelText = intl3.string(guild(locked[10]).t["ETE/oC"]);
      const intl4 = guild(locked[10]).intl;
      obj.confirmText = intl4.string(guild(locked[10]).t.N86XcP);
      obj.onConfirm = function onConfirm() {
        const items = [found.id];
        let obj = role(locked[15]);
        role(locked[15]).updateMemberRoles(name.id, name.id, found, [], items).catch(() => {
          let obj = role(locked[8]);
          obj = { key: "ERROR_OCCURRED_TRY_AGAIN" };
          const intl = guild(locked[10]).intl;
          obj.content = intl.string(guild(locked[10]).t.fEptJP);
          obj.icon = role(locked[9]);
          obj.open(obj);
        });
      };
      obj.hideActionSheet = false;
      obj.confirmColor = guild(locked[16]).ButtonColors.RED;
      obj.show(obj);
    }
  }, items2);
  const items3 = [guild, role];
  const items4 = [callback, guild.id, locked, found];
  const callback1 = found.useCallback(() => {
    let obj = role(locked[17]);
    obj.track(outer1_7.OPEN_POPOUT, { type: "Add Role Members", location_page: "Role Settings", location_section: "Members" });
    const obj2 = role(locked[18]);
    obj = { guild, role };
    obj2.openLazy(guild(locked[20])(locked[19], locked.paths), "role-add-members-" + guild.id + "-" + role.id, obj);
  }, items3);
  _isNativeReflectConstruct = found.useCallback((item) => {
    item = item.item;
    const index = item.index;
    let obj = { end: index === found.length - 1 };
    let tmp3 = 0 === index;
    if (tmp3) {
      tmp3 = locked;
    }
    obj.start = tmp3;
    obj.guildId = item.id;
    obj.userId = item.user.id;
    let tmp4 = null;
    if (!locked) {
      obj = { icon: outer1_8(guild(locked[23]).CircleXIcon, {}) };
      const intl = guild(locked[10]).intl;
      obj.accessibilityLabel = intl.string(guild(locked[10]).t["7sFNfW"]);
      obj.accessibilityRole = "button";
      obj.onPress = function onPress() {
        return outer1_5(item, item.roles);
      };
      obj.variant = "icon-only";
      tmp4 = outer1_8(guild(locked[22]).IconButton, obj);
    }
    obj.trailing = tmp4;
    return outer1_8(role(locked[21]), obj, item.id);
  }, items4);
  obj = { style: tmp.container };
  obj1 = { style: tmp.containerSearchBar, children: callback(guild(locked[24]).SearchField, { onChange: tmp2[1] }) };
  const items5 = [callback(callback, obj1), ];
  obj2 = { style: guild.contentContainerStyle };
  let tmp11 = null;
  if (tmp6) {
    const obj3 = { style: tmp.missingMembers };
    obj4 = { color: role(locked[7]).colors.TEXT_LINK, size: "md" };
    const items6 = [callback(guild(locked[25]).CircleInformationIcon, obj4), ];
    const obj5 = { style: tmp.missingMembersText, variant: "text-sm/medium" };
    let intl = guild(locked[10]).intl;
    obj5.children = intl.string(guild(locked[10]).t.RQxHZ8);
    items6[1] = callback(guild(locked[26]).Text, obj5);
    obj3.children = items6;
    tmp11 = callback2(callback, obj3);
  }
  const items7 = [tmp11, , ];
  let tmp18 = null;
  if (!locked) {
    const obj6 = { arrow: true };
    let intl2 = guild(locked[10]).intl;
    obj6.label = intl2.string(guild(locked[10]).t.ZYOK46);
    const obj7 = { size: "md" };
    obj6.icon = callback(guild(locked[28]).CirclePlusIcon, obj7);
    obj6.onPress = callback1;
    obj6.start = true;
    obj6.end = 0 === found.length;
    tmp18 = callback(guild(locked[27]).TableRow, obj6);
  }
  items7[1] = tmp18;
  items7[2] = found.map((item, index) => roleMemberCount({ item, index }));
  obj2.children = items7;
  items5[1] = callback2(callback, obj2);
  obj.children = items5;
  return callback2(callback, obj);
};
