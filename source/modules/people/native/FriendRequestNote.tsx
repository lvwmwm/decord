// Module ID: 12030
// Function ID: 92963
// Name: FriendRequestNote
// Dependencies: []
// Exports: default

// Module 12030 (FriendRequestNote)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
({ Pressable: closure_4, View: closure_5 } = arg1(dependencyMap[2]));
let closure_6 = importDefault(dependencyMap[3]);
const RelationshipTypes = arg1(dependencyMap[4]).RelationshipTypes;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { "Bool(true)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001642175594148554, "Bool(true)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000044582052657937646, "Bool(true)": -625777451929953900000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(true)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001417067482018839, "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000004665177721913083, "Bool(true)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003838100301266626, "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000004667261458271624, padding: importDefault(dependencyMap[7]).space.PX_12, borderRadius: importDefault(dependencyMap[7]).radii.md };
obj.container = obj;
const obj1 = { Component: false, style: false, onLoadStart: false, onLoad: false, onError: false, index: false, source: false, borderRadius: importDefault(dependencyMap[7]).radii.md };
obj.spoiler = obj1;
obj.hidden = { opacity: 0 };
let closure_10 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/people/native/FriendRequestNote.tsx");

export default function FriendRequestNote(styles) {
  let analyticsLocation;
  let backgroundColor;
  ({ userId: closure_0, backgroundColor, analyticsLocation } = styles);
  const dependencyMap = analyticsLocation;
  const tmp = callback3();
  const HideFriendRequestNotes = arg1(dependencyMap[8]).HideFriendRequestNotes;
  const setting = HideFriendRequestNotes.useSetting();
  let obj = arg1(dependencyMap[9]);
  const items = [closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ note: store.getNote(closure_0), type: store.getRelationshipType(closure_0) }));
  const note = stateFromStoresObject.note;
  let callback = note;
  const tmp4 = callback(React.useState(stateFromStoresObject.type === RelationshipTypes.PENDING_OUTGOING), 2);
  const first = tmp4[0];
  const React = tmp4[1];
  const items1 = [analyticsLocation, note];
  callback = React.useCallback(() => {
    callback2(true);
    let obj = callback(analyticsLocation[10]);
    obj = { analyticsLocation };
    let length;
    if (null != note) {
      length = note.length;
    }
    let num = 0;
    if (null != length) {
      num = length;
    }
    obj.noteLength = num;
    const result = obj.trackViewFriendRequestNote(obj);
  }, items1);
  let tmp19Result = null;
  if (!setting) {
    tmp19Result = null;
    if (null != note) {
      tmp19Result = null;
      if ("" !== note) {
        obj = {};
        const items2 = [tmp.container, styles.styles];
        obj.style = items2;
        obj.onPress = callback;
        obj = {};
        let hidden;
        if (!first) {
          hidden = tmp.hidden;
        }
        obj.style = hidden;
        const obj1 = { accessible: first, accessibilityElementsHidden: !first, accessibilityLabel: str, variant: "redesign/message-preview/normal", children: note };
        obj.children = callback2(arg1(dependencyMap[11]).Text, obj1);
        const items3 = [callback2(closure_5, obj), ];
        let tmp13Result = null;
        if (!first) {
          const obj2 = {};
          const items4 = [tmp.spoiler, ];
          let tmp15;
          if (null != backgroundColor) {
            const obj3 = { backgroundColor };
            tmp15 = obj3;
          }
          items4[1] = tmp15;
          obj2.style = items4;
          const obj4 = { -9223372036854775808: 44, 9223372036854775807: null, 9223372036854775807: true };
          const obj5 = { size: "sm" };
          obj4.icon = callback2(arg1(dependencyMap[13]).EyeIcon, obj5);
          obj4.onPress = callback;
          const intl = arg1(dependencyMap[14]).intl;
          obj4.text = intl.string(arg1(dependencyMap[14]).t.sB0q4C);
          obj2.children = callback2(arg1(dependencyMap[12]).Button, obj4);
          tmp13Result = callback2(closure_5, obj2);
          const tmp13 = callback2;
          const tmp14 = closure_5;
        }
        items3[1] = tmp13Result;
        obj.children = items3;
        tmp19Result = closure_9(closure_4, obj);
        const tmp19 = closure_9;
        const tmp20 = closure_4;
        const tmp21 = callback2;
        const tmp22 = closure_5;
        const tmp9 = callback2;
      }
    }
  }
  return tmp19Result;
};
