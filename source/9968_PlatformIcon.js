// Module ID: 9968
// Function ID: 77058
// Name: PlatformIcon
// Dependencies: []

// Module 9968 (PlatformIcon)
function PlatformIcon(platformType) {
  const tmp = callback4();
  let obj = importDefault(dependencyMap[18]);
  const value = obj.get(platformType.platformType);
  const tmp2 = importDefault(dependencyMap[17])();
  const obj2 = arg1(dependencyMap[19]);
  const icon = value.icon;
  const source = obj2.makeSource(arg1(dependencyMap[20]).isThemeLight(tmp2) ? icon.lightPNG : icon.darkPNG);
  obj = { source, style: tmp.platformIcon, disableColor: true };
  return callback2(arg1(dependencyMap[21]).Icon, obj);
}
function ChannelName(channel) {
  channel = channel.channel;
  const tmp = callback4();
  let obj = arg1(dependencyMap[22]);
  const channelIcon = obj.getChannelIcon(channel);
  obj = { style: items };
  const items = [tmp.channelName, channel.style];
  let tmp6 = null;
  if (null != channelIcon) {
    obj = { source: channelIcon, style: tmp.channelNameIcon };
    tmp6 = callback2(arg1(dependencyMap[21]).Icon, obj);
  }
  const items1 = [tmp6, ];
  const obj1 = { fullscreen: null, headerShown: "sEAnVH", mostRecentQuery: "y", fetching: "isArray", style: tmp.channelNameText, children: importDefault(dependencyMap[23])(channel) };
  items1[1] = callback2(arg1(dependencyMap[24]).Text, obj1);
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
        const intl = arg1(dependencyMap[25]).intl;
        let obj = { description };
        const _Math = Math;
        const _Number = Number;
        obj.count = Math.max(0, Number(value) - 1);
        let formatResult = intl.format(arg1(dependencyMap[25]).t.2p7dA3, obj);
      } else {
        formatResult = description;
        if (constants2.GREATER_THAN === operator) {
          const intl2 = arg1(dependencyMap[25]).intl;
          obj = { description };
          const _Math2 = Math;
          const _Number2 = Number;
          obj.count = Math.max(0, Number(value) + 1);
          formatResult = intl2.format(arg1(dependencyMap[25]).t.2p7dA3, obj);
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
      obj = arg1(dependencyMap[26]);
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
      tmp25Result = closure_29(arg1(dependencyMap[24]).Text, obj2);
      const tmp25 = closure_29;
    }
    return tmp25Result;
  }
}
function IdentityConnectionsCheckGroup(eligibilityState) {
  eligibilityState = eligibilityState.eligibilityState;
  const arg1 = eligibilityState;
  const onAttempted = eligibilityState.onAttempted;
  const importDefault = onAttempted;
  const onIdentityAuthorize = eligibilityState.onIdentityAuthorize;
  const dependencyMap = onIdentityAuthorize;
  let application;
  let closure_9;
  const tmp = callback4();
  let obj = arg1(dependencyMap[27]);
  const getOrFetchApplicationBatched = obj.useGetOrFetchApplicationBatched(eligibilityState.application_id);
  const tmp3 = importDefault(dependencyMap[28])(getOrFetchApplicationBatched);
  const canStartAuthorization = tmp3.canStartAuthorization;
  let closure_3 = canStartAuthorization;
  const startAuthorization = tmp3.startAuthorization;
  let closure_4 = startAuthorization;
  let React = canStartAuthorization;
  const identity_connected_account_type = eligibilityState.identity_connected_account_type;
  const identity_auth_required_scopes = eligibilityState.identity_auth_required_scopes;
  let flag = canStartAuthorization;
  if (!canStartAuthorization) {
    flag = canStartAuthorization;
    if (null != identity_connected_account_type) {
      flag = canStartAuthorization;
      if (null != identity_auth_required_scopes) {
        let obj1 = importDefault(dependencyMap[18]);
        const value = obj1.get(identity_connected_account_type);
        flag = canStartAuthorization;
        if (tmp8) {
          React = true;
          flag = true;
        }
        const tmp8 = null != value && value.enabled;
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
      const prototype = ctor.prototype;
      tmp3 = new ctor(application.bot);
    }
    return tmp3;
  }, items);
  const result = eligibilityState.result;
  closure_9 = result;
  if (null != memo) {
    obj = { style: tmp.botTag, verified: memo.isVerifiedBot() };
    const tmp13 = importDefault(dependencyMap[29]);
    const tmp9 = callback2(importDefault(dependencyMap[29]), obj);
  }
  if (result) {
    obj = { source: importDefault(tmp16[30]), style: tmp.connectionsChecksGroupCheckmark };
    let tmp14Result = tmp14(tmp15(tmp16[21]).Icon, obj);
  } else if (flag) {
    obj1 = { source: importDefault(tmp16[31]), style: tmp.connectionsChecksGroupCaret };
    tmp14Result = tmp14(tmp15(tmp16[21]).Icon, obj1);
  } else {
    const obj2 = {};
    const intl = tmp15(tmp16[25]).intl;
    obj2.children = intl.string(tmp15(tmp16[25]).t.cEts68);
    tmp14Result = tmp14(tmp15(tmp16[24]).Text, obj2);
  }
  const items1 = [result, flag, canStartAuthorization, startAuthorization, onAttempted, onIdentityAuthorize, , , , ];
  ({ connection_type: arr2[6], application_id: arr2[7] } = eligibilityState);
  items1[8] = identity_connected_account_type;
  items1[9] = identity_auth_required_scopes;
  const callback = React.useCallback(() => {
    if (!result) {
      if (closure_5) {
        let someResult = null != identity_connected_account_type;
        if (someResult) {
          const accounts = accounts.getAccounts();
          someResult = accounts.some((type) => type.type === closure_6);
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
          let obj = { analyticsLocations: [false] };
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
  const officialApplicationIds = arg1(dependencyMap[26]).officialApplicationIds;
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
      const obj4 = { style: tmp.appIcon, user: memo, size: arg1(dependencyMap[21]).AvatarSizes.XSMALL, guildId: undefined };
      tmp28 = callback2(arg1(dependencyMap[21]).Avatar, obj4);
    }
    const items3 = [tmp28, , ];
    const obj5 = { style: tmp.connectionsChecksGroupTextContainer };
    const obj6 = { style: tmp.connectionsChecksGroupTextNameContainer };
    const obj7 = {};
    let name;
    if (null != application) {
      name = application.name;
    }
    obj7.children = name;
    const items4 = [callback2(arg1(dependencyMap[24]).Text, obj7), tmp9];
    obj6.children = items4;
    const items5 = [closure_30(application, obj6), ];
    let tmp40 = null;
    if (!flag) {
      tmp40 = null;
      if (!result) {
        const obj8 = { style: tmp.connectionsCheck };
        const intl2 = arg1(dependencyMap[25]).intl;
        obj8.children = intl2.string(arg1(dependencyMap[25]).t.+z5dYe);
        tmp40 = callback2(arg1(dependencyMap[24]).Text, obj8);
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
  let initialAttemptedApplicationId;
  let initialAttemptedPlatformType;
  let onPlatformConnected;
  eligibilityStatesGroups = eligibilityStatesGroups.eligibilityStatesGroups;
  const arg1 = eligibilityStatesGroups;
  ({ onPlatformAttempt: closure_1, onPlatformConnect: closure_2, onPlatformConnected } = eligibilityStatesGroups);
  let closure_3 = onPlatformConnected;
  ({ onPlatformIdentityAuthorize: closure_4, initialAttemptedPlatformType, initialAttemptedApplicationId } = eligibilityStatesGroups);
  let closure_10;
  let closure_11;
  let closure_12;
  let closure_13;
  let closure_14;
  let closure_15;
  let closure_16;
  const React = callback4();
  const tmp = callback(React.useState({}), 2);
  let closure_6 = tmp[0];
  let closure_7 = tmp[1];
  [closure_8, closure_9] = callback(React.useState(0), 2);
  let tmp4 = null;
  if (null != initialAttemptedPlatformType) {
    tmp4 = initialAttemptedPlatformType;
  }
  const tmp5 = callback(React.useState(tmp4), 2);
  const first = tmp5[0];
  closure_10 = first;
  closure_11 = tmp5[1];
  let tmp8 = null;
  if (null != initialAttemptedApplicationId) {
    tmp8 = initialAttemptedApplicationId;
  }
  const tmp9 = callback(React.useState(tmp8), 2);
  const first1 = tmp9[0];
  closure_12 = first1;
  closure_13 = tmp9[1];
  const items = [eligibilityStatesGroups];
  const memo = React.useMemo(() => callback(closure_2[32]).flatten(eligibilityStatesGroups), items);
  closure_14 = memo;
  const items1 = [memo];
  const memo1 = React.useMemo(() => callback(closure_2[32]).groupBy(memo, (application_id) => {
    let str = "";
    if (null != application_id.application_id) {
      const _HermesInternal = HermesInternal;
      str = ":" + application_id.application_id;
    }
    return "" + application_id.connection_type + str;
  }), items1);
  closure_15 = memo1;
  const items2 = [memo];
  const effect = React.useEffect(() => callback2(Date.now()), items2);
  const items3 = [memo1, first, first1, onPlatformConnected];
  const effect1 = React.useEffect(() => {
    if (null != first) {
      let str2 = "";
      if (null != first1) {
        const _HermesInternal = HermesInternal;
        str2 = ":" + first1;
      }
      const _HermesInternal2 = HermesInternal;
      if (null != memo1["" + first + str2]) {
        if (arr.every((result) => result.result)) {
          const first = arr[0];
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
  let obj = arg1(dependencyMap[33]);
  closure_16 = obj.useToken(importDefault(dependencyMap[16]).unsafe_rawColors.GREEN_330);
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
    if (str.startsWith("" + closure_20 + ":")) {
      if (null != arr[0]) {
        let obj = {
          eligibilityState: arr[0],
          onAttempted(arg0, arg1) {
                callback2(arg0);
                callback3(arg1);
                if (null != arg0) {
                  value();
                }
              },
          onIdentityAuthorize: closure_4
        };
        return callback3(closure_37, obj, str);
      }
    }
    const found = arr.find((operator) => null == operator.operator);
    const found1 = arr.filter((operator) => null != operator.operator);
    const tmp3 = (null == found || found.result) && found1.every((result) => result.result);
    const found2 = arr.find((application) => null != application.application);
    obj = value(application[18]);
    const value = obj.get(str);
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
    const officialApplicationIds = eligibilityStatesGroups(application[26]).officialApplicationIds;
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
      type = closure_19;
    }
    let tmp18 = !tmp3 && null != tmp17;
    if (tmp18) {
      tmp18 = tmp17 <= closure_8;
    }
    if (tmp3) {
      obj = { source: value(tmp22[30]), style: closure_5.connectionsChecksGroupCheckmark };
      let tmp20Result = tmp20(tmp21(tmp22[21]).Icon, obj);
    } else if (tmp18) {
      const obj1 = { INTEGRATION_CREATE: "png", ConstraintReasonCode: "absolute" };
      const intl2 = tmp21(tmp22[25]).intl;
      obj1.children = intl2.string(tmp21(tmp22[25]).t.5911Lb);
      tmp20Result = tmp20(tmp21(tmp22[24]).Text, obj1);
    } else if (tmp6) {
      const obj2 = { source: value(tmp22[31]), style: closure_5.connectionsChecksGroupCaret };
      tmp20Result = tmp20(tmp21(tmp22[21]).Icon, obj2);
    } else {
      const obj3 = {};
      const intl = tmp21(tmp22[25]).intl;
      obj3.children = intl.string(tmp21(tmp22[25]).t.cEts68);
      tmp20Result = tmp20(tmp21(tmp22[24]).Text, obj3);
    }
    let type1;
    if (null != value) {
      type1 = value.type;
    }
    let tmp29;
    if (type1 === constants.STEAM) {
      const intl3 = eligibilityStatesGroups(application[25]).intl;
      const stringResult = intl3.string(eligibilityStatesGroups(application[25]).t.NcZh6K);
      const eligibilityStatesGroups = stringResult;
      tmp29 = stringResult;
    }
    if (hasItem) {
      const obj4 = { style: closure_5.botTag, guildId: closure_28, roleColor: closure_16, size: 16 };
      let tmp33 = callback3(value(application[34]), obj4);
    } else if (null != tmp9) {
      const obj5 = { style: closure_5.botTag, verified: tmp9.isVerifiedBot() };
      tmp33 = callback3(value(application[29]), obj5);
      const tmp37 = value(application[29]);
    }
    const obj6 = { accessibilityRole: "button" };
    const items = [closure_5.connectionsChecksGroup, , ];
    let prop = null;
    if (tmp3) {
      prop = closure_5.connectionsChecksGroupPassed;
    }
    items[1] = prop;
    let prop1 = null;
    if (!(null == value || value.enabled)) {
      prop1 = closure_5.connectionsChecksGroupPlatformDisabled;
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
        type = closure_19;
      }
      let tmp3 = null;
      if (null != application) {
        tmp3 = application;
      }
      const obj = {};
      const merged = Object.assign(closure_6);
      obj[type] = Date.now();
      callback(obj);
      callback2(type);
      let id;
      if (null != tmp3) {
        id = tmp3.id;
      }
      let tmp9 = null;
      if (null != id) {
        tmp9 = id;
      }
      closure_13(tmp9);
      value();
      application(type, tmp3);
    };
    let tmp52 = null;
    if (!tmp3) {
      tmp52 = null;
      if (tmp18) {
        const obj7 = { style: closure_5.connectionsChecksGroupRequirementsNotMet };
        const obj8 = {};
        const intl4 = eligibilityStatesGroups(application[25]).intl;
        obj8.children = intl4.string(eligibilityStatesGroups(application[25]).t.UB3hKo);
        obj7.children = callback3(eligibilityStatesGroups(application[24]).Text, obj8);
        tmp52 = callback3(closure_8, obj7);
      }
    }
    const items1 = [tmp52, , , , ];
    let tmp59 = null;
    if (null != value) {
      const obj9 = { platformType: value.type };
      tmp59 = callback3(closure_34, obj9);
    }
    items1[1] = tmp59;
    let tmp62 = null;
    if (null != tmp9) {
      const obj10 = { style: closure_5.appIcon, user: tmp9, size: eligibilityStatesGroups(application[21]).AvatarSizes.XSMALL, guildId: undefined };
      tmp62 = callback3(eligibilityStatesGroups(application[21]).Avatar, obj10);
    }
    items1[2] = tmp62;
    const obj11 = { style: closure_5.connectionsChecksGroupTextContainer };
    const obj12 = { style: closure_5.connectionsChecksGroupTextNameContainer };
    const obj13 = {};
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
    const items2 = [callback3(eligibilityStatesGroups(application[24]).Text, obj13), tmp33, ];
    let tmp74 = null;
    if (null != tmp29) {
      const obj14 = {
        onPress() {
            value(application[35])(null != stringResult, "tooltip is null");
            let obj = value(application[36]);
            obj = { key: "CONNECTIONS_STEAM_TOOLTIP", icon: value(application[37]), content: stringResult };
            obj.open(obj);
          }
      };
      const obj15 = { source: value(application[37]), size: eligibilityStatesGroups(application[21]).Icon.Sizes.SMALL_20, style: closure_5.connectionsChecksGroupTextNameInfoIcon };
      obj14.children = callback3(eligibilityStatesGroups(application[21]).Icon, obj15);
      tmp74 = callback3(closure_7, obj14);
    }
    items2[2] = tmp74;
    obj12.children = items2;
    const items3 = [
      closure_30(closure_8, obj12),
      found1.map((arg0) => {
        let connection_metadata_field;
        let connection_type;
        let description;
        let operator;
        let result;
        let value;
        ({ connection_metadata_field, operator, value } = arg0);
        ({ connection_type, result, description } = arg0);
        value(application[35])(null != connectionMetadataField, "connectionMetadataField is null");
        value(application[35])(null != operator, "operator is null");
        value(application[35])(null != value, "value is null");
        return callback4(closure_36, { connectionType, connectionMetadataField, operator, value, result, description }, connectionMetadataField);
      })
    ];
    obj11.children = items3;
    items1[3] = closure_30(closure_8, obj11);
    items1[4] = tmp20Result;
    obj6.children = items1;
    return closure_30(closure_7, obj6, str);
  });
  return callback2(closure_31, obj);
}
function ConnectedUserAccountOptions(account) {
  account = account.account;
  const arg1 = account;
  ({ setShowPreviewInvisibleIcon: closure_1, setShowPreviewMetadata: closure_2 } = account);
  const tmp2 = callback(React.useState(account.friendSync), 2);
  let closure_3 = tmp2[1];
  const tmp3 = callback(React.useState(account.showActivity), 2);
  const callback = tmp3[1];
  const tmp4 = callback(React.useState(1 === account.metadataVisibility), 2);
  const first = tmp4[0];
  const React = first;
  let closure_6 = tmp4[1];
  const tmp6 = callback(React.useState(1 === account.visibility), 2);
  const first1 = tmp6[0];
  let closure_8 = tmp6[1];
  importDefault(dependencyMap[38])(() => {
    callback(!first1);
    callback2(first);
  });
  let obj = importDefault(dependencyMap[18]);
  const value = obj.get(account.type);
  let tmp10;
  if (set.has(account.type)) {
    obj = {};
    const intl = arg1(dependencyMap[25]).intl;
    obj.label = intl.string(arg1(dependencyMap[25]).t.+KCMSi);
    obj.value = tmp2[0];
    obj.onValueChange = function onValueChange(enabled) {
      callback3(enabled);
      callback(closure_2[40]).setFriendSync(account.type, account.id, enabled);
    };
    tmp10 = callback2(arg1(dependencyMap[39]).FormSwitchRow, obj);
  }
  let tmp14;
  if (set2.has(account.type)) {
    obj = {};
    const intl2 = arg1(dependencyMap[25]).intl;
    const obj1 = { platform: value.name };
    obj.label = intl2.formatToPlainString(arg1(dependencyMap[25]).t.6u6J0q, obj1);
    obj.value = tmp3[0];
    obj.onValueChange = function onValueChange(show_activity) {
      callback4(show_activity);
      callback(closure_2[40]).setShowActivity(account.type, account.id, show_activity);
    };
    tmp14 = callback2(arg1(dependencyMap[39]).FormSwitchRow, obj);
  }
  let tmp18;
  if (true === value.hasMetadata) {
    const obj2 = {};
    const intl3 = arg1(dependencyMap[25]).intl;
    obj2.label = intl3.string(arg1(dependencyMap[25]).t.FYKGsL);
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
      const result = callback(callback2[40]).setMetadataVisibility(type, id, num);
    };
    tmp18 = callback2(arg1(dependencyMap[39]).FormSwitchRow, obj2);
  }
  const obj3 = { style: callback4().accountConnectedPrivacyOptionsContainer };
  const obj4 = {};
  const intl4 = arg1(dependencyMap[25]).intl;
  obj4.label = intl4.string(arg1(dependencyMap[25]).t.f7yOAX);
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
    callback(closure_2[40]).setVisibility(type, id, num);
  };
  const items = [callback2(arg1(dependencyMap[39]).FormSwitchRow, obj4), tmp18, tmp14, tmp10];
  obj3.children = items;
  return callback3(closure_8, obj3);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ ActivityIndicator: closure_6, Pressable: closure_7, View: closure_8 } = arg1(dependencyMap[3]));
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
let closure_13 = importDefault(dependencyMap[8]);
let closure_14 = importDefault(dependencyMap[9]);
let closure_15 = importDefault(dependencyMap[10]);
let closure_16 = importDefault(dependencyMap[11]);
const tmp2 = arg1(dependencyMap[3]);
({ MetadataFields: closure_17, OperatorTypes: closure_18, GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE: closure_19, GUILD_ROLE_CONNECTION_APPLICATION_IDENTITY_CONNECTION_TYPE: closure_20 } = arg1(dependencyMap[12]));
const tmp3 = arg1(dependencyMap[12]);
({ PlatformTypes: closure_21, UserSettingsSections: closure_22, AnalyticEvents: closure_23, MarketingURLs: closure_24, FRIEND_SYNC_PLATFORM_TYPES: closure_25, ACTIVITY_PLATFORM_TYPES: closure_26, Permissions: closure_27, EMPTY_STRING_SNOWFLAKE_ID: closure_28 } = arg1(dependencyMap[13]));
const tmp4 = arg1(dependencyMap[13]);
({ jsx: closure_29, jsxs: closure_30, Fragment: closure_31 } = arg1(dependencyMap[14]));
let obj = arg1(dependencyMap[15]);
obj = { container: { padding: 12 }, connectionsChecksGroups: {} };
obj = { "Bool(false)": true, "Bool(false)": "/assets/images/native", "Bool(false)": 24, "Bool(false)": 24, "Bool(false)": null, "Bool(false)": "f2561d66a35f036565003b940731b99f", "Bool(false)": "ic_verified_check_24px", "Bool(false)": "png", "Bool(false)": true, "Bool(false)": 20, borderColor: importDefault(dependencyMap[16]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[16]).radii.md };
obj.connectionsChecksGroup = obj;
const tmp5 = arg1(dependencyMap[14]);
obj.connectionsChecksGroupPassed = { borderColor: importDefault(dependencyMap[16]).colors.BACKGROUND_BASE_LOWEST, backgroundColor: importDefault(dependencyMap[16]).colors.BACKGROUND_BASE_LOWEST };
const obj1 = { borderColor: importDefault(dependencyMap[16]).colors.BACKGROUND_BASE_LOWEST, backgroundColor: importDefault(dependencyMap[16]).colors.BACKGROUND_BASE_LOWEST };
obj.connectionsChecksGroupPlatformDisabled = { backgroundColor: importDefault(dependencyMap[16]).colors.BORDER_SUBTLE };
const obj2 = { backgroundColor: importDefault(dependencyMap[16]).colors.BORDER_SUBTLE };
obj.connectionsChecksGroupRequirementsNotMet = { borderRadius: importDefault(dependencyMap[16]).radii.md, backgroundColor: importDefault(dependencyMap[16]).colors.BACKGROUND_FEEDBACK_CRITICAL };
obj.connectionsChecksGroupTextContainer = { flex: 1 };
obj.connectionsChecksGroupTextNameContainer = { -9223372036854775808: true, filter: true };
const obj3 = { borderRadius: importDefault(dependencyMap[16]).radii.md, backgroundColor: importDefault(dependencyMap[16]).colors.BACKGROUND_FEEDBACK_CRITICAL };
obj.connectionsChecksGroupTextNameInfoIcon = { marginLeft: 4, tintColor: importDefault(dependencyMap[16]).colors.TEXT_FEEDBACK_WARNING };
const obj5 = { isDowngrading: "#DC3E97", type: "#F957B3", pendingDowngrade: "#730BC8", tintColor: importDefault(dependencyMap[16]).colors.TEXT_FEEDBACK_POSITIVE };
obj.connectionsChecksGroupCheckmark = obj5;
const obj6 = { isDowngrading: "#DC3E97", type: "#F957B3", pendingDowngrade: "#730BC8", tintColor: importDefault(dependencyMap[16]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.connectionsChecksGroupCaret = obj6;
obj.connectionsCheck = { marginTop: 4 };
obj.platformIcon = {};
obj.channelName = {};
const obj4 = { marginLeft: 4, tintColor: importDefault(dependencyMap[16]).colors.TEXT_FEEDBACK_WARNING };
obj.channelNameIcon = { tintColor: importDefault(dependencyMap[16]).colors.TEXT_MUTED };
obj.channelNameText = { overflow: "hidden" };
obj.header = { damping: "done", mass: "construct", stiffness: "Date", id: "isArray" };
obj.content = { width: "100%" };
obj.footerText = { marginBottom: 16 };
obj.accountConnectedContainer = { 0: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004403083478739514, 9223372036854775807: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000278987813409362, 0: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000184 };
obj.accountConnectedPreview = { width: "100%" };
const obj8 = { type: true, x: true, y: true, borderRadius: importDefault(dependencyMap[16]).radii.xs, borderColor: importDefault(dependencyMap[16]).colors.BORDER_SUBTLE };
obj.accountConnectedPreviewConnectedUserAccount = obj8;
obj.accountConnectedPrivacy = { "Null": false, "Null": false };
const obj9 = { FAVORITES_UNCATEGORIZED_PARENT_ID: null, borderTopWidth: "0da6e85b52f6338da38daa05a2b6d1cc", getClass: "ic_mic_24px", misc: "png", CallbackError: true, createICYMIStyles: "/assets/modules/stage_channels/native/images", borderColor: importDefault(dependencyMap[16]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[16]).radii.xs };
obj.accountConnectedPrivacyOptionsContainer = obj9;
const obj7 = { tintColor: importDefault(dependencyMap[16]).colors.TEXT_MUTED };
obj.roleGranted = { backgroundColor: importDefault(dependencyMap[16]).colors.BACKGROUND_BASE_LOWEST };
obj.roleGrantedName = { controlBarSize: false, IN_APP_GUILD_TEMPLATES_MODAL_KEY: false };
obj.verifiedIcon = { marginRight: 8 };
const obj11 = { rows: "Trinkets Null", cardSize: 1, overscroll: 0, unusedSpace: 180, title: 0, fullscreen: false, backgroundColor: importDefault(dependencyMap[16]).colors.BACKGROUND_MOD_NORMAL };
obj.channelsGranted = obj11;
obj.manageConnectionsButton = { marginTop: 8 };
obj.loading = {};
obj.appIcon = { marginRight: 8 };
obj.botTag = { marginLeft: 4 };
let closure_32 = obj.createStyles(obj);
let closure_33 = { CHECKS_REQUIRED: 0, [0]: "CHECKS_REQUIRED", ACCOUNT_CONNECTED: 1, [1]: "ACCOUNT_CONNECTED", ROLE_GRANTED: 2, [2]: "ROLE_GRANTED" };
const obj10 = { backgroundColor: importDefault(dependencyMap[16]).colors.BACKGROUND_BASE_LOWEST };
const result = arg1(dependencyMap[61]).fileFinishedImporting("modules/connections/native/GuildRoleConnectionsConnectAccountsActionSheet.tsx");
class GuildRoleConnectionsConnectAccountsActionSheet {
  constructor(arg0) {
    guildId = global.guildId;
    arg1 = guildId;
    role = global.role;
    importDefault = role;
    initialAttemptedPlatformType = global.initialAttemptedPlatformType;
    dependencyMap = initialAttemptedPlatformType;
    ({ initialAttemptedApplicationId: closure_3, onCloseModal: closure_4 } = global);
    Pressable = undefined;
    closure_15 = undefined;
    AnalyticEvents = undefined;
    MarketingURLs = undefined;
    f77113 = undefined;
    jsx = undefined;
    handleClose = function handleClose() {
      let flag = true;
      if (true === undefined) {
        flag = false;
      }
      if (flag) {
        if (null != callback2) {
          callback2();
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
      const obj = callback(tmp);
      const _handleAssignRole = obj;
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
      obj.onCloseModal = closure_4;
      obj2.openLazy(resolved, guildRoleConnectionsConnectAccountsActionSheetKey, obj);
    };
    handlePlatformAttempt = function handlePlatformAttempt() {
      let obj = role(initialAttemptedPlatformType[44]);
      obj = { role_id: role.id };
      const merged = Object.assign(guildId(initialAttemptedPlatformType[45]).collectGuildAnalyticsMetadata(guildId));
      obj.track(lib.PASSPORT_CHALLENGE_STARTED, obj);
    };
    handlePlatformConnect = function handlePlatformConnect(platformType, role_connections_verification_url) {
      const guildId = platformType;
      const role = role_connections_verification_url;
      const obj = {
        platformType,
        location: "Verified Roles Connect Accounts Modal",
        onClose(arg0, self) {
          let id;
          if (null != self) {
            id = self.id;
          }
          let tmp5 = null;
          if (null != id) {
            tmp5 = id;
          }
          const obj = {};
          let prop;
          if (null != self) {
            prop = self.role_connections_verification_url;
          }
          obj.overrideUrl = prop;
          closure_38(arg0, tmp5, obj);
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
      const guildId = applicationId;
      const role = applicationId.wasAlreadyConnected;
      ({ scopes, connectedAccountProvider } = applicationId);
      let obj = role(initialAttemptedPlatformType[46]);
      obj.hideActionSheet();
      const combined = "OAuth2AuthorizeModal-" + applicationId;
      const initialAttemptedPlatformType = combined;
      function handleModalClose(key) {
        if (key.key === combined) {
          wasAlreadyConnected(combined[50]).unsubscribe("MODAL_POP", handleModalClose);
          let tmp7 = null;
          if (!wasAlreadyConnected) {
            tmp7 = closure_20;
          }
          closure_38(tmp7, applicationId);
          const obj = wasAlreadyConnected(combined[50]);
          const tmp5 = closure_38;
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
        return wasAlreadyConnected(combined[51]).popWithKey(combined);
      };
      obj3.pushLazy(guildId(initialAttemptedPlatformType[53])(initialAttemptedPlatformType[52], initialAttemptedPlatformType.paths), obj, combined);
    };
    handlePlatformConnected = function handlePlatformConnected(arg0, arg1) {
      lib(arg0);
      callback4(arg1);
      callback3(found.ACCOUNT_CONNECTED);
      _undefined(null);
      if (null != arg1) {
        const userApplicationRoleConnections = guildId(initialAttemptedPlatformType[55]).fetchUserApplicationRoleConnections();
        const obj = guildId(initialAttemptedPlatformType[55]);
        userApplicationRoleConnections.then((arg0) => {
          callback(arg0);
        }).catch(() => {

        });
        const nextPromise = userApplicationRoleConnections.then((arg0) => {
          callback(arg0);
        });
      }
    };
    tmp = f77116();
    importAll = tmp;
    tmp2 = onCloseModal(importAll.useState(closure_33.CHECKS_REQUIRED), 2);
    first = tmp2[0];
    ActivityIndicator = first;
    Pressable = tmp2[1];
    tmp4 = onCloseModal(importAll.useState(null), 2);
    [closure_8, closure_9] = tmp4;
    tmp5 = onCloseModal(importAll.useState(false), 2);
    [closure_10, closure_11] = tmp5;
    tmp6 = onCloseModal(importAll.useState(true), 2);
    [closure_12, closure_13] = tmp6;
    tmp7 = onCloseModal(importAll.useState(false), 2);
    first1 = tmp7[0];
    closure_14 = first1;
    closure_15 = tmp7[1];
    tmp9 = onCloseModal(importAll.useState(true), 2);
    [closure_16, closure_17] = tmp9;
    tmp10 = onCloseModal(importAll.useState(false), 2);
    [closure_18, closure_19] = tmp10;
    obj = arg1(dependencyMap[41]);
    items = [];
    items[0] = closure_14;
    stateFromStores = obj.useStateFromStores(items, () => first1.getAccounts());
    closure_20 = stateFromStores;
    obj2 = arg1(dependencyMap[41]);
    items1 = [];
    items1[0] = View;
    stateFromStores1 = obj2.useStateFromStores(items1, () => newestTokens.getNewestTokens());
    obj3 = arg1(dependencyMap[41]);
    items2 = [];
    items2[0] = closure_12;
    f77112 = obj3.useStateFromStores(items2, () => id.getId());
    tmp13 = onCloseModal(importAll.useState(null), 2);
    first2 = tmp13[0];
    UserSettingsSections = first2;
    AnalyticEvents = tmp13[1];
    tmp15 = onCloseModal(importAll.useState(null), 2);
    first3 = tmp15[0];
    MarketingURLs = first3;
    MarketingURLs = tmp15[1];
    tmp17 = onCloseModal(importAll.useState(() => {
      let tmp = null;
      if (null != initialAttemptedPlatformType) {
        const obj = { platformType: initialAttemptedPlatformType };
        let tmp4 = null;
        if (null != closure_3) {
          tmp4 = closure_3;
        }
        obj.applicationId = tmp4;
        tmp = obj;
      }
      return tmp;
    }), 2);
    [closure_26, closure_27] = tmp17;
    tmp18 = onCloseModal(importAll.useState(null), 2);
    [closure_28, closure_29] = tmp18;
    closure_30 = importDefault(dependencyMap[17])();
    obj4 = arg1(dependencyMap[41]);
    items3 = [];
    items3[0] = closure_15;
    stateFromStores2 = obj4.useStateFromStores(items3, () => member.getMember(guildId, closure_21));
    f77114 = stateFromStores2;
    obj5 = arg1(dependencyMap[41]);
    items4 = [];
    items4[0] = closure_13;
    stateFromStores3 = obj5.useStateFromStores(items4, () => mutableGuildChannelsForGuild.getMutableGuildChannelsForGuild(guildId));
    obj6 = arg1(dependencyMap[41]);
    items5 = [];
    items5[0] = closure_10;
    f77116 = obj6.useStateFromStores(items5, () => locale.locale);
    values = Object.values(stateFromStores3);
    found = values.filter((channel) => {
      let canResult = closure_16.can(_undefined.VIEW_CHANNEL, channel);
      if (canResult) {
        canResult = closure_16.can(_undefined.SEND_MESSAGES, channel);
      }
      if (canResult) {
        canResult = role(initialAttemptedPlatformType[42])(channel).includes(role);
        const obj = role(initialAttemptedPlatformType[42])(channel);
      }
      return canResult;
    });
    closure_33 = found;
    items6 = [, , , ];
    items6[0] = guildId;
    items6[1] = role.id;
    items6[2] = stateFromStores;
    items6[3] = stateFromStores1;
    effect = importAll.useEffect(() => {
      const guildRoleConnectionsEligibility = role(initialAttemptedPlatformType[43]).fetchGuildRoleConnectionsEligibility(guildId, role.id);
      guildRoleConnectionsEligibility.then((arr) => {
        callback(arr);
        callback2(function checkEligibility(arr) {
          return arr.some((arr) => arr.every((result) => result.result));
        }(arr));
        callback3(false);
      });
    }, items6);
    items7 = [, , ];
    items7[0] = initialAttemptedPlatformType;
    items7[1] = role.id;
    items7[2] = guildId;
    effect1 = importAll.useEffect(() => {
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
    effect2 = importAll.useEffect(() => {
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
          callback3(found.ROLE_GRANTED);
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
    tmp24 = jsx;
    obj = {};
    obj1 = { style: tmp.container };
    tmp25 = closure_30;
    tmp26 = View;
    if (closure_33.CHECKS_REQUIRED === first) {
      tmp37 = jsx;
      tmp38 = View;
      obj2 = {};
      obj2.style = tmp.header;
      tmp39 = jsx;
      tmp40 = arg1;
      tmp41 = dependencyMap;
      num5 = 24;
      obj3 = {};
      str3 = "heading-lg/extrabold";
      obj3.variant = "heading-lg/extrabold";
      num6 = 25;
      intl2 = arg1(dependencyMap[25]).intl;
      obj3.children = intl2.string(arg1(dependencyMap[25]).t.zOZh3R);
      obj2.children = jsx(arg1(dependencyMap[24]).Text, obj3);
      tmp36 = jsx(View, obj2);
    } else {
      tmp42 = closure_33;
      if (closure_33.ACCOUNT_CONNECTED === first) {
        tmp27 = importDefault;
        tmp28 = dependencyMap;
        num = 35;
        str = "lastPlatformConnected is null";
        tmp29 = importDefault(dependencyMap[35])(null != first2, "lastPlatformConnected is null");
        num2 = 18;
        obj9 = importDefault(dependencyMap[18]);
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
        tmp33 = jsx;
        tmp34 = arg1;
        tmp35 = dependencyMap;
        num3 = 24;
        obj4 = {};
        str2 = "heading-lg/extrabold";
        obj4.variant = "heading-lg/extrabold";
        obj4.style = tmp.header;
        num4 = 25;
        intl = arg1(dependencyMap[25]).intl;
        obj5 = {};
        obj5.platformName = name;
        obj4.children = intl.format(arg1(dependencyMap[25]).t.yQvgBO, obj5);
        tmp36 = jsx(arg1(dependencyMap[24]).Text, obj4);
      } else {
        tmp43 = closure_33;
        tmp36 = null;
        if (closure_33.ROLE_GRANTED === first) {
          tmp44 = jsx;
          tmp45 = arg1;
          tmp46 = dependencyMap;
          num7 = 24;
          obj6 = {};
          str4 = "heading-lg/extrabold";
          obj6.variant = "heading-lg/extrabold";
          obj6.style = tmp.header;
          num8 = 25;
          intl3 = arg1(dependencyMap[25]).intl;
          obj6.children = intl3.string(arg1(dependencyMap[25]).t.najNdz);
          tmp36 = jsx(arg1(dependencyMap[24]).Text, obj6);
        }
      }
    }
    items9 = [, , ];
    items9[0] = tmp36;
    items9[1] = function renderContent() {
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
            applicationId = callback5;
            applicationId = closure_8;
            applicationId = _undefined2;
            obj = {};
            const intl6 = guildId(initialAttemptedPlatformType[25]).intl;
            applicationId = guildId;
            applicationId = initialAttemptedPlatformType;
            const t = guildId(initialAttemptedPlatformType[25]).t;
            if (tmp81) {
              let jHfRvZ = t.jHfRvZ;
            } else {
              jHfRvZ = tmp78 ? t.mOQ8k+ : t.U0olLg;
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
            items[1] = _undefined2(closure_8, obj2);
            applicationId = _undefined2;
            applicationId = guildId;
            applicationId = initialAttemptedPlatformType;
            const obj4 = {};
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
            items[2] = _undefined2(guildId(initialAttemptedPlatformType[57]).TextWithIOSLinkWorkaround, obj4);
            obj.children = items;
            applicationId = applicationId(applicationId, obj);
            const tmp87 = _undefined2;
            const tmp88 = closure_8;
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
          const found = stateFromStores.find((type) => closure_22 === type.type);
          let found1;
          if (null != closure_28) {
            found1 = closure_28.find((application) => {
              let id;
              if (null != id) {
                id = id.id;
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
            const obj10 = {};
            const intl4 = guildId(initialAttemptedPlatformType[25]).intl;
            const obj11 = { privacyPolicyUrl: first3.PRIVACY, onAuthorizedApplicationsClick: handleManageAuthorizedApplications, onConnectionsClick: handleManageConnections };
            obj10.children = intl4.format(guildId(initialAttemptedPlatformType[25]).t.gsgvxh, obj11);
            items1[1] = _undefined2(guildId(initialAttemptedPlatformType[57]).TextWithIOSLinkWorkaround, obj10);
            obj7.children = items1;
            return tmp28(tmp29, obj7);
          }
          const obj12 = {};
          let tmp35 = null;
          if (null != found) {
            const obj13 = {};
            const obj14 = { style: tmp.accountConnectedPreview };
            const obj15 = { INTEGRATION_CREATE: "/assets/images/native/premium/illustrations", ConstraintReasonCode: 51 };
            const intl = guildId(initialAttemptedPlatformType[25]).intl;
            obj15.children = intl.string(guildId(initialAttemptedPlatformType[25]).t.TOjkEg);
            const items2 = [_undefined2(guildId(initialAttemptedPlatformType[24]).Text, obj15), ];
            const obj16 = { account: found, userId: closure_21, theme: callback5, locale: closure_32, style: tmp.accountConnectedPreviewConnectedUserAccount, showMetadata: closure_16, showInvisibleIcon: closure_18 };
            items2[1] = _undefined2(guildId(initialAttemptedPlatformType[58]).ConnectedUserAccount, obj16);
            obj14.children = items2;
            const items3 = [callback5(closure_8, obj14), ];
            const obj17 = { style: tmp.accountConnectedPrivacy };
            const obj18 = { INTEGRATION_CREATE: "/assets/images/native/premium/illustrations", ConstraintReasonCode: 51 };
            const intl2 = guildId(initialAttemptedPlatformType[25]).intl;
            obj18.children = intl2.string(guildId(initialAttemptedPlatformType[25]).t.jndPhX);
            const items4 = [_undefined2(guildId(initialAttemptedPlatformType[24]).Text, obj18), ];
            const obj19 = { account: found, setShowPreviewInvisibleIcon: closure_19, setShowPreviewMetadata: closure_17 };
            items4[1] = _undefined2(handlePlatformAttempt, obj19);
            obj17.children = items4;
            items3[1] = callback5(closure_8, obj17);
            obj13.children = items3;
            tmp35 = callback5(stateFromStores2, obj13);
          }
          const items5 = [tmp35, ];
          let tmp56 = null;
          if (null != found1) {
            const obj20 = { style: tmp.accountConnectedPreview };
            const obj21 = { INTEGRATION_CREATE: "/assets/images/native/premium/illustrations", ConstraintReasonCode: 51 };
            const intl3 = guildId(initialAttemptedPlatformType[25]).intl;
            obj21.children = intl3.string(guildId(initialAttemptedPlatformType[25]).t.TOjkEg);
            const items6 = [_undefined2(guildId(initialAttemptedPlatformType[24]).Text, obj21), ];
            const obj22 = { applicationRoleConnection: found1, theme: callback5, locale: closure_32, style: tmp.accountConnectedPreviewConnectedUserAccount };
            items6[1] = _undefined2(guildId(initialAttemptedPlatformType[58]).ConnectedApplicationUserRoleAccount, obj22);
            obj20.children = items6;
            tmp56 = callback5(closure_8, obj20);
          }
          items5[1] = tmp56;
          obj12.children = items5;
          tmp33Result = callback5(stateFromStores2, obj12);
          const tmp33 = callback5;
          const tmp34 = stateFromStores2;
        } else {
          applicationId = found;
          if (found.ROLE_GRANTED === applicationId) {
            obj = { style: tmp.content };
            const obj23 = { style: tmp.roleGranted };
            const obj24 = { guildId, style: tmp.verifiedIcon, role, size: 24 };
            const items7 = [_undefined2(role(initialAttemptedPlatformType[59]), obj24), ];
            const obj25 = { style: tmp.roleGrantedName, children: role.name };
            items7[1] = _undefined2(guildId(initialAttemptedPlatformType[24]).Text, obj25);
            obj23.children = items7;
            const items8 = [callback5(closure_8, obj23), ];
            const obj26 = { style: tmp.channelsGranted, children: found.map((channel) => callback(closure_35, { channel }, channel.id)) };
            items8[1] = _undefined2(closure_8, obj26);
            obj.children = items8;
            return callback5(closure_8, obj);
          } else {
            return null;
          }
        }
      }
    }();
    items9[2] = function renderFooter() {
      if (found.CHECKS_REQUIRED === first) {
        let obj = {
          variant: "primary",
          onPress() {
              return function handleAssignRole() {
                return callback(...arguments);
              }();
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
        obj.text = intl4.string(guildId(initialAttemptedPlatformType[25]).t.8SuVoE);
        obj.grow = true;
        return _undefined2(guildId(initialAttemptedPlatformType[60]).Button, obj);
      } else if (found.ACCOUNT_CONNECTED === tmp) {
        obj = {
          variant: "primary",
          onPress() {
              return callback(constants.CHECKS_REQUIRED);
            }
        };
        const intl3 = guildId(initialAttemptedPlatformType[25]).intl;
        obj.text = intl3.string(guildId(initialAttemptedPlatformType[25]).t.i4jeWR);
        obj.grow = true;
        return _undefined2(guildId(initialAttemptedPlatformType[60]).Button, obj);
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
              callback2(true);
            }
        };
        const intl = guildId(initialAttemptedPlatformType[25]).intl;
        obj2.text = intl.string(guildId(initialAttemptedPlatformType[25]).t.cpT0Cq);
        obj2.grow = true;
        const items = [_undefined2(guildId(initialAttemptedPlatformType[60]).Button, obj2), ];
        let tmp10 = null;
        if (tmp4) {
          const obj3 = { style: tmp.manageConnectionsButton };
          const obj4 = { variant: "secondary", onPress: handleManageConnections };
          const intl2 = guildId(initialAttemptedPlatformType[25]).intl;
          obj4.text = intl2.string(guildId(initialAttemptedPlatformType[25]).t.VXV55P);
          obj4.grow = true;
          obj3.children = _undefined2(guildId(initialAttemptedPlatformType[60]).Button, obj4);
          tmp10 = _undefined2(closure_8, obj3);
        }
        items[1] = tmp10;
        obj1.children = items;
        return closure_30(stateFromStores2, obj1);
      }
    }();
    obj1.children = items9;
    obj.children = tmp25(tmp26, obj1);
    return tmp24(arg1(dependencyMap[56]).BottomSheet, obj);
  }
}

export default GuildRoleConnectionsConnectAccountsActionSheet;
