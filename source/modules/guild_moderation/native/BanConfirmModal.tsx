// Module ID: 10987
// Function ID: 85505
// Name: BanConfirmModal
// Dependencies: [297205760, 282853376, 720633856, 441581568, 250871808, 361431040, 131072]
// Exports: default

// Module 10987 (BanConfirmModal)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_moderation/native/BanConfirmModal.tsx");

export default function BanConfirmModal(onBeforeGoBack) {
  ({ guildId: closure_0, userId: closure_1 } = onBeforeGoBack);
  const dependencyMap = importDefault(dependencyMap[2])({ onBeforeGoBack: onBeforeGoBack.cancelButtonCallback }).onGoBack;
  const obj = { screenKey: "ban" };
  const intl = arg1(dependencyMap[4]).intl;
  obj.title = intl.string(arg1(dependencyMap[4]).t.R3QeLQ);
  obj.render = function render() {
    return callback2(callback(onGoBack[5]), { onBan: onGoBack, guildId: closure_0, userId: callback });
  };
  return jsx(importDefault(dependencyMap[3]), obj);
};
