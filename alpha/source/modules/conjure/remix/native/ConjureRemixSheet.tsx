// Module ID: 12298
// Function ID: 12299
// Name: ConjureRemixSheet
// Dependencies: [5, 32, 19, 17, 4784, 6550, 21, 4913, 575, 7597, 12299, 504, 6865, 1112, 4190, 5127, 12301, 12302, 7553, 7515, 7017, 5504, 5511, 7221, 6622, 7348, 7045, 7322, 7347, 7349, 7057, 5613, 12329, 2]
// Exports: default

// Module 12298 (ConjureRemixSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5127 */;
import ConjureRemix from "ConjureRemix" /* 12299 */;
import ConjureServerPickerSheetDefault from "ConjureServerPickerSheet" /* 12301 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4784 */;
import SortedGuildStore from "SortedGuildStore" /* 6550 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let c3, c4, flattenedGuildIds, guild;

let c10;
let c9;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ jsx: c9, jsxs: c10 } = Fragment);
const ConjureRemixSheet_str = "ConjureRemixSheet";
const ConjureRemixServerSheet = "ConjureRemixServerSheet";
let closure_13 = createStyles.createStyles((arg0) => {
  const obj = { list: { gap: nativeDefault.space.PX_24, paddingBottom: arg0 + nativeDefault.space.PX_24 }, footer: { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 }, footerBody: { gap: nativeDefault.space.PX_16 } };
  ({ gap: nativeDefault.space.PX_24, paddingBottom: arg0 + nativeDefault.space.PX_24 });
  ({ backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 });
  ({ gap: nativeDefault.space.PX_16 });
  return obj;
});
let result = size.fileFinishedImporting("modules/conjure/remix/native/ConjureRemixSheet.tsx");

export default function ConjureRemixSheet(project) {
  let BottomSheetTitleHeader;
  let O25g5n;
  let SafeAreaPaddingView;
  let TableRow;
  let TableRowIcon;
  let TableRowIcon2;
  let Text;
  let _undefined;
  let _undefined2;
  let c5;
  let c7;
  let c8;
  let c9;
  let closure_4;
  let first;
  let formatToPlainString;
  let intl10;
  let intl11;
  let intl4;
  let intl5;
  let intl7;
  let intl8;
  let intl9;
  let items5;
  let items6;
  let items7;
  let obj11;
  let obj12;
  let obj14;
  let obj17;
  let obj18;
  let obj21;
  let obj23;
  let obj4;
  let obj5;
  let obj6;
  let obj7;
  let obj9;
  let onLayout;
  let ref;
  let str2;
  let title;
  let tmp10;
  let tmp12;
  let tmp13Result;
  let tmp4;
  let tmp6;
  let tmp8;
  project = project.project;
  let str = project.mode;
  if (str === undefined) {
    str = "copy";
  }
  let onRemixed = project.onRemixed;
  let shareTicket = project.shareTicket;
  _slicedToArray = undefined;
  react = undefined;
  str2 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  let memo;
  let stateFromStoresArray;
  let c12;
  first = undefined;
  let closure_14;
  let c15;
  let obj = react;
  [first, _slicedToArray] = react.useState(project.currentGuildId);
  const tmp3 = _slicedToArray(react.useState(str), 2);
  [tmp4, c5] = tmp3;
  [str2, tmp6] = react.useState(project.name);
  [tmp8, c7] = _slicedToArray(react.useState(false), 2);
  const tmp7 = _slicedToArray(react.useState(false), 2);
  let tmp9 = _slicedToArray(react.useState(null), 2);
  [tmp10, c8] = tmp9;
  let tmp11 = _slicedToArray(react.useState(null), 2);
  [tmp12, c9] = tmp11;
  const tmp15 = onRemixed(shareTicket[9])();
  const height = tmp15.height;
  let num = 0;
  ({ ref, onLayout } = tmp15);
  const tmp16 = first;
  if (undefined !== height) {
    num = height;
  }
  const tmp16Result = tmp16(num);
  let items = [project, shareTicket];
  memo = obj.useMemo(() => {
    const obj = ConjureRemix;
    return obj.createConjureRemix(project, undefined, shareTicket);
  }, items);
  const items1 = [memo];
  const effect = obj.useEffect(() => () => memo.dismiss(), items1);
  let obj2 = project(tmp14[11]);
  const items2 = [c8, c7];
  stateFromStoresArray = obj2.useStateFromStoresArray(items2, () => {
    const items = [];
    flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
    const tmp2 = flattenedGuildIds[Symbol.iterator]();
    while (tmp2 !== undefined) {
      guild = guild.getGuild(tmp3);
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
  const intl = project(tmp14[13]).intl;
  const stringResult = intl.string(onRemixed(shareTicket[14])["maL0+X"]);
  c12 = stringResult;
  const intl2 = project(tmp14[13]).intl;
  const stringResult1 = intl2.string(onRemixed(shareTicket[14])["pgbZu+"]);
  if (null == first) {
    const first1 = stateFromStoresArray[0];
    let id;
    if (first1 != null) {
      id = first1.id;
    }
    if (id == null) {
      id = null;
    }
    first = id;
  }
  let found = stateFromStoresArray.find((id) => id.id === first);
  if (found == null) {
    found = null;
  }
  closure_14 = tmp26;
  let isValidCopyNameResult = null != first;
  if (isValidCopyNameResult) {
    const tmp20Result = project(shareTicket[10]);
    isValidCopyNameResult = tmp20Result.isValidCopyName(str2);
  }
  c15 = isValidCopyNameResult;
  const intl3 = tmp20(tmp14[13]).intl;
  const items3 = [first, stringResult, stateFromStoresArray];
  const stringResult2 = intl3.string(onRemixed(shareTicket[14]).XWgAfc);
  const callback = obj.useCallback(() => {
    let obj2;
    const obj = { key: ConjureRemixServerSheet, stackingBehavior: "stack", content: React4(ConjureServerPickerSheetDefault, obj2) };
    const showActionSheet = ActionSheetActionCreators.showActionSheet;
    obj2 = {
      sheetKey: ConjureRemixServerSheet,
      title,
      guilds: stateFromStoresArray,
      selectedGuildId: first,
      onPick(id) {
        return closure_1_4(id.id);
      }
    };
    ActionSheetActionCreators;
    showActionSheet(obj);
  }, items3);
  const items4 = [isValidCopyNameResult, first, tmp26, str2, onRemixed, memo];
  const callback1 = obj.useCallback(first(function*(arg0, value) {
    let closure_1;
    let closure_2;
    let obj5;
    if (c4 === 2) {
      c4 = 3;
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
        let _var;
        let projectId;
        let guildId;
        let appChannelId;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            shareTicket = tmp;
            onRemixed = tmp4;
            _var = undefined;
            projectId = undefined;
            guildId = undefined;
            appChannelId = undefined;
            const tmp75 = c15;
            if (tmp75) {
              if (null != first) {
                let obj7;
                guild(true);
                _undefined2(null);
                const _confirm = memo.confirm;
                if (closure_14) {
                  const obj6 = { name: str2, copy: true };
                  obj7 = obj6;
                } else {
                  obj7 = { name: str2 };
                }
                c3 = 1;
                c4 = 1;
                const obj8 = { value: _confirm(tmp40, obj7), done: false };
                return obj8;
              }
            }
          }
        } else {
          if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              _var = value;
              if (null != _var) {
                if (_var.ok) {
                  projectId = _var.projectId;
                  guildId = _var.guildId;
                  const tmp12 = closure_130_14;
                  if (tmp12) {
                    if (null != guildId) {
                      guild = guild.getGuild(guildId);
                      let name;
                      const tmp27 = closure_130_8;
                      if (guild != null) {
                        name = guild.name;
                      }
                      _var = name;
                      if (name == null) {
                        _var = "";
                      }
                      tmp27(_var);
                      c3 = 2;
                      c4 = 1;
                      const obj10 = { value: obj5.publishConjureCopy(projectId, guildId), done: false };
                      obj5 = _var(shareTicket[17]);
                      return obj10;
                    }
                  }
                } else {
                  closure_130_9(_var.message);
                  closure_130_7(false);
                  c4 = 3;
                  const obj11 = { value: undefined, done: true };
                  return obj11;
                }
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            appChannelId = value;
            if (null != appChannelId) {
              const obj13 = onRemixed(shareTicket[15]);
              obj13.hideActionSheet(stateFromStoresArray);
              const obj14 = _var(shareTicket[17]);
              obj14.openConjureCopy(guildId, appChannelId.appChannelId);
              c4 = 3;
              const obj = { value: undefined, done: true };
              return obj;
            }
          }
          const obj4 = onRemixed(shareTicket[15]);
          obj4.hideActionSheet(stateFromStoresArray);
          closure_130_1(projectId, guildId);
        }
        c4 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp50) {
        c4 = 3;
        throw tmp50;
      }
    }
  }), items4);
  let obj3 = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: c9(BottomSheetTitleHeader, obj4), footer: c9(tmp32, obj6), children: tmp33(tmp32, obj14) };
  const ActionSheet = tmp20(tmp14[18]).ActionSheet;
  obj4 = { title: intl4.formatToPlainString(tmp13(tmp14[14]).vU1gB6, obj5), subtitle: intl5.string(tmp13(tmp14[14]).PrV2rD) };
  BottomSheetTitleHeader = tmp20(tmp14[19]).BottomSheetTitleHeader;
  intl4 = tmp20(tmp14[13]).intl;
  obj5 = { projectName: project.name };
  intl5 = tmp20(tmp14[13]).intl;
  obj6 = { style: tmp16Result.footer, ref, onLayout, children: tmp33(SafeAreaPaddingView, obj7) };
  obj7 = { bottom: true, style: tmp16Result.footerBody, children: items5 };
  let tmp31Result = null;
  SafeAreaPaddingView = tmp20(tmp14[20]).SafeAreaPaddingView;
  if (null != tmp12) {
    let obj8 = { accessibilityRole: "alert", children: c9(project(tmp14[21]).Text, obj9) };
    obj9 = { variant: "body-xs/normal", color: "text-feedback-critical", children: tmp12 };
    tmp31Result = tmp31(tmp32, obj8);
  }
  items5 = [tmp31Result, , ];
  let tmp31Result3 = null;
  if (null != tmp10) {
    let obj10 = { accessibilityLiveRegion: "polite", children: c9(Text, obj11) };
    obj11 = { variant: "body-xs/normal", color: "text-muted", children: formatToPlainString(O25g5n, obj12) };
    Text = tmp20(tmp14[21]).Text;
    const intl6 = tmp20(tmp14[13]).intl;
    formatToPlainString = intl6.formatToPlainString;
    obj12 = { projectName: str2.trim(), server: tmp10 };
    O25g5n = tmp13(tmp14[14]).O25g5n;
    tmp31Result3 = tmp31(tmp32, obj10);
  }
  items5[1] = tmp31Result3;
  let obj13 = { variant: "primary", size: "md", text: stringResult2, loading: tmp8, disabled: !isValidCopyNameResult, onPress: callback1 };
  items5[2] = c9(project(shareTicket[22]).Button, obj13);
  obj14 = { style: tmp16Result.list, children: items6 };
  const obj15 = { label: intl7.string(onRemixed(shareTicket[14])["7gI+sw"]), value: str2, onChange: tmp6, maxLength: project(shareTicket[24]).MAX_PROJECT_NAME_LENGTH, disabled: tmp8 };
  const TextInput = tmp20(tmp14[23]).TextInput;
  intl7 = tmp20(tmp14[13]).intl;
  items6 = [c9(TextInput, obj15), , ];
  let tmp31Result4 = null;
  if (null != found) {
    const obj16 = { title: stringResult, hasIcons: true, children: c9(TableRow, obj17) };
    const TableRowGroup = tmp20(tmp14[25]).TableRowGroup;
    obj17 = { icon: c9(tmp13Result, obj18), label: found.name, labelLineClamp: 1, arrow: true, disabled: tmp8, onPress: callback };
    TableRow = tmp20(tmp14[26]).TableRow;
    obj18 = { guild: found, size: project(shareTicket[27]).GuildIconSizes.SMALL_32 };
    tmp13Result = onRemixed(shareTicket[27]);
    tmp31Result4 = tmp31(TableRowGroup, obj16);
  }
  items6[1] = tmp31Result4;
  const obj19 = {
    title: stringResult1,
    hasIcons: true,
    value: tmp4,
    onChange(arg0) {
      return _undefined(arg0);
    },
    accessibilityLabel: stringResult1,
    children: items7
  };
  const TableRadioGroup = tmp20(tmp14[28]).TableRadioGroup;
  const obj20 = { value: "copy", icon: c9(TableRowIcon, obj21), label: intl8.string(onRemixed(shareTicket[14]).sx5jYE), subLabel: intl9.string(onRemixed(shareTicket[14])["S+Fcvd"]), disabled: tmp8 };
  const TableRadioRow = tmp20(tmp14[29]).TableRadioRow;
  obj21 = { IconComponent: project(shareTicket[31]).CopyIcon };
  TableRowIcon = tmp20(tmp14[30]).TableRowIcon;
  intl8 = tmp20(tmp14[13]).intl;
  intl9 = tmp20(tmp14[13]).intl;
  items7 = [c9(TableRadioRow, obj20), ];
  const obj22 = { value: "remix", icon: c9(TableRowIcon2, obj23), label: intl10.string(onRemixed(shareTicket[14]).ZdvGpk), subLabel: intl11.string(onRemixed(shareTicket[14]).EIh4da), disabled: tmp8 };
  const TableRadioRow2 = tmp20(tmp14[29]).TableRadioRow;
  obj23 = { IconComponent: project(shareTicket[32]).MagicWandIcon };
  TableRowIcon2 = tmp20(tmp14[30]).TableRowIcon;
  intl10 = tmp20(tmp14[13]).intl;
  intl11 = tmp20(tmp14[13]).intl;
  items7[1] = c9(TableRadioRow2, obj22);
  items6[2] = memo(TableRadioGroup, obj19);
  return c9(ActionSheet, obj3);
};
export const CONJURE_REMIX_SHEET_KEY = "ConjureRemixSheet";
