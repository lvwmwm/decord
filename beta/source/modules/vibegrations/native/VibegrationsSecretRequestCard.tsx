// Module ID: 16383
// Function ID: 16384
// Name: VibegrationsSecretRequestCard
// Dependencies: [19, 17, 21, 4836, 576, 4800, 16384, 6377, 16385, 4832, 1115, 3715, 13978, 5281, 2]
// Exports: default

// Module 16383 (VibegrationsSecretRequestCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4800 */;
import VibegrationsSecretsSheet from "VibegrationsSecretsSheet" /* 16384 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const VibegrationsSecretsSheetDefault = VibegrationsSecretsSheet;

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
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsSecretRequestCard.tsx");

export default function VibegrationsSecretRequestCard(projectId) {
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
      const obj = { id: id.name, label: id.label, icon: projectId(closure_1_2[7]).KeyIcon };
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
    tmp6 = closure_5(projectId(16385).VibegrationsAwaitingPulseRing, {});
  }
  const items3 = [tmp6, , , , ];
  let str = "text-muted";
  const Text = projectId(4832).Text;
  if (null != awaiting) {
    str = "text-brand";
  }
  let obj2 = { variant: "text-xs/semibold", color: str, children: string(sKNh1M) };
  const intl = tmp11(1115).intl;
  string = intl.string;
  if (null != awaiting) {
    sKNh1M = request(3715).sKNh1M;
    tmp13 = request;
  } else {
    tmp13 = request;
    sKNh1M = request(3715)["/e28TK"];
  }
  items3[1] = closure_5(Text, obj2);
  if (null != request.note) {
    let note;
    if ("" !== request.note) {
      note = request.note;
    }
    const obj3 = { variant: "text-sm/normal", color: "text-default", children: note };
    items3[2] = closure_5(tmp16, obj3);
    const obj4 = { label: intl3.string(tmp13(3715)["/e28TK"]), size: "xs", items: memo };
    const TagGroup = tmp11(13978).TagGroup;
    intl3 = tmp11(1115).intl;
    items3[3] = closure_5(TagGroup, obj4);
    const obj5 = { variant: "primary", size: "sm", onPress: callback, text: intl4.string(tmp13(3715)["gVV+HX"]) };
    const Button = tmp11(5281).Button;
    intl4 = tmp11(1115).intl;
    items3[4] = closure_5(Button, obj5);
    obj.children = items3;
    return tmp4(tmp5, obj);
  }
  const intl2 = tmp11(1115).intl;
  note = intl2.string(tmp13(3715).jxvtin);
};
