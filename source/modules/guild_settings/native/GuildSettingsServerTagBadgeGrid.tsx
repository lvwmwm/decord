// Module ID: 16154
// Function ID: 124522
// Name: GuildSettingsServerTagBadgeGrid
// Dependencies: [4294967295, 0, 0, 0]
// Exports: default

// Module 16154 (GuildSettingsServerTagBadgeGrid)
import result from "result";
import { GuildTagBadgeSize } from "result";
import result from "result";

let closure_3 = importAll(dependencyMap[0]);
({ Pressable: closure_4, View: closure_5 } = result);
({ jsx: closure_7, jsxs: closure_8 } = result);
let obj = arg1(dependencyMap[5]);
obj = { grid: obj };
obj = { -9223372036854775808: null, 7741: null, gap: importDefault(dependencyMap[4]).space.PX_8 };
const obj1 = { "Null": 7, "Null": 370, gap: importDefault(dependencyMap[4]).space.PX_16, padding: importDefault(dependencyMap[4]).space.PX_16, borderRadius: importDefault(dependencyMap[4]).radii.md, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_SUBTLE };
obj.upsellCard = obj1;
const obj2 = { "Null": "selectedOptions", "Null": "ary", "Null": "SAFETY_SEND_FRIEND_REQUESTS_MUTUAL_FRIENDS", gap: importDefault(dependencyMap[4]).space.PX_4 };
obj.upsellPreview = obj2;
obj.upsellText = { flex: 1 };
let closure_9 = obj.createStyles(obj);
result = arg1(dependencyMap[15]).fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagBadgeGrid.tsx");

export default function GuildSettingsServerTagBadgeGrid(guildId) {
  let lockedBadges;
  let unlockedBadges;
  guildId = guildId.guildId;
  const arg1 = guildId;
  ({ selectedBadge: closure_1, onSelectBadge: closure_2, cellSize: closure_3 } = guildId);
  const tmp = callback3();
  ({ unlockedBadges, lockedBadges } = importDefault(dependencyMap[6])());
  const items = [guildId];
  const callback = React.useCallback(() => {
    callback(closure_2[7])({ guildId, autoOpenPerkId: "guildTagsBadgePacks" });
  }, items);
  let obj = { spacing: importDefault(dependencyMap[4]).space.PX_8 };
  obj = { handleMessageFocus: true, enableHome: "md", afterMs: "secondary" };
  const intl = arg1(dependencyMap[10]).intl;
  obj.children = intl.string(arg1(dependencyMap[10]).t.wRnfnY);
  const items1 = [callback(arg1(dependencyMap[9]).Text, obj), , ];
  obj = {
    accessibilityRole: "radiogroup",
    style: tmp.grid,
    children: unlockedBadges.map((badge) => {
      const guildId = badge;
      let obj = {
        size: closure_3,
        selected: badge.kind === callback,
        accessibilityLabel: callback(closure_2[12])(badge.kind),
        onPress() {
          return callback(arg0.kind);
        }
      };
      obj = { badge: badge.kind, width: closure_6.SIZE_32, height: closure_6.SIZE_32 };
      obj.children = callback2(guildId(closure_2[13]).GuildBadge, obj);
      return callback2(callback(closure_2[11]), obj, badge.kind);
    })
  };
  items1[1] = callback(closure_5, obj);
  let tmp5 = lockedBadges.length > 0;
  if (tmp5) {
    const obj1 = { accessibilityRole: "button" };
    const intl2 = arg1(dependencyMap[10]).intl;
    obj1.accessibilityLabel = intl2.string(arg1(dependencyMap[10]).t.U5p3GZ);
    obj1.onPress = callback;
    obj1.style = tmp.upsellCard;
    const obj2 = { style: tmp.upsellPreview };
    const substr = lockedBadges.slice(0, 10);
    obj2.children = substr.map((badge) => callback2(guildId(closure_2[13]).GuildBadge, { badge: badge.kind }, badge.kind));
    const items2 = [callback(closure_5, obj2), , ];
    const obj3 = { hasMaxConnections: true, isBoostOnlySubscription: "md", style: tmp.upsellText };
    const intl3 = arg1(dependencyMap[10]).intl;
    obj3.children = intl3.string(arg1(dependencyMap[10]).t.U5p3GZ);
    items2[1] = callback(arg1(dependencyMap[9]).Text, obj3);
    const obj4 = { size: "md", color: importDefault(dependencyMap[4]).colors.ICON_SUBTLE };
    items2[2] = callback(arg1(dependencyMap[14]).ChevronSmallRightIcon, obj4);
    obj1.children = items2;
    tmp5 = callback2(closure_4, obj1);
  }
  items1[2] = tmp5;
  obj.children = items1;
  return callback2(arg1(dependencyMap[8]).Stack, obj);
};
