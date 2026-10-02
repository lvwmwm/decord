// Module ID: 16385
// Function ID: 16386
// Name: VibegrationsSecretRequestCard
// Dependencies: [19, 17, 21, 4837, 588, 558, 576, 4801, 16386, 6374, 16387, 1127, 3718, 4833, 13980, 5282, 2]

// Module 16385 (VibegrationsSecretRequestCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 588 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4801 */;
import VibegrationsSecretsSheet from "VibegrationsSecretsSheet" /* 16386 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const VibegrationsSecretsSheetDefault = VibegrationsSecretsSheet;
let projectId;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, cardAwaiting: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_7 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  let items;
  let tmp = projectId;
  let obj = projectId(576);
  const cResult = obj.c(33);
  projectId = projectId.projectId;
  const request = projectId.request;
  const awaiting = projectId.awaiting;
  const tmp4 = closure_7();
  if (cResult[0] === projectId) {
    let tmp5;
    let tmp6;
    if (cResult[1] === request) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== request.fields) {
      let tmp8;
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function h(id) {
          const obj = { id: id.name, label: id.label, icon: projectId(dependencyMap[9]).KeyIcon };
          return obj;
        };
        cResult[5] = fn2;
        tmp8 = fn2;
      } else {
        tmp8 = cResult[5];
      }
      const fields = request.fields;
      const mapped = fields.map(tmp8);
      cResult[3] = request.fields;
      cResult[4] = mapped;
      tmp6 = mapped;
    } else {
      tmp6 = cResult[4];
    }
    if (cResult[6] === tmp4.card) {
      let tmp12;
      let tmp13;
      let tmp16;
      if (cResult[7] === (null != awaiting && tmp4.cardAwaiting)) {
        tmp12 = cResult[8];
      }
      if (cResult[9] !== awaiting) {
        let tmp14 = null;
        if (null != awaiting) {
          tmp14 = closure_5(tmp(16387).VibegrationsAwaitingPulseRing, {});
        }
        cResult[9] = awaiting;
        cResult[10] = tmp14;
        tmp13 = tmp14;
      } else {
        tmp13 = cResult[10];
      }
      let str2 = "text-muted";
      if (null != awaiting) {
        str2 = "text-brand";
      }
      if (cResult[11] !== awaiting) {
        let sKNh1M;
        const intl = tmp(1127).intl;
        const string = intl.string;
        if (null != awaiting) {
          sKNh1M = request(3718).sKNh1M;
        } else {
          sKNh1M = request(3718)["/e28TK"];
        }
        const stringResult = string(sKNh1M);
        cResult[11] = awaiting;
        cResult[12] = stringResult;
        tmp16 = stringResult;
      } else {
        tmp16 = cResult[12];
      }
      if (cResult[13] === str2) {
        let tmp21;
        let tmp24;
        let tmp26;
        let tmp30;
        let tmp33;
        let tmp36;
        let tmp39;
        if (cResult[14] === tmp16) {
          tmp21 = cResult[15];
        }
        if (cResult[16] !== request.note) {
          if (null != request.note) {
            let note;
            if ("" !== request.note) {
              note = request.note;
            }
            cResult[16] = request.note;
            cResult[17] = note;
            tmp24 = note;
          }
          const intl2 = tmp(1127).intl;
          note = intl2.string(request(3718).jxvtin);
        } else {
          tmp24 = cResult[17];
        }
        if (cResult[18] !== tmp24) {
          let obj2 = { variant: "text-sm/normal", color: "text-default", children: tmp24 };
          const tmp28 = closure_5(tmp(4833).Text, obj2);
          cResult[18] = tmp24;
          cResult[19] = tmp28;
          tmp26 = tmp28;
        } else {
          tmp26 = cResult[19];
        }
        const _Symbol2 = Symbol;
        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1127).intl;
          const stringResult1 = intl3.string(request(3718)["/e28TK"]);
          cResult[20] = stringResult1;
          tmp30 = stringResult1;
        } else {
          tmp30 = cResult[20];
        }
        if (cResult[21] !== tmp6) {
          const obj3 = { label: tmp30, size: "xs", items: tmp6 };
          const tmp35 = closure_5(tmp(13980).TagGroup, obj3);
          cResult[21] = tmp6;
          cResult[22] = tmp35;
          tmp33 = tmp35;
        } else {
          tmp33 = cResult[22];
        }
        const _Symbol3 = Symbol;
        if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = tmp(1127).intl;
          const stringResult2 = intl4.string(request(3718)["gVV+HX"]);
          cResult[23] = stringResult2;
          tmp36 = stringResult2;
        } else {
          tmp36 = cResult[23];
        }
        if (cResult[24] !== tmp5) {
          const obj4 = { variant: "primary", size: "sm", onPress: tmp5, text: tmp36 };
          const tmp41 = closure_5(tmp(5282).Button, obj4);
          cResult[24] = tmp5;
          cResult[25] = tmp41;
          tmp39 = tmp41;
        } else {
          tmp39 = cResult[25];
        }
        if (cResult[26] === tmp26) {
          if (cResult[27] === tmp33) {
            if (cResult[28] === tmp39) {
              if (cResult[29] === tmp12) {
                if (cResult[30] === tmp13) {
                  let tmp42;
                  if (cResult[31] === tmp21) {
                    tmp42 = cResult[32];
                  }
                  return tmp42;
                }
              }
            }
          }
        }
        const obj5 = { style: tmp12, children: items };
        items = [tmp13, tmp21, tmp26, tmp33, tmp39];
        const tmp45 = closure_6(View, obj5);
        cResult[26] = tmp26;
        cResult[27] = tmp33;
        cResult[28] = tmp39;
        cResult[29] = tmp12;
        cResult[30] = tmp13;
        cResult[31] = tmp21;
        cResult[32] = tmp45;
        tmp42 = tmp45;
      }
      const obj6 = { variant: "text-xs/semibold", color: str2, children: tmp16 };
      const tmp23 = closure_5(tmp(4833).Text, obj6);
      cResult[13] = str2;
      cResult[14] = tmp16;
      cResult[15] = tmp23;
      tmp21 = tmp23;
    }
    const items1 = [tmp4.card, null != awaiting && tmp4.cardAwaiting];
    cResult[6] = tmp4.card;
    cResult[7] = null != awaiting && tmp4.cardAwaiting;
    cResult[8] = items1;
    tmp12 = items1;
  }
  const fn = function l() {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: hasOwnProperty(VibegrationsSecretsSheetDefault, obj2), key: VibegrationsSecretsSheet.VIBEGRATIONS_SECRETS_SHEET_KEY };
    obj2 = { projectId, request };
    showActionSheet(obj);
  };
  cResult[0] = projectId;
  cResult[1] = request;
  cResult[2] = fn;
  tmp5 = fn;
}) : ((projectId) => {
  let intl3;
  let intl4;
  let sKNh1M;
  let string;
  let tmp13;
  projectId = projectId.projectId;
  const request = projectId.request;
  const awaiting = projectId.awaiting;
  let tmp = closure_7();
  const items = [projectId, request];
  const items1 = [request.fields];
  const callback = react.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: hasOwnProperty(VibegrationsSecretsSheetDefault, obj2), key: VibegrationsSecretsSheet.VIBEGRATIONS_SECRETS_SHEET_KEY };
    obj2 = { projectId, request };
    showActionSheet(obj);
  }, items);
  const items2 = [tmp.card, ];
  let cardAwaiting = null != awaiting;
  const memo = react.useMemo(() => {
    const fields = request.fields;
    return fields.map((id) => {
      const obj = { id: id.name, label: id.label, icon: projectId(closure_1_2[9]).KeyIcon };
      return obj;
    });
  }, items1);
  const tmp4 = closure_6;
  const tmp5 = View;
  if (cardAwaiting) {
    cardAwaiting = tmp.cardAwaiting;
  }
  let obj = { style: items2, children: null };
  items2[1] = cardAwaiting;
  let tmp6 = null;
  if (null != awaiting) {
    tmp6 = closure_5(projectId(16387).VibegrationsAwaitingPulseRing, {});
  }
  const items3 = [tmp6, , , , ];
  let str = "text-muted";
  const Text = projectId(4833).Text;
  if (null != awaiting) {
    str = "text-brand";
  }
  let obj2 = { variant: "text-xs/semibold", color: str, children: string(sKNh1M) };
  const intl = tmp11(1127).intl;
  string = intl.string;
  if (null != awaiting) {
    sKNh1M = request(3718).sKNh1M;
    tmp13 = request;
  } else {
    tmp13 = request;
    sKNh1M = request(3718)["/e28TK"];
  }
  items3[1] = closure_5(Text, obj2);
  if (null != request.note) {
    let note;
    if ("" !== request.note) {
      note = request.note;
    }
    const obj3 = { variant: "text-sm/normal", color: "text-default", children: note };
    items3[2] = closure_5(tmp16, obj3);
    const obj4 = { label: intl3.string(tmp13(3718)["/e28TK"]), size: "xs", items: memo };
    const TagGroup = tmp11(13980).TagGroup;
    intl3 = tmp11(1127).intl;
    items3[3] = closure_5(TagGroup, obj4);
    const obj5 = { variant: "primary", size: "sm", onPress: callback, text: intl4.string(tmp13(3718)["gVV+HX"]) };
    const Button = tmp11(5282).Button;
    intl4 = tmp11(1127).intl;
    items3[4] = closure_5(Button, obj5);
    obj.children = items3;
    return tmp4(tmp5, obj);
  }
  const intl2 = tmp11(1127).intl;
  note = intl2.string(tmp13(3718).jxvtin);
});
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsSecretRequestCard.tsx");

export default tmp4;
