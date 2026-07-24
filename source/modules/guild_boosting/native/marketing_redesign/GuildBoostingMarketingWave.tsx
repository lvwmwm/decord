// Module ID: 12566
// Function ID: 97244
// Name: GuildBoostingMarketingWave
// Dependencies: [31, 33, 3834, 689, 8063, 2]
// Exports: default

// Module 12566 (GuildBoostingMarketingWave)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("map").fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingWave.tsx");

export default function GuildBoostingMarketingWave(arg0) {
  let obj = require(3834) /* map */;
  const token = obj.useToken(importDefault(689).colors.BACKGROUND_BASE_LOW);
  let tmp2;
  if (null != token) {
    tmp2 = token;
  }
  obj = { fill: "none", viewBox: "0 0 1512 510", preserveAspectRatio: "none" };
  const merged = Object.assign(arg0);
  obj = { d: "M1512,25.1c-294.3-135.3-565.2,319.2-855,322.2c-232,2.4-279-101.8-415.5-100.5C149.9,247.7,49.8,311.3,0,355.4 v154.4h1512V25.1z", fill: tmp2 };
  obj["children"] = jsx(require(8063) /* inlineStyles */.Path, { d: "M1512,25.1c-294.3-135.3-565.2,319.2-855,322.2c-232,2.4-279-101.8-415.5-100.5C149.9,247.7,49.8,311.3,0,355.4 v154.4h1512V25.1z", fill: tmp2 });
  return jsx(importDefault(8063), { d: "M1512,25.1c-294.3-135.3-565.2,319.2-855,322.2c-232,2.4-279-101.8-415.5-100.5C149.9,247.7,49.8,311.3,0,355.4 v154.4h1512V25.1z", fill: tmp2 });
};
