// Module ID: 16062
// Function ID: 16063
// Name: ForYouItemImage
// Dependencies: [19, 17, 2063, 2067, 1372, 16063, 21, 4836, 576, 7054, 9336, 16064, 16065, 16066, 16067, 5899, 16068, 1177, 16069, 16070, 6583, 504, 5435, 7624, 7693, 16071, 4832, 2]

// Module 16062 (ForYouItemImage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import GuildRecord from "GuildRecord" /* 2063 */;
import Pressables from "Pressables" /* 5435 */;
import profile_customization_ProfileCustomizationUtils from "profile_customization/ProfileCustomizationUtils" /* 7693 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 16063 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let item;

let FRIEND_BACKGROUND;
let MESSAGE_BACKGROUND;
let PROFILE_BACKGROUND;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
const getGuildAcronym = GuildRecord.getGuildAcronym;
({ FRIEND_BACKGROUND, MESSAGE_BACKGROUND, PROFILE_BACKGROUND } = Constants);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let closure_9 = createStyles.createStyles((arg0) => {
  let num2;
  let result;
  let size1;
  let num = 48;
  if (arg0) {
    num = 32;
  }
  size = { height: num, width: num, borderRadius: result, marginEnd: num2, alignItems: "center", justifyContent: "center" };
  result = num / 2;
  num2 = 12;
  if (arg0) {
    num2 = 8;
  }
  const obj = { container: size, rowImage: { height: num, width: num, borderRadius: result }, guildFallbackImage: size1 };
  size1 = { height: "auto", maxHeight: result, width: "auto", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  return obj;
});
createStyles = createStyles_mod;
let obj = { fallbackImage: obj2, fallbackImageV2: obj3, brandBackground: obj4, profileBackground: { backgroundColor: PROFILE_BACKGROUND }, friendBackground: { backgroundColor: FRIEND_BACKGROUND }, messageBackground: { backgroundColor: MESSAGE_BACKGROUND }, guildGridBackground: obj5 };
obj2 = { color: nativeDefault.colors.WHITE };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_10 = createStyles(obj);
const memoResult = react.memo((item) => {
  let brandBackground1;
  let items2;
  let tmp27Result;
  item = item.item;
  const compactMode = item.compactMode;
  let analyticsLocations;
  let stateFromStores;
  const tmp = closure_9(compactMode);
  const tmp3 = analyticsLocations;
  analyticsLocations = compactMode(analyticsLocations[20])().analyticsLocations;
  const tmp4 = closure_10();
  const other_user = item.other_user;
  let id;
  if (other_user != null) {
    id = other_user.id;
  }
  let obj = item(tmp3[21]);
  const items = [UserStore];
  stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(id));
  const items1 = [stateFromStores, compactMode, , , , ];
  ({ acked: arr2[2], guild_id: arr2[3], message_id: arr2[4] } = item);
  items1[5] = analyticsLocations;
  const memo = id.useMemo(() => {
    let AvatarSizes;
    let localUser;
    let message_id;
    let obj3;
    let sourceAnalyticsLocations;
    let tmp3Result = null;
    if (null != stateFromStores) {
      let obj = {
        onPress() {
            const obj = { userId: localUser.id, localUser, messageId: message_id.message_id, sourceAnalyticsLocations };
            compactMode(analyticsLocations[23])(obj);
          },
        children: null
      };
      const PressableOpacity = Pressables.PressableOpacity;
      ({ source: obj3.getAvatarSource(stateFromStores, item.guild_id, undefined, item.acked), size: compactMode ? AvatarSizes.REFRESH_MEDIUM_32 : AvatarSizes.LARGE_48, avatarDecoration: stateFromStores.avatarDecoration });
      const Avatar = native.Avatar;
      obj3 = profile_customization_ProfileCustomizationUtils;
      AvatarSizes = native.AvatarSizes;
      tmp3Result = tmp3(PressableOpacity, obj);
    }
    return tmp3Result;
  }, items1);
  if (null != item.icon_name) {
    const Icon3 = tmp6(tmp3[17]).Icon;
    tmp27Result = <Icon3 source={compactMode("icHighlight" === item.icon_name ? tmp3[13] : tmp3[14])} color={tmp4.fallbackImage.color} />;
    brandBackground1 = tmp4.brandBackground;
  } else if (null != item.icon_url) {
    brandBackground1 = null;
    tmp27Result = memo;
    if (null == memo) {
      const obj4 = { uri: item.icon_url };
      tmp27Result = jsx(tmp2(tmp3[15]), { style: tmp.rowImage, source: obj4, resizeMode: "contain" });
      brandBackground1 = tmp4.brandBackground;
    }
  } else {
    brandBackground1 = null;
    tmp27Result = memo;
    if (null == memo) {
      if ("lifecycle_item" === item.type) {
        let tmp19;
        let profileBackground;
        const item_enum = item.item_enum;
        if (item_enum === item(tmp3[9]).ItemEnum.UPDATE_PROFILE) {
          compactMode(tmp3[15]);
          tmp19 = <tmp2Result source={compactMode(tmp3[16])} />;
        } else {
          if (item_enum !== item(tmp3[9]).ItemEnum.FIND_FRIENDS) {
            if (item_enum !== item(tmp3[9]).ItemEnum.ADD_FRIEND) {
              if (item_enum === item(tmp3[9]).ItemEnum.FIRST_MESSAGE) {
                compactMode(tmp3[15]);
                tmp19 = <tmp2Result3 source={compactMode(tmp3[19])} style={{ width: "105%" }} />;
              } else {
                const Icon = tmp6(tmp3[17]).Icon;
                tmp19 = <Icon source={compactMode(tmp3[14])} />;
              }
            }
          }
          const Icon2 = tmp6(tmp3[17]).Icon;
          tmp19 = <Icon2 source={compactMode(tmp3[18])} size={tmp6(tmp3[17]).IconSizes.SMALL_20} color={compactMode(tmp3[8]).unsafe_rawColors.WHITE} />;
        }
        const item_enum2 = item.item_enum;
        if (item_enum2 === item(tmp3[9]).ItemEnum.UPDATE_PROFILE) {
          profileBackground = tmp4.profileBackground;
        } else {
          if (item_enum2 !== item(tmp3[9]).ItemEnum.FIND_FRIENDS) {
            if (item_enum2 !== item(tmp3[9]).ItemEnum.ADD_FRIEND) {
              profileBackground = item_enum2 === tmp6(tmp3[9]).ItemEnum.FIRST_MESSAGE ? tmp4.messageBackground : tmp4.brandBackground;
            }
          }
          profileBackground = tmp4.friendBackground;
        }
        if (profileBackground == null) {
          profileBackground = null;
        }
        brandBackground1 = profileBackground;
        tmp27Result = tmp19;
      } else if (item.type === item(tmp3[9]).NotificationCenterItems.REFERRAL_PROGRAM_ENTRYPOINT_REMINDER) {
        compactMode(tmp3[15]);
        tmp27Result = <tmp2Result4 source={compactMode(tmp3[25])} style={tmp.rowImage} resizeMode="contain" />;
        brandBackground1 = tmp4.brandBackground;
      } else {
        let obj14;
        const guild = GuildStore.getGuild(item.guild_id);
        let tmp10 = null;
        if (null != guild) {
          tmp10 = getGuildAcronym(guild);
        }
        const type = item.type;
        if (item(tmp3[9]).NotificationCenterItems.MISSED_MESSAGES === type) {
          obj14 = { icon: compactMode(tmp3[10]), color: tmp4.fallbackImage.color };
          const obj11 = { icon: compactMode(tmp3[10]), color: tmp4.fallbackImage.color };
        } else if (item(tmp3[9]).NotificationCenterItems.FRIEND_REQUEST_REMINDER === type) {
          obj14 = { icon: compactMode(tmp3[11]), color: tmp4.fallbackImage.color };
          const obj12 = { icon: compactMode(tmp3[11]), color: tmp4.fallbackImage.color };
        } else {
          if (item(tmp3[9]).NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED !== type) {
            if (item(tmp3[9]).NotificationCenterItems.TOP_MESSAGES !== type) {
              if (item(tmp3[9]).NotificationCenterItems.MISSED_MESSAGES !== type) {
                if (item(tmp3[9]).NotificationCenterItems.TOP_MESSAGES === type) {
                  obj14 = { icon: compactMode(tmp3[13]), color: tmp4.fallbackImage.color };
                  const obj13 = { icon: compactMode(tmp3[13]), color: tmp4.fallbackImage.color };
                } else {
                  obj14 = { icon: compactMode(tmp3[14]), color: tmp4.fallbackImage.color };
                }
              }
            }
          }
          obj14 = { icon: compactMode(tmp3[12]), color: tmp4.fallbackImageV2.color, backgroundStyle: tmp4.guildGridBackground };
          const obj15 = { icon: compactMode(tmp3[12]), color: tmp4.fallbackImageV2.color, backgroundStyle: tmp4.guildGridBackground };
        }
        if (obj14.icon === compactMode(tmp3[12])) {
          let tmp13Result;
          if (null != tmp10) {
            let str2 = "text-lg/normal";
            const Text = tmp6(tmp3[26]).Text;
            const tmp13 = jsx;
            if (tmp10.length > 4) {
              str2 = "text-md/normal";
            }
            const obj16 = { variant: str2, style: items2, children: tmp10 };
            items2 = [, ];
            ({ rowImage: arr3[0], guildFallbackImage: arr3[1] } = tmp);
            tmp13Result = tmp13(Text, obj16);
          }
          let brandBackground = obj14.backgroundStyle;
          if (brandBackground == null) {
            brandBackground = tmp4.brandBackground;
          }
          brandBackground1 = brandBackground;
          tmp27Result = tmp13Result;
        }
        ({ icon: obj7.source, color: obj7.color } = obj14);
        tmp13Result = jsx(tmp6(tmp3[17]).Icon, { source: null, color: null });
      }
    }
  }
  const items3 = [tmp.container, brandBackground1];
  return <stateFromStores style={items3}>{tmp27Result}</stateFromStores>;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/notification_center/native/ForYouItemImage.tsx");

export const ForYouItemImage = memoResult;
