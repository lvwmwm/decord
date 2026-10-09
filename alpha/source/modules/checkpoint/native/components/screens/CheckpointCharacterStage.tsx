// Module ID: 15928
// Function ID: 15929
// Name: CheckpointCharacterStage
// Dependencies: [17, 15915, 21, 5091, 587, 5458, 1126, 15926, 15925, 558, 576, 504, 5087, 15924, 2]

// Module 15928 (CheckpointCharacterStage)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import CheckpointTrait from "CheckpointTrait" /* 5458 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 15925 */;
import CheckpointTraitOptionNames from "CheckpointTraitOptionNames" /* 15926 */;
import CheckpointStore from "CheckpointStore" /* 15915 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2 };
obj2 = { flexGrow: 1, justifyContent: "flex-start", alignItems: "center", gap: nativeDefault.space.PX_12 };
let closure_6 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointCharacterStage(arg0) {
  let activeCustomizationOption;
  let items1;
  let items2;
  let stage;
  let stateFromStores;
  let tmp12;
  let tmp15;
  let tmp17;
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = stateFromStores(576);
  const cResult = obj.c(17);
  ({ stage, activeCustomizationOption } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function h() {
      return CheckpointStore.selectedCharacterTraits;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = stateFromStores(504);
  stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const container = tmp4.container;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = closure_4(stateFromStores(5087).Text, { color: "text-muted", variant: "text-md/medium", children: "Character Stage" });
    cResult[2] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== stage) {
    const obj2 = { color: "text-muted", variant: "text-md/medium", children: stage };
    const tmp14 = closure_4(stateFromStores(5087).Text, obj2);
    cResult[3] = stage;
    cResult[4] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== activeCustomizationOption) {
    const tmpResult2 = stateFromStores(15924);
    const customizationOptionName = tmpResult2.getCustomizationOptionName(activeCustomizationOption);
    cResult[5] = activeCustomizationOption;
    cResult[6] = customizationOptionName;
    tmp15 = customizationOptionName;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] !== tmp15) {
    const obj3 = { color: "text-muted", variant: "text-md/medium", children: items1 };
    items1 = ["Trait: ", tmp15];
    const tmp19 = closure_5(stateFromStores(5087).Heading, obj3);
    cResult[7] = tmp15;
    cResult[8] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[8];
  }
  if (cResult[9] !== stateFromStores) {
    let tmp21;
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(children) {
          const obj = { color: "text-muted", variant: "text-md/medium", children };
          return closure_1_4(stateFromStores(dependencyMap[12]).Text, obj, children);
        }
      }
      cResult[11] = I;
      tmp21 = I;
    } else {
      class I {
        constructor(children) {
          const obj = { color: "text-muted", variant: "text-md/medium", children };
          return closure_1_4(stateFromStores(dependencyMap[12]).Text, obj, children);
        }
      }
    }
    const _Object = Object;
    const values = Object.values(tmp(5458).CheckpointTrait);
    const flatMapResult = values.flatMap((item) => {
      let items;
      if (null == stateFromStores[item]) {
        items = [];
      } else if (item !== CheckpointTrait.CheckpointTrait.OUTFIT) {
        const intl2 = tmp7(1126).intl;
        const _HermesInternal2 = HermesInternal;
        const items1 = ["" + item + ": " + intl2.string(CheckpointTraitOptionNames.CHECKPOINT_TRAIT_OPTION_NAMES[item][stateFromStores[item]])];
        items = items1;
      } else {
        const intl3 = tmp7(1126).intl;
        const string = intl3.string;
        const tmp9 = CheckpointTraitOptionNames.CHECKPOINT_TRAIT_OPTION_NAMES[item];
        const tmp7Result = CheckpointCharacterTraits;
        let outfitDefaultOptionId = tmp7Result.getOutfitDefaultOptionId(tmp);
        if (outfitDefaultOptionId == null) {
          outfitDefaultOptionId = tmp;
        }
        const stringResult = string(tmp9[outfitDefaultOptionId]);
        const intl = tmp7(1126).intl;
        const _HermesInternal = HermesInternal;
        items = ["" + item + ": " + stringResult + " (" + intl.string(CheckpointTraitOptionNames.CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES[stateFromStores[item]]) + ")"];
      }
      return items;
    });
    const mapped = flatMapResult.map(tmp21);
    cResult[9] = stateFromStores;
    cResult[10] = mapped;
  } else {
    class I {
      constructor(children) {
        const obj = { color: "text-muted", variant: "text-md/medium", children };
        return closure_1_4(stateFromStores(dependencyMap[12]).Text, obj, children);
      }
    }
  }
  if (cResult[12] === tmp4.container) {
    class I {
      constructor(children) {
        const obj = { color: "text-muted", variant: "text-md/medium", children };
        return closure_1_4(stateFromStores(dependencyMap[12]).Text, obj, children);
      }
    }
  }
  const obj4 = { style: container, children: items2 };
  items2 = [tmp9, tmp12, tmp17, tmp20];
  cResult[12] = tmp4.container;
  cResult[13] = tmp12;
  cResult[14] = tmp17;
  cResult[15] = tmp20;
  cResult[16] = closure_5(View, obj4);
  closure_5(View, obj4);
}) : (function CheckpointCharacterStage(arg0) {
  let activeCustomizationOption;
  let items1;
  let items2;
  let stage;
  let stateFromStores;
  ({ stage, activeCustomizationOption } = arg0);
  const tmp = closure_6();
  let obj = stateFromStores(504);
  let items = [CheckpointStore];
  const obj2 = { style: tmp.container, children: items1 };
  stateFromStores = obj.useStateFromStores(items, () => CheckpointStore.selectedCharacterTraits);
  items1 = [closure_4(stateFromStores(5087).Text, { color: "text-muted", variant: "text-md/medium", children: "Character Stage" }), closure_4(stateFromStores(5087).Text, { color: "text-muted", variant: "text-md/medium", children: stage }), , ];
  const obj3 = { color: "text-muted", variant: "text-md/medium", children: items2 };
  const Heading = stateFromStores(5087).Heading;
  items2 = ["Trait: "];
  const obj4 = stateFromStores(15924);
  items2[1] = obj4.getCustomizationOptionName(activeCustomizationOption);
  items1[2] = closure_5(Heading, obj3);
  const values = Object.values(stateFromStores(5458).CheckpointTrait);
  const flatMapResult = values.flatMap((item) => {
    let items;
    if (null == stateFromStores[item]) {
      items = [];
    } else if (item !== CheckpointTrait.CheckpointTrait.OUTFIT) {
      const intl2 = tmp7(1126).intl;
      const _HermesInternal2 = HermesInternal;
      const items1 = ["" + item + ": " + intl2.string(CheckpointTraitOptionNames.CHECKPOINT_TRAIT_OPTION_NAMES[item][stateFromStores[item]])];
      items = items1;
    } else {
      const intl3 = tmp7(1126).intl;
      const string = intl3.string;
      const tmp9 = CheckpointTraitOptionNames.CHECKPOINT_TRAIT_OPTION_NAMES[item];
      const tmp7Result = CheckpointCharacterTraits;
      let outfitDefaultOptionId = tmp7Result.getOutfitDefaultOptionId(tmp);
      if (outfitDefaultOptionId == null) {
        outfitDefaultOptionId = tmp;
      }
      const stringResult = string(tmp9[outfitDefaultOptionId]);
      const intl = tmp7(1126).intl;
      const _HermesInternal = HermesInternal;
      items = ["" + item + ": " + stringResult + " (" + intl.string(CheckpointTraitOptionNames.CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES[stateFromStores[item]]) + ")"];
    }
    return items;
  });
  items1[3] = flatMapResult.map((children) => {
    const obj = { color: "text-muted", variant: "text-md/medium", children };
    return closure_1_4(stateFromStores(dependencyMap[12]).Text, obj, children);
  });
  return closure_5(View, obj2);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointCharacterStage.tsx");

export default tmp3;
