// Module ID: 12242
// Function ID: 12243
// Name: HubEmailConnectionStudentPrompt
// Dependencies: [19, 17, 12233, 1074, 21, 4836, 5836, 576, 1485, 12241, 1177, 1115, 6558, 12243, 1241, 12244, 2]
// Exports: default

// Module 12242 (HubEmailConnectionStudentPrompt)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import HubConstants from "HubConstants" /* 12233 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import TextStyles from "TextStyles" /* 5836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let Fonts;
let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ View: c3, Image: closure_4 } = react_native);
const HubEmailConnectionSteps = HubConstants.HubEmailConnectionSteps;
({ AnalyticEvents: metroRequire, Fonts } = Constants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }, header: obj2, row: obj3 };
obj2 = { textAlign: "center", marginBottom: 24 };
createStyles = createStyles.createStyles;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_BOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj3 = { borderRadius: nativeDefault.radii.sm, marginBottom: 8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_9 = createStyles(obj);
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
  onClose = onClose.onClose;
  const invite = onClose.invite;
  const tmp = closure_9();
  let obj = onClose(1485);
  dependencyMap = obj.useNavigation();
  let obj2 = { children: closure_8(closure_3, obj3) };
  obj3 = { style: tmp.container, children: items };
  const HubEmailConnectionScreen = onClose(12241).HubEmailConnectionScreen;
  const obj4 = { style: tmp.header, children: intl.string(onClose(1115).t["+/Pv0h"]) };
  const LegacyText = onClose(1177).LegacyText;
  intl = onClose(1115).intl;
  items = [closure_7(LegacyText, obj4), , ];
  const obj5 = {
    DEPRECATED_style: tmp.row,
    leading: closure_7(closure_4, obj6),
    trailing: invite(6558).Arrow,
    label: intl2.string(onClose(1115).t["a7a/D+"]),
    subLabel: intl3.string(onClose(1115).t.Gsegk8),
    onPress() {
      const obj = AnalyticsUtilsDefault;
      obj.track(metroRequire.HUB_STUDENT_PROMPT_CLICKED);
      const obj2 = { onClose, invite };
      closure_2.push(HubEmailConnectionSteps.VERIFY_EMAIL, obj2);
    }
  };
  obj6 = { source: invite(12243) };
  const tmp2 = invite(6558);
  intl2 = onClose(1115).intl;
  intl3 = onClose(1115).intl;
  items[1] = closure_7(tmp2, obj5);
  const obj7 = { DEPRECATED_style: tmp.row, leading: closure_7(closure_4, obj8), trailing: invite(6558).Arrow, label: intl4.string(onClose(1115).t.GLG9n4), onPress: onClose };
  obj8 = { source: invite(12244) };
  const tmp3 = invite(6558);
  intl4 = onClose(1115).intl;
  items[2] = closure_7(tmp3, obj7);
  return closure_7(HubEmailConnectionScreen, obj2);
};
