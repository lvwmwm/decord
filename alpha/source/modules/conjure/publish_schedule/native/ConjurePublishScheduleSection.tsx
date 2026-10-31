// Module ID: 12500
// Function ID: 12501
// Name: ConjurePublishScheduleSection
// Dependencies: [19, 21, 12501, 6027, 575, 5624, 1113, 3868, 12502, 5634, 5964, 2]
// Exports: default

// Module 12500 (ConjurePublishScheduleSection)
import intl6 from "intl" /* 1113 */;
import AlertModal from "AlertModal" /* 5964 */;
import useConjurePublishScheduleDefault from "useConjurePublishSchedule" /* 12501 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let importDefault;

let c3;
let closure_4;
let hasOwnProperty;
let tmp;
const nativeDefault = tmp(575);
const _modDef3868 = tmp(3868);
({ jsx: c3, jsxs: closure_4, Fragment: hasOwnProperty } = Fragment);
let result = size.fileFinishedImporting("modules/conjure/publish_schedule/native/ConjurePublishScheduleSection.tsx");

export default function ConjurePublishScheduleSection(projectId) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let items1;
  let items2;
  let remove;
  projectId = projectId.projectId;
  const canEdit = projectId.canEdit;
  importDefault = undefined;
  let tmp = importDefault;
  const tmp3 = useConjurePublishScheduleDefault(projectId, canEdit);
  importDefault = tmp3;
  let tmp4 = null;
  if (canEdit) {
    if (tmp3.loaded) {
      if (null == tmp3.saved) {
        let tmp6Result2;
        if (null == tmp3.error) {
          tmp6Result2 = null;
        }
        tmp4 = tmp6Result2;
      }
    }
    let obj = { spacing: nativeDefault.space.PX_16, children: items };
    const Stack = projectId(6027).Stack;
    const obj2 = { variant: "heading-md/semibold", children: intl.string(_modDef3868.ptzKKH) };
    const Heading = projectId(5624).Heading;
    intl = projectId(1113).intl;
    items = [closure_3(Heading, obj2), , , , , ];
    let tmp8Result = null;
    if (tmp3.loading) {
      const obj3 = { variant: "text-sm/normal", accessibilityLiveRegion: "polite", children: intl2.string(_modDef3868["71yzD9"]) };
      const Text = tmp7(5624).Text;
      intl2 = tmp7(1113).intl;
      tmp8Result = tmp8(Text, obj3);
    }
    items[1] = tmp8Result;
    let tmp6Result = null;
    if (tmp3.loaded) {
      tmp6Result = null;
      if (null != tmp3.saved) {
        const obj4 = { children: items1 };
        const obj5 = { variant: "text-sm/normal", color: "text-subtle", children: intl3.string(_modDef3868.ubcNP7) };
        const Text2 = tmp7(5624).Text;
        intl3 = tmp7(1113).intl;
        items1 = [closure_3(Text2, obj5), ];
        const obj6 = { spacing: nativeDefault.space.PX_8, children: items2 };
        const Stack2 = tmp7(6027).Stack;
        const tmp7Result = projectId(12502);
        const result = tmp7Result.publishScheduleDetails(tmp3.saved);
        items2 = [
          result.map((children, index) => {
                  const obj = { variant: "text-sm/normal", children };
                  return closure_1_3(projectId(dependencyMap[5]).Text, obj, index);
                }),

        ];
        const obj7 = {
          variant: "secondary",
          text: intl4.string(_modDef3868.J7ZMMf),
          disabled: tmp3.deleting,
          onPress: function confirmDelete() {
                  let intl;
                  let intl2;
                  let intl3;
                  const tmp = AlertModal;
                  const showConfirmModal = tmp.showConfirmModal;
                  const obj = { key: "ConjureDeletePublishSchedule-" + projectId, title: intl.string(_modDef3868["Tw/KaB"]), content: intl2.string(_modDef3868.qr1iIe), confirmText: intl3.string(_modDef3868.J7ZMMf), variant: "destructive", onConfirm: remove.remove };
                  intl = intl6.intl;
                  intl2 = intl6.intl;
                  intl3 = intl6.intl;
                  showConfirmModal(obj);
                }
        };
        const Button = tmp7(5634).Button;
        intl4 = tmp7(1113).intl;
        items2[1] = closure_3(Button, obj7);
        items1[1] = closure_4(Stack2, obj6);
        tmp6Result = tmp6(closure_5, obj4);
      }
    }
    items[2] = tmp6Result;
    let tmp8Result4 = null;
    if (null != tmp3.error) {
      const obj8 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", accessibilityLiveRegion: "assertive", children: tmp3.error };
      tmp8Result4 = tmp8(tmp7(5624).Text, obj8);
    }
    items[3] = tmp8Result4;
    let tmp8Result5 = null;
    if (null != tmp3.status) {
      const obj9 = { variant: "text-sm/normal", accessibilityLiveRegion: "polite", children: tmp3.status };
      tmp8Result5 = tmp8(tmp7(5624).Text, obj9);
    }
    items[4] = tmp8Result5;
    let tmp8Result6 = null;
    if (!tmp3.loading) {
      tmp8Result6 = null;
      if (null != tmp3.error) {
        const obj10 = { variant: "secondary", text: intl5.string(_modDef3868.iLTcFU), onPress: tmp3.retry };
        const Button2 = tmp7(5634).Button;
        intl5 = tmp7(1113).intl;
        tmp8Result6 = tmp8(Button2, obj10);
      }
    }
    items[5] = tmp8Result6;
    tmp6Result2 = tmp6(Stack, obj);
  }
  return tmp4;
};
