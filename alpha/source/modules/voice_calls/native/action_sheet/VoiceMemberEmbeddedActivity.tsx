// Module ID: 13527
// Function ID: 13528
// Name: VoiceMemberEmbeddedActivity
// Dependencies: [32, 19, 17, 2063, 2064, 1390, 1204, 6837, 21, 1200, 5091, 587, 558, 576, 6854, 1388, 504, 4698, 10880, 1497, 8147, 10883, 1126, 6163, 5087, 10921, 5377, 6191, 2]
// Exports: calculateActivityRowHeight

// Module 13527 (VoiceMemberEmbeddedActivity)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import FormConstants from "FormConstants" /* 1204 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6837 */;
import handlePressJoinActivityDefault from "handlePressJoinActivity" /* 10883 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2063 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import UserStore from "UserStore" /* 1390 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let applicationId;

let c10;
let c9;
let obj2;
let obj3;
let obj4;
let obj5;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const getThemedRippleConfig = FormConstants.getThemedRippleConfig;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
({ jsx: c9, jsxs: c10 } = Fragment);
const XSMALL = native.AvatarSizes.XSMALL;
const androidRippleConfig = getThemedRippleConfig({ foreground: true });
let size = { width: 32, height: 32, marginRight: 16, borderRadius: 4 };
let c13 = 1.7777777777777777;
let createStyles = createStyles_mod;
let obj = { voiceMemberItemRow: { paddingTop: 12, paddingBottom: 16, flexDirection: "column", display: "flex", justifyContent: "flex-start" }, innerRow: { paddingHorizontal: 16, alignItems: "center" }, activityDetails: { marginBottom: 8, flexDirection: "row", display: "flex" }, appIcon: size, appIconPlaceholder: obj2, centerGroup: { flex: 1, paddingRight: 4 }, applicationName: { lineHeight: 20 }, joinButton: { alignSelf: "center" }, joinButtonPill: { borderRadius: 100, paddingHorizontal: 24 }, joinButtonContainer: { alignItems: "center", justifyContent: "center", display: "flex", width: "100%", paddingHorizontal: 16 }, overflow: obj3, overflowBackgroundColor: obj4, overflowBackgroundColorActionSheet: obj5 };
obj2 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles = createStyles.createStyles;
const merged = Object.assign(size);
obj3 = { height: native.AVATAR_SIZE_MAP[XSMALL] };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_14 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceMemberEmbeddedActivity(onItemPress) {
  let application;
  let channelId;
  let embeddedActivity;
  let embeddedActivityJoinability;
  let embeddedActivityLocationGuildId;
  let handleCanJoin;
  let stateFromStores;
  let tmp11;
  let tmp13;
  let tmp15;
  let tmp23;
  let tmp5;
  let tmp = channelId;
  let tmp2 = application;
  let obj = channelId(application[13]);
  const cResult = obj.c(97);
  ({ embeddedActivity, channelId } = onItemPress);
  onItemPress = onItemPress.onItemPress;
  let tmp4 = closure_14();
  if (cResult[0] !== embeddedActivity.applicationId) {
    const items = [embeddedActivity.applicationId];
    cResult[0] = embeddedActivity.applicationId;
    cResult[1] = items;
    tmp5 = items;
  } else {
    tmp5 = cResult[1];
  }
  application = stateFromStores(onItemPress(tmp2[14])(tmp5), 1)[0];
  const tmp6 = onItemPress;
  if (cResult[2] !== embeddedActivity.userIds) {
    const _Array = Array;
    const arr = Array.from(embeddedActivity.userIds);
    const mapped = arr.map((item) => handleCanJoin.getUser(item));
    let found = mapped.filter(tmp(tmp2[15]).isNotNullish);
    cResult[2] = embeddedActivity.userIds;
    cResult[3] = found;
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [embeddedActivityJoinability];
    cResult[4] = items1;
    tmp11 = items1;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] !== channelId) {
    class E {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
    cResult[5] = channelId;
    cResult[6] = E;
    tmp13 = E;
  } else {
    class E {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
  }
  const tmpResult = tmp(tmp2[16]);
  stateFromStores = tmpResult.useStateFromStores(tmp11, tmp13);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
    const items2 = [embeddedActivityLocationGuildId];
    cResult[7] = items2;
    tmp15 = items2;
  } else {
    class E {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
  }
  const tmp16 = cResult[8];
  if (application != null) {
    class E {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
  }
  if (tmp16 === undefined) {
    let tmp18;
    class E {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
    const tmpResult3 = tmp(tmp2[16]);
    const stateFromStores1 = tmpResult3.useStateFromStores(tmp15, T);
    if (cResult[11] !== embeddedActivity.location) {
      class E {
        constructor() {
          return ChannelStore.getChannel(channelId);
        }
      }
      embeddedActivityLocationGuildId = obj4.getEmbeddedActivityLocationGuildId(embeddedActivity.location);
      cResult[11] = embeddedActivity.location;
      cResult[12] = embeddedActivityLocationGuildId;
      tmp18 = embeddedActivityLocationGuildId;
    } else {
      class E {
        constructor() {
          return ChannelStore.getChannel(channelId);
        }
      }
    }
    embeddedActivityLocationGuildId = tmp18;
    const _Symbol = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor() {
          return ChannelStore.getChannel(channelId);
        }
      }
      const currentUser = UserStore.getCurrentUser();
      if (currentUser != null) {
        class E {
          constructor() {
            return ChannelStore.getChannel(channelId);
          }
        }
      }
      cResult[13] = undefined;
    } else {
      class E {
        constructor() {
          return ChannelStore.getChannel(channelId);
        }
      }
    }
    if (cResult[14] === application) {
      class E {
        constructor() {
          return ChannelStore.getChannel(channelId);
        }
      }
      const tmpResult4 = tmp(tmp2[18]);
      embeddedActivityJoinability = tmpResult4.useEmbeddedActivityJoinability(tmp23);
      const _Math = Math;
      const bound = Math.min(ACTION_SHEET_MAX_WIDTH, tmp6(tmp2[19])().width);
      if (cResult[17] !== bound) {
        class E {
          constructor() {
            return ChannelStore.getChannel(channelId);
          }
        }
        const sum = 40 + (bound - 32) / c13 + 12 + 16;
        cResult[17] = bound;
        cResult[18] = sum;
      } else {
        class E {
          constructor() {
            return ChannelStore.getChannel(channelId);
          }
        }
      }
      if (null != application) {
        class E {
          constructor() {
            return ChannelStore.getChannel(channelId);
          }
        }
      }
      return null;
    }
    let obj2 = { userId: tmp20, channelId, application };
    cResult[14] = application;
    cResult[15] = channelId;
    cResult[16] = obj2;
    tmp23 = obj2;
  }
  if (application != null) {
    class E {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
  }
  class T {
    constructor() {
      found = null;
      if (null != closure_3) {
        tmp3 = closure_5;
        embeddedActivitiesForChannel = closure_5.getEmbeddedActivitiesForChannel(tmp.id);
        found = embeddedActivitiesForChannel.find((applicationId) => {
          id = undefined;
          applicationId = applicationId.applicationId;
          if (id != null) {
            id = id.id;
          }
          return applicationId === id;
        });
      }
      return found;
    }
  }
  cResult[8] = undefined;
  cResult[9] = stateFromStores;
  cResult[10] = T;
}) : (function VoiceMemberEmbeddedActivity(onItemPress) {
  let channelId;
  let closure_3;
  let embeddedActivity;
  let intl;
  let intl2;
  let items3;
  let items4;
  let items5;
  let items7;
  let items8;
  let items9;
  let obj11;
  let obj5;
  let obj6;
  let tmp17Result;
  ({ embeddedActivity, channelId } = onItemPress);
  onItemPress = onItemPress.onItemPress;
  let application;
  _slicedToArray = undefined;
  let guildId;
  let embeddedActivityJoinability;
  function handleCanJoin() {
    onItemPress(closure_3, first, stateFromStores);
  }
  const isActionSheet = onItemPress.isActionSheet;
  let tmp = closure_14();
  let tmp2 = onItemPress;
  let tmp3 = application;
  const items = [embeddedActivity.applicationId];
  application = _slicedToArray(onItemPress(application[14])(items), 1)[0];
  const arr = Array.from(embeddedActivity.userIds);
  const mapped = arr.map((item) => handleCanJoin.getUser(item));
  let tmp4 = channelId;
  let found = mapped.filter(channelId(application[15]).isNotNullish);
  let obj2 = channelId(application[16]);
  const items1 = [embeddedActivityJoinability];
  _slicedToArray = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  const items2 = [guildId];
  const obj3 = channelId(application[16]);
  const stateFromStores = obj3.useStateFromStores(items2, () => {
    let found = null;
    if (null != closure_3) {
      const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(tmp.id);
      found = embeddedActivitiesForChannel.find((applicationId) => {
        id = undefined;
        applicationId = applicationId.applicationId;
        if (id != null) {
          id = id.id;
        }
        return applicationId === id;
      });
    }
    return found;
  });
  const obj4 = channelId(application[17]);
  guildId = obj4.getEmbeddedActivityLocationGuildId(embeddedActivity.location);
  const useEmbeddedActivityJoinability = channelId(application[18]).useEmbeddedActivityJoinability;
  channelId(application[18]);
  const currentUser = handleCanJoin.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  embeddedActivityJoinability = useEmbeddedActivityJoinability({ userId: id, channelId, application });
  const bound = Math.min(ACTION_SHEET_MAX_WIDTH, tmp2(tmp3[19])().width);
  if (null != application) {
    if (null != stateFromStores) {
      let iconSource = application.getIconSource(32);
      if (iconSource == null) {
        iconSource = tmp2(tmp3[20]);
      }
      const name = application.name;
      const diff = bound - 32;
      const sum = 40 + tmp12 / tmp13 + 12 + 16;
      let obj = {
        accessibilityRole: "button",
        accessibilityLabel: intl.formatToPlainString(tmp4(tmp3[22]).t.Yw5Hr2, obj5),
        androidRippleConfig,
        onPress() {
              const obj = { embeddedActivityJoinability, handleCanJoin };
              handlePressJoinActivityDefault(obj);
            },
        children: closure_10(stateFromStores, obj6)
      };
      const PressableOpacity = tmp4(tmp3[27]).PressableOpacity;
      intl = tmp4(tmp3[22]).intl;
      obj6 = { style: items3, children: items7 };
      items3 = [tmp.voiceMemberItemRow, ];
      obj5 = { applicationName: name };
      const obj7 = { height: sum };
      items3[1] = obj7;
      const obj8 = { style: items4, children: items5 };
      items4 = [, ];
      ({ innerRow: arr7[0], activityDetails: arr7[1] } = tmp);
      const obj9 = { style: iconSource === tmp2(tmp3[20]) ? tmp.appIconPlaceholder : tmp.appIcon, source: iconSource };
      const tmp2Result = tmp2(tmp3[23]);
      items5 = [closure_9(tmp2Result, obj9), , ];
      const obj10 = { style: tmp.centerGroup, children: closure_9(tmp4(tmp3[24]).Text, obj11) };
      obj11 = { style: tmp.applicationName, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: name };
      items5[1] = closure_9(stateFromStores, obj10);
      const items6 = [tmp.overflow, ];
      const result = diff / tmp13;
      items6[1] = isActionSheet ? tmp.overflowBackgroundColorActionSheet : tmp.overflowBackgroundColor;
      const obj12 = {
        offsetAmount: -6,
        overflowStyle: items6,
        overflowComponent: tmp4(tmp3[9]).OverflowText,
        items: found,
        max: 5,
        renderItem(user, arg1) {
              let tmp5;
              const obj = { user, guildId, size: XSMALL, cutout: tmp5 };
              tmp5 = undefined;
              const CutoutableAvatarImage = native.CutoutableAvatarImage;
              const tmp = React4;
              if (!arg1) {
                tmp5 = { radius: native.AVATAR_SIZE_MAP[tmp4] / 2 + 3, direction: native.CutoutDirection.RIGHT, inset: -6 };
                const obj2 = { radius: native.AVATAR_SIZE_MAP[tmp4] / 2 + 3, direction: native.CutoutDirection.RIGHT, inset: -6 };
              }
              return tmp(CutoutableAvatarImage, obj);
            }
      };
      const SummarizedIconRow = tmp4(tmp3[9]).SummarizedIconRow;
      items5[2] = closure_9(SummarizedIconRow, obj12);
      items7 = [closure_10(stateFromStores, obj8), ];
      const obj13 = { style: items8, children: items9 };
      items8 = [tmp.innerRow, ];
      const obj14 = { height: result, justifyContent: "center" };
      items8[1] = obj14;
      const obj15 = { application, dimensionsStyle: size, borderRadius: 8, resizeMode: "contain" };
      size = { position: "absolute", width: diff, height: result };
      items9 = [closure_9(tmp2(tmp3[25]), obj15), ];
      const obj16 = { style: tmp.joinButtonContainer, children: tmp17Result };
      tmp17Result = null;
      if (embeddedActivityJoinability === tmp4(tmp3[18]).EmbeddedActivityJoinability.CAN_JOIN) {
        ({ joinButton: obj19.style, joinButtonPill: obj19.pillStyle } = tmp);
        const obj17 = {
          onPress() {
                  const obj = { embeddedActivityJoinability, handleCanJoin };
                  handlePressJoinActivityDefault(obj);
                },
          style: null,
          pillStyle: null,
          text: intl2.string(tmp4(tmp3[22]).t["4i2vj+"]),
          variant: "secondary",
          size: "sm",
          shrink: true
        };
        const BaseTextButton = tmp4(tmp3[26]).BaseTextButton;
        intl2 = tmp4(tmp3[22]).intl;
        tmp17Result = tmp17(BaseTextButton, obj17);
      }
      items9[1] = closure_9(stateFromStores, obj16);
      items7[1] = closure_10(stateFromStores, obj13);
      return closure_9(PressableOpacity, obj);
    }
  }
  return null;
});
function calculateActivityRowHeight(bound) {
  return 40 + (bound - 32) / c13 + 12 + 16;
}
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceMemberEmbeddedActivity.tsx");

export default tmp6;
export { calculateActivityRowHeight };
