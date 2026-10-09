// Module ID: 15961
// Function ID: 15962
// Name: TraitOptionDetails
// Dependencies: [19, 17, 21, 5091, 587, 558, 576, 5435, 1126, 3115, 5087, 9366, 6872, 15924, 15962, 2]

// Module 15961 (TraitOptionDetails)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3115 from "module_3115" /* 3115 */;
import RarityBadgeDefault from "RarityBadge" /* 15962 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let tmp;
const Text_Text = tmp(5087);
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = Fragment);
let obj = { titleRow: obj2, title: { textTransform: "capitalize" }, subscribeLink: { textDecorationLine: "underline" } };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function AssetDescription(asset) {
  let subscribeLink;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(7);
  asset = asset.asset;
  const hidden = asset.hidden;
  const tmp4 = closure_7();
  _require = tmp4;
  let tmp5 = null;
  if (!hidden) {
    let tmp6;
    if (asset.rarity === tmp(5435).CheckpointTraitRarity.NITRO) {
      if (true === asset.locked) {
        let tmp8;
        if (cResult[0] !== tmp4) {
          const intl = tmp(1126).intl;
          const obj2 = {
            subscribeHook(children, arg1) {
                      let obj = {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        style: subscribeLink.subscribeLink,
                        onPress() {
                          let items;
                          const obj = { analyticsLocations: items };
                          items = [];
                          const tmp = closure_1_1(closure_1_2[11]);
                          items[0] = closure_1_1(closure_1_2[12]).CHECKPOINT;
                          return tmp(obj);
                        },
                        accessibilityRole: "link",
                        children
                      };
                      return React3(Text_Text.Text, obj, arg1);
                    }
          };
          const formatResult = intl.format(_modDef3115["3Wq/bk"], obj2);
          cResult[0] = tmp4;
          cResult[1] = formatResult;
          tmp8 = formatResult;
        } else {
          tmp8 = cResult[1];
        }
        tmp5 = tmp8;
      }
    }
    if (cResult[2] !== asset) {
      const tmpResult = tmp(15924);
      const assetDescription = tmpResult.getAssetDescription(asset);
      cResult[2] = asset;
      cResult[3] = assetDescription;
      tmp6 = assetDescription;
    } else {
      tmp6 = cResult[3];
    }
    tmp5 = tmp6;
  }
  if (cResult[4] === tmp5) {
    let tmp12;
    if (cResult[5] === null == tmp5) {
      tmp12 = cResult[6];
    }
    return tmp12;
  }
  const tmp13 = closure_4(tmp(5087).Text, { variant: "text-md/medium", color: "text-subtle", accessibilityElementsHidden: null == tmp5, children: tmp5 });
  cResult[4] = tmp5;
  cResult[5] = null == tmp5;
  cResult[6] = tmp13;
  tmp12 = tmp13;
}) : (function AssetDescription(asset) {
  let subscribeLink;
  asset = asset.asset;
  const hidden = asset.hidden;
  _require = closure_7();
  let tmp = null;
  if (!hidden) {
    if (asset.rarity === require("CheckpointTraitRarity").CheckpointTraitRarity.NITRO) {
      let formatResult;
      if (true === asset.locked) {
        const intl = tmp2(1126).intl;
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
                      const tmp = closure_1_1(closure_1_2[11]);
                      items[0] = closure_1_1(closure_1_2[12]).CHECKPOINT;
                      return tmp(obj);
                    },
                    accessibilityRole: "link",
                    children
                  };
                  return React3(Text_Text.Text, obj, arg1);
                }
        };
        formatResult = intl.format(_modDef3115["3Wq/bk"], obj);
      }
      tmp = formatResult;
    }
    const tmp2Result = require("CheckpointCustomizationUtils");
    formatResult = tmp2Result.getAssetDescription(asset);
  }
  const obj2 = { variant: "text-md/medium", color: "text-subtle", accessibilityElementsHidden: null == tmp, children: tmp };
  return closure_4(require("Text/Text").Text, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function TraitOptionDetails(arg0) {
  let asset;
  let hideDescriptionAndRarity;
  let items;
  let items1;
  let title;
  let titleRow;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(18);
  ({ asset, hideDescriptionAndRarity } = arg0);
  const tmp4 = closure_7();
  ({ titleRow, title } = tmp4);
  if (cResult[0] !== asset) {
    const name = asset.getName();
    cResult[0] = asset;
    cResult[1] = name;
    tmp5 = name;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.title) {
    let tmp7;
    if (cResult[3] === tmp5) {
      tmp7 = cResult[4];
    }
    if (cResult[5] === asset.rarity) {
      let tmp9;
      if (cResult[6] === hideDescriptionAndRarity) {
        tmp9 = cResult[7];
      }
      if (cResult[8] === tmp4.titleRow) {
        if (cResult[9] === tmp7) {
          let tmp14;
          if (cResult[10] === tmp9) {
            tmp14 = cResult[11];
          }
          if (cResult[12] === asset) {
            let tmp18;
            if (cResult[13] === hideDescriptionAndRarity) {
              tmp18 = cResult[14];
            }
            if (cResult[15] === tmp14) {
              let tmp22;
              if (cResult[16] === tmp18) {
                tmp22 = cResult[17];
              }
              return tmp22;
            }
            const obj2 = { children: items };
            items = [tmp14, tmp18];
            const tmp25 = hasOwnProperty(metroRequire, obj2);
            cResult[15] = tmp14;
            cResult[16] = tmp18;
            cResult[17] = tmp25;
            tmp22 = tmp25;
          }
          const obj3 = { asset, hidden: hideDescriptionAndRarity };
          const tmp21 = React3(closure_8, obj3);
          cResult[12] = asset;
          cResult[13] = hideDescriptionAndRarity;
          cResult[14] = tmp21;
          tmp18 = tmp21;
        }
      }
      const obj4 = { style: titleRow, children: items1 };
      items1 = [tmp7, tmp9];
      const tmp17 = hasOwnProperty(View, obj4);
      cResult[8] = tmp4.titleRow;
      cResult[9] = tmp7;
      cResult[10] = tmp9;
      cResult[11] = tmp17;
      tmp14 = tmp17;
    }
    let tmp10 = !hideDescriptionAndRarity && null != asset.rarity;
    if (tmp10) {
      const obj5 = { rarity: asset.rarity };
      tmp10 = React3(RarityBadgeDefault, obj5);
    }
    cResult[5] = asset.rarity;
    cResult[6] = hideDescriptionAndRarity;
    cResult[7] = tmp10;
    tmp9 = tmp10;
  }
  const tmp8 = React3(Text_Text.Text, { variant: "text-lg/medium", color: "text-default", style: title, children: tmp5 });
  cResult[2] = tmp4.title;
  cResult[3] = tmp5;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : (function TraitOptionDetails(arg0) {
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
  items1 = [hasOwnProperty(tmp4, obj), React3(closure_8, { asset, hidden: hideDescriptionAndRarity })];
  return hasOwnProperty(tmp3, obj4);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitOptionDetails.tsx");

export default tmp4;
