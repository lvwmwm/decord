// Module ID: 9991
// Function ID: 77247
// Name: useAppplicationRoleConnectionItems
// Dependencies: []
// Exports: default

// Module 9991 (useAppplicationRoleConnectionItems)
class ConnectedUserAccount {
  constructor(arg0) {
    account = global.account;
    arg1 = account;
    ({ theme, userId } = global);
    importDefault = userId;
    ({ showMetadata, showInvisibleIcon } = global);
    dependencyMap = undefined;
    closure_3 = undefined;
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
      tmp3 = arg1;
      tmp4 = dependencyMap;
      num = 12;
      obj2 = arg1(dependencyMap[12]);
      tmp5 = MetadataFields;
      createdAtDate = obj2.getCreatedAtDate(metadata[closure_13.CREATED_AT], locale);
    }
    if (showMetadata) {
      type = account.type;
      tmp6 = PlatformTypes;
      if (PlatformTypes.REDDIT === type) {
        tmp18 = arg1;
        tmp19 = dependencyMap;
        num6 = 13;
        obj7 = arg1(dependencyMap[13]);
        redditMetadataItems = obj7.generateRedditMetadataItems(metadata, tmp.metadataItem);
      } else {
        tmp79 = PlatformTypes;
        if (PlatformTypes.STEAM === type) {
          tmp16 = arg1;
          tmp17 = dependencyMap;
          num5 = 13;
          obj6 = arg1(dependencyMap[13]);
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
                  tmp10 = arg1;
                  tmp11 = dependencyMap;
                  num3 = 13;
                  obj4 = arg1(dependencyMap[13]);
                  redditMetadataItems = obj4.generatePaypalMetadataItems(metadata, tmp.metadataItem);
                } else {
                  tmp84 = PlatformTypes;
                  if (PlatformTypes.EBAY === type) {
                    tmp8 = arg1;
                    tmp9 = dependencyMap;
                    num2 = 13;
                    obj3 = arg1(dependencyMap[13]);
                    redditMetadataItems = obj3.generateEbayMetadataItems(metadata, tmp.metadataItem);
                  } else {
                    tmp7 = PlatformTypes;
                    if (PlatformTypes.TIKTOK === type) {
                      tmp85 = arg1;
                      tmp86 = dependencyMap;
                      num21 = 13;
                      obj29 = arg1(dependencyMap[13]);
                      redditMetadataItems = obj29.generateTikTokMetadataItems(metadata, tmp.metadataItem);
                    }
                  }
                }
              }
            }
          }
          tmp12 = arg1;
          tmp13 = dependencyMap;
          num4 = 13;
          obj5 = arg1(dependencyMap[13]);
          twitterMetadataItems = obj5.generateTwitterMetadataItems(metadata, tmp.metadataItem);
          tmp15 = MetadataFields;
          str = "1";
          redditMetadataItems = twitterMetadataItems;
          if ("1" === metadata[closure_13.TWITTER_VERIFIED]) {
            tmp87 = importDefault;
            tmp88 = dependencyMap;
            num22 = 14;
            obj30 = importDefault(dependencyMap[14]);
            tmp89 = PlatformTypes;
            color = obj30.get(PlatformTypes.TWITTER).color;
            redditMetadataItems = twitterMetadataItems;
          }
        }
      }
    }
    obj8 = importDefault(dependencyMap[14]);
    value = obj8.get(account.type);
    dependencyMap = value;
    obj10 = arg1(dependencyMap[15]);
    obj11 = arg1(dependencyMap[16]);
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
    closure_3 = platformUserUrl;
    if (null != showInvisibleIcon) {
      if (showInvisibleIcon) {
        tmp29 = jsx;
        tmp30 = arg1;
        tmp31 = dependencyMap;
        num9 = 17;
        obj = {};
        obj.style = tmp.connectedAccountOpenHide;
        tmp32 = importDefault;
        num10 = 18;
        obj.source = importDefault(dependencyMap[18]);
        tmp24 = jsx(arg1(dependencyMap[17]).Icon, obj);
      }
      tmp33 = arg1;
      tmp34 = dependencyMap;
      num11 = 20;
      obj14 = arg1(dependencyMap[20]);
      tmp35 = importDefault;
      num12 = 11;
      token = obj14.useToken(importDefault(dependencyMap[11]).colors.BACKGROUND_MOD_MUTED, theme);
      obj15 = arg1(dependencyMap[20]);
      if (null != color) {
        tmp37 = ThemeTypes;
        theme = ThemeTypes.DARK;
      }
      WHITE = obj15.useToken(importDefault(dependencyMap[11]).colors.INTERACTIVE_TEXT_ACTIVE, theme);
      tmp38 = token;
      if (null != color) {
        tmp39 = importDefault;
        tmp40 = dependencyMap;
        WHITE = importDefault(dependencyMap[11]).unsafe_rawColors.WHITE;
        tmp38 = color;
      }
      tmp41 = null;
      if (account.verified) {
        tmp42 = jsxs;
        tmp43 = View;
        obj1 = {};
        obj1.style = tmp.verifiedCheckContainer;
        tmp44 = jsx;
        tmp45 = arg1;
        tmp46 = dependencyMap;
        num13 = 17;
        obj2 = {};
        obj2.style = tmp.verifiedCheck;
        obj2.size = arg1(dependencyMap[17]).Icon.Sizes.REFRESH_SMALL_16;
        tmp47 = importDefault;
        num14 = 21;
        obj2.source = importDefault(dependencyMap[21]);
        obj2.color = tmp38;
        items = [, ];
        items[0] = jsx(arg1(dependencyMap[17]).Icon, obj2);
        tmp48 = jsx;
        obj3 = {};
        obj3.style = tmp.verifiedCheck;
        obj3.size = arg1(dependencyMap[17]).Icon.Sizes.REFRESH_SMALL_16;
        num15 = 22;
        obj3.source = importDefault(dependencyMap[22]);
        obj3.color = WHITE;
        items[1] = jsx(arg1(dependencyMap[17]).Icon, obj3);
        obj1.children = items;
        tmp41 = jsxs(View, obj1);
      }
      tmp49 = closure_3;
      items1 = [];
      items1[0] = account.name;
      name = undefined;
      callback = closure_3.useCallback(() => {
        const result = account(value[23]).triggerHapticFeedback(account(value[23]).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj = account(value[23]);
        account(value[24]).copy(account.name);
        const obj2 = account(value[24]);
        const result1 = account(value[25]).presentCopiedToClipboard();
      }, items1);
      tmp51 = closure_3;
      if (null != value) {
        name = value.name;
      }
      items2 = [, ];
      items2[0] = name;
      items2[1] = platformUserUrl;
      tmp54 = closure_3;
      items3 = [, , ];
      items3[0] = account.type;
      items3[1] = platformUserUrl;
      items3[2] = userId;
      memo = closure_3.useMemo(() => {
        if (null != platformUserUrl) {
          const intl2 = account(value[26]).intl;
          let stringResult = intl2.string(account(value[26]).t.wuRE8M);
        } else {
          let name;
          const intl = account(value[26]).intl;
          const obj = {};
          if (null != value) {
            name = value.name;
          }
          let str = "";
          if (null != name) {
            str = name;
          }
          obj.name = str;
          stringResult = intl.formatToPlainString(account(value[26]).t.OKzaN3, obj);
        }
        return stringResult;
      }, items2);
      callback1 = closure_3.useCallback(() => {
        if (null != platformUserUrl) {
          let obj = account(value[27]);
          obj = {
            href: platformUserUrl,
            trusted: account.type !== constants.DOMAIN,
            onConfirm() {
                let obj = lib(closure_2[28]);
                obj = { platform_type: lib.type, other_user_id: callback };
                obj.trackWithMetadata(constants.CONNECTED_ACCOUNT_VIEWED, obj);
                callback(closure_2[29]).openURL(closure_3);
              }
          };
          obj.handleClick(obj);
        }
      }, items3);
      if (null != platformUserUrl) {
        tmp56 = arg1;
        tmp57 = dependencyMap;
        num16 = 30;
        PressableOpacity = arg1(dependencyMap[30]).PressableOpacity;
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
      tmp65 = arg1;
      tmp66 = dependencyMap;
      num17 = 17;
      tmp60 = jsx;
      tmp61 = View;
      tmp62 = jsxs;
      tmp63 = View;
      obj7 = {};
      obj7.size = arg1(dependencyMap[17]).Icon.Sizes.MEDIUM;
      obj7.source = source;
      flag = true;
      obj7.disableColor = true;
      items5 = [, , ];
      items5[0] = jsx(arg1(dependencyMap[17]).Icon, obj7);
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
      items6[0] = jsx(arg1(dependencyMap[31]).Text, obj10);
      items6[1] = tmp41;
      obj9.children = items6;
      items7 = [, , ];
      items7[0] = jsxs(View, obj9);
      tmp72 = null;
      if (null != createdAtDate) {
        tmp73 = jsx;
        tmp74 = arg1;
        tmp75 = dependencyMap;
        obj11 = {};
        str4 = "heading-deprecated-12/medium";
        obj11.variant = "heading-deprecated-12/medium";
        obj11.style = tmp.connectedAccountNameCreatedAtText;
        num19 = 26;
        intl = arg1(dependencyMap[26]).intl;
        obj12 = {};
        obj12.date = createdAtDate;
        obj11.children = intl.format(arg1(dependencyMap[26]).t.9rfonh, obj12);
        tmp72 = jsx(arg1(dependencyMap[31]).Text, obj11);
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
      tmp26 = arg1;
      tmp27 = dependencyMap;
      num7 = 17;
      obj14 = {};
      obj14.style = tmp.connectedAccountOpenLink;
      tmp28 = importDefault;
      num8 = 19;
      obj14.source = importDefault(dependencyMap[19]);
      tmp24 = jsx(arg1(dependencyMap[17]).Icon, obj14);
    }
    return;
  }
}
class ConnectedApplicationUserRoleAccount {
  constructor(arg0) {
    applicationRoleConnection = global.applicationRoleConnection;
    arg1 = applicationRoleConnection;
    tmp = Fragment();
    importDefault = tmp;
    obj = arg1(dependencyMap[13]);
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
      tmp6 = arg1;
      tmp7 = dependencyMap;
      num = 31;
      obj1 = {};
      obj1.children = applicationRoleConnection.platform_name;
      tmp4 = jsx(arg1(dependencyMap[31]).Text, obj1);
    }
    items1 = [, , , ];
    items1[0] = tmp4;
    obj2 = { style: tmp.appConnectionNameContainer };
    tmp10 = null;
    tmp8 = jsx;
    tmp9 = View;
    if (null != applicationRoleConnection.platform_username) {
      tmp11 = jsx;
      tmp12 = arg1;
      tmp13 = dependencyMap;
      num2 = 31;
      obj3 = {};
      obj3.children = applicationRoleConnection.platform_username;
      tmp10 = jsx(arg1(dependencyMap[31]).Text, obj3);
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
    obj7 = {};
    intl = arg1(dependencyMap[26]).intl;
    obj8 = {
      applicationHook() {
            let obj = { style: tmp.connectedAccountPoweredByText };
            let tmp3 = null;
            if (null != applicationRoleConnection.application.bot) {
              obj = { style: tmp.connectedAccountPoweredByAvatar };
              const prototype = ctor.prototype;
              const tmp12 = new ctor(applicationRoleConnection.application.bot);
              obj.user = tmp12;
              obj.size = applicationRoleConnection(closure_2[17]).AvatarSizes.SIZE_16;
              obj.guildId = undefined;
              tmp3 = callback(applicationRoleConnection(closure_2[17]).Avatar, obj);
            }
            const items = [tmp3, ];
            obj = { children: applicationRoleConnection.application.name };
            items[1] = callback(applicationRoleConnection(closure_2[31]).Text, obj);
            obj.children = items;
            return closure_15(closure_5, obj);
          }
    };
    obj7.children = intl.format(arg1(dependencyMap[26]).t.zIT9YA, obj8);
    obj6.children = jsx(arg1(dependencyMap[31]).Text, obj7);
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
  const importDefault = arg1(closure_2[32]).useThemeContext().theme;
  const obj = arg1(closure_2[32]);
  const items = [closure_6];
  closure_2 = arg1(closure_2[33]).useStateFromStores(items, () => locale.locale);
  return memo.map((applicationRoleConnection) => {
    let obj = { children: callback(closure_19, obj) };
    obj = { applicationRoleConnection, theme, locale: closure_2, style: arg1 };
    return callback(React.Fragment, obj, arg1);
  });
}
function useConnectedAccountItems(arr) {
  const importDefault = arg2;
  const dependencyMap = arg1(dependencyMap[32]).useThemeContext().theme;
  const obj = arg1(dependencyMap[32]);
  const items = [closure_6];
  let closure_3 = arg1(dependencyMap[33]).useStateFromStores(items, () => locale.locale);
  const obj2 = arg1(dependencyMap[33]);
  let closure_4 = arg1(dependencyMap[34]).usePlatformAllowed({ forUserProfile: true });
  const found = arr.filter((type) => {
    const value = arg2(theme[14]).get(type.type);
    let tmp2 = null != value;
    if (tmp2) {
      tmp2 = callback(value);
    }
    return tmp2;
  });
  return found.map((account) => {
    let obj = { children: callback2(closure_18, obj) };
    obj = { account, theme, locale: React, userId: arg1, style: arg2 };
    return callback2(React.Fragment, obj, arg1);
  });
}
const importAllResult = importAll(dependencyMap[0]);
({ Pressable: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const tmp2 = arg1(dependencyMap[1]);
({ AnalyticEvents: closure_10, PlatformTypes: closure_11, ThemeTypes: closure_12 } = arg1(dependencyMap[6]));
const MetadataFields = arg1(dependencyMap[8]).MetadataFields;
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = arg1(dependencyMap[9]));
let obj1 = arg1(dependencyMap[10]);
let obj = { connectedAccountContainer: obj, connectedAccount: {}, connectedAccountNameContainer: { flexDirection: "P", paddingHorizontal: 40 }, connectedAccountName: {} };
obj = { paddingHorizontal: 10, paddingVertical: arg1(dependencyMap[7]).FORM_ROW_VERTICAL_PADDING / 2 };
obj1 = { color: importDefault(dependencyMap[11]).colors.INTERACTIVE_TEXT_ACTIVE };
obj.connectedAccountNameText = obj1;
const tmp4 = arg1(dependencyMap[9]);
obj.connectedAccountNameCreatedAtText = { color: importDefault(dependencyMap[11]).colors.TEXT_SUBTLE };
const obj3 = { <string:1632221346>: "<string:1027735553>", <string:2722977214>: "<string:4143972873>" };
const items = [{ rotate: "135deg" }];
obj3.transform = items;
obj3.tintColor = importDefault(dependencyMap[11]).colors.INTERACTIVE_TEXT_ACTIVE;
obj.connectedAccountOpenLink = obj3;
const obj4 = { "Bool(false)": 8, "Bool(false)": "center", "Bool(false)": "underline", "Bool(false)": null, tintColor: importDefault(dependencyMap[11]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.connectedAccountOpenHide = obj4;
obj.verifiedCheckContainer = { -599305822: "center", 1817372513: "underline", 1639456730: null };
obj.verifiedCheck = {};
obj.connectedAccountChildren = { "Null": "SERVER_GUIDE_CHANNEL_SELECTED", "Null": "staticUrl", "Null": "Array", "Null": "MERCH_STORE" };
const obj2 = { color: importDefault(dependencyMap[11]).colors.TEXT_SUBTLE };
obj.metadataItem = { color: importDefault(dependencyMap[11]).colors.INTERACTIVE_TEXT_ACTIVE };
obj.appConnectionNameContainer = {};
const obj5 = { color: importDefault(dependencyMap[11]).colors.INTERACTIVE_TEXT_ACTIVE };
obj.connectedAccountPoweredByContainer = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[11]).radii.sm, borderColor: importDefault(dependencyMap[11]).colors.BORDER_SUBTLE };
obj.connectedAccountPoweredByAvatar = { marginRight: 4 };
obj.connectedAccountPoweredByText = { <string:3810092247>: "row", <string:2204282508>: 12, <string:3426243031>: "space-between" };
let closure_17 = obj1.createStyles(obj);
let closure_18 = importAllResult.memo(ConnectedUserAccount);
let closure_19 = importAllResult.memo(ConnectedApplicationUserRoleAccount);
let closure_20 = [];
let closure_21 = [];
const obj6 = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[11]).radii.sm, borderColor: importDefault(dependencyMap[11]).colors.BORDER_SUBTLE };
const result = arg1(dependencyMap[36]).fileFinishedImporting("modules/user_profile/native/LegacyUserProfileConnections.tsx");

export default function LegacyUserProfileConnections(user) {
  const arg1 = user.user;
  let obj = arg1(dependencyMap[33]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => userProfile.getUserProfile(user.id));
  const importDefault = stateFromStores;
  let obj1 = arg1(dependencyMap[33]);
  const items1 = [closure_8];
  let prop;
  const stateFromStores1 = obj1.useStateFromStores(items1, () => obj.hidePersonalInformation);
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
      prop = closure_21;
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
      connectedAccounts = closure_20;
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
        const intl = arg1(dependencyMap[26]).intl;
        obj.title = intl.string(arg1(dependencyMap[26]).t.PHjkRE);
        obj.showContainer = true;
        obj.children = arr6;
        tmp10 = callback(importDefault(dependencyMap[35]), obj);
        const tmp14 = importDefault(dependencyMap[35]);
      }
      const items4 = [tmp10, ];
      obj1 = {};
      const intl2 = arg1(dependencyMap[26]).intl;
      obj1.title = intl2.string(arg1(dependencyMap[26]).t.3fe7U5);
      obj1.showContainer = true;
      obj1.children = tmp8;
      items4[1] = callback(importDefault(dependencyMap[35]), obj1);
      obj.children = items4;
      tmp21Result = closure_15(closure_16, obj);
      const tmp19 = importDefault(dependencyMap[35]);
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
