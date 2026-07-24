// Module ID: 15560
// Function ID: 119930
// Name: ChannelSettingsPermissionsOverrides
// Dependencies: [57, 5, 31, 27, 1391, 1348, 1910, 1838, 3758, 3767, 1849, 653, 33, 4130, 689, 1456, 1557, 566, 3763, 483, 8459, 4140, 1881, 3969, 4470, 1212, 3827, 1920, 1356, 15561, 9158, 4126, 4320, 10209, 5165, 5501, 15565, 15566, 2]
// Exports: default

// Module 15560 (ChannelSettingsPermissionsOverrides)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import Text from "Text";
import get_ActivityIndicator from "wrapURL";
import { isGuildOwner } from "isGuildOwner";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_createForOfIteratorHelperLoose";
import closure_12 from "_createForOfIteratorHelperLoose";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "memoResult1";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_7;
let closure_8;
const require = arg1;
({ View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
({ PermissionOverrideType: closure_16, HelpdeskArticles: closure_17, Permissions: closure_18 } = ME);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.containerContent = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
let obj1 = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.section = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("result").fileFinishedImporting("components_native/channel_settings/ChannelSettingsPermissionsOverrides.tsx");

export default function ChannelSettingsPermissionsOverrides(fromCreate) {
  let id;
  let require;
  ({ channelId: require, id } = fromCreate);
  fromCreate = fromCreate.fromCreate;
  let React;
  let tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  let obj = require(1456) /* useNavigation */;
  const navigation = obj.useNavigation();
  let obj1 = require(566) /* initialize */;
  const items = [closure_10];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_10.getChannel(closure_0));
  const items1 = [stateFromStores, id];
  React = React.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = stateFromStores(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items1);
  const items2 = [stateFromStores];
  let closure_7 = React.useCallback((VIEW_CHANNEL) => {
    const guild = outer1_12.getGuild(stateFromStores.guild_id);
    const currentUser = outer1_15.getCurrentUser();
    if (null != guild) {
      if (null != currentUser) {
        let canResult = first(guild, currentUser);
        if (!canResult) {
          canResult = outer1_13.can(outer1_18.ADMINISTRATOR, guild);
        }
        if (!canResult) {
          canResult = outer1_13.can(outer1_18.MANAGE_ROLES, stateFromStores, undefined, undefined, true);
        }
        if (stateFromStores.isGuildStageVoice()) {
          const STAGE_CHANNEL_DISABLED_PERMISSIONS = outer1_0(tmp[28]).STAGE_CHANNEL_DISABLED_PERMISSIONS;
          if (STAGE_CHANNEL_DISABLED_PERMISSIONS.has(VIEW_CHANNEL)) {
            const intl2 = outer1_0(tmp[25]).intl;
            let stringResult = intl2.string(outer1_0(tmp[25]).t.bTS5lf);
          }
          return stringResult;
        }
        stringResult = VIEW_CHANNEL === outer1_18.MANAGE_ROLES && !canResult;
        if (!stringResult) {
          let tmp15 = null != VIEW_CHANNEL;
          if (tmp15) {
            tmp15 = !outer1_13.can(VIEW_CHANNEL, guild);
          }
          if (tmp15) {
            tmp15 = !canResult;
          }
          stringResult = tmp15;
        }
        if (stringResult) {
          const intl = outer1_0(tmp[25]).intl;
          stringResult = intl.string(outer1_0(tmp[25]).t.nOtPMM);
        }
      }
    }
    return false;
  }, items2);
  const items3 = [stateFromStores, id];
  let closure_8 = React.useCallback((arg0) => {
    let allow;
    if (null != stateFromStores.permissionOverwrites[id]) {
      allow = tmp.allow;
    }
    if (obj.has(allow, arg0)) {
      let ALLOW = outer1_0(tmp[18]).ALLOW;
    } else {
      let deny;
      if (null != tmp) {
        deny = tmp.deny;
      }
      const hasItem = fromCreate(tmp[19]).has(deny, arg0);
      const tmp9 = outer1_0(tmp[18]);
      ALLOW = hasItem ? tmp9.DENY : tmp9.PASSTHROUGH;
      const obj2 = fromCreate(tmp[19]);
    }
    return ALLOW;
  }, items3);
  const first = navigation(React.useState(() => id(tmp[29]).generateChannelPermissionSpec(stateFromStores.guild_id, stateFromStores, id === stateFromStores.guild_id)), 2)[0];
  const items4 = [fromCreate, navigation];
  const effect = React.useEffect(() => {
    if (fromCreate) {
      let obj = {
        headerRight() {
            const obj = {
              onPress() {
                outer2_4.pop();
              }
            };
            const intl = outer2_0(1212).intl;
            obj.label = intl.string(outer2_0(1212).t.i4jeWR);
            return outer2_19(outer2_0(9158).HeaderTextButton, obj);
          }
      };
      navigation.setOptions(obj);
    }
  }, items4);
  obj = { variant: "text-md/medium", color: "text-muted" };
  let obj3 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
  obj.children = obj3.computeChannelName(stateFromStores, closure_15, closure_14, true);
  const tmp6 = callback(require(4126) /* Text */.Text, obj);
  if (fromCreate.type === constants.MEMBER) {
    obj = { userId: id, guildId: stateFromStores.guild_id, start: true, end: true, trailing: tmp6 };
    let tmp7Result = callback(id(10209), obj);
  } else {
    obj1 = { end: true, label: null, start: true };
    role = role.getRole(stateFromStores.guild_id, id);
    let name;
    if (null != role) {
      name = role.name;
    }
    let str = "";
    if (null != name) {
      str = name;
    }
    obj1.label = str;
    obj1.trailing = tmp6;
    tmp7Result = callback(require(5165) /* TableRowInner */.TableRow, obj1);
    const tmp7 = callback;
  }
  let obj2 = { style: tmp.container, contentContainerStyle: items5 };
  items5 = [tmp.containerContent, { paddingBottom: tmp.containerContent.paddingBottom + id(1557)().bottom }];
  obj3 = { style: tmp.section, children: tmp7Result };
  const items6 = [
    callback(closure_7, obj3),
    first.map((permissions) => {
      permissions = permissions.permissions;
      let obj = { style: tmp.section };
      obj = {};
      let title;
      if (first.length > 1) {
        title = permissions.title;
      }
      obj.title = title;
      obj.hasIcons = false;
      obj.children = permissions.map((flag) => {
        let description;
        let title;
        flag = flag.flag;
        ({ title, description } = flag);
        const tmp = outer1_7(flag);
        let obj = { variant: "text-xs/medium", color: "text-subtle", children: outer2_0(15565).renderDescription(description) };
        const obj2 = outer2_0(15565);
        const tmp2 = null != tmp && tmp;
        obj = { disabled: tmp4, label: title, subLabel: outer2_19(outer2_0(4126).Text, obj) };
        obj = {};
        const tmp3 = outer2_19(outer2_0(4126).Text, obj);
        obj.value = outer1_8(flag);
        obj.disabled = false !== tmp2;
        obj.onValueChange = function onValueChange(arg0) {
          outer2_6(flag, arg0);
        };
        obj.trailing = outer2_19(id(15566), obj);
        return outer2_19(outer2_0(5165).TableRow, obj, "row-" + arg1);
      });
      obj.children = outer1_19(outer1_0(outer1_19[35]).TableRowGroup, obj);
      return outer1_19(closure_7, obj, "section-" + arg1);
    })
  ];
  obj2.children = items6;
  return callback2(closure_8, obj2);
};
