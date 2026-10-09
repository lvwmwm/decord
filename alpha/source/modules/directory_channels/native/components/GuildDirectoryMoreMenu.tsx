// Module ID: 11965
// Function ID: 11966
// Name: GuildDirectoryMoreMenu
// Dependencies: [109, 19, 21, 558, 576, 11959, 11966, 5299, 1126, 11968, 1200, 7704, 9694, 5048, 9545, 8114, 9214, 587, 9335, 2]

// Module 11965 (GuildDirectoryMoreMenu)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5299 */;
import ReportModals from "ReportModals" /* 7704 */;
import useCanManageGuildDirectoryEntryDefault from "useCanManageGuildDirectoryEntry" /* 11959 */;
import GuildDirectoryEditDescriptionModalActionCreatorsDefault from "GuildDirectoryEditDescriptionModalActionCreators" /* 11966 */;
import GuildDirectoryActionCreatorsAll from "GuildDirectoryActionCreators" /* 11968 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4 = ["ref"];
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildDirectoryMoreMenu(entry) {
  let canEdit;
  let canRemove;
  let isEntryAdmin;
  let obj2;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp = entry;
  let obj = entry(576);
  const cResult = obj.c(25);
  entry = entry.entry;
  ({ isEntryAdmin, canEdit, canRemove } = useCanManageGuildDirectoryEntryDefault(entry));
  useCanManageGuildDirectoryEntryDefault(entry);
  if (cResult[0] !== entry) {
    function handleEdit() {
      const obj = GuildDirectoryEditDescriptionModalActionCreatorsDefault;
      const obj2 = { entry };
      obj.open(obj2);
    }
    cResult[0] = entry;
    cResult[1] = handleEdit;
    tmp5 = handleEdit;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== entry) {
    function handleRemove() {
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let obj2;
      let obj = {
        title: intl.string(intl5.t.KUxYWH),
        body: intl2.formatToPlainString(intl5.t["/5y0uV"], obj2),
        onConfirm() {
          const obj = GuildDirectoryActionCreatorsAll;
          const result = obj.removeDirectoryGuildEntry(entry.channelId, entry.guildId);
        },
        confirmColor: native.ButtonColors.RED,
        confirmText: intl3.string(intl5.t.N86XcP),
        cancelText: intl4.string(intl5.t["ETE/oC"]),
        onCancel() {
          const obj = closure_1_1(closure_1_3[7]);
          obj.close();
        },
        isDismissable: false
      };
      const show = actions_AlertActionCreatorsDefault.show;
      actions_AlertActionCreatorsDefault;
      intl = intl5.intl;
      intl2 = intl5.intl;
      obj2 = { guildName: entry.name };
      intl3 = intl5.intl;
      intl4 = intl5.intl;
      show(obj);
    }
    cResult[2] = entry;
    cResult[3] = handleRemove;
    tmp6 = handleRemove;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] !== entry) {
    function handleReport() {
      const obj = ReportModals;
      const result = obj.showReportModalForGuildDirectoryEntry(entry);
    }
    cResult[4] = entry;
    cResult[5] = handleReport;
    tmp7 = handleReport;
  } else {
    tmp7 = cResult[5];
  }
  if (cResult[6] === canEdit) {
    if (cResult[7] === canRemove) {
      if (cResult[8] === tmp5) {
        if (cResult[9] === tmp6) {
          if (cResult[10] === tmp7) {
            let arr;
            if (cResult[11] === isEntryAdmin) {
              arr = cResult[12];
            }
            let tmp23 = null;
            if (0 !== arr.length) {
              let tmp24;
              let tmp25;
              const _Symbol4 = Symbol;
              if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                class R {
                  constructor(ref) {
                    ref = ref.ref;
                    const tmp = _objectWithoutProperties(ref, closure_1_4);
                    const IconButton = entry(dependencyMap[15]).IconButton;
                    const merged = Object.assign(tmp);
                    const intl = entry(dependencyMap[8]).intl;
                    const MoreHorizontalIcon = entry(dependencyMap[16]).MoreHorizontalIcon;
                    return <IconButton ref={ref} size="sm" variant="secondary" accessibilityLabel={intl.string(entry(dependencyMap[8]).t.PdRCRg)} icon={<MoreHorizontalIcon size="sm" color={nativeDefault.colors.WHITE} />} />;
                  }
                }
                cResult[22] = R;
                tmp24 = R;
              } else {
                class R {
                  constructor(ref) {
                    ref = ref.ref;
                    const tmp = _objectWithoutProperties(ref, closure_1_4);
                    const IconButton = entry(dependencyMap[15]).IconButton;
                    const merged = Object.assign(tmp);
                    const intl = entry(dependencyMap[8]).intl;
                    const MoreHorizontalIcon = entry(dependencyMap[16]).MoreHorizontalIcon;
                    return <IconButton ref={ref} size="sm" variant="secondary" accessibilityLabel={intl.string(entry(dependencyMap[8]).t.PdRCRg)} icon={<MoreHorizontalIcon size="sm" color={nativeDefault.colors.WHITE} />} />;
                  }
                }
              }
              if (cResult[23] !== arr) {
                class R {
                  constructor(ref) {
                    ref = ref.ref;
                    const tmp = _objectWithoutProperties(ref, closure_1_4);
                    const IconButton = entry(dependencyMap[15]).IconButton;
                    const merged = Object.assign(tmp);
                    const intl = entry(dependencyMap[8]).intl;
                    const MoreHorizontalIcon = entry(dependencyMap[16]).MoreHorizontalIcon;
                    return <IconButton ref={ref} size="sm" variant="secondary" accessibilityLabel={intl.string(entry(dependencyMap[8]).t.PdRCRg)} icon={<MoreHorizontalIcon size="sm" color={nativeDefault.colors.WHITE} />} />;
                  }
                }
                const tmp26 = jsx(tmp(9335).ContextMenu, { items: arr, children: tmp24 });
                cResult[23] = arr;
                cResult[24] = tmp26;
                tmp25 = tmp26;
              } else {
                class R {
                  constructor(ref) {
                    ref = ref.ref;
                    const tmp = _objectWithoutProperties(ref, closure_1_4);
                    const IconButton = entry(dependencyMap[15]).IconButton;
                    const merged = Object.assign(tmp);
                    const intl = entry(dependencyMap[8]).intl;
                    const MoreHorizontalIcon = entry(dependencyMap[16]).MoreHorizontalIcon;
                    return <IconButton ref={ref} size="sm" variant="secondary" accessibilityLabel={intl.string(entry(dependencyMap[8]).t.PdRCRg)} icon={<MoreHorizontalIcon size="sm" color={nativeDefault.colors.WHITE} />} />;
                  }
                }
              }
              tmp23 = tmp25;
            }
            return tmp23;
          }
        }
      }
    }
  }
  const items = [];
  if (canEdit) {
    let tmp8;
    let tmp10;
    class R {
      constructor(ref) {
        ref = ref.ref;
        const tmp = _objectWithoutProperties(ref, closure_1_4);
        const IconButton = entry(dependencyMap[15]).IconButton;
        const merged = Object.assign(tmp);
        const intl = entry(dependencyMap[8]).intl;
        const MoreHorizontalIcon = entry(dependencyMap[16]).MoreHorizontalIcon;
        return <IconButton ref={ref} size="sm" variant="secondary" accessibilityLabel={intl.string(entry(dependencyMap[8]).t.PdRCRg)} icon={<MoreHorizontalIcon size="sm" color={nativeDefault.colors.WHITE} />} />;
      }
    }
    const _Symbol = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor(ref) {
          ref = ref.ref;
          const tmp = _objectWithoutProperties(ref, closure_1_4);
          const IconButton = entry(dependencyMap[15]).IconButton;
          const merged = Object.assign(tmp);
          const intl = entry(dependencyMap[8]).intl;
          const MoreHorizontalIcon = entry(dependencyMap[16]).MoreHorizontalIcon;
          return <IconButton ref={ref} size="sm" variant="secondary" accessibilityLabel={intl.string(entry(dependencyMap[8]).t.PdRCRg)} icon={<MoreHorizontalIcon size="sm" color={nativeDefault.colors.WHITE} />} />;
        }
      }
      const stringResult = obj2.string(tmp(1126).t.XnuOvN);
      cResult[13] = stringResult;
      tmp8 = stringResult;
    } else {
      class R {
        constructor(ref) {
          ref = ref.ref;
          const tmp = _objectWithoutProperties(ref, closure_1_4);
          const IconButton = entry(dependencyMap[15]).IconButton;
          const merged = Object.assign(tmp);
          const intl = entry(dependencyMap[8]).intl;
          const MoreHorizontalIcon = entry(dependencyMap[16]).MoreHorizontalIcon;
          return <IconButton ref={ref} size="sm" variant="secondary" accessibilityLabel={intl.string(entry(dependencyMap[8]).t.PdRCRg)} icon={<MoreHorizontalIcon size="sm" color={nativeDefault.colors.WHITE} />} />;
        }
      }
    }
    if (cResult[14] !== tmp5) {
      class R {
        constructor(ref) {
          ref = ref.ref;
          const tmp = _objectWithoutProperties(ref, closure_1_4);
          const IconButton = entry(dependencyMap[15]).IconButton;
          const merged = Object.assign(tmp);
          const intl = entry(dependencyMap[8]).intl;
          const MoreHorizontalIcon = entry(dependencyMap[16]).MoreHorizontalIcon;
          return <IconButton ref={ref} size="sm" variant="secondary" accessibilityLabel={intl.string(entry(dependencyMap[8]).t.PdRCRg)} icon={<MoreHorizontalIcon size="sm" color={nativeDefault.colors.WHITE} />} />;
        }
      }
      tmp11[0] = tmp8;
      tmp11[1] = tmp(9694).PencilIcon;
      tmp11[2] = tmp5;
      cResult[14] = tmp5;
      cResult[15] = tmp11;
      tmp10 = tmp11;
    } else {
      class R {
        constructor(ref) {
          ref = ref.ref;
          const tmp = _objectWithoutProperties(ref, closure_1_4);
          const IconButton = entry(dependencyMap[15]).IconButton;
          const merged = Object.assign(tmp);
          const intl = entry(dependencyMap[8]).intl;
          const MoreHorizontalIcon = entry(dependencyMap[16]).MoreHorizontalIcon;
          return <IconButton ref={ref} size="sm" variant="secondary" accessibilityLabel={intl.string(entry(dependencyMap[8]).t.PdRCRg)} icon={<MoreHorizontalIcon size="sm" color={nativeDefault.colors.WHITE} />} />;
        }
      }
    }
    items.push(tmp10);
  }
  if (canRemove) {
    let tmp13;
    let tmp15;
    class R {
      constructor(ref) {
        ref = ref.ref;
        const tmp = _objectWithoutProperties(ref, closure_1_4);
        const IconButton = entry(dependencyMap[15]).IconButton;
        const merged = Object.assign(tmp);
        const intl = entry(dependencyMap[8]).intl;
        const MoreHorizontalIcon = entry(dependencyMap[16]).MoreHorizontalIcon;
        return <IconButton ref={ref} size="sm" variant="secondary" accessibilityLabel={intl.string(entry(dependencyMap[8]).t.PdRCRg)} icon={<MoreHorizontalIcon size="sm" color={nativeDefault.colors.WHITE} />} />;
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor(ref) {
          ref = ref.ref;
          const tmp = _objectWithoutProperties(ref, closure_1_4);
          const IconButton = entry(dependencyMap[15]).IconButton;
          const merged = Object.assign(tmp);
          const intl = entry(dependencyMap[8]).intl;
          const MoreHorizontalIcon = entry(dependencyMap[16]).MoreHorizontalIcon;
          return <IconButton ref={ref} size="sm" variant="secondary" accessibilityLabel={intl.string(entry(dependencyMap[8]).t.PdRCRg)} icon={<MoreHorizontalIcon size="sm" color={nativeDefault.colors.WHITE} />} />;
        }
      }
      const stringResult1 = obj3.string(tmp(1126).t.KUxYWH);
      cResult[16] = stringResult1;
      tmp13 = stringResult1;
    } else {
      class R {
        constructor(ref) {
          ref = ref.ref;
          const tmp = _objectWithoutProperties(ref, closure_1_4);
          const IconButton = entry(dependencyMap[15]).IconButton;
          const merged = Object.assign(tmp);
          const intl = entry(dependencyMap[8]).intl;
          const MoreHorizontalIcon = entry(dependencyMap[16]).MoreHorizontalIcon;
          return <IconButton ref={ref} size="sm" variant="secondary" accessibilityLabel={intl.string(entry(dependencyMap[8]).t.PdRCRg)} icon={<MoreHorizontalIcon size="sm" color={nativeDefault.colors.WHITE} />} />;
        }
      }
    }
    if (cResult[17] !== tmp6) {
      class R {
        constructor(ref) {
          ref = ref.ref;
          const tmp = _objectWithoutProperties(ref, closure_1_4);
          const IconButton = entry(dependencyMap[15]).IconButton;
          const merged = Object.assign(tmp);
          const intl = entry(dependencyMap[8]).intl;
          const MoreHorizontalIcon = entry(dependencyMap[16]).MoreHorizontalIcon;
          return <IconButton ref={ref} size="sm" variant="secondary" accessibilityLabel={intl.string(entry(dependencyMap[8]).t.PdRCRg)} icon={<MoreHorizontalIcon size="sm" color={nativeDefault.colors.WHITE} />} />;
        }
      }
      tmp16[0] = tmp13;
      tmp16[1] = tmp(5048).TrashIcon;
      tmp16[3] = tmp6;
      cResult[17] = tmp6;
      cResult[18] = tmp16;
      tmp15 = tmp16;
    } else {
      class R {
        constructor(ref) {
          ref = ref.ref;
          const tmp = _objectWithoutProperties(ref, closure_1_4);
          const IconButton = entry(dependencyMap[15]).IconButton;
          const merged = Object.assign(tmp);
          const intl = entry(dependencyMap[8]).intl;
          const MoreHorizontalIcon = entry(dependencyMap[16]).MoreHorizontalIcon;
          return <IconButton ref={ref} size="sm" variant="secondary" accessibilityLabel={intl.string(entry(dependencyMap[8]).t.PdRCRg)} icon={<MoreHorizontalIcon size="sm" color={nativeDefault.colors.WHITE} />} />;
        }
      }
    }
    items.push(tmp15);
  }
  if (!isEntryAdmin) {
    let tmp18;
    let tmp20;
    class R {
      constructor(ref) {
        ref = ref.ref;
        const tmp = _objectWithoutProperties(ref, closure_1_4);
        const IconButton = entry(dependencyMap[15]).IconButton;
        const merged = Object.assign(tmp);
        const intl = entry(dependencyMap[8]).intl;
        const MoreHorizontalIcon = entry(dependencyMap[16]).MoreHorizontalIcon;
        return <IconButton ref={ref} size="sm" variant="secondary" accessibilityLabel={intl.string(entry(dependencyMap[8]).t.PdRCRg)} icon={<MoreHorizontalIcon size="sm" color={nativeDefault.colors.WHITE} />} />;
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor(ref) {
          ref = ref.ref;
          const tmp = _objectWithoutProperties(ref, closure_1_4);
          const IconButton = entry(dependencyMap[15]).IconButton;
          const merged = Object.assign(tmp);
          const intl = entry(dependencyMap[8]).intl;
          const MoreHorizontalIcon = entry(dependencyMap[16]).MoreHorizontalIcon;
          return <IconButton ref={ref} size="sm" variant="secondary" accessibilityLabel={intl.string(entry(dependencyMap[8]).t.PdRCRg)} icon={<MoreHorizontalIcon size="sm" color={nativeDefault.colors.WHITE} />} />;
        }
      }
      const stringResult2 = obj4.string(tmp(1126).t.Aen9eh);
      cResult[19] = stringResult2;
      tmp18 = stringResult2;
    } else {
      class R {
        constructor(ref) {
          ref = ref.ref;
          const tmp = _objectWithoutProperties(ref, closure_1_4);
          const IconButton = entry(dependencyMap[15]).IconButton;
          const merged = Object.assign(tmp);
          const intl = entry(dependencyMap[8]).intl;
          const MoreHorizontalIcon = entry(dependencyMap[16]).MoreHorizontalIcon;
          return <IconButton ref={ref} size="sm" variant="secondary" accessibilityLabel={intl.string(entry(dependencyMap[8]).t.PdRCRg)} icon={<MoreHorizontalIcon size="sm" color={nativeDefault.colors.WHITE} />} />;
        }
      }
    }
    if (cResult[20] !== tmp7) {
      class R {
        constructor(ref) {
          ref = ref.ref;
          const tmp = _objectWithoutProperties(ref, closure_1_4);
          const IconButton = entry(dependencyMap[15]).IconButton;
          const merged = Object.assign(tmp);
          const intl = entry(dependencyMap[8]).intl;
          const MoreHorizontalIcon = entry(dependencyMap[16]).MoreHorizontalIcon;
          return <IconButton ref={ref} size="sm" variant="secondary" accessibilityLabel={intl.string(entry(dependencyMap[8]).t.PdRCRg)} icon={<MoreHorizontalIcon size="sm" color={nativeDefault.colors.WHITE} />} />;
        }
      }
      tmp21[0] = tmp18;
      tmp21[1] = tmp(9545).FlagIcon;
      tmp21[3] = tmp7;
      cResult[20] = tmp7;
      cResult[21] = tmp21;
      tmp20 = tmp21;
    } else {
      class R {
        constructor(ref) {
          ref = ref.ref;
          const tmp = _objectWithoutProperties(ref, closure_1_4);
          const IconButton = entry(dependencyMap[15]).IconButton;
          const merged = Object.assign(tmp);
          const intl = entry(dependencyMap[8]).intl;
          const MoreHorizontalIcon = entry(dependencyMap[16]).MoreHorizontalIcon;
          return <IconButton ref={ref} size="sm" variant="secondary" accessibilityLabel={intl.string(entry(dependencyMap[8]).t.PdRCRg)} icon={<MoreHorizontalIcon size="sm" color={nativeDefault.colors.WHITE} />} />;
        }
      }
    }
    items.push(tmp20);
  }
  cResult[6] = canEdit;
  cResult[7] = canRemove;
  cResult[8] = tmp5;
  cResult[9] = tmp6;
  cResult[10] = tmp7;
  cResult[11] = isEntryAdmin;
  cResult[12] = items;
  arr = items;
}) : (function GuildDirectoryMoreMenu(entry) {
  let canRemove;
  let intl;
  let intl2;
  let intl3;
  let isEntryAdmin;
  entry = entry.entry;
  const tmp2 = useCanManageGuildDirectoryEntryDefault(entry);
  const items = [];
  ({ isEntryAdmin, canRemove } = tmp2);
  if (tmp2.canEdit) {
    let obj = {
      label: intl.string(entry(1126).t.XnuOvN),
      IconComponent: entry(9694).PencilIcon,
      action: function handleEdit() {
          const obj = GuildDirectoryEditDescriptionModalActionCreatorsDefault;
          const obj2 = { entry };
          obj.open(obj2);
        }
    };
    const push = items.push;
    intl = entry(1126).intl;
    push(obj);
  }
  if (canRemove) {
    let obj2 = {
      label: intl2.string(entry(1126).t.KUxYWH),
      IconComponent: entry(5048).TrashIcon,
      variant: "destructive",
      action: function handleRemove() {
          let intl;
          let intl2;
          let intl3;
          let intl4;
          let obj2;
          let obj = {
            title: intl.string(intl5.t.KUxYWH),
            body: intl2.formatToPlainString(intl5.t["/5y0uV"], obj2),
            onConfirm() {
              const obj = GuildDirectoryActionCreatorsAll;
              const result = obj.removeDirectoryGuildEntry(entry.channelId, entry.guildId);
            },
            confirmColor: native.ButtonColors.RED,
            confirmText: intl3.string(intl5.t.N86XcP),
            cancelText: intl4.string(intl5.t["ETE/oC"]),
            onCancel() {
              const obj = closure_1_1(closure_1_3[7]);
              obj.close();
            },
            isDismissable: false
          };
          const show = actions_AlertActionCreatorsDefault.show;
          actions_AlertActionCreatorsDefault;
          intl = intl5.intl;
          intl2 = intl5.intl;
          obj2 = { guildName: entry.name };
          intl3 = intl5.intl;
          intl4 = intl5.intl;
          show(obj);
        }
    };
    const push2 = items.push;
    intl2 = entry(1126).intl;
    push2(obj2);
  }
  if (!isEntryAdmin) {
    const push3 = items.push;
    const obj3 = {
      label: intl3.string(entry(1126).t.Aen9eh),
      IconComponent: entry(9545).FlagIcon,
      variant: "destructive",
      action: function handleReport() {
          const obj = ReportModals;
          const result = obj.showReportModalForGuildDirectoryEntry(entry);
        }
    };
    intl3 = entry(1126).intl;
    push3(obj3);
  }
  let tmp9 = null;
  if (0 !== items.length) {
    tmp9 = jsx(entry(9335).ContextMenu, {
      items,
      children(ref) {
          ref = ref.ref;
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const IconButton = entry(dependencyMap[15]).IconButton;
          const merged1 = Object.assign(merged);
          const intl = entry(dependencyMap[8]).intl;
          const MoreHorizontalIcon = entry(dependencyMap[16]).MoreHorizontalIcon;
          return <IconButton ref={ref} size="sm" variant="secondary" accessibilityLabel={intl.string(entry(dependencyMap[8]).t.PdRCRg)} icon={<MoreHorizontalIcon size="sm" color={nativeDefault.colors.WHITE} />} />;
        }
    });
  }
  return tmp9;
});
let result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryMoreMenu.tsx");

export default tmp3;
