// Module ID: 10953
// Function ID: 85172
// Name: PopoutCheck
// Dependencies: []
// Exports: default

// Module 10953 (PopoutCheck)
function PopoutCheck(arg0) {
  let connectionMetadataField;
  let connectionType;
  let description;
  let operator;
  let value;
  ({ operator, value, description } = arg0);
  ({ connectionType, connectionMetadataField } = arg0);
  const tmp = callback4();
  if (null != description) {
    if (OperatorTypes.LESS_THAN === operator) {
      const intl = arg1(dependencyMap[14]).intl;
      let obj = { description };
      const _Math = Math;
      const _Number = Number;
      obj.count = Math.max(0, Number(value) - 1);
      let formatResult = intl.format(arg1(dependencyMap[14]).t.2p7dA3, obj);
    } else {
      formatResult = description;
      if (OperatorTypes.GREATER_THAN === operator) {
        const intl2 = arg1(dependencyMap[14]).intl;
        obj = { description };
        const _Math2 = Math;
        const _Number2 = Number;
        obj.count = Math.max(0, Number(value) + 1);
        formatResult = intl2.format(arg1(dependencyMap[14]).t.2p7dA3, obj);
      }
    }
  } else {
    obj = arg1(dependencyMap[15]);
    const obj1 = { connectionType, connectionMetadataField, operator, value };
    formatResult = obj.getConnectionsCheckText(obj1);
  }
  let tmp9 = null;
  if (null != formatResult) {
    const obj2 = { style: tmp.popoutCheck };
    const obj3 = { size: "sm", style: tmp.popoutCheckIcon };
    const items = [callback2(arg1(dependencyMap[16]).CheckmarkLargeIcon, obj3), ];
    const obj4 = { children: formatResult };
    items[1] = callback2(arg1(dependencyMap[17]).Text, obj4);
    obj2.children = items;
    tmp9 = callback3(closure_6, obj2);
  }
  return tmp9;
}
class PopoutChecks {
  constructor(arg0) {
    arg1 = global.guildId;
    importDefault = jsxs();
    closure_2 = importDefault(closure_2[18])();
    obj = importDefault(closure_2[19]);
    groupByResult = obj.groupBy(global.eligibilityStates, (application_id) => {
      let str = "";
      if (null != application_id.application_id) {
        const _HermesInternal = HermesInternal;
        str = ":" + application_id.application_id;
      }
      return "" + application_id.connection_type + str;
    });
    closure_3 = groupByResult;
    keys = Object.keys(groupByResult);
    closure_4 = keys.length - 1;
    obj2 = arg1(closure_2[20]);
    ActivityIndicator = obj2.useToken(importDefault(closure_2[13]).unsafe_rawColors.GREEN_330);
    obj = {
      children: keys.map((arg0, arg1) => {
            const found = arr.filter((operator) => null != operator.operator);
            const found1 = arr.find((application) => null != application.application);
            let obj = lib(closure_2[21]);
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
              const prototype = ctor.prototype;
              tmp5 = new ctor(application.bot);
            }
            const officialApplicationIds = guildId(closure_2[15]).officialApplicationIds;
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
              let tmp10 = callback(lib(closure_2[22]), obj);
            } else if (null != tmp5) {
              obj = { style: lib.botTag, verified: false };
              tmp10 = callback(lib(closure_2[23]), obj);
            }
            const obj1 = {};
            const items = [lib.popoutChecksGroup, ];
            let prop = null;
            if (arg1 < closure_4) {
              prop = lib.popoutChecksGroupBottomMargin;
            }
            items[1] = prop;
            obj1.style = items;
            const obj2 = { style: lib.popoutCheckGroupName };
            if (null == value) {
              const items1 = [null, , , ];
              let tmp35 = null;
              if (null != tmp5) {
                const obj3 = { style: lib.popoutCheckGroupPlatformIcon, user: tmp5, size: guildId(closure_2[24]).AvatarSizes.XSMALL, guildId: undefined };
                tmp35 = callback(guildId(closure_2[24]).Avatar, obj3);
              }
              items1[1] = tmp35;
              const obj4 = { hasMaxConnections: null, isBoostOnlySubscription: "43b86c9ce273868bacca6aeb06ae392b" };
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
              items1[2] = callback(guildId(closure_2[17]).Text, obj4);
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
                    callback(closure_2[27])(null != connectionMetadataField, "connectionMetadataField is null");
                    callback(closure_2[27])(null != operator, "operator is null");
                    callback(closure_2[27])(null != value, "value is null");
                    return callback2(closure_20, { connectionType, connectionMetadataField, operator, value, description: description.description }, "" + connectionType + ":" + connectionMetadataField + ":" + operator + ":" + value);
                  })
              ];
              obj1.children = items2;
              return closure_17(closure_6, obj1, arg0);
            } else {
              const obj5 = { style: lib.popoutCheckGroupPlatformIcon };
              let makeSource = guildId(closure_2[25]).makeSource;
              const tmp27 = callback;
              const tmp31 = guildId(closure_2[25]);
              const icon = value.icon;
              obj5.source = makeSource(guildId(closure_2[26]).isThemeDark(closure_2) ? icon.darkPNG : icon.lightPNG);
              obj5.disableColor = true;
              makeSource = guildId;
              obj5.size = guildId(closure_2[24]).Icon.Sizes.MEDIUM;
              tmp27(guildId(closure_2[24]).Icon, obj5);
              const obj7 = guildId(closure_2[26]);
            }
          })
    };
    return jsx(Fragment, obj);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ ActivityIndicator: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
