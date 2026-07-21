// Module ID: 15532
// Function ID: 118573
// Name: isGuildSelectable
// Dependencies: []
// Exports: default

// Module 15532 (isGuildSelectable)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/launchpad/native/isGuildSelectable.tsx");

export default function isGuildSelectable(id) {
  const stageInstancesByGuild = id;
  let tmp = !muted.isMuted(id);
  if (tmp) {
    const tmp3 = !closure_2.hasUnread(id);
    let tmp4 = !tmp3;
    if (tmp3) {
      const _Object = Object;
      let someResult = Object.keys(stageInstancesByGuild.getStageInstancesByGuild(id)).length > 0;
      if (!someResult) {
        const allApplicationStreams = allApplicationStreams.getAllApplicationStreams();
        someResult = allApplicationStreams.some((guildId) => guildId.guildId === guildId);
      }
      tmp4 = someResult;
    }
    tmp = tmp4;
  }
  return tmp;
};
