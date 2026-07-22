// Module ID: 15037
// Function ID: 113285
// Name: ForYouItemImage
// Dependencies: []

// Module 15037 (ForYouItemImage)
let FRIEND_BACKGROUND;
let MESSAGE_BACKGROUND;
let PROFILE_BACKGROUND;
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const getGuildAcronym = arg1(dependencyMap[2]).getGuildAcronym;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ FRIEND_BACKGROUND, MESSAGE_BACKGROUND, PROFILE_BACKGROUND } = arg1(dependencyMap[5]));
const jsx = arg1(dependencyMap[6]).jsx;
let obj1 = arg1(dependencyMap[7]);
let closure_9 = obj1.createStyles((arg0) => {
  let num = 48;
  if (arg0) {
    num = 32;
  }
  let obj = {};
  obj = { height: num, width: num };
  const result = num / 2;
  obj.borderRadius = result;
  let num2 = 12;
  if (arg0) {
    num2 = 8;
  }
  obj.marginEnd = num2;
  obj.alignItems = "center";
  obj.justifyContent = "center";
  obj.container = obj;
  obj = { height: num, width: num, borderRadius: result };
  obj.rowImage = obj;
  const obj1 = { <string:2302963662>: null, <string:860974117>: null, <string:1362846152>: false, maxHeight: result, color: importDefault(dependencyMap[8]).colors.INTERACTIVE_TEXT_DEFAULT };
  obj.guildFallbackImage = obj1;
  return obj;
});
let obj2 = arg1(dependencyMap[7]);
let obj = {};
obj = { color: importDefault(dependencyMap[8]).colors.WHITE };
obj.fallbackImage = obj;
obj1 = { color: importDefault(dependencyMap[8]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.fallbackImageV2 = obj1;
obj2 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BRAND };
obj.brandBackground = obj2;
obj.profileBackground = { backgroundColor: PROFILE_BACKGROUND };
obj.friendBackground = { backgroundColor: FRIEND_BACKGROUND };
obj.messageBackground = { backgroundColor: MESSAGE_BACKGROUND };
const tmp2 = arg1(dependencyMap[5]);
obj.guildGridBackground = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH };
let closure_10 = obj2.createStyles(obj);
const obj3 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH };
const memoResult = importAllResult.memo((item) => {
  item = item.item;
  const arg1 = item;
  const compactMode = item.compactMode;
  const importDefault = compactMode;
  let importAllResult;
  let View;
  const tmp = callback(compactMode);
  const analyticsLocations = importDefault(dependencyMap[20])().analyticsLocations;
  const dependencyMap = analyticsLocations;
  const tmp2 = callback2();
  const other_user = item.other_user;
  let id;
  if (null != other_user) {
    id = other_user.id;
  }
  importAllResult = id;
  let obj = arg1(dependencyMap[21]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => user.getUser(id));
  View = stateFromStores;
  const items1 = [stateFromStores, compactMode, , , , ];
  ({ acked: arr2[2], guild_id: arr2[3], message_id: arr2[4] } = item);
  items1[5] = analyticsLocations;
  const memo = importAllResult.useMemo(() => {
    if (null == stateFromStores) {
      return null;
    } else {
      let tmpResult = {
        onPress() {
            callback(closure_2[23])({ userId: id.id, localUser: id, messageId: message_id.message_id, sourceAnalyticsLocations: closure_2 });
          }
      };
      tmpResult = {};
      const obj3 = item(analyticsLocations[24]);
      tmpResult.source = obj3.getAvatarSource(stateFromStores, item.guild_id, undefined, item.acked);
      const AvatarSizes = item(analyticsLocations[17]).AvatarSizes;
      tmpResult.size = compactMode ? AvatarSizes.REFRESH_MEDIUM_32 : AvatarSizes.LARGE_48;
      tmpResult.avatarDecoration = stateFromStores.avatarDecoration;
      tmpResult = tmp(item(analyticsLocations[17]).Avatar, tmpResult);
      tmpResult.children = tmpResult;
      tmpResult = tmp(item(analyticsLocations[22]).PressableOpacity, tmpResult);
    }
  }, items1);
  if (null != item.icon_name) {
    obj = {};
    if ("icHighlight" === item.icon_name) {
      let tmp69 = dependencyMap[13];
    } else {
      tmp69 = dependencyMap[14];
    }
    obj.source = importDefault(tmp69);
    obj.color = tmp2.fallbackImage.color;
    jsx(arg1(dependencyMap[17]).Icon, obj);
    const brandBackground2 = tmp2.brandBackground;
    const tmp64 = jsx;
    const tmp67 = importDefault;
  } else {
    if (null != item.icon_url) {
      let tmp30 = memo;
      let brandBackground = null;
      if (null == memo) {
        obj = { style: tmp.rowImage };
        const obj1 = { uri: item.icon_url };
        obj.source = obj1;
        obj.resizeMode = "contain";
        tmp30 = jsx(importDefault(dependencyMap[15]), obj);
        brandBackground = tmp2.brandBackground;
      }
    } else {
      tmp30 = memo;
      brandBackground = null;
      if (null == memo) {
        if ("lifecycle_item" === item.type) {
          const item_enum = item.item_enum;
          if (item_enum === arg1(dependencyMap[9]).ItemEnum.UPDATE_PROFILE) {
            const obj2 = { source: importDefault(dependencyMap[16]) };
            let tmp41 = jsx(importDefault(dependencyMap[15]), obj2);
            const tmp53 = importDefault(dependencyMap[15]);
          } else {
            if (item_enum !== arg1(dependencyMap[9]).ItemEnum.FIND_FRIENDS) {
              if (item_enum !== arg1(dependencyMap[9]).ItemEnum.ADD_FRIEND) {
                if (item_enum === arg1(dependencyMap[9]).ItemEnum.FIRST_MESSAGE) {
                  const obj3 = { source: importDefault(dependencyMap[19]) };
                  const obj4 = { width: "105%" };
                  obj3.style = obj4;
                  tmp41 = jsx(importDefault(dependencyMap[15]), obj3);
                  const tmp45 = importDefault(dependencyMap[15]);
                } else {
                  const obj5 = { source: importDefault(dependencyMap[14]) };
                  tmp41 = jsx(arg1(dependencyMap[17]).Icon, obj5);
                }
              }
            }
            const obj6 = { source: importDefault(dependencyMap[18]), size: arg1(dependencyMap[17]).IconSizes.SMALL_20, color: importDefault(dependencyMap[8]).unsafe_rawColors.WHITE };
            tmp41 = jsx(arg1(dependencyMap[17]).Icon, obj6);
          }
          const item_enum2 = item.item_enum;
          if (item_enum2 === arg1(dependencyMap[9]).ItemEnum.UPDATE_PROFILE) {
            let friendBackground = tmp2.profileBackground;
          } else {
            if (item_enum2 !== arg1(dependencyMap[9]).ItemEnum.FIND_FRIENDS) {
              if (item_enum2 !== arg1(dependencyMap[9]).ItemEnum.ADD_FRIEND) {
                friendBackground = item_enum2 === arg1(dependencyMap[9]).ItemEnum.FIRST_MESSAGE ? tmp2.messageBackground : tmp2.brandBackground;
              }
            }
            friendBackground = tmp2.friendBackground;
          }
          let tmp60 = null;
          if (null != friendBackground) {
            tmp60 = friendBackground;
          }
          brandBackground = tmp60;
          tmp30 = tmp41;
        } else if (item.type === arg1(dependencyMap[9]).NotificationCenterItems.REFERRAL_PROGRAM_ENTRYPOINT_REMINDER) {
          const obj7 = { source: importDefault(dependencyMap[25]), style: tmp.rowImage, resizeMode: "contain" };
          tmp30 = jsx(importDefault(dependencyMap[15]), obj7);
          brandBackground = tmp2.brandBackground;
          const tmp34 = importDefault(dependencyMap[15]);
        } else {
          const guild = guild.getGuild(item.guild_id);
          let tmp7 = null;
          if (null != guild) {
            tmp7 = getGuildAcronym(guild);
          }
          const type = item.type;
          if (arg1(dependencyMap[9]).NotificationCenterItems.MISSED_MESSAGES === type) {
            const obj8 = { icon: importDefault(dependencyMap[10]), color: tmp2.fallbackImage.color };
            let obj11 = obj8;
          } else if (arg1(dependencyMap[9]).NotificationCenterItems.FRIEND_REQUEST_REMINDER === type) {
            const obj9 = { icon: importDefault(dependencyMap[11]), color: tmp2.fallbackImage.color };
            obj11 = obj9;
          } else {
            if (arg1(dependencyMap[9]).NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED !== type) {
              if (arg1(dependencyMap[9]).NotificationCenterItems.TOP_MESSAGES !== type) {
                if (arg1(dependencyMap[9]).NotificationCenterItems.MISSED_MESSAGES !== type) {
                  if (arg1(dependencyMap[9]).NotificationCenterItems.TOP_MESSAGES === type) {
                    const obj10 = { icon: importDefault(dependencyMap[13]), color: tmp2.fallbackImage.color };
                    obj11 = obj10;
                  } else {
                    obj11 = { icon: importDefault(dependencyMap[14]), color: tmp2.fallbackImage.color };
                  }
                }
              }
            }
            const obj12 = { icon: importDefault(dependencyMap[12]), color: tmp2.fallbackImageV2.color, backgroundStyle: tmp2.guildGridBackground };
            obj11 = obj12;
          }
          if (obj11.icon === importDefault(dependencyMap[12])) {
            if (null != tmp7) {
              const obj13 = {};
              let str2 = "text-lg/normal";
              if (tmp7.length > 4) {
                str2 = "text-md/normal";
              }
              obj13.variant = str2;
              const items2 = [, ];
              ({ rowImage: arr3[0], guildFallbackImage: arr3[1] } = tmp);
              obj13.style = items2;
              obj13.children = tmp7;
              let tmp26Result = jsx(arg1(dependencyMap[26]).Text, obj13);
              const tmp26 = jsx;
            }
            brandBackground = obj11.backgroundStyle;
            if (null == brandBackground) {
              brandBackground = tmp2.brandBackground;
            }
            tmp30 = tmp26Result;
          }
          ({ icon: obj7.source, color: obj7.color } = obj11);
          tmp26Result = jsx(arg1(dependencyMap[17]).Icon, {});
          const obj14 = {};
        }
      }
    }
    const obj15 = {};
    const items3 = [tmp.container, brandBackground];
    obj15.style = items3;
    obj15.children = tmp30;
    return <View {...obj15} />;
  }
});
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/notification_center/native/ForYouItemImage.tsx");

export const ForYouItemImage = memoResult;
