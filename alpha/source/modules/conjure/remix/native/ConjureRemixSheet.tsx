// Module ID: 10915
// Function ID: 10916
// Name: ConjureRemixSheet
// Dependencies: [5, 32, 19, 17, 5114, 6893, 21, 5243, 575, 10916, 7929, 504, 7197, 1113, 4079, 5489, 7885, 7847, 7351, 5866, 5873, 5507, 7793, 7553, 6955, 7679, 7681, 2]
// Exports: default

// Module 10915 (ConjureRemixSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import TableRadioRow from "TableRadioRow" /* 7681 */;
import ConjureRemix from "ConjureRemix" /* 10916 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5114 */;
import SortedGuildStore from "SortedGuildStore" /* 6893 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let c3;

let c10;
let c9;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ jsx: c9, jsxs: c10 } = Fragment);
const ConjureRemixSheet_str = "ConjureRemixSheet";
let closure_12 = createStyles.createStyles((paddingBottom) => {
  const obj = { scroll: { flex: 1, minHeight: 0 }, list: { gap: nativeDefault.space.PX_24, paddingBottom }, fields: { gap: nativeDefault.space.PX_16 }, footer: { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 }, footerBody: { gap: nativeDefault.space.PX_16 } };
  ({ gap: nativeDefault.space.PX_24, paddingBottom });
  ({ gap: nativeDefault.space.PX_16 });
  ({ backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 });
  ({ gap: nativeDefault.space.PX_16 });
  return obj;
});
let result = size.fileFinishedImporting("modules/conjure/remix/native/ConjureRemixSheet.tsx");

export default function ConjureRemixSheet(project) {
  let BottomSheetScrollView;
  let SafeAreaPaddingView;
  let _undefined;
  let c9;
  let closure_4;
  let first;
  let first1;
  let first2;
  let flattenedGuildIds;
  let formatToPlainString;
  let intl4;
  let intl5;
  let intl6;
  let items4;
  let items5;
  let items6;
  let obj11;
  let obj5;
  let obj6;
  let obj7;
  let obj9;
  let onLayout;
  let ref;
  let str2;
  let tmp11;
  let tmp12Result2;
  let tmp4;
  let tmp7;
  let value;
  project = project.project;
  let str = project.mode;
  if (str === undefined) {
    str = "remix";
  }
  const onRemixed = project.onRemixed;
  let shareTicket = project.shareTicket;
  _slicedToArray = undefined;
  value = undefined;
  first1 = undefined;
  first2 = undefined;
  flattenedGuildIds = undefined;
  c9 = undefined;
  let memo;
  str2 = undefined;
  closure_12 = undefined;
  let c13;
  let closure_14;
  let obj = value;
  [str2, _slicedToArray] = value.useState(project.currentGuildId);
  [value, tmp4] = value.useState("");
  [first1, tmp7] = value.useState(() => {
    const obj = ConjureRemix;
    return obj.copyProjectName(project.name);
  });
  [first2, flattenedGuildIds] = value.useState(false);
  let tmp10 = _slicedToArray(value.useState(null), 2);
  [tmp11, c9] = tmp10;
  const tmp14 = onRemixed(shareTicket[10])();
  const height = tmp14.height;
  let num = 0;
  ({ ref, onLayout } = tmp14);
  const tmp15 = closure_12;
  if (undefined !== height) {
    num = height;
  }
  const tmp15Result = tmp15(num);
  let items = [project, shareTicket];
  memo = obj.useMemo(() => {
    const obj = ConjureRemix;
    return obj.createConjureRemix(project, undefined, shareTicket);
  }, items);
  const items1 = [memo];
  const effect = obj.useEffect(() => () => memo.dismiss(), items1);
  let obj2 = project(tmp13[11]);
  const items2 = [flattenedGuildIds, first2];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items2, () => {
    const items = [];
    flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
    const tmp2 = flattenedGuildIds[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let guild = first2.getGuild(tmp3);
      let tmp6 = guild;
      let result = null != guild;
      if (result) {
        let obj = project(shareTicket[12]);
        result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
      }
      if (result) {
        let arr = items.push(tmp6);
      }
      continue;
    }
    return items;
  });
  const intl = project(tmp13[13]).intl;
  const stringResult = intl.string(onRemixed(shareTicket[14]).cIWtCk);
  if (null == str2) {
    const first3 = stateFromStoresArray[0];
    let id;
    if (first3 != null) {
      id = first3.id;
    }
    if (id == null) {
      id = null;
    }
    str2 = id;
  }
  closure_12 = tmp23;
  let tmp24 = null != str2;
  if (tmp24) {
    let isValidCopyNameResult = tmp23;
    if (!isValidCopyNameResult) {
      const tmp19Result = project(shareTicket[9]);
      isValidCopyNameResult = tmp19Result.isValidCopyName(first1);
    }
    tmp24 = isValidCopyNameResult;
  }
  c13 = tmp24;
  const intl2 = tmp19(tmp13[13]).intl;
  const string = intl2.string;
  const tmp12Result = onRemixed(shareTicket[14]);
  const stringResult1 = string("copy" === str ? tmp12Result["UsUa/c"] : tmp12Result["276ll6"]);
  const items3 = [tmp24, str2, tmp23, first1, onRemixed, project.name, value, memo];
  closure_14 = obj.useCallback(str2(function*(arg0, value) {
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let tmp4;
        c3 = 2;
        if (0 === shareTicket) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            tmp4 = undefined;
            const tmp40 = c13;
            if (tmp40) {
              if (null != str2) {
                let obj5;
                flattenedGuildIds(true);
                _undefined(null);
                const _confirm = memo.confirm;
                if (closure_12) {
                  const obj4 = { name: project.name, prompt: "", copy: true };
                  obj5 = obj4;
                } else {
                  obj5 = { name: first1, prompt };
                }
                shareTicket = 1;
                c3 = 1;
                const obj6 = { value: _confirm(tmp18, obj5), done: false };
                return obj6;
              }
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          tmp4 = value;
          if (null != tmp4) {
            if (tmp4.ok) {
              const obj = tmp(shareTicket[15]);
              obj.hideActionSheet(closure_1_11);
              closure_129_1(tmp4.projectId, tmp4.guildId);
              c3 = 3;
              const obj8 = { value: undefined, done: true };
              return obj8;
            } else {
              closure_129_9(tmp4.message);
              closure_129_8(false);
            }
          }
        }
        c3 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp29) {
        c3 = 3;
        throw tmp29;
      }
    }
  }), items3);
  const ActionSheet = tmp19(tmp13[16]).ActionSheet;
  let obj3 = { title: stringResult1, subtitle: formatToPlainString(tmp23 ? tmp12Result2.GzGb2w : tmp12Result2["QN8T+C"], obj5) };
  const BottomSheetTitleHeader = tmp19(tmp13[17]).BottomSheetTitleHeader;
  const intl3 = tmp19(tmp13[13]).intl;
  formatToPlainString = intl3.formatToPlainString;
  tmp12Result2 = onRemixed(shareTicket[14]);
  let obj4 = { scrollable: true, startExpanded: true, header: tmp28(BottomSheetTitleHeader, obj3), footer: tmp28(tmp30, obj6), children: tmp31(BottomSheetScrollView, obj11) };
  obj5 = { projectName: project.name };
  obj6 = { style: tmp15Result.footer, ref, onLayout, children: tmp31(SafeAreaPaddingView, obj7) };
  obj7 = { bottom: true, style: tmp15Result.footerBody, children: items4 };
  let tmp28Result = null;
  SafeAreaPaddingView = tmp19(tmp13[18]).SafeAreaPaddingView;
  if (null != tmp11) {
    let obj8 = { accessibilityRole: "alert", children: tmp28(tmp19(shareTicket[19]).Text, obj9) };
    obj9 = { variant: "body-xs/normal", color: "text-feedback-critical", children: tmp11 };
    tmp28Result = tmp28(tmp30, obj8);
  }
  items4 = [tmp28Result, ];
  const obj10 = {
    variant: "primary",
    size: "md",
    text: stringResult1,
    loading: first2,
    disabled: !tmp24,
    onPress() {
      const promise = closure_14();
      promise.catch(() => {

      });
    }
  };
  items4[1] = c9(project(shareTicket[20]).Button, obj10);
  let tmp31Result = null;
  obj11 = { style: tmp15Result.scroll, contentContainerStyle: tmp15Result.list, keyboardShouldPersistTaps: "handled", children: items6 };
  BottomSheetScrollView = tmp19(tmp13[21]).BottomSheetScrollView;
  if ("copy" !== str) {
    const obj12 = { style: tmp15Result.fields, children: items5 };
    const obj13 = { label: intl4.string(onRemixed(shareTicket[14]).cvvDlE), placeholder: intl5.string(onRemixed(shareTicket[14]).u3W0k0), value, onChange: tmp4, disabled: first2 };
    const TextArea = tmp19(tmp13[22]).TextArea;
    intl4 = tmp19(tmp13[13]).intl;
    intl5 = tmp19(tmp13[13]).intl;
    items5 = [tmp28(TextArea, obj13), ];
    const obj14 = { label: intl6.string(onRemixed(shareTicket[14]).PuVQeX), value: first1, onChange: tmp7, maxLength: project(shareTicket[24]).MAX_PROJECT_NAME_LENGTH, disabled: first2 };
    const TextInput = tmp19(tmp13[23]).TextInput;
    intl6 = tmp19(tmp13[13]).intl;
    items5[1] = c9(TextInput, obj14);
    tmp31Result = tmp31(tmp30, obj12);
  }
  items6 = [tmp31Result, ];
  const obj15 = {
    title: stringResult,
    hasIcons: false,
    value: str2,
    onChange(arg0) {
      return closure_4(arg0);
    },
    accessibilityLabel: stringResult,
    children: stateFromStoresArray.map((label) => {
      const obj = { label: label.name, value: label.id, disabled: first2 };
      return React4(TableRadioRow.TableRadioRow, obj, label.id);
    })
  };
  const TableRadioGroup = tmp19(tmp13[25]).TableRadioGroup;
  if (str2 == null) {
    str2 = "";
  }
  items6[1] = c9(TableRadioGroup, obj15);
  return c9(ActionSheet, obj4);
};
export const CONJURE_REMIX_SHEET_KEY = "ConjureRemixSheet";
