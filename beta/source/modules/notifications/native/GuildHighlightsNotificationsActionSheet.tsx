// Module ID: 11120
// Function ID: 11121
// Name: GuildHighlightsNotificationsActionSheet
// Dependencies: [32, 19, 17, 2067, 5017, 1074, 11121, 21, 4836, 576, 5896, 4832, 11122, 563, 1115, 11123, 1613, 6571, 6045, 2111, 4566, 5919, 8053, 6540, 6535, 4800, 2]
// Exports: default

// Module 11120 (GuildHighlightsNotificationsActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import GuildIcon from "GuildIcon" /* 5896 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6535 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6540 */;
import Constants2 from "Constants" /* 11121 */;
import PushFeedbackActions from "PushFeedbackActions" /* 11122 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
let BottomSheet;

let c9;
let closure_12;
let metroImportAll;
let obj2;
let obj4;
let unpackModuleId;
function GuildPill(guild) {
  let items;
  let name;
  guild = guild.guild;
  const tmp = closure_14();
  const obj = { style: tmp.guildPill, children: items };
  const obj2 = { guild, size: GuildIcon.GuildIconSizes.SMALL_32, animate: true };
  const tmp5 = GuildIconDefault;
  items = [unpackModuleId(tmp5, obj2), ];
  const obj3 = { style: tmp.guildName, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: name };
  name = undefined;
  const Text = Text_Text.Text;
  const tmp2 = closure_12;
  const tmp3 = View;
  const tmp4 = unpackModuleId;
  if (guild != null) {
    name = guild.name;
  }
  items[1] = tmp4(Text, obj3);
  return tmp2(tmp3, obj);
}
let react = react_mod;
const View = react_native.View;
({ HelpdeskArticles: metroImportAll, HighlightSettings: c9 } = Constants);
const FeedbackRating = Constants2.FeedbackRating;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { contentContainer: { padding: 24, alignItems: "center", justifyContent: "center" }, header: { alignItems: "center", paddingBottom: 24 }, headerTitle: { marginBottom: 4 }, centerText: { textAlign: "center" }, feedback: { marginTop: 16, alignItems: "stretch", alignSelf: "stretch", paddingBottom: 16 }, thanks: { height: 40, textAlign: "center", textAlignVertical: "center" }, settings: obj2 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginVertical: 8, padding: 0 };
let closure_13 = createStyles.createStyles(obj);
createStyles = createStyles_mod;
let obj3 = { guildPill: obj4, guildName: { paddingHorizontal: 8 } };
obj4 = { flexDirection: "row", padding: 8, marginBottom: 16, backgroundColor: nativeDefault.colors.GUILD_NOTIFICATIONS_BOTTOM_SHEET_PILL_BACKGROUND, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
let closure_14 = createStyles(obj3);
let result = size.fileFinishedImporting("modules/notifications/native/GuildHighlightsNotificationsActionSheet.tsx");

export default function SummaryFeedbackActionSheet(guildId) {
  let BottomSheetScrollView;
  let FormSwitchRow;
  let closure_4;
  let enfuur;
  let format;
  let guild;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl6;
  let intl7;
  let items5;
  let items6;
  let notifyHighlights;
  let obj11;
  let obj14;
  let obj15;
  let obj17;
  let obj7;
  let reasons1;
  let tmp22Result;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  guildId = guildId.guildId;
  const feedbackSettings = guildId.feedbackSettings;
  let first;
  react = undefined;
  let tmp = closure_13();
  const ref = react.useRef(null);
  const tmp3 = first(react.useState(undefined), 2);
  first = tmp3[0];
  react = tmp3[1];
  let tmp4 = first(react.useState(false), 2);
  const first1 = tmp4[0];
  let closure_6 = tmp4[1];
  const tmp6 = first(react.useState(false), 2);
  let closure_7 = tmp6[1];
  const items = [first1, feedbackSettings];
  const first2 = tmp6[0];
  const callback = react.useCallback((rating) => {
    let tmp = first1;
    if (!tmp) {
      rating = undefined;
      if (rating != null) {
        rating = rating.rating;
      }
      tmp = null == rating;
    }
    if (!tmp) {
      const tmp4 = feedbackSettings;
      if (feedbackSettings != null) {
        const onFeedbackCompleted = tmp4.onFeedbackCompleted;
        if (onFeedbackCompleted != null) {
          onFeedbackCompleted(rating);
        }
      }
      const obj = PushFeedbackActions;
      obj.handleSurveyCleanup();
      closure_6(true);
    }
  }, items);
  const items1 = [first, callback];
  const effect = react.useEffect(() => () => {
    callback(first);
  }, items1);
  const items2 = [callback];
  const callback1 = react.useCallback((arg0) => {
    closure_4(arg0);
    let obj = arg0;
    if (arg0 == null) {
      obj = {};
    }
    const tmp2 = obj.rating === FeedbackRating.GOOD || null != obj.reason;
    if (tmp2) {
      callback(arg0);
      closure_7(false);
    } else {
      closure_7(true);
    }
    const obj2 = PushFeedbackActions;
    obj2.handleSurveyCleanup();
  }, items2);
  const callback2 = react.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.expandActionSheet();
    }
    closure_7(false);
  }, []);
  let obj2 = guildId(ref[13]);
  const items3 = [closure_7, closure_6];
  const items4 = [guildId];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items3, () => {
    const obj = { guild: GuildStore.getGuild(guildId), muted: UserGuildSettingsStore.isMuted(guildId), notifyHighlights: UserGuildSettingsStore.getNotifyHighlights(guildId) };
    return obj;
  }, items4);
  let muted = stateFromStoresObject.muted;
  let reasons;
  ({ guild, notifyHighlights } = stateFromStoresObject);
  if (feedbackSettings != null) {
    reasons = feedbackSettings.reasons;
  }
  let tmp17 = null;
  if (null != reasons) {
    let tmp20Result;
    let obj = first;
    if (first == null) {
      obj = {};
    }
    const tmp19 = obj.rating === FeedbackRating.GOOD || null != obj.reason;
    if (tmp19) {
      const obj3 = { style: items5, variant: "heading-md/semibold", color: "text-brand", children: intl3.string(guildId(ref[14]).t.kZbFIO) };
      items5 = [, ];
      ({ centerText: arr7[0], thanks: arr7[1] } = tmp);
      const Text = tmp12(tmp13[11]).Text;
      intl3 = tmp12(tmp13[14]).intl;
      tmp20Result = tmp20(Text, obj3);
    } else {
      const obj4 = {
        ratingsBodyLabel: intl.string(guildId(ref[14]).t.Yzl7Or),
        reasonsHeaderLabel: intl2.string(guildId(ref[14]).t.g1q5fr),
        reasons: reasons1,
        trackOpen: null != feedbackSettings ? feedbackSettings.onFeedbackShown : (() => {

            }),
        onFeedbackChanged: callback1
      };
      const FeedbackForm = tmp12(tmp13[15]).FeedbackForm;
      intl = tmp12(tmp13[14]).intl;
      intl2 = tmp12(tmp13[14]).intl;
      reasons1 = undefined;
      if (feedbackSettings != null) {
        reasons1 = feedbackSettings.reasons;
      }
      if (reasons1 == null) {
        reasons1 = [];
      }
      tmp20Result = tmp20(FeedbackForm, obj4);
    }
    tmp17 = tmp20Result;
  }
  let num = 0;
  const bottom = feedbackSettings(tmp13[16])().bottom;
  if (null != reasons) {
    let num2 = 148;
    if (first1) {
      num2 = 64;
    }
    num = num2;
  }
  const sum = 316 + num + bottom;
  let tmp24 = !tmp16;
  if (null != reasons) {
    let obj5 = first;
    if (first == null) {
      obj5 = {};
    }
    tmp24 = obj5.rating === FeedbackRating.GOOD || null != obj5.reason;
  }
  if (!tmp24) {
    let rating;
    if (first != null) {
      rating = first.rating;
    }
    tmp24 = null == rating;
  }
  const obj6 = { scrollable: true, ref, contentHeight: tmp29, startHeight: sum, children: closure_11(BottomSheetScrollView, obj7) };
  tmp29 = undefined;
  BottomSheet = tmp12(tmp13[17]).BottomSheet;
  if (tmp24) {
    tmp29 = sum;
  }
  obj7 = { contentContainerStyle: tmp.contentContainer, onLayout: tmp30, children: tmp31(tmp32, obj15) };
  tmp30 = undefined;
  BottomSheetScrollView = tmp12(tmp13[18]).BottomSheetScrollView;
  if (first2) {
    tmp30 = callback2;
  }
  const obj8 = { style: tmp.header, children: items6 };
  items6 = [closure_11(GuildPill, { guild }), , ];
  const obj9 = { style: tmp.headerTitle, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl4.string(guildId(ref[14]).t.o8Bypv) };
  const Text2 = tmp12(tmp13[11]).Text;
  intl4 = tmp12(tmp13[14]).intl;
  items6[1] = closure_11(Text2, obj9);
  const obj10 = { style: tmp.centerText, variant: "text-md/medium", color: "text-default", children: format(enfuur, obj11) };
  const Text3 = tmp12(tmp13[11]).Text;
  const intl5 = tmp12(tmp13[14]).intl;
  format = intl5.format;
  obj11 = { helpUrl: tmp22Result.getArticleURL(callback.HIGHLIGHTS_NOTIFICATIONS) };
  enfuur = tmp12(tmp13[14]).t.enfuur;
  tmp22Result = feedbackSettings(ref[19]);
  items6[2] = closure_11(Text3, obj10);
  const items7 = [closure_12(first1, obj8), , , ];
  let tmp28Result = null != tmp17;
  tmp31 = closure_12;
  tmp32 = first1;
  if (tmp28Result) {
    const obj12 = { style: tmp.feedback, children: tmp17 };
    tmp28Result = tmp28(tmp22(tmp13[20]).View, obj12);
  }
  items7[1] = tmp28Result;
  if (first == null) {
    first = {};
  }
  let tmp28Result2 = first.rating !== FeedbackRating.GOOD;
  if (tmp28Result2) {
    const obj13 = { style: tmp.settings, shadow: "low", border: "subtle", children: closure_11(FormSwitchRow, obj14) };
    const Card = tmp12(tmp13[21]).Card;
    obj14 = {
      disabled: muted,
      label: intl6.string(guildId(ref[14]).t.MVi7LQ),
      value: muted,
      onValueChange(arg0) {
          const updateGuildNotificationSettings = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
          const obj = { notify_highlights: arg0 ? constants.DISABLED : constants.ENABLED };
          NotificationSettingsModalActionCreatorsDefault;
          const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
          const result = updateGuildNotificationSettings(guildId, obj, NotificationLabel.highlights(!arg0));
        }
    };
    FormSwitchRow = tmp12(tmp13[22]).FormSwitchRow;
    intl6 = tmp12(tmp13[14]).intl;
    if (!muted) {
      muted = notifyHighlights === constants.DISABLED;
    }
    tmp28Result2 = tmp28(Card, obj13);
  }
  obj15 = { children: items7 };
  items7[2] = tmp28Result2;
  const obj16 = { style: tmp.centerText, variant: "text-sm/medium", color: "text-default", children: intl7.format(guildId(ref[14]).t.F9rfLX, obj17) };
  const Text4 = tmp12(tmp13[11]).Text;
  intl7 = tmp12(tmp13[14]).intl;
  obj17 = {
    notifSettingsHook() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = NotificationSettingsModalActionCreatorsDefault;
      obj2.open(guildId);
    }
  };
  items7[3] = closure_11(Text4, obj16);
  return closure_11(BottomSheet, obj6);
};
