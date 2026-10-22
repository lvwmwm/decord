// Module ID: 11797
// Function ID: 11798
// Name: ConjurePublishScheduleSection
// Dependencies: [19, 21, 558, 576, 11798, 5900, 1128, 3830, 5220, 5963, 587, 11799, 5230, 2]

// Module 11797 (ConjurePublishScheduleSection)
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import AlertModal from "AlertModal" /* 5900 */;
import useConjurePublishScheduleDefault from "useConjurePublishSchedule" /* 11798 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let c3;
let closure_4;
let hasOwnProperty;
({ jsx: c3, jsxs: closure_4, Fragment: hasOwnProperty } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePublishScheduleSection(projectId) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let items2;
  let remove;
  let tmp = projectId;
  let obj = projectId(576);
  const cResult = obj.c(25);
  projectId = projectId.projectId;
  const canEdit = projectId.canEdit;
  const tmp5 = useConjurePublishScheduleDefault(projectId, canEdit);
  importDefault = tmp5;
  if (canEdit) {
    if (cResult[0] === projectId) {
      let tmp7;
      let tmp9;
      let tmp12;
      if (cResult[1] === tmp5.remove) {
        tmp7 = cResult[2];
      }
      const _Symbol = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "heading-md/semibold", children: intl.string(_modDef3830.ptzKKH) };
        const Heading = tmp(5220).Heading;
        intl = tmp(1128).intl;
        const tmp11 = closure_3(Heading, obj2);
        cResult[3] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== tmp5.loading) {
        let tmp13 = null;
        if (tmp5.loading) {
          const obj3 = { variant: "text-sm/normal", accessibilityLiveRegion: "polite", children: intl2.string(_modDef3830["71yzD9"]) };
          const Text = tmp(5220).Text;
          intl2 = tmp(1128).intl;
          tmp13 = closure_3(Text, obj3);
        }
        cResult[4] = tmp5.loading;
        cResult[5] = tmp13;
        tmp12 = tmp13;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] === tmp7) {
        if (cResult[7] === tmp5.deleting) {
          if (cResult[8] === tmp5.loaded) {
            let tmp15;
            let tmp25;
            let tmp28;
            if (cResult[9] === tmp5.saved) {
              tmp15 = cResult[10];
            }
            if (cResult[11] !== tmp5.error) {
              let tmp26 = null;
              if (null != tmp5.error) {
                const obj4 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", accessibilityLiveRegion: "assertive", children: tmp5.error };
                tmp26 = closure_3(tmp(5220).Text, obj4);
              }
              cResult[11] = tmp5.error;
              cResult[12] = tmp26;
              tmp25 = tmp26;
            } else {
              tmp25 = cResult[12];
            }
            if (cResult[13] !== tmp5.status) {
              let tmp29 = null;
              if (null != tmp5.status) {
                const obj5 = { variant: "text-sm/normal", accessibilityLiveRegion: "polite", children: tmp5.status };
                tmp29 = closure_3(tmp(5220).Text, obj5);
              }
              cResult[13] = tmp5.status;
              cResult[14] = tmp29;
              tmp28 = tmp29;
            } else {
              tmp28 = cResult[14];
            }
            if (cResult[15] === tmp5.error) {
              if (cResult[16] === tmp5.loading) {
                let tmp31;
                if (cResult[17] === tmp5.retry) {
                  tmp31 = cResult[18];
                }
                if (cResult[19] === tmp12) {
                  if (cResult[20] === tmp15) {
                    if (cResult[21] === tmp25) {
                      if (cResult[22] === tmp28) {
                        let tmp35;
                        if (cResult[23] === tmp31) {
                          tmp35 = cResult[24];
                        }
                        return tmp35;
                      }
                    }
                  }
                }
                const obj6 = { spacing: nativeDefault.space.PX_16, children: items };
                const Stack2 = tmp(5963).Stack;
                items = [tmp9, tmp12, tmp15, tmp25, tmp28, tmp31];
                const tmp37 = closure_4(Stack2, obj6);
                cResult[19] = tmp12;
                cResult[20] = tmp15;
                cResult[21] = tmp25;
                cResult[22] = tmp28;
                cResult[23] = tmp31;
                cResult[24] = tmp37;
                tmp35 = tmp37;
              }
            }
            let tmp33 = null;
            if (!tmp5.loading) {
              tmp33 = null;
              if (null != tmp5.error) {
                const obj7 = { variant: "secondary", text: intl6.string(_modDef3830.iLTcFU), onPress: tmp5.retry };
                const Button2 = tmp(5230).Button;
                intl6 = tmp(1128).intl;
                tmp33 = closure_3(Button2, obj7);
              }
            }
            cResult[15] = tmp5.error;
            cResult[16] = tmp5.loading;
            cResult[17] = tmp5.retry;
            cResult[18] = tmp33;
            tmp31 = tmp33;
          }
        }
      }
      let tmp18Result2 = null;
      if (tmp5.loaded) {
        let tmp21;
        let tmp22;
        const tmp19 = closure_5;
        if (null == tmp5.saved) {
          const obj8 = { variant: "text-sm/normal", color: "text-subtle", children: intl4.string(_modDef3830.sg8WIV) };
          const Text3 = tmp(5220).Text;
          intl4 = tmp(1128).intl;
          tmp21 = closure_3(Text3, obj8);
          tmp22 = closure_3;
        } else {
          const obj9 = { variant: "text-sm/normal", color: "text-subtle", children: intl3.string(_modDef3830.ubcNP7) };
          const Text2 = tmp(5220).Text;
          intl3 = tmp(1128).intl;
          tmp21 = closure_3(Text2, obj9);
          tmp22 = closure_3;
        }
        const items1 = [tmp21, ];
        let tmp18Result = null;
        if (null != tmp5.saved) {
          const obj10 = { spacing: nativeDefault.space.PX_8, children: items2 };
          const Stack = tmp(5963).Stack;
          const tmpResult = tmp(11799);
          const result = tmpResult.publishScheduleDetails(tmp5.saved);
          items2 = [
            result.map((children, index) => {
                      const obj = { variant: "text-sm/normal", children };
                      return closure_1_3(projectId(dependencyMap[8]).Text, obj, index);
                    }),

          ];
          const obj11 = { variant: "secondary", text: intl5.string(_modDef3830.J7ZMMf), disabled: tmp5.deleting, onPress: tmp7 };
          const Button = tmp(5230).Button;
          intl5 = tmp(1128).intl;
          items2[1] = tmp22(Button, obj11);
          tmp18Result = tmp18(Stack, obj10);
        }
        const obj12 = { children: items1 };
        items1[1] = tmp18Result;
        tmp18Result2 = tmp18(tmp19, obj12);
      }
      cResult[6] = tmp7;
      cResult[7] = tmp5.deleting;
      cResult[8] = tmp5.loaded;
      cResult[9] = tmp5.saved;
      cResult[10] = tmp18Result2;
      tmp15 = tmp18Result2;
    }
    function confirmDelete() {
      let intl;
      let intl2;
      let intl3;
      const tmp = AlertModal;
      const showConfirmModal = tmp.showConfirmModal;
      const obj = { key: "ConjureDeletePublishSchedule-" + projectId, title: intl.string(_modDef3830["Tw/KaB"]), content: intl2.string(_modDef3830.qr1iIe), confirmText: intl3.string(_modDef3830.J7ZMMf), variant: "destructive", onConfirm: remove.remove };
      intl = intl7.intl;
      intl2 = intl7.intl;
      intl3 = intl7.intl;
      showConfirmModal(obj);
    }
    cResult[0] = projectId;
    cResult[1] = tmp5.remove;
    cResult[2] = confirmDelete;
    tmp7 = confirmDelete;
  } else {
    return null;
  }
}) : (function ConjurePublishScheduleSection(projectId) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let items2;
  let remove;
  projectId = projectId.projectId;
  const canEdit = projectId.canEdit;
  importDefault = undefined;
  let tmp = importDefault;
  const tmp3 = useConjurePublishScheduleDefault(projectId, canEdit);
  importDefault = tmp3;
  let tmp5Result4 = null;
  if (canEdit) {
    let obj = { spacing: nativeDefault.space.PX_16, children: items };
    const Stack = projectId(5963).Stack;
    const obj2 = { variant: "heading-md/semibold", children: intl.string(_modDef3830.ptzKKH) };
    const Heading = projectId(5220).Heading;
    intl = projectId(1128).intl;
    items = [closure_3(Heading, obj2), , , , , ];
    let tmp7Result = null;
    if (tmp3.loading) {
      const obj3 = { variant: "text-sm/normal", accessibilityLiveRegion: "polite", children: intl2.string(_modDef3830["71yzD9"]) };
      const Text = tmp6(5220).Text;
      intl2 = tmp6(1128).intl;
      tmp7Result = tmp7(Text, obj3);
    }
    items[1] = tmp7Result;
    let tmp5Result3 = null;
    if (tmp3.loaded) {
      let tmp7Result5;
      const tmp10 = closure_5;
      if (null == tmp3.saved) {
        const obj4 = { variant: "text-sm/normal", color: "text-subtle", children: intl4.string(_modDef3830.sg8WIV) };
        const Text3 = tmp6(5220).Text;
        intl4 = tmp6(1128).intl;
        tmp7Result5 = tmp7(Text3, obj4);
      } else {
        const obj5 = { variant: "text-sm/normal", color: "text-subtle", children: intl3.string(_modDef3830.ubcNP7) };
        const Text2 = tmp6(5220).Text;
        intl3 = tmp6(1128).intl;
        tmp7Result5 = tmp7(Text2, obj5);
      }
      const items1 = [tmp7Result5, ];
      let tmp5Result = null;
      if (null != tmp3.saved) {
        const obj6 = { spacing: nativeDefault.space.PX_8, children: items2 };
        const Stack2 = tmp6(5963).Stack;
        const tmp6Result = projectId(11799);
        const result = tmp6Result.publishScheduleDetails(tmp3.saved);
        items2 = [
          result.map((children, index) => {
                  const obj = { variant: "text-sm/normal", children };
                  return closure_1_3(projectId(dependencyMap[8]).Text, obj, index);
                }),

        ];
        const obj7 = {
          variant: "secondary",
          text: intl5.string(_modDef3830.J7ZMMf),
          disabled: tmp3.deleting,
          onPress: function confirmDelete() {
                  let intl;
                  let intl2;
                  let intl3;
                  const tmp = AlertModal;
                  const showConfirmModal = tmp.showConfirmModal;
                  const obj = { key: "ConjureDeletePublishSchedule-" + projectId, title: intl.string(_modDef3830["Tw/KaB"]), content: intl2.string(_modDef3830.qr1iIe), confirmText: intl3.string(_modDef3830.J7ZMMf), variant: "destructive", onConfirm: remove.remove };
                  intl = intl7.intl;
                  intl2 = intl7.intl;
                  intl3 = intl7.intl;
                  showConfirmModal(obj);
                }
        };
        const Button = tmp6(5230).Button;
        intl5 = tmp6(1128).intl;
        items2[1] = closure_3(Button, obj7);
        tmp5Result = tmp5(Stack2, obj6);
      }
      const obj8 = { children: items1 };
      items1[1] = tmp5Result;
      tmp5Result3 = tmp5(tmp10, obj8);
    }
    items[2] = tmp5Result3;
    let tmp7Result6 = null;
    if (null != tmp3.error) {
      const obj9 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", accessibilityLiveRegion: "assertive", children: tmp3.error };
      tmp7Result6 = tmp7(tmp6(5220).Text, obj9);
    }
    items[3] = tmp7Result6;
    let tmp7Result7 = null;
    if (null != tmp3.status) {
      const obj10 = { variant: "text-sm/normal", accessibilityLiveRegion: "polite", children: tmp3.status };
      tmp7Result7 = tmp7(tmp6(5220).Text, obj10);
    }
    items[4] = tmp7Result7;
    let tmp7Result8 = null;
    if (!tmp3.loading) {
      tmp7Result8 = null;
      if (null != tmp3.error) {
        const obj11 = { variant: "secondary", text: intl6.string(_modDef3830.iLTcFU), onPress: tmp3.retry };
        const Button2 = tmp6(5230).Button;
        intl6 = tmp6(1128).intl;
        tmp7Result8 = tmp7(Button2, obj11);
      }
    }
    items[5] = tmp7Result8;
    tmp5Result4 = tmp5(Stack, obj);
  }
  return tmp5Result4;
});
let result = size.fileFinishedImporting("modules/conjure/publish_schedule/native/ConjurePublishScheduleSection.tsx");

export default tmp4;
