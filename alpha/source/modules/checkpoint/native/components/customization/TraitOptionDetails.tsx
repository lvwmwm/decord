// Module ID: 14541
// Function ID: 14542
// Name: TraitOptionDetails
// Dependencies: [19, 17, 21, 5306, 575, 6423, 1113, 3317, 5929, 9579, 7937, 6744, 14542, 2]
// Exports: default

// Module 14541 (TraitOptionDetails)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef3317 from "module_3317" /* 3317 */;
import Text_Text from "Text/Text" /* 5929 */;
import RarityBadgeDefault from "RarityBadge" /* 14542 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
function AssetDescription(asset) {
  let formatResult;
  let subscribeLink;
  asset = asset.asset;
  let tmp = closure_7();
  _require = tmp;
  if (asset.status === require("CheckpointCharacterAssets").CheckpointTraitOptionStatus.NITRO_LOCKED) {
    const intl = tmp2(1113).intl;
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
    formatResult = intl.format(_modDef3317.E6AfCb, obj);
  } else {
    const tmp2Result = require("CheckpointCustomizationUtils");
    formatResult = tmp2Result.getPlaintextAssetDescription(asset);
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

export default function TraitOptionDetails(arg0) {
  let asset;
  let hideRarity;
  let items;
  let items1;
  ({ asset, hideRarity } = arg0);
  const tmp = closure_7();
  const obj = { style: tmp.titleRow, children: items };
  const obj2 = { variant: "body-lg/medium", color: "text-default", style: tmp.title, children: asset.getName() };
  const Text = Text_Text.Text;
  items = [React3(Text, obj2), ];
  let tmp5Result = !hideRarity;
  const tmp3 = metroRequire;
  const tmp4 = View;
  if (tmp5Result) {
    tmp5Result = null != asset.rarity;
  }
  if (tmp5Result) {
    const obj3 = { rarity: asset.rarity };
    tmp5Result = tmp5(RarityBadgeDefault, obj3);
  }
  const obj4 = { children: items1 };
  items[1] = tmp5Result;
  items1 = [hasOwnProperty(tmp4, obj), React3(AssetDescription, { asset })];
  return hasOwnProperty(tmp3, obj4);
};
