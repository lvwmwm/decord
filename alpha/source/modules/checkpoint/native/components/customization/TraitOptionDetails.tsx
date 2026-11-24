// Module ID: 12706
// Function ID: 12707
// Name: TraitOptionDetails
// Dependencies: [19, 17, 21, 4917, 575, 6318, 1112, 3442, 5508, 8960, 6254, 6639, 12707, 2]
// Exports: default

// Module 12706 (TraitOptionDetails)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef3442 from "module_3442" /* 3442 */;
import Text_Text from "Text/Text" /* 5508 */;
import RarityBadgeDefault from "RarityBadge" /* 12707 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4917 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
function OptionDescription(option) {
  let formatResult;
  let subscribeLink;
  option = option.option;
  let tmp = closure_7();
  _require = tmp;
  if (option.status === require("CheckpointCharacterAssets").CheckpointTraitOptionStatus.NITRO_LOCKED) {
    const intl = tmp2(1112).intl;
    let obj = {
      subscribeHook(children, arg1) {
          let obj = {
            variant: "body-md/medium",
            color: "text-subtle",
            style: subscribeLink.subscribeLink,
            onPress() {
              let items;
              const obj = { analyticsLocations: items };
              items = [, ];
              const tmp = closure_1_1(closure_1_2[9]);
              items[0] = closure_1_1(closure_1_2[10]).CHECKPOINT;
              items[1] = closure_1_1(closure_1_2[10]).CHECKPOINT_TRAIT;
              return tmp(obj);
            },
            accessibilityRole: "link",
            children
          };
          return React3(Text_Text.Text, obj, arg1);
        }
    };
    formatResult = intl.format(_modDef3442.E6AfCb, obj);
  } else {
    const tmp2Result = require("CheckpointCustomizationUtils");
    formatResult = tmp2Result.getPlaintextAssetDescription(option);
  }
  const obj2 = { variant: "body-md/medium", color: "text-subtle", style: tmp.description, accessibilityElementsHidden: null == formatResult, children: formatResult };
  return closure_4(require("Text/Text").Text, obj2);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { titleRow: obj2, title: { textTransform: "capitalize" }, description: obj3, subscribeLink: { textDecorationLine: "underline" } };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_4 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitOptionDetails.tsx");

export default function TraitOptionDetails(titleAccessibilityLabel) {
  let hideRarity;
  let items;
  let items1;
  let option;
  let title;
  ({ option, hideRarity, title } = titleAccessibilityLabel);
  titleAccessibilityLabel = titleAccessibilityLabel.titleAccessibilityLabel;
  const tmp = closure_7();
  const obj = { style: tmp.titleRow, children: items };
  const obj2 = { variant: "body-lg/medium", color: "text-default", style: tmp.title, accessibilityLabel: titleAccessibilityLabel, children: title };
  const Text = Text_Text.Text;
  const tmp3 = metroRequire;
  const tmp4 = View;
  if (title == null) {
    title = option.getName();
  }
  items = [React3(Text, obj2), ];
  let tmp5Result = !hideRarity && null != option.rarity;
  if (tmp5Result) {
    const obj3 = { rarity: option.rarity };
    tmp5Result = tmp5(RarityBadgeDefault, obj3);
  }
  const obj4 = { children: items1 };
  items[1] = tmp5Result;
  items1 = [hasOwnProperty(tmp4, obj), React3(OptionDescription, { option })];
  return hasOwnProperty(tmp3, obj4);
};
