// Module ID: 11510
// Function ID: 89680
// Name: items
// Dependencies: []

// Module 11510 (items)
const GuildPowerupType = require(dependencyMap[0]).GuildPowerupType;
let obj = { type: GuildPowerupType.LEVEL, dependencies: [], features: { features: [] } };
const items = [obj, { type: GuildPowerupType.LEVEL, dependencies: [null], features: { features: [] } }, { type: GuildPowerupType.LEVEL, dependencies: ["<string:385876879>"], features: { features: [] } }];
obj = { type: GuildPowerupType.PERK, dependencies: [] };
const items1 = [obj, { type: GuildPowerupType.PERK, dependencies: [] }, , ];
obj = { ExperimentCacher: false, sectionIndex: true, itemIndex: true, animated: true, viewOffset: true, type: GuildPowerupType.PERK, dependencies: [] };
items1[2] = obj;
const obj1 = { ExperimentCacher: "<string:44579137>", sectionIndex: "<string:24183296>", itemIndex: "<string:1358954496>", animated: "<string:7411271>", viewOffset: "<string:16777216>", type: GuildPowerupType.PERK, dependencies: [] };
items1[3] = obj1;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/premium/powerups/mocks/GuildPowerupMocks.tsx");

export const MOCK_LEVELS = items;
export const MOCK_PERKS = items1;
