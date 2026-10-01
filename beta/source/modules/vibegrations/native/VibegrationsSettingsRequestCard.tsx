// Module ID: 16386
// Function ID: 16387
// Name: VibegrationsSettingsRequestCard
// Dependencies: [19, 17, 21, 4836, 576, 4800, 16260, 4832, 1115, 3715, 5281, 2]
// Exports: default

// Module 16386 (VibegrationsSettingsRequestCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4800 */;
import VibegrationsSettingsSheet from "VibegrationsSettingsSheet" /* 16260 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const VibegrationsSettingsSheetDefault = VibegrationsSettingsSheet;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { card: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsSettingsRequestCard.tsx");

export default function VibegrationsSettingsRequestCard(projectId) {
  let intl;
  let intl3;
  projectId = projectId.projectId;
  const request = projectId.request;
  const items = [projectId, request];
  let tmp = closure_7();
  let obj = { style: tmp.card, children: null };
  const callback = react.useCallback(() => {
    let obj2;
    const tmp = ActionSheetActionCreators;
    const showActionSheet = tmp.showActionSheet;
    const obj = { content: hasOwnProperty(VibegrationsSettingsSheetDefault, obj2), key: VibegrationsSettingsSheet.VIBEGRATIONS_SETTINGS_SHEET_KEY };
    obj2 = { projectId, scopeKeys: request.keys, note: request.note, notifyAgent: true, isPreview: true };
    showActionSheet(obj);
  }, items);
  let obj2 = { variant: "text-xs/semibold", color: "text-muted", children: intl.string(request(3715).wgDhiQ) };
  const Text = projectId(4832).Text;
  intl = projectId(1115).intl;
  const items1 = [closure_5(Text, obj2), , ];
  const tmp3 = closure_6;
  const tmp4 = View;
  if (null != request.note) {
    let note;
    if ("" !== request.note) {
      note = request.note;
    }
    const obj3 = { variant: "text-sm/normal", color: "text-default", children: note };
    items1[1] = closure_5(tmp9, obj3);
    const obj4 = { variant: "secondary", size: "sm", onPress: callback, text: intl3.string(request(3715)["KO2xN+"]) };
    const Button = tmp6(5281).Button;
    intl3 = tmp6(1115).intl;
    items1[2] = closure_5(Button, obj4);
    obj.children = items1;
    return tmp3(tmp4, obj);
  }
  const intl2 = tmp6(1115).intl;
  note = intl2.string(tmp8(3715)["V+DBhs"]);
};
