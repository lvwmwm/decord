// Module ID: 15791
// Function ID: 15792
// Name: HexagonCampaignDaysLeftBadge
// Dependencies: [19, 21, 15792, 6942, 1113, 4476, 5501, 2]
// Exports: default

// Module 15791 (HexagonCampaignDaysLeftBadge)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef4476 from "module_4476" /* 4476 */;
import ClockIcon from "ClockIcon" /* 5501 */;
import Badge_Badge from "Badge/Badge" /* 6942 */;
import useHexagonCampaignDaysLeft from "useHexagonCampaignDaysLeft" /* 15792 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignDaysLeftBadge.tsx");

export default function HexagonCampaignDaysLeftBadge(variant) {
  let intl;
  let str = variant.variant;
  const perk = variant.perk;
  if (str === undefined) {
    str = "secondary";
  }
  const obj = useHexagonCampaignDaysLeft;
  const hexagonCampaignDaysLeft = obj.useHexagonCampaignDaysLeft(perk);
  const obj3 = { text: intl.formatToPlainString(_modDef4476["noGK/D"], { days: hexagonCampaignDaysLeft }) };
  const Badge = Badge_Badge.Badge;
  intl = intl2.intl;
  return <Badge type={obj3} variant={str} icon={ClockIcon.ClockIcon} />;
};
