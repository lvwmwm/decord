// Module ID: 16279
// Function ID: 126737
// Name: GuildSettingsServerTagBadgeGrid
// Dependencies: [31, 27, 7632, 33, 689, 4130, 16280, 11512, 4541, 4126, 1212, 16281, 16282, 12922, 5514, 2]
// Exports: default

// Module 16279 (GuildSettingsServerTagBadgeGrid)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { GuildTagBadgeSize } from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_7;
let closure_8;
const require = arg1;
({ Pressable: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = { grid: _createForOfIteratorHelperLoose };
_createForOfIteratorHelperLoose = { flexDirection: "row", flexWrap: "wrap", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj1 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_16, padding: require("_createForOfIteratorHelperLoose").space.PX_16, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE };
_createForOfIteratorHelperLoose.upsellCard = obj1;
let obj2 = { width: 128, flexDirection: "row", flexWrap: "wrap", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.upsellPreview = obj2;
_createForOfIteratorHelperLoose.upsellText = { flex: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("items").fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagBadgeGrid.tsx");

export default function GuildSettingsServerTagBadgeGrid(guildId) {
  let result;
  let dependencyMap;
  let importDefault;
  let lockedBadges;
  let unlockedBadges;
  guildId = guildId.guildId;
  ({ selectedBadge: importDefault, onSelectBadge: dependencyMap, cellSize: result } = guildId);
  const tmp = _createForOfIteratorHelperLoose();
  ({ unlockedBadges, lockedBadges } = importDefault(16280)());
  const items = [guildId];
  const callback = React.useCallback(() => {
    outer1_1(outer1_2[7])({ guildId, autoOpenPerkId: "guildTagsBadgePacks" });
  }, items);
  let obj = { spacing: importDefault(689).space.PX_8 };
  obj = { variant: "text-md/medium", color: "text-subtle", accessibilityRole: "header" };
  const intl = guildId(1212).intl;
  obj.children = intl.string(guildId(1212).t.wRnfnY);
  const items1 = [callback(guildId(4126).Text, obj), , ];
  obj = {
    accessibilityRole: "radiogroup",
    style: tmp.grid,
    children: unlockedBadges.map((badge) => {
      let closure_0 = badge;
      let obj = {
        size: result,
        selected: badge.kind === closure_1,
        accessibilityLabel: outer1_1(outer1_2[12])(badge.kind),
        onPress() {
          return outer1_2(badge.kind);
        }
      };
      obj = { badge: badge.kind, width: outer1_6.SIZE_32, height: outer1_6.SIZE_32 };
      obj.children = outer1_7(guildId(outer1_2[13]).GuildBadge, obj);
      return outer1_7(outer1_1(outer1_2[11]), obj, badge.kind);
    })
  };
  items1[1] = callback(closure_5, obj);
  let tmp5 = lockedBadges.length > 0;
  if (tmp5) {
    const obj1 = { accessibilityRole: "button" };
    const intl2 = guildId(1212).intl;
    obj1.accessibilityLabel = intl2.string(guildId(1212).t.U5p3GZ);
    obj1.onPress = callback;
    obj1.style = tmp.upsellCard;
    const obj2 = { style: tmp.upsellPreview };
    const substr = lockedBadges.slice(0, 10);
    obj2.children = substr.map((kind) => {
      const obj = { badge: kind.kind, width: 21, height: 21 };
      return outer1_7(guildId(outer1_2[13]).GuildBadge, obj, kind.kind);
    });
    const items2 = [callback(closure_5, obj2), , ];
    const obj3 = { variant: "text-md/medium", color: "text-subtle", style: tmp.upsellText };
    const intl3 = guildId(1212).intl;
    obj3.children = intl3.string(guildId(1212).t.U5p3GZ);
    items2[1] = callback(guildId(4126).Text, obj3);
    const obj4 = { size: "md", color: importDefault(689).colors.ICON_SUBTLE };
    items2[2] = callback(guildId(5514).ChevronSmallRightIcon, obj4);
    obj1.children = items2;
    tmp5 = callback2(closure_4, obj1);
  }
  items1[2] = tmp5;
  obj.children = items1;
  return callback2(guildId(4541).Stack, obj);
};
