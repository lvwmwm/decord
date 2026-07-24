// Module ID: 10919
// Function ID: 84835
// Name: SummaryActionSheet
// Dependencies: [31, 27, 1348, 4349, 9520, 653, 33, 4098, 10919, 1934, 4130, 689, 5650, 9535, 3830, 1212, 4312, 8376, 7006, 7018, 3981, 21, 1198, 5187, 5121, 10920, 4126, 10922, 10923, 10129, 7727, 2]
// Exports: default, openSummaryDividerActionSheet

// Module 10919 (SummaryActionSheet)
import set from "set";
import { View } from "SummaryActionSheetButton";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_8;
let closure_9;
const require = arg1;
({ AnalyticsSections: closure_8, MessageFlags: closure_9 } = ME);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = { summaryContainer: { padding: 16, margin: 16, marginBottom: 24, justifyContent: "center", alignItems: "center" }, summaryContent: { textAlign: "center" } };
_createForOfIteratorHelperLoose = { marginBottom: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, border: 1, overflow: "hidden", alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.summaryIconContainer = _createForOfIteratorHelperLoose;
let obj1 = { margin: 8, width: 20, height: 20, tintColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.summaryIcon = obj1;
_createForOfIteratorHelperLoose.summaryTopic = { marginBottom: 4 };
_createForOfIteratorHelperLoose.divider = { height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.actionsContainer = { flexDirection: "row", justifyContent: "space-evenly", marginBottom: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/summaries/native/SummaryActionSheet.tsx");

export default function SummaryActionSheet(summary) {
  summary = summary.summary;
  const tmp = _createForOfIteratorHelperLoose();
  channel = channel.getChannel(summary.channelId);
  message = message.getMessage(summary.channelId, summary.startId);
  let hasFlagResult = null != message;
  if (hasFlagResult) {
    hasFlagResult = message.hasFlag(constants.HAS_THREAD);
  }
  let canStartPublicThread = null != channel && null != message;
  if (canStartPublicThread) {
    canStartPublicThread = !message.hasFlag(constants.HAS_THREAD);
  }
  if (canStartPublicThread) {
    let obj1 = summary(message[12]);
    canStartPublicThread = obj1.computeCanStartPublicThread(channel, message);
  }
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  const items = [guild_id];
  const items1 = [summary, channel];
  const callback = React.useCallback(() => {
    let obj = channel(message[7]);
    obj.hideActionSheet();
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    if (null != guild_id) {
      obj = {};
      let guild_id1;
      const obj2 = channel(message[7]);
      if (null != channel) {
        guild_id1 = channel.guild_id;
      }
      obj.guildId = guild_id1;
      obj2.openLazy(summary(message[9])(message[13], message.paths), "GuildHighlightsNotifications", obj);
      const tmp7 = summary(message[9])(message[13], message.paths);
    }
  }, items);
  const items2 = [summary, channel, message];
  const callback1 = React.useCallback(() => {
    let obj = channel(message[7]);
    obj.hideActionSheet();
    if (null != channel) {
      const intl2 = summary(message[15]).intl;
      obj = { topic: summary.topic };
      const obj4 = summary(message[16]);
      obj.url = obj4.getChannelPermalink(channel.guild_id, channel.id, summary.startId, summary.id);
      const formatToPlainStringResult = intl2.formatToPlainString(summary(message[15]).t.I3yTDn, obj);
      obj = { message: formatToPlainStringResult, subject: summary.topic };
      summary(message[17]).showShareActionSheet(obj, outer1_8.SUMMARY_ACTION_SHEET);
      const obj5 = summary(message[17]);
    } else {
      const intl = summary(message[15]).intl;
      summary(message[14]).presentFailedToast(intl.string(summary(message[15]).t.gvkcQl));
      const obj2 = summary(message[14]);
    }
  }, items1);
  const items3 = [channel, message];
  const callback2 = React.useCallback(() => {
    let obj = channel(message[7]);
    obj.hideActionSheet();
    if (null != channel) {
      if (null != message) {
        const result = channel(message[18]).openThreadCreationForMobile(channel, summary.startId, outer1_8.SUMMARY_ACTION_SHEET);
        const obj3 = channel(message[18]);
        obj = { name: summary.topic };
        channel(message[19]).changeThreadSettings(channel.id, obj);
        const obj4 = channel(message[19]);
        const obj6 = summary(message[20]);
        if (!obj6.navigateToCreateThread(channel.guild_id, obj7.castMessageIdAsChannelId(message.id))) {
          const obj8 = summary(message[22]);
          obj8.transitionToGuild(channel.guild_id, channel(message[21]).castMessageIdAsChannelId(message.id));
          const obj9 = channel(message[21]);
        }
        obj7 = channel(message[21]);
      }
    }
    const intl = summary(message[15]).intl;
    summary(message[14]).presentError(intl.string(summary(message[15]).t["/+DWeQ"]));
  }, items2);
  const callback3 = React.useCallback(() => {
    channel(message[7]).hideActionSheet();
    let tmp2 = null != channel;
    if (tmp2) {
      tmp2 = null != message;
    }
    if (tmp2) {
      const obj2 = summary(message[22]);
      obj2.transitionToGuild(channel.guild_id, channel(message[21]).castMessageIdAsChannelId(message.id));
      const obj3 = channel(message[21]);
    }
  }, items3);
  let obj = { ref: React.useRef(null) };
  obj = { bottom: true };
  obj1 = { style: tmp.summaryContainer };
  let obj2 = { style: tmp.summaryIconContainer, children: callback(summary(message[25]).TopicsIcon, { style: tmp.summaryIcon, size: "custom" }) };
  const items4 = [callback(View, obj2), , ];
  let obj4 = { style: null, variant: "heading-md/extrabold", color: "mobile-text-heading-primary" };
  const items5 = [, ];
  ({ summaryContent: arr6[0], summaryTopic: arr6[1] } = tmp);
  obj4.style = items5;
  obj4.children = summary.topic;
  items4[1] = callback(summary(message[26]).Text, obj4);
  let obj5 = { style: null, variant: "heading-md/medium", color: "text-default" };
  const items6 = [tmp.summaryContent];
  obj5.style = items6;
  obj5.children = summary.summShort;
  items4[2] = callback(summary(message[26]).Text, obj5);
  obj1.children = items4;
  const items7 = [callback2(View, obj1), callback(View, { style: tmp.divider }), ];
  let obj7 = { style: tmp.actionsContainer };
  let obj8 = {};
  let intl = summary(message[15]).intl;
  obj8.label = intl.string(summary(message[15]).t["NY/nlb"]);
  obj8.iconSource = channel(message[28]);
  obj8.onPress = callback1;
  const items8 = [callback(summary(message[27]).SummaryActionSheetButton, obj8), , , ];
  if (canStartPublicThread) {
    let obj9 = {};
    let intl2 = summary(message[15]).intl;
    obj9.label = intl2.string(summary(message[15]).t.rBIGBL);
    obj9.iconSource = channel(message[29]);
    obj9.onPress = callback2;
    canStartPublicThread = callback(summary(message[27]).SummaryActionSheetButton, obj9);
  }
  items8[1] = canStartPublicThread;
  if (hasFlagResult) {
    const obj10 = {};
    const intl3 = summary(message[15]).intl;
    obj10.label = intl3.string(summary(message[15]).t["39d0Wj"]);
    obj10.iconSource = channel(message[29]);
    obj10.onPress = callback3;
    hasFlagResult = callback(summary(message[27]).SummaryActionSheetButton, obj10);
  }
  items8[2] = hasFlagResult;
  const obj11 = {};
  const intl4 = summary(message[15]).intl;
  obj11.label = intl4.string(summary(message[15]).t.QLkZ39);
  obj11.iconSource = channel(message[30]);
  obj11.onPress = callback;
  items8[3] = callback(summary(message[27]).SummaryActionSheetButton, obj11);
  obj7.children = items8;
  items7[2] = callback2(View, obj7);
  obj.children = items7;
  obj.children = callback2(summary(message[24]).SafeAreaPaddingView, obj);
  return callback(summary(message[23]).BottomSheet, obj);
};
export const openSummaryDividerActionSheet = function openSummaryDividerActionSheet(arg0, arg1) {
  const findSummaryResult = closure_7.findSummary(arg0, arg1);
  if (null != findSummaryResult) {
    let obj = importDefault(4098);
    const _HermesInternal = HermesInternal;
    obj = { summary: findSummaryResult };
    obj.openLazy(require(1934) /* maybeLoadBundle */(10919, dependencyMap.paths), "SummaryDivider" + arg1, obj);
    const tmp5 = require(1934) /* maybeLoadBundle */(10919, dependencyMap.paths);
  }
};
