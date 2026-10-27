// Module ID: 12211
// Function ID: 12212
// Name: ConjurePublishScheduleSection
// Dependencies: [19, 21, 558, 576, 12212, 5915, 1125, 3831, 5235, 5978, 587, 12213, 5245, 2]

// Module 12211 (ConjurePublishScheduleSection)
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1125 */;
import _modDef3831 from "module_3831" /* 3831 */;
import AlertModal from "AlertModal" /* 5915 */;
import useConjurePublishScheduleDefault from "useConjurePublishSchedule" /* 12212 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let c3;
let closure_4;
let hasOwnProperty;
({ jsx: c3, jsxs: closure_4, Fragment: hasOwnProperty } = Fragment);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePublishScheduleSection(projectId) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let items1;
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
    if (tmp5.loaded) {
      if (null == tmp5.saved) {
        if (null == tmp5.error) {
          if (null == tmp5.status) {
            return null;
          }
        }
      }
    }
    if (cResult[0] === projectId) {
      let tmp8;
      let tmp10;
      let tmp13;
      if (cResult[1] === tmp5.remove) {
        tmp8 = cResult[2];
      }
      const _Symbol = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "heading-md/semibold", children: intl.string(_modDef3831.ptzKKH) };
        const Heading = tmp(5235).Heading;
        intl = tmp(1125).intl;
        const tmp12 = closure_3(Heading, obj2);
        cResult[3] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== tmp5.loading) {
        let tmp14 = null;
        if (tmp5.loading) {
          const obj3 = { variant: "text-sm/normal", accessibilityLiveRegion: "polite", children: intl2.string(_modDef3831["71yzD9"]) };
          const Text = tmp(5235).Text;
          intl2 = tmp(1125).intl;
          tmp14 = closure_3(Text, obj3);
        }
        cResult[4] = tmp5.loading;
        cResult[5] = tmp14;
        tmp13 = tmp14;
      } else {
        tmp13 = cResult[5];
      }
      if (cResult[6] === tmp8) {
        if (cResult[7] === tmp5.deleting) {
          if (cResult[8] === tmp5.loaded) {
            let tmp16;
            let tmp22;
            let tmp25;
            if (cResult[9] === tmp5.saved) {
              tmp16 = cResult[10];
            }
            if (cResult[11] !== tmp5.error) {
              let tmp23 = null;
              if (null != tmp5.error) {
                const obj4 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", accessibilityLiveRegion: "assertive", children: tmp5.error };
                tmp23 = closure_3(tmp(5235).Text, obj4);
              }
              cResult[11] = tmp5.error;
              cResult[12] = tmp23;
              tmp22 = tmp23;
            } else {
              tmp22 = cResult[12];
            }
            if (cResult[13] !== tmp5.status) {
              let tmp26 = null;
              if (null != tmp5.status) {
                const obj5 = { variant: "text-sm/normal", accessibilityLiveRegion: "polite", children: tmp5.status };
                tmp26 = closure_3(tmp(5235).Text, obj5);
              }
              cResult[13] = tmp5.status;
              cResult[14] = tmp26;
              tmp25 = tmp26;
            } else {
              tmp25 = cResult[14];
            }
            if (cResult[15] === tmp5.error) {
              if (cResult[16] === tmp5.loading) {
                let tmp28;
                if (cResult[17] === tmp5.retry) {
                  tmp28 = cResult[18];
                }
                if (cResult[19] === tmp13) {
                  if (cResult[20] === tmp16) {
                    if (cResult[21] === tmp22) {
                      if (cResult[22] === tmp25) {
                        let tmp32;
                        if (cResult[23] === tmp28) {
                          tmp32 = cResult[24];
                        }
                        return tmp32;
                      }
                    }
                  }
                }
                const obj6 = { spacing: nativeDefault.space.PX_16, children: items };
                const Stack2 = tmp(5978).Stack;
                items = [tmp10, tmp13, tmp16, tmp22, tmp25, tmp28];
                const tmp34 = closure_4(Stack2, obj6);
                cResult[19] = tmp13;
                cResult[20] = tmp16;
                cResult[21] = tmp22;
                cResult[22] = tmp25;
                cResult[23] = tmp28;
                cResult[24] = tmp34;
                tmp32 = tmp34;
              }
            }
            let tmp30 = null;
            if (!tmp5.loading) {
              tmp30 = null;
              if (null != tmp5.error) {
                const obj7 = { variant: "secondary", text: intl5.string(_modDef3831.iLTcFU), onPress: tmp5.retry };
                const Button2 = tmp(5245).Button;
                intl5 = tmp(1125).intl;
                tmp30 = closure_3(Button2, obj7);
              }
            }
            cResult[15] = tmp5.error;
            cResult[16] = tmp5.loading;
            cResult[17] = tmp5.retry;
            cResult[18] = tmp30;
            tmp28 = tmp30;
          }
        }
      }
      let tmp18 = null;
      if (tmp5.loaded) {
        tmp18 = null;
        if (null != tmp5.saved) {
          const obj8 = { children: items1 };
          const obj9 = { variant: "text-sm/normal", color: "text-subtle", children: intl3.string(_modDef3831.ubcNP7) };
          const Text2 = tmp(5235).Text;
          intl3 = tmp(1125).intl;
          items1 = [closure_3(Text2, obj9), ];
          const obj10 = { spacing: nativeDefault.space.PX_8, children: items2 };
          const Stack = tmp(5978).Stack;
          const tmpResult = tmp(12213);
          const result = tmpResult.publishScheduleDetails(tmp5.saved);
          items2 = [
            result.map((children, index) => {
                      const obj = { variant: "text-sm/normal", children };
                      return closure_1_3(projectId(dependencyMap[8]).Text, obj, index);
                    }),

          ];
          const obj11 = { variant: "secondary", text: intl4.string(_modDef3831.J7ZMMf), disabled: tmp5.deleting, onPress: tmp8 };
          const Button = tmp(5245).Button;
          intl4 = tmp(1125).intl;
          items2[1] = closure_3(Button, obj11);
          items1[1] = closure_4(Stack, obj10);
          tmp18 = closure_4(closure_5, obj8);
        }
      }
      cResult[6] = tmp8;
      cResult[7] = tmp5.deleting;
      cResult[8] = tmp5.loaded;
      cResult[9] = tmp5.saved;
      cResult[10] = tmp18;
      tmp16 = tmp18;
    }
    function confirmDelete() {
      let intl;
      let intl2;
      let intl3;
      const tmp = AlertModal;
      const showConfirmModal = tmp.showConfirmModal;
      const obj = { key: "ConjureDeletePublishSchedule-" + projectId, title: intl.string(_modDef3831["Tw/KaB"]), content: intl2.string(_modDef3831.qr1iIe), confirmText: intl3.string(_modDef3831.J7ZMMf), variant: "destructive", onConfirm: remove.remove };
      intl = intl6.intl;
      intl2 = intl6.intl;
      intl3 = intl6.intl;
      showConfirmModal(obj);
    }
    cResult[0] = projectId;
    cResult[1] = tmp5.remove;
    cResult[2] = confirmDelete;
    tmp8 = confirmDelete;
  } else {
    return null;
  }
}) : (function ConjurePublishScheduleSection(projectId) {
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
    const Stack = projectId(5978).Stack;
    const obj2 = { variant: "heading-md/semibold", children: intl.string(_modDef3831.ptzKKH) };
    const Heading = projectId(5235).Heading;
    intl = projectId(1125).intl;
    items = [closure_3(Heading, obj2), , , , , ];
    let tmp8Result = null;
    if (tmp3.loading) {
      const obj3 = { variant: "text-sm/normal", accessibilityLiveRegion: "polite", children: intl2.string(_modDef3831["71yzD9"]) };
      const Text = tmp7(5235).Text;
      intl2 = tmp7(1125).intl;
      tmp8Result = tmp8(Text, obj3);
    }
    items[1] = tmp8Result;
    let tmp6Result = null;
    if (tmp3.loaded) {
      tmp6Result = null;
      if (null != tmp3.saved) {
        const obj4 = { children: items1 };
        const obj5 = { variant: "text-sm/normal", color: "text-subtle", children: intl3.string(_modDef3831.ubcNP7) };
        const Text2 = tmp7(5235).Text;
        intl3 = tmp7(1125).intl;
        items1 = [closure_3(Text2, obj5), ];
        const obj6 = { spacing: nativeDefault.space.PX_8, children: items2 };
        const Stack2 = tmp7(5978).Stack;
        const tmp7Result = projectId(12213);
        const result = tmp7Result.publishScheduleDetails(tmp3.saved);
        items2 = [
          result.map((children, index) => {
                  const obj = { variant: "text-sm/normal", children };
                  return closure_1_3(projectId(dependencyMap[8]).Text, obj, index);
                }),

        ];
        const obj7 = {
          variant: "secondary",
          text: intl4.string(_modDef3831.J7ZMMf),
          disabled: tmp3.deleting,
          onPress: function confirmDelete() {
                  let intl;
                  let intl2;
                  let intl3;
                  const tmp = AlertModal;
                  const showConfirmModal = tmp.showConfirmModal;
                  const obj = { key: "ConjureDeletePublishSchedule-" + projectId, title: intl.string(_modDef3831["Tw/KaB"]), content: intl2.string(_modDef3831.qr1iIe), confirmText: intl3.string(_modDef3831.J7ZMMf), variant: "destructive", onConfirm: remove.remove };
                  intl = intl6.intl;
                  intl2 = intl6.intl;
                  intl3 = intl6.intl;
                  showConfirmModal(obj);
                }
        };
        const Button = tmp7(5245).Button;
        intl4 = tmp7(1125).intl;
        items2[1] = closure_3(Button, obj7);
        items1[1] = closure_4(Stack2, obj6);
        tmp6Result = tmp6(closure_5, obj4);
      }
    }
    items[2] = tmp6Result;
    let tmp8Result4 = null;
    if (null != tmp3.error) {
      const obj8 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", accessibilityLiveRegion: "assertive", children: tmp3.error };
      tmp8Result4 = tmp8(tmp7(5235).Text, obj8);
    }
    items[3] = tmp8Result4;
    let tmp8Result5 = null;
    if (null != tmp3.status) {
      const obj9 = { variant: "text-sm/normal", accessibilityLiveRegion: "polite", children: tmp3.status };
      tmp8Result5 = tmp8(tmp7(5235).Text, obj9);
    }
    items[4] = tmp8Result5;
    let tmp8Result6 = null;
    if (!tmp3.loading) {
      tmp8Result6 = null;
      if (null != tmp3.error) {
        const obj10 = { variant: "secondary", text: intl5.string(_modDef3831.iLTcFU), onPress: tmp3.retry };
        const Button2 = tmp7(5245).Button;
        intl5 = tmp7(1125).intl;
        tmp8Result6 = tmp8(Button2, obj10);
      }
    }
    items[5] = tmp8Result6;
    tmp6Result2 = tmp6(Stack, obj);
  }
  return tmp4;
});
let result = size.fileFinishedImporting("modules/conjure/publish_schedule/native/ConjurePublishScheduleSection.tsx");

export default tmp4;
