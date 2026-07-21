// Module ID: 15584
// Function ID: 118922
// Name: Loading
// Dependencies: []
// Exports: default

// Module 15584 (Loading)
function Loading() {
  const tmp = callback5();
  const items = [];
  let num = 0;
  do {
    let tmp2 = closure_13;
    let tmp3 = closure_1;
    let tmp4 = closure_2;
    let obj = { row: num };
    let arr = items.push(closure_13(closure_1(closure_2[11]), obj, num));
    num = num + 1;
  } while (num < 10);
  obj = {};
  obj = { style: tmp.placeholderHeader };
  const items1 = [callback3(View, obj), callback3(View, { style: tmp.placeholderLabel }), items];
  obj.children = items1;
  return callback4(closure_14, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ setSendState: closure_6, useInstantInviteSendStates: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
const ActivityActionTypes = arg1(dependencyMap[5]).ActivityActionTypes;
const tmp2 = arg1(dependencyMap[3]);
({ InviteSendStates: closure_10, InviteTargetTypes: closure_11 } = arg1(dependencyMap[6]));
const NOOP_NULL = arg1(dependencyMap[7]).NOOP_NULL;
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_13, Fragment: closure_14, jsxs: closure_15 } = arg1(dependencyMap[8]));
let obj = arg1(dependencyMap[9]);
obj = {};
obj = { 1011943521: "redesign/message-preview/semibold", 1098867089: "primary", 289264: false, -1062441132: 600, borderRadius: importDefault(dependencyMap[10]).radii.sm, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_MOD_MUTED };
obj.placeholderHeader = obj;
const tmp4 = arg1(dependencyMap[8]);
obj.placeholderLabel = { borderRadius: importDefault(dependencyMap[10]).radii.sm, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_MOD_MUTED };
obj.emptyState = { backgroundColor: "transparent" };
const obj1 = { borderRadius: importDefault(dependencyMap[10]).radii.sm, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_MOD_MUTED };
obj.searchAndShareContainer = { borderTopWidth: 1, borderColor: importDefault(dependencyMap[10]).colors.BORDER_SUBTLE, marginTop: importDefault(dependencyMap[10]).space.PX_8, paddingVertical: importDefault(dependencyMap[10]).space.PX_8, paddingHorizontal: importDefault(dependencyMap[10]).space.PX_12, flexDirection: "column", gap: importDefault(dependencyMap[10]).space.PX_12 };
let closure_16 = obj.createStyles(obj);
const obj2 = { borderTopWidth: 1, borderColor: importDefault(dependencyMap[10]).colors.BORDER_SUBTLE, marginTop: importDefault(dependencyMap[10]).space.PX_8, paddingVertical: importDefault(dependencyMap[10]).space.PX_8, paddingHorizontal: importDefault(dependencyMap[10]).space.PX_12, flexDirection: "column", gap: importDefault(dependencyMap[10]).space.PX_12 };
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/activities/panel/native/ActivityInviteSheet.tsx");

