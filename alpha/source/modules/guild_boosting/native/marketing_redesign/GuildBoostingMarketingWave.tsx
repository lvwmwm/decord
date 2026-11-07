// Module ID: 15747
// Function ID: 15748
// Name: GuildBoostingMarketingWave
// Dependencies: [19, 21, 5724, 575, 8101, 2]
// Exports: default

// Module 15747 (GuildBoostingMarketingWave)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useToken from "useToken" /* 5724 */;
import inlineStyles from "inlineStyles" /* 8101 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingWave.tsx");

export default function GuildBoostingMarketingWave(arg0) {
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  inlineStylesDefault;
  const merged = Object.assign(arg0);
  return <tmp3Result fill="none" viewBox="0 0 1512 510" preserveAspectRatio="none">{jsx(inlineStyles.Path, { d: "M1512,25.1c-294.3-135.3-565.2,319.2-855,322.2c-232,2.4-279-101.8-415.5-100.5C149.9,247.7,49.8,311.3,0,355.4 v154.4h1512V25.1z", fill: token })}</tmp3Result>;
};
