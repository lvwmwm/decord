// Module ID: 16766
// Function ID: 16767
// Name: FamilyCenterActivityBanner
// Dependencies: [19, 17, 21, 5014, 8369, 8370, 16767, 575, 13347, 1113, 2538, 5717, 16774, 16775, 5624, 2]
// Exports: default

// Module 16766 (FamilyCenterActivityBanner)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import _modDef2538 from "module_2538" /* 2538 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import useUserLinks from "useUserLinks" /* 8369 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8370 */;
import useAgeSpecificText3 from "useAgeSpecificText" /* 13347 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let tmp2;
const FamilyCenterBannerButton = tmp2(16767);
function FamilyCenterActivityBannerButton() {
  let tmp2Result;
  const tmp = closure_6();
  const obj = useUserLinks;
  const hasActiveLinks = obj.useHasActiveLinks();
  const tmp5 = useIsInAdultAgeGroupDefault();
  let tmp7Result = null;
  const obj2 = useUserLinks;
  if (!obj2.useHasMaxConnections()) {
    if (!tmp5) {
      const obj3 = { style: tmp.container, children: React3(tmp5 ? tmp2Result.FamilyCenterParentQRCodeButton : tmp2Result.FamilyCenterTeenQRCodeButton, {}) };
      tmp2Result = FamilyCenterBannerButton;
      tmp7Result = tmp7(View, obj3);
    } else {
      tmp7Result = null;
    }
  }
  return tmp7Result;
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let closure_6 = createStyles.createStyles({ container: { width: "100%" } });
createStyles = createStyles_mod;
let obj = { container: obj2, art: obj3, header: obj4, description: { textAlign: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: 16, padding: 24, alignItems: "center", borderRadius: nativeDefault.radii.md, elevation: 2 };
createStyles = createStyles.createStyles;
obj3 = { maxWidth: 243, maxHeight: 119, marginBottom: nativeDefault.space.PX_8 };
obj4 = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityBanner.tsx");

export default function FamilyCenterActivityBanner() {
  let items;
  const tmp3 = useIsInAdultAgeGroupDefault();
  const tmp4 = closure_8();
  const obj = useUserLinks;
  const hasMaxConnections = obj.useHasMaxConnections();
  const useAgeSpecificText = useAgeSpecificText3.useAgeSpecificText;
  useAgeSpecificText3;
  const intl = intl5.intl;
  const stringResult = intl.string(_modDef2538["T7GyW+"]);
  const intl2 = intl5.intl;
  const ageSpecificText = useAgeSpecificText(stringResult, intl2.string(_modDef2538.goKE2b));
  const useAgeSpecificText2 = useAgeSpecificText3.useAgeSpecificText;
  useAgeSpecificText3;
  const intl3 = intl5.intl;
  const formatResult = intl3.format(_modDef2538.MXjDSv, { articleLink: "https://support.discord.com/hc/articles/14155060633623" });
  const intl4 = intl5.intl;
  const obj2 = { style: tmp4.container, children: items };
  const ageSpecificText2 = useAgeSpecificText2(formatResult, intl4.format(_modDef2538.EMCf6j, { articleLink: "https://support.discord.com/hc/articles/14155043715735" }));
  const obj3 = { source: importDefault(tmp3 ? 16774 : 16775), style: tmp4.art };
  const tmp16 = FastImageDefault;
  items = [React3(tmp16, obj3), , , ];
  const obj4 = { style: tmp4.header, variant: "heading-lg/semibold", children: ageSpecificText };
  items[1] = React3(Text_Text.Text, obj4);
  const obj5 = { style: tmp4.description, variant: "text-sm/medium", color: "text-muted", children: ageSpecificText2 };
  items[2] = React3(Text_Text.Text, obj5);
  let tmp15Result = null;
  const tmp13 = hasOwnProperty;
  const tmp14 = View;
  if (!hasMaxConnections) {
    tmp15Result = tmp15(FamilyCenterActivityBannerButton, {});
  }
  items[3] = tmp15Result;
  return tmp13(tmp14, obj2);
};
