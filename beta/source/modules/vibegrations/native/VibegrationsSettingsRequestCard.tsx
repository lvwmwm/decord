// Module ID: 17059
// Function ID: 17060
// Name: VibegrationsSettingsRequestCard
// Dependencies: [19, 17, 13400, 21, 4790, 580, 558, 568, 504, 4757, 17003, 4786, 1119, 3714, 5220, 2]

// Module 17059 (VibegrationsSettingsRequestCard)
import nativeDefault from "native" /* 580 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4757 */;
import Text_Text from "Text/Text" /* 4786 */;
import VibegrationsSettingsSheet from "VibegrationsSettingsSheet" /* 17003 */;
import noop from "module_19" /* 19 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 13400 */;

const VibegrationsSettingsSheetDefault = VibegrationsSettingsSheet;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { card: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 }, chips: null, chip: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj2.chips = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
let obj4 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj2.chip = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsSettingsRequestCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  const cResult = projectId(568).c(37);
  projectId = projectId.projectId;
  const request = projectId.request;
  const tmp4 = closure_8();
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VibegrationsConnectionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    const fn = function p() {
      return VibegrationsConnectionStore.getSettings(projectId);
    };
    cResult[1] = projectId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = projectId(568);
  const stateFromStores = projectId(504).useStateFromStores(first, tmp7);
  if (cResult[3] === projectId) {
    if (cResult[4] === request) {
      let schema;
      if (stateFromStores != null) {
        schema = stateFromStores.schema;
      }
      if (cResult[5] === schema) {
        if (cResult[6] === tmp4.card) {
          if (cResult[7] === tmp4.chip) {
            const _Symbol = Symbol;
            if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(1119).intl;
              const stringResult = intl.string(request(3714)["KO2xN+"]);
              cResult[27] = stringResult;
              let tmp22 = stringResult;
            } else {
              tmp22 = cResult[27];
            }
            if (cResult[28] !== tmp12) {
              let obj2 = { variant: "secondary", size: "sm", onPress: tmp12, text: tmp22 };
              const tmp27 = closure_6(tmp(5220).Button, obj2);
              cResult[28] = tmp12;
              cResult[29] = tmp27;
              let tmp25 = tmp27;
            } else {
              tmp25 = cResult[29];
            }
            if (cResult[30] === tmp11) {
              if (cResult[31] === tmp13) {
                if (cResult[32] === tmp14) {
                  if (cResult[33] === tmp15) {
                    if (cResult[34] === tmp16) {
                      if (cResult[35] === tmp25) {
                        let tmp28 = cResult[36];
                      }
                      return tmp28;
                    }
                  }
                }
              }
            }
            const obj3 = { style: tmp13, children: null };
            const items1 = [tmp14, tmp15, tmp16, tmp25];
            obj3.children = items1;
            const tmp30 = closure_7(tmp11, obj3);
            cResult[30] = tmp11;
            cResult[31] = tmp13;
            cResult[32] = tmp14;
            cResult[33] = tmp15;
            cResult[34] = tmp16;
            cResult[35] = tmp25;
            cResult[36] = tmp30;
            tmp28 = tmp30;
          }
        }
      }
    }
  }
  let schema1;
  if (stateFromStores != null) {
    schema1 = stateFromStores.schema;
  }
  if (cResult[15] !== schema1) {
    let schema2;
    if (stateFromStores != null) {
      schema2 = stateFromStores.schema;
    }
    class D {
      constructor(arg0) {
        closure_0 = projectId;
        found = undefined;
        if (closure_3 != null) {
          schema = closure_3.schema;
          found = schema.find((key) => key.key === closure_0);
        }
        return found;
      }
    }
    cResult[15] = schema2;
    cResult[16] = D;
    let tmp18 = D;
  } else {
    tmp18 = cResult[16];
  }
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor(arg0) {
        return null != projectId;
      }
    }
    class D {
      constructor(arg0) {
        closure_0 = projectId;
        found = undefined;
        if (closure_3 != null) {
          schema = closure_3.schema;
          found = schema.find((key) => key.key === closure_0);
        }
        return found;
      }
    }
    const tmp20 = O;
  } else {
    class O {
      constructor(arg0) {
        return null != projectId;
      }
    }
  }
  const keys = request.keys;
  if (keys == null) {
    class O {
      constructor(arg0) {
        return null != projectId;
      }
    }
  }
  const mapped = keys.map(tmp18);
  let found = mapped.filter(tmp20);
  if (cResult[18] === projectId) {
    class O {
      constructor(arg0) {
        return null != projectId;
      }
    }
  }
  class R {
    constructor() {
      obj = closure_0(closure_2[9]);
      obj1 = { content: null, key: closure_0(closure_2[10]).VIBEGRATIONS_SETTINGS_SHEET_KEY };
      obj4 = { projectId, scopeKeys: request.keys, note: request.note, notifyAgent: true, isPreview: true };
      obj1.content = jsx(closure_1(closure_2[10]), obj4);
      showActionSheetResult = obj.showActionSheet(obj1);
      return;
    }
  }
  cResult[18] = projectId;
  cResult[19] = request.keys;
  cResult[20] = request.note;
  cResult[21] = R;
}) : ((projectId) => {
  projectId = projectId.projectId;
  const request = projectId.request;
  const tmp = closure_8();
  dependencyMap = tmp;
  const items = [VibegrationsConnectionStore];
  noop = projectId(504).useStateFromStores(items, () => VibegrationsConnectionStore.getSettings(projectId));
  let keys = request.keys;
  if (keys == null) {
    keys = [];
  }
  const mapped = keys.map((item) => {
    closure_0 = item;
    let found;
    if (schema != null) {
      schema = schema.schema;
      found = schema.find((key) => key.key === closure_0);
    }
    return found;
  });
  let found = mapped.filter((item) => null != item);
  const items1 = [projectId, request];
  let obj2 = { style: tmp.card, children: null };
  const callback = noop.useCallback(() => {
    const obj2 = { content: timestampProducer(VibegrationsSettingsSheetDefault, { projectId, scopeKeys: request.keys, note: request.note, notifyAgent: true, isPreview: true }), key: VibegrationsSettingsSheet.VIBEGRATIONS_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items1);
  const obj3 = { variant: "text-xs/semibold", color: "text-muted", children: null };
  const intl = tmp2(1119).intl;
  obj3.children = intl.string(request(3714).wgDhiQ);
  const items2 = [closure_6(projectId(4786).Text, obj3), , , ];
  if (null != request.note) {
    if ("" !== request.note) {
      let note = request.note;
    }
    const obj4 = { variant: "text-sm/normal", color: "text-default", children: note };
    items2[1] = tmp7(tmp9, obj4);
    let tmp7Result = null;
    if (found.length > 0) {
      const obj5 = {
        style: tmp.chips,
        children: found.map((children) => {
              const obj = { style: chip.chip, children: timestampProducer(Text_Text.Text, { variant: "text-xs/medium", color: "text-default", children: children.label }) };
              return timestampProducer(View, obj, children.key);
            })
      };
      tmp7Result = tmp7(tmp6, obj5);
    }
    items2[2] = tmp7Result;
    const obj6 = { variant: "secondary", size: "sm", onPress: callback, text: null };
    const intl3 = tmp2(1119).intl;
    obj6.text = intl3.string(tmp8(3714)["KO2xN+"]);
    items2[3] = tmp7(tmp2(5220).Button, obj6);
    obj2.children = items2;
    return closure_7(tmp6, obj2);
  }
  const intl2 = tmp2(1119).intl;
  note = intl2.string(tmp8(3714)["V+DBhs"]);
});
