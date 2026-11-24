// Module ID: 11305
// Function ID: 11306
// Name: ConjureRemixSheet
// Dependencies: [5, 32, 19, 17, 4788, 21, 4917, 575, 11306, 8345, 11307, 1112, 4192, 5131, 11309, 6029, 7046, 11310, 7420, 7381, 7354, 5508, 5515, 7148, 6809, 6014, 6018, 6926, 7125, 7127, 5617, 11339, 2]
// Exports: default

// Module 11305 (ConjureRemixSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5131 */;
import TableRowIcon4 from "TableRowIcon" /* 6029 */;
import AppsIcon from "AppsIcon" /* 7046 */;
import ConjureRemix from "ConjureRemix" /* 11307 */;
import ConjureServerPickerSheetDefault from "ConjureServerPickerSheet" /* 11309 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4788 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4917 */;
import size from "module_2" /* 2 */;

let c3, c4;

let c9;
let metroImportAll;
let react = react_mod;
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const ConjureRemixSheet_str = "ConjureRemixSheet";
const ConjureRemixServerSheet = "ConjureRemixServerSheet";
let closure_12 = createStyles.createStyles((arg0) => {
  const obj = { list: { gap: nativeDefault.space.PX_24, paddingBottom: arg0 + nativeDefault.space.PX_24 }, footer: { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 }, footerBody: { gap: nativeDefault.space.PX_16 } };
  ({ gap: nativeDefault.space.PX_24, paddingBottom: arg0 + nativeDefault.space.PX_24 });
  ({ backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 });
  ({ gap: nativeDefault.space.PX_16 });
  return obj;
});
const result = size.fileFinishedImporting("modules/conjure/remix/native/ConjureRemixSheet.tsx");

