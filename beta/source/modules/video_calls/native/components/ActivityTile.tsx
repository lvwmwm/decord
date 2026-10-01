// Module ID: 8911
// Function ID: 8912
// Name: ActivityTile
// Dependencies: [5, 32, 19, 17, 2044, 1372, 1074, 1181, 2005, 21, 1177, 4836, 576, 504, 1370, 6589, 4988, 4678, 8912, 6583, 6603, 8895, 1115, 8825, 8826, 8914, 8824, 5435, 8915, 8932, 4832, 5282, 4540, 2]
// Exports: default

// Module 8911 (ActivityTile)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import FormConstants from "FormConstants" /* 1181 */;
import Constants2 from "Constants" /* 2005 */;
import native2 from "native" /* 4540 */;
import handlePressJoinActivityDefault from "handlePressJoinActivity" /* 8824 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let applicationId, c2;

let Fonts;
let c10;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let size;
let unpackModuleId;
function ActivityTileInner(participant) {
  let BaseTextButton;
  let formatToPlainStringResult;
  let id2;
  let intl4;
  let intl5;
  let items3;
  let items4;
  let items5;
  let obj16;
  let obj7;
  let obj9;
  let tmp26Result;
  participant = participant.participant;
  const channel = participant.channel;
  const onSingleTap = participant.onSingleTap;
  let stateFromStores;
  let analyticsLocations;
  let closure_6;
  let embeddedActivityJoinability;
  function handleCanJoin() {
    return obj(...arguments);
  }
  let obj = function _handleCanJoin() {
    let _location;
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let v1;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === id) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let tmp11 = null != stateFromStores;
              const tmp21 = stateFromStores;
              if (tmp11) {
                tmp11 = null != application;
              }
              if (tmp11) {
                const obj4 = { applicationId: tmp21.applicationId, activityChannelId: id.id, locationObject: _location.location, analyticsLocations };
                id = 1;
                c2 = 1;
                const obj5 = { value: id(c2[24])(obj4), done: false };
                return obj5;
              }
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            obj = tmp(c2[25]);
            const result = obj.setOrientationLockState(closure_128_3);
          }
          c2 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp17) {
          c2 = 3;
          throw tmp17;
        }
      }
    });
    return obj(...arguments);
  };
  const style = participant.style;
  let tmp = closure_14();
  const tmp3 = onSingleTap;
  const items = [participant.applicationId];
  const application = stateFromStores(channel(onSingleTap[15])(items), 1)[0];
  let tmp5 = participant;
  obj = participant(onSingleTap[13]);
  let obj2 = embeddedActivityJoinability;
  const items1 = [embeddedActivityJoinability];
  const stateFromStoresArray = obj.useStateFromStoresArray(items1, () => {
    let user;
    const arr = Array.from(participant.participants);
    const mapped = arr.map((userId) => user.getUser(userId.userId));
    return mapped.filter(participant(onSingleTap[14]).isNotNullish);
  });
  const getName = channel(onSingleTap[16]).getName;
  let first1;
  const tmp6 = channel(onSingleTap[16]);
  let guildId = channel.getGuildId();
  let id = channel.id;
  if (stateFromStoresArray != null) {
    first1 = stateFromStoresArray[0];
  }
  let name = getName(guildId, id, first1);
  if (name == null) {
    let first2;
    const getName2 = tmp2(tmp3[17]).getName;
    channel(tmp3[17]);
    if (stateFromStoresArray != null) {
      first2 = stateFromStoresArray[0];
    }
    name = getName2(first2);
  }
  const tmp12 = channel(tmp3[18])();
  const items2 = [closure_6];
  const tmp5Result = tmp5(tmp3[13]);
  stateFromStores = tmp5Result.useStateFromStores(items2, () => {
    const embeddedActivitiesForChannelIncludingHidden = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannelIncludingHidden(channel.id);
    return embeddedActivitiesForChannelIncludingHidden.find((applicationId) => {
      id = undefined;
      applicationId = applicationId.applicationId;
      if (id != null) {
        id = id.id;
      }
      return applicationId === id;
    });
  });
  const tmp2Result2 = channel(tmp3[19]);
  analyticsLocations = tmp2Result2(tmp2(tmp3[20]).ACTIVITY_TILE).analyticsLocations;
  const tmp5Result3 = tmp5(tmp3[21]);
  closure_6 = tmp5Result3.useAnalyticsContext();
  let name1;
  if (application != null) {
    name1 = application.name;
  }
  if (name1 == null) {
    const intl = tmp5(tmp3[22]).intl;
    name1 = intl.string(tmp5(tmp3[22]).t.WCNe7F);
  }
  const currentUser = obj2.getCurrentUser();
  if (currentUser != null) {
    id2 = currentUser.id;
  }
  let tmp17 = null != tmp12;
  if (tmp17) {
    let id1;
    const id3 = tmp12.id;
    if (application != null) {
      id1 = application.id;
    }
    tmp17 = id3 === id1;
  }
  if (!tmp17) {
    let tmp19 = null != id2;
    if (tmp19) {
      let hasItem;
      if (stateFromStores != null) {
        const userIds = stateFromStores.userIds;
        hasItem = userIds.has(id2);
      }
      tmp19 = hasItem;
    }
    tmp17 = tmp19;
  }
  const useEmbeddedActivityJoinability = tmp5(tmp3[23]).useEmbeddedActivityJoinability;
  tmp5(tmp3[23]);
  const currentUser1 = obj2.getCurrentUser();
  let id4;
  if (currentUser1 != null) {
    id4 = currentUser1.id;
  }
  let obj3 = { userId: id4, channelId: channel.id, application };
  embeddedActivityJoinability = useEmbeddedActivityJoinability(obj3);
  const CAN_JOIN = tmp5(tmp3[23]).EmbeddedActivityJoinability.CAN_JOIN;
  if (stateFromStoresArray.length > 1) {
    const intl3 = tmp5(tmp3[22]).intl;
    let obj4 = { username: name, count: stateFromStoresArray.length - 1 };
    formatToPlainStringResult = intl3.formatToPlainString(tmp5(tmp3[22]).t.cpe6CK, obj4);
  } else {
    const intl2 = tmp5(tmp3[22]).intl;
    let obj5 = { username: name };
    formatToPlainStringResult = intl2.formatToPlainString(tmp5(tmp3[22]).t["7Uuia2"], obj5);
  }
  if (tmp17) {
    let obj6 = { pointerEvents: "box-only", style: tmp.activityViewContainer, onPress: onSingleTap, activeOpacity: 1, children: closure_10(tmp2(tmp3[28]), obj7) };
    const PressableOpacity2 = tmp5(tmp3[27]).PressableOpacity;
    obj7 = { channel, layoutMode: obj.PIP };
    tmp26Result = closure_10(PressableOpacity2, obj6);
  } else {
    function handleTileOrButtonPress() {
      obj = { embeddedActivityJoinability, handleCanJoin };
      handlePressJoinActivityDefault(obj);
      if (onSingleTap != null) {
        onSingleTap();
      }
    }
    const obj8 = { accessibilityRole: "button", accessibilityLabel: intl4.formatToPlainString(tmp5(tmp3[22]).t.Yw5Hr2, obj9), androidRippleConfig, onPress: handleTileOrButtonPress, style: tmp.pressableOpacity, children: items3 };
    const PressableOpacity = tmp5(tmp3[27]).PressableOpacity;
    intl4 = tmp5(tmp3[22]).intl;
    const obj10 = { application, resizeMode: "cover" };
    obj9 = { applicationName: name1 };
    items3 = [closure_10(tmp2(tmp3[29]), obj10), ];
    const obj11 = { style: items4, children: items5 };
    items4 = [tmp.activityPreview, style];
    const obj12 = {
      offsetAmount: -6,
      overflowStyle: tmp.overflow,
      overflowComponent: tmp5(tmp3[10]).OverflowText,
      items: stateFromStoresArray,
      max: 4,
      renderItem(user, arg1) {
          let guildId;
          let tmp5;
          obj = { user, guildId, size: XSMALL, cutout: tmp5 };
          guildId = participant.guildId;
          const CutoutableAvatarImage = native.CutoutableAvatarImage;
          tmp5 = undefined;
          const tmp = authStore;
          if (!arg1) {
            tmp5 = { radius: native.AVATAR_SIZE_MAP[tmp4] / 2 + 3, direction: native.CutoutDirection.RIGHT, inset: -6 };
            const obj2 = { radius: native.AVATAR_SIZE_MAP[tmp4] / 2 + 3, direction: native.CutoutDirection.RIGHT, inset: -6 };
          }
          return tmp(CutoutableAvatarImage, obj);
        }
    };
    const SummarizedIconRow = tmp5(tmp3[10]).SummarizedIconRow;
    items5 = [closure_10(SummarizedIconRow, obj12), , , ];
    const obj13 = { style: tmp.subtitleText, lineClamp: 2, variant: "text-sm/normal", children: formatToPlainStringResult };
    items5[1] = closure_10(tmp5(tmp3[30]).Text, obj13);
    const obj14 = { style: tmp.titleText, children: name1 };
    items5[2] = closure_10(tmp5(tmp3[10]).LegacyText, obj14);
    let tmp28Result = null;
    if (embeddedActivityJoinability === CAN_JOIN) {
      const obj15 = { style: tmp.buttonWrapper, children: closure_10(BaseTextButton, obj16) };
      obj16 = { onPress: handleTileOrButtonPress, pillStyle: tmp.buttonPill, text: intl5.string(tmp5(tmp3[22]).t["4i2vj+"]), variant: "secondary" };
      BaseTextButton = tmp5(tmp3[31]).BaseTextButton;
      intl5 = tmp5(tmp3[22]).intl;
      tmp28Result = tmp28(tmp29, obj15);
    }
    items5[3] = tmp28Result;
    items3[1] = closure_11(analyticsLocations, obj11);
    tmp26Result = tmp26(PressableOpacity, obj8);
  }
  return tmp26Result;
}
const View = react_native.View;
({ ThemeTypes: metroImportAll, Fonts } = Constants);
const getThemedRippleConfig = FormConstants.getThemedRippleConfig;
const ActivityLayoutMode = Constants2.ActivityLayoutMode;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const XSMALL = native.AvatarSizes.XSMALL;
const androidRippleConfig = getThemedRippleConfig({ foreground: true });
let createStyles = createStyles_mod;
let obj = { pressableOpacity: size, activityPreview: { alignItems: "center", display: "flex", width: "100%", padding: 16 }, activityViewContainer: obj2, titleText: obj3, subtitleText: { textAlign: "center", marginLeft: 16, marginRight: 16 }, overflow: obj4, buttonWrapper: { marginTop: 8, alignSelf: "center" }, buttonPill: { borderRadius: 100 } };
size = { width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, justifyContent: "center", alignItems: "center" };
createStyles = createStyles.createStyles;
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj3 = { fontSize: 16, lineHeight: 24, color: nativeDefault.colors.TEXT_DEFAULT, fontFamily: Fonts.DISPLAY_EXTRABOLD, textAlign: "center", marginLeft: 16, marginRight: 16 };
obj4 = { height: native.AVATAR_SIZE_MAP[XSMALL], backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let closure_14 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/video_calls/native/components/ActivityTile.tsx");

export default function ActivityTile(arg0) {
  let obj2;
  const obj = { theme: metroImportAll.DARK, children: authStore(ActivityTileInner, obj2) };
  obj2 = {};
  const ThemeContextProvider = native2.ThemeContextProvider;
  const merged = Object.assign(arg0);
  return authStore(ThemeContextProvider, obj);
};
