// Module ID: 12691
// Function ID: 12692
// Name: FriendRequestNote
// Dependencies: [32, 19, 17, 4479, 1074, 21, 4836, 576, 12692, 504, 12693, 4832, 5281, 6389, 1115, 2]
// Exports: default

// Module 12691 (FriendRequestNote)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import PeopleListTracking from "PeopleListTracking" /* 12693 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let rect;
let react = react_mod;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
const RelationshipTypes = Constants.RelationshipTypes;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, spoiler: rect, hidden: { opacity: 0 } };
obj2 = { width: "100%", position: "relative", padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.md, minHeight: 56, flexDirection: "row", alignItems: "center" };
createStyles = createStyles.createStyles;
rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.md };
let closure_10 = createStyles(obj);
let result = size.fileFinishedImporting("modules/people/native/FriendRequestNote.tsx");

export default function FriendRequestNote(styles) {
  let Button;
  let Text;
  let _undefined;
  let analyticsLocation;
  let backgroundColor;
  let c3;
  let intl;
  let items2;
  let items3;
  let obj5;
  let obj8;
  let tmp7;
  ({ userId: require, backgroundColor, analyticsLocation } = styles);
  react = undefined;
  styles = styles.styles;
  const tmp = closure_10();
  const tmp2 = require;
  let obj = require("HideFriendRequestNotesUtils");
  const hideFriendRequestNotes = obj.useHideFriendRequestNotes();
  const items = [RelationshipStore];
  const obj2 = require("get initialized");
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { note: RelationshipStore.getNote(require), type: RelationshipStore.getRelationshipType(require) };
    return obj;
  });
  const note = stateFromStoresObject.note;
  [tmp7, c3] = note(react.useState(stateFromStoresObject.type === RelationshipTypes.PENDING_OUTGOING), 2);
  const items1 = [analyticsLocation, note];
  note(react.useState(stateFromStoresObject.type === RelationshipTypes.PENDING_OUTGOING), 2);
  const callback = react.useCallback(() => {
    let num;
    _undefined(true);
    const obj = { analyticsLocation, noteLength: num };
    num = undefined;
    const trackViewFriendRequestNote = PeopleListTracking.trackViewFriendRequestNote;
    PeopleListTracking;
    if (note != null) {
      num = note.length;
    }
    if (num == null) {
      num = 0;
    }
    const result = trackViewFriendRequestNote(obj);
  }, items1);
  let tmp13Result = null;
  if (!hideFriendRequestNotes) {
    tmp13Result = null;
    if (null != note) {
      tmp13Result = null;
      if ("" !== note) {
        const obj3 = { style: items2, onPress: callback, children: items3 };
        items2 = [tmp.container, styles];
        let hidden;
        const tmp13 = closure_9;
        const tmp14 = closure_4;
        if (!tmp7) {
          hidden = tmp.hidden;
        }
        const obj4 = { style: hidden, children: closure_8(Text, obj5) };
        obj5 = { accessible: tmp7, accessibilityElementsHidden: !tmp7, accessibilityLabel: "", variant: "redesign/message-preview/normal", children: note };
        Text = tmp2(tmp3[11]).Text;
        items3 = [closure_8(closure_5, obj4), ];
        let tmp15Result = null;
        if (!tmp7) {
          const items4 = [tmp.spoiler, ];
          let tmp12;
          if (null != backgroundColor) {
            tmp12 = { backgroundColor };
            const obj6 = { backgroundColor };
          }
          items4[1] = tmp12;
          const obj7 = { style: items4, children: closure_8(Button, obj8) };
          obj8 = { icon: closure_8(tmp2(analyticsLocation[13]).EyeIcon, { size: "sm" }), variant: "secondary", size: "sm", onPress: callback, text: intl.string(tmp2(analyticsLocation[14]).t.sB0q4C) };
          Button = tmp2(tmp3[12]).Button;
          intl = tmp2(tmp3[14]).intl;
          tmp15Result = tmp15(tmp16, obj7);
        }
        items3[1] = tmp15Result;
        tmp13Result = tmp13(tmp14, obj3);
      }
    }
  }
  return tmp13Result;
};
