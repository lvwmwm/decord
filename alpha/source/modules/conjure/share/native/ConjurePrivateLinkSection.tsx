// Module ID: 13236
// Function ID: 13237
// Name: ConjurePrivateLinkSection
// Dependencies: [5, 32, 19, 17, 21, 5243, 575, 13237, 13238, 13239, 7265, 5952, 1113, 4079, 13206, 5489, 13240, 2118, 6207, 6211, 7877, 5951, 10163, 7680, 7379, 7387, 5979, 13224, 5966, 12200, 5866, 2]
// Exports: default

// Module 13236 (ConjurePrivateLinkSection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl9 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import _modDef4079 from "module_4079" /* 4079 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import ToastUtils from "ToastUtils" /* 5951 */;
import useAlertStore from "useAlertStore" /* 6207 */;
import AlertModal2 from "AlertModal" /* 6211 */;
import ClipboardUtils from "ClipboardUtils" /* 7877 */;
import showShareActionSheet from "showShareActionSheet" /* 10163 */;
import conjureShareLinkMaxAges from "conjureShareLinkMaxAges" /* 13237 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let c3, c4, dependencyMap;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let obj = { failed: obj2 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/share/native/ConjurePrivateLinkSection.tsx");

export default function ConjurePrivateLinkSection(project) {
  let TableRowIcon;
  let TableRowIcon2;
  let TableRowIcon3;
  let TableRowIcon4;
  let TableRowIcon5;
  let Text;
  let TrailingText;
  let _undefined;
  let c5;
  let closure_2;
  let closure_4;
  let closure_6;
  let first1;
  let first2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items6;
  let items7;
  let obj10;
  let obj12;
  let obj14;
  let obj16;
  let obj3;
  let obj4;
  let obj5;
  let obj7;
  let tmp9;
  let value;
  project = project.project;
  value = undefined;
  dependencyMap = undefined;
  first1 = undefined;
  _slicedToArray = undefined;
  react = undefined;
  closure_6 = undefined;
  const isOwner = project.isOwner;
  let tmp2 = project;
  const tmp3 = dependencyMap;
  const tmp = closure_10();
  [value, dependencyMap] = react.useState(project(13237).CONJURE_SHARE_LINK_DEFAULT_MAX_AGE);
  [first1, _slicedToArray] = react.useState(null);
  let tmp8 = _slicedToArray(react.useState(false), 2);
  [tmp9, c5] = tmp8;
  [first2, closure_6] = react.useState(false);
  let items = [, , , ];
  ({ id: arr[0], application_id: arr[1], name: arr[2] } = project);
  items[3] = value;
  const callback = react.useCallback(first1(function*(arg0, value) {
    let closure_0;
    let closure_1;
    let obj2;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c2;
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            project = undefined;
            _undefined(true);
            closure_6(false);
            c2 = 1;
            c3 = 2;
            c4 = 1;
            const obj5 = { value: obj2.mintConjureShareLink(project.id, first), done: false };
            obj2 = project(c2[8]);
            return obj5;
          }
        } else {
          if (1 === c3) {
            c2 = 0;
            closure_129_6(true);
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            project = value;
            closure_129_4(tmp(c2[9])(closure_129_0.application_id, closure_129_0.name, project));
            c2 = 0;
          }
          closure_129_5(false);
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp28) {
        if (0 === c2) {
          c4 = 3;
          throw tmp28;
        } else {
          c3 = 1;
        }
      }
    }
  }), items);
  const items1 = [project.id];
  const callback1 = react.useCallback(first1(function*(arg0, value) {
    let closure_0;
    let intl;
    let intl2;
    let obj3;
    let v1;
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
      let c2;
      try {
        c3 = 2;
        if (0 === value) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            _undefined(true);
            c2 = 1;
            value = 2;
            c3 = 1;
            const obj5 = { value: obj3.updateProjectSettings(project.id, { reset_share_links: true }), done: false };
            obj3 = tmp(c2[10]);
            return obj5;
          }
        } else {
          if (1 === tmp4) {
            c2 = 0;
            const obj6 = { text: intl.string(value(c2[13])["5lL390"]), icon: tmp(c2[14]).RefreshIcon, iconColor: "icon-feedback-critical" };
            const open = value(c2[11]).open;
            const tmp8 = value(c2[11]);
            intl = tmp(c2[12]).intl;
            open("CONJURE_PRIVATE_LINK_RESET", obj6);
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_4(null);
            const obj7 = { text: intl2.string(value(c2[13]).w9w1Zh), icon: tmp(c2[14]).RefreshIcon };
            const open2 = value(c2[11]).open;
            const tmp35 = value(c2[11]);
            intl2 = tmp(c2[12]).intl;
            open2("CONJURE_PRIVATE_LINK_RESET", obj7);
            c2 = 0;
          }
          closure_128_5(false);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp24) {
        if (0 === c2) {
          c3 = 3;
          throw tmp24;
        } else {
          value = 1;
        }
      }
    }
  }), items1);
  const items2 = [value];
  const items3 = [callback1];
  const callback2 = react.useCallback(() => {
    let intl;
    let prop;
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    let obj = {
      title: intl.string(_modDef4079.eMlOXz),
      options: prop.map((value) => {
        let obj2;
        const obj = { value, label: obj2.conjureShareLinkMaxAgeLabel(value) };
        obj2 = project(closure_1_2[7]);
        return obj;
      }),
      value,
      onChange(arg0) {
        return closure_1_2(arg0);
      }
    };
    const tmp2 = asyncRequire(13240, dependencyMap.paths);
    intl = intl9.intl;
    prop = conjureShareLinkMaxAges.CONJURE_SHARE_LINK_MAX_AGES;
    openLazy(tmp2, "ConjurePrivateLinkMaxAge", obj, "stack");
  }, items2);
  const items4 = [first1];
  const callback3 = react.useCallback(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let items;
    let obj2;
    const openAlert = useAlertStore.openAlert;
    const obj = { title: intl.string(_modDef4079.LQawVH), content: intl2.string(_modDef4079.xBBqXx), actions: React4(metroImportAll, obj2) };
    useAlertStore;
    const AlertModal = AlertModal2.AlertModal;
    intl = intl9.intl;
    intl2 = intl9.intl;
    obj2 = { children: items };
    const obj3 = { variant: "destructive", text: intl3.string(_modDef4079.oq0hBy), onPress: callback1 };
    const AlertActionButton = AlertModal2.AlertActionButton;
    intl3 = intl9.intl;
    items = [metroImportDefault(AlertActionButton, obj3), ];
    const obj4 = { variant: "secondary", text: intl4.string(intl9.t["ETE/oC"]) };
    const AlertActionButton2 = AlertModal2.AlertActionButton;
    intl4 = intl9.intl;
    items[1] = metroImportDefault(AlertActionButton2, obj4);
    openAlert("ConjurePrivateLinkReset", metroImportDefault(AlertModal, obj));
  }, items3);
  const items5 = [first1];
  const callback4 = react.useCallback(() => {
    if (null != first1) {
      const obj = ClipboardUtils;
      obj.copy(tmp);
      const obj2 = ToastUtils;
      obj2.presentLinkCopied();
    }
  }, items4);
  const callback5 = react.useCallback(() => {
    if (null != first1) {
      const obj2 = { url: tmp };
      const obj = showShareActionSheet;
      obj.showShareActionSheet(obj2, "ConjurePrivateLinkSection");
    }
  }, items5);
  let obj = { title: intl.string(value(4079)["/lZVfj"]), description: intl2.string(value(4079).wp7r6t), hasIcons: true, children: items6 };
  const TableRowGroup = project(7680).TableRowGroup;
  intl = project(1113).intl;
  intl2 = project(1113).intl;
  let obj2 = { icon: callback1(TableRowIcon, obj3), label: intl3.string(value(4079).eMlOXz), trailing: callback1(TrailingText, obj4), arrow: true, disabled: tmp9, onPress: callback2 };
  const TableRow = project(7379).TableRow;
  obj3 = { IconComponent: project(5979).ClockIcon };
  TableRowIcon = project(7387).TableRowIcon;
  intl3 = project(1113).intl;
  obj4 = { text: obj5.conjureShareLinkMaxAgeLabel(value) };
  TrailingText = project(7379).TableRow.TrailingText;
  obj5 = project(13237);
  items6 = [callback1(TableRow, obj2), , , ];
  let obj6 = { icon: callback1(TableRowIcon2, obj7), label: intl4.string(value(4079).wELODD), disabled: tmp9, onPress: callback };
  const TableRow2 = project(7379).TableRow;
  obj7 = { IconComponent: project(13224).LinkPlusIcon };
  TableRowIcon2 = project(7387).TableRowIcon;
  intl4 = project(1113).intl;
  items6[1] = callback1(TableRow2, obj6);
  let tmp18Result = null;
  if (null != first1) {
    const obj8 = { children: items7 };
    const obj9 = { icon: callback1(TableRowIcon3, obj10), label: intl5.string(tmp2(1113).t.WqhZss), subLabel: first1, subLabelLineClamp: 1, onPress: callback4 };
    const TableRow3 = tmp2(7379).TableRow;
    obj10 = { IconComponent: tmp2(5966).LinkIcon };
    TableRowIcon3 = tmp2(7387).TableRowIcon;
    intl5 = tmp2(1113).intl;
    items7 = [tmp21(TableRow3, obj9), ];
    const obj11 = { icon: callback1(TableRowIcon4, obj12), label: intl6.string(tmp2(1113).t.RDE0Sc), onPress: callback5 };
    const TableRow4 = tmp2(7379).TableRow;
    obj12 = { IconComponent: tmp2(12200).ShareIcon };
    TableRowIcon4 = tmp2(7387).TableRowIcon;
    intl6 = tmp2(1113).intl;
    items7[1] = callback1(TableRow4, obj11);
    tmp18Result = tmp18(closure_8, obj8);
  }
  items6[2] = tmp18Result;
  let tmp21Result = null;
  if (isOwner) {
    const obj13 = { icon: callback1(TableRowIcon5, obj14), variant: "danger", label: intl7.string(value(4079).oq0hBy), disabled: tmp9, onPress: callback3 };
    const TableRow5 = tmp2(7379).TableRow;
    obj14 = { IconComponent: tmp2(13206).RefreshIcon, variant: "danger" };
    TableRowIcon5 = tmp2(7387).TableRowIcon;
    intl7 = tmp2(1113).intl;
    tmp21Result = tmp21(TableRow5, obj13);
  }
  items6[3] = tmp21Result;
  const children = [tmp18(TableRowGroup, obj), ];
  let tmp21Result2 = null;
  if (first2) {
    const obj15 = { style: tmp.failed, children: callback1(Text, obj16) };
    obj16 = { variant: "body-sm/normal", color: "text-feedback-critical", children: intl8.string(value(4079).KIrnzC) };
    Text = tmp2(5866).Text;
    intl8 = tmp2(1113).intl;
    tmp21Result2 = tmp21(tmp19, obj15);
  }
  children[1] = tmp21Result2;
  return closure_9(closure_6, { children });
};
