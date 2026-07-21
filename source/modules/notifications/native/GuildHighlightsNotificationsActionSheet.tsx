// Module ID: 9491
// Function ID: 73957
// Name: GuildPill
// Dependencies: []
// Exports: default

// Module 9491 (GuildPill)
function GuildPill(guild) {
  guild = guild.guild;
  const tmp = callback5();
  let obj = { style: tmp.guildPill };
  obj = { guild, size: arg1(dependencyMap[10]).GuildIconSizes.SMALL_32, animate: true };
  const items = [callback2(importDefault(dependencyMap[10]), obj), ];
  obj = { delete: "String", dispatch: "kind", raw: "justifyContent", style: tmp.guildName };
  let name;
  if (null != guild) {
    name = guild.name;
  }
  obj.children = name;
  items[1] = callback2(arg1(dependencyMap[11]).Text, obj);
  obj.children = items;
  return closure_12(View, obj);
}
function isFeedbackComplete(first) {
  let obj = first;
  if (null == first) {
    obj = {};
  }
  return obj.rating === FeedbackRating.GOOD || null != obj.reason;
}
function isFeedbackGood(first) {
  let obj = first;
  if (null == first) {
    obj = {};
  }
  return obj.rating === FeedbackRating.GOOD;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ HelpdeskArticles: closure_8, HighlightSettings: closure_9 } = arg1(dependencyMap[5]));
const FeedbackRating = arg1(dependencyMap[6]).FeedbackRating;
const tmp2 = arg1(dependencyMap[5]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = { contentContainer: { useTopCommands: 3, GameDiversityTier4SmallBadge: 2, analyticsData: 0 }, header: { accessibilityRole: 24, GuildBadgeFrog: "recent_games_enabled" }, headerTitle: { marginBottom: 4 }, centerText: { textAlign: "center" }, feedback: {}, thanks: {} };
obj = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_SURFACE_HIGH };
obj.settings = obj;
let closure_13 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[7]);
const obj1 = {};
const obj2 = { 0: "fe4737c3dd5ab570ff8c05c7dd4152ca", 0: "custom_icons", -9223372036854775808: "png", 9223372036854775807: true, 0: "/assets/modules/premium/native/images/perks", 0: 300, backgroundColor: importDefault(dependencyMap[9]).colors.GUILD_NOTIFICATIONS_BOTTOM_SHEET_PILL_BACKGROUND, borderRadius: importDefault(dependencyMap[9]).radii.round };
const merged = Object.assign(importDefault(dependencyMap[9]).shadows.SHADOW_LOW);
obj1.guildPill = obj2;
obj1.guildName = { paddingHorizontal: 8 };
let closure_14 = arg1(dependencyMap[8]).createStyles(obj1);
const obj4 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/notifications/native/GuildHighlightsNotificationsActionSheet.tsx");

