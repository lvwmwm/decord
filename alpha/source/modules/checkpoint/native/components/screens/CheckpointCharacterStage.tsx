// Module ID: 12980
// Function ID: 12981
// Name: CheckpointCharacterStage
// Dependencies: [17, 12968, 21, 4972, 587, 6041, 6366, 1125, 6040, 558, 576, 504, 5235, 6364, 2]

// Module 12980 (CheckpointCharacterStage)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5235 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 6040 */;
import CheckpointTrait from "CheckpointTrait" /* 6041 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6364 */;
import CheckpointTraitOptionNames from "CheckpointTraitOptionNames" /* 6366 */;
import CheckpointStore from "CheckpointStore" /* 12968 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

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
  let tmp12;
  let tmp15;
  let tmp17;
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = react;
  const cResult = obj.c(17);
  ({ stage, activeCustomizationOption } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    class T {
      constructor() {
        return CheckpointStore.selectedCharacterTraits;
      }
    }
    cResult[0] = items;
    cResult[1] = T;
    tmp5 = items;
    tmp6 = T;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const container = tmp4.container;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = closure_4(Text_Text.Text, { color: "text-muted", variant: "text-md/medium", children: "Character Stage" });
    class T {
      constructor() {
        return CheckpointStore.selectedCharacterTraits;
      }
    }
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== stage) {
    class T {
      constructor() {
        return CheckpointStore.selectedCharacterTraits;
      }
    }
    cResult[3] = stage;
    cResult[4] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== activeCustomizationOption) {
    const tmpResult2 = CheckpointCustomizationUtils;
    const customizationOptionName = tmpResult2.getCustomizationOptionName(activeCustomizationOption);
    class T {
      constructor() {
        return CheckpointStore.selectedCharacterTraits;
      }
    }
    cResult[6] = customizationOptionName;
    tmp15 = customizationOptionName;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] !== tmp15) {
    const obj3 = { color: "text-muted", variant: "text-md/medium", children: items1 };
    items1 = ["Trait: "];
    class T {
      constructor() {
        return CheckpointStore.selectedCharacterTraits;
      }
    }
    const tmp19 = closure_5(Text_Text.Heading, obj3);
    cResult[7] = tmp15;
    cResult[8] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[8];
  }
  if (cResult[9] !== stateFromStores) {
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(children) {
          const obj = { color: "text-muted", variant: "text-md/medium", children };
          return closure_1_4(require("Text/Text").Text, obj, children);
        }
      }
      cResult[11] = I;
      class T {
        constructor() {
          return CheckpointStore.selectedCharacterTraits;
        }
      }
    } else {
      class I {
        constructor(children) {
          const obj = { color: "text-muted", variant: "text-md/medium", children };
          return closure_1_4(require("Text/Text").Text, obj, children);
        }
      }
    }
    class T {
      constructor() {
        return CheckpointStore.selectedCharacterTraits;
      }
    }
    const _Object = Object;
    const values = Object.values(tmp(6041).CheckpointTrait);
    const flatMapResult = values.flatMap((item) => {
      if (null == stateFromStores[item]) {
        return [];
      } else if (item !== CheckpointTrait.CheckpointTrait.OUTFIT) {
        const tmp9 = CheckpointTraitOptionNames.CHECKPOINT_TRAIT_TO_OPTION_NAMES[item][stateFromStores[item]];
        let str9 = "";
        if (null != tmp9) {
          const intl3 = tmp11(1125).intl;
          str9 = intl3.string(tmp9);
        }
        const _HermesInternal2 = HermesInternal;
        const items = ["" + item + ": " + str9];
        return items;
      } else {
        const tmp11Result = CheckpointCharacterTraits;
        let outfitDefaultOptionId = tmp11Result.getOutfitDefaultOptionId(tmp);
        const tmp13 = CheckpointTraitOptionNames.CHECKPOINT_TRAIT_TO_OPTION_NAMES[item];
        if (outfitDefaultOptionId == null) {
          outfitDefaultOptionId = tmp;
        }
        const tmp4 = CheckpointTraitOptionNames.CHECKPOINT_OUTFIT_TO_COLOR_NAME[stateFromStores[item]];
        let str2 = "";
        if (null != tmp13[outfitDefaultOptionId]) {
          const intl = tmp11(1125).intl;
          str2 = intl.string(tmp3);
        }
        let str3 = "";
        if (null != tmp4) {
          const intl2 = tmp11(1125).intl;
          str3 = intl2.string(tmp4);
        }
        const _HermesInternal = HermesInternal;
        const items1 = ["" + item + ": " + str2 + " (" + str3 + ")"];
        return items1;
      }
    });
    const mapped = flatMapResult.map(tmp21);
    cResult[9] = stateFromStores;
    cResult[10] = mapped;
  } else {
    class I {
      constructor(children) {
        const obj = { color: "text-muted", variant: "text-md/medium", children };
        return closure_1_4(require("Text/Text").Text, obj, children);
      }
    }
  }
  if (cResult[12] === tmp4.container) {
    class I {
      constructor(children) {
        const obj = { color: "text-muted", variant: "text-md/medium", children };
        return closure_1_4(require("Text/Text").Text, obj, children);
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
  items1 = [closure_4(stateFromStores(5235).Text, { color: "text-muted", variant: "text-md/medium", children: "Character Stage" }), closure_4(stateFromStores(5235).Text, { color: "text-muted", variant: "text-md/medium", children: stage }), , ];
  const obj3 = { color: "text-muted", variant: "text-md/medium", children: items2 };
  const Heading = stateFromStores(5235).Heading;
  items2 = ["Trait: "];
  const obj4 = stateFromStores(6364);
  items2[1] = obj4.getCustomizationOptionName(activeCustomizationOption);
  items1[2] = closure_5(Heading, obj3);
  const values = Object.values(stateFromStores(6041).CheckpointTrait);
  const flatMapResult = values.flatMap((item) => {
    if (null == stateFromStores[item]) {
      return [];
    } else if (item !== CheckpointTrait.CheckpointTrait.OUTFIT) {
      const tmp9 = CheckpointTraitOptionNames.CHECKPOINT_TRAIT_TO_OPTION_NAMES[item][stateFromStores[item]];
      let str9 = "";
      if (null != tmp9) {
        const intl3 = tmp11(1125).intl;
        str9 = intl3.string(tmp9);
      }
      const _HermesInternal2 = HermesInternal;
      const items = ["" + item + ": " + str9];
      return items;
    } else {
      const tmp11Result = CheckpointCharacterTraits;
      let outfitDefaultOptionId = tmp11Result.getOutfitDefaultOptionId(tmp);
      const tmp13 = CheckpointTraitOptionNames.CHECKPOINT_TRAIT_TO_OPTION_NAMES[item];
      if (outfitDefaultOptionId == null) {
        outfitDefaultOptionId = tmp;
      }
      const tmp4 = CheckpointTraitOptionNames.CHECKPOINT_OUTFIT_TO_COLOR_NAME[stateFromStores[item]];
      let str2 = "";
      if (null != tmp13[outfitDefaultOptionId]) {
        const intl = tmp11(1125).intl;
        str2 = intl.string(tmp3);
      }
      let str3 = "";
      if (null != tmp4) {
        const intl2 = tmp11(1125).intl;
        str3 = intl2.string(tmp4);
      }
      const _HermesInternal = HermesInternal;
      const items1 = ["" + item + ": " + str2 + " (" + str3 + ")"];
      return items1;
    }
  });
  items1[3] = flatMapResult.map((children) => {
    const obj = { color: "text-muted", variant: "text-md/medium", children };
    return closure_1_4(stateFromStores(dependencyMap[12]).Text, obj, children);
  });
  return closure_5(View, obj2);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointCharacterStage.tsx");

export default tmp3;
