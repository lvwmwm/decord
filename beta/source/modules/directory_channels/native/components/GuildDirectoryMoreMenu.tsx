// Module ID: 14127
// Function ID: 14128
// Name: GuildDirectoryMoreMenu
// Dependencies: [19, 21, 14121, 14128, 6123, 1113, 14130, 1187, 8455, 10383, 5894, 10237, 10029, 8131, 9879, 575, 2]
// Exports: default

// Module 14127 (GuildDirectoryMoreMenu)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6123 */;
import ReportModals from "ReportModals" /* 8455 */;
import useCanManageGuildDirectoryEntryDefault from "useCanManageGuildDirectoryEntry" /* 14121 */;
import GuildDirectoryEditDescriptionModalActionCreatorsDefault from "GuildDirectoryEditDescriptionModalActionCreators" /* 14128 */;
import GuildDirectoryActionCreatorsAll from "GuildDirectoryActionCreators" /* 14130 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryMoreMenu.tsx");

export default function GuildDirectoryMoreMenu(entry) {
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
      label: intl.string(entry(1113).t.XnuOvN),
      IconComponent: entry(10383).PencilIcon,
      action: function handleEdit() {
          const obj = GuildDirectoryEditDescriptionModalActionCreatorsDefault;
          const obj2 = { entry };
          obj.open(obj2);
        }
    };
    const push = items.push;
    intl = entry(1113).intl;
    push(obj);
  }
  if (canRemove) {
    let obj2 = {
      label: intl2.string(entry(1113).t.KUxYWH),
      IconComponent: entry(5894).TrashIcon,
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
              const obj = closure_1_1(closure_1_3[4]);
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
    intl2 = entry(1113).intl;
    push2(obj2);
  }
  if (!isEntryAdmin) {
    const push3 = items.push;
    const obj3 = {
      label: intl3.string(entry(1113).t.Aen9eh),
      IconComponent: entry(10237).FlagIcon,
      variant: "destructive",
      action: function handleReport() {
          const obj = ReportModals;
          const result = obj.showReportModalForGuildDirectoryEntry(entry);
        }
    };
    intl3 = entry(1113).intl;
    push3(obj3);
  }
  let tmp9 = null;
  if (0 !== items.length) {
    tmp9 = jsx(entry(10029).ContextMenu, {
      items,
      children(ref) {
          ref = ref.ref;
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const IconButton = entry(dependencyMap[13]).IconButton;
          const merged1 = Object.assign(merged);
          const intl = entry(dependencyMap[5]).intl;
          const MoreHorizontalIcon = entry(dependencyMap[14]).MoreHorizontalIcon;
          return <IconButton ref={ref} size="sm" variant="secondary" accessibilityLabel={intl.string(entry(dependencyMap[5]).t.PdRCRg)} icon={<MoreHorizontalIcon size="sm" color={nativeDefault.colors.WHITE} />} />;
        }
    });
  }
  return tmp9;
};
