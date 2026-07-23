// Module ID: 10597
// Function ID: 82672
// Name: ActivityTileInner
// Dependencies: [5, 57, 31, 27, 1347, 1849, 653, 1277, 4155, 33, 1273, 4130, 689, 566, 1327, 5470, 4319, 3969, 10598, 5464, 5484, 9383, 1212, 10520, 10522, 10600, 10519, 4660, 10601, 10613, 4126, 4544, 3842, 2]
// Exports: default

// Module 10597 (ActivityTileInner)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import "CollapsingText";
import { View } from "PressableBase";
import closure_6 from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";
import { ActivityLayoutMode } from "items3";
import jsxProd from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
const require = arg1;
function ActivityTileInner(participant) {
  participant = participant.participant;
  const channel = participant.channel;
  const onSingleTap = participant.onSingleTap;
  let first;
  let stateFromStores;
  let analyticsLocations;
  let closure_6;
  let embeddedActivityJoinability;
  function handleCanJoin() {
    return _handleCanJoin(...arguments);
  }
  function _handleCanJoin() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = first(tmp);
    return obj(...arguments);
  }
  function handleTileOrButtonPress() {
    channel(onSingleTap[26])({ embeddedActivityJoinability, handleCanJoin });
    if (null != onSingleTap) {
      onSingleTap();
    }
  }
  const tmp = _createForOfIteratorHelperLoose();
  let items = [participant.applicationId];
  first = stateFromStores(channel(onSingleTap[15])(items), 1)[0];
  const arr2 = (function useUsersForActivityParticipant(participant) {
    let closure_0 = participant;
    const items = [embeddedActivityJoinability];
    return participant(onSingleTap[13]).useStateFromStoresArray(items, () => {
      const mapped = Array.from(participant.participants).map((userId) => embeddedActivityJoinability.getUser(userId.userId));
      return mapped.filter(participant(onSingleTap[14]).isNotNullish);
    });
  })(participant);
  let obj = channel(onSingleTap[16]);
  let first1;
  let guildId = channel.getGuildId();
  if (null != arr2) {
    first1 = arr2[0];
  }
  let name = obj.getName(guildId, channel.id, first1);
  if (null == name) {
    let obj1 = channel(onSingleTap[17]);
    let first2;
    if (null != arr2) {
      first2 = arr2[0];
    }
    name = obj1.getName(first2);
  }
  const tmp9 = channel(onSingleTap[18])();
  let obj2 = participant(onSingleTap[13]);
  const items1 = [closure_6];
  stateFromStores = obj2.useStateFromStores(items1, () => {
    embeddedActivitiesForChannelIncludingHidden = embeddedActivitiesForChannelIncludingHidden.getEmbeddedActivitiesForChannelIncludingHidden(channel.id);
    return embeddedActivitiesForChannelIncludingHidden.find((applicationId) => {
      let id;
      if (null != outer1_3) {
        id = outer1_3.id;
      }
      return applicationId.applicationId === id;
    });
  });
  analyticsLocations = channel(onSingleTap[19])(channel(onSingleTap[20]).ACTIVITY_TILE).analyticsLocations;
  let obj3 = participant(onSingleTap[21]);
  closure_6 = obj3.useAnalyticsContext();
  let name1;
  if (null != first) {
    name1 = first.name;
  }
  if (null == name1) {
    const intl = participant(onSingleTap[22]).intl;
    name1 = intl.string(participant(onSingleTap[22]).t.WCNe7F);
  }
  const currentUser = embeddedActivityJoinability.getCurrentUser();
  if (null != currentUser) {
    let id = currentUser.id;
  }
  let tmp16 = null != tmp9;
  if (tmp16) {
    id = undefined;
    if (null != first) {
      id = first.id;
    }
    tmp16 = tmp9.id === id;
  }
  if (!tmp16) {
    let tmp18 = null != id;
    if (tmp18) {
      let hasItem;
      if (null != stateFromStores) {
        const userIds = stateFromStores.userIds;
        hasItem = userIds.has(id);
      }
      tmp18 = hasItem;
    }
    tmp16 = tmp18;
  }
  let obj4 = participant(onSingleTap[23]);
  obj = {};
  const currentUser1 = embeddedActivityJoinability.getCurrentUser();
  let id1;
  if (null != currentUser1) {
    id1 = currentUser1.id;
  }
  obj.userId = id1;
  obj.channelId = channel.id;
  obj.application = first;
  embeddedActivityJoinability = obj4.useEmbeddedActivityJoinability(obj);
  if (arr2.length > 1) {
    const intl3 = participant(onSingleTap[22]).intl;
    obj = { username: name, count: arr2.length - 1 };
    let formatToPlainStringResult = intl3.formatToPlainString(participant(onSingleTap[22]).t.cpe6CK, obj);
  } else {
    const intl2 = participant(onSingleTap[22]).intl;
    obj1 = { username: name };
    formatToPlainStringResult = intl2.formatToPlainString(participant(onSingleTap[22]).t["7Uuia2"], obj1);
  }
  if (tmp16) {
    obj2 = { pointerEvents: "box-only", style: tmp.activityViewContainer, onPress: onSingleTap, activeOpacity: 1 };
    obj3 = { channel, layoutMode: _handleCanJoin.PIP };
    obj2.children = callback(channel(onSingleTap[28]), obj3);
    let tmp28Result = callback(participant(onSingleTap[27]).PressableOpacity, obj2);
  } else {
    obj4 = { accessibilityRole: "button" };
    const intl4 = participant(onSingleTap[22]).intl;
    const obj5 = { applicationName: name1 };
    obj4.accessibilityLabel = intl4.formatToPlainString(participant(onSingleTap[22]).t.Yw5Hr2, obj5);
    obj4.androidRippleConfig = closure_13;
    obj4.onPress = handleTileOrButtonPress;
    obj4.style = tmp.pressableOpacity;
    const obj6 = { application: first, resizeMode: "cover" };
    const items2 = [callback(channel(onSingleTap[29]), obj6), ];
    const obj7 = {};
    const items3 = [tmp.activityPreview, participant.style];
    obj7.style = items3;
    const obj8 = {
      offsetAmount: -6,
      overflowStyle: tmp.overflow,
      overflowComponent: participant(onSingleTap[10]).OverflowText,
      items: arr2,
      max: 4,
      renderItem(user) {
          let obj = { user };
          const guildId = participant.guildId;
          let tmp2;
          if (null != guildId) {
            tmp2 = guildId;
          }
          obj.guildId = tmp2;
          obj.size = outer1_12;
          let tmp3;
          if (!arg1) {
            obj = { radius: participant(onSingleTap[10]).AVATAR_SIZE_MAP[outer1_12] / 2 + 3, direction: participant(onSingleTap[10]).CutoutDirection.RIGHT, inset: -6 };
            tmp3 = obj;
          }
          obj.cutout = tmp3;
          return outer1_10(participant(onSingleTap[10]).CutoutableAvatarImage, obj);
        }
    };
    const items4 = [callback(participant(onSingleTap[10]).SummarizedIconRow, obj8), , , ];
    const obj9 = { style: tmp.subtitleText, lineClamp: 2, variant: "text-sm/normal", children: formatToPlainStringResult };
    items4[1] = callback(participant(onSingleTap[30]).Text, obj9);
    const obj10 = { style: tmp.titleText, children: name1 };
    items4[2] = callback(participant(onSingleTap[10]).LegacyText, obj10);
    let tmp39 = null;
    if (embeddedActivityJoinability === participant(onSingleTap[23]).EmbeddedActivityJoinability.CAN_JOIN) {
      const obj11 = { style: tmp.buttonWrapper };
      const obj12 = { onPress: handleTileOrButtonPress, pillStyle: tmp.buttonPill };
      const intl5 = participant(onSingleTap[22]).intl;
      obj12.text = intl5.string(participant(onSingleTap[22]).t["4i2vj+"]);
      obj12.variant = "secondary";
      obj11.children = callback(participant(onSingleTap[31]).BaseTextButton, obj12);
      tmp39 = callback(analyticsLocations, obj11);
    }
    items4[3] = tmp39;
    obj7.children = items4;
    items2[1] = closure_11(analyticsLocations, obj7);
    obj4.children = items2;
    tmp28Result = closure_11(participant(onSingleTap[27]).PressableOpacity, obj4);
    const tmp28 = closure_11;
    const tmp34 = closure_11;
    const tmp35 = analyticsLocations;
  }
  return tmp28Result;
}
const ThemeTypes = ME.ThemeTypes;
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const XSMALL = require("Button").AvatarSizes.XSMALL;
const themedRippleConfig = require("semanticColor").getThemedRippleConfig({ foreground: true });
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { width: "100%", height: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.pressableOpacity = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.activityPreview = { alignItems: "center", display: "flex", width: "100%", padding: 16 };
_createForOfIteratorHelperLoose.activityViewContainer = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
let obj2 = { fontSize: 16, lineHeight: 24, color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, fontFamily: ME.Fonts.DISPLAY_EXTRABOLD, textAlign: "center", marginLeft: 16, marginRight: 16 };
_createForOfIteratorHelperLoose.titleText = obj2;
_createForOfIteratorHelperLoose.subtitleText = { textAlign: "center", marginLeft: 16, marginRight: 16 };
let obj1 = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.overflow = { height: require("Button").AVATAR_SIZE_MAP[XSMALL], backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL };
_createForOfIteratorHelperLoose.buttonWrapper = { marginTop: 8, alignSelf: "center" };
_createForOfIteratorHelperLoose.buttonPill = { borderRadius: 100 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { height: require("Button").AVATAR_SIZE_MAP[XSMALL], backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL };
const result = require("result").fileFinishedImporting("modules/video_calls/native/components/ActivityTile.tsx");

export default function ActivityTile(arg0) {
  let obj = { theme: ThemeTypes.DARK };
  obj = {};
  const merged = Object.assign(arg0);
  obj.children = callback(ActivityTileInner, obj);
  return callback(require(3842) /* ManaContext */.ThemeContextProvider, obj);
};
