// Module ID: 14573
// Function ID: 14574
// Name: ConjureShareAccess
// Dependencies: [19, 17, 21, 5310, 575, 5546, 14439, 2121, 14439, 7756, 14574, 7453, 1113, 4133, 6335, 5923, 5930, 7730, 7755, 7757, 7465, 7639, 14545, 14577, 7953, 6008, 6023, 2]
// Exports: default

// Module 14573 (ConjureShareAccess)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import asyncRequire from "asyncRequire" /* 2121 */;
import _modDef4133 from "module_4133" /* 4133 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import ToastUtils from "ToastUtils" /* 6008 */;
import GuildIcon from "GuildIcon" /* 7730 */;
import TableRadioRow2 from "TableRadioRow" /* 7757 */;
import ClipboardUtils from "ClipboardUtils" /* 7953 */;
import ConjureSharingModeSheet from "ConjureSharingModeSheet" /* 14439 */;
import ConjureChangeListDefault from "ConjureChangeList" /* 14545 */;
import buildConjureProjectLinkDefault from "buildConjureProjectLink" /* 14577 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5310 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;
let _require;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
function ConjureShareServersSection(servers) {
  let TableRowIcon;
  let candidates;
  let current;
  let intl2;
  let items1;
  let obj4;
  let picked;
  let str;
  let tmp;
  servers = servers.servers;
  let title = servers.title;
  ({ current, candidates, picked } = servers);
  if (0 !== candidates.length) {
    let tmp2 = closure_6;
    let tmp5 = null;
    const tmp3 = closure_7;
    if (current.length > 0) {
      let obj = {
        title,
        hasIcons: true,
        children: current.map((guild) => {
              let obj2;
              let tmp;
              const obj = { label: guild.name, icon: closure_1_5(tmp, obj2) };
              const TableRow = servers(dependencyMap[11]).TableRow;
              obj2 = { guild, size: servers(dependencyMap[17]).GuildIconSizes.SMALL_32 };
              tmp = GuildIconDefault;
              return closure_1_5(TableRow, obj, guild.id);
            })
      };
      const TableRowGroup = servers(7756).TableRowGroup;
      tmp5 = closure_5(TableRowGroup, obj);
    }
    const items = [tmp5, , , ];
    let tmp2Result = null;
    if (candidates.length > 0) {
      const TableRadioGroup = servers(7755).TableRadioGroup;
      if (current.length > 0) {
        const intl = tmp10(1113).intl;
        title = intl.string(_modDef4133["7SD3ul"]);
      }
      let obj2 = {
        title,
        hasIcons: true,
        value: str,
        onChange(arg0) {
              let tmp2 = null;
              const pick = servers.pick;
              if ("" !== arg0) {
                tmp2 = arg0;
              }
              return pick(tmp2);
            },
        children: items1
      };
      str = undefined;
      if (picked != null) {
        str = picked.id;
      }
      if (str == null) {
        str = "";
      }
      const obj3 = { value: "", label: intl2.string(servers(1113).t.PoWNfe), icon: closure_5(TableRowIcon, obj4), disabled: servers.sharing };
      let TableRadioRow = tmp10(7757).TableRadioRow;
      intl2 = tmp10(1113).intl;
      obj4 = { IconComponent: servers(7639).CircleXIcon };
      TableRowIcon = tmp10(7465).TableRowIcon;
      items1 = [
        closure_5(TableRadioRow, obj3),
        candidates.map((guild) => {
              let obj2;
              let tmp;
              const obj = { value: guild.id, label: guild.name, icon: hasOwnProperty(tmp, obj2), disabled: servers.sharing };
              const TableRadioRow = TableRadioRow2.TableRadioRow;
              obj2 = { guild, size: GuildIcon.GuildIconSizes.SMALL_32 };
              tmp = GuildIconDefault;
              return hasOwnProperty(TableRadioRow, obj, guild.id);
            })
      ];
      tmp2Result = tmp2(TableRadioGroup, obj2);
    }
    items[1] = tmp2Result;
    let tmp14 = null;
    if (servers.changeRows.length > 0) {
      const obj5 = { rows: servers.changeRows };
      tmp14 = closure_5(ConjureChangeListDefault, obj5);
    }
    items[2] = tmp14;
    let tmp18 = null;
    if (null != servers.error) {
      const obj6 = { variant: "body-sm/medium", color: "text-feedback-critical", accessibilityRole: "alert", children: servers.error };
      tmp18 = closure_5(servers(5923).Text, obj6);
    }
    const obj7 = { children: items };
    items[3] = tmp18;
    tmp = tmp2(tmp3, obj7);
  } else {
    tmp = null;
  }
  return tmp;
}
function ShareLinkRow(project) {
  let TableRowIcon;
  let closure_0;
  let intl;
  let obj2;
  project = project.project;
  const disabled = project.disabled;
  const tmp = buildConjureProjectLinkDefault(project.application_id, project.name);
  _require = tmp;
  const items = [tmp];
  const callback = react.useCallback(() => {
    const obj = ClipboardUtils;
    obj.copy(closure_0);
    const obj2 = ToastUtils;
    obj2.presentLinkCopied();
  }, items);
  let obj = { icon: closure_5(TableRowIcon, obj2), label: intl.string(require("intl").t.WqhZss), subLabel: tmp, subLabelLineClamp: 1, disabled, onPress: callback };
  const TableRow = require("TableRow").TableRow;
  obj2 = { IconComponent: require("LinkIcon").LinkIcon };
  TableRowIcon = require("TableRowIcon").TableRowIcon;
  intl = require("intl").intl;
  return closure_5(TableRow, obj);
}
let react = react_mod;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { body: obj2, notice: obj3, noticeText: { flex: 1 }, sharingMode: obj4 };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { marginBottom: nativeDefault.space.PX_16 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/share/native/ConjureShareAccess.tsx");

export default function ConjureShareAccess(arg0) {
  let TableRowGroup2;
  let Text;
  let Text2;
  let canChange;
  let changeMode;
  let changing;
  let closure_3;
  let intl;
  let intl3;
  let intl4;
  let intl5;
  let isOwner;
  let items2;
  let items3;
  let mode;
  let obj12;
  let obj27;
  let obj3;
  let obj9;
  let project;
  let servers;
  let serversLabel;
  let sharing;
  let stringResult;
  let tmp20;
  let tmp7Result5;
  ({ project, sharing } = arg0);
  mode = undefined;
  changeMode = undefined;
  react = undefined;
  ({ servers, serversLabel } = arg0);
  const tmp = closure_8();
  ({ isOwner, mode } = sharing);
  const options = sharing.options;
  ({ changing, changeMode } = sharing);
  const loadFailed = sharing.loadFailed;
  const found = options.find((value) => value.value === mode);
  react = react.useRef(changeMode);
  const items = [changeMode];
  const effect = react.useEffect(() => {
    closure_3.current = changeMode;
  }, items);
  const items1 = [options, mode];
  let obj = { style: tmp.body, children: items2 };
  const callback = react.useCallback(() => {
    let ref;
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    const obj = {
      options,
      value: mode,
      onChange(AUTO_DISMISS) {
        return ref.current(AUTO_DISMISS);
      }
    };
    const tmp2 = asyncRequire(14439, dependencyMap.paths);
    openLazy(tmp2, ConjureSharingModeSheet.CONJURE_SHARING_MODE_SHEET_KEY, obj, "stack");
  }, items1);
  items2 = [closure_5(ConjureShareServersSection, { servers, title: serversLabel }), , , , , ];
  let tmp7Result = null;
  if ("public" === mode) {
    const obj2 = { hasIcons: true, children: closure_5(ShareLinkRow, obj3) };
    obj3 = { project, disabled: changing };
    const TableRowGroup = mode(changeMode[9]).TableRowGroup;
    tmp7Result = tmp7(TableRowGroup, obj2);
  }
  items2[1] = tmp7Result;
  let tmp7Result4 = null;
  if ("link" === mode) {
    const obj4 = { project, isOwner, disabled: changing };
    tmp7Result4 = tmp7(options(changeMode[10]), obj4);
  }
  items2[2] = tmp7Result4;
  const obj5 = { style: tmp.sharingMode, children: closure_5(TableRowGroup2, obj9) };
  TableRowGroup2 = mode(changeMode[9]).TableRowGroup;
  const obj7 = { label: intl.string(options(changeMode[13]).jDBYrs), subLabel: stringResult, trailing: tmp7Result5, arrow: null, disabled: tmp20, onPress: callback };
  const TableRow = mode(changeMode[11]).TableRow;
  intl = mode(changeMode[12]).intl;
  stringResult = undefined;
  if (!isOwner) {
    const intl2 = tmp15(tmp16[12]).intl;
    stringResult = intl2.string(tmp17(tmp16[13]).WLBlI4);
  }
  tmp7Result5 = undefined;
  if (null != found) {
    const obj8 = { text: found.label };
    tmp7Result5 = tmp7(tmp15(tmp16[11]).TableRow.TrailingText, obj8);
  }
  ({ canChange: obj6.arrow, canChange } = sharing);
  tmp20 = !canChange;
  if (canChange) {
    tmp20 = changing;
  }
  obj9 = { hasIcons: false, children: closure_5(TableRow, obj7) };
  items2[3] = closure_5(View, obj5);
  let tmp5Result = null;
  if (loadFailed) {
    tmp5Result = null;
    if (!changing) {
      tmp5Result = null;
      if ("public" !== mode) {
        const obj10 = { direction: "horizontal", spacing: options(changeMode[4]).space.PX_8, align: "center", style: tmp.notice, children: items3 };
        const Stack = tmp15(tmp16[14]).Stack;
        const obj11 = { style: tmp.noticeText, children: closure_5(Text2, obj12) };
        obj12 = { variant: "body-sm/normal", color: "text-feedback-critical", children: intl4.string(options(changeMode[13])["0e9nOP"]) };
        Text2 = tmp15(tmp16[15]).Text;
        intl4 = tmp15(tmp16[12]).intl;
        items3 = [closure_5(View, obj11), ];
        const obj13 = { variant: "secondary", size: "sm", text: intl5.string(mode(changeMode[12]).t["5911Lb"]), onPress: sharing.reload };
        const Button = tmp15(tmp16[16]).Button;
        intl5 = tmp15(tmp16[12]).intl;
        items3[1] = closure_5(Button, obj13);
        tmp5Result = tmp5(Stack, obj10);
      }
    }
  }
  items2[4] = tmp5Result;
  let tmp7Result6 = null;
  if (sharing.saveFailed) {
    const obj14 = { style: tmp.notice, children: closure_5(Text, obj27) };
    obj27 = { variant: "body-sm/normal", color: "text-feedback-critical", children: intl3.string(options(changeMode[13]).wzqQPR) };
    Text = tmp15(tmp16[15]).Text;
    intl3 = tmp15(tmp16[12]).intl;
    tmp7Result6 = tmp7(tmp6, obj14);
  }
  items2[5] = tmp7Result6;
  return closure_6(View, obj);
};
