// Module ID: 18037
// Function ID: 18038
// Name: MessagesItemChannelContent
// Dependencies: [19, 17, 6836, 6770, 21, 5009, 575, 1188, 8763, 7130, 11054, 10961, 5031, 5248, 504, 17240, 2044, 6887, 18038, 11, 5647, 18039, 5591, 10752, 10753, 5619, 9276, 9183, 11020, 5687, 10725, 1114, 18041, 2]

// Module 18037 (MessagesItemChannelContent)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1188 */;
import _modDef2044 from "module_2044" /* 2044 */;
import useThemeDefault from "useTheme" /* 5248 */;
import useChannelNameDefault from "useChannelName" /* 5647 */;
import ReadStateConstants from "ReadStateConstants" /* 6770 */;
import isChangelogChannelDefault from "isChangelogChannel" /* 6887 */;
import AssetRegistryDefault from "AssetRegistry" /* 7130 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8763 */;
import BotTagDefault from "BotTag" /* 9183 */;
import ActivityStatusDefault from "ActivityStatus" /* 10725 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10752 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 10961 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 11054 */;
import useMessagePreviewsDefault from "useMessagePreviews" /* 17240 */;
import usePrivateChannelWaveDefault from "usePrivateChannelWave" /* 18039 */;
import react from "react" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 6836 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function MessagesItemChannelContentIcon(selected) {
  let blocked;
  let favorite;
  let ignored;
  let items;
  let items1;
  let items2;
  let items3;
  let muted;
  let tmp2;
  ({ muted, favorite, ignored, blocked } = selected);
  const tmp = closure_11(selected.selected);
  if (blocked) {
    const obj2 = { source: AssetRegistryDefault2, size: native.Icon.Sizes.EXTRA_SMALL, style: items };
    const Icon4 = native.Icon;
    items = [, ];
    ({ channelIcon: arr4[0], channelMutedIcon: arr4[1] } = tmp);
    tmp2 = metroRequire(Icon4, obj2);
  } else if (ignored) {
    const obj3 = { source: AssetRegistryDefault, size: native.Icon.Sizes.EXTRA_SMALL, style: items1 };
    const Icon3 = native.Icon;
    items1 = [, ];
    ({ channelIcon: arr3[0], channelIgnoredIcon: arr3[1] } = tmp);
    tmp2 = metroRequire(Icon3, obj3);
  } else if (muted) {
    const obj4 = { source: AssetRegistryDefault4, size: native.Icon.Sizes.EXTRA_SMALL, style: items2 };
    const Icon2 = native.Icon;
    items2 = [, ];
    ({ channelIcon: arr2[0], channelMutedIcon: arr2[1] } = tmp);
    tmp2 = metroRequire(Icon2, obj4);
  } else {
    tmp2 = null;
    if (favorite) {
      const obj = { source: AssetRegistryDefault3, size: native.Icon.Sizes.EXTRA_SMALL, style: items3 };
      const Icon = native.Icon;
      items3 = [, ];
      ({ channelIcon: arr[0], channelFavoriteIcon: arr[1] } = tmp);
      tmp2 = metroRequire(Icon, obj);
    }
  }
  return tmp2;
}
const View = react_native.View;
const UnreadSetting = ReadStateConstants.UnreadSetting;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: { flex: 1 }, channelIcon: { alignSelf: "center" }, channelNameAndAccessories: { flexDirection: "row", alignItems: "center", width: "100%" }, channelIcons: { flexDirection: "row", alignItems: "center" }, channelAccessoriesContainer: obj2, channelAccessories: obj3, channelNameAndBadge: obj4, botTag: obj5, contentPadded: obj6 };
obj2 = { flexDirection: "row", justifyContent: "flex-end", marginLeft: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", borderRadius: nativeDefault.radii.xs, paddingHorizontal: nativeDefault.space.PX_4, paddingVertical: 1 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, flex: 1, minWidth: 0 };
obj5 = { marginRight: nativeDefault.space.PX_4 };
obj6 = { paddingRight: nativeDefault.space.PX_40 };
let closure_9 = createStyles(obj);
createStyles = createStyles_mod;
let closure_10 = createStyles.createStyles((arg0, arg1, arg2) => {
  let MOBILE_TEXT_HEADING_PRIMARY;
  let tmp6;
  const tmp = arg2;
  if (tmp) {
    MOBILE_TEXT_HEADING_PRIMARY = nativeDefault.colors.TEXT_MUTED;
    tmp6 = importDefault;
  } else {
    const tmp2 = arg0;
    if (!tmp2) {
      const tmp3 = arg1;
      if (!tmp3) {
        MOBILE_TEXT_HEADING_PRIMARY = nativeDefault.colors.MESSAGES_ITEM_CHANNEL_TEXT_DEFAULT;
        tmp6 = importDefault;
      }
    }
    MOBILE_TEXT_HEADING_PRIMARY = nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY;
    tmp6 = importDefault;
  }
  const obj = { channelText: { color: MOBILE_TEXT_HEADING_PRIMARY }, channelName: { flexShrink: 1 }, timestamp: { color: tmp6(575).colors.TEXT_SUBTLE } };
  ({ color: tmp6(575).colors.TEXT_SUBTLE });
  return obj;
});
createStyles = createStyles_mod;
let closure_11 = createStyles.createStyles((arg0) => {
  let colors;
  let colors2;
  let colors3;
  const obj = { channelIcon: { marginRight: nativeDefault.space.PX_4 }, channelMutedIcon: { tintColor: arg0 ? colors.ICON_SUBTLE : colors.ICON_MUTED }, channelFavoriteIcon: { tintColor: arg0 ? colors2.ICON_SUBTLE : colors2.ICON_MUTED }, channelIgnoredIcon: { tintColor: arg0 ? colors3.ICON_SUBTLE : colors3.ICON_MUTED } };
  ({ marginRight: nativeDefault.space.PX_4 });
  colors = nativeDefault.colors;
  colors2 = tmp(575).colors;
  colors3 = tmp(575).colors;
  return obj;
});
const memoResult = react.memo(function MessagesItemChannelContent(channel) {
  let EffectDisplayType;
  let blocked;
  let channelSelected;
  let favorite;
  let guild_id;
  let hasActivity;
  let hasNameplate;
  let hasUnreadMessages;
  let ignored;
  let intl;
  let items1;
  let items6;
  let items7;
  let muted;
  let obj15;
  let obj17;
  let resolvedUnreadSetting;
  let str7;
  let tmp22Result7;
  let tmpResult4;
  channel = channel.channel;
  ({ channelSelected, muted, ignored, blocked, hasUnreadMessages, hasNameplate } = channel);
  ({ favorite, hasActivity, resolvedUnreadSetting } = channel);
  let tmp5 = hasUnreadMessages;
  const obj = channel(5031);
  const isThemeLightResult = obj.isThemeLight(useThemeDefault());
  if (hasUnreadMessages) {
    tmp5 = resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES;
  }
  const tmp8 = closure_9();
  const tmp9 = closure_10(channelSelected, tmp5, (muted || ignored || blocked) && !channelSelected);
  const items = [ReadStateStore];
  const tmpResult = channel(504);
  const stateFromStores = tmpResult.useStateFromStores(items, () => ReadStateStore.lastMessageId(channel.id));
  const tmp11 = useMessagePreviewsDefault(channel, { unread: hasUnreadMessages });
  let tmp12 = null != tmp11;
  if (tmp12) {
    const obj3 = _modDef2044();
    tmp12 = obj3.diff(tmp11.timestamp, "hours") < 1 || !hasActivity || hasUnreadMessages;
    obj3.diff(tmp11.timestamp, "hours") < 1 || !hasActivity || hasUnreadMessages;
  }
  if (tmp12) {
    tmp12 = !tmp3(6887)(channel.id);
  }
  const useRelativeTimestamp = channel(18038).useRelativeTimestamp;
  channel(18038);
  let id = stateFromStores;
  const extractTimestamp = SnowflakeUtilsDefault.extractTimestamp;
  SnowflakeUtilsDefault;
  if (stateFromStores == null) {
    id = channel.id;
  }
  const obj2 = { timestamp: extractTimestamp(id) };
  const relativeTimestamp = useRelativeTimestamp(obj2);
  const tmp17 = channel.isPrivate() && !channel.isMultiUserDM() && null != channel.recipients && channel.recipients.length > 0;
  const tmp18 = useChannelNameDefault(channel);
  const tmp19 = usePrivateChannelWaveDefault(channel, stateFromStores);
  const waveShouldShow = tmp19.waveShouldShow;
  const obj4 = { variant: tmpResult4.useToken(nativeDefault.modules.mobile.MESSAGES_ITEM_CHANNEL_NAME_TEXT_STYLE), style: items1, lineClamp: 1, ellipsizeMode: "tail" };
  const wavePressed = tmp19.wavePressed;
  items1 = [, ];
  ({ channelText: arr2[0], channelName: arr2[1] } = tmp9);
  const obj5 = { style: tmp8.content, children: null };
  const obj6 = { style: tmp8.channelNameAndAccessories, children: null };
  const obj7 = { style: tmp8.channelNameAndBadge, children: null };
  tmpResult4 = channel(5591);
  if (channel.isDM()) {
    if (null != channel.recipients) {
      let tmp25Result;
      let tmp22;
      if (channel.recipients.length > 0) {
        const obj8 = { userId: channel.recipients[0], userName: tmp18, effectDisplayType: channelSelected ? EffectDisplayType.STATIC : EffectDisplayType.PLAIN };
        const tmp3Result4 = UsernameWithEffectsDefault;
        EffectDisplayType = tmp(10753).EffectDisplayType;
        const merged = Object.assign(obj4);
        tmp25Result = tmp25(tmp3Result4, obj8);
        tmp22 = tmp25;
      }
      const items2 = [tmp25Result, , ];
      let tmp22Result = null;
      if (tmp17) {
        const obj9 = { userId: channel.recipients[0], disabledTooltip: true };
        tmp22Result = tmp22(tmp3(9276), obj9);
      }
      items2[1] = tmp22Result;
      let tmp22Result5 = null;
      if (channel.isSystemDM()) {
        const obj10 = { style: tmp8.botTag, type: BotTagDefault.Types.SYSTEM_DM, verified: true };
        const tmp3Result5 = BotTagDefault;
        tmp22Result5 = tmp22(tmp3Result5, obj10);
      }
      items2[2] = tmp22Result5;
      obj7.children = items2;
      const items3 = [closure_7(View, obj7), ];
      const items4 = [tmp8.channelAccessoriesContainer, ];
      let num4 = 0;
      if (hasNameplate) {
        num4 = 0;
        if (!waveShouldShow) {
          num4 = 40;
        }
      }
      const obj12 = { minWidth: num4 };
      items4[1] = obj12;
      const items5 = [tmp8.channelAccessories, , ];
      let obj13;
      const obj11 = { style: items4, children: closure_7(View, obj15) };
      if (waveShouldShow) {
        obj13 = { paddingVertical: 0 };
      }
      items5[1] = obj13;
      let tmp33;
      if (hasNameplate) {
        let combined;
        if (isThemeLightResult) {
          let num6 = 0.3;
          if (channelSelected) {
            num6 = 0.6;
          }
          const _HermesInternal2 = HermesInternal;
          combined = "rgba(255, 255, 255, " + num6 + ")";
        } else {
          let num5 = 0.25;
          if (channelSelected) {
            num5 = 0.7;
          }
          const _HermesInternal = HermesInternal;
          combined = "rgba(0, 0, 0, " + num5 + ")";
        }
        tmp33 = { backgroundColor: combined };
        const obj14 = { backgroundColor: combined };
      }
      obj15 = { style: items5, children: items6 };
      items5[2] = tmp33;
      const obj16 = { style: tmp8.channelIcons, children: tmp22(MessagesItemChannelContentIcon, obj17) };
      obj17 = { muted, favorite, ignored, blocked, selected: channelSelected };
      items6 = [tmp22(View, obj16), ];
      let tmp22Result6 = !waveShouldShow;
      if (tmp22Result6) {
        const obj18 = { style: items7, variant: "text-xs/medium", lineClamp: 1, children: relativeTimestamp };
        items7 = [, ];
        ({ channelText: arr8[0], timestamp: arr8[1] } = tmp9);
        tmp22Result6 = tmp22(tmp(5619).Text, obj18);
      }
      items6[1] = tmp22Result6;
      items3[1] = tmp22(View, obj11);
      obj6.children = items3;
      const items8 = [closure_7(View, obj6), ];
      let contentPadded;
      if (hasNameplate) {
        if (!waveShouldShow) {
          contentPadded = tmp8.contentPadded;
        }
      }
      const obj19 = { style: contentPadded, children: tmp22Result7 };
      if (tmp12) {
        let str6 = "text-muted";
        const obj20 = { message: tmp11, channel, color: str7, layout: channel(5687).ChannelListLayoutTypes.COZY_DRAWER_SMOL, muted };
        str7 = "text-muted";
        const ChannelRowPreview = tmp(11020).ChannelRowPreview;
        if (!((muted || ignored || blocked) && !channelSelected)) {
          if (channelSelected) {
            str6 = "mobile-text-heading-primary";
          }
          str7 = str6;
        }
        tmp22Result7 = tmp22(ChannelRowPreview, obj20);
      } else if (channel.isDM()) {
        const obj21 = { textStyle: tmp9.channelText, userId: channel.getRecipientId(), guildId: guild_id };
        guild_id = undefined;
        const tmp3Result6 = ActivityStatusDefault;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        tmp22Result7 = tmp22(tmp3Result6, obj21);
      } else {
        tmp22Result7 = null;
        if (isChangelogChannelDefault(channel.id)) {
          const obj22 = { variant: "text-xs/medium", style: tmp9.channelText, lineClamp: 1, children: intl.string(channel(1114).t.FL5T01) };
          const Text2 = tmp(5619).Text;
          intl = tmp(1114).intl;
          tmp22Result7 = tmp22(Text2, obj22);
        }
      }
      items8[1] = tmp22(View, obj19);
      obj5.children = items8;
      const items9 = [closure_7(View, obj5), ];
      let tmp22Result8 = null;
      const tmp43 = closure_8;
      if (waveShouldShow) {
        const obj23 = { wavePressed, hasNameplate };
        tmp22Result8 = tmp22(tmp3(18041), obj23);
      }
      const obj24 = { children: items9 };
      items9[1] = tmp22Result8;
      return closure_7(tmp43, obj24);
    }
  }
  tmp22 = closure_6;
  const obj25 = { children: tmp18 };
  const Text = tmp(5619).Text;
  const merged1 = Object.assign(obj4);
  tmp25Result = closure_6(Text, obj25);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelContent.tsx");

export default memoResult;
