// Module ID: 12148
// Function ID: 95140
// Name: FriendRequestNote
// Dependencies: [57, 31, 27, 3767, 653, 33, 4130, 689, 3803, 566, 12149, 4126, 4543, 8738, 1212, 2]
// Exports: default

// Module 12148 (FriendRequestNote)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { RelationshipTypes } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_8;
let closure_9;
const require = arg1;
({ Pressable: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { width: "100%", position: "relative", padding: require("_createForOfIteratorHelperLoose").space.PX_12, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, minHeight: 56, flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
_createForOfIteratorHelperLoose.spoiler = obj1;
_createForOfIteratorHelperLoose.hidden = { opacity: 0 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/people/native/FriendRequestNote.tsx");

export default function FriendRequestNote(styles) {
  let analyticsLocation;
  let backgroundColor;
  let require;
  ({ userId: require, backgroundColor, analyticsLocation } = styles);
  const tmp = _createForOfIteratorHelperLoose();
  const HideFriendRequestNotes = require(analyticsLocation[8]).HideFriendRequestNotes;
  const setting = HideFriendRequestNotes.useSetting();
  let obj = require(analyticsLocation[9]);
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ note: outer1_6.getNote(closure_0), type: outer1_6.getRelationshipType(closure_0) }));
  const note = stateFromStoresObject.note;
  const tmp4 = note(React.useState(stateFromStoresObject.type === RelationshipTypes.PENDING_OUTGOING), 2);
  const first = tmp4[0];
  React = tmp4[1];
  const items1 = [analyticsLocation, note];
  const callback = React.useCallback(() => {
    callback(true);
    let obj = outer1_0(analyticsLocation[10]);
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
        obj.children = callback(require(analyticsLocation[11]).Text, obj1);
        const items3 = [callback(closure_5, obj), ];
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
          const obj4 = { icon: null, variant: "secondary", size: "sm" };
          const obj5 = { size: "sm" };
          obj4.icon = callback(require(analyticsLocation[13]).EyeIcon, obj5);
          obj4.onPress = callback;
          const intl = require(analyticsLocation[14]).intl;
          obj4.text = intl.string(require(analyticsLocation[14]).t.sB0q4C);
          obj2.children = callback(require(analyticsLocation[12]).Button, obj4);
          tmp13Result = callback(closure_5, obj2);
          const tmp13 = callback;
          const tmp14 = closure_5;
        }
        items3[1] = tmp13Result;
        obj.children = items3;
        tmp19Result = closure_9(closure_4, obj);
        const tmp19 = closure_9;
        const tmp20 = closure_4;
        const tmp21 = callback;
        const tmp22 = closure_5;
        const tmp9 = callback;
      }
    }
  }
  return tmp19Result;
};
