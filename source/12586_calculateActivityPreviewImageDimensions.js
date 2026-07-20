// Module ID: 12586
// Function ID: 96793
// Name: calculateActivityPreviewImageDimensions
// Dependencies: []
// Exports: default

// Module 12586 (calculateActivityPreviewImageDimensions)
function calculateActivityPreviewImageDimensions(bound) {
  const diff = bound - 32;
  return { width: diff, height: diff / closure_14 };
}
function calculateActivityRowHeight(closure_4) {
  return 40 + calculateActivityPreviewImageDimensions(closure_4).height + 12 + 16;
}
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
({ Image: closure_4, View: closure_5 } = arg1(dependencyMap[2]));
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const ACTION_SHEET_MAX_WIDTH = arg1(dependencyMap[7]).ACTION_SHEET_MAX_WIDTH;
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[8]));
const XSMALL = arg1(dependencyMap[9]).AvatarSizes.XSMALL;
const themedRippleConfig = arg1(dependencyMap[6]).getThemedRippleConfig({ foreground: true });
let obj = { 9223372036854775807: "png", -9223372036854775808: "2026-04-browser-transceiver-padding-removal", -9223372036854775808: "user", 0: "2026-02-process-boost-on-voice" };
let closure_14 = 1.7777777777777777;
let obj1 = arg1(dependencyMap[10]);
obj = { voiceMemberItemRow: { "Bool(false)": "2026-06-server-ladder", "Bool(false)": "user", "Bool(false)": 9000000, "Bool(false)": false, "Bool(false)": "2026-05-av1-bitrate-tuning" }, innerRow: { "Null": "center", "Null": "center" }, activityDetails: {}, appIcon: obj };
obj = {};
const merged = Object.assign(obj);
obj["tintColor"] = importDefault(dependencyMap[11]).colors.INTERACTIVE_TEXT_DEFAULT;
obj.appIconPlaceholder = obj;
obj.centerGroup = { flexDirection: false, padding: false };
obj.applicationName = { lineHeight: 20 };
obj.joinButton = { alignSelf: "center" };
obj.joinButtonPill = {};
obj.joinButtonContainer = {};
obj1 = { height: arg1(dependencyMap[9]).AVATAR_SIZE_MAP[XSMALL] };
obj.overflow = obj1;
const tmp4 = arg1(dependencyMap[8]);
obj.overflowBackgroundColor = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_MOD_NORMAL };
const obj2 = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_MOD_NORMAL };
obj.overflowBackgroundColorActionSheet = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOWEST };
let closure_15 = obj1.createStyles(obj);
const obj3 = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOWEST };
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceMemberEmbeddedActivity.tsx");

