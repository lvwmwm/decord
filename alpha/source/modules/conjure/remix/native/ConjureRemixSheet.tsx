// Module ID: 11032
// Function ID: 11033
// Name: ConjureRemixSheet
// Dependencies: [5, 32, 19, 17, 5014, 6910, 21, 5143, 575, 11033, 9141, 504, 7561, 1113, 3995, 5384, 7504, 7460, 7431, 5763, 5770, 5402, 7392, 7226, 6983, 7202, 7205, 2]
// Exports: default

// Module 11032 (ConjureRemixSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import TableRadioRow from "TableRadioRow" /* 7205 */;
import ConjureRemix from "ConjureRemix" /* 11033 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5014 */;
import SortedGuildStore from "SortedGuildStore" /* 6910 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

let c3, flattenedGuildIds;

let c10;
let c9;
let _asyncToGenerator = _asyncToGenerator_mod;
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
  let BottomSheetTitleHeader;
  let SafeAreaPaddingView;
  let c8;
  let closure_3;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items4;
  let items5;
  let items6;
  let obj11;
  let obj4;
  let obj5;
  let obj6;
  let obj7;
  let obj9;
  let onLayout;
  let ref;
  let tmp12;
  project = project.project;
  const onRemixed = project.onRemixed;
  let first1;
  let first2;
  c8 = undefined;
  let memo;
  let c10;
  let closure_11;
  let obj = first2;
  const tmp = first1(first2.useState(project.currentGuildId), 2);
  let value = tmp[0];
  _asyncToGenerator = tmp[1];
  const tmp3 = first1(first2.useState(""), 2);
  first1 = tmp3[0];
  const tmp5 = tmp3[1];
  let tmp6 = first1(first2.useState(() => {
    const obj = ConjureRemix;
    return obj.copyProjectName(project.name);
  }), 2);
  first2 = tmp6[0];
  let tmp8 = tmp6[1];
  let tmp9 = first1(first2.useState(false), 2);
  const first3 = tmp9[0];
  let guild = tmp9[1];
  let tmp11 = first1(first2.useState(null), 2);
  [tmp12, c8] = tmp11;
  const tmp15 = onRemixed(value[10])();
  const height = tmp15.height;
  let num = 0;
  ({ ref, onLayout } = tmp15);
  const tmp16 = closure_12;
  if (undefined !== height) {
    num = height;
  }
  const tmp16Result = tmp16(num);
  let items = [project];
  memo = obj.useMemo(() => {
    const obj = ConjureRemix;
    return obj.createConjureRemix(project);
  }, items);
  const items1 = [memo];
  const effect = obj.useEffect(() => () => memo.dismiss(), items1);
  let obj2 = project(tmp14[11]);
  const items2 = [c8, guild];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items2, () => {
    const items = [];
    flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
    const tmp2 = flattenedGuildIds[Symbol.iterator]();
    while (tmp2 !== undefined) {
      guild = guild.getGuild(tmp3);
      let tmp6 = guild;
      let result = null != guild;
      if (result) {
        let obj = project(first[12]);
        result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
      }
      if (result) {
        let arr = items.push(tmp6);
      }
      continue;
    }
    return items;
  });
  const intl = project(tmp14[13]).intl;
  const stringResult = intl.string(onRemixed(value[14]).cIWtCk);
  let someResult = stateFromStoresArray.some((id) => id.id === first);
  if (someResult) {
    const tmp20Result = project(value[9]);
    someResult = tmp20Result.isValidCopyName(first2);
  }
  c10 = someResult;
  const items3 = [someResult, value, first2, onRemixed, first1, memo];
  closure_11 = obj.useCallback(_asyncToGenerator(async (arg0, value) => {
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
        if (0 === value) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            tmp4 = undefined;
            const tmp38 = c10;
            if (tmp38) {
              guild(true);
              flattenedGuildIds(null);
              const obj4 = { name: first2, prompt: first1 };
              value = 1;
              c3 = 1;
              const obj5 = { value: memo.confirm(first, obj4), done: false };
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
          if (null != tmp4) {
            if (tmp4.ok) {
              const obj = tmp(value[15]);
              obj.hideActionSheet(closure_1_11);
              closure_129_1(tmp4.projectId, tmp4.guildId);
              c3 = 3;
              const obj7 = { value: undefined, done: true };
              return obj7;
            } else {
              closure_129_8(tmp4.message);
              closure_129_7(false);
            }
          }
        }
        c3 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp27) {
        c3 = 3;
        throw tmp27;
      }
    }
  }), items3);
  let obj3 = { scrollable: true, startExpanded: true, header: memo(BottomSheetTitleHeader, obj4), footer: tmp23(tmp24, obj6), children: tmp25(BottomSheetScrollView, obj11) };
  const ActionSheet = tmp20(tmp14[16]).ActionSheet;
  obj4 = { title: intl2.string(onRemixed(tmp14[14])["276ll6"]), subtitle: intl3.formatToPlainString(onRemixed(tmp14[14])["QN8T+C"], obj5) };
  BottomSheetTitleHeader = tmp20(tmp14[17]).BottomSheetTitleHeader;
  intl2 = tmp20(tmp14[13]).intl;
  intl3 = tmp20(tmp14[13]).intl;
  obj5 = { projectName: project.name };
  obj6 = { style: tmp16Result.footer, ref, onLayout, children: tmp25(SafeAreaPaddingView, obj7) };
  obj7 = { bottom: true, style: tmp16Result.footerBody, children: items4 };
  let tmp23Result = null;
  SafeAreaPaddingView = tmp20(tmp14[18]).SafeAreaPaddingView;
  if (null != tmp12) {
    const obj8 = { accessibilityRole: "alert", children: memo(project(value[19]).Text, obj9) };
    obj9 = { variant: "body-xs/normal", color: "text-feedback-critical", children: tmp12 };
    tmp23Result = tmp23(tmp24, obj8);
  }
  items4 = [tmp23Result, ];
  const obj10 = {
    variant: "primary",
    size: "md",
    text: intl4.string(onRemixed(value[14])["276ll6"]),
    loading: first3,
    disabled: !someResult,
    onPress() {
      const promise = closure_11();
      promise.catch(() => {

      });
    }
  };
  const Button = tmp20(tmp14[20]).Button;
  intl4 = tmp20(tmp14[13]).intl;
  items4[1] = memo(Button, obj10);
  obj11 = { style: tmp16Result.scroll, contentContainerStyle: tmp16Result.list, keyboardShouldPersistTaps: "handled", children: items6 };
  const obj12 = { style: tmp16Result.fields, children: items5 };
  BottomSheetScrollView = tmp20(tmp14[21]).BottomSheetScrollView;
  const obj13 = { label: intl5.string(onRemixed(value[14]).cvvDlE), placeholder: intl6.string(onRemixed(value[14]).u3W0k0), value: first1, onChange: tmp5, disabled: first3 };
  const TextArea = tmp20(tmp14[22]).TextArea;
  intl5 = tmp20(tmp14[13]).intl;
  intl6 = tmp20(tmp14[13]).intl;
  items5 = [tmp23(TextArea, obj13), ];
  const obj14 = { label: intl7.string(onRemixed(value[14]).PuVQeX), value: first2, onChange: tmp8, maxLength: project(value[24]).MAX_PROJECT_NAME_LENGTH, disabled: first3 };
  const TextInput = tmp20(tmp14[23]).TextInput;
  intl7 = tmp20(tmp14[13]).intl;
  items5[1] = memo(TextInput, obj14);
  items6 = [tmp25(tmp24, obj12), ];
  const obj15 = {
    title: stringResult,
    hasIcons: false,
    value,
    onChange(arg0) {
      return closure_3(arg0);
    },
    accessibilityLabel: stringResult,
    children: stateFromStoresArray.map((label) => {
      const obj = { label: label.name, value: label.id, disabled: first3 };
      return React4(TableRadioRow.TableRadioRow, obj, label.id);
    })
  };
  const TableRadioGroup = tmp20(tmp14[25]).TableRadioGroup;
  items6[1] = memo(TableRadioGroup, obj15);
  return memo(ActionSheet, obj3);
};
export const CONJURE_REMIX_SHEET_KEY = "ConjureRemixSheet";
