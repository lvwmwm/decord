// Module ID: 14411
// Function ID: 14412
// Name: FamilyCenterActivityBanner
// Dependencies: [19, 17, 21, 4836, 8105, 8106, 14412, 576, 11398, 1115, 2487, 14419, 14420, 4832, 2]
// Exports: default

// Module 14411 (FamilyCenterActivityBanner)
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import _modDef2487 from "module_2487" /* 2487 */;
import Text_Text from "Text/Text" /* 4832 */;
import useUserLinks from "useUserLinks" /* 8105 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8106 */;
import useAgeSpecificText3 from "useAgeSpecificText" /* 11398 */;
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
let tmp2;
const FamilyCenterBannerButton = tmp2(14412);
function FamilyCenterActivityBannerButton() {
  let tmp2Result;
  const tmp = closure_7();
  const obj = useUserLinks;
  const hasActiveLinks = obj.useHasActiveLinks();
  const tmp5 = useIsInAdultAgeGroupDefault();
  let tmp7Result = null;
  const obj2 = useUserLinks;
  if (!obj2.useHasMaxConnections()) {
    if (!tmp5) {
      const obj3 = { style: tmp.container, children: hasOwnProperty(tmp5 ? tmp2Result.FamilyCenterParentQRCodeButton : tmp2Result.FamilyCenterTeenQRCodeButton, {}) };
      tmp2Result = FamilyCenterBannerButton;
      tmp7Result = tmp7(_false, obj3);
    } else {
      tmp7Result = null;
    }
  }
  return tmp7Result;
}
({ View: c3, Image: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let closure_7 = createStyles.createStyles({ container: { width: "100%" } });
createStyles = createStyles_mod;
let obj = { container: obj2, art: obj3, header: obj4, description: { textAlign: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: 16, padding: 24, alignItems: "center", borderRadius: nativeDefault.radii.md, elevation: 2 };
createStyles = createStyles.createStyles;
obj3 = { maxWidth: 243, maxHeight: 119, marginBottom: nativeDefault.space.PX_8 };
obj4 = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityBanner.tsx");

export default function FamilyCenterActivityBanner() {
  let items;
  const tmp3 = useIsInAdultAgeGroupDefault();
  const tmp4 = closure_9();
  const obj = useUserLinks;
  const hasMaxConnections = obj.useHasMaxConnections();
  const useAgeSpecificText = useAgeSpecificText3.useAgeSpecificText;
  useAgeSpecificText3;
  const intl = intl5.intl;
  const stringResult = intl.string(_modDef2487["T7GyW+"]);
  const intl2 = intl5.intl;
  const ageSpecificText = useAgeSpecificText(stringResult, intl2.string(_modDef2487.goKE2b));
  const useAgeSpecificText2 = useAgeSpecificText3.useAgeSpecificText;
  useAgeSpecificText3;
  const intl3 = intl5.intl;
  const formatResult = intl3.format(_modDef2487.MXjDSv, { articleLink: "https://support.discord.com/hc/articles/14155060633623" });
  const intl4 = intl5.intl;
  const obj2 = { style: tmp4.container, children: items };
  const obj3 = { source: importDefault(tmp3 ? 14419 : 14420), style: tmp4.art };
  const ageSpecificText2 = useAgeSpecificText2(formatResult, intl4.format(_modDef2487.EMCf6j, { articleLink: "https://support.discord.com/hc/articles/14155043715735" }));
  items = [hasOwnProperty(React3, obj3), , , ];
  const obj4 = { style: tmp4.header, variant: "heading-lg/semibold", children: ageSpecificText };
  items[1] = hasOwnProperty(Text_Text.Text, obj4);
  const obj5 = { style: tmp4.description, variant: "text-sm/medium", color: "text-muted", children: ageSpecificText2 };
  items[2] = hasOwnProperty(Text_Text.Text, obj5);
  let tmp15Result = null;
  const tmp13 = metroRequire;
  const tmp14 = _false;
  if (!hasMaxConnections) {
    tmp15Result = tmp15(FamilyCenterActivityBannerButton, {});
  }
  items[3] = tmp15Result;
  return tmp13(tmp14, obj2);
};
