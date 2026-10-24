// Module ID: 14016
// Function ID: 14017
// Name: ChannelHeaderShared
// Dependencies: [32, 19, 17, 4913, 1392, 21, 4971, 587, 558, 576, 1384, 6908, 10661, 5234, 1202, 14017, 10688, 5252, 8502, 7075, 14018, 1128, 5604, 5669, 1417, 9134, 2]
// Exports: renderAppSubTitle, renderChannelIcon, renderChannelIconRaw, renderChannelTitle, renderEmptyIcon, renderGroupDMIcon, renderMemberCountText, renderParentChannelSubTitle, renderTitleWrapper, renderUserAvatar

// Module 14016 (ChannelHeaderShared)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1128 */;
import native from "native" /* 1202 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1417 */;
import Text_Text from "Text/Text" /* 5234 */;
import useToken from "useToken" /* 5252 */;
import useChannelName from "useChannelName" /* 5604 */;
import FastImageDefault from "FastImage" /* 5669 */;
import Pressables from "Pressables" /* 6908 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 7075 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8502 */;
import BotTagDefault from "BotTag" /* 9134 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10661 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 10688 */;
import AssetRegistryDefault from "AssetRegistry" /* 14017 */;
import GuildActionSheetMemberCountDefault from "GuildActionSheetMemberCount" /* 14018 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4913 */;
import UserStore from "UserStore" /* 1392 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c10;
let c9;
let metroImportAll;
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let c11 = 16;
let closure_12 = createStyles.createStyles(() => {
  let size1;
  let size2;
  const obj = { wrapper: { flex: 1, alignItems: "center", flexShrink: 1, flexDirection: "row", paddingEnd: 8 }, channelContent: { flex: 1, flexShrink: 1, justifyContent: "center", marginTop: 4 }, nameWithArrow: { flexDirection: "row", alignItems: "center", flexShrink: 1 }, channelNameContainer: { flexShrink: 1 }, channelName: { flexShrink: 1 }, arrowIcon: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, flexShrink: 0, flexGrow: 0, marginTop: 2, marginLeft: 2 }, channelIcon: { marginRight: 12, flexShrink: 0 }, channelIconWrapper: { width: 32, height: 32, justifyContent: "center", alignItems: "center" }, guildChannelIcon: { tintColor: nativeDefault.colors.TEXT_STRONG }, subTitleContainer: { flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 4 }, appSubTitle: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, flexShrink: 1 }, appIcon: size, appName: { flexShrink: 1 }, noApp: { fontStyle: "italic" }, skeletonIcon: size1, skeletonName: size2, parentChannelName: { lineHeight: 20, flexShrink: 1 } };
  ({ tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, flexShrink: 0, flexGrow: 0, marginTop: 2, marginLeft: 2 });
  ({ tintColor: nativeDefault.colors.TEXT_STRONG });
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, flexShrink: 1 });
  size = { width: v16, height: v16, borderRadius: nativeDefault.radii.xs };
  size1 = { width: v16, height: v16, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
  size2 = { width: 96, height: 10, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function TitleWrapper(arg0) {
  let children;
  let closure_129_0;
  let first;
  let headerAccessibilityLabel;
  let onPress;
  let titleContentHeight;
  let tmp13;
  let tmp6;
  let obj = react2;
  const cResult = obj.c(14);
  ({ children, onPress, headerAccessibilityLabel, titleContentHeight } = arg0);
  const tmp4 = closure_12();
  [tmp6, closure_129_0] = react.useState(undefined);
  _slicedToArray(react.useState(undefined), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c(nativeEvent) {
      const obj = { borderless: true, radius: nativeEvent.nativeEvent.layout.width };
      closure_1_0(obj);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (null != titleContentHeight) {
    const _Math = Math;
    const bound = Math.max(0, (64 - titleContentHeight) / 2);
    if (cResult[1] !== bound) {
      const rect = { top: bound, bottom: bound };
      cResult[1] = bound;
      cResult[2] = rect;
    }
  }
  if (null == onPress) {
    if (cResult[3] === children) {
      let tmp16;
      if (cResult[4] === tmp4.wrapper) {
        tmp16 = cResult[5];
      }
      tmp13 = tmp16;
    }
    const obj2 = { style: tmp4.wrapper, accessibilityRole: "header", children };
    const tmp19 = metroImportAll(View, obj2);
    cResult[3] = children;
    cResult[4] = tmp4.wrapper;
    cResult[5] = tmp19;
    tmp16 = tmp19;
  } else {
    let tmp11;
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      let tmp12;
      const tmpResult = PlatformUtils;
      if (tmpResult.isAndroid()) {
        tmp12 = first;
      }
      cResult[6] = tmp12;
      tmp11 = tmp12;
    } else {
      tmp11 = cResult[6];
    }
    if (cResult[7] === tmp6) {
      if (cResult[8] === children) {
        if (cResult[9] === headerAccessibilityLabel) {
          if (cResult[10] === onPress) {
            if (cResult[11] === tmp4.wrapper) {
              if (cResult[12] === tmp8) {
                tmp13 = cResult[13];
              }
            }
          }
        }
      }
    }
    const obj3 = { onLayout: tmp11, onPress, androidRippleConfig: tmp6, accessibilityRole: "header", accessibilityLabel: headerAccessibilityLabel, hitSlop: tmp8, style: tmp4.wrapper, children };
    const tmp15 = metroImportAll(Pressables.PressableOpacity, obj3);
    cResult[7] = tmp6;
    cResult[8] = children;
    cResult[9] = headerAccessibilityLabel;
    cResult[10] = onPress;
    cResult[11] = tmp4.wrapper;
    cResult[12] = tmp8;
    cResult[13] = tmp15;
    tmp13 = tmp15;
  }
  return tmp13;
}) : (function TitleWrapper(headerAccessibilityLabel) {
  let c1;
  let children;
  let onPress;
  let titleContentHeight;
  let tmp3;
  let tmp6Result;
  ({ children, onPress, titleContentHeight } = headerAccessibilityLabel);
  c1 = undefined;
  headerAccessibilityLabel = headerAccessibilityLabel.headerAccessibilityLabel;
  const tmp = closure_12();
  [tmp3, c1] = react.useState(undefined);
  [][0] = titleContentHeight;
  _slicedToArray(react.useState(undefined), 2);
  const callback = react.useCallback((nativeEvent) => {
    const obj = { borderless: true, radius: nativeEvent.nativeEvent.layout.width };
    _undefined(obj);
  }, []);
  if (null == onPress) {
    const obj2 = { style: tmp.wrapper, accessibilityRole: "header", children };
    tmp6Result = metroImportAll(View, obj2);
  } else {
    const PressableOpacity = Pressables.PressableOpacity;
    let obj = PlatformUtils;
    let tmp9;
    const tmp6 = metroImportAll;
    if (obj.isAndroid()) {
      tmp9 = callback;
    }
    const obj3 = { onLayout: tmp9, onPress, androidRippleConfig: tmp3, accessibilityRole: "header", accessibilityLabel: headerAccessibilityLabel, hitSlop: tmp5, style: tmp.wrapper, children };
    tmp6Result = tmp6(PressableOpacity, obj3);
  }
  return tmp6Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelTitle(arg0) {
  let accessibleTitle;
  let disableArrow;
  let guildId;
  let icon;
  let items;
  let items1;
  let subtitle;
  let title;
  let tmp9;
  let userId;
  const obj = react2;
  const cResult = obj.c(22);
  ({ title, accessibleTitle, subtitle, disableArrow, userId, guildId, icon } = arg0);
  const tmp5 = closure_12();
  let tmp6 = null;
  if (null != icon) {
    tmp6 = icon;
  }
  if (cResult[0] === accessibleTitle) {
    if (cResult[1] === guildId) {
      if (cResult[2] === tmp5.channelName) {
        if (cResult[3] === tmp5.channelNameContainer) {
          if (cResult[4] === title) {
            let tmp7;
            if (cResult[5] === userId) {
              tmp7 = cResult[6];
            }
            if (cResult[7] === (undefined !== disableArrow && disableArrow)) {
              let tmp12;
              if (cResult[8] === tmp5.arrowIcon) {
                tmp12 = cResult[9];
              }
              if (cResult[10] === tmp5.nameWithArrow) {
                if (cResult[11] === tmp6) {
                  if (cResult[12] === tmp7) {
                    let tmp16;
                    if (cResult[13] === tmp12) {
                      tmp16 = cResult[14];
                    }
                    if (cResult[15] === tmp5.subTitleContainer) {
                      let tmp20;
                      if (cResult[16] === subtitle) {
                        tmp20 = cResult[17];
                      }
                      if (cResult[18] === tmp5.channelContent) {
                        if (cResult[19] === tmp16) {
                          let tmp24;
                          if (cResult[20] === tmp20) {
                            tmp24 = cResult[21];
                          }
                          return tmp24;
                        }
                      }
                      const obj2 = { style: tmp5.channelContent, children: items };
                      items = [tmp16, tmp20];
                      const tmp27 = React4(View, obj2);
                      cResult[18] = tmp5.channelContent;
                      cResult[19] = tmp16;
                      cResult[20] = tmp20;
                      cResult[21] = tmp27;
                      tmp24 = tmp27;
                    }
                    let tmp21 = null != subtitle;
                    if (tmp21) {
                      const obj4 = { style: tmp5.subTitleContainer, children: subtitle };
                      tmp21 = metroImportAll(View, obj4);
                    }
                    cResult[15] = tmp5.subTitleContainer;
                    cResult[16] = subtitle;
                    cResult[17] = tmp21;
                    tmp20 = tmp21;
                  }
                }
              }
              const obj5 = { style: tmp5.nameWithArrow, children: items1 };
              items1 = [tmp6, tmp7, tmp12];
              const tmp19 = React4(View, obj5);
              cResult[10] = tmp5.nameWithArrow;
              cResult[11] = tmp6;
              cResult[12] = tmp7;
              cResult[13] = tmp12;
              cResult[14] = tmp19;
              tmp16 = tmp19;
            }
            let tmp13 = !tmp4;
            if (tmp13) {
              const obj6 = { source: AssetRegistryDefault, size: native.Icon.Sizes.REFRESH_SMALL_16, style: tmp5.arrowIcon };
              const Icon = tmp(1202).Icon;
              tmp13 = metroImportAll(Icon, obj6);
            }
            cResult[7] = undefined !== disableArrow && disableArrow;
            cResult[8] = tmp5.arrowIcon;
            cResult[9] = tmp13;
            tmp12 = tmp13;
          }
        }
      }
    }
  }
  if (null != userId) {
    const obj7 = { userId, guildId, userName: title, variant: "redesign/heading-18/semibold", defaultColor: "mobile-text-heading-primary", lineClamp: 1, style: null, containerStyle: null, accessibilityLabel: accessibleTitle, accessibilityRole: "header", maxFontSizeMultiplier: 2 };
    ({ channelName: obj3.style, channelNameContainer: obj3.containerStyle } = tmp5);
    tmp9 = metroImportAll(UsernameWithEffectsDefault, obj7);
  } else {
    const obj13 = { variant: "redesign/heading-18/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: tmp5.channelName, accessibilityLabel: accessibleTitle, accessibilityRole: "header", maxFontSizeMultiplier: 2, children: title };
    tmp9 = metroImportAll(tmp(5234).Text, obj13);
  }
  cResult[0] = accessibleTitle;
  cResult[1] = guildId;
  cResult[2] = tmp5.channelName;
  cResult[3] = tmp5.channelNameContainer;
  cResult[4] = title;
  cResult[5] = userId;
  cResult[6] = tmp9;
  tmp7 = tmp9;
}) : (function ChannelTitle(guildId) {
  let accessibleTitle;
  let disableArrow;
  let icon;
  let items;
  let items1;
  let subtitle;
  let title;
  let tmp5;
  let tmp8;
  let userId;
  ({ title, accessibleTitle, subtitle, disableArrow } = guildId);
  if (disableArrow === undefined) {
    disableArrow = false;
  }
  ({ userId, icon } = guildId);
  guildId = guildId.guildId;
  const tmp = closure_12();
  let tmp4 = null;
  const obj = { style: tmp.channelContent, children: items1 };
  const obj2 = { style: tmp.nameWithArrow, children: items };
  if (null != icon) {
    tmp4 = icon;
  }
  items = [tmp4, , ];
  if (null != userId) {
    const obj3 = { userId, guildId, userName: title, variant: "redesign/heading-18/semibold", defaultColor: "mobile-text-heading-primary", lineClamp: 1, style: null, containerStyle: null, accessibilityLabel: accessibleTitle, accessibilityRole: "header", maxFontSizeMultiplier: 2 };
    ({ channelName: obj4.style, channelNameContainer: obj4.containerStyle } = tmp);
    tmp8 = metroImportAll(UsernameWithEffectsDefault, obj3);
    tmp5 = metroImportAll;
  } else {
    tmp5 = metroImportAll;
    const obj5 = { variant: "redesign/heading-18/semibold", color: "mobile-text-heading-primary", lineClamp: 1, style: tmp.channelName, accessibilityLabel: accessibleTitle, accessibilityRole: "header", maxFontSizeMultiplier: 2, children: title };
    tmp8 = metroImportAll(Text_Text.Text, obj5);
  }
  items[1] = tmp8;
  let tmp5Result = !disableArrow;
  if (tmp5Result) {
    const obj6 = { source: AssetRegistryDefault, size: native.Icon.Sizes.REFRESH_SMALL_16, style: tmp.arrowIcon };
    const Icon = native.Icon;
    tmp5Result = tmp5(Icon, obj6);
  }
  items[2] = tmp5Result;
  items1 = [React4(View, obj2), ];
  let tmp5Result2 = null != subtitle;
  if (tmp5Result2) {
    const obj11 = { style: tmp.subTitleContainer, children: subtitle };
    tmp5Result2 = tmp5(tmp3, obj11);
  }
  items1[1] = tmp5Result2;
  return React4(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function GroupDMIcon(channel) {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  channel = channel.channel;
  if (cResult[0] !== channel) {
    const obj2 = { size: native.AvatarSizes.REFRESH_MEDIUM_32, channel };
    const tmp7 = GroupDMAvatarDefault;
    const tmp8 = metroImportAll(tmp7, obj2);
    cResult[0] = channel;
    cResult[1] = tmp8;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function GroupDMIcon(channel) {
  channel = channel.channel;
  const obj = { size: native.AvatarSizes.REFRESH_MEDIUM_32, channel };
  const tmp = GroupDMAvatarDefault;
  return metroImportAll(tmp, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserAvatar(status) {
  let isMobileOnline;
  let isVROnline;
  let user;
  const obj = react2;
  const cResult = obj.c(6);
  ({ user, isMobileOnline, isVROnline } = status);
  status = status.status;
  const tmp4 = closure_12();
  let tmp5 = null;
  if (!user.isSystemUser()) {
    tmp5 = status;
  }
  if (cResult[0] === isMobileOnline) {
    if (cResult[1] === isVROnline) {
      if (cResult[2] === tmp4.channelIcon) {
        if (cResult[3] === tmp5) {
          let tmp6;
          if (cResult[4] === user) {
            tmp6 = cResult[5];
          }
          return tmp6;
        }
      }
    }
  }
  const obj2 = { user, avatarDecoration: user.avatarDecoration, guildId: "Boolean", size: native.AvatarSizes.REFRESH_MEDIUM_32, status: tmp5, isMobileOnline, isVROnline, style: tmp4.channelIcon, autoStatusCutout: false };
  const Avatar = tmp(1202).Avatar;
  const tmp7 = metroImportAll(Avatar, obj2);
  cResult[0] = isMobileOnline;
  cResult[1] = isVROnline;
  cResult[2] = tmp4.channelIcon;
  cResult[3] = tmp5;
  cResult[4] = user;
  cResult[5] = tmp7;
  tmp6 = tmp7;
}) : (function UserAvatar(user) {
  let isMobileOnline;
  let isVROnline;
  let status;
  let tmp;
  let tmp3;
  user = user.user;
  ({ status, isMobileOnline, isVROnline } = user);
  const obj = { user, avatarDecoration: user.avatarDecoration, guildId: "Boolean", size: native.AvatarSizes.REFRESH_MEDIUM_32, status: tmp3, isMobileOnline, isVROnline, style: tmp.channelIcon, autoStatusCutout: false };
  tmp = closure_12();
  const Avatar = native.Avatar;
  tmp3 = null;
  const tmp2 = metroImportAll;
  if (!user.isSystemUser()) {
    tmp3 = status;
  }
  return tmp2(Avatar, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelIconRaw(arg0) {
  let IconComponent;
  let icon;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(5);
  ({ icon, IconComponent } = arg0);
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.CHANNEL_HEADER_ICON_SIZE);
  const tmp5 = closure_12();
  if (cResult[0] === IconComponent) {
    if (cResult[1] === icon) {
      if (cResult[2] === token) {
        let tmp6;
        if (cResult[3] === tmp5) {
          tmp6 = cResult[4];
        }
        return tmp6;
      }
    }
  }
  if (null != IconComponent) {
    const obj3 = { size: token, color: "icon-strong", style: { marginEnd: 4 } };
    tmp8 = metroImportAll(IconComponent, obj3);
  } else {
    const obj4 = { size: native.Icon.Sizes.SMALL_20, source: icon, color: tmp5.guildChannelIcon.tintColor };
    const Icon = tmp(1202).Icon;
    tmp8 = metroImportAll(Icon, obj4);
  }
  cResult[0] = IconComponent;
  cResult[1] = icon;
  cResult[2] = token;
  cResult[3] = tmp5;
  cResult[4] = tmp8;
  tmp6 = tmp8;
}) : (function ChannelIconRaw(IconComponent) {
  let tmp6;
  IconComponent = IconComponent.IconComponent;
  const icon = IconComponent.icon;
  const obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.CHANNEL_HEADER_ICON_SIZE);
  if (null != IconComponent) {
    const obj2 = { size: token, color: "icon-strong", style: { marginEnd: 4 } };
    tmp6 = metroImportAll(IconComponent, obj2);
  } else {
    const obj3 = { size: native.Icon.Sizes.SMALL_20, source: icon, color: tmp4.guildChannelIcon.tintColor };
    const Icon = tmp(1202).Icon;
    tmp6 = metroImportAll(Icon, obj3);
  }
  return tmp6;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function MemberCountText(arg0) {
  let items;
  let leadingAccessoryWidth;
  let memberCount;
  let presenceCount;
  let withSeparator;
  const obj = react2;
  const cResult = obj.c(11);
  ({ presenceCount, memberCount, withSeparator, leadingAccessoryWidth } = arg0);
  let str = "online";
  if (0 === presenceCount) {
    str = "online";
    if (null !== memberCount) {
      str = "total";
    }
  }
  let str2 = "text-sm/normal";
  const tmpResult = ManaTypeConsolidationExperiment;
  if (tmpResult.useManaTypeConsolidationExperiment("ChannelHeaderMemberCount")) {
    str2 = "text-xs/normal";
  }
  if ("online" === str) {
    memberCount = presenceCount;
  }
  if (cResult[0] === leadingAccessoryWidth) {
    if (cResult[1] === memberCount) {
      if (cResult[2] === str2) {
        let tmp5;
        if (cResult[3] === str) {
          tmp5 = cResult[4];
        }
        if (cResult[5] === str2) {
          let tmp7;
          if (cResult[6] === withSeparator) {
            tmp7 = cResult[7];
          }
          if (cResult[8] === tmp5) {
            let tmp10;
            if (cResult[9] === tmp7) {
              tmp10 = cResult[10];
            }
            return tmp10;
          }
          const obj2 = { children: items };
          items = [tmp5, tmp7];
          const tmp13 = React4(authStore, obj2);
          cResult[8] = tmp5;
          cResult[9] = tmp7;
          cResult[10] = tmp13;
          tmp10 = tmp13;
        }
        let tmp8 = null;
        if (withSeparator) {
          const obj3 = { variant: str2, color: "text-subtle", children: "\u2022" };
          tmp8 = metroImportAll(tmp(5234).Text, obj3);
        }
        cResult[5] = str2;
        cResult[6] = withSeparator;
        cResult[7] = tmp8;
        tmp7 = tmp8;
      }
    }
  }
  const tmp6 = metroImportAll(GuildActionSheetMemberCountDefault, { type: str, count: memberCount, color: "text-subtle", dotContainerWidth: leadingAccessoryWidth, textVariant: str2 });
  cResult[0] = leadingAccessoryWidth;
  cResult[1] = memberCount;
  cResult[2] = str2;
  cResult[3] = str;
  cResult[4] = tmp6;
  tmp5 = tmp6;
}) : (function MemberCountText(arg0) {
  let leadingAccessoryWidth;
  let memberCount;
  let presenceCount;
  let withSeparator;
  ({ presenceCount, memberCount } = arg0);
  let str = "online";
  ({ withSeparator, leadingAccessoryWidth } = arg0);
  if (0 === presenceCount) {
    str = "online";
    if (null !== memberCount) {
      str = "total";
    }
  }
  let str2 = "text-sm/normal";
  const obj = ManaTypeConsolidationExperiment;
  if (obj.useManaTypeConsolidationExperiment("ChannelHeaderMemberCount")) {
    str2 = "text-xs/normal";
  }
  const obj2 = { type: str, count: memberCount, color: "text-subtle", dotContainerWidth: leadingAccessoryWidth, textVariant: str2 };
  const tmp4 = React4;
  const tmp5 = authStore;
  const tmp7 = GuildActionSheetMemberCountDefault;
  if ("online" === str) {
    memberCount = presenceCount;
  }
  const children = [metroImportAll(tmp7, obj2), ];
  let tmp6Result = null;
  if (withSeparator) {
    const obj3 = { variant: str2, color: "text-subtle", children: "\u2022" };
    tmp6Result = tmp6(Text_Text.Text, obj3);
  }
  children[1] = tmp6Result;
  return tmp4(tmp5, { children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function ParentChannelSubTitle(channel) {
  let tmp5;
  let tmp9;
  let tmpResult;
  const obj = react2;
  const cResult = obj.c(8);
  channel = channel.channel;
  const tmp4 = closure_12();
  if (cResult[0] !== channel) {
    const intl = tmp(1128).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj2 = { channelName: tmpResult.computeChannelName(channel, UserStore, RelationshipStore) };
    const BjYvHO = tmp(1128).t.BjYvHO;
    tmpResult = useChannelName;
    const formatToPlainStringResult = formatToPlainString(BjYvHO, obj2);
    cResult[0] = channel;
    cResult[1] = formatToPlainStringResult;
    tmp5 = formatToPlainStringResult;
  } else {
    tmp5 = cResult[1];
  }
  const parentChannelName = tmp4.parentChannelName;
  if (cResult[2] !== channel) {
    const tmpResult2 = useChannelName;
    const channelName = tmpResult2.computeChannelName(channel, UserStore, RelationshipStore);
    cResult[2] = channel;
    cResult[3] = channelName;
    tmp9 = channelName;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp4.parentChannelName) {
    if (cResult[5] === tmp5) {
      let tmp13;
      if (cResult[6] === tmp9) {
        tmp13 = cResult[7];
      }
      return tmp13;
    }
  }
  const tmp14 = metroImportAll(Text_Text.Text, { lineClamp: 1, accessibilityLabel: tmp5, maxFontSizeMultiplier: 2, variant: "text-sm/medium", color: "text-subtle", style: parentChannelName, children: tmp9 });
  cResult[4] = tmp4.parentChannelName;
  cResult[5] = tmp5;
  cResult[6] = tmp9;
  cResult[7] = tmp14;
  tmp13 = tmp14;
}) : (function ParentChannelSubTitle(channel) {
  let BjYvHO;
  let formatToPlainString;
  let obj2;
  let obj3;
  let obj4;
  let tmp;
  channel = channel.channel;
  const obj = { lineClamp: 1, accessibilityLabel: formatToPlainString(BjYvHO, obj2), maxFontSizeMultiplier: 2, variant: "text-sm/medium", color: "text-subtle", style: tmp.parentChannelName, children: obj4.computeChannelName(channel, UserStore, RelationshipStore) };
  tmp = closure_12();
  const Text = Text_Text.Text;
  const intl = intl2.intl;
  formatToPlainString = intl.formatToPlainString;
  obj2 = { channelName: obj3.computeChannelName(channel, UserStore, RelationshipStore) };
  BjYvHO = intl2.t.BjYvHO;
  obj3 = useChannelName;
  obj4 = useChannelName;
  return metroImportAll(Text, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppSubTitle(application) {
  let items;
  let obj12;
  let obj3;
  const obj = react2;
  const cResult = obj.c(15);
  application = application.application;
  const tmp4 = closure_12();
  ManaTypeConsolidationExperiment;
  if (cResult[0] === application.icon) {
    if (cResult[1] === application.id) {
      let tmp7;
      if (cResult[2] === tmp4.appIcon) {
        tmp7 = cResult[3];
      }
      let str = "text-sm/normal";
      if (tmp6) {
        str = "text-xs/normal";
      }
      if (cResult[4] === application.name) {
        if (cResult[5] === tmp4.appName) {
          let tmp13;
          let tmp16;
          if (cResult[6] === str) {
            tmp13 = cResult[7];
          }
          if (cResult[8] !== application.isVerified) {
            const obj2 = { verified: application.isVerified, size: "sm" };
            const tmp19 = metroImportAll(BotTagDefault, obj2);
            cResult[8] = application.isVerified;
            cResult[9] = tmp19;
            tmp16 = tmp19;
          } else {
            tmp16 = cResult[9];
          }
          if (cResult[10] === tmp4.appSubTitle) {
            if (cResult[11] === tmp7) {
              if (cResult[12] === tmp13) {
                let tmp20;
                if (cResult[13] === tmp16) {
                  tmp20 = cResult[14];
                }
                return tmp20;
              }
            }
          }
          const obj5 = { style: tmp4.appSubTitle, children: items };
          items = [tmp7, tmp13, tmp16];
          const tmp23 = React4(View, obj5);
          cResult[10] = tmp4.appSubTitle;
          cResult[11] = tmp7;
          cResult[12] = tmp13;
          cResult[13] = tmp16;
          cResult[14] = tmp23;
          tmp20 = tmp23;
        }
      }
      const obj6 = { lineClamp: 1, maxFontSizeMultiplier: 2, variant: str, color: "text-subtle", style: tmp4.appName, children: application.name };
      const tmp15 = metroImportAll(Text_Text.Text, obj6);
      cResult[4] = application.name;
      cResult[5] = tmp4.appName;
      cResult[6] = str;
      cResult[7] = tmp15;
      tmp13 = tmp15;
    }
  }
  let tmp8 = null;
  if (null != application.icon) {
    const obj7 = { source: obj3.getApplicationIconSource(obj12), style: tmp4.appIcon };
    obj12 = { id: null, icon: null, size: v16 };
    ({ id: obj4.id, icon: obj4.icon } = application);
    const tmp11 = FastImageDefault;
    obj3 = AvatarUtilsDefault;
    tmp8 = metroImportAll(tmp11, obj7);
  }
  cResult[0] = application.icon;
  cResult[1] = application.id;
  cResult[2] = tmp4.appIcon;
  cResult[3] = tmp8;
  tmp7 = tmp8;
}) : (function AppSubTitle(application) {
  let items;
  let obj4;
  let obj6;
  application = application.application;
  const tmp = closure_12();
  let tmp7 = null;
  const obj2 = { style: tmp.appSubTitle, children: items };
  const obj = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("ChannelHeaderAppSubTitle");
  const tmp5 = React4;
  const tmp6 = View;
  if (null != application.icon) {
    const obj3 = { source: obj4.getApplicationIconSource(obj6), style: tmp.appIcon };
    obj6 = { id: null, icon: null, size: v16 };
    ({ id: obj5.id, icon: obj5.icon } = application);
    const tmp10 = FastImageDefault;
    obj4 = AvatarUtilsDefault;
    tmp7 = metroImportAll(tmp10, obj3);
  }
  items = [tmp7, , ];
  let str = "text-sm/normal";
  const Text = Text_Text.Text;
  if (manaTypeConsolidationExperiment) {
    str = "text-xs/normal";
  }
  const obj7 = { lineClamp: 1, maxFontSizeMultiplier: 2, variant: str, color: "text-subtle", style: tmp.appName, children: application.name };
  items[1] = metroImportAll(Text, obj7);
  const obj12 = { verified: application.isVerified, size: "sm" };
  items[2] = metroImportAll(BotTagDefault, obj12);
  return tmp5(tmp6, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppSubTitleSkeleton() {
  let items;
  let tmp3;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(8);
  const tmp2 = closure_12();
  if (cResult[0] !== tmp2.skeletonIcon) {
    const obj2 = { style: tmp2.skeletonIcon };
    const tmp6 = metroImportAll(View, obj2);
    cResult[0] = tmp2.skeletonIcon;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] !== tmp2.skeletonName) {
    const obj3 = { style: tmp2.skeletonName };
    const tmp10 = metroImportAll(View, obj3);
    cResult[2] = tmp2.skeletonName;
    cResult[3] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === tmp2.appSubTitle) {
    if (cResult[5] === tmp3) {
      let tmp11;
      if (cResult[6] === tmp7) {
        tmp11 = cResult[7];
      }
      return tmp11;
    }
  }
  const obj4 = { style: tmp2.appSubTitle, "aria-hidden": true, children: items };
  items = [tmp3, tmp7];
  const tmp12 = React4(View, obj4);
  cResult[4] = tmp2.appSubTitle;
  cResult[5] = tmp3;
  cResult[6] = tmp7;
  cResult[7] = tmp12;
  tmp11 = tmp12;
}) : (function AppSubTitleSkeleton() {
  let items;
  const tmp = closure_12();
  const obj = { style: tmp.appSubTitle, "aria-hidden": true, children: items };
  items = [, ];
  const obj2 = { style: tmp.skeletonIcon };
  items[0] = metroImportAll(View, obj2);
  const obj3 = { style: tmp.skeletonName };
  items[1] = metroImportAll(View, obj3);
  return React4(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function NoAppSubTitle() {
  let first;
  const obj = react2;
  const cResult = obj.c(4);
  const tmp4 = closure_12();
  let str = "text-sm/normal";
  const obj2 = ManaTypeConsolidationExperiment;
  if (obj2.useManaTypeConsolidationExperiment("ChannelHeaderAppSubTitle")) {
    str = "text-xs/normal";
  }
  const noApp = tmp4.noApp;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1128).intl;
    const stringResult = intl.string(intl2.t.tU5fiM);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === tmp4.noApp) {
    let tmp7;
    if (cResult[2] === str) {
      tmp7 = cResult[3];
    }
    return tmp7;
  }
  const tmp8 = metroImportAll(Text_Text.Text, { lineClamp: 1, maxFontSizeMultiplier: 2, variant: str, color: "text-subtle", style: noApp, children: first });
  cResult[1] = tmp4.noApp;
  cResult[2] = str;
  cResult[3] = tmp8;
  tmp7 = tmp8;
}) : (function NoAppSubTitle() {
  let intl;
  const tmp = closure_12();
  const obj = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("ChannelHeaderAppSubTitle");
  let str = "text-sm/normal";
  const Text = Text_Text.Text;
  const tmp5 = metroImportAll;
  if (manaTypeConsolidationExperiment) {
    str = "text-xs/normal";
  }
  const obj2 = { lineClamp: 1, maxFontSizeMultiplier: 2, variant: str, color: "text-subtle", style: tmp.noApp, children: intl.string(intl2.t.tU5fiM) };
  intl = tmp2(1128).intl;
  return tmp5(Text, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmptyIcon() {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_12();
  if (cResult[0] !== tmp2.channelIconWrapper) {
    const obj2 = { style: tmp2.channelIconWrapper };
    const tmp6 = metroImportAll(View, obj2);
    cResult[0] = tmp2.channelIconWrapper;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function EmptyIcon() {
  const obj = { style: closure_12().channelIconWrapper };
  return metroImportAll(View, obj);
});
function renderChannelIconRaw(icon, IconComponent) {
  const obj = { icon, IconComponent };
  return metroImportAll(closure_17, obj);
}
let size = size_mod;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx");

export const renderTitleWrapper = function renderTitleWrapper(tmp17Result, callback, combined, titleContentHeight) {
  const obj = { onPress: callback, headerAccessibilityLabel: combined, titleContentHeight, children: tmp17Result };
  return metroImportAll(closure_13, obj);
};
export const renderChannelTitle = function renderChannelTitle(visibleChannelName, arg1) {
  let accessibleTitle;
  let subtitle;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const disableArrow = obj.disableArrow;
  let tmp = undefined !== disableArrow;
  ({ accessibleTitle, subtitle } = obj);
  if (tmp) {
    tmp = disableArrow;
  }
  const obj2 = { title: visibleChannelName, accessibleTitle, subtitle, disableArrow: tmp, userId: obj.userId, guildId: obj.guildId, icon: obj.icon };
  return metroImportAll(closure_14, obj2);
};
export const renderGroupDMIcon = function renderGroupDMIcon(stateFromStores) {
  const obj = { channel: stateFromStores };
  return metroImportAll(closure_15, obj);
};
export const renderUserAvatar = function renderUserAvatar(stateFromStores1, status, isMobileOnline, isVROnline) {
  const obj = { user: stateFromStores1, status, isMobileOnline, isVROnline };
  return metroImportAll(closure_16, obj);
};
export { renderChannelIconRaw };
export const renderChannelIcon = function renderChannelIcon(stateFromStores, stateFromStores3) {
  const obj = utils_ChannelUtils;
  const channelIconWithGuild = obj.getChannelIconWithGuild(stateFromStores, stateFromStores3);
  let rulesChannelId;
  const getChannelIconComponent = utils_ChannelUtils.getChannelIconComponent;
  utils_ChannelUtils;
  if (stateFromStores3 != null) {
    rulesChannelId = stateFromStores3.rulesChannelId;
  }
  const obj2 = { isRulesChannel: rulesChannelId === stateFromStores.id };
  const obj3 = { icon: channelIconWithGuild, IconComponent: getChannelIconComponent(stateFromStores, obj2) };
  return metroImportAll(closure_17, obj3);
};
export const renderMemberCountText = function renderMemberCountText(online, total, flag, leadingAccessoryWidth) {
  let tmp;
  if (flag === undefined) {
    flag = false;
  }
  if (null != online) {
    const obj = { presenceCount: online, memberCount: total, withSeparator: flag, leadingAccessoryWidth };
    tmp = metroImportAll(closure_18, obj);
  } else {
    tmp = null;
  }
  return tmp;
};
export const renderParentChannelSubTitle = function renderParentChannelSubTitle(parentChannel) {
  const obj = { channel: parentChannel };
  return metroImportAll(closure_19, obj);
};
export const renderAppSubTitle = function renderAppSubTitle(application, arg1) {
  let tmp2;
  if (null != application) {
    const obj = { application };
    tmp2 = metroImportAll(closure_20, obj);
  } else {
    tmp2 = metroImportAll(arg1 ? closure_21 : closure_22, {});
  }
  return tmp2;
};
export const renderEmptyIcon = function renderEmptyIcon() {
  return metroImportAll(closure_23, {});
};
