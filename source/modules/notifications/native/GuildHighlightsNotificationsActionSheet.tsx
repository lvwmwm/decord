// Module ID: 9535
// Function ID: 74220
// Name: GuildPill
// Dependencies: [57, 31, 27, 1838, 4325, 653, 9536, 33, 4130, 689, 5513, 4126, 9537, 624, 1212, 9538, 1557, 5187, 5189, 1920, 3991, 5167, 7636, 5079, 5073, 4098, 2]
// Exports: default

// Module 9535 (GuildPill)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import closure_6 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import { FeedbackRating } from "FeedbackRating";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_8;
let closure_9;
const require = arg1;
function GuildPill(guild) {
  guild = guild.guild;
  const tmp = callback3();
  let obj = { style: tmp.guildPill };
  obj = { guild, size: require(5513) /* makeSizeStyle */.GuildIconSizes.SMALL_32, animate: true };
  const items = [callback(importDefault(5513), obj), ];
  obj = { style: tmp.guildName, variant: "heading-md/semibold", color: "mobile-text-heading-primary" };
  let name;
  if (null != guild) {
    name = guild.name;
  }
  obj.children = name;
  items[1] = callback(require(4126) /* Text */.Text, obj);
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
({ HelpdeskArticles: closure_8, HighlightSettings: closure_9 } = ME);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = { contentContainer: { padding: 24, alignItems: "center", justifyContent: "center" }, header: { alignItems: "center", paddingBottom: 24 }, headerTitle: { marginBottom: 4 }, centerText: { textAlign: "center" }, feedback: { marginTop: 16, alignItems: "stretch", alignSelf: "stretch", paddingBottom: 16 }, thanks: { height: 40, textAlign: "center", textAlignVertical: "center" } };
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, marginVertical: 8, padding: 0 };
_createForOfIteratorHelperLoose.settings = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = {};
let obj2 = { flexDirection: "row", padding: 8, marginBottom: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.GUILD_NOTIFICATIONS_BOTTOM_SHEET_PILL_BACKGROUND, alignItems: "center", justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
const merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_LOW);
obj1.guildPill = obj2;
obj1.guildName = { paddingHorizontal: 8 };
let closure_14 = _createForOfIteratorHelperLoose.createStyles(obj1);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/notifications/native/GuildHighlightsNotificationsActionSheet.tsx");

export default function SummaryFeedbackActionSheet(guildId) {
  let guild;
  let notifyHighlights;
  guildId = guildId.guildId;
  const feedbackSettings = guildId.feedbackSettings;
  let tmp = _createForOfIteratorHelperLoose();
  const ref = React.useRef(null);
  const tmp3 = first(React.useState(undefined), 2);
  first = tmp3[0];
  React = tmp3[1];
  const tmp5 = first(React.useState(false), 2);
  const first1 = tmp5[0];
  let closure_6 = tmp5[1];
  const tmp7 = first(React.useState(false), 2);
  let _isNativeReflectConstruct = tmp7[1];
  const items = [first1, feedbackSettings];
  const callback = React.useCallback((rating) => {
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
    outer1_8(outer1_3);
  }, items1);
  const items2 = [callback];
  const callback1 = React.useCallback((arg0) => {
    callback(arg0);
    if (outer1_16(arg0)) {
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
  let obj = guildId(ref[13]);
  const items3 = [_isNativeReflectConstruct, closure_6];
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
    const sum = 316 + num6 + feedbackSettings(ref[16])().bottom;
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
    const items5 = [callback(GuildPill, obj3), , ];
    const obj4 = { style: tmp.headerTitle, variant: "heading-lg/semibold", color: "mobile-text-heading-primary" };
    const intl4 = guildId(ref[14]).intl;
    obj4.children = intl4.string(guildId(ref[14]).t.o8Bypv);
    items5[1] = callback(guildId(ref[11]).Text, obj4);
    const obj5 = { style: tmp.centerText, variant: "text-md/medium", color: "text-default" };
    const intl5 = guildId(ref[14]).intl;
    const obj6 = {};
    let obj11 = feedbackSettings(ref[19]);
    obj6.helpUrl = obj11.getArticleURL(callback.HIGHLIGHTS_NOTIFICATIONS);
    obj5.children = intl5.format(guildId(ref[14]).t.enfuur, obj6);
    items5[2] = callback(guildId(ref[11]).Text, obj5);
    obj2.children = items5;
    const items6 = [callback2(first1, obj2), , , ];
    let tmp45 = null != null;
    if (tmp45) {
      const obj7 = { style: tmp.feedback, children: null };
      tmp45 = callback(feedbackSettings(ref[20]).View, obj7);
    }
    items6[1] = tmp45;
    const tmp50 = isFeedbackGood(first);
    let tmp52Result = !tmp50;
    if (!tmp50) {
      const obj8 = { style: tmp.settings, shadow: "low", border: "subtle" };
      const obj9 = { disabled: muted };
      const intl6 = guildId(ref[14]).intl;
      obj9.label = intl6.string(guildId(ref[14]).t.MVi7LQ);
      if (!muted) {
        muted = notifyHighlights === constants.DISABLED;
      }
      obj9.value = muted;
      obj9.onValueChange = function onValueChange(arg0) {
        let obj = feedbackSettings(ref[23]);
        obj = { notify_highlights: arg0 ? tmp2.DISABLED : tmp2.ENABLED };
        const NotificationLabel = guildId(ref[24]).NotificationLabel;
        const result = obj.updateGuildNotificationSettings(guildId, obj, NotificationLabel.highlights(!arg0));
      };
      obj8.children = callback(guildId(ref[22]).FormSwitchRow, obj9);
      tmp52Result = callback(guildId(ref[21]).Card, obj8);
      const tmp52 = callback;
      const tmp55 = callback;
    }
    items6[2] = tmp52Result;
    const obj10 = { style: tmp.centerText, variant: "text-sm/medium", color: "text-default" };
    const intl7 = guildId(ref[14]).intl;
    obj11 = {
      notifSettingsHook() {
          feedbackSettings(ref[25]).hideActionSheet();
          const obj = feedbackSettings(ref[25]);
          feedbackSettings(ref[23]).open(guildId);
        }
    };
    obj10.children = intl7.format(guildId(ref[14]).t.F9rfLX, obj11);
    items6[3] = callback(guildId(ref[11]).Text, obj10);
    obj1.children = items6;
    obj.children = callback2(first1, obj1);
    obj.children = callback(guildId(ref[18]).BottomSheetScrollView, obj);
    return callback(guildId(ref[17]).BottomSheet, obj);
  } else if (isFeedbackComplete(first)) {
    const obj12 = { style: null, variant: "heading-md/semibold", color: "text-brand" };
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
    obj13.trackOpen = null != feedbackSettings ? feedbackSettings.onFeedbackShown : (() => {

    });
    obj13.onFeedbackChanged = callback1;
    tmp16Result = tmp16(tmp17(tmp18[15]).FeedbackForm, obj13);
  }
};
