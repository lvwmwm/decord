// Module ID: 16253
// Function ID: 16254
// Name: VibegrationsRemixSheet
// Dependencies: [5, 32, 19, 17, 2067, 5750, 21, 4836, 576, 504, 5370, 1115, 3715, 6616, 16254, 4800, 6618, 6570, 5999, 5917, 4832, 5281, 2]
// Exports: default

// Module 16253 (VibegrationsRemixSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Sheet_showSimpleActionSheet from "Sheet/showSimpleActionSheet" /* 6616 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import SortedGuildStore from "SortedGuildStore" /* 5750 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;

let c10;
let c9;
let obj2;
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
const View = react_native.View;
({ jsx: c9, jsxs: c10 } = Fragment);
const VibegrationsRemixSheet_str = "VibegrationsRemixSheet";
let obj = { content: obj2 };
obj2 = { gap: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsRemixSheet.tsx");

export default function VibegrationsRemixSheet(project) {
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
  let obj2 = project(first[9]);
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
        let obj = project(first[10]);
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
  const intl = tmp8(tmp9[11]).intl;
  let tmp11 = onRemixed;
  const stringResult = intl.string(onRemixed(tmp9[12]).HQLYXD);
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
        return { value: "HermesInternal", done: null };
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
              const obj4 = tmp(first[14]);
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
            const obj = tmp4(first[15]);
            obj.hideActionSheet(VibegrationsRemixSheet_str);
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
        return { value: "HermesInternal", done: null };
      } catch (tmp27) {
        c3 = 3;
        throw tmp27;
      }
    }
  }), items2);
  let obj3 = { header: closure_9(BottomSheetTitleHeader, obj4), children: tmp15(tmp16, obj5) };
  const ActionSheet = tmp8(tmp9[16]).ActionSheet;
  obj4 = { title: intl2.string(onRemixed(tmp9[12])["V+azw/"]) };
  BottomSheetTitleHeader = tmp8(tmp9[17]).BottomSheetTitleHeader;
  intl2 = tmp8(tmp9[11]).intl;
  obj5 = { style: tmp.content, children: items3 };
  const TableRowGroup = tmp8(tmp9[18]).TableRowGroup;
  let obj6 = { label: stringResult, trailing: closure_9(tmp8(tmp9[20]).Text, { variant: "text-md/normal", color: "text-muted", children: str }), arrow: true, disabled: tmp17, onPress: callback };
  const TableRow = tmp8(tmp9[19]).TableRow;
  tmp17 = first1 || stateFromStoresArray.length < 2;
  let obj7 = { hasIcons: false, children: tmp14(TableRow, obj6) };
  items3 = [tmp14(TableRowGroup, obj7), , ];
  let tmp14Result = null;
  tmp15 = closure_10;
  if (null != tmp7) {
    const obj8 = { accessibilityRole: "alert", children: closure_9(tmp8(tmp9[20]).Text, obj9) };
    obj9 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp7 };
    tmp14Result = tmp14(tmp16, obj8);
  }
  items3[1] = tmp14Result;
  const obj10 = {
    variant: "primary",
    text: intl3.string(tmp11(tmp9[12]).vPI794),
    loading: first1,
    onPress() {
      const promise = closure_9();
      promise.catch(() => {

      });
    }
  };
  const Button = tmp8(tmp9[21]).Button;
  intl3 = tmp8(tmp9[11]).intl;
  items3[2] = closure_9(Button, obj10);
  return closure_9(ActionSheet, obj3);
};
export const VIBEGRATIONS_REMIX_SHEET_KEY = "VibegrationsRemixSheet";
