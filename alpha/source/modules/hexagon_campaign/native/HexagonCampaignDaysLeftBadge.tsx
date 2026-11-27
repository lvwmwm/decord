// Module ID: 16105
// Function ID: 16106
// Name: HexagonCampaignDaysLeftBadge
// Dependencies: [19, 21, 16106, 6159, 1112, 4663, 5752, 2]
// Exports: default

// Module 16105 (HexagonCampaignDaysLeftBadge)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import _modDef4663 from "module_4663" /* 4663 */;
import ClockIcon from "ClockIcon" /* 5752 */;
import Badge_Badge from "Badge/Badge" /* 6159 */;
import useHexagonCampaignDaysLeft from "useHexagonCampaignDaysLeft" /* 16106 */;
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
  const obj3 = { text: intl.formatToPlainString(_modDef4663["noGK/D"], { days: hexagonCampaignDaysLeft }) };
  const Badge = Badge_Badge.Badge;
  intl = intl2.intl;
  return <Badge type={obj3} variant={str} icon={ClockIcon.ClockIcon} />;
};