export default function ActivityInviteSheet(activity) {
  let tmp10;
  activity = activity.activity;
  const arg1 = activity;
  const tmp = callback5();
  const analyticsLocations = importDefault(closure_2[12])(importDefault(closure_2[13]).ACTIVITY_INVITE_SHEET).analyticsLocations;
  const importDefault = analyticsLocations;
  const tmp3 = callback(React.useState(null), 2);
  const first = tmp3[0];
  closure_2 = tmp3[1];
  const tmp5 = callback2((arg0) => arg0);
  let callback = tmp5;
  const items = [activity, tmp5];
  const items1 = [analyticsLocations];
  callback = React.useCallback((arg0) => {
    const party = activity.party;
    let id;
    if (null != party) {
      id = party.id;
    }
    let tmp3 = null;
    if (null != id) {
      let tmp6;
      if (null != tmp5[id]) {
        tmp6 = tmp5[tmp2];
      }
      tmp3 = tmp6;
    }
    return tmp3;
  }, items);
  const items2 = [activity];
  const callback1 = React.useCallback((userId) => {
    let obj = analyticsLocations(closure_2[14]);
    obj.hideActionSheet();
    obj = { userId, sourceAnalyticsLocations: analyticsLocations };
    analyticsLocations(closure_2[15])(obj);
  }, items1);
  const callback2 = React.useCallback((item) => {
    const activity = item;
    function markInviteSent() {
      if (null != id) {
        callback2(id, arg0.item.id, constants.SENT);
      }
    }
    if (null != activity) {
      const party = activity.party;
      let id;
      if (null != party) {
        id = party.id;
      }
      const analyticsLocations = id;
      if (null != id) {
        callback2(id, tmp.item.id, constants2.SENDING);
        if (tmp.type === activity(closure_2[16]).RowTypes.CHANNEL) {
          let obj = { channelId: item.item.id, type: constants.JOIN, activity, location: analyticsLocations(closure_2[13]).ACTIVITY_INVITE_SHEET };
          const obj3 = analyticsLocations(closure_2[17]);
          const sendActivityInviteResult = analyticsLocations(closure_2[17]).sendActivityInvite(obj);
          analyticsLocations(closure_2[17]).sendActivityInvite(obj).then(markInviteSent).catch((arg0) => {
            callback(String(arg0));
          });
          const nextPromise = analyticsLocations(closure_2[17]).sendActivityInvite(obj).then(markInviteSent);
        } else if (tmp.type === activity(closure_2[16]).RowTypes.DM) {
          obj = analyticsLocations(closure_2[17]);
          obj = { userId: tmp.item.id, type: constants.JOIN, activity, location: analyticsLocations(closure_2[13]).ACTIVITY_INVITE_SHEET };
          const result = obj.sendActivityInviteUser(obj);
          result.then(markInviteSent).catch((arg0) => callback(String(arg0)));
          const nextPromise1 = result.then(markInviteSent);
        }
      }
    }
  }, items2);
  let obj = arg1(closure_2[18]);
  const items3 = [closure_8];
  const stateFromStores = obj.useStateFromStores(items3, () => inviteSuggestionRows.getInviteSuggestionRows());
  const tmp2 = importDefault(closure_2[12]);
  [tmp10, closure_4] = callback(React.useState(false), 2);
  const effect = React.useEffect(() => {
    callback(true);
    let obj = activity(closure_2[19]);
    obj = { omitUserIds: new Set(), inviteTargetType: constants3.EMBEDDED_APPLICATION };
    const inviteSuggestions = obj.loadInviteSuggestions(obj);
    const set = new Set();
    inviteSuggestions.catch(closure_12).finally(() => {
      callback(false);
    });
  }, []);
  obj = { value: analyticsLocations };
  obj = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null };
  let tmp16 = null != first;
  if (!tmp16) {
    tmp16 = !tmp12;
  }
  if (!tmp16) {
    tmp16 = !tmp13;
  }
  obj.showGradient = tmp16;
  const obj1 = {};
  const intl = arg1(closure_2[22]).intl;
  obj1.title = intl.string(arg1(closure_2[22]).t.OzOM/q);
  obj.header = callback3(arg1(closure_2[21]).BottomSheetTitleHeader, obj1);
  if (null != first) {
    const obj2 = { style: tmp.emptyState, Illustration: arg1(closure_2[24]).AppCrash, title: first };
    let tmp17Result = callback3(arg1(closure_2[23]).EmptyState, obj2);
  } else if (tmp12) {
    tmp17Result = callback3(Loading, {});
  } else {
    const obj3 = {};
    const obj4 = {};
    const obj5 = { style: tmp.searchAndShareContainer };
    const obj6 = { <string:1439367743>: false, <string:1856005359>: false, onChange: arg1(closure_2[19]).searchInviteSuggestions };
    const intl2 = arg1(closure_2[22]).intl;
    obj6.placeholder = intl2.string(arg1(closure_2[22]).t.iI1gMg);
    obj5.children = callback3(arg1(closure_2[25]).SearchField, obj6);
    obj4.children = callback3(View, obj5);
    const items4 = [callback3(View, obj4), ];
    if (tmp13) {
      const obj7 = { style: tmp.emptyState };
      const intl3 = arg1(closure_2[22]).intl;
      obj7.title = intl3.string(arg1(closure_2[22]).t.ojoWgX);
      let tmp24Result = tmp24(arg1(closure_2[23]).EmptyState, obj7);
    } else {
      const obj8 = { data: stateFromStores, error: first, getSendState: callback, onInviteSent: callback2, onPressAvatar: callback1 };
      tmp24Result = tmp24(importDefault(closure_2[26]), obj8);
    }
    items4[1] = tmp24Result;
    obj3.children = items4;
    tmp17Result = closure_15(closure_14, obj3);
    const tmp17 = closure_15;
    const tmp18 = closure_14;
  }
  obj.children = tmp17Result;
  obj.children = callback3(arg1(closure_2[20]).BottomSheet, obj);
  return callback3(arg1(closure_2[12]).AnalyticsLocationProvider, obj);
};