const OperatorTypes = arg1(dependencyMap[9]).OperatorTypes;
const tmp2 = arg1(dependencyMap[2]);
({ AnalyticEvents: closure_14, EMPTY_STRING_SNOWFLAKE_ID: closure_15 } = arg1(dependencyMap[10]));
const tmp3 = arg1(dependencyMap[10]);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = arg1(dependencyMap[11]));
let obj = arg1(dependencyMap[12]);
obj = { container: { 822894183: 105819235161232360000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 400842798: 15186805446270135000000000000000000000000000000000000000000000000000000000000000000, 1120077519: 15177104137936768000000000000000000000000000000000000000000000000000000000000000000 } };
obj = { "Null": true, "Null": true, "Null": true, "Null": true, "Null": true, borderBottomColor: importDefault(dependencyMap[13]).colors.BORDER_SUBTLE, marginBottom: importDefault(dependencyMap[13]).space.PX_24 };
obj.header = obj;
obj.verifiedContainer = { <string:2320653409>: false, <string:1642905260>: false, <string:2709934496>: false };
obj.headerTextContainer = {};
obj.verifiedCheck = { "Null": 3375103, "Null": -8192, "Null": 4320799 };
obj.loadingSpinner = { marginVertical: 40 };
obj.popoutCheck = { headerIcons: "png", RowButtonIconProps: "startFetchingBlockedDomains", headerLabel: "isArray", showHeaderCloseButton: "NR", hideDontShowAgainCheckbox: "isArray" };
const tmp4 = arg1(dependencyMap[11]);
obj.popoutCheckIcon = { marginRight: 8, tintColor: importDefault(dependencyMap[13]).colors.TEXT_FEEDBACK_POSITIVE };
obj.popoutChecksGroup = {};
const obj1 = { marginRight: 8, tintColor: importDefault(dependencyMap[13]).colors.TEXT_FEEDBACK_POSITIVE };
obj.popoutChecksGroupBottomMargin = { borderBottomColor: importDefault(dependencyMap[13]).colors.BORDER_SUBTLE };
obj.popoutCheckGroupName = { "Null": 7, "Null": 370 };
obj.popoutCheckGroupPlatformIcon = { marginRight: 8 };
obj.button = { marginBottom: 8 };
obj.botTag = { marginLeft: 4 };
let closure_19 = obj.createStyles(obj);
const obj2 = { borderBottomColor: importDefault(dependencyMap[13]).colors.BORDER_SUBTLE };
const result = arg1(dependencyMap[40]).fileFinishedImporting("modules/connections/native/ConnectionsRoleMessageBadgeActionSheet.tsx");

