// Module ID: 10990
// Function ID: 85521
// Name: KickConfirmModal
// Dependencies: []
// Exports: default

// Module 10990 (KickConfirmModal)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_moderation/native/KickConfirmModal.tsx");

export default function KickConfirmModal(onBeforeGoBack) {
  ({ guildId: closure_0, userId: closure_1 } = onBeforeGoBack);
  const dependencyMap = importDefault(dependencyMap[2])({ onBeforeGoBack: onBeforeGoBack.cancelButtonCallback }).onGoBack;
  const obj = { screenKey: "kick" };
  const intl = arg1(dependencyMap[4]).intl;
  obj.title = intl.string(arg1(dependencyMap[4]).t.R3QeLQ);
  obj.render = function render() {
    return callback2(callback(onGoBack[5]), { onKick: onGoBack, guildId: closure_0, userId: callback });
  };
  return jsx(importDefault(dependencyMap[3]), obj);
};
