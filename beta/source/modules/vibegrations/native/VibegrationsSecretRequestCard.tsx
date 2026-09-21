// Module ID: 17046
// Function ID: 17047
// Name: VibegrationsSecretRequestCard
// Dependencies: [19, 17, 21, 4758, 580, 558, 568, 4725, 17047, 4754, 1119, 3682, 5188, 2]

// Module 17046 (VibegrationsSecretRequestCard)
import nativeDefault from "native" /* 580 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4725 */;
import Text_Text from "Text/Text" /* 4754 */;
import VibegrationsSecretsSheet from "VibegrationsSecretsSheet" /* 17047 */;
import noop from "module_19" /* 19 */;

const VibegrationsSecretsSheetDefault = VibegrationsSecretsSheet;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4758);
let obj2 = { card: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 }, chips: null, chip: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj2.chips = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
let obj4 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj2.chip = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsSecretRequestCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  const cResult = projectId(568).c(24);
  projectId = projectId.projectId;
  let chip = projectId.request;
  const tmp4 = closure_7();
  dependencyMap = tmp4;
  if (cResult[0] === projectId) {
    if (cResult[1] === chip) {
      let tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      let obj2 = { variant: "text-xs/semibold", color: "text-muted", children: null };
      const intl = tmp(1119).intl;
      obj2.children = intl.string(chip(3682)["/e28TK"]);
      const tmp10 = closure_5(tmp(4754).Text, obj2);
      cResult[3] = tmp10;
      let tmp7 = tmp10;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== chip.note) {
      if (null == chip.note) {
        const intl2 = tmp(1119).intl;
        let note = intl2.string(chip(3682).jxvtin);
        cResult[4] = chip.note;
        cResult[5] = note;
      }
      note = chip.note;
    } else {
      if (cResult[6] !== cResult[5]) {
        const obj3 = { variant: "text-sm/normal", color: "text-default", children: tmp11 };
        const tmp17 = closure_5(tmp(4754).Text, obj3);
        cResult[6] = tmp11;
        cResult[7] = tmp17;
        let tmp15 = tmp17;
      } else {
        tmp15 = cResult[7];
      }
      if (cResult[8] === chip.fields) {
        if (cResult[9] === tmp4.chip) {
          if (cResult[13] === tmp4.chips) {
            if (cResult[14] === tmp19) {
              let tmp23 = cResult[15];
            }
            const _Symbol2 = Symbol;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = tmp(1119).intl;
              const stringResult = intl3.string(chip(3682)["gVV+HX"]);
              cResult[16] = stringResult;
              let tmp27 = stringResult;
            } else {
              tmp27 = cResult[16];
            }
            if (cResult[17] !== tmp5) {
              const obj4 = { variant: "secondary", size: "sm", onPress: tmp5, text: tmp27 };
              const tmp32 = closure_5(tmp(5188).Button, obj4);
              cResult[17] = tmp5;
              cResult[18] = tmp32;
              let tmp30 = tmp32;
            } else {
              tmp30 = cResult[18];
            }
            if (cResult[19] === tmp4.card) {
              if (cResult[20] === tmp30) {
                if (cResult[21] === tmp15) {
                  if (cResult[22] === tmp23) {
                    let tmp33 = cResult[23];
                  }
                  return tmp33;
                }
              }
            }
            const obj5 = { style: tmp4.card, children: null };
            const items = [tmp7, tmp15, tmp23, tmp30];
            obj5.children = items;
            const tmp36 = closure_6(View, obj5);
            cResult[19] = tmp4.card;
            cResult[20] = tmp30;
            cResult[21] = tmp15;
            cResult[22] = tmp23;
            cResult[23] = tmp36;
            tmp33 = tmp36;
          }
          const obj6 = { style: tmp18, children: cResult[10] };
          const tmp26 = closure_5(View, obj6);
          cResult[13] = tmp4.chips;
          cResult[14] = cResult[10];
          cResult[15] = tmp26;
          tmp23 = tmp26;
        }
      }
      if (cResult[11] !== tmp4.chip) {
        class S {
          constructor(arg0) {
            obj = { style: closure_2.chip, children: null };
            obj1 = { variant: "text-xs/medium", color: "text-default", children: projectId.label };
            obj.children = jsx(closure_0(closure_2[9]).Text, obj1);
            return jsx(View, obj, projectId.name);
          }
        }
        cResult[11] = tmp4.chip;
        cResult[12] = S;
        const tmp20 = S;
      } else {
        class S {
          constructor(arg0) {
            obj = { style: closure_2.chip, children: null };
            obj1 = { variant: "text-xs/medium", color: "text-default", children: projectId.label };
            obj.children = jsx(closure_0(closure_2[9]).Text, obj1);
            return jsx(View, obj, projectId.name);
          }
        }
      }
      const fields = chip.fields;
      const mapped = fields.map(tmp20);
      cResult[8] = chip.fields;
      chip = tmp4.chip;
      cResult[9] = chip;
      cResult[10] = mapped;
    }
  }
  const fn = function o() {
    const obj2 = { content: hasOwnProperty(VibegrationsSecretsSheetDefault, { projectId, request: chip }), key: VibegrationsSecretsSheet.VIBEGRATIONS_SECRETS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  };
  cResult[0] = projectId;
  cResult[1] = chip;
  cResult[2] = fn;
  tmp5 = fn;
}) : ((projectId) => {
  projectId = projectId.projectId;
  const request = projectId.request;
  const tmp = closure_7();
  dependencyMap = tmp;
  const items = [projectId, request];
  let obj = { style: tmp.card, children: null };
  const callback = noop.useCallback(() => {
    const obj2 = { content: hasOwnProperty(VibegrationsSecretsSheetDefault, { projectId, request }), key: VibegrationsSecretsSheet.VIBEGRATIONS_SECRETS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items);
  let obj2 = { variant: "text-xs/semibold", color: "text-muted", children: null };
  const intl = projectId(1119).intl;
  obj2.children = intl.string(request(3682)["/e28TK"]);
  const items1 = [closure_5(projectId(4754).Text, obj2), , , ];
  if (null != request.note) {
    if ("" !== request.note) {
      let note = request.note;
    }
    const obj3 = { variant: "text-sm/normal", color: "text-default", children: note };
    items1[1] = tmp5(tmp9, obj3);
    const obj4 = { style: tmp.chips, children: null };
    const fields = request.fields;
    obj4.children = fields.map((children) => {
      const obj = { style: chip.chip, children: hasOwnProperty(Text_Text.Text, { variant: "text-xs/medium", color: "text-default", children: children.label }) };
      return hasOwnProperty(View, obj, children.name);
    });
    items1[2] = tmp5(tmp4, obj4);
    const obj5 = { variant: "secondary", size: "sm", onPress: callback, text: null };
    const intl3 = tmp6(1119).intl;
    obj5.text = intl3.string(tmp8(3682)["gVV+HX"]);
    items1[3] = tmp5(tmp6(5188).Button, obj5);
    obj.children = items1;
    return closure_6(tmp4, obj);
  }
  const intl2 = tmp6(1119).intl;
  note = intl2.string(tmp8(3682).jxvtin);
});
