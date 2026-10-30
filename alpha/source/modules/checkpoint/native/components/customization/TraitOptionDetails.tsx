// Module ID: 13649
// Function ID: 13650
// Name: TraitOptionDetails
// Dependencies: [19, 17, 21, 5009, 575, 6108, 1114, 3091, 5619, 9884, 7345, 6429, 13650, 2]
// Exports: default

// Module 13649 (TraitOptionDetails)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef3091 from "module_3091" /* 3091 */;
import Text_Text from "Text/Text" /* 5619 */;
import RarityBadgeDefault from "RarityBadge" /* 13650 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
function AssetDescription(asset) {
  let subscribeLink;
  asset = asset.asset;
  const hidden = asset.hidden;
  _require = closure_7();
  let tmp = null;
  if (!hidden) {
    let formatResult;
    if (asset.status === require("CheckpointCharacterAssets").CheckpointTraitOptionStatus.NITRO_LOCKED) {
      const intl = tmp2(1114).intl;
      let obj = {
        subscribeHook(children, arg1) {
              let obj = {
                variant: "text-md/medium",
                color: "text-subtle",
                style: subscribeLink.subscribeLink,
                onPress() {
                  let items;
                  const obj = { analyticsLocations: items };
                  items = [];
                  const tmp = closure_1_1(closure_1_2[9]);
                  items[0] = closure_1_1(closure_1_2[10]).CHECKPOINT;
                  return tmp(obj);
                },
                accessibilityRole: "link",
                children
              };
              return React3(Text_Text.Text, obj, arg1);
            }
      };
      formatResult = intl.format(_modDef3091["3Wq/bk"], obj);
    } else {
      const tmp2Result = require("CheckpointCustomizationUtils");
      formatResult = tmp2Result.getAssetDescription(asset);
    }
    tmp = formatResult;
  }
  const obj2 = { variant: "text-md/medium", color: "text-subtle", accessibilityElementsHidden: null == tmp, children: tmp };
  return closure_4(require("Text/Text").Text, obj2);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = Fragment);
let obj = { titleRow: obj2, title: { textTransform: "capitalize" }, subscribeLink: { textDecorationLine: "underline" } };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitOptionDetails.tsx");

export default function TraitOptionDetails(arg0) {
  let asset;
  let hideDescriptionAndRarity;
  let items;
  let items1;
  ({ asset, hideDescriptionAndRarity } = arg0);
  const tmp = closure_7();
  const obj = { style: tmp.titleRow, children: items };
  const obj2 = { variant: "text-lg/medium", color: "text-default", style: tmp.title, children: asset.getName() };
  const Text = Text_Text.Text;
  items = [React3(Text, obj2), ];
  let tmp5Result = !hideDescriptionAndRarity;
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
  items1 = [hasOwnProperty(tmp4, obj), React3(AssetDescription, { asset, hidden: hideDescriptionAndRarity })];
  return hasOwnProperty(tmp3, obj4);
};
