// Module ID: 12444
// Function ID: 12445
// Name: ConjureShareSheet
// Dependencies: [5, 32, 19, 17, 6932, 21, 5170, 575, 504, 12445, 12446, 11028, 1113, 4026, 6933, 5406, 12448, 2118, 12448, 7459, 7415, 7159, 7071, 6191, 5783, 5790, 12449, 12334, 12452, 7451, 5868, 7079, 5883, 2]
// Exports: default

// Module 12444 (ConjureShareSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import ToastUtils from "ToastUtils" /* 5868 */;
import ConjureProjectStore2 from "ConjureProjectStore" /* 6932 */;
import ClipboardUtils from "ClipboardUtils" /* 7451 */;
import ConjureSharingModeSheet from "ConjureSharingModeSheet" /* 12448 */;
import buildConjureProjectLinkDefault from "buildConjureProjectLink" /* 12452 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ConjureProjectStore = ConjureProjectStore2;
let _require, c4, c5, id;

let c10;
let c9;
let obj2;
let obj3;
function ShareLinkRow(project) {
  let TableRowIcon;
  let closure_0;
  let intl;
  let obj2;
  project = project.project;
  const tmp = buildConjureProjectLinkDefault(project.application_id, project.name);
  _require = tmp;
  const items = [tmp];
  const callback = react.useCallback(() => {
    const obj = ClipboardUtils;
    obj.copy(closure_0);
    const obj2 = ToastUtils;
    obj2.presentLinkCopied();
  }, items);
  let obj = { icon: closure_9(TableRowIcon, obj2), label: intl.string(require("intl").t.WqhZss), subLabel: tmp, subLabelLineClamp: 1, onPress: callback };
  const TableRow = require("TableRow").TableRow;
  obj2 = { IconComponent: require("LinkIcon").LinkIcon };
  TableRowIcon = require("TableRowIcon").TableRowIcon;
  intl = require("intl").intl;
  return closure_9(TableRow, obj);
}
const View = react_native.View;
const isProjectOwner = ConjureProjectStore2.isProjectOwner;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { body: obj2, notice: obj3, noticeText: { flex: 1 } };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_11 = createStyles(obj);
let result = size.fileFinishedImporting("modules/conjure/share/native/ConjureShareSheet.tsx");

export default function ConjureShareSheet(projectId) {
  let BottomSheetTitleHeader;
  let Text;
  let Text2;
  let c6;
  let intl;
  let intl2;
  let intl4;
  let intl5;
  let intl6;
  let items5;
  let items6;
  let obj11;
  let obj14;
  let obj16;
  let obj4;
  let stringResult;
  let tmp21Result;
  let tmp23Result2;
  let tmp28;
  let tmp8;
  let value;
  projectId = projectId.projectId;
  let shareLinksEnabled;
  c6 = undefined;
  let closure_7;
  let c11;
  const tmp = c11();
  let tmp2 = projectId;
  const tmp3 = shareLinksEnabled;
  let obj = projectId(shareLinksEnabled[8]);
  let items = [closure_7];
  const items1 = [projectId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let project = ConjureProjectStore.getProject(projectId);
    if (project == null) {
      project = null;
    }
    return project;
  }, items1);
  const tmp6 = stateFromStores(shareLinksEnabled[9])(projectId);
  shareLinksEnabled = tmp6.shareLinksEnabled;
  const loadFailed = tmp6.loadFailed;
  const setShareLinksEnabled = tmp6.setShareLinksEnabled;
  const reload = tmp6.reload;
  let obj2 = reload;
  [tmp8, c6] = setShareLinksEnabled(reload.useState(null), 2);
  const tmp7 = setShareLinksEnabled(reload.useState(null), 2);
  const tmp9 = setShareLinksEnabled(reload.useState(false), 2);
  closure_7 = tmp9[1];
  const first = tmp9[0];
  const useCallback = reload.useCallback;
  let closure_0 = loadFailed(function*(arg0, value) {
    let closure_1;
    let obj5;
    let tmp31;
    let v1;
    let v3;
    closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c3;
      try {
        let c0;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            id = tmp31;
            c0 = undefined;
            let conjureSharingChangeResult = null;
            if (null != id) {
              if (null != closure_2) {
                const obj4 = closure_0(shareLinksEnabled[10]);
                conjureSharingChangeResult = obj4.conjureSharingChange(tmp38, tmp19, tmp37);
              } else {
                conjureSharingChangeResult = null;
              }
            }
            c0 = conjureSharingChangeResult;
            if (null != id) {
              if (null != conjureSharingChangeResult) {
                const _Object = Object;
                if (0 !== Object.keys(conjureSharingChangeResult).length) {
                  closure_1_6(closure_0);
                  closure_1_7(false);
                  c3 = 1;
                  c4 = 3;
                  c5 = 1;
                  const obj6 = { value: obj5.updateProjectSettings(id.id, conjureSharingChangeResult), done: false };
                  obj5 = closure_0(shareLinksEnabled[11]);
                  return obj6;
                }
              }
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_1_7(true);
          c4 = 2;
          c5 = 1;
          const obj7 = { value: c5(), done: false };
          return obj7;
        } else {
          if (2 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj8 = { value, done: true };
              return obj8;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (null != c0.share_links_enabled) {
              c4(c0.share_links_enabled);
            }
            c3 = 0;
          }
          closure_1_6(null);
        }
        c5 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      } catch (tmp30) {
        tmp31 = c3;
        if (0 === c3) {
          c5 = 3;
          throw tmp30;
        } else {
          c4 = 1;
        }
      }
    }
  });
  const items2 = [stateFromStores, shareLinksEnabled, loadFailed, setShareLinksEnabled, reload];
  const current = useCallback(function() {
    return closure_0(...arguments);
  }, items2);
  let closure_9 = reload.useRef(current);
  const items3 = [current];
  const effect = reload.useEffect(() => {
    closure_9.current = current;
  }, items3);
  const memo = reload.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    const obj = { value: "collaborators", label: intl.string(stateFromStores(shareLinksEnabled[13])["a/Tlqf"]), description: intl2.string(stateFromStores(shareLinksEnabled[13]).Nvva0C) };
    intl = projectId(shareLinksEnabled[12]).intl;
    intl2 = projectId(shareLinksEnabled[12]).intl;
    const items = [obj, , ];
    const obj2 = { value: "link", label: intl3.string(stateFromStores(shareLinksEnabled[13]).e0VakN), description: intl4.string(stateFromStores(shareLinksEnabled[13]).LTgWMb) };
    intl3 = projectId(shareLinksEnabled[12]).intl;
    intl4 = projectId(shareLinksEnabled[12]).intl;
    items[1] = obj2;
    const obj3 = { value: "public", label: intl5.string(stateFromStores(shareLinksEnabled[13])["98MAcX"]), description: intl6.string(stateFromStores(shareLinksEnabled[13]).NtgDy0) };
    intl5 = projectId(shareLinksEnabled[12]).intl;
    intl6 = projectId(shareLinksEnabled[12]).intl;
    items[2] = obj3;
    return items;
  }, []);
  let tmp13 = null != stateFromStores;
  if (tmp13) {
    tmp13 = current(stateFromStores);
  }
  let result = null != stateFromStores && tmp13;
  if (result) {
    const tmp2Result = tmp2(tmp3[14]);
    result = tmp2Result.projectSupportsVisibility(stateFromStores);
  }
  if (result) {
    result = null != shareLinksEnabled || loadFailed;
    const tmp16 = null != shareLinksEnabled || loadFailed;
  }
  let tmp17 = tmp8;
  if (tmp8 == null) {
    let conjureSharingModeResult = null;
    if (null != stateFromStores) {
      const tmp2Result2 = tmp2(tmp3[10]);
      conjureSharingModeResult = tmp2Result2.conjureSharingMode(stateFromStores, shareLinksEnabled);
    }
    tmp17 = conjureSharingModeResult;
  }
  c11 = tmp17;
  const found = memo.find((value) => value.value === c11);
  const items4 = [memo, tmp17];
  const callback1 = obj2.useCallback(() => {
    let ref;
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    const obj = {
      options: memo,
      value,
      onChange(AUTO_DISMISS) {
        return ref.current(AUTO_DISMISS);
      }
    };
    const tmp2 = asyncRequire(12448, dependencyMap.paths);
    openLazy(tmp2, ConjureSharingModeSheet.CONJURE_SHARING_MODE_SHEET_KEY, obj, "stack");
  }, items4);
  let obj3 = { header: closure_9(BottomSheetTitleHeader, obj4), children: tmp23Result2 };
  const ActionSheet = tmp2(tmp3[19]).ActionSheet;
  obj4 = { title: intl.string(tmp2(tmp3[12]).t.RDE0Sc) };
  BottomSheetTitleHeader = tmp2(tmp3[20]).BottomSheetTitleHeader;
  intl = tmp2(tmp3[12]).intl;
  tmp23Result2 = null;
  if (null != stateFromStores) {
    let obj5 = { style: tmp.body, children: items5 };
    const TableRowGroup = tmp2(tmp3[21]).TableRowGroup;
    let obj6 = { label: intl2.string(tmp5(tmp3[13]).ujIxRm), subLabel: stringResult, trailing: tmp21Result, arrow: result, disabled: tmp28, onPress: callback1 };
    const TableRow = tmp2(tmp3[22]).TableRow;
    intl2 = tmp2(tmp3[12]).intl;
    if (tmp13) {
      let description;
      if (found != null) {
        description = found.description;
      }
      stringResult = description;
    } else {
      let intl3 = tmp2(tmp3[12]).intl;
      stringResult = intl3.string(tmp5(tmp3[13]).WLBlI4);
    }
    tmp21Result = undefined;
    if (null != found) {
      let obj7 = { text: found.label };
      tmp21Result = tmp21(tmp2(tmp3[22]).TableRow.TrailingText, obj7);
    }
    tmp28 = !result;
    if (result) {
      tmp28 = null != tmp8;
    }
    let obj8 = { hasIcons: false, children: closure_9(TableRow, obj6) };
    items5 = [closure_9(TableRowGroup, obj8), , , , , ];
    let tmp23Result = null;
    if (loadFailed) {
      tmp23Result = null;
      if (null == tmp8) {
        tmp23Result = null;
        if ("public" !== tmp17) {
          const obj9 = { direction: "horizontal", spacing: stateFromStores(tmp3[7]).space.PX_8, align: "center", style: tmp.notice, children: items6 };
          const Stack = tmp2(tmp3[23]).Stack;
          const obj10 = { style: tmp.noticeText, children: closure_9(Text2, obj11) };
          obj11 = { variant: "body-sm/normal", color: "text-feedback-critical", children: intl5.string(stateFromStores(tmp3[13])["0e9nOP"]) };
          Text2 = tmp2(tmp3[24]).Text;
          intl5 = tmp2(tmp3[12]).intl;
          items6 = [closure_9(tmp24, obj10), ];
          const obj12 = { variant: "secondary", size: "sm", text: intl6.string(tmp2(tmp3[12]).t["5911Lb"]), onPress: reload };
          const Button = tmp2(tmp3[25]).Button;
          intl6 = tmp2(tmp3[12]).intl;
          items6[1] = closure_9(Button, obj12);
          tmp23Result = tmp23(Stack, obj9);
        }
      }
    }
    items5[1] = tmp23Result;
    let tmp21Result5 = null;
    if (first) {
      const obj13 = { style: tmp.notice, children: closure_9(Text, obj14) };
      obj14 = { variant: "body-sm/normal", color: "text-feedback-critical", children: intl4.string(stateFromStores(tmp3[13]).wzqQPR) };
      Text = tmp2(tmp3[24]).Text;
      intl4 = tmp2(tmp3[12]).intl;
      tmp21Result5 = tmp21(tmp24, obj13);
    }
    items5[2] = tmp21Result5;
    let tmp21Result6 = null;
    if ("public" === tmp17) {
      tmp21Result6 = null;
      if (null == tmp8) {
        const obj15 = { hasIcons: true, children: closure_9(ShareLinkRow, obj16) };
        obj16 = { project: stateFromStores };
        const TableRowGroup2 = tmp2(tmp3[21]).TableRowGroup;
        tmp21Result6 = tmp21(TableRowGroup2, obj15);
      }
    }
    items5[3] = tmp21Result6;
    let tmp21Result7 = null;
    if ("link" === tmp17) {
      tmp21Result7 = null;
      if (null == tmp8) {
        const obj17 = { project: stateFromStores, isOwner: tmp13 };
        tmp21Result7 = tmp21(tmp5(tmp3[26]), obj17);
      }
    }
    items5[4] = tmp21Result7;
    let tmp21Result8 = null;
    if (tmp13) {
      const obj18 = { projectId: stateFromStores.id };
      tmp21Result8 = tmp21(tmp5(tmp3[27]), obj18);
    }
    items5[5] = tmp21Result8;
    tmp23Result2 = tmp23(tmp24, obj5);
  }
  return closure_9(ActionSheet, obj3);
};
