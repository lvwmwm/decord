// Module ID: 11726
// Function ID: 11727
// Name: ConjureFirstPublishSheet
// Dependencies: [5, 32, 19, 17, 21, 4945, 587, 558, 576, 11686, 11689, 5171, 11727, 1128, 3820, 7197, 11690, 5195, 5205, 7247, 2]
// Exports: showConjureFirstPublishSheet

// Module 11726 (ConjureFirstPublishSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5171 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4945 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
let c3;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const ConjureFirstPublishSheet_str = "ConjureFirstPublishSheet";
let createStyles = createStyles_mod;
let obj = { content: obj2, actions: obj3 };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureFirstPublishSheet(projectId) {
  let closure_8;
  let first;
  let name;
  let obj2;
  let str;
  let tmp12;
  let trimmed;
  let obj = trimmed(name[8]);
  const cResult = obj.c(51);
  projectId = projectId.projectId;
  name = projectId.name;
  let description = projectId.description;
  const onDone = projectId.onDone;
  closure_10();
  const iconURL = projectId(name[9])(projectId).iconURL;
  const tmp3 = onDone(first.useState(name), 2);
  [str, r10027] = tmp3;
  const tmp4 = onDone(first.useState(description), 2);
  first = tmp4[0];
  const tmp6 = onDone(first.useState(null), 2);
  const first1 = tmp6[0];
  let closure_7 = tmp6[1];
  [r10042, closure_8] = onDone(first.useState(null), 2);
  const tmp8 = onDone(first.useState(null), 2);
  const tmp9 = onDone(first.useState(false), 2);
  const first2 = tmp9[0];
  closure_10 = tmp9[1];
  if (cResult[0] === name) {
    let tmp11;
    if (cResult[1] === str) {
      tmp11 = cResult[2];
      trimmed = cResult[3];
    }
    closure_11 = tmp11;
    let tmp15 = first1;
    if (first1 == null) {
      tmp15 = iconURL;
    }
    if (cResult[4] !== onDone) {
      class H {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(ConjureFirstPublishSheet_str);
          onDone(true);
        }
      }
      cResult[4] = onDone;
      cResult[5] = H;
    } else {
      class H {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(ConjureFirstPublishSheet_str);
          onDone(true);
        }
      }
    }
    H = tmp16;
    if (cResult[6] === first) {
      class H {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(ConjureFirstPublishSheet_str);
          onDone(true);
        }
      }
    }
    let closure_0 = description(function*(arg0, value) {
      let name2;
      let obj5;
      if (description === 2) {
        description = 3;
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
          description = 2;
          if (0 === name) {
            if (arg0 === 1) {
              description = 3;
              throw value;
            } else if (arg0 === 2) {
              description = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_1 = tmp4;
              name = undefined;
              const tmp25 = first2;
              if (!tmp25) {
                if (null == closure_1_11) {
                  closure_1_10(true);
                  closure_1_8(null);
                  const obj4 = { name, icon, description: description2 };
                  const obj6 = { name, description };
                  name = 1;
                  description = 1;
                  const obj7 = { value: obj5.saveConjureFirstPublishDetails(closure_1, obj4, obj6), done: false };
                  obj5 = name(name[12]);
                  return obj7;
                }
              }
            }
          } else if (arg0 === 1) {
            description = 3;
            throw value;
          } else if (arg0 === 2) {
            description = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            name = value;
            closure_1_10(false);
            if (name) {
              closure_1_12();
            } else {
              const intl = name(name[13]).intl;
              closure_1_8(intl.string(projectId(name[14]).Fi7boI));
            }
          }
          description = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp15) {
          description = 3;
          throw tmp15;
        }
      }
    });
    function publish() {
      return closure_0(...arguments);
    }
    cResult[6] = first;
    cResult[7] = tmp16;
    cResult[8] = first1;
    cResult[9] = description;
    cResult[10] = name;
    cResult[11] = tmp11;
    cResult[12] = projectId;
    cResult[13] = first2;
    cResult[14] = tmp12;
    cResult[15] = publish;
  }
  trimmed = str.trim();
  let result = null;
  if (trimmed !== name) {
    class H {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(ConjureFirstPublishSheet_str);
        onDone(true);
      }
    }
    result = obj2.conjureProjectNameError(trimmed);
  }
  cResult[0] = name;
  cResult[1] = str;
  cResult[2] = result;
  cResult[3] = trimmed;
  tmp11 = result;
  tmp12 = trimmed;
}) : (function ConjureFirstPublishSheet(projectId) {
  let BottomSheetTitleHeader;
  let _undefined;
  let c7;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let obj4;
  let obj5;
  let obj8;
  let str;
  let tmp12;
  let tmp5;
  projectId = projectId.projectId;
  const name = projectId.name;
  const onDone = projectId.onDone;
  let description;
  let first1;
  c7 = undefined;
  let trimmed;
  let c11;
  let onPress;
  let obj = function _publish2() {
    let description2;
    let icon;
    let name2;
    obj = _asyncToGenerator(async (arg0, value) => {
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
          let tmp4;
          c3 = 2;
          if (0 === description) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              tmp4 = undefined;
              const tmp25 = first2;
              if (!tmp25) {
                if (null == closure_2_11) {
                  closure_2_9(true);
                  _undefined(null);
                  const obj4 = { name: name2, icon, description: description2 };
                  const obj6 = { name, description };
                  const obj5 = tmp4(description[12]);
                  description = 1;
                  c3 = 1;
                  const obj7 = { value: obj5.saveConjureFirstPublishDetails(projectId, obj4, obj6), done: false };
                  return obj7;
                }
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            tmp4 = value;
            closure_129_9(false);
            if (tmp4) {
              closure_129_12();
            } else {
              const intl = tmp4(description[13]).intl;
              closure_129_7(intl.string(tmp(description[14]).Fi7boI));
            }
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp15) {
          c3 = 3;
          throw tmp15;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = trimmed();
  const tmp3 = description;
  obj = first1;
  const iconURL = name(description[9])(projectId).iconURL;
  let tmp4 = description(first1.useState(name), 2);
  [str, tmp5] = tmp4;
  const tmp6 = description(first1.useState(description), 2);
  description = tmp6[0];
  const tmp8 = tmp6[1];
  const tmp9 = description(first1.useState(null), 2);
  first1 = tmp9[0];
  let closure_6 = tmp9[1];
  [tmp12, c7] = description(first1.useState(null), 2);
  const tmp11 = description(first1.useState(null), 2);
  const tmp13 = description(first1.useState(false), 2);
  const first2 = tmp13[0];
  let closure_9 = tmp13[1];
  trimmed = str.trim();
  let result = null;
  if (trimmed !== name) {
    let obj2 = projectId(tmp3[10]);
    result = obj2.conjureProjectNameError(trimmed);
  }
  c11 = result;
  const items = [onDone];
  onPress = obj.useCallback(() => {
    obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(ConjureFirstPublishSheet_str);
    onDone(true);
  }, items);
  let obj3 = {
    startExpanded: true,
    keyboardShouldPersistTaps: "handled",
    onDismiss() {
      return onDone(false);
    },
    header: c7(BottomSheetTitleHeader, obj4),
    children: tmp21(tmp22, obj5)
  };
  const ActionSheet = projectId(tmp3[19]).ActionSheet;
  obj4 = { title: intl.string(tmp2(tmp3[14]).OmOWDq), subtitle: intl2.string(tmp2(tmp3[14]).Gzmlyg) };
  BottomSheetTitleHeader = projectId(tmp3[15]).BottomSheetTitleHeader;
  intl = projectId(tmp3[13]).intl;
  intl2 = projectId(tmp3[13]).intl;
  obj5 = { style: tmp.content, children: items1 };
  const ConjureAppIdentitySection = projectId(tmp3[16]).ConjureAppIdentitySection;
  if (first1 == null) {
    first1 = iconURL;
  }
  let obj6 = {
    iconURL: first1,
    onIconChange(arg0) {
      closure_6(arg0);
      _undefined(null);
    },
    name: str,
    nameError: result,
    onNameChange: tmp5,
    description,
    onDescriptionChange: tmp8,
    disabled: first2
  };
  items1 = [tmp19(ConjureAppIdentitySection, obj6), , ];
  let tmp19Result = null;
  if (null != tmp12) {
    let obj7 = { accessibilityRole: "alert", children: tmp19(tmp20(tmp3[17]).Text, obj8) };
    obj8 = { variant: "text-sm/normal", color: "text-feedback-critical", children: tmp12 };
    tmp19Result = tmp19(tmp22, obj7);
  }
  items1[1] = tmp19Result;
  const obj9 = { style: tmp.actions, children: items2 };
  const obj10 = { variant: "secondary", grow: true, text: intl3.string(name(tmp3[14])["bz/M68"]), disabled: first2, onPress };
  const Button = tmp20(tmp3[18]).Button;
  intl3 = tmp20(tmp3[13]).intl;
  items2 = [tmp19(Button, obj10), ];
  const obj11 = {
    variant: "primary",
    grow: true,
    text: intl4.string(name(tmp3[14]).dyIV6M),
    loading: first2,
    disabled: null != result,
    onPress() {
      function publish() {
        return obj(...arguments);
      }
      const promise = publish();
      promise.catch(() => {

      });
    }
  };
  const Button2 = tmp20(tmp3[18]).Button;
  intl4 = tmp20(tmp3[13]).intl;
  items2[1] = c7(Button2, obj11);
  items1[2] = first2(closure_6, obj9);
  return c7(ActionSheet, obj3);
});
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjureFirstPublishSheet.tsx");

export const showConjureFirstPublishSheet = (arg0) => {
  let closure_0 = arg0;
  const promise = new Promise((onDone) => {
    let obj2;
    const obj = { key: ConjureFirstPublishSheet_str, content: metroImportDefault(closure_11, obj2) };
    obj2 = { onDone };
    const showActionSheet = ActionSheetActionCreators.showActionSheet;
    ActionSheetActionCreators;
    const merged = Object.assign(closure_0);
    showActionSheet(obj);
  });
  return promise;
};
