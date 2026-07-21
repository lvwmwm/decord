// Module ID: 10034
// Function ID: 77541
// Name: GuildDirectoryMoreMenu
// Dependencies: []
// Exports: default

// Module 10034 (GuildDirectoryMoreMenu)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryMoreMenu.tsx");

export default function GuildDirectoryMoreMenu(entry) {
  let canRemove;
  let isEntryAdmin;
  entry = entry.entry;
  const arg1 = entry;
  const tmp = importDefault(dependencyMap[2])(entry);
  const items = [];
  ({ isEntryAdmin, canRemove } = tmp);
  if (tmp.canEdit) {
    let obj = {};
    const intl = arg1(dependencyMap[5]).intl;
    obj.label = intl.string(arg1(dependencyMap[5]).t.XnuOvN);
    obj.IconComponent = arg1(dependencyMap[9]).PencilIcon;
    obj.action = function handleEdit() {
      let obj = callback(closure_3[3]);
      obj = { entry };
      obj.open(obj);
    };
    items.push(obj);
  }
  if (canRemove) {
    obj = {};
    const intl2 = arg1(dependencyMap[5]).intl;
    obj.label = intl2.string(arg1(dependencyMap[5]).t.KUxYWH);
    obj.IconComponent = arg1(dependencyMap[10]).TrashIcon;
    obj.variant = "destructive";
    obj.action = function handleRemove() {
      let obj = callback(closure_3[4]);
      obj = {};
      const intl = entry(closure_3[5]).intl;
      obj.title = intl.string(entry(closure_3[5]).t.KUxYWH);
      const intl2 = entry(closure_3[5]).intl;
      obj = { guildName: entry.name };
      obj.body = intl2.formatToPlainString(entry(closure_3[5]).t./5y0uV, obj);
      obj.onConfirm = function onConfirm() {
        const result = callback2(closure_3[6]).removeDirectoryGuildEntry(closure_0.channelId, closure_0.guildId);
      };
      obj.confirmColor = entry(closure_3[7]).ButtonColors.RED;
      const intl3 = entry(closure_3[5]).intl;
      obj.confirmText = intl3.string(entry(closure_3[5]).t.N86XcP);
      const intl4 = entry(closure_3[5]).intl;
      obj.cancelText = intl4.string(entry(closure_3[5]).t.ETE/oC);
      obj.onCancel = function onCancel() {
        callback(closure_3[4]).close();
      };
      obj.show(obj);
    };
    items.push(obj);
  }
  if (!isEntryAdmin) {
    obj = {};
    const intl3 = arg1(dependencyMap[5]).intl;
    obj.label = intl3.string(arg1(dependencyMap[5]).t.Aen9eh);
    obj.IconComponent = arg1(dependencyMap[11]).FlagIcon;
    obj.variant = "destructive";
    obj.action = function handleReport() {
      const result = entry(closure_3[8]).showReportModalForGuildDirectoryEntry(entry);
    };
    items.push(obj);
  }
  let tmp11 = null;
  if (0 !== items.length) {
    const obj1 = {
      items,
      children(ref) {
          let obj = Object.create(null);
          obj.ref = 0;
          const merged = Object.assign(ref, obj);
          obj = { ref: ref.ref };
          const merged1 = Object.assign(merged);
          obj["size"] = "sm";
          obj["variant"] = "secondary";
          const intl = entry(closure_3[5]).intl;
          obj["accessibilityLabel"] = intl.string(entry(closure_3[5]).t.PdRCRg);
          obj = { size: "sm", color: callback(closure_3[15]).colors.WHITE };
          obj["icon"] = callback2(entry(closure_3[14]).MoreHorizontalIcon, obj);
          return callback2(entry(closure_3[13]).IconButton, obj);
        }
    };
    tmp11 = jsx(arg1(dependencyMap[12]).ContextMenu, obj1);
  }
  return tmp11;
};
