// Module ID: 12250
// Function ID: 12251
// Name: HubEmailConnectionWaitlist
// Dependencies: [19, 17, 1074, 21, 4836, 576, 1485, 6795, 1115, 12251, 1177, 4832, 5281, 2]
// Exports: default

// Module 12250 (HubEmailConnectionWaitlist)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
({ View: closure_4, Image: hasOwnProperty } = react_native);
const Fonts = Constants.Fonts;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: { flex: 1, alignItems: "center", justifyContent: "center" }, header: { marginBottom: 16 }, title: obj2, description: { textAlign: "center", marginBottom: 16 }, redesignButton: { paddingHorizontal: 16, width: "100%" } };
obj2 = { fontFamily: Fonts.PRIMARY_BOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, fontSize: 24, textAlign: "center", marginBottom: 8 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionWaitlist.tsx");

export default function HubEmailConnectionWaitlist(onClose) {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let obj7;
  onClose = onClose.onClose;
  const school = onClose.school;
  const tmp = closure_8();
  let obj = onClose(1485);
  navigation = obj.useNavigation();
  const items = [navigation, onClose];
  const layoutEffect = react.useLayoutEffect(() => {
    let onPress;
    let obj = {
      headerLeft() {
        let intl;
        const obj = { text: intl.string(onClose(dependencyMap[8]).t.cpT0Cq), onPress };
        const HeaderActionButton = onClose(dependencyMap[7]).HeaderActionButton;
        intl = onClose(dependencyMap[8]).intl;
        return closure_2_6(HeaderActionButton, obj);
      }
    };
    navigation.setOptions(obj);
  }, items);
  const obj2 = { style: tmp.container, children: items1 };
  items1 = [, , , ];
  const obj3 = { source: navigation(12251), style: tmp.header };
  items1[0] = closure_6(closure_5, obj3);
  const obj4 = { style: tmp.title, accessibilityRole: "header", children: intl.string(onClose(1115).t.OaloU5) };
  const LegacyText = onClose(1177).LegacyText;
  intl = onClose(1115).intl;
  items1[1] = closure_6(LegacyText, obj4);
  const obj5 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl2.format(onClose(1115).t.Rs7MXJ, { school }) };
  const Text = onClose(4832).Text;
  intl2 = onClose(1115).intl;
  items1[2] = closure_6(Text, obj5);
  const obj6 = { style: tmp.redesignButton, children: closure_6(Button, obj7) };
  obj7 = { size: "lg", text: intl3.string(onClose(1115).t.i4jeWR), onPress: onClose };
  Button = onClose(5281).Button;
  intl3 = onClose(1115).intl;
  items1[3] = closure_6(closure_4, obj6);
  return closure_7(closure_4, obj2);
};
