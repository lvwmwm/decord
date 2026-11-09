// Module ID: 13925
// Function ID: 13926
// Name: TraitOptionDetails
// Dependencies: [19, 17, 21, 5140, 575, 6245, 1113, 3248, 5751, 10027, 7412, 6566, 13926, 2]
// Exports: default

// Module 13925 (TraitOptionDetails)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef3248 from "module_3248" /* 3248 */;
import Text_Text from "Text/Text" /* 5751 */;
import RarityBadgeDefault from "RarityBadge" /* 13926 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
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
      formatResult = intl.format(_modDef3248["3Wq/bk"], obj);
    } else {
      const tmp2Result = require("CheckpointCustomizationUtils");
      formatResult = tmp2Result.getPlaintextAssetDescription(asset);
    }
    tmp = formatResult;
  }
  const obj2 = { variant: "body-md/medium", color: "text-subtle", accessibilityElementsHidden: null == tmp, children: tmp };
  return closure_4(require("Text/Text").Text, obj2);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = Fragment);
let obj = { titleRow: obj2, title: { textTransform: "capitalize" }, subscribeLink: { textDecorationLine: "underline" } };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj);
let obj3 = { VISIBLE: 0, [0]: "VISIBLE", INVISIBLE: 1, [1]: "INVISIBLE", GONE: 2, [2]: "GONE" };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitOptionDetails.tsx");

export default function TraitOptionDetails(arg0) {
  let asset;
  let descriptionVisibility;
  let items;
  ({ asset, descriptionVisibility } = arg0);
  const tmp = closure_7();
  const obj = { style: tmp.titleRow, children: items };
  const obj2 = { variant: "body-lg/medium", color: "text-default", style: tmp.title, children: asset.getName() };
  const Text = Text_Text.Text;
  items = [React3(Text, obj2), ];
  let tmp7Result = tmp3;
  const tmp2 = obj3;
  const tmp5 = metroRequire;
  const tmp6 = View;
  if (tmp7Result) {
    tmp7Result = null != asset.rarity;
  }
  if (tmp7Result) {
    obj3 = { rarity: asset.rarity };
    tmp7Result = tmp7(RarityBadgeDefault, obj3);
  }
  items[1] = tmp7Result;
  const children = [hasOwnProperty(tmp6, obj), ];
  let tmp7Result2 = descriptionVisibility !== tmp2.GONE;
  if (tmp7Result2) {
    const obj4 = { asset, hidden: descriptionVisibility !== obj3.VISIBLE };
    tmp7Result2 = tmp7(AssetDescription, obj4);
  }
  children[1] = tmp7Result2;
  return hasOwnProperty(tmp5, { children });
};
export const DescriptionVisibility = obj3;
