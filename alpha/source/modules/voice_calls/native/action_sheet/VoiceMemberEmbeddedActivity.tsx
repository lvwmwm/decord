// Module ID: 15155
// Function ID: 15156
// Name: VoiceMemberEmbeddedActivity
// Dependencies: [32, 19, 17, 4857, 4858, 1384, 1192, 5268, 21, 1188, 5009, 575, 7324, 1380, 504, 4930, 11752, 1492, 8600, 11755, 6974, 1114, 5712, 5619, 11802, 5630, 2]
// Exports: calculateActivityRowHeight, default

// Module 15155 (VoiceMemberEmbeddedActivity)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1188 */;
import FormConstants from "FormConstants" /* 1192 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5268 */;
import handlePressJoinActivityDefault from "handlePressJoinActivity" /* 11755 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4857 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import UserStore from "UserStore" /* 1384 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceMemberEmbeddedActivity.tsx");

export default function VoiceMemberEmbeddedActivity(onItemPress) {
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
  application = _slicedToArray(onItemPress(application[12])(items), 1)[0];
  const arr = Array.from(embeddedActivity.userIds);
  const mapped = arr.map((item) => handleCanJoin.getUser(item));
  let tmp4 = channelId;
  let found = mapped.filter(channelId(application[13]).isNotNullish);
  let obj2 = channelId(application[14]);
  const items1 = [embeddedActivityJoinability];
  _slicedToArray = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  const items2 = [guildId];
  const obj3 = channelId(application[14]);
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
  const obj4 = channelId(application[15]);
  guildId = obj4.getEmbeddedActivityLocationGuildId(embeddedActivity.location);
  const useEmbeddedActivityJoinability = channelId(application[16]).useEmbeddedActivityJoinability;
  channelId(application[16]);
  const currentUser = handleCanJoin.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  embeddedActivityJoinability = useEmbeddedActivityJoinability({ userId: id, channelId, application });
  const bound = Math.min(ACTION_SHEET_MAX_WIDTH, tmp2(tmp3[17])().width);
  if (null != application) {
    if (null != stateFromStores) {
      let iconSource = application.getIconSource(32);
      if (iconSource == null) {
        iconSource = tmp2(tmp3[18]);
      }
      const name = application.name;
      const diff = bound - 32;
      const sum = 40 + tmp12 / tmp13 + 12 + 16;
      let obj = {
        accessibilityRole: "button",
        accessibilityLabel: intl.formatToPlainString(tmp4(tmp3[21]).t.Yw5Hr2, obj5),
        androidRippleConfig,
        onPress() {
              const obj = { embeddedActivityJoinability, handleCanJoin };
              handlePressJoinActivityDefault(obj);
            },
        children: closure_10(stateFromStores, obj6)
      };
      const PressableOpacity = tmp4(tmp3[20]).PressableOpacity;
      intl = tmp4(tmp3[21]).intl;
      obj6 = { style: items3, children: items7 };
      items3 = [tmp.voiceMemberItemRow, ];
      obj5 = { applicationName: name };
      const obj7 = { height: sum };
      items3[1] = obj7;
      const obj8 = { style: items4, children: items5 };
      items4 = [, ];
      ({ innerRow: arr7[0], activityDetails: arr7[1] } = tmp);
      const obj9 = { style: iconSource === tmp2(tmp3[18]) ? tmp.appIconPlaceholder : tmp.appIcon, source: iconSource };
      const tmp2Result = tmp2(tmp3[22]);
      items5 = [closure_9(tmp2Result, obj9), , ];
      const obj10 = { style: tmp.centerGroup, children: closure_9(tmp4(tmp3[23]).Text, obj11) };
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
      items9 = [closure_9(tmp2(tmp3[24]), obj15), ];
      const obj16 = { style: tmp.joinButtonContainer, children: tmp17Result };
      tmp17Result = null;
      if (embeddedActivityJoinability === tmp4(tmp3[16]).EmbeddedActivityJoinability.CAN_JOIN) {
        ({ joinButton: obj19.style, joinButtonPill: obj19.pillStyle } = tmp);
        const obj17 = {
          onPress() {
                  const obj = { embeddedActivityJoinability, handleCanJoin };
                  handlePressJoinActivityDefault(obj);
                },
          style: null,
          pillStyle: null,
          text: intl2.string(tmp4(tmp3[21]).t["4i2vj+"]),
          variant: "secondary",
          size: "sm",
          shrink: true
        };
        const BaseTextButton = tmp4(tmp3[25]).BaseTextButton;
        intl2 = tmp4(tmp3[21]).intl;
        tmp17Result = tmp17(BaseTextButton, obj17);
      }
      items9[1] = closure_9(stateFromStores, obj16);
      items7[1] = closure_10(stateFromStores, obj13);
      return closure_9(PressableOpacity, obj);
    }
  }
  return null;
};
export function calculateActivityRowHeight(arg0) {
  return 40 + (arg0 - 32) / c13 + 12 + 16;
}
