// Module ID: 16199
// Function ID: 125197
// Name: Header
// Dependencies: []
// Exports: default

// Module 16199 (Header)
function Header(arg0) {
  let applicationId;
  let integration;
  let locked;
  let onRemove;
  let platform;
  ({ platform, integration, applicationId } = arg0);
  ({ onRemove, locked } = arg0);
  let obj = arg1(dependencyMap[9]);
  let application;
  if (null != integration) {
    application = integration.application;
  }
  let tmp3;
  if (null == application) {
    tmp3 = applicationId;
  }
  const getOrFetchApplicationBatched = obj.useGetOrFetchApplicationBatched(tmp3);
  let application1;
  if (null != integration) {
    application1 = integration.application;
  }
  if (null != application1) {
    obj = { size: arg1(dependencyMap[10]).AvatarSizes.XSMALL };
    let bot;
    if (null != integration) {
      application = integration.application;
      if (null != application) {
        bot = application.bot;
      }
    }
    obj.user = bot;
    obj.guildId = undefined;
    let tmp6Result = callback2(arg1(dependencyMap[10]).Avatar, obj);
    let name = integration.application.name;
    const tmp16 = callback2;
  } else if (null != applicationId) {
    if (undefined === getOrFetchApplicationBatched) {
      return null;
    } else {
      let bot1;
      if (null != getOrFetchApplicationBatched) {
        bot1 = getOrFetchApplicationBatched.bot;
      }
      let tmp11;
      if (null != bot1) {
        obj = { size: arg1(dependencyMap[10]).AvatarSizes.XSMALL, user: getOrFetchApplicationBatched.bot, guildId: undefined };
        tmp11 = callback2(arg1(dependencyMap[10]).Avatar, obj);
      }
      name = undefined;
      if (null != getOrFetchApplicationBatched) {
        name = getOrFetchApplicationBatched.name;
      }
      tmp6Result = tmp11;
    }
  } else if (null != platform) {
    const obj1 = {};
    let obj2 = arg1(dependencyMap[11]);
    let obj3 = arg1(dependencyMap[12]);
    const icon = platform.icon;
    obj1.source = obj2.makeSource(obj3.isThemeDark(tmp) ? icon.darkPNG : icon.lightPNG);
    obj1.disableColor = true;
    tmp6Result = callback2(arg1(dependencyMap[10]).Icon, obj1);
    const tmp6 = callback2;
  }
  obj2 = { icon: tmp6Result };
  const intl = arg1(dependencyMap[14]).intl;
  obj3 = {};
  let name1;
  if (null != platform) {
    name1 = platform.name;
  }
  if (null != name1) {
    name = name1;
  }
  obj3.platformName = name;
  obj2.label = intl.format(arg1(dependencyMap[14]).t.Nj0a3j, obj3);
  const obj4 = {};
  const intl2 = arg1(dependencyMap[14]).intl;
  obj4.aria-label = intl2.string(arg1(dependencyMap[14]).t.N86XcP);
  obj4.onPress = onRemove;
  obj4.disabled = locked;
  obj4.children = callback2(arg1(dependencyMap[16]).XSmallIcon, {});
  obj2.trailing = callback2(arg1(dependencyMap[15]).PressableOpacity, obj4);
  return callback2(arg1(dependencyMap[13]).TableRow, obj2);
}
function BooleanConfigRule(metadataField) {
  let fieldText;
  let locked;
  let operator;
  metadataField = metadataField.metadataField;
  const arg1 = metadataField;
  const existingPendingConfiguration = metadataField.existingPendingConfiguration;
  const importDefault = existingPendingConfiguration;
  ({ platform: closure_2, onConfigurationChange: closure_3, applicationId: closure_4, operator } = metadataField);
  let View;
  ({ fieldText, locked } = metadataField);
  if (null == operator) {
    operator = constants.EQUAL;
  }
  View = operator;
  const obj = { label: fieldText };
  let value;
  if (null != existingPendingConfiguration) {
    value = existingPendingConfiguration.configuration.value;
  }
  obj.value = "1" === value;
  obj.disabled = locked;
  obj.onValueChange = function onValueChange(arg0) {
    let tmp = null;
    if (arg0) {
      const obj = {};
      let type;
      if (null != type) {
        type = type.type;
      }
      if (null == type) {
        type = closure_10;
      }
      obj.connectionType = type;
      obj.applicationId = closure_4;
      obj.connectionMetadataField = metadataField;
      obj.operator = operator;
      obj.value = "1";
      tmp = obj;
    }
    let index;
    if (null != existingPendingConfiguration) {
      index = existingPendingConfiguration.index;
    }
    let num = -1;
    if (null != index) {
      num = index;
    }
    closure_3(tmp, num);
  };
  return closure_12(arg1(dependencyMap[17]).TableSwitchRow, obj, metadataField);
}
function NumericalConfigRule(existingPendingConfiguration) {
  let fieldText;
  let fieldTextHook;
  let locked;
  let metadataField;
  let operator;
  ({ fieldText, fieldTextHook, metadataField } = existingPendingConfiguration);
  const arg1 = metadataField;
  existingPendingConfiguration = existingPendingConfiguration.existingPendingConfiguration;
  const importDefault = existingPendingConfiguration;
  ({ platform: closure_2, onConfigurationChange: closure_3, locked, operator, applicationId: closure_4 } = existingPendingConfiguration);
  let PlatformTypes;
  operator = undefined;
  let first;
  let tmp9;
  let tmp15;
  let closure_11;
  function onInputValueChange(Text, arg1, metadataField) {
    tmp9(Text);
    if (null != existingPendingConfiguration) {
      if ("" !== Text) {
        const _Math3 = Math;
        const _Number = Number;
        const rounded = Math.round(Number(Text));
        if (operator === first.GREATER_THAN) {
          const _Math2 = Math;
          let str = Math.max(0, rounded - 1);
        } else {
          str = rounded;
          if (operator === first.LESS_THAN) {
            const _Math = Math;
            str = Math.max(1, rounded + 1);
          }
        }
        const obj = {};
        let type;
        if (null != closure_2) {
          type = closure_2.type;
        }
        if (null == type) {
          type = tmp15;
        }
        obj.connectionType = type;
        obj.applicationId = closure_4;
        obj.connectionMetadataField = metadataField;
        obj.operator = operator;
        obj.value = str.toString();
        closure_3(obj, num);
        const tmp15 = operator;
        const tmp4 = closure_3;
        const tmp9 = metadataField;
      }
    }
  }
  let fieldTextHookResult = callback4();
  const View = fieldTextHookResult;
  let index;
  if (null != existingPendingConfiguration) {
    index = existingPendingConfiguration.index;
  }
  let num = -1;
  if (null != index) {
    num = index;
  }
  PlatformTypes = num;
  if (null == operator) {
    operator = first.GREATER_THAN;
  }
  let value;
  if (null != existingPendingConfiguration) {
    if (null != existingPendingConfiguration.configuration) {
      value = iter.value;
    }
  }
  let num2 = 0;
  if (null != value) {
    num2 = value;
  }
  const rounded = Math.round(Number(num2));
  if (operator === first.GREATER_THAN) {
    const _Math2 = Math;
    let str = Math.max(1, rounded + 1);
  } else {
    str = rounded;
    if (operator === first.LESS_THAN) {
      const _Math = Math;
      str = Math.max(0, rounded - 1);
    }
  }
  const tmp7 = callback(React.useState(str.toString()), 2);
  first = tmp7[0];
  tmp9 = tmp7[1];
  const tmp10 = callback(React.useState(value), 2);
  if (tmp10[0] !== value) {
    tmp10[1](value);
    if (null != value) {
      tmp9(str.toString());
    }
  }
  let configuration;
  if (null != existingPendingConfiguration) {
    configuration = existingPendingConfiguration.configuration;
  }
  tmp15 = locked;
  if (!locked) {
    tmp15 = !tmp14;
  }
  if (undefined !== fieldTextHook) {
    let obj1 = arg1(dependencyMap[18]);
    closure_11 = obj1.isIOS() ? fieldTextHookResult.numericalInputContainerIOSInline : fieldTextHookResult.numericalInputContainerAndroidInline;
    const intl = arg1(dependencyMap[14]).intl;
    let obj = {
      metadataHook() {
          let obj = { style: items };
          const items = [closure_11, fieldTextHookResult.numericalInputContainerBase];
          obj = { keyboardType: "numeric" };
          const items1 = [fieldTextHookResult.numericalInput, ];
          let numericalInputDisabled = tmp15;
          if (tmp15) {
            numericalInputDisabled = fieldTextHookResult.numericalInputDisabled;
          }
          items1[1] = numericalInputDisabled;
          obj.style = items1;
          obj.editable = !tmp15;
          obj.value = first;
          obj.onChangeText = onInputValueChange;
          obj.hitSlop = 8;
          obj.children = onInputValueChange(metadataField(closure_2[10]).TextInput, obj, metadataField);
          return onInputValueChange(fieldTextHookResult, obj, "_numericalInputContainer");
        }
    };
    obj = { style: fieldTextHookResult.metadataRow };
    const Children = React.Children;
    fieldTextHook = Children.map;
    fieldTextHookResult = fieldTextHook(intl.format(fieldTextHook, obj), (children) => {
      let tmp = children;
      if ("string" === typeof children) {
        const obj = { variant: "text-md/semibold", style: fieldTextHookResult.metadataRowText, children };
        const _HermesInternal = HermesInternal;
        tmp = onInputValueChange(metadataField(closure_2[19]).Text, obj, "t-" + arg1);
      }
      return tmp;
    });
    obj.children = fieldTextHookResult;
    onInputValueChange(View, obj);
    const formatResult = intl.format(fieldTextHook, obj);
  } else {
    let tmp32Result;
    if (undefined !== fieldText) {
      obj1 = { style: fieldTextHookResult.appNumericalInputContainer };
      const obj2 = {};
      const obj3 = { keyboardType: "numeric" };
      const items = [fieldTextHookResult.appNumericalInput, ];
      let numericalInputDisabled = tmp15;
      if (tmp15) {
        numericalInputDisabled = fieldTextHookResult.numericalInputDisabled;
      }
      items[1] = numericalInputDisabled;
      obj3.style = items;
      obj3.editable = !tmp15;
      obj3.value = first;
      obj3.onChangeText = onInputValueChange;
      obj2.children = onInputValueChange(arg1(dependencyMap[10]).TextInput, obj3, metadataField);
      const items1 = [onInputValueChange(View, obj2, "_numericalInputContainer"), ];
      obj = { variant: "text-md/semibold", style: fieldTextHookResult.appNumericalInputText, children: fieldText };
      items1[1] = onInputValueChange(arg1(dependencyMap[19]).Text, obj);
      obj1.children = items1;
      tmp32Result = closure_13(View, obj1);
      const tmp32 = closure_13;
      const tmp33 = View;
      const tmp35 = View;
    }
    const obj4 = {
      label: tmp32Result,
      value: tmp14,
      disabled: locked,
      onValueChange(arg0) {
          let tmp = null;
          if (arg0) {
            const _Math = Math;
            const _Number = Number;
            const rounded = Math.round(Number(first));
            if (operator === first.GREATER_THAN) {
              const _Math3 = Math;
              let str = Math.max(0, rounded - 1);
            } else {
              str = rounded;
              if (operator === first.LESS_THAN) {
                const _Math2 = Math;
                str = Math.max(1, rounded + 1);
              }
            }
            const obj = {};
            let type;
            if (null != closure_2) {
              type = closure_2.type;
            }
            if (null == type) {
              type = tmp15;
            }
            obj.connectionType = type;
            obj.applicationId = closure_4;
            obj.connectionMetadataField = metadataField;
            obj.operator = operator;
            obj.value = str.toString();
            tmp = obj;
          }
          let index;
          if (null != existingPendingConfiguration) {
            index = existingPendingConfiguration.index;
          }
          let num4 = -1;
          if (null != index) {
            num4 = index;
          }
          closure_3(tmp, num4);
        }
    };
    return onInputValueChange(arg1(dependencyMap[17]).TableSwitchRow, obj4, metadataField);
  }
}
function BlueskyMetadataRules(arg0) {
  let configMetadataMap;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  let obj = importDefault(dependencyMap[20]);
  const value = obj.get(PlatformTypes.BLUESKY);
  obj = {};
  obj = { fieldTextHook: arg1(dependencyMap[14]).t.REyUZ/, metadataField: closure_7.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(closure_7.CREATED_AT), platform: value, onConfigurationChange, locked };
  const items = [callback2(NumericalConfigRule, obj), callback2(NumericalConfigRule, { fieldTextHook: arg1(dependencyMap[14]).t./w/EYk, metadataField: closure_7.BLUESKY_FOLLOWERS_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.BLUESKY_FOLLOWERS_COUNT), platform: value, onConfigurationChange, locked }), ];
  const obj1 = { fieldTextHook: arg1(dependencyMap[14]).t./w/EYk, metadataField: closure_7.BLUESKY_FOLLOWERS_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.BLUESKY_FOLLOWERS_COUNT), platform: value, onConfigurationChange, locked };
  items[2] = callback2(NumericalConfigRule, { fieldTextHook: arg1(dependencyMap[14]).t.5I4mVS, metadataField: closure_7.BLUESKY_STATUSES_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.BLUESKY_STATUSES_COUNT), platform: value, onConfigurationChange, locked });
  obj.children = items;
  return callback3(closure_14, obj);
}
function SteamMetadataRules(arg0) {
  let configMetadataMap;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  let obj = importDefault(dependencyMap[20]);
  const value = obj.get(PlatformTypes.STEAM);
  obj = {};
  obj = { fieldTextHook: arg1(dependencyMap[14]).t.REyUZ/, metadataField: closure_7.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(closure_7.CREATED_AT), platform: value, onConfigurationChange, locked };
  const items = [callback2(NumericalConfigRule, obj), callback2(NumericalConfigRule, { fieldTextHook: arg1(dependencyMap[14]).t.zVJxqj, metadataField: closure_7.STEAM_GAME_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.STEAM_GAME_COUNT), platform: value, onConfigurationChange, locked }), , ];
  const obj1 = { fieldTextHook: arg1(dependencyMap[14]).t.zVJxqj, metadataField: closure_7.STEAM_GAME_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.STEAM_GAME_COUNT), platform: value, onConfigurationChange, locked };
  items[2] = callback2(NumericalConfigRule, { fieldTextHook: arg1(dependencyMap[14]).t.ZCNdD/, metadataField: closure_7.STEAM_ITEM_COUNT_DOTA2, existingPendingConfiguration: configMetadataMap.get(closure_7.STEAM_ITEM_COUNT_DOTA2), platform: value, onConfigurationChange, locked });
  const obj2 = { fieldTextHook: arg1(dependencyMap[14]).t.ZCNdD/, metadataField: closure_7.STEAM_ITEM_COUNT_DOTA2, existingPendingConfiguration: configMetadataMap.get(closure_7.STEAM_ITEM_COUNT_DOTA2), platform: value, onConfigurationChange, locked };
  items[3] = callback2(NumericalConfigRule, { fieldTextHook: arg1(dependencyMap[14]).t.MCHnK+, metadataField: closure_7.STEAM_ITEM_COUNT_TF2, existingPendingConfiguration: configMetadataMap.get(closure_7.STEAM_ITEM_COUNT_TF2), platform: value, onConfigurationChange, locked });
  obj.children = items;
  return callback3(closure_14, obj);
}
function TwitterMetadataRules(arg0) {
  let configMetadataMap;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  let obj = importDefault(dependencyMap[20]);
  const value = obj.get(PlatformTypes.TWITTER);
  obj = {};
  obj = { fieldTextHook: arg1(dependencyMap[14]).t.REyUZ/, metadataField: closure_7.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(closure_7.CREATED_AT), platform: value, onConfigurationChange, locked };
  const items = [callback2(NumericalConfigRule, obj), callback2(NumericalConfigRule, { fieldTextHook: arg1(dependencyMap[14]).t./w/EYk, metadataField: closure_7.TWITTER_FOLLOWERS_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.TWITTER_FOLLOWERS_COUNT), platform: value, onConfigurationChange, locked }), , ];
  const obj1 = { fieldTextHook: arg1(dependencyMap[14]).t./w/EYk, metadataField: closure_7.TWITTER_FOLLOWERS_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.TWITTER_FOLLOWERS_COUNT), platform: value, onConfigurationChange, locked };
  items[2] = callback2(NumericalConfigRule, { fieldTextHook: arg1(dependencyMap[14]).t.+NFH7k, metadataField: closure_7.TWITTER_STATUSES_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.TWITTER_STATUSES_COUNT), platform: value, onConfigurationChange, locked });
  const obj3 = {};
  const intl = arg1(dependencyMap[14]).intl;
  obj3.fieldText = intl.string(arg1(dependencyMap[14]).t.E2iT8K);
  obj3.metadataField = closure_7.TWITTER_VERIFIED;
  obj3.existingPendingConfiguration = configMetadataMap.get(closure_7.TWITTER_VERIFIED);
  obj3.platform = value;
  obj3.onConfigurationChange = onConfigurationChange;
  obj3.locked = locked;
  items[3] = callback2(BooleanConfigRule, obj3);
  obj.children = items;
  return callback3(closure_14, obj);
}
function RedditMetadataRules(arg0) {
  let configMetadataMap;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  let obj = importDefault(dependencyMap[20]);
  const value = obj.get(PlatformTypes.REDDIT);
  obj = {};
  obj = { fieldTextHook: arg1(dependencyMap[14]).t.REyUZ/, metadataField: closure_7.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(closure_7.CREATED_AT), platform: value, onConfigurationChange, locked };
  const items = [callback2(NumericalConfigRule, obj), callback2(NumericalConfigRule, { fieldTextHook: arg1(dependencyMap[14]).t.TLgZhv, metadataField: closure_7.REDDIT_TOTAL_KARMA, existingPendingConfiguration: configMetadataMap.get(closure_7.REDDIT_TOTAL_KARMA), platform: value, onConfigurationChange, locked }), , ];
  const obj2 = {};
  const intl = arg1(dependencyMap[14]).intl;
  obj2.fieldText = intl.string(arg1(dependencyMap[14]).t.0cKdka);
  obj2.metadataField = closure_7.REDDIT_MOD;
  obj2.existingPendingConfiguration = configMetadataMap.get(closure_7.REDDIT_MOD);
  obj2.platform = value;
  obj2.onConfigurationChange = onConfigurationChange;
  obj2.locked = locked;
  items[2] = callback2(BooleanConfigRule, obj2);
  const obj3 = {};
  const intl2 = arg1(dependencyMap[14]).intl;
  obj3.fieldText = intl2.string(arg1(dependencyMap[14]).t.kCAN58);
  obj3.metadataField = closure_7.REDDIT_GOLD;
  obj3.existingPendingConfiguration = configMetadataMap.get(closure_7.REDDIT_GOLD);
  obj3.platform = value;
  obj3.onConfigurationChange = onConfigurationChange;
  obj3.locked = locked;
  items[3] = callback2(BooleanConfigRule, obj3);
  obj.children = items;
  return callback3(closure_14, obj);
}
function PaypalMetadataRules(arg0) {
  let configMetadataMap;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  let obj = importDefault(dependencyMap[20]);
  const value = obj.get(PlatformTypes.PAYPAL);
  obj = {};
  obj = { fieldTextHook: arg1(dependencyMap[14]).t.REyUZ/, metadataField: closure_7.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(closure_7.CREATED_AT), platform: value, onConfigurationChange, locked };
  const items = [callback2(NumericalConfigRule, obj), ];
  const obj1 = {};
  const intl = arg1(dependencyMap[14]).intl;
  obj1.fieldText = intl.string(arg1(dependencyMap[14]).t.0JyE8I);
  obj1.metadataField = closure_7.PAYPAL_VERIFIED;
  obj1.existingPendingConfiguration = configMetadataMap.get(closure_7.PAYPAL_VERIFIED);
  obj1.platform = value;
  obj1.onConfigurationChange = onConfigurationChange;
  obj1.locked = locked;
  items[1] = callback2(BooleanConfigRule, obj1);
  obj.children = items;
  return callback3(closure_14, obj);
}
function EbayMetadataRules(arg0) {
  let configMetadataMap;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  let obj = importDefault(dependencyMap[20]);
  const value = obj.get(PlatformTypes.EBAY);
  obj = {};
  obj = { fieldTextHook: arg1(dependencyMap[14]).t.REyUZ/, metadataField: closure_7.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(closure_7.CREATED_AT), platform: value, onConfigurationChange, locked };
  const items = [callback2(NumericalConfigRule, obj), callback2(NumericalConfigRule, { fieldTextHook: arg1(dependencyMap[14]).t.oTFOe5, metadataField: closure_7.EBAY_POSITIVE_FEEDBACK_PERCENTAGE, existingPendingConfiguration: configMetadataMap.get(closure_7.EBAY_POSITIVE_FEEDBACK_PERCENTAGE), platform: value, onConfigurationChange, locked }), , , ];
  const obj1 = { fieldTextHook: arg1(dependencyMap[14]).t.oTFOe5, metadataField: closure_7.EBAY_POSITIVE_FEEDBACK_PERCENTAGE, existingPendingConfiguration: configMetadataMap.get(closure_7.EBAY_POSITIVE_FEEDBACK_PERCENTAGE), platform: value, onConfigurationChange, locked };
  items[2] = callback2(NumericalConfigRule, { fieldTextHook: arg1(dependencyMap[14]).t.v5a2+Q, metadataField: closure_7.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT), platform: value, onConfigurationChange, locked });
  const obj2 = { fieldTextHook: arg1(dependencyMap[14]).t.v5a2+Q, metadataField: closure_7.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT), platform: value, onConfigurationChange, locked };
  items[3] = callback2(NumericalConfigRule, { fieldTextHook: arg1(dependencyMap[14]).t.yYbR2r, metadataField: closure_7.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT), platform: value, onConfigurationChange, locked, operator: constants.LESS_THAN });
  const obj4 = {};
  const intl = arg1(dependencyMap[14]).intl;
  obj4.fieldText = intl.string(arg1(dependencyMap[14]).t.39wASN);
  obj4.metadataField = closure_7.EBAY_TOP_RATED_SELLER;
  obj4.existingPendingConfiguration = configMetadataMap.get(closure_7.EBAY_TOP_RATED_SELLER);
  obj4.platform = value;
  obj4.onConfigurationChange = onConfigurationChange;
  obj4.locked = locked;
  items[4] = callback2(BooleanConfigRule, obj4);
  obj.children = items;
  return callback3(closure_14, obj);
}
function TikTokMetadataRules(arg0) {
  let configMetadataMap;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  let obj = importDefault(dependencyMap[20]);
  const value = obj.get(PlatformTypes.TIKTOK);
  obj = {};
  obj = {};
  const intl = arg1(dependencyMap[14]).intl;
  obj.fieldText = intl.string(arg1(dependencyMap[14]).t.E2iT8K);
  obj.metadataField = closure_7.TIKTOK_VERIFIED;
  obj.existingPendingConfiguration = configMetadataMap.get(closure_7.TIKTOK_VERIFIED);
  obj.platform = value;
  obj.onConfigurationChange = onConfigurationChange;
  obj.locked = locked;
  const items = [callback2(BooleanConfigRule, obj), callback2(NumericalConfigRule, { fieldTextHook: arg1(dependencyMap[14]).t./w/EYk, metadataField: closure_7.TIKTOK_FOLLOWER_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.TIKTOK_FOLLOWER_COUNT), platform: value, onConfigurationChange, locked }), , ];
  const obj1 = { fieldTextHook: arg1(dependencyMap[14]).t./w/EYk, metadataField: closure_7.TIKTOK_FOLLOWER_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.TIKTOK_FOLLOWER_COUNT), platform: value, onConfigurationChange, locked };
  items[2] = callback2(NumericalConfigRule, { fieldTextHook: arg1(dependencyMap[14]).t.JHEsYw, metadataField: closure_7.TIKTOK_FOLLOWING_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.TIKTOK_FOLLOWING_COUNT), platform: value, onConfigurationChange, locked });
  const obj2 = { fieldTextHook: arg1(dependencyMap[14]).t.JHEsYw, metadataField: closure_7.TIKTOK_FOLLOWING_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.TIKTOK_FOLLOWING_COUNT), platform: value, onConfigurationChange, locked };
  items[3] = callback2(NumericalConfigRule, { fieldTextHook: arg1(dependencyMap[14]).t.tEFCYA, metadataField: closure_7.TIKTOK_LIKES_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.TIKTOK_LIKES_COUNT), platform: value, onConfigurationChange, locked });
  obj.children = items;
  return callback3(closure_14, obj);
}
function ApplicationMetadataRules(arg0) {
  let integration;
  ({ configMetadataMap: closure_0, onConfigurationChange: closure_1, locked: closure_2, integration } = arg0);
  let closure_3 = integration;
  let mapped = null;
  if (null != integration) {
    mapped = null;
    if (null != integration.role_connections_metadata) {
      const prop = integration.role_connections_metadata;
      mapped = prop.map((type) => {
        type = type.type;
        if (constants2.INTEGER_LESS_THAN_EQUAL !== type) {
          if (constants2.DATETIME_LESS_THAN_EQUAL !== type) {
            if (constants2.INTEGER_GREATER_THAN_EQUAL !== type) {
              if (constants2.DATETIME_GREATER_THAN_EQUAL !== type) {
                if (constants2.INTEGER_EQUAL !== type) {
                  if (constants2.BOOLEAN_EQUAL !== type) {
                    if (constants2.INTEGER_NOT_EQUAL !== type) {
                      if (constants2.BOOLEAN_NOT_EQUAL !== type) {
                        return null;
                      }
                    }
                    let LESS_THAN = constants.NOT_EQUAL;
                  }
                }
                LESS_THAN = constants.EQUAL;
              }
            }
            LESS_THAN = constants.GREATER_THAN;
          }
          const type2 = type.type;
          if (constants2.INTEGER_LESS_THAN_EQUAL !== type2) {
            if (constants2.INTEGER_GREATER_THAN_EQUAL !== type2) {
              if (constants2.INTEGER_EQUAL !== type2) {
                if (constants2.INTEGER_NOT_EQUAL !== type2) {
                  if (constants2.DATETIME_LESS_THAN_EQUAL !== type2) {
                    if (constants2.DATETIME_GREATER_THAN_EQUAL !== type2) {
                      let obj = {};
                      ({ description: obj.fieldText, key: obj.metadataField } = type);
                      obj.existingPendingConfiguration = store.get(type.key);
                      obj.platform = null;
                      obj.onConfigurationChange = closure_1;
                      obj.locked = closure_2;
                      obj.operator = LESS_THAN;
                      const application = integration.application;
                      let id;
                      if (null != application) {
                        id = application.id;
                      }
                      obj.applicationId = id;
                      return closure_12(closure_17, obj, type.key);
                    }
                  }
                }
              }
            }
          }
          obj = {};
          ({ description: obj2.fieldText, key: obj2.metadataField } = type);
          obj.existingPendingConfiguration = store.get(type.key);
          obj.platform = null;
          obj.onConfigurationChange = closure_1;
          obj.locked = closure_2;
          obj.operator = LESS_THAN;
          const application2 = integration.application;
          let id1;
          if (null != application2) {
            id1 = application2.id;
          }
          obj.applicationId = id1;
          return closure_12(closure_18, obj, type.key);
        }
        LESS_THAN = constants.LESS_THAN;
      });
    }
  }
  return mapped;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const PlatformTypes = arg1(dependencyMap[3]).PlatformTypes;
({ MetadataFields: closure_7, OperatorTypes: closure_8, MetadataItemTypes: closure_9, GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE: closure_10, GUILD_ROLE_CONNECTION_APPLICATION_IDENTITY_CONNECTION_TYPE: closure_11 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = { numericalInputContainerIOSInline: { marginTop: -2 }, numericalInputContainerAndroidInline: { transform: items } };
const items = [{ translateY: 10 }];
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW, borderRadius: importDefault(dependencyMap[7]).radii.sm };
obj.numericalInputContainerBase = obj;
const tmp3 = arg1(dependencyMap[5]);
obj.numericalInput = { borderRadius: importDefault(dependencyMap[7]).radii.xs };
const obj2 = { -9223372036854775808: -738197503, 9223372036854775807: 16777216, 0: 38594370, 0: 32305408, -9223372036854775808: -1210756864, 9223372036854775807: 116, 9223372036854775807: 4096, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[7]).radii.xs };
obj.appNumericalInput = obj2;
obj.appNumericalInputContainer = {};
obj.appNumericalInputText = { flexShrink: 1 };
const obj1 = { borderRadius: importDefault(dependencyMap[7]).radii.xs };
obj.numericalInputDisabled = { color: importDefault(dependencyMap[7]).colors.TEXT_MUTED };
obj.metadataRow = { "Null": null, "Null": null, "Null": null };
obj.metadataRowText = { lineHeight: 32 };
let closure_15 = obj.createStyles(obj);
const obj3 = { color: importDefault(dependencyMap[7]).colors.TEXT_MUTED };
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionConfiguration.tsx");

export default function GuildSettingsRoleEditConnectionConfiguration(configurationItems) {
  let integrations;
  let locked;
  configurationItems = configurationItems.configurationItems;
  const arg1 = configurationItems;
  const onConfigurationChange = configurationItems.onConfigurationChange;
  const importDefault = onConfigurationChange;
  ({ locked, integrations } = configurationItems);
  let dependencyMap;
  let closure_3;
  let closure_4;
  if (configurationItems.length < 1) {
    return null;
  } else {
    const applicationId = arr2[0].configuration.applicationId;
    dependencyMap = applicationId;
    let found;
    if (null != applicationId) {
      if (!tmp80) {
        if (null != integrations) {
          found = integrations.find((application) => {
            application = application.application;
            let id;
            if (null != application) {
              id = application.id;
            }
            return id === applicationId;
          });
        }
      }
    }
    if (null != applicationId) {
      if (!tmp80) {
        if (null == tmp2) {
          return null;
        }
      }
    }
    if (arr2[0].configuration.connectionType === closure_11) {
      let obj = { hasIcons: true };
      obj = {
        platform: null,
        integration: undefined,
        applicationId,
        onRemove() {
              return onConfigurationChange(null, configurationItems[0].index);
            },
        locked
      };
      obj.children = callback2(Header, obj);
      return callback2(arg1(dependencyMap[21]).TableRowGroup, obj);
    } else {
      obj = importDefault(dependencyMap[20]);
      const value = obj.get(arr2[0].configuration.connectionType);
      while (true) {
        let tmp9 = globalThis;
        let _Map = Map;
        let tmp10 = new.target;
        let tmp11 = new.target;
        let map = new Map();
        let tmp13 = map;
        closure_4 = map;
        let tmp14 = configurationItems;
        let item = arr2.forEach((configuration) => {
          if (null != configuration.configuration.connectionMetadataField) {
            const result = map.set(configuration.configuration.connectionMetadataField, configuration);
          } else {
            if (tmp) {
              let closure_3 = configuration;
            }
            const tmp = null == configuration.configuration.value && null == configuration.configuration.operator;
          }
        });
        let obj1 = { configMetadataMap: map, onConfigurationChange };
        let tmp16 = locked;
        obj1.locked = locked;
        let tmp17 = obj1;
        let tmp18 = null;
        let tmp20 = value;
        let type;
        if (null == value) {
          break;
        } else {
          type = tmp19.type;
          // break
        }
        let tmp22 = PlatformTypes;
        if (PlatformTypes.STEAM === type) {
          let tmp61 = callback2;
          let tmp62 = SteamMetadataRules;
          let obj2 = {};
          let tmp63 = obj1;
          let tmp64 = obj2;
          let merged = Object.assign(tmp17);
          let tmp30 = callback2(SteamMetadataRules, obj2);
        } else {
          let tmp82 = PlatformTypes;
          if (PlatformTypes.TWITTER === type) {
            let tmp56 = callback2;
            let tmp57 = TwitterMetadataRules;
            let obj3 = {};
            let tmp58 = obj1;
            let tmp59 = obj3;
            let merged1 = Object.assign(tmp17);
            tmp30 = callback2(TwitterMetadataRules, obj3);
          } else {
            let tmp83 = PlatformTypes;
            if (PlatformTypes.REDDIT === type) {
              let tmp51 = callback2;
              let tmp52 = RedditMetadataRules;
              let obj4 = {};
              let tmp53 = obj1;
              let tmp54 = obj4;
              let merged2 = Object.assign(tmp17);
              tmp30 = callback2(RedditMetadataRules, obj4);
            } else {
              let tmp84 = PlatformTypes;
              if (PlatformTypes.BLUESKY === type) {
                let tmp46 = callback2;
                let tmp47 = BlueskyMetadataRules;
                let obj5 = {};
                let tmp48 = obj1;
                let tmp49 = obj5;
                let merged3 = Object.assign(tmp17);
                tmp30 = callback2(BlueskyMetadataRules, obj5);
              } else {
                let tmp85 = PlatformTypes;
                if (PlatformTypes.PAYPAL === type) {
                  let tmp41 = callback2;
                  let tmp42 = PaypalMetadataRules;
                  let obj6 = {};
                  let tmp43 = obj1;
                  let tmp44 = obj6;
                  let merged4 = Object.assign(tmp17);
                  tmp30 = callback2(PaypalMetadataRules, obj6);
                } else {
                  let tmp86 = PlatformTypes;
                  if (PlatformTypes.EBAY === type) {
                    let tmp36 = callback2;
                    let tmp37 = EbayMetadataRules;
                    let obj7 = {};
                    let tmp38 = obj1;
                    let tmp39 = obj7;
                    let merged5 = Object.assign(tmp17);
                    tmp30 = callback2(EbayMetadataRules, obj7);
                  } else {
                    let tmp23 = PlatformTypes;
                    if (PlatformTypes.TIKTOK === type) {
                      let tmp31 = callback2;
                      let tmp32 = TikTokMetadataRules;
                      let obj8 = {};
                      let tmp33 = obj1;
                      let tmp34 = obj8;
                      let merged6 = Object.assign(tmp17);
                      tmp30 = callback2(TikTokMetadataRules, obj8);
                    } else {
                      let tmp24 = callback2;
                      let tmp25 = ApplicationMetadataRules;
                      let obj9 = {};
                      let tmp26 = obj1;
                      let tmp27 = obj9;
                      let merged7 = Object.assign(tmp17);
                      let tmp29 = found;
                      let str = "integration";
                      obj9["integration"] = tmp2;
                      tmp30 = callback2(ApplicationMetadataRules, obj9);
                    }
                  }
                }
              }
            }
          }
        }
        let tmp66 = callback3;
        let tmp67 = arg1;
        let tmp68 = dependencyMap;
        let num2 = 21;
        let obj10 = {};
        let flag = true;
        obj10.hasIcons = true;
        let tmp69 = callback2;
        let tmp70 = Header;
        let obj11 = {
          platform: value,
          integration: found,
          onRemove() {
                  return onConfigurationChange(null, index.index);
                }
        };
        let tmp71 = locked;
        obj11.locked = locked;
        let items = [callback2(Header, obj11), tmp30];
        obj10.children = items;
        return callback3(arg1(dependencyMap[21]).TableRowGroup, obj10);
      }
    }
  }
};
