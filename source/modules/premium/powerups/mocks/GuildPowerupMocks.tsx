// Module ID: 11551
// Function ID: 90000
// Name: items
// Dependencies: [4018, 2]

// Module 11551 (items)
import { GuildPowerupType } from "BoostedGuildTiers";

let obj = { type: GuildPowerupType.LEVEL, skuId: "1", title: "Lorem ipsum", cost: 1, dependencies: [] };
obj = { additional_emoji_slots: 50, additional_sound_slots: 50, additional_sticker_slots: 50, total_emoji_slots: 50, total_sound_slots: 50, total_sticker_slots: 50, features: [] };
obj.features = obj;
const items = [obj, , ];
obj = { type: GuildPowerupType.LEVEL, skuId: "2", title: "Lorem ipsum", cost: 1, dependencies: ["1"] };
const obj1 = { additional_emoji_slots: 50, additional_sound_slots: 50, additional_sticker_slots: 50, total_emoji_slots: 50, total_sound_slots: 50, total_sticker_slots: 50, features: [] };
obj.features = obj1;
items[1] = obj;
const obj2 = { type: GuildPowerupType.LEVEL, skuId: "3", title: "Lorem ipsum", cost: 1, dependencies: ["2"] };
const obj3 = { additional_emoji_slots: 50, additional_sound_slots: 50, additional_sticker_slots: 50, total_emoji_slots: 50, total_sound_slots: 50, total_sticker_slots: 50, features: [] };
obj2.features = obj3;
items[2] = obj2;
const obj4 = { type: GuildPowerupType.PERK, skuId: "4", title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat posuere lao", cost: 1, dependencies: [] };
const items1 = [obj4, , , ];
const obj5 = { type: GuildPowerupType.PERK, skuId: "5", title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat posuere lao", cost: 1, dependencies: [] };
items1[1] = obj5;
const obj6 = { type: GuildPowerupType.PERK, skuId: "6", title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat posuere lao", cost: 1, dependencies: [] };
items1[2] = obj6;
const obj7 = { type: GuildPowerupType.PERK, skuId: "7", title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat posuere lao", cost: 1, dependencies: [] };
items1[3] = obj7;
const result = require("set").fileFinishedImporting("modules/premium/powerups/mocks/GuildPowerupMocks.tsx");

export const MOCK_LEVELS = items;
export const MOCK_PERKS = items1;
