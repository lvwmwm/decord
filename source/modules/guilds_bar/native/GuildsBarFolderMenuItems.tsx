// Module ID: 14815
// Function ID: 113037
// Name: getGuildFolderMenuItems
// Dependencies: [5, 4970, 653, 9265, 1212, 12967, 1934, 5791, 14816, 2]
// Exports: getGuildFolderMenuItems

// Module 14815 (getGuildFolderMenuItems)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticsSections } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderMenuItems.tsx");

export const getGuildFolderMenuItems = function getGuildFolderMenuItems(guildFolderMenuItems) {
  const _require = guildFolderMenuItems;
  let obj = { IconComponent: _require(9265).EnvelopeIcon };
  const intl = _require(1212).intl;
  obj.label = intl.string(_require(1212).t.e6RscS);
  obj.action = function action() {
    // CreateGeneratorClosureLongIndex (0x67)
    return outer1_2(tmp)();
  };
  const items = [obj, ];
  obj = { IconComponent: _require(5791).SettingsIcon };
  const intl2 = _require(1212).intl;
  obj.label = intl2.string(_require(1212).t.Dx7im5);
  obj.action = function action() {
    // CreateGeneratorClosureLongIndex (0x67)
    return outer1_2(tmp)();
  };
  items[1] = obj;
  return items;
};