export default function SummaryFeedbackActionSheet(guildId) {
  let guild;
  let notifyHighlights;
  guildId = guildId.guildId;
  const arg1 = guildId;
  const feedbackSettings = guildId.feedbackSettings;
  const importDefault = feedbackSettings;
  const tmp = callback4();
  const ref = React.useRef(null);
  const dependencyMap = ref;
  const tmp3 = callback(React.useState(undefined), 2);
  const first = tmp3[0];
  let callback = first;
  const React = tmp3[1];
  const tmp5 = callback(React.useState(false), 2);
  const first1 = tmp5[0];
  const View = first1;
  let closure_6 = tmp5[1];
  const tmp7 = callback(React.useState(false), 2);
  let closure_7 = tmp7[1];
  const items = [first1, feedbackSettings];
  callback = React.useCallback((rating) => {
    let tmp = first1;
    if (!first1) {
      rating = undefined;
      if (null != rating) {
        rating = rating.rating;
      }
      tmp = null == rating;
    }
    if (!tmp) {
      let tmp6 = null == feedbackSettings;
      if (!tmp6) {
        tmp6 = null == feedbackSettings.onFeedbackCompleted;
      }
      if (!tmp6) {
        feedbackSettings.onFeedbackCompleted(rating);
      }
      guildId(ref[12]).handleSurveyCleanup();
      guild(true);
      const obj = guildId(ref[12]);
    }
  }, items);
  const items1 = [first, callback];
  const effect = React.useEffect(() => () => {
    callback(closure_3);
  }, items1);
  const items2 = [callback];
  const callback1 = React.useCallback((arg0) => {
    callback(arg0);
    if (callback2(arg0)) {
      callback(arg0);
      lib(false);
    } else {
      lib(true);
    }
    guildId(ref[12]).handleSurveyCleanup();
  }, items2);
  const callback2 = React.useCallback(() => {
    const current = ref.current;
    if (null != current) {
      current.expandActionSheet();
    }
    lib(false);
  }, []);
  let obj = arg1(dependencyMap[13]);
  const items3 = [closure_7, closure_6];
  const items4 = [guildId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items3, () => ({ guild: guild.getGuild(guildId), muted: lib.isMuted(guildId), notifyHighlights: lib.getNotifyHighlights(guildId) }), items4);
  let muted = stateFromStoresObject.muted;
  let reasons;
  ({ guild, notifyHighlights } = stateFromStoresObject);
  if (null != feedbackSettings) {
    reasons = feedbackSettings.reasons;
  }
  if (null == reasons) {
    let num6 = 0;
    if (tmp14) {
      let num7 = 148;
      if (first1) {
        num7 = 64;
      }
      num6 = num7;
    }
    const sum = 316 + num6 + importDefault(dependencyMap[16])().bottom;
    let tmp24 = !tmp14;
    if (tmp14) {
      tmp24 = isFeedbackComplete(first);
    }
    if (!tmp24) {
      let rating;
      if (null != first) {
        rating = first.rating;
      }
      tmp24 = null == rating;
    }
    obj = { scrollable: true, ref };
    let tmp30;
    if (tmp24) {
      tmp30 = sum;
    }
    obj.contentHeight = tmp30;
    obj.startHeight = sum;
    obj = { contentContainerStyle: tmp.contentContainer };
    let tmp34;
    if (tmp7[0]) {
      tmp34 = callback2;
    }
    obj.onLayout = tmp34;
    const obj1 = {};
    const obj2 = { style: tmp.header };
    const obj3 = { guild };
    const items5 = [callback2(GuildPill, obj3), , ];
    const obj4 = { delete: true, dispatch: true, raw: true, style: tmp.headerTitle };
    const intl4 = arg1(dependencyMap[14]).intl;
    obj4.children = intl4.string(arg1(dependencyMap[14]).t.o8Bypv);
    items5[1] = callback2(arg1(dependencyMap[11]).Text, obj4);
    const obj5 = { style: tmp.centerText };
    const intl5 = arg1(dependencyMap[14]).intl;
    const obj6 = {};
    let obj11 = importDefault(dependencyMap[20]);
    obj6.helpUrl = obj11.getArticleURL(callback.HIGHLIGHTS_NOTIFICATIONS);
    obj5.children = intl5.format(arg1(dependencyMap[14]).t.enfuur, obj6);
    items5[2] = callback2(arg1(dependencyMap[19]).TextWithIOSLinkWorkaround, obj5);
    obj2.children = items5;
    const items6 = [callback3(View, obj2), , , ];
    let tmp45 = null != null;
    if (tmp45) {
      const obj7 = { style: tmp.feedback, children: null };
      tmp45 = callback2(importDefault(dependencyMap[21]).View, obj7);
    }
    items6[1] = tmp45;
    const tmp50 = isFeedbackGood(first);
    let tmp52Result = !tmp50;
    if (!tmp50) {
      const obj8 = { style: tmp.settings };
      const obj9 = { disabled: muted };
      const intl6 = arg1(dependencyMap[14]).intl;
      obj9.label = intl6.string(arg1(dependencyMap[14]).t.MVi7LQ);
      if (!muted) {
        muted = notifyHighlights === constants.DISABLED;
      }
      obj9.value = muted;
      obj9.onValueChange = function onValueChange(arg0) {
        let obj = feedbackSettings(ref[24]);
        obj = { notify_highlights: arg0 ? tmp2.DISABLED : tmp2.ENABLED };
        const NotificationLabel = guildId(ref[25]).NotificationLabel;
        const result = obj.updateGuildNotificationSettings(guildId, obj, NotificationLabel.highlights(!arg0));
      };
      obj8.children = callback2(arg1(dependencyMap[23]).FormSwitchRow, obj9);
      tmp52Result = callback2(arg1(dependencyMap[22]).Card, obj8);
      const tmp52 = callback2;
      const tmp55 = callback2;
    }
    items6[2] = tmp52Result;
    const obj10 = { style: tmp.centerText };
    const intl7 = arg1(dependencyMap[14]).intl;
    obj11 = {
      notifSettingsHook() {
          feedbackSettings(ref[26]).hideActionSheet();
          const obj = feedbackSettings(ref[26]);
          feedbackSettings(ref[24]).open(guildId);
        }
    };
    obj10.children = intl7.format(arg1(dependencyMap[14]).t.F9rfLX, obj11);
    items6[3] = callback2(arg1(dependencyMap[19]).TextWithIOSLinkWorkaround, obj10);
    obj1.children = items6;
    obj.children = callback3(View, obj1);
    obj.children = callback2(arg1(dependencyMap[18]).BottomSheetScrollView, obj);
    return callback2(arg1(dependencyMap[17]).BottomSheet, obj);
  } else if (isFeedbackComplete(first)) {
    const obj12 = {};
    const items7 = [, ];
    ({ centerText: arr7[0], thanks: arr7[1] } = tmp);
    obj12.style = items7;
    const intl3 = tmp17(tmp18[14]).intl;
    obj12.children = intl3.string(tmp17(tmp18[14]).t.kZbFIO);
    let tmp16Result = tmp16(tmp17(tmp18[11]).Text, obj12);
  } else {
    const obj13 = {};
    const intl = tmp17(tmp18[14]).intl;
    obj13.ratingsBodyLabel = intl.string(tmp17(tmp18[14]).t.Yzl7Or);
    const intl2 = tmp17(tmp18[14]).intl;
    obj13.reasonsHeaderLabel = intl2.string(tmp17(tmp18[14]).t.g1q5fr);
    let reasons1;
    if (null != feedbackSettings) {
      reasons1 = feedbackSettings.reasons;
    }
    if (null == reasons1) {
      reasons1 = [];
    }
    obj13.reasons = reasons1;
    obj13.trackOpen = null != feedbackSettings ? feedbackSettings.onFeedbackShown : () => {

    };
    obj13.onFeedbackChanged = callback1;
    tmp16Result = tmp16(tmp17(tmp18[15]).FeedbackForm, obj13);
  }
};
