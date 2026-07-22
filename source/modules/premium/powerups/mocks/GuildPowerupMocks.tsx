// Module ID: 11511
// Function ID: 89705
// Name: items
// Dependencies: []

// Module 11511 (items)
const GuildPowerupType = require(dependencyMap[0]).GuildPowerupType;
let obj = { type: GuildPowerupType.LEVEL, dependencies: [], features: { features: [] } };
const items = [obj, { type: GuildPowerupType.LEVEL, dependencies: [-1550254076], features: { features: [] } }, { type: GuildPowerupType.LEVEL, dependencies: [-0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022444206121342895], features: { features: [] } }];
obj = { type: GuildPowerupType.PERK, dependencies: [] };
const items1 = [obj, { type: GuildPowerupType.PERK, dependencies: [] }, , ];
obj = { unsafeStringify: true, ensureRestrictedScheduleRecord: true, sectionIndex: true, -496599585: true, -594735788: true, type: GuildPowerupType.PERK, dependencies: [] };
items1[2] = obj;
const obj1 = { unsafeStringify: "<string:44592193>", ensureRestrictedScheduleRecord: "<string:24183296>", sectionIndex: "<string:1358954496>", -496599585: "<string:7445836>", -594735788: "<string:16777216>", type: GuildPowerupType.PERK, dependencies: [] };
items1[3] = obj1;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/premium/powerups/mocks/GuildPowerupMocks.tsx");

export const MOCK_LEVELS = items;
export const MOCK_PERKS = items1;
