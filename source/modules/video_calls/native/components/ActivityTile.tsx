// Module ID: 10586
// Function ID: 82598
// Name: ActivityTileInner
// Dependencies: []
// Exports: default

// Module 10586 (ActivityTileInner)
function ActivityTileInner(participant) {
  participant = participant.participant;
  const arg1 = participant;
  const channel = participant.channel;
  const importDefault = channel;
  const onSingleTap = participant.onSingleTap;
  const dependencyMap = onSingleTap;
  let closure_3;
  let callback;
  let View;
  let closure_6;
  let authStore;
  function handleCanJoin() {
    return _handleCanJoin(...arguments);
  }
  function _handleCanJoin() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = first(tmp);
    const _handleCanJoin = obj;
    return obj(...arguments);
  }
  function handleTileOrButtonPress() {
    channel(onSingleTap[26])({ embeddedActivityJoinability, handleCanJoin });
    if (null != onSingleTap) {
      onSingleTap();
    }
  }
  const tmp = callback3();
  const items = [participant.applicationId];
  const first = callback(importDefault(dependencyMap[15])(items), 1)[0];
  closure_3 = first;
  const arr2 = function useUsersForActivityParticipant(participant) {
    const items = [embeddedActivityJoinability];
    return participant(onSingleTap[13]).useStateFromStoresArray(items, () => {
      const mapped = Array.from(arg0.participants).map((userId) => user.getUser(userId.userId));
      return mapped.filter(arg0(closure_2[14]).isNotNullish);
    });
  }(participant);
  let obj = importDefault(dependencyMap[16]);
  let first1;
  const guildId = channel.getGuildId();
  if (null != arr2) {
    first1 = arr2[0];
  }
  let name = obj.getName(guildId, channel.id, first1);
  if (null == name) {
    let obj1 = importDefault(dependencyMap[17]);
    let first2;
    if (null != arr2) {
      first2 = arr2[0];
    }
    name = obj1.getName(first2);
  }
  const tmp9 = importDefault(dependencyMap[18])();
  let obj2 = arg1(dependencyMap[13]);
  const items1 = [closure_6];
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    const embeddedActivitiesForChannelIncludingHidden = embeddedActivitiesForChannelIncludingHidden.getEmbeddedActivitiesForChannelIncludingHidden(channel.id);
    return embeddedActivitiesForChannelIncludingHidden.find((applicationId) => {
      let id;
      if (null != id) {
        id = id.id;
      }
      return applicationId.applicationId === id;
    });
  });
  callback = stateFromStores;
  View = importDefault(dependencyMap[19])(importDefault(dependencyMap[20]).ACTIVITY_TILE).analyticsLocations;
  let obj3 = arg1(dependencyMap[21]);
  closure_6 = obj3.useAnalyticsContext();
  let name1;
  if (null != first) {
    name1 = first.name;
  }
  if (null == name1) {
    const intl = arg1(dependencyMap[22]).intl;
    name1 = intl.string(arg1(dependencyMap[22]).t.WCNe7F);
  }
  const currentUser = authStore.getCurrentUser();
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
  let obj4 = arg1(dependencyMap[23]);
  obj = {};
  const currentUser1 = authStore.getCurrentUser();
  let id1;
  if (null != currentUser1) {
    id1 = currentUser1.id;
  }
  obj.userId = id1;
  obj.channelId = channel.id;
  obj.application = first;
  const embeddedActivityJoinability = obj4.useEmbeddedActivityJoinability(obj);
  authStore = embeddedActivityJoinability;
  if (arr2.length > 1) {
    const intl3 = arg1(dependencyMap[22]).intl;
    obj = { username: name, count: arr2.length - 1 };
    let formatToPlainStringResult = intl3.formatToPlainString(arg1(dependencyMap[22]).t.cpe6CK, obj);
  } else {
    const intl2 = arg1(dependencyMap[22]).intl;
    obj1 = { username: name };
    formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[22]).t.7Uuia2, obj1);
  }
  if (tmp16) {
    obj2 = { pointerEvents: "box-only", style: tmp.activityViewContainer, onPress: onSingleTap, activeOpacity: 1 };
    obj3 = { channel, layoutMode: _handleCanJoin.PIP };
    obj2.children = callback2(importDefault(dependencyMap[28]), obj3);
    let tmp28Result = callback2(arg1(dependencyMap[27]).PressableOpacity, obj2);
  } else {
    obj4 = { accessibilityRole: "button" };
    const intl4 = arg1(dependencyMap[22]).intl;
    const obj5 = { applicationName: name1 };
    obj4.accessibilityLabel = intl4.formatToPlainString(arg1(dependencyMap[22]).t.Yw5Hr2, obj5);
    obj4.androidRippleConfig = closure_13;
    obj4.onPress = handleTileOrButtonPress;
    obj4.style = tmp.pressableOpacity;
    const obj6 = { application: first, resizeMode: "cover" };
    const items2 = [callback2(importDefault(dependencyMap[29]), obj6), ];
    const obj7 = {};
    const items3 = [tmp.activityPreview, participant.style];
    obj7.style = items3;
    const obj8 = {
      offsetAmount: -6,
      overflowStyle: tmp.overflow,
      overflowComponent: arg1(dependencyMap[10]).OverflowText,
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
          obj.size = closure_12;
          let tmp3;
          if (!arg1) {
            obj = { radius: participant(onSingleTap[10]).AVATAR_SIZE_MAP[closure_12] / 2 + 3, direction: participant(onSingleTap[10]).CutoutDirection.RIGHT, inset: -6 };
            tmp3 = obj;
          }
          obj.cutout = tmp3;
          return closure_10(participant(onSingleTap[10]).CutoutableAvatarImage, obj);
        }
    };
    const items4 = [callback2(arg1(dependencyMap[10]).SummarizedIconRow, obj8), , , ];
    const obj9 = { style: tmp.subtitleText, children: formatToPlainStringResult };
    items4[1] = callback2(arg1(dependencyMap[30]).Text, obj9);
    const obj10 = { style: tmp.titleText, children: name1 };
    items4[2] = callback2(arg1(dependencyMap[10]).LegacyText, obj10);
    let tmp39 = null;
    if (embeddedActivityJoinability === arg1(dependencyMap[23]).EmbeddedActivityJoinability.CAN_JOIN) {
      const obj11 = { style: tmp.buttonWrapper };
      const obj12 = { onPress: handleTileOrButtonPress, pillStyle: tmp.buttonPill };
      const intl5 = arg1(dependencyMap[22]).intl;
      obj12.text = intl5.string(arg1(dependencyMap[22]).t.4i2vj+);
      obj12.variant = "secondary";
      obj11.children = callback2(arg1(dependencyMap[31]).BaseTextButton, obj12);
      tmp39 = callback2(View, obj11);
    }
    items4[3] = tmp39;
    obj7.children = items4;
    items2[1] = closure_11(View, obj7);
    obj4.children = items2;
    tmp28Result = closure_11(arg1(dependencyMap[27]).PressableOpacity, obj4);
    const tmp28 = closure_11;
    const tmp34 = closure_11;
    const tmp35 = View;
  }
  return tmp28Result;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const tmp3 = arg1(dependencyMap[6]);