export default function ConnectionsRoleMessageBadgeActionSheet(userId) {
  userId = userId.userId;
  const arg1 = userId;
  const roleId = userId.roleId;
  const importDefault = roleId;
  const channelId = userId.channelId;
  const dependencyMap = channelId;
  const guildId = userId.guildId;
  const callback = guildId;
  const tmp = callback4();
  const analyticsLocations = importDefault(dependencyMap[28])(importDefault(dependencyMap[29]).CONNECTIONS_ROLE_POPOUT).analyticsLocations;
  const React = analyticsLocations;
  let obj = arg1(dependencyMap[30]);
  const items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildId));
  let obj1 = arg1(dependencyMap[30]);
  const items1 = [closure_8];
  let closure_6 = obj1.useStateFromStores(items1, () => first.getId());
  let obj2 = arg1(dependencyMap[30]);
  const items2 = [closure_9];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => member.getMember(guildId, closure_6));
  let obj3 = arg1(dependencyMap[30]);
  const items3 = [closure_12];
  const stateFromStores2 = obj3.useStateFromStores(items3, () => guildRoleConnectionEligibility.getGuildRoleConnectionEligibility(roleId));
  let closure_7 = stateFromStores2;
  const tmp5 = callback(React.useState(null == stateFromStores2), 2);
  const first = tmp5[0];
  closure_8 = first;
  closure_9 = tmp5[1];
  if (null != stateFromStores1) {
    const roles = stateFromStores1.roles;
    const hasItem = roles.includes(roleId);
  }
  const items4 = [userId, roleId, channelId, guildId];
  const effect = React.useEffect(() => {
    let obj = roleId(channelId[31]);
    obj = { other_user_id: userId, role_id: roleId };
    const merged = Object.assign(userId(channelId[32]).collectChannelAnalyticsMetadataFromId(channelId));
    const obj3 = userId(channelId[32]);
    const merged1 = Object.assign(userId(channelId[32]).collectGuildAnalyticsMetadata(guildId));
    obj.track(constants.PASSPORT_ROLE_POPOUT_VIEWED, obj);
  }, items4);
  const items5 = [guildId, roleId, first, stateFromStores2];
  const effect1 = React.useEffect(() => {
    let tmp = first;
    if (first) {
      tmp = null == stateFromStores2;
    }
    if (tmp) {
      const guildRoleConnectionsEligibility = roleId(channelId[33]).fetchGuildRoleConnectionsEligibility(guildId, roleId);
      guildRoleConnectionsEligibility.then(() => callback(false));
      const obj = roleId(channelId[33]);
    }
  }, items5);
  if (null != stateFromStores2) {
    const flatResult = stateFromStores2.flat();
    const someResult = stateFromStores2.flat().some((application_id) => undefined === application_id.application_id);
  }
  let obj5 = arg1(dependencyMap[30]);
  const items6 = [closure_10];
  const stateFromStores3 = obj5.useStateFromStores(items6, () => {
    let role;
    if (null != stateFromStores) {
      role = role.getRole(stateFromStores.id, roleId);
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
      obj3.children = callback2(importDefault(dependencyMap[35]), obj4);
      const items7 = [callback2(closure_6, obj3), ];
      obj5 = { style: tmp.headerTextContainer };
      const obj6 = { hasMaxConnections: "<string:1091687288>", isBoostOnlySubscription: "/assets/design/components/Icon/native/redesign/generated/images" };
      let name;
      if (null != stateFromStores3) {
        name = stateFromStores3.name;
      }
      obj6.children = name;
      const items8 = [callback2(arg1(dependencyMap[17]).Text, obj6), ];
      const obj7 = { hasMaxConnections: true, isBoostOnlySubscription: true, children: formatResult };
      items8[1] = callback2(arg1(dependencyMap[17]).Text, obj7);
      obj5.children = items8;
      items7[1] = closure_17(closure_6, obj5);
      obj2.children = items7;
      const items9 = [closure_17(closure_6, obj2), ];
      if (null != stateFromStores2) {
        if (null != stateFromStores2.flat()) {
          const obj8 = {};
          const obj9 = { eligibilityStates: stateFromStores2.flat(), guildId };
          const items10 = [callback2(PopoutChecks, obj9), , ];
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
            const intl4 = arg1(dependencyMap[14]).intl;
            obj11.text = intl4.string(arg1(dependencyMap[14]).t.T1t1WV);
            obj11.variant = "primary";
            obj11.grow = true;
            obj10.children = callback2(arg1(dependencyMap[36]).Button, obj11);
            tmp48 = callback2(closure_6, obj10);
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
            const intl5 = arg1(dependencyMap[14]).intl;
            obj13.text = intl5.string(arg1(dependencyMap[14]).t.hgKDnG);
            obj13.variant = "secondary";
            obj13.grow = true;
            obj12.children = callback2(arg1(dependencyMap[36]).Button, obj13);
            tmp54 = callback2(closure_6, obj12);
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
        obj.children = tmp20(arg1(dependencyMap[34]).BottomSheet, obj);
        return tmp17(arg1(dependencyMap[28]).AnalyticsLocationProvider, obj);
      }
      const obj14 = { style: tmp.loadingSpinner, size: "large" };
      tmp44Result = callback2(stateFromStores, obj14);
      const tmp17 = callback2;
      const tmp20 = callback2;
      const tmp21 = closure_17;
      const tmp22 = closure_6;
      const tmp23 = closure_17;
      const tmp24 = closure_6;
      const tmp25 = callback2;
      const tmp26 = closure_6;
      const tmp27 = callback2;
      const tmp29 = importDefault(dependencyMap[35]);
      const tmp32 = closure_17;
      const tmp33 = closure_6;
      const tmp34 = callback2;
    }
    if (1 === stateFromStores2.length) {
      const intl2 = arg1(dependencyMap[14]).intl;
      let formatResult = intl2.format(arg1(dependencyMap[14]).t.0eBj3x, {});
    } else {
      const intl = arg1(dependencyMap[14]).intl;
      formatResult = intl.format(arg1(dependencyMap[14]).t.D7uftB, {});
    }
  }
  const intl3 = arg1(dependencyMap[14]).intl;
  formatResult = intl3.string(arg1(dependencyMap[14]).t.jDym4E);
};
export { PopoutChecks };
