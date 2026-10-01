// Module ID: 17438
// Function ID: 17439
// Name: GuildSettingsRoleEditConnectionConfiguration
// Dependencies: [32, 19, 17, 1074, 5720, 21, 4836, 576, 4767, 11058, 1177, 1397, 4685, 5917, 1115, 5435, 5992, 6621, 17439, 1364, 4832, 5595, 5999, 2]
// Exports: default

// Module 17438 (GuildSettingsRoleEditConnectionConfiguration)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants2 from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import shared from "shared" /* 4685 */;
import useThemeDefault from "useTheme" /* 4767 */;
import Text_Text from "Text/Text" /* 4832 */;
import PlatformsDefault from "Platforms" /* 5595 */;
import XSmallIcon from "XSmallIcon" /* 5992 */;
import TableRowGroup3 from "TableRowGroup" /* 5999 */;
import useGetOrFetchApplicationBatched2 from "useGetOrFetchApplicationBatched" /* 11058 */;
import RoleConnectionRequirementUtils from "RoleConnectionRequirementUtils" /* 17439 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 5720 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, map;

let c10;
let c9;
let closure_12;
let closure_14;
let items;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let size;
let size1;
let unpackModuleId;
function Header(arg0) {
  let Nj0a3j;
  let PressableOpacity;
  let applicationId;
  let bot;
  let format;
  let integration;
  let intl2;
  let locked;
  let name;
  let name2;
  let obj5;
  let onRemove;
  let platform;
  let tmp3Result2;
  let tmp9Result;
  ({ platform, integration, applicationId } = arg0);
  ({ onRemove, locked } = arg0);
  let application1;
  const tmp2 = useThemeDefault();
  const useGetOrFetchApplicationBatched = useGetOrFetchApplicationBatched2.useGetOrFetchApplicationBatched;
  useGetOrFetchApplicationBatched2;
  if (integration != null) {
    application1 = integration.application;
  }
  let tmp6;
  if (null == application1) {
    tmp6 = applicationId;
  }
  const getOrFetchApplicationBatched = useGetOrFetchApplicationBatched(tmp6);
  let application2;
  if (integration != null) {
    application2 = integration.application;
  }
  if (null != application2) {
    const obj = { size: native.AvatarSizes.XSMALL, user: bot, guildId: "Array" };
    const Avatar2 = tmp3(1177).Avatar;
    bot = undefined;
    const tmp16 = closure_12;
    if (integration != null) {
      const application = integration.application;
      if (application != null) {
        bot = application.bot;
      }
    }
    tmp9Result = tmp16(Avatar2, obj);
    name = integration.application.name;
  } else if (null != applicationId) {
    if (undefined === getOrFetchApplicationBatched) {
      return null;
    } else {
      let bot1;
      if (getOrFetchApplicationBatched != null) {
        bot1 = getOrFetchApplicationBatched.bot;
      }
      let tmp13;
      if (null != bot1) {
        const obj2 = { size: native.AvatarSizes.XSMALL, user: getOrFetchApplicationBatched.bot, guildId: "Array" };
        const Avatar = tmp3(1177).Avatar;
        tmp13 = closure_12(Avatar, obj2);
      }
      let name1;
      if (getOrFetchApplicationBatched != null) {
        name1 = getOrFetchApplicationBatched.name;
      }
      name = name1;
      tmp9Result = tmp13;
    }
  } else if (null != platform) {
    const Icon = tmp3(1177).Icon;
    const makeSource = AvatarUtils.makeSource;
    AvatarUtils;
    const icon = platform.icon;
    const obj3 = { source: makeSource(tmp3Result2.isThemeDark(tmp2) ? icon.darkPNG : icon.lightPNG), disableColor: true };
    tmp3Result2 = shared;
    tmp9Result = closure_12(Icon, obj3);
  }
  const obj4 = { icon: tmp9Result, label: format(Nj0a3j, { platformName: name2 }), trailing: closure_12(PressableOpacity, obj5) };
  const TableRow = tmp3(5917).TableRow;
  const intl = tmp3(1115).intl;
  format = intl.format;
  name2 = undefined;
  Nj0a3j = tmp3(1115).t.Nj0a3j;
  if (platform != null) {
    name2 = platform.name;
  }
  if (name2 == null) {
    name2 = name;
  }
  obj5 = { "aria-label": intl2.string(intl3.t.N86XcP), onPress: onRemove, disabled: locked, children: closure_12(XSmallIcon.XSmallIcon, {}) };
  PressableOpacity = tmp3(5435).PressableOpacity;
  intl2 = tmp3(1115).intl;
  return closure_12(TableRow, obj4);
}
function BooleanConfigRule(metadataField) {
  let applicationId;
  let fieldText;
  let locked;
  let operator;
  let type;
  let value;
  metadataField = metadataField.metadataField;
  const existingPendingConfiguration = metadataField.existingPendingConfiguration;
  ({ platform: dependencyMap, onConfigurationChange: _slicedToArray, applicationId: react, operator } = metadataField);
  operator = undefined;
  ({ fieldText, locked } = metadataField);
  if (operator == null) {
    let tmp = constants;
    operator = constants.EQUAL;
  }
  let obj = {
    label: fieldText,
    value: "1" === value,
    disabled: locked,
    onValueChange(arg0) {
      let tmp = null;
      if (arg0) {
        dependencyMap = undefined;
        if (dependencyMap != null) {
          dependencyMap = dependencyMap.type;
        }
        if (dependencyMap == null) {
          dependencyMap = authStore;
        }
        tmp = { connectionType: dependencyMap, applicationId: react, connectionMetadataField: metadataField, operator, value: "1" };
        const obj = { connectionType: dependencyMap, applicationId: react, connectionMetadataField: metadataField, operator, value: "1" };
      }
      let num;
      const tmp6 = _slicedToArray;
      if (existingPendingConfiguration != null) {
        num = existingPendingConfiguration.index;
      }
      if (num == null) {
        num = -1;
      }
      tmp6(tmp, num);
    }
  };
  value = undefined;
  const TableSwitchRow = metadataField(6621).TableSwitchRow;
  const tmp2 = closure_12;
  if (existingPendingConfiguration != null) {
    value = existingPendingConfiguration.configuration.value;
  }
  return tmp2(TableSwitchRow, obj, metadataField);
}
function NumericalConfigRule(existingPendingConfiguration) {
  let Children;
  let applicationId;
  let fieldText;
  let fieldTextHook;
  let items1;
  let locked;
  let metadataField;
  let obj6;
  let tmp10;
  let tmp19Result;
  let value;
  ({ fieldText, fieldTextHook, metadataField } = existingPendingConfiguration);
  existingPendingConfiguration = existingPendingConfiguration.existingPendingConfiguration;
  ({ platform: dependencyMap, onConfigurationChange: _slicedToArray, locked, applicationId: react } = existingPendingConfiguration);
  let c7;
  let str1;
  value = undefined;
  let closure_10;
  let closure_11;
  let closure_13;
  function onInputValueChange(TableSwitchRow) {
    let obj2;
    c10(TableSwitchRow);
    let isFiniteResult = null != existingPendingConfiguration && "" !== TableSwitchRow;
    if (isFiniteResult) {
      const _Number = Number;
      const _Number2 = Number;
      isFiniteResult = Number.isFinite(Number(TableSwitchRow));
    }
    if (isFiniteResult) {
      let type;
      const tmp4 = _slicedToArray;
      if (dependencyMap != null) {
        type = dependencyMap.type;
      }
      if (type == null) {
        type = authStore;
      }
      const obj = { connectionType: type, applicationId: react, connectionMetadataField: metadataField, operator, value: obj2.storedValueFor(TableSwitchRow, operator) };
      obj2 = RoleConnectionRequirementUtils;
      tmp4(obj, num);
    }
  }
  const operator = existingPendingConfiguration.operator;
  let tmp = closure_15();
  let closure_5 = tmp;
  let num;
  if (existingPendingConfiguration != null) {
    num = existingPendingConfiguration.index;
  }
  if (num == null) {
    num = -1;
  }
  let tmp2 = metadataField;
  let tmp3 = dependencyMap;
  let obj = metadataField(17439);
  const realizedOperatorForResult = obj.realizedOperatorFor(operator);
  c7 = realizedOperatorForResult;
  value = undefined;
  if (existingPendingConfiguration != null) {
    if (existingPendingConfiguration.configuration != null) {
      value = iter.value;
    }
  }
  const tmp2Result = tmp2(17439);
  const str = tmp2Result.displayedValueFor(value, realizedOperatorForResult);
  str1 = str.toString();
  [value, tmp10] = react.useState(str1);
  closure_10 = tmp10;
  const tmp11 = null != value && "" !== value && value !== str1;
  const tmp7 = react;
  if (tmp11) {
    tmp10(str1);
  }
  let configuration;
  if (existingPendingConfiguration != null) {
    configuration = existingPendingConfiguration.configuration;
  }
  closure_11 = tmp15;
  if (undefined !== fieldTextHook) {
    const tmp2Result2 = tmp2(1364);
    closure_13 = tmp2Result2.isIOS() ? tmp.numericalInputContainerIOSInline : tmp.numericalInputContainerAndroidInline;
    const intl = tmp2(1115).intl;
    let obj2 = {
      metadataHook() {
          let TextInput;
          let items;
          let obj2;
          const obj = { style: items, children: onInputValueChange(TextInput, obj2, metadataField) };
          items = [closure_13, closure_5.numericalInputContainerBase];
          const items1 = [closure_5.numericalInput, ];
          let numericalInputDisabled = closure_11;
          TextInput = native.TextInput;
          const tmp2 = View;
          const tmp3 = closure_5;
          if (closure_11) {
            numericalInputDisabled = tmp3.numericalInputDisabled;
          }
          obj2 = { keyboardType: "number-pad", style: items1, editable: !closure_11, value, onChangeText: onInputValueChange, hitSlop: 8 };
          items1[1] = numericalInputDisabled;
          return onInputValueChange(tmp2, obj, "_numericalInputContainer");
        }
    };
    const obj3 = {
      style: tmp.metadataRow,
      children: Children.map(intl.format(fieldTextHook, obj2), (children, arg1) => {
          let tmp = children;
          if (typeof children === "string") {
            const _HermesInternal = HermesInternal;
            const obj = { variant: "text-md/semibold", style: closure_5.metadataRowText, children };
            tmp = onInputValueChange(Text_Text.Text, obj, "t-" + arg1);
          }
          return tmp;
        })
    };
    Children = tmp7.Children;
    tmp19Result = onInputValueChange(closure_5, obj3);
  } else if (undefined !== fieldText) {
    let items = [tmp.appNumericalInput, ];
    let numericalInputDisabled = tmp15;
    const obj4 = { style: tmp.appNumericalInputContainer, children: items1 };
    let TextInput = tmp2(1177).TextInput;
    const tmp19 = closure_13;
    if (locked || null == configuration) {
      numericalInputDisabled = tmp.numericalInputDisabled;
    }
    const obj5 = { children: onInputValueChange(TextInput, obj6, metadataField) };
    obj6 = { keyboardType: "number-pad", style: items, editable: !(locked || null == configuration), value, onChangeText: onInputValueChange };
    items[1] = numericalInputDisabled;
    items1 = [onInputValueChange(closure_5, obj5, "_numericalInputContainer"), ];
    const obj7 = { variant: "text-md/semibold", style: tmp.appNumericalInputText, children: fieldText };
    items1[1] = onInputValueChange(tmp2(4832).Text, obj7);
    tmp19Result = tmp19(tmp20, obj4);
  }
  const obj8 = {
    label: tmp19Result,
    value: null != configuration,
    disabled: locked,
    onValueChange(arg0) {
      let obj2;
      let tmp = first;
      if ("" === first) {
        tmp = str1;
      }
      c10(tmp);
      let tmp3 = null;
      if (arg0) {
        let type;
        if (dependencyMap != null) {
          type = dependencyMap.type;
        }
        if (type == null) {
          type = authStore;
        }
        const obj = { connectionType: type, applicationId: react, connectionMetadataField: metadataField, operator, value: obj2.storedValueFor(tmp, operator) };
        tmp3 = obj;
        obj2 = RoleConnectionRequirementUtils;
      }
      num = undefined;
      const tmp10 = _slicedToArray;
      if (existingPendingConfiguration != null) {
        num = existingPendingConfiguration.index;
      }
      if (num == null) {
        num = -1;
      }
      tmp10(tmp3, num);
    }
  };
  return onInputValueChange(tmp2(6621).TableSwitchRow, obj8, metadataField);
}
function BlueskyMetadataRules(arg0) {
  let configMetadataMap;
  let items;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  const obj = PlatformsDefault;
  const value = obj.get(PlatformTypes.BLUESKY);
  const obj2 = { children: items };
  items = [, , ];
  const obj3 = { fieldTextHook: intl3.t["REyUZ/"], metadataField: metroImportDefault.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.CREATED_AT), platform: value, onConfigurationChange, locked };
  items[0] = closure_12(NumericalConfigRule, obj3);
  const obj4 = { fieldTextHook: intl3.t["/w/EYk"], metadataField: metroImportDefault.BLUESKY_FOLLOWERS_COUNT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.BLUESKY_FOLLOWERS_COUNT), platform: value, onConfigurationChange, locked };
  items[1] = closure_12(NumericalConfigRule, obj4);
  const obj5 = { fieldTextHook: intl3.t["5I4mVS"], metadataField: metroImportDefault.BLUESKY_STATUSES_COUNT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.BLUESKY_STATUSES_COUNT), platform: value, onConfigurationChange, locked };
  items[2] = closure_12(NumericalConfigRule, obj5);
  return map1(authStore2, obj2);
}
function SteamMetadataRules(arg0) {
  let configMetadataMap;
  let items;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  const obj = PlatformsDefault;
  const value = obj.get(PlatformTypes.STEAM);
  const obj2 = { children: items };
  items = [, , , ];
  const obj3 = { fieldTextHook: intl3.t["REyUZ/"], metadataField: metroImportDefault.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.CREATED_AT), platform: value, onConfigurationChange, locked };
  items[0] = closure_12(NumericalConfigRule, obj3);
  const obj4 = { fieldTextHook: intl3.t.zVJxqj, metadataField: metroImportDefault.STEAM_GAME_COUNT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.STEAM_GAME_COUNT), platform: value, onConfigurationChange, locked };
  items[1] = closure_12(NumericalConfigRule, obj4);
  const obj5 = { fieldTextHook: intl3.t["ZCNdD/"], metadataField: metroImportDefault.STEAM_ITEM_COUNT_DOTA2, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.STEAM_ITEM_COUNT_DOTA2), platform: value, onConfigurationChange, locked };
  items[2] = closure_12(NumericalConfigRule, obj5);
  const obj6 = { fieldTextHook: intl3.t["MCHnK+"], metadataField: metroImportDefault.STEAM_ITEM_COUNT_TF2, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.STEAM_ITEM_COUNT_TF2), platform: value, onConfigurationChange, locked };
  items[3] = closure_12(NumericalConfigRule, obj6);
  return map1(authStore2, obj2);
}
function TwitterMetadataRules(arg0) {
  let configMetadataMap;
  let intl;
  let items;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  const obj = PlatformsDefault;
  const value = obj.get(PlatformTypes.TWITTER);
  const obj2 = { children: items };
  items = [, , , ];
  const obj3 = { fieldTextHook: intl3.t["REyUZ/"], metadataField: metroImportDefault.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.CREATED_AT), platform: value, onConfigurationChange, locked };
  items[0] = closure_12(NumericalConfigRule, obj3);
  const obj4 = { fieldTextHook: intl3.t["/w/EYk"], metadataField: metroImportDefault.TWITTER_FOLLOWERS_COUNT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.TWITTER_FOLLOWERS_COUNT), platform: value, onConfigurationChange, locked };
  items[1] = closure_12(NumericalConfigRule, obj4);
  const obj5 = { fieldTextHook: intl3.t["+NFH7k"], metadataField: metroImportDefault.TWITTER_STATUSES_COUNT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.TWITTER_STATUSES_COUNT), platform: value, onConfigurationChange, locked };
  items[2] = closure_12(NumericalConfigRule, obj5);
  const obj6 = { fieldText: intl.string(intl3.t.E2iT8K), metadataField: metroImportDefault.TWITTER_VERIFIED, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.TWITTER_VERIFIED), platform: value, onConfigurationChange, locked };
  intl = intl3.intl;
  items[3] = closure_12(BooleanConfigRule, obj6);
  return map1(authStore2, obj2);
}
function RedditMetadataRules(arg0) {
  let configMetadataMap;
  let intl;
  let intl2;
  let items;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  const obj = PlatformsDefault;
  const value = obj.get(PlatformTypes.REDDIT);
  const obj2 = { children: items };
  items = [, , , ];
  const obj3 = { fieldTextHook: intl3.t["REyUZ/"], metadataField: metroImportDefault.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.CREATED_AT), platform: value, onConfigurationChange, locked };
  items[0] = closure_12(NumericalConfigRule, obj3);
  const obj4 = { fieldTextHook: intl3.t.TLgZhv, metadataField: metroImportDefault.REDDIT_TOTAL_KARMA, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.REDDIT_TOTAL_KARMA), platform: value, onConfigurationChange, locked };
  items[1] = closure_12(NumericalConfigRule, obj4);
  const obj5 = { fieldText: intl.string(intl3.t["0cKdka"]), metadataField: metroImportDefault.REDDIT_MOD, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.REDDIT_MOD), platform: value, onConfigurationChange, locked };
  intl = intl3.intl;
  items[2] = closure_12(BooleanConfigRule, obj5);
  const obj6 = { fieldText: intl2.string(intl3.t.kCAN58), metadataField: metroImportDefault.REDDIT_GOLD, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.REDDIT_GOLD), platform: value, onConfigurationChange, locked };
  intl2 = intl3.intl;
  items[3] = closure_12(BooleanConfigRule, obj6);
  return map1(authStore2, obj2);
}
function PaypalMetadataRules(arg0) {
  let configMetadataMap;
  let intl;
  let items;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  const obj = PlatformsDefault;
  const value = obj.get(PlatformTypes.PAYPAL);
  const obj2 = { children: items };
  items = [, ];
  const obj3 = { fieldTextHook: intl3.t["REyUZ/"], metadataField: metroImportDefault.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.CREATED_AT), platform: value, onConfigurationChange, locked };
  items[0] = closure_12(NumericalConfigRule, obj3);
  const obj4 = { fieldText: intl.string(intl3.t["0JyE8I"]), metadataField: metroImportDefault.PAYPAL_VERIFIED, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.PAYPAL_VERIFIED), platform: value, onConfigurationChange, locked };
  intl = intl3.intl;
  items[1] = closure_12(BooleanConfigRule, obj4);
  return map1(authStore2, obj2);
}
function EbayMetadataRules(arg0) {
  let configMetadataMap;
  let intl;
  let items;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  const obj = PlatformsDefault;
  const value = obj.get(PlatformTypes.EBAY);
  const obj2 = { children: items };
  items = [, , , , ];
  const obj3 = { fieldTextHook: intl3.t["REyUZ/"], metadataField: metroImportDefault.CREATED_AT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.CREATED_AT), platform: value, onConfigurationChange, locked };
  items[0] = closure_12(NumericalConfigRule, obj3);
  const obj4 = { fieldTextHook: intl3.t.oTFOe5, metadataField: metroImportDefault.EBAY_POSITIVE_FEEDBACK_PERCENTAGE, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.EBAY_POSITIVE_FEEDBACK_PERCENTAGE), platform: value, onConfigurationChange, locked };
  items[1] = closure_12(NumericalConfigRule, obj4);
  const obj5 = { fieldTextHook: intl3.t["v5a2+Q"], metadataField: metroImportDefault.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT), platform: value, onConfigurationChange, locked };
  items[2] = closure_12(NumericalConfigRule, obj5);
  const obj6 = { fieldTextHook: intl3.t.yYbR2r, metadataField: metroImportDefault.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT), platform: value, onConfigurationChange, locked, operator: metroImportAll.LESS_THAN };
  items[3] = closure_12(NumericalConfigRule, obj6);
  const obj7 = { fieldText: intl.string(intl3.t["39wASN"]), metadataField: metroImportDefault.EBAY_TOP_RATED_SELLER, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.EBAY_TOP_RATED_SELLER), platform: value, onConfigurationChange, locked };
  intl = intl3.intl;
  items[4] = closure_12(BooleanConfigRule, obj7);
  return map1(authStore2, obj2);
}
function TikTokMetadataRules(arg0) {
  let configMetadataMap;
  let intl;
  let items;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap, onConfigurationChange, locked } = arg0);
  const obj = PlatformsDefault;
  const value = obj.get(PlatformTypes.TIKTOK);
  const obj2 = { children: items };
  const obj3 = { fieldText: intl.string(intl3.t.E2iT8K), metadataField: metroImportDefault.TIKTOK_VERIFIED, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.TIKTOK_VERIFIED), platform: value, onConfigurationChange, locked };
  intl = intl3.intl;
  items = [closure_12(BooleanConfigRule, obj3), , , ];
  const obj4 = { fieldTextHook: intl3.t["/w/EYk"], metadataField: metroImportDefault.TIKTOK_FOLLOWER_COUNT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.TIKTOK_FOLLOWER_COUNT), platform: value, onConfigurationChange, locked };
  items[1] = closure_12(NumericalConfigRule, obj4);
  const obj5 = { fieldTextHook: intl3.t.JHEsYw, metadataField: metroImportDefault.TIKTOK_FOLLOWING_COUNT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.TIKTOK_FOLLOWING_COUNT), platform: value, onConfigurationChange, locked };
  items[2] = closure_12(NumericalConfigRule, obj5);
  const obj6 = { fieldTextHook: intl3.t.tEFCYA, metadataField: metroImportDefault.TIKTOK_LIKES_COUNT, existingPendingConfiguration: configMetadataMap.get(metroImportDefault.TIKTOK_LIKES_COUNT), platform: value, onConfigurationChange, locked };
  items[3] = closure_12(NumericalConfigRule, obj6);
  return map1(authStore2, obj2);
}
function ApplicationMetadataRules(arg0) {
  let integration;
  let locked;
  let onConfigurationChange;
  ({ configMetadataMap: require, onConfigurationChange: importDefault, locked: dependencyMap, integration } = arg0);
  let mapped = null;
  if (null != integration) {
    mapped = null;
    if (null != integration.role_connections_metadata) {
      const prop = integration.role_connections_metadata;
      mapped = prop.map((type) => {
        let id;
        let id1;
        type = type.type;
        if (constants.INTEGER_LESS_THAN_EQUAL !== type) {
          let LESS_THAN;
          if (constants.DATETIME_LESS_THAN_EQUAL !== type) {
            if (constants.INTEGER_GREATER_THAN_EQUAL !== type) {
              if (constants.DATETIME_GREATER_THAN_EQUAL !== type) {
                if (constants.INTEGER_EQUAL !== type) {
                  if (constants.BOOLEAN_EQUAL !== type) {
                    if (constants.INTEGER_NOT_EQUAL !== type) {
                      if (constants.BOOLEAN_NOT_EQUAL !== type) {
                        return null;
                      }
                    }
                    LESS_THAN = metroImportAll.NOT_EQUAL;
                  }
                }
                LESS_THAN = metroImportAll.EQUAL;
              }
            }
            LESS_THAN = metroImportAll.GREATER_THAN;
          }
          const type2 = type.type;
          if (constants.INTEGER_LESS_THAN_EQUAL !== type2) {
            if (constants.INTEGER_GREATER_THAN_EQUAL !== type2) {
              if (constants.INTEGER_EQUAL !== type2) {
                if (constants.INTEGER_NOT_EQUAL !== type2) {
                  if (constants.DATETIME_LESS_THAN_EQUAL !== type2) {
                    if (constants.DATETIME_GREATER_THAN_EQUAL !== type2) {
                      const obj = { fieldText: null, metadataField: null, existingPendingConfiguration: require.get(type.key), platform: null, onConfigurationChange: importDefault, locked: dependencyMap, operator: LESS_THAN, applicationId: id };
                      ({ description: obj.fieldText, key: obj.metadataField } = type);
                      const application = integration.application;
                      id = undefined;
                      const tmp6 = closure_12;
                      const tmp7 = BooleanConfigRule;
                      if (application != null) {
                        id = application.id;
                      }
                      return tmp6(tmp7, obj, type.key);
                    }
                  }
                }
              }
            }
          }
          ({ description: obj2.fieldText, key: obj2.metadataField } = type);
          const application2 = integration.application;
          const obj3 = { fieldText: null, metadataField: null, existingPendingConfiguration: require.get(type.key), platform: null, onConfigurationChange: importDefault, locked: dependencyMap, operator: LESS_THAN, applicationId: id1 };
          id1 = undefined;
          const tmp14 = closure_12;
          const tmp15 = NumericalConfigRule;
          if (application2 != null) {
            id1 = application2.id;
          }
          return tmp14(tmp15, obj3, type.key);
        }
        LESS_THAN = metroImportAll.LESS_THAN;
      });
    }
  }
  return mapped;
}
const View = react_native.View;
const PlatformTypes = Constants2.PlatformTypes;
({ MetadataFields: metroImportDefault, OperatorTypes: metroImportAll, MetadataItemTypes: c9, GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE: c10, GUILD_ROLE_CONNECTION_APPLICATION_IDENTITY_CONNECTION_TYPE: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { numericalInputContainerIOSInline: { marginTop: -2 }, numericalInputContainerAndroidInline: obj2, numericalInputContainerBase: obj3, numericalInput: size, appNumericalInput: size1, appNumericalInputContainer: { flexDirection: "row", alignItems: "center" }, appNumericalInputText: { flexShrink: 1 }, numericalInputDisabled: obj4, metadataRow: { flexDirection: "row", flexWrap: "wrap", alignItems: "center" }, metadataRowText: { lineHeight: 32 } };
obj2 = { transform: items };
items = [{ translateY: 10 }];
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
size = { width: 54, height: 32, borderRadius: nativeDefault.radii.xs, paddingHorizontal: 4, paddingVertical: 0, marginTop: -4 };
size1 = { width: 54, height: 32, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs, paddingHorizontal: 8, paddingVertical: 0, marginRight: 8 };
obj4 = { color: nativeDefault.colors.TEXT_MUTED };
let closure_15 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleEditConnectionConfiguration.tsx");

export default function GuildSettingsRoleEditConnectionConfiguration(configurationItems) {
  let items;
  let locked;
  let obj3;
  configurationItems = configurationItems.configurationItems;
  const onConfigurationChange = configurationItems.onConfigurationChange;
  ({ locked, integrations } = configurationItems);
  let applicationId;
  let c3;
  map = undefined;
  if (configurationItems.length < 1) {
    return null;
  } else {
    let tmp;
    applicationId = configurationItems[0].configuration.applicationId;
    if (null != applicationId) {
      if (configurationItems[0].configuration.connectionType !== unpackModuleId) {
        let found;
        if (integrations != null) {
          found = integrations.find((application) => {
            application = application.application;
            let id;
            if (application != null) {
              id = application.id;
            }
            return id === applicationId;
          });
        }
        tmp = found;
      }
    }
    if (null != applicationId) {
      if (configurationItems[0].configuration.connectionType !== unpackModuleId) {
        if (null == tmp) {
          return null;
        }
      }
    }
    if (configurationItems[0].configuration.connectionType === unpackModuleId) {
      const obj2 = { hasIcons: true, children: closure_12(Header, obj3) };
      obj3 = {
        platform: null,
        integration: "a",
        applicationId,
        onRemove() {
              return onConfigurationChange(null, configurationItems[0].index);
            },
        locked
      };
      const TableRowGroup2 = TableRowGroup3.TableRowGroup;
      return closure_12(TableRowGroup2, obj2);
    } else {
      let tmp18;
      let tmp19;
      let value = null;
      try {
        const obj = PlatformsDefault;
        value = obj.get(configurationItems[0].configuration.connectionType);
      } catch (err) {
      }
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
      const item = configurationItems.forEach((configuration) => {
        if (null != configuration.configuration.connectionMetadataField) {
          const result = map.set(configuration.configuration.connectionMetadataField, configuration);
        } else {
          const tmp = null == configuration.configuration.value && null == configuration.configuration.operator;
          if (tmp) {
            let c3 = configuration;
          }
        }
      });
      const obj4 = { configMetadataMap: map, onConfigurationChange, locked };
      let type;
      if (value != null) {
        type = value.type;
      }
      if (PlatformTypes.STEAM === type) {
        const obj5 = {};
        const merged = Object.assign(obj4);
        tmp18 = closure_12(SteamMetadataRules, obj5);
        tmp19 = closure_12;
      } else if (PlatformTypes.TWITTER === type) {
        const obj6 = {};
        const merged1 = Object.assign(obj4);
        tmp18 = closure_12(TwitterMetadataRules, obj6);
        tmp19 = closure_12;
      } else if (PlatformTypes.REDDIT === type) {
        const obj7 = {};
        const merged2 = Object.assign(obj4);
        tmp18 = closure_12(RedditMetadataRules, obj7);
        tmp19 = closure_12;
      } else if (PlatformTypes.BLUESKY === type) {
        const obj8 = {};
        const merged3 = Object.assign(obj4);
        tmp18 = closure_12(BlueskyMetadataRules, obj8);
        tmp19 = closure_12;
      } else if (PlatformTypes.PAYPAL === type) {
        const obj9 = {};
        const merged4 = Object.assign(obj4);
        tmp18 = closure_12(PaypalMetadataRules, obj9);
        tmp19 = closure_12;
      } else if (PlatformTypes.EBAY === type) {
        const obj10 = {};
        const merged5 = Object.assign(obj4);
        tmp18 = closure_12(EbayMetadataRules, obj10);
        tmp19 = closure_12;
      } else if (PlatformTypes.TIKTOK === type) {
        const obj11 = {};
        const merged6 = Object.assign(obj4);
        tmp18 = closure_12(TikTokMetadataRules, obj11);
        tmp19 = closure_12;
      } else {
        const obj12 = { integration: tmp };
        const merged7 = Object.assign(obj4);
        tmp18 = closure_12(ApplicationMetadataRules, obj12);
        tmp19 = closure_12;
      }
      const obj13 = { hasIcons: true, children: items };
      const obj14 = {
        platform: value,
        integration: tmp,
        onRemove() {
              return onConfigurationChange(null, _undefined.index);
            },
        locked
      };
      const TableRowGroup = TableRowGroup3.TableRowGroup;
      items = [tmp19(Header, obj14), tmp18];
      return map1(TableRowGroup, obj13);
    }
  }
};
