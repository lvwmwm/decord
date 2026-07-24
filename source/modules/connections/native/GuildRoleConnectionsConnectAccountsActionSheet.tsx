// Module ID: 10015
// Function ID: 77334
// Name: PlatformIcon
// Dependencies: [5, 57, 31, 27, 5066, 1921, 1857, 1194, 1348, 4812, 1917, 3758, 4940, 653, 33, 4130, 689, 4066, 4814, 1392, 3976, 1273, 4593, 4320, 4126, 1212, 4939, 10016, 5465, 8568, 10017, 10018, 22, 3834, 10019, 44, 3831, 9350, 4559, 7636, 4938, 566, 4941, 5048, 675, 4324, 4098, 5796, 10022, 9009, 686, 4337, 10027, 1934, 8224, 10031, 5187, 10032, 5506, 4543, 2]

// Module 10015 (PlatformIcon)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import useAppplicationRoleConnectionItems from "useAppplicationRoleConnectionItems";
import registerAsset from "registerAsset";
import get_ActivityIndicator from "useRequestApplication";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import OperatorTypes from "OperatorTypes";
import ME from "ME";
import jsxProd from "map";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_30;
let closure_31;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function PlatformIcon(platformType) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = importDefault(4814);
  const value = obj.get(platformType.platformType);
  const tmp2 = importDefault(4066)();
  const obj2 = require(1392) /* getAvatarURL */;
  const icon = value.icon;
  const source = obj2.makeSource(require(3976) /* AccessibilityAnnouncer */.isThemeLight(tmp2) ? icon.lightPNG : icon.darkPNG);
  obj = { source, style: tmp.platformIcon, disableColor: true };
  return callback2(require(1273) /* Button */.Icon, obj);
}
function ChannelName(channel) {
  channel = channel.channel;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(4593) /* getThreadChannelIcon */;
  const channelIcon = obj.getChannelIcon(channel);
  obj = { style: items };
  items = [tmp.channelName, channel.style];
  let tmp6 = null;
  if (null != channelIcon) {
    obj = { source: channelIcon, style: tmp.channelNameIcon };
    tmp6 = callback2(require(1273) /* Button */.Icon, obj);
  }
  const items1 = [tmp6, ];
  const obj1 = { variant: "heading-lg/semibold", color: "text-default", style: tmp.channelNameText, lineClamp: 1, children: importDefault(4320)(channel) };
  items1[1] = callback2(require(4126) /* Text */.Text, obj1);
  obj.children = items1;
  return closure_30(closure_8, obj);
}
function ConnectionsCheck(result) {
  let connectionMetadataField;
  let connectionType;
  let description;
  let operator;
  let value;
  ({ connectionType, connectionMetadataField, operator, value, description } = result);
  if (connectionType === closure_20) {
    return null;
  } else {
    if (null != description) {
      if (constants2.LESS_THAN === operator) {
        const intl = require(1212) /* getSystemLocale */.intl;
        let obj = { description };
        const _Math = Math;
        const _Number = Number;
        obj.count = Math.max(0, Number(value) - 1);
        let formatResult = intl.format(require(1212) /* getSystemLocale */.t["2p7dA3"], obj);
      } else {
        formatResult = description;
        if (constants2.GREATER_THAN === operator) {
          const intl2 = require(1212) /* getSystemLocale */.intl;
          obj = { description };
          const _Math2 = Math;
          const _Number2 = Number;
          obj.count = Math.max(0, Number(value) + 1);
          formatResult = intl2.format(require(1212) /* getSystemLocale */.t["2p7dA3"], obj);
        }
      }
    } else {
      if (constants2.EQUAL === operator) {
        let tmp13 = connectionType === constants3.PAYPAL;
        if (tmp13) {
          tmp13 = connectionMetadataField === constants.PAYPAL_VERIFIED;
        }
        if (tmp13) {
        }
      } else if (constants2.NOT_EQUAL === operator) {
      } else if (constants2.LESS_THAN === operator) {
      } else if (constants2.GREATER_THAN === operator) {
      } else {
        return null;
      }
      obj = require(4939) /* officialApplicationIds */;
      const obj1 = { connectionType, connectionMetadataField, operator, operatorText: _8W9OXU, value };
      formatResult = obj.getConnectionsCheckText(obj1);
    }
    let tmp25Result = null;
    if (null != formatResult) {
      const obj2 = { variant: "text-xs/normal" };
      let str2 = "text-feedback-critical";
      if (result.result) {
        str2 = "text-default";
      }
      obj2.color = str2;
      obj2.style = tmp.connectionsCheck;
      obj2.children = formatResult;
      tmp25Result = closure_29(require(4126) /* Text */.Text, obj2);
      const tmp25 = closure_29;
    }
    return tmp25Result;
  }
}
function IdentityConnectionsCheckGroup(eligibilityState) {
  eligibilityState = eligibilityState.eligibilityState;
  const onAttempted = eligibilityState.onAttempted;
  const onIdentityAuthorize = eligibilityState.onIdentityAuthorize;
  let application;
  let c9;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = eligibilityState(onIdentityAuthorize[27]);
  const getOrFetchApplicationBatched = obj.useGetOrFetchApplicationBatched(eligibilityState.application_id);
  let tmp3 = onAttempted(onIdentityAuthorize[28])(getOrFetchApplicationBatched);
  const canStartAuthorization = tmp3.canStartAuthorization;
  const startAuthorization = tmp3.startAuthorization;
  let React = canStartAuthorization;
  const identity_connected_account_type = eligibilityState.identity_connected_account_type;
  const identity_auth_required_scopes = eligibilityState.identity_auth_required_scopes;
  let flag = canStartAuthorization;
  if (!canStartAuthorization) {
    flag = canStartAuthorization;
    if (null != identity_connected_account_type) {
      flag = canStartAuthorization;
      if (null != identity_auth_required_scopes) {
        let obj1 = onAttempted(onIdentityAuthorize[18]);
        const value = obj1.get(identity_connected_account_type);
        flag = canStartAuthorization;
        if (tmp8) {
          React = true;
          flag = true;
        }
        tmp8 = null != value && value.enabled;
      }
    }
  }
  application = eligibilityState.application;
  const items = [application];
  const memo = React.useMemo(() => {
    let bot;
    if (null != application) {
      bot = application.bot;
    }
    let tmp3 = null;
    if (null != bot) {
      const prototype = outer1_11.prototype;
      tmp3 = new outer1_11(application.bot);
    }
    return tmp3;
  }, items);
  const result = eligibilityState.result;
  c9 = result;
  if (null != memo) {
    obj = { style: tmp.botTag, verified: memo.isVerifiedBot() };
    const tmp13 = onAttempted(onIdentityAuthorize[29]);
    const tmp9 = callback2(onAttempted(onIdentityAuthorize[29]), obj);
  }
  if (result) {
    obj = { source: onAttempted(tmp16[30]), style: tmp.connectionsChecksGroupCheckmark };
    let tmp14Result = tmp14(tmp15(tmp16[21]).Icon, obj);
  } else if (flag) {
    obj1 = { source: onAttempted(tmp16[31]), style: tmp.connectionsChecksGroupCaret };
    tmp14Result = tmp14(tmp15(tmp16[21]).Icon, obj1);
  } else {
    const obj2 = { variant: "text-md/medium", color: "text-muted" };
    const intl = tmp15(tmp16[25]).intl;
    obj2.children = intl.string(tmp15(tmp16[25]).t.cEts68);
    tmp14Result = tmp14(tmp15(tmp16[24]).Text, obj2);
  }
  const items1 = [result, flag, canStartAuthorization, startAuthorization, onAttempted, onIdentityAuthorize, , , , ];
  ({ connection_type: arr2[6], application_id: arr2[7] } = eligibilityState);
  items1[8] = identity_connected_account_type;
  items1[9] = identity_auth_required_scopes;
  const callback = React.useCallback(() => {
    if (!c9) {
      if (c5) {
        let someResult = null != identity_connected_account_type;
        if (someResult) {
          const accounts = outer1_14.getAccounts();
          someResult = accounts.some((type) => type.type === outer1_6);
        }
        let connection_type = null;
        if (!someResult) {
          connection_type = eligibilityState.connection_type;
        }
        const application_id = eligibilityState.application_id;
        let tmp10 = null;
        if (null != application_id) {
          tmp10 = application_id;
        }
        onAttempted(connection_type, tmp10);
        if (canStartAuthorization) {
          let obj = { analyticsLocations: ["Verified Roles Connect Accounts Modal"] };
          startAuthorization(obj);
        } else {
          let tmp14 = null != identity_connected_account_type;
          if (tmp14) {
            tmp14 = null != identity_auth_required_scopes;
          }
          if (tmp14) {
            tmp14 = null != eligibilityState.application_id;
          }
          if (tmp14) {
            obj = { applicationId: eligibilityState.application_id, scopes: identity_auth_required_scopes, connectedAccountProvider: identity_connected_account_type, wasAlreadyConnected: someResult };
            onIdentityAuthorize(obj);
          }
        }
        const tmp6 = onAttempted;
      }
    }
  }, items1);
  const officialApplicationIds = eligibilityState(onIdentityAuthorize[26]).officialApplicationIds;
  let id;
  if (null != application) {
    id = application.id;
  }
  let str = "";
  if (null != id) {
    str = id;
  }
  let tmp23Result = null;
  if (!officialApplicationIds.includes(str)) {
    const obj3 = { accessibilityRole: "button" };
    const items2 = [tmp.connectionsChecksGroup, , ];
    let prop = null;
    if (result) {
      prop = tmp.connectionsChecksGroupPassed;
    }
    items2[1] = prop;
    let prop1 = null;
    if (!flag) {
      prop1 = tmp.connectionsChecksGroupPlatformDisabled;
    }
    items2[2] = prop1;
    obj3.style = items2;
    let tmp27 = result;
    if (!result) {
      tmp27 = !flag;
    }
    obj3.disabled = tmp27;
    obj3.onPress = callback;
    let tmp28 = null;
    if (null != memo) {
      const obj4 = { style: tmp.appIcon, user: memo, size: eligibilityState(onIdentityAuthorize[21]).AvatarSizes.XSMALL, guildId: undefined };
      tmp28 = callback2(eligibilityState(onIdentityAuthorize[21]).Avatar, obj4);
    }
    const items3 = [tmp28, , ];
    const obj5 = { style: tmp.connectionsChecksGroupTextContainer };
    const obj6 = { style: tmp.connectionsChecksGroupTextNameContainer };
    const obj7 = { variant: "text-md/medium", color: "mobile-text-heading-primary" };
    let name;
    if (null != application) {
      name = application.name;
    }
    obj7.children = name;
    const items4 = [callback2(eligibilityState(onIdentityAuthorize[24]).Text, obj7), tmp9];
    obj6.children = items4;
    const items5 = [closure_30(application, obj6), ];
    let tmp40 = null;
    if (!flag) {
      tmp40 = null;
      if (!result) {
        const obj8 = { variant: "text-xs/normal", color: "text-muted", style: tmp.connectionsCheck };
        const intl2 = eligibilityState(onIdentityAuthorize[25]).intl;
        obj8.children = intl2.string(eligibilityState(onIdentityAuthorize[25]).t["+z5dYe"]);
        tmp40 = callback2(eligibilityState(onIdentityAuthorize[24]).Text, obj8);
      }
    }
    items5[1] = tmp40;
    obj5.children = items5;
    items3[1] = closure_30(application, obj5);
    items3[2] = tmp14Result;
    obj3.children = items3;
    tmp23Result = closure_30(identity_auth_required_scopes, obj3);
    const tmp23 = closure_30;
    const tmp24 = identity_auth_required_scopes;
    const tmp32 = closure_30;
    const tmp33 = application;
    const tmp34 = closure_30;
    const tmp35 = application;
    const tmp36 = callback2;
  }
  return tmp23Result;
}
function ConnectionsChecks(eligibilityStatesGroups) {
  let useAppplicationRoleConnectionItems;
  let closure_8;
  let closure_9;
  let dependencyMap;
  let importDefault;
  let initialAttemptedApplicationId;
  let initialAttemptedPlatformType;
  let onPlatformConnected;
  eligibilityStatesGroups = eligibilityStatesGroups.eligibilityStatesGroups;
  ({ onPlatformAttempt: importDefault, onPlatformConnect: dependencyMap, onPlatformConnected } = eligibilityStatesGroups);
  ({ onPlatformIdentityAuthorize: useAppplicationRoleConnectionItems, initialAttemptedPlatformType, initialAttemptedApplicationId } = eligibilityStatesGroups);
  let first;
  let closure_11;
  let first1;
  let closure_13;
  let memo;
  let memo1;
  let closure_16;
  const React = _createForOfIteratorHelperLoose();
  const tmp = callback(React.useState({}), 2);
  let closure_6 = tmp[0];
  let closure_7 = tmp[1];
  [closure_8, closure_9] = callback(React.useState(0), 2);
  let tmp4 = null;
  if (null != initialAttemptedPlatformType) {
    tmp4 = initialAttemptedPlatformType;
  }
  const tmp5 = callback(React.useState(tmp4), 2);
  first = tmp5[0];
  closure_11 = tmp5[1];
  let tmp8 = null;
  if (null != initialAttemptedApplicationId) {
    tmp8 = initialAttemptedApplicationId;
  }
  let tmp9 = callback(React.useState(tmp8), 2);
  first1 = tmp9[0];
  closure_13 = tmp9[1];
  let items = [eligibilityStatesGroups];
  memo = React.useMemo(() => outer1_1(outer1_2[32]).flatten(eligibilityStatesGroups), items);
  let items1 = [memo];
  memo1 = React.useMemo(() => outer1_1(outer1_2[32]).groupBy(memo, (application_id) => {
    let str = "";
    if (null != application_id.application_id) {
      const _HermesInternal = HermesInternal;
      str = ":" + application_id.application_id;
    }
    return "" + application_id.connection_type + str;
  }), items1);
  let items2 = [memo];
  const effect = React.useEffect(() => callback(Date.now()), items2);
  let items3 = [memo1, first, first1, onPlatformConnected];
  const effect1 = React.useEffect(() => {
    if (null != first) {
      let str2 = "";
      if (null != first1) {
        const _HermesInternal = HermesInternal;
        str2 = ":" + first1;
      }
      const _HermesInternal2 = HermesInternal;
      const arr = memo1["" + first + str2];
      if (null != arr) {
        if (arr.every((result) => result.result)) {
          first = arr[0];
          let prop;
          if (null != first) {
            prop = first.identity_connected_account_type;
          }
          if (null == prop) {
            prop = first;
          }
          const found = arr.find((application) => null != application.application);
          let application;
          if (null != found) {
            application = found.application;
          }
          let tmp8 = null;
          if (null != application) {
            tmp8 = application;
          }
          onPlatformConnected(prop, tmp8);
        }
      }
      const tmp11 = memo1;
      const tmp12 = first;
    }
  }, items3);
  let obj = eligibilityStatesGroups(3834);
  closure_16 = obj.useToken(importDefault(689).unsafe_rawColors.GREEN_330);
  obj = {};
  const keys = Object.keys(memo1);
  const sorted = keys.sort((arg0, arg1) => {
    const everyResult = memo1[arg0].every((result) => result.result);
    const everyResult1 = memo1[arg1].every((result) => result.result);
    if (true !== everyResult) {
      let num2 = 0;
      if (false === everyResult) {
        num2 = 0;
        if (true === everyResult1) {
          num2 = -1;
        }
      }
      let num = num2;
    } else {
      num = 1;
    }
    return num;
  });
  obj.children = sorted.map((str) => {
    str = "";
    if (str.startsWith("" + outer1_20 + ":")) {
      if (null != arr[0]) {
        let obj = {
          eligibilityState: arr[0],
          onAttempted(arg0) {
                outer1_11(arg0);
                outer1_13(arg1);
                if (null != arg0) {
                  value();
                }
              },
          onIdentityAuthorize: useAppplicationRoleConnectionItems
        };
        return outer1_29(outer1_37, obj, str);
      }
    }
    const found = arr.find((operator) => null == operator.operator);
    const found1 = arr.filter((operator) => null != operator.operator);
    let tmp3 = (null == found || found.result) && found1.every((result) => result.result);
    const found2 = arr.find((application) => null != application.application);
    obj = outer1_1(outer1_2[18]);
    const value = obj.get(str);
    let closure_1 = value;
    let application;
    if (null != found2) {
      application = found2.application;
    }
    let bot;
    if (null != application) {
      bot = application.bot;
    }
    let tmp9 = null;
    if (null != bot) {
      const prototype = ctor.prototype;
      tmp9 = new ctor(application.bot);
    }
    const officialApplicationIds = eligibilityStatesGroups(outer1_2[26]).officialApplicationIds;
    let id;
    if (null != application) {
      id = application.id;
    }
    if (null != id) {
      str = id;
    }
    let type;
    const hasItem = officialApplicationIds.includes(str);
    if (null != value) {
      type = value.type;
    }
    if (null == type) {
      type = outer1_19;
    }
    let tmp18 = !tmp3 && null != tmp17;
    if (tmp18) {
      tmp18 = tmp17 <= closure_8;
    }
    if (tmp3) {
      obj = { source: outer1_1(tmp22[30]), style: registerAsset.connectionsChecksGroupCheckmark };
      let tmp20Result = tmp20(tmp21(tmp22[21]).Icon, obj);
    } else if (tmp18) {
      const obj1 = { variant: "text-sm/semibold", color: "text-brand" };
      const intl2 = tmp21(tmp22[25]).intl;
      obj1.children = intl2.string(tmp21(tmp22[25]).t["5911Lb"]);
      tmp20Result = tmp20(tmp21(tmp22[24]).Text, obj1);
    } else if (tmp6) {
      const obj2 = { source: outer1_1(tmp22[31]), style: registerAsset.connectionsChecksGroupCaret };
      tmp20Result = tmp20(tmp21(tmp22[21]).Icon, obj2);
    } else {
      const obj3 = { variant: "text-md/medium", color: "text-muted" };
      const intl = tmp21(tmp22[25]).intl;
      obj3.children = intl.string(tmp21(tmp22[25]).t.cEts68);
      tmp20Result = tmp20(tmp21(tmp22[24]).Text, obj3);
    }
    let type1;
    if (null != value) {
      type1 = value.type;
    }
    let tmp29;
    if (type1 === outer1_21.STEAM) {
      const intl3 = eligibilityStatesGroups(outer1_2[25]).intl;
      const stringResult = intl3.string(eligibilityStatesGroups(outer1_2[25]).t.NcZh6K);
      eligibilityStatesGroups = stringResult;
      tmp29 = stringResult;
    }
    if (hasItem) {
      const obj4 = { style: registerAsset.botTag, guildId: outer1_28, roleColor: closure_16, size: 16 };
      let tmp33 = outer1_29(outer1_1(outer1_2[34]), obj4);
    } else if (null != tmp9) {
      const obj5 = { style: registerAsset.botTag, verified: tmp9.isVerifiedBot() };
      tmp33 = outer1_29(outer1_1(outer1_2[29]), obj5);
      const tmp37 = outer1_1(outer1_2[29]);
    }
    const obj6 = { accessibilityRole: "button" };
    const items = [registerAsset.connectionsChecksGroup, , ];
    let prop = null;
    if (tmp3) {
      prop = registerAsset.connectionsChecksGroupPassed;
    }
    items[1] = prop;
    let prop1 = null;
    if (!(null == value || value.enabled)) {
      prop1 = registerAsset.connectionsChecksGroupPlatformDisabled;
    }
    items[2] = prop1;
    obj6.style = items;
    let tmp51 = tmp3;
    if (!tmp3) {
      tmp51 = !tmp6;
    }
    obj6.disabled = tmp51;
    obj6.onPress = function onPress() {
      let type;
      if (null != value) {
        type = value.type;
      }
      if (null == type) {
        type = outer2_19;
      }
      let tmp3 = null;
      if (null != application) {
        tmp3 = application;
      }
      const obj = {};
      const merged = Object.assign(outer1_6);
      obj[type] = Date.now();
      outer1_7(obj);
      outer1_11(type);
      let id;
      if (null != tmp3) {
        id = tmp3.id;
      }
      let tmp9 = null;
      if (null != id) {
        tmp9 = id;
      }
      outer1_13(tmp9);
      value();
      application(type, tmp3);
    };
    let tmp52 = null;
    if (!tmp3) {
      tmp52 = null;
      if (tmp18) {
        const obj7 = { style: registerAsset.connectionsChecksGroupRequirementsNotMet };
        const obj8 = { variant: "text-xs/normal", color: "text-overlay-light" };
        const intl4 = eligibilityStatesGroups(outer1_2[25]).intl;
        obj8.children = intl4.string(eligibilityStatesGroups(outer1_2[25]).t.UB3hKo);
        obj7.children = outer1_29(eligibilityStatesGroups(outer1_2[24]).Text, obj8);
        tmp52 = outer1_29(outer1_8, obj7);
      }
    }
    const items1 = [tmp52, , , , ];
    let tmp59 = null;
    if (null != value) {
      const obj9 = { platformType: value.type };
      tmp59 = outer1_29(outer1_34, obj9);
    }
    items1[1] = tmp59;
    let tmp62 = null;
    if (null != tmp9) {
      const obj10 = { style: registerAsset.appIcon, user: tmp9, size: eligibilityStatesGroups(outer1_2[21]).AvatarSizes.XSMALL, guildId: undefined };
      tmp62 = outer1_29(eligibilityStatesGroups(outer1_2[21]).Avatar, obj10);
    }
    items1[2] = tmp62;
    const obj11 = { style: registerAsset.connectionsChecksGroupTextContainer };
    const obj12 = { style: registerAsset.connectionsChecksGroupTextNameContainer };
    const obj13 = { variant: "text-md/medium", color: "mobile-text-heading-primary" };
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
    obj13.children = name;
    const items2 = [outer1_29(eligibilityStatesGroups(outer1_2[24]).Text, obj13), tmp33, ];
    let tmp74 = null;
    if (null != tmp29) {
      const obj14 = {
        onPress() {
            outer2_1(outer2_2[35])(null != closure_0, "tooltip is null");
            let obj = outer2_1(outer2_2[36]);
            obj = { key: "CONNECTIONS_STEAM_TOOLTIP", icon: outer2_1(outer2_2[37]), content: closure_0 };
            obj.open(obj);
          }
      };
      const obj15 = { source: outer1_1(outer1_2[37]), size: eligibilityStatesGroups(outer1_2[21]).Icon.Sizes.SMALL_20, style: registerAsset.connectionsChecksGroupTextNameInfoIcon };
      obj14.children = outer1_29(eligibilityStatesGroups(outer1_2[21]).Icon, obj15);
      tmp74 = outer1_29(closure_7, obj14);
    }
    items2[2] = tmp74;
    obj12.children = items2;
    const items3 = [
      outer1_30(outer1_8, obj12),
      found1.map((arg0) => {
        let connection_metadata_field;
        let connection_type;
        let description;
        let operator;
        let result;
        let value;
        ({ connection_metadata_field, operator, value } = arg0);
        ({ connection_type, result, description } = arg0);
        outer2_1(outer2_2[35])(null != connectionMetadataField, "connectionMetadataField is null");
        outer2_1(outer2_2[35])(null != operator, "operator is null");
        outer2_1(outer2_2[35])(null != value, "value is null");
        return outer2_29(outer2_36, { connectionType, connectionMetadataField, operator, value, result, description }, connectionMetadataField);
      })
    ];
    obj11.children = items3;
    items1[3] = outer1_30(outer1_8, obj11);
    items1[4] = tmp20Result;
    obj6.children = items1;
    return outer1_30(closure_7, obj6, str);
  });
  return callback2(closure_31, obj);
}
function ConnectedUserAccountOptions(account) {
  let dependencyMap;
  let importDefault;
  account = account.account;
  ({ setShowPreviewInvisibleIcon: importDefault, setShowPreviewMetadata: dependencyMap } = account);
  const tmp2 = callback(first.useState(account.friendSync), 2);
  let _isNativeReflectConstruct = tmp2[1];
  const tmp3 = callback(first.useState(account.showActivity), 2);
  callback = tmp3[1];
  const tmp4 = callback(first.useState(1 === account.metadataVisibility), 2);
  first = tmp4[0];
  let closure_6 = tmp4[1];
  const tmp6 = callback(first.useState(1 === account.visibility), 2);
  const first1 = tmp6[0];
  let closure_8 = tmp6[1];
  importDefault(4559)(() => {
    callback(!first1);
    callback2(first);
  });
  let obj = importDefault(4814);
  const value = obj.get(account.type);
  let tmp10;
  if (set.has(account.type)) {
    obj = {};
    const intl = account(1212).intl;
    obj.label = intl.string(account(1212).t["+KCMSi"]);
    obj.value = tmp2[0];
    obj.onValueChange = function onValueChange(enabled) {
      callback3(enabled);
      outer1_1(outer1_2[40]).setFriendSync(account.type, account.id, enabled);
    };
    tmp10 = callback2(account(7636).FormSwitchRow, obj);
  }
  let tmp14;
  if (set2.has(account.type)) {
    obj = {};
    const intl2 = account(1212).intl;
    const obj1 = { platform: value.name };
    obj.label = intl2.formatToPlainString(account(1212).t["6u6J0q"], obj1);
    obj.value = tmp3[0];
    obj.onValueChange = function onValueChange(show_activity) {
      callback4(show_activity);
      outer1_1(outer1_2[40]).setShowActivity(account.type, account.id, show_activity);
    };
    tmp14 = callback2(account(7636).FormSwitchRow, obj);
  }
  let tmp18;
  if (true === value.hasMetadata) {
    const obj2 = {};
    const intl3 = account(1212).intl;
    obj2.label = intl3.string(account(1212).t.FYKGsL);
    obj2.value = first;
    obj2.disabled = !first1;
    obj2.onValueChange = function onValueChange(arg0) {
      let id;
      let type;
      callback2(arg0);
      callback5(arg0);
      let num = 0;
      ({ type, id } = account);
      if (arg0) {
        num = 1;
      }
      const result = outer1_1(outer1_2[40]).setMetadataVisibility(type, id, num);
    };
    tmp18 = callback2(account(7636).FormSwitchRow, obj2);
  }
  const obj3 = { style: _createForOfIteratorHelperLoose().accountConnectedPrivacyOptionsContainer };
  const obj4 = {};
  const intl4 = account(1212).intl;
  obj4.label = intl4.string(account(1212).t.f7yOAX);
  obj4.value = first1;
  obj4.onValueChange = function onValueChange(arg0) {
    let id;
    let type;
    callback(!arg0);
    callback6(arg0);
    let num = 0;
    ({ type, id } = account);
    if (arg0) {
      num = 1;
    }
    outer1_1(outer1_2[40]).setVisibility(type, id, num);
  };
  const items = [callback2(account(7636).FormSwitchRow, obj4), tmp18, tmp14, tmp10];
  obj3.children = items;
  return callback3(closure_8, obj3);
}
({ ActivityIndicator: closure_6, Pressable: closure_7, View: closure_8 } = get_ActivityIndicator);
({ MetadataFields: closure_17, OperatorTypes: closure_18, GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE: closure_19, GUILD_ROLE_CONNECTION_APPLICATION_IDENTITY_CONNECTION_TYPE: closure_20 } = OperatorTypes);
({ PlatformTypes: closure_21, UserSettingsSections: closure_22, AnalyticEvents: closure_23, MarketingURLs: closure_24, FRIEND_SYNC_PLATFORM_TYPES: closure_25, ACTIVITY_PLATFORM_TYPES: closure_26, Permissions: closure_27, EMPTY_STRING_SNOWFLAKE_ID: closure_28 } = ME);
({ jsx: closure_29, jsxs: closure_30, Fragment: closure_31 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { padding: 12 }, connectionsChecksGroups: { marginTop: 16, flexDirection: "column" } };
_createForOfIteratorHelperLoose = { flexDirection: "row", borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderWidth: 2, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, paddingHorizontal: 16, paddingVertical: 20, marginBottom: 16, width: "100%", alignItems: "center", position: "relative" };
_createForOfIteratorHelperLoose.connectionsChecksGroup = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.connectionsChecksGroupPassed = { borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
let obj1 = { borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.connectionsChecksGroupPlatformDisabled = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
let obj3 = { paddingVertical: 4, paddingHorizontal: 12, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_CRITICAL, position: "absolute", top: -8, right: 20 };
_createForOfIteratorHelperLoose.connectionsChecksGroupRequirementsNotMet = obj3;
_createForOfIteratorHelperLoose.connectionsChecksGroupTextContainer = { flex: 1 };
_createForOfIteratorHelperLoose.connectionsChecksGroupTextNameContainer = { flexDirection: "row", alignItems: "center" };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.connectionsChecksGroupTextNameInfoIcon = { marginLeft: 4, tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_WARNING };
let obj5 = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_POSITIVE, width: 24, height: 24 };
_createForOfIteratorHelperLoose.connectionsChecksGroupCheckmark = obj5;
let obj6 = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT, width: 24, height: 24 };
_createForOfIteratorHelperLoose.connectionsChecksGroupCaret = obj6;
_createForOfIteratorHelperLoose.connectionsCheck = { marginTop: 4 };
_createForOfIteratorHelperLoose.platformIcon = { width: 24, height: 24, marginRight: 12 };
_createForOfIteratorHelperLoose.channelName = { flexDirection: "row", alignItems: "center", marginBottom: 4 };
let obj7 = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED, marginRight: 8, width: 24, height: 24 };
_createForOfIteratorHelperLoose.channelNameIcon = obj7;
_createForOfIteratorHelperLoose.channelNameText = { overflow: "hidden" };
_createForOfIteratorHelperLoose.header = { flexDirection: "row", width: "100%", alignItems: "center", marginBottom: 8 };
_createForOfIteratorHelperLoose.content = { width: "100%" };
_createForOfIteratorHelperLoose.footerText = { marginBottom: 16 };
_createForOfIteratorHelperLoose.accountConnectedContainer = { flexDirection: "column", alignItems: "flex-start", marginVertical: 24 };
_createForOfIteratorHelperLoose.accountConnectedPreview = { width: "100%" };
let obj8 = { marginTop: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.accountConnectedPreviewConnectedUserAccount = obj8;
_createForOfIteratorHelperLoose.accountConnectedPrivacy = { marginTop: 16, width: "100%" };
let obj9 = { marginTop: 8, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, padding: 8, flexDirection: "column" };
_createForOfIteratorHelperLoose.accountConnectedPrivacyOptionsContainer = obj9;
let obj10 = { flexDirection: "row", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, paddingVertical: 12, paddingHorizontal: 8, borderTopStartRadius: 4, borderTopEndRadius: 4, marginTop: 16 };
_createForOfIteratorHelperLoose.roleGranted = obj10;
_createForOfIteratorHelperLoose.roleGrantedName = { overflow: "hidden", marginRight: 24 };
_createForOfIteratorHelperLoose.verifiedIcon = { marginRight: 8 };
let obj11 = { flexDirection: "column", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL, padding: 16, borderBottomStartRadius: 4, borderBottomEndRadius: 4, marginBottom: 24 };
_createForOfIteratorHelperLoose.channelsGranted = obj11;
_createForOfIteratorHelperLoose.manageConnectionsButton = { marginTop: 8 };
_createForOfIteratorHelperLoose.loading = { marginTop: 24, marginBottom: 32, alignSelf: "center" };
_createForOfIteratorHelperLoose.appIcon = { marginRight: 8 };
_createForOfIteratorHelperLoose.botTag = { marginLeft: 4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_33 = { CHECKS_REQUIRED: 0, [0]: "CHECKS_REQUIRED", ACCOUNT_CONNECTED: 1, [1]: "ACCOUNT_CONNECTED", ROLE_GRANTED: 2, [2]: "ROLE_GRANTED" };
let obj4 = { marginLeft: 4, tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_WARNING };
let result = require("result").fileFinishedImporting("modules/connections/native/GuildRoleConnectionsConnectAccountsActionSheet.tsx");
class GuildRoleConnectionsConnectAccountsActionSheet {
  constructor(arg0) {
    guildId = global.guildId;
    role = global.role;
    initialAttemptedPlatformType = global.initialAttemptedPlatformType;
    closure_2 = initialAttemptedPlatformType;
    ({ initialAttemptedApplicationId: _isNativeReflectConstruct, onCloseModal } = global);
    CHECKS_REQUIRED = undefined;
    useState = undefined;
    useState = undefined;
    useStateFromStores = undefined;
    f77389 = undefined;
    useState = undefined;
    handleClose = function handleClose() {
      let flag = true;
      if (true === undefined) {
        flag = false;
      }
      if (flag) {
        if (null != callback) {
          callback();
        }
      }
      role(initialAttemptedPlatformType[46]).hideActionSheet();
    };
    handleManageConnections = function handleManageConnections() {
      handleClose(true);
      let obj = guildId(initialAttemptedPlatformType[47]);
      obj = { screen: first2.CONNECTIONS };
      obj.openUserSettings(obj);
    };
    handleManageAuthorizedApplications = function handleManageAuthorizedApplications() {
      handleClose(true);
      let obj = guildId(initialAttemptedPlatformType[47]);
      obj = { screen: first2.AUTHORIZED_APPS };
      obj.openUserSettings(obj);
    };
    _handleAssignRole = function _handleAssignRole() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = outer1_3(tmp);
      return obj(...arguments);
    };
    reopenSelf = function reopenSelf(initialAttemptedPlatformType) {
      let obj = arg2;
      if (arg2 === undefined) {
        obj = {};
      }
      obj = { default: handlePlatformConnect };
      const resolved = Promise.resolve(obj);
      const obj2 = role(initialAttemptedPlatformType[46]);
      obj = { role, guildId, initialAttemptedPlatformType };
      let tmp3 = null;
      const guildRoleConnectionsConnectAccountsActionSheetKey = guildId(initialAttemptedPlatformType[48]).makeGuildRoleConnectionsConnectAccountsActionSheetKey(role.id);
      if (null != initialAttemptedPlatformType) {
        tmp3 = arg1;
      }
      obj.initialAttemptedApplicationId = tmp3;
      obj.overrideUrl = obj.overrideUrl;
      obj.onCloseModal = useAppplicationRoleConnectionItems;
      obj2.openLazy(resolved, guildRoleConnectionsConnectAccountsActionSheetKey, obj);
    };
    handlePlatformAttempt = function handlePlatformAttempt() {
      let obj = role(initialAttemptedPlatformType[44]);
      obj = { role_id: role.id };
      const merged = Object.assign(guildId(initialAttemptedPlatformType[45]).collectGuildAnalyticsMetadata(guildId));
      obj.track(lib.PASSPORT_CHALLENGE_STARTED, obj);
    };
    handlePlatformConnect = function handlePlatformConnect(platformType, role_connections_verification_url) {
      let closure_0 = platformType;
      let closure_1 = role_connections_verification_url;
      let obj = {
        platformType,
        location: "Verified Roles Connect Accounts Modal",
        onClose() {
          let id;
          if (null != closure_1) {
            id = closure_1.id;
          }
          let tmp5 = null;
          if (null != id) {
            tmp5 = id;
          }
          const obj = {};
          let prop;
          if (null != closure_1) {
            prop = closure_1.role_connections_verification_url;
          }
          obj.overrideUrl = prop;
          outer1_38(closure_0, tmp5, obj);
        }
      };
      let prop;
      if (null != role_connections_verification_url) {
        prop = role_connections_verification_url.role_connections_verification_url;
      }
      obj.overrideUrl = prop;
      role(initialAttemptedPlatformType[49])(obj);
    };
    handlePlatformIdentityAuthorize = function handlePlatformIdentityAuthorize(applicationId) {
      let connectedAccountProvider;
      let scopes;
      applicationId = applicationId.applicationId;
      const wasAlreadyConnected = applicationId.wasAlreadyConnected;
      ({ scopes, connectedAccountProvider } = applicationId);
      let obj = role(initialAttemptedPlatformType[46]);
      obj.hideActionSheet();
      const combined = "OAuth2AuthorizeModal-" + applicationId;
      function handleModalClose(key) {
        if (key.key === combined) {
          role(initialAttemptedPlatformType[50]).unsubscribe("MODAL_POP", handleModalClose);
          let tmp7 = null;
          if (!wasAlreadyConnected) {
            tmp7 = stateFromStores;
          }
          outer1_38(tmp7, applicationId);
          const obj = role(initialAttemptedPlatformType[50]);
          const tmp5 = outer1_38;
        }
      }
      const subscription = role(initialAttemptedPlatformType[50]).subscribe("MODAL_POP", handleModalClose);
      const obj2 = role(initialAttemptedPlatformType[50]);
      obj = { clientId: applicationId, scopes };
      const obj3 = role(initialAttemptedPlatformType[51]);
      obj.integrationType = guildId(initialAttemptedPlatformType[54]).ApplicationIntegrationType.USER_INSTALL;
      obj.connectedAccountProvider = connectedAccountProvider;
      obj.callback = function callback() {

      };
      obj.dismissOAuthModal = function dismissOAuthModal() {
        return role(initialAttemptedPlatformType[51]).popWithKey(combined);
      };
      obj3.pushLazy(guildId(initialAttemptedPlatformType[53])(initialAttemptedPlatformType[52], initialAttemptedPlatformType.paths), obj, combined);
    };
    handlePlatformConnected = function handlePlatformConnected(arg0, arg1) {
      lib(arg0);
      callback3(arg1);
      callback2(found.ACCOUNT_CONNECTED);
      _undefined(null);
      if (null != arg1) {
        const userApplicationRoleConnections = guildId(initialAttemptedPlatformType[55]).fetchUserApplicationRoleConnections();
        const obj = guildId(initialAttemptedPlatformType[55]);
        userApplicationRoleConnections.then((arg0) => {
          outer1_29(arg0);
        }).catch(() => {

        });
        const nextPromise = userApplicationRoleConnections.then((arg0) => {
          outer1_29(arg0);
        });
      }
    };
    tmp = f77392();
    registerAsset = tmp;
    tmp2 = onCloseModal(registerAsset.useState(filter.CHECKS_REQUIRED), 2);
    first = tmp2[0];
    ActivityIndicator = first;
    CHECKS_REQUIRED = tmp2[1];
    tmp4 = onCloseModal(registerAsset.useState(null), 2);
    [useState, useState] = tmp4;
    tmp5 = onCloseModal(registerAsset.useState(false), 2);
    [useState, useState] = tmp5;
    tmp6 = onCloseModal(registerAsset.useState(true), 2);
    [useState, useState] = tmp6;
    tmp7 = onCloseModal(registerAsset.useState(false), 2);
    first1 = tmp7[0];
    c14 = first1;
    useState = tmp7[1];
    tmp9 = onCloseModal(registerAsset.useState(true), 2);
    [useState, useState] = tmp9;
    tmp10 = onCloseModal(registerAsset.useState(false), 2);
    [useState, useState] = tmp10;
    obj = require("initialize");
    items = [];
    items[0] = c14;
    stateFromStores = obj.useStateFromStores(items, () => first1.getAccounts());
    c20 = stateFromStores;
    obj2 = require("initialize");
    items1 = [];
    items1[0] = useState;
    stateFromStores1 = obj2.useStateFromStores(items1, () => outer1_9.getNewestTokens());
    obj3 = require("initialize");
    items2 = [];
    items2[0] = useState;
    f77388 = obj3.useStateFromStores(items2, () => outer1_12.getId());
    tmp13 = onCloseModal(registerAsset.useState(null), 2);
    first2 = tmp13[0];
    useStateFromStores = first2;
    useState = tmp13[1];
    tmp15 = onCloseModal(registerAsset.useState(null), 2);
    first3 = tmp15[0];
    useState = first3;
    useStateFromStores = tmp15[1];
    tmp17 = onCloseModal(registerAsset.useState(() => {
      let tmp = null;
      if (null != initialAttemptedPlatformType) {
        const obj = { platformType: initialAttemptedPlatformType };
        let tmp4 = null;
        if (null != _isNativeReflectConstruct) {
          tmp4 = _isNativeReflectConstruct;
        }
        obj.applicationId = tmp4;
        tmp = obj;
      }
      return tmp;
    }), 2);
    [useState, f77389] = tmp17;
    tmp18 = onCloseModal(registerAsset.useState(null), 2);
    [c28, useState] = tmp18;
    c30 = require("useTheme")();
    obj4 = require("initialize");
    items3 = [];
    items3[0] = useState;
    stateFromStores2 = obj4.useStateFromStores(items3, () => member.getMember(guildId, closure_21));
    f77390 = stateFromStores2;
    obj5 = require("initialize");
    items4 = [];
    items4[0] = useState;
    stateFromStores3 = obj5.useStateFromStores(items4, () => outer1_13.getMutableGuildChannelsForGuild(guildId));
    obj6 = require("initialize");
    items5 = [];
    items5[0] = useState;
    f77392 = obj6.useStateFromStores(items5, () => outer1_10.locale);
    values = Object.values(stateFromStores3);
    found = values.filter((channel) => {
      let canResult = outer1_16.can(_undefined.VIEW_CHANNEL, channel);
      if (canResult) {
        canResult = outer1_16.can(_undefined.SEND_MESSAGES, channel);
      }
      if (canResult) {
        canResult = role(initialAttemptedPlatformType[42])(channel).includes(role);
        const obj = role(initialAttemptedPlatformType[42])(channel);
      }
      return canResult;
    });
    filter = found;
    items6 = [, , , ];
    items6[0] = guildId;
    items6[1] = role.id;
    items6[2] = stateFromStores;
    items6[3] = stateFromStores1;
    effect = registerAsset.useEffect(() => {
      const guildRoleConnectionsEligibility = role(initialAttemptedPlatformType[43]).fetchGuildRoleConnectionsEligibility(guildId, role.id);
      guildRoleConnectionsEligibility.then((arr) => {
        outer1_9(arr);
        outer1_11((function checkEligibility(arr) {
          return arr.some((arr) => arr.every((result) => result.result));
        })(arr));
        outer1_13(false);
      });
    }, items6);
    items7 = [, , ];
    items7[0] = initialAttemptedPlatformType;
    items7[1] = role.id;
    items7[2] = guildId;
    effect1 = registerAsset.useEffect(() => {
      if (null == initialAttemptedPlatformType) {
        let obj = role(initialAttemptedPlatformType[44]);
        obj = { role_id: role.id };
        const merged = Object.assign(guildId(initialAttemptedPlatformType[45]).collectGuildAnalyticsMetadata(guildId));
        obj.track(lib.PASSPORT_CHALLENGE_VIEWED, obj);
        const obj3 = guildId(initialAttemptedPlatformType[45]);
      }
    }, items7);
    items8 = [, , , , ];
    items8[0] = first1;
    items8[1] = found.length;
    items8[2] = stateFromStores2;
    items8[3] = guildId;
    items8[4] = role.id;
    effect2 = registerAsset.useEffect(() => {
      let hasItem = first1;
      if (first1) {
        hasItem = null != stateFromStores2;
      }
      if (hasItem) {
        const roles = stateFromStores2.roles;
        hasItem = roles.includes(role.id);
      }
      if (hasItem) {
        member(false);
        if (found.length > 0) {
          callback2(found.ROLE_GRANTED);
        } else {
          let obj = role(initialAttemptedPlatformType[46]);
          obj.hideActionSheet();
        }
        obj = { role_id: role.id };
        const obj2 = role(initialAttemptedPlatformType[44]);
        const merged = Object.assign(guildId(initialAttemptedPlatformType[45]).collectGuildAnalyticsMetadata(guildId));
        obj2.track(lib.PASSPORT_CHALLENGE_FINISHED, obj);
        const obj4 = guildId(initialAttemptedPlatformType[45]);
      }
    }, items8);
    tmp24 = useState;
    obj = {};
    obj1 = { style: tmp.container };
    tmp25 = c30;
    tmp26 = useState;
    if (filter.CHECKS_REQUIRED === first) {
      tmp37 = useState;
      tmp38 = useState;
      obj2 = {};
      obj2.style = tmp.header;
      tmp39 = useState;
      tmp40 = guildId;
      tmp41 = closure_2;
      num5 = 24;
      obj3 = {};
      str3 = "heading-lg/extrabold";
      obj3.variant = "heading-lg/extrabold";
      num6 = 25;
      intl2 = require("getSystemLocale").intl;
      obj3.children = intl2.string(require("getSystemLocale").t.zOZh3R);
      obj2.children = useState(require("Text").Text, obj3);
      tmp36 = useState(useState, obj2);
    } else {
      tmp42 = filter;
      if (filter.ACCOUNT_CONNECTED === first) {
        tmp27 = role;
        tmp28 = closure_2;
        num = 35;
        str = "lastPlatformConnected is null";
        tmp29 = require("invariant")(null != first2, "lastPlatformConnected is null");
        num2 = 18;
        obj9 = require("getPlatformUserUrl");
        value = obj9.get(first2);
        name = undefined;
        if (null != value) {
          name = value.name;
        }
        if (null == name) {
          name1 = undefined;
          if (null != first3) {
            name1 = first3.name;
          }
          name = name1;
        }
        tmp33 = useState;
        tmp34 = guildId;
        tmp35 = closure_2;
        num3 = 24;
        obj4 = {};
        str2 = "heading-lg/extrabold";
        obj4.variant = "heading-lg/extrabold";
        obj4.style = tmp.header;
        num4 = 25;
        intl = require("getSystemLocale").intl;
        obj5 = {};
        obj5.platformName = name;
        obj4.children = intl.format(require("getSystemLocale").t.yQvgBO, obj5);
        tmp36 = useState(require("Text").Text, obj4);
      } else {
        tmp43 = filter;
        tmp36 = null;
        if (filter.ROLE_GRANTED === first) {
          tmp44 = useState;
          tmp45 = guildId;
          tmp46 = closure_2;
          num7 = 24;
          obj6 = {};
          str4 = "heading-lg/extrabold";
          obj6.variant = "heading-lg/extrabold";
          obj6.style = tmp.header;
          num8 = 25;
          intl3 = require("getSystemLocale").intl;
          obj6.children = intl3.string(require("getSystemLocale").t.najNdz);
          tmp36 = useState(require("Text").Text, obj6);
        }
      }
    }
    items9 = [, , ];
    items9[0] = tmp36;
    items9[1] = (function renderContent() {
      let applicationId = first;
      if (found.CHECKS_REQUIRED === first) {
        let tmp78 = null != closure_8;
        if (tmp78) {
          tmp78 = closure_8.length > 1;
        }
        let tmp81 = null != closure_8;
        if (tmp81) {
          tmp81 = 1 === closure_8.length;
        }
        if (tmp81) {
          tmp81 = 1 === closure_8[0].length;
        }
        if (!closure_12) {
          if (null != closure_8) {
            let obj = {};
            applicationId = tmp;
            obj.style = tmp.content;
            applicationId = guildId;
            applicationId = initialAttemptedPlatformType;
            applicationId = callback4;
            applicationId = outer1_8;
            applicationId = _undefined2;
            obj = { variant: "text-md/medium", color: "text-default" };
            const intl6 = guildId(initialAttemptedPlatformType[25]).intl;
            applicationId = guildId;
            applicationId = initialAttemptedPlatformType;
            const t = guildId(initialAttemptedPlatformType[25]).t;
            if (tmp81) {
              let jHfRvZ = t.jHfRvZ;
            } else {
              jHfRvZ = tmp78 ? t["mOQ8k+"] : t.U0olLg;
            }
            const obj1 = { roleName: role.name };
            obj.children = intl6.format(jHfRvZ, obj1);
            const items = [applicationId(guildId(initialAttemptedPlatformType[24]).Text, obj), , ];
            const obj2 = { style: tmp.connectionsChecksGroups };
            const obj3 = { eligibilityStatesGroups: closure_8, onPlatformAttempt: handlePlatformAttempt, onPlatformConnect: handlePlatformConnect, onPlatformConnected: handlePlatformConnected, onPlatformIdentityAuthorize: handlePlatformIdentityAuthorize };
            let platformType;
            if (null != closure_26) {
              platformType = closure_26.platformType;
            }
            applicationId = null;
            if (null != platformType) {
              applicationId = platformType;
            }
            obj3.initialAttemptedPlatformType = applicationId;
            applicationId = closure_26;
            applicationId = undefined;
            if (null != closure_26) {
              applicationId = closure_26;
              applicationId = closure_26.applicationId;
            }
            applicationId = null;
            obj3.initialAttemptedApplicationId = applicationId;
            obj2.children = _undefined2(reopenSelf, obj3);
            items[1] = _undefined2(outer1_8, obj2);
            applicationId = _undefined2;
            applicationId = guildId;
            applicationId = initialAttemptedPlatformType;
            const obj4 = { variant: "text-xs/normal", style: null, color: "text-default" };
            applicationId = tmp;
            obj4.style = tmp.footerText;
            const intl5 = guildId(initialAttemptedPlatformType[25]).intl;
            const obj5 = {};
            applicationId = first3;
            obj5.privacyPolicyUrl = first3.PRIVACY;
            applicationId = handleManageAuthorizedApplications;
            obj5.onAuthorizedApplicationsClick = handleManageAuthorizedApplications;
            applicationId = handleManageConnections;
            obj5.onConnectionsClick = handleManageConnections;
            obj4.children = intl5.format(guildId(initialAttemptedPlatformType[25]).t.gsgvxh, obj5);
            items[2] = _undefined2(guildId(initialAttemptedPlatformType[24]).Text, obj4);
            obj.children = items;
            applicationId = applicationId(applicationId, obj);
            const tmp87 = _undefined2;
            const tmp88 = outer1_8;
            const tmp90 = _undefined2;
            const tmp91 = reopenSelf;
          }
          return applicationId;
        }
        applicationId = _undefined2;
        applicationId = first;
        const obj6 = { size: "large" };
        applicationId = tmp;
        obj6.style = tmp.loading;
        applicationId = _undefined2(first, obj6);
      } else {
        applicationId = found;
        if (found.ACCOUNT_CONNECTED === applicationId) {
          role(initialAttemptedPlatformType[35])(null != first2, "lastPlatformConnected is null");
          found = stateFromStores.find((type) => outer1_22 === type.type);
          let found1;
          if (null != closure_28) {
            found1 = closure_28.find((application) => {
              let id;
              if (null != outer1_24) {
                id = outer1_24.id;
              }
              return application.application.id === id;
            });
          }
          const obj7 = { style: tmp.content };
          const obj8 = { style: tmp.accountConnectedContainer };
          if (null == found) {
            if (null == found1) {
              const obj9 = { size: "large", style: tmp.loading };
              let tmp33Result = _undefined2(first, obj9);
            }
            obj8.children = tmp33Result;
            const items1 = [tmp31(tmp32, obj8), ];
            const obj10 = { variant: "text-md/normal", color: "text-default" };
            const intl4 = guildId(initialAttemptedPlatformType[25]).intl;
            const obj11 = { privacyPolicyUrl: first3.PRIVACY, onAuthorizedApplicationsClick: handleManageAuthorizedApplications, onConnectionsClick: handleManageConnections };
            obj10.children = intl4.format(guildId(initialAttemptedPlatformType[25]).t.gsgvxh, obj11);
            items1[1] = _undefined2(guildId(initialAttemptedPlatformType[24]).Text, obj10);
            obj7.children = items1;
            return tmp28(tmp29, obj7);
          }
          const obj12 = {};
          let tmp35 = null;
          if (null != found) {
            const obj13 = {};
            const obj14 = { style: tmp.accountConnectedPreview };
            const obj15 = { variant: "eyebrow", color: "text-default" };
            const intl = guildId(initialAttemptedPlatformType[25]).intl;
            obj15.children = intl.string(guildId(initialAttemptedPlatformType[25]).t.TOjkEg);
            const items2 = [_undefined2(guildId(initialAttemptedPlatformType[24]).Text, obj15), ];
            const obj16 = { account: found, userId: closure_21, theme: callback4, locale: closure_32, style: tmp.accountConnectedPreviewConnectedUserAccount, showMetadata: closure_16, showInvisibleIcon: closure_18 };
            items2[1] = _undefined2(guildId(initialAttemptedPlatformType[57]).ConnectedUserAccount, obj16);
            obj14.children = items2;
            const items3 = [callback4(outer1_8, obj14), ];
            const obj17 = { style: tmp.accountConnectedPrivacy };
            const obj18 = { variant: "eyebrow", color: "text-default" };
            const intl2 = guildId(initialAttemptedPlatformType[25]).intl;
            obj18.children = intl2.string(guildId(initialAttemptedPlatformType[25]).t.jndPhX);
            const items4 = [_undefined2(guildId(initialAttemptedPlatformType[24]).Text, obj18), ];
            const obj19 = { account: found, setShowPreviewInvisibleIcon: closure_19, setShowPreviewMetadata: closure_17 };
            items4[1] = _undefined2(handlePlatformAttempt, obj19);
            obj17.children = items4;
            items3[1] = callback4(outer1_8, obj17);
            obj13.children = items3;
            tmp35 = callback4(stateFromStores2, obj13);
          }
          const items5 = [tmp35, ];
          let tmp56 = null;
          if (null != found1) {
            const obj20 = { style: tmp.accountConnectedPreview };
            const obj21 = { variant: "eyebrow", color: "text-default" };
            const intl3 = guildId(initialAttemptedPlatformType[25]).intl;
            obj21.children = intl3.string(guildId(initialAttemptedPlatformType[25]).t.TOjkEg);
            const items6 = [_undefined2(guildId(initialAttemptedPlatformType[24]).Text, obj21), ];
            const obj22 = { applicationRoleConnection: found1, theme: callback4, locale: closure_32, style: tmp.accountConnectedPreviewConnectedUserAccount };
            items6[1] = _undefined2(guildId(initialAttemptedPlatformType[57]).ConnectedApplicationUserRoleAccount, obj22);
            obj20.children = items6;
            tmp56 = callback4(outer1_8, obj20);
          }
          items5[1] = tmp56;
          obj12.children = items5;
          tmp33Result = callback4(stateFromStores2, obj12);
          const tmp33 = callback4;
          const tmp34 = stateFromStores2;
        } else {
          applicationId = found;
          if (found.ROLE_GRANTED === applicationId) {
            obj = { style: tmp.content };
            const obj23 = { style: tmp.roleGranted };
            const obj24 = { guildId, style: tmp.verifiedIcon, role, size: 24 };
            const items7 = [_undefined2(role(initialAttemptedPlatformType[58]), obj24), ];
            const obj25 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: tmp.roleGrantedName, children: role.name };
            items7[1] = _undefined2(guildId(initialAttemptedPlatformType[24]).Text, obj25);
            obj23.children = items7;
            const items8 = [callback4(outer1_8, obj23), ];
            const obj26 = { style: tmp.channelsGranted, children: found.map((channel) => callback(handleManageConnections, { channel }, channel.id)) };
            items8[1] = _undefined2(outer1_8, obj26);
            obj.children = items8;
            return callback4(outer1_8, obj);
          } else {
            return null;
          }
        }
      }
    })();
    items9[2] = (function renderFooter() {
      if (found.CHECKS_REQUIRED === first) {
        let obj = {
          variant: "primary",
          onPress() {
              return (function handleAssignRole() {
                return outer2_37(...arguments);
              })();
            }
        };
        let tmp24 = closure_12;
        if (!closure_12) {
          tmp24 = !closure_10;
        }
        if (!tmp24) {
          tmp24 = first1;
        }
        obj.disabled = tmp24;
        const intl4 = guildId(initialAttemptedPlatformType[25]).intl;
        obj.text = intl4.string(guildId(initialAttemptedPlatformType[25]).t["8SuVoE"]);
        obj.grow = true;
        return _undefined2(guildId(initialAttemptedPlatformType[59]).Button, obj);
      } else if (found.ACCOUNT_CONNECTED === tmp) {
        obj = {
          variant: "primary",
          onPress() {
              return outer1_7(found.CHECKS_REQUIRED);
            }
        };
        const intl3 = guildId(initialAttemptedPlatformType[25]).intl;
        obj.text = intl3.string(guildId(initialAttemptedPlatformType[25]).t.i4jeWR);
        obj.grow = true;
        return _undefined2(guildId(initialAttemptedPlatformType[59]).Button, obj);
      } else {
        let someResult;
        if (null != closure_8) {
          someResult = closure_8.flat().some((application_id) => null == application_id.application_id);
          const flatResult = closure_8.flat();
        }
        const obj1 = {};
        const obj2 = {
          variant: "primary",
          onPress() {
              outer1_34(true);
            }
        };
        const intl = guildId(initialAttemptedPlatformType[25]).intl;
        obj2.text = intl.string(guildId(initialAttemptedPlatformType[25]).t.cpT0Cq);
        obj2.grow = true;
        const items = [_undefined2(guildId(initialAttemptedPlatformType[59]).Button, obj2), ];
        let tmp10 = null;
        if (tmp4) {
          const obj3 = { style: tmp.manageConnectionsButton };
          const obj4 = { variant: "secondary", onPress: handleManageConnections };
          const intl2 = guildId(initialAttemptedPlatformType[25]).intl;
          obj4.text = intl2.string(guildId(initialAttemptedPlatformType[25]).t.VXV55P);
          obj4.grow = true;
          obj3.children = _undefined2(guildId(initialAttemptedPlatformType[59]).Button, obj4);
          tmp10 = _undefined2(outer1_8, obj3);
        }
        items[1] = tmp10;
        obj1.children = items;
        return closure_30(stateFromStores2, obj1);
      }
    })();
    obj1.children = items9;
    obj.children = tmp25(tmp26, obj1);
    return tmp24(require("Background").BottomSheet, obj);
  }
}

export default GuildRoleConnectionsConnectAccountsActionSheet;
