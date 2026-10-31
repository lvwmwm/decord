// Module ID: 12645
// Function ID: 12646
// Name: ConjureAttachmentPills
// Dependencies: [19, 17, 21, 5014, 575, 12488, 5709, 6977, 1113, 3868, 5624, 2]
// Exports: default

// Module 12645 (ConjureAttachmentPills)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import conjureAttachmentRequests from "conjureAttachmentRequests" /* 12488 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { attachmentPills: obj2, attachmentPill: obj3 };
obj2 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureAttachmentPills.tsx");

export default function ConjureAttachmentPills(projectId) {
  projectId = projectId.projectId;
  const attachments = projectId.attachments;
  const tmp = closure_6();
  let closure_1 = tmp;
  const items = [projectId];
  let closure_2 = react.useCallback((arg0) => {
    let obj = conjureAttachmentRequests;
    const attachmentUrl = obj.getAttachmentUrl(projectId, arg0);
    const nextPromise = attachmentUrl.then((result) => {
      const obj = closure_1_1(closure_1_2[6]);
      return obj.openURL(result);
    });
    nextPromise.catch(() => {

    });
  }, items);
  return <View style={tmp.attachmentPills}>{attachments.map((id, index) => {
    let intl2;
    let obj6;
    let tmp12;
    if (null != id.id) {
      const Card = projectId(closure_2[7]).Card;
      const intl = projectId(closure_2[8]).intl;
      const obj2 = { name: id.name };
      tmp12 = <Card key={arg0.id} style={closure_1.attachmentPill} onPress={function onPress() {
        return closure_2(id.id);
      }} accessibilityLabel={intl.formatToPlainString(closure_1(closure_2[9]).GtNukg, obj2)}>{null}</Card>;
    } else {
      ({ variant: "text-xs/medium", color: "text-muted", children: intl2.formatToPlainString(closure_1(closure_2[9]).nd81jR, obj6) });
      const Text = projectId(closure_2[10]).Text;
      intl2 = projectId(closure_2[8]).intl;
      const _HermesInternal = HermesInternal;
      obj6 = { name: id.name };
      tmp12 = <View key={"" + arg0.name + "-" + arg1} style={closure_1.attachmentPill}>{null}</View>;
    }
    return tmp12;
  })}</View>;
};
