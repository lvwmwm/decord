// Module ID: 15844
// Function ID: 15845
// Name: TraitPickerControls
// Dependencies: [109, 19, 15802, 21, 558, 576, 504, 5457, 15812, 5490, 15811, 15845, 2]

// Module 15844 (TraitPickerControls)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import CheckpointTrait from "CheckpointTrait" /* 5457 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 15811 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 15812 */;
import TraitPickerDefault from "TraitPicker" /* 15845 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 15802 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _require;

let tmp;
const get_initialized = tmp(504);
let closure_3 = ["activeCustomizationOption", "onSelectOption"];
let closure_4 = ["activeCustomizationOption"];
let closure_5 = ["activeCustomizationOption"];
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSelectedAndSavedTraits() {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function o() {
      return { selectedCharacterTraits: CheckpointStore.selectedCharacterTraits, savedSelection: CheckpointStore.character };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStoresObject(tmp4, tmp5);
}) : (function useSelectedAndSavedTraits() {
  const items = [CheckpointStore];
  const obj = get_initialized;
  return obj.useStateFromStoresObject(items, () => ({ selectedCharacterTraits: CheckpointStore.selectedCharacterTraits, savedSelection: CheckpointStore.character }));
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function OutfitControls(arg0) {
  let activeCustomizationOption;
  let onSelectOption;
  let savedSelection;
  let selectedCharacterTraits;
  let tmp12;
  let tmp16;
  let tmp18;
  let tmp4;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(18);
  if (cResult[0] !== arg0) {
    ({ activeCustomizationOption, onSelectOption } = arg0);
    _require = onSelectOption;
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = activeCustomizationOption;
    cResult[2] = onSelectOption;
    cResult[3] = tmp9;
    tmp6 = tmp9;
    tmp4 = activeCustomizationOption;
  } else {
    tmp4 = cResult[1];
    _require = cResult[2];
    tmp6 = cResult[3];
  }
  ({ savedSelection, selectedCharacterTraits } = closure_10());
  closure_10();
  const tmp11 = selectedCharacterTraits[CheckpointTrait.CheckpointTrait.OUTFIT];
  if (cResult[4] !== tmp11) {
    let outfitDefaultOptionId;
    if (null != tmp11) {
      const tmpResult = CheckpointCharacterTraits;
      outfitDefaultOptionId = tmpResult.getOutfitDefaultOptionId(tmp11);
    }
    cResult[4] = tmp11;
    cResult[5] = outfitDefaultOptionId;
    tmp12 = outfitDefaultOptionId;
  } else {
    tmp12 = cResult[5];
  }
  let closure_1 = tmp12;
  let NONE;
  if (savedSelection != null) {
    NONE = savedSelection[tmp(undefined, 5457).CheckpointTrait.OUTFIT];
  }
  if (NONE == null) {
    NONE = tmp(5490).CheckpointCharacterOutfit.NONE;
  }
  if (cResult[6] !== NONE) {
    const tmpResult3 = CheckpointCharacterTraits;
    const outfitDefaultOptionId1 = tmpResult3.getOutfitDefaultOptionId(NONE);
    cResult[6] = NONE;
    cResult[7] = outfitDefaultOptionId1;
    tmp16 = outfitDefaultOptionId1;
  } else {
    tmp16 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const getTraitOptions = tmp(15811).getTraitOptions;
    CheckpointCustomizationUtils;
    const traitOptions = getTraitOptions(tmp(15811).CheckpointCustomizationOption.OUTFIT, tmp(15812).OUTFIT_DEFAULT_OPTION_IDS);
    cResult[8] = traitOptions;
    tmp18 = traitOptions;
  } else {
    tmp18 = cResult[8];
  }
  if (cResult[9] === tmp12) {
    let tmp21;
    if (cResult[10] === tmp5) {
      tmp21 = cResult[11];
    }
    if (cResult[12] === tmp4) {
      if (cResult[13] === tmp12) {
        if (cResult[14] === tmp21) {
          if (cResult[15] === tmp6) {
            let tmp22;
            if (cResult[16] === tmp16) {
              tmp22 = cResult[17];
            }
            return tmp22;
          }
        }
      }
    }
    TraitPickerDefault;
    const merged = Object.assign(tmp6);
    cResult[12] = tmp4;
    cResult[13] = tmp12;
    cResult[14] = tmp21;
    cResult[15] = tmp6;
    cResult[16] = tmp16;
    const tmp29 = <tmp25 customizationOption={tmp4} options={tmp18} savedOptionId={tmp16} selectedOptionId={tmp12} onSelectOption={tmp21} />;
    class U {
      constructor(arg0, arg1) {
        if (arg1 !== closure_1) {
          tmp = arg0;
          tmp2 = closure_0;
          tmp3 = closure_0(arg0, arg1);
        }
        return;
      }
    }
    tmp22 = tmp29;
  }
  class U {
    constructor(arg0, arg1) {
      if (arg1 !== closure_1) {
        tmp = arg0;
        tmp2 = closure_0;
        tmp3 = closure_0(arg0, arg1);
      }
      return;
    }
  }
  cResult[9] = tmp12;
  cResult[10] = tmp5;
  cResult[11] = U;
  tmp21 = U;
}) : (function OutfitControls(onSelectOption) {
  onSelectOption = onSelectOption.onSelectOption;
  const activeCustomizationOption = onSelectOption.activeCustomizationOption;
  const merged = Object.assign(onSelectOption, Object.assign({ activeCustomizationOption: 0, onSelectOption: 0 }));
  const tmp2 = closure_10();
  const savedSelection = tmp2.savedSelection;
  const tmp5 = tmp2.selectedCharacterTraits[onSelectOption(undefined, 5457).CheckpointTrait.OUTFIT];
  let outfitDefaultOptionId;
  if (null != tmp5) {
    const tmp3Result = onSelectOption(15812);
    outfitDefaultOptionId = tmp3Result.getOutfitDefaultOptionId(tmp5);
  }
  let NONE;
  const getOutfitDefaultOptionId = tmp3(15812).getOutfitDefaultOptionId;
  onSelectOption(15812);
  if (savedSelection != null) {
    NONE = savedSelection[tmp3(undefined, 5457).CheckpointTrait.OUTFIT];
  }
  if (NONE == null) {
    NONE = tmp3(5490).CheckpointCharacterOutfit.NONE;
  }
  const outfitDefaultOptionId1 = getOutfitDefaultOptionId(NONE);
  const items = [onSelectOption, outfitDefaultOptionId];
  const memo = react.useMemo(() => {
    const getTraitOptions = onSelectOption(dependencyMap[10]).getTraitOptions;
    onSelectOption(dependencyMap[10]);
    return getTraitOptions(onSelectOption(dependencyMap[10]).CheckpointCustomizationOption.OUTFIT, onSelectOption(dependencyMap[8]).OUTFIT_DEFAULT_OPTION_IDS);
  }, []);
  const callback = react.useCallback((arg0, arg1) => {
    if (arg1 !== outfitDefaultOptionId) {
      onSelectOption(arg0, arg1);
    }
  }, items);
  outfitDefaultOptionId(15845);
  const merged1 = Object.assign(merged);
  return <tmp12 customizationOption={activeCustomizationOption} options={memo} savedOptionId={outfitDefaultOptionId1} selectedOptionId={outfitDefaultOptionId} onSelectOption={callback} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function OutfitColorControls(activeCustomizationOption) {
  let savedSelection;
  let selectedCharacterTraits;
  let tmp11;
  let tmp14;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(13);
  if (cResult[0] !== activeCustomizationOption) {
    activeCustomizationOption = activeCustomizationOption.activeCustomizationOption;
    const tmp8 = _objectWithoutProperties(activeCustomizationOption, closure_4);
    cResult[0] = activeCustomizationOption;
    cResult[1] = activeCustomizationOption;
    cResult[2] = tmp8;
    tmp5 = tmp8;
    tmp4 = activeCustomizationOption;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  ({ savedSelection, selectedCharacterTraits } = closure_10());
  closure_10();
  const tmp10 = selectedCharacterTraits[CheckpointTrait.CheckpointTrait.OUTFIT];
  if (cResult[3] !== tmp10) {
    let NONE = tmp10;
    const getOutfitDefaultOptionId = CheckpointCharacterTraits.getOutfitDefaultOptionId;
    CheckpointCharacterTraits;
    if (tmp10 == null) {
      NONE = tmp(5490).CheckpointCharacterOutfit.NONE;
    }
    let NONE2 = getOutfitDefaultOptionId(NONE);
    if (NONE2 == null) {
      NONE2 = tmp(5490).CheckpointCharacterOutfit.NONE;
    }
    cResult[3] = tmp10;
    cResult[4] = NONE2;
    tmp11 = NONE2;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] !== tmp11) {
    const getTraitOptions = CheckpointCustomizationUtils.getTraitOptions;
    CheckpointCustomizationUtils;
    const OUTFIT_COLOR = tmp(15811).CheckpointCustomizationOption.OUTFIT_COLOR;
    const tmpResult4 = CheckpointCharacterTraits;
    const traitOptions = getTraitOptions(OUTFIT_COLOR, tmpResult4.getOutfitColorOptionIds(tmp11));
    cResult[5] = tmp11;
    cResult[6] = traitOptions;
    tmp14 = traitOptions;
  } else {
    tmp14 = cResult[6];
  }
  let tmp17;
  if (savedSelection != null) {
    tmp17 = savedSelection[tmp(undefined, 5457).CheckpointTrait.OUTFIT];
  }
  if (cResult[7] === tmp4) {
    if (cResult[8] === tmp14) {
      if (cResult[9] === tmp5) {
        if (cResult[10] === tmp10) {
          let tmp18;
          if (cResult[11] === tmp17) {
            tmp18 = cResult[12];
          }
          return tmp18;
        }
      }
    }
  }
  TraitPickerDefault;
  const merged = Object.assign(tmp5);
  const tmp21 = <tmp19 customizationOption={tmp4} options={tmp14} savedOptionId={tmp17} selectedOptionId={tmp10} hideDescriptionAndRarity />;
  cResult[7] = tmp4;
  cResult[8] = tmp14;
  cResult[9] = tmp5;
  cResult[10] = tmp10;
  cResult[11] = tmp17;
  cResult[12] = tmp21;
  tmp18 = tmp21;
}) : (function OutfitColorControls(activeCustomizationOption) {
  let tmp11;
  activeCustomizationOption = activeCustomizationOption.activeCustomizationOption;
  const merged = Object.assign(activeCustomizationOption, Object.assign({ activeCustomizationOption: 0 }));
  let NONE2;
  const tmp2 = closure_10();
  const savedSelection = tmp2.savedSelection;
  const tmp5 = tmp2.selectedCharacterTraits[NONE2(undefined, 5457).CheckpointTrait.OUTFIT];
  let NONE = tmp5;
  const getOutfitDefaultOptionId = NONE2(15812).getOutfitDefaultOptionId;
  NONE2(15812);
  if (tmp5 == null) {
    NONE = tmp3(5490).CheckpointCharacterOutfit.NONE;
  }
  NONE2 = getOutfitDefaultOptionId(NONE);
  if (NONE2 == null) {
    NONE2 = tmp3(5490).CheckpointCharacterOutfit.NONE;
  }
  const items = [NONE2];
  const memo = react.useMemo(() => {
    const getTraitOptions = CheckpointCustomizationUtils.getTraitOptions;
    CheckpointCustomizationUtils;
    const OUTFIT_COLOR = CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT_COLOR;
    const obj = CheckpointCharacterTraits;
    return getTraitOptions(OUTFIT_COLOR, obj.getOutfitColorOptionIds(NONE2));
  }, items);
  let obj = { customizationOption: activeCustomizationOption, options: memo, savedOptionId: tmp11, selectedOptionId: tmp5, hideDescriptionAndRarity: true };
  const tmp9 = TraitPickerDefault;
  const merged1 = Object.assign(merged);
  tmp11 = undefined;
  const tmp8 = jsx;
  if (savedSelection != null) {
    tmp11 = savedSelection[tmp3(undefined, 5457).CheckpointTrait.OUTFIT];
  }
  return tmp8(tmp9, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function TraitControls(activeCustomizationOption) {
  let savedSelection;
  let selectedCharacterTraits;
  let tmp12;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(11);
  if (cResult[0] !== activeCustomizationOption) {
    activeCustomizationOption = activeCustomizationOption.activeCustomizationOption;
    const tmp8 = _objectWithoutProperties(activeCustomizationOption, closure_5);
    cResult[0] = activeCustomizationOption;
    cResult[1] = activeCustomizationOption;
    cResult[2] = tmp8;
    tmp5 = tmp8;
    tmp4 = activeCustomizationOption;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  ({ savedSelection, selectedCharacterTraits } = closure_10());
  closure_10();
  const tmp10 = CheckpointCustomizationUtils.CUSTOMIZATION_OPTION_TRAITS[tmp4];
  if (cResult[3] !== tmp4) {
    const tmpResult = CheckpointCustomizationUtils;
    const traitOptions = tmpResult.getTraitOptions(tmp4);
    cResult[3] = tmp4;
    cResult[4] = traitOptions;
    tmp12 = traitOptions;
  } else {
    tmp12 = cResult[4];
  }
  let tmp14;
  if (savedSelection != null) {
    tmp14 = savedSelection[tmp10];
  }
  if (cResult[5] === tmp4) {
    if (cResult[6] === tmp12) {
      if (cResult[7] === tmp5) {
        if (cResult[8] === selectedCharacterTraits[tmp10]) {
          let tmp15;
          if (cResult[9] === tmp14) {
            tmp15 = cResult[10];
          }
          return tmp15;
        }
      }
    }
  }
  TraitPickerDefault;
  const merged = Object.assign(tmp5);
  const tmp18 = <tmp16 customizationOption={tmp4} options={tmp12} savedOptionId={tmp14} selectedOptionId={selectedCharacterTraits[tmp10]} />;
  cResult[5] = tmp4;
  cResult[6] = tmp12;
  cResult[7] = tmp5;
  cResult[8] = selectedCharacterTraits[tmp10];
  cResult[9] = tmp14;
  cResult[10] = tmp18;
  tmp15 = tmp18;
}) : (function TraitControls(activeCustomizationOption) {
  let tmp9;
  activeCustomizationOption = activeCustomizationOption.activeCustomizationOption;
  const merged = Object.assign(activeCustomizationOption, Object.assign({ activeCustomizationOption: 0 }));
  const tmp2 = closure_10();
  const savedSelection = tmp2.savedSelection;
  const selectedCharacterTraits = tmp2.selectedCharacterTraits;
  const tmp3 = activeCustomizationOption(15811).CUSTOMIZATION_OPTION_TRAITS[activeCustomizationOption];
  const items = [activeCustomizationOption];
  const tmp4 = selectedCharacterTraits[tmp3];
  const memo = react.useMemo(() => {
    const obj = CheckpointCustomizationUtils;
    return obj.getTraitOptions(activeCustomizationOption);
  }, items);
  let obj = { customizationOption: activeCustomizationOption, options: memo, savedOptionId: tmp9, selectedOptionId: tmp4 };
  const tmp7 = TraitPickerDefault;
  const merged1 = Object.assign(merged);
  tmp9 = undefined;
  const tmp6 = jsx;
  if (savedSelection != null) {
    tmp9 = savedSelection[tmp3];
  }
  return tmp6(tmp7, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function TraitPickerControls(activeCustomizationOption) {
  const obj = react2;
  const cResult = obj.c(12);
  activeCustomizationOption = activeCustomizationOption.activeCustomizationOption;
  if (CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT === activeCustomizationOption) {
    if (cResult[0] === activeCustomizationOption) {
      let tmp25;
      if (cResult[1] === activeCustomizationOption) {
        tmp25 = cResult[2];
      }
      return tmp25;
    }
    const merged = Object.assign(activeCustomizationOption);
    const tmp31 = <closure_11 key={activeCustomizationOption} />;
    cResult[0] = activeCustomizationOption;
    cResult[1] = activeCustomizationOption;
    cResult[2] = tmp31;
    tmp25 = tmp31;
  } else if (CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT_COLOR === activeCustomizationOption) {
    if (cResult[3] === activeCustomizationOption) {
      let tmp18;
      if (cResult[4] === activeCustomizationOption) {
        tmp18 = cResult[5];
      }
      return tmp18;
    }
    const merged1 = Object.assign(activeCustomizationOption);
    const tmp24 = <closure_12 key={activeCustomizationOption} />;
    cResult[3] = activeCustomizationOption;
    cResult[4] = activeCustomizationOption;
    cResult[5] = tmp24;
    tmp18 = tmp24;
  } else if (CheckpointCustomizationUtils.CheckpointCustomizationOption.BASE === activeCustomizationOption) {
    if (cResult[6] === activeCustomizationOption) {
      let tmp11;
      if (cResult[7] === activeCustomizationOption) {
        tmp11 = cResult[8];
      }
      return tmp11;
    }
    const merged2 = Object.assign(activeCustomizationOption);
    const tmp17 = <closure_13 key={activeCustomizationOption} hideDescriptionAndRarity skipIntro />;
    cResult[6] = activeCustomizationOption;
    cResult[7] = activeCustomizationOption;
    cResult[8] = tmp17;
    tmp11 = tmp17;
  } else {
    if (cResult[9] === activeCustomizationOption) {
      let tmp4;
      if (cResult[10] === activeCustomizationOption) {
        tmp4 = cResult[11];
      }
      return tmp4;
    }
    const merged3 = Object.assign(activeCustomizationOption);
    const tmp10 = <closure_13 key={activeCustomizationOption} />;
    cResult[9] = activeCustomizationOption;
    cResult[10] = activeCustomizationOption;
    cResult[11] = tmp10;
    tmp4 = tmp10;
  }
}) : (function TraitPickerControls(activeCustomizationOption) {
  activeCustomizationOption = activeCustomizationOption.activeCustomizationOption;
  if (CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT === activeCustomizationOption) {
    const merged = Object.assign(activeCustomizationOption);
    return <closure_11 key={activeCustomizationOption} />;
  } else if (CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT_COLOR === activeCustomizationOption) {
    const merged1 = Object.assign(activeCustomizationOption);
    return <closure_12 key={activeCustomizationOption} />;
  } else if (CheckpointCustomizationUtils.CheckpointCustomizationOption.BASE === activeCustomizationOption) {
    const merged2 = Object.assign(activeCustomizationOption);
    return <closure_13 key={activeCustomizationOption} hideDescriptionAndRarity skipIntro />;
  } else {
    const merged3 = Object.assign(activeCustomizationOption);
    return <closure_13 key={activeCustomizationOption} />;
  }
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitPickerControls.tsx");

export default tmp2;
