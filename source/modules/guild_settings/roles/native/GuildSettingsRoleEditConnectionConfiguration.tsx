// Module ID: 16441
// Function ID: 128168
// Name: Header
// Dependencies: [57, 31, 27, 653, 4975, 33, 4165, 689, 4101, 9985, 1273, 1392, 4011, 5198, 1212, 4695, 5153, 5537, 16442, 477, 4161, 4849, 5536, 2]
// Exports: default

// Module 16441 (Header)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { PlatformTypes } from "ME";
import OperatorTypes from "OperatorTypes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function Header(arg0) {
  let applicationId;
  let integration;
  let locked;
  let onRemove;
  let platform;
  ({ platform, integration, applicationId } = arg0);
  ({ onRemove, locked } = arg0);
  let obj = require(9985) /* useRequestApplication */;
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
    obj = { size: require(1273) /* Button */.AvatarSizes.XSMALL };
    let bot;
    if (null != integration) {
      application = integration.application;
      if (null != application) {
        bot = application.bot;
      }
    }
    obj.user = bot;
    obj.guildId = undefined;
    let tmp6Result = callback2(require(1273) /* Button */.Avatar, obj);
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
        obj = { size: require(1273) /* Button */.AvatarSizes.XSMALL, user: getOrFetchApplicationBatched.bot, guildId: undefined };
        tmp11 = callback2(require(1273) /* Button */.Avatar, obj);
      }
      name = undefined;
      if (null != getOrFetchApplicationBatched) {
        name = getOrFetchApplicationBatched.name;
      }
      tmp6Result = tmp11;
    }
  } else if (null != platform) {
    const obj1 = {};
    let obj2 = require(1392) /* getAvatarURL */;
    let obj3 = require(4011) /* AccessibilityAnnouncer */;
    const icon = platform.icon;
    obj1.source = obj2.makeSource(obj3.isThemeDark(tmp) ? icon.darkPNG : icon.lightPNG);
    obj1.disableColor = true;
    tmp6Result = callback2(require(1273) /* Button */.Icon, obj1);
    const tmp6 = callback2;
  }
  obj2 = { icon: tmp6Result };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj3 = {};
  let name1;
  if (null != platform) {
    name1 = platform.name;
  }
  if (null != name1) {
    name = name1;
  }
  obj3.platformName = name;
  obj2.label = intl.format(require(1212) /* getSystemLocale */.t.Nj0a3j, obj3);
  const obj4 = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj4["aria-label"] = intl2.string(require(1212) /* getSystemLocale */.t.N86XcP);
  obj4.onPress = onRemove;
  obj4.disabled = locked;
  obj4.children = callback2(require(5153) /* XSmallIcon */.XSmallIcon, {});
  obj2.trailing = callback2(require(4695) /* PressableBase */.PressableOpacity, obj4);
  return callback2(require(5198) /* TableRowInner */.TableRow, obj2);
}
function BooleanConfigRule(metadataField) {
  let _slicedToArray;
  let result;
  let dependencyMap;
  let fieldText;
  let locked;
  let operator;
  metadataField = metadataField.metadataField;
  const existingPendingConfiguration = metadataField.existingPendingConfiguration;
  ({ platform: dependencyMap, onConfigurationChange: _slicedToArray, applicationId: result, operator } = metadataField);
  operator = undefined;
  ({ fieldText, locked } = metadataField);
  if (null == operator) {
    operator = constants.EQUAL;
  }
  let obj = { label: fieldText };
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
        type = outer1_10;
      }
      obj.connectionType = type;
      obj.applicationId = result;
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
    _slicedToArray(tmp, num);
  };
  return closure_12(metadataField(5537).TableSwitchRow, obj, metadataField);
}
function NumericalConfigRule(existingPendingConfiguration) {
  let _slicedToArray;
  let result;
  let dependencyMap;
  let fieldText;
  let fieldTextHook;
  let locked;
  let metadataField;
  ({ fieldText, fieldTextHook, metadataField } = existingPendingConfiguration);
  existingPendingConfiguration = existingPendingConfiguration.existingPendingConfiguration;
  ({ platform: dependencyMap, onConfigurationChange: _slicedToArray, locked, applicationId: result } = existingPendingConfiguration);
  let num;
  let c7;
  let str;
  let first;
  let c10;
  let c11;
  let callback2;
  function onInputValueChange(arg0) {
    _undefined(arg0);
    let isFiniteResult = null != existingPendingConfiguration;
    if (isFiniteResult) {
      isFiniteResult = "" !== arg0;
    }
    if (isFiniteResult) {
      const _Number = Number;
      const _Number2 = Number;
      isFiniteResult = Number.isFinite(Number(arg0));
    }
    if (isFiniteResult) {
      const obj = {};
      let type;
      if (null != closure_2) {
        type = closure_2.type;
      }
      if (null == type) {
        type = _undefined;
      }
      obj.connectionType = type;
      obj.applicationId = result;
      obj.connectionMetadataField = metadataField;
      obj.operator = c7;
      obj.value = metadataField(outer1_2[18]).storedValueFor(arg0, c7);
      _slicedToArray(obj, 18);
      const obj2 = metadataField(outer1_2[18]);
      const tmp4 = _slicedToArray;
    }
  }
  let fieldTextHookResult = _createForOfIteratorHelperLoose();
  const View = fieldTextHookResult;
  let index;
  if (null != existingPendingConfiguration) {
    index = existingPendingConfiguration.index;
  }
  num = -1;
  if (null != index) {
    num = index;
  }
  let obj = metadataField(16442);
  const realizedOperatorForResult = obj.realizedOperatorFor(existingPendingConfiguration.operator);
  c7 = realizedOperatorForResult;
  let value;
  if (null != existingPendingConfiguration) {
    if (null != existingPendingConfiguration.configuration) {
      value = iter.value;
    }
  }
  let obj1 = metadataField(16442);
  str = obj1.displayedValueFor(value, realizedOperatorForResult);
  str = str.toString();
  const tmp6 = callback(React.useState(str), 2);
  first = tmp6[0];
  c10 = tmp8;
  let tmp9 = null != value;
  if (tmp9) {
    tmp9 = "" !== first;
  }
  if (tmp9) {
    tmp9 = first !== str;
  }
  if (tmp9) {
    tmp8(str);
  }
  let configuration;
  if (null != existingPendingConfiguration) {
    configuration = existingPendingConfiguration.configuration;
  }
  let tmp13 = locked;
  if (!locked) {
    tmp13 = !tmp12;
  }
  c11 = tmp13;
  if (undefined !== fieldTextHook) {
    let obj3 = metadataField(477);
    callback2 = obj3.isIOS() ? fieldTextHookResult.numericalInputContainerIOSInline : fieldTextHookResult.numericalInputContainerAndroidInline;
    const intl = metadataField(1212).intl;
    obj = {
      metadataHook() {
          let obj = { style: items };
          items = [closure_12, closure_5.numericalInputContainerBase];
          obj = { keyboardType: "number-pad" };
          const items1 = [closure_5.numericalInput, ];
          let numericalInputDisabled = c11;
          if (c11) {
            numericalInputDisabled = closure_5.numericalInputDisabled;
          }
          items1[1] = numericalInputDisabled;
          obj.style = items1;
          obj.editable = !c11;
          obj.value = first;
          obj.onChangeText = onInputValueChange;
          obj.hitSlop = 8;
          obj.children = closure_12(metadataField(outer1_2[10]).TextInput, obj, metadataField);
          return closure_12(fieldTextHookResult, obj, "_numericalInputContainer");
        }
    };
    obj = { style: fieldTextHookResult.metadataRow };
    const Children = React.Children;
    fieldTextHook = Children.map;
    fieldTextHookResult = fieldTextHook(intl.format(fieldTextHook, obj), (children) => {
      let tmp = children;
      if ("string" === typeof children) {
        const obj = { variant: "text-md/semibold", style: closure_5.metadataRowText, children };
        const _HermesInternal = HermesInternal;
        tmp = callback(metadataField(outer1_2[20]).Text, obj, "t-" + arg1);
      }
      return tmp;
    });
    obj.children = fieldTextHookResult;
    callback2(View, obj);
    const formatResult = intl.format(fieldTextHook, obj);
  } else {
    let tmp30Result;
    if (undefined !== fieldText) {
      obj1 = { style: fieldTextHookResult.appNumericalInputContainer };
      let obj2 = {};
      obj3 = { keyboardType: "number-pad" };
      let items = [fieldTextHookResult.appNumericalInput, ];
      let numericalInputDisabled = tmp13;
      if (tmp13) {
        numericalInputDisabled = fieldTextHookResult.numericalInputDisabled;
      }
      items[1] = numericalInputDisabled;
      obj3.style = items;
      obj3.editable = !tmp13;
      obj3.value = first;
      obj3.onChangeText = onInputValueChange;
      obj2.children = callback2(metadataField(1273).TextInput, obj3, metadataField);
      let items1 = [callback2(View, obj2, "_numericalInputContainer"), ];
      const obj4 = { variant: "text-md/semibold", style: fieldTextHookResult.appNumericalInputText, children: fieldText };
      items1[1] = callback2(metadataField(4161).Text, obj4);
      obj1.children = items1;
      tmp30Result = onInputValueChange(View, obj1);
      const tmp30 = onInputValueChange;
      const tmp31 = View;
      const tmp33 = View;
    }
    const obj5 = {
      label: tmp30Result,
      value: tmp12,
      disabled: locked,
      onValueChange(arg0) {
          const tmp = "" !== first ? first : str;
          _undefined(tmp);
          let tmp3 = null;
          if (arg0) {
            const obj = {};
            let type;
            if (null != closure_2) {
              type = closure_2.type;
            }
            if (null == type) {
              type = _undefined;
            }
            obj.connectionType = type;
            obj.applicationId = result;
            obj.connectionMetadataField = metadataField;
            obj.operator = c7;
            obj.value = metadataField(outer1_2[18]).storedValueFor(tmp, c7);
            tmp3 = obj;
            const obj2 = metadataField(outer1_2[18]);
          }
          let index;
          if (null != existingPendingConfiguration) {
            index = existingPendingConfiguration.index;
          }
          let num2 = -1;
          if (null != index) {
            num2 = index;
          }
          _slicedToArray(tmp3, num2);
        }
    };
    return callback2(metadataField(5537).TableSwitchRow, obj5, metadataField);
  }
}
function BlueskyMetadataRules(arg0) {
  let configMetadataMap;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  let obj = importDefault(4849);
  const value = obj.get(PlatformTypes.BLUESKY);
  obj = {};
  obj = { fieldTextHook: require(1212) /* getSystemLocale */.t["REyUZ/"], metadataField: closure_7.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(closure_7.CREATED_AT), platform: value, onConfigurationChange, locked };
  const items = [callback2(NumericalConfigRule, obj), callback2(NumericalConfigRule, { fieldTextHook: require(1212) /* getSystemLocale */.t["/w/EYk"], metadataField: closure_7.BLUESKY_FOLLOWERS_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.BLUESKY_FOLLOWERS_COUNT), platform: value, onConfigurationChange, locked }), ];
  const obj1 = { fieldTextHook: require(1212) /* getSystemLocale */.t["/w/EYk"], metadataField: closure_7.BLUESKY_FOLLOWERS_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.BLUESKY_FOLLOWERS_COUNT), platform: value, onConfigurationChange, locked };
  items[2] = callback2(NumericalConfigRule, { fieldTextHook: require(1212) /* getSystemLocale */.t["5I4mVS"], metadataField: closure_7.BLUESKY_STATUSES_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.BLUESKY_STATUSES_COUNT), platform: value, onConfigurationChange, locked });
  obj.children = items;
  return callback3(closure_14, obj);
}
function SteamMetadataRules(arg0) {
  let configMetadataMap;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  let obj = importDefault(4849);
  const value = obj.get(PlatformTypes.STEAM);
  obj = {};
  obj = { fieldTextHook: require(1212) /* getSystemLocale */.t["REyUZ/"], metadataField: closure_7.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(closure_7.CREATED_AT), platform: value, onConfigurationChange, locked };
  const items = [callback2(NumericalConfigRule, obj), callback2(NumericalConfigRule, { fieldTextHook: require(1212) /* getSystemLocale */.t.zVJxqj, metadataField: closure_7.STEAM_GAME_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.STEAM_GAME_COUNT), platform: value, onConfigurationChange, locked }), , ];
  const obj1 = { fieldTextHook: require(1212) /* getSystemLocale */.t.zVJxqj, metadataField: closure_7.STEAM_GAME_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.STEAM_GAME_COUNT), platform: value, onConfigurationChange, locked };
  items[2] = callback2(NumericalConfigRule, { fieldTextHook: require(1212) /* getSystemLocale */.t["ZCNdD/"], metadataField: closure_7.STEAM_ITEM_COUNT_DOTA2, existingPendingConfiguration: configMetadataMap.get(closure_7.STEAM_ITEM_COUNT_DOTA2), platform: value, onConfigurationChange, locked });
  const obj2 = { fieldTextHook: require(1212) /* getSystemLocale */.t["ZCNdD/"], metadataField: closure_7.STEAM_ITEM_COUNT_DOTA2, existingPendingConfiguration: configMetadataMap.get(closure_7.STEAM_ITEM_COUNT_DOTA2), platform: value, onConfigurationChange, locked };
  items[3] = callback2(NumericalConfigRule, { fieldTextHook: require(1212) /* getSystemLocale */.t["MCHnK+"], metadataField: closure_7.STEAM_ITEM_COUNT_TF2, existingPendingConfiguration: configMetadataMap.get(closure_7.STEAM_ITEM_COUNT_TF2), platform: value, onConfigurationChange, locked });
  obj.children = items;
  return callback3(closure_14, obj);
}
function TwitterMetadataRules(arg0) {
  let configMetadataMap;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  let obj = importDefault(4849);
  const value = obj.get(PlatformTypes.TWITTER);
  obj = {};
  obj = { fieldTextHook: require(1212) /* getSystemLocale */.t["REyUZ/"], metadataField: closure_7.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(closure_7.CREATED_AT), platform: value, onConfigurationChange, locked };
  const items = [callback2(NumericalConfigRule, obj), callback2(NumericalConfigRule, { fieldTextHook: require(1212) /* getSystemLocale */.t["/w/EYk"], metadataField: closure_7.TWITTER_FOLLOWERS_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.TWITTER_FOLLOWERS_COUNT), platform: value, onConfigurationChange, locked }), , ];
  const obj1 = { fieldTextHook: require(1212) /* getSystemLocale */.t["/w/EYk"], metadataField: closure_7.TWITTER_FOLLOWERS_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.TWITTER_FOLLOWERS_COUNT), platform: value, onConfigurationChange, locked };
  items[2] = callback2(NumericalConfigRule, { fieldTextHook: require(1212) /* getSystemLocale */.t["+NFH7k"], metadataField: closure_7.TWITTER_STATUSES_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.TWITTER_STATUSES_COUNT), platform: value, onConfigurationChange, locked });
  const obj3 = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj3.fieldText = intl.string(require(1212) /* getSystemLocale */.t.E2iT8K);
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
  let obj = importDefault(4849);
  const value = obj.get(PlatformTypes.REDDIT);
  obj = {};
  obj = { fieldTextHook: require(1212) /* getSystemLocale */.t["REyUZ/"], metadataField: closure_7.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(closure_7.CREATED_AT), platform: value, onConfigurationChange, locked };
  const items = [callback2(NumericalConfigRule, obj), callback2(NumericalConfigRule, { fieldTextHook: require(1212) /* getSystemLocale */.t.TLgZhv, metadataField: closure_7.REDDIT_TOTAL_KARMA, existingPendingConfiguration: configMetadataMap.get(closure_7.REDDIT_TOTAL_KARMA), platform: value, onConfigurationChange, locked }), , ];
  const obj2 = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj2.fieldText = intl.string(require(1212) /* getSystemLocale */.t["0cKdka"]);
  obj2.metadataField = closure_7.REDDIT_MOD;
  obj2.existingPendingConfiguration = configMetadataMap.get(closure_7.REDDIT_MOD);
  obj2.platform = value;
  obj2.onConfigurationChange = onConfigurationChange;
  obj2.locked = locked;
  items[2] = callback2(BooleanConfigRule, obj2);
  const obj3 = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj3.fieldText = intl2.string(require(1212) /* getSystemLocale */.t.kCAN58);
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
  let obj = importDefault(4849);
  const value = obj.get(PlatformTypes.PAYPAL);
  obj = {};
  obj = { fieldTextHook: require(1212) /* getSystemLocale */.t["REyUZ/"], metadataField: closure_7.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(closure_7.CREATED_AT), platform: value, onConfigurationChange, locked };
  const items = [callback2(NumericalConfigRule, obj), ];
  const obj1 = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.fieldText = intl.string(require(1212) /* getSystemLocale */.t["0JyE8I"]);
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
  let obj = importDefault(4849);
  const value = obj.get(PlatformTypes.EBAY);
  obj = {};
  obj = { fieldTextHook: require(1212) /* getSystemLocale */.t["REyUZ/"], metadataField: closure_7.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(closure_7.CREATED_AT), platform: value, onConfigurationChange, locked };
  const items = [callback2(NumericalConfigRule, obj), callback2(NumericalConfigRule, { fieldTextHook: require(1212) /* getSystemLocale */.t.oTFOe5, metadataField: closure_7.EBAY_POSITIVE_FEEDBACK_PERCENTAGE, existingPendingConfiguration: configMetadataMap.get(closure_7.EBAY_POSITIVE_FEEDBACK_PERCENTAGE), platform: value, onConfigurationChange, locked }), , , ];
  const obj1 = { fieldTextHook: require(1212) /* getSystemLocale */.t.oTFOe5, metadataField: closure_7.EBAY_POSITIVE_FEEDBACK_PERCENTAGE, existingPendingConfiguration: configMetadataMap.get(closure_7.EBAY_POSITIVE_FEEDBACK_PERCENTAGE), platform: value, onConfigurationChange, locked };
  items[2] = callback2(NumericalConfigRule, { fieldTextHook: require(1212) /* getSystemLocale */.t["v5a2+Q"], metadataField: closure_7.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT), platform: value, onConfigurationChange, locked });
  const obj2 = { fieldTextHook: require(1212) /* getSystemLocale */.t["v5a2+Q"], metadataField: closure_7.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT), platform: value, onConfigurationChange, locked };
  items[3] = callback2(NumericalConfigRule, { fieldTextHook: require(1212) /* getSystemLocale */.t.yYbR2r, metadataField: closure_7.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT), platform: value, onConfigurationChange, locked, operator: constants.LESS_THAN });
  const obj4 = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj4.fieldText = intl.string(require(1212) /* getSystemLocale */.t["39wASN"]);
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
  let obj = importDefault(4849);
  const value = obj.get(PlatformTypes.TIKTOK);
  obj = {};
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.fieldText = intl.string(require(1212) /* getSystemLocale */.t.E2iT8K);
  obj.metadataField = closure_7.TIKTOK_VERIFIED;
  obj.existingPendingConfiguration = configMetadataMap.get(closure_7.TIKTOK_VERIFIED);
  obj.platform = value;
  obj.onConfigurationChange = onConfigurationChange;
  obj.locked = locked;
  const items = [callback2(BooleanConfigRule, obj), callback2(NumericalConfigRule, { fieldTextHook: require(1212) /* getSystemLocale */.t["/w/EYk"], metadataField: closure_7.TIKTOK_FOLLOWER_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.TIKTOK_FOLLOWER_COUNT), platform: value, onConfigurationChange, locked }), , ];
  const obj1 = { fieldTextHook: require(1212) /* getSystemLocale */.t["/w/EYk"], metadataField: closure_7.TIKTOK_FOLLOWER_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.TIKTOK_FOLLOWER_COUNT), platform: value, onConfigurationChange, locked };
  items[2] = callback2(NumericalConfigRule, { fieldTextHook: require(1212) /* getSystemLocale */.t.JHEsYw, metadataField: closure_7.TIKTOK_FOLLOWING_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.TIKTOK_FOLLOWING_COUNT), platform: value, onConfigurationChange, locked });
  const obj2 = { fieldTextHook: require(1212) /* getSystemLocale */.t.JHEsYw, metadataField: closure_7.TIKTOK_FOLLOWING_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.TIKTOK_FOLLOWING_COUNT), platform: value, onConfigurationChange, locked };
  items[3] = callback2(NumericalConfigRule, { fieldTextHook: require(1212) /* getSystemLocale */.t.tEFCYA, metadataField: closure_7.TIKTOK_LIKES_COUNT, existingPendingConfiguration: configMetadataMap.get(closure_7.TIKTOK_LIKES_COUNT), platform: value, onConfigurationChange, locked });
  obj.children = items;
  return callback3(closure_14, obj);
}
function ApplicationMetadataRules(arg0) {
  let dependencyMap;
  let importDefault;
  let integration;
  let require;
  ({ configMetadataMap: require, onConfigurationChange: importDefault, locked: dependencyMap, integration } = arg0);
  let mapped = null;
  if (null != integration) {
    mapped = null;
    if (null != integration.role_connections_metadata) {
      const prop = integration.role_connections_metadata;
      mapped = prop.map((type) => {
        type = type.type;
        if (outer1_9.INTEGER_LESS_THAN_EQUAL !== type) {
          if (outer1_9.DATETIME_LESS_THAN_EQUAL !== type) {
            if (outer1_9.INTEGER_GREATER_THAN_EQUAL !== type) {
              if (outer1_9.DATETIME_GREATER_THAN_EQUAL !== type) {
                if (outer1_9.INTEGER_EQUAL !== type) {
                  if (outer1_9.BOOLEAN_EQUAL !== type) {
                    if (outer1_9.INTEGER_NOT_EQUAL !== type) {
                      if (outer1_9.BOOLEAN_NOT_EQUAL !== type) {
                        return null;
                      }
                    }
                    let LESS_THAN = outer1_8.NOT_EQUAL;
                  }
                }
                LESS_THAN = outer1_8.EQUAL;
              }
            }
            LESS_THAN = outer1_8.GREATER_THAN;
          }
          const type2 = type.type;
          if (outer1_9.INTEGER_LESS_THAN_EQUAL !== type2) {
            if (outer1_9.INTEGER_GREATER_THAN_EQUAL !== type2) {
              if (outer1_9.INTEGER_EQUAL !== type2) {
                if (outer1_9.INTEGER_NOT_EQUAL !== type2) {
                  if (outer1_9.DATETIME_LESS_THAN_EQUAL !== type2) {
                    if (outer1_9.DATETIME_GREATER_THAN_EQUAL !== type2) {
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
                      return outer1_12(outer1_17, obj, type.key);
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
          return outer1_12(outer1_18, obj, type.key);
        }
        LESS_THAN = outer1_8.LESS_THAN;
      });
    }
  }
  return mapped;
}
({ MetadataFields: closure_7, OperatorTypes: closure_8, MetadataItemTypes: closure_9, GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE: closure_10, GUILD_ROLE_CONNECTION_APPLICATION_IDENTITY_CONNECTION_TYPE: closure_11 } = OperatorTypes);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = jsxProd);
_createForOfIteratorHelperLoose = { numericalInputContainerIOSInline: { marginTop: -2 }, numericalInputContainerAndroidInline: { transform: items } };
items = [{ translateY: 10 }];
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.numericalInputContainerBase = _createForOfIteratorHelperLoose;
let obj1 = { width: 54, height: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, paddingHorizontal: 4, paddingVertical: 0, marginTop: -4 };
_createForOfIteratorHelperLoose.numericalInput = obj1;
let obj2 = { width: 54, height: 32, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, paddingHorizontal: 8, paddingVertical: 0, marginRight: 8 };
_createForOfIteratorHelperLoose.appNumericalInput = obj2;
_createForOfIteratorHelperLoose.appNumericalInputContainer = { flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.appNumericalInputText = { flexShrink: 1 };
_createForOfIteratorHelperLoose.numericalInputDisabled = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
_createForOfIteratorHelperLoose.metadataRow = { flexDirection: "row", flexWrap: "wrap", alignItems: "center" };
_createForOfIteratorHelperLoose.metadataRowText = { lineHeight: 32 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionConfiguration.tsx");

export default function GuildSettingsRoleEditConnectionConfiguration(configurationItems) {
  let integrations;
  let locked;
  configurationItems = configurationItems.configurationItems;
  const onConfigurationChange = configurationItems.onConfigurationChange;
  ({ locked, integrations } = configurationItems);
  let applicationId;
  let c3;
  let map;
  if (configurationItems.length < 1) {
    return null;
  } else {
    applicationId = arr2[0].configuration.applicationId;
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
      return callback2(configurationItems(applicationId[22]).TableRowGroup, obj);
    } else {
      obj = onConfigurationChange(applicationId[21]);
      const value = obj.get(arr2[0].configuration.connectionType);
      while (true) {
        let tmp9 = globalThis;
        let _Map = Map;
        let tmp10 = new.target;
        let tmp11 = new.target;
        map = new Map();
        let tmp13 = map;
        let tmp14 = configurationItems;
        let item = arr2.forEach((configuration) => {
          if (null != configuration.configuration.connectionMetadataField) {
            const result = map.set(configuration.configuration.connectionMetadataField, configuration);
          } else {
            if (tmp) {
              let _slicedToArray = configuration;
            }
            tmp = null == configuration.configuration.value && null == configuration.configuration.operator;
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
          break;
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
        let tmp67 = configurationItems;
        let tmp68 = applicationId;
        let num2 = 22;
        let obj10 = {};
        let flag = true;
        obj10.hasIcons = true;
        let tmp69 = callback2;
        let tmp70 = Header;
        let obj11 = {
          platform: value,
          integration: found,
          onRemove() {
                  return onConfigurationChange(null, _undefined.index);
                }
        };
        let tmp71 = locked;
        obj11.locked = locked;
        let items = [callback2(Header, obj11), tmp30];
        obj10.children = items;
        return callback3(configurationItems(applicationId[22]).TableRowGroup, obj10);
      }
    }
  }
};
