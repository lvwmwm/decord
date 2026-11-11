// Module ID: 18683
// Function ID: 18684
// Name: HappeningNowCardEmbeddedActivity
// Dependencies: [32, 19, 17, 1385, 17800, 1072, 21, 5243, 575, 563, 18684, 7196, 1252, 7871, 13936, 2118, 18656, 1652, 1705, 6275, 1260, 18667, 17801, 8036, 5957, 18680, 2]
// Exports: default

// Module 18683 (HappeningNowCardEmbeddedActivity)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7871 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1385 */;
import HappeningNowConstants from "HappeningNowConstants" /* 17800 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

let user;

let HAPPENING_NOW_CONTENT_HEIGHT;
let c10;
let c9;
let metroImportDefault;
let size;
const View = react_native.View;
({ HAPPENING_NOW_CONTENT_HEIGHT, HappeningNowCardTrackingType: metroImportDefault } = HappeningNowConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { content: { flexShrink: 1, gap: 2 }, cardImage: { height: HAPPENING_NOW_CONTENT_HEIGHT, minWidth: HAPPENING_NOW_CONTENT_HEIGHT, marginRight: 12 }, activityBackground: size, cardTitle: { marginTop: 2 } };
size = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_11 = createStyles.createStyles(obj);
let closure_12 = { code: "(function HappeningNowCardEmbeddedActivityTsx1(){let[viewableCardKeys,cardKey]=this.__closure;return viewableCardKeys.get().find(function(key){return key===cardKey;})!=null;})" };
let closure_13 = { code: "(function HappeningNowCardEmbeddedActivityTsx2(isViewable,previous){let[scheduleOnRN,setHasViewed]=this.__closure;if(!isViewable||isViewable===previous)return;scheduleOnRN(setHasViewed,true);})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardEmbeddedActivity.tsx");

export default function HappeningNowCardEmbeddedActivity(guildId) {
  let compositeInstanceId;
  let fullwidth;
  let iconURL;
  let id1;
  let items10;
  let items9;
  let obj10;
  let obj11;
  let obj5;
  let obj6;
  let str;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp37Result;
  let voiceState;
  guildId = guildId.guildId;
  const index = guildId.index;
  const activity = guildId.activity;
  const userId = guildId.userId;
  const cardKey = guildId.cardKey;
  let flag = guildId.panelVariant;
  ({ voiceState, fullwidth } = guildId);
  if (flag === undefined) {
    flag = false;
  }
  let first;
  let context;
  let ref;
  let closure_9;
  let ref2;
  let tmp = closure_11();
  let tmp2 = guildId;
  let obj = guildId(activity[9]);
  let items = [first];
  let items1 = [activity];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const items = [];
    if (null != activity) {
      const userIds = activity.userIds;
      const item = userIds.forEach((item) => {
        user = user.getUser(item);
        if (null != user) {
          items.push(user);
        }
      });
    }
    return items;
  }, items1);
  const channelId = voiceState.channelId;
  const obj2 = guildId(activity[10]);
  const result = obj2.formatVoiceActivityTitle(stateFromStoresArray, guildId);
  let applicationId;
  const tmp6 = index(activity[11]);
  if (activity != null) {
    applicationId = activity.applicationId;
  }
  const items2 = [applicationId];
  first = userId(tmp6(items2), 1)[0];
  const tmp8 = userId;
  if (first != null) {
    iconURL = first.getIconURL(64);
  }
  const items3 = [activity, , , , , ];
  let id;
  const useCallback = cardKey.useCallback;
  if (first != null) {
    id = first.id;
  }
  items3[1] = id;
  items3[2] = channelId;
  items3[3] = guildId;
  items3[4] = index;
  items3[5] = userId;
  const callback = useCallback(() => {
    let compositeInstanceId;
    let id;
    let items;
    let items1;
    const tmp = dependencyMap;
    const tmp2 = AnalyticsUtilsDefault;
    const track = tmp2.track;
    const ACTIVITY_CARD_CLICKED = AnalyticEvents.ACTIVITY_CARD_CLICKED;
    const obj = { order: index, guild_id: guildId, type: metroImportDefault.EMBEDDED_ACTIVITY_CARD, location_stack: items, application_id: id, activity_session_id: compositeInstanceId, destination_channel_id: channelId, highlighted_user_ids: items1 };
    items = [AnalyticsLocationDefault.HAPPENING_NOW_EMBEDDED_ACTIVITY];
    id = undefined;
    if (first != null) {
      id = first.id;
    }
    compositeInstanceId = undefined;
    if (activity != null) {
      compositeInstanceId = activity.compositeInstanceId;
    }
    items1 = [userId];
    track(ACTIVITY_CARD_CLICKED, obj);
    const promise = asyncRequire(13936, tmp.paths);
    promise.then((result) => {
      if (null != channelId) {
        tmp(tmp2, true);
      }
    });
  }, items3);
  context = obj4.useContext(tmp2(tmp3[16]).ViewableHappeningNowCardKeysContext);
  ref = obj4.useRef(cardKey);
  const useState = obj4.useState;
  let value = context.get();
  const tmp8Result = tmp8(useState(null != value.find((item) => item === cardKey)), 2);
  closure_9 = tmp14;
  const first1 = tmp8Result[0];
  ref2 = obj4.useRef(context);
  const effect = obj4.useEffect(() => {
    ref2.current = context;
  });
  const items4 = [cardKey];
  const effect1 = obj4.useEffect(() => {
    if (cardKey !== ref.current) {
      ref.current = cardKey;
      const current = ref2.current;
      const value = current.get();
      closure_9(null != value.find((item) => item === cardKey));
    }
  }, items4);
  const items5 = [closure_12, context, cardKey];
  let c0;
  let c1;
  [tmp18, tmp19, tmp20] = items5;
  const tmp2Result = tmp2(activity[17]);
  class HappeningNowCardEmbeddedActivityTsx1 {
    constructor() {
      const value = _undefined.get();
      return null != value.find((item) => item === closure_1_1);
    }
  }
  const items6 = [tmp19, tmp20];
  HappeningNowCardEmbeddedActivityTsx1.__closure = items6;
  HappeningNowCardEmbeddedActivityTsx1.__workletHash = 14378880099274;
  HappeningNowCardEmbeddedActivityTsx1.__initData = tmp18;
  const items7 = [closure_13, , ];
  const useAnimatedReaction = tmp2Result.useAnimatedReaction;
  items7[1] = tmp2(activity[18]).scheduleOnRN;
  items7[2] = tmp8Result[1];
  c0 = undefined;
  c1 = undefined;
  [tmp21, tmp22, tmp23] = items7;
  class HappeningNowCardEmbeddedActivityTsx2 {
    constructor(arg0, arg1) {
      const tmp = arg0 && arg0 !== arg1;
      if (tmp) {
        _undefined(c1, true);
      }
    }
  }
  const items8 = [tmp22, tmp23];
  HappeningNowCardEmbeddedActivityTsx2.__closure = items8;
  HappeningNowCardEmbeddedActivityTsx2.__workletHash = 1153066654263;
  HappeningNowCardEmbeddedActivityTsx2.__initData = tmp21;
  const animatedReaction = useAnimatedReaction(HappeningNowCardEmbeddedActivityTsx1, HappeningNowCardEmbeddedActivityTsx2);
  const tmp5Result = index(activity[19]);
  if (first1) {
    const obj3 = { type: tmp2(activity[20]).ImpressionTypes.VIEW, name: tmp2(activity[20]).ImpressionNames.EMBEDDED_ACTIVITY_HAPPENING_NOW, properties: obj5 };
    obj5 = { user_id: userId, guild_id: guildId, application_id: id1, activity_session_id: compositeInstanceId };
    id1 = undefined;
    if (first != null) {
      id1 = first.id;
    }
    compositeInstanceId = undefined;
    if (activity != null) {
      compositeInstanceId = activity.compositeInstanceId;
    }
    obj6 = obj3;
  } else {
    obj6 = {};
  }
  tmp5Result(obj6);
  if (0 === stateFromStoresArray.length) {
    const obj7 = { panelVariant: flag };
    tmp37Result = closure_9(tmp2(tmp3[21]).HappeningNowCardPlaceholder, obj7);
  } else {
    const obj8 = { onPress: callback, width: str, IconComponent: tmp2(activity[23]).AppsIcon, panelVariant: flag, children: items9 };
    str = "medium";
    const tmp5Result2 = index(activity[22]);
    if (fullwidth) {
      str = "full";
    }
    let tmp29 = null != iconURL;
    if (tmp29) {
      const obj9 = { style: tmp.cardImage, children: closure_9(index(activity[24]), obj10) };
      obj10 = { source: obj11, style: tmp.activityBackground };
      obj11 = { uri: iconURL };
      tmp29 = closure_9(channelId, obj9);
    }
    items9 = [tmp29, ];
    const obj12 = { style: tmp.content, children: items10 };
    const obj13 = { users: stateFromStoresArray, userLimit: 3, guildId };
    items10 = [closure_9(tmp2(tmp3[25]).HappeningNowAvatarStack, obj13), , ];
    const obj14 = { lineClamp: 1, style: tmp.cardTitle, children: result };
    items10[1] = closure_9(tmp2(activity[22]).HappeningNowCardHeader, obj14);
    let name;
    const HappeningNowCardSubtitle = tmp2(tmp3[22]).HappeningNowCardSubtitle;
    const tmp32 = channelId;
    const tmp33 = closure_9;
    if (first != null) {
      name = first.name;
    }
    const obj15 = { children: name };
    items10[2] = tmp33(HappeningNowCardSubtitle, obj15);
    items9[1] = ref2(tmp32, obj12);
    tmp37Result = tmp37(tmp5Result2, obj8);
  }
  return tmp37Result;
};
