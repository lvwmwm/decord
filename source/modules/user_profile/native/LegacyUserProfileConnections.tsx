// Module ID: 10032
// Function ID: 77505
// Name: useAppplicationRoleConnectionItems
// Dependencies: [31, 27, 1921, 1857, 3970, 6855, 653, 1277, 4940, 33, 4130, 689, 4939, 10033, 4814, 1392, 3976, 1273, 10036, 10037, 3834, 10038, 10039, 4099, 5490, 3830, 1212, 8380, 4324, 3827, 4660, 4126, 3842, 566, 6735, 10040, 2]
// Exports: default

// Module 10032 (useAppplicationRoleConnectionItems)
import importAllResult from "Text";
import get_ActivityIndicator from "isLinkTrusted";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";
import { MetadataFields } from "OperatorTypes";
import jsxProd from "initialize";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_4;
let closure_5;
const require = arg1;
class ConnectedUserAccount {
  constructor(arg0) {
    account = global.account;
    ({ theme, userId } = global);
    ({ showMetadata, showInvisibleIcon } = global);
    type = undefined;
    c3 = undefined;
    ({ locale, style } = global);
    if (null == showMetadata) {
      showMetadata = true;
    }
    tmp = Fragment();
    metadata = account.metadata;
    if (null == metadata) {
      metadata = {};
    }
    createdAtDate = null;
    if (showMetadata) {
      tmp3 = account;
      tmp4 = type;
      num = 12;
      obj2 = require("officialApplicationIds");
      tmp5 = MetadataFields;
      createdAtDate = obj2.getCreatedAtDate(metadata[MetadataFields.CREATED_AT], locale);
    }
    if (showMetadata) {
      type = account.type;
      tmp6 = PlatformTypes;
      if (PlatformTypes.REDDIT === type) {
        tmp18 = account;
        tmp19 = type;
        num6 = 13;
        obj7 = require("_createForOfIteratorHelperLoose");
        redditMetadataItems = obj7.generateRedditMetadataItems(metadata, tmp.metadataItem);
      } else {
        tmp79 = PlatformTypes;
        if (PlatformTypes.STEAM === type) {
          tmp16 = account;
          tmp17 = type;
          num5 = 13;
          obj6 = require("_createForOfIteratorHelperLoose");
          redditMetadataItems = obj6.generateSteamMetadataItems(metadata, tmp.metadataItem);
        } else {
          tmp80 = PlatformTypes;
          if (PlatformTypes.BLUESKY !== type) {
            tmp81 = PlatformTypes;
            if (PlatformTypes.MASTODON !== type) {
              tmp82 = PlatformTypes;
              if (PlatformTypes.TWITTER !== type) {
                tmp83 = PlatformTypes;
                if (PlatformTypes.PAYPAL === type) {
                  tmp10 = account;
                  tmp11 = type;
                  num3 = 13;
                  obj4 = require("_createForOfIteratorHelperLoose");
                  redditMetadataItems = obj4.generatePaypalMetadataItems(metadata, tmp.metadataItem);
                } else {
                  tmp84 = PlatformTypes;
                  if (PlatformTypes.EBAY === type) {
                    tmp8 = account;
                    tmp9 = type;
                    num2 = 13;
                    obj3 = require("_createForOfIteratorHelperLoose");
                    redditMetadataItems = obj3.generateEbayMetadataItems(metadata, tmp.metadataItem);
                  } else {
                    tmp7 = PlatformTypes;
                    if (PlatformTypes.TIKTOK === type) {
                      tmp85 = account;
                      tmp86 = type;
                      num21 = 13;
                      obj29 = require("_createForOfIteratorHelperLoose");
                      redditMetadataItems = obj29.generateTikTokMetadataItems(metadata, tmp.metadataItem);
                    }
                  }
                }
              }
            }
          }
          tmp12 = account;
          tmp13 = type;
          num4 = 13;
          obj5 = require("_createForOfIteratorHelperLoose");
          twitterMetadataItems = obj5.generateTwitterMetadataItems(metadata, tmp.metadataItem);
          tmp15 = MetadataFields;
          str = "1";
          redditMetadataItems = twitterMetadataItems;
          if ("1" === metadata[MetadataFields.TWITTER_VERIFIED]) {
            tmp87 = userId;
            tmp88 = type;
            num22 = 14;
            obj30 = require("getPlatformUserUrl");
            tmp89 = PlatformTypes;
            color = obj30.get(PlatformTypes.TWITTER).color;
            redditMetadataItems = twitterMetadataItems;
          }
        }
      }
    }
    obj8 = require("getPlatformUserUrl");
    value = obj8.get(account.type);
    type = value;
    obj10 = require("getAvatarURL");
    obj11 = require("AccessibilityAnnouncer");
    tmp20 = null == value;
    if (obj11.isThemeDark(theme)) {
      darkPNG = undefined;
      if (!tmp20) {
        darkPNG = value.icon.darkPNG;
      }
      lightPNG = darkPNG;
    } else if (!tmp20) {
      lightPNG = value.icon.lightPNG;
    }
    platformUserUrl = undefined;
    source = obj10.makeSource(lightPNG);
    if (null != value) {
      if (null != value.getPlatformUserUrl) {
        platformUserUrl = value.getPlatformUserUrl(account);
      }
    }
    c3 = platformUserUrl;
    if (null != showInvisibleIcon) {
      if (showInvisibleIcon) {
        tmp29 = jsx;
        tmp30 = account;
        tmp31 = type;
        num9 = 17;
        obj = {};
        obj.style = tmp.connectedAccountOpenHide;
        tmp32 = userId;
        num10 = 18;
        obj.source = require("registerAsset");
        tmp24 = jsx(require("Button").Icon, obj);
      }
      tmp33 = account;
      tmp34 = type;
      num11 = 20;
      obj14 = require("map");
      tmp35 = userId;
      num12 = 11;
      token = obj14.useToken(require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, theme);
      obj15 = require("map");
      if (null != color) {
        tmp37 = ThemeTypes;
        theme = ThemeTypes.DARK;
      }
      WHITE = obj15.useToken(require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE, theme);
      tmp38 = token;
      if (null != color) {
        tmp39 = userId;
        tmp40 = type;
        WHITE = require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE;
        tmp38 = color;
      }
      tmp41 = null;
      if (account.verified) {
        tmp42 = jsxs;
        tmp43 = View;
        obj1 = {};
        obj1.style = tmp.verifiedCheckContainer;
        tmp44 = jsx;
        tmp45 = account;
        tmp46 = type;
        num13 = 17;
        obj2 = {};
        obj2.style = tmp.verifiedCheck;
        obj2.size = require("Button").Icon.Sizes.REFRESH_SMALL_16;
        tmp47 = userId;
        num14 = 21;
        obj2.source = require("registerAsset");
        obj2.color = tmp38;
        items = [, ];
        items[0] = jsx(require("Button").Icon, obj2);
        tmp48 = jsx;
        obj3 = {};
        obj3.style = tmp.verifiedCheck;
        obj3.size = require("Button").Icon.Sizes.REFRESH_SMALL_16;
        num15 = 22;
        obj3.source = require("registerAsset");
        obj3.color = WHITE;
        items[1] = jsx(require("Button").Icon, obj3);
        obj1.children = items;
        tmp41 = jsxs(View, obj1);
      }
      tmp49 = c3;
      items1 = [];
      items1[0] = account.name;
      name = undefined;
      callback = c3.useCallback(() => {
        const result = account(_undefined[23]).triggerHapticFeedback(account(_undefined[23]).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj = account(_undefined[23]);
        account(_undefined[24]).copy(account.name);
        const obj2 = account(_undefined[24]);
        const result1 = account(_undefined[25]).presentCopiedToClipboard();
      }, items1);
      tmp51 = c3;
      if (null != value) {
        name = value.name;
      }
      items2 = [, ];
      items2[0] = name;
      items2[1] = platformUserUrl;
      tmp54 = c3;
      items3 = [, , ];
      items3[0] = account.type;
      items3[1] = platformUserUrl;
      items3[2] = userId;
      memo = c3.useMemo(() => {
        if (null != platformUserUrl) {
          const intl2 = account(_undefined[26]).intl;
          let stringResult = intl2.string(account(_undefined[26]).t.wuRE8M);
        } else {
          let name;
          const intl = account(_undefined[26]).intl;
          const obj = {};
          if (null != _undefined) {
            name = _undefined.name;
          }
          let str = "";
          if (null != name) {
            str = name;
          }
          obj.name = str;
          stringResult = intl.formatToPlainString(account(_undefined[26]).t.OKzaN3, obj);
        }
        return stringResult;
      }, items2);
      callback1 = c3.useCallback(() => {
        if (null != platformUserUrl) {
          let obj = account(_undefined[27]);
          obj = {
            href: platformUserUrl,
            trusted: account.type !== outer1_11.DOMAIN,
            onConfirm() {
                let obj = account(4324);
                obj = { platform_type: outer1_0.type, other_user_id: outer1_1 };
                obj.trackWithMetadata(outer2_10.CONNECTED_ACCOUNT_VIEWED, obj);
                userId(3827).openURL(outer1_3);
              }
          };
          obj.handleClick(obj);
        }
      }, items3);
      if (null != platformUserUrl) {
        tmp56 = account;
        tmp57 = type;
        num16 = 30;
        PressableOpacity = require("PressableBase").PressableOpacity;
      } else {
        PressableOpacity = Pressable;
      }
      obj4 = {};
      obj4.accessibilityLabel = memo;
      str2 = "button";
      obj4.accessibilityRole = "button";
      tmp59 = undefined;
      tmp58 = jsx;
      if (null != platformUserUrl) {
        tmp59 = callback1;
      }
      obj4.onPress = tmp59;
      obj4.onLongPress = callback;
      obj5 = {};
      items4 = [, ];
      items4[0] = tmp.connectedAccountContainer;
      items4[1] = style;
      obj5.style = items4;
      obj6 = {};
      obj6.style = tmp.connectedAccount;
      tmp64 = jsx;
      tmp65 = account;
      tmp66 = type;
      num17 = 17;
      tmp60 = jsx;
      tmp61 = View;
      tmp62 = jsxs;
      tmp63 = View;
      obj7 = {};
      obj7.size = require("Button").Icon.Sizes.MEDIUM;
      obj7.source = source;
      flag = true;
      obj7.disableColor = true;
      items5 = [, , ];
      items5[0] = jsx(require("Button").Icon, obj7);
      obj8 = {};
      obj8.style = tmp.connectedAccountNameContainer;
      tmp69 = jsxs;
      tmp70 = View;
      obj9 = {};
      obj9.style = tmp.connectedAccountName;
      tmp71 = jsx;
      num18 = 31;
      tmp67 = jsxs;
      tmp68 = View;
      obj10 = {};
      str3 = "text-md/semibold";
      obj10.variant = "text-md/semibold";
      obj10.style = tmp.connectedAccountNameText;
      obj10.children = account.name;
      items6 = [, ];
      items6[0] = jsx(require("Text").Text, obj10);
      items6[1] = tmp41;
      obj9.children = items6;
      items7 = [, , ];
      items7[0] = jsxs(View, obj9);
      tmp72 = null;
      if (null != createdAtDate) {
        tmp73 = jsx;
        tmp74 = account;
        tmp75 = type;
        obj11 = {};
        str4 = "heading-deprecated-12/medium";
        obj11.variant = "heading-deprecated-12/medium";
        obj11.style = tmp.connectedAccountNameCreatedAtText;
        num19 = 26;
        intl = require("getSystemLocale").intl;
        obj12 = {};
        obj12.date = createdAtDate;
        obj11.children = intl.format(require("getSystemLocale").t["9rfonh"], obj12);
        tmp72 = jsx(require("Text").Text, obj11);
      }
      items7[1] = tmp72;
      tmp76 = null;
      if (null != redditMetadataItems) {
        num20 = 0;
        tmp76 = null;
        if (redditMetadataItems.length > 0) {
          tmp77 = jsx;
          tmp78 = View;
          obj13 = {};
          obj13.style = tmp.connectedAccountChildren;
          obj13.children = redditMetadataItems;
          tmp76 = jsx(View, obj13);
        }
      }
      items7[2] = tmp76;
      obj8.children = items7;
      items5[1] = tmp67(tmp68, obj8);
      items5[2] = tmp24;
      obj6.children = items5;
      obj5.children = tmp62(tmp63, obj6);
      obj4.children = tmp60(tmp61, obj5);
      return tmp58(PressableOpacity, obj4);
    }
    tmp24 = null;
    if (null != platformUserUrl) {
      tmp25 = jsx;
      tmp26 = account;
      tmp27 = type;
      num7 = 17;
      obj14 = {};
      obj14.style = tmp.connectedAccountOpenLink;
      tmp28 = userId;
      num8 = 19;
      obj14.source = require("registerAsset");
      tmp24 = jsx(require("Button").Icon, obj14);
    }
    return;
  }
}
class ConnectedApplicationUserRoleAccount {
  constructor(arg0) {
    applicationRoleConnection = global.applicationRoleConnection;
    tmp = Fragment();
    closure_1 = tmp;
    obj = require("_createForOfIteratorHelperLoose");
    roleConnectionMetadataItems = obj.generateRoleConnectionMetadataItems(applicationRoleConnection);
    obj = { style: items };
    items = [, ];
    items[0] = tmp.connectedAccountContainer;
    items[1] = global.style;
    tmp4 = null;
    tmp2 = jsxs;
    tmp3 = View;
    if (null != applicationRoleConnection.platform_name) {
      tmp5 = jsx;
      tmp6 = applicationRoleConnection;
      tmp7 = closure_2;
      num = 31;
      obj1 = { variant: "eyebrow", color: "interactive-text-default" };
      obj1.children = applicationRoleConnection.platform_name;
      tmp4 = jsx(require("Text").Text, obj1);
    }
    items1 = [, , , ];
    items1[0] = tmp4;
    obj2 = { style: tmp.appConnectionNameContainer };
    tmp10 = null;
    tmp8 = jsx;
    tmp9 = View;
    if (null != applicationRoleConnection.platform_username) {
      tmp11 = jsx;
      tmp12 = applicationRoleConnection;
      tmp13 = closure_2;
      num2 = 31;
      obj3 = { variant: "text-md/semibold", color: "interactive-text-active" };
      obj3.children = applicationRoleConnection.platform_username;
      tmp10 = jsx(require("Text").Text, obj3);
    }
    obj2.children = tmp10;
    items1[1] = tmp8(tmp9, obj2);
    tmp14 = null;
    if (null != roleConnectionMetadataItems) {
      num3 = 0;
      tmp14 = null;
      if (roleConnectionMetadataItems.length > 0) {
        tmp15 = jsx;
        tmp16 = View;
        obj4 = {};
        obj4.style = tmp.connectedAccountChildren;
        obj4.children = roleConnectionMetadataItems;
        tmp14 = jsx(View, obj4);
      }
    }
    items1[2] = tmp14;
    obj5 = { style: { flexDirection: "row" } };
    obj6 = { style: tmp.connectedAccountPoweredByContainer };
    obj7 = { variant: "text-xs/normal", color: "text-muted" };
    intl = require("getSystemLocale").intl;
    obj8 = {
      applicationHook() {
            let obj = { style: tmp.connectedAccountPoweredByText };
            let tmp3 = null;
            if (null != applicationRoleConnection.application.bot) {
              obj = { style: tmp.connectedAccountPoweredByAvatar };
              const prototype = outer1_7.prototype;
              const tmp12 = new outer1_7(applicationRoleConnection.application.bot);
              obj.user = tmp12;
              obj.size = applicationRoleConnection(outer1_2[17]).AvatarSizes.SIZE_16;
              obj.guildId = undefined;
              tmp3 = outer1_14(applicationRoleConnection(outer1_2[17]).Avatar, obj);
            }
            const items = [tmp3, ];
            obj = { variant: "text-xs/normal", color: "text-default", children: applicationRoleConnection.application.name };
            items[1] = outer1_14(applicationRoleConnection(outer1_2[31]).Text, obj);
            obj.children = items;
            return outer1_15(outer1_5, obj);
          }
    };
    obj7.children = intl.format(require("getSystemLocale").t.zIT9YA, obj8);
    obj6.children = jsx(require("Text").Text, obj7);
    items2 = [, ];
    items2[0] = jsx(View, obj6);
    items2[1] = jsx(View, { style: { flexGrow: 1 } });
    obj5.children = items2;
    items1[3] = jsxs(View, obj5);
    obj.children = items1;
    return tmp2(tmp3, obj);
  }
}
function useAppplicationRoleConnectionItems(memo) {
  const _require = arg1;
  const theme = _require(3842).useThemeContext().theme;
  let obj = _require(3842);
  const items = [_isNativeReflectConstruct];
  const dependencyMap = _require(566).useStateFromStores(items, () => outer1_6.locale);
  return memo.map((applicationRoleConnection) => {
    obj = { children: outer1_14(outer1_19, obj) };
    obj = { applicationRoleConnection, theme, locale: closure_2, style: closure_0 };
    return outer1_14(outer1_3.Fragment, obj, arg1);
  });
}
function useConnectedAccountItems(arr) {
  const _require = arg1;
  let closure_1 = arg2;
  theme = _require(theme[32]).useThemeContext().theme;
  let obj = _require(theme[32]);
  const items = [_isNativeReflectConstruct];
  let closure_3 = _require(theme[33]).useStateFromStores(items, () => outer1_6.locale);
  const obj2 = _require(theme[33]);
  let closure_4 = _require(theme[34]).usePlatformAllowed({ forUserProfile: true });
  const found = arr.filter((type) => {
    const value = callback(theme[14]).get(type.type);
    let tmp2 = null != value;
    if (tmp2) {
      tmp2 = callback2(value);
    }
    return tmp2;
  });
  return found.map((account) => {
    obj = { children: outer1_14(outer1_18, obj) };
    obj = { account, theme, locale: React, userId: closure_0, style: closure_1 };
    return outer1_14(React.Fragment, obj, arg1);
  });
}
({ Pressable: closure_4, View: closure_5 } = get_ActivityIndicator);
({ AnalyticEvents: closure_10, PlatformTypes: closure_11, ThemeTypes: closure_12 } = ME);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
obj = { connectedAccountContainer: obj, connectedAccount: { flexDirection: "row", alignItems: "center" }, connectedAccountNameContainer: { flex: 1, marginLeft: 8 }, connectedAccountName: { flexDirection: "row", alignItems: "center" } };
obj = { paddingHorizontal: 10, paddingVertical: require("semanticColor").FORM_ROW_VERTICAL_PADDING / 2 };
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE };
obj.connectedAccountNameText = _createForOfIteratorHelperLoose;
obj.connectedAccountNameCreatedAtText = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
let obj3 = { height: 24, width: 24 };
let items = [{ rotate: "135deg" }];
obj3.transform = items;
obj3.tintColor = require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE;
obj.connectedAccountOpenLink = obj3;
let obj4 = { alignSelf: "flex-start", margin: 4, height: 16, width: 16, tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
obj.connectedAccountOpenHide = obj4;
obj.verifiedCheckContainer = { marginLeft: 4, height: 16, width: 16 };
obj.verifiedCheck = { position: "absolute", left: 0, top: 0 };
obj.connectedAccountChildren = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", overflow: "hidden" };
let obj2 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
obj.metadataItem = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE };
obj.appConnectionNameContainer = { flex: 1, flexDirection: "row", alignItems: "center", marginTop: 4 };
let obj6 = { flexDirection: "row", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, paddingHorizontal: 8, paddingVertical: 4, marginTop: 12 };
obj.connectedAccountPoweredByContainer = obj6;
obj.connectedAccountPoweredByAvatar = { marginRight: 4 };
obj.connectedAccountPoweredByText = { marginTop: -4, alignItems: "center", flexDirection: "row" };
let closure_17 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_18 = importAllResult.memo(ConnectedUserAccount);
let closure_19 = importAllResult.memo(ConnectedApplicationUserRoleAccount);
let closure_20 = [];
let closure_21 = [];
let obj5 = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/native/LegacyUserProfileConnections.tsx");

