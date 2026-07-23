// Module ID: 15152
// Function ID: 115454
// Name: ForYouItemImage
// Dependencies: [31, 27, 1391, 1838, 1849, 15153, 33, 4130, 689, 6883, 12188, 15154, 15155, 15156, 15157, 5085, 15158, 1273, 15159, 15160, 5464, 566, 4660, 8492, 7883, 15161, 4126, 2]

// Module 15152 (ForYouItemImage)
import importAllResult from "result";
import { View } from "set";
import { getGuildAcronym } from "isGuildOwner";
import closure_6 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import PROFILE_BACKGROUND from "PROFILE_BACKGROUND";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let FRIEND_BACKGROUND;
let MESSAGE_BACKGROUND;
let PROFILE_BACKGROUND;
const require = arg1;
({ FRIEND_BACKGROUND, MESSAGE_BACKGROUND, PROFILE_BACKGROUND } = PROFILE_BACKGROUND);
let closure_9 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
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
  const obj1 = { height: "auto", maxHeight: result, width: "auto", color: importDefault(689).colors.INTERACTIVE_TEXT_DEFAULT };
  obj.guildFallbackImage = obj1;
  return obj;
});
let obj = {};
obj = { color: require("_createForOfIteratorHelperLoose").colors.WHITE };
obj.fallbackImage = obj;
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
obj.fallbackImageV2 = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
obj.brandBackground = _createForOfIteratorHelperLoose;
obj.profileBackground = { backgroundColor: PROFILE_BACKGROUND };
obj.friendBackground = { backgroundColor: FRIEND_BACKGROUND };
obj.messageBackground = { backgroundColor: MESSAGE_BACKGROUND };
obj.guildGridBackground = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
const memoResult = importAllResult.memo((item) => {
  item = item.item;
  const compactMode = item.compactMode;
  let id;
  let stateFromStores;
  const tmp = callback(compactMode);
  analyticsLocations = compactMode(analyticsLocations[20])().analyticsLocations;
  const tmp2 = callback2();
  const other_user = item.other_user;
  id = undefined;
  if (null != other_user) {
    id = other_user.id;
  }
  let obj = item(analyticsLocations[21]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_7.getUser(id));
  const items1 = [stateFromStores, compactMode, , , , ];
  ({ acked: arr2[2], guild_id: arr2[3], message_id: arr2[4] } = item);
  items1[5] = analyticsLocations;
  const memo = id.useMemo(() => {
    if (null == stateFromStores) {
      return null;
    } else {
      let tmpResult = {
        onPress() {
            compactMode(analyticsLocations[23])({ userId: outer1_4.id, localUser: outer1_4, messageId: outer1_0.message_id, sourceAnalyticsLocations: outer1_2 });
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
      let tmp69 = analyticsLocations[13];
    } else {
      tmp69 = analyticsLocations[14];
    }
    obj.source = compactMode(tmp69);
    obj.color = tmp2.fallbackImage.color;
    jsx(item(analyticsLocations[17]).Icon, {});
    const brandBackground2 = tmp2.brandBackground;
    const tmp64 = jsx;
    const tmp67 = compactMode;
  } else {
    if (null != item.icon_url) {
      let tmp30 = memo;
      let brandBackground = null;
      if (null == memo) {
        obj = { style: tmp.rowImage };
        const obj1 = { uri: item.icon_url };
        obj.source = obj1;
        obj.resizeMode = "contain";
        tmp30 = jsx(compactMode(analyticsLocations[15]), { style: tmp.rowImage });
        brandBackground = tmp2.brandBackground;
      }
    } else {
      tmp30 = memo;
      brandBackground = null;
      if (null == memo) {
        if ("lifecycle_item" === item.type) {
          const item_enum = item.item_enum;
          if (item_enum === item(analyticsLocations[9]).ItemEnum.UPDATE_PROFILE) {
            const obj2 = { source: compactMode(analyticsLocations[16]) };
            let tmp41 = jsx(compactMode(analyticsLocations[15]), { source: compactMode(analyticsLocations[16]) });
            const tmp53 = compactMode(analyticsLocations[15]);
          } else {
            if (item_enum !== item(analyticsLocations[9]).ItemEnum.FIND_FRIENDS) {
              if (item_enum !== item(analyticsLocations[9]).ItemEnum.ADD_FRIEND) {
                if (item_enum === item(analyticsLocations[9]).ItemEnum.FIRST_MESSAGE) {
                  let obj3 = { source: compactMode(analyticsLocations[19]) };
                  const obj4 = { width: "105%" };
                  obj3.style = obj4;
                  tmp41 = jsx(compactMode(analyticsLocations[15]), { source: compactMode(analyticsLocations[19]) });
                  const tmp45 = compactMode(analyticsLocations[15]);
                } else {
                  const obj5 = { source: compactMode(analyticsLocations[14]) };
                  tmp41 = jsx(item(analyticsLocations[17]).Icon, { source: compactMode(analyticsLocations[14]) });
                }
              }
            }
            const obj6 = { source: compactMode(analyticsLocations[18]), size: item(analyticsLocations[17]).IconSizes.SMALL_20, color: compactMode(analyticsLocations[8]).unsafe_rawColors.WHITE };
            tmp41 = jsx(item(analyticsLocations[17]).Icon, { source: compactMode(analyticsLocations[18]), size: item(analyticsLocations[17]).IconSizes.SMALL_20, color: compactMode(analyticsLocations[8]).unsafe_rawColors.WHITE });
          }
          const item_enum2 = item.item_enum;
          if (item_enum2 === item(analyticsLocations[9]).ItemEnum.UPDATE_PROFILE) {
            let friendBackground = tmp2.profileBackground;
          } else {
            if (item_enum2 !== item(analyticsLocations[9]).ItemEnum.FIND_FRIENDS) {
              if (item_enum2 !== item(analyticsLocations[9]).ItemEnum.ADD_FRIEND) {
                friendBackground = item_enum2 === item(analyticsLocations[9]).ItemEnum.FIRST_MESSAGE ? tmp2.messageBackground : tmp2.brandBackground;
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
        } else if (item.type === item(analyticsLocations[9]).NotificationCenterItems.REFERRAL_PROGRAM_ENTRYPOINT_REMINDER) {
          const obj7 = { source: compactMode(analyticsLocations[25]), style: tmp.rowImage, resizeMode: "contain" };
          tmp30 = jsx(compactMode(analyticsLocations[15]), { source: compactMode(analyticsLocations[25]), style: tmp.rowImage, resizeMode: "contain" });
          brandBackground = tmp2.brandBackground;
          const tmp34 = compactMode(analyticsLocations[15]);
        } else {
          guild = guild.getGuild(item.guild_id);
          let tmp7 = null;
          if (null != guild) {
            tmp7 = getGuildAcronym(guild);
          }
          const type = item.type;
          if (item(analyticsLocations[9]).NotificationCenterItems.MISSED_MESSAGES === type) {
            const obj8 = { icon: compactMode(analyticsLocations[10]), color: tmp2.fallbackImage.color };
            let obj11 = obj8;
          } else if (item(analyticsLocations[9]).NotificationCenterItems.FRIEND_REQUEST_REMINDER === type) {
            const obj9 = { icon: compactMode(analyticsLocations[11]), color: tmp2.fallbackImage.color };
            obj11 = obj9;
          } else {
            if (item(analyticsLocations[9]).NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED !== type) {
              if (item(analyticsLocations[9]).NotificationCenterItems.TOP_MESSAGES !== type) {
                if (item(analyticsLocations[9]).NotificationCenterItems.MISSED_MESSAGES !== type) {
                  if (item(analyticsLocations[9]).NotificationCenterItems.TOP_MESSAGES === type) {
                    const obj10 = { icon: compactMode(analyticsLocations[13]), color: tmp2.fallbackImage.color };
                    obj11 = obj10;
                  } else {
                    obj11 = { icon: compactMode(analyticsLocations[14]), color: tmp2.fallbackImage.color };
                  }
                }
              }
            }
            const obj12 = { icon: compactMode(analyticsLocations[12]), color: tmp2.fallbackImageV2.color, backgroundStyle: tmp2.guildGridBackground };
            obj11 = obj12;
          }
          if (obj11.icon === compactMode(analyticsLocations[12])) {
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
              let tmp26Result = jsx(item(analyticsLocations[26]).Text, {});
              const tmp26 = jsx;
            }
            brandBackground = obj11.backgroundStyle;
            if (null == brandBackground) {
              brandBackground = tmp2.brandBackground;
            }
            tmp30 = tmp26Result;
          }
          ({ icon: obj7.source, color: obj7.color } = obj11);
          tmp26Result = jsx(item(analyticsLocations[17]).Icon, {});
          const obj14 = {};
        }
      }
    }
    const obj15 = {};
    const items3 = [tmp.container, brandBackground];
    obj15.style = items3;
    obj15.children = tmp30;
    return <stateFromStores />;
  }
});
let result = require("isGuildOwner").fileFinishedImporting("modules/notification_center/native/ForYouItemImage.tsx");

export const ForYouItemImage = memoResult;
