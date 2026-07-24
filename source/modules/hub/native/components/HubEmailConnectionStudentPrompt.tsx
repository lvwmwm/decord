// Module ID: 11789
// Function ID: 91558
// Name: HubEmailConnectionStudentPrompt
// Dependencies: [31, 27, 11780, 653, 33, 4130, 5052, 689, 1456, 11788, 1273, 1212, 5158, 11790, 675, 11791, 2]
// Exports: default

// Module 11789 (HubEmailConnectionStudentPrompt)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { HubEmailConnectionSteps } from "HubEmailConnectionSteps";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";

let closure_3;
let closure_4;
let closure_7;
let closure_8;
const require = arg1;
({ View: closure_3, Image: closure_4 } = get_ActivityIndicator);
const AnalyticEvents = ME.AnalyticEvents;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { display: "flex", alignItems: "center", justifyContent: "center", padding: 16 } };
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(require("createTextStyle")(ME.Fonts.PRIMARY_BOLD, require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
_createForOfIteratorHelperLoose["textAlign"] = "center";
_createForOfIteratorHelperLoose["marginBottom"] = 24;
_createForOfIteratorHelperLoose.header = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.row = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginBottom: 8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginBottom: 8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
const result = require("HubEmailConnectionSteps").fileFinishedImporting("modules/hub/native/components/HubEmailConnectionStudentPrompt.tsx");

export default function HubEmailConnectionStudentPrompt(onClose) {
  onClose = onClose.onClose;
  const invite = onClose.invite;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = onClose(1456);
  const dependencyMap = obj.useNavigation();
  obj = {};
  obj = { style: tmp.container };
  const obj1 = { style: tmp.header };
  const intl = onClose(1212).intl;
  obj1.children = intl.string(onClose(1212).t["+/Pv0h"]);
  const items = [callback(onClose(1273).LegacyText, obj1), , ];
  const obj2 = { DEPRECATED_style: tmp.row };
  const obj3 = { source: invite(11790) };
  obj2.leading = callback(closure_4, obj3);
  obj2.trailing = invite(5158).Arrow;
  const intl2 = onClose(1212).intl;
  obj2.label = intl2.string(onClose(1212).t["a7a/D+"]);
  const intl3 = onClose(1212).intl;
  obj2.subLabel = intl3.string(onClose(1212).t.Gsegk8);
  obj2.onPress = function onPress() {
    let obj = invite(arr[14]);
    obj.track(outer1_6.HUB_STUDENT_PROMPT_CLICKED);
    obj = { onClose, invite };
    arr = arr.push(outer1_5.VERIFY_EMAIL, obj);
  };
  items[1] = callback(invite(5158), obj2);
  const obj4 = { DEPRECATED_style: tmp.row };
  const obj5 = {};
  const tmp2 = invite(5158);
  obj5.source = invite(11791);
  obj4.leading = callback(closure_4, obj5);
  obj4.trailing = invite(5158).Arrow;
  const intl4 = onClose(1212).intl;
  obj4.label = intl4.string(onClose(1212).t.GLG9n4);
  obj4.onPress = onClose;
  items[2] = callback(invite(5158), obj4);
  obj.children = items;
  obj.children = callback2(closure_3, obj);
  return callback(onClose(11788).HubEmailConnectionScreen, obj);
};
