// Module ID: 10991
// Function ID: 85423
// Name: PopoutCheck
// Dependencies: [57, 31, 27, 1857, 1194, 1917, 1910, 1838, 10992, 4940, 653, 33, 4130, 689, 1212, 4939, 4082, 4126, 4066, 22, 3834, 4814, 10019, 8568, 1273, 1392, 3976, 44, 5462, 5482, 566, 675, 4324, 5048, 5187, 5506, 4543, 4098, 10022, 8537, 2]
// Exports: default

// Module 10991 (PopoutCheck)
import _slicedToArray from "_slicedToArray";
import expandLocation from "expandLocation";
import get_ActivityIndicator from "invariant";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_createForOfIteratorHelperLoose";
import closure_11 from "_createForOfIteratorHelperLoose";
import closure_12 from "_isNativeReflectConstruct";
import { OperatorTypes } from "OperatorTypes";
import ME from "ME";
import jsxProd from "showTooManyUserGuildsAlert";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_5;
let closure_6;
const require = arg1;
function PopoutCheck(arg0) {
  let connectionMetadataField;
  let connectionType;
  let description;
  let operator;
  let value;
  ({ operator, value, description } = arg0);
  ({ connectionType, connectionMetadataField } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  if (null != description) {
    if (OperatorTypes.LESS_THAN === operator) {
      const intl = require(1212) /* getSystemLocale */.intl;
      let obj = { description };
      const _Math = Math;
      const _Number = Number;
      obj.count = Math.max(0, Number(value) - 1);
      let formatResult = intl.format(require(1212) /* getSystemLocale */.t["2p7dA3"], obj);
    } else {
      formatResult = description;
      if (OperatorTypes.GREATER_THAN === operator) {
        const intl2 = require(1212) /* getSystemLocale */.intl;
        obj = { description };
        const _Math2 = Math;
        const _Number2 = Number;
        obj.count = Math.max(0, Number(value) + 1);
        formatResult = intl2.format(require(1212) /* getSystemLocale */.t["2p7dA3"], obj);
      }
    }
  } else {
    obj = require(4939) /* officialApplicationIds */;
    const obj1 = { connectionType, connectionMetadataField, operator, value };
    formatResult = obj.getConnectionsCheckText(obj1);
  }
  let tmp9 = null;
  if (null != formatResult) {
    const obj2 = { style: tmp.popoutCheck };
    const obj3 = { size: "sm", style: tmp.popoutCheckIcon };
    const items = [callback(require(4082) /* CheckmarkLargeIcon */.CheckmarkLargeIcon, obj3), ];
    const obj4 = { variant: "text-xs/medium", color: "mobile-text-heading-primary", children: formatResult };
    items[1] = callback(require(4126) /* Text */.Text, obj4);
    obj2.children = items;
    tmp9 = callback2(closure_6, obj2);
  }
  return tmp9;
}
class PopoutChecks {
  constructor(arg0) {
    guildId = global.guildId;
    closure_1 = jsxs();
    c2 = require("useTheme")();
    obj = require("apply");
    groupByResult = obj.groupBy(global.eligibilityStates, (application_id) => {
      let str = "";
      if (null != application_id.application_id) {
        const _HermesInternal = HermesInternal;
        str = ":" + application_id.application_id;
      }
      return "" + application_id.connection_type + str;
    });
    _slicedToArray = groupByResult;
    keys = Object.keys(groupByResult);
    c4 = keys.length - 1;
    obj2 = require("map");
    GREEN_330 = obj2.useToken(require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_330);
    obj = {
      children: keys.map((arg0, arg1) => {
            const found = arr.filter((operator) => null != operator.operator);
            const found1 = arr.find((application) => null != application.application);
            let obj = lib(4814);
            const value = obj.get(arg0);
            let application;
            if (null != found1) {
              application = found1.application;
            }
            let bot;
            if (null != application) {
              bot = application.bot;
            }
            let tmp5 = null;
            if (null != bot) {
              const prototype = outer1_7.prototype;
              tmp5 = new outer1_7(application.bot);
            }
            const officialApplicationIds = guildId(4939).officialApplicationIds;
            let id;
            if (null != application) {
              id = application.id;
            }
            let str = "";
            if (null != id) {
              str = id;
            }
            if (officialApplicationIds.includes(str)) {
              obj = { style: lib.botTag, guildId, roleColor: closure_5, size: 16 };
              let tmp10 = outer1_16(lib(10019), obj);
            } else if (null != tmp5) {
              obj = { style: lib.botTag, verified: false };
              tmp10 = outer1_16(lib(8568), obj);
            }
            const obj1 = {};
            const items = [lib.popoutChecksGroup, ];
            let prop = null;
            if (arg1 < expandLocation) {
              prop = lib.popoutChecksGroupBottomMargin;
            }
            items[1] = prop;
            obj1.style = items;
            const obj2 = { style: lib.popoutCheckGroupName };
            if (null == value) {
              const items1 = [null, , , ];
              let tmp35 = null;
              if (null != tmp5) {
                const obj3 = { style: lib.popoutCheckGroupPlatformIcon, user: tmp5, size: guildId(1273).AvatarSizes.XSMALL, guildId: undefined };
                tmp35 = outer1_16(guildId(1273).Avatar, obj3);
              }
              items1[1] = tmp35;
              const obj4 = { variant: "text-sm/medium", color: "interactive-text-active" };
              let name;
              if (null != value) {
                name = value.name;
              }
              if (null == name) {
                let name1;
                if (null != application) {
                  name1 = application.name;
                }
                name = name1;
              }
              obj4.children = name;
              items1[2] = outer1_16(guildId(4126).Text, obj4);
              items1[3] = tmp10;
              obj2.children = items1;
              const items2 = [
                tmp25(tmp26, obj2),
                found.map((description) => {
                    let connection_metadata_field;
                    let connection_type;
                    let operator;
                    let value;
                    ({ connection_type, connection_metadata_field, operator, value } = description);
                    callback(44)(null != connectionMetadataField, "connectionMetadataField is null");
                    callback(44)(null != operator, "operator is null");
                    callback(44)(null != value, "value is null");
                    return outer2_16(outer2_20, { connectionType, connectionMetadataField, operator, value, description: description.description }, "" + connectionType + ":" + connectionMetadataField + ":" + operator + ":" + value);
                  })
              ];
              obj1.children = items2;
              return outer1_17(outer1_6, obj1, arg0);
            } else {
              const obj5 = { style: lib.popoutCheckGroupPlatformIcon };
              let makeSource = guildId(1392).makeSource;
              const tmp27 = outer1_16;
              const tmp31 = guildId(1392);
              const icon = value.icon;
              obj5.source = makeSource(guildId(3976).isThemeDark(dependencyMap) ? icon.darkPNG : icon.lightPNG);
              obj5.disableColor = true;
              makeSource = guildId;
              obj5.size = guildId(1273).Icon.Sizes.MEDIUM;
              tmp27(guildId(1273).Icon, obj5);
              const obj7 = guildId(3976);
            }
          })
    };
    return jsx(Fragment, obj);
  }
}
({ ActivityIndicator: closure_5, View: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: closure_14, EMPTY_STRING_SNOWFLAKE_ID: closure_15 } = ME);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flexDirection: "column", alignItems: "center", padding: 16 } };
_createForOfIteratorHelperLoose = { width: "100%", flexDirection: "row", alignItems: "center", paddingBottom: 16, borderBottomWidth: 1, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.header = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.verifiedContainer = { marginRight: 8, height: 24, width: 24 };
_createForOfIteratorHelperLoose.headerTextContainer = { flexShrink: 1, flexDirection: "column" };
_createForOfIteratorHelperLoose.verifiedCheck = { position: "absolute", left: 0, top: 0 };
_createForOfIteratorHelperLoose.loadingSpinner = { marginVertical: 40 };
_createForOfIteratorHelperLoose.popoutCheck = { flexDirection: "row", alignItems: "center", marginTop: 8, marginLeft: 32, paddingRight: 20 };
_createForOfIteratorHelperLoose.popoutCheckIcon = { marginRight: 8, tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_POSITIVE };
_createForOfIteratorHelperLoose.popoutChecksGroup = { width: "100%", marginBottom: 24 };
let obj2 = { paddingBottom: 12, borderBottomWidth: 1, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginBottom: 12 };
_createForOfIteratorHelperLoose.popoutChecksGroupBottomMargin = obj2;
_createForOfIteratorHelperLoose.popoutCheckGroupName = { flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.popoutCheckGroupPlatformIcon = { marginRight: 8 };
_createForOfIteratorHelperLoose.button = { marginBottom: 8 };
_createForOfIteratorHelperLoose.botTag = { marginLeft: 4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { marginRight: 8, tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_POSITIVE };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/connections/native/ConnectionsRoleMessageBadgeActionSheet.tsx");

export default function ConnectionsRoleMessageBadgeActionSheet(userId) {
  userId = userId.userId;
  const roleId = userId.roleId;
  const channelId = userId.channelId;
  const guildId = userId.guildId;
  let tmp = _createForOfIteratorHelperLoose();
  const analyticsLocations = roleId(channelId[28])(roleId(channelId[29]).CONNECTIONS_ROLE_POPOUT).analyticsLocations;
  let obj = userId(channelId[30]);
  const items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_11.getGuild(guildId));
  let obj1 = userId(channelId[30]);
  const items1 = [first];
  let closure_6 = obj1.useStateFromStores(items1, () => first.getId());
  let obj2 = userId(channelId[30]);
  const items2 = [closure_9];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => member.getMember(guildId, closure_6));
  let obj3 = userId(channelId[30]);
  const items3 = [closure_12];
  const stateFromStores2 = obj3.useStateFromStores(items3, () => outer1_12.getGuildRoleConnectionEligibility(roleId));
  const tmp5 = guildId(analyticsLocations.useState(null == stateFromStores2), 2);
  first = tmp5[0];
  closure_9 = tmp5[1];
  if (null != stateFromStores1) {
    const roles = stateFromStores1.roles;
    const hasItem = roles.includes(roleId);
  }
  const items4 = [userId, roleId, channelId, guildId];
  const effect = analyticsLocations.useEffect(() => {
    let obj = roleId(channelId[31]);
    obj = { other_user_id: userId, role_id: roleId };
    const merged = Object.assign(userId(channelId[32]).collectChannelAnalyticsMetadataFromId(channelId));
    const obj3 = userId(channelId[32]);
    const merged1 = Object.assign(userId(channelId[32]).collectGuildAnalyticsMetadata(guildId));
    obj.track(outer1_14.PASSPORT_ROLE_POPOUT_VIEWED, obj);
  }, items4);
  const items5 = [guildId, roleId, first, stateFromStores2];
  const effect1 = analyticsLocations.useEffect(() => {
    let tmp = first;
    if (first) {
      tmp = null == stateFromStores2;
    }
    if (tmp) {
      const guildRoleConnectionsEligibility = roleId(channelId[33]).fetchGuildRoleConnectionsEligibility(guildId, roleId);
      guildRoleConnectionsEligibility.then(() => outer1_9(false));
      const obj = roleId(channelId[33]);
    }
  }, items5);
  if (null != stateFromStores2) {
    const flatResult = stateFromStores2.flat();
    const someResult = stateFromStores2.flat().some((application_id) => undefined === application_id.application_id);
  }
  let obj5 = userId(channelId[30]);
  const items6 = [closure_10];
  const stateFromStores3 = obj5.useStateFromStores(items6, () => {
    let role;
    if (null != stateFromStores) {
      role = outer1_10.getRole(stateFromStores.id, roleId);
    }
    return role;
  });
  if (null != stateFromStores2) {
    if (1 === stateFromStores2.length) {
      obj = { value: analyticsLocations };
      obj = {};
      obj1 = { style: tmp.container };
      obj2 = { style: tmp.header };
      obj3 = { style: tmp.verifiedContainer };
      const obj4 = { style: tmp.verifiedCheck };
      let id;
      if (null != stateFromStores) {
        id = stateFromStores.id;
      }
      if (null == id) {
        id = closure_15;
      }
      obj4.guildId = id;
      let tmp31;
      if (null != stateFromStores3) {
        tmp31 = stateFromStores3;
      }
      obj4.role = tmp31;
      obj4.size = 24;
      obj3.children = callback(roleId(channelId[35]), obj4);
      const items7 = [callback(closure_6, obj3), ];
      obj5 = { style: tmp.headerTextContainer };
      const obj6 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary" };
      let name;
      if (null != stateFromStores3) {
        name = stateFromStores3.name;
      }
      obj6.children = name;
      const items8 = [callback(userId(channelId[17]).Text, obj6), ];
      const obj7 = { variant: "text-xs/normal", color: "text-default", children: formatResult };
      items8[1] = callback(userId(channelId[17]).Text, obj7);
      obj5.children = items8;
      items7[1] = closure_17(closure_6, obj5);
      obj2.children = items7;
      const items9 = [closure_17(closure_6, obj2), ];
      if (null != stateFromStores2) {
        if (null != stateFromStores2.flat()) {
          const obj8 = {};
          const obj9 = { eligibilityStates: stateFromStores2.flat(), guildId };
          const items10 = [callback(PopoutChecks, obj9), , ];
          let tmp48 = null;
          if (!hasItem) {
            const obj10 = { style: tmp.button };
            const obj11 = {
              onPress() {
                          let obj = roleId(channelId[37]);
                          obj.hideActionSheet("ConnectionsRoleMessageBadgeActionSheet");
                          obj = { guildId };
                          const result = userId(channelId[38]).openGuildRoleConnectionsModal(obj);
                        }
            };
            const intl4 = userId(channelId[14]).intl;
            obj11.text = intl4.string(userId(channelId[14]).t.T1t1WV);
            obj11.variant = "primary";
            obj11.grow = true;
            obj10.children = callback(userId(channelId[36]).Button, obj11);
            tmp48 = callback(closure_6, obj10);
          }
          items10[1] = tmp48;
          let tmp54 = null;
          if (someResult) {
            const obj12 = { style: tmp.button };
            const obj13 = {
              onPress() {
                          roleId(channelId[39])({ userId, channelId, roleId, sourceAnalyticsLocations: analyticsLocations });
                        }
            };
            const intl5 = userId(channelId[14]).intl;
            obj13.text = intl5.string(userId(channelId[14]).t.hgKDnG);
            obj13.variant = "secondary";
            obj13.grow = true;
            obj12.children = callback(userId(channelId[36]).Button, obj13);
            tmp54 = callback(closure_6, obj12);
          }
          items10[2] = tmp54;
          obj8.children = items10;
          let tmp44Result = closure_17(closure_18, obj8);
          const tmp44 = closure_17;
          const tmp45 = closure_18;
        }
        items9[1] = tmp44Result;
        obj1.children = items9;
        obj.children = tmp21(tmp22, obj1);
        obj.children = tmp20(userId(channelId[34]).BottomSheet, obj);
        return tmp17(userId(channelId[28]).AnalyticsLocationProvider, obj);
      }
      const obj14 = { style: tmp.loadingSpinner, size: "large" };
      tmp44Result = callback(stateFromStores, obj14);
      tmp17 = callback;
      tmp20 = callback;
      tmp21 = closure_17;
      tmp22 = closure_6;
      const tmp23 = closure_17;
      const tmp24 = closure_6;
      const tmp25 = callback;
      const tmp26 = closure_6;
      const tmp27 = callback;
      const tmp29 = roleId(channelId[35]);
      const tmp32 = closure_17;
      const tmp33 = closure_6;
      const tmp34 = callback;
    }
    if (1 === stateFromStores2.length) {
      const intl2 = userId(channelId[14]).intl;
      formatResult = intl2.format(userId(channelId[14]).t["0eBj3x"], {});
    } else {
      const intl = userId(channelId[14]).intl;
      formatResult = intl.format(userId(channelId[14]).t.D7uftB, {});
    }
  }
  const intl3 = userId(channelId[14]).intl;
  formatResult = intl3.string(userId(channelId[14]).t.jDym4E);
};
export { PopoutChecks };
