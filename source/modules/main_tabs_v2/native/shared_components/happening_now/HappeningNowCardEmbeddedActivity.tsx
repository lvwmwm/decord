// Module ID: 14948
// Function ID: 113937
// Name: HappeningNowCardEmbeddedActivity
// Dependencies: [57, 31, 27, 1849, 14183, 653, 33, 4130, 689, 624, 14949, 5470, 675, 5484, 10815, 1934, 14921, 3991, 8559, 480, 14932, 14184, 9075, 5085, 14945, 2]
// Exports: default

// Module 14948 (HappeningNowCardEmbeddedActivity)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import HAPPENING_NOW_PANELS_CONTAINER_PADDING from "HAPPENING_NOW_PANELS_CONTAINER_PADDING";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let HAPPENING_NOW_CONTENT_HEIGHT;
let closure_10;
let closure_7;
let closure_9;
const require = arg1;
({ HAPPENING_NOW_CONTENT_HEIGHT, HappeningNowCardTrackingType: closure_7 } = HAPPENING_NOW_PANELS_CONTAINER_PADDING);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = { content: { flexShrink: 1, gap: 2 }, cardImage: { height: HAPPENING_NOW_CONTENT_HEIGHT, minWidth: HAPPENING_NOW_CONTENT_HEIGHT, marginRight: 12 } };
_createForOfIteratorHelperLoose = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.activityBackground = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.cardTitle = { marginTop: 2 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_12 = { code: "function HappeningNowCardEmbeddedActivityTsx1(){const{viewableCardKeys,cardKey}=this.__closure;return viewableCardKeys.get().find(function(key){return key===cardKey;})!=null;}" };
let closure_13 = { code: "function HappeningNowCardEmbeddedActivityTsx2(isViewable,previous){const{runOnJS,setHasViewed}=this.__closure;if(!isViewable||isViewable===previous)return;runOnJS(setHasViewed)(true);}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardEmbeddedActivity.tsx");

export default function HappeningNowCardEmbeddedActivity(guildId) {
  let fullwidth;
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
  let channelId;
  let first;
  let context;
  let closure_8;
  let callback;
  let closure_10;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = guildId(activity[9]);
  let items = [first];
  let items1 = [activity];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const items = [];
    if (null != activity) {
      const userIds = activity.userIds;
      const item = userIds.forEach((arg0) => {
        const user = first.getUser(arg0);
        if (null != user) {
          items.push(user);
        }
      });
    }
    return items;
  }, items1);
  let obj1 = guildId(activity[10]);
  channelId = voiceState.channelId;
  const result = obj1.formatVoiceActivityTitle(stateFromStoresArray, guildId);
  let applicationId;
  if (null != activity) {
    applicationId = activity.applicationId;
  }
  const items2 = [applicationId];
  first = userId(index(activity[11])(items2), 1)[0];
  if (null != first) {
    const iconURL = first.getIconURL(64);
  }
  const items3 = [activity, , , , , ];
  let id;
  if (null != first) {
    id = first.id;
  }
  items3[1] = id;
  items3[2] = channelId;
  items3[3] = guildId;
  items3[4] = index;
  items3[5] = userId;
  callback = cardKey.useCallback(() => {
    let obj = index(activity[12]);
    obj = { order: index, guild_id: guildId, type: context.EMBEDDED_ACTIVITY_CARD };
    const items = [index(activity[13]).HAPPENING_NOW_EMBEDDED_ACTIVITY];
    obj.location_stack = items;
    let id;
    if (null != first) {
      id = first.id;
    }
    obj.application_id = id;
    let compositeInstanceId;
    if (null != activity) {
      compositeInstanceId = activity.compositeInstanceId;
    }
    obj.activity_session_id = compositeInstanceId;
    obj.destination_channel_id = channelId;
    const items1 = [userId];
    obj.highlighted_user_ids = items1;
    obj.track(ref.ACTIVITY_CARD_CLICKED, obj);
    guildId(activity[15])(activity[14], activity.paths).then((arg0) => {
      if (null != outer1_5) {
        tmp(outer1_5, true);
      }
    });
  }, items3);
  context = cardKey.useContext(guildId(activity[16]).ViewableHappeningNowCardKeysContext);
  closure_8 = cardKey.useRef(cardKey);
  let value = context.get();
  const tmp9 = userId(cardKey.useState(null != value.find((arg0) => arg0 === cardKey)), 2);
  callback = tmp10;
  closure_10 = cardKey.useRef(context);
  const effect = cardKey.useEffect(() => {
    closure_10.current = context;
  });
  const items4 = [cardKey];
  const effect1 = cardKey.useEffect(() => {
    if (cardKey !== ref.current) {
      ref.current = cardKey;
      const current = ref2.current;
      const value = current.get();
      _undefined(null != value.find((arg0) => arg0 === outer1_4));
    }
  }, items4);
  let obj4 = guildId(activity[17]);
  const fn = function b() {
    const value = context.get();
    return null != value.find((arg0) => arg0 === outer1_4);
  };
  fn.__closure = { viewableCardKeys: context, cardKey };
  fn.__workletHash = 3043999664691;
  fn.__initData = closure_12;
  class T {
    constructor(arg0, arg1) {
      tmp = guildId;
      if (guildId) {
        tmp2 = arg1;
        tmp = guildId !== arg1;
      }
      if (tmp) {
        tmp3 = guildId;
        tmp4 = activity;
        num = 17;
        obj = guildId(activity[17]);
        tmp5 = c9;
        flag = true;
        tmp6 = obj.runOnJS(c9)(true);
      }
      return;
    }
  }
  obj = { runOnJS: guildId(activity[17]).runOnJS, setHasViewed: tmp10 };
  T.__closure = obj;
  T.__workletHash = 17292462926115;
  T.__initData = closure_13;
  const animatedReaction = obj4.useAnimatedReaction(fn, T);
  const tmp3 = index(activity[11]);
  if (tmp9[0]) {
    obj = { type: guildId(activity[19]).ImpressionTypes.VIEW, name: guildId(activity[19]).ImpressionNames.EMBEDDED_ACTIVITY_HAPPENING_NOW };
    obj1 = { user_id: userId, guild_id: guildId };
    let id1;
    if (null != first) {
      id1 = first.id;
    }
    obj1.application_id = id1;
    let compositeInstanceId;
    if (null != activity) {
      compositeInstanceId = activity.compositeInstanceId;
    }
    obj1.activity_session_id = compositeInstanceId;
    obj.properties = obj1;
    let obj2 = obj;
  } else {
    obj2 = {};
  }
  index(activity[18])(obj2);
  if (0 === stateFromStoresArray.length) {
    const obj3 = { panelVariant: flag };
    let tmp37Result = callback(guildId(activity[20]).HappeningNowCardPlaceholder, obj3);
  } else {
    obj4 = { onPress: callback };
    let str = "medium";
    if (fullwidth) {
      str = "full";
    }
    obj4.width = str;
    obj4.IconComponent = guildId(activity[22]).AppsIcon;
    obj4.panelVariant = flag;
    let tmp22 = null != iconURL;
    if (tmp22) {
      const obj5 = { style: tmp.cardImage };
      const obj6 = {};
      const obj7 = { uri: iconURL };
      obj6.source = obj7;
      obj6.style = tmp.activityBackground;
      obj5.children = callback(index(activity[23]), obj6);
      tmp22 = callback(channelId, obj5);
    }
    const items5 = [tmp22, ];
    const obj8 = { style: tmp.content };
    const obj9 = { users: stateFromStoresArray, userLimit: 3, guildId };
    const items6 = [callback(guildId(activity[24]).HappeningNowAvatarStack, obj9), , ];
    const obj10 = { lineClamp: 1, style: tmp.cardTitle, children: result };
    items6[1] = callback(guildId(activity[21]).HappeningNowCardHeader, obj10);
    const obj11 = {};
    let name;
    if (null != first) {
      name = first.name;
    }
    obj11.children = name;
    items6[2] = callback(guildId(activity[21]).HappeningNowCardSubtitle, obj11);
    obj8.children = items6;
    items5[1] = closure_10(channelId, obj8);
    obj4.children = items5;
    tmp37Result = closure_10(index(activity[21]), obj4);
    const tmp27 = closure_10;
    const tmp28 = channelId;
    const tmp29 = callback;
    const tmp37 = closure_10;
    const tmp40 = index(activity[21]);
  }
  return tmp37Result;
};
