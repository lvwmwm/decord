// Module ID: 12210
// Function ID: 12211
// Name: ConjureAttachmentPills
// Dependencies: [19, 17, 21, 4945, 587, 558, 576, 11633, 5622, 6853, 1128, 3820, 5195, 2]

// Module 12210 (ConjureAttachmentPills)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import conjureAttachmentRequests from "conjureAttachmentRequests" /* 11633 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4945 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

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
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAttachmentPills(projectId) {
  let closure_2;
  let tmp3;
  let tmp5;
  let obj = projectId(576);
  const cResult = obj.c(12);
  projectId = projectId.projectId;
  const attachments = projectId.attachments;
  const tmp2 = closure_6();
  let closure_1 = tmp2;
  if (cResult[0] !== projectId) {
    const fn = function o(arg0) {
      let obj = conjureAttachmentRequests;
      const attachmentUrl = obj.getAttachmentUrl(projectId, arg0);
      const nextPromise = attachmentUrl.then((result) => {
        const obj = closure_1_1(closure_1_2[8]);
        return obj.openURL(result);
      });
      nextPromise.catch(() => {

      });
    };
    cResult[0] = projectId;
    cResult[1] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  dependencyMap = tmp3;
  if (cResult[2] === attachments) {
    if (cResult[3] === tmp3) {
      if (cResult[4] === tmp2.attachmentPill) {
        tmp5 = cResult[5];
      }
      if (cResult[9] === tmp2.attachmentPills) {
        let tmp8;
        if (cResult[10] === tmp5) {
          tmp8 = cResult[11];
        }
        return tmp8;
      }
      const tmp11 = <View style={tmp4}>{tmp5}</View>;
      cResult[9] = tmp2.attachmentPills;
      cResult[10] = tmp5;
      cResult[11] = tmp11;
      tmp8 = tmp11;
    }
  }
  if (cResult[6] === tmp3) {
    let tmp6;
    if (cResult[7] === tmp2.attachmentPill) {
      tmp6 = cResult[8];
    }
    const mapped = attachments.map(tmp6);
    cResult[2] = attachments;
    cResult[3] = tmp3;
    cResult[4] = tmp2.attachmentPill;
    cResult[5] = mapped;
    tmp5 = mapped;
  }
  const fn2 = function p(id, arg1) {
    let intl2;
    let obj6;
    let tmp12;
    if (null != id.id) {
      const Card = projectId(closure_2[9]).Card;
      const intl = projectId(closure_2[10]).intl;
      const obj2 = { name: id.name };
      tmp12 = <Card key={arg0.id} style={closure_1.attachmentPill} onPress={function onPress() {
        return closure_2(id.id);
      }} accessibilityLabel={intl.formatToPlainString(closure_1(closure_2[11]).GtNukg, obj2)}>{null}</Card>;
    } else {
      ({ variant: "text-xs/medium", color: "text-muted", children: intl2.formatToPlainString(closure_1(closure_2[11]).nd81jR, obj6) });
      const Text = projectId(closure_2[12]).Text;
      intl2 = projectId(closure_2[10]).intl;
      const _HermesInternal = HermesInternal;
      obj6 = { name: id.name };
      tmp12 = <View key={"" + arg0.name + "-" + arg1} style={closure_1.attachmentPill}>{null}</View>;
    }
    return tmp12;
  };
  cResult[6] = tmp3;
  cResult[7] = tmp2.attachmentPill;
  cResult[8] = fn2;
  tmp6 = fn2;
}) : (function ConjureAttachmentPills(projectId) {
  projectId = projectId.projectId;
  const attachments = projectId.attachments;
  const tmp = closure_6();
  let closure_1 = tmp;
  const items = [projectId];
  let closure_2 = react.useCallback((arg0) => {
    let obj = conjureAttachmentRequests;
    const attachmentUrl = obj.getAttachmentUrl(projectId, arg0);
    const nextPromise = attachmentUrl.then((result) => {
      const obj = closure_1_1(closure_1_2[8]);
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
      const Card = projectId(closure_2[9]).Card;
      const intl = projectId(closure_2[10]).intl;
      const obj2 = { name: id.name };
      tmp12 = <Card key={arg0.id} style={closure_1.attachmentPill} onPress={function onPress() {
        return closure_2(id.id);
      }} accessibilityLabel={intl.formatToPlainString(closure_1(closure_2[11]).GtNukg, obj2)}>{null}</Card>;
    } else {
      ({ variant: "text-xs/medium", color: "text-muted", children: intl2.formatToPlainString(closure_1(closure_2[11]).nd81jR, obj6) });
      const Text = projectId(closure_2[12]).Text;
      intl2 = projectId(closure_2[10]).intl;
      const _HermesInternal = HermesInternal;
      obj6 = { name: id.name };
      tmp12 = <View key={"" + arg0.name + "-" + arg1} style={closure_1.attachmentPill}>{null}</View>;
    }
    return tmp12;
  })}</View>;
});
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureAttachmentPills.tsx");

export default tmp3;