export default function ConjureRemixSheet(project) {
  let BottomSheetTitleHeader;
  let O25g5n;
  let SafeAreaPaddingView;
  let TableRow;
  let TableRowIcon2;
  let TableRowIcon3;
  let Text;
  let _undefined;
  let _undefined2;
  let c5;
  let c7;
  let c8;
  let c9;
  let destinationGuild;
  let formatToPlainString;
  let intl10;
  let intl11;
  let intl12;
  let intl5;
  let intl6;
  let intl8;
  let intl9;
  let items4;
  let items5;
  let items6;
  let name;
  let obj10;
  let obj11;
  let obj13;
  let obj18;
  let obj21;
  let obj23;
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  let obj8;
  let onLayout;
  let ref;
  let setDestination;
  let title;
  let tmp11;
  let tmp13;
  let tmp29Result4;
  let tmp5;
  let tmp9;
  project = project.project;
  let str = project.mode;
  if (str === undefined) {
    str = "copy";
  }
  let onRemixed = project.onRemixed;
  let shareTicket = project.shareTicket;
  setDestination = undefined;
  react = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  let memo;
  let c11;
  let stringResult1;
  let id;
  let closure_14;
  let c15;
  const tmp = onRemixed;
  let tmp2 = shareTicket;
  const tmp3 = onRemixed(shareTicket[8])(project.currentGuildId, "ConjureRemixSheet");
  const guilds = tmp3.guilds;
  ({ destinationGuild, setDestination } = tmp3);
  let obj = react;
  const tmp4 = setDestination(react.useState(str), 2);
  [tmp5, c5] = tmp4;
  const tmp6 = setDestination(react.useState(project.name), 2);
  const str2 = tmp6[0];
  const tmp7 = tmp6[1];
  [tmp9, c7] = setDestination(react.useState(false), 2);
  const tmp8 = setDestination(react.useState(false), 2);
  [tmp11, c8] = setDestination(react.useState(null), 2);
  const tmp10 = setDestination(react.useState(null), 2);
  let tmp12 = setDestination(react.useState(null), 2);
  [tmp13, c9] = tmp12;
  const tmp14 = onRemixed(shareTicket[9])();
  const height = tmp14.height;
  let num = 0;
  ({ ref, onLayout } = tmp14);
  const tmp15 = stringResult1;
  if (undefined !== height) {
    num = height;
  }
  const tmp15Result = tmp15(num);
  const items = [project, shareTicket];
  memo = obj.useMemo(() => {
    const obj = ConjureRemix;
    return obj.createConjureRemix(project, undefined, shareTicket);
  }, items);
  const items1 = [memo];
  const effect = obj.useEffect(() => () => memo.dismiss(), items1);
  const intl = project(tmp2[11]).intl;
  const stringResult = intl.string(tmp(tmp2[12])["maL0+X"]);
  c11 = stringResult;
  const intl2 = project(tmp2[11]).intl;
  stringResult1 = intl2.string(tmp(tmp2[12])["0Vceid"]);
  const intl3 = project(tmp2[11]).intl;
  const stringResult2 = intl3.string(tmp(tmp2[12])["pgbZu+"]);
  id = undefined;
  if (destinationGuild != null) {
    id = destinationGuild.id;
  }
  if (id == null) {
    id = null;
  }
  closure_14 = tmp24;
  const tmp19Result = project(tmp2[10]);
  const isValidCopyNameResult = tmp19Result.isValidCopyName(str2);
  c15 = isValidCopyNameResult;
  const intl4 = tmp19(tmp2[11]).intl;
  const items2 = [id, stringResult, guilds, stringResult1, setDestination];
  const stringResult3 = intl4.string(tmp(tmp2[12]).XWgAfc);
  const callback = obj.useCallback(() => {
    let TableRowIcon;
    let obj2;
    let obj3;
    let obj4;
    let tmp2;
    const obj = { key: ConjureRemixServerSheet, stackingBehavior: "stack", content: metroImportAll(tmp2, obj2) };
    const showActionSheet = ActionSheetActionCreators.showActionSheet;
    obj2 = {
      sheetKey: ConjureRemixServerSheet,
      title,
      guilds,
      selectedGuildId: id,
      onPick(id) {
        return setDestination(id.id);
      },
      otherOption: obj3
    };
    obj3 = {
      label: stringResult1,
      icon: metroImportAll(TableRowIcon, obj4),
      selected: null == id,
      onPick() {
        return setDestination(project(shareTicket[8]).CONJURE_REMIX_LIBRARY);
      }
    };
    ActionSheetActionCreators;
    obj4 = { IconComponent: AppsIcon.AppsIcon };
    tmp2 = ConjureServerPickerSheetDefault;
    TableRowIcon = TableRowIcon4.TableRowIcon;
    showActionSheet(obj);
  }, items2);
  const items3 = [isValidCopyNameResult, id, tmp24, str2, onRemixed, memo];
  const callback1 = obj.useCallback(guilds(function*(arg0, value) {
    let closure_1;
    let closure_2;
    let guild;
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
              let obj7;
              guild(true);
              _undefined2(null);
              const _confirm = memo.confirm;
              const tmp46 = id;
              if (closure_14) {
                const obj6 = { name: str2, copy: true };
                obj7 = obj6;
              } else {
                obj7 = { name: str2 };
              }
              c3 = 1;
              c4 = 1;
              const obj8 = { value: _confirm(tmp46, obj7), done: false };
              return obj8;
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
              const obj13 = onRemixed(shareTicket[13]);
              obj13.hideActionSheet(closure_1_10);
              const obj14 = _var(shareTicket[17]);
              obj14.openConjureCopy(guildId, appChannelId.appChannelId);
              c4 = 3;
              const obj = { value: undefined, done: true };
              return obj;
            }
          }
          const obj4 = onRemixed(shareTicket[13]);
          obj4.hideActionSheet(closure_1_10);
          closure_130_1(projectId, guildId);
        }
        c4 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp50) {
        c4 = 3;
        throw tmp50;
      }
    }
  }), items3);
  let obj2 = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: c8(BottomSheetTitleHeader, obj3), footer: tmp29(str2, obj5), children: c9(str2, obj13) };
  const ActionSheet = tmp19(tmp2[18]).ActionSheet;
  obj3 = { title: intl5.formatToPlainString(tmp(tmp2[12]).vU1gB6, obj4), subtitle: intl6.string(tmp(tmp2[12]).PrV2rD) };
  BottomSheetTitleHeader = tmp19(tmp2[19]).BottomSheetTitleHeader;
  intl5 = tmp19(tmp2[11]).intl;
  obj4 = { projectName: project.name };
  intl6 = tmp19(tmp2[11]).intl;
  obj5 = { style: tmp15Result.footer, ref, onLayout, children: c9(SafeAreaPaddingView, obj6) };
  obj6 = { bottom: true, style: tmp15Result.footerBody, children: items4 };
  let tmp29Result = null;
  SafeAreaPaddingView = tmp19(tmp2[20]).SafeAreaPaddingView;
  if (null != tmp13) {
    let obj7 = { accessibilityRole: "alert", children: tmp29(tmp19(tmp2[21]).Text, obj8) };
    obj8 = { variant: "body-xs/normal", color: "text-feedback-critical", children: tmp13 };
    tmp29Result = tmp29(tmp30, obj7);
  }
  items4 = [tmp29Result, , ];
  let tmp29Result3 = null;
  if (null != tmp11) {
    let obj9 = { accessibilityLiveRegion: "polite", children: tmp29(Text, obj10) };
    obj10 = { variant: "body-xs/normal", color: "text-muted", children: formatToPlainString(O25g5n, obj11) };
    Text = tmp19(tmp2[21]).Text;
    const intl7 = tmp19(tmp2[11]).intl;
    formatToPlainString = intl7.formatToPlainString;
    obj11 = { projectName: str2.trim(), server: tmp11 };
    O25g5n = tmp(tmp2[12]).O25g5n;
    tmp29Result3 = tmp29(tmp30, obj9);
  }
  items4[1] = tmp29Result3;
  let obj12 = { variant: "primary", size: "md", text: stringResult3, loading: tmp9, disabled: !isValidCopyNameResult, onPress: callback1 };
  items4[2] = c8(project(tmp2[22]).Button, obj12);
  obj13 = { style: tmp15Result.list, children: items5 };
  let obj14 = { label: intl8.string(tmp(tmp2[12])["7gI+sw"]), value: str2, onChange: tmp7, maxLength: tmp19(tmp2[24]).MAX_PROJECT_NAME_LENGTH, disabled: tmp9 };
  const TextInput = tmp19(tmp2[23]).TextInput;
  intl8 = tmp19(tmp2[11]).intl;
  items5 = [tmp29(TextInput, obj14), , ];
  const obj15 = { title: stringResult, hasIcons: true, children: c8(TableRow, obj18) };
  const TableRowGroup = tmp19(tmp2[25]).TableRowGroup;
  TableRow = tmp19(tmp2[26]).TableRow;
  if (null != destinationGuild) {
    const obj16 = { guild: destinationGuild, size: project(tmp2[27]).GuildIconSizes.SMALL_32 };
    const tmpResult = tmp(tmp2[27]);
    tmp29Result4 = tmp29(tmpResult, obj16);
  } else {
    const obj17 = { IconComponent: project(tmp2[16]).AppsIcon };
    let TableRowIcon = tmp19(tmp2[15]).TableRowIcon;
    tmp29Result4 = tmp29(TableRowIcon, obj17);
  }
  obj18 = { icon: tmp29Result4, label: name, labelLineClamp: 1, arrow: true, disabled: tmp9, onPress: callback };
  name = undefined;
  if (destinationGuild != null) {
    name = destinationGuild.name;
  }
  if (name == null) {
    name = stringResult1;
  }
  items5[1] = c8(TableRowGroup, obj15);
  const obj19 = {
    title: stringResult2,
    hasIcons: true,
    value: tmp5,
    onChange(arg0) {
      return _undefined(arg0);
    },
    accessibilityLabel: stringResult2,
    children: items6
  };
  const TableRadioGroup = tmp19(tmp2[28]).TableRadioGroup;
  const obj20 = { value: "copy", icon: c8(TableRowIcon2, obj21), label: intl9.string(tmp(tmp2[12]).sx5jYE), subLabel: intl10.string(tmp(tmp2[12])["S+Fcvd"]), disabled: tmp9 };
  const TableRadioRow = tmp19(tmp2[29]).TableRadioRow;
  obj21 = { IconComponent: project(tmp2[30]).CopyIcon };
  TableRowIcon2 = tmp19(tmp2[15]).TableRowIcon;
  intl9 = tmp19(tmp2[11]).intl;
  intl10 = tmp19(tmp2[11]).intl;
  items6 = [tmp29(TableRadioRow, obj20), ];
  const obj22 = { value: "remix", icon: c8(TableRowIcon3, obj23), label: intl11.string(tmp(tmp2[12]).ZdvGpk), subLabel: intl12.string(tmp(tmp2[12]).EIh4da), disabled: tmp9 };
  const TableRadioRow2 = tmp19(tmp2[29]).TableRadioRow;
  obj23 = { IconComponent: project(tmp2[31]).MagicWandIcon };
  TableRowIcon3 = tmp19(tmp2[15]).TableRowIcon;
  intl11 = tmp19(tmp2[11]).intl;
  intl12 = tmp19(tmp2[11]).intl;
  items6[1] = c8(TableRadioRow2, obj22);
  items5[2] = c9(TableRadioGroup, obj19);
  return c8(ActionSheet, obj2);
};
export const CONJURE_REMIX_SHEET_KEY = "ConjureRemixSheet";
