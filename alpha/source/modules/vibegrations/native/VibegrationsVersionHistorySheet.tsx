// Module ID: 16615
// Function ID: 16616
// Name: VibegrationsVersionHistorySheet
// Dependencies: [32, 19, 17, 12904, 21, 4890, 587, 7126, 5713, 1126, 3723, 558, 576, 1618, 4854, 4886, 5993, 6074, 6644, 6701, 6112, 2]
// Exports: authoredAgo, confirmRestoreVersion

// Module 16615 (VibegrationsVersionHistorySheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import AlertModal from "AlertModal" /* 5713 */;
import NotificationCenterUtils from "NotificationCenterUtils" /* 7126 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 12904 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, projectId;

let hasOwnProperty;
let metroRequire;
let obj2;
let _slicedToArray = _slicedToArray_mod;
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
const fetchSourceHistory = VibegrationsConnectionStore.fetchSourceHistory;
const jsx = Fragment.jsx;
const VibegrationsVersionHistorySheet = "VibegrationsVersionHistorySheet";
let obj = { state: obj2 };
obj2 = { alignItems: "center", padding: nativeDefault.space.PX_24 };
let closure_10 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  let first;
  let tmp10;
  let tmp16;
  let tmp33;
  let tmp37;
  let tmp8;
  let tmp9;
  let tmp = projectId;
  let tmp2 = dependencyMap;
  let obj = projectId(576);
  const cResult = obj.c(28);
  projectId = projectId.projectId;
  const onRestore = projectId.onRestore;
  const tmp4 = closure_10();
  const bottom = onRestore(1618)().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { status: "loading" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  [tmp8, dependencyMap] = V(react.useState(first), 2);
  V(react.useState(first), 2);
  const obj3 = react;
  if (cResult[1] !== projectId) {
    const fn = function _() {
      let c0 = false;
      const promise = fetchSourceHistory(c0);
      const nextPromise = promise.then((entries) => {
        const tmp = c0;
        if (!tmp) {
          const obj = { status: "loaded", entries };
          dependencyMap(obj);
        }
      });
      nextPromise.catch(() => {
        const tmp = c0;
        if (!tmp) {
          dependencyMap({ status: "failed" });
        }
      });
      return () => {
        c0 = true;
      };
    };
    const items = [projectId];
    cResult[1] = projectId;
    cResult[2] = fn;
    cResult[3] = items;
    tmp10 = items;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const effect = obj3.useEffect(tmp9, tmp10);
  if (cResult[4] !== onRestore) {
    class V {
      constructor(arg0) {
        let intl;
        let intl2;
        let intl3;
        let closure_0 = arg0;
        let obj = {
          key: "VibegrationsVersionHistoryRestore",
          title: intl.string(onRestore(dependencyMap[10]).qOUOPE),
          content: intl2.string(onRestore(dependencyMap[10]).k2JBj5),
          confirmText: intl3.string(onRestore(dependencyMap[10])["+sRK16"]),
          onConfirm: () => {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(VibegrationsVersionHistorySheet);
            onRestore(closure_0);
          }
        };
        const showConfirmModal = projectId(dependencyMap[8]).showConfirmModal;
        projectId(dependencyMap[8]);
        intl = projectId(dependencyMap[9]).intl;
        intl2 = projectId(dependencyMap[9]).intl;
        intl3 = projectId(dependencyMap[9]).intl;
        showConfirmModal(obj);
      }
    }
    cResult[4] = onRestore;
    cResult[5] = V;
  } else {
    class V {
      constructor(arg0) {
        let intl;
        let intl2;
        let intl3;
        let closure_0 = arg0;
        let obj = {
          key: "VibegrationsVersionHistoryRestore",
          title: intl.string(onRestore(dependencyMap[10]).qOUOPE),
          content: intl2.string(onRestore(dependencyMap[10]).k2JBj5),
          confirmText: intl3.string(onRestore(dependencyMap[10])["+sRK16"]),
          onConfirm: () => {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(VibegrationsVersionHistorySheet);
            onRestore(closure_0);
          }
        };
        const showConfirmModal = projectId(dependencyMap[8]).showConfirmModal;
        projectId(dependencyMap[8]);
        intl = projectId(dependencyMap[9]).intl;
        intl2 = projectId(dependencyMap[9]).intl;
        intl3 = projectId(dependencyMap[9]).intl;
        showConfirmModal(obj);
      }
    }
  }
  V = tmp12;
  if ("loading" === tmp8.status) {
    let tmp27;
    let tmp30;
    class V {
      constructor(arg0) {
        let intl;
        let intl2;
        let intl3;
        let closure_0 = arg0;
        let obj = {
          key: "VibegrationsVersionHistoryRestore",
          title: intl.string(onRestore(dependencyMap[10]).qOUOPE),
          content: intl2.string(onRestore(dependencyMap[10]).k2JBj5),
          confirmText: intl3.string(onRestore(dependencyMap[10])["+sRK16"]),
          onConfirm: () => {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(VibegrationsVersionHistorySheet);
            onRestore(closure_0);
          }
        };
        const showConfirmModal = projectId(dependencyMap[8]).showConfirmModal;
        projectId(dependencyMap[8]);
        intl = projectId(dependencyMap[9]).intl;
        intl2 = projectId(dependencyMap[9]).intl;
        intl3 = projectId(dependencyMap[9]).intl;
        showConfirmModal(obj);
      }
    }
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor(arg0) {
          let intl;
          let intl2;
          let intl3;
          let closure_0 = arg0;
          let obj = {
            key: "VibegrationsVersionHistoryRestore",
            title: intl.string(onRestore(dependencyMap[10]).qOUOPE),
            content: intl2.string(onRestore(dependencyMap[10]).k2JBj5),
            confirmText: intl3.string(onRestore(dependencyMap[10])["+sRK16"]),
            onConfirm: () => {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet(VibegrationsVersionHistorySheet);
              onRestore(closure_0);
            }
          };
          const showConfirmModal = projectId(dependencyMap[8]).showConfirmModal;
          projectId(dependencyMap[8]);
          intl = projectId(dependencyMap[9]).intl;
          intl2 = projectId(dependencyMap[9]).intl;
          intl3 = projectId(dependencyMap[9]).intl;
          showConfirmModal(obj);
        }
      }
      const tmp29 = <closure_5 />;
      cResult[6] = tmp29;
      tmp27 = tmp29;
    } else {
      class V {
        constructor(arg0) {
          let intl;
          let intl2;
          let intl3;
          let closure_0 = arg0;
          let obj = {
            key: "VibegrationsVersionHistoryRestore",
            title: intl.string(onRestore(dependencyMap[10]).qOUOPE),
            content: intl2.string(onRestore(dependencyMap[10]).k2JBj5),
            confirmText: intl3.string(onRestore(dependencyMap[10])["+sRK16"]),
            onConfirm: () => {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet(VibegrationsVersionHistorySheet);
              onRestore(closure_0);
            }
          };
          const showConfirmModal = projectId(dependencyMap[8]).showConfirmModal;
          projectId(dependencyMap[8]);
          intl = projectId(dependencyMap[9]).intl;
          intl2 = projectId(dependencyMap[9]).intl;
          intl3 = projectId(dependencyMap[9]).intl;
          showConfirmModal(obj);
        }
      }
    }
    if (cResult[7] !== tmp4.state) {
      class V {
        constructor(arg0) {
          let intl;
          let intl2;
          let intl3;
          let closure_0 = arg0;
          let obj = {
            key: "VibegrationsVersionHistoryRestore",
            title: intl.string(onRestore(dependencyMap[10]).qOUOPE),
            content: intl2.string(onRestore(dependencyMap[10]).k2JBj5),
            confirmText: intl3.string(onRestore(dependencyMap[10])["+sRK16"]),
            onConfirm: () => {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet(VibegrationsVersionHistorySheet);
              onRestore(closure_0);
            }
          };
          const showConfirmModal = projectId(dependencyMap[8]).showConfirmModal;
          projectId(dependencyMap[8]);
          intl = projectId(dependencyMap[9]).intl;
          intl2 = projectId(dependencyMap[9]).intl;
          intl3 = projectId(dependencyMap[9]).intl;
          showConfirmModal(obj);
        }
      }
      const tmp32 = <closure_6 style={tmp4.state}>{tmp27}</closure_6>;
      cResult[7] = tmp4.state;
      cResult[8] = tmp32;
      tmp30 = tmp32;
    } else {
      class V {
        constructor(arg0) {
          let intl;
          let intl2;
          let intl3;
          let closure_0 = arg0;
          let obj = {
            key: "VibegrationsVersionHistoryRestore",
            title: intl.string(onRestore(dependencyMap[10]).qOUOPE),
            content: intl2.string(onRestore(dependencyMap[10]).k2JBj5),
            confirmText: intl3.string(onRestore(dependencyMap[10])["+sRK16"]),
            onConfirm: () => {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet(VibegrationsVersionHistorySheet);
              onRestore(closure_0);
            }
          };
          const showConfirmModal = projectId(dependencyMap[8]).showConfirmModal;
          projectId(dependencyMap[8]);
          intl = projectId(dependencyMap[9]).intl;
          intl2 = projectId(dependencyMap[9]).intl;
          intl3 = projectId(dependencyMap[9]).intl;
          showConfirmModal(obj);
        }
      }
    }
    tmp16 = tmp30;
  } else {
    class V {
      constructor(arg0) {
        let intl;
        let intl2;
        let intl3;
        let closure_0 = arg0;
        let obj = {
          key: "VibegrationsVersionHistoryRestore",
          title: intl.string(onRestore(dependencyMap[10]).qOUOPE),
          content: intl2.string(onRestore(dependencyMap[10]).k2JBj5),
          confirmText: intl3.string(onRestore(dependencyMap[10])["+sRK16"]),
          onConfirm: () => {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(VibegrationsVersionHistorySheet);
            onRestore(closure_0);
          }
        };
        const showConfirmModal = projectId(dependencyMap[8]).showConfirmModal;
        projectId(dependencyMap[8]);
        intl = projectId(dependencyMap[9]).intl;
        intl2 = projectId(dependencyMap[9]).intl;
        intl3 = projectId(dependencyMap[9]).intl;
        showConfirmModal(obj);
      }
    }
    if ("failed" === tmp8.status) {
      let tmp22;
      let tmp24;
      class V {
        constructor(arg0) {
          let intl;
          let intl2;
          let intl3;
          let closure_0 = arg0;
          let obj = {
            key: "VibegrationsVersionHistoryRestore",
            title: intl.string(onRestore(dependencyMap[10]).qOUOPE),
            content: intl2.string(onRestore(dependencyMap[10]).k2JBj5),
            confirmText: intl3.string(onRestore(dependencyMap[10])["+sRK16"]),
            onConfirm: () => {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet(VibegrationsVersionHistorySheet);
              onRestore(closure_0);
            }
          };
          const showConfirmModal = projectId(dependencyMap[8]).showConfirmModal;
          projectId(dependencyMap[8]);
          intl = projectId(dependencyMap[9]).intl;
          intl2 = projectId(dependencyMap[9]).intl;
          intl3 = projectId(dependencyMap[9]).intl;
          showConfirmModal(obj);
        }
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor(arg0) {
            let intl;
            let intl2;
            let intl3;
            let closure_0 = arg0;
            let obj = {
              key: "VibegrationsVersionHistoryRestore",
              title: intl.string(onRestore(dependencyMap[10]).qOUOPE),
              content: intl2.string(onRestore(dependencyMap[10]).k2JBj5),
              confirmText: intl3.string(onRestore(dependencyMap[10])["+sRK16"]),
              onConfirm: () => {
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideActionSheet(VibegrationsVersionHistorySheet);
                onRestore(closure_0);
              }
            };
            const showConfirmModal = projectId(dependencyMap[8]).showConfirmModal;
            projectId(dependencyMap[8]);
            intl = projectId(dependencyMap[9]).intl;
            intl2 = projectId(dependencyMap[9]).intl;
            intl3 = projectId(dependencyMap[9]).intl;
            showConfirmModal(obj);
          }
        }
        const Text2 = tmp(4886).Text;
        let intl2 = tmp(1126).intl;
        const tmp23 = <Text2 variant="text-md/normal" color="text-muted">{intl2.string(onRestore(3723)["mSJn+K"])}</Text2>;
        cResult[9] = tmp23;
        tmp22 = tmp23;
      } else {
        class V {
          constructor(arg0) {
            let intl;
            let intl2;
            let intl3;
            let closure_0 = arg0;
            let obj = {
              key: "VibegrationsVersionHistoryRestore",
              title: intl.string(onRestore(dependencyMap[10]).qOUOPE),
              content: intl2.string(onRestore(dependencyMap[10]).k2JBj5),
              confirmText: intl3.string(onRestore(dependencyMap[10])["+sRK16"]),
              onConfirm: () => {
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideActionSheet(VibegrationsVersionHistorySheet);
                onRestore(closure_0);
              }
            };
            const showConfirmModal = projectId(dependencyMap[8]).showConfirmModal;
            projectId(dependencyMap[8]);
            intl = projectId(dependencyMap[9]).intl;
            intl2 = projectId(dependencyMap[9]).intl;
            intl3 = projectId(dependencyMap[9]).intl;
            showConfirmModal(obj);
          }
        }
      }
      if (cResult[10] !== tmp4.state) {
        class V {
          constructor(arg0) {
            let intl;
            let intl2;
            let intl3;
            let closure_0 = arg0;
            let obj = {
              key: "VibegrationsVersionHistoryRestore",
              title: intl.string(onRestore(dependencyMap[10]).qOUOPE),
              content: intl2.string(onRestore(dependencyMap[10]).k2JBj5),
              confirmText: intl3.string(onRestore(dependencyMap[10])["+sRK16"]),
              onConfirm: () => {
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideActionSheet(VibegrationsVersionHistorySheet);
                onRestore(closure_0);
              }
            };
            const showConfirmModal = projectId(dependencyMap[8]).showConfirmModal;
            projectId(dependencyMap[8]);
            intl = projectId(dependencyMap[9]).intl;
            intl2 = projectId(dependencyMap[9]).intl;
            intl3 = projectId(dependencyMap[9]).intl;
            showConfirmModal(obj);
          }
        }
        const tmp26 = <closure_6 style={tmp4.state} accessibilityRole="alert">{tmp22}</closure_6>;
        cResult[10] = tmp4.state;
        cResult[11] = tmp26;
        tmp24 = tmp26;
      } else {
        class V {
          constructor(arg0) {
            let intl;
            let intl2;
            let intl3;
            let closure_0 = arg0;
            let obj = {
              key: "VibegrationsVersionHistoryRestore",
              title: intl.string(onRestore(dependencyMap[10]).qOUOPE),
              content: intl2.string(onRestore(dependencyMap[10]).k2JBj5),
              confirmText: intl3.string(onRestore(dependencyMap[10])["+sRK16"]),
              onConfirm: () => {
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideActionSheet(VibegrationsVersionHistorySheet);
                onRestore(closure_0);
              }
            };
            const showConfirmModal = projectId(dependencyMap[8]).showConfirmModal;
            projectId(dependencyMap[8]);
            intl = projectId(dependencyMap[9]).intl;
            intl2 = projectId(dependencyMap[9]).intl;
            intl3 = projectId(dependencyMap[9]).intl;
            showConfirmModal(obj);
          }
        }
      }
      tmp16 = tmp24;
    } else {
      class V {
        constructor(arg0) {
          let intl;
          let intl2;
          let intl3;
          let closure_0 = arg0;
          let obj = {
            key: "VibegrationsVersionHistoryRestore",
            title: intl.string(onRestore(dependencyMap[10]).qOUOPE),
            content: intl2.string(onRestore(dependencyMap[10]).k2JBj5),
            confirmText: intl3.string(onRestore(dependencyMap[10])["+sRK16"]),
            onConfirm: () => {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet(VibegrationsVersionHistorySheet);
              onRestore(closure_0);
            }
          };
          const showConfirmModal = projectId(dependencyMap[8]).showConfirmModal;
          projectId(dependencyMap[8]);
          intl = projectId(dependencyMap[9]).intl;
          intl2 = projectId(dependencyMap[9]).intl;
          intl3 = projectId(dependencyMap[9]).intl;
          showConfirmModal(obj);
        }
      }
      if (0 === tmp8.entries.length) {
        let tmp17;
        let tmp19;
        class V {
          constructor(arg0) {
            let intl;
            let intl2;
            let intl3;
            let closure_0 = arg0;
            let obj = {
              key: "VibegrationsVersionHistoryRestore",
              title: intl.string(onRestore(dependencyMap[10]).qOUOPE),
              content: intl2.string(onRestore(dependencyMap[10]).k2JBj5),
              confirmText: intl3.string(onRestore(dependencyMap[10])["+sRK16"]),
              onConfirm: () => {
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideActionSheet(VibegrationsVersionHistorySheet);
                onRestore(closure_0);
              }
            };
            const showConfirmModal = projectId(dependencyMap[8]).showConfirmModal;
            projectId(dependencyMap[8]);
            intl = projectId(dependencyMap[9]).intl;
            intl2 = projectId(dependencyMap[9]).intl;
            intl3 = projectId(dependencyMap[9]).intl;
            showConfirmModal(obj);
          }
        }
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class V {
            constructor(arg0) {
              let intl;
              let intl2;
              let intl3;
              let closure_0 = arg0;
              let obj = {
                key: "VibegrationsVersionHistoryRestore",
                title: intl.string(onRestore(dependencyMap[10]).qOUOPE),
                content: intl2.string(onRestore(dependencyMap[10]).k2JBj5),
                confirmText: intl3.string(onRestore(dependencyMap[10])["+sRK16"]),
                onConfirm: () => {
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideActionSheet(VibegrationsVersionHistorySheet);
                  onRestore(closure_0);
                }
              };
              const showConfirmModal = projectId(dependencyMap[8]).showConfirmModal;
              projectId(dependencyMap[8]);
              intl = projectId(dependencyMap[9]).intl;
              intl2 = projectId(dependencyMap[9]).intl;
              intl3 = projectId(dependencyMap[9]).intl;
              showConfirmModal(obj);
            }
          }
          const Text = tmp(4886).Text;
          let intl = tmp(1126).intl;
          const tmp18 = <Text variant="text-md/normal" color="text-muted">{intl.string(onRestore(3723).TOmYPT)}</Text>;
          cResult[12] = tmp18;
          tmp17 = tmp18;
        } else {
          class V {
            constructor(arg0) {
              let intl;
              let intl2;
              let intl3;
              let closure_0 = arg0;
              let obj = {
                key: "VibegrationsVersionHistoryRestore",
                title: intl.string(onRestore(dependencyMap[10]).qOUOPE),
                content: intl2.string(onRestore(dependencyMap[10]).k2JBj5),
                confirmText: intl3.string(onRestore(dependencyMap[10])["+sRK16"]),
                onConfirm: () => {
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideActionSheet(VibegrationsVersionHistorySheet);
                  onRestore(closure_0);
                }
              };
              const showConfirmModal = projectId(dependencyMap[8]).showConfirmModal;
              projectId(dependencyMap[8]);
              intl = projectId(dependencyMap[9]).intl;
              intl2 = projectId(dependencyMap[9]).intl;
              intl3 = projectId(dependencyMap[9]).intl;
              showConfirmModal(obj);
            }
          }
        }
        if (cResult[13] !== tmp4.state) {
          class V {
            constructor(arg0) {
              let intl;
              let intl2;
              let intl3;
              let closure_0 = arg0;
              let obj = {
                key: "VibegrationsVersionHistoryRestore",
                title: intl.string(onRestore(dependencyMap[10]).qOUOPE),
                content: intl2.string(onRestore(dependencyMap[10]).k2JBj5),
                confirmText: intl3.string(onRestore(dependencyMap[10])["+sRK16"]),
                onConfirm: () => {
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideActionSheet(VibegrationsVersionHistorySheet);
                  onRestore(closure_0);
                }
              };
              const showConfirmModal = projectId(dependencyMap[8]).showConfirmModal;
              projectId(dependencyMap[8]);
              intl = projectId(dependencyMap[9]).intl;
              intl2 = projectId(dependencyMap[9]).intl;
              intl3 = projectId(dependencyMap[9]).intl;
              showConfirmModal(obj);
            }
          }
          const tmp21 = <closure_6 style={tmp4.state}>{tmp17}</closure_6>;
          cResult[13] = tmp4.state;
          cResult[14] = tmp21;
          tmp19 = tmp21;
        } else {
          class V {
            constructor(arg0) {
              let intl;
              let intl2;
              let intl3;
              let closure_0 = arg0;
              let obj = {
                key: "VibegrationsVersionHistoryRestore",
                title: intl.string(onRestore(dependencyMap[10]).qOUOPE),
                content: intl2.string(onRestore(dependencyMap[10]).k2JBj5),
                confirmText: intl3.string(onRestore(dependencyMap[10])["+sRK16"]),
                onConfirm: () => {
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideActionSheet(VibegrationsVersionHistorySheet);
                  onRestore(closure_0);
                }
              };
              const showConfirmModal = projectId(dependencyMap[8]).showConfirmModal;
              projectId(dependencyMap[8]);
              intl = projectId(dependencyMap[9]).intl;
              intl2 = projectId(dependencyMap[9]).intl;
              intl3 = projectId(dependencyMap[9]).intl;
              showConfirmModal(obj);
            }
          }
        }
        tmp16 = tmp19;
      } else {
        let tmp14;
        class V {
          constructor(arg0) {
            let intl;
            let intl2;
            let intl3;
            let closure_0 = arg0;
            let obj = {
              key: "VibegrationsVersionHistoryRestore",
              title: intl.string(onRestore(dependencyMap[10]).qOUOPE),
              content: intl2.string(onRestore(dependencyMap[10]).k2JBj5),
              confirmText: intl3.string(onRestore(dependencyMap[10])["+sRK16"]),
              onConfirm: () => {
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideActionSheet(VibegrationsVersionHistorySheet);
                onRestore(closure_0);
              }
            };
            const showConfirmModal = projectId(dependencyMap[8]).showConfirmModal;
            projectId(dependencyMap[8]);
            intl = projectId(dependencyMap[9]).intl;
            intl2 = projectId(dependencyMap[9]).intl;
            intl3 = projectId(dependencyMap[9]).intl;
            showConfirmModal(obj);
          }
        }
        if (cResult[18] !== tmp12) {
          class J {
            constructor(subject) {
              let relativeTimestamp;
              let str;
              let closure_0 = subject;
              const obj = {
                label: str.replace(/^Build: /, ""),
                subLabel: relativeTimestamp,
                arrow: true,
                onPress() {
                  return V(subject);
                }
              };
              str = subject.subject;
              const TableRow = projectId(dependencyMap[16]).TableRow;
              const parsed = Date.parse(subject.authoredAt);
              relativeTimestamp = undefined;
              const tmp = jsx;
              const tmp2 = projectId;
              const tmp3 = dependencyMap;
              if (!Number.isNaN(parsed)) {
                const tmp2Result = tmp2(tmp3[7]);
                relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
              }
              return tmp(TableRow, obj, subject.sha);
            }
          }
          cResult[18] = tmp12;
          cResult[19] = J;
          tmp14 = J;
        } else {
          class J {
            constructor(subject) {
              let relativeTimestamp;
              let str;
              let closure_0 = subject;
              const obj = {
                label: str.replace(/^Build: /, ""),
                subLabel: relativeTimestamp,
                arrow: true,
                onPress() {
                  return V(subject);
                }
              };
              str = subject.subject;
              const TableRow = projectId(dependencyMap[16]).TableRow;
              const parsed = Date.parse(subject.authoredAt);
              relativeTimestamp = undefined;
              const tmp = jsx;
              const tmp2 = projectId;
              const tmp3 = dependencyMap;
              if (!Number.isNaN(parsed)) {
                const tmp2Result = tmp2(tmp3[7]);
                relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
              }
              return tmp(TableRow, obj, subject.sha);
            }
          }
        }
        const entries = tmp8.entries;
        const mapped = entries.map(tmp14);
        cResult[15] = tmp8.entries;
        cResult[16] = tmp12;
        cResult[17] = mapped;
      }
    }
  }
  if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
    class J {
      constructor(subject) {
        let relativeTimestamp;
        let str;
        let closure_0 = subject;
        const obj = {
          label: str.replace(/^Build: /, ""),
          subLabel: relativeTimestamp,
          arrow: true,
          onPress() {
            return V(subject);
          }
        };
        str = subject.subject;
        const TableRow = projectId(dependencyMap[16]).TableRow;
        const parsed = Date.parse(subject.authoredAt);
        relativeTimestamp = undefined;
        const tmp = jsx;
        const tmp2 = projectId;
        const tmp3 = dependencyMap;
        if (!Number.isNaN(parsed)) {
          const tmp2Result = tmp2(tmp3[7]);
          relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
        }
        return tmp(TableRow, obj, subject.sha);
      }
    }
    const BottomSheetTitleHeader = tmp(6644).BottomSheetTitleHeader;
    let intl3 = tmp(1126).intl;
    const tmp34 = <BottomSheetTitleHeader title={intl3.string(onRestore(3723).jAWwzi)} />;
    cResult[22] = tmp34;
    tmp33 = tmp34;
  } else {
    class J {
      constructor(subject) {
        let relativeTimestamp;
        let str;
        let closure_0 = subject;
        const obj = {
          label: str.replace(/^Build: /, ""),
          subLabel: relativeTimestamp,
          arrow: true,
          onPress() {
            return V(subject);
          }
        };
        str = subject.subject;
        const TableRow = projectId(dependencyMap[16]).TableRow;
        const parsed = Date.parse(subject.authoredAt);
        relativeTimestamp = undefined;
        const tmp = jsx;
        const tmp2 = projectId;
        const tmp3 = dependencyMap;
        if (!Number.isNaN(parsed)) {
          const tmp2Result = tmp2(tmp3[7]);
          relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
        }
        return tmp(TableRow, obj, subject.sha);
      }
    }
  }
  if (cResult[23] !== bottom) {
    class J {
      constructor(subject) {
        let relativeTimestamp;
        let str;
        let closure_0 = subject;
        const obj = {
          label: str.replace(/^Build: /, ""),
          subLabel: relativeTimestamp,
          arrow: true,
          onPress() {
            return V(subject);
          }
        };
        str = subject.subject;
        const TableRow = projectId(dependencyMap[16]).TableRow;
        const parsed = Date.parse(subject.authoredAt);
        relativeTimestamp = undefined;
        const tmp = jsx;
        const tmp2 = projectId;
        const tmp3 = dependencyMap;
        if (!Number.isNaN(parsed)) {
          const tmp2Result = tmp2(tmp3[7]);
          relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
        }
        return tmp(TableRow, obj, subject.sha);
      }
    }
    tmp36[0] = bottom;
    cResult[23] = bottom;
    cResult[24] = tmp36;
  } else {
    class J {
      constructor(subject) {
        let relativeTimestamp;
        let str;
        let closure_0 = subject;
        const obj = {
          label: str.replace(/^Build: /, ""),
          subLabel: relativeTimestamp,
          arrow: true,
          onPress() {
            return V(subject);
          }
        };
        str = subject.subject;
        const TableRow = projectId(dependencyMap[16]).TableRow;
        const parsed = Date.parse(subject.authoredAt);
        relativeTimestamp = undefined;
        const tmp = jsx;
        const tmp2 = projectId;
        const tmp3 = dependencyMap;
        if (!Number.isNaN(parsed)) {
          const tmp2Result = tmp2(tmp3[7]);
          relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
        }
        return tmp(TableRow, obj, subject.sha);
      }
    }
  }
  if (cResult[25] === tmp16) {
    class J {
      constructor(subject) {
        let relativeTimestamp;
        let str;
        let closure_0 = subject;
        const obj = {
          label: str.replace(/^Build: /, ""),
          subLabel: relativeTimestamp,
          arrow: true,
          onPress() {
            return V(subject);
          }
        };
        str = subject.subject;
        const TableRow = projectId(dependencyMap[16]).TableRow;
        const parsed = Date.parse(subject.authoredAt);
        relativeTimestamp = undefined;
        const tmp = jsx;
        const tmp2 = projectId;
        const tmp3 = dependencyMap;
        if (!Number.isNaN(parsed)) {
          const tmp2Result = tmp2(tmp3[7]);
          relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
        }
        return tmp(TableRow, obj, subject.sha);
      }
    }
    return tmp37;
  }
  const ActionSheet = tmp(6701).ActionSheet;
  tmp37 = <ActionSheet scrollable header={tmp33}>{null}</ActionSheet>;
  cResult[25] = tmp16;
  cResult[26] = tmp35;
  cResult[27] = tmp37;
}) : ((projectId) => {
  let BottomSheetTitleHeader;
  let _undefined;
  let c2;
  let closure_3;
  let intl;
  let intl2;
  let intl3;
  let obj8;
  let obj9;
  let tmp5;
  let tmp7;
  let tmp9;
  projectId = projectId.projectId;
  const onRestore = projectId.onRestore;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let tmp = closure_10();
  let tmp2 = onRestore;
  let tmp3 = dependencyMap;
  const bottom = onRestore(1618)().bottom;
  [tmp5, c2] = _slicedToArray(react.useState({ status: "loading" }), 2);
  const items = [projectId];
  const tmp4 = _slicedToArray(react.useState({ status: "loading" }), 2);
  const effect = react.useEffect(() => {
    let c0 = false;
    const promise = fetchSourceHistory(c0);
    const nextPromise = promise.then((entries) => {
      const tmp = c0;
      if (!tmp) {
        const obj = { status: "loaded", entries };
        c2(obj);
      }
    });
    nextPromise.catch(() => {
      const tmp = c0;
      if (!tmp) {
        c2({ status: "failed" });
      }
    });
    return () => {
      c0 = true;
    };
  }, items);
  const items1 = [onRestore];
  _slicedToArray = react.useCallback((arg0) => {
    let intl;
    let intl2;
    let intl3;
    let closure_0 = arg0;
    let obj = {
      key: "VibegrationsVersionHistoryRestore",
      title: intl.string(onRestore(c2[10]).qOUOPE),
      content: intl2.string(onRestore(c2[10]).k2JBj5),
      confirmText: intl3.string(onRestore(c2[10])["+sRK16"]),
      onConfirm: () => {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(VibegrationsVersionHistorySheet);
        onRestore(closure_0);
      }
    };
    const showConfirmModal = projectId(c2[8]).showConfirmModal;
    projectId(c2[8]);
    intl = projectId(c2[9]).intl;
    intl2 = projectId(c2[9]).intl;
    intl3 = projectId(c2[9]).intl;
    showConfirmModal(obj);
  }, items1);
  if ("loading" === tmp5.status) {
    tmp9 = <closure_6 style={tmp.state}><closure_5 /></closure_6>;
    tmp7 = jsx;
  } else {
    let str = "failed";
    if ("failed" === tmp5.status) {
      ({ variant: "text-md/normal", color: "text-muted", children: intl2.string(tmp2(3723)["mSJn+K"]) });
      const Text2 = projectId(4886).Text;
      intl2 = projectId(1126).intl;
      tmp9 = <closure_6 style={tmp.state} accessibilityRole="alert">{null}</closure_6>;
      tmp7 = jsx;
    } else if (0 === tmp5.entries.length) {
      ({ variant: "text-md/normal", color: "text-muted", children: intl.string(tmp2(3723).TOmYPT) });
      const Text = projectId(4886).Text;
      intl = projectId(1126).intl;
      tmp9 = <closure_6 style={tmp.state}>{null}</closure_6>;
      tmp7 = jsx;
    } else {
      tmp7 = jsx;
      const entries = tmp5.entries;
      const TableRowGroup = projectId(6074).TableRowGroup;
      tmp9 = <TableRowGroup hasIcons={false}>{entries.map((subject) => {
        let relativeTimestamp;
        let str;
        let closure_0 = subject;
        const obj = {
          label: str.replace(/^Build: /, ""),
          subLabel: relativeTimestamp,
          arrow: true,
          onPress() {
            return closure_3(subject);
          }
        };
        str = subject.subject;
        const TableRow = projectId(c2[16]).TableRow;
        const parsed = Date.parse(subject.authoredAt);
        relativeTimestamp = undefined;
        const tmp = jsx;
        const tmp2 = projectId;
        const tmp3 = c2;
        if (!Number.isNaN(parsed)) {
          const tmp2Result = tmp2(tmp3[7]);
          relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
        }
        return tmp(TableRow, obj, subject.sha);
      })}</TableRowGroup>;
    }
  }
  const obj7 = { scrollable: true, header: tmp7(BottomSheetTitleHeader, obj8), children: tmp7(projectId(6112).BottomSheetScrollView, obj9) };
  const ActionSheet = projectId(6701).ActionSheet;
  obj8 = { title: intl3.string(tmp2(3723).jAWwzi) };
  BottomSheetTitleHeader = projectId(6644).BottomSheetTitleHeader;
  intl3 = projectId(1126).intl;
  obj9 = { contentContainerStyle: { paddingBottom: bottom }, children: tmp9 };
  return tmp7(ActionSheet, obj7);
});
function authoredAgo(authored_at) {
  const parsed = Date.parse(authored_at);
  let relativeTimestamp;
  if (!Number.isNaN(parsed)) {
    const obj = NotificationCenterUtils;
    relativeTimestamp = obj.getRelativeTimestamp(parsed, false);
  }
  return relativeTimestamp;
}
function confirmRestoreVersion(onConfirm) {
  let intl;
  let intl2;
  let intl3;
  const obj = { key: "VibegrationsVersionHistoryRestore", title: intl.string(_modDef3723.qOUOPE), content: intl2.string(_modDef3723.k2JBj5), confirmText: intl3.string(_modDef3723["+sRK16"]), onConfirm };
  const showConfirmModal = AlertModal.showConfirmModal;
  AlertModal;
  intl = intl4.intl;
  intl2 = intl4.intl;
  intl3 = intl4.intl;
  showConfirmModal(obj);
}
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsVersionHistorySheet.tsx");

export default tmp3;
export const VIBEGRATIONS_VERSION_HISTORY_SHEET_KEY = "VibegrationsVersionHistorySheet";
export { authoredAgo };
export { confirmRestoreVersion };
