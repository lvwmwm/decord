// Module ID: 10828
// Function ID: 10829
// Name: ConjureRemixSheet
// Dependencies: [5, 32, 19, 17, 4880, 6766, 21, 5009, 575, 10829, 504, 7413, 1114, 3865, 5253, 7360, 7315, 7286, 5619, 5629, 5270, 7052, 7055, 2]
// Exports: default

// Module 10828 (ConjureRemixSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import TableRadioRow from "TableRadioRow" /* 7055 */;
import ConjureRemix from "ConjureRemix" /* 10829 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4880 */;
import SortedGuildStore from "SortedGuildStore" /* 6766 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c3, flattenedGuildIds, guild;

let c10;
let c9;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ jsx: c9, jsxs: c10 } = Fragment);
const ConjureRemixSheet_str = "ConjureRemixSheet";
let closure_12 = createStyles.createStyles((paddingBottom) => {
  const obj = { scroll: { flex: 1, minHeight: 0 }, list: { gap: nativeDefault.space.PX_24, paddingBottom }, intro: { gap: nativeDefault.space.PX_8 }, footer: { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 }, footerBody: { gap: nativeDefault.space.PX_16 } };
  ({ gap: nativeDefault.space.PX_24, paddingBottom });
  ({ gap: nativeDefault.space.PX_8 });
  ({ backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 });
  ({ gap: nativeDefault.space.PX_16 });
  return obj;
});
let result = size.fileFinishedImporting("modules/conjure/remix/native/ConjureRemixSheet.tsx");

export default function ConjureRemixSheet(project) {
  let BottomSheetScrollView;
  let BottomSheetTitleHeader;
  let SafeAreaPaddingView;
  let c7;
  let c8;
  let closure_4;
  let closure_6;
  let first1;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items3;
  let items4;
  let items5;
  let obj12;
  let obj3;
  let obj4;
  let obj5;
  let obj7;
  let obj9;
  let tmp6;
  let tmp8;
  let value;
  project = project.project;
  const currentGuildId = project.currentGuildId;
  let onRemixed = project.onRemixed;
  value = undefined;
  _slicedToArray = undefined;
  first1 = undefined;
  closure_6 = undefined;
  c7 = undefined;
  c8 = undefined;
  closure_12 = undefined;
  [value, _slicedToArray] = first1.useState(currentGuildId);
  [first1, closure_6] = first1.useState(false);
  [tmp6, c7] = _slicedToArray(first1.useState(null), 2);
  const tmp5 = _slicedToArray(first1.useState(null), 2);
  [tmp8, c8] = _slicedToArray(first1.useState(0), 2);
  const tmp7 = _slicedToArray(first1.useState(0), 2);
  let tmp9 = _slicedToArray(first1.useState(0), 2);
  let closure_9 = tmp9[1];
  let tmp10 = closure_12(tmp9[0]);
  let closure_10 = first1.useRef(null);
  let items = [project, currentGuildId, tmp8];
  const effect = first1.useEffect(() => {
    const obj = ConjureRemix;
    const prepareConjureRemixResult = obj.prepareConjureRemix(project, currentGuildId);
    closure_10.current = prepareConjureRemixResult;
    return () => prepareConjureRemixResult.dismiss();
  }, items);
  let obj = project(onRemixed[10]);
  const items1 = [c8, c7];
  const stateFromStoresArray = obj.useStateFromStoresArray(items1, () => {
    const items = [];
    flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
    const tmp2 = flattenedGuildIds[Symbol.iterator]();
    while (tmp2 !== undefined) {
      guild = guild.getGuild(tmp3);
      let tmp6 = guild;
      let result = null != guild;
      if (result) {
        let obj = project(onRemixed[11]);
        result = obj.isConjureGuildEligible(tmp6, "ConjureRemixSheet");
      }
      if (result) {
        let arr = items.push(tmp6);
      }
      continue;
    }
    return items;
  });
  const intl = project(onRemixed[12]).intl;
  const stringResult = intl.string(currentGuildId(onRemixed[13])["maL0+X"]);
  const someResult = stateFromStoresArray.some((id) => id.id === first);
  let c11 = someResult;
  const items2 = [value, someResult, onRemixed, first1];
  closure_12 = first1.useCallback(value(function*(arg0, value) {
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
        let tmp;
        c3 = 2;
        if (0 === onRemixed) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            tmp = undefined;
            const tmp39 = first1;
            if (!tmp39) {
              const tmp23 = c11;
              if (tmp23) {
                if (null != ref.current) {
                  closure_6(true);
                  guild(null);
                  const current = tmp24.current;
                  onRemixed = 1;
                  c3 = 1;
                  const obj4 = { value: current.open(first), done: false };
                  return obj4;
                }
              }
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          tmp = value;
          if (tmp.ok) {
            const obj = tmp4(onRemixed[14]);
            obj.hideActionSheet(closure_1_11);
            closure_129_2(tmp.projectId, tmp.guildId);
            c3 = 3;
            const obj6 = { value: undefined, done: true };
            return obj6;
          } else {
            closure_129_7(tmp.message);
            if (!tmp.kept) {
              closure_129_8((arg0) => arg0 + 1);
            }
            closure_129_6(false);
          }
        }
        c3 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp31) {
        c3 = 3;
        throw tmp31;
      }
    }
  }), items2);
  const callback = first1.useCallback((nativeEvent) => {
    closure_9(nativeEvent.nativeEvent.layout.height);
  }, []);
  let obj2 = { scrollable: true, header: closure_9(BottomSheetTitleHeader, obj3), footer: closure_9(tmp19, obj4), children: tmp20(BottomSheetScrollView, obj9) };
  const ActionSheet = project(onRemixed[15]).ActionSheet;
  obj3 = { title: intl2.string(currentGuildId(onRemixed[13])["9wQTdG"]) };
  BottomSheetTitleHeader = project(onRemixed[16]).BottomSheetTitleHeader;
  intl2 = project(onRemixed[12]).intl;
  obj4 = { style: tmp10.footer, onLayout: callback, children: tmp20(SafeAreaPaddingView, obj5) };
  obj5 = { bottom: true, style: tmp10.footerBody, children: items3 };
  let tmp18Result = null;
  SafeAreaPaddingView = project(onRemixed[17]).SafeAreaPaddingView;
  if (null != tmp6) {
    let obj6 = { accessibilityRole: "alert", children: closure_9(tmp12(tmp13[18]).Text, obj7) };
    obj7 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp6 };
    tmp18Result = tmp18(tmp19, obj6);
  }
  items3 = [tmp18Result, ];
  const obj8 = {
    variant: "primary",
    size: "md",
    text: intl3.string(currentGuildId(onRemixed[13]).XWgAfc),
    loading: first1,
    disabled: !someResult,
    onPress() {
      const promise = closure_12();
      promise.catch(() => {

      });
    }
  };
  const Button = tmp12(tmp13[19]).Button;
  intl3 = tmp12(tmp13[12]).intl;
  items3[1] = closure_9(Button, obj8);
  const obj10 = { style: tmp10.intro, children: items4 };
  obj9 = { style: tmp10.scroll, contentContainerStyle: tmp10.list, children: items5 };
  BottomSheetScrollView = tmp12(tmp13[20]).BottomSheetScrollView;
  const obj11 = { variant: "text-md/normal", color: "text-default", children: intl4.format(currentGuildId(onRemixed[13]).JKN64Y, obj12) };
  const Text = tmp12(tmp13[18]).Text;
  intl4 = tmp12(tmp13[12]).intl;
  obj12 = { name: project.name };
  items4 = [closure_9(Text, obj11), ];
  const obj13 = { variant: "text-md/normal", color: "text-default", children: intl5.string(currentGuildId(onRemixed[13])["fT4+km"]) };
  const Text2 = tmp12(tmp13[18]).Text;
  intl5 = tmp12(tmp13[12]).intl;
  items4[1] = closure_9(Text2, obj13);
  items5 = [tmp20(tmp19, obj10), ];
  const obj14 = {
    title: stringResult,
    description: intl6.string(currentGuildId(onRemixed[13]).R2uxWO),
    hasIcons: false,
    value,
    onChange(arg0) {
      return closure_4(arg0);
    },
    accessibilityLabel: stringResult,
    children: stateFromStoresArray.map((label) => {
      const obj = { label: label.name, value: label.id, disabled: first1 };
      return React4(TableRadioRow.TableRadioRow, obj, label.id);
    })
  };
  const TableRadioGroup = tmp12(tmp13[21]).TableRadioGroup;
  intl6 = tmp12(tmp13[12]).intl;
  items5[1] = closure_9(TableRadioGroup, obj14);
  return closure_9(ActionSheet, obj2);
};
export const CONJURE_REMIX_SHEET_KEY = "ConjureRemixSheet";