export default function LegacyUserProfileConnections(user) {
  user = user.user;
  let obj = user(566);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_9.getUserProfile(user.id));
  let obj1 = user(566);
  const items1 = [closure_8];
  let prop;
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_8.hidePersonalInformation);
  if (null != stateFromStores) {
    prop = stateFromStores.applicationRoleConnections;
  }
  const items2 = [prop];
  let connectedAccounts;
  const memo = importAllResult.useMemo(() => {
    let prop;
    if (null != stateFromStores) {
      prop = stateFromStores.applicationRoleConnections;
    }
    if (null == prop) {
      prop = outer1_21;
    }
    return prop;
  }, items2);
  if (null != stateFromStores) {
    connectedAccounts = stateFromStores.connectedAccounts;
  }
  const items3 = [connectedAccounts];
  const memo1 = importAllResult.useMemo(() => {
    let connectedAccounts;
    if (null != stateFromStores) {
      connectedAccounts = stateFromStores.connectedAccounts;
    }
    if (null == connectedAccounts) {
      connectedAccounts = outer1_20;
    }
    return connectedAccounts;
  }, items3);
  const arr6 = useAppplicationRoleConnectionItems(memo);
  let tmp21Result = null;
  if (!stateFromStores1) {
    tmp21Result = null;
    if (0 !== memo1.length) {
      obj = {};
      let tmp10 = null != arr6;
      if (tmp10) {
        tmp10 = arr6.length > 0;
      }
      if (tmp10) {
        obj = {};
        const intl = user(1212).intl;
        obj.title = intl.string(user(1212).t.PHjkRE);
        obj.showContainer = true;
        obj.children = arr6;
        tmp10 = callback(stateFromStores(10040), obj);
        const tmp14 = stateFromStores(10040);
      }
      const items4 = [tmp10, ];
      obj1 = {};
      const intl2 = user(1212).intl;
      obj1.title = intl2.string(user(1212).t["3fe7U5"]);
      obj1.showContainer = true;
      obj1.children = tmp8;
      items4[1] = callback(stateFromStores(10040), obj1);
      obj.children = items4;
      tmp21Result = closure_15(closure_16, obj);
      const tmp19 = stateFromStores(10040);
      const tmp21 = closure_15;
      const tmp22 = closure_16;
    }
  }
  return tmp21Result;
};
export { ConnectedUserAccount };
export { ConnectedApplicationUserRoleAccount };
export { useAppplicationRoleConnectionItems };
export { useConnectedAccountItems };
