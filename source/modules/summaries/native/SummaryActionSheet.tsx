// Module ID: 10881
// Function ID: 84573
// Name: SummaryActionSheet
// Dependencies: []
// Exports: default, openSummaryDividerActionSheet

// Module 10881 (SummaryActionSheet)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ AnalyticsSections: closure_8, MessageFlags: closure_9 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[10]);
obj = { summaryContainer: {}, summaryContent: { textAlign: "center" } };
obj = { borderRadius: importDefault(dependencyMap[11]).radii.round, backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BRAND };
obj.summaryIconContainer = obj;
const obj1 = { minimumFontScale: "Array", textBreakStrategy: "isArray", onTextLayout: "getChannel", tintColor: importDefault(dependencyMap[11]).colors.WHITE };
obj.summaryIcon = obj1;
obj.summaryTopic = { marginBottom: 4 };
const tmp3 = arg1(dependencyMap[6]);
obj.divider = { height: 1, backgroundColor: importDefault(dependencyMap[11]).colors.BORDER_SUBTLE };
obj.actionsContainer = { "Bool(false)": "SERVER_GUIDE_CHANNEL_SELECTED", "Bool(false)": "staticUrl", "Bool(false)": "Array" };
let closure_12 = obj.createStyles(obj);
const obj2 = { height: 1, backgroundColor: importDefault(dependencyMap[11]).colors.BORDER_SUBTLE };
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/summaries/native/SummaryActionSheet.tsx");

export default function SummaryActionSheet(summary) {
  summary = summary.summary;
  const arg1 = summary;
  const tmp = callback3();
  const channel = channel.getChannel(summary.channelId);
  const importDefault = channel;
  const message = message.getMessage(summary.channelId, summary.startId);
  const dependencyMap = message;
  let hasFlagResult = null != message;
  if (hasFlagResult) {
    hasFlagResult = message.hasFlag(constants.HAS_THREAD);
  }
  let canStartPublicThread = null != channel && null != message;
  if (canStartPublicThread) {
    canStartPublicThread = !message.hasFlag(constants.HAS_THREAD);
  }
  if (canStartPublicThread) {
    let obj1 = arg1(dependencyMap[12]);
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
      summary(message[17]).showShareActionSheet(obj, constants.SUMMARY_ACTION_SHEET);
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
        const result = channel(message[18]).openThreadCreationForMobile(channel, summary.startId, constants.SUMMARY_ACTION_SHEET);
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
        const obj7 = channel(message[21]);
      }
    }
    const intl = summary(message[15]).intl;
    summary(message[14]).presentError(intl.string(summary(message[15]).t./+DWeQ));
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
  const obj2 = { style: tmp.summaryIconContainer, children: callback(arg1(dependencyMap[25]).TopicsIcon, { style: tmp.summaryIcon, size: "custom" }) };
  const items4 = [callback(View, obj2), , ];
  const obj4 = { "Null": "781324642736144424", "Null": null, "Null": "Cheerful Choco preens against window" };
  const items5 = [, ];
  ({ summaryContent: arr6[0], summaryTopic: arr6[1] } = tmp);
  obj4.style = items5;
  obj4.children = summary.topic;
  items4[1] = callback(arg1(dependencyMap[26]).Text, obj4);
  const items6 = [tmp.summaryContent];
  items4[2] = callback(arg1(dependencyMap[26]).Text, { style: items6, children: summary.summShort });
  obj1.children = items4;
  const items7 = [callback2(View, obj1), callback(View, { style: tmp.divider }), ];
  const obj7 = { style: tmp.actionsContainer };
  const obj8 = {};
  const intl = arg1(dependencyMap[15]).intl;
  obj8.label = intl.string(arg1(dependencyMap[15]).t.NY/nlb);
  obj8.iconSource = importDefault(dependencyMap[28]);
  obj8.onPress = callback1;
  const items8 = [callback(arg1(dependencyMap[27]).SummaryActionSheetButton, obj8), , , ];
  if (canStartPublicThread) {
    const obj9 = {};
    const intl2 = arg1(dependencyMap[15]).intl;
    obj9.label = intl2.string(arg1(dependencyMap[15]).t.rBIGBL);
    obj9.iconSource = importDefault(dependencyMap[29]);
    obj9.onPress = callback2;
    canStartPublicThread = callback(arg1(dependencyMap[27]).SummaryActionSheetButton, obj9);
  }
  items8[1] = canStartPublicThread;
  if (hasFlagResult) {
    const obj10 = {};
    const intl3 = arg1(dependencyMap[15]).intl;
    obj10.label = intl3.string(arg1(dependencyMap[15]).t.39d0Wj);
    obj10.iconSource = importDefault(dependencyMap[29]);
    obj10.onPress = callback3;
    hasFlagResult = callback(arg1(dependencyMap[27]).SummaryActionSheetButton, obj10);
  }
  items8[2] = hasFlagResult;
  const obj11 = {};
  const intl4 = arg1(dependencyMap[15]).intl;
  obj11.label = intl4.string(arg1(dependencyMap[15]).t.QLkZ39);
  obj11.iconSource = importDefault(dependencyMap[30]);
  obj11.onPress = callback;
  items8[3] = callback(arg1(dependencyMap[27]).SummaryActionSheetButton, obj11);
  obj7.children = items8;
  items7[2] = callback2(View, obj7);
  obj.children = items7;
  obj.children = callback2(arg1(dependencyMap[24]).SafeAreaPaddingView, obj);
  return callback(arg1(dependencyMap[23]).BottomSheet, obj);
};
export const openSummaryDividerActionSheet = function openSummaryDividerActionSheet(arg0, arg1) {
  const findSummaryResult = closure_7.findSummary(arg0, arg1);
  if (null != findSummaryResult) {
    let obj = importDefault(dependencyMap[7]);
    const _HermesInternal = HermesInternal;
    obj = { summary: findSummaryResult };
    obj.openLazy(arg1(dependencyMap[9])(dependencyMap[8], dependencyMap.paths), "SummaryDivider" + arg1, obj);
    const tmp5 = arg1(dependencyMap[9])(dependencyMap[8], dependencyMap.paths);
  }
};
