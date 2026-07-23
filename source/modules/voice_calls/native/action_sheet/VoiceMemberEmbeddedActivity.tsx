// Module ID: 12714
// Function ID: 99022
// Name: calculateActivityPreviewImageDimensions
// Dependencies: [57, 31, 27, 1347, 1348, 1849, 1277, 5188, 33, 1273, 4130, 689, 5470, 1327, 566, 3748, 10520, 1450, 7819, 10519, 4660, 1212, 4126, 10613, 4544, 2]
// Exports: default

// Module 12714 (calculateActivityPreviewImageDimensions)
import _slicedToArray from "_slicedToArray";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_6 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_4;
let closure_5;
const require = arg1;
function calculateActivityPreviewImageDimensions(bound) {
  const diff = bound - 32;
  return { width: diff, height: diff / c14 };
}
function calculateActivityRowHeight(closure_4) {
  return 40 + calculateActivityPreviewImageDimensions(closure_4).height + 12 + 16;
}
({ Image: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const XSMALL = require("Button").AvatarSizes.XSMALL;
const themedRippleConfig = require("semanticColor").getThemedRippleConfig({ foreground: true });
let obj = { width: 32, height: 32, marginRight: 16, borderRadius: 4 };
let c14 = 1.7777777777777777;
obj = { voiceMemberItemRow: { paddingTop: 12, paddingBottom: 16, flexDirection: "column", display: "flex", justifyContent: "flex-start" }, innerRow: { paddingHorizontal: 16, alignItems: "center" }, activityDetails: { marginBottom: 8, flexDirection: "row", display: "flex" }, appIcon: obj };
obj = {};
const merged = Object.assign(obj);
obj["tintColor"] = require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT;
obj.appIconPlaceholder = obj;
obj.centerGroup = { flex: 1, paddingRight: 4 };
obj.applicationName = { lineHeight: 20 };
obj.joinButton = { alignSelf: "center" };
obj.joinButtonPill = { borderRadius: 100, paddingHorizontal: 24 };
obj.joinButtonContainer = { alignItems: "center", justifyContent: "center", display: "flex", width: "100%", paddingHorizontal: 16 };
_createForOfIteratorHelperLoose = { height: require("Button").AVATAR_SIZE_MAP[XSMALL] };
obj.overflow = _createForOfIteratorHelperLoose;
obj.overflowBackgroundColor = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL };
obj.overflowBackgroundColorActionSheet = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
let closure_15 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceMemberEmbeddedActivity.tsx");

export default function VoiceMemberEmbeddedActivity(onItemPress) {
  let channelId;
  let embeddedActivity;
  ({ embeddedActivity, channelId } = onItemPress);
  onItemPress = onItemPress.onItemPress;
  let first;
  let callback;
  let stateFromStores;
  let embeddedActivityJoinability;
  function handleCanJoin() {
    let tmp3;
    if (null != first) {
      tmp3 = first;
    }
    let tmp4;
    if (null != stateFromStores) {
      tmp4 = stateFromStores;
    }
    onItemPress(_slicedToArray, tmp3, tmp4);
  }
  function onEmbeddedActivityItemPress() {
    onItemPress(first[19])({ embeddedActivityJoinability, handleCanJoin });
  }
  const tmp = callback3();
  const items = [embeddedActivity.applicationId];
  first = callback(onItemPress(first[12])(items), 1)[0];
  const mapped = Array.from(embeddedActivity.userIds).map((arg0) => onEmbeddedActivityItemPress.getUser(arg0));
  let found = mapped.filter(channelId(first[13]).isNotNullish);
  let obj1 = channelId(first[14]);
  const items1 = [handleCanJoin];
  callback = obj1.useStateFromStores(items1, () => handleCanJoin.getChannel(channelId));
  let obj2 = channelId(first[14]);
  const items2 = [embeddedActivityJoinability];
  stateFromStores = obj2.useStateFromStores(items2, () => {
    let found = null;
    if (null != id) {
      const embeddedActivitiesForChannel = embeddedActivityJoinability.getEmbeddedActivitiesForChannel(id.id);
      found = embeddedActivitiesForChannel.find((applicationId) => {
        let id;
        if (null != outer1_2) {
          id = outer1_2.id;
        }
        return applicationId.applicationId === id;
      });
    }
    return found;
  });
  let obj3 = channelId(first[15]);
  const embeddedActivityLocationGuildId = obj3.getEmbeddedActivityLocationGuildId(embeddedActivity.location);
  let obj4 = channelId(first[16]);
  let obj = {};
  const currentUser = onEmbeddedActivityItemPress.getCurrentUser();
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  obj.userId = id;
  obj.channelId = channelId;
  obj.application = first;
  embeddedActivityJoinability = obj4.useEmbeddedActivityJoinability(obj);
  const bound = Math.min(ACTION_SHEET_MAX_WIDTH, onItemPress(first[17])().width);
  if (null != first) {
    if (null != stateFromStores) {
      let iconSource = first.getIconSource(32);
      if (null == iconSource) {
        iconSource = onItemPress(first[18]);
      }
      const name = first.name;
      const tmp13 = calculateActivityPreviewImageDimensions(bound);
      obj = { accessibilityRole: "button" };
      const intl = channelId(first[21]).intl;
      obj1 = { applicationName: name };
      obj.accessibilityLabel = intl.formatToPlainString(channelId(first[21]).t.Yw5Hr2, obj1);
      obj.androidRippleConfig = closure_13;
      obj.onPress = function onPress() {
        onEmbeddedActivityItemPress();
      };
      obj2 = {};
      const items3 = [tmp.voiceMemberItemRow, ];
      obj3 = { height: tmp8 };
      items3[1] = obj3;
      obj2.style = items3;
      obj4 = {};
      const items4 = [, ];
      ({ innerRow: arr7[0], activityDetails: arr7[1] } = tmp);
      obj4.style = items4;
      const obj5 = { style: iconSource === onItemPress(first[18]) ? tmp.appIconPlaceholder : tmp.appIcon, source: iconSource };
      const items5 = [callback2(stateFromStores, obj5), , ];
      const obj6 = { style: tmp.centerGroup };
      const obj7 = { style: tmp.applicationName, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: name };
      obj6.children = callback2(channelId(first[22]).Text, obj7);
      items5[1] = callback2(embeddedActivityLocationGuildId, obj6);
      const obj8 = { offsetAmount: -6 };
      const items6 = [tmp.overflow, onItemPress.isActionSheet ? tmp.overflowBackgroundColorActionSheet : tmp.overflowBackgroundColor];
      obj8.overflowStyle = items6;
      obj8.overflowComponent = channelId(first[9]).OverflowText;
      obj8.items = found;
      obj8.max = 5;
      obj8.renderItem = function renderItem(user) {
        let obj = { user, guildId: closure_5, size: outer1_12 };
        let tmp2;
        if (!arg1) {
          obj = { radius: channelId(first[9]).AVATAR_SIZE_MAP[outer1_12] / 2 + 3, direction: channelId(first[9]).CutoutDirection.RIGHT, inset: -6 };
          tmp2 = obj;
        }
        obj.cutout = tmp2;
        return outer1_10(channelId(first[9]).CutoutableAvatarImage, obj);
      };
      items5[2] = callback2(channelId(first[9]).SummarizedIconRow, obj8);
      obj4.children = items5;
      const items7 = [closure_11(embeddedActivityLocationGuildId, obj4), ];
      const obj9 = {};
      const items8 = [tmp.innerRow, ];
      const obj10 = { height: tmp13.height, justifyContent: "center" };
      items8[1] = obj10;
      obj9.style = items8;
      const obj11 = { application: first };
      const obj12 = { position: "absolute" };
      ({ width: obj19.width, height: obj19.height } = tmp13);
      obj11.dimensionsStyle = obj12;
      obj11.borderRadius = 8;
      obj11.resizeMode = "contain";
      const items9 = [callback2(onItemPress(first[23]), obj11), ];
      const obj13 = { style: tmp.joinButtonContainer };
      let tmp32 = null;
      if (embeddedActivityJoinability === channelId(first[16]).EmbeddedActivityJoinability.CAN_JOIN) {
        const obj14 = {
          onPress() {
                  onEmbeddedActivityItemPress();
                }
        };
        ({ joinButton: obj21.style, joinButtonPill: obj21.pillStyle } = tmp);
        const intl2 = channelId(first[21]).intl;
        obj14.text = intl2.string(channelId(first[21]).t["4i2vj+"]);
        obj14.variant = "secondary";
        obj14.size = "sm";
        obj14.shrink = true;
        tmp32 = callback2(channelId(first[24]).BaseTextButton, obj14);
      }
      obj13.children = tmp32;
      items9[1] = callback2(embeddedActivityLocationGuildId, obj13);
      obj9.children = items9;
      items7[1] = closure_11(embeddedActivityLocationGuildId, obj9);
      obj2.children = items7;
      obj.children = closure_11(embeddedActivityLocationGuildId, obj2);
      return callback2(channelId(first[20]).PressableOpacity, obj);
    }
  }
  return null;
};
export { calculateActivityRowHeight };
