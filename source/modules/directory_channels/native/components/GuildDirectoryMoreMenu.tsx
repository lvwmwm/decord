// Module ID: 10043
// Function ID: 77594
// Name: GuildDirectoryMoreMenu
// Dependencies: [31, 33, 10037, 10044, 4471, 1212, 10046, 1273, 7600, 9106, 4089, 9417, 9302, 7771, 8968, 689, 2]
// Exports: default

// Module 10043 (GuildDirectoryMoreMenu)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("useCanManageGuildDirectoryEntry").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryMoreMenu.tsx");

export default function GuildDirectoryMoreMenu(entry) {
  let canRemove;
  let isEntryAdmin;
  entry = entry.entry;
  const tmp = importDefault(10037)(entry);
  const items = [];
  ({ isEntryAdmin, canRemove } = tmp);
  if (tmp.canEdit) {
    let obj = {};
    let intl = entry(1212).intl;
    obj.label = intl.string(entry(1212).t.XnuOvN);
    obj.IconComponent = entry(9106).PencilIcon;
    obj.action = function handleEdit() {
      let obj = outer1_1(outer1_3[3]);
      obj = { entry };
      obj.open(obj);
    };
    items.push(obj);
  }
  if (canRemove) {
    obj = {};
    let intl2 = entry(1212).intl;
    obj.label = intl2.string(entry(1212).t.KUxYWH);
    obj.IconComponent = entry(4089).TrashIcon;
    obj.variant = "destructive";
    obj.action = function handleRemove() {
      let obj = outer1_1(outer1_3[4]);
      obj = {};
      const intl = entry(outer1_3[5]).intl;
      obj.title = intl.string(entry(outer1_3[5]).t.KUxYWH);
      const intl2 = entry(outer1_3[5]).intl;
      obj = { guildName: entry.name };
      obj.body = intl2.formatToPlainString(entry(outer1_3[5]).t["/5y0uV"], obj);
      obj.onConfirm = function onConfirm() {
        const result = outer2_2(outer2_3[6]).removeDirectoryGuildEntry(outer1_0.channelId, outer1_0.guildId);
      };
      obj.confirmColor = entry(outer1_3[7]).ButtonColors.RED;
      const intl3 = entry(outer1_3[5]).intl;
      obj.confirmText = intl3.string(entry(outer1_3[5]).t.N86XcP);
      const intl4 = entry(outer1_3[5]).intl;
      obj.cancelText = intl4.string(entry(outer1_3[5]).t["ETE/oC"]);
      obj.onCancel = function onCancel() {
        outer2_1(outer2_3[4]).close();
      };
      obj.show(obj);
    };
    items.push(obj);
  }
  if (!isEntryAdmin) {
    obj = {};
    let intl3 = entry(1212).intl;
    obj.label = intl3.string(entry(1212).t.Aen9eh);
    obj.IconComponent = entry(9417).FlagIcon;
    obj.variant = "destructive";
    obj.action = function handleReport() {
      const result = entry(outer1_3[8]).showReportModalForGuildDirectoryEntry(entry);
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
          const intl = entry(outer1_3[5]).intl;
          obj["accessibilityLabel"] = intl.string(entry(outer1_3[5]).t.PdRCRg);
          obj = { size: "sm", color: outer1_1(outer1_3[15]).colors.WHITE };
          obj["icon"] = outer1_4(entry(outer1_3[14]).MoreHorizontalIcon, obj);
          return outer1_4(entry(outer1_3[13]).IconButton, obj);
        }
    };
    tmp11 = jsx(entry(9302).ContextMenu, {
      items,
      children(ref) {
          let obj = Object.create(null);
          obj.ref = 0;
          const merged = Object.assign(ref, obj);
          obj = { ref: ref.ref };
          const merged1 = Object.assign(merged);
          obj["size"] = "sm";
          obj["variant"] = "secondary";
          const intl = entry(outer1_3[5]).intl;
          obj["accessibilityLabel"] = intl.string(entry(outer1_3[5]).t.PdRCRg);
          obj = { size: "sm", color: outer1_1(outer1_3[15]).colors.WHITE };
          obj["icon"] = outer1_4(entry(outer1_3[14]).MoreHorizontalIcon, obj);
          return outer1_4(entry(outer1_3[13]).IconButton, obj);
        }
    });
  }
  return tmp11;
};