const ThemeTypes = tmp3.ThemeTypes;
const ActivityLayoutMode = arg1(dependencyMap[8]).ActivityLayoutMode;
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[9]));
const XSMALL = arg1(dependencyMap[10]).AvatarSizes.XSMALL;
const themedRippleConfig = arg1(dependencyMap[7]).getThemedRippleConfig({ foreground: true });
let obj = arg1(dependencyMap[11]);
obj = {};
obj = { url: "a", oldFormErrors: "p", rejectWithError: "midnatt", retries: "middag", useAdaptiveCompression: "p\u00E5 morg.", backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_SURFACE_HIGH };
obj.pressableOpacity = obj;
obj.activityPreview = {};
const tmp4 = arg1(dependencyMap[9]);
obj.activityViewContainer = { flex: 1, backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_SURFACE_HIGH };
const obj1 = { flex: 1, backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_SURFACE_HIGH };
obj.titleText = { color: importDefault(dependencyMap[12]).colors.TEXT_DEFAULT, fontFamily: tmp3.Fonts.DISPLAY_EXTRABOLD };
obj.subtitleText = { "Null": null, "Null": null, "Null": null };
const obj2 = { color: importDefault(dependencyMap[12]).colors.TEXT_DEFAULT, fontFamily: tmp3.Fonts.DISPLAY_EXTRABOLD };
obj.overflow = { height: arg1(dependencyMap[10]).AVATAR_SIZE_MAP[XSMALL], backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_MOD_NORMAL };
obj.buttonWrapper = { "Bool(true)": null, "Bool(true)": null };
obj.buttonPill = { borderRadius: 100 };
let closure_14 = obj.createStyles(obj);
const obj3 = { height: arg1(dependencyMap[10]).AVATAR_SIZE_MAP[XSMALL], backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_MOD_NORMAL };
const result = arg1(dependencyMap[33]).fileFinishedImporting("modules/video_calls/native/components/ActivityTile.tsx");

export default function ActivityTile(arg0) {
  let obj = { theme: ThemeTypes.DARK };
  obj = {};
  const merged = Object.assign(arg0);
  obj.children = callback2(ActivityTileInner, obj);
  return callback2(arg1(dependencyMap[32]).ThemeContextProvider, obj);
};
