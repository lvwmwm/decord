// Module ID: 14323
// Function ID: 14324
// Name: HubEmailConnectionStudentPrompt
// Dependencies: [19, 17, 14314, 1072, 21, 5014, 6723, 575, 1497, 14322, 1187, 1113, 7309, 5717, 14324, 1252, 14325, 2]
// Exports: default

// Module 14323 (HubEmailConnectionStudentPrompt)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import HubConstants from "HubConstants" /* 14314 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import TextStyles from "TextStyles" /* 6723 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let Fonts;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
const HubEmailConnectionSteps = HubConstants.HubEmailConnectionSteps;
({ AnalyticEvents: hasOwnProperty, Fonts } = Constants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }, header: obj2, row: obj3 };
obj2 = { textAlign: "center", marginBottom: 24 };
createStyles = createStyles.createStyles;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_BOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj3 = { borderRadius: nativeDefault.radii.sm, marginBottom: 8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionStudentPrompt.tsx");

export default function HubEmailConnectionStudentPrompt(onClose) {
  let closure_2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj3;
  let obj6;
  let obj8;
  let tmp3;
  let tmp5;
  onClose = onClose.onClose;
  const invite = onClose.invite;
  const tmp = closure_8();
  let obj = onClose(1497);
  dependencyMap = obj.useNavigation();
  let obj2 = { children: closure_7(View, obj3) };
  obj3 = { style: tmp.container, children: items };
  const HubEmailConnectionScreen = onClose(14322).HubEmailConnectionScreen;
  const obj4 = { style: tmp.header, children: intl.string(onClose(1113).t["+/Pv0h"]) };
  const LegacyText = onClose(1187).LegacyText;
  intl = onClose(1113).intl;
  items = [closure_6(LegacyText, obj4), , ];
  const obj5 = {
    DEPRECATED_style: tmp.row,
    leading: closure_6(tmp3, obj6),
    trailing: invite(7309).Arrow,
    label: intl2.string(onClose(1113).t["a7a/D+"]),
    subLabel: intl3.string(onClose(1113).t.Gsegk8),
    onPress: function onContinue() {
      const obj = AnalyticsUtilsDefault;
      obj.track(hasOwnProperty.HUB_STUDENT_PROMPT_CLICKED);
      const obj2 = { onClose, invite };
      closure_2.push(HubEmailConnectionSteps.VERIFY_EMAIL, obj2);
    }
  };
  obj6 = { source: invite(14324) };
  const tmp2 = invite(7309);
  tmp3 = invite(5717);
  intl2 = onClose(1113).intl;
  intl3 = onClose(1113).intl;
  items[1] = closure_6(tmp2, obj5);
  const obj7 = { DEPRECATED_style: tmp.row, leading: closure_6(tmp5, obj8), trailing: invite(7309).Arrow, label: intl4.string(onClose(1113).t.GLG9n4), onPress: onClose };
  obj8 = { source: invite(14325) };
  const tmp4 = invite(7309);
  tmp5 = invite(5717);
  intl4 = onClose(1113).intl;
  items[2] = closure_6(tmp4, obj7);
  return closure_6(HubEmailConnectionScreen, obj2);
};
