// Module ID: 17222
// Function ID: 17223
// Name: RedesignDiscoverabilityLanding
// Dependencies: [19, 17, 21, 4836, 576, 1613, 5994, 4832, 1115, 5899, 12266, 12177, 5281, 2]
// Exports: default

// Module 17222 (RedesignDiscoverabilityLanding)
import nativeDefault from "native" /* 576 */;
import intl6 from "intl" /* 1115 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import FastImageDefault from "FastImage" /* 5899 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12177 */;
import AssetRegistryDefault from "AssetRegistry" /* 12266 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ View: c3, ScrollView: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, topContainer: obj3, growContainer: { flexGrow: 2 }, image: obj4, title: obj5, subtitle: obj6, info: { paddingHorizontal: 16, marginTop: 8, marginBottom: 24, textAlign: "center" } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_16 };
obj4 = { width: "100%", marginBottom: nativeDefault.space.PX_32 };
obj5 = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
obj6 = { textAlign: "center", marginBottom: nativeDefault.space.PX_32 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/nuf/native/components/RedesignDiscoverabilityLanding.tsx");

export default function RedesignDiscoverabilityLanding(onNext) {
  let bottom;
  let intl;
  let intl2;
  let intl5;
  let items;
  let items1;
  let obj2;
  const tmp = closure_7();
  onNext = onNext.onNext;
  let obj = { style: tmp.container, alwaysBounceVertical: false, contentContainerStyle: obj2, children: items };
  obj2 = { flexGrow: 2, paddingTop: NavigatorConstants.NAV_BAR_HEIGHT + 32, paddingBottom: bottom + 16, paddingHorizontal: nativeDefault.space.PX_16 };
  bottom = useSafeAreaInsetsDefault().bottom;
  items = [, , , , , , ];
  const obj3 = { style: tmp.topContainer };
  items[0] = hasOwnProperty(_false, obj3);
  const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl6.t.n8nw6j) };
  let Text = Text_Text.Text;
  intl = intl6.intl;
  items[1] = hasOwnProperty(Text, obj4);
  const obj5 = { variant: "text-sm/medium", color: "text-default", style: tmp.subtitle, children: intl2.string(intl6.t.KMW0kP) };
  const Text2 = Text_Text.Text;
  intl2 = intl6.intl;
  items[2] = hasOwnProperty(Text2, obj5);
  const obj6 = { resizeMode: "contain", style: tmp.image, source: AssetRegistryDefault };
  const tmp2 = FastImageDefault;
  items[3] = hasOwnProperty(tmp2, obj6);
  const obj7 = { style: tmp.info, variant: "text-sm/medium", color: "text-default", children: items1 };
  const Text3 = Text_Text.Text;
  const intl3 = intl6.intl;
  items1 = [intl3.string(intl6.t.ci12MJ), " ", ];
  const intl4 = intl6.intl;
  const obj8 = {
    learnMoreHook(children, arg1) {
      const obj = { onPress: ContactSyncUtils.handleOpenLearnMoreLink, variant: "text-sm/medium", color: "text-link", children };
      const Text = Text_Text.Text;
      return closure_1_5(Text, obj, arg1);
    }
  };
  items1[2] = intl4.format(intl6.t.VcSQ4n, obj8);
  items[4] = metroRequire(Text3, obj7);
  const obj9 = { style: tmp.growContainer };
  items[5] = hasOwnProperty(_false, obj9);
  const obj10 = { variant: "primary", size: "lg", text: intl5.string(intl6.t.gHPk3I), onPress: onNext };
  const Button = components_Button_Button.Button;
  intl5 = intl6.intl;
  items[6] = hasOwnProperty(Button, obj10);
  return metroRequire(React3, obj);
};
