// Module ID: 16990
// Function ID: 16991
// Name: HexagonCampaignDaysLeftBadge
// Dependencies: [19, 21, 16991, 7391, 1113, 4464, 5979, 2]
// Exports: default

// Module 16990 (HexagonCampaignDaysLeftBadge)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef4464 from "module_4464" /* 4464 */;
import ClockIcon from "ClockIcon" /* 5979 */;
import Badge_Badge from "Badge/Badge" /* 7391 */;
import useHexagonCampaignDaysLeft from "useHexagonCampaignDaysLeft" /* 16991 */;
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
  const obj3 = { text: intl.formatToPlainString(_modDef4464["noGK/D"], { days: hexagonCampaignDaysLeft }) };
  const Badge = Badge_Badge.Badge;
  intl = intl2.intl;
  return <Badge type={obj3} variant={str} icon={ClockIcon.ClockIcon} />;
};
