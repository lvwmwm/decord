// Module ID: 14814
// Function ID: 111668
// Name: HappeningNowCardEmbeddedActivity
// Dependencies: []
// Exports: default

// Module 14814 (HappeningNowCardEmbeddedActivity)
let HAPPENING_NOW_CONTENT_HEIGHT;
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
({ HAPPENING_NOW_CONTENT_HEIGHT, HappeningNowCardTrackingType: closure_7 } = arg1(dependencyMap[4]));
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = { content: { "Bool(false)": "Lightbox Frame", "Bool(false)": "EdgeHTML" }, cardImage: { height: HAPPENING_NOW_CONTENT_HEIGHT, minWidth: HAPPENING_NOW_CONTENT_HEIGHT, marginRight: 12 } };
obj = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: importDefault(dependencyMap[8]).radii.sm, borderWidth: 1, borderColor: importDefault(dependencyMap[8]).colors.BORDER_SUBTLE };
obj.activityBackground = obj;
obj.cardTitle = { marginTop: 2 };
let closure_11 = obj.createStyles(obj);
let closure_12 = { code: "function HappeningNowCardEmbeddedActivityTsx1(){const{viewableCardKeys,cardKey}=this.__closure;return viewableCardKeys.get().find(function(key){return key===cardKey;})!=null;}" };
let closure_13 = { code: "function HappeningNowCardEmbeddedActivityTsx2(isViewable,previous){const{runOnJS,setHasViewed}=this.__closure;if(!isViewable||isViewable===previous)return;runOnJS(setHasViewed)(true);}" };
const tmp3 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardEmbeddedActivity.tsx");

export default function HappeningNowCardEmbeddedActivity(guildId) {
  let fullwidth;
  let voiceState;
  guildId = guildId.guildId;
  const arg1 = guildId;
  const index = guildId.index;
  const importDefault = index;
  const activity = guildId.activity;
  const dependencyMap = activity;
  const userId = guildId.userId;
  let callback = userId;
  const cardKey = guildId.cardKey;
  const React = cardKey;
  let flag = guildId.panelVariant;
  ({ voiceState, fullwidth } = guildId);
  if (flag === undefined) {
    flag = false;
  }
  let View;
  let closure_6;
  let context;
  let closure_8;
  let tmp10;
  let closure_10;
  const tmp = callback2();
  let obj = arg1(dependencyMap[9]);
  const items = [closure_6];
  const items1 = [activity];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const items = [];
    const guildId = items;
    if (null != activity) {
      const userIds = activity.userIds;
      const item = userIds.forEach((arg0) => {
        const user = user.getUser(arg0);
        if (null != user) {
          items.push(user);
        }
      });
    }
    return items;
  }, items1);
  let obj1 = arg1(dependencyMap[10]);
  const channelId = voiceState.channelId;
  View = channelId;
  const result = obj1.formatVoiceActivityTitle(stateFromStoresArray, guildId);
  let applicationId;
  if (null != activity) {
    applicationId = activity.applicationId;
  }
  const items2 = [applicationId];
  const first = callback(importDefault(dependencyMap[11])(items2), 1)[0];
  closure_6 = first;
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
  callback = React.useCallback(() => {
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
      if (null != closure_5) {
        tmp(closure_5, true);
      }
    });
  }, items3);
  context = React.useContext(arg1(dependencyMap[16]).ViewableHappeningNowCardKeysContext);
  closure_8 = React.useRef(cardKey);
  const value = context.get();
  const tmp9 = callback(React.useState(null != value.find((arg0) => arg0 === cardKey)), 2);
  tmp10 = tmp9[1];
  closure_10 = React.useRef(context);
  const effect = React.useEffect(() => {
    closure_10.current = context;
  });
  const items4 = [cardKey];
  const effect1 = React.useEffect(() => {
    if (cardKey !== ref.current) {
      ref.current = cardKey;
      const current = ref2.current;
      const value = current.get();
      tmp10(null != value.find((arg0) => arg0 === closure_4));
    }
  }, items4);
  let obj4 = arg1(dependencyMap[17]);
  const fn = function b() {
    const value = context.get();
    return null != value.find((arg0) => arg0 === closure_4);
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
        tmp5 = closure_9;
        flag = true;
        tmp6 = obj.runOnJS(closure_9)(true);
      }
      return;
    }
  }
  obj = { runOnJS: arg1(dependencyMap[17]).runOnJS, setHasViewed: tmp10 };
  T.__closure = obj;
  T.__workletHash = 17292462926115;
  T.__initData = closure_13;
  const animatedReaction = obj4.useAnimatedReaction(fn, T);
  const tmp3 = importDefault(dependencyMap[11]);
  if (tmp9[0]) {
    obj = { type: arg1(dependencyMap[19]).ImpressionTypes.VIEW, name: arg1(dependencyMap[19]).ImpressionNames.EMBEDDED_ACTIVITY_HAPPENING_NOW };
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
  importDefault(dependencyMap[18])(obj2);
  if (0 === stateFromStoresArray.length) {
    const obj3 = { panelVariant: flag };
    let tmp37Result = tmp10(arg1(dependencyMap[20]).HappeningNowCardPlaceholder, obj3);
  } else {
    obj4 = { onPress: callback };
    let str = "medium";
    if (fullwidth) {
      str = "full";
    }
    obj4.width = str;
    obj4.IconComponent = arg1(dependencyMap[22]).AppsIcon;
    obj4.panelVariant = flag;
    let tmp22 = null != iconURL;
    if (tmp22) {
      const obj5 = { style: tmp.cardImage };
      const obj6 = {};
      const obj7 = { uri: iconURL };
      obj6.source = obj7;
      obj6.style = tmp.activityBackground;
      obj5.children = tmp10(importDefault(dependencyMap[23]), obj6);
      tmp22 = tmp10(View, obj5);
    }
    const items5 = [tmp22, ];
    const obj8 = { style: tmp.content };
    const obj9 = { users: stateFromStoresArray, userLimit: 3, guildId };
    const items6 = [tmp10(arg1(dependencyMap[24]).HappeningNowAvatarStack, obj9), , ];
    const obj10 = { lineClamp: 1, style: tmp.cardTitle, children: result };
    items6[1] = tmp10(arg1(dependencyMap[21]).HappeningNowCardHeader, obj10);
    const obj11 = {};
    let name;
    if (null != first) {
      name = first.name;
    }
    obj11.children = name;
    items6[2] = tmp10(arg1(dependencyMap[21]).HappeningNowCardSubtitle, obj11);
    obj8.children = items6;
    items5[1] = closure_10(View, obj8);
    obj4.children = items5;
    tmp37Result = closure_10(importDefault(dependencyMap[21]), obj4);
    const tmp27 = closure_10;
    const tmp28 = View;
    const tmp29 = tmp10;
    const tmp37 = closure_10;
    const tmp40 = importDefault(dependencyMap[21]);
  }
  return tmp37Result;
};