export default function VoiceMemberEmbeddedActivity(onItemPress) {
  let channelId;
  let embeddedActivity;
  ({ embeddedActivity, channelId } = onItemPress);
  const arg1 = channelId;
  const importDefault = onItemPress.onItemPress;
  let dependencyMap;
  let callback;
  let stateFromStores;
  let closure_6;
  function handleCanJoin() {
    let tmp3;
    if (null != first) {
      tmp3 = first;
    }
    let tmp4;
    if (null != stateFromStores) {
      tmp4 = stateFromStores;
    }
    onItemPress(closure_3, tmp3, tmp4);
  }
  function onEmbeddedActivityItemPress() {
    onItemPress(first[19])({ embeddedActivityJoinability, handleCanJoin });
  }
  const tmp = callback3();
  const items = [embeddedActivity.applicationId];
  const first = callback(importDefault(dependencyMap[12])(items), 1)[0];
  dependencyMap = first;
  const mapped = Array.from(embeddedActivity.userIds).map((arg0) => onEmbeddedActivityItemPress.getUser(arg0));
  const found = mapped.filter(arg1(dependencyMap[13]).isNotNullish);
  let obj1 = arg1(dependencyMap[14]);
  const items1 = [handleCanJoin];
  callback = obj1.useStateFromStores(items1, () => handleCanJoin.getChannel(channelId));
  let obj2 = arg1(dependencyMap[14]);
  const items2 = [closure_6];
  stateFromStores = obj2.useStateFromStores(items2, () => {
    let found = null;
    if (null != id) {
      const embeddedActivitiesForChannel = embeddedActivityJoinability.getEmbeddedActivitiesForChannel(id.id);
      found = embeddedActivitiesForChannel.find((applicationId) => {
        let id;
        if (null != id) {
          id = id.id;
        }
        return applicationId.applicationId === id;
      });
    }
    return found;
  });
  let obj3 = arg1(dependencyMap[15]);
  const embeddedActivityLocationGuildId = obj3.getEmbeddedActivityLocationGuildId(embeddedActivity.location);
  let obj4 = arg1(dependencyMap[16]);
  let obj = {};
  const currentUser = onEmbeddedActivityItemPress.getCurrentUser();
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  obj.userId = id;
  obj.channelId = channelId;
  obj.application = first;
  const embeddedActivityJoinability = obj4.useEmbeddedActivityJoinability(obj);
  closure_6 = embeddedActivityJoinability;
  const bound = Math.min(ACTION_SHEET_MAX_WIDTH, importDefault(dependencyMap[17])().width);
  if (null != first) {
    if (null != stateFromStores) {
      let iconSource = first.getIconSource(32);
      if (null == iconSource) {
        iconSource = importDefault(dependencyMap[18]);
      }
      const name = first.name;
      const tmp13 = calculateActivityPreviewImageDimensions(bound);
      obj = { accessibilityRole: "button" };
      const intl = arg1(dependencyMap[21]).intl;
      obj1 = { applicationName: name };
      obj.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[21]).t.Yw5Hr2, obj1);
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
      const obj5 = { style: iconSource === importDefault(dependencyMap[18]) ? tmp.appIconPlaceholder : tmp.appIcon, source: iconSource };
      const items5 = [callback2(stateFromStores, obj5), , ];
      const obj6 = { style: tmp.centerGroup };
      const obj7 = { style: tmp.applicationName, children: name };
      obj6.children = callback2(arg1(dependencyMap[22]).Text, obj7);
      items5[1] = callback2(embeddedActivityLocationGuildId, obj6);
      const obj8 = { offsetAmount: -6 };
      const items6 = [tmp.overflow, onItemPress.isActionSheet ? tmp.overflowBackgroundColorActionSheet : tmp.overflowBackgroundColor];
      obj8.overflowStyle = items6;
      obj8.overflowComponent = arg1(dependencyMap[9]).OverflowText;
      obj8.items = found;
      obj8.max = 5;
      obj8.renderItem = function renderItem(user) {
        let obj = { user, guildId: closure_5, size: closure_12 };
        let tmp2;
        if (!arg1) {
          obj = { radius: channelId(first[9]).AVATAR_SIZE_MAP[closure_12] / 2 + 3, direction: channelId(first[9]).CutoutDirection.RIGHT, inset: -6 };
          tmp2 = obj;
        }
        obj.cutout = tmp2;
        return closure_10(channelId(first[9]).CutoutableAvatarImage, obj);
      };
      items5[2] = callback2(arg1(dependencyMap[9]).SummarizedIconRow, obj8);
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
      const items9 = [callback2(importDefault(dependencyMap[23]), obj11), ];
      const obj13 = { style: tmp.joinButtonContainer };
      let tmp32 = null;
      if (embeddedActivityJoinability === arg1(dependencyMap[16]).EmbeddedActivityJoinability.CAN_JOIN) {
        const obj14 = {
          onPress() {
                  onEmbeddedActivityItemPress();
                }
        };
        ({ joinButton: obj21.style, joinButtonPill: obj21.pillStyle } = tmp);
        const intl2 = arg1(dependencyMap[21]).intl;
        obj14.text = intl2.string(arg1(dependencyMap[21]).t.4i2vj+);
        obj14.variant = "secondary";
        obj14.size = "sm";
        obj14.shrink = true;
        tmp32 = callback2(arg1(dependencyMap[24]).BaseTextButton, obj14);
      }
      obj13.children = tmp32;
      items9[1] = callback2(embeddedActivityLocationGuildId, obj13);
      obj9.children = items9;
      items7[1] = closure_11(embeddedActivityLocationGuildId, obj9);
      obj2.children = items7;
      obj.children = closure_11(embeddedActivityLocationGuildId, obj2);
      return callback2(arg1(dependencyMap[20]).PressableOpacity, obj);
    }
  }
  return null;
};
export { calculateActivityRowHeight };
