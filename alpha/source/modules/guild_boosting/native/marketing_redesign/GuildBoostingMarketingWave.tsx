// Module ID: 13104
// Function ID: 13105
// Name: GuildBoostingMarketingWave
// Dependencies: [19, 21, 4528, 576, 7901, 2]
// Exports: default

// Module 13104 (GuildBoostingMarketingWave)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4528 */;
import inlineStylesDefault from "inlineStyles" /* 7901 */;
import noop from "module_19" /* 19 */;

const inlineStyles = tmp(7901);
require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingWave.tsx");

export default function GuildBoostingMarketingWave(arg0) {
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  const obj2 = { fill: "none", viewBox: "0 0 1512 510", preserveAspectRatio: "none" };
  const merged = Object.assign(arg0);
  obj2.children = jsx(inlineStyles.Path, { d: "M1512,25.1c-294.3-135.3-565.2,319.2-855,322.2c-232,2.4-279-101.8-415.5-100.5C149.9,247.7,49.8,311.3,0,355.4 v154.4h1512V25.1z", fill: token });
  return jsx(inlineStylesDefault, { fill: "none", viewBox: "0 0 1512 510", preserveAspectRatio: "none" });
};
