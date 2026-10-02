// Module ID: 16255
// Function ID: 16256
// Name: VibegrationsRemixSheet
// Dependencies: [5, 32, 19, 17, 2073, 5751, 21, 4837, 588, 558, 576, 5371, 504, 1127, 3718, 6617, 16256, 4801, 6571, 4833, 5997, 5916, 5282, 6624, 2]

// Module 16255 (VibegrationsRemixSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 588 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 6617 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2073 */;
import SortedGuildStore from "SortedGuildStore" /* 5751 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3, project;

let c10;
let c9;
let obj2;
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
const View = react_native.View;
({ jsx: c9, jsxs: c10 } = Fragment);
const VibegrationsRemixSheet = "VibegrationsRemixSheet";
let obj = { content: obj2 };
obj2 = { gap: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((project) => {
  let closure_3;
  let closure_5;
  let first;
  let first1;
  let intl2;
  let items1;
  let obj10;
  let obj5;
  let obj7;
  let stateFromStoresArray;
  let title;
  let tmp10;
  let tmp11;
  let tmp12;
  const tmp = project;
  let tmp2 = first;
  let obj = project(first[10]);
  const cResult = obj.c(33);
  project = project.project;
  const onRemixed = project.onRemixed;
  const currentGuildId = project.currentGuildId;
  let tmp4 = closure_12();
  const tmp5 = first1(react.useState(currentGuildId), 2);
  first = tmp5[0];
  _asyncToGenerator = tmp5[1];
  const tmp7 = first1(react.useState(false), 2);
  first1 = tmp7[0];
  react = tmp7[1];
  let tmp9 = first1(react.useState(null), 2);
  [tmp10, View] = tmp9;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [title, ];
    items[1] = stateFromStoresArray;
    const fn = function f() {
      const items = [];
      const flattenedGuildIds = title.getFlattenedGuildIds();
      const tmp2 = flattenedGuildIds[Symbol.iterator]();
      while (tmp2 !== undefined) {
        let guild = stateFromStoresArray.getGuild(tmp3);
        let tmp6 = guild;
        let result = null != guild;
        if (result) {
          let obj = project(first[11]);
          result = obj.isVibegrationsGuildEligible(tmp6, "VibegrationsRemixSheet");
        }
        if (result) {
          let arr = items.push(tmp6);
        }
        continue;
      }
      return items;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp11 = items;
    tmp12 = fn;
  } else {
    [tmp11, tmp12] = cResult;
  }
  const tmpResult = tmp(tmp2[12]);
  stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp11, tmp12);
  if (cResult[2] === first) {
    let tmp15;
    let tmp18;
    let tmp21;
    if (cResult[3] === stateFromStoresArray) {
      tmp15 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(tmp2[13]).intl;
      const stringResult = intl.string(onRemixed(tmp2[14]).HQLYXD);
      cResult[5] = stringResult;
      tmp18 = stringResult;
    } else {
      tmp18 = cResult[5];
    }
    title = tmp18;
    if (cResult[6] !== stateFromStoresArray) {
      const fn2 = function z() {
        let obj3;
        const obj = Sheet_showSimpleActionSheet;
        const obj2 = {
          key: "VibegrationsRemixDestination",
          stackingBehavior: "stack",
          header: obj3,
          hasIcons: false,
          options: stateFromStoresArray.map((label) => ({
            label: label.name,
            onPress() {
              return closure_2_3(label.id);
            }
          }))
        };
        obj3 = { title };
        const result = obj.showSimpleActionSheet(obj2);
      };
      cResult[6] = stateFromStoresArray;
      cResult[7] = fn2;
      tmp21 = fn2;
    } else {
      tmp21 = cResult[7];
    }
    if (cResult[8] === first) {
      if (cResult[9] === onRemixed) {
        if (cResult[10] === project) {
          let tmp22;
          let tmp24;
          let tmp28;
          if (cResult[11] === first1) {
            tmp22 = cResult[12];
          }
          let closure_9 = tmp22;
          const _Symbol2 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            let obj2 = { title: intl2.string(onRemixed(tmp2[14])["V+azw/"]) };
            const BottomSheetTitleHeader = tmp(tmp2[18]).BottomSheetTitleHeader;
            intl2 = tmp(tmp2[13]).intl;
            const tmp27 = closure_9(BottomSheetTitleHeader, obj2);
            cResult[13] = tmp27;
            tmp24 = tmp27;
          } else {
            tmp24 = cResult[13];
          }
          const content = tmp4.content;
          if (cResult[14] !== tmp15) {
            let obj3 = { variant: "text-md/normal", color: "text-muted", children: tmp15 };
            const tmp30 = closure_9(tmp(tmp2[19]).Text, obj3);
            cResult[14] = tmp15;
            cResult[15] = tmp30;
            tmp28 = tmp30;
          } else {
            tmp28 = cResult[15];
          }
          if (cResult[16] === tmp21) {
            if (cResult[17] === (first1 || stateFromStoresArray.length < 2)) {
              let tmp32;
              let tmp35;
              let tmp39;
              if (cResult[18] === tmp28) {
                tmp32 = cResult[19];
              }
              if (cResult[20] !== tmp10) {
                let tmp36 = null;
                if (null != tmp10) {
                  let obj4 = { accessibilityRole: "alert", children: closure_9(tmp(tmp2[19]).Text, obj5) };
                  obj5 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp10 };
                  tmp36 = closure_9(View, obj4);
                }
                cResult[20] = tmp10;
                cResult[21] = tmp36;
                tmp35 = tmp36;
              } else {
                tmp35 = cResult[21];
              }
              const _Symbol3 = Symbol;
              if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                const intl3 = tmp(tmp2[13]).intl;
                const stringResult1 = intl3.string(onRemixed(tmp2[14]).vPI794);
                cResult[22] = stringResult1;
                tmp39 = stringResult1;
              } else {
                tmp39 = cResult[22];
              }
              if (cResult[23] !== tmp22) {
                class Z {
                  constructor() {
                    const promise = closure_9();
                    promise.catch(() => {

                    });
                  }
                }
                cResult[23] = tmp22;
                cResult[24] = Z;
              } else {
                class Z {
                  constructor() {
                    const promise = closure_9();
                    promise.catch(() => {

                    });
                  }
                }
              }
              if (cResult[25] === first1) {
                class Z {
                  constructor() {
                    const promise = closure_9();
                    promise.catch(() => {

                    });
                  }
                }
                if (cResult[28] === tmp4.content) {
                  class Z {
                    constructor() {
                      const promise = closure_9();
                      promise.catch(() => {

                      });
                    }
                  }
                }
                let obj6 = { header: tmp24, children: closure_10(View, obj7) };
                obj7 = { style: content, children: items1 };
                items1 = [tmp32, tmp35, tmp43];
                const ActionSheet = tmp(tmp2[23]).ActionSheet;
                cResult[28] = tmp4.content;
                cResult[29] = tmp32;
                cResult[30] = tmp35;
                cResult[31] = tmp43;
                cResult[32] = closure_9(ActionSheet, obj6);
                const tmp50 = closure_9(ActionSheet, obj6);
              }
              const obj8 = { variant: "primary", text: tmp39, loading: first1, onPress: tmp42 };
              cResult[25] = first1;
              cResult[26] = tmp42;
              cResult[27] = closure_9(tmp(tmp2[22]).Button, obj8);
              const tmp45 = closure_9(tmp(tmp2[22]).Button, obj8);
            }
          }
          const obj9 = { hasIcons: false, children: closure_9(tmp(tmp2[21]).TableRow, obj10) };
          const TableRowGroup = tmp(tmp2[20]).TableRowGroup;
          obj10 = { label: tmp18, trailing: tmp28, arrow: true, disabled: first1 || stateFromStoresArray.length < 2, onPress: tmp21 };
          const tmp34 = closure_9(TableRowGroup, obj9);
          cResult[16] = tmp21;
          cResult[17] = first1 || stateFromStoresArray.length < 2;
          cResult[18] = tmp28;
          cResult[19] = tmp34;
          tmp32 = tmp34;
        }
      }
    }
    let closure_0 = _asyncToGenerator(async (arg0, value) => {
      let closure_1;
      let obj4;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp4;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              tmp4 = undefined;
              const tmp35 = first1;
              if (!tmp35) {
                closure_1_5(true);
                closure_1_6(null);
                c2 = 1;
                c3 = 1;
                const obj5 = { value: obj4.remixVibegrationsProjectInto(tmp4, c2), done: false };
                obj4 = tmp4(first[16]);
                return obj5;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            tmp4 = value;
            if (tmp4.ok) {
              const obj = onRemixed(first[17]);
              obj.hideActionSheet(VibegrationsRemixSheet);
              tmp(tmp4.projectId, c2);
              c3 = 3;
              const obj7 = { value: undefined, done: true };
              return obj7;
            } else {
              closure_1_6(tmp4.message);
              closure_1_5(false);
            }
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp27) {
          c3 = 3;
          throw tmp27;
        }
      }
    });
    const fn3 = function() {
      return closure_0(...arguments);
    };
    cResult[8] = first;
    cResult[9] = onRemixed;
    cResult[10] = project;
    cResult[11] = first1;
    cResult[12] = fn3;
    tmp22 = fn3;
  }
  const found = stateFromStoresArray.find((id) => id.id === first);
  if (found != null) {
    class Z {
      constructor() {
        const promise = closure_9();
        promise.catch(() => {

        });
      }
    }
  }
  if (undefined == null) {
    class Z {
      constructor() {
        const promise = closure_9();
        promise.catch(() => {

        });
      }
    }
  }
  cResult[2] = first;
  cResult[3] = stateFromStoresArray;
  cResult[4] = undefined;
  tmp15 = tmp17;
}) : ((project) => {
  let BottomSheetTitleHeader;
  let _undefined;
  let c6;
  let closure_3;
  let closure_5;
  let intl2;
  let intl3;
  let items3;
  let obj4;
  let obj5;
  let obj9;
  let title;
  let tmp15;
  let tmp17;
  let tmp7;
  project = project.project;
  const onRemixed = project.onRemixed;
  let first1;
  react = undefined;
  c6 = undefined;
  let stateFromStoresArray;
  let c8;
  let closure_9;
  const currentGuildId = project.currentGuildId;
  let obj = react;
  let tmp = closure_12();
  let tmp2 = first1(react.useState(currentGuildId), 2);
  let first = tmp2[0];
  _asyncToGenerator = tmp2[1];
  let tmp4 = first1(react.useState(false), 2);
  first1 = tmp4[0];
  react = tmp4[1];
  let tmp6 = first1(react.useState(null), 2);
  [tmp7, c6] = tmp6;
  let tmp8 = project;
  let tmp9 = first;
  let obj2 = project(first[12]);
  let items = [c8, stateFromStoresArray];
  stateFromStoresArray = obj2.useStateFromStoresArray(items, () => {
    const items = [];
    const flattenedGuildIds = title.getFlattenedGuildIds();
    const tmp2 = flattenedGuildIds[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let guild = stateFromStoresArray.getGuild(tmp3);
      let tmp6 = guild;
      let result = null != guild;
      if (result) {
        let obj = project(first[11]);
        result = obj.isVibegrationsGuildEligible(tmp6, "VibegrationsRemixSheet");
      }
      if (result) {
        let arr = items.push(tmp6);
      }
      continue;
    }
    return items;
  });
  const found = stateFromStoresArray.find((id) => id.id === first);
  let str;
  if (found != null) {
    str = found.name;
  }
  if (str == null) {
    str = "";
  }
  const intl = tmp8(tmp9[13]).intl;
  let tmp11 = onRemixed;
  const stringResult = intl.string(onRemixed(tmp9[14]).HQLYXD);
  c8 = stringResult;
  const items1 = [stringResult, stateFromStoresArray];
  const callback = obj.useCallback(() => {
    let obj3;
    const obj = Sheet_showSimpleActionSheet;
    const obj2 = {
      key: "VibegrationsRemixDestination",
      stackingBehavior: "stack",
      header: obj3,
      hasIcons: false,
      options: stateFromStoresArray.map((label) => ({
        label: label.name,
        onPress() {
          return closure_2_3(label.id);
        }
      }))
    };
    obj3 = { title };
    const result = obj.showSimpleActionSheet(obj2);
  }, items1);
  const items2 = [first, onRemixed, project, first1];
  closure_9 = obj.useCallback(_asyncToGenerator(async (arg0, value) => {
    let c2;
    let closure_0;
    let closure_1;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let tmp;
        c3 = 2;
        if (0 === first) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            tmp = undefined;
            const tmp35 = first1;
            if (!tmp35) {
              closure_5(true);
              _undefined(null);
              const obj4 = tmp(first[16]);
              first = 1;
              c3 = 1;
              const obj5 = { value: obj4.remixVibegrationsProjectInto(project, first), done: false };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          tmp = value;
          if (tmp.ok) {
            const obj = tmp4(first[17]);
            obj.hideActionSheet(VibegrationsRemixSheet);
            closure_129_1(tmp.projectId, closure_129_2);
            c3 = 3;
            const obj7 = { value: undefined, done: true };
            return obj7;
          } else {
            closure_129_6(tmp.message);
            closure_129_5(false);
          }
        }
        c3 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp27) {
        c3 = 3;
        throw tmp27;
      }
    }
  }), items2);
  let obj3 = { header: closure_9(BottomSheetTitleHeader, obj4), children: tmp15(tmp16, obj5) };
  const ActionSheet = tmp8(tmp9[23]).ActionSheet;
  obj4 = { title: intl2.string(onRemixed(tmp9[14])["V+azw/"]) };
  BottomSheetTitleHeader = tmp8(tmp9[18]).BottomSheetTitleHeader;
  intl2 = tmp8(tmp9[13]).intl;
  obj5 = { style: tmp.content, children: items3 };
  const TableRowGroup = tmp8(tmp9[20]).TableRowGroup;
  let obj6 = { label: stringResult, trailing: closure_9(tmp8(tmp9[19]).Text, { variant: "text-md/normal", color: "text-muted", children: str }), arrow: true, disabled: tmp17, onPress: callback };
  const TableRow = tmp8(tmp9[21]).TableRow;
  tmp17 = first1 || stateFromStoresArray.length < 2;
  let obj7 = { hasIcons: false, children: tmp14(TableRow, obj6) };
  items3 = [tmp14(TableRowGroup, obj7), , ];
  let tmp14Result = null;
  tmp15 = closure_10;
  if (null != tmp7) {
    const obj8 = { accessibilityRole: "alert", children: closure_9(tmp8(tmp9[19]).Text, obj9) };
    obj9 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp7 };
    tmp14Result = tmp14(tmp16, obj8);
  }
  items3[1] = tmp14Result;
  const obj10 = {
    variant: "primary",
    text: intl3.string(tmp11(tmp9[14]).vPI794),
    loading: first1,
    onPress() {
      const promise = closure_9();
      promise.catch(() => {

      });
    }
  };
  const Button = tmp8(tmp9[22]).Button;
  intl3 = tmp8(tmp9[13]).intl;
  items3[2] = closure_9(Button, obj10);
  return closure_9(ActionSheet, obj3);
});
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsRemixSheet.tsx");

export default tmp3;
export const VIBEGRATIONS_REMIX_SHEET_KEY = "VibegrationsRemixSheet";
